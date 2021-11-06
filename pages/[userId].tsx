import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Domain, APIClient } from "../core"
import Head from "next/head"
import {
    Header,
    UserInfo,
    UserProfile,
    UserStats,
    JumpToAppButton,
    CustomText,
} from "../components"
import { Box, Spinner, Flex } from "@chakra-ui/react"

const User: NextPage = () => {
    const router = useRouter()
    const [profile, setProfile] = useState<Domain.UserProfile | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const userId = router.query.userId as string
    const description =
        "OTOAKAはライブ好きのためのSNSです。アプリで作成したプロフィールをwebでシェアすることができます。"
    const ogp =
        "https://rocket-auth-storage.s3.ap-northeast-1.amazonaws.com/assets/public/otoaka.png"

    useEffect(() => {
        const getProfile = async () => {
            const profile = await APIClient.getUserProfile(userId)
            // const profile = APIClient.getUserProfileMock() // mock
            setIsLoading(false)
            setProfile(profile)
        }
        getProfile()
    }, [userId])

    return (
        <div>
            <Head>
                <title>OTOAKA | ライブへの熱意を可視化する</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={userId} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={userId} />
                <meta property="og:image" content={ogp} />
                <meta property="og:description" content={description} />
                <meta property="fb:app_id" content="@masato" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@masatojames" />
                <meta name="twitter:image" content={ogp} />
                <meta name="twitter:title" content={userId} />
                <meta name="twitter:description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header.Component />

            {profile ? (
                <div>
                    <UserInfo.Component user={profile.user} />
                    <Box m={["0 20px", "0 auto"]} maxWidth="700px">
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
                    </Box>
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
                        text="ユーザーが見つかりませんでした"
                        type="large"
                        bold={true}
                    />
                </Flex>
            )}
        </div>
    )
}

export default User
