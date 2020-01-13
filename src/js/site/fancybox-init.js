import '@fancyapps/fancybox'

let $menu      = $('.header-menu-container'),
	$tabletNav = $('.header-nav-tablet *')

$('[data-src="#popup-search"]').fancybox({
	afterShow: function() {
		$tabletNav.fadeOut()
		$menu.fadeOut()
	},
	afterClose: function(){
		$tabletNav.fadeIn()
		$menu.fadeIn()
	}
})