import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
// import ExampleContext from "./ExampleContext"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderLoggedIn(props) {
  // const { setLoggedIn } = useContext(ExampleContext)
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  //app meaning global or app wide
  function handleLogOut() {
    // setLoggedIn(false)
    appDispatch({ type: "logout" }) // thats the type of action, we want to dispatch
  }
  return (
    <div className="flex-row my-3 my-md-0">
      {/* <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span> */}
      {/* <Link to={`/profile/${appState.user.username}`} className="mr-2">
        <img className="small-header-avatar" src={appState.user.avatar} />
      </Link> */}
      <Link to="./internships" className="text-white mr-2">
        Internships
      </Link>
      <Link to="./applied-internships" className="text-white mr-2">
        Applied Internships
      </Link>
      {/* <a className="btn btn-sm btn-success mr-2" href="/create-post">
      Create Post
    </a> ---> This too will work, but this will load entirely a new page. Th emotive of react gets over.*/}

      <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
