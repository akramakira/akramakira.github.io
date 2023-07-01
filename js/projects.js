let projects = [];
let allprojects = document.getElementsByClassName("proj");
let allprojectsarr = Object.keys(allprojects).map((key) => [
  key,
  allprojects[key],
]);
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  allprojectsarr.forEach((project, i) => {
    // if (scrollPosition >= project[1].offsetTop - project[1].offsetHeight + 50) {
    if (scrollPosition >= project[1].offsetTop - 400) {
      project[1].style.opacity = 1;
      for (let index = 0; index < allprojectsarr.length; index++) {
        if (index != i) {
          allprojectsarr[index][1].style.opacity = 0;
        }
      }
    } else {
      project[1].style.opacity = 0;
    }
    // if (scrollPosition < 120) {
    //   allprojectsarr[0][1].style.opacity = 1;
    // } else if (
    //   scrollPosition >
    //   allprojectsarr[allprojectsarr.length - 1][1].offsetTop -
    //     project[1].offsetHeight
    // ) {
    //   allprojectsarr[allprojectsarr.length - 1][1].style.opacity = 1;
    //   allprojectsarr[allprojectsarr.length - 2][1].style.opacity = 0;
    // }
  });
});
// navbar
let headerContainer = document.getElementById("header-container");
let navbarList = document.getElementById("nav-list");
let sideNavbar = document.getElementById("side-navbar");
let sideNavbarItems = [].slice.call(sideNavbar.children);
sideNavbarItems.push(sideNavbarItems[0].firstElementChild);
for (let index = 0; index < sideNavbarItems[1].children.length; index++) {
  sideNavbarItems.push(sideNavbarItems[1].children[index]);
  sideNavbarItems.push(sideNavbarItems[1].children[index].firstElementChild);
}
window.addEventListener("click", function (e) {
  if (
    e.target == navbarList ||
    e.target == navbarList.firstElementChild ||
    e.target == navbarList.firstElementChild.firstElementChild ||
    sideNavbarItems.includes(e.target) ||
    e.target == sideNavbar
  ) {
    openleftnav();
  } else {
    headerContainer.setAttribute("data-leftnav", "close");
    sideNavbar.setAttribute("data-leftnav", "close");
  }
});

function openleftnav() {
  headerContainer.setAttribute("data-leftnav", "open");
  sideNavbar.setAttribute("data-leftnav", "open");
}
