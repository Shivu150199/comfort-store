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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import {loader as landingLoader} from './Pages/Landing'
import {loader as singleProductLoader} from './Pages/SingleProducts'
import {loader as productsLoader} from './Pages/Products'
import { action as loginAction } from './pages/Login'

import {loader as checkoutLoader} from './Pages/Checkout'
import { store } from '../store'
import {action as checkoutAction} from './components/CheckoutForm'
// import {loader as ordersLoader} from "./pages/Orders";
import {loader as ordersLoader} from './Pages/Orders'


const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5
    }
  }
})


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
        loader: landingLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      // {
      //   path: 'order',
      //   element: <Orders />,
      // },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader:checkoutLoader(store),
        action:checkoutAction(store,queryClient)
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: 'products/:id',
        element: <SingleProducts />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path:'order',
        element:<Orders/>,
        loader:ordersLoader(store,queryClient)
      }
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
  return <QueryClientProvider client={queryClient}>

  <RouterProvider router={router} />
  <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
}

export default App
