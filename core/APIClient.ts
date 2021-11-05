import axios from "axios"
import * as Entity from "./DomainEntity"
import MockUserProfile from "./mock.json"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getUserProfile = async (username: string) => {
    const apiAxios = axios.create({
        baseURL: endpoint,
        headers: {
            "Content-Type": "application/json",
        },
        responseType: "json",
    })

    const res = await apiAxios.get(`/public/user_profile/${username}`)
    return res.data as Entity.UserProfile
}

export const getUserProfileMock = () => {
    return MockUserProfile as Entity.UserProfile
}
