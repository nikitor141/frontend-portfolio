import * as webpTest from './modules/iswebp.js';
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