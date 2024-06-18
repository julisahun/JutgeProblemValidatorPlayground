const __vite__fileDeps=["assets/index-BlnPixdd.js","assets/_commonjsHelpers-C932wzq6.js","assets/___vite-browser-external_commonjs-proxy-DhbCIgaM.js","assets/index-Be_cqDyP.js","assets/tree-sitter-DxUgmTd1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const q="modulepreload",D=function(e){return"/JutgeProblemValidatorPlayground/"+e},k={},S=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(r.map(a=>{if(a=D(a),a in k)return;k[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":q,c||(d.as="script",d.crossOrigin=""),d.href=a,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((F,R)=>{d.addEventListener("load",F),d.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};let b;const A=new Uint8Array(16);function z(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(A)}const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function M(e,t=0){return u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]}const B=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),P={randomUUID:B};function W(e,t,r){if(P.randomUUID&&!t&&!e)return P.randomUUID();e=e||{};const n=e.random||(e.rng||z)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,M(n)}var J=Object.defineProperty,K=Object.getOwnPropertyNames,x=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),H=(e,t)=>function(){return e&&(t=(0,e[K(e)[0]])(e=0)),t},G=(e,t)=>{for(var r in t)J(e,r,{get:t[r],enumerable:!0})},T=(e,t,r)=>new Promise((n,s)=>{var i=c=>{try{a(r.next(c))}catch(l){s(l)}},o=c=>{try{a(r.throw(c))}catch(l){s(l)}},a=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,o);a((r=r.apply(e,t)).next())}),I={};G(I,{preprocess:()=>X});function Q(e){let t=e.split(`
`).filter(r=>r.startsWith("#include"));return e=e.split(`
`).filter(r=>!r.startsWith("#include")).join(`
`),{includes:t,code:e}}function X(e){const t=x("fs"),{execSync:r}=x("child_process"),s=`${W()}`;let{includes:i,code:o}=Q(e);try{r(`mkdir ${s}`),t.writeFileSync(`${s}/code.cpp`,o),r(`g++ -E ${s}/code.cpp -o ${s}/preprocessed.cpp`,{stdio:"pipe"});const a=t.readFileSync(`${s}/preprocessed.cpp`,"utf-8");return[...i,...a.split(`
`)].join(`
`)}catch(a){throw new Error(a.stderr)}finally{r(`rm -rf ${s}`)}}var Y=H({"src/preprocessor.ts"(){}}),Z=class{constructor(){this.libraries=[],this.unUsedVariables=[],this.shadows=!1,this.constantConditions=!1,this.breaks=!1,this.continues=!1,this.usesFunctions=!1,this.recursive=!1,this.iterative=!1,this.functions=[],this.properties=[]}addInclude(e){this.libraries.push(e)}addUnUsedVariable(e){this.unUsedVariables.push(e)}registerShadowing(){this.shadows=!0}registerConstantCondition(){this.constantConditions=!0}registerBreak(){this.breaks=!0}registerContinue(){this.continues=!0}registerFunction(){this.usesFunctions=!0}registerRecursion(){this.recursive=!0}registerLoop(){this.iterative=!0}addFunction(e){this.functions.push(e)}addProperty(e){this.properties.push(e)}result(){return{usedLibraries:this.libraries,unUsedVariables:this.unUsedVariables,shadows:this.shadows,containsConstantConditions:this.constantConditions,usesFunctions:this.usesFunctions,usesBreaks:this.breaks,usesContinues:this.continues,isRecursive:this.recursive,isIterative:this.iterative,functions:this.functions,properties:this.properties}}},ee=Z,U=class{constructor(e,t){this.name=e,this.type=t,this.used=!1}use(){this.used=!0}isUsed(){return this.used}},C=class{constructor(){this.variables={},this.usedVariables=[]}declareVariable(e,t){this.variables[e]=new U(e,t)}useVariable(e){var t;(t=this.variables[e])==null||t.use(),this.usedVariables.push(e)}getUnUsedVariables(){return Object.values(this.variables).filter(e=>!e.isUsed())}containsVariable(e){return e in this.variables}getVariable(e){return this.variables[e]}},m=class extends C{constructor({loops:e=!1}){super(),this.loops=e,this.breaks=!1,this.condition=null}conditionUpdated(){if(this.breaks)return!0;const e=this.condition.variables();return e.length?this.loops?e.some(t=>this.usedVariables.includes(t)):!0:!1}registerBreak(){this.breaks=!0}},te=class{constructor(e){this.nodes=e}hasVariables(){return this.nodes.some(e=>e.type==="identifier")}variables(){return this.nodes.filter(e=>e.type==="identifier").map(e=>e.text)}},v=class extends C{constructor(){super(),this.parameters=[],this.returnType=null,this.name=null,this.calls=[]}addParameter(e,t){this.parameters.push(new U(e,t))}registerCall(e){this.calls.push(e)}getParameters(){return this.parameters.map(({name:e,type:t})=>({name:e,type:t}))}getFunction(){return{name:this.name,parameters:this.parameters,type:this.returnType,dependencies:this.calls}}};function re(e){const t=Object.keys(e).reduce((s,i)=>(s[i]=0,s),{});for(const s in e)for(let i of e[s])t[i]++;let r=Object.entries(t).filter(([s,i])=>i===0).map(([s,i])=>s),n=0;for(;r.length>0;){const s=r.shift();n++;for(let i of e[s]||[])t[i]--,t[i]===0&&r.push(i)}return n!==Object.keys(e).length}var ie=["if","else if","while","for"],se=class{constructor(){this.currentScope=null,this.scopes=[],this.profiler=new ee,this.functions=[],this.properties=[]}declareVariable(e,t){this.scopes.some(n=>n.containsVariable(e))&&this.profiler.registerShadowing(),this.currentScope.declareVariable(e,t)}useVariable(e){for(let t of this.scopes)if(t.useVariable(e),t.containsVariable(e))break}registerInclude(e){const t=e.replace(/[<>"']/g,"");this.profiler.addInclude(t)}createScope({type:e}={}){let t;if(ie.includes(e)){const r=e==="while"||e==="for";t=new m({loops:r}),r&&this.profiler.registerLoop()}else e==="function"?t=new v:t=new C;this.currentScope=t,this.scopes.unshift(t)}leaveScope(){let e=this.scopes.shift();if(this.currentScope=this.scopes[0],e.getUnUsedVariables().forEach(r=>this.profiler.addUnUsedVariable(r.name)),e instanceof m&&!e.conditionUpdated()&&this.profiler.registerConstantCondition(),e instanceof v){const r=e.getFunction();this.functions.push(r),this.profiler.addFunction(r)}}storeCondition(e){const t=new te(e);this.currentScope instanceof m&&(this.currentScope.condition=t)}breakStatement(){this.currentScope instanceof m&&(this.currentScope.registerBreak(),this.profiler.registerBreak())}continueStatement(){this.currentScope instanceof m&&this.profiler.registerContinue()}setFunctionName(e){this.currentScope instanceof v&&(this.currentScope.name=e,e!=="main"&&this.profiler.registerFunction())}setFunctionType(e){this.currentScope instanceof v&&(this.currentScope.returnType=e)}storeParameter(e,t){this.currentScope instanceof v&&this.currentScope.addParameter(e,t),e&&this.declareVariable(e,t)}registerCall(e){const t=this.scopes.find(r=>r instanceof v);t&&t.registerCall(e)}registerProperty(e,t){var r;let n=(r=this.scopes.find(o=>o.containsVariable(e)))==null?void 0:r.getVariable(e);if(!n)return;const s=n.type;let i={type:n.type,name:t};this.properties.some(o=>o.name===t&&o.type===s)||(this.properties.push(i),this.profiler.addProperty(i))}diagnose(){const e=this.functions.reduce((r,n)=>(r[n.name]=n.dependencies,r),{});return re(e)&&this.profiler.registerRecursion(),this.profiler.result()}},ne=se;var N=globalThis.window?"browser":"node";function y(e,t){return e.type===t?[]:e.children.length===0?[e]:e.children.flatMap(r=>[e,...y(r,t)])}function j({node:e,type:t,notFrom:r}){let n=y(e,r);if(n.some(s=>s.type==="ERROR"))throw new Error(`This code is not analyzable: ${e.text}`);return n.filter(s=>s.type===t)}function p({node:e,type:t,notFrom:r}){return j({node:e,type:t,notFrom:r})[0]}var oe=class{constructor(){this.tokensMap={},this.reverseTokensMap={},this.variablesCounter=0,this.functionsCounter=0,this.classesCounter=0}tokenizeIdentifier(e){const t=e.type==="function_declarator"||e.children.some(n=>n.type==="function_declarator"),r=p({node:e,type:"identifier"}).text;return this.isAlreadyMapped(r)?{name:r,mappedName:this.mapToken(r)}:{name:r,mappedName:this.registerToken(r,t?"function":"variable")}}registerToken(e,t){if(e==="main"&&t==="function")return"main";const r=this.getName(t,e);return this.tokensMap[e]=r,this.reverseTokensMap[r]=e,r}mapToken(e){return this.tokensMap[e]?this.tokensMap[e]:e}unMapToken(e){return this.reverseTokensMap[e]?this.reverseTokensMap[e]:e}isAlreadyMapped(e){return e in this.tokensMap}getName(e,t){switch(e){case"variable":return`v${this.variablesCounter++}`;case"function":return`f${this.functionsCounter++}`;case"class":return`c${this.classesCounter++}`;default:return t}}};function ae(e){return T(this,null,function*(){return(N==="node"?ce:le)(e)})}function ce(e){return T(this,null,function*(){const{default:t}=yield S(()=>import("./index-BlnPixdd.js").then(i=>i.i),__vite__mapDeps([0,1,2])),{default:r}=yield S(()=>import("./index-Be_cqDyP.js").then(i=>i.i),__vite__mapDeps([3,1])),n=new t;return n.setLanguage(r),n.parse(e)})}function le(e){return T(this,null,function*(){const{default:t}=yield S(()=>import("./tree-sitter-DxUgmTd1.js").then(i=>i.t),__vite__mapDeps([4,1,2]));yield t.init();const r=new t,n=yield t.Language.load("tree-sitter-cpp.wasm");return r.setLanguage(n),r.parse(e)})}var ue=["cin","cout","endl"];function de(e,t){const r=e.text;return ue.includes(r)||this.store.useVariable(r),this.formatter.mapToken(r)}function pe(e,t){const{mappedName:r,name:n}=this.formatter.tokenizeIdentifier(e);let s=e.children.map(o=>this.traverse(o,t+1));const i=s.shift();return this.store.declareVariable(n,i),`${i} ${s.join("").replace(n,r)}`}function he(e,t){let r=e.children.slice(0,2).map(i=>this.traverse(i,t+1));this.store.createScope({type:"while"});const n=y(e.child(1));this.store.storeCondition(n);let s=e.children.slice(2).map(i=>this.traverse(i,t+1));return this.store.leaveScope(),`${[...r,...s].join("")}`}function fe(e,t){this.store.createScope();let r=e.children.slice(0,4).map(i=>this.traverse(i,t+1));this.store.createScope({type:"for"});const n=y(e.child(3));this.store.storeCondition(n);let s=e.children.slice(4).map(i=>this.traverse(i,t+1));return this.store.leaveScope(),this.store.leaveScope(),`${[...r,...s].join("")}`}function ve(e,t){let r=this.traverse(e.child(1),t+1);this.store.createScope({type:"if"});const n=y(e.child(1));this.store.storeCondition(n);const s=e.child(2);let i=this.traverse(s,t+1);this.store.leaveScope();const o=e.children.find(c=>c.type==="else_clause");let a="";return o&&(a=this.traverse(o,t)),`if${r}${i}${a}`}function me(e,t){let[r,n]=e.children.map(s=>this.traverse(s,t+1));return this.store.registerInclude(n),`${r} ${n}
`}function ye(e,t){let r=j({node:e,type:"identifier",notFrom:"declaration"}).map(i=>i.text);return`${e.children.sort((i,o)=>{if(i.type==="{")return-1;if(o.type==="{"||i.type==="}")return 1;if(o.type==="}"||i.type==="declaration"&&o.type!=="declaration")return-1;if(i.type!=="declaration"&&o.type==="declaration")return 1;if(i.type==="declaration"&&o.type==="declaration"){const[a,c]=[i,o].map(l=>p({node:l,type:"identifier"}).text);return r.indexOf(a)-r.indexOf(c)}return 0}).map(i=>this.traverse(i,t+1)).join("")}`}function be(e,t){return this.store.breakStatement(),e.text}function ge(e,t){return this.store.continueStatement(),e.text}function _e(e,t){const r=p({node:e,type:"identifier"}).text;let n;this.formatter.isAlreadyMapped(r)?n=this.formatter.mapToken(r):n=this.formatter.registerToken(r,"function"),this.store.createScope({type:"function"});let s=e.children.map(o=>this.traverse(o,t+1));const i=s.shift();return this.store.setFunctionType(i),this.store.leaveScope(),`${i} ${s.join("").replace(r,n)}`}function we(e,t){const r=this.formatter.unMapToken(this.traverse(e.child(0)));this.store.setFunctionName(r);let n=e.children.slice(1).map(s=>this.traverse(s,t+1));return`${r}${n.join(",")}`}function Te(e,t){var r,n,s,i;let o="",a="";if(p({node:e,type:"identifier"})){let d=this.formatter.tokenizeIdentifier(e);o=d.name,a=d.mappedName}let c=e.children.map(d=>this.traverse(d,t+1)),l=((r=p({node:e,type:"template_type"}))==null?void 0:r.text)||((n=p({node:e,type:"sized_type_specifier"}))==null?void 0:n.text)||((s=p({node:e,type:"type_identifier"}))==null?void 0:s.text)||((i=p({node:e,type:"primitive_type"}))==null?void 0:i.text);return this.store.storeParameter(o,l),`${l} ${c.join("").replace(o,a)}`}function Se(e,t){if(e.child(0).type==="primitive_type")return e.children.map(i=>this.traverse(i,t+1)).join("");const{name:r}=this.formatter.tokenizeIdentifier(e);let n=e.children.map(i=>this.traverse(i,t+1));return!p({node:e,type:"field_identifier"})&&this.store.registerCall(r),n.join("")}function Ce(e,t){let r=e.children.map(s=>this.traverse(s,t+1)),n=r.pop();return`${r.join(" ")}${n}`}function ke(e,t){this.store.createScope();let r=e.children.map(n=>this.traverse(n,t+1));return this.store.leaveScope(),`${r.join("")}`}function Pe(e,t){let r=e.children.map(s=>this.traverse(s,t+1));return`${r.shift()} ${r.join("")}`}function xe(e,t){return e.children.map(n=>this.traverse(n,t+1)).join("")}function $e(e,t){let{includeChildren:r,nonIncludeChildren:n}=e.children.reduce((a,c)=>(c.type==="preproc_include"?a.includeChildren.push(c):a.nonIncludeChildren.push(c),a),{includeChildren:[],nonIncludeChildren:[]});return[...r.sort((a,c)=>a.text<c.text?-1:1).filter((a,c,l)=>c===0||a.text.replace(`
`,"")!==l[c-1].text.replace(`
`,"")),...n].map(a=>this.traverse(a,t+1)).join("")}function Ve(e,t){var r;e.children.map(i=>void 0);let n=(r=p({node:e,type:"identifier"}))!=null?r:p({node:e,type:"this"}),s=p({node:e,type:"field_identifier"});return this.store.registerProperty(n.text,s.text),`${this.formatter.mapToken(n.text)}.${s.text}`}function Ee(e,t){throw new Error(`This code is not analyzable: ${e.text}`)}var Oe=class{constructor(){this.traversers={declaration:pe.bind(this),identifier:de.bind(this),while_statement:he.bind(this),for_statement:fe.bind(this),if_statement:ve.bind(this),compound_statement:ye.bind(this),condition_clause:xe.bind(this),preproc_include:me.bind(this),break_statement:be.bind(this),continue_statement:ge.bind(this),function_definition:_e.bind(this),function_declarator:we.bind(this),parameter_declaration:Te.bind(this),call_expression:Se.bind(this),using_declaration:Ce.bind(this),else_clause:ke.bind(this),return_statement:Pe.bind(this),translation_unit:$e.bind(this),field_expression:Ve.bind(this),ERROR:Ee.bind(this)},this.store=new ne,this.formatter=new oe}analyze(e){return T(this,null,function*(){try{if(N==="node")e=(yield Promise.resolve().then(()=>(Y(),I))).preprocess(e);else if(e.includes("#define"))throw new Error("This code is not analyzable")}catch(i){throw new Error(`Error preprocessing code: ${i.message}`)}const r=(yield ae(e)).rootNode;this.store.createScope({type:"global"});let n=this.traverse(r),s={analysis:this.store.diagnose(),formattedCode:n};return this.store.leaveScope(),s})}traverse(e,t=0){let r;return this.traversers[e.type]?r=this.traversers[e.type](e,t):e.children.length?r=e.children.map(n=>this.traverse(n,t+1)).join(""):r=e.text,r}},Le=Oe,Ie=Object.defineProperty,$=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))Ue.call(t,r)&&V(e,r,t[r]);if($)for(var r of $(t))Ne.call(t,r)&&V(e,r,t[r]);return e},je=(e,t,r)=>new Promise((n,s)=>{var i=c=>{try{a(r.next(c))}catch(l){s(l)}},o=c=>{try{a(r.throw(c))}catch(l){s(l)}},a=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,o);a((r=r.apply(e,t)).next())}),Fe={libraries:{forced:[],prohibited:[]},mustUseFunctions:[],properties:{forced:[],prohibited:[]},programType:{}},E=Fe,Re=class{constructor(){this.options=g({},E),this.verdict={valid:!0,errors:[]}}setOptions(e){this.options=g({},E);for(let t in e)Array.isArray(e[t])?this.options[t]=[...this.options[t],...e[t]]:typeof e[t]=="object"?this.options[t]=g(g({},this.options[t]),e[t]):this.options[t]=e[t]}validate(e){return je(this,null,function*(){this.verdict={valid:!0,errors:[]};const t=new Le;let r;return r=yield t.analyze(e),this.validateLibraries(r),this.validateProgramType(r),this.validateFunctions(r),this.validateProperties(r),this.verdict})}validateLibraries(e){let t=e.analysis.usedLibraries;const{forced:r,prohibited:n}=this.options.libraries;r.every(o=>t.includes(o))||(this.verdict.valid=!1,this.verdict.errors.push("The program does not use all the required libraries")),n.some(o=>t.includes(o))&&(this.verdict.valid=!1,this.verdict.errors.push("The program uses a prohibited library"))}validateProgramType(e){const{programType:t}=this.options;"recursive"in t&&t.recursive!==e.analysis.isRecursive&&(this.verdict.valid=!1,this.verdict.errors.push(`The program is ${t.recursive?"not ":""}recursive`)),"iterative"in t&&t.iterative!==e.analysis.isIterative&&(this.verdict.valid=!1,this.verdict.errors.push(`The program is ${t.iterative?"not ":""}iterative`))}validateFunctions(e){const{mustUseFunctions:t}=this.options,r=e.analysis.functions,n=t.filter(s=>{const i=r.find(o=>o.name===s.name);if(!i)return!0;for(let o=0;o<s.parameters.length;o++){if(!i.parameters[o])return!0;const{name:a,type:c}=s.parameters[o],{name:l,type:d}=i.parameters[o];if(a!==l||c!==d)return!0}return!1});n.length&&(this.verdict.valid=!1,this.verdict.errors.push("The program does not use all the required functions: "+n.map(({name:s})=>s).join(", ")))}validateProperties(e){const{forced:t,prohibited:r}=this.options.properties,n=e.analysis.properties,s=t.filter(o=>!n.some(a=>a.name===o.name&&a.type===o.type)),i=r.filter(o=>n.some(a=>a.name===o.name&&a.type===o.type));s.length&&(this.verdict.valid=!1,this.verdict.errors.push("The program does not use all the required properties: "+s.map(({name:o})=>o).join(", "))),i.length&&(this.verdict.valid=!1,this.verdict.errors.push("The program uses a prohibited property: "+i.map(({name:o})=>o).join(", ")))}},qe=Re,De=qe;let h={programType:{},libraries:{forced:[],prohibited:[]}};const[O,L]=document.querySelectorAll(".checkbox"),[_,w]=document.querySelectorAll(".switch"),[Ae,ze]=document.querySelectorAll(".input");document.getElementById("main").addEventListener("click",async()=>{const e=document.getElementById("file").files[0];if(!e)return alert("Please select a file");const t=new De;t.setOptions(h);const r=await e.text(),n=await t.validate(r);document.getElementById("result").innerText=JSON.stringify(n,null,2)});O.addEventListener("click",()=>{let e=O.checked;e?h.programType.recursive=!1:(delete h.programType.recursive,_.checked=!1),_.style.visibility=e?"visible":"hidden",f()});L.addEventListener("click",e=>{let t=L.checked;t?h.programType.iterative=!1:(delete h.programType.iterative,w.checked=!1),w.style.visibility=t?"visible":"hidden",f()});_.addEventListener("click",()=>{let e=_.checked;h.programType.recursive=e,f()});w.addEventListener("click",()=>{let e=w.checked;h.programType.iterative=e,f()});Ae.addEventListener("input",e=>{h.libraries.forced=e.target.value.split(",").map(t=>t.trim()),f()});ze.addEventListener("input",e=>{h.libraries.prohibited=e.target.value.split(",").map(t=>t.trim()),f()});function f(){document.getElementById("options").innerText=JSON.stringify(h,null,2)}f();