import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
