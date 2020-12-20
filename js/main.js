$(document).ready(function () {
  var menuButton = $('.menu-button');
  menuButton.on('click', function  () {
    $(".navbar-wrapper").toggleClass('navbar-wrapper_mobile');
    $('.menu-button__line:nth-child(1)').toggleClass('first');
    $('.menu-button__line:nth-child(2)').toggleClass('middle');
    $('.menu-button__line:nth-child(3)').toggleClass('last');
    $("body").toggleClass('noscroll');
  });

  var tabsItem = $(".trends-tabs__item");
  var contentItem = $(".trends__content");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trends-tabs__item--active");
    contentItem.removeClass("trends__content--active");
    $(activeContent).addClass("trends__content--active");
    $(this).addClass("trends-tabs__item--active");
  });
});