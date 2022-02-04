import{j as e,D as p,a as i,F as h,X as N,M as _,R as m,r as M,b as P,S as A,A as D,N as S,P as C}from"./vendor.js";const F=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function d(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=d(s);fetch(s.href,r)}};F();const I="modulepreload",y={},k="/",u=function(a,d){return!d||d.length===0?a():Promise.all(d.map(l=>{if(l=`${k}${l}`,l in y)return;y[l]=!0;const s=l.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":I,s||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),s)return new Promise((t,o)=>{c.addEventListener("load",t),c.addEventListener("error",o)})})).then(()=>a())},f=[{name:"Home",href:"#",current:!0},{name:"Escuela",href:"#",current:!1},{name:"Tienda de magia",href:"https://www.TrucosyMagia.com",current:!1},{name:"Contacto",href:"#",current:!1}];function x(...n){return n.filter(Boolean).join(" ")}function L(){return e(p,{as:"nav",className:"bg-black opacity-90 sticky top-0 z-10",children:({open:n})=>i(h,{children:[e("div",{className:"max-w-3xl uppercase mx-auto px-2 sm:px-6 lg:px-8",children:i("div",{className:"relative flex items-center justify-between h-16",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:i(p.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[e("span",{className:"sr-only",children:"Menu Principal"}),n?e(N,{className:"block h-6 w-6","aria-hidden":"true"}):e(_,{className:"block h-6 w-6","aria-hidden":"true"})]})}),i("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[i("div",{className:"flex-shrink-0 flex items-center",children:[i("picture",{className:"block lg:hidden h-10 w-16",children:[e("source",{srcset:"./src/img/logofooter.avif",type:"image/avif"}),e("source",{srcset:"./src/img/logofooter.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/logofooter.jpg",alt:"circulomagico"})]}),i("picture",{className:"hidden lg:block h-auto w-16",children:[e("source",{srcset:"./src/img/logofooter.avif",type:"image/avif"}),e("source",{srcset:"./src/img/logofooter.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/logofooter.jpg",alt:"circulomagico"})]})]}),e("div",{className:"hidden sm:block sm:ml-6",children:e("div",{className:"flex space-x-4",children:f.map(a=>e("a",{href:a.href,className:x(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":a.current?"page":void 0,children:a.name},a.name))})})]}),e("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"})]})}),e(p.Panel,{className:"sm:hidden",children:e("div",{className:"px-2 pt-2 pb-3 space-y-1",children:f.map(a=>e(p.Button,{as:"a",href:a.href,className:x(a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":a.current?"page":void 0,children:a.name},a.name))})})]})})}const T=()=>i(h,{children:[e("h3",{className:"text-white text-center text-3xl  uppercase my-10",children:"escuela y tienda"}),e("div",{id:"app",children:i("div",{class:"carousel-slider",children:[e("div",{class:"swiper",children:i("div",{class:"swiper-wrapper",children:[e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia1.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia1.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia1.jpg",alt:"curso de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Curso de Magia"}),e("p",{children:"Nunca repitas un juego en la misma sesi\xF3n."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia2.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia2.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia2.jpg",alt:"clase de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Levitaci\xF3n de Alumno"}),e("p",{children:"Y as\xED mantengo, mi capacidad de asombro..."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia3.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia3.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia3.jpg",alt:"clases de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Magia de cerca"}),e("p",{children:"En Close Up las manos trabajan a cent\xEDmetros de distancia."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia4.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia4.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia4.jpg",alt:"aprender magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Sombras"}),e("p",{children:"Clase de Sombras Chinas y Bola Zombie"})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia5.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia5.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia5.jpg",alt:"trucos de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Magia y Ritmo"}),e("p",{children:"Aprendiendo a manejar el ritmo en la magia."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia6.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia6.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia6.jpg",alt:"profesor de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Entrega de Diplomas"}),e("p",{children:"Un gran profesor no debe solo ense\xF1ar, sino motivar."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia7.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia7.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia7.jpg",alt:"escuela de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Divirti\xE9ndonos en Clase"}),e("p",{children:"Tu \xE9xito como Mago depende de tu Personalidad."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia8.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia8.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia8.jpg",alt:"magos"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Conferencia de Roberto"}),e("p",{children:"Ensayo para conseguir que una ilusi\xF3n parezca realidad."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia9.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia9.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia9.jpg",alt:"mago"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Evento de Cierre de A\xF1o"}),e("p",{children:'"Estaba tan cerca de m\xED, como yo de ti y no vi como lo hizo"'})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia10.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia10.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./img/escuelamagia10.jpg",alt:"instituto de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Gala de Fin de A\xF1o."}),e("p",{children:"Gala de Alumnos del C\xEDrculo M\xE1gico."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia11.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia11.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia11.jpg",alt:"cursos de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Manipulaci\xF3n"}),e("p",{children:"Practica d\xEDa a d\xEDa. Practica delante del espejo, te ver\xE1s a ti mismo como te ve el p\xFAblico."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia12.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia12.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia12.jpg",alt:"tienda de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{className:"uppercase",children:"Minimagos"}),e("p",{children:"Alumno Lucio, realizando un efecto de riesgo en vivo."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia13.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia13.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia13.jpg",alt:"magia de cerca"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Jugando con Fuego"}),e("p",{children:"Alumnos soprendi\xE9ndose entre ellos antes de la clase."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia14.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia14.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia14.jpg",alt:"taller de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Atenci\xF3n Personalizada"}),e("p",{children:"Atendiendo los pedidos m\xE1gicos en la tienda"})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia15.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia15.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia15.jpg",alt:"experiencia de magia"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"M\xE1giko del Castillo"}),e("p",{children:"Magia y Humor en C\xEDrculo M\xE1gico..."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia16.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia16.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia16.jpg",alt:"leinad"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"LEINAD"}),e("p",{children:"Bienvenido al C\xEDrculo M\xE1gico, no vas a querer salir...  "})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia17.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia17.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia17.jpg",alt:"circulo magico"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Entrega de Diplomas"}),e("p",{children:"Un gran profesor no debe solo ense\xF1ar, sino motivar."})]})]})}),e("div",{class:"swiper-slide",children:i("div",{class:"carousel-slider-animate-opacity",children:[i("picture",{children:[e("source",{srcset:"./src/img/escuelamagia18.avif",type:"image/avif"}),e("source",{srcset:"./src/img/escuelamagia18.webp",type:"image/webp"}),e("img",{loading:"lazy",src:"./src/img/escuelamagia18.jpg",alt:"entrega diplomas"})]}),i("div",{class:"slide-content",children:[e("h2",{children:"Tienda de Magia"}),i("p",{children:["El mago utiliza el misterio que a su vez depende del secreto. ",e("br",{}),"Tienda de Magia e Ilusionismo en Felipe Vallese 1387"]})]})]})})]})}),e("div",{class:"swiper-button-prev"}),e("div",{class:"swiper-button-next"}),e("div",{class:"swiper-pagination"})]})})]}),O=()=>e("div",{className:" container headercartas ",children:i("h1",{className:"text-gray-100 text-3xl sm:text-5xl antialiased text-shadow-xl  mlg:text-2x1 uppercase font-semibold msm:mt-80 msm: mb-12 text-center msm:text-4xl ",children:["Circulo Magico",e("div",{className:"text-2xl sm:text-4xl antialiased uppercase italic msm:mt-0 mt-3 text-red-800 juanfix2  mlg:text-2xl msm:text-lg msm:font-medium msm:tracking-normal",children:"Escuela de Magia e Ilusionismo"})]})}),R=m.lazy(()=>u(()=>import("./Servicios.js"),["Servicios.js","vendor.js"])),q=m.lazy(()=>u(()=>import("./TresCajasGrid.js"),["TresCajasGrid.js","vendor.js"])),$=m.lazy(()=>u(()=>import("./Ilusionismo.js"),["Ilusionismo.js","vendor.js"])),G=m.lazy(()=>u(()=>import("./Google.js"),["Google.js","vendor.js"])),V=m.lazy(()=>u(()=>import("./Footer.js"),["Footer.js","vendor.js"]));function B(){return e(h,{children:i(M.exports.Suspense,{fallback:e("p",{children:e("i",{className:"fas fa-spinner flex justify-center container mt-10 text-5xl"})}),children:[e(L,{}),e(O,{}),e(R,{}),e($,{}),e(q,{}),e(G,{}),e(T,{}),e(V,{})]})})}P.render(e(m.StrictMode,{children:e(B,{})}),document.getElementById("root"));function H(n){const a=n.querySelector(".swiper");return new A(a,{modules:[D,S,C],grabCursor:!0,watchSlidesProgress:!0,loop:!0,loopedSlides:5,slidesPerView:"auto",centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},autoplay:{delay:3e3},on:{progress(l){const s=.2,r=l.slides.length;for(let c=0;c<l.slides.length;c+=1){const t=l.slides[c],o=l.slides[c].progress,g=Math.abs(o);let v=1;g>1&&(v=(g-1)*.3+1);const w=t.querySelectorAll(".carousel-slider-animate-opacity"),b=`${o*v*50}%`,E=1-g*s,j=r-Math.abs(Math.round(o));t.style.transform=`translateX(${b}) scale(${E})`,t.style.zIndex=j,g>3?t.style.opacity=0:t.style.opacity=1,w.forEach(z=>{z.style.opacity=1-g/3})}},setTransition(l,s){for(let r=0;r<l.slides.length;r+=1){const c=l.slides[r],t=c.querySelectorAll(".carousel-slider-animate-opacity");c.style.transitionDuration=`${s}ms`,t.forEach(o=>{o.style.transitionDuration=`${s}ms`})}}}})}const U=document.querySelector(".carousel-slider");H(U);
//# sourceMappingURL=index.js.map
