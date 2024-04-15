import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const roboto = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className}`}>
       <Component {...pageProps} />
    </main>
  )
}
