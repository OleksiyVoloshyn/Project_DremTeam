import{A as h,S as y,a as L}from"./assets/vendor-DS-UnTuI.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{new h("#faq-list",{duration:400,showMultiple:!1,openOnInit:[]})});document.querySelectorAll(".about-me-use");const q=document.querySelector(".about-me-btn-next");new h(".accordion-container",{onOpen:function(s){const n=s.querySelector(".about-me-use");n&&n.setAttribute("href","/img/icons.svg#icon-icon-up")},onClose:function(s){const n=s.querySelector(".about-me-use");n&&n.setAttribute("href","/img/icons.svg#icon-icon-down")}});const B=new y(".swiper",{loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-me-btn-next"},on:{slideChange:function(){const s=this.slides;s.forEach(r=>r.classList.remove("active"));const n=s[this.realIndex];n&&n.classList.add("active")}}});q.addEventListener("click",()=>{B.slideNext()});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#covers"),n=document.querySelectorAll(".marquee-item");function r(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)}function o(){r(s)?(n.forEach(e=>{e.style.animationPlayState="running"}),console.log("running")):(n.forEach(e=>{e.style.animationPlayState="paused"}),console.log("paused"))}n.forEach(e=>{e.style.animationPlayState="paused"}),console.log("paused"),window.addEventListener("scroll",o),window.addEventListener("resize",o)});const g=document.getElementById("form-together"),m=document.getElementById("successModal"),l=document.getElementById("modalOverlay"),f=document.getElementById("modalMessage"),I=document.getElementById("closeModal");function E(){m.classList.remove("active"),l.classList.remove("active")}g.addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("together-input--email"),r=document.getElementById("together-input--comments"),o={email:n.value.trim(),comment:r.value.trim()};if(!o.email||!o.comment){f.textContent="Please fill out all required fields.",m.classList.add("active"),l.classList.add("active");return}try{const t=(await L.post("https://portfolio-js.b.goit.study/api/requests",o,{headers:{"Content-Type":"application/json"}})).data;f.innerHTML=`
      <span class="thank-you-text">${t.title}</span><br>
      <span class="thank-you-text--two">${t.message}</span>
    `,m.classList.add("active"),l.classList.add("active"),g.reset()}catch(e){let t="An error occurred while sending data. Try again.";e.response?e.response.status===400?t="Bad request: Invalid request body.":e.response.status===404?t="Not found: The requested resource could not be found.":e.response.status===500&&(t="Server error: Please try again later."):e.request?t="A network error occurred. Please check your connection and try again.":t=`Error: ${e.message}`,f.textContent=t,m.classList.add("active"),l.classList.add("active")}});I.addEventListener("click",E);l.addEventListener("click",E);document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".modal-header"),n=document.querySelector(".modal-btn-close"),r=document.querySelector(".header-icon-burger"),o=document.querySelectorAll(".menu-list a"),e=document.querySelector(".btn-menu-tablet"),t=document.querySelector(".btn-menu"),i=document.querySelector(".menu-center-open"),d=document.querySelector(".menu-center-list");function p(){s.classList.add("is-open"),document.body.style.overflow="hidden"}function c(){s.classList.remove("is-open"),document.body.style.overflow=""}n&&n.addEventListener("click",c),r&&r.addEventListener("click",p),e&&e.addEventListener("click",c),t&&t.addEventListener("click",c),o.forEach(function(a){a.addEventListener("click",c)}),document.querySelectorAll(".menu-center-item a").forEach(function(a){a.addEventListener("click",function(){d.classList.remove("is-open")})}),i&&i.addEventListener("click",function(){d.classList.toggle("is-open")}),s.addEventListener("click",function(a){a.target===s&&c()})});var u=new y(".swiper-container",{slidesPerView:1,spaceBetween:30,loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){S()}}});const v=document.querySelector("swiper-button-next"),w=document.querySelector(".swiper-button-prev");function S(){v.addEventListener("click",()=>u.slideNext()),w.addEventListener("click",()=>u.slidePrev()),u.isEnd?v.classList.add("swiper-button-disabled"):v.classList.remove("swiper-button-disabled"),u.isBeginning?w.classList.add("swiper-button-disabled"):w.classList.remove("swiper-button-disabled")}S();async function M(){const r="https://portfolio-js.b.goit.study/api/reviews";try{const o=await L.get(r);if(o.status===200)return o.data.map(({_id:t,author:i,avatar_url:d,review:p})=>({author:i,avatar_url:d,review:p}));throw new Error("Server responded with status:",o.status)}catch(o){throw console.error("There was a problem with the request:",o),o}}async function x(){try{const s=await M(),n=document.querySelector(".reviews-list"),r=s.map(o=>`
    <li class="reviews-list-item swiper-slide">
      <img class="avatar_url" src=${o.avatar_url} width="48" alt="icon user">
      <h3 class="author"> ${o.author}</h3>
      <p class="review"> ${o.review}</p>
    </li>`).join("");n.insertAdjacentHTML("beforeend",r)}catch(s){window.alert("Error fetching reviews:",s)}}x();const b=new y(".reviws-swiper",{navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},centeredSlidesPerView:!0,slidesPerView:"auto",spaceBetween:30,on:{slideChangeTransitionEnd:function(){const s=document.querySelector(".reviews-next-btn"),n=document.querySelector(".reviews-prev-btn");b.isEnd?s.disabled=!0:s.disabled=!1,b.isBeginning?n.disabled=!0:n.disabled=!1}}});
//# sourceMappingURL=index.js.map
