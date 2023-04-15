import React from "react";

export const Personal = (props) => {
  let data = props.Data;
  return (
    <div className="Personal">
      <div className="header">Personal Info.</div>
      <div className="content">
        <div className="icons">
          <div className="filler"></div>
          <div className="line"></div>
        </div>
        <div className="desc">
          <ul>
            {data.PersonalInfo.map((elm, index) => {
              return <li key={index}>{elm}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
