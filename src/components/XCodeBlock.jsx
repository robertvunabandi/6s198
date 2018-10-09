import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  language: "js",
};
const propTypes = {
  language: PropTypes.string,
};

export default class XCodeBlockComponent extends React.Component {
  static INDENT(key) {
    return (
      <span className={"x-code-line-indent"} key={`x-code-line-indent-${key}`}>
      </span>
    );
  }

  static getIndent(indent_level = 0) {
    if (indent_level === 0) {
      return "";
    }
    return Array.from(Array(indent_level)).map((_, index) => XCodeBlockComponent.INDENT(index));
  }

  render() {
    return <XCodeBlockView {...this.props}/>;
  }
}

XCodeBlockComponent.defaultProps = defaultProps;
XCodeBlockComponent.propTypes = propTypes;

function XCodeBlockView(props) {
  return <div className={"x-code-block"}>{props.children}</div>;
}

function XCodeLineView(props) {
  return (
    <span className={"x-code-line"}>
      {XCodeBlockComponent.getIndent(props.indent || 0)}
      {props.children}
    </span>
  );
}

export {XCodeLineView};