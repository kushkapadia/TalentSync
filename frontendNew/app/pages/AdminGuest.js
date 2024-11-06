import axios from "axios"
import React, { useEffect, useState, useContext } from "react"
// import ExampleContext from "./ExampleContext"
import DispatchContext from "../DispatchContext"

const AdminGuest = () => {
  const appDispatch = useContext(DispatchContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const response = await axios.post("/login-admin", { email, password })
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
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Admin Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={styles.input} />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={styles.input} />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f6f8"
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "2em",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center"
  },
  heading: {
    marginBottom: "1.5em",
    color: "#333333",
    fontSize: "1.8em",
    fontWeight: "600"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  inputContainer: {
    marginBottom: "1em",
    textAlign: "left"
  },
  label: {
    fontSize: "1em",
    color: "#555",
    marginBottom: "0.5em",
    display: "block"
  },
  input: {
    width: "100%",
    padding: "0.8em",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ddd",
    transition: "border 0.3s",
    outline: "none"
  },
  inputFocus: {
    border: "1px solid #007BFF"
  },
  error: {
    color: "red",
    marginBottom: "1em"
  },
  button: {
    padding: "0.8em",
    fontSize: "1em",
    color: "#ffffff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  },
  buttonHover: {
    backgroundColor: "#0056b3"
  }
}

export default AdminGuest
