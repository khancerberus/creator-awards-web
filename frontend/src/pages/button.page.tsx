import { Button } from '@/components'
import { Page } from '../templates/Page'
import { unstable_useViewTransitionState } from 'react-router-dom'
import { useDebugValue } from 'react'

export const ButtonPage = (): JSX.Element => {
  const isTransitioning = unstable_useViewTransitionState('/dropdown')
  useDebugValue(isTransitioning ? 'is transitioning' : 'not transitioning')

  return (
    <Page className="flex flex-col items-center justify-center">
      <Button className={isTransitioning ? 'button-move' : ''}>Click me</Button>
    </Page>
  )
}

