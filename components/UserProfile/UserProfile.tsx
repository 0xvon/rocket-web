import { Domain } from "../../core"
import * as RecentlyFollowingGroups from "./RecentlyFollowingGroups"
import * as FollowingGroups from "./FollowingGroups"
import * as LiveSchedule from "./LiveSchedule"
import { Box } from "@chakra-ui/react"

interface Props {
    recentlyFollowingGroups: Domain.GroupFeed[]
    followingGroups: Domain.GroupFeed[]
    liveSchedule: Domain.LiveFeed[]
}

export const Component = (props: Props) => {
    return (
        <Box>
            <RecentlyFollowingGroups.Component
                groups={props.recentlyFollowingGroups}
            />
            <FollowingGroups.Component groups={props.followingGroups} />
            <LiveSchedule.Component schedule={props.liveSchedule} />
        </Box>
    )
}
