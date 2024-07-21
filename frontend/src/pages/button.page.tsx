import { Button } from '@/components'
import { Page } from '../templates/Page'
import { unstable_useViewTransitionState } from 'react-router-dom'

const ButtonPage = (): JSX.Element => {
  const isTransitioning = unstable_useViewTransitionState('/dropdown')

  return (
    <Page className="flex flex-col items-center justify-center">
      <Button className={isTransitioning ? 'button-move' : ''}>Click me</Button>
    </Page>
  )
}

export default ButtonPage
