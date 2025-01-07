import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'
import Sonner from '@/components/ui/sonner'
import Auth from './pages/auth'
import Manager from './pages/manager'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Manager />,

    // we'll add the route that displays a board here
    children: [
      {
        path: '/boards/:boardId',
        element: <div></div>,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Sonner />
    </>
  )
}
