import{o as e,c as t,w as a,d as l,a as o,b as c,i,h as n,g as u}from"./index-11e68488.js";import{_ as s}from"./_plugin-vue_export-helper.1b428a4d.js";const _=s({data:()=>({value1:0,value2:1,value3:"play-right",value4:0,value5:0,value6:0,value7:3}),onLoad(){},methods:{change5(e){if(1===e)return uni.$u.toast("请您先登录");this.value5=e},change1(e){this.value1=e,console.log("change1",e)},click1(e){console.log("click1",e)}}},[["render",function(s,_,d,h,p,g){const m=i,v=n("u-tabbar-item"),r=n("u-tabbar"),f=l,x=u,w=n("u-gap");return e(),t(f,{class:"wu-page"},{default:a(()=>[o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("基础功能")]),_:1}),o(r,{value:p.value1,onChange:g.change1,fixed:!1,placeholder:!1,safeAreaInsetBottom:!1},{default:a(()=>[o(v,{text:"首页",icon:"home",onClick:g.click1},null,8,["onClick"]),o(v,{text:"放映厅",icon:"photo",onClick:g.click1},null,8,["onClick"]),o(v,{text:"直播",icon:"play-right",onClick:g.click1},null,8,["onClick"]),o(v,{text:"我的",icon:"account",onClick:g.click1},null,8,["onClick"])]),_:1},8,["value","onChange"])]),_:1}),o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("显示徽标")]),_:1}),o(r,{value:p.value2,placeholder:!1,onChange:_[0]||(_[0]=e=>p.value2=e),fixed:!1,safeAreaInsetBottom:!1},{default:a(()=>[o(v,{text:"首页",icon:"home",dot:""}),o(v,{text:"放映厅",icon:"photo",badge:"3"}),o(v,{text:"直播",icon:"play-right"}),o(v,{text:"我的",icon:"account"})]),_:1},8,["value"])]),_:1}),o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("匹配标签的名称")]),_:1}),o(r,{placeholder:!1,value:p.value3,onChange:_[1]||(_[1]=e=>p.value3=e),fixed:!1,safeAreaInsetBottom:!1},{default:a(()=>[o(v,{text:"首页",icon:"home",name:"home"}),o(v,{text:"放映厅",icon:"photo",name:"photo"}),o(v,{text:"直播",icon:"play-right",name:"play-right"}),o(v,{text:"我的",name:"account",icon:"account"})]),_:1},8,["value"])]),_:1}),o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("自定义图标/颜色")]),_:1}),o(r,{value:p.value4,onChange:_[2]||(_[2]=e=>p.value4=e),fixed:!1,placeholder:!1,activeColor:"#d81e06",safeAreaInsetBottom:!1},{default:a(()=>[o(v,{text:"首页"},{default:a(()=>[o(x,{class:"wu-page__item__slot-icon",slot:"active-icon",src:"https://cdn.uviewui.com/uview/common/bell-selected.png"}),o(x,{class:"wu-page__item__slot-icon",slot:"inactive-icon",src:"https://cdn.uviewui.com/uview/common/bell.png"})]),_:1}),o(v,{text:"放映厅",icon:"photo"}),o(v,{text:"直播",icon:"play-right"}),o(v,{text:"我的",icon:"account"})]),_:1},8,["value"])]),_:1}),o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("拦截切换事件(点击第二个标签)")]),_:1}),o(r,{value:p.value5,fixed:!1,onChange:g.change5,safeAreaInsetBottom:!1,placeholder:!1},{default:a(()=>[o(v,{text:"首页",icon:"home"}),o(v,{text:"放映厅",icon:"photo"}),o(v,{text:"直播",icon:"play-right"}),o(v,{text:"我的",icon:"account"})]),_:1},8,["value","onChange"])]),_:1}),o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("去除上边框")]),_:1}),o(r,{value:p.value7,placeholder:!1,border:!1,onChange:_[3]||(_[3]=e=>p.value7=e),fixed:!1,safeAreaInsetBottom:!1},{default:a(()=>[o(v,{text:"首页",icon:"home"}),o(v,{text:"放映厅",icon:"photo"}),o(v,{text:"直播",icon:"play-right"}),o(v,{text:"我的",icon:"account"})]),_:1},8,["value"])]),_:1}),o(f,{class:"wu-page__item"},{default:a(()=>[o(m,{class:"wu-page__item__title"},{default:a(()=>[c("固定在底部(固定在屏幕最下方)")]),_:1}),o(w,{height:"150"}),o(r,{value:p.value6,onChange:_[4]||(_[4]=e=>p.value6=e),fixed:!0,placeholder:!0,safeAreaInsetBottom:!0},{default:a(()=>[o(v,{text:"首页",icon:"home"}),o(v,{text:"放映厅",icon:"photo"}),o(v,{text:"直播",icon:"play-right"}),o(v,{text:"我的",icon:"account"})]),_:1},8,["value"])]),_:1})]),_:1})}],["__scopeId","data-v-dd02d0e6"]]);export{_ as default};