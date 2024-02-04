import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=document.querySelector(".search-form");i.querySelector(".search-form");i.querySelector(".start-btn");const u=document.querySelector(".gallery"),f="https://pixabay.com/api",m="42188740-c0be7e81c485970d884fe2cff",y=`${f}?key=${m}`;i.addEventListener("submit",d);function d(s){s.preventDefault();const r=s.target.elements.query.value;h(r).then(o=>{o.hits.length||a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.insertAdjacentHTML("beforeend",g(o.hits))}).catch(o=>console.log(o)).finally(i.reset())}function h(s){return fetch(`${y}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>console.log(r))}function g(s){return s.map(({webformatURL:r,largeImageURL:o,tags:c,likes:e,views:t,comments:n,downloads:l})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${c}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${t} • Comments: ${n} •</span> Downloads:${l}</p>
  </a>
</li>
  `).join("")}
//# sourceMappingURL=commonHelpers.js.map
