import { Page } from '@/templates'

import { Countdown } from '@/components/Countdown'

export function HomePage(): React.ReactNode {
  return (
    <Page className="-z-10 flex flex-col items-center justify-center gap-[30px] pt-[130px]">
      <div className="spyro-background"></div>

      <section className="flex">
        <h4 className="font-medium">Algo grande está en camino!</h4>
      </section>

      <Countdown />
    </Page>
  )
}
