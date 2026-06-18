import { type SchemaTypeDefinition } from 'sanity'

import { seoType } from './objects/seo'
import { imageWithAltType } from './objects/imageWithAlt'
import { linkType } from './objects/link'
import { ctaType } from './objects/cta'
import { socialLinkType } from './objects/socialLink'
import { openingHoursType } from './objects/openingHours'

import { siteSettingsType } from './singletons/siteSettings'
import { homepageType } from './singletons/homepage'
import { semiPrivatePage } from './singletons/semiPrivatePage'
import { cocktailBarPage } from './singletons/cocktailBarPage'
import { whatsOnPage } from './singletons/whatsOnPage'
import { galleryPage } from './singletons/galleryPage'
import { menuPage } from './singletons/menuPage'

import { room } from './documents/room'
import { event } from './documents/event'
import { menu } from './documents/menu'
import { post } from './documents/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoType,
    imageWithAltType,
    linkType,
    ctaType,
    socialLinkType,
    openingHoursType,
    siteSettingsType,
    homepageType,
    semiPrivatePage,
    cocktailBarPage,
    whatsOnPage,
    galleryPage,
    menuPage,
    room,
    event,
    menu,
    post,
  ],
}
