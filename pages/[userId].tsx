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
} from "../components"
import { Box } from "@chakra-ui/react"

const User: NextPage = () => {
    const router = useRouter()
    const [profile, setProfile] = useState<Domain.UserProfile | undefined>()
    const userId = router.query.userId as string

    useEffect(() => {
        const getProfile = async () => {
            // const profile = await APIClient.getUserProfile(userId)
            const profile = APIClient.getUserProfileMock() // mock
            setProfile(profile)
        }
        getProfile()
    }, [userId])

    return (
        <div>
            <Head>
                <title>OTOAKA</title>
                <meta name="description" content="OTOAKA" />
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
            ) : (
                <></>
            )}
        </div>
    )
}

export default User
