import React from "react";

export const Work = (props) => {
  const slice = props.slice
  let data = props.data

  return (
    <>
      {data?.map((elm, index) => {
        return (
          <div key={index}>
            <h3>{elm.title}</h3>
            <h3>{elm.comp}</h3>
            <ul>
              {elm.time ? <li>{elm.time}</li> : null}
              {elm.desc ? <li>{elm.desc}</li> : null}
              {elm.period ? <li>{elm.period}</li> : null}
            </ul>
          </div>
        );
      }).slice(slice[0], slice[1])}
    </>
  );
};
