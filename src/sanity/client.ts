import { createClient } from 'next-sanity'

import { apiVersion, dataset, isSanityConfigured, projectId } from './env'

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Tag-based revalidation keeps pages fresh; skip the CDN so a webhook
      // revalidation always reads the newly published content.
      useCdn: false,
      perspective: 'published',
    })
  : null
