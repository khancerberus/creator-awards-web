import { Page } from '@/templates'

export function HomePage(): React.ReactNode {
  return (
    <Page className="mt-[130px] flex flex-col items-center justify-center gap-10">
      <section className="flex flex-col justify-center items-center">
        <h3>CREATOR AWARDS</h3>
        <h5>Trae tu asiento y espera pacientemente</h5>
      </section>

      <section className="flex gap-40">
        <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-transparent w-40 py-4 rounded-lg">
          <h1 className="font-bold">6</h1>
          <span>Meses</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-transparent w-40 py-4 rounded-lg">
          <h1 className="font-bold">1</h1>
          <span>Dias</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-transparent w-40 py-4 rounded-lg">
          <h1 className="font-bold">12</h1>
          <span>Horas</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-transparent w-40 py-4 rounded-lg">
          <h1 className="font-bold">59</h1>
          <span>Minutos</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-transparent w-40 py-4 rounded-lg">
          <h1 className="font-bold">45</h1>
          <span>Segundos</span>
        </div>
      </section>
    </Page>
  )
}
