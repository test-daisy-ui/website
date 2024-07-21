import '@fontsource/poppins'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!)

// https://reactrouter.com/en/main/start/tutorial#adding-a-router
const router = createBrowserRouter([
  {
    path: '*',
    element: <App />
  }
])

root.render(<RouterProvider router={router} />)
