/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	Neo - Help Document LANDING PAGE
	Version     :	1.1
	Last Change : 	22/06/2021
	Primary Use :   Neo - Help Document LANDING PAGE

=================================================================================================================================*/

$(document).ready(function () {
	"use strict"; //Start of Use Strict
	var menu_li = $('.navbar-nav li a');
	var collapse = $('.navbar-collapse');
	var top_nav = $('.navbar-menu');
	
	/* Add & Remove active class in Menu and Submenu based on url(location) Start*/
        var url = window.location;
    // Will only work if string in href matches with location
        $('ul.navbar-nav a[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
        $('ul.navbar-nav a').filter(function () {
            return this.href == url;
		}).parent().addClass('active').parent().parent().addClass('active');

    /* Add & Remove active class in Menu and Submenu based on url(location) End*/
	
	$(window).scroll(function() {
	  var $header = $('.navbar-menu');
	  if ($(this).scrollTop() > 120) {
		if (!$header.hasClass('fixed-top')) $header.addClass("fixed-top");
	  } else {
		if ($header.hasClass('fixed-top')) $header.removeClass("fixed-top");
	  }
	});
	
	 //GALLERY POPUP
    var gallery = $('.popup-gallery');
    if (gallery.length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }
	

	(window).scroll(function() {
		if ($(this).scrollTop() > 20) {
		$('#back-to-top').fadeIn();
		} else {
		$('#back-to-top').fadeOut();
		}
		});

		$('#back-to-top').click(function() {
		$("html, body").animate({
		scrollTop: 0
		}, 1000);
		return false;
	});

	

    return false;
    // End of use strict
});