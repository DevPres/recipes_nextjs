import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'
import type { AppProps } from 'next/app'
import { Merriweather_Sans } from '@next/font/google'

const sourcecodepro = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-sourcecodepro',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className={`${sourcecodepro.variable} font-sans bg-alt-100 min-h-screen`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    </>
  )
}
