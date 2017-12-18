var headers = document.querySelectorAll('.accordion__header');
var contents = document.querySelectorAll('.accordion__content');

for (let i = 0; i < contents.length; i++) {
  headers[i].addEventListener('click', function() {
    let contentHeight = contents[i].scrollHeight;
    contents[i].classList.toggle('accordion__content_visible');
    if (contents[i].classList.contains('accordion__content_visible')) {
      contents[i].style.height = contentHeight + 'px';
    } else {
      contents[i].style.height = null;
    }
  });
}