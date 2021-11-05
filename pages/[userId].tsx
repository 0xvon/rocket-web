import type { NextPage } from "next"
import { useRouter } from "next/router"
// import { useState } from "react"
import Head from "next/head"
// import { Flex, Text, Button, Link } from "@chakra-ui/react"

// const fetcher = (url: string) => fetch(url).then((r) => r.json())

const User: NextPage = () => {
    const router = useRouter()
    const userId = router.query.userId as string
    return (
        <div>
            <Head>
                <title>OTOAKA</title>
                <meta name="description" content="OTOAKA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>hello, {userId}!</div>
        </div>
    )
}

export default User
