import React from "react";
import { Data as data} from "../../store/Data";

export const Technical = () => {
  return (
    <div className="Technical">
      <h3>Technical Skills</h3>
      <ul>
        {data.TechnicalSkills.map((elm, index) => {
          return <li key={index}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};
