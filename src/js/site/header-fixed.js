if (
	'IntersectionObserver' in window &&
	'IntersectionObserverEntry' in window &&
	'intersectionRatio' in window.IntersectionObserverEntry.prototype
	) {

	let scrollClass   = '_scrolled',
		observerClass = 'header-observer',
		observer      = new IntersectionObserver(entries => {
			if (entries[0].boundingClientRect.y < 0) {
				document.body.classList.add(scrollClass)
			} else {
				document.body.classList.remove(scrollClass)
			}
		})

	document.body.insertAdjacentHTML('beforeend', `<div class="${observerClass}"/>`)

	observer.observe(document.querySelector(`.${observerClass}`))
}