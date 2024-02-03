/** @format */

import React, { useState } from "react";

function Experience({ experience, setExperience }) {
  const [newName, setnewName] = useState("");
  const [newStartYear, setNewStartYear] = useState("");
  const [newEndYear, setNewEndYear] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPosition, setNewPosition] = useState("");

  function handleAddExperience() {
    if (newName.trim() !== "" && experience.length < 5) {
      const newExperience = {
        name: newName,
        startYear: newStartYear,
        endYear: newEndYear,
        description: newDescription,
        position: newPosition,
      };

      setExperience([...experience, newExperience]);
      //reset state in form to clear input fields
      setnewName("");
      setNewStartYear("");
      setNewEndYear("");
      setNewDescription("");
      setNewPosition("");
    }

    if (experience.length >= 5) {
      alert("Let's keep it to a max of 5 Jobs");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleAddExperience();
  }

  /* function handleRemoveSkill(index) {
    const updatedExperiences = experience.filter((_, i) => i !== index);
    setExperience(updatedExperiences);
  } */

  return (
    <div className="experienceFormContainer">
      <div className="experienceForm">
        <input
          placeholder="Add experience"
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
          placeholder="Add position"
          value={newPosition}
          onChange={(e) => setNewPosition(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <textarea
          placeholder="Add description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onKeyUp={handleKeyPress}
        />
      </div>
      <button className="add" onClick={handleAddExperience}>
        +
      </button>
    </div>
  );
}

export default Experience;
