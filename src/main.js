import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector(".search-form")
const galleryUl = document.querySelector(".gallery")
const loader = document.querySelector('.loader')

const URL = "https://pixabay.com/api"
const KEY = "42188740-c0be7e81c485970d884fe2cff"
const serverRequest = `${URL}?key=${KEY}`



form.addEventListener("submit", searchImg)
loader.style.display = "none";


function searchImg(evt) {
    evt.preventDefault()
    loader.style.display = "block"
    const searchItem = evt.currentTarget.elements.query.value;
    fetchPhoto(searchItem).then((data) => {
        loader.style.display = "none"
        if (!data.hits.length) {
            iziToast.error({
                title: "Error",
                message:
                    "Sorry, there are no images matching your search query. Please try again!",
            })
        }
        
        galleryUl.innerHTML = galerryMarkup(data.hits)
        const refreshPage = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
        });
       refreshPage.refresh()    

    }).catch((err) => console.log(err)).finally(form.reset())
}
 
function fetchPhoto(photo) {
    return fetch(`${serverRequest}&q=${photo}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((photo) => {
            if (!photo.ok) {
                throw new Error(photo.statusText)
            }
            return photo.json()
        }).catch((err) => console.log(err))
}


function galerryMarkup(arr) {
    return arr
        .map(
            ({ webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads, }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <p class= "gallery-descr">• Likes: ${likes} • Views: ${views} • Comments: ${comments} •</span> Downloads:${downloads}</p>
  </a>
</li>
  `)
    .join("")
}
/*form.addEventListener("submit", searchImage)
function searchImage(e) {
    e.preventDefault()
    const queryInp = e.target;
    const query = queryInp.elements.query.value;
   
    fetchPhoto(query).then(data => {
        if (data.totalHits.length = 0) {
            throw new iziToast.error({
                title: 'Error',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
            })
     
      galleryUl.innerHTML = galleryMarkup(data.hits);
      const refreshPage = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        refreshPage.refresh();
        form.reset();
        
    }
    } ).catch(onFetchError)
}

function fetchPhoto(photo) {
    return fetch(`${serverRequest}&q=${photo}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
}

function galerryMarkup(arr) {
  return arr
    .map(
      ({ webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads, }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <p class= "gallery-descr">• Likes: ${likes} • Views: ${views} • Comments: ${comments} •</span> Downloads:${downloads}</p>
  </a>
</li>
  `
    )
    .join('');
    
}*/
