const dropdownMenu = document.querySelector('.dropdown__menu')
const dropdownMenuTitle = dropdownMenu.querySelector('.dropdown__menu--title')

dropdownMenuTitle.addEventListener('click', (e) => {
	e.preventDefault()
	dropdownMenu.classList.toggle('dropdown__menu--active')

})

document.addEventListener('click', (e) => {
	const isClickInsideMenu = dropdownMenu.contains(e.target);
	if (!isClickInsideMenu) {
		dropdownMenu.classList.remove('dropdown__menu--active');
	}
});