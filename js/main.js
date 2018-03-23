$('.slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      }
    },
    {
      breakpoint: 1024,
      settings: "unslick"
    }
  ],
  appendArrows: $('.your-class-arrow'),
  prevArrow: '<img src="img/arrow-left.png" class="arrow__left">',
  nextArrow: '<img src="img/arrow-right.png" class="arrow__right">',
});


