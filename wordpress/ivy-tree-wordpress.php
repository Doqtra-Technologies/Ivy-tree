<?php
/**
 * Plugin Name: Ivy Tree Headless Settings
 * Description: Registers site-wide editable copy and fields for the Ivy Tree React frontend via Carbon Fields. Exposes fields under siteSettings.* in WPGraphQL.
 * Version: 1.0.0
 * Author: Antigravity AI
 *
 * Requires: WPGraphQL and Carbon Fields to be active.
 */

if (!defined('ABSPATH')) exit;

// Allow non-administrators with edit_pages capability to access settings
add_filter('carbon_fields_theme_options_container_admin_only_access', '__return_false');

// -----------------------------------------------------------------------------
// 1. Register Theme Options Fields in Admin Dashboard
// -----------------------------------------------------------------------------

add_action('carbon_fields_register_fields', function () {
    if (!class_exists('\Carbon_Fields\Container\Container')) return;

    $Container = '\Carbon_Fields\Container\Container';
    $Field     = '\Carbon_Fields\Field\Field';

    $Container::make('theme_options', __('Ivy Tree Settings'))
        ->set_icon('dashicons-admin-home')
        ->where('current_user_capability', '=', 'edit_pages')
        
        // ---------- General Options ----------
        ->add_tab(__('General'), [
            $Field::make('image', 'ivy_logo', __('Website Logo'))
                ->set_value_type('url'),
            $Field::make('text', 'ivy_reservation_url', __('OpenTable Reservation Link'))
                ->set_default_value('https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208')
                ->help_text('Link for the Reservation buttons across the site.'),
        ])
        
        // ---------- Hero Options ----------
        ->add_tab(__('Hero Section'), [
            $Field::make('text', 'ivy_hero_video_url', __('Hero Loop Video URL'))
                ->help_text('Full URL to the MP4 file (can be uploaded to WP Media library).')
                ->set_default_value('/hero-video.mp4'),
            $Field::make('text', 'ivy_hero_heading', __('Hero Heading'))
                ->set_default_value('Experience the vibrant essence of Mediterranean dining'),
            $Field::make('textarea', 'ivy_hero_subheading', __('Hero Subheading'))
                ->set_rows(3)
                ->set_default_value('Rustiq: A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.'),
        ])
        
        // ---------- Semi-Private Rooms ----------
        ->add_tab(__('Semi Private Rooms'), [
            $Field::make('text', 'ivy_semi_private_heading', __('Section Heading'))
                ->set_default_value('Semi Private'),
            $Field::make('textarea', 'ivy_semi_private_text', __('Section Intro Text'))
                ->set_rows(3)
                ->set_default_value('Dine in our exclusive semi private Rooms at Ivy Tree. Semi private here is a luxurious and indulgent experience.'),
            
            $Field::make('complex', 'ivy_rooms', __('Rooms List'))
                ->add_fields([
                    $Field::make('text', 'id', __('Room ID (lowercase, unique)'))->set_required(true),
                    $Field::make('text', 'name', __('Room Name'))->set_required(true),
                    $Field::make('text', 'capacity', __('Capacity'))->set_required(true),
                    $Field::make('textarea', 'description', __('Description'))->set_rows(3),
                    $Field::make('image', 'image', __('Room Image'))->set_value_type('url'),
                ])
                ->set_header_template('<%- name %> (Capacity: <%- capacity %>)')
        ])
        
        // ---------- Cocktail Bar ----------
        ->add_tab(__('Cocktail Bar'), [
            $Field::make('text', 'ivy_cocktail_heading', __('Cocktail Bar Heading'))
                ->set_default_value('Cocktail Bar'),
            $Field::make('textarea', 'ivy_cocktail_text', __('Cocktail Bar Description'))
                ->set_rows(4)
                ->set_default_value('Enjoy expertly crafted cocktails at our upstairs Cocktail Bar at Ivy Tree. A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.'),
            $Field::make('image', 'ivy_cocktail_image', __('Cocktail Bar Image'))
                ->set_value_type('url'),
        ])
        
        // ---------- What's On / Events ----------
        ->add_tab(__('What\'s On (Events)'), [
            $Field::make('text', 'ivy_whats_on_heading', __('Section Heading'))
                ->set_default_value('What\'s On'),
            $Field::make('text', 'ivy_whats_on_subtitle', __('Section Subtitle'))
                ->set_default_value('Events & Promotions'),
            
            $Field::make('complex', 'ivy_events', __('Events List'))
                ->add_fields([
                    $Field::make('text', 'id', __('Event ID (lowercase, unique)'))->set_required(true),
                    $Field::make('text', 'title', __('Event Title'))->set_required(true),
                    $Field::make('textarea', 'description', __('Description'))->set_rows(3),
                    $Field::make('file', 'pdf_file', __('Menu / PDF Flyer'))->set_value_type('url'),
                ])
                ->set_header_template('<%- title %>')
        ])
        
        // ---------- Contact Info ----------
        ->add_tab(__('Contact Info'), [
            $Field::make('text', 'ivy_contact_address', __('Physical Address'))
                ->set_default_value('113-117 South St, Romford RM1 1NX'),
            $Field::make('text', 'ivy_contact_phone', __('Phone Number'))
                ->set_default_value('01708 208566'),
            $Field::make('text', 'ivy_contact_email', __('Email Address'))
                ->set_default_value('info.theivytree@gmail.com'),
            $Field::make('text', 'ivy_contact_gmaps_url', __('Google Maps Search URL'))
                ->set_default_value('https://www.google.com/maps/search/?api=1&query=113-117+South+St+Romford+RM1+1NX'),
        ])
        
        // ---------- Footer Tab ----------
        ->add_tab(__('Footer & Hours'), [
            $Field::make('complex', 'ivy_opening_hours', __('Weekly Opening Hours'))
                ->add_fields([
                    $Field::make('text', 'day', __('Day'))->set_required(true),
                    $Field::make('text', 'hours', __('Hours (e.g. 10 am – 12 am)'))->set_required(true),
                ])
                ->set_header_template('<%- day %>: <%- hours %>'),
            
            $Field::make('text', 'ivy_social_ig', __('Instagram Link'))
                ->set_default_value('https://www.instagram.com/ivytreeessex/'),
            $Field::make('text', 'ivy_social_fb', __('Facebook Page Link'))
                ->set_default_value('https://www.facebook.com/profile.php?id=61581751713918'),
            $Field::make('text', 'ivy_social_tiktok', __('TikTok Discover Link'))
                ->set_default_value('https://www.tiktok.com/discover/ivy-tree-romford'),
        ]);
});

// -----------------------------------------------------------------------------
// 2. Expose Theme Settings to WPGraphQL Schema
// -----------------------------------------------------------------------------

add_action('graphql_register_types', function () {

    // Define child object shapes
    register_graphql_object_type('IvyHeroSettings', [
        'fields' => [
            'videoUrl'   => ['type' => 'String'],
            'heading'    => ['type' => 'String'],
            'subheading' => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvySemiPrivateIntro', [
        'fields' => [
            'heading' => ['type' => 'String'],
            'text'    => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvyRoomItem', [
        'fields' => [
            'id'          => ['type' => 'String'],
            'name'        => ['type' => 'String'],
            'capacity'    => ['type' => 'String'],
            'description' => ['type' => 'String'],
            'imageUrl'    => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvyCocktailSettings', [
        'fields' => [
            'heading'  => ['type' => 'String'],
            'text'     => ['type' => 'String'],
            'imageUrl' => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvyEventItem', [
        'fields' => [
            'id'          => ['type' => 'String'],
            'title'       => ['type' => 'String'],
            'description' => ['type' => 'String'],
            'pdfUrl'      => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvyWhatsOnSettings', [
        'fields' => [
            'heading'  => ['type' => 'String'],
            'subtitle' => ['type' => 'String'],
            'events'   => ['type' => ['list_of' => 'IvyEventItem']],
        ]
    ]);

    register_graphql_object_type('IvyContactSettings', [
        'fields' => [
            'address'  => ['type' => 'String'],
            'phone'    => ['type' => 'String'],
            'email'    => ['type' => 'String'],
            'gmapsUrl' => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvyOpeningHoursItem', [
        'fields' => [
            'day'   => ['type' => 'String'],
            'hours' => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvySocialLinks', [
        'fields' => [
            'instagram' => ['type' => 'String'],
            'facebook'  => ['type' => 'String'],
            'tiktok'    => ['type' => 'String'],
        ]
    ]);

    register_graphql_object_type('IvyFooterSettings', [
        'fields' => [
            'openingHours' => ['type' => ['list_of' => 'IvyOpeningHoursItem']],
            'socialLinks'  => ['type' => 'IvySocialLinks'],
        ]
    ]);

    // Define main query object root
    register_graphql_object_type('IvySiteSettings', [
        'description' => 'Site-wide editable configurations for the Ivy Tree headless site.',
        'fields' => [
            'logoUrl'          => ['type' => 'String'],
            'reservationUrl'   => ['type' => 'String'],
            'hero'             => ['type' => 'IvyHeroSettings'],
            'semiPrivateIntro' => ['type' => 'IvySemiPrivateIntro'],
            'rooms'            => ['type' => ['list_of' => 'IvyRoomItem']],
            'cocktailBar'      => ['type' => 'IvyCocktailSettings'],
            'whatsOn'          => ['type' => 'IvyWhatsOnSettings'],
            'contact'          => ['type' => 'IvyContactSettings'],
            'footer'           => ['type' => 'IvyFooterSettings'],
        ]
    ]);

    // Register root query endpoint: siteSettings
    register_graphql_field('RootQuery', 'siteSettings', [
        'type'    => 'IvySiteSettings',
        'resolve' => function () {
            // Fetch Rooms List Complex
            $raw_rooms = carbon_get_theme_option('ivy_rooms') ?: [];
            $rooms = array_map(function($room) {
                return [
                    'id'          => isset($room['id']) ? $room['id'] : '',
                    'name'        => isset($room['name']) ? $room['name'] : '',
                    'capacity'    => isset($room['capacity']) ? $room['capacity'] : '',
                    'description' => isset($room['description']) ? $room['description'] : '',
                    'imageUrl'    => isset($room['image']) ? $room['image'] : '',
                ];
            }, $raw_rooms);

            // Fetch Events List Complex
            $raw_events = carbon_get_theme_option('ivy_events') ?: [];
            $events = array_map(function($evt) {
                return [
                    'id'          => isset($evt['id']) ? $evt['id'] : '',
                    'title'       => isset($evt['title']) ? $evt['title'] : '',
                    'description' => isset($evt['description']) ? $evt['description'] : '',
                    'pdfUrl'      => isset($evt['pdf_file']) ? $evt['pdf_file'] : '',
                ];
            }, $raw_events);

            // Fetch Opening Hours Complex
            $raw_hours = carbon_get_theme_option('ivy_opening_hours') ?: [];
            $hours = array_map(function($hr) {
                return [
                    'day'   => isset($hr['day']) ? $hr['day'] : '',
                    'hours' => isset($hr['hours']) ? $hr['hours'] : '',
                ];
            }, $raw_hours);

            return [
                'logoUrl'        => carbon_get_theme_option('ivy_logo') ?: null,
                'reservationUrl' => carbon_get_theme_option('ivy_reservation_url') ?: null,
                
                'hero' => [
                    'videoUrl'   => carbon_get_theme_option('ivy_hero_video_url') ?: null,
                    'heading'    => carbon_get_theme_option('ivy_hero_heading') ?: null,
                    'subheading' => carbon_get_theme_option('ivy_hero_subheading') ?: null,
                ],
                
                'semiPrivateIntro' => [
                    'heading' => carbon_get_theme_option('ivy_semi_private_heading') ?: null,
                    'text'    => carbon_get_theme_option('ivy_semi_private_text') ?: null,
                ],
                
                'rooms' => $rooms,
                
                'cocktailBar' => [
                    'heading'  => carbon_get_theme_option('ivy_cocktail_heading') ?: null,
                    'text'     => carbon_get_theme_option('ivy_cocktail_text') ?: null,
                    'imageUrl' => carbon_get_theme_option('ivy_cocktail_image') ?: null,
                ],
                
                'whatsOn' => [
                    'heading'  => carbon_get_theme_option('ivy_whats_on_heading') ?: null,
                    'subtitle' => carbon_get_theme_option('ivy_whats_on_subtitle') ?: null,
                    'events'   => $events,
                ],
                
                'contact' => [
                    'address'  => carbon_get_theme_option('ivy_contact_address') ?: null,
                    'phone'    => carbon_get_theme_option('ivy_contact_phone') ?: null,
                    'email'    => carbon_get_theme_option('ivy_contact_email') ?: null,
                    'gmapsUrl' => carbon_get_theme_option('ivy_contact_gmaps_url') ?: null,
                ],
                
                'footer' => [
                    'openingHours' => $hours,
                    'socialLinks'  => [
                        'instagram' => carbon_get_theme_option('ivy_social_ig') ?: null,
                        'facebook'  => carbon_get_theme_option('ivy_social_fb') ?: null,
                        'tiktok'    => carbon_get_theme_option('ivy_social_tiktok') ?: null,
                    ]
                ]
            ];
        }
    ]);
});
