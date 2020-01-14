import '@fancyapps/fancybox'

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