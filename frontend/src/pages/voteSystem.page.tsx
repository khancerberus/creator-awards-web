import LiteYouTubeEmbed from 'react-lite-youtube-embed'

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { useEffect, useState } from 'react'
import {
  // useNavigate,
  useParams
} from 'react-router-dom'

import { ImageCategory } from '@/components/ImageCategory'
import { Modal } from '@/components/Modal'

import { APIService } from '@/services/api.service'

import { useVoteStore } from '@/store/voteStore'
import { type CategoryType, type NominatedType } from '@/types/voteSystem'

interface NominatedProps {
  nominated: NominatedType
  category: CategoryType
}

const Nominated = ({ nominated, category }: NominatedProps): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false)

  // if (category?.resourceType === 'image') {
  return (
    <div
      onClick={() => {
        setIsVisible(true)
      }}
    >
      <div className="relative">
        <img
          src={nominated?.source}
          alt="placeholder"
          className="w-40 border-2 border-primary-700"
        />
        <p className="absolute -left-5 top-36 w-full rounded-full bg-primary-700 p-2">
          {nominated.title}
        </p>
      </div>
      <Modal
        visible={isVisible}
        closeModal={() => {
          setIsVisible(false)
        }}
      >
        <img
          src={nominated?.source}
          alt="placeholder"
          className="border-2 border-primary-700"
        />
      </Modal>
    </div>
  )
  // } else if (category?.resourceType === 'video') {
  //   return (
  //     <div className="relative">
  //       <div className="w-96">
  //         <LiteYouTubeEmbed id={nominated?.source} title="YouTube video player" />
  //       </div>
  //       <p className="absolute -left-5 top-40 w-full rounded-full bg-primary-700 p-2">
  //         {nominated.title}
  //       </p>
  //     </div>
  //   )
  // }
}

export const VoteSystem = (): JSX.Element => {
  // const navigate = useNavigate()
  const { id } = useParams()
  // const started = useVoteStore((state) => state.started)
  // const setStarted = useVoteStore((state) => state.setStarted)
  const categories = useVoteStore((state) => state.categories)
  const currentCategory = useVoteStore((state) => state.currentCategory)
  const setCurrentCategory = useVoteStore((state) => state.setCurrentCategory)

  useEffect(() => {
    if (id != null) {
      const category = categories?.find((category) => category.id === Number(id))

      if (category != null) setCurrentCategory(category)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-10">
      {currentCategory?.resourceType == 'image' && (
        <ImageCategory category={currentCategory} />
      )}
      {currentCategory?.resourceType == 'video' && <div>video category</div>}
    </div>
  )
}
