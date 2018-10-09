import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title:  PropTypes.string.isRequired,
};

export default class AssignmentTitleContainer extends React.Component {
  render() {
    return <AssignmentTitleView {...this.props}/>;
  }
}

AssignmentTitleContainer.propTypes = propTypes;

function AssignmentTitleView(props){
  const {title} = props;
  return <span className={"assignment-title"}>{title}</span>;
}