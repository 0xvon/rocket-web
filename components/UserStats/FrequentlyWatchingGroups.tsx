import { Domain } from "../../core"
import { Flex } from "@chakra-ui/react"
import { CustomText, CustomImage, theme } from "../"

interface Props {
    groups: Domain.GroupFeed[]
}

export const Component = (props: Props) => {
    const order = (index: number): Order => {
        switch (index) {
            case 0:
                return "first"
            case 1:
                return "second"
            default:
                return "other"
        }
    }
    return (
        <>
            <CustomText.Component
                text="よく参戦するアーティスト"
                type="xlarge"
                bold={true}
                m="0 0 20px 0"
            />
            <Flex align="flex-end" justify="space-around">
                {props.groups.map((group, i) => {
                    return (
                        <WatchingGroupCell
                            key={group.group.id}
                            group={group}
                            order={order(i)}
                        />
                    )
                })}
            </Flex>
        </>
    )
}

type Order = "first" | "second" | "other"
interface WatchingCellProps {
    group: Domain.GroupFeed
    order: Order
}

const WatchingGroupCell = (props: WatchingCellProps) => {
    const color = () => {
        switch (props.order) {
            case "first":
                return theme.color.ranking.first
            case "second":
                return theme.color.ranking.second
            case "other":
                return theme.color.ranking.other
        }
    }
    const height = () => {
        switch (props.order) {
            case "first":
                return "35vw"
            case "second":
                return "32vw"
            case "other":
                return "30vw"
        }
    }
    return (
        <Flex direction="column" justify="center" align="center" width="30%">
            <CustomText.Component
                m="2px auto"
                text={`${props.group.watchingCount.toLocaleString()}回`}
                color={color()}
                type="medium"
                bold={true}
            />
            <CustomImage.Component
                src={props.group.group.artworkURL}
                border={`${color()} solid 4px`}
                radius="16px"
                width="100%"
                height={height()}
                maxHeight="360px"
            />
            <CustomText.Component
                height="20px"
                text={props.group.group.name}
                type="small"
                bold={false}
            />
        </Flex>
    )
}
