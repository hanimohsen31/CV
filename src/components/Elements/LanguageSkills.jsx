import React from "react";

export const LanguageSkills = (props) => {
  let data = props.data
  return (
    <div className="languageSkills">
      <h3>language Skills</h3>
      <ul>
        {data?.map((elm, index) => {
          return <li key={index}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};
