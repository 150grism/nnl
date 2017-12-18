var headers = document.querySelectorAll('.accordion__header');
var contents = document.querySelectorAll('.accordion__content');
var bodies = document.querySelectorAll('.accordion__body');
var footers = document.querySelectorAll('.accordion__footer');
var chevrons = document.querySelectorAll('.accordion__chevron');

console.log(contents[0].scrollHeight);
console.log(footers[0].scrollHeight);

for (let i = 0; i < contents.length; i++) {
  console.log(footers[i].scrollHeight);
  headers[i].addEventListener('click', function() {
    console.log(bodies[i].scrollHeight, footers[i].scrollHeight);
    let contentHeight = bodies[i].scrollHeight + footers[i].scrollHeight; //contents[i].scrollHeight;
    contents[i].classList.toggle('accordion__content_visible');
    chevrons[i].classList.toggle('fa-rotate-90');
    if (contents[i].classList.contains('accordion__content_visible')) {
      contents[i].style.height = contentHeight + 'px';
    } else {
      contents[i].style.height = null;
    }
  });
}