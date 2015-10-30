/* ---------------------
	CUSTOM JS DOCUMENT 
--------------------- */
/*******************************************
	PreLoader On window Load
*******************************************/
$(window).on("load", function() {

	"use strict";
	$('.preloader').fadeOut();

});




/*******************************************
	Document ready
*******************************************/

jQuery(document).ready(function($) {

	"use strict";


	/* ---------------------	
		Hover slide
/* --------------------- */

	$('img.data_colored').css({
		'display': 'none'
	}); // element hide on document ready
	$('img.data_nocolor').css({
		'display': 'none'
	}); // element hide on document ready


	var coloredImageActive = $('.wv-slidehover-main ul li.active').children('img.data_colored').attr('src'); // get src from loaded active element children on document ready	

	$('.wv-slidehover-main ul li.active').css({
		"background-image": "url(" + coloredImageActive + ")"
	}); // get src to loaded active element on document ready	


	$('.wv-slidehover-main ul li').on("mouseenter",

	function() {
		$('.wv-slidehover-main ul li.active').addClass('oldone'); // add class to an element


		var oldImage = $('.wv-slidehover-main ul li.active.oldone img.data_nocolor').attr('src');

		$('.wv-slidehover-main ul li.active.oldone').css({
			"background-image": "url(" + oldImage + ")"
		}); // set src to an element			 

		$('.wv-slidehover-main ul li').removeClass('active'); // remove class from an element

		$('.wv-slidehover-main ul li').removeClass('oldone'); // removeClass from an element


		var coloredImage = $(this).children('img.data_colored').attr('src'); // get src from current element children			 

		var nocoloredImage = $(this).children('img.data_nocolor').attr('src'); // get src from current element children			 

		$(this).addClass('active'); // add class to an element

		$(this).css({
			"background-image": "url(" + coloredImage + ")"
		}); // set src to an element

	});

	/*******************************************
Simple Bar Chart
*******************************************/

	$("#bar-chart").appear(function() {
		$(this).dxChart({
			dataSource: [{
				day: "2009",
				oranges: 100
			}, {
				day: "2010",
				oranges: 300
			}, {
				day: "2011",
				oranges: 200
			}, {
				day: "2012",
				oranges: 400
			}, {
				day: "2013",
				oranges: 600
			}, {
				day: "2014",
				oranges: 200
			}, {
				day: "2015",
				oranges: 300
			}],
			valueAxis: {
				grid: {
					color: '#9D9EA5',
					width: 0.1
				}
			},
			legend: {
				visible: false,
			},
			series: {
				argumentField: "day",
				valueField: "oranges",
				name: "My oranges",
				visible: false,
				type: "bar",
				color: '#f55e45'
			}
		});
	});

	/* ---------------------	
		Fun Factor / Counter
/* --------------------- */
	$(".count-number").appear(function() {
		$(this).each(function() {
			var datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});	

	/* ---------------------	
		Mac detection
/* --------------------- */
	// console.log(navigator.userAgent);
	/* Adjustments for Safari on Mac */
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		// console.log('Safari on Mac detected, applying class...');
		$('body').addClass('safari-mac'); // provide a class for the safari-mac specific css to filter with
	}

	/*******************************************
	Main Slider Calling
*******************************************/
	homePageSliderInit();


	/* ---------------------	
	All owl Carousels Calling
/* --------------------- */

	owlCarouselInit();


});

/*******************************************
	Main Slider
*******************************************/

function homePageSliderInit() {
	"use strict";
	$('.tp-banner').show().revolution({
		dottedOverlay: "none",
		delay: 16000,
		startwidth: 1170,
		startheight: 785,
		hideThumbs: 200,

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 5,

		navigationType: "none",
		navigationArrows: "solo",
		navigationStyle: "preview2",

		touchenabled: "on",
		onHoverStop: "on",

		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,

		parallax: "mouse",
		parallaxBgFreeze: "on",
		parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

		keyboardNavigation: "on",

		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 0,
		navigationVOffset: 20,

		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,

		shadow: 0,
		fullWidth: "on",
		fullScreen: "off",

		spinner: "spinner4",

		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,

		shuffle: "off",

		autoHeight: "off",
		forceFullWidth: "off",



		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off",
		hideThumbsUnderResolution: 0,

		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		startWithSlide: 0,
		videoJsPath: "revslider/videojs/",
		fullScreenOffsetContainer: ""
	});

}

/* ---------------------	
	All owl Carousels 
/* --------------------- */

function owlCarouselInit() {
	"use strict";
	/**********owl fixed option*************/
	$("#owl-example").owlCarousel({
		items: 1,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		pagination: false
	});


	$("#owl-example1").owlCarousel({
		items: 2,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		pagination: false
	});


	$("#owl-example2").owlCarousel({
		items: 3,
		navigation: false, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		pagination: true
	});


	$("#owl-example3").owlCarousel({
		items: 4,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		pagination: false
	});


	$("#owl-example4").owlCarousel({
		items: 1,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		pagination: false
	});


	$("#owl-about").owlCarousel({
		items: 2,
		navigation: false, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		pagination: true
	});


	$("#owl-example6").owlCarousel({
		items: 4,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		pagination: false
	});


	$("#owl-example7").owlCarousel({
		items: 4,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		pagination: false
	});

	/**********owl custom option*************/


	if ($('.owl-sidebar').length) {
		$(".owl-sidebar").each(function(index) {
			var effect_mode = $(this).data('effect');
			var autoplay = $(this).data('autoplay');
			var navigation = $(this).data('navigation');
			var pagination = $(this).data('pagination');
			var singleitem = $(this).data('singleitem');
			var items = $(this).data('items');
			$(this).owlCarousel({
				transitionStyle: effect_mode,
				autoplay: autoplay,
				navigation: navigation,
				pagination: pagination,
				singleItem: singleitem,
				items: items,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});
		});
	}

}