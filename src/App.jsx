import {
  HomeLayout,
  About,
  Landing,
  Login,
  Orders,
  SingleProducts,
  Products,
  Cart,
  Checkout,
  Register,
  Error,
} from './Pages'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import {loader as landingLoader} from './Pages/Landing'
import {loader as singleProductLoader} from './Pages/SingleProducts'
import {loader as productsLoader} from './Pages/Products'
import { action as loginAction } from './pages/Login'

import {loader as checkoutLoader} from './Pages/Checkout'
import { store } from '../store'
import {action as checkoutAction} from './components/CheckoutForm'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'order',
        element: <Orders />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader:checkoutLoader(store),
        action:checkoutAction(store)
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProducts />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
    action:loginAction(store),
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
