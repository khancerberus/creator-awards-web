import { Page } from '@/templates'

import { Countdown } from '@/components/Countdown'
import { TwitchButton } from '@/components'

export function HomePage(): React.ReactNode {
  return (
    <Page className="-z-10 flex flex-col items-center justify-center gap-[30px] pt-[130px]">
      <div className="spyro-background"></div>

      <section className="flex">
        <h4 className="font-medium">Algo <span className="text-accent-1-400 font-medium">grande</span> está en camino!</h4>
      </section>

      <Countdown />

      <section className="flex flex-col items-center gap-2">
        <h5 className="font-bold">Creator Awards 2024</h5>
        <h6 className="font-medium">Consigue tu ticket aquí</h6>
        <TwitchButton />
      </section>
    </Page>
  )
}
