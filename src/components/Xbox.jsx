import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  className: "",
};
const propTypes = {
  className: PropTypes.string,
};

export default class XBoxView extends React.Component {
  render() {
    return (
      <div className={`x-box ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

XBoxView.defaultProps = defaultProps;
XBoxView.propTypes = propTypes;
