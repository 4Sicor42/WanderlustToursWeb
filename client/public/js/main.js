"use strict";

//Menu Burger
var iconMenu = document.querySelector('.menu-btn');
var menuBody = document.querySelector('.menu-mobile');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

//Mixitup
var mixer = mixitup('.mixitup__box', {
  load: {
    filter: '.flight'
  }
});
//Spoller
document.querySelectorAll('.spoller__titel').forEach(function (elem) {
  return elem.addEventListener('click', function () {
    elem.classList.toggle('spoller__titel_active');
    var spollerCont = elem.nextElementSibling;
    if (spollerCont) {
      spollerCont.classList.toggle('spoller__content_active');
    }
  });
});

//Slider
$(".price").ionRangeSlider({
  type: "double",
  min: 50,
  max: 1200,
  from: 200,
  to: 500,
  grid: true,
  skin: "square",
  prefix: "$"
});
$(".time").ionRangeSlider({
  type: "double",
  min: 0,
  max: 24,
  from: 0,
  to: 12,
  grid: true,
  skin: "square",
  prefix: ""
});