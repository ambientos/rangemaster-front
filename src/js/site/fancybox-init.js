import '@fancyapps/fancybox'

/**
 * Popup Search
 */
let $menu      = $('.header-menu-container'),
	$tabletNav = $('.header-nav-tablet *')

$('[data-src="#popup-search"]').fancybox({
	afterShow: function() {
		$tabletNav.addClass('d-none')
		$menu.fadeOut()
	},
	afterClose: function(){
		$tabletNav.removeClass('d-none')
		$menu.fadeIn()
	}
})


/**
 * Popup Sign In / Sign Up
 */
$('[data-src="#popup-sign"]')
	.on('click', function(e){
		let button = $(this)

		if ( button.hasClass('_clicked') ) {
			e.preventDefault()

			$.fancybox.close()

			button.removeClass('_clicked')
		}
		else {
			button.addClass('_clicked')
		}
	})
	.fancybox({
		touch: false,
		beforeShow: function( instance, current ) {
			let $container = instance.$refs.container,
				$slide     = instance.$refs.stage.find('.fancybox-slide')

			$container.addClass('popup-sign-container')
			$slide.addClass('d-flex')
		}
	})