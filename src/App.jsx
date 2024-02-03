import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import "./styles/App.css";
import Accordion from "./components/Accordion";
import initialData from "./utils/data";

function App() {
  const [data, setData] = useState(initialData);

  function handleClearAll() {
    setData((prevData) => ({
      ...prevData,
      name: "",
      email: "",
      number: "",
      address: "",
      skills: [],
      education: [],
      experience: [],
      hobbies: [],
    }));
  }

  return (
    <div className="app">
      {/* Form sections */}
      <div className="formGroupsContainer">
        <Accordion
          title={"Bio"}
          content={<GeneralInfo data={data} setData={setData} />}
        ></Accordion>
        <Accordion
          title={"Experience"}
          content={
            <>
              <Experience
                experience={data.experience}
                setExperience={(newExperience) =>
                  setData({ ...data, experience: newExperience })
                }
              />
              <div className="experienceContainer">
                {data.experience.map((experience, index) => (
                  <div className="experienceEntry" key={index}>
                    <span className="experience">{experience.name}</span>
                    <button
                      onClick={() =>
                        setData((prevData) => ({
                          ...prevData,
                          experience: prevData.experience.filter(
                            (_, i) => i !== index,
                          ),
                        }))
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </>
          }
        ></Accordion>
        <Accordion
          title={"Skills"}
          content={
            <>
              <Skills
                skills={data.skills}
                setSkills={(newSkills) =>
                  setData({ ...data, skills: newSkills })
                }
              />
              <div className="skillContainer">
                {data.skills.map((skill, index) => (
                  <div className="skillsEntry" key={index}>
                    <span className="skill">{skill.name}</span>
                    <button
                      onClick={() =>
                        setData((prevData) => ({
                          ...prevData,
                          skills: prevData.skills.filter((_, i) => i !== index),
                        }))
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </>
          }
        ></Accordion>
        <Accordion
          title={"Education"}
          content={
            <>
              <Education
                education={data.education}
                setEducation={(newEducation) =>
                  setData({ ...data, education: newEducation })
                }
              />
              <div className="educationContainer">
                {data.education.map((education, index) => (
                  <div className="educationEntry" key={index}>
                    <span className="education">{education.name}</span>
                    <button
                      onClick={() =>
                        setData((prevData) => ({
                          ...prevData,
                          education: prevData.education.filter(
                            (_, i) => i !== index,
                          ),
                        }))
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </>
          }
        ></Accordion>
        <Accordion
          title={"Hobbies"}
          content={
            <>
              <Hobbies
                hobbies={data.hobbies}
                setHobbies={(newHobby) =>
                  setData({ ...data, hobbies: newHobby })
                }
              />
              <div className="hobbyContainer">
                {data.hobbies.map((hobby, index) => (
                  <div className="hobbiesEntry" key={index}>
                    <span className="hobby" key={hobby.name}>
                      {hobby.name}
                    </span>
                    <button
                      onClick={() =>
                        setData((prevData) => ({
                          ...prevData,
                          hobbies: prevData.hobbies.filter(
                            (_, i) => i !== index,
                          ),
                        }))
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </>
          }
        ></Accordion>
      </div>
      {/* Preview sections */}
      <div className="preview">
        <div className="personalInfoGroup">
          <ul className="personalInfoList">
            <li>
              <h2 className="nameHeader">{data.name}</h2>
            </li>
            <li>
              <strong>Email:</strong> {data.email}
            </li>
            <li>
              <strong>Number:</strong> {data.number}
            </li>
            <li>
              <strong>Address:</strong> {data.address}
            </li>
          </ul>
          <div className="skillsContainer">
            <h3 className="skillsHeader">My skills:</h3>{" "}
            <div className="skillsGroup">
              {data.skills.map((skill, index) => (
                <div className="skillsEntry" key={index}>
                  <span className="skill">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="experienceGroup">
          <h3 className="sectionTitle">Experience: </h3>

          {data.experience.map((exp, index) => (
            <div className="experiences" key={index}>
              <span key={exp.name}>
                <span className="bold">{exp.name}:</span> {exp.position}{" "}
                {exp.startYear} - {exp.endYear}: {exp.description}
              </span>
            </div>
          ))}
        </div>
        <div className="educationGroup">
          <h3 className="sectionTitle">Education: </h3>

          {data.education.map((exp, index) => (
            <div className="educations" key={index}>
              <span key={exp.name}>
                <span className="bold">{exp.name}:</span> {exp.startYear} -{" "}
                {exp.endYear}: {exp.degree}
              </span>
            </div>
          ))}
        </div>
        <div className="hobbiesGroup">
          <h3 className="sectionTitle">Hobbies:</h3>
          {data.hobbies.map((hobby, index) => (
            <div className="hobbies" key={index}>
              <span className="hobby" key={hobby.name}>
                {hobby.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="clearBtn" onClick={handleClearAll}>
        Clear All
      </button>{" "}
    </div>
  );
}

export default App;
