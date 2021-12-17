import type {NextPage} from 'next'
import Head from 'next/head'
import Aside from '../components/Aside/Index'
import Header from '../components/Header/Index'

import GoogleSearch from '../components/GoogleSearch/Index'
import useFetch from '../hooks/useFetch'
import axios from 'axios'

const Home: NextPage = () => {



    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };

    axios.get("https://mangalivre.net", config)
        .then((res) => console.log(res))



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
