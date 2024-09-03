// import React, { useState } from "react"
// import Page from "./Page"
// import Axios from "axios"

// function HomeGuestGuest() {
//   const [username, setUsername] = useState()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()

//   async function handleSubmit(e) {
//     e.preventDefault()
//     try {
//       await Axios.post("/register", {
//         username: username, //This was the old style of writing, key-value pair
//         email, //as the name of key and value is same, we canjust right it once. (In modern js)
//         password
//       })
//       console.log("User was created")
//     } catch (e) {
//       console.log("Error")
//     }
//   }
//   return (
//     <Page title="Welcome" wide={true}>
//       <div className="row align-items-center">
//         <div className="col-lg-7 py-3 py-md-5">
//           <h1 className="display-3">Remember Writing?</h1>
//           <p className="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
//         </div>
//         <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username-register" className="text-muted mb-1">
//                 <small>Username</small>
//               </label>
//               {/* Everytime this form field changes, this function is going to run and update our value, thats being stored in state */}
//               <input onChange={e => setUsername(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email-register" className="text-muted mb-1">
//                 <small>Email</small>
//               </label>
//               <input onChange={e => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password-register" className="text-muted mb-1">
//                 <small>Password</small>
//               </label>
//               <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
//             </div>
//             <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
//               Sign up for ComplexApp
//             </button>
//           </form>
//         </div>
//       </div>
//     </Page>
//   )
// }

// export default HomeGuestGuest






import React, { useState } from 'react';
import Page from './Page';
// import './HomeGuest.css'; // Import the CSS file

function HomeGuest() {
  const [formData, setFormData] = useState({
    name: '',
    lName: '',
    email: '',
    password: '',
    contactNumber: '',
    address: '',
    city: '',
    dateOfBirth: '',
    gender: '',
    enrollmentYear: '',
    graduationYear: '',
    course: '',
    department: '',
    currentSemester: '',
    CGPA: '',
    projects: [],
    experience: '',
    skills: '',
    certificates: [],
    resumeLink: '',
    portfolioLink: '',
    linkedInProfileLink: '',
    gitHubProfileLink: '',
    programmingPlatformLink: '',
    clubs: '',
    achievements: [],
    preferredJobRole: '',
    preferredJobLocation: '',
    isHigherStudies: false,
    sapId: '',
    skillsInterestedToLearn: '',
    reputationScore: '',
    internshipsAppliedIn: '',
    badgesRecieved: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };



  return (

    <Page title="Registration page">

    

    <div className="registration-container">
      <h2 className="registration-heading">Student Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lName">Last Name</label>
          <input type="text" id="lName" name="lName" value={formData.lName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="enrollmentYear">Enrollment Year</label>
          <input type="number" id="enrollmentYear" name="enrollmentYear" value={formData.enrollmentYear} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="graduationYear">Graduation Year</label>
          <input type="number" id="graduationYear" name="graduationYear" value={formData.graduationYear} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="currentSemester">Current Semester</label>
          <input type="number" id="currentSemester" name="currentSemester" value={formData.currentSemester} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="CGPA">CGPA</label>
          <input type="number" step="0.01" id="CGPA" name="CGPA" value={formData.CGPA} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resumeLink">Resume Link</label>
          <input type="text" id="resumeLink" name="resumeLink" value={formData.resumeLink} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioLink">Portfolio Link</label>
          <input type="text" id="portfolioLink" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="linkedInProfileLink">LinkedIn Profile Link</label>
          <input type="text" id="linkedInProfileLink" name="linkedInProfileLink" value={formData.linkedInProfileLink} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gitHubProfileLink">GitHub Profile Link</label>
          <input type="text" id="gitHubProfileLink" name="gitHubProfileLink" value={formData.gitHubProfileLink} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="programmingPlatformLink">Programming Platform Link</label>
          <input type="text" id="programmingPlatformLink" name="programmingPlatformLink" value={formData.programmingPlatformLink} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="clubs">Clubs</label>
          <input type="text" id="clubs" name="clubs" value={formData.clubs} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="achievements">Achievements</label>
          <textarea id="achievements" name="achievements" value={formData.achievements} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="preferredJobRole">Preferred Job Role</label>
          <input type="text" id="preferredJobRole" name="preferredJobRole" value={formData.preferredJobRole} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="preferredJobLocation">Preferred Job Location</label>
          <input type="text" id="preferredJobLocation" name="preferredJobLocation" value={formData.preferredJobLocation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="isHigherStudies">Are you interested in Higher Studies?</label>
          <select id="isHigherStudies" name="isHigherStudies" value={formData.isHigherStudies} onChange={handleChange} required>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sapId">SAP ID</label>
          <input type="text" id="sapId" name="sapId" value={formData.sapId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="skillsInterestedToLearn">Skills Interested to Learn</label>
          <input type="text" id="skillsInterestedToLearn" name="skillsInterestedToLearn" value={formData.skillsInterestedToLearn} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="reputationScore">Reputation Score</label>
          <input type="number" id="reputationScore" name="reputationScore" value={formData.reputationScore} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="internshipsAppliedIn">Internships Applied In</label>
          <input type="text" id="internshipsAppliedIn" name="internshipsAppliedIn" value={formData.internshipsAppliedIn} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="badgesRecieved">Badges Received</label>
          <input type="text" id="badgesRecieved" name="badgesRecieved" value={formData.badgesRecieved} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>

    </Page>
  );
}

export default HomeGuest;
