import React from "react";

function GeneralInfo({ data, setData }) {
  function handleChange(e, fieldName) {
    setData((prevData) => ({ ...prevData, [fieldName]: e.target.value }));
  }
  return (
    <div className="generalInfoFormContainer">
      <div className="GeneralInfoForm">
        <input
          placeholder="Name"
          value={data.name}
          onChange={(e) => handleChange(e, "name")}
        ></input>
        <input
          placeholder="email"
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        ></input>
        <input
          placeholder="number"
          value={data.number}
          onChange={(e) => handleChange(e, "number")}
        ></input>
        <input
          placeholder="address"
          value={data.address}
          onChange={(e) => handleChange(e, "address")}
        ></input>
      </div>
    </div>
  );
}

export default GeneralInfo;
