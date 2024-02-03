import React, { useState } from "react";

function Hobbies({ hobbies, setHobbies }) {
  const [newHobbyName, setNewHobbyName] = useState("");

  function handleAddHobby() {
    if (newHobbyName.trim() !== "" && hobbies.length < 10) {
      const newHobby = {
        name: newHobbyName,
      };
      setHobbies([...hobbies, newHobby]);
      setNewHobbyName("");
    }
    if (hobbies.length >= 10) {
      alert("Wow! Let's keep it to 10 or less");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleAddHobby();
  }

  return (
    <div className="hobbiesFormContainer">
      <div className="hobbiesForm">
        <input
          placeholder="Add hobby"
          value={newHobbyName}
          onChange={(e) => setNewHobbyName(e.target.value)}
          onKeyUp={handleKeyPress}
        />
      </div>
      <button className="add" onClick={handleAddHobby}>
        +
      </button>
    </div>
  );
}

export default Hobbies;
