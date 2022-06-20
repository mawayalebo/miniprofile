import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import Summary from '../components/Summary'
import Why from '../components/Why'
const Home: NextPage = () => {
  const Skills  = dynamic(() => import('../components/Skills'), { ssr: false })

  return (
    <div className="">
      <Head>
        <title>Lebo | Miniprofile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="">
        <Carousel/>
        <Summary/>
        <Why/>
        <Skills/>

        
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default Home
