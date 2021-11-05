import { Box, Image, Link } from "@chakra-ui/react"
import LOGO from "./OTOAKA_LOGO.png"

export const Component = () => {
    return (
        <Box>
            <Link href="/">
                <Image
                    src={LOGO.src}
                    m="40px auto"
                    width={["300px", "500px"]}
                    alt="OTOAKA logo"
                />
            </Link>
        </Box>
    )
}
