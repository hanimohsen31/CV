import React from "react";
import { Data as data } from "../../store/Data";

export const LanguageSkills = () => {
  return (
    <div className="languageSkills">
      <h3>language Skills</h3>
      <ul>
        {data.languageSkills.map((elm, index) => {
          return <li key={index}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};
