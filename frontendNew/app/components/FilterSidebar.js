import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h3`
  font-size: 1.75em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const FilterItem = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
  font-size: 1.2em;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled(Label)`
  margin: 0;
  font-weight: normal;
`;

const RangeInput = styled.input`
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  background: #007bff;
  outline: none;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #333;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const StipendRange = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #777;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  margin-top: 15px;
`;

const FilterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

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
    <SidebarContainer>
      <Title>Filters</Title>
      <FilterItem>
        <Label htmlFor="profile">Profile</Label>
        <TextInput
          type="text"
          id="profile"
          placeholder="e.g. Marketing"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
      </FilterItem>
      <FilterItem>
        <Label htmlFor="location">Location</Label>
        <TextInput
          type="text"
          id="location"
          placeholder="e.g. Delhi"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </FilterItem>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="work-from-home"
          checked={workFromHome}
          onChange={(e) => setWorkFromHome(e.target.checked)}
        />
        <CheckboxLabel htmlFor="work-from-home">Work from home</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="part-time"
          checked={partTime}
          onChange={(e) => setPartTime(e.target.checked)}
        />
        <CheckboxLabel htmlFor="part-time">Part-time</CheckboxLabel>
      </CheckboxContainer>
      <FilterItem>
        <Label>Desired minimum monthly stipend (₹)</Label>
        <RangeInput
          type="range"
          min="0"
          max="10000"
          step="2000"
          value={stipend}
          onChange={handleStipendChange}
        />
        <StipendRange>
          <span>0</span>
          <span>2K</span>
          <span>4K</span>
          <span>6K</span>
          <span>8K</span>
          <span>10K</span>
        </StipendRange>
      </FilterItem>
      <ButtonContainer>
        <FilterButton onClick={handleClearAll}>Clear all</FilterButton>
        <FilterButton onClick={handleSubmit}>Submit</FilterButton>
      </ButtonContainer>
    </SidebarContainer>
  );
}

export default FilterSidebar;
