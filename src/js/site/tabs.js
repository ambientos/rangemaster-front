const $tabContainers = $('.tab-container'),
	classActive = '_active'

$tabContainers.each(function(){
	const $tabContainer = $(this)
	const $tabs = $tabContainer.find('.tab-list-item')
	const $tabContents = $tabContainer.find('.tab-content-item')

	$tabs.on('click', function(){
		const $tab = $(this)
		const $tabSiblings = $tab.siblings()

		$tab.addClass(classActive)
		$tabSiblings.removeClass(classActive)

		$tabContents
			.removeClass(classActive)
			.eq($tab.index()).addClass(classActive)
	})
})