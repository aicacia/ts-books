import{O as t,S as e,i as a,s as l,e as o,c as n,a as s,d as r,b as c,f as i,G as d,t as h,g as u,E as f,T as m,l as p,k as b,n as k,I as v,J as g,L as $,U as w,j as E,m as I,o as y,v as V,r as B,w as D,V as N,B as j,u as x,z as T,W as M,X as O,h as C,K as q,M as H,Y as L,H as _}from"../../chunks/vendor-a374df86.js";import{p as A,b as S}from"../../chunks/books-6a6c6984.js";var P;(P||(P={})).Markdown="markdown";const R=A("blocks",{table:new t.Table});function U(t,e){let a;return R.change((({table:l})=>{const o={bookId:t,type:e};var n;null!==(n=o)&&"object"==typeof n&&n.type===P.Markdown&&(o.markdown=""),a=l.add(o)})),a}function X(t){let e,a,l;return{c(){e=o("div"),a=o("h1"),l=h("Click to Edit"),this.h()},l(t){e=n(t,"DIV",{class:!0});var o=s(e);a=n(o,"H1",{});var c=s(a);l=u(c,"Click to Edit"),c.forEach(r),o.forEach(r),this.h()},h(){c(e,"class","d-flex align-items-center justify-content-center")},m(t,o){i(t,e,o),f(e,a),f(a,l)},p:d,d(t){t&&r(e)}}}function z(t){let e,a,l=m.parse(t[2])+"";return{c(){a=p(),this.h()},l(t){a=p(),this.h()},h(){e=new w(a)},m(t,o){e.m(l,t,o),i(t,a,o)},p(t,a){4&a&&l!==(l=m.parse(t[2])+"")&&e.p(l)},d(t){t&&r(a),t&&e.d()}}}function F(t){let e,a,l,d,h,u,p,w,E=m.parse(t[2])+"";return{c(){e=o("div"),a=o("div"),l=o("textarea"),h=b(),u=o("div"),this.h()},l(t){e=n(t,"DIV",{class:!0});var o=s(e);a=n(o,"DIV",{class:!0});var c=s(a);l=n(c,"TEXTAREA",{class:!0,placeholder:!0,"aria-label":!0,rows:!0,required:!0,"ally-autofocus":!0}),s(l).forEach(r),c.forEach(r),h=k(o),u=n(o,"DIV",{class:!0}),s(u).forEach(r),o.forEach(r),this.h()},h(){c(l,"class","form-control"),c(l,"placeholder","New Book Name"),c(l,"aria-label","New Book Name"),c(l,"rows",d=t[2].split("\n").length),l.required=!0,c(l,"ally-autofocus",""),c(a,"class","col-sm-12 col-lg-6"),c(u,"class","col-sm-12 col-lg-6"),c(e,"class","row")},m(o,n){i(o,e,n),f(e,a),f(a,l),v(l,t[2]),f(e,h),f(e,u),u.innerHTML=E,p||(w=[g(l,"input",t[4]),g(l,"change",t[3])],p=!0)},p(t,e){4&e&&d!==(d=t[2].split("\n").length)&&c(l,"rows",d),4&e&&v(l,t[2]),4&e&&E!==(E=m.parse(t[2])+"")&&(u.innerHTML=E)},d(t){t&&r(e),p=!1,$(w)}}}function G(t){let e,a,l;function h(t,e){return t[1]?F:((null==a||4&e)&&(a=!!t[2].trim()),a?z:X)}let u=h(t,-1),f=u(t);return{c(){e=o("div"),f.c(),this.h()},l(t){e=n(t,"DIV",{id:!0});var a=s(e);f.l(a),a.forEach(r),this.h()},h(){c(e,"id",l=t[0].id)},m(t,a){i(t,e,a),f.m(e,null)},p(t,[a]){u===(u=h(t,a))&&f?f.p(t,a):(f.d(1),f=u(t),f&&(f.c(),f.m(e,null))),1&a&&l!==(l=t[0].id)&&c(e,"id",l)},i:d,o:d,d(t){t&&r(e),f.d()}}}function J(t,e,a){let{block:l}=e,{edit:o}=e,n=l.markdown;return t.$$set=t=>{"block"in t&&a(0,l=t.block),"edit"in t&&a(1,o=t.edit)},[l,o,n,function(){var t,e;t=l.id,e=t=>{t.markdown=n},R.change((({table:a})=>{const l=a.byId(t);l&&e(l)}))},function(){n=this.value,a(2,n)}]}class K extends e{constructor(t){super(),a(this,t,J,G,l,{block:0,edit:1})}}function W(t){let e,a;return e=new K({props:{block:t[0],edit:t[1]}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){y(e,t,l),a=!0},p(t,a){const l={};1&a&&(l.block=t[0]),2&a&&(l.edit=t[1]),e.$set(l)},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function Y(t){let e,a,l,d,h,u=t[0].type===P.Markdown&&W(t);return{c(){e=o("div"),a=o("div"),u&&u.c(),this.h()},l(t){e=n(t,"DIV",{class:!0});var l=s(e);a=n(l,"DIV",{class:!0});var o=s(a);u&&u.l(o),o.forEach(r),l.forEach(r),this.h()},h(){c(a,"class","card-body"),c(e,"class","card mb-4")},m(o,n){i(o,e,n),f(e,a),u&&u.m(a,null),l=!0,d||(h=g(e,"click",N(t[2])),d=!0)},p(t,[e]){t[0].type===P.Markdown?u?(u.p(t,e),1&e&&V(u,1)):(u=W(t),u.c(),V(u,1),u.m(a,null)):u&&(j(),B(u,1,1,(()=>{u=null})),x())},i(t){l||(V(u),l=!0)},o(t){B(u),l=!1},d(t){t&&r(e),u&&u.d(),d=!1,h()}}}function Q(t,e,a){let l,{block:o}=e;T((()=>{window.addEventListener("click",(()=>a(1,l=!1)))}));return t.$$set=t=>{"block"in t&&a(0,o=t.block)},[o,l,()=>a(1,l=!0)]}class Z extends e{constructor(t){super(),a(this,t,Q,Y,l,{block:0})}}function tt(t,e,a){const l=t.slice();return l[5]=e[a][0],l[6]=e[a][1],l}function et(t,e,a){const l=t.slice();return l[9]=e[a],l}function at(t){let e,a;return e=new Z({props:{block:t[9]}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){y(e,t,l),a=!0},p(t,a){const l={};4&a&&(l.block=t[9]),e.$set(l)},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function lt(t){let e,a,l=t[5]+"";return{c(){e=o("option"),a=h(l),this.h()},l(t){e=n(t,"OPTION",{value:!0});var o=s(e);a=u(o,l),o.forEach(r),this.h()},h(){e.__value=t[6],e.value=e.__value},m(t,l){i(t,e,l),f(e,a)},p:d,d(t){t&&r(e)}}}function ot(t){let e,a,l,d,m,p,v,w,E,I,y,D,N,T,H,L,_=t[0].name+"",A=t[2].table.rows,S=[];for(let o=0;o<A.length;o+=1)S[o]=at(et(t,A,o));const R=t=>B(S[t],1,1,(()=>{S[t]=null}));let U=Object.entries(P),X=[];for(let o=0;o<U.length;o+=1)X[o]=lt(tt(t,U,o));return{c(){e=o("h1"),a=h(_),l=b(),d=o("div");for(let t=0;t<S.length;t+=1)S[t].c();m=b(),p=o("div"),v=o("form"),w=o("div"),E=o("select");for(let t=0;t<X.length;t+=1)X[t].c();I=b(),y=o("div"),D=o("button"),N=h("Create Block"),this.h()},l(t){e=n(t,"H1",{});var o=s(e);a=u(o,_),o.forEach(r),l=k(t),d=n(t,"DIV",{class:!0});var c=s(d);for(let e=0;e<S.length;e+=1)S[e].l(c);c.forEach(r),m=k(t),p=n(t,"DIV",{class:!0});var i=s(p);v=n(i,"FORM",{action:!0,class:!0});var h=s(v);w=n(h,"DIV",{class:!0});var f=s(w);E=n(f,"SELECT",{class:!0,placeholder:!0,"aria-label":!0,required:!0});var b=s(E);for(let e=0;e<X.length;e+=1)X[e].l(b);b.forEach(r),f.forEach(r),I=k(h),y=n(h,"DIV",{class:!0});var g=s(y);D=n(g,"BUTTON",{type:!0,class:!0,"aria-label":!0});var $=s(D);N=u($,"Create Block"),$.forEach(r),g.forEach(r),h.forEach(r),i.forEach(r),this.h()},h(){c(d,"class","mt-4"),c(E,"class","form-select"),c(E,"placeholder","New Book Name"),c(E,"aria-label","New Book Name"),E.required=!0,void 0===t[1]&&M((()=>t[4].call(E))),c(w,"class","col-auto"),c(D,"type","submit"),c(D,"class","form-control btn btn-primary"),c(D,"aria-label","Create Block"),c(y,"class","col-auto"),c(v,"action","javascript:void(0);"),c(v,"class","row mt-4"),c(p,"class","d-flex align-items-center justify-content-center")},m(o,n){i(o,e,n),f(e,a),i(o,l,n),i(o,d,n);for(let t=0;t<S.length;t+=1)S[t].m(d,null);i(o,m,n),i(o,p,n),f(p,v),f(v,w),f(w,E);for(let t=0;t<X.length;t+=1)X[t].m(E,null);O(E,t[1]),f(v,I),f(v,y),f(y,D),f(D,N),T=!0,H||(L=[g(E,"change",t[4]),g(D,"click",t[3])],H=!0)},p(t,[e]){if((!T||1&e)&&_!==(_=t[0].name+"")&&C(a,_),4&e){let a;for(A=t[2].table.rows,a=0;a<A.length;a+=1){const l=et(t,A,a);S[a]?(S[a].p(l,e),V(S[a],1)):(S[a]=at(l),S[a].c(),V(S[a],1),S[a].m(d,null))}for(j(),a=A.length;a<S.length;a+=1)R(a);x()}if(0&e){let a;for(U=Object.entries(P),a=0;a<U.length;a+=1){const l=tt(t,U,a);X[a]?X[a].p(l,e):(X[a]=lt(l),X[a].c(),X[a].m(E,null))}for(;a<X.length;a+=1)X[a].d(1);X.length=U.length}2&e&&O(E,t[1])},i(t){if(!T){for(let t=0;t<A.length;t+=1)V(S[t]);T=!0}},o(t){S=S.filter(Boolean);for(let e=0;e<S.length;e+=1)B(S[e]);T=!1},d(t){t&&r(e),t&&r(l),t&&r(d),q(S,t),t&&r(m),t&&r(p),q(X,t),H=!1,$(L)}}}function nt(t,e,a){let l;H(t,R,(t=>a(2,l=t)));let{book:o}=e,n=P.Markdown;return t.$$set=t=>{"book"in t&&a(0,o=t.book)},[o,n,l,function(){U(o.id,n)},function(){n=L(this),a(1,n)}]}class st extends e{constructor(t){super(),a(this,t,nt,ot,l,{book:0})}}function rt(t){let e,a;return{c(){e=o("div"),a=o("span"),this.h()},l(t){e=n(t,"DIV",{class:!0});var l=s(e);a=n(l,"SPAN",{class:!0,role:!0,"aria-hidden":!0}),s(a).forEach(r),l.forEach(r),this.h()},h(){c(a,"class","spinner-border spinner-border-sm"),c(a,"role","status"),c(a,"aria-hidden","true"),c(e,"class","d-flex align-items-center justify-content-center")},m(t,l){i(t,e,l),f(e,a)},p:d,i:d,o:d,d(t){t&&r(e)}}}function ct(t){let e,a;return e=new st({props:{book:t[0]}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){y(e,t,l),a=!0},p(t,a){const l={};1&a&&(l.book=t[0]),e.$set(l)},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function it(t){var e;let a,l,o,n,s,c;document.title=a="Book: "+(null==(e=t[0])?void 0:e.name);const d=[ct,rt],h=[];function u(t,e){return t[0]?0:1}return o=u(t),n=h[o]=d[o](t),{c(){l=b(),n.c(),s=p()},l(t){_('[data-svelte="svelte-1ansdeq"]',document.head).forEach(r),l=k(t),n.l(t),s=p()},m(t,e){i(t,l,e),h[o].m(t,e),i(t,s,e),c=!0},p(t,[e]){var l;(!c||1&e)&&a!==(a="Book: "+(null==(l=t[0])?void 0:l.name))&&(document.title=a);let r=o;o=u(t),o===r?h[o].p(t,e):(j(),B(h[r],1,1,(()=>{h[r]=null})),x(),n=h[o],n?n.p(t,e):(n=h[o]=d[o](t),n.c()),V(n,1),n.m(s.parentNode,s))},i(t){c||(V(n),c=!0)},o(t){B(n),c=!1},d(t){t&&r(l),h[o].d(t),t&&r(s)}}}async function dt({page:{params:t}}){return{props:{bookId:t.bookId}}}function ht(t,e,a){let l,o;H(t,S,(t=>a(2,o=t)));let{bookId:n}=e;return t.$$set=t=>{"bookId"in t&&a(1,n=t.bookId)},t.$$.update=()=>{6&t.$$.dirty&&a(0,l=o.table.rows.find((t=>t.id===n)))},[l,n,o]}export default class extends e{constructor(t){super(),a(this,t,ht,it,l,{bookId:1})}}export{dt as load};
