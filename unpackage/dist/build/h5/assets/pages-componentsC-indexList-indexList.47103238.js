import{o as e,c as s,w as t,h as i,a,b as u,e as l,f as n,F as o,i as r,d as m,t as _,g as c}from"./index-11e68488.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const p=()=>{const e=[],s="A".charCodeAt(0);e.push("↑"),e.push("☆");for(let t=0;t<26;t++)e.push(String.fromCharCode(s+t));return e.push("#"),e};const f=d({data:()=>({indexList:p(),urls:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"],names:["勇往无敌","疯狂的迪飙","磊爱可","梦幻梦幻梦","枫中飘瓢","飞翔天使","曾经第一","追风幻影族长","麦小姐","胡格罗雅","Red磊磊","乐乐立立","青龙爆风","跑跑卡叮车","山里狼","supersonic超"]}),computed:{itemArr(){return this.indexList.map(e=>{const s=[];for(let t=0;t<10;t++)s.push({name:this.names[uni.$u.random(0,this.names.length-1)],url:this.urls[uni.$u.random(0,this.urls.length-1)]});return s})}}},[["render",function(d,p,f,h,v,w){const g=i("u-avatar"),b=r,x=m,j=i("u-line"),z=i("u-index-anchor"),C=c,q=i("u-index-item"),L=i("u-index-list");return e(),s(L,{indexList:v.indexList},{default:t(()=>[a(x,{slot:"header",class:"list"},{default:t(()=>[a(x,{class:"list__item"},{default:t(()=>[a(g,{shape:"square",size:"35",icon:"man-add-fill",fontSize:"26",randomBgColor:""}),a(b,{class:"list__item__user-name"},{default:t(()=>[u("新的朋友")]),_:1})]),_:1}),a(j),a(x,{class:"list__item"},{default:t(()=>[a(g,{shape:"square",size:"35",icon:"tags-fill",fontSize:"26",randomBgColor:""}),a(b,{class:"list__item__user-name"},{default:t(()=>[u("标签")]),_:1})]),_:1}),a(j),a(x,{class:"list__item"},{default:t(()=>[a(g,{shape:"square",size:"35",icon:"chrome-circle-fill",fontSize:"26",randomBgColor:""}),a(b,{class:"list__item__user-name"},{default:t(()=>[u("朋友圈")]),_:1})]),_:1}),a(j),a(x,{class:"list__item"},{default:t(()=>[a(g,{shape:"square",size:"35",icon:"qq-fill",fontSize:"26",randomBgColor:""}),a(b,{class:"list__item__user-name"},{default:t(()=>[u("QQ")]),_:1})]),_:1}),a(j)]),_:1}),(e(!0),l(o,null,n(w.itemArr,(i,r)=>(e(),s(q,{key:r},{default:t(()=>[a(z,{text:v.indexList[r]},null,8,["text"]),(e(!0),l(o,null,n(i,(i,l)=>(e(),s(x,{class:"list",key:l},{default:t(()=>[a(x,{class:"list__item"},{default:t(()=>[a(C,{class:"list__item__avatar",src:i.url},null,8,["src"]),a(b,{class:"list__item__user-name"},{default:t(()=>[u(_(i.name),1)]),_:2},1024)]),_:2},1024),a(j)]),_:2},1024))),128))]),_:2},1024))),128)),a(x,{slot:"footer",class:"u-safe-area-inset--bottom"},{default:t(()=>[a(b,{class:"list__footer"},{default:t(()=>[u("共305位好友")]),_:1})]),_:1})]),_:1},8,["indexList"])}],["__scopeId","data-v-54b986bf"]]);export{f as default};