"use strict";(self["webpackChunkecolife"]=self["webpackChunkecolife"]||[]).push([[490],{9296:(t,a,e)=>{e.r(a),e.d(a,{default:()=>j});var r=e(9835),o=e(6970);const c=t=>((0,r.dD)("data-v-7f57f555"),t=t(),(0,r.Cn)(),t),i={class:"h-180px mt-20px w-100pr row justify-center"},s={key:0,class:"row w-60pr_md-80pr_sm-95pr"},n=c((()=>(0,r._)("div",{class:"w-100pr text-center text-h6"},"Kartigoriyalar",-1))),l={class:"w-100pr row justify-between"},d={class:"mt-15px"},p=(0,r.Uk)("Barchasi"),u={class:"w-100pr"},g={class:"w-100pr text-center fs-22px_md-20px_sm-18px mt-20px"};function y(t,a,e,c,y,h){const m=(0,r.up)("q-btn"),w=(0,r.up)("Shopcards"),v=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(v,null,{default:(0,r.w5)((()=>[(0,r._)("div",i,[void 0!=c.categoriya?((0,r.wg)(),(0,r.iD)("div",s,[n,(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.categoriya,((t,a)=>((0,r.wg)(),(0,r.iD)("div",{key:a,class:"mt-15px"},[(0,r.Wm)(m,{rounded:"",onClick:t=>h.getFilter(a),class:"fs-18px"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.categoriya_nomi),1)])),_:2},1032,["onClick"])])))),128)),(0,r._)("div",d,[(0,r.Wm)(m,{rounded:"",onClick:a[0]||(a[0]=a=>h.getFilterClose(t.i)),class:"fs-18px"},{default:(0,r.w5)((()=>[p])),_:1})])])])):(0,r.kq)("",!0)]),(0,r._)("div",u,[(0,r._)("div",g,(0,o.zw)(y.categoriyPproductName),1),((0,r.wg)(),(0,r.j4)(r.n4,null,{default:(0,r.w5)((()=>[y.visabeProduct?((0,r.wg)(),(0,r.j4)(w,{key:0,products:c.products},null,8,["products"])):(0,r.kq)("",!0)])),_:1})),y.visabeCateroriya?((0,r.wg)(),(0,r.j4)(w,{key:0,products:y.categoriyPproduct},null,8,["products"])):(0,r.kq)("",!0)])])),_:1})}var h=e(499),m=e(9981),w=e.n(m),v=e(9496);const f={components:{Shopcards:v.Z},setup(){const t=(0,h.iH)(""),a=(0,h.iH)("");return(0,r.bv)((()=>{const e=async()=>{try{const a=await w().get("http://adminmax.pythonanywhere.com/productlar/");t.value=a.data}catch(a){console.log(a)}},r=async()=>{try{const t=await w().get(" http://adminmax.pythonanywhere.com/categoriya/");a.value=t.data}catch(t){console.log(t)}};let o=setInterval((()=>{e(),r()}),1e3);setTimeout((()=>{clearInterval(o)}),3e3)})),{products:t,categoriya:a}},data(){return{visabeProduct:!0,visabeCateroriya:!1,categoriyPproduct:"",categoriyPproductName:""}},methods:{getFilter(t){for(let a=0;a<this.categoriya.length;a++)this.categoriya[t].categoriya_nomi==this.categoriya[a].categoriya_nomi&&(this.categoriyPproduct=this.categoriya[a].mahsulot,this.categoriyPproductName=this.categoriya[a].categoriya_nomi,this.visabeProduct=!1,this.visabeCateroriya=!0)},getFilterClose(){this.visabeProduct=!0,this.visabeCateroriya=!1,this.categoriyPproductName=""}}};var _=e(1639),k=e(9885),x=e(9379),b=e(9984),C=e.n(b);const P=(0,_.Z)(f,[["render",y],["__scopeId","data-v-7f57f555"]]),j=P;C()(f,"components",{QPage:k.Z,QBtn:x.Z})}}]);