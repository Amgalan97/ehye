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

  var mySwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
      autoplay: {
      delay: 7000,
    },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      effect: "flip",
  });

  var mySwiper = new Swiper('.stories-slider', {
  // Navigation arrows
  navigation: {
    nextEl: '.stories-slider__button--next',
    prevEl: '.stories-slider__button--prev',
    disabledClass: 'stories-slider__button--disabled',
  },
})

  // Отключение автоплея при наведении
  $(".reviews-slider").hover(function() {
      (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });

  // Обработка форм
  $(".subscribe__form").validate({
    errorClass: "subscribe__error",
    messages: {
      email: {
        required: "Введите ваш email",
        email: "Введите корректный email в формате name@domain.com."
        },
      },
    });
});