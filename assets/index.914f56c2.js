(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const x={};function ge(e){x.context=e}const me=(e,t)=>e===t,pe=Symbol("solid-proxy"),we=Symbol("solid-track"),K={equals:me};let le=ce;const C={},N=1,U=2,re={owned:null,cleanups:null,context:null,owner:null};var h=null;let D=null,a=null,O=null,y=null,m=null,X=0;function B(e,t){const n=a,s=h,i=e.length===0,l=i?re:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>Y(l));h=l,a=null;try{return W(o,!0)}finally{a=n,h=s}}function oe(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,pending:C,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==C?n.pending:n.value)),G(n,i));return[fe.bind(n),s]}function P(e,t,n){const s=Q(e,t,!1,N);I(s)}function be(e,t,n){le=Le;const s=Q(e,t,!1,N);s.user=!0,m?m.push(s):I(s)}function xe(e,t,n){n=n?Object.assign({},K,n):K;const s=Q(e,t,!0,0);return s.pending=C,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),fe.bind(s)}function Ae(e){if(O)return e();let t;const n=O=[];try{t=e()}finally{O=null}return W(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==C){const l=i.pending;i.pending=C,G(i,l)}}},!1),t}function q(e){let t,n=a;return a=null,t=e(),a=n,t}function Ee(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function fe(){const e=D;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===N||e?I(this):V(this),y=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function G(e,t,n){if(O)return e.pending===C&&O.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&W(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&D.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?y.push(l):m.push(l),l.observers&&ue(l)),s||(l.state=N)}if(y.length>1e6)throw y=[],new Error},!1),t}function I(e){if(!e.fn)return;Y(e);const t=h,n=a,s=X;a=h=e,Ne(e,e.value,s),a=n,h=t}function Ne(e,t,n){let s;try{s=e.fn(t)}catch(i){ae(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?G(e,s):e.value=s,e.updatedAt=n)}function Q(e,t,n,s=N,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==re&&(h.owned?h.owned.push(l):h.owned=[l]),l}function j(e){const t=D;if(e.state===0||t)return;if(e.state===U||t)return V(e);if(e.suspense&&q(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===N||t)I(e);else if(e.state===U||t){const i=y;y=null,V(e,n[0]),y=i}}function W(e,t){if(y)return e();let n=!1;t||(y=[]),m?n=!0:m=[],X++;try{const s=e();return Se(n),s}catch(s){y||(m=null),ae(s)}}function Se(e){y&&(ce(y),y=null),!e&&(m.length?Ae(()=>{le(m),m=null}):m=null)}function ce(e){for(let t=0;t<e.length;t++)j(e[t])}function Le(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:j(i)}x.context&&ge();const s=e.length;for(t=0;t<n;t++)j(e[t]);for(t=s;t<e.length;t++)j(e[t])}function V(e,t){const n=D;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||n?i!==t&&j(i):(i.state===U||n)&&V(i,t))}}function ue(e){const t=D;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=U,s.pure?y.push(s):m.push(s),s.observers&&ue(s))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ae(e){throw e}const Ce=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function Pe(e,t,n={}){let s=[],i=[],l=[],o=0,r=t.length>1?[]:null;return Ee(()=>Z(l)),()=>{let u=e()||[],c,f;return u[we],q(()=>{let d=u.length,p,E,$,F,M,w,b,A,S;if(d===0)o!==0&&(Z(l),l=[],s=[],i=[],o=0,r&&(r=[])),n.fallback&&(s=[Ce],i[0]=B(ye=>(l[0]=ye,n.fallback())),o=1);else if(o===0){for(i=new Array(d),f=0;f<d;f++)s[f]=u[f],i[f]=B(g);o=d}else{for($=new Array(d),F=new Array(d),r&&(M=new Array(d)),w=0,b=Math.min(o,d);w<b&&s[w]===u[w];w++);for(b=o-1,A=d-1;b>=w&&A>=w&&s[b]===u[A];b--,A--)$[A]=i[b],F[A]=l[b],r&&(M[A]=r[b]);for(p=new Map,E=new Array(A+1),f=A;f>=w;f--)S=u[f],c=p.get(S),E[f]=c===void 0?-1:c,p.set(S,f);for(c=w;c<=b;c++)S=s[c],f=p.get(S),f!==void 0&&f!==-1?($[f]=i[c],F[f]=l[c],r&&(M[f]=r[c]),f=E[f],p.set(S,f)):l[c]();for(f=w;f<d;f++)f in $?(i[f]=$[f],l[f]=F[f],r&&(r[f]=M[f],r[f](f))):i[f]=B(g);i=i.slice(0,o=d),s=u.slice(0)}return i});function g(d){if(l[f]=d,r){const[p,E]=oe(f);return r[f]=E,t(u[f],p)}return t(u[f])}}}function H(e,t){return q(()=>e(t||{}))}function _(){return!0}const Te={get(e,t,n){return t===pe?n:e.get(t)},has(e,t){return e.has(t)},set:_,deleteProperty:_,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:_,deleteProperty:_}},ownKeys(e){return e.keys()}};function $e(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=t.map(l=>{const o={};for(let r=0;r<l.length;r++){const u=l[r];Object.defineProperty(o,u,s[u]?s[u]:{get(){return e[u]},set(){return!0}})}return o});return i.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},Te)),i}function ke(e){const t="fallback"in e&&{fallback:()=>e.fallback};return xe(Pe(()=>e.each,e.children,t||void 0))}const Oe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],je=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Oe]),De=new Set(["innerHTML","textContent","innerText","children"]),Ie={className:"class",htmlFor:"for"},z={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Fe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Me={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function _e(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,u=t[i-1].nextSibling,c=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const f=l<s?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],f)}else if(l===r)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!c){c=new Map;let g=r;for(;g<l;)c.set(n[g],g++)}const f=c.get(t[o]);if(f!=null)if(r<f&&f<l){let g=o,d=1,p;for(;++g<i&&g<l&&!((p=c.get(t[g]))==null||p!==f+d);)d++;if(d>f-r){const E=t[o];for(;r<f;)e.insertBefore(n[r++],E)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const ee="_$DX_DELEGATE";function Be(e,t,n){let s;return B(i=>{s=i,t===document?e():v(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function J(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ve(e,t=window.document){const n=t[ee]||(t[ee]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,We))}}function Ke(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ue(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ve(e,t){t==null?e.removeAttribute("class"):e.className=t}function He(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function Re(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,o;for(l=0,o=i.length;l<o;l++){const r=i[l];!r||r==="undefined"||t[r]||(te(e,r,!1),delete n[r])}for(l=0,o=s.length;l<o;l++){const r=s[l],u=!!t[r];!r||r==="undefined"||n[r]===u||!u||(te(e,r,!0),n[r]=u)}return n}function Xe(e,t,n={}){const s=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return s.cssText=t;i&&(s.cssText=void 0,n={}),t||(t={});let l,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)l=t[o],l!==n[o]&&(s.setProperty(o,l),n[o]=l);return n}function qe(e,t,n,s){typeof t=="function"?P(i=>se(e,t(),i,n,s)):se(e,t,void 0,n,s)}function v(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return T(e,t,s,n);P(i=>T(e,t(),i,n),s)}function Ge(e,t,n,s,i={},l=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;ne(e,o,null,i[o],n,l)}for(const o in t){if(o==="children"){s||T(e,t.children);continue}const r=t[o];i[o]=ne(e,o,r,i[o],n,l)}}function Qe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function te(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function ne(e,t,n,s,i,l){let o,r,u;if(t==="style")return Xe(e,n,s);if(t==="classList")return Re(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),f=Fe.has(c);if(!f&&s){const g=Array.isArray(s)?s[0]:s;e.removeEventListener(c,g)}(f||n)&&(He(e,c,n,f),f&&ve([c]))}else if((u=De.has(t))||!i&&(z[t]||(r=je.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?Ve(e,n):o&&!r&&!u?e[Qe(t)]=n:e[z[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Me[t.split(":")[0]];c?Ue(e,c,t,n):Ke(e,Ie[t]||t,n)}return n}function We(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function se(e,t,n={},s,i){return t||(t={}),!i&&"children"in t&&P(()=>n.children=T(e,t.children,n.children)),t.ref&&t.ref(e),P(()=>Ge(e,t,s,!0,n,!0)),n}function T(e,t,n,s,i){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(x.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=L(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(x.context)return n;n=L(e,n,s)}else{if(l==="function")return P(()=>{let r=t();for(;typeof r=="function";)r=r();n=T(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(R(r,t,n,i))return P(()=>n=T(e,r,n,s,!0)),()=>n;if(x.context){for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=L(e,n,s),o)return n}else u?n.length===0?ie(e,r,s):_e(e,n,r):(n&&L(e),ie(e,r));n=r}else if(t instanceof Node){if(x.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function R(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=n&&n[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=R(e,r,u)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=R(e,Array.isArray(r)?r:[r],u)||i}else e.push(r),i=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function ie(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const Ye=J("<div></div>"),de=globalThis??window;let k=typeof de.turnstile<"u"?"ready":"unloaded",he;{const e="cf__reactTurnstileOnLoad",t="https://challenges.cloudflare.com/turnstile/v0/api.js";let n;const s=new Promise((i,l)=>{n={resolve:i,reject:l},k==="ready"&&i(void 0)});de[e]=()=>{n.resolve(),k="ready"},he=()=>{if(k==="unloaded"){k="loading";const i=`${t}?onload=${e}&render=explicit`,l=document.createElement("script");l.src=i,l.async=!0,l.addEventListener("error",()=>{n.reject("Failed to load Turnstile.")}),document.head.appendChild(l)}return s}}function Je(e){let t;const[n,s]=$e(e,["sitekey","action","cData","theme","tabIndex","responseField","responseFieldName","onVerify","onError","onLoad","onExpire"]);return be(i=>{if(i?.(),!t)return;let l=!1,o="";return(async()=>{if(k!=="ready")try{await he()}catch(u){n.onError?.(u);return}if(l||!t)return;const r={sitekey:n.sitekey,action:n.action,cData:n.cData,theme:n.theme,tabindex:n.tabIndex,callback:u=>n.onVerify(u),"error-callback":()=>n.onError?.(),"expired-callback":()=>n.onExpire?.(),"response-field":n.responseField,"response-field-name":n.responseFieldName};o=window.turnstile.render(t,r),n.onLoad?.(o)})(),()=>{l=!0,o&&window.turnstile.remove(o)}}),(()=>{const i=Ye.cloneNode(!0),l=t;return typeof l=="function"?l(i):t=i,qe(i,s,!1,!1),i})()}const Ze=J("<div><div><select></select></div></div>"),ze=J("<option></option>"),et=()=>{const[e,t]=oe("auto");return(()=>{const n=Ze.cloneNode(!0),s=n.firstChild,i=s.firstChild;return n.style.setProperty("width","100vw"),n.style.setProperty("height","100vh"),n.style.setProperty("display","flex"),n.style.setProperty("flex-direction","column"),n.style.setProperty("row-gap","4px"),n.style.setProperty("justify-content","center"),n.style.setProperty("align-items","center"),v(n,H(Je,{sitekey:"1x00000000000000000000AA",onVerify:l=>alert(l),get theme(){return e()}}),s),i.addEventListener("change",l=>{t(l.currentTarget.value)}),i.style.setProperty("font-family","sans-serif"),i.style.setProperty("padding","4px"),i.style.setProperty("border-radius","4px"),v(i,H(ke,{each:["auto","light","dark"],children:l=>(()=>{const o=ze.cloneNode(!0);return o.value=l,v(o,l),o})()})),n})()};Be(()=>H(et,{}),document.getElementById("root"));
