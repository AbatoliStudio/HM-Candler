const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu__list--active');
});




const swiperOne = new Swiper('.feedback__slider', {
  // Optional parameters
  loop: false,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
/*   autoplay: {
    delay: 5000,
  },  */

});

const swiperTwo = new Swiper('.certificates__slider', {
  // Optional parameters
  loop: true,
  slidePerView: "auto",
  spaceBetween: 0,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


});

