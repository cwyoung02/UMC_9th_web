import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './layout/rootLayout'
import NotFound from './pages/NotFound'
import HomePage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage nav="popular" />
      },
      {
        path: 'popular',
        element: <HomePage nav="popular" />
      },
      {
        path: 'now_playing',
        element: <HomePage nav="now_playing" />
      },
      {
        path: 'top_rated',
        element: <HomePage nav="top_rated" />
      },
      {
        path: 'upcoming',
        element: <HomePage nav="upcoming"/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
