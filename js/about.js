let abouts = [];
let allabouts = document.getElementsByClassName("about");
let allaboutsarr = Object.keys(allabouts).map((key) => [key, allabouts[key]]);
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  allaboutsarr.forEach((about, i) => {
    if (scrollPosition >= about[1].offsetTop - 400) {
      about[1].style.opacity = 1;
      for (let index = 0; index < allaboutsarr.length; index++) {
        if (index != i) {
          allaboutsarr[index][1].style.opacity = 0;
        }
      }
    } else {
      about[1].style.opacity = 0;
    }
    // if (scrollPosition < 120) {
    //   allaboutsarr[0][1].style.opacity = 1;
    // } else if (
    //   scrollPosition >
    //   allaboutsarr[allaboutsarr.length - 1][1].offsetTop -
    //     about[1].offsetHeight
    // ) {
    //   allaboutsarr[allaboutsarr.length - 1][1].style.opacity = 1;
    //   allaboutsarr[allaboutsarr.length - 2][1].style.opacity = 0;
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
