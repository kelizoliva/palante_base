Backdrop.behaviors.portal = {
  attach: function(context, settings) {
    $(function () {
      
    	// Drawers
    	$('.shrinkable', context).each(function () {
    		$(this).after( '<div class="shrinker"></div>' );
      	});
      $('.drawer', context).each(function () {
    	  if($(this).has('.junk').length !== 0) {
    			$( '<div class="pull"></div>' ).insertBefore($(this).children('.junk').first());
    		}
      });
      	
      // Make views rows clickable by using the 'clickable-row' class in the view format's "row class" field, and the 'usethislink' class applied as the anchor wrapper
      jQuery('.clickable-row.views-row', context).each(function() {
        if (jQuery(this).find('.usethislink a').length) {
          jQuery(this).click(function() {
            window.location = jQuery(this).find('.usethislink a').attr('href');
            return false;
          });
        }
      });
      
      // Create a line break in text with a double pipe || (great to use in title fields!)
      $('.line-break', context).each(function () {
  	    $(this).html($(this).html().replace('||','<br />'));
      });
      
      // Drawers in content
      $('.drawer', context).each(function () {
    	  if ($(this).hasClass('default-open')) {
    			$(this).children('.pull').addClass('open');
    	  }
    	  $(this).children('.pull').click(function(){
    		$(this).toggleClass('open');
    	    $(this).parent().children('.junk').slideToggle();
    	    return false;
    	  });
      });
      /* this is a jumpy mess, might remove.
      $(document).click(function(event) {
        if (!$(event.target).closest(".pull").length) {
        	$("body").find(".pull").removeClass("open");
        	$("body").find(".junk").slideUp();
    	  }
      });
      */
    });
  }
};

$(window).on('load', function (e) {
  
  // Initiate the wowjs animation library
  new WOW().init();
  
  // Smooth scroll for links with .scrollto classes  
	$('.scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;
      }
    }
  });
  
  // Shrinkable sidebar (can be used wherever, but the styling was catered to sidebar content, so)
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

  // Secondary shrinker for other content (requires additonal coding in sub-theme)
  if ($('.shrinkable_2').hasClass('default-enlarged')) {
		$(this).siblings('.shrinker_2').addClass('enlarged');
  }
  $('.shrinkable_2').siblings('.shrinker_2').click(function(){
		$(this).toggleClass('enlarged');
    $(this).siblings('.shrinkable_2').slideToggle();
    return false;
  });
  
  /* ----------------------------------
  SCROLL TO TOP BEHAVIOR
    - This provides a floating button which when clicked gracefully scrolls the user back to the top of the page.
  
	To utilize the scroll to top button outlined in the code below, place the following code anywhere in page.tpl.php: 
	  <div class="top-scroller js-top-scroller svg-icons">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"></path></svg>
       <span>Top</span>
     </div>
  -------------------------------------- */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.top-scroller').fadeIn();
    } else {
      $('.top-scroller').fadeOut();
    }
  });
  $('.top-scroller').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });
  /* -------------------------------------- */
  
});