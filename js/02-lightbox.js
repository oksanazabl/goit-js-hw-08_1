import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function imagesItemTemplate({ preview, original, description }) {
return `<a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`
};
    
const createGalleryMarkup = galleryItems.map(imagesItemTemplate);
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup .join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
