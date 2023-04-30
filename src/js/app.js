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
});

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

const setThemeCallback = (mq) => {
   if (mq.matches) {
      document.documentElement.classList.add('theme-dark');
   } else {
      document.documentElement.classList.remove('theme-dark');
   }
}
darkThemeMq.addEventListener('change', setThemeCallback);
setThemeCallback(darkThemeMq);

//phone mask

let dynamicMask = IMask(
   contact,
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

//form dropdown

document.querySelectorAll('.form__dropdown').forEach(dropdown => {
   let dropdownOptions = dropdown.querySelector('.form__dropdown-options');
   let optionsHeight = 0;
   let dropdownHeightFunc = () => {
      if (dropdown.classList.contains('active')) {
         dropdownOptions.style.height = optionsHeight + 'px';
      } else {
         dropdownOptions.removeAttribute('style');
      }
   }
   dropdown.querySelectorAll('.form__dropdown-option').forEach(option => {
      optionsHeight += option.offsetHeight;
      option.addEventListener('click', () => {
         connect.value = option.innerHTML;
      });
   });
   dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('active');
      dropdownHeightFunc();
   });
   window.addEventListener('resize', () => {
      optionsHeight = 0;
      dropdown.querySelectorAll('.form__dropdown-option').forEach(option => {
         optionsHeight += option.offsetHeight;
      });
      dropdownHeightFunc()
   })
});