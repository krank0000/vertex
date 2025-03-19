//banner
let tl_banner = gsap.timeline({});

tl_banner
  .from(".bg", {
    duration: 0.5,
    scale: 1.2,
    opacity: 0,
  })
  .from(".textBox", {
    duration: 0.5,
    y: 50,
    opacity: 0,
  })
  .from(".playBox", {
    duration: 0.5,
    x: 50,
    opacity: 0,
  });

// MIT專業橡膠球製造工廠
let tl_factory = gsap.timeline({
  duration: 0.5,
  scrollTrigger: {
    trigger: ".factory",
    start: "top 60%",
    // markers: true,
    scrub: false,
  },
});

tl_factory
  .from(".factory .titleBox", {
    y: 50,
    opacity: 0,
  })
  .from(".factory .factoryItem", {
    y: 50,
    opacity: 0,
    stagger: 0.2, //錯開
  });

//product 產品系列
let tl_product = gsap.timeline({
  duration: 0.3,
  scrollTrigger: {
    trigger: ".product",
    start: "top 60%",
    // markers: true,
    scrub: false,
  },
});

tl_product
  .from(".product .titleBox", {
    y: 50,
    opacity: 0,
  })
  .from(".product .other", {
    y: 50,
    opacity: 0,
  })
  .from(".product .ballSlider, .product .rightBox", {
    y: 50,
    opacity: 0,
    stagger: 0.2, //錯開
  })
  .from(".product .ballSliderBtnBox", {
    scale: 0.5,
    opacity: 0,
  });

//service 服務項目
let tl_service = gsap.timeline({
  duration: 0.5,
  scrollTrigger: {
    trigger: ".service",
    start: "top 60%",
    // markers: true,
    scrub: false,
  },
});

tl_service
  .from(".service .titleBox", {
    y: 50,
    opacity: 0,
  })
  .from(".service .serviceItem", {
    y: 50,
    opacity: 0,
    stagger: 0.2, //錯開
  })
  .from(".service .moreBox", {
    y: 50,
    opacity: 0,
  });

//Ball Encyclopedia 球類百科
let tl_encyclopedia = gsap.timeline({
  duration: 0.5,
  scrollTrigger: {
    trigger: ".ballEncyclopedia",
    start: "top 60%",
    // markers: true,
    scrub: false,
  },
});

tl_encyclopedia
  .from(".ballEncyclopedia .titleBox", {
    y: 50,
    opacity: 0,
  })
  .from(".ballEncyclopedia .newSlider , .ballEncyclopedia .bottomBox", {
    y: 50,
    opacity: 0,
    stagger: 0.2, //錯開
  });

//footer
let tl_footer = gsap.timeline({
  duration: 0.5,
  scrollTrigger: {
    trigger: "footer .wrap",
    start: "top bottom",
    // markers: true,
    scrub: false,
  },
});
tl_footer
  .from("footer .footerLogo", {
    y: 50,
    opacity: 0,
  })
  .from("footer .footerNav", {
    y: 50,
    opacity: 0,
  })
  .from("footer .footerInfo", {
    y: 50,
    opacity: 0,
  })
  .from("footer .footerSocial", {
    y: 50,
    opacity: 0,
  })
  .from("footer .footerCopyright", {
    y: 50,
    opacity: 0,
  });
