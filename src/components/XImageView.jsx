import React from "react";
import PropTypes from "prop-types";
import PlaceholderImageSrc from "../assets/placeholder.png";

const defaultProps = {
  src: PlaceholderImageSrc,
  caption: "no caption",
};

const propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  height: PropTypes.string,
};

export default class XImageView extends React.Component {

  static isCSSMeasurement(string) {
    // we do not use vmax because it's not supported in edge (https://www.w3schools.com/cssref/css_units.asp)
    const matches = string.match(/[0-9]+(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|%)/g);
    return matches.length === 1 && matches[0] === string;
  }

  render(){
    const height = this.props.height || null;
    const caption = <div className={"x-image-view-caption"}>{this.props.caption}</div>;
    let img = null;
    if (height && typeof height === "string" && XImageView.isCSSMeasurement(height)) {
      img = <img src={this.props.src} style={{height}}/>;
    } else {
      img = <img src={this.props.src}/>;
    }
    return (
      <div className={"x-image-view"}>
        {img}
        {caption}
      </div>
    );
  }
}

XImageView.defaultProps = defaultProps;
XImageView.propTypes = propTypes;