import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'
import type { AppProps } from 'next/app'
import { Source_Code_Pro } from '@next/font/google'
import { Hahmlet } from '@next/font/google'

const sourcecodepro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-sourcecodepro',
})
const hamlet = Hahmlet({
  subsets: ['latin'],
  variable: '--font-hamlet',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className={`${sourcecodepro.variable} ${hamlet.variable} font-body text-base bg-primary-300 min-h-screen`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    </>
  )
}
