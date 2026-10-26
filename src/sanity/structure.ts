import type { StructureResolver } from 'sanity/structure'

import { singletonTypes } from './schemas'

const singletonNames = new Set<string>(singletonTypes.map((type) => type.name))

/** Studio sidebar: one fixed entry per singleton page, then the collections. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...singletonTypes.map((type) =>
        S.listItem()
          .title(type.title ?? type.name)
          .id(type.name)
          .child(S.document().schemaType(type.name).documentId(type.name))
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonNames.has(item.getId() ?? '')
      ),
    ])
