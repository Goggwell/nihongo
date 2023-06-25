import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'caveat',
      title: 'Caveat',
      type: 'string',
    }),
  ],
})
