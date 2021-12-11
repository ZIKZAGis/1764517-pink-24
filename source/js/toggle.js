let navMain = document.querySelector('.page-header__navigation');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__navigation--closed')) {
    navMain.classList.remove('page-header__navigation--closed');
    navMain.classList.add('page-header__navigation--opened');
  } else {
    navMain.classList.add('page-header__navigation--closed');
    navMain.classList.remove('page-header__navigation--opened');
  }
});
