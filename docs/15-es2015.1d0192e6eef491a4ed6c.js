(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RfJO:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class i{}var o=t("pMnS"),e=t("oBZk"),s=t("ZZ/e"),a=t("SVse"),r=t("mrSG"),b=t("MmGX"),c=t("SjPU");class h{constructor(l,n,t,u){this.route=l,this.router=n,this.modalController=t,this.homePageServiceService=u,this.postsData=[],this.postMaxLimit=25,this.currentPage=1,this.totalPostCount=0,this.isReachedLastPost=!1,this.isLoading=!0,this.route.queryParams.subscribe(l=>r.b(this,void 0,void 0,(function*(){l&&l.slug&&(this.selectedCategorySlug=l.slug,this.getPostsByCategory(this.currentPage,this.postMaxLimit,this.selectedCategorySlug))})))}ngOnInit(){}getPostsByCategory(l,n,t,u){this.homePageServiceService.getPostsByCategory({currentPage:l,postMaxLimit:n,categorySlug:t}).subscribe(l=>{this.isLoading=!1,this.postsData=[...this.postsData,...l.posts],this.totalPostCount=l.found,this.isReachedLastPost=this.postMaxLimit*this.currentPage>=this.totalPostCount||this.postMaxLimit*this.currentPage>900,u&&u.target.complete()})}loadMorePosts(l){this.currentPage=this.currentPage+1,this.getPostsByCategory(this.currentPage,this.postMaxLimit,this.selectedCategorySlug,l),this.isReachedLastPost&&(l.target.disabled=!0)}showPost(l){return r.b(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:c.a,componentProps:l});return yield n.present()}))}}var p=t("iInd"),g=u.ob({encapsulation:0,styles:[[""]],data:{}});function d(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,2,"div",[["class","ion-margin ion-text-center"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,1,"ion-spinner",[["name","lines"]],null,null,null,e.M,e.q)),u.pb(2,49152,null,0,s.qb,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"lines")}),null)}function f(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,3,"ion-item",[["detail","true"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showPost(l.context.$implicit)&&u),u}),e.G,e.k)),u.pb(1,49152,null,0,s.F,[u.h,u.k,u.x],{detail:[0,"detail"]},null),(l()(),u.qb(2,0,null,0,1,"ion-label",[],[[8,"innerHTML",1]],null,null,e.H,e.l)),u.pb(3,49152,null,0,s.L,[u.h,u.k,u.x],null,null)],(function(l,n){l(n,1,0,"true")}),(function(l,n){l(n,2,0,n.context.$implicit.title)}))}function m(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,3,"ion-list",[["class","ion-no-padding"],["lines","full"]],null,null,null,e.I,e.m)),u.pb(1,49152,null,0,s.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.fb(16777216,null,0,1,null,f)),u.pb(3,278528,null,0,a.i,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"full"),l(n,3,0,t.postsData)}),null)}function x(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,11,"ion-header",[],null,null,null,e.C,e.g)),u.pb(1,49152,null,0,s.z,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,e.R,e.v)),u.pb(3,49152,null,0,s.Ab,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.z,e.d)),u.pb(5,49152,null,0,s.j,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==u.Bb(l,8).onClick(t)&&i),i}),e.x,e.b)),u.pb(7,49152,null,0,s.e,[u.h,u.k,u.x],null,null),u.pb(8,16384,null,0,s.f,[[2,s.gb],s.Fb],null,null),(l()(),u.qb(9,0,null,0,2,"ion-title",[],null,null,null,e.Q,e.u)),u.pb(10,49152,null,0,s.yb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(11,0,["",""])),(l()(),u.qb(12,0,null,null,9,"ion-content",[],null,null,null,e.B,e.f)),u.pb(13,49152,null,0,s.s,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,d)),u.pb(15,16384,null,0,a.j,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,m)),u.pb(17,16384,null,0,a.j,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(18,0,null,0,3,"ion-infinite-scroll",[["threshold","200px"]],null,[[null,"ionInfinite"]],(function(l,n,t){var u=!0;return"ionInfinite"===n&&(u=!1!==l.component.loadMorePosts(t)&&u),u}),e.F,e.i)),u.pb(19,49152,null,0,s.C,[u.h,u.k,u.x],{threshold:[0,"threshold"]},null),(l()(),u.qb(20,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,e.E,e.j)),u.pb(21,49152,null,0,s.D,[u.h,u.k,u.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var t=n.component;l(n,15,0,t.isLoading),l(n,17,0,!t.isLoading),l(n,19,0,"200px"),l(n,21,0,"bubbles","Loading more data...")}),(function(l,n){var t=n.component;l(n,11,0,null==t.listItems?null:t.listItems.title)}))}function P(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-homelist",[],null,null,null,x,g)),u.pb(1,114688,null,0,h,[p.a,p.m,s.Eb,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=u.mb("app-homelist",h,P,{},{},[]),v=t("s7LF");class I{}t.d(n,"HomelistPageModuleNgFactory",(function(){return L}));var L=u.nb(i,[],(function(l){return u.yb([u.zb(512,u.j,u.Y,[[8,[o.a,k]],[3,u.j],u.v]),u.zb(4608,a.l,a.k,[u.s,[2,a.s]]),u.zb(4608,v.c,v.c,[]),u.zb(4608,s.a,s.a,[u.x,u.g]),u.zb(4608,s.Eb,s.Eb,[s.a,u.j,u.p]),u.zb(4608,s.Ib,s.Ib,[s.a,u.j,u.p]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,v.b,v.b,[]),u.zb(1073742336,v.a,v.a,[]),u.zb(1073742336,s.Cb,s.Cb,[]),u.zb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),u.zb(1073742336,I,I,[]),u.zb(1073742336,i,i,[]),u.zb(1024,p.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);