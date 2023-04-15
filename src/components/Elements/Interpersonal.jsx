import React from "react";

export const Interpersonal = (props) => {
  let data = props.Data;
  return (
    <>
      <div className="Interpersonal">
        <h3>Interpersonal Skills</h3>
        <p>{data.InterpersonalSkills}</p>
      </div>
      <div className="languageSkills">
        <h3>language Skills</h3>
        <ul>
          {data.languageSkills.map((elm, index) => {
            return <li key={index}>{elm}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
