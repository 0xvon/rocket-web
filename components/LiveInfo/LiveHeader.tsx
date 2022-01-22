import { Domain } from "../../core"
import { Box, Flex } from "@chakra-ui/react"
import { CustomText, CustomBadgeText } from "../"
import CALENDAR from "./assets/calendar.png"
import MAP from "./assets/map.png"
import PERSON from "./assets/person.png"

interface Props {
    live: Domain.Live
    likeCount: number
}

export const Component = (props: Props) => {
    const hostGroup = () => {
        let group: Domain.Group
        let groups: Domain.Group[]
        switch (props.live.style.kind) {
            case "oneman":
                group = props.live.style.value as Domain.Group
                return group
            default:
                groups = props.live.style.value as Domain.Group[]
                return groups[0]
        }
    }

    return (
        <>
            <Box
                backgroundImage={
                    props.live.artworkURL ?? hostGroup().artworkURL ?? "none"
                }
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                m={["0", "0 auto"]}
                width="100vw"
                maxWidth="700px"
                height={["200px", "350px"]}
            >
                <Flex
                    direction="column"
                    justify="space-between"
                    align="flex-start"
                    padding="8px"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    height={["200px", "350px"]}
                >
                    <CustomText.Component
                        text={props.live.title}
                        type="xlarge"
                        bold={true}
                    />
                    <Box background="none">
                        <CustomBadgeText.Component
                            badge={MAP.src}
                            text={props.live.liveHouse ?? "不明"}
                        />
                        <CustomBadgeText.Component
                            badge={CALENDAR.src}
                            text={
                                `${props.live.date?.slice(0, 4)}/${
                                    props.live.date?.slice(4, 6) ?? "??"
                                }/${props.live.date?.slice(6, 8) ?? "??"}` ??
                                "不明"
                            }
                        />
                        <CustomBadgeText.Component
                            badge={PERSON.src}
                            text={`${props.likeCount}人参戦`}
                        />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
