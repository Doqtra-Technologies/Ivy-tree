import type { SchemaTypeDefinition } from 'sanity'

import { documentTypes } from './documents'
import { objectTypes } from './objects'
import { singletonTypes } from './singletons'

export { singletonTypes }

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objectTypes, ...singletonTypes, ...documentTypes],
}
