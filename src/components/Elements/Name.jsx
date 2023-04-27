import React from "react";

export const Name = (props) => {
  let data = props.Data;
  return (
    <div className="Name">
      <span>{data.name}</span>
      <div className="title">{data.title}</div>
    </div>
  );
};
