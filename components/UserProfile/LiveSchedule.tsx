import { Domain } from "../../core"
import { Box, Flex } from "@chakra-ui/react"
import { CustomText, theme } from "../"

interface Props {
    schedule: Domain.LiveFeed[]
}

export const Component = (props: Props) => {
    const order = (index: number): Order => {
        switch (index) {
            case 0:
                return "first"
            case props.schedule.length - 1:
                return "last"
            default:
                return "medium"
        }
    }
    return (
        <>
            <CustomText.Component
                text="直近のライブ予定"
                type="xlarge"
                bold={true}
                m="0 0 20px 0"
            />
            <Box marginBottom="40px">
                {props.schedule.map((liveFeed, index) => {
                    return (
                        <LiveScheduleCardCell
                            key={liveFeed.live.id}
                            live={liveFeed}
                            order={order(index)}
                        />
                    )
                })}
            </Box>
        </>
    )
}

type Order = "first" | "medium" | "last"
interface CellProps {
    live: Domain.LiveFeed
    order: Order
}

const LiveScheduleCardCell = (props: CellProps) => {
    const performers = () => {
        let group: Domain.Group
        let groups: Domain.Group[]
        switch (props.live.live.style.kind) {
            case "oneman":
                group = props.live.live.style.value as Domain.Group
                return group.name
            default:
                groups = props.live.live.style.value as Domain.Group[]
                return (
                    groups
                        .slice(0, 2)
                        .map((g) => g.name)
                        .join(", ") + "..."
                )
        }
    }

    const hostGroup = () => {
        let group: Domain.Group
        let groups: Domain.Group[]
        switch (props.live.live.style.kind) {
            case "oneman":
                group = props.live.live.style.value as Domain.Group
                return group
            default:
                groups = props.live.live.style.value as Domain.Group[]
                return groups[0]
        }
    }
    return (
        <Flex>
            <Box width="10vw">
                {props.order !== "first" ? (
                    <Box
                        width="2vw"
                        m="0 auto"
                        height="60px"
                        backgroundColor={theme.color.brand.primary}
                    />
                ) : (
                    <Box
                        width="2vw"
                        m="0 auto"
                        height="60px"
                        backgroundColor="black"
                    />
                )}
                <Flex
                    width="10vw"
                    height="10vw"
                    borderRadius="5vw"
                    justify="center"
                    align="center"
                    backgroundColor={theme.color.brand.primary}
                    m="0 auto"
                >
                    <CustomText.Component
                        text={`${props.live.live.date?.slice(4, 6) ?? "??"}/${
                            props.live.live.date?.slice(6, 8) ?? "??"
                        }`}
                        type="small"
                        bold={false}
                        m="auto"
                    />
                    {/* <CustomText.Component
                        text={props.live.live.date?.slice(6, 8) ?? "??"}
                        type="small"
                        bold={false}
                    /> */}
                </Flex>
                {props.order !== "last" ? (
                    <Box
                        width="2vw"
                        m="0 auto"
                        height="60px"
                        backgroundColor={theme.color.brand.primary}
                    />
                ) : (
                    <Box
                        width="2vw"
                        m="0 auto"
                        height="60px"
                        backgroundColor="black"
                    />
                )}
            </Box>
            <Box
                m="auto 16px"
                backgroundImage={
                    props.live.live.artworkURL ??
                    hostGroup().artworkURL ??
                    "none"
                }
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                width="80vw"
                borderRadius="16px"
                borderWidth="1px"
                borderColor="#909090"
                maxHeight="120px"
                overflow="hidden"
            >
                <Box
                    padding="16px"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    borderRadius="16px"
                >
                    <CustomText.Component
                        text={props.live.live.title}
                        type="medium"
                        bold={true}
                    />
                    <CustomText.Component
                        text={performers()}
                        type="small"
                        bold={true}
                    />
                    <CustomText.Component
                        text={props.live.live.liveHouse ?? ""}
                        type="small"
                        bold={true}
                    />
                </Box>
            </Box>
        </Flex>
    )
}
