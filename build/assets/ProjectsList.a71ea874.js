import{o as s,c as t,F as n,D as c,k as i,d as l,a as o,t as _,i as d}from"./preload-helper.17a8ef55.js";const m={class:"grid grid-cols-6 gap-3 my-12"},p=["src","alt"],u={class:"project-over"},f={__name:"ProjectsList",props:{projects:[]},setup(a){return(g,v)=>{const r=d("router-link");return s(),t("div",m,[(s(!0),t(n,null,c(a.projects,(e,h)=>(s(),i(r,{to:{name:"ShowProject",params:{id:e.id,data:JSON.stringify(e)}},class:"bg-g1 project overflow-hidden cursor-pointer relative col-span-2"},{default:l(()=>[o("img",{src:e.images[0].link,alt:e.name,class:"w-full project-image"},null,8,p),o("div",u,_(e.name),1)]),_:2},1032,["to"]))),256))])}}};export{f as _};