import{N as e,O as t,P as a,C as n,Q as s,R as c}from"./vendor-4bd301cf.js";let o=null;const u=[];function i(t,i,r=5e3){const l=n(s.from(i)),f=[];const b=c.debounce((async function(){await e.setItem({key:t,value:s.save(a(l))})()}),r);function d(e){l.update((t=>s.change(t,e))),b()}return async function(){const a=await new Promise((e=>o?e(o):u.push(e))),n=await e.getItem({key:t})();n&&l.set(s.load(n,a)),f.forEach((e=>e())),f.length=0}(),{subscribe:l.subscribe,get:()=>a(l),change:function(e){f.length?f.push((()=>{d(e)})):d(e)}}}!async function(){let a=await e.getItem({key:"actor_id"})();a||(a=t.uuid(),await e.setItem({key:"actor_id",value:a})),o=a,u.forEach((e=>e(a))),u.length=0}();const r=i("books",{table:new t.Table});function l(e){let a;return r.change((({table:n})=>{a=n.add({name:new t.Text(e)})})),a}export{r as b,l as c,i as p};