module.exports=[950640,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},193695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},971306,(a,b,c)=>{b.exports=a.r(918622)},179847,a=>{a.n(a.i(403343))},9185,a=>{a.n(a.i(729432))},872842,a=>{a.n(a.i(275164))},454897,a=>{a.n(a.i(330106))},856157,a=>{a.n(a.i(118970))},594331,a=>{a.n(a.i(860644))},715988,a=>{a.n(a.i(856952))},625766,a=>{a.n(a.i(777341))},529725,a=>{a.n(a.i(994290))},605785,a=>{a.n(a.i(790588))},874793,a=>{a.n(a.i(633169))},285826,a=>{a.n(a.i(437111))},721565,a=>{a.n(a.i(741763))},465911,a=>{a.n(a.i(708950))},225128,a=>{a.n(a.i(891562))},740781,a=>{a.n(a.i(449670))},69411,a=>{a.n(a.i(675700))},263081,a=>{a.n(a.i(200276))},862837,a=>{a.n(a.i(640795))},134607,a=>{a.n(a.i(611614))},296338,a=>{a.n(a.i(521751))},550642,a=>{a.n(a.i(512213))},232242,a=>{a.n(a.i(22693))},988530,a=>{a.n(a.i(10531))},508583,a=>{a.n(a.i(901082))},38534,a=>{a.n(a.i(698175))},670408,a=>{a.n(a.i(409095))},722922,a=>{a.n(a.i(496772))},578294,a=>{a.n(a.i(971717))},216625,a=>{a.n(a.i(585034))},488648,a=>{a.n(a.i(368113))},451914,a=>{a.n(a.i(466482))},725466,a=>{a.n(a.i(91505))},463021,(a,b,c)=>{b.exports=a.x("@prisma/client-2c3a283f134fdcb6",()=>require("@prisma/client-2c3a283f134fdcb6"))},766518,a=>{"use strict";let b=a.g.prisma??function(){try{let{PrismaClient:b}=a.r(463021);return new b({log:[]})}catch(a){return console.error("[Prisma] failed to load:",a),null}}();a.s(["prisma",0,b])},522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},495774,305885,a=>{"use strict";var b=a.i(907997),c=a.i(395936),d=a.i(766518),e=a.i(522734),f=a.i(814747);let g=f.default.join(process.cwd(),"data");async function h(a){try{let b=await d.prisma.customPost.findFirst({where:{type:a}});if(b&&b.content)return JSON.parse(b.content)}catch{}let b=f.default.join(g,`${a.toLowerCase()}.json`);try{if(e.default.existsSync(b)){let a=e.default.readFileSync(b,"utf-8");return JSON.parse(a)}}catch{}return null}async function i(){let a=await h("FOOTER_SETTINGS"),d=a?.columns||[{title:"Important Links",links:[{label:"সকল কোর্স",url:"/#courses"},{label:"ফ্রি লেভেল টেস্ট",url:"/level-test"},{label:"বই সম্ভার (Store)",url:"/books"},{label:"স্টুডেন্ট লগইন",url:"/login"}]},{title:"Services",links:[{label:"Spoken Hub",url:"/dashboard/spoken-english"},{label:"IELTS Hub",url:"/dashboard"}]}];return(0,b.jsx)("footer",{className:"bg-slate-900 border-t border-slate-800",children:(0,b.jsxs)("div",{className:"max-w-6xl mx-auto px-6 py-16",children:[(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16",children:[(0,b.jsxs)("div",{className:"lg:col-span-1 space-y-6",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:"h-10 w-10 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20",children:(0,b.jsx)("span",{className:"text-white font-black text-xl tracking-tighter",children:"IL"})}),(0,b.jsx)("span",{className:"text-2xl font-black text-white tracking-tight",children:"LearnCare"})]}),(0,b.jsx)("p",{className:"text-slate-400 text-sm leading-relaxed max-w-sm",children:"Empowering students with smart learning tools, AI assistance, and premium courses for IELTS and Spoken English."})]}),d.map((a,d)=>(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"font-bold text-white mb-5 uppercase tracking-wider text-xs",children:a.title}),(0,b.jsx)("ul",{className:"space-y-3 text-slate-400 text-sm",children:a.links.map((a,d)=>(0,b.jsx)("li",{children:(0,b.jsx)(c.default,{href:a.url,className:"hover:text-emerald-400 transition",children:a.label})},d))})]},d))]}),(0,b.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500",children:[(0,b.jsxs)("p",{children:["© ",new Date().getFullYear()," LearnCare Academy. All rights reserved."]}),(0,b.jsxs)("div",{className:"flex gap-4",children:[(0,b.jsx)(c.default,{href:"/terms",className:"hover:text-slate-300",children:"Terms"}),(0,b.jsx)(c.default,{href:"/privacy",className:"hover:text-slate-300",children:"Privacy Policy"}),(0,b.jsx)(c.default,{href:"/about",className:"hover:text-slate-300",children:"About Us"})]})]})]})})}a.s(["getDynamicPageContent",0,h],305885),a.s(["default",0,i],495774)},110356,a=>{"use strict";var b=a.i(907997),c=a.i(395936);a.s(["default",0,function(){return(0,b.jsx)("nav",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200",children:(0,b.jsxs)("div",{className:"max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",children:[(0,b.jsxs)(c.default,{href:"/",className:"flex items-center gap-2",children:[(0,b.jsx)("div",{className:"h-8 w-8 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center shadow-md shadow-teal-500/20",children:(0,b.jsx)("span",{className:"text-white font-black text-sm tracking-tighter",children:"IL"})}),(0,b.jsx)("span",{className:"text-xl font-black text-slate-900 tracking-tight",children:"LearnCare"})]}),(0,b.jsxs)("div",{className:"hidden md:flex gap-6 items-center",children:[(0,b.jsx)(c.default,{href:"/about",className:"text-sm font-semibold text-slate-600 hover:text-slate-900",children:"About"}),(0,b.jsx)(c.default,{href:"/#courses",className:"text-sm font-semibold text-slate-600 hover:text-slate-900",children:"Courses"}),(0,b.jsx)(c.default,{href:"/books",className:"text-sm font-semibold text-slate-600 hover:text-slate-900",children:"Books"}),(0,b.jsx)(c.default,{href:"/dashboard",className:"text-sm font-semibold text-emerald-600 hover:text-emerald-700",children:"Practice Hub"}),(0,b.jsx)(c.default,{href:"/login",className:"text-sm font-bold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition",children:"Login"})]})]})})}])},407524,a=>{a.v("/_next/static/media/icon.16tyetjoh8_k5.svg"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},839375,a=>{"use strict";let b={src:a.i(407524).default,width:32,height:32};a.s(["default",0,b])},878906,a=>{"use strict";var b=a.i(907997),c=a.i(305885),d=a.i(110356),e=a.i(495774);async function f(){let a=await (0,c.getDynamicPageContent)("ABOUT_US"),f=`
        <div class="space-y-8 font-sans text-slate-800">
            <div>
                <span class="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Our Mission & Vision
                </span>
                <h1 class="text-3xl sm:text-4xl font-black text-slate-950 mt-3 mb-2">আমাদের সম্পর্কে (About LearnCare Academy)</h1>
                <p class="text-sm text-slate-500">ইংরেজি শেখা ও ক্যারিয়ার গড়ার বিশ্বস্ত এআই এডটেক প্ল্যাটফর্ম</p>
            </div>

            <div class="bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-150 p-6 md:p-8 rounded-2xl text-slate-700 leading-relaxed text-base space-y-3">
                <p class="font-bold text-slate-900 text-lg">💡 আমাদের লক্ষ্য:</p>
                <p>
                    LearnCare Academy বাংলাদেশের সাধারণ শিক্ষার্থীদের ভাষাভীতি দূর করে আত্মবিশ্বাসের সাথে সাবলীল ইংরেজি কথা বলা এবং IELTS-এ Band 7.5+ অর্জন করতে সক্ষম করে তোলার এক অনন্য শিক্ষামূলক উদ্যোগ। 
                </p>
                <p>
                    গতানুগতিক নিয়মের বাইরে এসে আধুনিক ব্রিটিশ ফনেটিক্স (IPA), New Headway ইন্টারেক্টিভ অডিও ডিকটেশন এবং সর্বাধুনিক কৃত্রিম বুদ্ধিমত্তা (AI)-চালিত স্পিকিং ও রাইটিং ইভ্যালুয়েশন সিস্টেমকে আমরা দেশের প্রতিটি প্রান্তে প্রতিটি শিক্ষার্থীর হাতের মুঠোয় পৌঁছে দিয়েছি।
                </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">🎯</span>
                    <h3 class="font-bold text-slate-900 text-base">স্মার্ট এআই লার্নিং</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        মুখস্থ না করে বাস্তব কথোপকথন ও এআই টিউটরের সাথে ভয়েস চ্যাটের মাধ্যমে ভুলগুলো তাৎক্ষণিকভাবে শুধরে নেওয়ার সুযোগ।
                    </p>
                </div>
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">🎧</span>
                    <h3 class="font-bold text-slate-900 text-base">ব্রিটিশ অ্যাকসেন্ট ও ডিকটেশন</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        সঠিক উচ্চারণ, স্ট্রেস ও ইনটোনেশন আয়ত্ত করতে Cambridge ও Oxford স্ট্যান্ডার্ড অডিও ল্যাব সুবিধা।
                    </p>
                </div>
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">📚</span>
                    <h3 class="font-bold text-slate-900 text-base">Cambridge 9-20 Hub</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        IELTS পরীক্ষার সম্পূর্ণ মক টেস্ট, প্যাসেজ অ্যানালাইসিস এবং ব্যান্ড প্রেডিক্টরের সমন্বয়ে আন্তর্জাতিক মানের প্রস্তুতি।
                    </p>
                </div>
                <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-2">
                    <span class="text-2xl">👨‍🏫</span>
                    <h3 class="font-bold text-slate-900 text-base">ওয়ান-অন-ওয়ান কেয়ার</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        ব্যক্তিগত দুর্বলতা চিহ্নিত করে অভিজ্ঞ মেন্টরের নিবিড় তত্ত্বাবধানে দ্রুত ফ্লুয়েন্সি অর্জনের নিশ্চয়তা।
                    </p>
                </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 text-sm text-slate-700">
                <h3 class="font-bold text-slate-900 text-base">📞 আমাদের সাথে যোগাযোগ</h3>
                <p>আমাদের যেকোনো কোর্স, বই অথবা একাডেমি সম্পর্কে বিস্তারিত জানতে সরাসরি কল বা হোয়াটসঅ্যাপ করুন:</p>
                <div class="pt-2 space-y-1">
                    <p>📱 <b>হটলাইন / WhatsApp:</b> +8801714740430</p>
                    <p>📧 <b>অফিসিয়াল ইমেইল:</b> learncareofficial@gmail.com</p>
                    <p>🌐 <b>ওয়েবসাইট:</b> learncarebd.com</p>
                </div>
            </div>
        </div>
    `,g=a?.html&&a.html.trim().length>50?a.html:f;return(0,b.jsxs)("div",{className:"min-h-screen flex flex-col bg-white",children:[(0,b.jsx)(d.default,{}),(0,b.jsx)("main",{className:"flex-1",children:(0,b.jsx)("div",{className:"max-w-4xl mx-auto px-6 py-12 md:py-20",children:(0,b.jsx)("div",{className:"prose prose-slate max-w-none",dangerouslySetInnerHTML:{__html:g}})})}),(0,b.jsx)(e.default,{})]})}a.s(["default",0,f,"metadata",0,{title:"About Us - ILTES",description:"Learn more about ILTES and our mission."}])},11512,a=>{a.n(a.i(878906))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0sso.lj._.js.map