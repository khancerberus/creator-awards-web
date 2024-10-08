import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/templates'

import { AuthPage, HomePage, Vote, VoteSystem } from '@/pages'

import { Error404 } from '@/errors'

import '@/styles/index.css'

import { UserProvider } from '@/contexts/UserContext'

const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      },
      {
        path: '/vote',
        element: <Vote />
      },
      {
        path: '/vote/proccess/:id',
        element: <VoteSystem />
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
