import{a as T,b as N}from"./chunk-GVOTTDHD.js";import{d as M,h as S,j as P,k as j,n as E,o as I,p as D,x as _}from"./chunk-IUAYNZPZ.js";import{I as v,Ia as k,Ja as x,K as n,L as y,S as p,V as a,W as s,X as c,Z as b,fa as d,ha as f,la as u,ma as g,r as l,w as h,wa as w,x as m,za as C}from"./chunk-KAVTFUTI.js";var A=(()=>{let e=class e{constructor(t){this.store=t,this.logo1="images/logo.png",this.logo2="images/logo2.png",this.pages=[{type:"image",display:this.logo2},{type:"text",display:"Home",router:"/"},{type:"text",display:"Services",router:"/#services"},{type:"text",display:"About Us"},{type:"text",display:"FAQs"},{type:"text",display:"Reviews"}],this.background="videos/20240530_120449.mp4",this.bannerText="Kawasan Canyoneering",this.btnText="Book an appointment",this.bannerPrice="Php 1900 Only!",this.openMobileMenu=!1}ngAfterViewInit(){let t=document.querySelector(".an-1");t.innerHTML=t?.textContent?.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!0}).add({targets:".an-1 .letter",scale:[4,1],opacity:[0,1],translateZ:0,easing:"easeOutExpo",duration:2e3,delay:(o,i)=>70*i}).add({targets:".an-1",opacity:0,duration:2e3,easing:"easeOutExpo",delay:1e3})}ngOnInit(){this.store.select("mobileMenu").subscribe(t=>{this.openMobileMenu=t.isMenuOpen})}removeLogo(t){return t.filter(o=>o.type!=="image")}inDev(){let t={msg:P.DEV01,type:"info"};this.store.dispatch(S({current:t}))}activatePage(t){let i={current:["Home","Services"].includes(t)?t:""};this.store.dispatch(j(i))}};e.\u0275fac=function(o){return new(o||e)(y(M))},e.\u0275cmp=h({type:e,selectors:[["app-homepage"]],decls:22,vars:13,consts:[[1,"bg-slate-900/45","top-0","fixed","left-0","right-0","h-max","z-10"],[1,"md:container","md:mx-auto","lg:max-w-screen-xl"],[1,"",3,"logo","pages"],[1,"",3,"logo"],[1,"text-theme-color","text-2xl","font-bold","cursor-fancy",3,"click"],[1,"relative"],["autoplay","","preload","auto",1,"absolute","-z-10","w-screen","h-screen","object-cover","object-center",3,"muted","loop"],["type","video/mp4",3,"src"],[1,"shadow-md","bg-slate-900/45"],[1,"md:container","md:mx-auto","flex","flex-col","h-screen"],[1,"flex","flex-grow","items-end"],[1,"an-1","text-slate-200","text-6xl","md:text-8xl","font-bold","text-center","flex-grow","cursor-default","drop-shadow-lg","[text-shadow:_0_1px_0_var(--tw-shadow-color)]","font-rushlink"],[1,"h-48","flex","items-center"],[1,"text-slate-200","text-2xl","md:text-6xl","font-bold","font-poetsen","text-center","flex-grow","cursor-default","drop-shadow-lg","[text-shadow:_0_1px_0_var(--tw-shadow-color)]"],[1,"flex","flex-grow","justify-center"],["routerLink","/product/kawasan-canyoneering",1,"rounded","px-8","py-4","h-max","w-max","shadow-md","bg-theme-color","text-white","text-xs","md:text-base","font-bold","cursor-fancy"],["id","services"]],template:function(o,i){o&1&&(a(0,"header",0)(1,"nav",1),c(2,"app-desktop-nav",2),a(3,"app-mobile-nav",3)(4,"app-desktop-cart",4),b("click",function(){return i.inDev()}),s()()()(),a(5,"div",5)(6,"video",6),c(7,"source",7),s(),a(8,"div",8)(9,"div",9)(10,"div",10)(11,"p",11),d(12),u(13,"uppercase"),s()(),a(14,"div",12)(15,"p",13),d(16),s()(),a(17,"div",14)(18,"a",15),d(19),u(20,"uppercase"),s()()()()(),c(21,"app-servicespage",16)),o&2&&(n(2),p("logo",i.logo2)("pages",i.pages),n(),p("logo",i.logo1),n(3),p("muted",!0)("loop",!0),n(),p("src",i.background,v),n(5),f(" ",g(13,9,i.bannerText)," "),n(4),f(" ",i.bannerPrice," "),n(3),f(" ",g(20,11,i.btnText)," "))},dependencies:[k,E,D,I,T,w],styles:["p.an-1[_ngcontent-%COMP%]{font-family:Rushink,sans-serif}"]});let r=e;return r})();var L=[{path:"",component:A}],F=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m({type:e}),e.\u0275inj=l({imports:[x.forChild(L),x]});let r=e;return r})();var ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m({type:e}),e.\u0275inj=l({imports:[C,F,_,N]});let r=e;return r})();export{ne as HomepageModule};