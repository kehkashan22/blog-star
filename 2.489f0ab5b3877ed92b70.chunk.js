webpackJsonp([2],{Fmwu:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},o=t("UHIZ"),i=t("Un6q"),r=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),d=e["\u0275crt"]({encapsulation:0,styles:[[".category-name[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}a.list-group-item[_ngcontent-%COMP%]   .list-group-item-heading[_ngcontent-%COMP%], button.list-group-item[_ngcontent-%COMP%]   .list-group-item-heading[_ngcontent-%COMP%]{color:#f3f3f3}.list-group-item-text[_ngcontent-%COMP%]{color:#b5ebd1}.list-group-item[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.5);border:1px solid #b5ebd1}.list-style[_ngcontent-%COMP%]{margin:10px;border-radius:5px;-webkit-box-shadow:5px;box-shadow:5px;\r\n  text-align:center}.active[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]:focus, .active[_ngcontent-%COMP%]:hover, a.list-group-item[_ngcontent-%COMP%]:focus, a.list-group-item[_ngcontent-%COMP%]:hover{background-color:#67c08e;color:#fff}.list-group-item.active[_ngcontent-%COMP%]   .list-group-item-text[_ngcontent-%COMP%]{color:#fff}"]],data:{}});function a(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,15,"a",[["class","list-group-item clearfix"],["routerLinkActive","active"],["style","cursor: pointer;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](1,671744,[[2,4]],0,o.r,[o.o,o.a,i.j],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,1),e["\u0275did"](3,1720320,null,2,o.q,[o.o,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](7,0,null,null,7,"div",[["class","pull-left"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275eld"](9,0,null,null,1,"h4",[["class","list-group-item-heading"]],null,null,null,null,null)),(n()(),e["\u0275ted"](10,null,["",""])),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275eld"](12,0,null,null,1,"p",[["class","list-group-item-text"]],null,null,null,null,null)),(n()(),e["\u0275ted"](13,null,["",""])),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,1,0,n(l,2,0,l.component.index)),n(l,3,0,"active")},function(n,l){var t=l.component;n(l,0,0,e["\u0275nov"](l,1).target,e["\u0275nov"](l,1).href),n(l,10,0,t.chicken.name),n(l,13,0,t.chicken.desc)})}var c=t("kUdC"),s=(t("/9hx"),function(){function n(){this.firestore=c.firestore()}return n.prototype.getCategories=function(){var n=this;return new Promise(function(l,t){n.firestore.collection("articles").get().then(function(n){l(n)})})},n.prototype.getArticleList=function(n){var l=this;return new Promise(function(t,e){l.firestore.collection("articles").doc(n).collection("articles_list").get().then(function(n){t(n)})})},n}()),p=this&&this.__assign||Object.assign||function(n){for(var l,t=1,e=arguments.length;t<e;t++)for(var u in l=arguments[t])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n},g=function(){function n(n,l,t){this._categories=n,this.route=l,this.router=t,this.categories=[]}return n.prototype.ngOnInit=function(){var n=this;this._categories.getCategories().then(function(l){l.forEach(function(l){n.categories.push(p({id:l.id},l.data()))})})},n}(),f=e["\u0275crt"]({encapsulation:0,styles:[['@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");.width-drop[_ngcontent-%COMP%]{background-color:#6571b5;padding:0 0;font-size:16px;color:#fff;width:100%}.dropdown-menu[_ngcontent-%COMP%]{font-size:12px;align:center}.row[_ngcontent-%COMP%]{margin-right:0}.gutter[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{margin-left:0}@media (min-width:360px) and (max-width:640px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:768px) and (max-width:1024px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:970px) and (max-width:1200px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:100px) and (max-width:1000px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:996px) and (max-width:1200px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:1201px){.mob-div[_ngcontent-%COMP%]{display:none}}@media (max-width:1200px){.web-div[_ngcontent-%COMP%]{display:none}}.category-name[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}.list-style[_ngcontent-%COMP%]{margin:10px;border-radius:5px;-webkit-box-shadow:5px;box-shadow:5px;\r\n  text-align:center}.active[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]:focus, .active[_ngcontent-%COMP%]:hover{background-color:#464880;color:#fff}']],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-category-item",[["class","list-style"]],null,null,null,a,d)),e["\u0275did"](1,114688,null,0,r,[],{chicken:[0,"chicken"],index:[1,"index"]},null)],function(n,l){n(l,1,0,l.context.$implicit,l.context.$implicit.id)},null)}function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"li",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n            "])),(n()(),e["\u0275eld"](2,0,null,null,5,"a",[["class","box clearfix"],["routerLinkActive","active"]],[[2,"active",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](3,671744,[[2,4]],0,o.r,[o.o,o.a,i.j],{routerLink:[0,"routerLink"]},null),e["\u0275did"](4,1720320,null,2,o.q,[o.o,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),e["\u0275ted"](7,null,["",""])),(n()(),e["\u0275ted"](-1,null,["\n          "]))],function(n,l){n(l,3,0,l.context.$implicit.id),n(l,4,0,"active")},function(n,l){n(l,2,0,l.context.$implicit.id===l.component.selectedRow,e["\u0275nov"](l,3).target,e["\u0275nov"](l,3).href),n(l,7,0,l.context.$implicit.name)})}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](2,0,null,null,5,"div",[["class","col-lg-12 col-md-12 col-sm-12 col-xs-12 web-div"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275ted"](-1,null,["\n\n    "])),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](6,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275ted"](-1,null,["\n\n  "])),(n()(),e["\u0275eld"](9,0,null,null,18,"div",[["class","mob-div col-lg-12 col-md-12 col-sm-12 col-xs-12"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275eld"](11,0,null,null,15,"a",[["style","cursor: pointer;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n      "])),(n()(),e["\u0275eld"](13,0,null,null,12,"div",[["class","dropdown"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275eld"](15,0,null,null,3,"button",[["class","btn btn-primary btn-lg dropdown-toggle width-drop"],["data-toggle","dropdown"],["type","button"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Acts\n          "])),(n()(),e["\u0275eld"](17,0,null,null,0,"span",[["class","caret"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275eld"](20,0,null,null,4,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n          "])),(n()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](23,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275ted"](-1,null,["\n      "])),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275ted"](-1,null,["\n\n  "])),(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){var t=l.component;n(l,6,0,t.categories),n(l,23,0,t.categories)},null)}var x=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),b=e["\u0275crt"]({encapsulation:0,styles:[[".sec-wid[_ngcontent-%COMP%]{width:100%}.border[_ngcontent-%COMP%]{border-right:1px solid #d0cece;margin-bottom:20px}.gutter[_ngcontent-%COMP%]{margin-left:20px}@media (min-width:360px) and (max-width:640px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:768px) and (max-width:1024px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:970px) and (max-width:1200px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:100px) and (max-width:1000px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:996px) and (max-width:1200px){.web-div[_ngcontent-%COMP%]{display:none}}@media (min-width:1201px){.mob-div[_ngcontent-%COMP%]{display:none}}@media (max-width:1200px){.web-div[_ngcontent-%COMP%]{display:none}}"]],data:{}});function w(n){return e["\u0275vid"](0,[(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](3,0,null,null,4,"div",[["class","col-lg-3 col-md-12  col-sm-12 col-xs-12 gutter border"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n      "])),(n()(),e["\u0275eld"](5,0,null,null,1,"app-categories-list",[],null,null,null,v,f)),e["\u0275did"](6,114688,null,0,g,[s,o.a,o.o],null,null),(n()(),e["\u0275ted"](-1,null,["\n "])),(n()(),e["\u0275ted"](-1,null,["\n\n\n "])),(n()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","col-lg-8 col-md-12 co-sm-12 col-xs-12 gutter"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n      "])),(n()(),e["\u0275eld"](11,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](12,212992,null,0,o.t,[o.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null),(n()(),e["\u0275ted"](-1,null,["\n "])),(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,6,0),n(l,12,0)},null)}var C=e["\u0275ccf"]("app-categories",x,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-categories",[],null,null,null,w,b)),e["\u0275did"](1,114688,null,0,x,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),y=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),O=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n  articles-start works!\n"])),(n()(),e["\u0275ted"](-1,null,["\n"]))],null,null)}var P=e["\u0275ccf"]("app-articles-start",y,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-articles-start",[],null,null,null,_,O)),e["\u0275did"](1,114688,null,0,y,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),M=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),k=e["\u0275crt"]({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{color:#f3f3f3}p[_ngcontent-%COMP%]{color:#67c08e}"]],data:{}});function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["The stars of this page are currently misaligned. Please come back later for a better viewing..."])),(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Or as normal people would say...nothing to see here yet...but we are working on it...why dont you try some other category till then?"])),(n()(),e["\u0275ted"](-1,null,["\n\n"]))],null,null)}var I=t("x5mN"),L=t("FxZ2"),F=t("UqtS"),A=t("OYY0"),q=t("acBb"),D=t("0nO6"),j=t("xyH+"),E=t("iz04"),T=(t("Kvsh"),t("ge1L")),K=this&&this.__assign||Object.assign||function(n){for(var l,t=1,e=arguments.length;t<e;t++)for(var u in l=arguments[t])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n},z=function(){function n(n,l,t){this._categories=n,this.route=l,this.router=t,this.articles=[],this.temparticles=[],this.fragment="",this.isDesc=!1,this.column="quiz",this.p=1}return n.prototype.ngOnInit=function(){var n=this;this.sub=this.route.params.subscribe(function(l){n.articles=[],n.category_id=l.article_id,console.log(n.category_id),n._categories.getArticleList(n.category_id).then(function(l){n.articles=[],console.log("here"),l.forEach(function(l){n.articles.push(K({id:l.id},l.data())),n.articles.sort(function(n,l){return T(n.date).isSameOrBefore(T(l.date))?1:T(l.date).isSameOrBefore(T(n.date))?-1:0}),n.temparticles=n.articles.slice(),console.log(l.id,"=>",l.data())})})})},n.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},n}(),V=e["\u0275crt"]({encapsulation:0,styles:[[".box[_ngcontent-%COMP%]{padding:15px;margin-bottom:20px}.card[_ngcontent-%COMP%]{border-radius:5px;padding:10px;margin:10px;border:1px solid rgba(0,0,0,.1);transition:.3s ease;-webkit-transition:.3s ease;background:hsla(0,0%,100%,.9);border-radius:3px;-webkit-box-shadow:0 3px 7px -3px rgba(0,0,0,.3);box-shadow:0 3px 7px -3px rgba(0,0,0,.3);overflow:hidden;position:relative;font-size:14px;line-height:1.45em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.search-box[_ngcontent-%COMP%]{border:1px solid #67c08e;background:#f3f3f3}"]],data:{}});function $(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](2,0,null,null,1,"app-construction",[],null,null,null,R,k)),e["\u0275did"](3,114688,null,0,M,[],null,null),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,3,0)},null)}function N(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275eld"](2,0,null,null,2,"app-article-item",[],null,null,null,I.b,I.a)),e["\u0275did"](3,114688,null,0,L.a,[F.a,A.a,o.o,q.a],{law_id:[0,"law_id"],article:[1,"article"],index:[2,"index"]},null),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275ted"](-1,null,["\n  "]))],function(n,l){n(l,3,0,l.component.category_id,l.context.$implicit,l.context.index)},null)}function S(n){return e["\u0275vid"](0,[(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](1,0,null,null,8,"div",[["class","box"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275eld"](3,0,null,null,5,"input",[["class","form-control search-box"],["name","search"],["placeholder","Search by anything..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,o=n.component;return"input"===l&&(u=!1!==e["\u0275nov"](n,4)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e["\u0275nov"](n,4).onTouched()&&u),"compositionstart"===l&&(u=!1!==e["\u0275nov"](n,4)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e["\u0275nov"](n,4)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(o.filter=t)&&u),u},null,null)),e["\u0275did"](4,16384,null,0,D.c,[e.Renderer2,e.ElementRef,[2,D.a]],null,null),e["\u0275prd"](1024,null,D.l,function(n){return[n]},[D.c]),e["\u0275did"](6,671744,null,0,D.p,[[8,null],[8,null],[8,null],[2,D.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,D.m,null,[D.p]),e["\u0275did"](8,16384,null,0,D.n,[D.m],null,null),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275ted"](-1,null,["\n\n  "])),(n()(),e["\u0275and"](16777216,null,null,4,null,N)),e["\u0275did"](12,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](0,j.a,[]),e["\u0275pod"](14,{itemsPerPage:0,currentPage:1}),e["\u0275pid"](0,E.b,[E.c]),(n()(),e["\u0275ted"](-1,null,["\n\n"]))],function(n,l){var t=l.component;n(l,6,0,"search",t.filter),n(l,12,0,e["\u0275unv"](l,12,0,e["\u0275nov"](l,15).transform(e["\u0275unv"](l,12,0,e["\u0275nov"](l,13).transform(t.articles,t.filter)),n(l,14,0,5,t.p))))},function(n,l){n(l,3,0,e["\u0275nov"](l,8).ngClassUntouched,e["\u0275nov"](l,8).ngClassTouched,e["\u0275nov"](l,8).ngClassPristine,e["\u0275nov"](l,8).ngClassDirty,e["\u0275nov"](l,8).ngClassValid,e["\u0275nov"](l,8).ngClassInvalid,e["\u0275nov"](l,8).ngClassPending)})}function U(n){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{picker:0}),(n()(),e["\u0275and"](16777216,null,null,1,null,$)),e["\u0275did"](2,16384,null,0,i.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e["\u0275ted"](-1,null,["\n\n"])),(n()(),e["\u0275and"](0,[["article",2]],null,0,null,S)),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,2,0,0===l.component.articles.length,e["\u0275nov"](l,4))},null)}var H=e["\u0275ccf"]("app-articles",z,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-articles",[],null,null,null,U,V)),e["\u0275did"](1,245760,null,0,z,[s,o.a,o.o],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),Z=t("2LMR"),B=t("Z0p1"),W=t("kntl"),Y=function(){},J=t("uwCa"),Q=t("Px6Q"),G=t("T2Au");t.d(l,"CategoriesModuleNgFactory",function(){return X});var X=e["\u0275cmf"](u,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[C,P,H]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.n,i.m,[e.LOCALE_ID,[2,i.s]]),e["\u0275mpd"](4608,D.x,D.x,[]),e["\u0275mpd"](4608,E.c,E.c,[]),e["\u0275mpd"](4608,F.a,F.a,[Z.a,B.a,o.o,W.a]),e["\u0275mpd"](4608,A.a,A.a,[B.a]),e["\u0275mpd"](4608,s,s,[]),e["\u0275mpd"](4608,q.a,q.a,[]),e["\u0275mpd"](512,i.c,i.c,[]),e["\u0275mpd"](512,o.s,o.s,[[2,o.x],[2,o.o]]),e["\u0275mpd"](512,Y,Y,[]),e["\u0275mpd"](512,D.v,D.v,[]),e["\u0275mpd"](512,D.j,D.j,[]),e["\u0275mpd"](512,j.b,j.b,[]),e["\u0275mpd"](512,J.Ng2OrderModule,J.Ng2OrderModule,[]),e["\u0275mpd"](512,E.a,E.a,[]),e["\u0275mpd"](512,Q.a,Q.a,[]),e["\u0275mpd"](512,G.a,G.a,[]),e["\u0275mpd"](512,u,u,[]),e["\u0275mpd"](1024,o.m,function(){return[[{path:"",component:x,children:[{path:"",component:y},{path:":article_id",component:z}]}]]},[])])})}});