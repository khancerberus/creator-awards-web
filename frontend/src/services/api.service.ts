import categories from '@/example/category.json'
import nominateds from '@/example/nominated.json'
import { CategoryType, NominatedType } from '@/types/voteSystem'

const getCategories = async (): Promise<CategoryType[]> => {
    return categories as CategoryType[]
}

const getNominateds = async (categoryId: number): Promise<NominatedType[]> => {
    return nominateds.filter(
        (nominated) => nominated.categoryId === categoryId
    ) as NominatedType[]
}

export const APIService = {
    getCategories,
    getNominateds
}
