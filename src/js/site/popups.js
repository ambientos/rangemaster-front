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
$('[data-src="#popup-sign"],[data-src="#popup-sign-in"]')
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


/**
 * Popup Sign In steps
 */
let $signUp           = $('#popup-sign'),
	$buttonSignUpNext = $('._sign-up-next'),
	$buttonSignUpBack = $('.popup-sign-back'),
	signUpStep2Class  = '_step-2'

$buttonSignUpNext.on('click', function(e){
	e.preventDefault()

	$signUp.addClass(signUpStep2Class)
})

$buttonSignUpBack.on('click', function(e){
	e.preventDefault()

	$signUp.removeClass(signUpStep2Class)
})