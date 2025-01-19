import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeistMono } from "geist/font/mono";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={GeistMono.className}>
                <Component {...pageProps} />
        </main>
    );
}
