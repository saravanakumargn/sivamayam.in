(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RfJO:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class i{}var o=t("pMnS"),e=t("oBZk"),s=t("ZZ/e"),a=t("SVse"),r=t("mrSG"),b=t("MmGX"),c=t("SjPU");class h{constructor(l,n,t,u,i){this.route=l,this.router=n,this.location=t,this.modalController=u,this.homePageServiceService=i,this.postsData=[],this.postMaxLimit=25,this.currentPage=1,this.totalPostCount=0,this.isReachedLastPost=!1,this.isLoading=!0,this.route.queryParams.subscribe(l=>r.b(this,void 0,void 0,(function*(){l&&l.slug&&(this.selectedCategorySlug=l.slug,this.getPostsByCategory(this.currentPage,this.postMaxLimit,this.selectedCategorySlug))})))}ngOnInit(){}goback(){this.location.back()}getPostsByCategory(l,n,t,u){this.homePageServiceService.getPostsByCategory({currentPage:l,postMaxLimit:n,categorySlug:t}).subscribe(l=>{this.isLoading=!1,this.postsData=[...this.postsData,...l.posts],this.totalPostCount=l.found,this.isReachedLastPost=this.postMaxLimit*this.currentPage>=this.totalPostCount||this.postMaxLimit*this.currentPage>900,u&&u.target.complete()})}loadMorePosts(l){this.currentPage=this.currentPage+1,this.getPostsByCategory(this.currentPage,this.postMaxLimit,this.selectedCategorySlug,l),this.isReachedLastPost&&(l.target.disabled=!0)}showPost(l){return r.b(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:c.a,componentProps:l});return yield n.present()}))}}var p=t("iInd"),g=u.ob({encapsulation:0,styles:[[""]],data:{}});function d(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,2,"div",[["class","ion-margin ion-text-center"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,1,"ion-spinner",[["name","lines"]],null,null,null,e.K,e.p)),u.pb(2,49152,null,0,s.pb,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"lines")}),null)}function m(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,3,"ion-item",[["detail","true"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showPost(l.context.$implicit)&&u),u}),e.E,e.j)),u.pb(1,49152,null,0,s.E,[u.h,u.k,u.x],{detail:[0,"detail"]},null),(l()(),u.qb(2,0,null,0,1,"ion-label",[],[[8,"innerHTML",1]],null,null,e.F,e.k)),u.pb(3,49152,null,0,s.K,[u.h,u.k,u.x],null,null)],(function(l,n){l(n,1,0,"true")}),(function(l,n){l(n,2,0,n.context.$implicit.title)}))}function f(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,3,"ion-list",[["class","ion-no-padding"],["lines","full"]],null,null,null,e.G,e.l)),u.pb(1,49152,null,0,s.L,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.fb(16777216,null,0,1,null,m)),u.pb(3,278528,null,0,a.i,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"full"),l(n,3,0,t.postsData)}),null)}function x(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,12,"ion-header",[],null,null,null,e.A,e.f)),u.pb(1,49152,null,0,s.y,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,10,"ion-toolbar",[],null,null,null,e.P,e.u)),u.pb(3,49152,null,0,s.zb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,e.x,e.c)),u.pb(5,49152,null,0,s.i,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goback()&&u),u}),e.w,e.b)),u.pb(7,49152,null,0,s.h,[u.h,u.k,u.x],null,null),(l()(),u.qb(8,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,e.B,e.g)),u.pb(9,49152,null,0,s.z,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(10,0,null,0,2,"ion-title",[],null,null,null,e.O,e.t)),u.pb(11,49152,null,0,s.xb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(12,0,["",""])),(l()(),u.qb(13,0,null,null,9,"ion-content",[],null,null,null,e.z,e.e)),u.pb(14,49152,null,0,s.r,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,d)),u.pb(16,16384,null,0,a.j,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,f)),u.pb(18,16384,null,0,a.j,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(19,0,null,0,3,"ion-infinite-scroll",[["threshold","200px"]],null,[[null,"ionInfinite"]],(function(l,n,t){var u=!0;return"ionInfinite"===n&&(u=!1!==l.component.loadMorePosts(t)&&u),u}),e.D,e.h)),u.pb(20,49152,null,0,s.B,[u.h,u.k,u.x],{threshold:[0,"threshold"]},null),(l()(),u.qb(21,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,e.C,e.i)),u.pb(22,49152,null,0,s.C,[u.h,u.k,u.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var t=n.component;l(n,9,0,"arrow-back"),l(n,16,0,t.isLoading),l(n,18,0,!t.isLoading),l(n,20,0,"200px"),l(n,22,0,"bubbles","Loading more data...")}),(function(l,n){var t=n.component;l(n,12,0,null==t.listItems?null:t.listItems.title)}))}function P(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-homelist",[],null,null,null,x,g)),u.pb(1,114688,null,0,h,[p.a,p.m,a.g,s.Db,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=u.mb("app-homelist",h,P,{},{},[]),v=t("s7LF");class L{}t.d(n,"HomelistPageModuleNgFactory",(function(){return y}));var y=u.nb(i,[],(function(l){return u.yb([u.zb(512,u.j,u.Y,[[8,[o.a,k]],[3,u.j],u.v]),u.zb(4608,a.l,a.k,[u.s,[2,a.s]]),u.zb(4608,v.c,v.c,[]),u.zb(4608,s.a,s.a,[u.x,u.g]),u.zb(4608,s.Db,s.Db,[s.a,u.j,u.p]),u.zb(4608,s.Hb,s.Hb,[s.a,u.j,u.p]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,v.b,v.b,[]),u.zb(1073742336,v.a,v.a,[]),u.zb(1073742336,s.Bb,s.Bb,[]),u.zb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),u.zb(1073742336,L,L,[]),u.zb(1073742336,i,i,[]),u.zb(1024,p.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);