import{a as f,S as g}from"./assets/vendor-T39aMXzQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#covers"),s=document.querySelectorAll(".marquee-item");function r(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)}function n(){r(o)?(s.forEach(e=>{e.style.animationPlayState="running"}),console.log("running")):(s.forEach(e=>{e.style.animationPlayState="paused"}),console.log("paused"))}s.forEach(e=>{e.style.animationPlayState="paused"}),console.log("paused"),window.addEventListener("scroll",n),window.addEventListener("resize",n)});const d=document.getElementById("form-together"),i=document.getElementById("successModal"),a=document.getElementById("modalOverlay"),l=document.getElementById("modalMessage"),y=document.getElementById("closeModal");function m(){i.classList.remove("active"),a.classList.remove("active")}d.addEventListener("submit",async o=>{o.preventDefault();const s=document.getElementById("together-input--email"),r=document.getElementById("together-input--comments"),n={email:s.value.trim(),comment:r.value.trim()};if(!n.email||!n.comment){l.textContent="Please fill out all required fields.",i.classList.add("active"),a.classList.add("active");return}try{const t=(await f.post("https://portfolio-js.b.goit.study/api/requests",n,{headers:{"Content-Type":"application/json"}})).data;l.innerHTML=`
      <span class="thank-you-text">${t.title}</span><br>
      <span class="thank-you-text--two">${t.message}</span>
    `,i.classList.add("active"),a.classList.add("active"),d.reset()}catch(e){let t="An error occurred while sending data. Try again.";e.response?e.response.status===400?t="Bad request: Invalid request body.":e.response.status===404?t="Not found: The requested resource could not be found.":e.response.status===500&&(t="Server error: Please try again later."):e.request?t="A network error occurred. Please check your connection and try again.":t=`Error: ${e.message}`,l.textContent=t,i.classList.add("active"),a.classList.add("active")}});y.addEventListener("click",m);a.addEventListener("click",m);var u=new g(".swiper-container",{slidesPerView:"auto",spaceBetween:30,loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){p()}}});function p(){const o=document.querySelector(".swiper-button-next"),s=document.querySelector(".swiper-button-prev");u.isEnd?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled"),u.isBeginning?s.classList.add("swiper-button-disabled"):s.classList.remove("swiper-button-disabled")}p();
//# sourceMappingURL=index.js.map
