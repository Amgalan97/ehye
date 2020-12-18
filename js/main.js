// var menuButton = document.querySelector(".menu-button");
// menuButton.addEventListener("click", function () {
//   document
//   .querySelector(".navbar-wrapper")
//   .classList.toggle("navbar-wrapper_mobile");
// });
var menuButton = $('.menu-button');
  menuButton.on('click', function  () {
    $(".navbar-wrapper").toggleClass('navbar-wrapper_mobile');
    $('.menu-button__line:nth-child(1)').toggleClass('first');
    $('.menu-button__line:nth-child(2)').toggleClass('middle');
    $('.menu-button__line:nth-child(3)').toggleClass('last');
    $("body").toggleClass('noscroll');
  });