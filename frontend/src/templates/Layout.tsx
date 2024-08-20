import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'

export const Layout = (): JSX.Element => {
  return (
    <div className="h-full">
      <Navbar />
      <main
        className="flex w-full items-center justify-center"
        style={{ minHeight: 'calc(100% - 130px)' }}
      >
        <Outlet />
      </main>
    </div>
  )
}
