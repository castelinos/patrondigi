(function() {

  'use strict';

  // preloader
  $(window).on('load', function() {
    $('.loader').fadeOut('fast');
  });

  // smooth scroll
  $("a").on("click", function(event) {

      if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate({

              scrollTop: $(hash).offset().top - 50

          }, 850);

      }

  });

  // magnific popup
  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: '.popup-image', // the selector for portfolio item
          type: 'image',
          gallery: {
              enabled: true
          },
      });
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next-slide",
        prevEl: ".prev-slide"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        780: {
          slidesPerView: 1,
        }
      }
    });
  });

  // hide navbar on click
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

  // navbar on scroll
  $(window).on("scroll", function() {

      var onScroll = $(this).scrollTop();

      if( onScroll > 50) {
          $(".navbar").addClass("navbar-fixed");
      }
      else {
          $(".navbar").removeClass("navbar-fixed");
      }

  });

  let shownBonusPromo = localStorage.getItem('shown_bonus_promo') || false;
  
  var promoModalElem = $('#promoModal').get(0);
  var promoVideo = $('#bonus-promo-video').get(0);

  if( !shownBonusPromo ){
    let url = new URL(window.location.href);
    let showPromo = url.searchParams.get('show_promotion');
    var promoModal = new bootstrap.Modal( promoModalElem );

    if( showPromo && showPromo === 'bonus_content' ) {
      setTimeout(()=>{
        if( promoModal ) promoModal.show();
      },2000);
    }
  }

  promoModalElem.addEventListener('shown.bs.modal', function () {
    if( promoVideo ) promoVideo.play();
    localStorage.setItem('shown_bonus_promo','true');
  })

  promoModalElem.addEventListener('hidden.bs.modal', function () {
    if( promoVideo ) promoVideo.load();
    promoModal.dispose();
  })

})();