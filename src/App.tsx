import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Product } from './pages/Product';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      }
    ]
  }
])

export { router };