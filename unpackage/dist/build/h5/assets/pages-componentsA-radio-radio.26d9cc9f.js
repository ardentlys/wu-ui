var e,a,l,t;import{m as i,k as o,r as d,o as s,c as n,w as r,a as u,p as c,y as m,q as h,l as p,b,t as _,d as f,i as g,e as w,f as C,F as S}from"./index-11e68488.js";import{_ as k}from"./wu-icon.d51d82ec.js";import{r as v}from"./uni-app.es.0596e349.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const D=y({name:"wu-radio",mixins:[i,o,{props:{name:{type:[String,Number,Boolean],default:""},shape:{type:String,default:""},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},iconColor:{type:String,default:""},labelSize:{type:[String,Number],default:""},label:{type:[String,Number],default:""},labelColor:{type:String,default:""},size:{type:[String,Number],default:""},customStyle:{type:Object,default:()=>({})},...null==(a=null==(e=uni.$w)?void 0:e.props)?void 0:a.radio}}],data:()=>({checked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:null,activeColor:null,inactiveColor:null,size:18,modelValue:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}),computed:{elDisabled(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize(){return this.$w.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor(){const e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.checked?this.elInactiveColor:"transparent":this.checked?e:"transparent"},iconClasses(){let e=[];return e.push("wu-radio__icon-wrap--"+this.elShape),this.elDisabled&&e.push("wu-radio__icon-wrap--disabled"),this.checked&&this.elDisabled&&e.push("wu-radio__icon-wrap--disabled--checked"),e},iconWrapStyle(){const e={};return e.backgroundColor=this.checked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.checked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=this.$w.addUnit(this.elSize),e.height=this.$w.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},radioStyle(){const e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&this.$w.error("检测到您将borderBottom设置为true，需要同时将wu-radio-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="ios"===this.$w.os()?"12px":"8px",e.borderBottom="2rpx solid #dadbde"),this.$w.deepMerge(e,this.$w.addStyle(this.customStyle))}},mounted(){this.init()},methods:{init(){this.updateParentData(),this.parent||this.$w.error("wu-radio必须搭配wu-radio-group组件使用"),this.checked=this.name===this.parentData.modelValue},updateParentData(){this.getParentData("wu-radio-group")},iconClickHandler(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},wrapperClickHandler(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},labelClickHandler(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent(){this.checked||(this.$emit("change",this.name),this.$nextTick(()=>{this.$w.formValidate(this,"change")}))},setRadioCheckedStatus(){this.emitEvent(),this.checked=!0,"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}}},[["render",function(e,a,l,t,i,o){const w=v(d("wu-icon"),k),C=f,S=g;return s(),n(C,{class:c(["wu-radio",["wu-radio-label--"+i.parentData.iconPlacement,i.parentData.borderBottom&&"column"===i.parentData.placement&&"wu-border-bottom"]]),onClick:m(o.wrapperClickHandler,["stop"]),style:h([o.radioStyle])},{default:r(()=>[u(C,{class:c(["wu-radio__icon-wrap",o.iconClasses]),onClick:m(o.iconClickHandler,["stop"]),style:h([o.iconWrapStyle])},{default:r(()=>[p(e.$slots,"icon",{},()=>[u(w,{class:"wu-radio__icon-wrap__icon",name:"checkbox-mark",size:o.elIconSize,color:o.elIconColor},null,8,["size","color"])],!0)]),_:3},8,["onClick","class","style"]),p(e.$slots,"default",{},()=>[u(S,{class:"wu-radio__text",onClick:m(o.labelClickHandler,["stop"]),style:h({color:o.elDisabled?o.elInactiveColor:o.elLabelColor,fontSize:o.elLabelSize,lineHeight:o.elLabelSize})},{default:r(()=>[b(_(e.label),1)]),_:1},8,["onClick","style"])],!0)]),_:3},8,["onClick","style","class"])}],["__scopeId","data-v-d4294e63"]]);const z=y({name:"wu-radio-group",mixins:[i,o,{props:{modelValue:{type:[String,Number,Boolean],default:""},disabled:{type:Boolean,default:!1},shape:{type:String,default:"circle"},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#c8c9cc"},name:{type:String,default:""},size:{type:[String,Number],default:18},placement:{type:String,default:"row"},label:{type:[String],default:""},labelColor:{type:[String],default:"#303133"},labelSize:{type:[String,Number],default:14},labelDisabled:{type:Boolean,default:!1},iconColor:{type:String,default:"#ffffff"},iconSize:{type:[String,Number],default:12},borderBottom:{type:Boolean,default:!1},iconPlacement:{type:String,default:"left"},customStyle:{type:Object,default:()=>({})},...null==(t=null==(l=uni.$w)?void 0:l.props)?void 0:t.radioGroup}}],computed:{parentData(){return[this.value,this.modelValue,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass(){return this.bem("radio-group",["placement"])}},watch:{parentData(){this.children.length&&this.children.map(e=>{"function"==typeof e.init&&e.init()})}},data:()=>({}),created(){this.children=[]},methods:{unCheckedOther(e){this.children.map(a=>{e!==a&&(a.checked=!1)});const{name:a}=e;this.$emit("update:modelValue",a),this.$emit("change",a)}}},[["render",function(e,a,l,t,i,o){const d=f;return s(),n(d,{class:c(["wu-radio-group",o.bemClass])},{default:r(()=>[p(e.$slots,"default",{},void 0,!0)]),_:3},8,["class"])}],["__scopeId","data-v-eea14f57"]]);const V=y({data:()=>({radiolist1:[{name:"JavaScript",disabled:!1},{name:"Python",disabled:!1},{name:"Java",disabled:!1},{name:"C++",disabled:!1}],radiovalue1:"JavaScript",radiolist2:[{name:"Windows",disabled:!1},{name:"macOS",disabled:!1},{name:"Harmonyos",disabled:!1},{name:"Android",disabled:!1},{name:"IOS",disabled:!1}],radiovalue2:"Windows",radiolist3:[{name:"Google",disabled:!1},{name:"Bing",disabled:!1},{name:"百度",disabled:!1},{name:"其他",disabled:!1}],radiovalue3:"Google",radiolist4:[{name:"3倍镜",disabled:!1},{name:"4倍镜",disabled:!1},{name:"6倍镜",disabled:!1},{name:"8倍镜",disabled:!1}],radiovalue4:"6倍镜",radiolist5:[{name:"红色",disabled:!1},{name:"绿色",disabled:!1},{name:"蓝色",disabled:!1},{name:"黄色",disabled:!1}],radiovalue5:"绿色",radiolist6:[{name:"阅读",disabled:!1},{name:"运动",disabled:!1},{name:"看电影",disabled:!1},{name:"旅行",disabled:!1}],radiovalue6:"妲己",radiolist7:[{name:"华为",disabled:!1},{name:"阿里巴巴",disabled:!1},{name:"腾讯",disabled:!1},{name:"小米",disabled:!1},{name:"网易",disabled:!1},{name:"字节跳动",disabled:!1}],radiovalue7:"华为"}),watch:{radiovalue1(e,a){console.log("v-model",e)}},methods:{groupChange(e){console.log("groupChange",e)},radioChange(e){console.log("radioChange",e)}}},[["render",function(e,a,l,t,i,o){const c=g,m=v(d("wu-radio"),D),h=v(d("wu-radio-group"),z),p=f;return s(),n(p,{class:"wu-page"},{default:r(()=>[u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("基本案例")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("你最喜欢哪种编程语言？")]),_:1}),u(p,{class:"wu-demo-block__content"},{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue1,"onUpdate:modelValue":a[0]||(a[0]=e=>i.radiovalue1=e),placement:"column",onChange:o.groupChange},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist1,(e,a)=>(s(),n(m,{customStyle:{marginBottom:"8px"},key:a,label:e.name,name:e.name,onChange:o.radioChange},null,8,["label","name","onChange"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1}),u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("自定义形状")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("你通常使用哪种操作系统？")]),_:1}),u(p,{class:"wu-demo-block__content"},{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue2,"onUpdate:modelValue":a[1]||(a[1]=e=>i.radiovalue2=e),placement:"column",shape:"square"},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist2,(e,a)=>(s(),n(m,{customStyle:{marginBottom:"8px"},key:a,label:e.name,name:e.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("是否禁用")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("你最常使用的互联网搜索引擎是？")]),_:1}),u(p,{class:"wu-demo-block__content"},{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue3,"onUpdate:modelValue":a[2]||(a[2]=e=>i.radiovalue3=e),placement:"column"},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist3,(e,a)=>(s(),n(m,{customStyle:{marginBottom:"8px"},key:a,label:e.name,name:e.name,disabled:!a},null,8,["label","name","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("纵向排列")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("狙击枪用哪个倍镜最好？")]),_:1}),u(p,{class:"wu-demo-block__content"},{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue4,"onUpdate:modelValue":a[3]||(a[3]=e=>i.radiovalue4=e),placement:"column",labelDisabled:!0},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist4,(e,a)=>(s(),n(m,{customStyle:{marginBottom:"8px"},key:a,label:e.name,name:e.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("自定义颜色？")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("你比较喜欢下面哪个颜色？")]),_:1}),u(p,{class:"wu-demo-block__content"},{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue5,"onUpdate:modelValue":a[4]||(a[4]=e=>i.radiovalue5=e),placement:"column",activeColor:"#19be6b"},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist5,(e,a)=>(s(),n(m,{customStyle:{marginBottom:"8px"},key:a,label:e.name,name:e.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("横向排列形式？")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("你最喜欢的休闲活动是？")]),_:1}),u(p,{class:"wu-demo-block__content"},{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue6,"onUpdate:modelValue":a[5]||(a[5]=e=>i.radiovalue6=e),placement:"row"},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist6,(e,a)=>(s(),n(m,{customStyle:{marginRight:"16px"},key:a,label:e.name,name:e.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(p,{class:"wu-demo-block"},{default:r(()=>[u(c,{class:"wu-demo-block__title"},{default:r(()=>[b("横向两端排列形式？")]),_:1}),u(c,{class:"wu-block__title"},{default:r(()=>[b("你对哪个科技公司最感兴趣？")]),_:1}),u(p,null,{default:r(()=>[u(p,{class:"wu-page__radio-item"},{default:r(()=>[u(h,{modelValue:i.radiovalue7,"onUpdate:modelValue":a[6]||(a[6]=e=>i.radiovalue7=e),borderBottom:!0,placement:"column",iconPlacement:"right"},{default:r(()=>[(s(!0),w(S,null,C(i.radiolist7,(e,a)=>(s(),n(m,{customStyle:{marginBottom:"16px"},key:a,label:e.name,name:e.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-3eda643d"]]);export{V as default};