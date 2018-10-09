import React from "react";

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppView {...this.props}/>;
  }
}

function AppView(props) {
  return (
    <div>
      <nav id={"nav"}>
        <span>
          <a href={!!window.IS_HOME_PAGE ? "#" : "../index.html"}>
            Robert M. Vunabandi | 6.s198 Assignments
          </a>
        </span>
        <span>
          <a href={"https://github.com/robertvunabandi/6s198"} target={"blank"}>
          View On Github
          </a>
        </span>
      </nav>
      <div id={"content"}>{props.children}</div>
      <footer id={"footer"}>
        <div>Copyright &#9400; 2018 Robert M. Vunabandi</div>
        <div>All Rights Reserved</div>
      </footer>
    </div>
  );
}