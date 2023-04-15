import React from "react";

export const Name = (props) => {
  let data = props.Data;
  return (
    <div className="Name">
      <span>{data.name.split(" ")[0]}</span>
      <span> </span>
      <span>{data.name.split(" ")[1]}</span>
      <div className="title">{data.title}</div>
    </div>
  );
};
