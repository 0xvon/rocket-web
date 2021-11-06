import axios from "axios"
import * as Entity from "./DomainEntity"
import MockUserProfile from "./mock.json"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getUserProfile = async (
    username: string
): Promise<Entity.UserProfile | undefined> => {
    const apiAxios = axios.create({
        baseURL: endpoint,
        headers: {
            "Content-Type": "application/json",
        },
        responseType: "json",
    })

    const res = await apiAxios
        .get(`/public/user_profile/${username}`)
        .catch(() => {
            return undefined
        })
    return res?.data as Entity.UserProfile
}

export const getUserProfileMock = () => {
    return MockUserProfile as Entity.UserProfile
}
