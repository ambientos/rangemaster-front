let scrollClass   = '_scrolled',
	observerClass = 'header-observer'

document.body.insertAdjacentHTML('beforeend', `<div class="${observerClass}"/>`)

if ( 'IntersectionObserver' in window &&
	'IntersectionObserverEntry' in window &&
	'intersectionRatio' in window.IntersectionObserverEntry.prototype
	) {

	let observer = new IntersectionObserver(entries => {
		if (entries[0].boundingClientRect.y < 0) {
			document.body.classList.add(scrollClass)
		} else {
			document.body.classList.remove(scrollClass)
		}
	})

	observer.observe(document.querySelector(`.${observerClass}`))
}
else {
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 5 ) {
			document.body.classList.add(scrollClass)
		}
		else {
			document.body.classList.remove(scrollClass)
		}
	})
}