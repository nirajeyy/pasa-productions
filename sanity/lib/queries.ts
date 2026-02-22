import { groq } from 'next-sanity'

// Project queries
export const projectsQuery = groq`
  *[_type == "project" && published == true] | order(featured desc, date desc) {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    description,
    date,
    youtubeUrl,
    published,
    featured,
    category,
    client,
    duration,
    thumbnail,
    director,
    cinematographer,
    productionCompany,
    location,
    awards,
    credits,
    equipment,
    postProduction
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && published == true && featured == true] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    youtubeUrl,
    category,
    client,
    thumbnail
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    description,
    date,
    youtubeUrl,
    published,
    featured,
    category,
    client,
    duration,
    thumbnail,
    director,
    cinematographer,
    productionCompany,
    location,
    awards,
    credits,
    equipment,
    postProduction,
    content
  }
`

export const projectsPaginatedQuery = groq`
  *[_type == "project" && published == true
    && ($category == "" || category == $category)
    && ($search == "" || title match $search || description match $search || client match $search)
  ] | order(featured desc, date desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    description,
    date,
    youtubeUrl,
    featured,
    category,
    client,
    duration,
    thumbnail
  }
`

export const projectsCountQuery = groq`
  count(*[_type == "project" && published == true
    && ($category == "" || category == $category)
    && ($search == "" || title match $search || description match $search || client match $search)
  ])
`

export const projectCategoriesQuery = groq`
  array::unique(*[_type == "project" && published == true].category)
`

export const relatedProjectsQuery = groq`
  *[_type == "project" && published == true && slug.current != $slug && (category == $category || client == $client)] | order(date desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    description,
    youtubeUrl,
    category,
    client,
    thumbnail
  }
`

// Team member queries
export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    description,
    image,
    expertise,
    order
  }
`

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    role,
    description,
    image,
    expertise,
    order
  }
`
