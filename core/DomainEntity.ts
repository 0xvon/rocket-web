export interface Group {
    id: string
    name: string
    artworkURL?: string | null
    isVerified: boolean
}

export interface GroupFeed {
    group: Group
    isFollowing: boolean
    followersCount: number
    watchingCount: number
}

export type LiveStyle = "oneman" | "battle" | "festival"
export interface LiveStyleOutput {
    kind: LiveStyle
    value: Group | Group[] // group id
}

export interface Live {
    id: string
    title: string
    style: LiveStyleOutput
    price: number
    artworkURL?: string | null
    liveHouse?: string | null
    date?: string | null
}

export interface LiveFeed {
    live: Live
    isLiked: boolean
    hasTicket: boolean
    likeCount: number
    participantCount: number
    postCount: number
    participatingFriends: User[]
}

export interface LiveTransition {
    yearLabel: string[]
    liveParticipatingCount: number[]
}

export interface User {
    id: string
    name: string
    sex?: string | null
    age?: number | null
    liveStyle?: string | null
    residence?: string | null
    thumbnailURL?: string | null
}

export interface UserProfile {
    user: User
    transition: LiveTransition
    frequentlyWatchingGroups: GroupFeed[]
    recentlyFollowingGroups: GroupFeed[]
    followingGroups: GroupFeed[]
    liveSchedule: LiveFeed[]
}
