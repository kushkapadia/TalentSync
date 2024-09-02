import React, { useContext, useState } from "react"
// import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../StateContext"

// function Header(props) {
// const appState = useContext(StateContext)

//   return (
//     <header className="header-bar bg-primary mb-3">
//       <div className="container d-flex flex-column flex-md-row align-items-center p-3">
//         <h4 className="my-0 mr-md-auto font-weight-normal">
//           <Link to="/" className="text-white">
//             ComplexApp
//           </Link>
//         </h4>
//         {/* Old way */}
//         {/* {props.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />} */}
//         {/* New Way */}
//         {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
//       </div>
//     </header>
//   )
// }

// export default Header

// Navbar.jsx
// import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #f0a500;
  }
`

const Header = () => {
  const appState = useContext(StateContext)
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            TalentSync
          </Link>
        </h4>
        {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      </div>
    </header>
  )
}

export default Header
