import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const slideGallery = document.querySelector(".gallery");

function createGallaryMarkup(items) {
    return items
        .map(
            item => `<li>
                  <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
              </li>`
        )
        .join("");
}

slideGallery.innerHTML = createGallaryMarkup(galleryItems);
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
