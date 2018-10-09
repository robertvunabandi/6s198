import React from "react";

export default class XHorizontalSplitContainer extends React.Component {
  static get MAX_SPLIT_COUNT() {
    return 7;
  }

  static getHorizontalSplitCount(children_count) {
    if (children_count > XHorizontalSplitContainer.MAX_SPLIT_COUNT) {
      console.warn("Maximum count exceeded. Will overflow with extra rows");
    }
    return Math.min(children_count, XHorizontalSplitContainer.MAX_SPLIT_COUNT);
  }

  render() {
    return <XHorizontalSplitView {...this.props}/>;
  }
}

function XHorizontalSplitView(props) {
  const count = XHorizontalSplitContainer.getHorizontalSplitCount(props.children.length);
  return <div className={"x-horizontal-split-parent"}>
    {props.children.map(child => {
      return <div className={`x-horizontal-split-object-${count}`}>
        <div>
          {child}
        </div>
      </div>;
    })}
  </div>;
}