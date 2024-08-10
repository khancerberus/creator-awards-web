import React from 'react'
import { Link } from 'react-router-dom'

import { TwitchButton } from './TwitchButton'
import { Logo } from './Logo'

export const Navbar = (): React.ReactNode => {
  return (
    <nav className="flex h-[130px] items-center justify-evenly z-10">
      {/* DONT USE HOME LINK, USE LOGO OR PAGE TITLE WITH LINK TO THE ROOT */}
      <Logo />

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
