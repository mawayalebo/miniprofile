import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
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

      <main className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:fixed md:z-50 md:top-0">
          <Carousel/>
        </div>
        <div>

        </div>
        <div>
          <Summary/>
          <Why/>
          <Skills/>
        </div>
        
        

        
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default Home
