import type { NextPage } from "next"
import Router from "next/router"
import Head from "next/head"
import { SearchForm } from "../components"
import { Flex } from "@chakra-ui/react"
import { Header } from "../components"

const Home: NextPage = () => {
    const submitTapped = (username: string) => {
        // console.log("aaaa")
        Router.push("/" + username)
    }
    return (
        <div>
            <Head>
                <title>OTOAKA | ライブへの熱意を可視化する</title>
                <meta name="description" content="OTOAKA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header.Component />
            <Flex
                direction="column"
                align="center"
                justify="center"
                m="20px auto"
                fontSize="4xl"
                fontWeight="700"
            >
                <SearchForm.Component
                    isLoading={false}
                    submitAction={submitTapped}
                />
            </Flex>
        </div>
    )
}

export default Home
