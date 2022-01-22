import { Domain } from "../../core"
import * as LiveHeader from "./LiveHeader"
import { Box } from "@chakra-ui/react"

interface Props {
    liveInfo: Domain.LiveInfo
}

export const Component = (props: Props) => {
    return (
        <Box>
            <LiveHeader.Component
                live={props.liveInfo.live}
                likeCount={props.liveInfo.likeCount}
            />
        </Box>
    )
}
