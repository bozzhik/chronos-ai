import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HelloPage from '@/pages/hello.tsx'
import PlayPage from '@/pages/playground'
import NotFound from '@/pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HelloPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/playground',
    element: <PlayPage />,
  },
])

import '@/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
