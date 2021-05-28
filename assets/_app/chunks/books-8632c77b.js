import{Q as t,C as e,R as s,T as n,U as o}from"./vendor-53195a77.js";class r{constructor(n,o,r=5e3){this.initialized=!1,this.saved=!1,this.changeFns=[],this.persist=()=>{this.saved||(t.setItem({key:this.name,value:this.toString()})(),this.saved=!0)},this.name=n,this.store=e(o),this.init(),this.debouncedPersist=s.debounce(this.persist,r,{after:()=>this.saved=!0,before:()=>this.saved=!1})}async init(){try{const e=await t.getItem({key:this.name})();e&&this.store.set(this.fromString(e))}catch(s){console.error(s)}const e=this.changeFns.slice();this.changeFns.length=0,e.forEach((t=>this.store.update((e=>n.change(e,t))))),this.debouncedPersist(),this.initialized=!0}async close(){return await this.persist(),this}get(){return o(this.store)}change(t){return this.initialized?(this.store.update((e=>n.change(e,t))),this.debouncedPersist()):this.changeFns.push(t),this}subscribe(t,e){return this.store.subscribe(t,e)}toString(){return function(t){return t.reduce(((t,e)=>t+e.toString(16).padStart(2,"0")),"")}(n.save(this.get()))}fromString(t){const e=function(t){const e=[];for(let n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));const s=new Uint8Array(e);return s.__binaryDocument=!0,s}(t);return n.load(e)}}var i;(i||(i={})).Text="text";class a extends r{constructor(t){super(`blocks/${t}`,n.from({bookId:t,blocks:new n.Table}))}createBlock(t){const e={type:t,index:0,createdAt:(new Date).toJSON()};var s;return null!==(s=e)&&"object"==typeof s&&s.type===i.Text&&(e.text=new n.Text),this.change((t=>{e.index=t.blocks.rows.reduce(((t,e)=>t<=e.index?e.index+1:t),0),t.blocks.add(e)})),e}updateBlock(t,e){this.change((s=>{const n=s.blocks.byId(t);n&&e(n)}))}}var c;(c||(c={})).Journal="journal";const h=new class extends r{constructor(){super(...arguments),this.blockStores={}}createBook(t,e){this.change((s=>{const o=s.books.add({name:new n.Text(e||(new Date).toDateString()),type:t,createdAt:(new Date).toJSON()}),r=new a(o);this.blockStores[o]=r}))}getBookById(t){const e=this.blockStores[t];if(e)return e;{const e=new a(t);return this.blockStores[t]=e,e}}async unloadBookById(t){const e=this.blockStores[t];return e&&(delete this.blockStores[t],await e.close()),this}}("books",n.from({books:new n.Table}));export{c as B,i as a,h as b};