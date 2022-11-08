import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
    const{ id } = useParams();
    const project = ProjectList[id]
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p><b> Kullanılan Teknolojiler: </b> {project.skills}</p>
      <a href="projelinki">
      <GithubIcon/>
      </a>
    </div>
  ) 
}

export default ProjectDisplay;
