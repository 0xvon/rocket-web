import { Domain } from "../../core"
import * as LiveHeader from "./LiveHeader"
import * as LivePerformers from "./LivePerformers"
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
            <Box m={["0 20px", "0 auto"]} maxWidth="700px">
                <LivePerformers.Component live={props.liveInfo.live} />
            </Box>
        </Box>
    )
}
