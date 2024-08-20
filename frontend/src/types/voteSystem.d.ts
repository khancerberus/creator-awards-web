export interface CategoryType {
    id: number
    title: string
    description: string
    resourceType: 'video' | 'image'
    voteLimit: number
}

export interface NominatedType {
    id: number
    title: string
    categoryId: number
    source: string
    bgSource: string | null
}

export interface Vote {
    id: number
    category: CategoryType
    selectedNominated: NominatedType[]
}

export interface Votes {
    votes: Vote[]
}
