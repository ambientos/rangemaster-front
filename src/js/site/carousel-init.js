/**
 * Owl Carousel
 */

$('.carousel-container').each(function(){
	let $container    = $(this),
		$carousel     = $container.find('.carousel'),
		promo         = +$container.data('promo') || 0,
		items         = +$container.data('items') || 1,
		loop          = $container.data('loop') || 0,
		margin        = $container.data('margin') || 0,
		nav           = $container.data('nav') || 0,
		navContainer  = $container.data('nav-container') || 0,
		dots          = $container.data('dots') || 0,
		dotsContainer = $container.data('dots-container') || 0,

		numberFormat  = {
			minimumIntegerDigits: 2
			//minimumFractionDigits: 2,
		}


	options = {
		items: items,
		margin: +margin,
		loop: loop,
		nav: nav,
		navText: ['<i></i>', '<i></i>'],
		dots: dots
	}


	if ( items === 3 ) {
		options.responsive = {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	}

	if ( items === 4 ) {
		options.responsive = {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	}


	if ( promo ) {
		let promoOptions = {
			loop:          true,
			autoplay:      true,
			nav:           true,
			animateOut:    'fadeOut',
			onInitialized: function(event){
				$container.data( 'count', event.item.count )
			},
			onChanged:     function(event){
				let current  = event.item.index,
					$current = $container.find('.promo-carousel-nav-current')

				if ( Number.isInteger(current) ) {
					current++
					$current.text( current.toLocaleString('en', numberFormat) )
				}
			}
		}

		$.extend(options, promoOptions)
	}


	if ( navContainer ) {
		options.navContainer = navContainer
	}


	if ( dotsContainer ) {
		options.dotsContainer = dotsContainer
	}


	$carousel.owlCarousel(options)

	if ( $container.hasClass('promo-container') ) {
		let $nav    = $container.find('.owl-nav'),
			current = '01',
			count   = $container.data('count')

		count = count.toLocaleString('en', numberFormat)

		$nav
			.addClass('container')
			.after(`
				<div class="promo-carousel-nav container">
					<span class="promo-carousel-nav-current">${current}</span>
					<span class="promo-carousel-nav-num">${count}</span>
				</div>
			`)
	}
})