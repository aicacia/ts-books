import{Q as t,S as e,i as n,s as o,e as r,c as s,a,d as l,f as c,G as i,R as u,z as d,T as f,U as h,b as m,y as p,B as $,r as v,u as g,v as k,V as b,t as x,g as w,E,j as y,m as I,o as T,w as V,k as j,n as D,J as _,W as O,X as B,Y as N,h as L,K as C,L as q,M as H,Z as M,l as P,H as S}from"../../chunks/vendor-e656a39c.js";import{p as R,b as A}from"../../chunks/books-e9a0d9e8.js";import{_ as U}from"../../chunks/preload-helper-9f12a5fd.js";var z;(z||(z={})).Text="text";const F=R("blocks",{byId:{}});function G(e,n){const o={id:t.v4(),bookId:e,type:n};var r;null!==(r=o)&&"object"==typeof r&&r.type===z.Text&&(o.text=""),F.update((t=>(t.byId[o.id]=o,t)))}function J(t){let e;return{c(){e=r("div")},l(t){e=s(t,"DIV",{}),a(e).forEach(l)},m(n,o){c(n,e,o),t[4](e)},p:i,i:i,o:i,d(n){n&&l(e),t[4](null)}}}function K(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function a(t){try{c(o.next(t))}catch(e){s(e)}}function l(t){try{c(o.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}c((o=o.apply(t,e||[])).next())}))};let r,{text:s}=e;const a=u();let l,c;return d((()=>o(void 0,void 0,void 0,(function*(){const{default:t}=yield U((()=>import("../../chunks/quill-ee6101da.js").then((function(t){return t.q}))),["/_app/chunks/quill-ee6101da.js","/_app/chunks/vendor-e656a39c.js"]);n(3,l=new t(c,{modules:{toolbar:!1},theme:"snow"})),s&&l.setText(s),l.on("text-change",(function(t,e,n){"user"===n&&(a("textchange",t),a("change",l.getText()))})),c.addEventListener("keydown",(function(t){if("Backspace"===t.key){const e=l.getText();""!==e&&"\n"!==e&&t.stopPropagation()}}),{capture:!0})})))),t.$$set=t=>{"text"in t&&n(1,s=t.text)},t.$$.update=()=>{14&t.$$.dirty&&s!==r&&l&&(n(2,r=s),l.setText(s))},[c,s,r,l,function(t){f[t?"unshift":"push"]((()=>{c=t,n(0,c)}))}]}class Q extends e{constructor(t){super(),n(this,t,K,J,o,{text:1})}}function W(t){let e,n=h.parse(t[0])+"";return{c(){e=r("div"),this.h()},l(t){e=s(t,"DIV",{class:!0}),a(e).forEach(l),this.h()},h(){m(e,"class","markdown")},m(o,r){c(o,e,r),e.innerHTML=n,t[2](e)},p(t,[o]){1&o&&n!==(n=h.parse(t[0])+"")&&(e.innerHTML=n)},i:i,o:i,d(n){n&&l(e),t[2](null)}}}function X(t,e,n){let o,r,{markdown:s}=e;const a={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1};return p((()=>{r&&o!==s&&(o=s,window.renderMathInElement(r,a))})),t.$$set=t=>{"markdown"in t&&n(0,s=t.markdown)},[s,r,function(t){f[t?"unshift":"push"]((()=>{r=t,n(1,r)}))}]}class Y extends e{constructor(t){super(),n(this,t,X,W,o,{markdown:0})}}function Z(t){let e,n,o;return{c(){e=r("div"),n=r("h1"),o=x("Click to Edit"),this.h()},l(t){e=s(t,"DIV",{class:!0});var r=a(e);n=s(r,"H1",{});var c=a(n);o=w(c,"Click to Edit"),c.forEach(l),r.forEach(l),this.h()},h(){m(e,"class","d-flex align-items-center justify-content-center")},m(t,r){c(t,e,r),E(e,n),E(n,o)},p:i,i:i,o:i,d(t){t&&l(e)}}}function tt(t){let e,n;return e=new Y({props:{markdown:t[0].text}}),{c(){y(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,o){T(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.markdown=t[0].text),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function et(t){let e,n,o,i,u,d,f;return o=new Q({props:{text:t[2]}}),o.$on("change",t[4]),d=new Y({props:{markdown:t[3]}}),{c(){e=r("div"),n=r("div"),y(o.$$.fragment),i=j(),u=r("div"),y(d.$$.fragment),this.h()},l(t){e=s(t,"DIV",{class:!0});var r=a(e);n=s(r,"DIV",{class:!0});var c=a(n);I(o.$$.fragment,c),c.forEach(l),i=D(r),u=s(r,"DIV",{class:!0});var f=a(u);I(d.$$.fragment,f),f.forEach(l),r.forEach(l),this.h()},h(){m(n,"class","col-6"),m(u,"class","col-6"),m(e,"class","row")},m(t,r){c(t,e,r),E(e,n),T(o,n,null),E(e,i),E(e,u),T(d,u,null),f=!0},p(t,e){const n={};4&e&&(n.text=t[2]),o.$set(n);const r={};8&e&&(r.markdown=t[3]),d.$set(r)},i(t){f||(k(o.$$.fragment,t),k(d.$$.fragment,t),f=!0)},o(t){v(o.$$.fragment,t),v(d.$$.fragment,t),f=!1},d(t){t&&l(e),V(o),V(d)}}}function nt(t){let e,n,o,i,u;const d=[et,tt,Z],f=[];function h(t,e){return t[1]?0:(1&e&&(n=!!t[0].text.trim()),n?1:2)}return o=h(t,-1),i=f[o]=d[o](t),{c(){e=r("div"),i.c()},l(t){e=s(t,"DIV",{});var n=a(e);i.l(n),n.forEach(l)},m(t,n){c(t,e,n),f[o].m(e,null),u=!0},p(t,[n]){let r=o;o=h(t,n),o===r?f[o].p(t,n):($(),v(f[r],1,1,(()=>{f[r]=null})),g(),i=f[o],i?i.p(t,n):(i=f[o]=d[o](t),i.c()),k(i,1),i.m(e,null))},i(t){u||(k(i),u=!0)},o(t){v(i),u=!1},d(t){t&&l(e),f[o].d()}}}function ot(t,e,n){let o,{block:r}=e,{edit:s}=e,a=r.text.toString(),l=a;return b((()=>{s!==o&&(o=s,n(2,a=r.text.toString()),n(3,l=a))})),t.$$set=t=>{"block"in t&&n(0,r=t.block),"edit"in t&&n(1,s=t.edit)},[r,s,a,l,function(t){var e,o;e=r.id,o=e=>(e.text=t.detail,n(3,l=e.text),e),F.update((t=>{const n=t.byId[e];return n&&(t.byId[n.id]=o(n)),t}))}]}class rt extends e{constructor(t){super(),n(this,t,ot,nt,o,{block:0,edit:1})}}function st(t){let e,n;return e=new rt({props:{block:t[0],edit:t[1]}}),{c(){y(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,o){T(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.block=t[0]),2&n&&(o.edit=t[1]),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function at(t){let e,n,o,i,u=t[0].type===z.Text&&st(t);return{c(){e=r("div"),u&&u.c(),this.h()},l(t){e=s(t,"DIV",{class:!0});var n=a(e);u&&u.l(n),n.forEach(l),this.h()},h(){m(e,"class","mb-4")},m(r,s){c(r,e,s),u&&u.m(e,null),n=!0,o||(i=_(e,"click",O(t[2])),o=!0)},p(t,[n]){t[0].type===z.Text?u?(u.p(t,n),1&n&&k(u,1)):(u=st(t),u.c(),k(u,1),u.m(e,null)):u&&($(),v(u,1,1,(()=>{u=null})),g())},i(t){n||(k(u),n=!0)},o(t){v(u),n=!1},d(t){t&&l(e),u&&u.d(),o=!1,i()}}}function lt(t,e,n){let o,{block:r}=e;d((()=>{window.addEventListener("click",(()=>n(1,o=!1)))}));return t.$$set=t=>{"block"in t&&n(0,r=t.block)},[r,o,()=>n(1,o=!0)]}class ct extends e{constructor(t){super(),n(this,t,lt,at,o,{block:0})}}function it(t,e,n){const o=t.slice();return o[5]=e[n][0],o[6]=e[n][1],o}function ut(t,e,n){const o=t.slice();return o[9]=e[n],o}function dt(t){let e,n;return e=new ct({props:{block:t[9]}}),{c(){y(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,o){T(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.block=t[9]),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function ft(t){let e,n,o=t[5]+"";return{c(){e=r("option"),n=x(o),this.h()},l(t){e=s(t,"OPTION",{value:!0});var r=a(e);n=w(r,o),r.forEach(l),this.h()},h(){e.__value=t[6],e.value=e.__value},m(t,o){c(t,e,o),E(e,n)},p:i,d(t){t&&l(e)}}}function ht(t){let e,n,o,i,u,d,f,h,p,b,y,I,T,V,O,H,M=t[0].name+"",P=Object.values(t[2].byId),S=[];for(let r=0;r<P.length;r+=1)S[r]=dt(ut(t,P,r));const R=t=>v(S[t],1,1,(()=>{S[t]=null}));let A=Object.entries(z),U=[];for(let r=0;r<A.length;r+=1)U[r]=ft(it(t,A,r));return{c(){e=r("h1"),n=x(M),o=j(),i=r("div");for(let t=0;t<S.length;t+=1)S[t].c();u=j(),d=r("div"),f=r("form"),h=r("div"),p=r("select");for(let t=0;t<U.length;t+=1)U[t].c();b=j(),y=r("div"),I=r("button"),T=x("Create"),this.h()},l(t){e=s(t,"H1",{});var r=a(e);n=w(r,M),r.forEach(l),o=D(t),i=s(t,"DIV",{class:!0});var c=a(i);for(let e=0;e<S.length;e+=1)S[e].l(c);c.forEach(l),u=D(t),d=s(t,"DIV",{class:!0});var m=a(d);f=s(m,"FORM",{action:!0,class:!0});var $=a(f);h=s($,"DIV",{class:!0});var v=a(h);p=s(v,"SELECT",{class:!0,placeholder:!0,"aria-label":!0,required:!0});var g=a(p);for(let e=0;e<U.length;e+=1)U[e].l(g);g.forEach(l),v.forEach(l),b=D($),y=s($,"DIV",{class:!0});var k=a(y);I=s(k,"BUTTON",{type:!0,class:!0,"aria-label":!0});var x=a(I);T=w(x,"Create"),x.forEach(l),k.forEach(l),$.forEach(l),m.forEach(l),this.h()},h(){m(i,"class","mt-4"),m(p,"class","form-select"),m(p,"placeholder","New Book Name"),m(p,"aria-label","New Book Name"),p.required=!0,void 0===t[1]&&B((()=>t[4].call(p))),m(h,"class","col-auto"),m(I,"type","submit"),m(I,"class","btn btn-primary"),m(I,"aria-label","Create Block"),m(y,"class","col-auto"),m(f,"action","javascript:void(0);"),m(f,"class","row mt-4"),m(d,"class","d-flex align-items-center justify-content-center")},m(r,s){c(r,e,s),E(e,n),c(r,o,s),c(r,i,s);for(let t=0;t<S.length;t+=1)S[t].m(i,null);c(r,u,s),c(r,d,s),E(d,f),E(f,h),E(h,p);for(let t=0;t<U.length;t+=1)U[t].m(p,null);N(p,t[1]),E(f,b),E(f,y),E(y,I),E(I,T),V=!0,O||(H=[_(p,"change",t[4]),_(I,"click",t[3])],O=!0)},p(t,[e]){if((!V||1&e)&&M!==(M=t[0].name+"")&&L(n,M),4&e){let n;for(P=Object.values(t[2].byId),n=0;n<P.length;n+=1){const o=ut(t,P,n);S[n]?(S[n].p(o,e),k(S[n],1)):(S[n]=dt(o),S[n].c(),k(S[n],1),S[n].m(i,null))}for($(),n=P.length;n<S.length;n+=1)R(n);g()}if(0&e){let n;for(A=Object.entries(z),n=0;n<A.length;n+=1){const o=it(t,A,n);U[n]?U[n].p(o,e):(U[n]=ft(o),U[n].c(),U[n].m(p,null))}for(;n<U.length;n+=1)U[n].d(1);U.length=A.length}2&e&&N(p,t[1])},i(t){if(!V){for(let t=0;t<P.length;t+=1)k(S[t]);V=!0}},o(t){S=S.filter(Boolean);for(let e=0;e<S.length;e+=1)v(S[e]);V=!1},d(t){t&&l(e),t&&l(o),t&&l(i),C(S,t),t&&l(u),t&&l(d),C(U,t),O=!1,q(H)}}}function mt(t,e,n){let o;H(t,F,(t=>n(2,o=t)));let{book:r}=e,s=z.Text;return t.$$set=t=>{"book"in t&&n(0,r=t.book)},[r,s,o,function(){G(r.id,s)},function(){s=M(this),n(1,s)}]}class pt extends e{constructor(t){super(),n(this,t,mt,ht,o,{book:0})}}function $t(t){let e,n;return{c(){e=r("div"),n=r("span"),this.h()},l(t){e=s(t,"DIV",{class:!0});var o=a(e);n=s(o,"SPAN",{class:!0,role:!0,"aria-hidden":!0}),a(n).forEach(l),o.forEach(l),this.h()},h(){m(n,"class","spinner-border spinner-border-sm"),m(n,"role","status"),m(n,"aria-hidden","true"),m(e,"class","d-flex align-items-center justify-content-center")},m(t,o){c(t,e,o),E(e,n)},p:i,i:i,o:i,d(t){t&&l(e)}}}function vt(t){let e,n;return e=new pt({props:{book:t[0]}}),{c(){y(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,o){T(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.book=t[0]),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function gt(t){var e;let n,o,r,s,a,i;document.title=n="Book: "+(null==(e=t[0])?void 0:e.name);const u=[vt,$t],d=[];function f(t,e){return t[0]?0:1}return r=f(t),s=d[r]=u[r](t),{c(){o=j(),s.c(),a=P()},l(t){S('[data-svelte="svelte-1ansdeq"]',document.head).forEach(l),o=D(t),s.l(t),a=P()},m(t,e){c(t,o,e),d[r].m(t,e),c(t,a,e),i=!0},p(t,[e]){var o;(!i||1&e)&&n!==(n="Book: "+(null==(o=t[0])?void 0:o.name))&&(document.title=n);let l=r;r=f(t),r===l?d[r].p(t,e):($(),v(d[l],1,1,(()=>{d[l]=null})),g(),s=d[r],s?s.p(t,e):(s=d[r]=u[r](t),s.c()),k(s,1),s.m(a.parentNode,a))},i(t){i||(k(s),i=!0)},o(t){v(s),i=!1},d(t){t&&l(o),d[r].d(t),t&&l(a)}}}async function kt({page:{params:t}}){return{props:{bookId:t.bookId}}}function bt(t,e,n){let o,r;H(t,A,(t=>n(2,r=t)));let{bookId:s}=e;return t.$$set=t=>{"bookId"in t&&n(1,s=t.bookId)},t.$$.update=()=>{6&t.$$.dirty&&n(0,o=r.byId[s])},[o,s,r]}export default class extends e{constructor(t){super(),n(this,t,bt,gt,o,{bookId:1})}}export{kt as load};
