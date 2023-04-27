import React from "react";
import { Data as data } from "../../store/Data";

export const Education = () => {
  return (
    <>
      {data.Education.map((elm, index) => {
        return (
          <div key={index} className="edu">
            <h3>{elm.lic}</h3>
            <h3>{elm.desc}</h3>
            <ul>
              {elm.details.map((det, indx) => {
                return <li key={indx}>{det}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};
