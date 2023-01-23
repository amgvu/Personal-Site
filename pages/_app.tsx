import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DM_Sans } from '@next/font/google'

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmsans.className}>
       <Component {...pageProps} />
    </main>
  )
}
