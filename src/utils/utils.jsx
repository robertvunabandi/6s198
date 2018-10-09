function adjustFooterPosition(){
  try {
    const footer = document.querySelector("#footer");
    const above_footer_height =
      document.querySelector("#nav").clientHeight +
      document.querySelector("#content").clientHeight;
    footer.style.marginTop = Math.max(
      window.innerHeight - above_footer_height - footer.clientHeight,
      0
    ) + "px";
  } catch (e) {
    console.warn("[error] failed to update footer position");
  }
}

function startAdjustFooterInterval(){
  // todo - this is super hacky and should be removed eventually
  // add this interval to configs so that it can be removed later
  setInterval(adjustFooterPosition, 1000);
}

function makePageFunctional() {
  adjustFooterPosition();
  startAdjustFooterInterval();
}

export {makePageFunctional};