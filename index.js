var headers = document.querySelectorAll('.accordion__header');
var contents = document.querySelectorAll('.accordion__content');
var chevrons = document.querySelectorAll('.accordion__chevron');

var menuList = document.querySelector('.menu__list');
var menuItems = document.querySelectorAll('.menu__item');
var o = [];

for (let i = 0; i < contents.length; i++) {
  headers[i].addEventListener('click', function() {
    let contentHeight = contents[i].scrollHeight;
    contents[i].classList.toggle('accordion__content_visible');
    chevrons[i].classList.toggle('fa-rotate-90');
    if (contents[i].classList.contains('accordion__content_visible')) {
      contents[i].style.height = contentHeight + 'px';
    } else {
      contents[i].style.height = null;
    }
  });
}

menuList.addEventListener('click', function() {
  for (let i = 0; i < menuItems.length; i++) {
    console.log(menuItems[i].children[0].children[0].checked);
    if (menuItems[i].children[0].children[0].checked) {
      menuItems[i].classList.add('menu__item_active');
    } else {
      menuItems[i].classList.remove('menu__item_active');
    }
  }
});