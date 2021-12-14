import type { NextPage } from 'next'
import Head from 'next/head'
import Aside from '../components/Aside/Index'
import Header from '../components/Header/Index'

import Chart from '../components/Chart/Index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Index</title>
        <meta name="description" content="Enhanced mainpage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header></Header>
     <Aside></Aside>
    </>
  )
}

export default Home
