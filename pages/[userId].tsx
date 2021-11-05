import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Domain, APIClient } from "../core"
import Head from "next/head"
import { Header } from "../components"
// import { Flex, Text, Button, Link } from "@chakra-ui/react"

// const fetcher = (url: string) => fetch(url).then((r) => r.json())

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

            <div>hello, {profile?.user.name}!</div>
        </div>
    )
}

export default User
