import React from "react";

export const Projects = (props) => {
  let data = props.Data;
  let projects = data.Projects;
  return (
    <div className="Projects">
      <h3>Projects</h3>
      <div className="notes">
        <span>
          Click on "Project Code" or "Deployment" to go to Project Page.
        </span>
        <span>
          Please note that some projects are hosted on free hosting domains and
          may take time to open.
        </span>
      </div>
      <ul>
        {projects.map((elm, index) => {
          return (
            <li key={index}>
              <h4>{elm.name}</h4>
              <div>
                <a href={elm.code} target="_blank" rel="noreferrer">
                  Project Code
                </a>
                <span>&#160;-&#160;</span>
                <a href={elm.deployment} target="_blank" rel="noreferrer">
                  Deployment
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
