/**
 * Appear animate on visible
 */

import WOW from 'wow.js'

var wow = new WOW({
	boxClass: '_animate',
})

wow.init()


/**
 * Parallax effect for Header with background
 */

let headerTitleBg = $('.header-title-container')

$(window).on('scroll', function() {
	var topPosition = $(this).scrollTop(),
		bgPosition  = -topPosition / 5

	headerTitleBg.css('--bg-position', '50% '+ bgPosition +'px')
})