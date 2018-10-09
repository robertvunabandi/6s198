import React from "react";
import main from "./main.jsx";
import { ASSIGNMENTS } from "./variables/variables.jsx";

window.IS_HOME_PAGE = true;
window.addEventListener("load", () => main(<HomeView/>));

function HomeView() {
  return (
    <span className={"content-body"}>
      <span className={"home-assignment-title"}>All Assignments</span>
      <span className={"home-assignment-group"}>{ASSIGNMENTS.map((assignment_obj, index) => {
        const { text, link, active } = assignment_obj;
        return (
          <span className={"home-assignment-link"} key={`home-assignment-link-${index}`}>
            <a
              href={link}
              className={active ? "" : "home-link-disabled"}
              onClick={(e) => {if (!active) {e.preventDefault();}}}
            >{text}{active ? "" : " (upcoming)"}</a>
          </span>
        );
      })}
      </span>
    </span>
  );
}