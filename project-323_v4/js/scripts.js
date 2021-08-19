(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({
				'scrollTop': '0px'
			}, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		$('.first-slider').owlCarousel({
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
					items: 2.3
				},
				960: {
					items: 3.2
				},
				1200: {
					items: 4
				},
				1920: {
					items: 4
				}
			}
		});

		var owl = $('.first-slider');
		owl.owlCarousel();
		// Go to the next item
		$('#next').click(function () {
			owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('#previous').click(function () {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl.trigger('prev.owl.carousel', [300]);
		})


		$('.second-slider').owlCarousel({
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
					items: 2.2
				},
				960: {
					items: 3.2
				},
				1200: {
					items: 4
				},
				1920: {
					items: 4
				}
			}
		});

		
		$('.mobile-servizi-slider').owlCarousel({
			loop: true,
			margin: 10,
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
				360: {
					items: 1.3
				},
				576: {
					items: 2
				},
				768: {
					items: 2
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


		$('.mobile-enti-slider').owlCarousel({
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
				360: {
					items: 1.3
				},
				576: {
					items: 2.3
				},
				768: {
					items: 3.1
				},
				960: {
					items: 3.3
				},
				1200: {
					items: 1
				},
				1920: {
					items: 1
				}
			}
		});


	





		// code for searchbox

		$("#search").click(function () {
			$(".searchboxds").toggleClass("show")
		})

		$(document).on("click", function (event) {
			if (!$(event.target).closest($("#search, .searchboxds")).length) {
				$(".searchboxds").removeClass("show");
			}
		});

		$(".mobile-header-right a ").click(function () {
			$(".searchboxms").toggleClass("show")
		})

		$(document).on("click", function (event) {
			if (!$(event.target).closest($(".mobile-header-right a, .searchboxms")).length) {
				$(".searchboxms").removeClass("show");
			}
		});


		// code for mobile menu

		$("#menutigger").click(function () {
			$(".menusm").animate({
				"left": "0"
			})
			$("body").addClass("over");

		})

		$(".menusm-header span ").click(function () {
			$(".menusm").animate({
				"left": "-100%"
			})
			$("body").removeClass("over");

		})

		$(".menusm-link ul li#droptigger ").click(function () {
			$(".smdrop").slideToggle();
		})

		// code for responsive footer

		$(".footer-link").click(function () {
			$(this).children("ul").slideToggle();
		})













	});
})(jQuery);