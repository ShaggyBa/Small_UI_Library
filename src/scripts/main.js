const dropdownMenu = document.querySelector('.dropdown__menu')
const dropdownMenuTitle = dropdownMenu.querySelector('.dropdown__menu--title')

dropdownMenuTitle.addEventListener('click', (e) => {
	e.preventDefault()
	dropdownMenu.classList.toggle('dropdown__menu--active')

})

const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modal__button');
const modalOverlay = document.querySelector('.modal__overlay')

modalButton.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.toggle('modal--active')

})


document.addEventListener('click', (e) => {
	if (modal.classList.contains('.modal--active') && modalOverlay.contains(e.target))
		console.log('lol')
	modal.classList.remove('modal--active');

	if (dropdownMenu.classList.contains('dropdown__menu--active'))
		if (!dropdownMenu.contains(e.target))
			dropdownMenu.classList.remove('dropdown__menu--active');

});

