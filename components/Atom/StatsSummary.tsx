import { Flex } from "@chakra-ui/react"
import { CustomText } from "../"

interface Props {
    title: string
    count: number
    unit: string
    width?: string | string[]
}

export const Component = (props: Props) => {
    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
            width={props.width}
        >
            <CustomText.Component
                text={props.title}
                type="medium"
                bold={false}
                m="0 0 4px 0"
            />
            <CustomText.Component
                text={props.count.toLocaleString()}
                type="large"
                bold={true}
                m="0 0 4px 0"
            />
            <CustomText.Component
                text={props.unit}
                type="medium"
                bold={false}
            />
        </Flex>
    )
}
