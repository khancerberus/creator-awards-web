import { useNavigate } from 'react-router-dom'

import { Countdown } from '@/components/Countdown'

export function HomePage(): React.ReactNode {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-[30px]">
      <section className="flex">
        <h4 className="font-medium vote-title">
          Algo <span className="font-medium text-accent-1-400">grande</span> está en
          camino!
        </h4>
      </section>

      <Countdown />

      <section className="flex flex-col items-center gap-2">
        <h5 className="font-bold">Creator Awards 2024</h5>
        <div className="flex gap-2">
          <button className="rounded-md border p-2 hover:bg-white hover:text-[#16161D]">
            Consigue tu ticket
          </button>
          <button
            className="rounded-md border p-2 hover:bg-white hover:text-[#16161D]"
            onClick={() => navigate('/vote', {
              unstable_viewTransition: true
            })}
          >
            Vota aquí
          </button>
        </div>
      </section>

      <footer className="flex items-center justify-center" style={{
        height: '100%',
        background: '#16161F',
        color: '#fff'
      }}>
        <p
          className="text-center text-sm text-gray-500"
          style={{ marginTop: '1rem' }}
        >
          &copy; 2024 Creator Awards
        </p>
      </footer>
    </div>
  )
}
