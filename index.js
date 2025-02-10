import{A as h,S as g,N as E,K as I,a as j}from"./assets/vendor-CjHTzI7x.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{new h("#faq-list",{duration:400,showMultiple:!1,openOnInit:[]})});document.querySelectorAll(".about-me-use");const S=document.querySelector(".about-me-btn-next");new h(".accordion-container",{onOpen:function(o){},onClose:function(o){},openOnInit:[0]});const q=new g(".swiper",{slideActiveClass:"swiper-slide-active",modules:[E,I],keyboard:{enabled:!0,onlyInViewport:!0},spaceBetween:0,loop:!0,slidesPerView:2,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-me-btn-next"}});S.addEventListener("click",()=>{q.slideNext()});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#covers"),t=document.querySelectorAll(".marquee-item");function r(e){const s=e.getBoundingClientRect();return s.bottom>0&&s.top<(window.innerHeight||document.documentElement.clientHeight)}function n(){r(o)?t.forEach(e=>{e.style.animationPlayState="running"}):t.forEach(e=>{e.style.animationPlayState="paused"})}t.forEach(e=>{e.style.animationPlayState="paused"}),window.addEventListener("scroll",n),window.addEventListener("resize",n)});const v=document.getElementById("form-together"),m=document.getElementById("successModal"),d=document.getElementById("modalOverlay"),f=document.getElementById("modalMessage"),P=document.getElementById("closeModal");function L(){m.classList.remove("active"),d.classList.remove("active")}v.addEventListener("submit",async o=>{o.preventDefault();const t=document.getElementById("together-input--email"),r=document.getElementById("together-input--comments"),n={email:t.value.trim(),comment:r.value.trim()};if(!n.email||!n.comment){f.textContent="Please fill out all required fields.",m.classList.add("active"),d.classList.add("active");return}try{const s=(await j.post("https://portfolio-js.b.goit.study/api/requests",n,{headers:{"Content-Type":"application/json"}})).data;f.innerHTML=`
      <span class="thank-you-text">${s.title}</span><br>
      <span class="thank-you-text--two">${s.message}</span>
    `,m.classList.add("active"),d.classList.add("active"),v.reset()}catch(e){let s="An error occurred while sending data. Try again.";e.response?e.response.status===400?s="Bad request: Invalid request body.":e.response.status===404?s="Not found: The requested resource could not be found.":e.response.status===500&&(s="Server error: Please try again later."):e.request?s="A network error occurred. Please check your connection and try again.":s=`Error: ${e.message}`,f.textContent=s,m.classList.add("active"),d.classList.add("active")}});P.addEventListener("click",L);d.addEventListener("click",L);document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".modal-header"),t=document.querySelector(".modal-btn-close"),r=document.querySelector(".header-icon-burger"),n=document.querySelectorAll(".menu-list a"),e=document.querySelector(".btn-menu-tablet"),s=document.querySelector(".btn-menu"),i=document.querySelector(".menu-center-open"),l=document.querySelector(".menu-center-list");function p(){o.classList.add("is-open"),document.body.style.overflow="hidden"}function c(){o.classList.remove("is-open"),document.body.style.overflow=""}t&&t.addEventListener("click",c),r&&r.addEventListener("click",p),e&&e.addEventListener("click",c),s&&s.addEventListener("click",c),n.forEach(function(a){a.addEventListener("click",c)}),document.querySelectorAll(".menu-center-item a").forEach(function(a){a.addEventListener("click",function(){l.classList.remove("is-open")})}),i&&i.addEventListener("click",function(){l.classList.toggle("is-open")}),o.addEventListener("click",function(a){a.target===o&&c()})});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("menu-toggle"),t=document.querySelector(".modal-header");o&&t&&o.addEventListener("click",function(){t.classList.toggle("is-open")})});const x="/Project_DremTeam/assets/1-dst-BGm4sndC.jpg",M="/Project_DremTeam/assets/1-dst-2x-BDZviX4_.jpg",D="/Project_DremTeam/assets/1-mob-RIh0sXxX.jpg",B="/Project_DremTeam/assets/1-mob-2x-CctM9lJS.jpg",T="/Project_DremTeam/assets/2-dst-CQfpD12x.jpg",C="/Project_DremTeam/assets/2-dst-2x-C60Vfx3u.jpg",A="/Project_DremTeam/assets/2-mob-CAj7JJum.jpg",k="/Project_DremTeam/assets/2-mob-2x-BKxM-mGa.jpg",_="/Project_DremTeam/assets/3-dst-BzUG14Uj.jpg",O="/Project_DremTeam/assets/3-dst-2x-DNvHG7rp.jpg",$="/Project_DremTeam/assets/3-mob-rEqaybSG.jpg",N="/Project_DremTeam/assets/3-mob-2x-BpBASv-B.jpg",V=[{dst:x,dst2x:M,mob:D,mob2x:B},{dst:T,dst2x:C,mob:A,mob2x:k},{dst:_,dst2x:O,mob:$,mob2x:N}],H=document.querySelector(".projects-list");function R(o){return o.map(t=>`
      <div class="swiper-slide">
        <li class="projects-item">
        <div class="projects-item-info">
            <ul class="projects-item-info-hashtags">
            <li class="projects-item-info-hashtags-tag">#react</li>
            <li class="projects-item-info-hashtags-tag">#js</li>
            <li class="projects-item-info-hashtags-tag">#node js</li>
            <li class="projects-item-info-hashtags-tag">#git</li>
            </ul>
            <div class="projects-item-info-descr">
            <h3 class="projects-item-info-descr-title">
                Programming Across Borders: Ideas, Technologies, Innovations
            </h3>
            <a target="_blank" href="https://github.com/Psyche-1/bestteam2/" rel="noopener" class="projects-item-info-descr-link">See project</a>
            </div>
        </div>
        <div class="projects-item-project">
            <picture class="project-picture">
            <source
                srcset="${t.dst} 1x, ${t.dst2x} 2x"
                media="(min-width: 768px)"
            />
            <source
                srcset="${t.mob} 1x, ${t.mob2x} 2x"
                media="(max-width: 767px)"
            />
            <img src=${x} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}H.insertAdjacentHTML("beforeend",R(V));const U=new g(".projects-swiper",{slidesPerView:1,direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}}),b=document.querySelector(".button-prev"),y=document.querySelector(".button-next"),u=document.querySelectorAll(".projects-button-icon");U.on("progress",(o,t)=>{if(t===1){y.disabled=!0,u[1].classList.add("projects-button-icon-disabled");return}else if(t===0){b.disabled=!0,u[0].classList.add("projects-button-icon-disabled");return}u[0].classList.remove("projects-button-icon-disabled"),u[1].classList.remove("projects-button-icon-disabled"),y.disabled=!1,b.disabled=!1});async function G(){const r="https://portfolio-js.b.goit.study/api/reviews";try{const n=await j.get(r);if(n.status===200)return n.data.map(({_id:s,author:i,avatar_url:l,review:p})=>({author:i,avatar_url:l,review:p}));throw new Error("Server responded with status:",n.status)}catch(n){throw console.error("There was a problem with the request:",n),n}}async function K(){try{const o=await G(),t=document.querySelector(".reviews-list"),r=o.map(n=>`
    <li class="reviews-list-item swiper-slide">
      <img class="avatar_url" src=${n.avatar_url} width="48" alt="icon user">
      <h3 class="author"> ${n.author}</h3>
      <p class="review"> ${n.review}</p>
    </li>`).join("");t.insertAdjacentHTML("beforeend",r)}catch(o){window.alert("Error fetching reviews:",o)}}K();const w=new g(".reviws-swiper",{navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},centeredSlidesPerView:!0,slidesPerView:"auto",spaceBetween:30,on:{slideChangeTransitionEnd:function(){const o=document.querySelector(".reviews-next-btn"),t=document.querySelector(".reviews-prev-btn");w.isEnd?o.disabled=!0:o.disabled=!1,w.isBeginning?t.disabled=!0:t.disabled=!1}}});
//# sourceMappingURL=index.js.map
