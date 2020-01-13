let $formContainer = $('.popup-search'),
	$form          = $formContainer.find('.popup-search-form'),
	$formInput     = $formContainer.find('.popup-search-form-input'),
	$formOftenItem = $formContainer.find('.popup-search-often-list-item')

$formOftenItem.on('click', function(){
	let itemTextQuery = $(this).text()

	$formInput.val(itemTextQuery)
	$form.submit()
})