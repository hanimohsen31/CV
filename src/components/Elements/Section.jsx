import React from "react";

export const Section = (props) => {
  const img =
    props.img === "location"
      ? "assets/images/location.svg"
      : "assets/images/circle.png";
  return (
    <div className={"Section " + props.class}>
      <div className="header">{props.title}</div>
      <div className="body">
        <div className="sideLineAndIcons">
          {props.img === "filler" && <div className="filler"></div>}
          {props.img !== "filler" && <img src={img} alt="" />}
          <div className="line"></div>
        </div>
        {props.content && <div className="content">{props.content}</div>}
        {props.children && <div className="content">{props.children}</div>}
      </div>
    </div>
  );
};
