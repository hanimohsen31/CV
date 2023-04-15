import React from "react";

export const Work = (props) => {
  let data = props.Data;
  let work = data.WorkExperience;
  return (
    <div className="Work">
      <div className="header">Work Experience</div>
      <div className="content">
        <div className="icons">
          <img src="assets/images/circle.png" alt="" />
          <div className="line"></div>
        </div>
        <div className="desc">
          {work.map((elm, index) => {
            return (
              <div key={index} className="exp">
                <h3>{elm.title}</h3>
                <h3>{elm.comp}</h3>
                <ul>
                  <li>{elm.time}</li>
                  <li>{elm.desc}</li>
                  <li>{elm.period}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
