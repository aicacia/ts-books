import{S as t,i as e,s as n,e as o,c as r,a as s,d as a,b as l,V as c,f as i,B as u,W as d,u as f,v as h,r as $,l as m,X as p,k as g,n as k,Y as v,E as b,J as x,F as y,N as w,Z as E,D as I,t as S,g as T,h as D,G as B,z as V,_ as L,$ as N,y as O,a0 as _,j,m as C,o as P,w as M,a1 as q,a2 as H,K as z,L as A,M as J,O as U,a3 as F,P as R,H as G}from"../../chunks/vendor-53195a77.js";import{a as K,b as W}from"../../chunks/books-8632c77b.js";import{_ as X}from"../../chunks/preload-helper-9f12a5fd.js";function Y(t,e,n){const o=t.slice();return o[14]=e[n],o[16]=n,o}const Z=t=>({item:2&t,index:2&t}),Q=t=>({item:t[14],index:t[16]});function tt(t){let e,n,m,p=[],g=new Map,k=t[1];const v=t=>t[7](t[14]);for(let o=0;o<k.length;o+=1){let e=Y(t,k,o),n=v(e);g.set(n,p[o]=et(n,e))}return{c(){e=o("ul");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){e=r(t,"UL",{class:!0});var n=s(e);for(let e=0;e<p.length;e+=1)p[e].l(n);n.forEach(a),this.h()},h(){l(e,"class",n=c(t[0])+" svelte-1xt2noz")},m(t,n){i(t,e,n);for(let o=0;o<p.length;o+=1)p[o].m(e,null);m=!0},p(t,o){766&o&&(k=t[1],u(),p=d(p,o,v,1,t,k,g,e,E,et,null,Y),f()),(!m||1&o&&n!==(n=c(t[0])+" svelte-1xt2noz"))&&l(e,"class",n)},i(t){if(!m){for(let t=0;t<k.length;t+=1)h(p[t]);m=!0}},o(t){for(let e=0;e<p.length;e+=1)$(p[e]);m=!1},d(t){t&&a(e);for(let e=0;e<p.length;e+=1)p[e].d()}}}function et(t,e){let n,c,u,d,f,m,p;const E=e[10].default,B=I(E,e,e[9],Q),V=B||function(t){let e,n,l=t[7](t[14])+"";return{c(){e=o("p"),n=S(l)},l(t){e=r(t,"P",{});var o=s(e);n=T(o,l),o.forEach(a)},m(t,o){i(t,e,o),b(e,n)},p(t,e){2&e&&l!==(l=t[7](t[14])+"")&&D(n,l)},d(t){t&&a(e)}}}(e);return{key:t,first:null,c(){n=o("li"),V&&V.c(),c=g(),this.h()},l(t){n=r(t,"LI",{"data-index":!0,"data-id":!0,draggable:!0,class:!0});var e=s(n);V&&V.l(e),c=k(e),e.forEach(a),this.h()},h(){l(n,"data-index",u=e[16]),l(n,"data-id",d=JSON.stringify(e[7](e[14]))),l(n,"draggable","true"),l(n,"class","svelte-1xt2noz"),v(n,"over",e[7](e[14])===e[2]),this.first=n},m(t,o){i(t,n,o),V&&V.m(n,null),b(n,c),f=!0,m||(p=[x(n,"dragstart",e[3]),x(n,"dragover",e[4]),x(n,"dragleave",e[5]),x(n,"drop",e[6])],m=!0)},p(t,o){e=t,B?B.p&&(!f||514&o)&&y(B,E,e,e[9],o,Z,Q):V&&V.p&&2&o&&V.p(e,o),(!f||2&o&&u!==(u=e[16]))&&l(n,"data-index",u),(!f||2&o&&d!==(d=JSON.stringify(e[7](e[14]))))&&l(n,"data-id",d),134&o&&v(n,"over",e[7](e[14])===e[2])},i(t){f||(h(V,t),f=!0)},o(t){$(V,t),f=!1},d(t){t&&a(n),V&&V.d(t),m=!1,w(p)}}}function nt(t){let e,n,o=t[1]&&t[1].length&&tt(t);return{c(){o&&o.c(),e=m()},l(t){o&&o.l(t),e=m()},m(t,r){o&&o.m(t,r),i(t,e,r),n=!0},p(t,[n]){t[1]&&t[1].length?o?(o.p(t,n),2&n&&h(o,1)):(o=tt(t),o.c(),h(o,1),o.m(e.parentNode,e)):o&&(u(),$(o,1,1,(()=>{o=null})),f())},i(t){n||(h(o),n=!0)},o(t){$(o),n=!1},d(t){o&&o.d(t),t&&a(e)}}}function ot(t,e,n){let{$$slots:o={},$$scope:r}=e,s=!1;const a=t=>t.dataset&&t.dataset.index?t.dataset:a(t.parentNode),l=p(),c=({from:t,to:e})=>{let n=[...u];n[t]=[n[e],n[e]=n[t]][0],l("sort",n)};let{klass:i}=e,{list:u}=e,{key:d}=e;return t.$$set=t=>{"klass"in t&&n(0,i=t.klass),"list"in t&&n(1,u=t.list),"key"in t&&n(8,d=t.key),"$$scope"in t&&n(9,r=t.$$scope)},[i,u,s,t=>{t.dataTransfer.setData("source",t.target.dataset.index)},t=>{t.preventDefault();let e=a(t.target);s!==e.id&&n(2,s=JSON.parse(e.id))},t=>{let e=a(t.target);s===e.id&&n(2,s=!1)},t=>{n(2,s=!1),t.preventDefault();let e=a(t.target),o=t.dataTransfer.getData("source"),r=e.index;c({from:o,to:r})},t=>d?t[d]:t,d,r,o]}class rt extends t{constructor(t){super(),e(this,t,ot,nt,n,{klass:0,list:1,key:8})}}function st(t){let e;return{c(){e=o("div")},l(t){e=r(t,"DIV",{}),s(e).forEach(a)},m(n,o){i(n,e,o),t[5](e)},p:B,i:B,o:B,d(n){n&&a(e),t[5](null)}}}function at(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function a(t){try{c(o.next(t))}catch(e){s(e)}}function l(t){try{c(o.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}c((o=o.apply(t,e||[])).next())}))};let r,{text:s}=e,{multiline:a=!0}=e;const l=p();let c,i;return V((()=>o(void 0,void 0,void 0,(function*(){const{default:t}=yield X((()=>import("../../chunks/quill-9628e63a.js").then((function(t){return t.q}))),["/_app/chunks/quill-9628e63a.js","/_app/chunks/vendor-53195a77.js"]);n(4,c=new t(i,{modules:{toolbar:!1},theme:"snow"})),s&&c.setText(s),c.on("text-change",(function(t,e,n){"user"===n&&l("textchange",t)})),i.addEventListener("keydown",(function(t){if("Backspace"===t.key){const e=c.getText();""!==e&&"\n"!==e&&t.stopPropagation()}}),{capture:!0})})))),t.$$set=t=>{"text"in t&&n(1,s=t.text),"multiline"in t&&n(2,a=t.multiline)},t.$$.update=()=>{26&t.$$.dirty&&s!==r&&c&&(n(3,r=s),c.setText(s))},[i,s,a,r,c,function(t){L[t?"unshift":"push"]((()=>{i=t,n(0,i)}))}]}class lt extends t{constructor(t){super(),e(this,t,at,st,n,{text:1,multiline:2})}}function ct(t){let e,n=N.parse(t[0])+"";return{c(){e=o("div"),this.h()},l(t){e=r(t,"DIV",{class:!0}),s(e).forEach(a),this.h()},h(){l(e,"class","markdown")},m(o,r){i(o,e,r),e.innerHTML=n,t[2](e)},p(t,[o]){1&o&&n!==(n=N.parse(t[0])+"")&&(e.innerHTML=n)},i:B,o:B,d(n){n&&a(e),t[2](null)}}}function it(t,e,n){let o,{markdown:r}=e;const s={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1};function a(){o&&window.renderMathInElement(o,s)}return V(a),O((()=>{a()})),t.$$set=t=>{"markdown"in t&&n(0,r=t.markdown)},[r,o,function(t){L[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}class ut extends t{constructor(t){super(),e(this,t,it,ct,n,{markdown:0})}}function dt(t,e){let n=0;for(const o of e)if(o.retain&&(n+=o.retain),"string"==typeof o.insert){const e=o.insert.split("");t.insertAt(n,...e),n+=e.length}else o.delete&&t.deleteAt(n,o.delete)}function ft(t){let e,n,c;return{c(){e=o("div"),n=o("h3"),c=S("Click to Edit"),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=s(e);n=r(o,"H3",{});var l=s(n);c=T(l,"Click to Edit"),l.forEach(a),o.forEach(a),this.h()},h(){l(e,"class","d-flex align-items-center justify-content-center")},m(t,o){i(t,e,o),b(e,n),b(n,c)},p:B,i:B,o:B,d(t){t&&a(e)}}}function ht(t){let e,n;return e=new ut({props:{markdown:t[1].toString()}}),{c(){j(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.markdown=t[1].toString()),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function $t(t){let e,n,c,u,d,f,m;return c=new lt({props:{text:t[1]}}),c.$on("textchange",t[3]),f=new ut({props:{markdown:t[2]}}),{c(){e=o("div"),n=o("div"),j(c.$$.fragment),u=g(),d=o("div"),j(f.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=s(e);n=r(o,"DIV",{class:!0});var l=s(n);C(c.$$.fragment,l),l.forEach(a),u=k(o),d=r(o,"DIV",{class:!0});var i=s(d);C(f.$$.fragment,i),i.forEach(a),o.forEach(a),this.h()},h(){l(n,"class","col-6"),l(d,"class","col-6"),l(e,"class","row")},m(t,o){i(t,e,o),b(e,n),P(c,n,null),b(e,u),b(e,d),P(f,d,null),m=!0},p(t,e){const n={};2&e&&(n.text=t[1]),c.$set(n);const o={};4&e&&(o.markdown=t[2]),f.$set(o)},i(t){m||(h(c.$$.fragment,t),h(f.$$.fragment,t),m=!0)},o(t){$(c.$$.fragment,t),$(f.$$.fragment,t),m=!1},d(t){t&&a(e),M(c),M(f)}}}function mt(t){let e,n,l,c,d;const m=[$t,ht,ft],p=[];function g(t,e){return t[0]?0:(2&e&&(n=!!t[1].trim()),n?1:2)}return l=g(t,-1),c=p[l]=m[l](t),{c(){e=o("div"),c.c()},l(t){e=r(t,"DIV",{});var n=s(e);c.l(n),n.forEach(a)},m(t,n){i(t,e,n),p[l].m(e,null),d=!0},p(t,[n]){let o=l;l=g(t,n),l===o?p[l].p(t,n):(u(),$(p[o],1,1,(()=>{p[o]=null})),f(),c=p[l],c?c.p(t,n):(c=p[l]=m[l](t),c.c()),h(c,1),c.m(e,null))},i(t){d||(h(c),d=!0)},o(t){$(c),d=!1},d(t){t&&a(e),p[l].d()}}}function pt(t,e,n){let o,{blockStore:r}=e,{block:s}=e,{edit:a}=e,l=s.text.toString(),c=l;return _((()=>{a!==o&&(o=a,n(1,l=s.text.toString()),n(2,c=l))})),V((()=>{window.addEventListener("click",(()=>n(0,a=!1)))})),t.$$set=t=>{"blockStore"in t&&n(4,r=t.blockStore),"block"in t&&n(5,s=t.block),"edit"in t&&n(0,a=t.edit)},[a,l,c,function(t){r.updateBlock(s.id,(e=>{dt(e.text,t.detail.ops),n(2,c=e.text.toString())}))},r,s]}class gt extends t{constructor(t){super(),e(this,t,pt,mt,n,{blockStore:4,block:5,edit:0})}}function kt(t){let e,n;return e=new gt({props:{blockStore:t[0],block:t[1],edit:t[2]}}),{c(){j(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.blockStore=t[0]),2&n&&(o.block=t[1]),4&n&&(o.edit=t[2]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function vt(t){let e,n,l,c,d=t[1].type===K.Text&&kt(t);return{c(){e=o("div"),d&&d.c()},l(t){e=r(t,"DIV",{});var n=s(e);d&&d.l(n),n.forEach(a)},m(o,r){i(o,e,r),d&&d.m(e,null),n=!0,l||(c=x(e,"click",q(t[3])),l=!0)},p(t,[n]){t[1].type===K.Text?d?(d.p(t,n),2&n&&h(d,1)):(d=kt(t),d.c(),h(d,1),d.m(e,null)):d&&(u(),$(d,1,1,(()=>{d=null})),f())},i(t){n||(h(d),n=!0)},o(t){$(d),n=!1},d(t){t&&a(e),d&&d.d(),l=!1,c()}}}function bt(t,e,n){let o,{blockStore:r}=e,{block:s}=e;function a(){n(2,o=!1)}H((()=>{window.removeEventListener("click",a)}));return t.$$set=t=>{"blockStore"in t&&n(0,r=t.blockStore),"block"in t&&n(1,s=t.block)},[r,s,o,()=>n(2,o=!0)]}class xt extends t{constructor(t){super(),e(this,t,bt,vt,n,{blockStore:0,block:1})}}function yt(t){let e,n=t[0].toString()+"";return{c(){e=S(n)},l(t){e=T(t,n)},m(t,n){i(t,e,n)},p(t,o){1&o&&n!==(n=t[0].toString()+"")&&D(e,n)},i:B,o:B,d(t){t&&a(e)}}}function wt(t){let e,n;return e=new lt({props:{text:t[1],multiline:!1}}),e.$on("textchange",t[3]),{c(){j(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.text=t[1]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Et(t){let e,n,l,c,d,m;const p=[wt,yt],g=[];function k(t,e){return t[2]?0:1}return n=k(t),l=g[n]=p[n](t),{c(){e=o("div"),l.c()},l(t){e=r(t,"DIV",{});var n=s(e);l.l(n),n.forEach(a)},m(o,r){i(o,e,r),g[n].m(e,null),c=!0,d||(m=x(e,"click",q(t[4])),d=!0)},p(t,[o]){let r=n;n=k(t),n===r?g[n].p(t,o):(u(),$(g[r],1,1,(()=>{g[r]=null})),f(),l=g[n],l?l.p(t,o):(l=g[n]=p[n](t),l.c()),h(l,1),l.m(e,null))},i(t){c||(h(l),c=!0)},o(t){$(l),c=!1},d(t){t&&a(e),g[n].d(),d=!1,m()}}}function It(t,e,n){let{text:o}=e;const r=p();let s,a,l=o.toString();function c(){n(2,s=!1)}_((()=>{s!==a&&(a=s,n(1,l=o.toString()))})),V((()=>{window.addEventListener("click",c)})),H((()=>{window.removeEventListener("click",c)}));return t.$$set=t=>{"text"in t&&n(0,o=t.text)},[o,l,s,function(t){r("textchange",t.detail)},()=>n(2,s=!0)]}class St extends t{constructor(t){super(),e(this,t,It,Et,n,{text:0})}}function Tt(t,e,n){const o=t.slice();return o[10]=e[n][0],o[11]=e[n][1],o}function Dt(t){let e,n,c,u,d,f,m,p,v,y,w,E;return p=new xt({props:{blockStore:t[3],block:t[14]}}),{c(){e=o("li"),n=o("div"),c=o("button"),u=o("i"),d=g(),f=o("button"),m=g(),j(p.$$.fragment),this.h()},l(t){e=r(t,"LI",{class:!0});var o=s(e);n=r(o,"DIV",{class:!0});var l=s(n);c=r(l,"BUTTON",{type:!0,class:!0});var i=s(c);u=r(i,"I",{class:!0}),s(u).forEach(a),i.forEach(a),d=k(l),f=r(l,"BUTTON",{type:!0,class:!0,"aria-label":!0}),s(f).forEach(a),l.forEach(a),m=k(o),C(p.$$.fragment,o),o.forEach(a),this.h()},h(){l(u,"class","bi bi-arrows-move"),l(c,"type","button"),l(c,"class","btn btn-primary drag-sort-btn"),l(f,"type","button"),l(f,"class","btn-close"),l(f,"aria-label","Close"),l(n,"class","d-flex justify-content-between align-items-start"),l(e,"class",v="list-group-item "+t[0].type.toLowerCase())},m(o,r){i(o,e,r),b(e,n),b(n,c),b(c,u),b(n,d),b(n,f),b(e,m),P(p,e,null),y=!0,w||(E=x(f,"click",(function(){F(t[6](t[14]))&&t[6](t[14]).apply(this,arguments)})),w=!0)},p(n,o){t=n;const r={};16384&o&&(r.block=t[14]),p.$set(r),(!y||1&o&&v!==(v="list-group-item "+t[0].type.toLowerCase()))&&l(e,"class",v)},i(t){y||(h(p.$$.fragment,t),y=!0)},o(t){$(p.$$.fragment,t),y=!1},d(t){t&&a(e),M(p),w=!1,E()}}}function Bt(t){let e,n,l=t[10]+"";return{c(){e=o("option"),n=S(l),this.h()},l(t){e=r(t,"OPTION",{value:!0});var o=s(e);n=T(o,l),o.forEach(a),this.h()},h(){e.__value=t[11],e.value=e.__value},m(t,o){i(t,e,o),b(e,n)},p:B,d(t){t&&a(e)}}}function Vt(t){let e,n,c,u,d,f,m,p,v,y,E,I,D,B,V,L;n=new St({props:{text:t[0].name}}),n.$on("textchange",t[5]),u=new rt({props:{list:t[2],key:"id",klass:"mt-4 list-group list-group-flush",$$slots:{default:[Dt,({item:t})=>({14:t}),({item:t})=>t?16384:0]},$$scope:{ctx:t}}}),u.$on("sort",t[7]);let N=Object.entries(K),O=[];for(let o=0;o<N.length;o+=1)O[o]=Bt(Tt(t,N,o));return{c(){e=o("h1"),j(n.$$.fragment),c=g(),j(u.$$.fragment),d=g(),f=o("div"),m=o("form"),p=o("div"),v=o("select");for(let t=0;t<O.length;t+=1)O[t].c();y=g(),E=o("div"),I=o("button"),D=S("Create"),this.h()},l(t){e=r(t,"H1",{});var o=s(e);C(n.$$.fragment,o),o.forEach(a),c=k(t),C(u.$$.fragment,t),d=k(t),f=r(t,"DIV",{class:!0});var l=s(f);m=r(l,"FORM",{action:!0,class:!0});var i=s(m);p=r(i,"DIV",{class:!0});var h=s(p);v=r(h,"SELECT",{class:!0,placeholder:!0,"aria-label":!0,required:!0});var $=s(v);for(let e=0;e<O.length;e+=1)O[e].l($);$.forEach(a),h.forEach(a),y=k(i),E=r(i,"DIV",{class:!0});var g=s(E);I=r(g,"BUTTON",{type:!0,class:!0,"aria-label":!0});var b=s(I);D=T(b,"Create"),b.forEach(a),g.forEach(a),i.forEach(a),l.forEach(a),this.h()},h(){l(v,"class","form-select"),l(v,"placeholder","New Block Type"),l(v,"aria-label","New Block Type"),v.required=!0,void 0===t[1]&&z((()=>t[9].call(v))),l(p,"class","col-auto"),l(I,"type","submit"),l(I,"class","btn btn-primary"),l(I,"aria-label","Create Block"),l(E,"class","col-auto"),l(m,"action","javascript:void(0);"),l(m,"class","row mt-4"),l(f,"class","d-flex align-items-center justify-content-center")},m(o,r){i(o,e,r),P(n,e,null),i(o,c,r),P(u,o,r),i(o,d,r),i(o,f,r),b(f,m),b(m,p),b(p,v);for(let t=0;t<O.length;t+=1)O[t].m(v,null);A(v,t[1]),b(m,y),b(m,E),b(E,I),b(I,D),B=!0,V||(L=[x(v,"change",t[9]),x(I,"click",t[4])],V=!0)},p(t,[e]){const o={};1&e&&(o.text=t[0].name),n.$set(o);const r={};if(4&e&&(r.list=t[2]),49153&e&&(r.$$scope={dirty:e,ctx:t}),u.$set(r),0&e){let n;for(N=Object.entries(K),n=0;n<N.length;n+=1){const o=Tt(t,N,n);O[n]?O[n].p(o,e):(O[n]=Bt(o),O[n].c(),O[n].m(v,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=N.length}2&e&&A(v,t[1])},i(t){B||(h(n.$$.fragment,t),h(u.$$.fragment,t),B=!0)},o(t){$(n.$$.fragment,t),$(u.$$.fragment,t),B=!1},d(t){t&&a(e),M(n),t&&a(c),M(u,t),t&&a(d),t&&a(f),J(O,t),V=!1,w(L)}}}function Lt(t,e){return t.index-e.index}function Nt(t,e,n){let o,r,{book:s}=e,a=K.Text,l=W.getBookById(s.id);return U(t,l,(t=>n(8,r=t))),H((()=>{W.unloadBookById(s.id)})),t.$$set=t=>{"book"in t&&n(0,s=t.book)},t.$$.update=()=>{256&t.$$.dirty&&n(2,o=r.blocks.rows.sort(Lt))},[s,a,o,l,function(){l.createBlock(a)},function(t){W.change((e=>{dt(e.books.byId(s.id).name,t.detail.ops)}))},function(t){return function(){W.getBookById(s.id).change((e=>{e.blocks.remove(t.id)}))}},function(t){l.change((e=>{let n=0;t.detail.map((t=>t.id)).forEach((t=>{const o=e.blocks.byId(t);o&&(o.index=n++)}))}))},r,function(){a=R(this),n(1,a)}]}class Ot extends t{constructor(t){super(),e(this,t,Nt,Vt,n,{book:0})}}function _t(t){let e,n;return{c(){e=o("div"),n=o("span"),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=s(e);n=r(o,"SPAN",{class:!0,role:!0,"aria-hidden":!0}),s(n).forEach(a),o.forEach(a),this.h()},h(){l(n,"class","spinner-border spinner-border-sm"),l(n,"role","status"),l(n,"aria-hidden","true"),l(e,"class","d-flex align-items-center justify-content-center")},m(t,o){i(t,e,o),b(e,n)},p:B,i:B,o:B,d(t){t&&a(e)}}}function jt(t){let e,n;return e=new Ot({props:{book:t[0]}}),{c(){j(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.book=t[0]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Ct(t){var e;let n,o,r,s,l,c;document.title=n="Book: "+(null==(e=t[0])?void 0:e.name);const d=[jt,_t],p=[];function v(t,e){return t[0]?0:1}return r=v(t),s=p[r]=d[r](t),{c(){o=g(),s.c(),l=m()},l(t){G('[data-svelte="svelte-1ansdeq"]',document.head).forEach(a),o=k(t),s.l(t),l=m()},m(t,e){i(t,o,e),p[r].m(t,e),i(t,l,e),c=!0},p(t,[e]){var o;(!c||1&e)&&n!==(n="Book: "+(null==(o=t[0])?void 0:o.name))&&(document.title=n);let a=r;r=v(t),r===a?p[r].p(t,e):(u(),$(p[a],1,1,(()=>{p[a]=null})),f(),s=p[r],s?s.p(t,e):(s=p[r]=d[r](t),s.c()),h(s,1),s.m(l.parentNode,l))},i(t){c||(h(s),c=!0)},o(t){$(s),c=!1},d(t){t&&a(o),p[r].d(t),t&&a(l)}}}async function Pt({page:{params:t}}){return{props:{bookId:t.bookId}}}function Mt(t,e,n){let o,r;U(t,W,(t=>n(2,r=t)));let{bookId:s}=e;return t.$$set=t=>{"bookId"in t&&n(1,s=t.bookId)},t.$$.update=()=>{6&t.$$.dirty&&n(0,o=r.books.byId(s))},[o,s,r]}export default class extends t{constructor(t){super(),e(this,t,Mt,Ct,n,{bookId:1})}}export{Pt as load};
