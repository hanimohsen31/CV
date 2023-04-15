import React from "react";

export const Contacts = (props) => {
  let data = props.Data;
  let contacts = data.Contacts;
  return (
    <div className="Contacts">
      <h3>Contacts</h3>
      {contacts.map((elm,index) => {
        return (
          <div key={index} className="contact">
            <div className="icon">
              <img src={elm.icon} alt="" />
            </div>
            <a href={elm.link}>{elm.title}</a>
          </div>
        );
      })}
    </div>
  );
};
