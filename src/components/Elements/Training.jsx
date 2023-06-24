import React from "react";

export const Training = (props) => {
  let data = props.data
  return (
    <ul>
      {data?.map((elm, index) => {
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
