import { Box, Image } from "@chakra-ui/react"

interface Props {
    src?: string | null
    height?: string | string[]
    width?: string | string[]
    m?: string | string[]
    radius?: string | string[]
    border?: string | string[]
}

export const Component = (props: Props) => {
    return (
        <>
            {props.src && props.src != null ? (
                <Image
                    src={props.src}
                    alt="custom image"
                    height={props.height}
                    width={props.width}
                    m={props.m}
                    borderRadius={props.radius}
                    borderColor={props.border}
                />
            ) : (
                <Box
                    backgroundColor="#909090"
                    height={props.height}
                    width={props.width}
                    m={props.m}
                    borderRadius={props.radius}
                    borderColor={props.border}
                />
            )}
        </>
    )
}
