const dropdownMenu = document.querySelector('.dropdown__menu')
const dropdownMenuTitle = dropdownMenu.querySelector('.dropdown__menu--title')

dropdownMenuTitle.addEventListener('click', (e) => {
	e.preventDefault()
	dropdownMenu.classList.toggle('dropdown__menu--active')

})

const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal__overlay')

const modalBtnClose = document.querySelector('.modal__window__btn--close')
const modalButton = document.querySelector('.modal__button');

modalButton.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.toggle('modal--active')

})

modalBtnClose.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.remove('modal--active')
})


document.addEventListener('click', (e) => {
	if (modal.classList.contains('modal--active') && modalOverlay.contains(e.target))
		modal.classList.remove('modal--active');

	if (dropdownMenu.classList.contains('dropdown__menu--active') && !dropdownMenu.contains(e.target))
		dropdownMenu.classList.remove('dropdown__menu--active');

});

