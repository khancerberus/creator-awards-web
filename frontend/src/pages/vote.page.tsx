import { useNavigate } from 'react-router-dom'

import { APIService } from '@/services/api.service'

import { useVoteStore } from '@/store/voteStore'
// import { CategoryType } from '@/types/voteSystem'

export const Vote = (): React.ReactNode => {
  const navigate = useNavigate()
  // const started = useVoteStore((state) => state.started)
  const setStarted = useVoteStore((state) => state.setStarted)
  const setCategories = useVoteStore((state) => state.setCategories)
  const setCurrentCategory = useVoteStore((state) => state.setCurrentCategory)

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h3 className="vote-title slide">Comenzar la votación</h3>
      <div>
        <button
          className="rounded-md border p-2 hover:bg-white hover:text-[#16161D]"
          onClick={() => {
            APIService.getCategories()
              .then((categories) => {
                const firstCategory = categories[0]

                setStarted(true)
                setCategories(categories)
                setCurrentCategory(firstCategory)
                navigate(`/vote/proccess/${firstCategory.id}`, {
                  unstable_viewTransition: true
                })
              })
              .catch((error) => {
                console.error(error)
              })
          }}
        >
          Ir a votar
        </button>
      </div>
    </div>
  )
}
