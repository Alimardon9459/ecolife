"use strict";(self["webpackChunkecolife"]=self["webpackChunkecolife"]||[]).push([[865],{8893:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var s=t(9835);const o={class:"bg-grey-3"};function l(e,a,t,l,i,r){const n=(0,s.up)("Report"),c=(0,s.up)("ProductForCarrier");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(n),((0,s.wg)(),(0,s.j4)(s.n4,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c)])),_:1}))])}var i=t(1896),r=t(6970);const n=e=>((0,s.dD)("data-v-78a3f41c"),e=e(),(0,s.Cn)(),e),c={class:"w-100pr p-50px"},d=n((()=>(0,s._)("div",{class:"w-100pr text-center fs-22px"}," Buyurtmalar ",-1))),u={class:"w-100pr row justify-between wrap"},p={class:"q-mt-sm"},m={class:"fs-18px"},v={class:"q-mt-sm"},g={class:"fs-18px"},w={class:"q-mt-sm"},f={class:"fs-18px"},h={class:"w-100pr"},_={class:"fs-16px"},x={class:"w-100pr"},y={class:"fs-16px"},k=(0,s.Uk)("Olingan maxsulotlari: "),b={class:"w-100pr row justify-around"},C=(0,s.Uk)("Yetkazish"),z=(0,s.Uk)(" Lakatsiya "),W=["href"],O=(0,s.Uk)(" Yetkazildi ");function q(e,a,t,o,l,i){const n=(0,s.up)("q-separator"),q=(0,s.up)("q-card-section"),D=(0,s.up)("q-btn"),H=(0,s.up)("q-icon"),Z=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",c,[d,(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.OrdersApi,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a},[(0,s.Wm)(Z,{class:(0,r.C_)([e.ready,"my-card w-300px p-4pr mt-50px"])},{default:(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s._)("div",p,[(0,s._)("div",m,"Oluvchi: "+(0,r.zw)(e.userName),1),(0,s.Wm)(n,{size:"1px",class:"bg-dark"})]),(0,s._)("div",v,[(0,s._)("div",g,"Tel Raqami: "+(0,r.zw)(e.phoneNumber),1),(0,s.Wm)(n,{size:"1px",class:"bg-dark"})]),(0,s._)("div",w,[(0,s._)("div",f,"Manzili: "+(0,r.zw)(e.address),1),(0,s.Wm)(n,{size:"1px",class:"bg-dark"})]),(0,s._)("div",h,[(0,s._)("div",_,"Umumiy maxsulotlar Narxi: "+(0,r.zw)(e.total),1),(0,s.Wm)(n,{size:"1px",class:"bg-grey-7"})]),(0,s._)("div",x,[(0,s._)("div",y,[k,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.orderForUser,(e=>((0,s.wg)(),(0,s.iD)("span",{key:e},(0,r.zw)(e.product_name)+", ",1)))),128))]),(0,s.Wm)(n,{size:"1px",class:"bg-grey-7"})])])])),_:2},1024),(0,s.Wm)(q,{class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s._)("div",b,[(0,s.Wm)(D,{onClick:e=>i.SetOut(a),disable:5!=e.ready.length,padding:"10px 20px",class:"text-black bg-lime-12"},{default:(0,s.w5)((()=>[C])),_:2},1032,["onClick","disable"]),(0,s.Wm)(D,{onClick:e=>o.getLocation(a),class:"bg-indigo-6 text-white br-20px"},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{name:"location_on",class:"ml-5px",color:"white",size:"20px"}),z])),_:2},1032,["onClick"]),(0,s._)("a",{href:o.link_for_location,target:"_blank"},"bos ",8,W),(0,s.Wm)(D,{onClick:e=>i.Delivered(a),class:"bg-light-green-13 mt-15px"},{default:(0,s.w5)((()=>[O])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1032,["class"])])))),128))])])}var D=t(499),H=t(9981),Z=t.n(H);const S={setup(){const e=(0,D.iH)([]),a=(0,D.iH)(""),t=(0,D.iH)(""),o=(0,D.iH)(""),l=(0,D.iH)(""),i=(0,D.iH)("");(0,s.bv)((()=>{const a=async()=>{try{const a=await Z().get("http://adminmax.pythonanywhere.com/user/");e.value=a.data}catch(a){console.log(a)}};setInterval((()=>a()),2e3)}));const r=e=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{location.value=e,a.value=location.value.coords.latitude,t.value=location.value.coords.longitude,o.value=a.value+","+t.value})):alert("error"),setTimeout((()=>{console.log(o.value),i.value="40.320730, 71.833490",console.log(i.value),l.value=`https://www.google.si/maps/dir/${o.value}/${i.value}/@${o.value},14z/data=!4m4!4m3!1m1!4e1!1m0`,console.log(l.value)}),1e3)};return{OrdersApi:e,getLocation:r,latitude:a,longitude:t,link_for_location:l}},data(){return{}},methods:{SetOut(e){fetch(`http://adminmax.pythonanywhere.com/user/${this.OrdersApi[e].id}/`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({ready:"SetOut"})})},Delivered(e){fetch(`http://adminmax.pythonanywhere.com/user/${this.OrdersApi[e].id}/`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({ready:"Delivered"})})},getloc(){}}};var A=t(1639),Q=t(4458),T=t(3190),U=t(926),j=t(9379),N=t(2857),P=t(490),$=t(9984),I=t.n($);const Y=(0,A.Z)(S,[["render",q],["__scopeId","data-v-78a3f41c"]]),F=Y;I()(S,"components",{QCard:Q.Z,QCardSection:T.Z,QSeparator:U.Z,QBtn:j.Z,QIcon:N.Z,QItem:P.Z});const L={components:{Report:i.Z,ProductForCarrier:F}},R=(0,A.Z)(L,[["render",l]]),B=R}}]);