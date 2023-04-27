import React from "react";
import "./Paper.scss";
import { Name } from "../Elements/Name";
import { Data as data } from "../../store/Data";

export const Paper = (props) => {
  return (
    <div className="Paper">
      <Name Data={data} />
      {props.children}
      <span className="counter">Page {props.counter}</span>
    </div>
  );
};
