import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'number',
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'object',
      fields: [
        {name: 'info1', type: 'string', title: 'First point'},
        {name: 'info2', type: 'string', title: 'Second point'},
        {name: 'info3', type: 'string', title: 'Third point'},
      ],
    }),
  ],
})
