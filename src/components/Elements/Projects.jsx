import React from "react";

export const Projects = (props) => {
  let data = props.data
  return (
    <div className="Projects">
      <h3>Projects</h3>
      <ul>
        {data?.map((elm, index) => {
          return (
            <li key={index}>
              <h4>{elm.name}</h4>
              <div>
                {elm.code && (
                  <a href={elm.code} target="_blank" rel="noreferrer">
                    Project Code
                  </a>
                )}
                {elm.website && (
                  <a href={elm.website} target="_blank" rel="noreferrer">
                    Visit Website
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
