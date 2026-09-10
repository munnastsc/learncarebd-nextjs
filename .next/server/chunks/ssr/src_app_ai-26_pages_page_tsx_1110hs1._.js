module.exports=[87344,a=>{"use strict";let b,c;var d,e=a.i(187924),f=a.i(572131),g=a.i(879675),h=a.i(875160),i=a.i(873019),j=a.i(164831);let k=(0,j.default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);var l=a.i(494478);let m=(0,j.default)("panel-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]),n={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,q=/\n+/g,r=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?r(g,f):f+"{"+r(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=r(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f="-"==f[1]?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=r.p?r.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},s={},t=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+t(a[c]);return b}return a};function u(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=t(a),h=s[g]||(s[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!s[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=o.exec(a.replace(p,""));)b[4]?d.shift():b[3]?(c=b[3].replace(q," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(q," ").trim();return d[0]})(a);s[h]=r(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&s.g;return c&&(s.g=s[h]),f=s[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":r(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||n,d.g,d.o,d.k)}u.bind({g:1});let v,w,x,y=u.bind({k:1});function z(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:w&&w()},h),c.o=/go\d/.test(i),h.className=u.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),x&&j[0]&&x(h),v(j,h)}return b?b(e):e}}var A=(a,b)=>"function"==typeof a?a(b):a,B=(b=0,()=>(++b).toString()),C="default",D=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return D(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},E=[],F={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},G={},H=(a,b=C)=>{G[b]=D(G[b]||F,a),E.forEach(([a,c])=>{a===b&&c(G[b])})},I=a=>Object.keys(G).forEach(b=>H(a,b)),J=(a=C)=>b=>{H(b,a)},K=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||B()}))(b,a,c);return J(e.toasterId||(d=e.id,Object.keys(G).find(a=>G[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},L=(a,b)=>K("blank")(a,b);L.error=K("error"),L.success=K("success"),L.loading=K("loading"),L.custom=K("custom"),L.dismiss=(a,b)=>{let c={type:3,toastId:a};b?J(b)(c):I(c)},L.dismissAll=a=>L.dismiss(void 0,a),L.remove=(a,b)=>{let c={type:4,toastId:a};b?J(b)(c):I(c)},L.removeAll=a=>L.remove(void 0,a),L.promise=(a,b,c)=>{let d=L.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?A(b.success,a):void 0;return e?L.success(e,{id:d,...c,...null==c?void 0:c.success}):L.dismiss(d),a}).catch(a=>{let e=b.error?A(b.error,a):void 0;e?L.error(e,{id:d,...c,...null==c?void 0:c.error}):L.dismiss(d)}),a};var M=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,N=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,O=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=z("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Q=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=z("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${Q} 1s linear infinite;
`,S=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,T=y`
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
}`,U=z("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${T} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=z("div")`
  position: absolute;
`,W=z("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=z("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(Y,null,b):b:"blank"===c?null:f.createElement(W,null,f.createElement(R,{...d}),"loading"!==c&&f.createElement(V,null,"error"===c?f.createElement(P,{...d}):f.createElement(U,{...d})))},$=z("div")`
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
`,_=z("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${y(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement(Z,{toast:a}),i=f.createElement(_,{...a.ariaProps},A(a.message,a));return f.createElement($,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))}),d=f.createElement,r.p=void 0,v=d,w=void 0,x=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;let aa=[{id:"ABOUT_US",label:"About Us",icon:i.Layout},{id:"TERMS_PRIVACY",label:"Terms & Privacy",icon:k},{id:"FAQ_SETTINGS",label:"FAQ Section",icon:l.HelpCircle},{id:"FOOTER_SETTINGS",label:"Footer Links",icon:m}];a.s(["default",0,function(){let[a,b]=(0,f.useState)("ABOUT_US"),[c,d]=(0,f.useState)(!0),[i,j]=(0,f.useState)(!1),[k,l]=(0,f.useState)({}),[m,n]=(0,f.useState)(""),[o,p]=(0,f.useState)([]),[q,r]=(0,f.useState)([]);async function s(a){d(!0);try{let b=await fetch(`/api/ai-26/pages?type=${a}`),c=await b.json();l(c),"ABOUT_US"===a||"TERMS_PRIVACY"===a?n(c.html||""):"FAQ_SETTINGS"===a?p(c.faqs||[]):"FOOTER_SETTINGS"===a&&r(c.columns||[{title:"Company",links:[]},{title:"Support",links:[]}])}catch(a){L.error("Failed to load data")}finally{d(!1)}}async function t(){j(!0);let b={};"ABOUT_US"===a||"TERMS_PRIVACY"===a?b={html:m}:"FAQ_SETTINGS"===a?b={faqs:o}:"FOOTER_SETTINGS"===a&&(b={columns:q});try{(await fetch("/api/ai-26/pages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,content:b})})).ok?L.success("Saved successfully!"):L.error("Failed to save")}catch(a){L.error("Something went wrong")}finally{j(!1)}}return(0,f.useEffect)(()=>{s(a)},[a]),(0,e.jsxs)("div",{className:"p-6 max-w-5xl mx-auto space-y-6",children:[(0,e.jsxs)("div",{className:"flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-bold text-slate-800",children:"Dynamic Pages"}),(0,e.jsx)("p",{className:"text-slate-500 mt-1",children:"Manage static page contents globally"})]}),(0,e.jsxs)("button",{onClick:t,disabled:i||c,className:"flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition font-medium disabled:opacity-50",children:[i?(0,e.jsx)(h.Loader2,{className:"w-5 h-5 animate-spin"}):(0,e.jsx)(g.Save,{className:"w-5 h-5"}),"Save Changes"]})]}),(0,e.jsxs)("div",{className:"flex gap-6",children:[(0,e.jsx)("div",{className:"w-64 flex-shrink-0 space-y-2",children:aa.map(c=>{let d=c.icon,f=a===c.id;return(0,e.jsxs)("button",{onClick:()=>b(c.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition font-medium ${f?"bg-blue-50 text-blue-700 border border-blue-200 shadow-sm":"text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"}`,children:[(0,e.jsx)(d,{className:"w-5 h-5"}),c.label]},c.id)})}),(0,e.jsx)("div",{className:"flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[500px]",children:c?(0,e.jsxs)("div",{className:"h-full flex flex-col items-center justify-center text-slate-400",children:[(0,e.jsx)(h.Loader2,{className:"w-8 h-8 animate-spin mb-4"}),"Loading..."]}):(0,e.jsxs)("div",{className:"animate-in fade-in duration-300",children:[("ABOUT_US"===a||"TERMS_PRIVACY"===a)&&(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"HTML Content Editor"}),(0,e.jsx)("textarea",{value:m,onChange:a=>n(a.target.value),placeholder:"<h1>Welcome to ILTES</h1><p>Write your HTML content here...</p>",className:"w-full h-[400px] p-4 border border-slate-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"}),(0,e.jsx)("p",{className:"text-sm text-slate-500",children:"You can use standard HTML tags like <h1>, <p>, <br>, <strong>."})]}),"FAQ_SETTINGS"===a&&(0,e.jsxs)("div",{className:"space-y-6",children:[(0,e.jsxs)("div",{className:"flex justify-between items-center",children:[(0,e.jsx)("h3",{className:"text-lg font-semibold",children:"Frequently Asked Questions"}),(0,e.jsx)("button",{onClick:()=>p([...o,{q:"",a:""}]),className:"text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200",children:"+ Add FAQ"})]}),(0,e.jsx)("div",{className:"space-y-4",children:o.map((a,b)=>(0,e.jsxs)("div",{className:"p-4 border border-slate-100 rounded-xl bg-slate-50 relative group",children:[(0,e.jsx)("button",{onClick:()=>p(o.filter((a,c)=>c!==b)),className:"absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition p-1 hover:bg-red-50 rounded",children:"Remove"}),(0,e.jsx)("input",{type:"text",value:a.q,onChange:a=>{let c=[...o];c[b].q=a.target.value,p(c)},placeholder:"Question?",className:"w-full mb-3 p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 bg-white"}),(0,e.jsx)("textarea",{value:a.a,onChange:a=>{let c=[...o];c[b].a=a.target.value,p(c)},placeholder:"Answer...",className:"w-full p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 h-24 bg-white"})]},b))})]}),"FOOTER_SETTINGS"===a&&(0,e.jsxs)("div",{className:"space-y-8",children:[(0,e.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,e.jsx)("h3",{className:"text-lg font-semibold",children:"Footer Columns"}),(0,e.jsx)("button",{onClick:()=>r([...q,{title:"New Column",links:[]}]),className:"text-sm bg-slate-100 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200",children:"+ Add Column"})]}),(0,e.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:q.map((a,b)=>(0,e.jsxs)("div",{className:"p-5 border border-slate-200 rounded-2xl bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,e.jsx)("input",{type:"text",value:a.title,onChange:a=>{let c=[...q];c[b].title=a.target.value,r(c)},className:"font-bold text-lg p-1 border-b border-transparent hover:border-slate-300 focus:border-blue-500 outline-none w-full"}),(0,e.jsx)("button",{onClick:()=>r(q.filter((a,c)=>c!==b)),className:"text-red-500 text-sm",children:"Delete"})]}),(0,e.jsx)("div",{className:"space-y-3",children:a.links.map((a,c)=>(0,e.jsxs)("div",{className:"flex gap-2",children:[(0,e.jsx)("input",{placeholder:"Label",value:a.label,onChange:a=>{let d=[...q];d[b].links[c].label=a.target.value,r(d)},className:"flex-1 p-2 text-sm border border-slate-200 rounded-lg"}),(0,e.jsx)("input",{placeholder:"URL",value:a.url,onChange:a=>{let d=[...q];d[b].links[c].url=a.target.value,r(d)},className:"flex-1 p-2 text-sm border border-slate-200 rounded-lg"}),(0,e.jsx)("button",{onClick:()=>{let a=[...q];a[b].links.splice(c,1),r(a)},className:"text-red-400 font-bold px-2",children:"×"})]},c))}),(0,e.jsx)("button",{onClick:()=>{let a=[...q];a[b].links.push({label:"",url:""}),r(a)},className:"mt-4 text-sm text-blue-600 font-medium hover:underline",children:"+ Add Link"})]},b))})]})]})})]})]})}],87344)}];

//# sourceMappingURL=src_app_ai-26_pages_page_tsx_1110hs1._.js.map