import '@/styles/globals.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })
import { Inter } from 'next/font/google'







export default function App({ Component, pageProps }) {
  return <main className={`w-full min-h-screen  ${inter.className}`}>
  <Nav></Nav>
  <div className={` pt-14 w-full min-h-screen `}>
  <Component  {...pageProps} />
  </div>
  </main>
}
