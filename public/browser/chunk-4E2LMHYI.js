import{q as F,r as D,z as K}from"./chunk-FIOFHD3E.js";import{B as u,C as f,G as B,Ha as U,I as _,J as M,Ja as P,K as s,L as S,Q as I,S as T,U as j,V as l,W as o,X as w,Y as b,Z as m,_ as y,ba as h,ca as V,da as E,ea as R,fa as p,ha as d,la as g,ma as W,oa as C,r as x,ua as z,w as O,wa as L,x as v,ya as Q,za as H}from"./chunk-KAVTFUTI.js";var A=["slideContainer"],J=["mSlideContainer"];function Y(a,e){if(a&1){let r=b();l(0,"div",18)(1,"div",19),m("click",function(){let i=u(r).$implicit,n=y();return f(n.viewProduct(i))}),l(2,"div",20)(3,"div",21),w(4,"img",22),o(),l(5,"p",23),p(6),o(),l(7,"p",24),p(8),g(9,"currency"),o()()()()}if(a&2){let r=e.$implicit;s(4),h("src",r.thumbnail,_),h("alt",r.alt),s(2),d(" ",r.desc," "),s(2),d(" price starts at ",C(9,4,r.price,"PHP","symbol","0.0-0")," / person ")}}function Z(a,e){if(a&1){let r=b();l(0,"div",25)(1,"div",26)(2,"div",27)(3,"div",28),m("click",function(){let i=u(r).$implicit,n=y();return f(n.viewProduct(i.image1))}),l(4,"div",29),w(5,"img",22),o(),l(6,"p",23),p(7),o(),l(8,"p",24),p(9),g(10,"currency"),o()()(),l(11,"div",27)(12,"div",28),m("click",function(){let i=u(r).$implicit,n=y();return f(n.viewProduct(i.image2))}),l(13,"div",29),w(14,"img",22),o(),l(15,"p",23),p(16),o(),l(17,"p",24),p(18),g(19,"currency"),o()()()()()}if(a&2){let r=e.$implicit;s(5),h("src",r.image1.thumbnail,_),h("alt",r.image1.alt),s(2),d(" ",r.image1.desc," "),s(2),d(" price starts at ",C(10,8,r.image1.price,"PHP","symbol","0.0-0")," / person "),s(5),h("src",r.image2.thumbnail,_),h("alt",r.image2.alt),s(2),d(" ",r.image2.desc," "),s(2),d(" price starts at ",C(19,13,r.image1.price,"PHP","symbol","0.0-0")," / person ")}}var N=(()=>{let e=class e{constructor(t,i){this.elementRef=t,this.router=i,this.pageTitle="our services",this.caption="We have a customizable list of services where  you can pick your desired add-ons from the activities we offer. Checkout links below:",this.carousel={mobile:[{thumbnail:"images/thumbnails/VideoCapture_20240531-072740_580.jpg",alt:"Fall Dive at Kawasan Falls",desc:"Kawasan Canyoneering",price:1900,router:"/product/kawasan-canyoneering"},{thumbnail:"images/thumbnails/G0295114_580.jpg",alt:"Oslob Whale Shark",desc:"Oslob Whale Shark Watching",price:800},{thumbnail:"images/thumbnails/GOPR5984_580.jpg",alt:"Moalboal Turtle Chase",desc:"Moalboal Sardines Run and Turtle Chase",price:600},{thumbnail:"images/thumbnails/DSC04167_580.jpg",alt:"Bohol Countryside",desc:"Bohol Countryside Tour",price:1500},{thumbnail:"images/thumbnails/VideoCapture_20240531-072740_580.jpg",alt:"Fall Dive at Kawasan Falls",desc:"Kawasan Canyoneering",price:1900,router:"/product/kawasan-canyoneering"},{thumbnail:"images/thumbnails/G0295114_580.jpg",alt:"Oslob Whale Shark",desc:"Oslob Whale Shark Watching",price:800}],desktop:[{image1:{thumbnail:"images/thumbnails/DSC04167_580.jpg",alt:"Bohol Countryside",desc:"Bohol Countryside Tour",price:1500},image2:{thumbnail:"images/thumbnails/VideoCapture_20240531-072740_580.jpg",alt:"Fall Dive at Kawasan Falls",desc:"Kawasan Canyoneering",price:1900,router:"/product/kawasan-canyoneering"}},{image1:{thumbnail:"images/thumbnails/G0295114_580.jpg",alt:"Oslob Whale Shark",desc:"Oslob Whale Shark Watching",price:800},image2:{thumbnail:"images/thumbnails/GOPR5984_580.jpg",alt:"Moalboal Turtle Chase",desc:"Moalboal Sardines Run and Turtle Chase",price:600}},{image1:{thumbnail:"images/thumbnails/DSC04167_580.jpg",alt:"Bohol Countryside",desc:"Bohol Countryside Tour",price:1500},image2:{thumbnail:"images/thumbnails/VideoCapture_20240531-072740_580.jpg",alt:"Fall Dive at Kawasan Falls",desc:"Kawasan Canyoneering",price:1900,router:"/product/kawasan-canyoneering"}},{image1:{thumbnail:"images/thumbnails/G0295114_580.jpg",alt:"Oslob Whale Shark",desc:"Oslob Whale Shark Watching",price:800},image2:{thumbnail:"images/thumbnails/GOPR5984_580.jpg",alt:"Moalboal Turtle Chase",desc:"Moalboal Sardines Run and Turtle Chase",price:600}}]},this.xPos=0,this.index=-1,this.style="0px",this.slideContainer=this.elementRef,this.mSlideContainer=this.elementRef}ngAfterViewInit(){window.screenX>=768?this.slideToIndex(this.index,"desktop"):this.slideToIndex(this.index,"mobile")}ngOnInit(){}setXPosition(t){t==="desktop"?this.xPos=this.slideContainer.nativeElement.getBoundingClientRect().width:t==="mobile"&&(this.xPos=this.mSlideContainer.nativeElement.getBoundingClientRect().width)}slideToIndex(t,i){let n=this.carousel[i].length;this.setXPosition(i),this.style="left: "+t*this.xPos+"px",t===0?setTimeout(()=>{this.index=-(n-2),this.style="left: "+this.index*this.xPos+"px; transition: none;"},300):t===-(n-1)&&setTimeout(()=>{this.index=-1,this.style="left: "+this.index*this.xPos+"px; transition: none;"},300)}goLeft(t){this.index+=1,this.slideToIndex(this.index,t)}goRight(t){this.index-=1,this.slideToIndex(this.index,t)}goToInDev(){this.router.navigateByUrl("/build-page")}viewProduct(t){t.router&&this.router.navigateByUrl(t.router)}onResize(){window.screenX>=768?this.slideToIndex(this.index,"desktop"):this.slideToIndex(this.index,"mobile")}};e.\u0275fac=function(i){return new(i||e)(S(B),S(U))},e.\u0275cmp=O({type:e,selectors:[["app-servicespage"]],viewQuery:function(i,n){if(i&1&&(V(A,5),V(J,5)),i&2){let c;E(c=R())&&(n.slideContainer=c.first),E(c=R())&&(n.mSlideContainer=c.first)}},hostBindings:function(i,n){i&1&&m("resize",function(){return n.onResize()},!1,M)},decls:21,vars:10,consts:[["mSlideContainer",""],["slideContainer",""],[1,"md:container","md:mx-auto","mt-24"],[1,"text-4xl","md:text-5xl","lg:text-6xl","font-extrabold","text-center","font-poetsen","mb-6","text-slate-800"],[1,"text-center","font-semibold","text-slate-500","text-sm","md:text-base","lg:text-lg","mb-16"],[1,"mx-auto","w-64","sm:w-96","md:hidden","mb-16","relative"],[1,"slide-wrapper","w-full","mx-auto","overflow-hidden"],[1,"slide-container","w-full","max-w-4xl","mx-auto","flex","items-center","flex-nowrap","relative"],["class","w-full flex justify-center flex-none",4,"ngFor","ngForOf"],[1,"absolute","top-1/2","-left-14","-translate-y-1/2","text-6xl","text-blue-500/45","cursor-fancy","pointer-events-auto",3,"click"],[1,"absolute","top-1/2","-right-14","-translate-y-1/2","text-6xl","text-blue-500/45","cursor-fancy","pointer-events-auto",3,"click"],[1,"md:container","md:mx-auto","lg:container","lg:mx-auto","hidden","md:block","mb-16","relative"],[1,"slide-wrapper","w-full","max-w-4xl","mx-auto","overflow-hidden"],[1,"slide-container","w-full","max-w-4xl","mx-auto","flex","flex-nowrap","relative"],["class","w-full flex-none",4,"ngFor","ngForOf"],[1,"absolute","top-32","w-full","flex","justify-between","pointer-events-none"],[1,"text-6xl","text-blue-500/45","cursor-fancy","xl:ml-28","pointer-events-auto",3,"click"],[1,"text-6xl","text-blue-500/45","cursor-fancy","xl:mr-28","pointer-events-auto",3,"click"],[1,"w-full","flex","justify-center","flex-none"],[1,"inline-block","rounded-md","border","border-purple-400","cursor-fancy",3,"click"],[1,"w-full","h-max","flex","flex-col","justify-between","pb-4"],[1,"w-full","h-auto","overflow-hidden","relative","rounded-t-md"],[1,"h-full","w-full","object-cover","object-center",3,"src","alt"],[1,"text-center","font-bold","text-sm","md:text-base","lg:text-lg","mt-5","text-slate-800","max-w-60","mx-auto","flex-shrink"],[1,"text-center","text-xs","md:text-sm","lg:text-base","text-slate-500","font-bold","mt-3"],[1,"w-full","flex-none"],[1,"w-full","flex","justify-between"],[1,"inline-block"],[1,"h-80","flex","flex-col","justify-between","rounded-md","border","border-purple-400","pb-4","cursor-fancy",3,"click"],[1,"w-80","lg:w-96","h-48","overflow-hidden","rounded-t-md"]],template:function(i,n){if(i&1){let c=b();l(0,"div",2)(1,"h1",3),p(2),g(3,"uppercase"),o(),l(4,"p",4),p(5),o(),l(6,"div",5)(7,"div",6)(8,"div",7,0),I(10,Y,10,9,"div",8),o()(),l(11,"app-caret-left-fill",9),m("click",function(){return u(c),f(n.goLeft("mobile"))}),o(),l(12,"app-caret-right-fill",10),m("click",function(){return u(c),f(n.goRight("mobile"))}),o()(),l(13,"div",11)(14,"div",12)(15,"div",13,1),I(17,Z,20,18,"div",14),o()(),l(18,"div",15)(19,"app-caret-left-fill",16),m("click",function(){return u(c),f(n.goLeft("desktop"))}),o(),l(20,"app-caret-right-fill",17),m("click",function(){return u(c),f(n.goRight("desktop"))}),o()()()()}i&2&&(s(2),d(" ",W(3,8,n.pageTitle)," "),s(3),d(" ",n.caption," "),s(3),j(n.style),s(2),T("ngForOf",n.carousel.mobile),s(5),j(n.style),s(2),T("ngForOf",n.carousel.desktop))},dependencies:[z,F,D,L,Q],styles:[".slide-container[_ngcontent-%COMP%]{transition:left .3s ease-in-out}"]});let a=e;return a})();var ee=[{path:"",component:N}],$=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=x({imports:[P.forChild(ee),P]});let a=e;return a})();var he=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=x({imports:[H,$,K]});let a=e;return a})();export{N as a,he as b};