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
