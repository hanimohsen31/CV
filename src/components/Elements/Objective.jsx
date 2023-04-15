import React from "react";

export const Objective = (props) => {
  let data = props.Data;
  return (
    <div className="Objective">
      <div className="header">OBJECTIVE</div>
      <div className="content">
        <div className="icons">
          <img src="assets/images/location.svg" alt="" />
          <div className="line"></div>
        </div>
        <div className="desc">{data.objective}</div>
      </div>
    </div>
  );
};
