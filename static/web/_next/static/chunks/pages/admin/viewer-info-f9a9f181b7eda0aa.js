(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6109],{92794:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/viewer-info",function(){return r(28603)}])},54615:function(e,t,r){"use strict";r.d(t,{k:function(){return u}});var n=r(85893),a=r(58091),s=r(67294),l=r(30744),i=r(23148),o=r(26495),d=r(65400);function c(e){let t={};return e.forEach(e=>{let r=new Date(e.time),n=(0,a.Z)(r,"H:mma");t[n]=e.value}),t}i.kL.register(i.uw,i.WV,i.f$,i.od,i.jn,i.Dx,i.u,i.De);let u=e=>{let{data:t,title:r,color:a,unit:i,dataCollections:u,yFlipped:f,yLogarithmic:h,minYValue:x,yStepSize:p=0}=e,m=[],g=(0,s.useRef)(null);return t&&t.length>0&&m.push({id:r,label:r,backgroundColor:a,borderColor:a,borderWidth:3,data:c(t)}),u.forEach(e=>{m.push({id:e.name,label:e.name,data:c(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,n.jsxs)("div",{className:"line-chart-container",children:[(0,n.jsx)(o.x1,{ref:g,data:{datasets:m},options:{responsive:!0,clip:!1,scales:{y:{type:h?"logarithmic":"linear",reverse:f,min:x,ticks:{stepSize:p},title:{display:!0,text:i}}}},height:"70vh"}),(0,n.jsx)(d.default,{size:"small",onClick:()=>{if(g.current){let e=document.createElement("a");e.download="chart.png",e.href=g.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,n.jsx)(l.default,{}),className:"download-btn"})]})};u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},15014:function(e,t,r){"use strict";r.d(t,{m:function(){return h}});var n=r(85893),a=r(53740),s=r(26289),l=r(70302),i=r(74806);let{Text:o}=a.default,d={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},c=e=>{let{prefix:t,value:r,suffix:a,title:s}=e;return(0,n.jsxs)("div",{children:[t,(0,n.jsx)("div",{children:(0,n.jsx)(o,{type:"secondary",children:s})}),(0,n.jsx)("div",{children:(0,n.jsxs)(o,{type:"secondary",children:[r,a||"%"]})})]})},u=e=>{let{title:t,value:r,prefix:a,suffix:s,color:l}=e,o=(0,n.jsx)(c,{prefix:a,value:r,suffix:s,title:t});return(0,n.jsx)(i.default,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":l,"90%":r>90?"red":l},format:()=>o})};u.defaultProps=d;let f=e=>{let{title:t,value:r,prefix:a,formatter:l}=e;return(0,n.jsx)(s.Z,{title:t,value:r,prefix:a,formatter:l})};f.defaultProps=d;let h=e=>{let{progress:t,centered:r}=e,a=t?u:f;return(0,n.jsx)(l.default,{type:"inner",children:(0,n.jsx)("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,n.jsx)(a,{...e})})})};h.defaultProps=d},28603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(85893),a=r(67294),s=r(55673),l=r(5789),i=r(53740),o=r(82891),d=r(89552),c=r(4863),u=r(28401),f=r(46038),h=r(5152),x=r.n(h),p=r(54615),m=r(15014),g=r(2307),j=r(45938),w=r(37135);let y=e=>{let{data:t}=e,r=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,w.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:e=>(0,j.Z)(new Date(e)),sorter:(e,t)=>new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime(),sortDirections:["descend","ascend"]}];return(0,n.jsx)(g.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:r,dataSource:t,size:"small",rowKey:"id"})};var v=r(38631),b=r(81453),k=r(34261);let S=x()(()=>Promise.resolve().then(r.t.bind(r,5085,23)),{loadableGenerated:{webpack:()=>[5085]},ssr:!1}),C=x()(()=>r.e(5412).then(r.t.bind(r,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1});function D(){let e;let t=(0,a.useContext)(v.a),{online:r,broadcaster:h,viewerCount:x,overallPeakViewerCount:g,sessionPeakViewerCount:j}=t||{};h&&h.time&&(e=new Date(h.time));let w=[{title:"Current stream",start:e},{title:"Last 12 hours",start:(0,f.Z)(new Date,{hours:12})},{title:"Last 24 hours",start:(0,f.Z)(new Date,{hours:24})},{title:"Last 7 days",start:(0,f.Z)(new Date,{days:7})},{title:"Last 30 days",start:(0,f.Z)(new Date,{days:30})},{title:"Last 3 months",start:(0,f.Z)(new Date,{months:3})},{title:"Last 6 months",start:(0,f.Z)(new Date,{months:6})}],[k,D]=(0,a.useState)(!0),[Z,_]=(0,a.useState)([]),[L,E]=(0,a.useState)([]),[N,P]=(0,a.useState)(w[1]),I=async()=>{try{let e="".concat(b.iV,"?windowStart=").concat((0,u.Z)(N.start)),t=await (0,b.rQ)(e);_(t),D(!1)}catch(e){console.log("==== error",e)}try{let e=await (0,b.rQ)(b.a_);E(e)}catch(e){console.log("==== error",e)}};(0,a.useEffect)(()=>{let e=null;return(I(),r)?(e=setInterval(I,6e4),()=>{clearInterval(e)}):()=>[]},[r,N]);let T=e=>{let{key:t}=e;P(w[t])},A=r&&e?0:1,V=w.slice(A).map((e,t)=>({key:t+A,label:e.title,onClick:T}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default.Title,{children:"Viewer Info"}),(0,n.jsx)("br",{}),(0,n.jsxs)(s.Z,{gutter:[16,16],justify:"space-around",children:[r&&(0,n.jsx)(l.Z,{span:8,md:8,children:(0,n.jsx)(m.m,{title:"Current viewers",value:x.toString(),prefix:(0,n.jsx)(C,{})})}),(0,n.jsx)(l.Z,{md:r?8:12,children:(0,n.jsx)(m.m,{title:r?"Max viewers this stream":"Max viewers last stream",value:j.toString(),prefix:(0,n.jsx)(C,{})})}),(0,n.jsx)(l.Z,{md:r?8:12,children:(0,n.jsx)(m.m,{title:"All-time max viewers",value:g.toString(),prefix:(0,n.jsx)(C,{})})})]}),!Z.length&&(0,n.jsx)(c.default,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"}),(0,n.jsxs)(d.default,{spinning:!Z.length||k,children:[(0,n.jsx)(o.default,{menu:{items:V},trigger:["click"],children:(0,n.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[N.title," ",(0,n.jsx)(S,{})]})}),Z.length>0&&(0,n.jsx)(p.k,{title:"Viewers",data:Z,color:"#2087E2",unit:"viewers",minYValue:0,yStepSize:1}),(0,n.jsx)(y,{data:L})]})]})}D.getLayout=function(e){return(0,n.jsx)(k.l,{page:e})}}},function(e){e.O(0,[2196,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,7752,5891,2891,4749,6627,8966,3068,8091,6300,8531,5283,1822,4261,9774,2888,179],function(){return e(e.s=92794)}),_N_E=e.O()}]);