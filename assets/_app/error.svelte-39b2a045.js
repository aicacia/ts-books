import{S as s,i as r,s as a,e as t,t as e,c as o,a as c,g as n,d as u,f as p,E as l,h as f,k as i,l as d,n as m,G as h}from"./chunks/vendor-979ae52c.js";function k(s){let r,a,i=s[1].stack+"";return{c(){r=t("pre"),a=e(i)},l(s){r=o(s,"PRE",{});var t=c(r);a=n(t,i),t.forEach(u)},m(s,t){p(s,r,t),l(r,a)},p(s,r){2&r&&i!==(i=s[1].stack+"")&&f(a,i)},d(s){s&&u(r)}}}function E(s){let r,a,E,v,g,x,P,$=s[1].message+"",j=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),E=i(),v=t("p"),g=e($),x=i(),j&&j.c(),P=d()},l(t){r=o(t,"H1",{});var e=c(r);a=n(e,s[0]),e.forEach(u),E=m(t),v=o(t,"P",{});var p=c(v);g=n(p,$),p.forEach(u),x=m(t),j&&j.l(t),P=d()},m(s,t){p(s,r,t),l(r,a),p(s,E,t),p(s,v,t),l(v,g),p(s,x,t),j&&j.m(s,t),p(s,P,t)},p(s,[r]){1&r&&f(a,s[0]),2&r&&$!==($=s[1].message+"")&&f(g,$),s[1].stack?j?j.p(s,r):(j=k(s),j.c(),j.m(P.parentNode,P)):j&&(j.d(1),j=null)},i:h,o:h,d(s){s&&u(r),s&&u(E),s&&u(v),s&&u(x),j&&j.d(s),s&&u(P)}}}function v({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,E,a,{status:0,error:1})}}export{v as load};
