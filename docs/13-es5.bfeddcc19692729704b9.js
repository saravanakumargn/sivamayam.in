(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){return function(){}}(),u=t("pMnS"),o=t("oBZk"),r=t("ZZ/e"),s=t("Ip0R"),c=t("mrSG"),a=t("gcOT"),b=t("MmGX"),d=t("SjPU"),p=a.a.Network,h=a.a.Share,g=function(){function n(n,l,t,e){this.modalController=n,this.homePageServiceService=l,this.router=t,this.platform=e,this.isSliderPostsLoading=!0,this.sliderPosts=[],this.homeListItems=[],this.homeListStaticItems=[],this.slideOpts={spaceBetween:30,centeredSlides:!0,loop:!0}}return n.prototype.ngOnInit=function(){this.networkTryAgain()},n.prototype.sharePage=function(){var n,l;l=this.platform.is("mobile")?n="https://sivamayam.in/":"\u0b95\u0bc0\u0bb4\u0bc7 \u0b89\u0bb3\u0bcd\u0bb3 \u0bb2\u0bbf\u0b99\u0bcd\u0b95\u0bc8 \u0b95\u0bbf\u0bb3\u0bbf\u0b95\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b87\u0ba8\u0bcd\u0ba4 \u0b87\u0bb2\u0bb5\u0b9a \u0b86\u0ba9\u0bcd\u0b9f\u0bbf\u0bb0\u0bbe\u0baf\u0bcd\u0b9f\u0bc1 \u0b85\u0baa\u0bcd\u0bb3\u0bbf\u0b95\u0bc7\u0b9a\u0ba9\u0bc8 \u0b9f\u0bb5\u0bc1\u0ba9\u0bcd\u0bb2\u0bcb\u0b9f\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b95\u0bca\u0bb3\u0bcd\u0bb3\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd! "+(n="https://play.google.com/store/apps/details?id=in.sivamayam"),h.share({dialogTitle:"\u0b9a\u0bbf\u0bb5\u0bae\u0baf\u0bae\u0bcd",title:"\u0b9a\u0bbf\u0bb5\u0bae\u0baf\u0bae\u0bcd",text:l,url:n})},n.prototype.networkTryAgain=function(){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(n){switch(n.label){case 0:return[4,p.getStatus()];case 1:return n.sent().connected?(this.isNetworkConnection=!0,this.getHomeSliderPosts(),this.getInitialData()):(this.isNetworkConnection=!1,this.isSliderPostsLoading=!1),[2]}}))}))},n.prototype.getHomeSliderPosts=function(){var n=this;this.homePageServiceService.getSliderPosts({currentPage:1,postMaxLimit:10}).subscribe((function(l){n.isSliderPostsLoading=!1,n.sliderPosts=l.posts}))},n.prototype.getInitialData=function(){return c.b(this,void 0,void 0,(function(){var n=this;return c.e(this,(function(l){return this.homePageServiceService.getHomeListCategories().subscribe((function(l){return c.b(n,void 0,void 0,(function(){var n;return c.e(this,(function(t){return console.log(l),n=l.categories.filter((function(n){return"uncategorized"!==n.slug&&"blog-posts"!==n.slug})).map((function(n){return{name:n.name.split(". ")[1],slug:n.slug}})),this.homeListItems=n,[2]}))}))})),[2]}))}))},n.prototype.listItemView=function(n){this.router.navigate(["homelist"],{queryParams:{slug:n.slug}})},n.prototype.sliderItemPostClick=function(n){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({component:d.a,componentProps:n})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}}))}))},n}(),m=t("ZYCi"),f=e.qb({encapsulation:0,styles:[[".slider-container[_ngcontent-%COMP%]{width:100%;padding:10px;height:181px}.slider-items[_ngcontent-%COMP%]{height:160px;width:100%;padding:20px;background-color:#e6e6e6;border:.25px solid #d9d9d9}.slider-contents[_ngcontent-%COMP%]{text-align:left}.slider-small-txt[_ngcontent-%COMP%]{margin-top:15px;font-size:12px;opacity:.75}.no-network[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.no-network[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:16px}.loader-icon-center[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100px;padding:12px;text-align:center;background-color:#fff;border:.5px solid #d9d9d9}"]],data:{}});function k(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,2,"div",[["class","loader-icon-center slider-items"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"ion-spinner",[["name","lines"]],null,null,null,o.K,o.p)),e.rb(2,49152,null,0,r.pb,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(n,l){n(l,2,0,"lines")}),null)}function v(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,6,"div",[["class","loader-icon-center slider-items no-network"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["\u0b87\u0ba9\u0bcd\u0b9f\u0bb0\u0bcd\u0ba8\u0bc6\u0b9f\u0bcd \u0b87\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0bb2\u0bcd \u0b87\u0bb2\u0bcd\u0bb2\u0bc8"])),(n()(),e.sb(4,0,null,null,2,"ion-button",[["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.networkTryAgain()&&e),e}),o.w,o.b)),e.rb(5,49152,null,0,r.h,[e.h,e.k,e.z],{fill:[0,"fill"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),e.Ib(-1,0,["\u0bae\u0bc0\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd"]))],(function(n,l){n(l,5,0,"outline","round","small")}),null)}function x(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,6,"ion-slide",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sliderItemPostClick(n.context.$implicit)&&e),e}),o.I,o.n)),e.rb(1,49152,null,0,r.nb,[e.h,e.k,e.z],null,null),(n()(),e.sb(2,0,null,0,4,"div",[["class","slider-items slider-contents"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,0,"h6",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.sb(4,0,null,null,2,"div",[["class","slider-small-txt"]],null,null,null,null,null)),(n()(),e.Ib(5,null,["",""])),e.Fb(6,2)],null,(function(n,l){n(l,3,0,l.context.$implicit.title);var t=e.Jb(l,5,0,n(l,6,0,e.Db(l.parent.parent,0),l.context.$implicit.modified,"dd-MM-yyyy"));n(l,5,0,t)}))}function P(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,3,"ion-slides",[["pager","true"]],null,null,null,o.J,o.o)),e.rb(1,49152,null,0,r.ob,[e.h,e.k,e.z],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),e.hb(16777216,null,0,1,null,x)),e.rb(3,278528,null,0,s.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.slideOpts,"true"),n(l,3,0,t.sliderPosts)}),null)}function w(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,3,"ion-col",[["size","6"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.listItemView(n.context.$implicit)&&e),e}),o.y,o.d)),e.rb(1,49152,null,0,r.q,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.sb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Ib(3,null,["",""]))],(function(n,l){n(l,1,0,"6")}),(function(n,l){n(l,3,0,null==l.context.$implicit?null:l.context.$implicit.name)}))}function y(n){return e.Kb(0,[e.Eb(0,s.d,[e.u]),(n()(),e.sb(1,0,null,null,12,"ion-header",[],null,null,null,o.A,o.f)),e.rb(2,49152,null,0,r.y,[e.h,e.k,e.z],null,null),(n()(),e.sb(3,0,null,0,10,"ion-toolbar",[],null,null,null,o.P,o.u)),e.rb(4,49152,null,0,r.zb,[e.h,e.k,e.z],null,null),(n()(),e.sb(5,0,null,0,2,"ion-title",[],null,null,null,o.O,o.t)),e.rb(6,49152,null,0,r.xb,[e.h,e.k,e.z],null,null),(n()(),e.Ib(-1,0,["\u0b9a\u0bbf\u0bb5\u0bae\u0baf\u0bae\u0bcd"])),(n()(),e.sb(8,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,o.x,o.c)),e.rb(9,49152,null,0,r.i,[e.h,e.k,e.z],null,null),(n()(),e.sb(10,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sharePage()&&e),e}),o.w,o.b)),e.rb(11,49152,null,0,r.h,[e.h,e.k,e.z],null,null),(n()(),e.sb(12,0,null,0,1,"ion-icon",[["name","share"],["slot","icon-only"]],null,null,null,o.B,o.g)),e.rb(13,49152,null,0,r.z,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(14,0,null,null,12,"ion-content",[],null,null,null,o.z,o.e)),e.rb(15,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(n()(),e.sb(16,0,null,0,6,"div",[["class","containerBorderB slider-container"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,k)),e.rb(18,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.hb(16777216,null,null,1,null,v)),e.rb(20,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.hb(16777216,null,null,1,null,P)),e.rb(22,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(23,0,null,0,3,"ion-row",[],null,null,null,o.H,o.m)),e.rb(24,49152,null,0,r.gb,[e.h,e.k,e.z],null,null),(n()(),e.hb(16777216,null,0,1,null,w)),e.rb(26,278528,null,0,s.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,13,0,"share"),n(l,18,0,t.isSliderPostsLoading),n(l,20,0,!t.isSliderPostsLoading&&!t.isNetworkConnection),n(l,22,0,!t.isSliderPostsLoading),n(l,26,0,t.homeListItems)}),null)}function z(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,1,"app-home",[],null,null,null,y,f)),e.rb(1,114688,null,0,g,[r.Db,b.a,m.m,r.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var I=e.ob("app-home",g,z,{},{},[]),S=t("gIcY");t.d(l,"HomePageModuleNgFactory",(function(){return B}));var B=e.pb(i,[],(function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[u.a,I]],[3,e.j],e.x]),e.Bb(4608,s.l,s.k,[e.u,[2,s.s]]),e.Bb(4608,r.a,r.a,[e.z,e.g]),e.Bb(4608,r.Db,r.Db,[r.a,e.j,e.q]),e.Bb(4608,r.Hb,r.Hb,[r.a,e.j,e.q]),e.Bb(4608,S.c,S.c,[]),e.Bb(1073742336,s.b,s.b,[]),e.Bb(1073742336,r.Bb,r.Bb,[]),e.Bb(1073742336,S.b,S.b,[]),e.Bb(1073742336,S.a,S.a,[]),e.Bb(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),e.Bb(1073742336,i,i,[]),e.Bb(1024,m.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);