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
                ...select(
                    _type == "image" => {
                        ...,
                        "asset": asset->
                    }
                )
            },
            ${postFields}
        },
        "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) [0...2] {
            body,
            ${postFields}
        }
    }
`;
