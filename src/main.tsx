import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HelloPage from '@/pages/hello.tsx'
import PlayPage from '@/pages/playground'

import NotFound from '@/pages/etc/not-found'

import {appPaths} from '@/lib/constants'
import Analytics from '#/Global/Analytics'

const router = createBrowserRouter([
  {
    path: appPaths.home,
    element: <HelloPage />,
    errorElement: <NotFound />,
  },
  {
    path: appPaths.playground,
    element: <PlayPage />,
  },
])

import '@/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {process.env.NODE_ENV === 'production' && <Analytics />}
  </React.StrictMode>,
)
