var headers = document.querySelectorAll('.accordion__header');
var contents = document.querySelectorAll('.accordion__content');
var chevrons = document.querySelectorAll('.accordion__chevron');

var menuItems = document.querySelectorAll('.menu__item');
var states = [1];

for (let i = 0; i < contents.length; i++) {
  headers[i].addEventListener('click', function() {
    let contentHeight = contents[i].scrollHeight;
    contents[i].classList.toggle('accordion__active');
    headers[i].classList.toggle('accordion__active');
    chevrons[i].classList.toggle('fa-rotate-90');
    if (contents[i].classList.contains('accordion__active')) {
      contents[i].style.height = contentHeight + 'px';
    } else {
      contents[i].style.height = null;
      headers[i].classList.add('accordion__active');
      setTimeout(function() {
        headers[i].classList.remove('accordion__active');
      }, 357)
    }
  });
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    states.push(parseInt(menuItems[i].dataset.id));
    console.log(states);
    if (states[0] !== states[1]) {
      menuItems[states[1]-1].classList.add('menu__item_active');
      menuItems[states[0]-1].classList.remove('menu__item_active');
    }
    states.shift();
  });
}