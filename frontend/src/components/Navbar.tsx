import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'
import { TwitchButton } from './TwitchButton'
import './Navbar.css'

export const Navbar = (): React.ReactNode => {
  return (
    <nav className="relative flex h-[130px] items-center justify-evenly z-50">
      <input type="checkbox" id="nav-check" />
      {/* DONT USE HOME LINK, USE LOGO OR PAGE TITLE WITH LINK TO THE ROOT */}
      <header>
        <Link to="/" unstable_viewTransition>
          <Logo />
        </Link>
      </header>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul className="nav-links flex items-center gap-4 font-medium">
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
