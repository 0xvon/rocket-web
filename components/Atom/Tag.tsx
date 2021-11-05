import { Box } from "@chakra-ui/react"
import { CustomText } from ".."

interface Props {
    text: string
    colorScheme: string
    type: CustomText.TextType
    m?: string | string[]
}

export const Component = (props: Props) => {
    return (
        <Box
            padding="4px 12px"
            borderColor={props.colorScheme}
            borderRadius="16px"
            borderWidth="1px"
            m={props.m}
        >
            <CustomText.Component
                text={props.text}
                type={props.type}
                bold={false}
                color={props.colorScheme}
            />
        </Box>
    )
}
