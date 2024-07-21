import { Link, Outlet } from 'react-router-dom'

export const Layout = (): JSX.Element => {
  // const location = useLocation()
  return (
    <div>
      <nav className="flex bg-red-700">
        <ul className="flex gap-2">
          <li>
            <Link to="/button" unstable_viewTransition>
              Button
            </Link>
          </li>
          <li>
            <Link to="/dropdown" unstable_viewTransition>
              Dropdown
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
