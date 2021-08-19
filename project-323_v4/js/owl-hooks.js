
$('.entisliderone').owlCarousel({
   loop: true,
   margin: 20,
   center: false,
   nav: false,
   dots: false,
   autoplay: true,
   autoplayTimeout: 5000,
   responsiveClass: true,
   responsiveRefreshRate: true,
   responsive: {
      0: {
         items: 2.3
      },
      768: {
         items: 2.2
      },
      960: {
         items: 3.2
      },
      1200: {
         items: 5
      },
      1920: {
         items: 5
      }
   }
});

// code for entisliderone nav control

var onex = $('.entisliderone');
   onex.owlCarousel();
   $('#enti-one-next').click(function() {
      onex.trigger('next.owl.carousel');
   })

   $('#enti-one-prev').click(function() {
      onex.trigger('prev.owl.carousel', [300]);
   })



   // code for enti-slider two
   $('.entislidertwo').owlCarousel({
      loop: true,
      margin: 20,
      center: false,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
         0: {
            items: 1.2
         },
         768: {
            items: 1.2
         },
         960: {
            items: 1
         },
         1200: {
            items: 1
         },
         1920: {
            items: 1
         }
      }
   });

   // code for enti-slider two nav
   var enttwo = $('.entislidertwo');
      enttwo.owlCarousel();
      $('.enti-two-next').click(function() {
         enttwo.trigger('next.owl.carousel');
      })
      $('.enti-two-prev').click(function() {
         enttwo.trigger('prev.owl.carousel', [300]);
      })


   // code for azslider one

   $('.aziendesliderone').owlCarousel({
      loop: true,
      margin: 20,
      center: false,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 1
         },
         960: {
            items: 1
         },
         1200: {
            items: 1
         },
         1920: {
            items: 1
         }
      }
   });

   // code for azslider one nav

   var azoneNav = $('.aziendesliderone');
      azoneNav.owlCarousel();
      $('#az-one-next').click(function() {
         azoneNav.trigger('next.owl.carousel');
      })
      $('#az-one-prev').click(function() {
         azoneNav.trigger('prev.owl.carousel', [300]);
      })


      // code for azslider-two

      $('.aziendeslidertwo').owlCarousel({
			loop: true,
			margin: 20,
			center: false,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1.2
				},
				768: {
					items: 1
				},
				960: {
					items: 1
				},
				1200: {
					items: 1
				},
				1920: {
					items: 1
				}
			}
		});


      // code for azslider two nav
   var azoneNavTwo = $('.aziendeslidertwo');
      azoneNavTwo.owlCarousel();
      $('#aztwo-prev').click(function() {
         azoneNavTwo.trigger('next.owl.carousel');
      })
      $('#aztwo-next').click(function() {
         azoneNavTwo.trigger('prev.owl.carousel', [300]);
      })