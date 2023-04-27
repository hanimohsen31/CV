import React from "react";
import { Data as data } from "../../store/Data";
export const Training = (props) => {
  return (
    <ul>
      {data.Courses.map((elm, index) => {
        return (
          <li key={index}>
            <span>{elm.course}</span>
            <span>{elm.details}</span>
          </li>
        );
      })}
    </ul>
  );
};
