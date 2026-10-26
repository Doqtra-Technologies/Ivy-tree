import { isSanityConfigured } from '@/sanity/env'

import { Studio } from './Studio'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32, maxWidth: 560 }}>
        <h1>Sanity Studio is not configured</h1>
        <p>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> in
          your environment, then restart the server.
        </p>
      </main>
    )
  }

  return <Studio />
}
