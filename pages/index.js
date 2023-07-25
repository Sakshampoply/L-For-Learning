import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import PodcastHome from '@/components/PodcastHome'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <Hero />
    <PodcastHome />
    <Footer />
  </>

}
