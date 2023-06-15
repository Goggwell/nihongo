import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const basierSquare = localFont({
  src: [
    {
      path: "./BasierSquare/BasierSquare-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./BasierSquare/BasierSquare-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-basier",
});
