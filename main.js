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
