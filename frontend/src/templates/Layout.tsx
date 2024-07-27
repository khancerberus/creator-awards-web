import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'

export const Layout = (): JSX.Element => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  )
}
