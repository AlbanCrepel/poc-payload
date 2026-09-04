import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  access: {
    read: () => true,
  },
}
