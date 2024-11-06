// import React, { useState } from "react";
// // import "./FilterSidebar.css";

// function FilterSidebar() {
//   const [stipend, setStipend] = useState(0);
//   const [profile, setProfile] = useState("");
//   const [location, setLocation] = useState("");
//   const [workFromHome, setWorkFromHome] = useState(false);
//   const [partTime, setPartTime] = useState(false);

//   const handleStipendChange = (e) => {
//     setStipend(Number(e.target.value));
//   };

//   const handleClearAll = () => {
//     setStipend(0);
//     setProfile("");
//     setLocation("");
//     setWorkFromHome(false);
//     setPartTime(false);
//   };

//   return (
//     <aside className="filter-sidebar">
//       <h3>Filters</h3>
//       <div className="filter-item">
//         <label htmlFor="profile">Profile</label>
//         <input
//           type="text"
//           id="profile"
//           placeholder="e.g. Marketing"
//           value={profile}
//           onChange={(e) => setProfile(e.target.value)}
//         />
//       </div>
//       <div className="filter-item">
//         <label htmlFor="location">Location</label>
//         <input
//           type="text"
//           id="location"
//           placeholder="e.g. Delhi"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>
//       <div className="filter-item checkbox-item">
//         <input
//           type="checkbox"
//           id="work-from-home"
//           checked={workFromHome}
//           onChange={(e) => setWorkFromHome(e.target.checked)}
//         />
//         <label htmlFor="work-from-home">Work from home</label>
//       </div>
//       <div className="filter-item checkbox-item">
//         <input
//           type="checkbox"
//           id="part-time"
//           checked={partTime}
//           onChange={(e) => setPartTime(e.target.checked)}
//         />
//         <label htmlFor="part-time">Part-time</label>
//       </div>
//       <div className="filter-item">
//         <label>Desired minimum monthly stipend (₹)</label>
//         <input
//           type="range"
//           min="0"
//           max="10000"
//           step="2000"
//           value={stipend}
//           onChange={handleStipendChange}
//         />
//         <div className="stipend-range">
//           <span>0</span>
//           <span>2K</span>
//           <span>4K</span>
//           <span>6K</span>
//           <span>8K</span>
//           <span>10K</span>
//         </div>
//       </div>
//       <button className="clear-all" onClick={handleClearAll}>
//         Clear all
//       </button>
//     </aside>
//   );
// }

// export default FilterSidebar;



import React, { useState } from "react";
// import "./FilterSidebar.css";

function FilterSidebar() {
  const [stipend, setStipend] = useState(0);
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);

  const handleStipendChange = (e) => {
    setStipend(Number(e.target.value));
  };

  const handleClearAll = () => {
    setStipend(0);
    setProfile("");
    setLocation("");
    setWorkFromHome(false);
    setPartTime(false);
  };

  const handleSubmit = () => {
    const filterData = {
      profile,
      location,
      workFromHome,
      partTime,
      stipend,
    };

    fetch("https://your-backend-api.com/filters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Filter data submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting filter data:", error);
      });
  };

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>
      <div className="filter-item">
        <label htmlFor="profile">Profile</label>
        <input
          type="text"
          id="profile"
          placeholder="e.g. Marketing"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="e.g. Delhi"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="filter-item checkbox-item">
        <input
          type="checkbox"
          id="work-from-home"
          checked={workFromHome}
          onChange={(e) => setWorkFromHome(e.target.checked)}
        />
        <label htmlFor="work-from-home">Work from home</label>
      </div>
      <div className="filter-item checkbox-item">
        <input
          type="checkbox"
          id="part-time"
          checked={partTime}
          onChange={(e) => setPartTime(e.target.checked)}
        />
        <label htmlFor="part-time">Part-time</label>
      </div>
      <div className="filter-item">
        <label>Desired minimum monthly stipend (₹)</label>
        <input
          type="range"
          min="0"
          max="10000"
          step="2000"
          value={stipend}
          onChange={handleStipendChange}
        />
        <div className="stipend-range">
          <span>0</span>
          <span>2K</span>
          <span>4K</span>
          <span>6K</span>
          <span>8K</span>
          <span>10K</span>
        </div>
      </div>
      <div className="button-container">
        <button className="filter-button" onClick={handleClearAll}>
          Clear all
        </button>
        <button className="filter-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </aside>
  );
}

export default FilterSidebar;
