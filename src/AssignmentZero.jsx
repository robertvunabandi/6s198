import React from "react";
import main from "./main.jsx";
import AssignmentTitleContainer from "./components/AssignmentTitle.jsx";
import XContactInformationBoxContainer from "./components/XContactInformationBox.jsx";
import XImageWrapperComponent from "./components/XImageWrapper.jsx";
import XImageView from "./components/XImageView.jsx";
import XLinkContainer from "./components/XLink.jsx";
import XBoxView from "./components/XBox.jsx";
import AssignmentZeroImgSrc from "./assets/assignment-0-css-edits.png";

window.addEventListener("load", () => main(<AssignmentZeroView/>));

function AssignmentZeroView() {
  return (
    <div className={"assignment-zero"}>
      <div className={"assignment-box"}>
        <AssignmentTitleContainer title={"6.S198 Assignment 0"}/>
        <XBoxView className={"pad-left-100"}>
          <XContactInformationBoxContainer />
        </XBoxView>
        <XBoxView className={"pad-left-100"}>
          <h1>Image from MobileNet</h1>
          <XImageWrapperComponent>
            <XImageView src={AssignmentZeroImgSrc}/>
          </XImageWrapperComponent>
          <h1>Edit to the HTML Code</h1>
          <XLinkContainer
            text={"TinyCodeExample.html"}
            link={"./TinyCodeExample.html"}
            target={"blank"}
          />
        </XBoxView>
      </div>
    </div>
  );
}