import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { type CategoryType, type NominatedType } from '@/types/voteSystem'

interface VoteStoreType {
  started: boolean
  currentCategory: CategoryType | null
  currentNominateds: NominatedType[] | null
  categories: CategoryType[] | null
  setStarted: (started: boolean) => void
  setCategories: (categories: CategoryType[]) => void
  setCurrentCategory: (category: CategoryType) => void
  setCurrentNominateds: (nominateds: NominatedType[]) => void
  reset: () => void
}

const initialState = {
  started: false,
  currentCategory: null,
  currentNominateds: null,
  categories: null
}

export const useVoteStore = create<VoteStoreType>()(
  persist(
    (set) => ({
      ...initialState,
      setStarted: (started: boolean): void => set({ started }),
      setCategories: (categories: CategoryType[]): void => set({ categories }),
      setCurrentCategory: (currentCategory: CategoryType): void =>
        set({ currentCategory }),
      setCurrentNominateds: (currentNominateds: NominatedType[]): void =>
        set({ currentNominateds }),
      reset: (): void => {
        set(initialState)
      }
    }),
    {
      name: 'vote-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
