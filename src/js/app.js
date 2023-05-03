import * as webpTest from './modules/iswebp.js';
import IMask from 'imask';
webpTest.isWebp()


//scrollMargin
const header = document.querySelector('.header');
let headerHeight;
let scrollMargin = () => {
   headerHeight = header.getBoundingClientRect().height.toFixed(4);
   document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}

scrollMargin();
window.addEventListener('resize', () => {
   scrollMargin();
});


//themes
const themeSwitcher = document.querySelector('.header__theme-switcher');

themeSwitcher.addEventListener('click', () => {
   document.documentElement.classList.toggle('theme-dark');
   if (document.documentElement.classList.contains('theme-dark')) {
      localStorage.setItem('theme', 'dark');
   } else {
      localStorage.setItem('theme', 'light');
   }
});

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

const setThemeCallback = (mq) => {
   if (mq.matches) {
      document.documentElement.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
   } else {
      document.documentElement.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
   }
}
darkThemeMq.addEventListener('change', setThemeCallback);
setThemeCallback(darkThemeMq);


//form
document.querySelectorAll('.form').forEach(form => {
   let dropdown = form.querySelector('.form__dropdown');
   let dropdownInput = dropdown.querySelector('.form__input');
   let dynamicMask = IMask(
      form.querySelector('.form__input--tel'),
      {
         mask: [
            {
               mask: '+7 000 000 00 00'
            },
            {
               mask: /^\S*@?\S*$/
            }
         ]
      });
   dropdown.querySelectorAll('.form__dropdown-option').forEach(option => {
      option.addEventListener('click', () => {
         dropdownInput.value = option.innerHTML;
      });
   });
   dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('active');
   });
});


//popup
const popup = document.querySelector('.popup-wrapper');
document.querySelectorAll('[href="#popup"]').forEach(popupTrigger => {
   popupTrigger.addEventListener('click', e => {
      e.preventDefault();
      popup.classList.add('active');
      document.body.classList.add('active');
   });
});
popup.addEventListener('click', e => {
   if (!e.target.closest('.popup') || e.target.closest('.popup__close')) {
      popup.classList.remove('active');
      document.body.classList.remove('active');
   }
});

//mobile menu
const mobileMenu = document.querySelector('.header__mobile-wrapper');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   document.body.classList.toggle('active');
   mobileMenu.classList.toggle('active');
});
mobileMenu.addEventListener('click', e => {
   if (!e.target.closest('.header__mobile') || e.target.closest('.header__menu-mobile-link')) {
      burger.classList.remove('active');
      document.body.classList.remove('active');
      mobileMenu.classList.remove('active');
   };
});
