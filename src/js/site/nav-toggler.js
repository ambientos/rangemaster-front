let header = $('.header'),
	toggler = $('.navbar-toggler')

toggler.on('click', function(){
	header.toggleClass('_is-menu-expanded')
})