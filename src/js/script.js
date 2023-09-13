jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ------------------------------------
  //ローディングアニメーション
  // ------------------------------------
  $.cookie("myCookie", "myValue", {
    path: "/",
    secure: true,
    sameSite: "None",
  });

  $(document).ready(function () {
    const keyName = "visited";
    const keyValue = true;

    if (!sessionStorage.getItem(keyName)) {
      // sessionStorageにキーと値を追加
      sessionStorage.setItem(keyName, keyValue);

      // ここに初回アクセス時の処理
      $(".mv-movie-bg").addClass("is-active");
      // アニメーション終了時にクラスを削除
      $(".mv-movie-bg").on("animationend", function () {
        $(this).removeClass("is-active");
      });
      $(".mv-movie-text").addClass("is-active");

      // アニメーション終了時にクラスを削除
      $(".mv-movie-bg").on("animationend", function () {
        $(this).removeClass("is-active");
      });
    } else {
      // ここに通常アクセス時の処理
      $(".mv-movie-bg").removeClass("is-active");
      $(".mv-movie-text").removeClass("is-active");
    }
  });

  // ------------------------------------
  //ドロワーメニュー
  // ------------------------------------
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-header").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".js-header").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
    }
  });
  //中の要素をクリックすると消えてスクロールする
  $(".sp-nav__item a").on("click", function () {
    $(".js-sp-nav").fadeOut(300);
    $(".js-hamburger").removeClass("is-active");
    $(".js-header").removeClass("is-active");
  });


  // ------------------------------------
  // # ハンバーガーメニュー展開時背景を固定
  // ------------------------------------
  $(function () {
    var state = false;
    var pos;
    $(".hamburger").click(function () {
      if (state == false) {
        pos = $(window).scrollTop();
        $("body").addClass("fixed").css({ top: -pos });
        state = true;
      } else {
        $("body").removeClass("fixed").css({ top: 0 });
        window.scrollTo(0, pos);
        state = false;
      }
    });
  });

  // ------------------------------------
  // mv Swiper
  // ------------------------------------
  const swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    speed: 1500, //スライドの速度
    effect: "fade",
    autoplay: {
      // 自動再生
      delay: 7000, // 5秒後に次のスライド
    },
  });
  // ------------------------------------
  // campaign Swiper
  // ------------------------------------
  const swiper2 = new Swiper(".js-campaign-swiper", {
    loop: true,
    loopAdditionalSlides: 4,
    spaceBetween: 24,
    width: 280,
    breakpoints: {
      768: {
        spaceBetween: 40,
        width: 333,
      },
    },
    speed: 1000, // 少しゆっくり(デフォルトは300)
    autoplay: {
      // 自動再生
      delay: 3000, // 3秒後に次のスライド
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ------------------------------------
  // info 画像アニメーション
  // ------------------------------------
  //要素の取得とスピードの設定
  var box = $(".info__image"),
    speed = 700;

  //.js-image-colorの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="js-image-color"></div>');
    var color = $(this).find($(".js-image-color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // ------------------------------------
  // voice 画像アニメーション
  // ------------------------------------
  //要素の取得とスピードの設定
  var box = $(".voice-card__image"),
    speed = 700;

  //.js-image-color の付いた全ての要素に対して下記の処理を行う(img)
  box.each(function () {
    $(this).append('<div class="js-image-color"></div>');
    var color = $(this).find($(".js-image-color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // ------------------------------------
  // price 画像アニメーション
  // ------------------------------------
  //要素の取得とスピードの設定
  var box = $(".price__image"),
    speed = 700;

  //.js-image-colorの付いた全ての要素に対して下記の処理を行う(picture)
  box.each(function () {
    $(this).append('<div class="js-image-color"></div>');
    var color = $(this).find($(".js-image-color")),
      image = $(this).find("picture");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // ------------------------------------
  // スムーススクロール（headerに被らない
  // ------------------------------------

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // ------------------------------------
  // ページトップに戻るボタン
  // ------------------------------------
  $(document).ready(function () {
    const pageTop = $(".to-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });

    $(window).on("scroll", function () {
      const scrollHeight = $(document).height();
      const scrollPosition = $(window).height() + $(window).scrollTop();
      const footHeight = $("footer").innerHeight();
      const offset = $(window).width() < 768 ? 15 : 20; // スマートフォン表示時は15px、それ以外は20px

      if (scrollHeight - scrollPosition <= footHeight) {
        // 下側から（フッターの高さ + offset）に配置
        $(".to-top").css({ position: "absolute", bottom: footHeight + offset });
      } else {
        // 下側からoffsetの位置に配置
        $(".to-top").css({ position: "fixed", bottom: offset + "px" });
      }
    });
  });
});
