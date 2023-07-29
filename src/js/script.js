jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
      $("header").removeClass("is-active");
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
      $(".header").addClass("is-active");
    }
  });

  // mv Swiper
  const swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    speed: 1500, //スライドの速度
    autoplay: {
      // 自動再生
      delay: 3000, // 3秒後に次のスライド
    },
  });
  // campaign Swiper
  const swiper2 = new Swiper(".js-campaign-swiper", {
    loop: true,
    loopAdditionalSlides: 4,
    spaceBetween: 24,
    width: 289,
    breakpoints: {

      768: {
        spaceBetween: 40,
        width: 333,
      }
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});
