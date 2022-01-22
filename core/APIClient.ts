import axios from "axios"
import * as Entity from "./DomainEntity"
import MockUserProfile from "./mocks/userProfile.json"
import MockLiveInfo from "./mocks/liveInfo.json"
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

export const getLiveInfo = async (
    liveId: string
): Promise<Entity.LiveInfo | undefined> => {
    const apiAxios = axios.create({
        baseURL: endpoint,
        headers: {
            "Content-Type": "application/json",
        },
        responseType: "json",
    })

    const res = await apiAxios.get(`/public/live_info/${liveId}`).catch(() => {
        return undefined
    })
    return res?.data as Entity.LiveInfo
}

export const getUserProfileMock = () => {
    return MockUserProfile as Entity.UserProfile
}

export const getLiveInfoMock = () => {
    return MockLiveInfo as Entity.LiveInfo
}
