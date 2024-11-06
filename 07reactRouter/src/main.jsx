import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<Contact/>} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
