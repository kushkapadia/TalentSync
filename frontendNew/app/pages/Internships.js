import React, { useEffect, useContext, useState } from "react"
import JobCard from "../components/JobCard"
import logo1 from "../Images/logo1.jpg"
import logo2 from "../Images/logo2.webp"
import logo3 from "../Images/logo3.jpeg"
import Page from "../components/Page"
import axios from "axios"
import StateContext from "../StateContext"

import LoadingDotsIcon from "../components/LoadingDotsIcon"

function Internships() {
  const appState = useContext(StateContext)

  const [isLoading, setIslaoding] = useState(true)
  const [internships, setInternships] = useState([])
  // const { username } = useParams()

  useEffect(() => {
    async function fetchinternships() {
      console.log("internships")
      try {
        const token = appState.user.token
        console.log(appState.user)
        const response = await axios.get("/jobpost/get-all", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response.data.data)
        setInternships(response.data.data)
        console.log(response.data.data)

        setIslaoding(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetchinternships()
  }, [])
  // console.log(internships)
  if (isLoading) return <LoadingDotsIcon />

  return (
    <Page title="Job List">
      <div className="jobs-list">
        {internships.map((job, index) => (
          <JobCard key={index} title={internships.jobTitle} company={job.companyName} location={job.jobLocation} duration={new Date(job.applicationDeadline).getDate() + "/" + new Date(job.applicationDeadline).getMonth() + 1 + "/" + new Date(job.applicationDeadline).getFullYear()} stipend={job.salaryRange} posted={job.postedDate} workType={job.jobType} companyLogo={job.companyLogo} />
        ))}
      </div>
    </Page>
  )
}

export default Internships
