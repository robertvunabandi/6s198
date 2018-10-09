import React from "react";

export default class XInlineCodeContainer extends React.Component {
  render(){
    return <XInlineCodeView {...this.props}/>;
  }
}

function XInlineCodeView(props){
  return <span className={"x-inline-code"}>{props.children}</span>;
}