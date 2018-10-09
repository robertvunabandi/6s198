import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default class XLinkContainer extends React.Component {
  render(){
    return <XLinkView text={this.props.text} link={this.props.link} target={this.props.target}/>;
  }
}

XLinkContainer.propTypes = propTypes;

function XLinkView(props){
  return (
    <span className={"x-link"}>
      <a href={props.link} target={props.target || ""}>{props.text}</a>
    </span>
  );
}