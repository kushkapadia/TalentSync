import FilterSidebar from "../components/FilterSidebar"
import JobCard from "../components/JobCard"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Axios from "axios"
import styled from "styled-components"

const token = localStorage.getItem("talentSyncToken")

const AppContainer = styled.div`
  display: flex;
  margin: 3% 20% 20%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2% 5%;
  }
`;

const JobListings = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
`;

const FilterSidebarContainer = styled.div`
  width: 400px;
  margin-right: 20px;
  position: sticky;
  top: 20px;
  height: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileFilterToggle = styled.button`
  display: none;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileFilterSidebar = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;


const CloseButton = styled.button`
  background: transparent;
  color: #333;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

function Internships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchInternships = async () => {
      console.log("Fetching internships");

      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await Axios.get(`/jobpost/get-all`, {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API Response:", response.data);
        setInternships(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching internships:", err);
        setError("Failed to load internships. Please try again later.");
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AppContainer>
      <MobileFilterToggle onClick={() => setIsFilterOpen((prev) => !prev)}>
        {isFilterOpen ? "Hide Filters" : "Show Filters"}
      </MobileFilterToggle>
      <MobileFilterSidebar $isOpen={isFilterOpen}>
        <CloseButton onClick={() => setIsFilterOpen(false)}>&times;</CloseButton>
        <FilterSidebar />
      </MobileFilterSidebar>


      <FilterSidebarContainer>
        <FilterSidebar />
      </FilterSidebarContainer>

      <JobListings>
        {internships.data.map((job, index) => (
          <Link to={`/internships/${job.jobId}`} key={job.jobId}>
            <JobCard
              key={index}
              id={job._id}
              title={job.jobTitle}
              company={job.companyName}
              location={job.jobLocation}
              duration={job.duration}
              stipend={job.salaryRange}
              posted={job.createdAt}
              workType={job.jobType}
              companyLogo={job.companyLogo}
            />
          </Link>
        ))}
      </JobListings>
    </AppContainer>
  );
}

export default Internships;
