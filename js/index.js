var tabsModule = document.body.querySelector(".dbsection");
var tabNavList = document.body.querySelector(".subs");
var tabNavLinks = document.querySelectorAll(".menus-link");
var tabNavCurrentLinkindicator = tabNavList.querySelector(".undr-line");
var tabPanels = document.querySelectorAll(".fin");
 
document.getElementById("home").style.display = "block";
 
 
function positionIndicator() {
  var tabNavListLeftPosition = tabNavList.getBoundingClientRect().left;
  var tabsModuleSectionDataValue = tabsModule.getAttribute("data-active-tab") || "A";
  var tabNavCurrentLinkText = tabNavList.querySelector("[data-tab='" + tabsModuleSectionDataValue + "'] span");
  var tabNavCurrentLinkTextPosition = tabNavCurrentLinkText.getBoundingClientRect();
  tabNavCurrentLinkindicator.style.transform =
    "translate3d(" +
    (tabNavCurrentLinkTextPosition.left - tabNavListLeftPosition) +
    "px,0,0) scaleX(" +
    tabNavCurrentLinkTextPosition.width * 0.01 +
    ")";
}
 
positionIndicator();
 
function hideAllTabPanels() {
  for (i = 0; i < tabPanels.length; i++) {
    tabPanels[i].removeAttribute("style");
  }
};
 
var tabNavLinkEvent = function() {
  var thisLink = this.getAttribute("data-tab");
  var thisHref = this.getAttribute("href");
  var thisTabPanel = document.querySelector(thisHref);
  tabsModule.setAttribute("data-active-tab", thisLink);
  hideAllTabPanels();
  thisTabPanel.style.display = "block";
  positionIndicator();
};
 
for (var i = 0; i < tabNavLinks.length; i++) {
  tabNavLinks[i].addEventListener("click", tabNavLinkEvent, false);
}
 
(function() {
  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();
      }, 66);
    }
  }
  function actualResizeHandler() {
    positionIndicator();
  }
})();