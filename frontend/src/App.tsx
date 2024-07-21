import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, Page } from '@/templates'

import ButtonPage from './pages/button.page'
import DropdownPage from './pages/dropdown.page'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/button',
        element: <ButtonPage />
      },
      {
        path: '/dropdown',
        element: <DropdownPage />
      },
      {
        path: '*',
        element: <Page>Select a page</Page>
      }
    ]
  }
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
