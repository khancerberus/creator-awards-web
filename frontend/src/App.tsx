import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/templates'

import { HomePage } from '@/pages'

import { Error404 } from '@/errors'

import '@/styles/index.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    path: '*',
    element: <Error404 />
  }
])

function App(): React.ReactNode {
  return <RouterProvider router={router} />
}

export default App
