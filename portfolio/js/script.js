let menuBtn = document.querySelector('.hamburger-menu__btn');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.list__item');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener("click", function () {
		  menu.classList.remove('active');
		  menuBtn.classList.remove('active');
		  body.classList.remove('active');
	   })
	})
 }z
