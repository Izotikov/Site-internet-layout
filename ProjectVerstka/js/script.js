let button_down = document.querySelector('#main-button');
let footerElem = document.querySelector('.footer-main');
let footerElemRect = footerElem.getBoundingClientRect();

button_down.addEventListener('click', function () {
    window.scrollTo(0, footerElemRect.bottom);
})