import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(
    ({preview, original, description}) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
)
.join('');
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryEl.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') {return;}
     const picture = basicLightbox.create(`
     <img src = ${e.target.dataset.source} width="800" height="600">
     `);
     picture.show();
     galleryEl.addEventListener('keydown', e => {
        if(e.code === 'Escape') {picture.close();}
     });
});

console.log(galleryItems);
