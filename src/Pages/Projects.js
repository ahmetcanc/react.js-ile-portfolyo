import React from "react";
import ProjecItem from "../Components/ProjecItem";
import "../Styles/Projects.css";
import { ProjectList } from "../Helpers/ProjectList";

function Profile() {
  return (
    <div className="skills">
      <h1> PROJELERİM </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjecItem id={idx} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Profile;
