import{S as a,i as s,s as t,e,t as l,k as r,c as o,a as c,g as n,d as i,n as h,b as f,f as u,G as d,h as m,K as p,L as b,I as v,M as g,N as k,O as E,j as $,J as w,m as y,o as N,v as x,r as B,w as I}from"../../chunks/vendor-60c255d9.js";import{b as j,c as U}from"../../chunks/books-4641d48a.js";function q(a,s,t){const e=a.slice();return e[4]=s[t],e}function D(a){let s,t,p,b,v,g,k,E,$,w=a[4].name+"";return{c(){s=e("li"),t=e("div"),p=e("h3"),b=l(w),v=r(),g=e("a"),k=l("Edit"),$=r(),this.h()},l(a){s=o(a,"LI",{class:!0});var e=c(s);t=o(e,"DIV",{class:!0});var l=c(t);p=o(l,"H3",{class:!0});var r=c(p);b=n(r,w),r.forEach(i),l.forEach(i),v=h(e),g=o(e,"A",{role:!0,class:!0,"aria-label":!0,href:!0});var f=c(g);k=n(f,"Edit"),f.forEach(i),$=h(e),e.forEach(i),this.h()},h(){f(p,"class","fw-bold"),f(t,"class","ms-2 me-auto"),f(g,"role","button"),f(g,"class","btn btn-primary"),f(g,"aria-label","Update"),f(g,"href",E=`/books/${a[4].id}`),f(s,"class","list-group-item d-flex justify-content-between align-items-start")},m(a,e){u(a,s,e),d(s,t),d(t,p),d(p,b),d(s,v),d(s,g),d(g,k),d(s,$)},p(a,s){2&s&&w!==(w=a[4].name+"")&&m(b,w),2&s&&E!==(E=`/books/${a[4].id}`)&&f(g,"href",E)},d(a){a&&i(s)}}}function L(a){let s,t,m,E,$,w,y,N,x,B,I,j=a[1].table.rows,U=[];for(let e=0;e<j.length;e+=1)U[e]=D(q(a,j,e));return{c(){s=e("form"),t=e("div"),m=e("input"),E=r(),$=e("div"),w=e("button"),y=l("Create Book"),N=r(),x=e("ul");for(let a=0;a<U.length;a+=1)U[a].c();this.h()},l(a){s=o(a,"FORM",{action:!0,class:!0});var e=c(s);t=o(e,"DIV",{class:!0});var l=c(t);m=o(l,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,required:!0}),l.forEach(i),E=h(e),$=o(e,"DIV",{class:!0});var r=c($);w=o(r,"BUTTON",{type:!0,class:!0,"aria-label":!0});var f=c(w);y=n(f,"Create Book"),f.forEach(i),r.forEach(i),e.forEach(i),N=h(a),x=o(a,"UL",{class:!0});var u=c(x);for(let s=0;s<U.length;s+=1)U[s].l(u);u.forEach(i),this.h()},h(){f(m,"type","text"),f(m,"class","form-control"),f(m,"placeholder","New Book Name"),f(m,"aria-label","New Book Name"),m.required=!0,f(t,"class","col-auto"),f(w,"type","submit"),f(w,"class","btn btn-primary"),f(w,"aria-label","Update"),f($,"class","col-auto"),f(s,"action","javascript:void(0);"),f(s,"class","row mt-4"),f(x,"class","list-group mt-4")},m(e,l){u(e,s,l),d(s,t),d(t,m),p(m,a[0]),d(s,E),d(s,$),d($,w),d(w,y),u(e,N,l),u(e,x,l);for(let a=0;a<U.length;a+=1)U[a].m(x,null);B||(I=[b(m,"input",a[3]),b(w,"click",a[2])],B=!0)},p(a,[s]){if(1&s&&m.value!==a[0]&&p(m,a[0]),2&s){let t;for(j=a[1].table.rows,t=0;t<j.length;t+=1){const e=q(a,j,t);U[t]?U[t].p(e,s):(U[t]=D(e),U[t].c(),U[t].m(x,null))}for(;t<U.length;t+=1)U[t].d(1);U.length=j.length}},i:v,o:v,d(a){a&&i(s),a&&i(N),a&&i(x),g(U,a),B=!1,k(I)}}}function O(a,s,t){let e,l;return E(a,j,(a=>t(1,e=a))),[l,e,function(){U(l)},function(){l=this.value,t(0,l)}]}class T extends a{constructor(a){super(),s(this,a,O,L,t,{})}}function V(a){let s,t,e;return t=new T({}),{c(){s=r(),$(t.$$.fragment),this.h()},l(a){w('[data-svelte="svelte-gx7tqy"]',document.head).forEach(i),s=h(a),y(t.$$.fragment,a),this.h()},h(){document.title="Books"},m(a,l){u(a,s,l),N(t,a,l),e=!0},p:v,i(a){e||(x(t.$$.fragment,a),e=!0)},o(a){B(t.$$.fragment,a),e=!1},d(a){a&&i(s),I(t,a)}}}export default class extends a{constructor(a){super(),s(this,a,null,V,t,{})}}
