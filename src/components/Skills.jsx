import React, { useState } from "react";

function Skills({ skills, setSkills }) {
  const [newSkillName, setNewSkillName] = useState("");

  function handleAddSkill() {
    if (newSkillName.trim() !== "" && skills.length < 10) {
      setSkills([...skills, { name: newSkillName }]);
      setNewSkillName("");
    }
    if (skills.length >= 10) {
      alert("Max of 10 skills, you little show off, you");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleAddSkill();
  }

  function handleRemoveSkill(index) {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  }

  return (
    <div className="skillsFormContainer">
      <div className="skillsForm">
        <input
          placeholder="Add skill"
          value={newSkillName}
          onChange={(e) => setNewSkillName(e.target.value)}
          onKeyUp={handleKeyPress}
        />
      </div>
      <button className="add" onClick={handleAddSkill}>
        +
      </button>
    </div>
  );
}

export default Skills;
