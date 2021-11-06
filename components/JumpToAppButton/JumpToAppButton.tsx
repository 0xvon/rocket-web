import { Link, Image } from "@chakra-ui/react"
import app_store_badge from "./appstore_badge.png"

export const Component = () => {
    return (
        <Link
            href="https://apps.apple.com/jp/app/rocket-for-bands-ii/id1550896325"
            _hover={{ opacity: 0.6 }}
            position="fixed"
            bottom="16px"
            right="16px"
            target="_blank"
        >
            <Image
                src={app_store_badge.src}
                width="200px"
                alt="apple logo"
                border="1px solid #909090"
                borderRadius="16px"
            />
        </Link>
    )
}
