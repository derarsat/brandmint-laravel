import{S,a as y,N as C}from"./navigation.min.a9dcf8d6.js";import{_ as f,o as a,c as l,a as s,t as u,f as d,w as v,F as x,B,d as L,m as q,r as m,q as w,A as N,k as p,e as j,p as V,l as $}from"./preload-helper.f2a2fdf2.js";const E={components:{Swiper:S,SwiperSlide:y},props:["clients"],setup(){return{onSwiper:r=>{const e=document.querySelectorAll(".swiper-button-next-unique");for(const o of e)o.classList.remove("swiper-button-disabled")},modules:[C]}}},I={class:"mb-24"},O={class:"flex items-center justify-between"},D={class:"font-semibold text-3xl text-primary mt-6 mb-8"},F=q('<div class="flex items-center gap-4"><div class="swiper-button-prev-unique"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg></div><div class="swiper-button-next-unique"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></div>',1),M=["href"],A=["id"],P=["src","alt"];function T(n,r,e,o,_,t){const i=m("swiper-slide"),g=m("swiper");return a(),l("div",I,[s("div",O,[s("h1",D,u(e.clients[0].category),1),F]),d(g,{modules:o.modules,"slides-per-view":4.7,"space-between":12,onSwiper:o.onSwiper,navigation:{nextEl:".swiper-button-next-unique",prevEl:".swiper-button-prev-unique"}},{default:v(()=>[(a(!0),l(x,null,B(e.clients,(c,k)=>(a(),L(i,null,{default:v(()=>[s("a",{href:c.link},[s("button",{id:`c-${k}`},[s("img",{src:c.image,alt:c.name},null,8,P)],8,A)],8,M)]),_:2},1024))),256))]),_:1},8,["modules","slides-per-view","onSwiper","navigation"])])}const h=f(E,[["render",T]]);const b=n=>(V("data-v-3b163bea"),n=n(),$(),n),W={key:0,class:"container"},z=b(()=>s("h1",{class:"text-5xl font-medium mt-20 mb-2"}," Our Clients",-1)),G=b(()=>s("p",{class:"mb-16 text-xl"},[p(" We're proud of helping the best companies deliver positive emotions "),s("br"),p(" to their customers.")],-1)),H={__name:"OurCLients",setup(n){const r=w(),e=w();function o(){fetch("/api/front/clients").then(t=>t.json()).then(t=>_(t))}function _(t){e.value=t.filter(i=>i.category==="Environmental Design"),r.value=t.filter(i=>i.category==="F&B")}return N(()=>{o()}),(t,i)=>(a(),l(x,null,[p(u(e.value)+" "+u(r.value)+" ",1),e.value?(a(),l("div",W,[z,G,d(h,{key:"enviro",clients:e.value},null,8,["clients"]),d(h,{key:"fb",clients:r.value},null,8,["clients"])])):j("",!0)],64))}},Q=f(H,[["__scopeId","data-v-3b163bea"]]);export{Q as default};
