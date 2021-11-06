import { Domain } from "../../core"
import * as LiveTransition from "./LiveTransition"
import * as FrequentlyWatchingGroups from "./FrequentlyWatchingGroups"
import { Box } from "@chakra-ui/react"

interface Props {
    liveTransition: Domain.LiveTransition
    frequentlyWatchingGroups: Domain.GroupFeed[]
}

export const Component = (props: Props) => {
    return (
        <Box>
            <LiveTransition.Component liveTransition={props.liveTransition} />
            <FrequentlyWatchingGroups.Component
                groups={props.frequentlyWatchingGroups.slice(0, 3)}
            />
        </Box>
    )
}
