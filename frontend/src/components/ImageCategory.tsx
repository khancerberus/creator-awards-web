import { useEffect, useState } from 'react'

import { APIService } from '@/services/api.service'

import { useVoteStore } from '@/store/voteStore'
import { CategoryType, NominatedType } from '@/types/voteSystem'

import './ImageCategory.css'

interface ImageCategoryProps {
  category: CategoryType
}

interface NominatedProps {
  nominated: NominatedType
  selected: boolean
  onClick: () => void
}

const Nominated = ({ nominated, selected, onClick }: NominatedProps): React.ReactNode => {
  useEffect(() => {
    const cards = document.querySelector('.cards')
    const images = document.querySelectorAll('.card__img')
    const backgrounds = document.querySelectorAll('.card-bg')
    const range = 40

    if (selected) {
      if (cards == null) return
      cards.style.transform = `rotateX(0deg) rotateY(0deg)`
      ;[].forEach.call(images, (image) => {
        image.style.transform = `translateX(0px) translateY(0px)`
      })
      ;[].forEach.call(backgrounds, (background) => {
        background.style.backgroundPosition = `center`
      })
    }

    // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
    const calcValue = (a: number, b: number): string =>
      ((a / b) * range - range / 2).toFixed(1) // thanks @alice-mx

    let timeout: number
    document.addEventListener(
      'mousemove',
      ({ x, y }) => {
        if (timeout) {
          window.cancelAnimationFrame(timeout)
        }

        timeout = window.requestAnimationFrame(() => {
          const yValue = calcValue(y, window.innerHeight)
          const xValue = calcValue(x, window.innerWidth)
          if (cards == null) return
          cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`
          ;[].forEach.call(images, (image) => {
            image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`
          })
          ;[].forEach.call(backgrounds, (background) => {
            background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`
          })
        })
      },
      false
    )
  }, [])

  return (
    <article
      className="card"
      onClick={onClick}
      style={{
        filter: selected ? 'grayscale(0%)' : ''
      }}
    >
      <div
        className="card-bg"
        style={{
          backgroundImage: `url(${nominated.bgSource})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <img
        draggable="false"
        className="card__img"
        src={nominated.source}
        alt={`${nominated.title} image`}
      />
      <div className="card__text">
        <p className="card__title">{nominated.title}</p>
      </div>
    </article>
  )
}

export const ImageCategory = ({ category }: ImageCategoryProps): JSX.Element => {
  const currentNominateds = useVoteStore((state) => state.currentNominateds)
  const setCurrentNominateds = useVoteStore((state) => state.setCurrentNominateds)
  const [selected, setSelected] = useState<NominatedType | null>(null)

  useEffect(() => {
    APIService.getNominateds(category.id)
      .then((nominateds) => {
        setCurrentNominateds(nominateds)
      })
      .catch((error) => {
        console.error(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="cards">
      <header className="mb-10">
        <h6>{category.description}</h6>
        <h4 className="font-medium">Categoría: {category.title}</h4>

        <p className="mt-2">Seleccionado: {selected?.title}</p>
      </header>

      {currentNominateds?.map((nominated) => (
        <Nominated
          key={nominated.id}
          nominated={nominated}
          selected={selected?.id === nominated.id}
          onClick={() => {
            if (selected?.id === nominated.id) {
              setSelected(null)
            } else {
              setSelected(nominated)
            }
          }}
        />
      ))}
    </div>
  )
}
