import React from "react";

export const Training = (props) => {
  let data = props.Data;
  let courses = data.Courses;
  return (
    <div className="Training">
      <div className="header">Training And Courses</div>
      <div className="content">
        <div className="icons">
          <div className="filler"></div>
          <div className="line"></div>
        </div>
        <div className="desc">
          <ul>
            {courses.map((elm, index) => {
              return (
                <li key={index}>
                  <span>{elm.course}</span>
                  <span>{elm.details}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
