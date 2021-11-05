import axios from "axios"
import * as Entity from "./DomainEntity"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getUserProfile = async (username: string) => {
    const apiAxios = axios.create({
        baseURL: endpoint,
        headers: {
            "Content-Type": "application/json",
        },
        responseType: "json",
    })

    const res = await apiAxios.get("/public/user_profile", {
        params: {
            username: username,
        },
    })
    return res.data as Entity.UserProfile
}
