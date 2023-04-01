import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import "../styles/globals.scss";

import { DefaultSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="NihonGo"
        description="NihonGO! is a language school that aims to give you all the necessary skills to thrive in a Japanese environment."
      />
      <style jsx global>
        {`
          html,
          body,
          button {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
