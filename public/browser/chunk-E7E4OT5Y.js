import{a as ee,b as te,c as ie,d as ne,e as O,f as oe,g as re,h as se,i as de,j as ae,k as pe,l as le,m as ce,n as me}from"./chunk-LSW7M3RZ.js";import{d as G,h as W,j as v,n as q,o as z,p as K,t as J,v as X,w as Y,x as Z}from"./chunk-IUAYNZPZ.js";import{Aa as $,B as A,C as S,Fa as L,Ja as T,K as a,L as C,Q as g,S as l,V as r,W as s,X as c,Y as F,Z as u,_ as k,a as x,b,ba as E,fa as d,ha as f,ka as Q,la as B,na as V,q as w,r as P,t as N,ta as H,ua as D,va as M,w as U,x as _,ya as j,za as R}from"./chunk-KAVTFUTI.js";var ue=(()=>{let n=class n{constructor(e){this.http$=e,this.url="",this.endpoint="http://localhost:5000/"}constructUrl(e){this.url=this.endpoint+e}get$(e){this.constructUrl(e),this.http$.get(this.url).subscribe(t=>{console.log("response: "+t)})}};n.\u0275fac=function(t){return new(t||n)(N($))},n.\u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var fe=(o,n,p)=>({"bg-slate-400":o,"bg-theme-color":n,"cursor-fancy":p});function xe(o,n){if(o&1&&(r(0,"option",40),d(1),s()),o&2){let p=n.$implicit;E("value",p.description),a(),f(" ",p.description," ")}}function be(o,n){if(o&1&&(r(0,"option",40),d(1),s()),o&2){let p=n.$implicit;E("value",p.description),a(),f(" ",p.description," ")}}function ke(o,n){if(o&1&&(r(0,"p",41),d(1),s()),o&2){let p=k();a(),f(" ",p.addOnsError," ")}}function ve(o,n){o&1&&(r(0,"span",42),d(1," No Pick-up selected "),s())}function Oe(o,n){if(o&1){let p=F();r(0,"span",43),d(1),r(2,"app-close",44),u("click",function(){A(p);let t=k();return S(t.removePickUpBtnClicked(t.selectedPickUp))}),s()()}if(o&2){let p=k();a(),f(" ",p.selectedPickUp," ")}}function Pe(o,n){o&1&&(r(0,"span",42),d(1," No Add-ons selected "),s())}function _e(o,n){if(o&1){let p=F();r(0,"span",45),d(1),r(2,"app-close",44),u("click",function(){let t=A(p).$implicit,i=k();return S(i.removeAddOnsBtnClicked(t))}),s()()}if(o&2){let p=n.$implicit;a(),f(" ",p.description," ")}}var he=(()=>{let n=class n{constructor(e,t,i){this.store=e,this.httpService=t,this.router=i,this.pickup=[{description:"No Pick-up",price:0},{description:"Pick-up from Moalboal - P0.00",price:0},{description:"Pick-up from Badian - P0.00",price:0},{description:"Pick-up from Cebu City (2-3 pax) - P5,000.00",price:5e3},{description:"Pick-up from Cebu City (4-5 pax) - P5,500.00",price:5e3},{description:"Pick-up from Cebu City (6-11 pax) - P6,000.00",price:6e3},{description:"Pick-up from Mandaue city (2-3 pax) - P5,000.00",price:5e3},{description:"Pick-up from Mandaue city (4-5 pax) - P5,500.00",price:5e3},{description:"Pick-up from Mandaue city (6-11 pax) - P6,000.00",price:6e3},{description:"Pick-up from Mactan (2-3 pax) - P5,000.00",price:5e3},{description:"Pick-up from Mactan (4-5 pax) - P5,500.00",price:5500},{description:"Pick-up from Mactan (6-11 pax) - P6,000.00",price:6e3},{description:"Pick-up from Oslob (2-3 pax) - P3,500.00",price:3500},{description:"Pick-up from Oslob (4-5 pax) - P4,000.00",price:4e3},{description:"Pick-up from Oslob (6-11 pax) - P4,500.00",price:4500},{description:"Pick-up from Liloan Port (2-3 pax) - P3,500.00",price:3500},{description:"Pick-up from Liloan Port (4-5 pax) - P4,000.00",price:4e3},{description:"Pick-up from Liloan Port (6-11 pax) - P4,500.00",price:4500}],this.addOns=[{description:"No Add-ons",price:0},{description:"Moalboal Sardines Run and Turtle Chase - P600.00",price:600},{description:"Oslob Whale Shark - P800.00",price:600},{description:"Snorkeling - P00.00",price:0}],this.addOnsPackageHistory=[],this.pickUpPackageHistory=[],this.productName="Kawasan Canyoneering",this.productPrice=999,this.selectedPickUp="",this.selectedAddOns=[],this.productQuantity=1,this.addOnsQuantity=1,this.addOnsError="",this.disablePickUpBtn=!0,this.disableAddOnBtn=!0,this.disableAddOnNumRange=!0,this.logo1="images/logo.png",this.logo2="images/logo2.png",this.pages=[{type:"image",display:this.logo2},{type:"text",display:"Home"},{type:"text",display:"Services"},{type:"text",display:"About Us"},{type:"text",display:"FAQs"},{type:"text",display:"Reviews"}],this.productForm=new ne({itemQuantity:new O(this.productQuantity,[]),pickup:new O(this.pickup[0].description,[]),addons:new O(this.addOns[0].description,[]),addonsQuantity:new O(this.addOnsQuantity,[])})}ngOnInit(){this.filterAddOn(this.pickup[0].description),this.productForm.valueChanges.subscribe(function(e){}),this.productForm.controls.pickup.valueChanges.subscribe(e=>{this.disablePickUpBtn=e===this.pickup[0].description}),this.productForm.controls.addons.valueChanges.subscribe(e=>{this.tryToEnableAddOnsBtn()}),this.productForm.controls.itemQuantity.valueChanges.subscribe(e=>{let t=this.productForm.controls.addonsQuantity;this.productQuantity=e,t.value>this.productQuantity&&t.setValue(e)}),this.httpService.get$("api/products"+this.router.snapshot.params.productName)}addToAddOnsHistory(e){let t=this.addOns.findIndex(i=>i.description===e.description);this.addOnsPackageHistory.push(b(x({},this.addOns[t]),{index:t}))}removeFromAddOnsHistory(e){this.addOnsPackageHistory=[...this.addOnsPackageHistory.filter(t=>t.description!==e)]}removeFromAddOnsOption(e){this.addOns=[...this.addOns.filter(t=>t.description!==e.description)]}addToAddOns(e){let t=this.addOnsPackageHistory.find(i=>i.description===e);this.addOns.push({description:t.description,price:t.price})}addToSelectedAddOns(e){this.selectedAddOns.push(e)}rmAddOnByIndex(e){this.selectedAddOns=[...this.selectedAddOns.filter(t=>t.index!==e.index)]}rmAddOnsByDesc(e){this.selectedAddOns=[...this.selectedAddOns.filter(t=>t.description!==e.description)]}setAddOnValueToDefault(){this.productForm.controls.addons.setValue(this.addOns[0].description)}filterAddOns(){let e={description:"Oslob Whale Shark - P800.00",price:800};this.addOns.find(t=>t.description===e.description)&&(this.addToAddOnsHistory(e),this.removeFromAddOnsOption(e),this.rmAddOnsByDesc(b(x({},e),{index:0})),this.productForm.controls.addons.value===e.description&&this.setAddOnValueToDefault())}removeFilterInAddOns(){let e="Oslob Whale Shark - P800.00";this.addOns.find(t=>t.description===e)||(this.addToAddOns(e),this.removeFromAddOnsHistory(e))}filterAddOn(e){let t=this.pickup.find(i=>i.description===this.selectedPickUp);!t||t?.price===0?this.filterAddOns():this.removeFilterInAddOns()}addToPickUpHistory(e){let t=this.pickup.findIndex(i=>i.description===e);this.pickUpPackageHistory.push(b(x({},this.pickup[t]),{index:t}))}removeFromPickUp(e){this.pickup=[...this.pickup.filter(t=>t.description!==e)]}addToSelectedPickUp(e){this.selectedPickUp=e}removeFromSelectedPickUp(){this.selectedPickUp=""}setPickUpValueToDefault(){this.productForm.controls.pickup.setValue(this.pickup[0].description)}addToPickUp(e){let t=this.pickUpPackageHistory.find(i=>i.description===e);this.pickup.push({description:t.description,price:t.price})}removeFromPickUpHistory(e){this.pickUpPackageHistory=[...this.pickUpPackageHistory.filter(t=>t.description!==e)]}tryToEnableAddOnsBtn(){let e=this.productForm.controls.addons.value!==this.addOns[0].description;this.disableAddOnBtn=!e,this.disableAddOnNumRange=!e}pickupBtnClicked(){let e=this.productForm.controls.pickup.value;this.addToSelectedPickUp(e),this.filterAddOn(e)}removePickUpBtnClicked(e){this.addToPickUp(e),this.removeFromPickUpHistory(e),this.removeFromSelectedPickUp()}AddOnsBtnClicked(e){if(e>this.productQuantity){this.addOnsError=v.CLIENT01;return}let t=this.productForm.controls.addons.value,i=this.addOns.find(y=>y.description===t);if(!i){this.addOnsError=v.CLIENT02;return}if(this.selectedAddOns.filter(y=>y.description===i.description).length+e>this.productQuantity){this.addOnsError=v.CLIENT01;return}else this.addOnsError="";for(let y=0;y<e;y++)this.addToSelectedAddOns(b(x({},i),{index:y}))}removeAddOnsBtnClicked(e){this.rmAddOnByIndex(e)}decreaseItemQuantity(e){let t=this.productForm.controls.itemQuantity;t.value>1&&t.setValue(t.value-e)}increaseItemQuantity(e){let t=this.productForm.controls.itemQuantity;t.setValue(t.value+e)}decreaseAddOnsQuantity(e){let t=this.productForm.controls.addonsQuantity;t.value>1&&t.setValue(t.value-e)}increaseAddOnsQuantity(e){let t=this.productForm.controls.addonsQuantity,i=this.productForm.controls.itemQuantity;t.value<i.value&&t.setValue(t.value+e)}inDev(){let e={msg:v.DEV01,type:"info"};this.store.dispatch(W({current:e}))}};n.\u0275fac=function(t){return new(t||n)(C(G),C(ue),C(L))},n.\u0275cmp=U({type:n,selectors:[["app-productpage"]],decls:80,vars:32,consts:[[1,"relative","top-0","left-0","right-0","h-max","z-10","shadow-lg"],[1,"md:container","md:mx-auto","lg:max-w-screen-xl"],[1,"",3,"shouldBeWhite","logo","pages"],[1,"",3,"logo"],[1,"text-theme-color","text-2xl","font-bold","cursor-fancy",3,"click"],[1,"container","mx-auto","mt-24","max-w-6xl"],[1,"flex","flex-wrap","md:flex-nowrap","md:mx-12","justify-center","gap-4","mb-6"],[1,"w-full","grid","grid-rows-17","grid-cols-8","gap-2","mx-6","h-[520px]","sm:mx-16","md:h-[640px]","lg:h-[780px]","md:mx-0"],[1,"row-span-12","col-span-6","bg-slate-300","rounded-md","relative"],[1,"absolute","top-1/2","left-1/2","-translate-y-1/2","-translate-x-1/2","text-9xl","text-white","opacity-25"],[1,"row-span-4","col-span-2","bg-slate-400","rounded-md","relative"],[1,"absolute","top-1/2","left-1/2","-translate-y-1/2","-translate-x-1/2","text-3xl","text-white","opacity-25"],[1,"row-span-1","col-span-8","flex","items-end","relative"],[1,"text-lg","font-semibold","font-poetsen","text-slate-500","absolute"],[1,"w-full","py-12","px-2","mt-8","md:border","md:border-theme-color","md:mx-0","md:shadow-lg","md:rounded-md","md:mt-0"],[1,"w-5/6","mx-auto"],[1,"text-center","font-bold","text-3xl","font-poetsen"],[1,"font-semibold","font-poetsen","text-slate-400","mt-5"],["name","productForm",3,"formGroup"],[1,"mt-7"],["for","itemQuantity",1,"font-semibold","text-slate-400","font-poetsen","mr-5","mb-4"],["type","number","name","itemQuantity","id","itemQuantity","min","0","inputmode","numeric","formControlName","itemQuantity","hidden","",1,"font-light","text-slate-400","py-2","border","rounded-sm"],[1,"inline-block",3,"increase","decrease","value"],["for","pickup",1,"font-semibold","text-slate-400","font-poetsen","block","mb-4"],["name","pickup","id","pickup","formControlName","pickup",1,"font-light","text-slate-400","py-2","border","rounded-sm","mr-3","mb-4","w-60"],["class","font-light text-slate-400",3,"value",4,"ngFor","ngForOf"],["type","button",1,"rounded-3xl","text-white","text-xs","font-bold","py-1","px-8",3,"click","disabled","ngClass"],["for","addons",1,"font-semibold","text-slate-400","font-poetsen","block","mb-4"],["name","addons","id","addons","formControlName","addons",1,"font-light","text-slate-400","py-2","border","rounded-sm","block","mb-4","w-60"],["class","text-[11px] text-red-400 font-bold font-sans mt-2 mb-4",4,"ngIf"],["for","addons-quantity",1,"font-semibold","text-slate-400","font-poetsen","mr-5","mb-4"],["type","number","name","addons-quantity","id","addons-quantity","min","0","inputmode","numeric","formControlName","addonsQuantity","hidden","",1,"font-light","text-slate-400","py-2","border","rounded-sm","mr-5"],[1,"inline-block","mr-5","mb-4",3,"increase","decrease","value","disabled"],["type","button",1,"rounded-3xl","font-bold","text-white","text-xs","py-1","px-8",3,"click","disabled","ngClass"],[1,"font-semibold","text-slate-400","font-poetsen","mb-4"],["class","font-light",4,"ngIf"],["class","bg-slate-300 rounded-3xl py-1 pl-1 pr-6 text-[9px] font-extralight font-sans inline-block relative m-2",4,"ngIf"],["class","bg-slate-300 rounded-3xl py-1 pl-1 pr-6 text-[9px] font-extralight font-sans inline-block relative mr-1 mb-1",4,"ngFor","ngForOf"],[1,"mt-14"],["type","button",1,"font-bold","text-white","bg-","w-full","p-2","bg-theme-color","rounded-md"],[1,"font-light","text-slate-400",3,"value"],[1,"text-[11px]","text-red-400","font-bold","font-sans","mt-2","mb-4"],[1,"font-light"],[1,"bg-slate-300","rounded-3xl","py-1","pl-1","pr-6","text-[9px]","font-extralight","font-sans","inline-block","relative","m-2"],[1,"absolute","right-2","top-1/2","-translate-y-1/2","font-extrabold","cursor-fancy",3,"click"],[1,"bg-slate-300","rounded-3xl","py-1","pl-1","pr-6","text-[9px]","font-extralight","font-sans","inline-block","relative","mr-1","mb-1"]],template:function(t,i){t&1&&(r(0,"header",0)(1,"nav",1),c(2,"app-desktop-nav",2),r(3,"app-mobile-nav",3)(4,"app-desktop-cart",4),u("click",function(){return i.inDev()}),s()()()(),r(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8),d(9," 1 "),c(10,"app-play-circle",9),s(),r(11,"div",10),d(12," 2 "),c(13,"app-play-circle",11),s(),r(14,"div",10),d(15," 3 "),c(16,"app-play-circle",11),s(),r(17,"div",10),d(18," 4 "),c(19,"app-play-circle",11),s(),r(20,"div",12)(21,"span",13),d(22," More Videos: "),s()(),r(23,"div",10),d(24," 5 "),c(25,"app-play-circle",11),s(),r(26,"div",10),d(27," 6 "),c(28,"app-play-circle",11),s(),r(29,"div",10),d(30," 7 "),c(31,"app-play-circle",11),s(),r(32,"div",10),d(33," 8 "),c(34,"app-play-circle",11),s()(),r(35,"div",14)(36,"div",15)(37,"h1",16),d(38),s(),r(39,"p",17),d(40),B(41,"currency"),s(),r(42,"form",18)(43,"div",19)(44,"label",20),d(45,"Quantity"),s(),c(46,"input",21),r(47,"app-number-range",22),u("increase",function(m){return i.increaseItemQuantity(m)})("decrease",function(m){return i.decreaseItemQuantity(m)}),s()(),r(48,"div",19)(49,"label",23),d(50," Pickup: "),s(),r(51,"select",24),g(52,xe,2,2,"option",25),s(),r(53,"button",26),u("click",function(){return i.pickupBtnClicked()}),d(54," ADD "),s()(),r(55,"div",19)(56,"label",27),d(57," Addons: "),s(),r(58,"select",28),g(59,be,2,2,"option",25),s(),g(60,ke,2,1,"p",29),r(61,"label",30),d(62," Quantity "),s(),c(63,"input",31),r(64,"app-number-range",32),u("increase",function(m){return i.increaseAddOnsQuantity(m)})("decrease",function(m){return i.decreaseAddOnsQuantity(m)}),s(),r(65,"button",33),u("click",function(){return i.AddOnsBtnClicked(i.productForm.controls.addonsQuantity.value)}),d(66," ADD "),s()(),r(67,"div",19)(68,"p",34),d(69," Selected Pickup: "),s(),g(70,ve,2,0,"span",35)(71,Oe,3,1,"span",36),s(),r(72,"div",19)(73,"p",34),d(74," Selected AddOns: "),s(),g(75,Pe,2,0,"span",35)(76,_e,3,1,"span",37),s(),r(77,"div",38)(78,"button",39),d(79," ADD TO CART "),s()()()()()()()),t&2&&(a(2),l("shouldBeWhite",!1)("logo",i.logo2)("pages",i.pages),a(),l("logo",i.logo1),a(35),f(" ",i.productName," "),a(2),f(" ",V(41,21,i.productPrice,"PHP")," / Person "),a(2),l("formGroup",i.productForm),a(5),l("value",i.productForm.controls.itemQuantity.value),a(5),l("ngForOf",i.pickup),a(),l("disabled",i.disablePickUpBtn)("ngClass",Q(24,fe,i.disablePickUpBtn,!i.disablePickUpBtn,!i.disablePickUpBtn)),a(6),l("ngForOf",i.addOns),a(),l("ngIf",i.addOnsError),a(4),l("value",i.productForm.controls.addonsQuantity.value)("disabled",i.disableAddOnNumRange),a(),l("disabled",i.disableAddOnBtn)("ngClass",Q(28,fe,i.disableAddOnBtn,!i.disableAddOnBtn,!i.disableAddOnBtn)),a(5),l("ngIf",!i.selectedPickUp),a(),l("ngIf",i.selectedPickUp),a(4),l("ngIf",!i.selectedAddOns.length),a(),l("ngForOf",i.selectedAddOns))},dependencies:[H,D,M,oe,pe,le,ee,re,ae,te,ie,ce,se,de,q,K,z,J,X,Y,j]});let o=n;return o})();var Ce=[{path:"",component:he}],ye=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=_({type:n}),n.\u0275inj=P({imports:[T.forChild(Ce),T]});let o=n;return o})();var Xe=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=_({type:n}),n.\u0275inj=P({imports:[R,me,Z,ye]});let o=n;return o})();export{Xe as ProductpageModule};