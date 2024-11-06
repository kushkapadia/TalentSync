import React, { useState } from "react";
// import "./FilterSidebar.css";

function FilterSidebar() {
  const [stipend, setStipend] = useState(0);

  const handleStipendChange = (e) => {
    setStipend(Number(e.target.value));
  };

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>
      <div className="filter-item">
        <label htmlFor="profile">Profile</label>
        <input type="text" id="profile" placeholder="e.g. Marketing" />
      </div>
      <div className="filter-item">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="e.g. Delhi" />
      </div>
      <div className="filter-item checkbox-item">
        <input type="checkbox" id="work-from-home" />
        <label htmlFor="work-from-home">Work from home</label>
      </div>
      <div className="filter-item checkbox-item">
        <input type="checkbox" id="part-time" />
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
      <button className="clear-all">Clear all</button>
    </aside>
  );
}

export default FilterSidebar;
