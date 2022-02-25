// let menuBtn = document.querySelector('.menu__burger');
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

const menuItem = document.getElementsByClassName("menu__item");
const lines = document.getElementsByClassName("line");


Array.prototype.forEach.call(menuItem, function (element) {
  element.addEventListener('click', function () {
    let itemId = this.id;
    let line = document.getElementById(itemId.split('-')[1]);

    Array.from(lines).filter(el => el.classList.contains('visible')).forEach(el => el.classList.remove("visible"));

    line.classList.add('visible');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});