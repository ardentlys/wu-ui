var e,t;import{m as s,k as i,K as n,L as a,M as h,o as r,c as u,d as c}from"./index-11e68488.js";import{_ as o}from"./_plugin-vue_export-helper.1b428a4d.js";const m=o({name:"wu-code",mixins:[s,i,{props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取\t"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""},...null==(t=null==(e=uni.$w)?void 0:e.props)?void 0:t.code}}],data(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler(e){this.secNum=e}}},methods:{checkKeepRunning(){let e=Number(n(this.uniqueKey+"_$wCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);let t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,a(this.uniqueKey+"_$wCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start(){this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval(()=>{--this.secNum?this.changeEvent(this.changeText.replace(/x|X/,this.secNum)):(clearInterval(this.timer),this.timer=null,this.changeEvent(this.endText),this.secNum=this.seconds,this.$emit("end"),this.canGetCode=!0)},1e3),this.setTimeToStorage()},reset(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent(e){this.$emit("change",e)},setTimeToStorage(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){let e=Math.floor(+new Date/1e3);h({key:this.uniqueKey+"_$wCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}},[["render",function(e,t,s,i,n,a){const h=c;return r(),u(h,{class:"wu-code"})}],["__scopeId","data-v-03df3a20"]]);export{m as _};