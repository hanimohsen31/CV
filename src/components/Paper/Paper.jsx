import React from "react";
import "./Paper.scss";
import { Name } from "../Elements/Name";
import { Objective } from "../Elements/Objective";
import { Contacts } from "../Elements/Contacts";
import { Work } from "../Elements/Work";
import { Education } from "../Elements/Education";
import { Training } from "../Elements/Training";
import { Personal } from "../Elements/Personal";
import { Technical } from "../Elements/Technical";
import { Interpersonal } from "../Elements/Interpersonal";
import { Projects } from "../Elements/Projects";

export const Paper = (props) => {
  let data = props.Data;
  return (
    <div className="d-flex flex-column">
      <div className="Paper">
        <Name Data={data} />
        <div className="row justify-content-between">
          <div className="col-7">
            <Objective Data={data} />
            <Work Data={data} />
          </div>
          <div className="col-4">
            <Contacts Data={data} />
            <Technical Data={data} />
            <Interpersonal Data={data} />
          </div>
        </div>
      </div>
      <div className="Paper">
        <Name Data={data} />
        <div className="row justify-content-between">
          <div className="col-7">
            <Education Data={data} />
            <Training Data={data} />
            <Personal Data={data} />
          </div>
          <div className="col-4">
            <Projects Data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
