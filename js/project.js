let projInfo1 = false;
let images = document.getElementById("images");
let runned = [false, false, false, false, false];
let allprojects = document.getElementsByClassName("proj-categ");
let allprojectsarr = Object.keys(allprojects).map((key) => [
  key,
  allprojects[key],
]);
allprojectsarr.forEach((project, i) => {
  project.push(project[1].offsetTop);
});

printLetterByLetter(`proj-info-1`, 2, 1);
allprojectsarr[0][1].style.opacity = 1;
history.scrollRestoration = "manual";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  allprojectsarr.forEach((project, i) => {
    if (scrollPosition >= project[2] - 400) {
      project[1].style.opacity = 1;
      images.style.opacity = 0;
      printLetterByLetter(`proj-info-${i + 1}`, 2, i + 1);
      for (let index = 0; index < allprojectsarr.length; index++) {
        if (index != i) {
          allprojectsarr[index][1].style.opacity = 0;
        }
      }
    }
  });

  if (scrollPosition >= images.offsetTop - 400) {
    images.style.opacity = 1;
    allprojectsarr.forEach((project, i) => {
      project[1].style.opacity = 0;
    });
  }

  //   console.log(scrollPosition);
  //   if (scrollPosition >= 0) {
  //     allprojectsarr[0][1].style.opacity = 1;
  //     printLetterByLetter("proj-info-1", 2, 1);
  //   }
  //   if (scrollPosition >= 340) {
  //     allprojectsarr[1][1].style.opacity = 1;
  //     printLetterByLetter("proj-info-2", 2, 2);
  //   }
  //   if (scrollPosition >= 500) {
  //     allprojectsarr[2][1].style.opacity = 1;
  //     printLetterByLetter("proj-info-3", 2, 3);
  //   }
  //   if (scrollPosition >= 780) {
  //     allprojectsarr[3][1].style.opacity = 1;
  //     printLetterByLetter("proj-info-4", 2, 4);
  //   }
  //   if (scrollPosition >= 1047) {
  //     allprojectsarr[4][1].style.opacity = 1;
  //     printLetterByLetter("proj-info-5", 2, 5);
  //   }
});

function printLetterByLetter(destination, speed, index) {
  var i = 0;
  let message = undefined;

  if (!runned[index - 1]) {
    message = document.getElementById(destination).innerHTML;
    document.getElementById(destination).innerHTML = "";
    var interval = setInterval(function () {
      document.getElementById(destination).innerHTML += message.charAt(i);
      i++;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, speed);
    runned[index - 1] = true;
  }
}

// let projCateg1 = document.getElementById("projCateg1");
// let projCateg2 = document.getElementById("projCateg2");
// let observer1 = new MutationObserver(printLetterByLetter("proj-info-1", 2, 1));
// observer1.observe(projCateg1, { attributes: true });
// observer1.observe(projCateg2, { attributes: true });

// // Create a new MutationObserver instance
// const observer = new MutationObserver((mutationsList) => {
//   // Check if any mutation records contain opacity changes
//   const opacityChanged = mutationsList.some((mutation) => {
//     return (
//       mutation.attributeName === "style" &&
//       mutation.target === projCateg2 &&
//       mutation.target.style.opacity !== ""
//     );
//   });

//   if (opacityChanged) {
//     // Run your desired function here
//     printLetterByLetter("proj-info-2", 2, 2);

//     // Disconnect the observer since you only want it to run once
//     observer.disconnect();
//   }
// });

// // Start observing the target element for changes
// observer.observe(projCateg2, { attributes: true });
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
