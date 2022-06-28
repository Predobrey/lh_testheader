function checkWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

checkWebP(function (support) {
        if (support) {
            //Do what you whant =)
            document.querySelector('body').classList.add('webp');
        } else {
            //Do what you whant =)
            document.querySelector('body').classList.add('no-webp');
        }

    })

const headBur = document.querySelector('.header__burger');
const headMenu = document.querySelector('.header__menu');
const bod = document.querySelector('body');
const lang = document.querySelector('.header__butLang');
const header = document.querySelector('.header');
const category = document.querySelector('.cat');
const banner = document.querySelector('.header__banner');

headBur.addEventListener('click', function() {
    headBur.classList.toggle('active');
    headMenu.classList.toggle('active');
    lang.classList.toggle('active');
    category.classList.toggle('active');
    banner.classList.toggle('active');
    bod.classList.toggle('lock'); // блокируем прокрутку, когда меню активно
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0px";
    } else {

        header.style.top = "-134px";
        header.style.transition = "all 1s";
    }
    prevScrollpos = currentScrollPos;
}
