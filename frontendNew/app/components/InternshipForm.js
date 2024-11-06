// components/InternshipForm.js
import React, { useState } from "react"

function InternshipForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here (e.g., Axios POST request)
    console.log({ title, description, company, location })
  }

  return (
    <div>
      <h2>Submit an Internship</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Company:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit Internship</button>
      </form>
    </div>
  )
}

export default InternshipForm
