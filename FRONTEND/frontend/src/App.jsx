import React from "react"
// import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path = "" element = {<Home />}></Route>
      </Routes> */}
      <Home />
    </>
  )
}
export default App
