(function ($) {

  "use strict";

  //Feature Slider
  $(".feature-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1800,
    autoplaySpeed: 900,
    autoplayHoverPause: true,
    center: true,
    margin: 15,
    dots: true,
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      576: {
        items: 2,
        center: false,
      },
      768: {
        items: 3,
        center: false,
      },
      992: {
        items: 4,
      }
    }
  });

  //Testimonial Slider
  $(".review-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1800,
    autoplaySpeed: 900,
    autoplayHoverPause: true,
    center: true,
    nav: true,
    navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: false,
      },
    }
  });

  // Accordion JS
  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
  $('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('p');
    $(this).closest('.accordion').find('p').not(dropDown).slideUp();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });












})(jQuery);