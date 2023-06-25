import type { AppProps } from "next/app";

import "../styles/globals.scss";

import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="NihonGo"
        description="NihonGO! is a language school that aims to give you all the necessary skills to thrive in a Japanese environment."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.svg",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
