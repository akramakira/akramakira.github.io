"use strict";

var skills = [];
var allskills = document.getElementsByClassName('skill');
var allskillsarr = Object.keys(allskills).map(function (key) {
  return [key, allskills[key]];
});
console.log(allskills);
console.log(allskillsarr);
allskillsarr.forEach(function (skill) {
  // skills.append(skill)
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      skill.style.opacity = 0;
    } else {
      skill.style.opacity = 1;
    }
  });
});