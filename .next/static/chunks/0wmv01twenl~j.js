(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,632781,e=>{"use strict";let t=(0,e.i(456420).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",0,t],632781)},576248,e=>{"use strict";let t=(0,e.i(456420).default)("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["HelpCircle",0,t],576248)},856522,e=>{"use strict";let t=(0,e.i(456420).default)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);e.s(["Save",0,t],856522)},714513,e=>{"use strict";let t=(0,e.i(456420).default)("panels-top-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);e.s(["Layout",0,t],714513)},21430,e=>{"use strict";let t,a;var s,r=e.i(843476),o=e.i(271645),i=e.i(856522),l=e.i(632781),n=e.i(714513),d=e.i(456420);let c=(0,d.default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);var p=e.i(576248);let u=(0,d.default)("panel-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]),m={data:""},h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,b=(e,t)=>{let a="",s="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":s+="f"==o[1]?b(i,o):o+"{"+b(i,"k"==o[1]?"":t)+"}":"object"==typeof i?s+=b(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o="-"==o[1]?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=b.p?b.p(o,i):o+":"+i+";")}return a+(t&&r?t+"{"+r+"}":r)+s},g={},y=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+y(e[a]);return t}return e};function v(e){let t,a,s=this||{},r=e.call?e(s.p):e;return((e,t,a,s,r)=>{var o;let i=y(e),l=g[i]||(g[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!g[l]){let t=i!==e?e:(e=>{let t,a,s=[{}];for(;t=h.exec(e.replace(f,""));)t[4]?s.shift():t[3]?(a=t[3].replace(x," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(x," ").trim();return s[0]})(e);g[l]=b(r?{["@keyframes "+l]:t}:t,a?"":"."+l)}let n=a&&g.g;return a&&(g.g=g[l]),o=g[l],n?t.data=t.data.replace(n,o):-1===t.data.indexOf(o)&&(t.data=s?o+t.data:t.data+o),l})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=s.p,r.reduce((e,s,r)=>{let o=t[r];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":b(e,""):!1===e?"":e}return e+s+(null==o?"":o)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||m})(s.target),s.g,s.o,s.k)}v.bind({g:1});let w,j,N,k=v.bind({k:1});function S(e,t){let a=this||{};return function(){let s=arguments;function r(o,i){let l=Object.assign({},o),n=l.className||r.className;a.p=Object.assign({theme:j&&j()},l),a.o=/go\d/.test(n),l.className=v.apply(a,s)+(n?" "+n:""),t&&(l.ref=i);let d=e;return e[0]&&(d=l.as||e,delete l.as),N&&d[0]&&N(l),w(d,l)}return t?t(r):r}}var T=(e,t)=>"function"==typeof e?e(t):e,C=(t=0,()=>(++t).toString()),E="default",A=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return A(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},O=[],_={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},F={},M=(e,t=E)=>{F[t]=A(F[t]||_,e),O.forEach(([e,a])=>{e===t&&a(F[t])})},$=e=>Object.keys(F).forEach(t=>M(e,t)),I=(e=E)=>t=>{M(t,e)},L=e=>(t,a)=>{let s,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||C()}))(t,e,a);return I(r.toasterId||(s=r.id,Object.keys(F).find(e=>F[e].toasts.some(e=>e.id===s))))({type:2,toast:r}),r.id},R=(e,t)=>L("blank")(e,t);R.error=L("error"),R.success=L("success"),R.loading=L("loading"),R.custom=L("custom"),R.dismiss=(e,t)=>{let a={type:3,toastId:e};t?I(t)(a):$(a)},R.dismissAll=e=>R.dismiss(void 0,e),R.remove=(e,t)=>{let a={type:4,toastId:e};t?I(t)(a):$(a)},R.removeAll=e=>R.remove(void 0,e),R.promise=(e,t,a)=>{let s=R.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?T(t.success,e):void 0;return r?R.success(r,{id:s,...a,...null==a?void 0:a.success}):R.dismiss(s),e}).catch(e=>{let r=t.error?T(t.error,e):void 0;r?R.error(r,{id:s,...a,...null==a?void 0:a.error}):R.dismiss(s)}),e};var U=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,Q=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=k`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,D=S("div")`
  position: absolute;
`,Y=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(W,null,t):t:"blank"===a?null:o.createElement(Y,null,o.createElement(H,{...s}),"loading"!==a&&o.createElement(D,null,"error"===a?o.createElement(q,{...s}):o.createElement(B,{...s})))},Z=S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;o.memo(({toast:e,position:t,style:s,children:r})=>{let i=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[r,o]=(()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${k(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=o.createElement(J,{toast:e}),n=o.createElement(X,{...e.ariaProps},T(e.message,e));return o.createElement(Z,{className:e.className,style:{...i,...s,...e.style}},"function"==typeof r?r({icon:l,message:n}):o.createElement(o.Fragment,null,l,n))}),s=o.createElement,b.p=void 0,w=s,j=void 0,N=void 0,v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;let ee=[{id:"ABOUT_US",label:"About Us",icon:n.Layout},{id:"TERMS_PRIVACY",label:"Terms & Privacy",icon:c},{id:"FAQ_SETTINGS",label:"FAQ Section",icon:p.HelpCircle},{id:"FOOTER_SETTINGS",label:"Footer Links",icon:u}];e.s(["default",0,function(){let[e,t]=(0,o.useState)("ABOUT_US"),[a,s]=(0,o.useState)(!0),[n,d]=(0,o.useState)(!1),[c,p]=(0,o.useState)({}),[u,m]=(0,o.useState)(""),[h,f]=(0,o.useState)([]),[x,b]=(0,o.useState)([]);async function g(e){s(!0);try{let t=await fetch(`/api/ai-26/pages?type=${e}`),a=await t.json();p(a),"ABOUT_US"===e||"TERMS_PRIVACY"===e?m(a.html||""):"FAQ_SETTINGS"===e?f(a.faqs||[]):"FOOTER_SETTINGS"===e&&b(a.columns||[{title:"Company",links:[]},{title:"Support",links:[]}])}catch(e){R.error("Failed to load data")}finally{s(!1)}}async function y(){d(!0);let t={};"ABOUT_US"===e||"TERMS_PRIVACY"===e?t={html:u}:"FAQ_SETTINGS"===e?t={faqs:h}:"FOOTER_SETTINGS"===e&&(t={columns:x});try{(await fetch("/api/ai-26/pages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,content:t})})).ok?R.success("Saved successfully!"):R.error("Failed to save")}catch(e){R.error("Something went wrong")}finally{d(!1)}}return(0,o.useEffect)(()=>{g(e)},[e]),(0,r.jsxs)("div",{className:"p-6 max-w-5xl mx-auto space-y-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-slate-800",children:"Dynamic Pages"}),(0,r.jsx)("p",{className:"text-slate-500 mt-1",children:"Manage static page contents globally"})]}),(0,r.jsxs)("button",{onClick:y,disabled:n||a,className:"flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition font-medium disabled:opacity-50",children:[n?(0,r.jsx)(l.Loader2,{className:"w-5 h-5 animate-spin"}):(0,r.jsx)(i.Save,{className:"w-5 h-5"}),"Save Changes"]})]}),(0,r.jsxs)("div",{className:"flex gap-6",children:[(0,r.jsx)("div",{className:"w-64 flex-shrink-0 space-y-2",children:ee.map(a=>{let s=a.icon,o=e===a.id;return(0,r.jsxs)("button",{onClick:()=>t(a.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition font-medium ${o?"bg-blue-50 text-blue-700 border border-blue-200 shadow-sm":"text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"}`,children:[(0,r.jsx)(s,{className:"w-5 h-5"}),a.label]},a.id)})}),(0,r.jsx)("div",{className:"flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[500px]",children:a?(0,r.jsxs)("div",{className:"h-full flex flex-col items-center justify-center text-slate-400",children:[(0,r.jsx)(l.Loader2,{className:"w-8 h-8 animate-spin mb-4"}),"Loading..."]}):(0,r.jsxs)("div",{className:"animate-in fade-in duration-300",children:[("ABOUT_US"===e||"TERMS_PRIVACY"===e)&&(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"HTML Content Editor"}),(0,r.jsx)("textarea",{value:u,onChange:e=>m(e.target.value),placeholder:"<h1>Welcome to ILTES</h1><p>Write your HTML content here...</p>",className:"w-full h-[400px] p-4 border border-slate-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"}),(0,r.jsx)("p",{className:"text-sm text-slate-500",children:"You can use standard HTML tags like <h1>, <p>, <br>, <strong>."})]}),"FAQ_SETTINGS"===e&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Frequently Asked Questions"}),(0,r.jsx)("button",{onClick:()=>f([...h,{q:"",a:""}]),className:"text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200",children:"+ Add FAQ"})]}),(0,r.jsx)("div",{className:"space-y-4",children:h.map((e,t)=>(0,r.jsxs)("div",{className:"p-4 border border-slate-100 rounded-xl bg-slate-50 relative group",children:[(0,r.jsx)("button",{onClick:()=>f(h.filter((e,a)=>a!==t)),className:"absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition p-1 hover:bg-red-50 rounded",children:"Remove"}),(0,r.jsx)("input",{type:"text",value:e.q,onChange:e=>{let a=[...h];a[t].q=e.target.value,f(a)},placeholder:"Question?",className:"w-full mb-3 p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-white"}),(0,r.jsx)("textarea",{value:e.a,onChange:e=>{let a=[...h];a[t].a=e.target.value,f(a)},placeholder:"Answer...",className:"w-full p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 h-24 bg-white"})]},t))})]}),"FOOTER_SETTINGS"===e&&(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Footer Columns"}),(0,r.jsx)("button",{onClick:()=>b([...x,{title:"New Column",links:[]}]),className:"text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200",children:"+ Add Column"})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:x.map((e,t)=>(0,r.jsxs)("div",{className:"p-5 border border-slate-200 rounded-2xl bg-white shadow-sm",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,r.jsx)("input",{type:"text",value:e.title,onChange:e=>{let a=[...x];a[t].title=e.target.value,b(a)},className:"font-bold text-lg p-1 border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none w-full"}),(0,r.jsx)("button",{onClick:()=>b(x.filter((e,a)=>a!==t)),className:"text-red-500 text-sm",children:"Delete"})]}),(0,r.jsx)("div",{className:"space-y-3",children:e.links.map((e,a)=>(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("input",{placeholder:"Label",value:e.label,onChange:e=>{let s=[...x];s[t].links[a].label=e.target.value,b(s)},className:"flex-1 p-2 text-sm border border-slate-200 rounded-lg"}),(0,r.jsx)("input",{placeholder:"URL",value:e.url,onChange:e=>{let s=[...x];s[t].links[a].url=e.target.value,b(s)},className:"flex-1 p-2 text-sm border border-slate-200 rounded-lg"}),(0,r.jsx)("button",{onClick:()=>{let e=[...x];e[t].links.splice(a,1),b(e)},className:"text-red-400 font-bold px-2",children:"×"})]},a))}),(0,r.jsx)("button",{onClick:()=>{let e=[...x];e[t].links.push({label:"",url:""}),b(e)},className:"mt-4 text-sm text-blue-600 font-medium hover:underline",children:"+ Add Link"})]},t))})]})]})})]})]})}],21430)}]);