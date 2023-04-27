import React from "react";
import { Data as data } from "../../store/Data";

export const Projects = () => {
  let projects = data.Projects;
  return (
    <div className="Projects">
      <h3>Projects</h3>
      <ul>
        {projects.map((elm, index) => {
          return (
            <li key={index}>
              <h4>{elm.name}</h4>
              <div>
                {elm.code && (
                  <a href={elm.code} target="_blank" rel="noreferrer">
                    Project Code
                  </a>
                )}
                {elm.deployment && (
                  <>
                    <span>&#160;-&#160;</span>
                    <a href={elm.deployment} target="_blank" rel="noreferrer">
                      Deployment
                    </a>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
