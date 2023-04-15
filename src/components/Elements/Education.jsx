import React from "react";

export const Education = (props) => {
  let data = props.Data;
  let edu = data.Education;
  return (
    <div className="Education">
      <div className="header">Education</div>
      <div className="content">
        <div className="icons">
          <img src="assets/images/location.svg" alt="" />
          <div className="line"></div>
        </div>
        <div className="desc">
          {edu.map((elm, index) => {
            return (
              <div key={index} className="edu">
                <h3>{elm.lic}</h3>
                <h3>{elm.desc}</h3>
                <ul>
                  {elm.details.map((det, indx) => {
                    return <li key={indx}>{det}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
