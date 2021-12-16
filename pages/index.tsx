import type {NextPage} from 'next'
import Head from 'next/head'
import Aside from '../components/Aside/Index'
import Header from '../components/Header/Index'

import GoogleSearch from '../components/GoogleSearch/Index'

const Home: NextPage = () => {


    return (
        <>
            <Head>
                <title>My Index</title>
                <meta name="description" content="Enhanced mainpage."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <Aside/>
            <GoogleSearch/>
        </>
    )
}

export default Home
