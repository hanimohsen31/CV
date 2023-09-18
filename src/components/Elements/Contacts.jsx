import React from "react";

export const Contacts = (props) => {
  let data = props.data;
  return (
    <div className="Contacts">
      <h3>Contacts</h3>
      {data?.map((elm, index) => {
        return (
          <div key={index} className="contact">
            <div className="icon">
              <img src={elm.icon} alt="" />
            </div>
            {elm.link && <a href={elm.link} target="_blank" rel="noreferrer">{elm.title}</a>}
            {!elm.link && <span>{elm.title}</span>}
          </div>
        );
      })}
    </div>
  );
};
