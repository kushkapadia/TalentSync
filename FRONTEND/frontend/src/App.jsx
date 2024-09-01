import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Internships from "./pages/Internships"
import Profile from "./pages/Profile"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/internships",
      element: <><Navbar /><Internships /></>
    },
    {
      path: "/profile",
      element: <><Navbar /><Profile /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App