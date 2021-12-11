import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Index</title>
        <meta name="description" content="Enhanced mainpage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Hello!</h1>
    </>
  )
}

export default Home
