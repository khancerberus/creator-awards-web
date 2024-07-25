import { Link } from 'react-router-dom'

import spyro404 from '@/assets/images/2.png'
import burst from '@/assets/images/trofeo-dorado.png'

export function Error404(): React.ReactNode {
  //make background image parallax effect

  return (
    <>
      <div
        id="background"
        className="fixed bottom-0 left-0 right-0 top-0 -z-10"
        style={{
          background: `center / 70% no-repeat url(${burst}), linear-gradient(180deg, transparent 50%, var(--primary-900) 100%)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(15px)'
        }}
      ></div>
      <main
        className="absolute bottom-0 left-0 right-0 top-0 flex flex-col content-center items-center justify-center gap-5"
        style={{
          userSelect: 'none',
          background: `linear-gradient(180deg, transparent 0%, var(--primary-dark-900) 100%)`
        }}
      >
        <section className="w-40 transition-all duration-300 sm:w-60 md:w-80 lg:w-96">
          <img
            src={spyro404}
            alt="Spyro 404"
            className="img-undraggable rounded-full shadow-lg shadow-primary-900"
          />
        </section>

        <section className="text-center font-extrabold">
          <h1 className="text-6xl transition-all duration-300 sm:text-8xl md:text-9xl">
            404
          </h1>
          <h3 className="text-xl transition-all duration-300 sm:text-2xl md:text-4xl">
            Página no encontrada
          </h3>
        </section>

        <section className="flex flex-col">
          <h5 className="text-2xl transition-all duration-300">
            Quizás quieras visitar:
          </h5>

          <ul className="flex flex-col p-5">
            <li>
              <Link to="/" className="link-404">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/" className="link-404">
                Acerca de
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
