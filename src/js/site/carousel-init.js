/**
 * Owl Carousel
 */

$('.carousel-container').each(function(){
	let $container      = $(this),
		$carousel       = $container.find('.carousel'),
		promo           = +$container.data('promo') || 0,
		items           = +$container.data('items') || 1,
		autoplay        = $container.data('autoplay') || 0,
		autoplayTimeout = +$container.data('timeout') || 5000,
		loop            = $container.data('loop') || 0,
		margin          = $container.data('margin') || 0,
		nav             = $container.data('nav') || 0,
		navContainer    = $container.data('nav-container') || 0,
		dots            = $container.data('dots') || 0,
		dotsContainer   = $container.data('dots-container') || 0,

		numberFormat  = {
			minimumIntegerDigits: 2
		},

		options = {
			items:           items,
			margin:          +margin,
			autoplay:        autoplay,
			autoplayTimeout: autoplayTimeout,
			loop:            loop,
			nav:             nav,
			navText:         ['<i></i>', '<i></i>'],
			dots:            dots
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
		let promoSetTimeout,
			promoOptions = {
				animateOut: 'fadeOut',
				onInitialize() {
					$carousel.children().sort(function(){
						return Math.round(Math.random()) - 0.5
					}).each(function(){
						$(this).appendTo($carousel)
					})
				},
				onInitialized(event) {
					let $current = $container.find('.promo-carousel-nav-current')

					$container.data( 'count', event.item.count )

					setCurrentSlideIndex(event, $current)
				},
				onChange(event) {
					clearTimeout(promoSetTimeout)

					$container.find('.promo-carousel-nav')
						.removeClass('_changed')
				},
				onChanged(event) {
					let current  = event.item.index,
						$current = $container.find('.promo-carousel-nav-current')

					setCurrentSlideIndex(event, $current)

					promoSetTimeout = setTimeout(() => {
						$container.find('.promo-carousel-nav')
							.addClass('_changed')
					}, 500)
				}
			}

		options = { ...options, ...promoOptions }
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


	function setCurrentSlideIndex(event, $current){
		if (event.item) {
			let index = event.item.index - 1,
				count = event.item.count

			if (index > count) {
				index -= count;
			}

			if (index <= 0) {
				index += count;
			}

			if ( Number.isInteger(index) ) {
				$current.text( index.toLocaleString('en', numberFormat) )
			}
		}
	}
})