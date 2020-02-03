$('.table-folders').each(function(){
	let table = $(this),
		toggles = table.find('.table-folders-toggle')

	toggles.on('click', function(){
		let toggle = $(this),
			folder = toggle.parent().parent().next()

		toggle.toggleClass('_active')
		folder.toggleClass('d-lg-none')
	})
})