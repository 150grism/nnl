var headers = document.querySelectorAll('.accordion__header');
var contents = document.querySelectorAll('.accordion__content');
var chevrons = document.querySelectorAll('.accordion__chevron');

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