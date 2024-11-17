import React, { useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import HeaderLoggedInAdmin from "./HeaderLoggedInAdmin"
import StateContext from "../StateContext"

const Header = () => {
  const appState = useContext(StateContext)

  return (
    <header className="header-bar bg-primary mb-0">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            TalentSync
          </Link>
        </h4>
        {/* Conditional rendering based on user's role */}
        {appState.loggedIn ? (
          appState.user?.role === "student" ? (
            <HeaderLoggedIn />
          ) : (
            <HeaderLoggedInAdmin />
          ) 
        ) : (
          <HeaderLoggedOut />
        )}
      </div>
    </header>
  )
}

export default Header
