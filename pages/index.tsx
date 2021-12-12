import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Index</title>
        <meta name="description" content="Enhanced mainpage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header></Header>
    </>
  )
}

export default Home
