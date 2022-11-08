import React from "react";
import "../Styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Ahmet Can Ceylan </h2>
        <div className="prompt">
          <p>Back and Front-End Developer</p>
        </div>
      </div>
      <div className="skills">
        <h1> YETENEKLER </h1>
        <ol className="list">
          <li className="skills">
            <h3> Front-End</h3>
            <span>
              ReactJS, HTML, CSS
            </span>
          </li>
          <li className="skills">
            <h3>Back-End</h3>
            <span>
              MySQL, MSSQL
            </span>
          </li>
          <li className="skills">
            <h3>Languages</h3>
            <span> C#, C, Go</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;
