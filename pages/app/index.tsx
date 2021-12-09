import type { NextPage } from "next"
import Head from "next/head"
import { Header, CustomText } from "../../components"
import { Link, Image, Flex } from "@chakra-ui/react"
import app_store_badge from "../../components/JumpToAppButton/appstore_badge.png"

const AppPage: NextPage = () => {
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
                <meta
                    name="apple-itunes-app"
                    content="app-id=1550896325, app-argument=https://wall-of-death.com/otoaka"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link
                    rel="apple-app-site-association"
                    href="/apple-app-site-association"
                    type="application/json"
                />
            </Head>
            <Header.Component />
            <Flex direction="column" justify="center" align="center">
                <CustomText.Component
                    text="アプリをインストールしよう！"
                    type="xlarge"
                    bold={true}
                />
                <Link
                    href="https://apps.apple.com/jp/app/rocket-for-bands-ii/id1550896325"
                    _hover={{ opacity: 0.6 }}
                    target="_blank"
                    marginTop="20px"
                >
                    <Image
                        src={app_store_badge.src}
                        width="300px"
                        alt="apple logo"
                        border="1px solid #909090"
                        borderRadius="16px"
                    />
                </Link>
            </Flex>
        </div>
    )
}

export default AppPage
