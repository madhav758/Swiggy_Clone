import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Cart from './components/Cart.jsx'
import Signin from './components/Signin.jsx'
import Error from './components/Error.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'
import Clock from './components/Clock.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/offer",
        element: <Offer />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />
      },
      {
        path: "/clock",
        element: <Clock />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
) 
