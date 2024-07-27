import React from 'react'
import { Link } from 'react-router-dom'

import { TwitchButton } from './TwitchButton'

export const Navbar = (): React.ReactNode => {
  return (
    <nav className="flex h-[130px] items-center justify-between bg-primary-500 px-96">
      {/* DONT USE HOME LINK, USE LOGO OR PAGE TITLE WITH LINK TO THE ROOT */}
      <div className="flex flex-col">
        <Link to="/" unstable_viewTransition>
          <h5 className="font-bold">Creator</h5>
          <h5 className="font-bold">Awards</h5>
        </Link>
      </div>

      <ul className="flex gap-4 font-medium items-center">
        <li>
          <Link to="/button" unstable_viewTransition>
            NOTICIAS
          </Link>
        </li>
        <li>
          <Link to="/dropdown" unstable_viewTransition>
            EVENTO
          </Link>
        </li>
        <li>
          <Link to="/dropdown" unstable_viewTransition>
            ACERCA DE
          </Link>
        </li>
        <li>
          <TwitchButton />
        </li>
      </ul>
    </nav>
  )
}
