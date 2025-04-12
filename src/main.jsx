import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import UsersAdd from './Componet/UsersAdd'
import MainLayout from './Page/MainLayout'
import AllUser from './AllUser'
import Update from './Update'
import ErrorPage from './Page/ErrorPage'
import AuthProvider from './Componet/AuthPorvider/AuthProvider'

const router = createBrowserRouter([
  {

    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: ([
      {
        path: '/',
        element: <UsersAdd></UsersAdd>
      },
      {
        path: '/allUser',
        element: <AllUser></AllUser>,
        loader: async () => {
          const res = await fetch('http://localhost:3000/users')
          const data = await res.json()
          const userAllData = data
          return userAllData;
        }
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        element: <Update></Update>

      }
    ])
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </StrictMode>,
)
