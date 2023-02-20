const headerMenuIcon = document.getElementById("bin-header-menu-icon");
const headerList = document.getElementById("header-list-slide");
document.addEventListener("click", (e) => {
  if (headerMenuIcon.contains(e.target)) {
    // Click vao icon
    headerList.classList.toggle("header-expanded");
    headerList.classList.toggle("header-list");
  } else {
    // Click ngoai icon
    if (headerList.classList.contains("header-expanded")) {
      headerList.classList.remove("header-expanded");
      headerList.classList.add("header-list");
    }
  }
});

const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

var tabs = $$(".header-item");
var line = $(".header-tabs .line");

var tab = $(".header-item.active");

line.style.width = tab.offsetWidth + "px";
line.style.left = tab.offsetLeft + "px";

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    $(".header-item.active").classList.remove("active");
    this.classList.add("active");

    line.style.width = this.offsetWidth + "px";
    line.style.left = this.offsetLeft + "px";
  });
});
