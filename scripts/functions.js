// $(window).scroll(function() {
// 	"use strict";
//
// 	var wScroll = $(this).scrollTop();

  //console.log('wScroll');


  //
	// $('#back-bird').css({
	// 	'transform' : 'translate(0px, '+ wScroll /4 +'%)'
	// });
  //
	// $('#fore-bird').css({
	// 	'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
	// });

  // if (wScroll > $('main').offset().top) {
	//
  //   $('#primary').css({
  // 		'transform' : 'translate(0px, '+ wScroll / 20 +'%)'
  // 	});

	// $('.clothes-pics figure').each(function(i){
  //
	// 	setTimeout(function(){
	// 		$('.clothes-pics figure').eq(i).addClass('is-showing');
	// 	}, 150 * (i+1));
  //
	// });
// }
//
//
// });

function logoSwitch () {
	  $('.altLogo').each(function() {
		$(this).css('top',
		  $('.startLogo').offset().top -  $(this).closest('.row').offset().top
		);
	  });
	};

	$(document).scroll(function() {logoSwitch();});

	logoSwitch();
