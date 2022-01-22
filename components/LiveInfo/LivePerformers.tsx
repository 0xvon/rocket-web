import { Domain } from "../../core"
import { Box, Flex } from "@chakra-ui/react"
import { CustomText, CustomImage } from "../"

interface Props {
    live: Domain.Live
}

export const Component = (props: Props) => {
    const performers = () => {
        let group: Domain.Group
        let groups: Domain.Group[]
        switch (props.live.style.kind) {
            case "oneman":
                group = props.live.style.value as Domain.Group
                return [group]
            default:
                groups = props.live.style.value as Domain.Group[]
                return groups
        }
    }
    return (
        <>
            <CustomText.Component
                text="出演者"
                type="xlarge"
                bold={true}
                m="0 0 20px 0"
            />
            <Box marginBottom="40px">
                {performers().map((group) => {
                    return <GroupCardCell key={group.id} group={group} />
                })}
            </Box>
        </>
    )
}

interface CellProps {
    group: Domain.Group
}

const GroupCardCell = (props: CellProps) => {
    return (
        <Flex m={["20px 0", "20px auto"]} maxWidth="700px">
            <CustomImage.Component
                src={props.group.artworkURL}
                width={["60px", "100px"]}
                height={["60px", "100px"]}
                radius={["30px", "50px"]}
            />

            <Box marginLeft="8px">
                <CustomText.Component
                    text={props.group.name}
                    type="large"
                    bold={true}
                    m="0 0 4px 0"
                />
            </Box>
        </Flex>
    )
}
