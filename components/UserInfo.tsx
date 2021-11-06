import { Domain } from "../core"
import { Box, Flex } from "@chakra-ui/react"
import { CustomImage, CustomText, Tag, theme } from "."

interface Props {
    user: Domain.User
}

export const Component = (props: Props) => {
    const introduction = (): string => {
        return [props.user.age, props.user.sex, props.user.residence]
            .filter((item) => item != undefined && item != null)
            .join("・")
    }
    return (
        <Flex m={["20px", "20px auto"]} maxWidth="700px">
            <CustomImage.Component
                src={props.user.thumbnailURL}
                width={["60px", "150px"]}
                height={["60px", "150px"]}
                radius={["30px", "75px"]}
            />

            <Box marginLeft="8px">
                <CustomText.Component
                    text={props.user.name}
                    type="large"
                    bold={true}
                    m="0 0 4px 0"
                />
                <CustomText.Component
                    text={introduction()}
                    type="small"
                    bold={false}
                    m="0 0 4px 0"
                />
                {props.user.liveStyle ? (
                    <Tag.Component
                        text={props.user.liveStyle}
                        colorScheme={theme.color.brand.primary}
                        type="small"
                    />
                ) : (
                    <></>
                )}
            </Box>
        </Flex>
    )
}
