import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".search-form"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),m="https://pixabay.com/api",d="42188740-c0be7e81c485970d884fe2cff",g=`${m}?key=${d}`;c.addEventListener("submit",h);a.style.display="none";function h(s){s.preventDefault(),a.style.display="block";const r=s.currentTarget.elements.query.value;p(r).then(o=>{a.style.display="none",o.hits.length||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),y.innerHTML=$(o.hits),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>console.log(o)).finally(c.reset())}function p(s){return fetch(`${g}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>console.log(r))}function $(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:l,downloads:i})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${n}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${t} • Comments: ${l} •</span> Downloads:${i}</p>
  </a>
</li>
  `).join("")}
//# sourceMappingURL=commonHelpers.js.map
