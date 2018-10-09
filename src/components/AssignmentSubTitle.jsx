import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  subtitle: "",
};
const propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default class AssignmentSubTitleContainer extends React.Component {
  render(){
    return <AssignmentSubTitleView subtitle={this.props.subtitle}/>;
  }
}

AssignmentSubTitleContainer.defaultProps = defaultProps;
AssignmentSubTitleContainer.propTypes = propTypes;

function AssignmentSubTitleView(props){
  const {subtitle} = props;
  return <span className={"assignment-subtitle"}>{subtitle}</span>;
}