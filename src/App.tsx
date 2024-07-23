import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './constants/routes.json'
import Home from './pages/Home'
import TermsConditions from './pages/TermsConditions'

const App = () => {
  // https://reactrouter.com/en/main/start/tutorial#adding-a-router
  const router = createBrowserRouter([
    {
      path: routes.Terms,
      element: <TermsConditions />
    },
    {
      path: routes.Home,
      element: <Home />
    }
  ])

  return (
    <div className="App prose">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
