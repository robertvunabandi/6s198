import React from "react";
import main from "./main";
import AssignmentTitleContainer from "./components/AssignmentTitle";
import XBoxView from "./components/Xbox";
import XContactInformationBoxContainer from "./components/XContactInformationBox";

window.addEventListener("load", () => main(<AssignmentEightView/>));

function AssignmentEightView() {
  return (
    <div className={"assignment-six"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 8"}/>
        <XBoxView className={"pad-left-100"}>
          <XContactInformationBoxContainer/>
        </XBoxView>
        <XBoxView className={"pad-left-100"}>
        </XBoxView>
      </div>
    </div>
  );
}
