import React from "react";

export const Technical = (props) => {
  let data = props.data
  return (
    <div className="Technical">
      <h3>Technical Skills</h3>
      <ul>
        {data?.map((elm, index) => {
          return <li key={index}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};
