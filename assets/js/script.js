//header 頁面下滑增加背景色=====================================
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    // 當滾動超過50px時
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//banner 點擊滾動下一頁=========================================
window.addEventListener("DOMContentLoaded", function () {
  const bannerScroll = document.querySelector(".scrolldownBox"); //取得點擊元素
  const targetSection = document.querySelector(".factory"); //取得目標區塊

  bannerScroll.addEventListener("click", function () {
    targetSection.scrollIntoView({
      behavior: "smooth", // 平滑滾動
      block: "start", // 將目標區塊滾動到視窗頂部
    });
  });
});

//banner 輪播圖片===============================================
$(".bannerSlider").slick({
  dots: false, //是否顯示點點
  arrows: false, //是否顯示箭頭
  autoplay: true, //自動播放
  autoplaySpeed: 3000, //自動播放速度
  infinite: true, //無限循環
  slidesToShow: 1, // 一次顯示幾張
  slidesToScroll: 1, // 一次滾動幾張
});

//MIT專業橡膠球製造工廠 手機改輪播=================================
$(".factoryInfo").slick({
  dots: false, //是否顯示點點
  dotsClass: "slick-dots", //點點的class
  arrows: false, //是否顯示箭頭
  infinite: true, //無限循環
  slidesToShow: 5, // 一次顯示幾張
  slidesToScroll: 1, // 一次滾動幾張
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true, //是否顯示點點
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true, //是否顯示點點
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, //是否顯示點點
      },
    },
  ],
});

//Ball Encyclopedia 球類百科 slick 輪播=================================
$(".newSlider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true, //垂直輪播
  appendArrows: $(".sliderBtnBox"), //箭頭放置位置
  prevArrow: '<button class="sliderPrev"></button>',
  nextArrow: '<button class="sliderNext"></button>',
});

//產品介紹 球類=========================================================
// slickBall main
$(".ballSlider").on(
  "init reInit afterChange",
  function (event, slick, currentSlide) {
    // 當前幻燈片索引 (index 從 0 開始)
    let i = (currentSlide ? currentSlide : 0) + 1;
    // 補零格式 (01, 02, ...)
    let formattedNumber = i < 10 ? "0" + i : i;
    $(".slickNumberBox .currentTxt").text(formattedNumber);
  }
);
$(".ballSlider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  appendArrows: $(".ballSliderBtnBox"), //箭頭放置位置
  prevArrow: '<button class="ballSliderPrev"></button>',
  nextArrow: '<button class="ballSliderNext"></button>',
  asNavFor: ".ballSliderRight", //連動
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 885,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//slickBall Right
$(".ballSliderRight").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, //是否顯示箭頭
  asNavFor: ".ballSlider", //連動
});
