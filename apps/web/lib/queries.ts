import { groq } from "next-sanity";

const postFields = groq`
    _id,
    name,
    title,
    'date': publishedAt,
    excerpt,
    'slug': slug.current,
    'coverImage': {'picture': mainImage.asset->url, 'hash': mainImage.asset->metadata.lqip},
    'author': author->{name, 'picture': image.asset->url, 'hash': image.asset->metadata.lqip},
`;

const announcementFields = groq`
    description,
    caveat,
`;

const authorFields = groq`
    name,
    'slug': slug.current,
    'image': {'picture': image.asset->url, 'hash': image.asset->metadata.lqip},
    role,
    bio,
`;

const courseFields = groq`
    title,
    description,
    rank,
    info,
`;

const aboutFields = groq`
    url,
    body,
`;

const contactFields = groq`
    'map': {'picture': map.asset->url, 'hash': map.asset->metadata.lqip},
    address,
    phonenumber,
    email,
    hours,
    socials
`;

export const allPostsQuery = groq`
    *[_type == "post"] | order(publishedAt desc){
        ${postFields}
    }
`;

export const allPostsSlugsQuery = groq`
    *[_type == "post" && defined(slug.current)][].slug.current
`;

export const postAndMorePostsQuery = groq`
    {
        "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
            "body": body[] {
                ...,
                ...select(
                    _type == "image" => {
                        ...,
                        "asset": asset->
                    }
                )
            },
            ${postFields}
        },
        "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) [0...3] {
            body,
            ${postFields}
        }
    }
`;

export const announcementQuery = groq`
    *[_type == "announcement"][0] {
        ${announcementFields}
    }
`;

export const allAuthorsQuery = groq`
    *[_type == "author"] | order(_updatedAt desc) {
        ${authorFields}
    }
`;

export const allCoursesQuery = groq`
    *[_type == "course"] | order(rank asc) {
        ${courseFields}
    }
`;

export const aboutQuery = groq`
    *[_type == "about"][0] {
        ${aboutFields}
    }
`;

export const contactQuery = groq`
    *[_type == "contact"][0] {
        ${contactFields}
    }
`;
