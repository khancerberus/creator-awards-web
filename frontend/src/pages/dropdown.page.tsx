import { Button, Dropdown } from '@/components'
import { Page } from '@/templates'
import { unstable_useViewTransitionState } from 'react-router-dom'

const options = [
  'Serenity',
  '978',
  'sweet',
  'grafito',
  'zero',
  'harry',
  'casifitness',
  'diego',
  'juanpi',
  'boostian',
  'marulo',
  'raeven',
  'lhabian',
  'fury'
]

export const DropdownPage = (): JSX.Element => {
  const isTransitioning = unstable_useViewTransitionState('/button')

  return (
    <Page className="flex flex-row items-center justify-center">
      <Dropdown className={isTransitioning ? 'slide' : ''} options={options} />
      <div className="mt-52">
        <Button className={isTransitioning ? 'button-move' : ''}>Click me</Button>
      </div>
    </Page>
  )
}
