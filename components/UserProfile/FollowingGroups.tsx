import { Domain } from "../../core"
import { Flex } from "@chakra-ui/react"
import { CustomText, Tag, theme } from "../"

interface Props {
    groups: Domain.GroupFeed[]
}

export const Component = (props: Props) => {
    return (
        <>
            <CustomText.Component
                text="好きなアーティスト"
                type="xlarge"
                bold={true}
                m="0 0 20px 0"
            />
            <Flex wrap="wrap" marginBottom="40px">
                {props.groups.map((group) => {
                    return (
                        <Tag.Component
                            key={group.group.id}
                            text={group.group.name}
                            colorScheme={theme.color.brand.secondary}
                            type="medium"
                            m="8px"
                        />
                    )
                })}
            </Flex>
        </>
    )
}
