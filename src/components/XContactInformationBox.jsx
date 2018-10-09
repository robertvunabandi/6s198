import React from "react";
import XLinkContainer from "./XLink.jsx";

export default function XContactInformationBoxView() {
  return (
    <span className={"x-contact-information-box"}>
      <h1>Contact Information</h1>
      <div className={ "pad-vertical-050" }>
        <span className={ "text-bold" }>Name: </span>Robert M. Vunabandi
      </div>
      <div className={ "pad-vertical-050" }>
        <span className={ "text-bold" }>Email: </span>
        <XLinkContainer text={ "robertv@mit.edu" } link={ "mailto:robertv@mit.edu" }/>
      </div>
    </span>
  );
}