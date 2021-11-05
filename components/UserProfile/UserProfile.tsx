import { Domain } from "../../core"
import { RecentlyFollowingGroups, FollowingGroups, LiveSchedule } from "../"
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
