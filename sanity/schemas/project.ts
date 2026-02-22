import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show this project in the featured carousel on the homepage',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Documentary', value: 'Documentary' },
          { title: 'Short Film', value: 'Short Film' },
          { title: 'TV Show', value: 'TV Show' },
          { title: 'Music Video', value: 'Music Video' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Video duration (e.g., "2:30")',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'director',
      title: 'Director',
      type: 'string',
    }),
    defineField({
      name: 'cinematographer',
      title: 'Cinematographer',
      type: 'string',
    }),
    defineField({
      name: 'productionCompany',
      title: 'Production Company',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'postProduction',
      title: 'Post Production',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Additional content or notes about the project',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'thumbnail',
    },
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
