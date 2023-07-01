let services = document.getElementById("services");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let mailme = document.getElementById("mailme");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    services.style.opacity = 1;
  } else {
    services.style.opacity = 0;
  }
  if (scrollPosition > 900) {
    skills.style.opacity = 1;
  } else {
    skills.style.opacity = 0;
  }
  if (scrollPosition > 1550) {
    projects.style.opacity = 1;
  } else {
    projects.style.opacity = 0;
  }
  if (scrollPosition > 1930) {
    mailme.style.opacity = 1;
  } else {
    mailme.style.opacity = 0;
  }
});
function mailMe() {
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  window.open(
    "mailto:maj04hol02@gmail.com?subject=" + subject + "&body=" + message
  );
}

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
