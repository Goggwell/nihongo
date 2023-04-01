import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
