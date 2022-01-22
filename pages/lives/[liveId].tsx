import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Domain, APIClient } from "../../core"
import Head from "next/head"
import { Header, LiveInfo, JumpToAppButton, CustomText } from "../../components"
import { Box, Spinner, Flex } from "@chakra-ui/react"

const Live: NextPage = () => {
    const router = useRouter()
    const [liveInfo, setLiveInfo] = useState<Domain.LiveInfo | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const liveId = router.query.liveId as string
    const title = "OTOAKA | ライブ好きに特化したプロフィール"
    const description =
        "OTOAKAはライブ好きのためのSNSです。アプリで作成したプロフィールをwebでシェアすることができます。"
    const ogp =
        "https://rocket-auth-storage.s3.ap-northeast-1.amazonaws.com/assets/public/otoaka.png"

    useEffect(() => {
        const getLive = async () => {
            // const liveInfo = await APIClient.getLiveInfo(liveId)
            const liveInfo = APIClient.getLiveInfoMock() // mock
            setIsLoading(false)
            setLiveInfo(liveInfo)
        }
        getLive()
    }, [liveId])

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

            {liveInfo ? (
                <div>
                    <LiveInfo.Component liveInfo={liveInfo} />

                    {/* <Box m={["0 20px", "0 auto"]} maxWidth="700px">
                        <UserProfile.Component
                            recentlyFollowingGroups={
                                profile.recentlyFollowingGroups
                            }
                            followingGroups={profile.followingGroups}
                            liveSchedule={profile.liveSchedule}
                        />
                        <UserStats.Component
                            liveTransition={profile.transition}
                            frequentlyWatchingGroups={
                                profile.frequentlyWatchingGroups
                            }
                        />
                    </Box> */}
                    <Box height="120px" />
                    <JumpToAppButton.Component />
                </div>
            ) : isLoading ? (
                <Flex justify="center" align="center">
                    <Spinner m="auto" />
                </Flex>
            ) : (
                <Flex justify="center" align="center">
                    <CustomText.Component
                        text="ライブが見つかりませんでした"
                        type="large"
                        bold={true}
                    />
                </Flex>
            )}
        </div>
    )
}

export default Live
