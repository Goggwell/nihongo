import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phonenumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        {name: 'youtube', type: 'string', title: 'YouTube'},
        {name: 'instagram', type: 'string', title: 'Instagram'},
        {name: 'facebook', type: 'string', title: 'Facebook'},
      ],
    }),
  ],
})
