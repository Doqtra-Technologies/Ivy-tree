import { mockData } from '@/mockData';

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getSiteSettings() {
  if (!WP_API_URL) {
    return mockData;
  }
  
  try {
    const query = `
      query GetSiteSettings {
        siteSettings {
          logoUrl
          reservationUrl
          hero {
            videoUrl
            heading
            subheading
          }
          semiPrivateIntro {
            heading
            text
          }
          rooms {
            id
            name
            capacity
            description
            imageUrl
          }
          cocktailBar {
            heading
            text
            imageUrl
          }
          whatsOn {
            heading
            subtitle
            events {
              id
              title
              description
              pdfUrl
            }
          }
          contact {
            address
            phone
            email
            gmapsUrl
          }
          footer {
            openingHours {
              day
              hours
            }
            socialLinks {
              instagram
              facebook
              tiktok
            }
          }
        }
      }
    `;

    const res = await fetch(WP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 } // Revalidate static cache every minute (ISR)
    });

    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.siteSettings) {
        const ws = json.data.siteSettings;
        return {
          logoUrl: ws.logoUrl || mockData.logoUrl,
          reservationUrl: ws.reservationUrl || mockData.reservationUrl,
          hero: {
            videoUrl: ws.hero?.videoUrl || mockData.hero.videoUrl,
            heading: ws.hero?.heading || mockData.hero.heading,
            subheading: ws.hero?.subheading || mockData.hero.subheading
          },
          semiPrivateIntro: {
            heading: ws.semiPrivateIntro?.heading || mockData.semiPrivateIntro.heading,
            text: ws.semiPrivateIntro?.text || mockData.semiPrivateIntro.text
          },
          rooms: ws.rooms && ws.rooms.length > 0 ? ws.rooms.map((room, idx) => ({
            id: room.id || mockData.rooms[idx]?.id || `room-${idx}`,
            name: room.name || mockData.rooms[idx]?.name || '',
            capacity: room.capacity || mockData.rooms[idx]?.capacity || '',
            description: room.description || mockData.rooms[idx]?.description || '',
            imageUrl: room.imageUrl || mockData.rooms[idx]?.imageUrl || ''
          })) : mockData.rooms,
          cocktailBar: {
            heading: ws.cocktailBar?.heading || mockData.cocktailBar.heading,
            text: ws.cocktailBar?.text || mockData.cocktailBar.text,
            imageUrl: ws.cocktailBar?.imageUrl || mockData.cocktailBar.imageUrl
          },
          whatsOn: {
            heading: ws.whatsOn?.heading || mockData.whatsOn.heading,
            subtitle: ws.whatsOn?.subtitle || mockData.whatsOn.subtitle,
            events: ws.whatsOn?.events && ws.whatsOn.events.length > 0 ? ws.whatsOn.events.map((evt, idx) => ({
              id: evt.id || mockData.whatsOn.events[idx]?.id || `event-${idx}`,
              title: evt.title || mockData.whatsOn.events[idx]?.title || '',
              description: evt.description || mockData.whatsOn.events[idx]?.description || '',
              pdfUrl: evt.pdfUrl || mockData.whatsOn.events[idx]?.pdfUrl || ''
            })) : mockData.whatsOn.events
          },
          contact: {
            address: ws.contact?.address || mockData.contact.address,
            phone: ws.contact?.phone || mockData.contact.phone,
            email: ws.contact?.email || mockData.contact.email,
            gmapsUrl: ws.contact?.gmapsUrl || mockData.contact.gmapsUrl
          },
          footer: {
            openingHours: ws.footer?.openingHours && ws.footer.openingHours.length > 0 ? ws.footer.openingHours : mockData.footer.openingHours,
            socialLinks: {
              instagram: ws.footer?.socialLinks?.instagram || mockData.footer.socialLinks.instagram,
              facebook: ws.footer?.socialLinks?.facebook || mockData.footer.socialLinks.facebook,
              tiktok: ws.footer?.socialLinks?.tiktok || mockData.footer.socialLinks.tiktok
            }
          },
          gallery: mockData.gallery
        };
      }
    }
  } catch (error) {
    console.warn("Failed to fetch settings from WordPress, falling back to static content:", error);
  }
  
  return mockData;
}
