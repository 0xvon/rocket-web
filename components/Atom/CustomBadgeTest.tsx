import { Flex } from "@chakra-ui/react"
import { CustomImage, CustomText } from ".."
export type TextType = "xlarge" | "large" | "medium" | "small"
interface Props {
    badge: string
    text: string
}

export const Component = (props: Props) => {
    return (
        <Flex
            background="none"
            m="8px 0"
            direction="row"
            justify="flex-start"
            align="center"
        >
            <CustomImage.Component
                src={props.badge}
                height="24px"
                width="24px"
                m="0"
            />
            <CustomText.Component
                type="medium"
                text={props.text}
                color="#FFF"
                bold={true}
                m="0 4px"
            />
        </Flex>
    )
}
