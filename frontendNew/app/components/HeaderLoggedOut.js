import Axios from "axios"
import React, { useEffect, useState, useContext } from "react"
// import ExampleContext from "./ExampleContext"
import DispatchContext from "../DispatchContext"

function HeaderLoggedOut(props) {
  // const { setLoggedIn } = useContext(ExampleContext)

  const appDispatch = useContext(DispatchContext)
  const [email, setemail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/login-student", { email, password })
      console.log(response)
      if (response.data) {
        console.log(response.data)
        appDispatch({ type: "login", data: response.data })

        // setLoggedIn(true) //update state
        // appDispatch({type: "login"})
      } else if (response.status == "400") {
        console.log("Incorrect email / Password")
      }
    } catch (e) {
      // appDispatch({ type: "flashMessage", value: "Incorrect email / Password" })

      console.log("There was a problem" + e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={e => setemail(e.target.value)} name="email" className="form-control form-control-sm input-dark" type="email" placeholder="email" autoComplete="off" />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={e => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default HeaderLoggedOut
