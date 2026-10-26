/**
 * Sanity Studio configuration, mounted at /studio by
 * `src/app/studio/[[...tool]]/page.tsx`.
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './src/sanity/env'
import { schema, singletonTypes } from './src/sanity/schemas'
import { structure } from './src/sanity/structure'

const singletonNames = new Set<string>(singletonTypes.map((type) => type.name))

export default defineConfig({
  basePath: '/studio',
  title: 'The Ivy Tree',
  projectId,
  dataset,
  schema: {
    ...schema,
    // Singletons are opened from the sidebar, never created from "New document".
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonNames.has(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletonNames.has(schemaType)
        ? actions.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : actions,
  },
  plugins: [structureTool({ structure })],
})
