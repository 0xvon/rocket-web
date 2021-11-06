import { Domain } from "../../core"
import { Flex } from "@chakra-ui/react"
import { Line } from "react-chartjs-2"
import { CustomText, StatsSummary, theme } from "../"

interface Props {
    liveTransition: Domain.LiveTransition
}

export const Component = (props: Props) => {
    return (
        <>
            <CustomText.Component
                text="ライブ参戦数"
                type="xlarge"
                bold={true}
                m="0 0 20px 0"
            />
            <Line
                data={{
                    labels: props.liveTransition.yearLabel,
                    datasets: [
                        {
                            data: props.liveTransition.liveParticipatingCount,
                            backgroundColor: theme.color.brand.primary,
                            borderColor: theme.color.brand.primary,
                            borderWidth: 4,
                            label: "今までのライブ参戦数",
                        },
                    ],
                }}
            />
            <Flex direction="row" m="20px 0">
                <StatsSummary.Component
                    width="50%"
                    title="総ライブ参戦数"
                    count={props.liveTransition.liveParticipatingCount.reduce(
                        (a, b) => a + b
                    )}
                    unit="回"
                />
                <StatsSummary.Component
                    width="50%"
                    title="推定チケット総額"
                    count={
                        props.liveTransition.liveParticipatingCount.reduce(
                            (a, b) => a + b
                        ) * 5000
                    }
                    unit="円"
                />
            </Flex>
        </>
    )
}
