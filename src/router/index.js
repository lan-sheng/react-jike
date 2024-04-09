import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'
// import Home from '@/pages/Home'
// import Article from '@/pages/Article'
// import Publist from '@/pages/Publish'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publist = lazy(() => import('@/pages/Publish'))
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        path: 'home',
        index: true,
        element: (
          <Suspense fallback={'加载中'}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'article',
        element: (
          <Suspense fallback={'加载中'}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: 'publist',
        element: (
          <Suspense fallback={'加载中'}>
            <Publist />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
])

export default router
