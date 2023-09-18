import React from "react";

export const Education = (props) => {
  let data = props.data;
  return (
    <>
      {data?.map((elm, index) => {
        return (
          <div key={index} className="edu">
            <h3>{elm?.lic}</h3>
            <h3>{elm?.desc}</h3>
            <ul>
              {elm?.details?.map((det, indx) => {
                return <li key={indx}>{det}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};
