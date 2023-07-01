let skills = [];
let allskills = document.getElementsByClassName("skill");
let allskillsarr = Object.keys(allskills).map((key) => [key, allskills[key]]);
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  allskillsarr.forEach((skill, i) => {
    // if (scrollPosition > skill[1].offsetTop - skill[1].offsetHeight + 160) {
    if (scrollPosition > skill[1].offsetTop - 400) {
      skill[1].style.opacity = 1;
      for (let index = 0; index < allskillsarr.length; index++) {
        if (index != i) {
          allskillsarr[index][1].style.opacity = 0;
        }
      }
    } else {
      skill[1].style.opacity = 0;
    }
    if (scrollPosition < 174) {
      allskillsarr[0][1].style.opacity = 1;
    }
    //  else if (
    //   scrollPosition >
    //   allskillsarr[allskillsarr.length - 1][1].offsetTop - skill[1].offsetHeight
    // ) {
    //   allskillsarr[allskillsarr.length - 1][1].style.opacity = 1;
    //   allskillsarr[allskillsarr.length - 2][1].style.opacity = 0;
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
