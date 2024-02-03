/** @format */

import React, { useState } from "react";

function Education({ education, setEducation }) {
  const [newName, setnewName] = useState("");
  const [newStartYear, setNewStartYear] = useState("");
  const [newEndYear, setNewEndYear] = useState("");
  const [newDegree, setNewDegree] = useState("");

  function handleAddEducation() {
    if (newName.trim() !== "" && education.length < 5) {
      const newEducation = {
        name: newName,
        startYear: newStartYear,
        endYear: newEndYear,
        degree: newDegree,
      };

      setEducation([...education, newEducation]);
      //reset state in form to clear input fields
      setnewName("");
      setNewStartYear("");
      setNewEndYear("");
      setNewDegree("");
    }

    if (education.length >= 5) {
      alert("Let's keep it to a max of 5 schools");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleAddEducation();
  }

  return (
    <div className="educationFormContainer">
      <div className="educationForm">
        <input
          placeholder="Add Education"
          value={newName}
          onChange={(e) => setnewName(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <input
          placeholder="Add start date"
          value={newStartYear}
          onChange={(e) => setNewStartYear(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <input
          placeholder="Add end date"
          value={newEndYear}
          onChange={(e) => setNewEndYear(e.target.value)}
          onKeyUp={handleKeyPress}
        />

        <input
          type="textArea"
          placeholder="Add degree"
          value={newDegree}
          onChange={(e) => setNewDegree(e.target.value)}
          onKeyUp={handleKeyPress}
        />
      </div>
      <button className="add" onClick={handleAddEducation}>
        +
      </button>
    </div>
  );
}

export default Education;
