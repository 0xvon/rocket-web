import { Text } from "@chakra-ui/react"
export type TextType = "xlarge" | "large" | "medium" | "small"
interface Props {
    type: TextType
    text: string
    color?: string
    bold: boolean
    m?: string | string[]
}

export const Component = (props: Props) => {
    const fontSize = (): string | string[] => {
        switch (props.type) {
            case "xlarge":
                return "24px"
            case "large":
                return "20px"
            case "medium":
                return "16px"
            case "small":
                return "12px"
        }
    }

    return (
        <Text
            color={props.color}
            fontSize={fontSize()}
            fontWeight={props.bold ? "bold" : "medium"}
            background="none"
            m={props.m}
        >
            {props.text}
        </Text>
    )
}
