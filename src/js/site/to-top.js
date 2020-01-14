let toTopClass = 'main-to-top'

document.body.insertAdjacentHTML('beforeend', `
	<div class="d-flex d-md-none justify-content-center align-items-center ${toTopClass}">
		<svg class="${toTopClass}-ico" height="16" viewBox="0 0 8 16" width="8" xmlns="http://www.w3.org/2000/svg"><path d="m4.35355 1.07504c-.19526-.195259-.51184-.195259-.7071 0l-3.181984 3.18198c-.195263.19527-.195263.51185 0 .70711.195262.19526.511844.19526.707104 0l2.82843-2.82843 2.82843 2.82843c.19526.19526.51184.19526.7071 0 .19527-.19526.19527-.51184 0-.70711zm.14645 14.31786v-13.9643h-1v13.9643z"/></svg>
	</div>
`)

$('.main-to-top').on('click', function(){
	$('html,body').animate({ scrollTop: 0 }, 'slow')
})