;(function () {
   var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	// Loading page
	var loaderPage = function() {
		$(".loader").fadeOut("slow");
	};

    $(function(){
		contentWayPoint();
		loaderPage();
	});
	
}());

$(document).ready(function () {
	$('.shrinkable').each(function () {
		$(this).after( '<div class="shrinker"></div>' );
  	});
  	$('.drawer').each(function () {
	  	if($(this).has('.junk').length !== 0) {
			$( '<div class="pull"></div>' ).insertBefore($(this).children('.junk').first());
		}
  	});
  	// Make views rows clickable by using the 'clickable-row' class in the view format row class field, and the 'usethislink' class applied as the anchor wrapper
  	jQuery('.clickable-row.views-row').each(function() {
      if (jQuery(this).find('.usethislink a').length) {
        jQuery(this).click(function() {
          window.location = jQuery(this).find('.usethislink a').attr('href');
          return false;
        });
      }
    });
});

$(window).on('load', function (e) {
    // Initiate the wowjs animation library
    new WOW().init();
    // Detect window scroll and update navbar
    $(window).scroll(function() {
      if ($(this).scrollTop() > 120) {
        $('#l-header').addClass('header-scroll');
      } else {
        $('#l-header').removeClass('header-scroll');
      }
    });
    if ($(window).scrollTop() > 120) {
      $('#l-header').addClass('header-scroll');
    }
	// Smooth scroll for links with .scrollto classes  
	$('.scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#l-header').length) {
          top_space = $('#l-header').outerHeight();

          if (! $('#l-header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        return false;
      }
    }
  });
  // Create a line break in text (great to use in title fields!)
  $('.line-break').each(function () {
	$(this).html($(this).html().replace('||','<br />'));
  });
  // Shrinkable sidebar
  $('.shrinkable').each(function () {
	  if ($(this).hasClass('default-enlarged')) {
			$(this).siblings('.shrinker').addClass('enlarged');
	  }
	  $(this).siblings('.shrinker').click(function(){
		$(this).toggleClass('enlarged');
	    $(this).siblings('.shrinkable').children('.shrink').slideToggle();
	    return false;
	  });
  });
  // Drawers in content
  $('.drawer').each(function () {
	  if ($(this).hasClass('default-open')) {
			$(this).children('.pull').addClass('open');
	  }
	  $(this).children('.pull').click(function(){
		$(this).toggleClass('open');
	    $(this).parent().children('.junk').slideToggle();
	    return false;
	  });
  });
  /* clicking outside will close all open drawers. This causes a lot of jumpy behavoir when there are a lot of drawers on a page, so leaving it commented out for now. It can be copied to a sub-theme if desired for use.
  $(document).click(function(event) {
  if (!$(event.target).closest(".pull").length) {
    	$("body").find(".pull").removeClass("open");
    	$("body").find(".junk").slideUp();
	}
   });
   */

 });

