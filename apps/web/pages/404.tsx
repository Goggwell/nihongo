import { useEffect } from "react";
import groq from "groq";
import { client } from "@/lib/client";

export default function Custom404({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return <h1>Hello!</h1>;
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post"]
  `);
  return {
    props: {
      posts,
    },
  };
}
