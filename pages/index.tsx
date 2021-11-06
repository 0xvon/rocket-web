import type { NextPage } from "next"
import Router from "next/router"
import Head from "next/head"
import { SearchForm } from "../components"
import { Flex } from "@chakra-ui/react"
import { Header, JumpToAppButton } from "../components"

const Home: NextPage = () => {
    const submitTapped = (username: string) => {
        Router.push("/" + username)
    }
    const title = "OTOAKA | ライブへの熱意を可視化する"
    const description =
        "OTOAKAはライブ好きのためのSNSです。アプリで作成したプロフィールをwebでシェアすることができます。"
    const ogp =
        "https://rocket-auth-storage.s3.ap-northeast-1.amazonaws.com/assets/public/otoaka.png"
    return (
        <div>
            <Head>
                <title>OTOAKA | ライブへの熱意を可視化する</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={title} />
                <meta property="og:image" content={ogp} />
                <meta property="og:description" content={description} />
                <meta property="fb:app_id" content="@masato" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@masatojames" />
                <meta name="twitter:image" content={ogp} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
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
            <JumpToAppButton.Component />
        </div>
    )
}

export default Home
