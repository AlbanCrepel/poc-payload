import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
  access: {
    read: () => true,
  },
}
