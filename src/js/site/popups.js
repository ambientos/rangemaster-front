/**
 * Popup Search
 */

$('[href="#popup-search"]').fancybox({
	baseTpl: `
		<div class="fancybox-container" role="dialog" tabindex="-1">
			<div class="fancybox-bg _opaque"></div>
			<div class="fancybox-inner">
				<div class="fancybox-stage"></div>
			</div>
		</div>
	`
})


/**
 * Popup Sign In / Sign Up
 */
let signUpSelector = '#popup-sign',
	$signUp        = $(signUpSelector),
	$signToggle    = $('.popup-sign-type-toggle'),

	fancyboxSignDefaultOptions = {
		touch: false,
		beforeShow: function( instance, current ) {
			let $container = instance.$refs.container,
				$slide     = instance.$refs.stage.find('.fancybox-slide')

			$container.addClass('popup-sign-container')
			$slide.addClass('d-flex')
		}
	}

/**
 * Close popup if is open
 */
$('[data-src="'+ signUpSelector +'"],[data-src="#popup-submit-app"]')
	.on('click', function(e){
		let fancyboxCurrentInstance = $.fancybox.getInstance()

		if ( fancyboxCurrentInstance ) {
			e.preventDefault()

			fancyboxCurrentInstance.close()
		}
	})

	// Set default options for Sign Up button
	.fancybox(fancyboxSignDefaultOptions)


/**
 * Toggle between Sign Up / Sign In
 */
$signToggle.on('click', function(e){
	e.preventDefault()

	$.fancybox.close()
	$.fancybox.open( $.extend( fancyboxSignDefaultOptions, { src: $(this).attr('href') } ))
})


/**
 * Popup Sign In steps
 */
let $buttonSignUpNext = $('._sign-up-next'),
	$buttonSignUpBack = $('.popup-sign-back'),
	signUpStep2Class  = '_step-2'

$buttonSignUpNext.on('click', function(){
	$signUp.addClass(signUpStep2Class)
})

$buttonSignUpBack.on('click', function(){
	$signUp.removeClass(signUpStep2Class)
})