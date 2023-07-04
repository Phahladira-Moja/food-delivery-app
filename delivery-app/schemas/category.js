import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Category Description',
      validation: (rule) => rule.required(),
    }),
  ],
})
