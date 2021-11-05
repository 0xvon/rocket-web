import { FormEventHandler } from "react"
import { Stack } from "@chakra-ui/react"
import { InputControl, SubmitButton } from "formik-chakra-ui"
import { Formik } from "formik"
import * as Yup from "yup"

interface Props {
    submitAction: (username: string) => void
    isLoading: boolean
}

interface FormValues {
    username: string
}

export const Component = (props: Props) => {
    const formSchema = Yup.object().shape({
        username: Yup.string().required("入力されていません"),
        // .matches(
        //     /^[a-zA-Z0-9_\-.]{1,12}$/,
        //     "正しいユーザーネームを入力してください"
        // ),
    })
    const onSubmit = async (values: FormValues) => {
        props.submitAction(values.username)
    }

    return (
        <Formik
            initialValues={{
                username: "",
            }}
            validationSchema={formSchema}
            onSubmit={async (username) => {
                await onSubmit(username)
            }}
            enableReinitialize={true}
        >
            {({ handleSubmit }) => (
                <Stack
                    width={["90%", "90%", "60%", "60%"]}
                    as="form"
                    onSubmit={
                        handleSubmit as unknown as FormEventHandler<HTMLDivElement>
                    }
                    spacing={6}
                    margin="24px auto"
                >
                    <InputControl
                        id="hoge"
                        name="username"
                        label="ユーザーネーム"
                        borderColor="#E4472A"
                    />
                    <SubmitButton
                        isLoading={props.isLoading}
                        colorScheme="green"
                        backgroundColor="#E4472A"
                    >
                        検索
                    </SubmitButton>
                </Stack>
            )}
        </Formik>
    )
}
