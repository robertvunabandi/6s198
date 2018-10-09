import React from "react";

export default class XImageWrapperComponent extends React.Component {
  render() {
    return <XImageWrapperView { ... this.props }/>;
  }
}

function XImageWrapperView(props) {
  return (
    <div className={ "x-image-wrapper" }>{ props.children }</div>
  );
}