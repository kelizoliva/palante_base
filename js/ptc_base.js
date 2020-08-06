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
	// Load the scroll classes as needed.
	$('#l-header .scrollme').parent().addClass( 'autoscroll' );
	$('#l-header .scrollme').parent().siblings( '.l-content' ).addClass( 'scrollpad' );
	// Drawers
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
        $('#l-header.autoscroll').addClass('header-scroll');
      } else {
        $('#l-header.autoscroll').removeClass('header-scroll');
      }
    });
    if ($(window).scrollTop() > 120) {
      $('#l-header.autoscroll').addClass('header-scroll');
    }
	// Smooth scroll for links with .scrollto classes  
	$('.scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#l-header.autoscroll').length) {
          top_space = $('#l-header.autoscroll').outerHeight();

          if (! $('#l-header.autoscroll').hasClass('header-scrolled')) {
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
  
/* ------------------------
	To utilize the scroll to top button outlined in the code below, place the following code
	in page.tpl.php: 
	<div class="top-scroller js-top-scroller svg-icons">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"></path></svg>
       <span>Top</span>
     </div>
------------------------ */
	
	  
  // Scroll to top behavior
  $(window).scroll(function(){
    // console.log('wwww');
    if ($(this).scrollTop() > 400) {
      $('.top-scroller').fadeIn();
    } else {
      $('.top-scroller').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.top-scroller').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });
  

 });

