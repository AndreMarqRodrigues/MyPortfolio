(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function za(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const nt={},tr=[],ln=()=>{},Vh=()=>!1,kh=/^on[^a-z]/,Zs=n=>kh.test(n),Ha=n=>n.startsWith("onUpdate:"),pt=Object.assign,Ga=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wh=Object.prototype.hasOwnProperty,Ye=(n,e)=>Wh.call(n,e),Ie=Array.isArray,Fr=n=>Js(n)==="[object Map]",Xh=n=>Js(n)==="[object Set]",Ve=n=>typeof n=="function",xt=n=>typeof n=="string",Va=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",Ju=n=>at(n)&&Ve(n.then)&&Ve(n.catch),qh=Object.prototype.toString,Js=n=>qh.call(n),Yh=n=>Js(n).slice(8,-1),jh=n=>Js(n)==="[object Object]",ka=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ns=za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$h=/-(\w)/g,vn=Qs(n=>n.replace($h,(e,t)=>t?t.toUpperCase():"")),Kh=/\B([A-Z])/g,gr=Qs(n=>n.replace(Kh,"-$1").toLowerCase()),eo=Qs(n=>n.charAt(0).toUpperCase()+n.slice(1)),yo=Qs(n=>n?`on${eo(n)}`:""),Wr=(n,e)=>!Object.is(n,e),Fs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ks=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},fa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Zh=n=>{const e=xt(n)?Number(n):NaN;return isNaN(e)?n:e};let Cl;const ha=()=>Cl||(Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wa(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?td(i):Wa(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(xt(n))return n;if(at(n))return n}}const Jh=/;(?![^(]*\))/g,Qh=/:([^]+)/,ed=/\/\*[^]*?\*\//g;function td(n){const e={};return n.replace(ed,"").split(Jh).forEach(t=>{if(t){const i=t.split(Qh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xr(n){let e="";if(xt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Xr(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const nd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",id=za(nd);function Qu(n){return!!n||n===""}let en;class rd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=en;try{return en=this,e()}finally{en=t}}}on(){en=this}off(){en=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sd(n,e=en){e&&e.active&&e.effects.push(n)}function od(){return en}const Xa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ef=n=>(n.w&ri)>0,tf=n=>(n.n&ri)>0,ad=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ri},ld=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ef(r)&&!tf(r)?r.delete(n):e[t++]=r,r.w&=~ri,r.n&=~ri}e.length=t}},da=new WeakMap;let Ur=0,ri=1;const pa=30;let nn;const Ti=Symbol(""),ma=Symbol("");class qa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,sd(this,i)}run(){if(!this.active)return this.fn();let e=nn,t=Qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,Qn=!0,ri=1<<++Ur,Ur<=pa?ad(this):Pl(this),this.fn()}finally{Ur<=pa&&ld(this),ri=1<<--Ur,nn=this.parent,Qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(Pl(this),this.onStop&&this.onStop(),this.active=!1)}}function Pl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Qn=!0;const nf=[];function _r(){nf.push(Qn),Qn=!1}function vr(){const n=nf.pop();Qn=n===void 0?!0:n}function Ft(n,e,t){if(Qn&&nn){let i=da.get(n);i||da.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Xa()),rf(r)}}function rf(n,e){let t=!1;Ur<=pa?tf(n)||(n.n|=ri,t=!ef(n)):t=!n.has(nn),t&&(n.add(nn),nn.deps.push(n))}function Bn(n,e,t,i,r,s){const o=da.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?ka(t)&&a.push(o.get("length")):(a.push(o.get(Ti)),Fr(n)&&a.push(o.get(ma)));break;case"delete":Ie(n)||(a.push(o.get(Ti)),Fr(n)&&a.push(o.get(ma)));break;case"set":Fr(n)&&a.push(o.get(Ti));break}if(a.length===1)a[0]&&ga(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ga(Xa(l))}}function ga(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&Ll(i);for(const i of t)i.computed||Ll(i)}function Ll(n,e){(n!==nn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const cd=za("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Va)),ud=Ya(),fd=Ya(!1,!0),hd=Ya(!0),Ul=dd();function dd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=$e(this);for(let s=0,o=this.length;s<o;s++)Ft(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){_r();const i=$e(this)[e].apply(this,t);return vr(),i}}),n}function pd(n){const e=$e(this);return Ft(e,"has",n),e.hasOwnProperty(n)}function Ya(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Pd:uf:e?cf:lf).get(i))return i;const o=Ie(i);if(!n){if(o&&Ye(Ul,r))return Reflect.get(Ul,r,s);if(r==="hasOwnProperty")return pd}const a=Reflect.get(i,r,s);return(Va(r)?sf.has(r):cd(r))||(n||Ft(i,"get",r),e)?a:yt(a)?o&&ka(r)?a:a.value:at(a)?n?hf(a):no(a):a}}const md=of(),gd=of(!0);function of(n=!1){return function(t,i,r,s){let o=t[i];if(lr(o)&&yt(o)&&!yt(r))return!1;if(!n&&(!Ws(r)&&!lr(r)&&(o=$e(o),r=$e(r)),!Ie(t)&&yt(o)&&!yt(r)))return o.value=r,!0;const a=Ie(t)&&ka(i)?Number(i)<t.length:Ye(t,i),l=Reflect.set(t,i,r,s);return t===$e(s)&&(a?Wr(r,o)&&Bn(t,"set",i,r):Bn(t,"add",i,r)),l}}function _d(n,e){const t=Ye(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Bn(n,"delete",e,void 0),i}function vd(n,e){const t=Reflect.has(n,e);return(!Va(e)||!sf.has(e))&&Ft(n,"has",e),t}function xd(n){return Ft(n,"iterate",Ie(n)?"length":Ti),Reflect.ownKeys(n)}const af={get:ud,set:md,deleteProperty:_d,has:vd,ownKeys:xd},Md={get:hd,set(n,e){return!0},deleteProperty(n,e){return!0}},Sd=pt({},af,{get:fd,set:gd}),ja=n=>n,to=n=>Reflect.getPrototypeOf(n);function ls(n,e,t=!1,i=!1){n=n.__v_raw;const r=$e(n),s=$e(e);t||(e!==s&&Ft(r,"get",e),Ft(r,"get",s));const{has:o}=to(r),a=i?ja:t?Za:qr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function cs(n,e=!1){const t=this.__v_raw,i=$e(t),r=$e(n);return e||(n!==r&&Ft(i,"has",n),Ft(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function us(n,e=!1){return n=n.__v_raw,!e&&Ft($e(n),"iterate",Ti),Reflect.get(n,"size",n)}function Dl(n){n=$e(n);const e=$e(this);return to(e).has.call(e,n)||(e.add(n),Bn(e,"add",n,n)),this}function Il(n,e){e=$e(e);const t=$e(this),{has:i,get:r}=to(t);let s=i.call(t,n);s||(n=$e(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Wr(e,o)&&Bn(t,"set",n,e):Bn(t,"add",n,e),this}function Nl(n){const e=$e(this),{has:t,get:i}=to(e);let r=t.call(e,n);r||(n=$e(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Bn(e,"delete",n,void 0),s}function Fl(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&Bn(n,"clear",void 0,void 0),t}function fs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=$e(o),l=e?ja:n?Za:qr;return!n&&Ft(a,"iterate",Ti),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function hs(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),o=Fr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?ja:e?Za:qr;return!e&&Ft(s,"iterate",l?ma:Ti),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Gn(n){return function(...e){return n==="delete"?!1:this}}function Ed(){const n={get(s){return ls(this,s)},get size(){return us(this)},has:cs,add:Dl,set:Il,delete:Nl,clear:Fl,forEach:fs(!1,!1)},e={get(s){return ls(this,s,!1,!0)},get size(){return us(this)},has:cs,add:Dl,set:Il,delete:Nl,clear:Fl,forEach:fs(!1,!0)},t={get(s){return ls(this,s,!0)},get size(){return us(this,!0)},has(s){return cs.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:fs(!0,!1)},i={get(s){return ls(this,s,!0,!0)},get size(){return us(this,!0)},has(s){return cs.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hs(s,!1,!1),t[s]=hs(s,!0,!1),e[s]=hs(s,!1,!0),i[s]=hs(s,!0,!0)}),[n,t,e,i]}const[yd,Td,bd,Ad]=Ed();function $a(n,e){const t=e?n?Ad:bd:n?Td:yd;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ye(t,r)&&r in i?t:i,r,s)}const wd={get:$a(!1,!1)},Rd={get:$a(!1,!0)},Cd={get:$a(!0,!1)},lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,Pd=new WeakMap;function Ld(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ud(n){return n.__v_skip||!Object.isExtensible(n)?0:Ld(Yh(n))}function no(n){return lr(n)?n:Ka(n,!1,af,wd,lf)}function ff(n){return Ka(n,!1,Sd,Rd,cf)}function hf(n){return Ka(n,!0,Md,Cd,uf)}function Ka(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Ud(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function nr(n){return lr(n)?nr(n.__v_raw):!!(n&&n.__v_isReactive)}function lr(n){return!!(n&&n.__v_isReadonly)}function Ws(n){return!!(n&&n.__v_isShallow)}function df(n){return nr(n)||lr(n)}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function pf(n){return ks(n,"__v_skip",!0),n}const qr=n=>at(n)?no(n):n,Za=n=>at(n)?hf(n):n;function mf(n){Qn&&nn&&(n=$e(n),rf(n.dep||(n.dep=Xa())))}function gf(n,e){n=$e(n);const t=n.dep;t&&ga(t)}function yt(n){return!!(n&&n.__v_isRef===!0)}function Dd(n){return _f(n,!1)}function Id(n){return _f(n,!0)}function _f(n,e){return yt(n)?n:new Nd(n,e)}class Nd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:qr(e)}get value(){return mf(this),this._value}set value(e){const t=this.__v_isShallow||Ws(e)||lr(e);e=t?e:$e(e),Wr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:qr(e),gf(this))}}function ir(n){return yt(n)?n.value:n}const Fd={get:(n,e,t)=>ir(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function vf(n){return nr(n)?n:new Proxy(n,Fd)}class Od{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new qa(e,()=>{this._dirty||(this._dirty=!0,gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return mf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Bd(n,e,t=!1){let i,r;const s=Ve(n);return s?(i=n,r=ln):(i=n.get,r=n.set),new Od(i,r,s||!r,t)}function ei(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){io(s,e,t)}return r}function jt(n,e,t,i){if(Ve(n)){const s=ei(n,e,t,i);return s&&Ju(s)&&s.catch(o=>{io(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(jt(n[s],e,t,i));return r}function io(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ei(l,null,10,[n,o,a]);return}}zd(n,t,r,i)}function zd(n,e,t,i=!0){console.error(n)}let Yr=!1,_a=!1;const Et=[];let gn=0;const rr=[];let Ln=null,xi=0;const xf=Promise.resolve();let Ja=null;function Mf(n){const e=Ja||xf;return n?e.then(this?n.bind(this):n):e}function Hd(n){let e=gn+1,t=Et.length;for(;e<t;){const i=e+t>>>1;jr(Et[i])<n?e=i+1:t=i}return e}function Qa(n){(!Et.length||!Et.includes(n,Yr&&n.allowRecurse?gn+1:gn))&&(n.id==null?Et.push(n):Et.splice(Hd(n.id),0,n),Sf())}function Sf(){!Yr&&!_a&&(_a=!0,Ja=xf.then(yf))}function Gd(n){const e=Et.indexOf(n);e>gn&&Et.splice(e,1)}function Vd(n){Ie(n)?rr.push(...n):(!Ln||!Ln.includes(n,n.allowRecurse?xi+1:xi))&&rr.push(n),Sf()}function Ol(n,e=Yr?gn+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function Ef(n){if(rr.length){const e=[...new Set(rr)];if(rr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((t,i)=>jr(t)-jr(i)),xi=0;xi<Ln.length;xi++)Ln[xi]();Ln=null,xi=0}}const jr=n=>n.id==null?1/0:n.id,kd=(n,e)=>{const t=jr(n)-jr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function yf(n){_a=!1,Yr=!0,Et.sort(kd);const e=ln;try{for(gn=0;gn<Et.length;gn++){const t=Et[gn];t&&t.active!==!1&&ei(t,null,14)}}finally{gn=0,Et.length=0,Ef(),Yr=!1,Ja=null,(Et.length||rr.length)&&yf()}}function Wd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||nt;h&&(r=t.map(p=>xt(p)?p.trim():p)),f&&(r=t.map(fa))}let a,l=i[a=yo(e)]||i[a=yo(vn(e))];!l&&s&&(l=i[a=yo(gr(e))]),l&&jt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,jt(c,n,6,r)}}function Tf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Tf(c,e,!0);u&&(a=!0,pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):pt(o,s),at(n)&&i.set(n,o),o)}function ro(n,e){return!n||!Zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,gr(e))||Ye(n,e))}let Ht=null,so=null;function Xs(n){const e=Ht;return Ht=n,so=n&&n.type.__scopeId||null,e}function el(n){so=n}function tl(){so=null}function hn(n,e=Ht,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&$l(-1);const s=Xs(e);let o;try{o=n(...r)}finally{Xs(s),i._d&&$l(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function To(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:v,inheritAttrs:g}=n;let m,d;const E=Xs(n);try{if(t.shapeFlag&4){const S=r||i;m=pn(u.call(S,S,f,s,p,h,v)),d=l}else{const S=e;m=pn(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),d=e.props?l:Xd(l)}}catch(S){Br.length=0,io(S,n,1),m=Ke(Fn)}let M=m;if(d&&g!==!1){const S=Object.keys(d),{shapeFlag:w}=M;S.length&&w&7&&(o&&S.some(Ha)&&(d=qd(d,o)),M=si(M,d))}return t.dirs&&(M=si(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),m=M,Xs(E),m}const Xd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zs(t))&&((e||(e={}))[t]=n[t]);return e},qd=(n,e)=>{const t={};for(const i in n)(!Ha(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ro(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bl(i,o,c):!0:!!o;return!1}function Bl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ro(t,s))return!0}return!1}function jd({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const $d=n=>n.__isSuspense;function Kd(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Vd(n)}const ds={};function Os(n,e,t){return bf(n,e,t)}function bf(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=nt){var a;const l=od()===((a=vt)==null?void 0:a.scope)?vt:null;let c,u=!1,f=!1;if(yt(n)?(c=()=>n.value,u=Ws(n)):nr(n)?(c=()=>n,i=!0):Ie(n)?(f=!0,u=n.some(S=>nr(S)||Ws(S)),c=()=>n.map(S=>{if(yt(S))return S.value;if(nr(S))return yi(S);if(Ve(S))return ei(S,l,2)})):Ve(n)?e?c=()=>ei(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),jt(n,l,3,[p])}:c=ln,e&&i){const S=c;c=()=>yi(S())}let h,p=S=>{h=E.onStop=()=>{ei(S,l,4)}},v;if(Kr)if(p=ln,e?t&&jt(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const S=Yp();v=S.__watcherHandles||(S.__watcherHandles=[])}else return ln;let g=f?new Array(n.length).fill(ds):ds;const m=()=>{if(E.active)if(e){const S=E.run();(i||u||(f?S.some((w,C)=>Wr(w,g[C])):Wr(S,g)))&&(h&&h(),jt(e,l,3,[S,g===ds?void 0:f&&g[0]===ds?[]:g,p]),g=S)}else E.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>Ut(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Qa(m));const E=new qa(c,d);e?t?m():g=E.run():r==="post"?Ut(E.run.bind(E),l&&l.suspense):E.run();const M=()=>{E.stop(),l&&l.scope&&Ga(l.scope.effects,E)};return v&&v.push(M),M}function Zd(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?Af(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=vt;cr(this);const a=bf(r,s.bind(i),t);return o?cr(o):bi(),a}function Af(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function yi(n,e){if(!at(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),yt(n))yi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)yi(n[t],e);else if(Xh(n)||Fr(n))n.forEach(t=>{yi(t,e)});else if(jh(n))for(const t in n)yi(n[t],e);return n}function sr(n,e){const t=Ht;if(t===null)return n;const i=uo(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=nt]=e[s];o&&(Ve(o)&&(o={mounted:o,updated:o}),o.deep&&yi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(_r(),jt(l,t,8,[n.el,a,n,e]),vr())}}function Jd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Uf(()=>{n.isMounted=!0}),Df(()=>{n.isUnmounting=!0}),n}const Xt=[Function,Array],wf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},Qd={name:"BaseTransition",props:wf,setup(n,{slots:e}){const t=zp(),i=Jd();let r;return()=>{const s=e.default&&Cf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const g of s)if(g.type!==Fn){o=g;break}}const a=$e(n),{mode:l}=a;if(i.isLeaving)return bo(o);const c=zl(o);if(!c)return bo(o);const u=va(c,a,i,t);xa(c,u);const f=t.subTree,h=f&&zl(f);let p=!1;const{getTransitionKey:v}=c.type;if(v){const g=v();r===void 0?r=g:g!==r&&(r=g,p=!0)}if(h&&h.type!==Fn&&(!Mi(c,h)||p)){const g=va(h,a,i,t);if(xa(h,g),l==="out-in")return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},bo(o);l==="in-out"&&c.type!==Fn&&(g.delayLeave=(m,d,E)=>{const M=Rf(i,h);M[String(h.key)]=h,m._leaveCb=()=>{d(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},ep=Qd;function Rf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function va(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:g,onAppear:m,onAfterAppear:d,onAppearCancelled:E}=e,M=String(n.key),S=Rf(t,n),w=(I,y)=>{I&&jt(I,i,9,y)},C=(I,y)=>{const b=y[1];w(I,y),Ie(I)?I.every(te=>te.length<=1)&&b():I.length<=1&&b()},P={mode:s,persisted:o,beforeEnter(I){let y=a;if(!t.isMounted)if(r)y=g||a;else return;I._leaveCb&&I._leaveCb(!0);const b=S[M];b&&Mi(n,b)&&b.el._leaveCb&&b.el._leaveCb(),w(y,[I])},enter(I){let y=l,b=c,te=u;if(!t.isMounted)if(r)y=m||l,b=d||c,te=E||u;else return;let G=!1;const O=I._enterCb=W=>{G||(G=!0,W?w(te,[I]):w(b,[I]),P.delayedLeave&&P.delayedLeave(),I._enterCb=void 0)};y?C(y,[I,O]):O()},leave(I,y){const b=String(n.key);if(I._enterCb&&I._enterCb(!0),t.isUnmounting)return y();w(f,[I]);let te=!1;const G=I._leaveCb=O=>{te||(te=!0,y(),O?w(v,[I]):w(p,[I]),I._leaveCb=void 0,S[b]===n&&delete S[b])};S[b]=n,h?C(h,[I,G]):G()},clone(I){return va(I,e,t,i)}};return P}function bo(n){if(oo(n))return n=si(n),n.children=null,n}function zl(n){return oo(n)?n.children?n.children[0]:void 0:n}function xa(n,e){n.shapeFlag&6&&n.component?xa(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Cf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===dn?(o.patchFlag&128&&r++,i=i.concat(Cf(o.children,e,a))):(e||o.type!==Fn)&&i.push(a!=null?si(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Pf(n,e){return Ve(n)?(()=>pt({name:n.name},e,{setup:n}))():n}const Bs=n=>!!n.type.__asyncLoader,oo=n=>n.type.__isKeepAlive;function tp(n,e){Lf(n,"a",e)}function np(n,e){Lf(n,"da",e)}function Lf(n,e,t=vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ao(e,i,t),t){let r=t.parent;for(;r&&r.parent;)oo(r.parent.vnode)&&ip(i,e,t,r),r=r.parent}}function ip(n,e,t,i){const r=ao(e,n,i,!0);If(()=>{Ga(i[e],r)},t)}function ao(n,e,t=vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;_r(),cr(t);const a=jt(e,t,n,o);return bi(),vr(),a});return i?r.unshift(s):r.push(s),s}}const zn=n=>(e,t=vt)=>(!Kr||n==="sp")&&ao(n,(...i)=>e(...i),t),rp=zn("bm"),Uf=zn("m"),sp=zn("bu"),op=zn("u"),Df=zn("bum"),If=zn("um"),ap=zn("sp"),lp=zn("rtg"),cp=zn("rtc");function up(n,e=vt){ao("ec",n,e)}const Nf="components";function xn(n,e){return hp(Nf,n,!0,e)||n}const fp=Symbol.for("v-ndc");function hp(n,e,t=!0,i=!1){const r=Ht||vt;if(r){const s=r.type;if(n===Nf){const a=Wp(s,!1);if(a&&(a===e||a===vn(e)||a===eo(vn(e))))return s}const o=Hl(r[n]||s[n],e)||Hl(r.appContext[n],e);return!o&&i?s:o}}function Hl(n,e){return n&&(n[e]||n[vn(e)]||n[eo(vn(e))])}const Ma=n=>n?Xf(n)?uo(n)||n.proxy:Ma(n.parent):null,Or=pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ma(n.parent),$root:n=>Ma(n.root),$emit:n=>n.emit,$options:n=>nl(n),$forceUpdate:n=>n.f||(n.f=()=>Qa(n.update)),$nextTick:n=>n.n||(n.n=Mf.bind(n.proxy)),$watch:n=>Zd.bind(n)}),Ao=(n,e)=>n!==nt&&!n.__isScriptSetup&&Ye(n,e),dp={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ao(i,e))return o[e]=1,i[e];if(r!==nt&&Ye(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(t!==nt&&Ye(t,e))return o[e]=4,t[e];Sa&&(o[e]=0)}}const u=Or[e];let f,h;if(u)return e==="$attrs"&&Ft(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==nt&&Ye(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ao(r,e)?(r[e]=t,!0):i!==nt&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==nt&&Ye(n,o)||Ao(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(Or,o)||Ye(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gl(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Sa=!0;function pp(n){const e=nl(n),t=n.proxy,i=n.ctx;Sa=!1,e.beforeCreate&&Vl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:g,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:M,unmounted:S,render:w,renderTracked:C,renderTriggered:P,errorCaptured:I,serverPrefetch:y,expose:b,inheritAttrs:te,components:G,directives:O,filters:W}=e;if(c&&mp(c,i,null),o)for(const X in o){const Y=o[X];Ve(Y)&&(i[X]=Y.bind(t))}if(r){const X=r.call(t,t);at(X)&&(n.data=no(X))}if(Sa=!0,s)for(const X in s){const Y=s[X],he=Ve(Y)?Y.bind(t,t):Ve(Y.get)?Y.get.bind(t,t):ln,le=!Ve(Y)&&Ve(Y.set)?Y.set.bind(t):ln,k=rn({get:he,set:le});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>k.value,set:q=>k.value=q})}if(a)for(const X in a)Ff(a[X],i,t,X);if(l){const X=Ve(l)?l.call(t):l;Reflect.ownKeys(X).forEach(Y=>{zs(Y,X[Y])})}u&&Vl(u,n,"c");function ne(X,Y){Ie(Y)?Y.forEach(he=>X(he.bind(t))):Y&&X(Y.bind(t))}if(ne(rp,f),ne(Uf,h),ne(sp,p),ne(op,v),ne(tp,g),ne(np,m),ne(up,I),ne(cp,C),ne(lp,P),ne(Df,E),ne(If,S),ne(ap,y),Ie(b))if(b.length){const X=n.exposed||(n.exposed={});b.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>t[Y],set:he=>t[Y]=he})})}else n.exposed||(n.exposed={});w&&n.render===ln&&(n.render=w),te!=null&&(n.inheritAttrs=te),G&&(n.components=G),O&&(n.directives=O)}function mp(n,e,t=ln){Ie(n)&&(n=Ea(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=Nn(r.from||i,r.default,!0):s=Nn(r.from||i):s=Nn(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Vl(n,e,t){jt(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ff(n,e,t,i){const r=i.includes(".")?Af(t,i):()=>t[i];if(xt(n)){const s=e[n];Ve(s)&&Os(r,s)}else if(Ve(n))Os(r,n.bind(t));else if(at(n))if(Ie(n))n.forEach(s=>Ff(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Os(r,s,n)}}function nl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>qs(l,c,o,!0)),qs(l,e,o)),at(e)&&s.set(e,l),l}function qs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&qs(n,s,t,!0),r&&r.forEach(o=>qs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=gp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gp={data:kl,props:Wl,emits:Wl,methods:Dr,computed:Dr,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Dr,directives:Dr,watch:vp,provide:kl,inject:_p};function kl(n,e){return e?n?function(){return pt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function _p(n,e){return Dr(Ea(n),Ea(e))}function Ea(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function At(n,e){return n?[...new Set([].concat(n,e))]:e}function Dr(n,e){return n?pt(Object.create(null),n,e):e}function Wl(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:pt(Object.create(null),Gl(n),Gl(e??{})):e}function vp(n,e){if(!n)return e;if(!e)return n;const t=pt(Object.create(null),n);for(const i in e)t[i]=At(n[i],e[i]);return t}function Of(){return{app:null,config:{isNativeTag:Vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xp=0;function Mp(n,e){return function(i,r=null){Ve(i)||(i=pt({},i)),r!=null&&!at(r)&&(r=null);const s=Of(),o=new Set;let a=!1;const l=s.app={_uid:xp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Ke(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,uo(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ys=l;try{return c()}finally{Ys=null}}};return l}}let Ys=null;function zs(n,e){if(vt){let t=vt.provides;const i=vt.parent&&vt.parent.provides;i===t&&(t=vt.provides=Object.create(i)),t[n]=e}}function Nn(n,e,t=!1){const i=vt||Ht;if(i||Ys){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ys._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function Sp(n,e,t,i=!1){const r={},s={};ks(s,co,1),n.propsDefaults=Object.create(null),Bf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:ff(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ep(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=$e(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ro(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ye(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=vn(h);r[v]=ya(l,a,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Bf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=gr(f))===f||!Ye(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ya(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&Bn(n,"set","$attrs")}function Bf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ns(l))continue;const c=e[l];let u;r&&Ye(r,u=vn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ro(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$e(t),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ya(r,l,f,c[f],n,!Ye(c,f))}}return o}function ya(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(cr(r),i=c[t]=l.call(null,e),bi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===gr(t))&&(i=!0))}return i}function zf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,p]=zf(f,e,!0);pt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,tr),tr;if(Ie(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);Xl(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=vn(u);if(Xl(f)){const h=s[u],p=o[f]=Ie(h)||Ve(h)?{type:h}:pt({},h);if(p){const v=jl(Boolean,p.type),g=jl(String,p.type);p[0]=v>-1,p[1]=g<0||v<g,(v>-1||Ye(p,"default"))&&a.push(f)}}}const c=[o,a];return at(n)&&i.set(n,c),c}function Xl(n){return n[0]!=="$"}function ql(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Yl(n,e){return ql(n)===ql(e)}function jl(n,e){return Ie(e)?e.findIndex(t=>Yl(t,n)):Ve(e)&&Yl(e,n)?0:-1}const Hf=n=>n[0]==="_"||n==="$stable",il=n=>Ie(n)?n.map(pn):[pn(n)],yp=(n,e,t)=>{if(e._n)return e;const i=hn((...r)=>il(e(...r)),t);return i._c=!1,i},Gf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Hf(r))continue;const s=n[r];if(Ve(s))e[r]=yp(r,s,i);else if(s!=null){const o=il(s);e[r]=()=>o}}},Vf=(n,e)=>{const t=il(e);n.slots.default=()=>t},Tp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=$e(e),ks(e,"_",t)):Gf(e,n.slots={})}else n.slots={},e&&Vf(n,e);ks(n.slots,co,1)},bp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Gf(e,r)),o=e}else e&&(Vf(n,e),o={default:1});if(s)for(const a in r)!Hf(a)&&!(a in o)&&delete r[a]};function Ta(n,e,t,i,r=!1){if(Ie(n)){n.forEach((h,p)=>Ta(h,e&&(Ie(e)?e[p]:e),t,i,r));return}if(Bs(i)&&!r)return;const s=i.shapeFlag&4?uo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(xt(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),Ve(l))ei(l,a,12,[o,u]);else{const h=xt(l),p=yt(l);if(h||p){const v=()=>{if(n.f){const g=h?Ye(f,l)?f[l]:u[l]:l.value;r?Ie(g)&&Ga(g,s):Ie(g)?g.includes(s)||g.push(s):h?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ye(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(v.id=-1,Ut(v,t)):v()}}}const Ut=Kd;function Ap(n){return wp(n)}function wp(n,e){const t=ha();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ln,insertStaticContent:v}=n,g=(_,R,L,F=null,B=null,J=null,ue=!1,ee=null,fe=!!R.dynamicChildren)=>{if(_===R)return;_&&!Mi(_,R)&&(F=H(_),q(_,B,J,!0),_=null),R.patchFlag===-2&&(fe=!1,R.dynamicChildren=null);const{type:ce,ref:Ae,shapeFlag:T}=R;switch(ce){case lo:m(_,R,L,F);break;case Fn:d(_,R,L,F);break;case Hs:_==null&&E(R,L,F,ue);break;case dn:G(_,R,L,F,B,J,ue,ee,fe);break;default:T&1?w(_,R,L,F,B,J,ue,ee,fe):T&6?O(_,R,L,F,B,J,ue,ee,fe):(T&64||T&128)&&ce.process(_,R,L,F,B,J,ue,ee,fe,oe)}Ae!=null&&B&&Ta(Ae,_&&_.ref,J,R||_,!R)},m=(_,R,L,F)=>{if(_==null)i(R.el=a(R.children),L,F);else{const B=R.el=_.el;R.children!==_.children&&c(B,R.children)}},d=(_,R,L,F)=>{_==null?i(R.el=l(R.children||""),L,F):R.el=_.el},E=(_,R,L,F)=>{[_.el,_.anchor]=v(_.children,R,L,F,_.el,_.anchor)},M=({el:_,anchor:R},L,F)=>{let B;for(;_&&_!==R;)B=h(_),i(_,L,F),_=B;i(R,L,F)},S=({el:_,anchor:R})=>{let L;for(;_&&_!==R;)L=h(_),r(_),_=L;r(R)},w=(_,R,L,F,B,J,ue,ee,fe)=>{ue=ue||R.type==="svg",_==null?C(R,L,F,B,J,ue,ee,fe):y(_,R,B,J,ue,ee,fe)},C=(_,R,L,F,B,J,ue,ee)=>{let fe,ce;const{type:Ae,props:T,shapeFlag:x,transition:D,dirs:ie}=_;if(fe=_.el=o(_.type,J,T&&T.is,T),x&8?u(fe,_.children):x&16&&I(_.children,fe,null,F,B,J&&Ae!=="foreignObject",ue,ee),ie&&ci(_,null,F,"created"),P(fe,_,_.scopeId,ue,F),T){for(const ae in T)ae!=="value"&&!Ns(ae)&&s(fe,ae,null,T[ae],J,_.children,F,B,we);"value"in T&&s(fe,"value",null,T.value),(ce=T.onVnodeBeforeMount)&&fn(ce,F,_)}ie&&ci(_,null,F,"beforeMount");const re=(!B||B&&!B.pendingBranch)&&D&&!D.persisted;re&&D.beforeEnter(fe),i(fe,R,L),((ce=T&&T.onVnodeMounted)||re||ie)&&Ut(()=>{ce&&fn(ce,F,_),re&&D.enter(fe),ie&&ci(_,null,F,"mounted")},B)},P=(_,R,L,F,B)=>{if(L&&p(_,L),F)for(let J=0;J<F.length;J++)p(_,F[J]);if(B){let J=B.subTree;if(R===J){const ue=B.vnode;P(_,ue,ue.scopeId,ue.slotScopeIds,B.parent)}}},I=(_,R,L,F,B,J,ue,ee,fe=0)=>{for(let ce=fe;ce<_.length;ce++){const Ae=_[ce]=ee?$n(_[ce]):pn(_[ce]);g(null,Ae,R,L,F,B,J,ue,ee)}},y=(_,R,L,F,B,J,ue)=>{const ee=R.el=_.el;let{patchFlag:fe,dynamicChildren:ce,dirs:Ae}=R;fe|=_.patchFlag&16;const T=_.props||nt,x=R.props||nt;let D;L&&ui(L,!1),(D=x.onVnodeBeforeUpdate)&&fn(D,L,R,_),Ae&&ci(R,_,L,"beforeUpdate"),L&&ui(L,!0);const ie=B&&R.type!=="foreignObject";if(ce?b(_.dynamicChildren,ce,ee,L,F,ie,J):ue||Y(_,R,ee,null,L,F,ie,J,!1),fe>0){if(fe&16)te(ee,R,T,x,L,F,B);else if(fe&2&&T.class!==x.class&&s(ee,"class",null,x.class,B),fe&4&&s(ee,"style",T.style,x.style,B),fe&8){const re=R.dynamicProps;for(let ae=0;ae<re.length;ae++){const ve=re[ae],de=T[ve],j=x[ve];(j!==de||ve==="value")&&s(ee,ve,de,j,B,_.children,L,F,we)}}fe&1&&_.children!==R.children&&u(ee,R.children)}else!ue&&ce==null&&te(ee,R,T,x,L,F,B);((D=x.onVnodeUpdated)||Ae)&&Ut(()=>{D&&fn(D,L,R,_),Ae&&ci(R,_,L,"updated")},F)},b=(_,R,L,F,B,J,ue)=>{for(let ee=0;ee<R.length;ee++){const fe=_[ee],ce=R[ee],Ae=fe.el&&(fe.type===dn||!Mi(fe,ce)||fe.shapeFlag&70)?f(fe.el):L;g(fe,ce,Ae,null,F,B,J,ue,!0)}},te=(_,R,L,F,B,J,ue)=>{if(L!==F){if(L!==nt)for(const ee in L)!Ns(ee)&&!(ee in F)&&s(_,ee,L[ee],null,ue,R.children,B,J,we);for(const ee in F){if(Ns(ee))continue;const fe=F[ee],ce=L[ee];fe!==ce&&ee!=="value"&&s(_,ee,ce,fe,ue,R.children,B,J,we)}"value"in F&&s(_,"value",L.value,F.value)}},G=(_,R,L,F,B,J,ue,ee,fe)=>{const ce=R.el=_?_.el:a(""),Ae=R.anchor=_?_.anchor:a("");let{patchFlag:T,dynamicChildren:x,slotScopeIds:D}=R;D&&(ee=ee?ee.concat(D):D),_==null?(i(ce,L,F),i(Ae,L,F),I(R.children,L,Ae,B,J,ue,ee,fe)):T>0&&T&64&&x&&_.dynamicChildren?(b(_.dynamicChildren,x,L,B,J,ue,ee),(R.key!=null||B&&R===B.subTree)&&kf(_,R,!0)):Y(_,R,L,Ae,B,J,ue,ee,fe)},O=(_,R,L,F,B,J,ue,ee,fe)=>{R.slotScopeIds=ee,_==null?R.shapeFlag&512?B.ctx.activate(R,L,F,ue,fe):W(R,L,F,B,J,ue,fe):K(_,R,fe)},W=(_,R,L,F,B,J,ue)=>{const ee=_.component=Bp(_,F,B);if(oo(_)&&(ee.ctx.renderer=oe),Hp(ee),ee.asyncDep){if(B&&B.registerDep(ee,ne),!_.el){const fe=ee.subTree=Ke(Fn);d(null,fe,R,L)}return}ne(ee,_,R,L,B,J,ue)},K=(_,R,L)=>{const F=R.component=_.component;if(Yd(_,R,L))if(F.asyncDep&&!F.asyncResolved){X(F,R,L);return}else F.next=R,Gd(F.update),F.update();else R.el=_.el,F.vnode=R},ne=(_,R,L,F,B,J,ue)=>{const ee=()=>{if(_.isMounted){let{next:Ae,bu:T,u:x,parent:D,vnode:ie}=_,re=Ae,ae;ui(_,!1),Ae?(Ae.el=ie.el,X(_,Ae,ue)):Ae=ie,T&&Fs(T),(ae=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&fn(ae,D,Ae,ie),ui(_,!0);const ve=To(_),de=_.subTree;_.subTree=ve,g(de,ve,f(de.el),H(de),_,B,J),Ae.el=ve.el,re===null&&jd(_,ve.el),x&&Ut(x,B),(ae=Ae.props&&Ae.props.onVnodeUpdated)&&Ut(()=>fn(ae,D,Ae,ie),B)}else{let Ae;const{el:T,props:x}=R,{bm:D,m:ie,parent:re}=_,ae=Bs(R);if(ui(_,!1),D&&Fs(D),!ae&&(Ae=x&&x.onVnodeBeforeMount)&&fn(Ae,re,R),ui(_,!0),T&&ye){const ve=()=>{_.subTree=To(_),ye(T,_.subTree,_,B,null)};ae?R.type.__asyncLoader().then(()=>!_.isUnmounted&&ve()):ve()}else{const ve=_.subTree=To(_);g(null,ve,L,F,_,B,J),R.el=ve.el}if(ie&&Ut(ie,B),!ae&&(Ae=x&&x.onVnodeMounted)){const ve=R;Ut(()=>fn(Ae,re,ve),B)}(R.shapeFlag&256||re&&Bs(re.vnode)&&re.vnode.shapeFlag&256)&&_.a&&Ut(_.a,B),_.isMounted=!0,R=L=F=null}},fe=_.effect=new qa(ee,()=>Qa(ce),_.scope),ce=_.update=()=>fe.run();ce.id=_.uid,ui(_,!0),ce()},X=(_,R,L)=>{R.component=_;const F=_.vnode.props;_.vnode=R,_.next=null,Ep(_,R.props,F,L),bp(_,R.children,L),_r(),Ol(),vr()},Y=(_,R,L,F,B,J,ue,ee,fe=!1)=>{const ce=_&&_.children,Ae=_?_.shapeFlag:0,T=R.children,{patchFlag:x,shapeFlag:D}=R;if(x>0){if(x&128){le(ce,T,L,F,B,J,ue,ee,fe);return}else if(x&256){he(ce,T,L,F,B,J,ue,ee,fe);return}}D&8?(Ae&16&&we(ce,B,J),T!==ce&&u(L,T)):Ae&16?D&16?le(ce,T,L,F,B,J,ue,ee,fe):we(ce,B,J,!0):(Ae&8&&u(L,""),D&16&&I(T,L,F,B,J,ue,ee,fe))},he=(_,R,L,F,B,J,ue,ee,fe)=>{_=_||tr,R=R||tr;const ce=_.length,Ae=R.length,T=Math.min(ce,Ae);let x;for(x=0;x<T;x++){const D=R[x]=fe?$n(R[x]):pn(R[x]);g(_[x],D,L,null,B,J,ue,ee,fe)}ce>Ae?we(_,B,J,!0,!1,T):I(R,L,F,B,J,ue,ee,fe,T)},le=(_,R,L,F,B,J,ue,ee,fe)=>{let ce=0;const Ae=R.length;let T=_.length-1,x=Ae-1;for(;ce<=T&&ce<=x;){const D=_[ce],ie=R[ce]=fe?$n(R[ce]):pn(R[ce]);if(Mi(D,ie))g(D,ie,L,null,B,J,ue,ee,fe);else break;ce++}for(;ce<=T&&ce<=x;){const D=_[T],ie=R[x]=fe?$n(R[x]):pn(R[x]);if(Mi(D,ie))g(D,ie,L,null,B,J,ue,ee,fe);else break;T--,x--}if(ce>T){if(ce<=x){const D=x+1,ie=D<Ae?R[D].el:F;for(;ce<=x;)g(null,R[ce]=fe?$n(R[ce]):pn(R[ce]),L,ie,B,J,ue,ee,fe),ce++}}else if(ce>x)for(;ce<=T;)q(_[ce],B,J,!0),ce++;else{const D=ce,ie=ce,re=new Map;for(ce=ie;ce<=x;ce++){const xe=R[ce]=fe?$n(R[ce]):pn(R[ce]);xe.key!=null&&re.set(xe.key,ce)}let ae,ve=0;const de=x-ie+1;let j=!1,Le=0;const Ce=new Array(de);for(ce=0;ce<de;ce++)Ce[ce]=0;for(ce=D;ce<=T;ce++){const xe=_[ce];if(ve>=de){q(xe,B,J,!0);continue}let Te;if(xe.key!=null)Te=re.get(xe.key);else for(ae=ie;ae<=x;ae++)if(Ce[ae-ie]===0&&Mi(xe,R[ae])){Te=ae;break}Te===void 0?q(xe,B,J,!0):(Ce[Te-ie]=ce+1,Te>=Le?Le=Te:j=!0,g(xe,R[Te],L,null,B,J,ue,ee,fe),ve++)}const Pe=j?Rp(Ce):tr;for(ae=Pe.length-1,ce=de-1;ce>=0;ce--){const xe=ie+ce,Te=R[xe],Be=xe+1<Ae?R[xe+1].el:F;Ce[ce]===0?g(null,Te,L,Be,B,J,ue,ee,fe):j&&(ae<0||ce!==Pe[ae]?k(Te,L,Be,2):ae--)}}},k=(_,R,L,F,B=null)=>{const{el:J,type:ue,transition:ee,children:fe,shapeFlag:ce}=_;if(ce&6){k(_.component.subTree,R,L,F);return}if(ce&128){_.suspense.move(R,L,F);return}if(ce&64){ue.move(_,R,L,oe);return}if(ue===dn){i(J,R,L);for(let T=0;T<fe.length;T++)k(fe[T],R,L,F);i(_.anchor,R,L);return}if(ue===Hs){M(_,R,L);return}if(F!==2&&ce&1&&ee)if(F===0)ee.beforeEnter(J),i(J,R,L),Ut(()=>ee.enter(J),B);else{const{leave:T,delayLeave:x,afterLeave:D}=ee,ie=()=>i(J,R,L),re=()=>{T(J,()=>{ie(),D&&D()})};x?x(J,ie,re):re()}else i(J,R,L)},q=(_,R,L,F=!1,B=!1)=>{const{type:J,props:ue,ref:ee,children:fe,dynamicChildren:ce,shapeFlag:Ae,patchFlag:T,dirs:x}=_;if(ee!=null&&Ta(ee,null,L,_,!0),Ae&256){R.ctx.deactivate(_);return}const D=Ae&1&&x,ie=!Bs(_);let re;if(ie&&(re=ue&&ue.onVnodeBeforeUnmount)&&fn(re,R,_),Ae&6)Ee(_.component,L,F);else{if(Ae&128){_.suspense.unmount(L,F);return}D&&ci(_,null,R,"beforeUnmount"),Ae&64?_.type.remove(_,R,L,B,oe,F):ce&&(J!==dn||T>0&&T&64)?we(ce,R,L,!1,!0):(J===dn&&T&384||!B&&Ae&16)&&we(fe,R,L),F&&ge(_)}(ie&&(re=ue&&ue.onVnodeUnmounted)||D)&&Ut(()=>{re&&fn(re,R,_),D&&ci(_,null,R,"unmounted")},L)},ge=_=>{const{type:R,el:L,anchor:F,transition:B}=_;if(R===dn){me(L,F);return}if(R===Hs){S(_);return}const J=()=>{r(L),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:ue,delayLeave:ee}=B,fe=()=>ue(L,J);ee?ee(_.el,J,fe):fe()}else J()},me=(_,R)=>{let L;for(;_!==R;)L=h(_),r(_),_=L;r(R)},Ee=(_,R,L)=>{const{bum:F,scope:B,update:J,subTree:ue,um:ee}=_;F&&Fs(F),B.stop(),J&&(J.active=!1,q(ue,_,R,L)),ee&&Ut(ee,R),Ut(()=>{_.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},we=(_,R,L,F=!1,B=!1,J=0)=>{for(let ue=J;ue<_.length;ue++)q(_[ue],R,L,F,B)},H=_=>_.shapeFlag&6?H(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),se=(_,R,L)=>{_==null?R._vnode&&q(R._vnode,null,null,!0):g(R._vnode||null,_,R,null,null,null,L),Ol(),Ef(),R._vnode=_},oe={p:g,um:q,m:k,r:ge,mt:W,mc:I,pc:Y,pbc:b,n:H,o:n};let Me,ye;return e&&([Me,ye]=e(oe)),{render:se,hydrate:Me,createApp:Mp(se,Me)}}function ui({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function kf(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=$n(r[s]),a.el=o.el),t||kf(o,a)),a.type===lo&&(a.el=o.el)}}function Rp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Cp=n=>n.__isTeleport,dn=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Hs=Symbol.for("v-stc"),Br=[];let an=null;function Gt(n=!1){Br.push(an=n?null:[])}function Pp(){Br.pop(),an=Br[Br.length-1]||null}let $r=1;function $l(n){$r+=n}function Lp(n){return n.dynamicChildren=$r>0?an||tr:null,Pp(),$r>0&&an&&an.push(n),n}function Vt(n,e,t,i,r,s){return Lp(Oe(n,e,t,i,r,s,!0))}function ba(n){return n?n.__v_isVNode===!0:!1}function Mi(n,e){return n.type===e.type&&n.key===e.key}const co="__vInternal",Wf=({key:n})=>n??null,Gs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||yt(n)||Ve(n)?{i:Ht,r:n,k:e,f:!!t}:n:null);function Oe(n,e=null,t=null,i=0,r=null,s=n===dn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wf(e),ref:e&&Gs(e),scopeId:so,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return a?(rl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),$r>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const Ke=Up;function Up(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===fp)&&(n=Fn),ba(n)){const a=si(n,e,!0);return t&&rl(a,t),$r>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag|=-2,a}if(Xp(n)&&(n=n.__vccOpts),e){e=Dp(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=Xr(a)),at(l)&&(df(l)&&!Ie(l)&&(l=pt({},l)),e.style=Wa(l))}const o=xt(n)?1:$d(n)?128:Cp(n)?64:at(n)?4:Ve(n)?2:0;return Oe(n,e,t,i,r,o,s,!0)}function Dp(n){return n?df(n)||co in n?pt({},n):n:null}function si(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Np(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Wf(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(Gs(e)):[r,Gs(e)]:Gs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&si(n.ssContent),ssFallback:n.ssFallback&&si(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Cn(n=" ",e=0){return Ke(lo,null,n,e)}function Ip(n,e){const t=Ke(Hs,null,n);return t.staticCount=e,t}function pn(n){return n==null||typeof n=="boolean"?Ke(Fn):Ie(n)?Ke(dn,null,n.slice()):typeof n=="object"?$n(n):Ke(lo,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:si(n)}function rl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(co in e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Ht},t=32):(e=String(e),i&64?(t=16,e=[Cn(e)]):t=8);n.children=e,n.shapeFlag|=t}function Np(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xr([e.class,i.class]));else if(r==="style")e.style=Wa([e.style,i.style]);else if(Zs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function fn(n,e,t,i=null){jt(n,e,7,[t,i])}const Fp=Of();let Op=0;function Bp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Fp,s={uid:Op++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(i,r),emitsOptions:Tf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wd.bind(null,s),n.ce&&n.ce(s),s}let vt=null;const zp=()=>vt||Ht;let sl,Ui,Kl="__VUE_INSTANCE_SETTERS__";(Ui=ha()[Kl])||(Ui=ha()[Kl]=[]),Ui.push(n=>vt=n),sl=n=>{Ui.length>1?Ui.forEach(e=>e(n)):Ui[0](n)};const cr=n=>{sl(n),n.scope.on()},bi=()=>{vt&&vt.scope.off(),sl(null)};function Xf(n){return n.vnode.shapeFlag&4}let Kr=!1;function Hp(n,e=!1){Kr=e;const{props:t,children:i}=n.vnode,r=Xf(n);Sp(n,t,r,e),Tp(n,i);const s=r?Gp(n,e):void 0;return Kr=!1,s}function Gp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=pf(new Proxy(n.ctx,dp));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?kp(n):null;cr(n),_r();const s=ei(i,n,0,[n.props,r]);if(vr(),bi(),Ju(s)){if(s.then(bi,bi),e)return s.then(o=>{Zl(n,o,e)}).catch(o=>{io(o,n,0)});n.asyncDep=s}else Zl(n,s,e)}else qf(n,e)}function Zl(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=vf(e)),qf(n,t)}let Jl;function qf(n,e,t){const i=n.type;if(!n.render){if(!e&&Jl&&!i.render){const r=i.template||nl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=pt(pt({isCustomElement:s,delimiters:a},o),l);i.render=Jl(r,c)}}n.render=i.render||ln}cr(n),_r(),pp(n),vr(),bi()}function Vp(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ft(n,"get","$attrs"),e[t]}}))}function kp(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Vp(n)},slots:n.slots,emit:n.emit,expose:e}}function uo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(vf(pf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}}))}function Wp(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function Xp(n){return Ve(n)&&"__vccOpts"in n}const rn=(n,e)=>Bd(n,e,Kr);function ol(n,e,t){const i=arguments.length;return i===2?at(e)&&!Ie(e)?ba(e)?Ke(n,null,[e]):Ke(n,e):Ke(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ba(t)&&(t=[t]),Ke(n,e,t))}const qp=Symbol.for("v-scx"),Yp=()=>Nn(qp),jp="3.3.4",$p="http://www.w3.org/2000/svg",Si=typeof document<"u"?document:null,Ql=Si&&Si.createElement("template"),Kp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Si.createElementNS($p,n):Si.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ql.innerHTML=i?`<svg>${n}</svg>`:n;const a=Ql.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Zp(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Jp(n,e,t){const i=n.style,r=xt(t);if(t&&!r){if(e&&!xt(e))for(const s in e)t[s]==null&&Aa(i,s,"");for(const s in t)Aa(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const ec=/\s*!important$/;function Aa(n,e,t){if(Ie(t))t.forEach(i=>Aa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Qp(n,e);ec.test(t)?n.setProperty(gr(i),t.replace(ec,""),"important"):n[i]=t}}const tc=["Webkit","Moz","ms"],wo={};function Qp(n,e){const t=wo[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return wo[e]=i;i=eo(i);for(let r=0;r<tc.length;r++){const s=tc[r]+i;if(s in n)return wo[e]=s}return e}const nc="http://www.w3.org/1999/xlink";function em(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(nc,e.slice(6,e.length)):n.setAttributeNS(nc,e,t);else{const s=id(e);t==null||s&&!Qu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function tm(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Qu(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function $i(n,e,t,i){n.addEventListener(e,t,i)}function nm(n,e,t,i){n.removeEventListener(e,t,i)}function im(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=rm(e);if(i){const c=s[e]=am(i,r);$i(n,a,c,l)}else o&&(nm(n,a,o,l),s[e]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function rm(n){let e;if(ic.test(n)){e={};let i;for(;i=n.match(ic);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gr(n.slice(2)),e]}let Ro=0;const sm=Promise.resolve(),om=()=>Ro||(sm.then(()=>Ro=0),Ro=Date.now());function am(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;jt(lm(i,t.value),e,5,[i])};return t.value=n,t.attached=om(),t}function lm(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rc=/^on[a-z]/,cm=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Zp(n,i,r):e==="style"?Jp(n,t,i):Zs(e)?Ha(e)||im(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):um(n,e,i,r))?tm(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),em(n,e,i,r))};function um(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&rc.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||rc.test(e)&&xt(t)?!1:e in n}const Vn="transition",Tr="animation",al=(n,{slots:e})=>ol(ep,fm(n),e);al.displayName="Transition";const Yf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};al.props=pt({},wf,Yf);const fi=(n,e=[])=>{Ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},sc=n=>n?Ie(n)?n.some(e=>e.length>1):n.length>1:!1;function fm(n){const e={};for(const G in n)G in Yf||(e[G]=n[G]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=hm(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:d,onEnter:E,onEnterCancelled:M,onLeave:S,onLeaveCancelled:w,onBeforeAppear:C=d,onAppear:P=E,onAppearCancelled:I=M}=e,y=(G,O,W)=>{hi(G,O?u:a),hi(G,O?c:o),W&&W()},b=(G,O)=>{G._isLeaving=!1,hi(G,f),hi(G,p),hi(G,h),O&&O()},te=G=>(O,W)=>{const K=G?P:E,ne=()=>y(O,G,W);fi(K,[O,ne]),oc(()=>{hi(O,G?l:s),kn(O,G?u:a),sc(K)||ac(O,i,g,ne)})};return pt(e,{onBeforeEnter(G){fi(d,[G]),kn(G,s),kn(G,o)},onBeforeAppear(G){fi(C,[G]),kn(G,l),kn(G,c)},onEnter:te(!1),onAppear:te(!0),onLeave(G,O){G._isLeaving=!0;const W=()=>b(G,O);kn(G,f),mm(),kn(G,h),oc(()=>{G._isLeaving&&(hi(G,f),kn(G,p),sc(S)||ac(G,i,m,W))}),fi(S,[G,W])},onEnterCancelled(G){y(G,!1),fi(M,[G])},onAppearCancelled(G){y(G,!0),fi(I,[G])},onLeaveCancelled(G){b(G),fi(w,[G])}})}function hm(n){if(n==null)return null;if(at(n))return[Co(n.enter),Co(n.leave)];{const e=Co(n);return[e,e]}}function Co(n){return Zh(n)}function kn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function hi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function oc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let dm=0;function ac(n,e,t,i){const r=n._endId=++dm,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=pm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function pm(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${Vn}Delay`),s=i(`${Vn}Duration`),o=lc(r,s),a=i(`${Tr}Delay`),l=i(`${Tr}Duration`),c=lc(a,l);let u=null,f=0,h=0;e===Vn?o>0&&(u=Vn,f=o,h=s.length):e===Tr?c>0&&(u=Tr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Vn:Tr:null,h=u?u===Vn?s.length:l.length:0);const p=u===Vn&&/\b(transform|all)(,|$)/.test(i(`${Vn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function lc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>cc(t)+cc(n[i])))}function cc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function mm(){return document.body.offsetHeight}const uc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>Fs(e,t):e};function gm(n){n.target.composing=!0}function fc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Po={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=uc(r);const s=i||r.props&&r.props.type==="number";$i(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=fa(a)),n._assign(a)}),t&&$i(n,"change",()=>{n.value=n.value.trim()}),e||($i(n,"compositionstart",gm),$i(n,"compositionend",fc),$i(n,"change",fc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=uc(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&fa(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},Lo={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):br(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),br(n,!0),i.enter(n)):i.leave(n,()=>{br(n,!1)}):br(n,e))},beforeUnmount(n,{value:e}){br(n,e)}};function br(n,e){n.style.display=e?n._vod:"none"}const _m=pt({patchProp:cm},Kp);let hc;function vm(){return hc||(hc=Ap(_m))}const xm=(...n)=>{const e=vm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Mm(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mm(n){return xt(n)?document.querySelector(n):n}const Sm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAAwMDA6OjrCwsL7+/vc3Nzq6uqWlpZ0dHS0tLRHR0elpaXg4ODz8/O+vr6KiopUVFTW1taysrJMTExaWloLCwvFxcVubm4sLCyampoVFRVQUFDLy8uCgoIyMjIlJSVAQEBhYWEdHR3T7hQVAAADs0lEQVR4nO2d2XLbIBRAvWbxIsl2vCV1lSb//4+dNDOpsRGLkMSFOeddmGMQl12jEQAAAAAAAAAAAAAAQGoUZbWZ1pP41NNNVRad+5UvY1ksy079FpPYQhrO3TkW+9gyDew7qqvbQ2yTRg7bLgSPsTWMHMMFt7EdLASXYiG3in5zCH0XpTYy/9mHCZax8+9AWNA4x86+A5PcizCsEKV11fS8tBcsYufdkfbNaRqVNKSaVrGz7kjV2nATO+uObFobTmNn3ZFpa8M6dtYdqVsbShz36mgf8zGUAoYYygdDDOWDIYbywRBD+WCIoXwwxFA+GGIoHwwxlA+GGMoHQwzlgyGG8sEwxLB+XpUzA4uqcWvc2fjgv4dfT277XfozrGcOiaxP+ofdNsE8/I5peJq7JbPQGzo+/djwDw1geHJOZxZi2PQP9W/47pHQU5Dh6BLH0Oukg2bHv4ehrRT7MfTbLfcaZjh6jmDot6fzMdBwHsHQb19u8RZmqH2Tezb0O40zvw/dfoaaStC34YNXSsGGxv3KeRia9pznYbjL3tAU9YcwXDzdoRzzsBoW9wkslF94iGyo6R0/ehlq2kq13xvbUNPnCDZ8xhBDDDHEEMMbw+Utf9QRaPKGVkx3O+RhaJqqycMw9ugpuF9q5Vdkw9nqDr+xhY38ZzGMx8pzMDTffZCDoXl1JgND0yRNFoZxVmYGNLQJJm+4sgkmbrh2uJwjCcP5+gelM6Rbl0vT8KrP8qb0hlxuAUrNcLxTHnXYjJGcobq8vM7QcHxRnrVfijeE4WW3uGHnN7ZQDD+UtLV7VQY37HjdQm1OPyUYdjzXpk5CWUN+goafaqzM0HCsrh3aAkaKhksldVvASNHwZjOLJWAkaaguAFsCRpKGN7c9mu9RTdPwSUnfHDDSNDwo6cfYudf76pq6NdAYMBI19AgY/RiuvQw112iqYyTNrL0aMD4GN1wdr05GXDQBa3d9dKK8bwzV8xaaGdGP6184Dr/2JAkMMZQPhhjKB0MM5YMhhvLBEEP5YIihfDDEUD4YYigfDDGUD4YYygdDDOWDIYbyaW+Y/3dI8/+WbP7fA87/m875f5c7/2+rjxovARbFS3vBRKpp+0o6SiPmt4/3qRRiUBG6HI2LzT5McFRobgAWxSGgIf3GdLePBPxuitVyjO1gxOtG6ia2civqoYMS/KKQ2tzsg9/BH0qJI8VzYJi4dTTd0xSDZbd+XxRltZnWk/jU001Vdlc/AQAAAAAAAAAAAAAAhuIv6pt8P2A23/wAAAAASUVORK5CYII=";const kt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Em={name:"navigation",data(){return{scrolledNav:null,mobile:!1,mobileNav:!1,windowWidth:null}},created(){window.addEventListener("resize",this.CheckScreen),this.CheckScreen()},mounted(){window.addEventListener("scroll",this.updateScroll)},methods:{toggleMobileNav(){this.mobileNav=!this.mobileNav,console.log("I was clicked!")},updateScroll(){if(window.scrollY>50){this.scrolledNav=!0;return}this.scrolledNav=!1},CheckScreen(){if(this.windowWidth=window.innerWidth,this.windowWidth<=720){this.mobile=!0;return}this.mobile=!1,this.mobileNav=!1}}},ym=n=>(el("data-v-d00ba926"),n=n(),tl(),n),Tm=ym(()=>Oe("div",{class:"HomeB"},[Oe("img",{src:Sm,alt:""})],-1)),bm={class:"navigation"},Am={class:"icon"},wm={class:"dropdown-nav"};function Rm(n,e,t,i,r,s){const o=xn("router-link");return Gt(),Vt("header",{class:Xr({"scrolled-nav":r.scrolledNav})},[Oe("nav",null,[Tm,sr(Oe("ul",bm,[Oe("li",null,[Ke(o,{class:"link",to:{name:"Home"}},{default:hn(()=>[Cn("Home")]),_:1})]),Oe("li",null,[Ke(o,{class:"link",to:{name:"About"}},{default:hn(()=>[Cn("About")]),_:1})]),Oe("li",null,[Ke(o,{class:"link",to:{name:"Portfolio"}},{default:hn(()=>[Cn("Portfolio")]),_:1})]),Oe("li",null,[Ke(o,{class:"link",to:{name:"Contact"}},{default:hn(()=>[Cn("Contact")]),_:1})])],512),[[Lo,!r.mobile]]),Oe("div",Am,[sr(Oe("i",{class:Xr(["fa-solid fa-bars",{"icon-active":r.mobileNav}]),onClick:e[0]||(e[0]=(...a)=>s.toggleMobileNav&&s.toggleMobileNav(...a))},null,2),[[Lo,r.mobile]])]),Ke(al,{name:"mobile-nav"},{default:hn(()=>[sr(Oe("ul",wm,[Oe("li",null,[Ke(o,{class:"link",to:{name:"Home"}},{default:hn(()=>[Cn("Home")]),_:1})]),Oe("li",null,[Ke(o,{class:"link",to:{name:"About"}},{default:hn(()=>[Cn("About")]),_:1})]),Oe("li",null,[Ke(o,{class:"link",to:{name:"Portfolio"}},{default:hn(()=>[Cn("Portfolio")]),_:1})]),Oe("li",null,[Ke(o,{class:"link",to:{name:"Contact"}},{default:hn(()=>[Cn("Contact")]),_:1})])],512),[[Lo,r.mobileNav]])]),_:1})])],2)}const Cm=kt(Em,[["render",Rm],["__scopeId","data-v-d00ba926"]]);const Pm={name:"App",components:{Navigation:Cm}},Lm={class:"NavPosition"};function Um(n,e,t,i,r,s){const o=xn("Navigation"),a=xn("router-view");return Gt(),Vt("div",Lm,[Ke(o),Ke(a)])}const Dm=kt(Pm,[["render",Um],["__scopeId","data-v-f12c26be"]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ki=typeof window<"u";function Im(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function Uo(n,e){const t={};for(const i in e){const r=e[i];t[i]=cn(r)?r.map(n):n(r)}return t}const zr=()=>{},cn=Array.isArray,Nm=/\/$/,Fm=n=>n.replace(Nm,"");function Do(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Hm(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Om(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function dc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Bm(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ur(e.matched[i],t.matched[r])&&jf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function jf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!zm(n[t],e[t]))return!1;return!0}function zm(n,e){return cn(n)?pc(n,e):cn(e)?pc(e,n):n===e}function pc(n,e){return cn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Hm(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Zr;(function(n){n.pop="pop",n.push="push"})(Zr||(Zr={}));var Hr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Hr||(Hr={}));function Gm(n){if(!n)if(Ki){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Fm(n)}const Vm=/^[^#]+#/;function km(n,e){return n.replace(Vm,"#")+e}function Wm(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const fo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xm(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Wm(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function mc(n,e){return(history.state?history.state.position-e:-1)+n}const wa=new Map;function qm(n,e){wa.set(n,e)}function Ym(n){const e=wa.get(n);return wa.delete(n),e}let jm=()=>location.protocol+"//"+location.host;function $f(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),dc(l,"")}return dc(t,n)+i+r}function $m(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=$f(n,location),v=t.value,g=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===v){o=null;return}m=g?h.position-g.position:0}else i(p);r.forEach(d=>{d(t.value,v,{delta:m,type:Zr.pop,direction:m?m>0?Hr.forward:Hr.back:Hr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Ze({},h.state,{scroll:fo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function gc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?fo():null}}function Km(n){const{history:e,location:t}=window,i={value:$f(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:jm()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=Ze({},e.state,gc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ze({},r.value,e.state,{forward:l,scroll:fo()});s(u.current,u,!0);const f=Ze({},gc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Zm(n){n=Gm(n);const e=Km(n),t=$m(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ze({location:"",base:n,go:i,createHref:km.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Jm(n){return typeof n=="string"||n&&typeof n=="object"}function Kf(n){return typeof n=="string"||typeof n=="symbol"}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zf=Symbol("");var _c;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(_c||(_c={}));function fr(n,e){return Ze(new Error,{type:n,[Zf]:!0},e)}function En(n,e){return n instanceof Error&&Zf in n&&(e==null||!!(n.type&e))}const vc="[^/]+?",Qm={sensitive:!1,strict:!1,start:!0,end:!0},eg=/[.+*?^${}()[\]/\\]/g;function tg(n,e){const t=Ze({},Qm,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(eg,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:g,optional:m,regexp:d}=h;s.push({name:v,repeatable:g,optional:m});const E=d||vc;if(E!==vc){p+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+S.message)}}let M=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,p+=20,m&&(p+=-8),g&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:g,optional:m}=p,d=v in c?c[v]:"";if(cn(d)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=cn(d)?d.join("/"):d;if(!E)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ng(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ig(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=ng(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(xc(i))return 1;if(xc(r))return-1}return r.length-i.length}function xc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rg={type:0,value:""},sg=/[a-zA-Z0-9_]/;function og(n){if(!n)return[[]];if(n==="/")return[[rg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:sg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function ag(n,e,t){const i=tg(og(n.path),t),r=Ze(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lg(n,e){const t=[],i=new Map;e=Ec({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,v=cg(u);v.aliasOf=h&&h.record;const g=Ec(e,u),m=[v];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of M)m.push(Ze({},v,{components:h?h.record.components:v.components,path:S,aliasOf:h?h.record:v}))}let d,E;for(const M of m){const{path:S}=M;if(f&&S[0]!=="/"){const w=f.record.path,C=w[w.length-1]==="/"?"":"/";M.path=f.record.path+(S&&C+S)}if(d=ag(M,f,g),h?h.alias.push(d):(E=E||d,E!==d&&E.alias.push(d),p&&u.name&&!Sc(d)&&o(u.name)),v.children){const w=v.children;for(let C=0;C<w.length;C++)s(w[C],d,h&&h.children[C])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return E?()=>{o(E)}:zr}function o(u){if(Kf(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&ig(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Jf(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Sc(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},v,g;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw fr(1,{location:u});g=h.record.name,p=Ze(Mc(f.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Mc(u.params,h.keys.map(E=>E.name))),v=h.stringify(p)}else if("path"in u)v=u.path,h=t.find(E=>E.re.test(v)),h&&(p=h.parse(v),g=h.record.name);else{if(h=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!h)throw fr(1,{location:u,currentLocation:f});g=h.record.name,p=Ze({},f.params,u.params),v=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:g,path:v,params:p,matched:m,meta:fg(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Mc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function cg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ug(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ug(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Sc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function fg(n){return n.reduce((e,t)=>Ze(e,t.meta),{})}function Ec(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Jf(n,e){return e.children.some(t=>t===n||Jf(n,t))}const Qf=/#/g,hg=/&/g,dg=/\//g,pg=/=/g,mg=/\?/g,eh=/\+/g,gg=/%5B/g,_g=/%5D/g,th=/%5E/g,vg=/%60/g,nh=/%7B/g,xg=/%7C/g,ih=/%7D/g,Mg=/%20/g;function ll(n){return encodeURI(""+n).replace(xg,"|").replace(gg,"[").replace(_g,"]")}function Sg(n){return ll(n).replace(nh,"{").replace(ih,"}").replace(th,"^")}function Ra(n){return ll(n).replace(eh,"%2B").replace(Mg,"+").replace(Qf,"%23").replace(hg,"%26").replace(vg,"`").replace(nh,"{").replace(ih,"}").replace(th,"^")}function Eg(n){return Ra(n).replace(pg,"%3D")}function yg(n){return ll(n).replace(Qf,"%23").replace(mg,"%3F")}function Tg(n){return n==null?"":yg(n).replace(dg,"%2F")}function js(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function bg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(eh," "),o=s.indexOf("="),a=js(o<0?s:s.slice(0,o)),l=o<0?null:js(s.slice(o+1));if(a in e){let c=e[a];cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yc(n){let e="";for(let t in n){const i=n[t];if(t=Eg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(cn(i)?i.map(s=>s&&Ra(s)):[i&&Ra(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Ag(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const wg=Symbol(""),Tc=Symbol(""),cl=Symbol(""),rh=Symbol(""),Ca=Symbol("");function Ar(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Kn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(fr(4,{from:t,to:e})):f instanceof Error?a(f):Jm(f)?a(fr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Io(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Rg(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Kn(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Im(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Kn(h,t,i,s,o)()}))}}return r}function Rg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function bc(n){const e=Nn(cl),t=Nn(rh),i=rn(()=>e.resolve(ir(n.to))),r=rn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ur.bind(null,u));if(h>-1)return h;const p=Ac(l[c-2]);return c>1&&Ac(u)===p&&f[f.length-1].path!==p?f.findIndex(ur.bind(null,l[c-2])):h}),s=rn(()=>r.value>-1&&Ug(t.params,i.value.params)),o=rn(()=>r.value>-1&&r.value===t.matched.length-1&&jf(t.params,i.value.params));function a(l={}){return Lg(l)?e[ir(n.replace)?"replace":"push"](ir(n.to)).catch(zr):Promise.resolve()}return{route:i,href:rn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Cg=Pf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bc,setup(n,{slots:e}){const t=no(bc(n)),{options:i}=Nn(cl),r=rn(()=>({[wc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[wc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:ol("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Pg=Cg;function Lg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Ug(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!cn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ac(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const wc=(n,e,t)=>n??e??t,Dg=Pf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Nn(Ca),r=rn(()=>n.route||i.value),s=Nn(Tc,0),o=rn(()=>{let c=ir(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=rn(()=>r.value.matched[o.value]);zs(Tc,rn(()=>o.value+1)),zs(wg,a),zs(Ca,r);const l=Dd();return Os(()=>[l.value,a.value,n.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ur(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Rc(t.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ol(h,Ze({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Rc(t.default,{Component:m,route:c})||m}}});function Rc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ig=Dg;function Ng(n){const e=lg(n.routes,n),t=n.parseQuery||bg,i=n.stringifyQuery||yc,r=n.history,s=Ar(),o=Ar(),a=Ar(),l=Id(Wn);let c=Wn;Ki&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Uo.bind(null,H=>""+H),f=Uo.bind(null,Tg),h=Uo.bind(null,js);function p(H,se){let oe,Me;return Kf(H)?(oe=e.getRecordMatcher(H),Me=se):Me=H,e.addRoute(Me,oe)}function v(H){const se=e.getRecordMatcher(H);se&&e.removeRoute(se)}function g(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function d(H,se){if(se=Ze({},se||l.value),typeof H=="string"){const L=Do(t,H,se.path),F=e.resolve({path:L.path},se),B=r.createHref(L.fullPath);return Ze(L,F,{params:h(F.params),hash:js(L.hash),redirectedFrom:void 0,href:B})}let oe;if("path"in H)oe=Ze({},H,{path:Do(t,H.path,se.path).path});else{const L=Ze({},H.params);for(const F in L)L[F]==null&&delete L[F];oe=Ze({},H,{params:f(L)}),se.params=f(se.params)}const Me=e.resolve(oe,se),ye=H.hash||"";Me.params=u(h(Me.params));const _=Om(i,Ze({},H,{hash:Sg(ye),path:Me.path})),R=r.createHref(_);return Ze({fullPath:_,hash:ye,query:i===yc?Ag(H.query):H.query||{}},Me,{redirectedFrom:void 0,href:R})}function E(H){return typeof H=="string"?Do(t,H,l.value.path):Ze({},H)}function M(H,se){if(c!==H)return fr(8,{from:se,to:H})}function S(H){return P(H)}function w(H){return S(Ze(E(H),{replace:!0}))}function C(H){const se=H.matched[H.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let Me=typeof oe=="function"?oe(H):oe;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=E(Me):{path:Me},Me.params={}),Ze({query:H.query,hash:H.hash,params:"path"in Me?{}:H.params},Me)}}function P(H,se){const oe=c=d(H),Me=l.value,ye=H.state,_=H.force,R=H.replace===!0,L=C(oe);if(L)return P(Ze(E(L),{state:typeof L=="object"?Ze({},ye,L.state):ye,force:_,replace:R}),se||oe);const F=oe;F.redirectedFrom=se;let B;return!_&&Bm(i,Me,oe)&&(B=fr(16,{to:F,from:Me}),k(Me,Me,!0,!1)),(B?Promise.resolve(B):b(F,Me)).catch(J=>En(J)?En(J,2)?J:le(J):Y(J,F,Me)).then(J=>{if(J){if(En(J,2))return P(Ze({replace:R},E(J.to),{state:typeof J.to=="object"?Ze({},ye,J.to.state):ye,force:_}),se||F)}else J=G(F,Me,!0,R,ye);return te(F,Me,J),J})}function I(H,se){const oe=M(H,se);return oe?Promise.reject(oe):Promise.resolve()}function y(H){const se=me.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(H):H()}function b(H,se){let oe;const[Me,ye,_]=Fg(H,se);oe=Io(Me.reverse(),"beforeRouteLeave",H,se);for(const L of Me)L.leaveGuards.forEach(F=>{oe.push(Kn(F,H,se))});const R=I.bind(null,H,se);return oe.push(R),we(oe).then(()=>{oe=[];for(const L of s.list())oe.push(Kn(L,H,se));return oe.push(R),we(oe)}).then(()=>{oe=Io(ye,"beforeRouteUpdate",H,se);for(const L of ye)L.updateGuards.forEach(F=>{oe.push(Kn(F,H,se))});return oe.push(R),we(oe)}).then(()=>{oe=[];for(const L of _)if(L.beforeEnter)if(cn(L.beforeEnter))for(const F of L.beforeEnter)oe.push(Kn(F,H,se));else oe.push(Kn(L.beforeEnter,H,se));return oe.push(R),we(oe)}).then(()=>(H.matched.forEach(L=>L.enterCallbacks={}),oe=Io(_,"beforeRouteEnter",H,se),oe.push(R),we(oe))).then(()=>{oe=[];for(const L of o.list())oe.push(Kn(L,H,se));return oe.push(R),we(oe)}).catch(L=>En(L,8)?L:Promise.reject(L))}function te(H,se,oe){a.list().forEach(Me=>y(()=>Me(H,se,oe)))}function G(H,se,oe,Me,ye){const _=M(H,se);if(_)return _;const R=se===Wn,L=Ki?history.state:{};oe&&(Me||R?r.replace(H.fullPath,Ze({scroll:R&&L&&L.scroll},ye)):r.push(H.fullPath,ye)),l.value=H,k(H,se,oe,R),le()}let O;function W(){O||(O=r.listen((H,se,oe)=>{if(!Ee.listening)return;const Me=d(H),ye=C(Me);if(ye){P(Ze(ye,{replace:!0}),Me).catch(zr);return}c=Me;const _=l.value;Ki&&qm(mc(_.fullPath,oe.delta),fo()),b(Me,_).catch(R=>En(R,12)?R:En(R,2)?(P(R.to,Me).then(L=>{En(L,20)&&!oe.delta&&oe.type===Zr.pop&&r.go(-1,!1)}).catch(zr),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),Y(R,Me,_))).then(R=>{R=R||G(Me,_,!1),R&&(oe.delta&&!En(R,8)?r.go(-oe.delta,!1):oe.type===Zr.pop&&En(R,20)&&r.go(-1,!1)),te(Me,_,R)}).catch(zr)}))}let K=Ar(),ne=Ar(),X;function Y(H,se,oe){le(H);const Me=ne.list();return Me.length?Me.forEach(ye=>ye(H,se,oe)):console.error(H),Promise.reject(H)}function he(){return X&&l.value!==Wn?Promise.resolve():new Promise((H,se)=>{K.add([H,se])})}function le(H){return X||(X=!H,W(),K.list().forEach(([se,oe])=>H?oe(H):se()),K.reset()),H}function k(H,se,oe,Me){const{scrollBehavior:ye}=n;if(!Ki||!ye)return Promise.resolve();const _=!oe&&Ym(mc(H.fullPath,0))||(Me||!oe)&&history.state&&history.state.scroll||null;return Mf().then(()=>ye(H,se,_)).then(R=>R&&Xm(R)).catch(R=>Y(R,H,se))}const q=H=>r.go(H);let ge;const me=new Set,Ee={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,hasRoute:m,getRoutes:g,resolve:d,options:n,push:S,replace:w,go:q,back:()=>q(-1),forward:()=>q(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:he,install(H){const se=this;H.component("RouterLink",Pg),H.component("RouterView",Ig),H.config.globalProperties.$router=se,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>ir(l)}),Ki&&!ge&&l.value===Wn&&(ge=!0,S(r.location).catch(ye=>{}));const oe={};for(const ye in Wn)Object.defineProperty(oe,ye,{get:()=>l.value[ye],enumerable:!0});H.provide(cl,se),H.provide(rh,ff(oe)),H.provide(Ca,l);const Me=H.unmount;me.add(H),H.unmount=function(){me.delete(H),me.size<1&&(c=Wn,O&&O(),O=null,l.value=Wn,ge=!1,X=!1),Me()}}};function we(H){return H.reduce((se,oe)=>se.then(()=>y(oe)),Promise.resolve())}return Ee}function Fg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ur(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ur(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="155",Og=0,Cc=1,Bg=2,sh=1,zg=2,Pn=3,oi=0,Dt=1,Un=2,ti=0,or=1,Pc=2,Lc=3,Uc=4,Hg=5,Zi=100,Gg=101,Vg=102,Dc=103,Ic=104,kg=200,Wg=201,Xg=202,qg=203,oh=204,ah=205,Yg=206,jg=207,$g=208,Kg=209,Zg=210,Jg=0,Qg=1,e_=2,Pa=3,t_=4,n_=5,i_=6,r_=7,lh=0,s_=1,o_=2,ni=0,a_=1,l_=2,c_=3,u_=4,f_=5,ch=300,hr=301,dr=302,La=303,Ua=304,ho=306,Da=1e3,sn=1001,Ia=1002,Ct=1003,Nc=1004,No=1005,Yt=1006,h_=1007,Jr=1008,ii=1009,d_=1010,p_=1011,fl=1012,uh=1013,Zn=1014,Jn=1015,Qr=1016,fh=1017,hh=1018,Ai=1020,m_=1021,on=1023,g_=1024,__=1025,wi=1026,pr=1027,v_=1028,dh=1029,x_=1030,ph=1031,mh=1033,Fo=33776,Oo=33777,Bo=33778,zo=33779,Fc=35840,Oc=35841,Bc=35842,zc=35843,M_=36196,Hc=37492,Gc=37496,Vc=37808,kc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,jc=37814,$c=37815,Kc=37816,Zc=37817,Jc=37818,Qc=37819,eu=37820,tu=37821,Ho=36492,S_=36283,nu=36284,iu=36285,ru=36286,gh=3e3,Ri=3001,E_=3200,y_=3201,hl=0,T_=1,Ci="",Ge="srgb",Mn="srgb-linear",_h="display-p3",Go=7680,b_=519,A_=512,w_=513,R_=514,C_=515,P_=516,L_=517,U_=518,D_=519,su=35044,ou="300 es",Na=1035,Dn=2e3,$s=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const Gr=Math.PI/180,es=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function dl(n,e){return(n%e+e)%e}function I_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function N_(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function F_(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function O_(n,e=1){return e-Math.abs(dl(n,e*2)-e)}function B_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function z_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function H_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function G_(n,e){return n+Math.random()*(e-n)}function V_(n){return n*(.5-Math.random())}function k_(n){n!==void 0&&(au=n);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W_(n){return n*Gr}function X_(n){return n*es}function Fa(n){return(n&n-1)===0&&n!==0}function q_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ks(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Y_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lu={DEG2RAD:Gr,RAD2DEG:es,generateUUID:Mr,clamp:Pt,euclideanModulo:dl,mapLinear:I_,inverseLerp:N_,lerp:Vr,damp:F_,pingpong:O_,smoothstep:B_,smootherstep:z_,randInt:H_,randFloat:G_,randFloatSpread:V_,seededRandom:k_,degToRad:W_,radToDeg:X_,isPowerOfTwo:Fa,ceilPowerOfTwo:q_,floorPowerOfTwo:Ks,setQuaternionFromProperEuler:Y_,normalize:wt,denormalize:Ji};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],g=r[0],m=r[3],d=r[6],E=r[1],M=r[4],S=r[7],w=r[2],C=r[5],P=r[8];return s[0]=o*g+a*E+l*w,s[3]=o*m+a*M+l*C,s[6]=o*d+a*S+l*P,s[1]=c*g+u*E+f*w,s[4]=c*m+u*M+f*C,s[7]=c*d+u*S+f*P,s[2]=h*g+p*E+v*w,s[5]=h*m+p*M+v*C,s[8]=h*d+p*S+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new ke;function vh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const cu={};function kr(n){n in cu||(cu[n]=!0,console.warn(n))}function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const j_=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$_=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function K_(n){return n.convertSRGBToLinear().applyMatrix3($_)}function Z_(n){return n.applyMatrix3(j_).convertLinearToSRGB()}const J_={[Mn]:n=>n,[Ge]:n=>n.convertSRGBToLinear(),[_h]:K_},Q_={[Mn]:n=>n,[Ge]:n=>n.convertLinearToSRGB(),[_h]:Z_},Kt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Mn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=J_[e],r=Q_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Di;class xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=ts("canvas")),Di.width=e.width,Di.height=e.height;const i=Di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ev=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wo(r[o].image)):s.push(Wo(r[o]))}else s=Wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tv=0;class It extends xr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=sn,r=sn,s=Yt,o=Jr,a=on,l=ii,c=It.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Mr(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ri?Ge:Ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?Ri:gh}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ri?Ge:Ci}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=ch;It.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(p+1)/2,w=(d+1)/2,C=(u+h)/4,P=(f+g)/4,I=(v+m)/4;return M>S&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=P/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=I/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=I/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-g)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nv extends xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ri?Ge:Ci),this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Yt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends nv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sh extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iv extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==h||c!==p||u!==v){let m=1-a;const d=l*h+c*p+u*v+f*g,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const w=Math.sqrt(M),C=Math.atan2(w,d*E);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const S=a*E;if(l=l*m+h*S,c=c*m+p*S,u=u*m+v*S,f=f*m+g*S,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new N,uu=new rs;class ss{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox),Ii.applyMatrix4(e.matrixWorld),this.union(Ii);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Tn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else r.boundingBox===null&&r.computeBoundingBox(),Ii.copy(r.boundingBox),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),ps.subVectors(this.max,wr),Ni.subVectors(e.a,wr),Fi.subVectors(e.b,wr),Oi.subVectors(e.c,wr),Xn.subVectors(Fi,Ni),qn.subVectors(Oi,Fi),di.subVectors(Ni,Oi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!qo(t,Ni,Fi,Oi,ps)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Ni,Fi,Oi,ps))?!1:(ms.crossVectors(Xn,qn),t=[ms.x,ms.y,ms.z],qo(t,Ni,Fi,Oi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Ii=new ss,Ni=new N,Fi=new N,Oi=new N,Xn=new N,qn=new N,di=new N,wr=new N,ps=new N,ms=new N,pi=new N;function qo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){pi.fromArray(n,s);const a=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rv=new ss,Rr=new N,Yo=new N;class pl{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Yo)),this.expandByPoint(Rr.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new N,jo=new N,gs=new N,Yn=new N,$o=new N,_s=new N,Ko=new N;class sv{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jo.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=Yn.dot(this.direction),l=-Yn.dot(gs),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(jo).addScaledVector(gs,h),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,r,s){$o.subVectors(t,e),_s.subVectors(i,e),Ko.crossVectors($o,_s);let o=this.direction.dot(Ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(_s.crossVectors(Yn,_s));if(l<0)return null;const c=a*this.direction.dot($o.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Ko);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,v,g,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,g,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,g=c*f;t[0]=h+g*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ov,e,av)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),jn.crossVectors(i,Bt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),jn.crossVectors(i,Bt)),jn.normalize(),vs.crossVectors(Bt,jn),r[0]=jn.x,r[4]=vs.x,r[8]=Bt.x,r[1]=jn.y,r[5]=vs.y,r[9]=Bt.y,r[2]=jn.z,r[6]=vs.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],g=i[6],m=i[10],d=i[14],E=i[3],M=i[7],S=i[11],w=i[15],C=r[0],P=r[4],I=r[8],y=r[12],b=r[1],te=r[5],G=r[9],O=r[13],W=r[2],K=r[6],ne=r[10],X=r[14],Y=r[3],he=r[7],le=r[11],k=r[15];return s[0]=o*C+a*b+l*W+c*Y,s[4]=o*P+a*te+l*K+c*he,s[8]=o*I+a*G+l*ne+c*le,s[12]=o*y+a*O+l*X+c*k,s[1]=u*C+f*b+h*W+p*Y,s[5]=u*P+f*te+h*K+p*he,s[9]=u*I+f*G+h*ne+p*le,s[13]=u*y+f*O+h*X+p*k,s[2]=v*C+g*b+m*W+d*Y,s[6]=v*P+g*te+m*K+d*he,s[10]=v*I+g*G+m*ne+d*le,s[14]=v*y+g*O+m*X+d*k,s[3]=E*C+M*b+S*W+w*Y,s[7]=E*P+M*te+S*K+w*he,s[11]=E*I+M*G+S*ne+w*le,s[15]=E*y+M*O+S*X+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+g*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],E=f*m*c-g*h*c+g*l*p-a*m*p-f*l*d+a*h*d,M=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,S=u*g*c-v*f*c+v*a*p-o*g*p-u*a*d+o*f*d,w=v*f*l-u*g*l-v*a*h+o*g*h+u*a*m-o*f*m,C=t*E+i*M+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=E*P,e[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=M*P,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=S*P,e[9]=(v*f*s-u*g*s-v*i*p+t*g*p+u*i*d-t*f*d)*P,e[10]=(o*g*s-v*a*s+v*i*c-t*g*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=w*P,e[13]=(u*g*r-v*f*r+v*i*h-t*g*h-u*i*m+t*f*m)*P,e[14]=(v*a*r-o*g*r-v*i*l+t*g*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,g=o*u,m=o*f,d=a*f,E=l*c,M=l*u,S=l*f,w=i.x,C=i.y,P=i.z;return r[0]=(1-(g+d))*w,r[1]=(p+S)*w,r[2]=(v-M)*w,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+d))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(v+M)*P,r[9]=(m-E)*P,r[10]=(1-(h+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const o=Bi.set(r[4],r[5],r[6]).length(),a=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/o,f=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Dn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(a===Dn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$s)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Dn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let v,g;if(a===Dn)v=(o+s)*f,g=-2*f;else if(a===$s)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new N,Zt=new dt,ov=new N(0,0,0),av=new N(1,1,1),jn=new N,vs=new N,Bt=new N,fu=new dt,hu=new rs;class po{constructor(e=0,t=0,i=0,r=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lv=0;const du=new N,zi=new rs,An=new dt,xs=new N,Cr=new N,cv=new N,uv=new rs,pu=new N(1,0,0),mu=new N(0,1,0),gu=new N(0,0,1),fv={type:"added"},_u={type:"removed"};class Nt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new N,t=new po,i=new rs,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xs.copy(e):xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Cr,xs,this.up):An.lookAt(xs,Cr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(An),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_u)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new N(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new N,wn=new N,Zo=new N,Rn=new N,Hi=new N,Gi=new N,vu=new N,Jo=new N,Qo=new N,ea=new N;let Ms=!1;class tn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),wn.subVectors(i,t),Zo.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(wn),l=Jt.dot(Zo),c=wn.dot(wn),u=wn.dot(Zo),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rn),l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),wn.subVectors(e,t),Jt.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Jt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),Gi.subVectors(s,i),Jo.subVectors(e,i);const l=Hi.dot(Jo),c=Gi.dot(Jo);if(l<=0&&c<=0)return t.copy(i);Qo.subVectors(e,r);const u=Hi.dot(Qo),f=Gi.dot(Qo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hi,o);ea.subVectors(e,s);const p=Hi.dot(ea),v=Gi.dot(ea);if(v>=0&&p<=v)return t.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Gi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return vu.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(vu,a);const d=1/(m+g+h);return o=g*d,a=h*d,t.copy(i).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hv=0;class Sr extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=or,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ge){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Kt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Kt.workingColorSpace){if(e=dl(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ge){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ge){const i=yh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ge){return Kt.fromWorkingColorSpace(St.copy(this),e),Math.round(Pt(St.r*255,0,255))*65536+Math.round(Pt(St.g*255,0,255))*256+Math.round(Pt(St.b*255,0,255))}getHexString(e=Ge){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Ge){Kt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Ge?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=i,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(Ss);const i=Vr(Qt.h,Ss.h,t),r=Vr(Qt.s,Ss.s,t),s=Vr(Qt.l,Ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Je;Je.NAMES=yh;class In extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new N,Es=new qe;class _n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRange={offset:0,count:-1},this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Th extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bh extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ot extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dv=0;const qt=new dt,na=new Nt,Vi=new N,zt=new ss,Pr=new ss,_t=new N;class $t extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?bh:Th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(zt.min,Pr.min),zt.expandByPoint(_t),_t.addVectors(zt.max,Pr.max),zt.expandByPoint(_t)):(zt.expandByPoint(Pr.min),zt.expandByPoint(Pr.max))}zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(e,c),_t.add(Vi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new N,u[b]=new N;const f=new N,h=new N,p=new N,v=new qe,g=new qe,m=new qe,d=new N,E=new N;function M(b,te,G){f.fromArray(r,b*3),h.fromArray(r,te*3),p.fromArray(r,G*3),v.fromArray(o,b*2),g.fromArray(o,te*2),m.fromArray(o,G*2),h.sub(f),p.sub(f),g.sub(v),m.sub(v);const O=1/(g.x*m.y-m.x*g.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(O),E.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(O),c[b].add(d),c[te].add(d),c[G].add(d),u[b].add(E),u[te].add(E),u[G].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,te=S.length;b<te;++b){const G=S[b],O=G.start,W=G.count;for(let K=O,ne=O+W;K<ne;K+=3)M(i[K+0],i[K+1],i[K+2])}const w=new N,C=new N,P=new N,I=new N;function y(b){P.fromArray(s,b*3),I.copy(P);const te=c[b];w.copy(te),w.sub(P.multiplyScalar(P.dot(te))).normalize(),C.crossVectors(I,te);const O=C.dot(u[b])<0?-1:1;l[b*4]=w.x,l[b*4+1]=w.y,l[b*4+2]=w.z,l[b*4+3]=O}for(let b=0,te=S.length;b<te;++b){const G=S[b],O=G.start,W=G.count;for(let K=O,ne=O+W;K<ne;K+=3)y(i[K+0]),y(i[K+1]),y(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new _n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new dt,mi=new sv,ys=new pl,Mu=new N,ki=new N,Wi=new N,Xi=new N,ia=new N,Ts=new N,bs=new qe,As=new qe,ws=new qe,Su=new N,Eu=new N,yu=new N,Rs=new N,Cs=new N;class et extends Nt{constructor(e=new $t,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ts.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ia.fromBufferAttribute(f,e),o?Ts.addScaledVector(ia,u):Ts.addScaledVector(ia.sub(t),u))}t.add(Ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(ys.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ys,Mu)===null||mi.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(xu.copy(s).invert(),mi.copy(e.ray).applyMatrix4(xu),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,w=M;S<w;S+=3){const C=a.getX(S),P=a.getX(S+1),I=a.getX(S+2);r=Ps(this,d,e,i,c,u,f,C,P,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const E=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=Ps(this,o,e,i,c,u,f,E,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,w=M;S<w;S+=3){const C=S,P=S+1,I=S+2;r=Ps(this,d,e,i,c,u,f,C,P,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const E=m,M=m+1,S=m+2;r=Ps(this,o,e,i,c,u,f,E,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pv(n,e,t,i,r,s,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===oi,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ki),n.getVertexPosition(l,Wi),n.getVertexPosition(c,Xi);const u=pv(n,e,t,i,ki,Wi,Xi,Rs);if(u){r&&(bs.fromBufferAttribute(r,a),As.fromBufferAttribute(r,l),ws.fromBufferAttribute(r,c),u.uv=tn.getInterpolation(Rs,ki,Wi,Xi,bs,As,ws,new qe)),s&&(bs.fromBufferAttribute(s,a),As.fromBufferAttribute(s,l),ws.fromBufferAttribute(s,c),u.uv1=tn.getInterpolation(Rs,ki,Wi,Xi,bs,As,ws,new qe),u.uv2=u.uv1),o&&(Su.fromBufferAttribute(o,a),Eu.fromBufferAttribute(o,l),yu.fromBufferAttribute(o,c),u.normal=tn.getInterpolation(Rs,ki,Wi,Xi,Su,Eu,yu,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};tn.getNormal(ki,Wi,Xi,f.normal),u.face=f}return u}class On extends $t{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function v(g,m,d,E,M,S,w,C,P,I,y){const b=S/P,te=w/I,G=S/2,O=w/2,W=C/2,K=P+1,ne=I+1;let X=0,Y=0;const he=new N;for(let le=0;le<ne;le++){const k=le*te-O;for(let q=0;q<K;q++){const ge=q*b-G;he[g]=ge*E,he[m]=k*M,he[d]=W,c.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[d]=C>0?1:-1,u.push(he.x,he.y,he.z),f.push(q/P),f.push(1-le/I),X+=1}}for(let le=0;le<I;le++)for(let k=0;k<P;k++){const q=h+k+K*le,ge=h+k+K*(le+1),me=h+(k+1)+K*(le+1),Ee=h+(k+1)+K*le;l.push(q,ge,Ee),l.push(ge,me,Ee),Y+=6}a.addGroup(p,Y,y),p+=Y,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function mv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){return n.getRenderTarget()===null?n.outputColorSpace:Mn}const gv={clone:mr,merge:Rt};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wh extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends wh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class xv extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Lt(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new Lt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const o=new Lt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const a=new Lt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const l=new Lt(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new Lt(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Rh extends It{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mv extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ri?Ge:Ci),this.texture=new Rh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new On(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:ti});s.uniforms.tEquirect.value=t;const o=new et(r,s),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Yt),new xv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ra=new N,Sv=new N,Ev=new ke;class _i{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ra.subVectors(i,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ra),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ev.getNormalMatrix(e),r=this.coplanarPoint(ra).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new pl,Ls=new N;class ml{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],g=r[10],m=r[11],d=r[12],E=r[13],M=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-d).normalize(),i[1].setComponents(l+s,h+c,m+p,S+d).normalize(),i[2].setComponents(l+o,h+u,m+v,S+E).normalize(),i[3].setComponents(l-o,h-u,m-v,S-E).normalize(),i[4].setComponents(l-a,h-f,m-g,S-M).normalize(),t===Dn)i[5].setComponents(l+a,h+f,m+g,S+M).normalize();else if(t===$s)i[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class mo extends $t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const E=d*h-o;for(let M=0;M<c;M++){const S=M*f-s;v.push(S,-E,0),g.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const M=E+c*d,S=E+c*(d+1),w=E+1+c*(d+1),C=E+1+c*d;p.push(M,S,C),p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,S0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,C0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,O0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Tv,alphahash_pars_fragment:bv,alphamap_fragment:Av,alphamap_pars_fragment:wv,alphatest_fragment:Rv,alphatest_pars_fragment:Cv,aomap_fragment:Pv,aomap_pars_fragment:Lv,begin_vertex:Uv,beginnormal_vertex:Dv,bsdfs:Iv,iridescence_fragment:Nv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Hv,color_fragment:Gv,color_pars_fragment:Vv,color_pars_vertex:kv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:Yv,displacementmap_pars_vertex:jv,displacementmap_vertex:$v,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Jv,colorspace_pars_fragment:Qv,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:s0,fog_pars_vertex:o0,fog_fragment:a0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_fragment:u0,lightmap_pars_fragment:f0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:_0,lights_phong_fragment:v0,lights_phong_pars_fragment:x0,lights_physical_fragment:M0,lights_physical_pars_fragment:S0,lights_fragment_begin:E0,lights_fragment_maps:y0,lights_fragment_end:T0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:L0,map_particle_pars_fragment:U0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:I0,morphcolor_vertex:N0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:B0,normal_fragment_begin:z0,normal_fragment_maps:H0,normal_pars_fragment:G0,normal_pars_vertex:V0,normal_vertex:k0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:j0,opaque_fragment:$0,packing:K0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:fx,specularmap_pars_fragment:hx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:Mx,background_vert:Sx,background_frag:Ex,backgroundCube_vert:yx,backgroundCube_frag:Tx,cube_vert:bx,cube_frag:Ax,depth_vert:wx,depth_frag:Rx,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Lx,equirect_frag:Ux,linedashed_vert:Dx,linedashed_frag:Ix,meshbasic_vert:Nx,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:Hx,meshnormal_vert:Gx,meshnormal_frag:Vx,meshphong_vert:kx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:qx,meshtoon_vert:Yx,meshtoon_frag:jx,points_vert:$x,points_frag:Kx,shadow_vert:Zx,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:eM},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},mn={basic:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Rt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Rt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Rt([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Rt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Rt([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Rt([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Rt([_e.common,_e.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Rt([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};mn.physical={uniforms:Rt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Us={r:0,b:0,g:0};function tM(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(m,d){let E=!1,M=d.isScene===!0?d.background:null;switch(M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ho)?(u===void 0&&(u=new et(new On(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:mr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Ge,(f!==M||h!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new et(new mo(2,2),new Li({name:"BackgroundMaterial",uniforms:mr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(Us,Ah(n)),i.buffers.color.setClear(Us.r,Us.g,Us.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function nM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(W,K,ne,X,Y){let he=!1;if(o){const le=g(X,ne,K);c!==le&&(c=le,p(c.object)),he=d(W,X,ne,Y),he&&E(W,X,ne,Y)}else{const le=K.wireframe===!0;(c.geometry!==X.id||c.program!==ne.id||c.wireframe!==le)&&(c.geometry=X.id,c.program=ne.id,c.wireframe=le,he=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,I(W,K,ne,X),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(W){return i.isWebGL2?n.bindVertexArray(W):s.bindVertexArrayOES(W)}function v(W){return i.isWebGL2?n.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function g(W,K,ne){const X=ne.wireframe===!0;let Y=a[W.id];Y===void 0&&(Y={},a[W.id]=Y);let he=Y[K.id];he===void 0&&(he={},Y[K.id]=he);let le=he[X];return le===void 0&&(le=m(h()),he[X]=le),le}function m(W){const K=[],ne=[],X=[];for(let Y=0;Y<r;Y++)K[Y]=0,ne[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ne,attributeDivisors:X,object:W,attributes:{},index:null}}function d(W,K,ne,X){const Y=c.attributes,he=K.attributes;let le=0;const k=ne.getAttributes();for(const q in k)if(k[q].location>=0){const me=Y[q];let Ee=he[q];if(Ee===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(Ee=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(Ee=W.instanceColor)),me===void 0||me.attribute!==Ee||Ee&&me.data!==Ee.data)return!0;le++}return c.attributesNum!==le||c.index!==X}function E(W,K,ne,X){const Y={},he=K.attributes;let le=0;const k=ne.getAttributes();for(const q in k)if(k[q].location>=0){let me=he[q];me===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(me=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(me=W.instanceColor));const Ee={};Ee.attribute=me,me&&me.data&&(Ee.data=me.data),Y[q]=Ee,le++}c.attributes=Y,c.attributesNum=le,c.index=X}function M(){const W=c.newAttributes;for(let K=0,ne=W.length;K<ne;K++)W[K]=0}function S(W){w(W,0)}function w(W,K){const ne=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;ne[W]=1,X[W]===0&&(n.enableVertexAttribArray(W),X[W]=1),Y[W]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,K),Y[W]=K)}function C(){const W=c.newAttributes,K=c.enabledAttributes;for(let ne=0,X=K.length;ne<X;ne++)K[ne]!==W[ne]&&(n.disableVertexAttribArray(ne),K[ne]=0)}function P(W,K,ne,X,Y,he,le){le===!0?n.vertexAttribIPointer(W,K,ne,Y,he):n.vertexAttribPointer(W,K,ne,X,Y,he)}function I(W,K,ne,X){if(i.isWebGL2===!1&&(W.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=X.attributes,he=ne.getAttributes(),le=K.defaultAttributeValues;for(const k in he){const q=he[k];if(q.location>=0){let ge=Y[k];if(ge===void 0&&(k==="instanceMatrix"&&W.instanceMatrix&&(ge=W.instanceMatrix),k==="instanceColor"&&W.instanceColor&&(ge=W.instanceColor)),ge!==void 0){const me=ge.normalized,Ee=ge.itemSize,we=t.get(ge);if(we===void 0)continue;const H=we.buffer,se=we.type,oe=we.bytesPerElement,Me=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||ge.gpuType===uh);if(ge.isInterleavedBufferAttribute){const ye=ge.data,_=ye.stride,R=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let L=0;L<q.locationSize;L++)w(q.location+L,ye.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let L=0;L<q.locationSize;L++)S(q.location+L);n.bindBuffer(n.ARRAY_BUFFER,H);for(let L=0;L<q.locationSize;L++)P(q.location+L,Ee/q.locationSize,se,me,_*oe,(R+Ee/q.locationSize*L)*oe,Me)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)w(q.location+ye,ge.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<q.locationSize;ye++)S(q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,H);for(let ye=0;ye<q.locationSize;ye++)P(q.location+ye,Ee/q.locationSize,se,me,Ee*oe,Ee/q.locationSize*ye*oe,Me)}}else if(le!==void 0){const me=le[k];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(q.location,me);break;case 3:n.vertexAttrib3fv(q.location,me);break;case 4:n.vertexAttrib4fv(q.location,me);break;default:n.vertexAttrib1fv(q.location,me)}}}}C()}function y(){G();for(const W in a){const K=a[W];for(const ne in K){const X=K[ne];for(const Y in X)v(X[Y].object),delete X[Y];delete K[ne]}delete a[W]}}function b(W){if(a[W.id]===void 0)return;const K=a[W.id];for(const ne in K){const X=K[ne];for(const Y in X)v(X[Y].object),delete X[Y];delete K[ne]}delete a[W.id]}function te(W){for(const K in a){const ne=a[K];if(ne[W.id]===void 0)continue;const X=ne[W.id];for(const Y in X)v(X[Y].object),delete X[Y];delete ne[W.id]}}function G(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:O,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:te,initAttributes:M,enableAttribute:S,disableUnusedAttributes:C}}function iM(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function rM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,S=o||e.has("OES_texture_float"),w=M&&S,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function sM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _i,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,M=E*4;let S=d.clippingState||null;l.value=S,S=u(v,h,M,p);for(let w=0;w!==M;++w)S[w]=t[w];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,S=p;M!==g;++M,S+=4)o.copy(f[M]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function oM(n){let e=new WeakMap;function t(o,a){return a===La?o.mapping=hr:a===Ua&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===La||a===Ua)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class aM extends wh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,Tu=[.125,.215,.35,.446,.526,.582],Ei=20,sa=new aM,bu=new Je;let oa=null;const vi=(1+Math.sqrt(5))/2,ji=1/vi,Au=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,vi,ji),new N(0,vi,-ji),new N(ji,0,vi),new N(-ji,0,vi),new N(vi,ji,0),new N(-vi,ji,0)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){oa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Qr,format:on,colorSpace:Mn,depthBuffer:!1},r=Ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lM(s)),this._blurMaterial=cM(s,e,t)}return r}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,r){const a=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(bu),u.toneMapping=ni,u.autoClear=!1;const p=new In({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),v=new et(new On,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(bu),g=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;Ds(r,E*M,d>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===hr||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Au[(r-1)%Au.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new et(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const d=[];let E=0;for(let P=0;P<Ei;++P){const I=P/g,y=Math.exp(-I*I/2);d.push(y),P===0?E+=y:P<m&&(E+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-i;const S=this._sizeLods[r],w=3*S*(r>M-er?r-M+er:0),C=4*(this._cubeSize-S);Ds(t,w,C,3*S,2*S),l.setRenderTarget(t),l.render(f,sa)}}function lM(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+Tu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-er?l=Tu[o-n+er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,g=3,m=2,d=1,E=new Float32Array(g*v*p),M=new Float32Array(m*v*p),S=new Float32Array(d*v*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,I=C>2?0:-1,y=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(y,g*v*C),M.set(h,m*v*C);const b=[C,C,C,C,C,C];S.set(b,d*v*C)}const w=new $t;w.setAttribute("position",new _n(E,g)),w.setAttribute("uv",new _n(M,m)),w.setAttribute("faceIndex",new _n(S,d)),e.push(w),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ru(n,e,t){const i=new Pi(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cM(n,e,t){const i=new Float32Array(Ei),r=new N(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cu(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Pu(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===La||l===Ua,u=l===hr||l===dr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new wu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new wu(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let M=0,S=E.length;M<S;M+=3){const w=E[M+0],C=E[M+1],P=E[M+2];h.push(w,C,C,P,P,w)}}else if(v!==void 0){const E=v.array;g=v.version;for(let M=0,S=E.length/3-1;M<S;M+=3){const w=M+0,C=M+1,P=M+2;h.push(w,C,C,P,P,w)}}else return;const m=new(vh(h)?bh:Th)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function dM(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,v){if(v===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,h*l,v),t.update(p,s,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function pM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mM(n,e){return n[0]-e[0]}function gM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _M(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let K=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var p=K;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let y=0;M===!0&&(y=1),S===!0&&(y=2),w===!0&&(y=3);let b=u.attributes.position.count*y,te=1;b>e.maxTextureSize&&(te=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*te*4*g),O=new Sh(G,b,te,g);O.type=Jn,O.needsUpdate=!0;const W=y*4;for(let ne=0;ne<g;ne++){const X=C[ne],Y=P[ne],he=I[ne],le=b*te*4*ne;for(let k=0;k<X.count;k++){const q=k*W;M===!0&&(o.fromBufferAttribute(X,k),G[le+q+0]=o.x,G[le+q+1]=o.y,G[le+q+2]=o.z,G[le+q+3]=0),S===!0&&(o.fromBufferAttribute(Y,k),G[le+q+4]=o.x,G[le+q+5]=o.y,G[le+q+6]=o.z,G[le+q+7]=0),w===!0&&(o.fromBufferAttribute(he,k),G[le+q+8]=o.x,G[le+q+9]=o.y,G[le+q+10]=o.z,G[le+q+11]=he.itemSize===4?o.w:1)}}m={count:g,texture:O,size:new qe(b,te)},s.set(u,m),u.addEventListener("dispose",K)}let d=0;for(let M=0;M<h.length;M++)d+=h[M];const E=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==v){g=[];for(let S=0;S<v;S++)g[S]=[S,0];i[u.id]=g}for(let S=0;S<v;S++){const w=g[S];w[0]=S,w[1]=h[S]}g.sort(gM);for(let S=0;S<8;S++)S<v&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(mM);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const w=a[S],C=w[0],P=w[1];C!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+S)!==m[C]&&u.setAttribute("morphTarget"+S,m[C]),d&&u.getAttribute("morphNormal"+S)!==d[C]&&u.setAttribute("morphNormal"+S,d[C]),r[S]=P,E+=P):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function vM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ph=new It,Lh=new Sh,Uh=new iv,Dh=new Rh,Lu=[],Uu=[],Du=new Float32Array(16),Iu=new Float32Array(9),Nu=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lu[r];if(s===void 0&&(s=new Float32Array(r),Lu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function yM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),gt(t,i)}}function TM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),gt(t,i)}}function bM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),gt(t,i)}}function AM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function IM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ph,r)}function NM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uh,r)}function FM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dh,r)}function OM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Lh,r)}function BM(n){switch(n){case 5126:return xM;case 35664:return MM;case 35665:return SM;case 35666:return EM;case 35674:return yM;case 35675:return TM;case 35676:return bM;case 5124:case 35670:return AM;case 35667:case 35671:return wM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return LM;case 36295:return UM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}function zM(n,e){n.uniform1fv(this.addr,e)}function HM(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function GM(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function VM(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function kM(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WM(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XM(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qM(n,e){n.uniform1iv(this.addr,e)}function YM(n,e){n.uniform2iv(this.addr,e)}function jM(n,e){n.uniform3iv(this.addr,e)}function $M(n,e){n.uniform4iv(this.addr,e)}function KM(n,e){n.uniform1uiv(this.addr,e)}function ZM(n,e){n.uniform2uiv(this.addr,e)}function JM(n,e){n.uniform3uiv(this.addr,e)}function QM(n,e){n.uniform4uiv(this.addr,e)}function eS(n,e,t){const i=this.cache,r=e.length,s=go(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ph,s[o])}function tS(n,e,t){const i=this.cache,r=e.length,s=go(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uh,s[o])}function nS(n,e,t){const i=this.cache,r=e.length,s=go(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Dh,s[o])}function iS(n,e,t){const i=this.cache,r=e.length,s=go(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Lh,s[o])}function rS(n){switch(n){case 5126:return zM;case 35664:return HM;case 35665:return GM;case 35666:return VM;case 35674:return kM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return jM;case 35669:case 35673:return $M;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}class sS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=BM(t.type)}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function lS(n,e,t){const i=n.name,r=i.length;for(aa.lastIndex=0;;){const s=aa.exec(i),o=aa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fu(t,c===void 0?new sS(a,n,e):new oS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new aS(a),Fu(t,f)),t=f}}}class Vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ou(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let cS=0;function uS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fS(n){switch(n){case Mn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uS(n.getShaderSource(e),o)}else return r}function hS(n,e){const t=fS(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dS(n,e){let t;switch(e){case a_:t="Linear";break;case l_:t="Reinhard";break;case c_:t="OptimizedCineon";break;case u_:t="ACESFilmic";break;case f_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function mS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ir(n){return n!==""}function zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(n){return n.replace(_S,xS)}const vS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xS(n,e){let t=He[e];if(t===void 0){const i=vS.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oa(t)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(n){return n.replace(MS,SS)}function SS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ES(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case dr:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lh:e="ENVMAP_BLENDING_MULTIPLY";break;case s_:e="ENVMAP_BLENDING_MIX";break;case o_:e="ENVMAP_BLENDING_ADD";break}return e}function AS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ES(t),c=yS(t),u=TS(t),f=bS(t),h=AS(t),p=t.isWebGL2?"":pS(t),v=mS(s),g=r.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ir).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(m=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[p,Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?He.tonemapping_pars_fragment:"",t.toneMapping!==ni?dS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Oa(o),o=zu(o,t),o=Hu(o,t),a=Oa(a),a=zu(a,t),a=Hu(a,t),o=Gu(o),a=Gu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+m+o,S=E+d+a,w=Ou(r,r.VERTEX_SHADER,M),C=Ou(r,r.FRAGMENT_SHADER,S);if(r.attachShader(g,w),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const y=r.getProgramInfoLog(g).trim(),b=r.getShaderInfoLog(w).trim(),te=r.getShaderInfoLog(C).trim();let G=!0,O=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,C);else{const W=Bu(r,w,"vertex"),K=Bu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+W+`
`+K)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||te==="")&&(O=!1);O&&(this.diagnostics={runnable:G,programLog:y,vertexShader:{log:b,prefix:m},fragmentShader:{log:te,prefix:d}})}r.deleteShader(w),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Vs(r,g)),P};let I;return this.getAttributes=function(){return I===void 0&&(I=gS(r,g)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let RS=0;class CS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PS(e),t.set(e,i)),i}}class PS{constructor(e){this.id=RS++,this.code=e,this.usedTimes=0}}function LS(n,e,t,i,r,s,o){const a=new Eh,l=new CS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,b,te,G,O){const W=G.fog,K=O.geometry,ne=y.isMeshStandardMaterial?G.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||ne),Y=X&&X.mapping===ho?X.image.height:null,he=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,k=le!==void 0?le.length:0;let q=0;K.morphAttributes.position!==void 0&&(q=1),K.morphAttributes.normal!==void 0&&(q=2),K.morphAttributes.color!==void 0&&(q=3);let ge,me,Ee,we;if(he){const tt=mn[he];ge=tt.vertexShader,me=tt.fragmentShader}else ge=y.vertexShader,me=y.fragmentShader,l.update(y),Ee=l.getVertexShaderID(y),we=l.getFragmentShaderID(y);const H=n.getRenderTarget(),se=O.isInstancedMesh===!0,oe=!!y.map,Me=!!y.matcap,ye=!!X,_=!!y.aoMap,R=!!y.lightMap,L=!!y.bumpMap,F=!!y.normalMap,B=!!y.displacementMap,J=!!y.emissiveMap,ue=!!y.metalnessMap,ee=!!y.roughnessMap,fe=y.anisotropy>0,ce=y.clearcoat>0,Ae=y.iridescence>0,T=y.sheen>0,x=y.transmission>0,D=fe&&!!y.anisotropyMap,ie=ce&&!!y.clearcoatMap,re=ce&&!!y.clearcoatNormalMap,ae=ce&&!!y.clearcoatRoughnessMap,ve=Ae&&!!y.iridescenceMap,de=Ae&&!!y.iridescenceThicknessMap,j=T&&!!y.sheenColorMap,Le=T&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Pe=!!y.specularColorMap,xe=!!y.specularIntensityMap,Te=x&&!!y.transmissionMap,Be=x&&!!y.thicknessMap,Qe=!!y.gradientMap,U=!!y.alphaMap,Se=y.alphaTest>0,$=!!y.alphaHash,pe=!!y.extensions,be=!!K.attributes.uv1,je=!!K.attributes.uv2,rt=!!K.attributes.uv3;let ct=ni;return y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ct=n.toneMapping),{isWebGL2:u,shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:me,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:we,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:se,instancingColor:se&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Mn,map:oe,matcap:Me,envMap:ye,envMapMode:ye&&X.mapping,envMapCubeUVHeight:Y,aoMap:_,lightMap:R,bumpMap:L,normalMap:F,displacementMap:h&&B,emissiveMap:J,normalMapObjectSpace:F&&y.normalMapType===T_,normalMapTangentSpace:F&&y.normalMapType===hl,metalnessMap:ue,roughnessMap:ee,anisotropy:fe,anisotropyMap:D,clearcoat:ce,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:Ae,iridescenceMap:ve,iridescenceThicknessMap:de,sheen:T,sheenColorMap:j,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:xe,transmission:x,transmissionMap:Te,thicknessMap:Be,gradientMap:Qe,opaque:y.transparent===!1&&y.blending===or,alphaMap:U,alphaTest:Se,alphaHash:$,combine:y.combine,mapUv:oe&&g(y.map.channel),aoMapUv:_&&g(y.aoMap.channel),lightMapUv:R&&g(y.lightMap.channel),bumpMapUv:L&&g(y.bumpMap.channel),normalMapUv:F&&g(y.normalMap.channel),displacementMapUv:B&&g(y.displacementMap.channel),emissiveMapUv:J&&g(y.emissiveMap.channel),metalnessMapUv:ue&&g(y.metalnessMap.channel),roughnessMapUv:ee&&g(y.roughnessMap.channel),anisotropyMapUv:D&&g(y.anisotropyMap.channel),clearcoatMapUv:ie&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:j&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(y.sheenRoughnessMap.channel),specularMapUv:Ce&&g(y.specularMap.channel),specularColorMapUv:Pe&&g(y.specularColorMap.channel),specularIntensityMapUv:xe&&g(y.specularIntensityMap.channel),transmissionMapUv:Te&&g(y.transmissionMap.channel),thicknessMapUv:Be&&g(y.thicknessMap.channel),alphaMapUv:U&&g(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(F||fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:je,vertexUv3s:rt,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(oe||U),fog:!!W,useFog:y.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,useLegacyLights:n._useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const te in y.defines)b.push(te),b.push(y.defines[te]);return y.isRawShaderMaterial===!1&&(E(b,y),M(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const b=v[y.type];let te;if(b){const G=mn[b];te=gv.clone(G.uniforms)}else te=y.uniforms;return te}function w(y,b){let te;for(let G=0,O=c.length;G<O;G++){const W=c[G];if(W.cacheKey===b){te=W,++te.usedTimes;break}}return te===void 0&&(te=new wS(n,b,y,s),c.push(te)),te}function C(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:I}}function US(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function DS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,v,g,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,v,g,m){const d=o(f,h,p,v,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,g,m){const d=o(f,h,p,v,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||DS),i.length>1&&i.sort(h||ku),r.length>1&&r.sort(h||ku)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function IS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Wu,n.set(i,[o])):r>=s.length?(o=new Wu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Je};break;case"SpotLight":t={position:new N,direction:new N,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OS=0;function BS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zS(n,e){const t=new NS,i=FS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,o=new dt,a=new dt;function l(u,f){let h=0,p=0,v=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let g=0,m=0,d=0,E=0,M=0,S=0,w=0,C=0,P=0,I=0;u.sort(BS);const y=f===!0?Math.PI:1;for(let te=0,G=u.length;te<G;te++){const O=u[te],W=O.color,K=O.intensity,ne=O.distance,X=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=W.r*K*y,p+=W.g*K*y,v+=W.b*K*y;else if(O.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(O.sh.coefficients[Y],K);else if(O.isDirectionalLight){const Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*y),O.castShadow){const he=O.shadow,le=i.get(O);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,r.directionalShadow[g]=le,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=O.shadow.matrix,S++}r.directional[g]=Y,g++}else if(O.isSpotLight){const Y=t.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(W).multiplyScalar(K*y),Y.distance=ne,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,r.spot[d]=Y;const he=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,he.updateMatrices(O),O.castShadow&&I++),r.spotLightMatrix[d]=he.matrix,O.castShadow){const le=i.get(O);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,r.spotShadow[d]=le,r.spotShadowMap[d]=X,C++}d++}else if(O.isRectAreaLight){const Y=t.get(O);Y.color.copy(W).multiplyScalar(K),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=Y,E++}else if(O.isPointLight){const Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*y),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const he=O.shadow,le=i.get(O);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,le.shadowCameraNear=he.camera.near,le.shadowCameraFar=he.camera.far,r.pointShadow[m]=le,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=O.shadow.matrix,w++}r.point[m]=Y,m++}else if(O.isHemisphereLight){const Y=t.get(O);Y.skyColor.copy(O.color).multiplyScalar(K*y),Y.groundColor.copy(O.groundColor).multiplyScalar(K*y),r.hemi[M]=Y,M++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const b=r.hash;(b.directionalLength!==g||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==E||b.hemiLength!==M||b.numDirectionalShadows!==S||b.numPointShadows!==w||b.numSpotShadows!==C||b.numSpotMaps!==P)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=E,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+P-I,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=I,b.directionalLength=g,b.pointLength=m,b.spotLength=d,b.rectAreaLength=E,b.hemiLength=M,b.numDirectionalShadows=S,b.numPointShadows=w,b.numSpotShadows=C,b.numSpotMaps=P,r.version=OS++)}function c(u,f){let h=0,p=0,v=0,g=0,m=0;const d=f.matrixWorldInverse;for(let E=0,M=u.length;E<M;E++){const S=u[E];if(S.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(S.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Xu(n,e){const t=new zS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function HS(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Xu(n,e),t.set(s,[l])):o>=a.length?(l=new Xu(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class GS extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VS extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XS(n,e,t){let i=new ml;const r=new qe,s=new qe,o=new it,a=new GS({depthPacking:y_}),l=new VS,c={},u=t.maxTextureSize,f={[oi]:Dt,[Dt]:oi,[Un]:Un},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:kS,fragmentShader:WS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new et(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let d=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const I=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),te=n.state;te.setBlending(ti),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const G=d!==Pn&&this.type===Pn,O=d===Pn&&this.type!==Pn;for(let W=0,K=w.length;W<K;W++){const ne=w[W],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||G===!0||O===!0){const le=this.type!==Pn?{minFilter:Ct,magFilter:Ct}:{};X.map!==null&&X.map.dispose(),X.map=new Pi(r.x,r.y,le),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const he=X.getViewportCount();for(let le=0;le<he;le++){const k=X.getViewport(le);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),te.viewport(o),X.updateMatrices(ne,le),i=X.getFrustum(),S(C,P,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===Pn&&E(X,P),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(I,y,b)};function E(w,C){const P=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,p,g,null)}function M(w,C,P,I){let y=null;const b=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)y=b;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const te=y.uuid,G=C.uuid;let O=c[te];O===void 0&&(O={},c[te]=O);let W=O[G];W===void 0&&(W=y.clone(),O[G]=W),y=W}if(y.visible=C.visible,y.wireframe=C.wireframe,I===Pn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const te=n.properties.get(y);te.light=P}return y}function S(w,C,P,I,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Pn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const G=e.update(w),O=w.material;if(Array.isArray(O)){const W=G.groups;for(let K=0,ne=W.length;K<ne;K++){const X=W[K],Y=O[X.materialIndex];if(Y&&Y.visible){const he=M(w,Y,I,y);n.renderBufferDirect(P,null,G,he,w,X)}}}else if(O.visible){const W=M(w,O,I,y);n.renderBufferDirect(P,null,G,W,w,null)}}const te=w.children;for(let G=0,O=te.length;G<O;G++)S(te[G],C,P,I,y)}}function qS(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const Se=new it;let $=null;const pe=new it(0,0,0,0);return{setMask:function(be){$!==be&&!U&&(n.colorMask(be,be,be,be),$=be)},setLocked:function(be){U=be},setClear:function(be,je,rt,ct,Hn){Hn===!0&&(be*=ct,je*=ct,rt*=ct),Se.set(be,je,rt,ct),pe.equals(Se)===!1&&(n.clearColor(be,je,rt,ct),pe.copy(Se))},reset:function(){U=!1,$=null,pe.set(-1,0,0,0)}}}function s(){let U=!1,Se=null,$=null,pe=null;return{setTest:function(be){be?H(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(be){Se!==be&&!U&&(n.depthMask(be),Se=be)},setFunc:function(be){if($!==be){switch(be){case Jg:n.depthFunc(n.NEVER);break;case Qg:n.depthFunc(n.ALWAYS);break;case e_:n.depthFunc(n.LESS);break;case Pa:n.depthFunc(n.LEQUAL);break;case t_:n.depthFunc(n.EQUAL);break;case n_:n.depthFunc(n.GEQUAL);break;case i_:n.depthFunc(n.GREATER);break;case r_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=be}},setLocked:function(be){U=be},setClear:function(be){pe!==be&&(n.clearDepth(be),pe=be)},reset:function(){U=!1,Se=null,$=null,pe=null}}}function o(){let U=!1,Se=null,$=null,pe=null,be=null,je=null,rt=null,ct=null,Hn=null;return{setTest:function(tt){U||(tt?H(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!U&&(n.stencilMask(tt),Se=tt)},setFunc:function(tt,un,Tt){($!==tt||pe!==un||be!==Tt)&&(n.stencilFunc(tt,un,Tt),$=tt,pe=un,be=Tt)},setOp:function(tt,un,Tt){(je!==tt||rt!==un||ct!==Tt)&&(n.stencilOp(tt,un,Tt),je=tt,rt=un,ct=Tt)},setLocked:function(tt){U=tt},setClear:function(tt){Hn!==tt&&(n.clearStencil(tt),Hn=tt)},reset:function(){U=!1,Se=null,$=null,pe=null,be=null,je=null,rt=null,ct=null,Hn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,g=[],m=null,d=!1,E=null,M=null,S=null,w=null,C=null,P=null,I=null,y=!1,b=null,te=null,G=null,O=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,X=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=X>=2);let he=null,le={};const k=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ge=new it().fromArray(k),me=new it().fromArray(q);function Ee(U,Se,$,pe){const be=new Uint8Array(4),je=n.createTexture();n.bindTexture(U,je),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<$;rt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Se+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return je}const we={};we[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),H(n.DEPTH_TEST),l.setFunc(Pa),B(!1),J(Cc),H(n.CULL_FACE),L(ti);function H(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function se(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function oe(U,Se){return p[U]!==Se?(n.bindFramebuffer(U,Se),p[U]=Se,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Se),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Me(U,Se){let $=g,pe=!1;if(U)if($=v.get(Se),$===void 0&&($=[],v.set(Se,$)),U.isWebGLMultipleRenderTargets){const be=U.texture;if($.length!==be.length||$[0]!==n.COLOR_ATTACHMENT0){for(let je=0,rt=be.length;je<rt;je++)$[je]=n.COLOR_ATTACHMENT0+je;$.length=be.length,pe=!0}}else $[0]!==n.COLOR_ATTACHMENT0&&($[0]=n.COLOR_ATTACHMENT0,pe=!0);else $[0]!==n.BACK&&($[0]=n.BACK,pe=!0);pe&&(t.isWebGL2?n.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function ye(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const _={[Zi]:n.FUNC_ADD,[Gg]:n.FUNC_SUBTRACT,[Vg]:n.FUNC_REVERSE_SUBTRACT};if(i)_[Dc]=n.MIN,_[Ic]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(_[Dc]=U.MIN_EXT,_[Ic]=U.MAX_EXT)}const R={[kg]:n.ZERO,[Wg]:n.ONE,[Xg]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[$g]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[qg]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA};function L(U,Se,$,pe,be,je,rt,ct){if(U===ti){d===!0&&(se(n.BLEND),d=!1);return}if(d===!1&&(H(n.BLEND),d=!0),U!==Hg){if(U!==E||ct!==y){if((M!==Zi||C!==Zi)&&(n.blendEquation(n.FUNC_ADD),M=Zi,C=Zi),ct)switch(U){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,w=null,P=null,I=null,E=U,y=ct}return}be=be||Se,je=je||$,rt=rt||pe,(Se!==M||be!==C)&&(n.blendEquationSeparate(_[Se],_[be]),M=Se,C=be),($!==S||pe!==w||je!==P||rt!==I)&&(n.blendFuncSeparate(R[$],R[pe],R[je],R[rt]),S=$,w=pe,P=je,I=rt),E=U,y=!1}function F(U,Se){U.side===Un?se(n.CULL_FACE):H(n.CULL_FACE);let $=U.side===Dt;Se&&($=!$),B($),U.blending===or&&U.transparent===!1?L(ti):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const pe=U.stencilWrite;c.setTest(pe),pe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function J(U){U!==Og?(H(n.CULL_FACE),U!==te&&(U===Cc?n.cullFace(n.BACK):U===Bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),te=U}function ue(U){U!==G&&(ne&&n.lineWidth(U),G=U)}function ee(U,Se,$){U?(H(n.POLYGON_OFFSET_FILL),(O!==Se||W!==$)&&(n.polygonOffset(Se,$),O=Se,W=$)):se(n.POLYGON_OFFSET_FILL)}function fe(U){U?H(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function ce(U){U===void 0&&(U=n.TEXTURE0+K-1),he!==U&&(n.activeTexture(U),he=U)}function Ae(U,Se,$){$===void 0&&(he===null?$=n.TEXTURE0+K-1:$=he);let pe=le[$];pe===void 0&&(pe={type:void 0,texture:void 0},le[$]=pe),(pe.type!==U||pe.texture!==Se)&&(he!==$&&(n.activeTexture($),he=$),n.bindTexture(U,Se||we[U]),pe.type=U,pe.texture=Se)}function T(){const U=le[he];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){ge.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function xe(U){me.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),me.copy(U))}function Te(U,Se){let $=f.get(Se);$===void 0&&($=new WeakMap,f.set(Se,$));let pe=$.get(U);pe===void 0&&(pe=n.getUniformBlockIndex(Se,U.name),$.set(U,pe))}function Be(U,Se){const pe=f.get(Se).get(U);u.get(Se)!==pe&&(n.uniformBlockBinding(Se,pe,U.__bindingPointIndex),u.set(Se,pe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,le={},p={},v=new WeakMap,g=[],m=null,d=!1,E=null,M=null,S=null,w=null,C=null,P=null,I=null,y=!1,b=null,te=null,G=null,O=null,W=null,ge.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:H,disable:se,bindFramebuffer:oe,drawBuffers:Me,useProgram:ye,setBlending:L,setMaterial:F,setFlipSided:B,setCullFace:J,setLineWidth:ue,setPolygonOffset:ee,setScissorTest:fe,activeTexture:ce,bindTexture:Ae,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Le,texImage3D:Ce,updateUBOMapping:Te,uniformBlockBinding:Be,texStorage2D:de,texStorage3D:j,texSubImage2D:ie,texSubImage3D:re,compressedTexSubImage2D:ae,compressedTexSubImage3D:ve,scissor:Pe,viewport:xe,reset:Qe}}function YS(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,x){return d?new OffscreenCanvas(T,x):ts("canvas")}function M(T,x,D,ie){let re=1;if((T.width>ie||T.height>ie)&&(re=ie/Math.max(T.width,T.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=x?Ks:Math.floor,ve=ae(re*T.width),de=ae(re*T.height);g===void 0&&(g=E(ve,de));const j=D?E(ve,de):g;return j.width=ve,j.height=de,j.getContext("2d").drawImage(T,0,0,ve,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+de+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return Fa(T.width)&&Fa(T.height)}function w(T){return a?!1:T.wrapS!==sn||T.wrapT!==sn||T.minFilter!==Ct&&T.minFilter!==Yt}function C(T,x){return T.generateMipmaps&&x&&T.minFilter!==Ct&&T.minFilter!==Yt}function P(T){n.generateMipmap(T)}function I(T,x,D,ie,re=!1){if(a===!1)return x;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=x;return x===n.RED&&(D===n.FLOAT&&(ae=n.R32F),D===n.HALF_FLOAT&&(ae=n.R16F),D===n.UNSIGNED_BYTE&&(ae=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(ae=n.R8UI),D===n.UNSIGNED_SHORT&&(ae=n.R16UI),D===n.UNSIGNED_INT&&(ae=n.R32UI),D===n.BYTE&&(ae=n.R8I),D===n.SHORT&&(ae=n.R16I),D===n.INT&&(ae=n.R32I)),x===n.RG&&(D===n.FLOAT&&(ae=n.RG32F),D===n.HALF_FLOAT&&(ae=n.RG16F),D===n.UNSIGNED_BYTE&&(ae=n.RG8)),x===n.RGBA&&(D===n.FLOAT&&(ae=n.RGBA32F),D===n.HALF_FLOAT&&(ae=n.RGBA16F),D===n.UNSIGNED_BYTE&&(ae=ie===Ge&&re===!1?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)),(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(T,x,D){return C(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){return T===Ct||T===Nc||T===No?n.NEAREST:n.LINEAR}function te(T){const x=T.target;x.removeEventListener("dispose",te),O(x),x.isVideoTexture&&v.delete(x)}function G(T){const x=T.target;x.removeEventListener("dispose",G),K(x)}function O(T){const x=i.get(T);if(x.__webglInit===void 0)return;const D=T.source,ie=m.get(D);if(ie){const re=ie[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&W(T),Object.keys(ie).length===0&&m.delete(D)}i.remove(T)}function W(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const D=T.source,ie=m.get(D);delete ie[x.__cacheKey],o.memory.textures--}function K(T){const x=T.texture,D=i.get(T),ie=i.get(x);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(D.__webglFramebuffer[re]))for(let ae=0;ae<D.__webglFramebuffer[re].length;ae++)n.deleteFramebuffer(D.__webglFramebuffer[re][ae]);else n.deleteFramebuffer(D.__webglFramebuffer[re]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[re])}else{if(Array.isArray(D.__webglFramebuffer))for(let re=0;re<D.__webglFramebuffer.length;re++)n.deleteFramebuffer(D.__webglFramebuffer[re]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let re=0;re<D.__webglColorRenderbuffer.length;re++)D.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[re]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,ae=x.length;re<ae;re++){const ve=i.get(x[re]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(x[re])}i.remove(x),i.remove(T)}let ne=0;function X(){ne=0}function Y(){const T=ne;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),ne+=1,T}function he(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function le(T,x){const D=i.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(D,T,x);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function k(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){oe(D,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function q(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){oe(D,T,x);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function ge(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Me(D,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const me={[Da]:n.REPEAT,[sn]:n.CLAMP_TO_EDGE,[Ia]:n.MIRRORED_REPEAT},Ee={[Ct]:n.NEAREST,[Nc]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[h_]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},we={[A_]:n.NEVER,[D_]:n.ALWAYS,[w_]:n.LESS,[C_]:n.LEQUAL,[R_]:n.EQUAL,[U_]:n.GEQUAL,[P_]:n.GREATER,[L_]:n.NOTEQUAL};function H(T,x,D){if(D?(n.texParameteri(T,n.TEXTURE_WRAP_S,me[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,me[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,me[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Ee[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Ee[x.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==sn||x.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,b(x.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==Ct&&x.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ct||x.minFilter!==No&&x.minFilter!==Jr||x.type===Jn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Qr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function se(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",te));const ie=x.source;let re=m.get(ie);re===void 0&&(re={},m.set(ie,re));const ae=he(x);if(ae!==T.__cacheKey){re[ae]===void 0&&(re[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),re[ae].usedTimes++;const ve=re[T.__cacheKey];ve!==void 0&&(re[T.__cacheKey].usedTimes--,ve.usedTimes===0&&W(x)),T.__cacheKey=ae,T.__webglTexture=re[ae].texture}return D}function oe(T,x,D){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);const re=se(T,x),ae=x.source;t.bindTexture(ie,T.__webglTexture,n.TEXTURE0+D);const ve=i.get(ae);if(ae.version!==ve.__version||re===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=w(x)&&S(x.image)===!1;let j=M(x.image,de,!1,u);j=Ae(x,j);const Le=S(j)||a,Ce=s.convert(x.format,x.colorSpace);let Pe=s.convert(x.type),xe=I(x.internalFormat,Ce,Pe,x.colorSpace);H(ie,x,Le);let Te;const Be=x.mipmaps,Qe=a&&x.isVideoTexture!==!0,U=ve.__version===void 0||re===!0,Se=y(x,j,Le);if(x.isDepthTexture)xe=n.DEPTH_COMPONENT,a?x.type===Jn?xe=n.DEPTH_COMPONENT32F:x.type===Zn?xe=n.DEPTH_COMPONENT24:x.type===Ai?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:x.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===wi&&xe===n.DEPTH_COMPONENT&&x.type!==fl&&x.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Zn,Pe=s.convert(x.type)),x.format===pr&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,x.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ai,Pe=s.convert(x.type))),U&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,xe,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,xe,j.width,j.height,0,Ce,Pe,null));else if(x.isDataTexture)if(Be.length>0&&Le){Qe&&U&&t.texStorage2D(n.TEXTURE_2D,Se,xe,Be[0].width,Be[0].height);for(let $=0,pe=Be.length;$<pe;$++)Te=Be[$],Qe?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ce,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,$,xe,Te.width,Te.height,0,Ce,Pe,Te.data);x.generateMipmaps=!1}else Qe?(U&&t.texStorage2D(n.TEXTURE_2D,Se,xe,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,Ce,Pe,j.data)):t.texImage2D(n.TEXTURE_2D,0,xe,j.width,j.height,0,Ce,Pe,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Qe&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,xe,Be[0].width,Be[0].height,j.depth);for(let $=0,pe=Be.length;$<pe;$++)Te=Be[$],x.format!==on?Ce!==null?Qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,j.depth,Ce,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,xe,Te.width,Te.height,j.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,j.depth,Ce,Pe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,xe,Te.width,Te.height,j.depth,0,Ce,Pe,Te.data)}else{Qe&&U&&t.texStorage2D(n.TEXTURE_2D,Se,xe,Be[0].width,Be[0].height);for(let $=0,pe=Be.length;$<pe;$++)Te=Be[$],x.format!==on?Ce!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,xe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ce,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,$,xe,Te.width,Te.height,0,Ce,Pe,Te.data)}else if(x.isDataArrayTexture)Qe?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,xe,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ce,Pe,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,j.width,j.height,j.depth,0,Ce,Pe,j.data);else if(x.isData3DTexture)Qe?(U&&t.texStorage3D(n.TEXTURE_3D,Se,xe,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ce,Pe,j.data)):t.texImage3D(n.TEXTURE_3D,0,xe,j.width,j.height,j.depth,0,Ce,Pe,j.data);else if(x.isFramebufferTexture){if(U)if(Qe)t.texStorage2D(n.TEXTURE_2D,Se,xe,j.width,j.height);else{let $=j.width,pe=j.height;for(let be=0;be<Se;be++)t.texImage2D(n.TEXTURE_2D,be,xe,$,pe,0,Ce,Pe,null),$>>=1,pe>>=1}}else if(Be.length>0&&Le){Qe&&U&&t.texStorage2D(n.TEXTURE_2D,Se,xe,Be[0].width,Be[0].height);for(let $=0,pe=Be.length;$<pe;$++)Te=Be[$],Qe?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ce,Pe,Te):t.texImage2D(n.TEXTURE_2D,$,xe,Ce,Pe,Te);x.generateMipmaps=!1}else Qe?(U&&t.texStorage2D(n.TEXTURE_2D,Se,xe,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Pe,j)):t.texImage2D(n.TEXTURE_2D,0,xe,Ce,Pe,j);C(x,Le)&&P(ie),ve.__version=ae.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,D){if(x.image.length!==6)return;const ie=se(T,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const ae=i.get(re);if(re.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,j=[];for(let $=0;$<6;$++)!ve&&!de?j[$]=M(x.image[$],!1,!0,c):j[$]=de?x.image[$].image:x.image[$],j[$]=Ae(x,j[$]);const Le=j[0],Ce=S(Le)||a,Pe=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),Te=I(x.internalFormat,Pe,xe,x.colorSpace),Be=a&&x.isVideoTexture!==!0,Qe=ae.__version===void 0||ie===!0;let U=y(x,Le,Ce);H(n.TEXTURE_CUBE_MAP,x,Ce);let Se;if(ve){Be&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Te,Le.width,Le.height);for(let $=0;$<6;$++){Se=j[$].mipmaps;for(let pe=0;pe<Se.length;pe++){const be=Se[pe];x.format!==on?Pe!==null?Be?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,be.width,be.height,Pe,xe,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Te,be.width,be.height,0,Pe,xe,be.data)}}}else{Se=x.mipmaps,Be&&Qe&&(Se.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Te,j[0].width,j[0].height));for(let $=0;$<6;$++)if(de){Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,j[$].width,j[$].height,Pe,xe,j[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,j[$].width,j[$].height,0,Pe,xe,j[$].data);for(let pe=0;pe<Se.length;pe++){const je=Se[pe].image[$].image;Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,je.width,je.height,Pe,xe,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Te,je.width,je.height,0,Pe,xe,je.data)}}else{Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pe,xe,j[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,Pe,xe,j[$]);for(let pe=0;pe<Se.length;pe++){const be=Se[pe];Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,Pe,xe,be.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Te,Pe,xe,be.image[$])}}}C(x,Ce)&&P(n.TEXTURE_CUBE_MAP),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ye(T,x,D,ie,re,ae){const ve=s.convert(D.format,D.colorSpace),de=s.convert(D.type),j=I(D.internalFormat,ve,de,D.colorSpace);if(!i.get(x).__hasExternalTextures){const Ce=Math.max(1,x.width>>ae),Pe=Math.max(1,x.height>>ae);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ae,j,Ce,Pe,x.depth,0,ve,de,null):t.texImage2D(re,ae,j,Ce,Pe,0,ve,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),fe(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,re,i.get(D).__webglTexture,0,ee(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,re,i.get(D).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(T,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let ie=n.DEPTH_COMPONENT16;if(D||fe(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===Jn?ie=n.DEPTH_COMPONENT32F:re.type===Zn&&(ie=n.DEPTH_COMPONENT24));const ae=ee(x);fe(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,ie,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,ie,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const ie=ee(x);D&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,x.width,x.height):fe(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ie=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0;re<ie.length;re++){const ae=ie[re],ve=s.convert(ae.format,ae.colorSpace),de=s.convert(ae.type),j=I(ae.internalFormat,ve,de,ae.colorSpace),Le=ee(x);D&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,j,x.width,x.height):fe(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function R(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),le(x.depthTexture,0);const ie=i.get(x.depthTexture).__webglTexture,re=ee(x);if(x.depthTexture.format===wi)fe(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(x.depthTexture.format===pr)fe(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function L(T){const x=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");R(x.__webglFramebuffer,T)}else if(D){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]=n.createRenderbuffer(),_(x.__webglDepthbuffer[ie],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),_(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(T,x,D){const ie=i.get(T);x!==void 0&&ye(ie.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&L(T)}function B(T){const x=T.texture,D=i.get(T),ie=i.get(x);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,o.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,ve=S(T)||a;if(re){D.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[de]=[];for(let j=0;j<x.mipmaps.length;j++)D.__webglFramebuffer[de][j]=n.createFramebuffer()}else D.__webglFramebuffer[de]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)D.__webglFramebuffer[de]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ae)if(r.drawBuffers){const de=T.texture;for(let j=0,Le=de.length;j<Le;j++){const Ce=i.get(de[j]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&fe(T)===!1){const de=ae?x:[x];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let j=0;j<de.length;j++){const Le=de[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[j]);const Ce=s.convert(Le.format,Le.colorSpace),Pe=s.convert(Le.type),xe=I(Le.internalFormat,Ce,Pe,Le.colorSpace,T.isXRRenderTarget===!0),Te=ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),H(n.TEXTURE_CUBE_MAP,x,ve);for(let de=0;de<6;de++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)ye(D.__webglFramebuffer[de][j],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,j);else ye(D.__webglFramebuffer[de],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);C(x,ve)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const de=T.texture;for(let j=0,Le=de.length;j<Le;j++){const Ce=de[j],Pe=i.get(Ce);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),H(n.TEXTURE_2D,Ce,ve),ye(D.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,0),C(Ce,ve)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?de=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),H(de,x,ve),a&&x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)ye(D.__webglFramebuffer[j],T,x,n.COLOR_ATTACHMENT0,de,j);else ye(D.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,de,0);C(x,ve)&&P(de),t.unbindTexture()}T.depthBuffer&&L(T)}function J(T){const x=S(T)||a,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,re=D.length;ie<re;ie++){const ae=D[ie];if(C(ae,x)){const ve=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ae).__webglTexture;t.bindTexture(ve,de),P(ve),t.unbindTexture()}}}function ue(T){if(a&&T.samples>0&&fe(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,ie=T.height;let re=n.COLOR_BUFFER_BIT;const ae=[],ve=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(T),j=T.isWebGLMultipleRenderTargets===!0;if(j)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){ae.push(n.COLOR_ATTACHMENT0+Le),T.depthBuffer&&ae.push(ve);const Ce=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ce===!1&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),j&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Le]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),j){const Pe=i.get(x[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,D,ie,0,0,D,ie,re,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,de.__webglColorRenderbuffer[Le]);const Ce=i.get(x[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function ee(T){return Math.min(f,T.samples)}function fe(T){const x=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(T){const x=o.render.frame;v.get(T)!==x&&(v.set(T,x),T.update())}function Ae(T,x){const D=T.colorSpace,ie=T.format,re=T.type;return T.isCompressedTexture===!0||T.format===Na||D!==Mn&&D!==Ci&&(D===Ge?a===!1?e.has("EXT_sRGB")===!0&&ie===on?(T.format=Na,T.minFilter=Yt,T.generateMipmaps=!1):x=xh.sRGBToLinear(x):(ie!==on||re!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=le,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=ge,this.rebindTextures=F,this.setupRenderTarget=B,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=fe}function jS(n,e,t){const i=t.isWebGL2;function r(s,o=Ci){let a;if(s===ii)return n.UNSIGNED_BYTE;if(s===fh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===hh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===d_)return n.BYTE;if(s===p_)return n.SHORT;if(s===fl)return n.UNSIGNED_SHORT;if(s===uh)return n.INT;if(s===Zn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===Qr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===m_)return n.ALPHA;if(s===on)return n.RGBA;if(s===g_)return n.LUMINANCE;if(s===__)return n.LUMINANCE_ALPHA;if(s===wi)return n.DEPTH_COMPONENT;if(s===pr)return n.DEPTH_STENCIL;if(s===Na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===v_)return n.RED;if(s===dh)return n.RED_INTEGER;if(s===x_)return n.RG;if(s===ph)return n.RG_INTEGER;if(s===mh)return n.RGBA_INTEGER;if(s===Fo||s===Oo||s===Bo||s===zo)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fc||s===Oc||s===Bc||s===zc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===M_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hc||s===Gc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hc)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vc||s===kc||s===Wc||s===Xc||s===qc||s===Yc||s===jc||s===$c||s===Kc||s===Zc||s===Jc||s===Qc||s===eu||s===tu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$c)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===eu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ho)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ho)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===S_||s===nu||s===iu||s===ru)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ho)return a.COMPRESSED_RED_RGTC1_EXT;if(s===nu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ru)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class $S extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KS={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ZS extends It{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:wi,u!==wi&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wi&&(i=Zn),i===void 0&&u===pr&&(i=Ai),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class JS extends xr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const g=t.getContextAttributes();let m=null,d=null;const E=[],M=[],S=new Lt;S.layers.enable(1),S.viewport=new it;const w=new Lt;w.layers.enable(2),w.viewport=new it;const C=[S,w],P=new $S;P.layers.enable(1),P.layers.enable(2);let I=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=E[k];return q===void 0&&(q=new la,E[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=E[k];return q===void 0&&(q=new la,E[k]=q),q.getGripSpace()},this.getHand=function(k){let q=E[k];return q===void 0&&(q=new la,E[k]=q),q.getHandSpace()};function b(k){const q=M.indexOf(k.inputSource);if(q===-1)return;const ge=E[q];ge!==void 0&&(ge.update(k.inputSource,k.frame,c||o),ge.dispatchEvent({type:k.type,data:k.inputSource}))}function te(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",G);for(let k=0;k<E.length;k++){const q=M[k];q!==null&&(M[k]=null,E[k].disconnect(q))}I=null,y=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",te),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),d=new Pi(p.framebufferWidth,p.framebufferHeight,{format:on,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,ge=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?pr:wi,ge=g.stencil?Ai:Zn);const Ee={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),d=new Pi(h.textureWidth,h.textureHeight,{format:on,type:ii,depthTexture:new ZS(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(k){for(let q=0;q<k.removed.length;q++){const ge=k.removed[q],me=M.indexOf(ge);me>=0&&(M[me]=null,E[me].disconnect(ge))}for(let q=0;q<k.added.length;q++){const ge=k.added[q];let me=M.indexOf(ge);if(me===-1){for(let we=0;we<E.length;we++)if(we>=M.length){M.push(ge),me=we;break}else if(M[we]===null){M[we]=ge,me=we;break}if(me===-1)break}const Ee=E[me];Ee&&Ee.connect(ge)}}const O=new N,W=new N;function K(k,q,ge){O.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(ge.matrixWorld);const me=O.distanceTo(W),Ee=q.projectionMatrix.elements,we=ge.projectionMatrix.elements,H=Ee[14]/(Ee[10]-1),se=Ee[14]/(Ee[10]+1),oe=(Ee[9]+1)/Ee[5],Me=(Ee[9]-1)/Ee[5],ye=(Ee[8]-1)/Ee[0],_=(we[8]+1)/we[0],R=H*ye,L=H*_,F=me/(-ye+_),B=F*-ye;q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(B),k.translateZ(F),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const J=H+F,ue=se+F,ee=R-B,fe=L+(me-B),ce=oe*se/ue*J,Ae=Me*se/ue*J;k.projectionMatrix.makePerspective(ee,fe,ce,Ae,J,ue),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function ne(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;P.near=w.near=S.near=k.near,P.far=w.far=S.far=k.far,(I!==P.near||y!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,y=P.far);const q=k.parent,ge=P.cameras;ne(P,q);for(let me=0;me<ge.length;me++)ne(ge[me],q);ge.length===2?K(P,S,w):P.projectionMatrix.copy(S.projectionMatrix),X(k,P,q)};function X(k,q,ge){ge===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(ge.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const me=k.children;for(let Ee=0,we=me.length;Ee<we;Ee++)me[Ee].updateMatrixWorld(!0);k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=es*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let Y=null;function he(k,q){if(u=q.getViewerPose(c||o),v=q,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let me=!1;ge.length!==P.cameras.length&&(P.cameras.length=0,me=!0);for(let Ee=0;Ee<ge.length;Ee++){const we=ge[Ee];let H=null;if(p!==null)H=p.getViewport(we);else{const oe=f.getViewSubImage(h,we);H=oe.viewport,Ee===0&&(e.setRenderTargetTextures(d,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(d))}let se=C[Ee];se===void 0&&(se=new Lt,se.layers.enable(Ee),se.viewport=new it,C[Ee]=se),se.matrix.fromArray(we.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(we.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(H.x,H.y,H.width,H.height),Ee===0&&(P.matrix.copy(se.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),me===!0&&P.cameras.push(se)}}for(let ge=0;ge<E.length;ge++){const me=M[ge],Ee=E[ge];me!==null&&Ee!==void 0&&Ee.update(me,q,c||o)}Y&&Y(k,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),v=null}const le=new Ch;le.setAnimationLoop(he),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function QS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ah(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,M,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const S=M.program;i.uniformBlockBinding(E,S)}function c(E,M){let S=r[E.id];S===void 0&&(v(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",m));const w=M.program;i.updateUBOMapping(E,w);const C=e.render.frame;s[E.id]!==C&&(h(E),s[E.id]=C)}function u(E){const M=f();E.__bindingPointIndex=M;const S=n.createBuffer(),w=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const M=r[E.id],S=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,P=S.length;C<P;C++){const I=S[C];if(p(I,C,w)===!0){const y=I.__offset,b=Array.isArray(I.value)?I.value:[I.value];let te=0;for(let G=0;G<b.length;G++){const O=b[G],W=g(O);typeof O=="number"?(I.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,y+te,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=O.elements[0],I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=O.elements[0],I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=O.elements[0]):(O.toArray(I.__data,te),te+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,I.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,S){const w=E.value;if(S[M]===void 0){if(typeof w=="number")S[M]=w;else{const C=Array.isArray(w)?w:[w],P=[];for(let I=0;I<C.length;I++)P.push(C[I].clone());S[M]=P}return!0}else if(typeof w=="number"){if(S[M]!==w)return S[M]=w,!0}else{const C=Array.isArray(S[M])?S[M]:[S[M]],P=Array.isArray(w)?w:[w];for(let I=0;I<C.length;I++){const y=C[I];if(y.equals(P[I])===!1)return y.copy(P[I]),!0}}return!1}function v(E){const M=E.uniforms;let S=0;const w=16;let C=0;for(let P=0,I=M.length;P<I;P++){const y=M[P],b={boundary:0,storage:0},te=Array.isArray(y.value)?y.value:[y.value];for(let G=0,O=te.length;G<O;G++){const W=te[G],K=g(W);b.boundary+=K.boundary,b.storage+=K.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,P>0){C=S%w;const G=w-C;C!==0&&G-b.boundary<0&&(S+=w-C,y.__offset=S)}S+=b.storage}return C=S%w,C>0&&(S+=w-C),E.__size=S,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function tE(){const n=ts("canvas");return n.style.display="block",n}class _o{constructor(e={}){const{canvas:t=tE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ge,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const M=this;let S=!1,w=0,C=0,P=null,I=-1,y=null;const b=new it,te=new it;let G=null;const O=new Je(0);let W=0,K=t.width,ne=t.height,X=1,Y=null,he=null;const le=new it(0,0,K,ne),k=new it(0,0,K,ne);let q=!1;const ge=new ml;let me=!1,Ee=!1,we=null;const H=new dt,se=new qe,oe=new N,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return P===null?X:1}let _=i;function R(A,V){for(let Q=0;Q<A.length;Q++){const z=A[Q],Z=t.getContext(z,V);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",pe,!1),_===null){const V=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&V.shift(),_=R(V,A),_===null)throw R(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,F,B,J,ue,ee,fe,ce,Ae,T,x,D,ie,re,ae,ve,de,j,Le,Ce,Pe,xe,Te,Be;function Qe(){L=new fM(_),F=new rM(_,L,e),L.init(F),xe=new jS(_,L,F),B=new qS(_,L,F),J=new pM(_),ue=new US,ee=new YS(_,L,B,ue,F,xe,J),fe=new oM(M),ce=new uM(M),Ae=new yv(_,F),Te=new nM(_,L,Ae,F),T=new hM(_,Ae,J,Te),x=new vM(_,T,Ae,J),Le=new _M(_,F,ee),ve=new sM(ue),D=new LS(M,fe,ce,L,F,Te,ve),ie=new QS(M,ue),re=new IS,ae=new HS(L,F),j=new tM(M,fe,ce,B,x,h,l),de=new XS(M,x,F),Be=new eE(_,J,F,B),Ce=new iM(_,L,J,F),Pe=new dM(_,L,J,F),J.programs=D.programs,M.capabilities=F,M.extensions=L,M.properties=ue,M.renderLists=re,M.shadowMap=de,M.state=B,M.info=J}Qe();const U=new JS(M,_);this.xr=U,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(K,ne,!1))},this.getSize=function(A){return A.set(K,ne)},this.setSize=function(A,V,Q=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,ne=V,t.width=Math.floor(A*X),t.height=Math.floor(V*X),Q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(K*X,ne*X).floor()},this.setDrawingBufferSize=function(A,V,Q){K=A,ne=V,X=Q,t.width=Math.floor(A*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,V,Q,z){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,V,Q,z),B.viewport(b.copy(le).multiplyScalar(X).floor())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,V,Q,z){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,V,Q,z),B.scissor(te.copy(k).multiplyScalar(X).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(A){B.setScissorTest(q=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(A=!0,V=!0,Q=!0){let z=0;if(A){let Z=!1;if(P!==null){const Re=P.texture.format;Z=Re===mh||Re===ph||Re===dh}if(Z){const Re=P.texture.type,Ue=Re===ii||Re===Zn||Re===fl||Re===Ai||Re===fh||Re===hh,Ne=j.getClearColor(),Fe=j.getClearAlpha(),We=Ne.r,De=Ne.g,ze=Ne.b;Ue?(p[0]=We,p[1]=De,p[2]=ze,p[3]=Fe,_.clearBufferuiv(_.COLOR,0,p)):(v[0]=We,v[1]=De,v[2]=ze,v[3]=Fe,_.clearBufferiv(_.COLOR,0,v))}else z|=_.COLOR_BUFFER_BIT}V&&(z|=_.DEPTH_BUFFER_BIT),Q&&(z|=_.STENCIL_BUFFER_BIT),_.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),re.dispose(),ae.dispose(),ue.dispose(),fe.dispose(),ce.dispose(),x.dispose(),Te.dispose(),Be.dispose(),D.dispose(),U.dispose(),U.removeEventListener("sessionstart",tt),U.removeEventListener("sessionend",un),we&&(we.dispose(),we=null),Tt.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=J.autoReset,V=de.enabled,Q=de.autoUpdate,z=de.needsUpdate,Z=de.type;Qe(),J.autoReset=A,de.enabled=V,de.autoUpdate=Q,de.needsUpdate=z,de.type=Z}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const V=A.target;V.removeEventListener("dispose",be),je(V)}function je(A){rt(A),ue.remove(A)}function rt(A){const V=ue.get(A).programs;V!==void 0&&(V.forEach(function(Q){D.releaseProgram(Q)}),A.isShaderMaterial&&D.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,z,Z,Re){V===null&&(V=Me);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Bh(A,V,Q,z,Z);B.setMaterial(z,Ue);let Fe=Q.index,We=1;if(z.wireframe===!0){if(Fe=T.getWireframeAttribute(Q),Fe===void 0)return;We=2}const De=Q.drawRange,ze=Q.attributes.position;let st=De.start*We,lt=(De.start+De.count)*We;Re!==null&&(st=Math.max(st,Re.start*We),lt=Math.min(lt,(Re.start+Re.count)*We)),Fe!==null?(st=Math.max(st,0),lt=Math.min(lt,Fe.count)):ze!=null&&(st=Math.max(st,0),lt=Math.min(lt,ze.count));const Wt=lt-st;if(Wt<0||Wt===1/0)return;Te.setup(Z,z,Ne,Q,Fe);let Sn,ut=Ce;if(Fe!==null&&(Sn=Ae.get(Fe),ut=Pe,ut.setIndex(Sn)),Z.isMesh)z.wireframe===!0?(B.setLineWidth(z.wireframeLinewidth*ye()),ut.setMode(_.LINES)):ut.setMode(_.TRIANGLES);else if(Z.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),B.setLineWidth(Xe*ye()),Z.isLineSegments?ut.setMode(_.LINES):Z.isLineLoop?ut.setMode(_.LINE_LOOP):ut.setMode(_.LINE_STRIP)}else Z.isPoints?ut.setMode(_.POINTS):Z.isSprite&&ut.setMode(_.TRIANGLES);if(Z.isInstancedMesh)ut.renderInstances(st,Wt,Z.count);else if(Q.isInstancedBufferGeometry){const Xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,xo=Math.min(Q.instanceCount,Xe);ut.renderInstances(st,Wt,xo)}else ut.render(st,Wt)},this.compile=function(A,V){function Q(z,Z,Re){z.transparent===!0&&z.side===Un&&z.forceSinglePass===!1?(z.side=Dt,z.needsUpdate=!0,as(z,Z,Re),z.side=oi,z.needsUpdate=!0,as(z,Z,Re),z.side=Un):as(z,Z,Re)}m=ae.get(A),m.init(),E.push(m),A.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(M._useLegacyLights),A.traverse(function(z){const Z=z.material;if(Z)if(Array.isArray(Z))for(let Re=0;Re<Z.length;Re++){const Ue=Z[Re];Q(Ue,A,z)}else Q(Z,A,z)}),E.pop(),m=null};let ct=null;function Hn(A){ct&&ct(A)}function tt(){Tt.stop()}function un(){Tt.start()}const Tt=new Ch;Tt.setAnimationLoop(Hn),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(A){ct=A,U.setAnimationLoop(A),A===null?Tt.stop():Tt.start()},U.addEventListener("sessionstart",tt),U.addEventListener("sessionend",un),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(V),V=U.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,V,P),m=ae.get(A,E.length),m.init(),E.push(m),H.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ge.setFromProjectionMatrix(H),Ee=this.localClippingEnabled,me=ve.init(this.clippingPlanes,Ee),g=re.get(A,d.length),g.init(),d.push(g),yl(A,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Y,he),this.info.render.frame++,me===!0&&ve.beginShadows();const Q=m.state.shadowsArray;if(de.render(Q,A,V),me===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(g,A),m.setupLights(M._useLegacyLights),V.isArrayCamera){const z=V.cameras;for(let Z=0,Re=z.length;Z<Re;Z++){const Ue=z[Z];Tl(g,A,Ue,Ue.viewport)}}else Tl(g,A,V);P!==null&&(ee.updateMultisampleRenderTarget(P),ee.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,V),Te.resetDefaultState(),I=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function yl(A,V,Q,z){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ge.intersectsSprite(A)){z&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Ue=x.update(A),Ne=A.material;Ne.visible&&g.push(A,Ue,Ne,Q,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ge.intersectsObject(A))){const Ue=x.update(A),Ne=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),oe.copy(Ue.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(H)),Array.isArray(Ne)){const Fe=Ue.groups;for(let We=0,De=Fe.length;We<De;We++){const ze=Fe[We],st=Ne[ze.materialIndex];st&&st.visible&&g.push(A,Ue,st,Q,oe.z,ze)}}else Ne.visible&&g.push(A,Ue,Ne,Q,oe.z,null)}}const Re=A.children;for(let Ue=0,Ne=Re.length;Ue<Ne;Ue++)yl(Re[Ue],V,Q,z)}function Tl(A,V,Q,z){const Z=A.opaque,Re=A.transmissive,Ue=A.transparent;m.setupLightsView(Q),me===!0&&ve.setGlobalState(M.clippingPlanes,Q),Re.length>0&&Oh(Z,Re,V,Q),z&&B.viewport(b.copy(z)),Z.length>0&&os(Z,V,Q),Re.length>0&&os(Re,V,Q),Ue.length>0&&os(Ue,V,Q),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Oh(A,V,Q,z){const Z=F.isWebGL2;we===null&&(we=new Pi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?Qr:ii,minFilter:Jr,samples:Z?4:0})),M.getDrawingBufferSize(se),Z?we.setSize(se.x,se.y):we.setSize(Ks(se.x),Ks(se.y));const Re=M.getRenderTarget();M.setRenderTarget(we),M.getClearColor(O),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear();const Ue=M.toneMapping;M.toneMapping=ni,os(A,Q,z),ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we);let Ne=!1;for(let Fe=0,We=V.length;Fe<We;Fe++){const De=V[Fe],ze=De.object,st=De.geometry,lt=De.material,Wt=De.group;if(lt.side===Un&&ze.layers.test(z.layers)){const Sn=lt.side;lt.side=Dt,lt.needsUpdate=!0,bl(ze,Q,z,st,lt,Wt),lt.side=Sn,lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we)),M.setRenderTarget(Re),M.setClearColor(O,W),M.toneMapping=Ue}function os(A,V,Q){const z=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Re=A.length;Z<Re;Z++){const Ue=A[Z],Ne=Ue.object,Fe=Ue.geometry,We=z===null?Ue.material:z,De=Ue.group;Ne.layers.test(Q.layers)&&bl(Ne,V,Q,Fe,We,De)}}function bl(A,V,Q,z,Z,Re){A.onBeforeRender(M,V,Q,z,Z,Re),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(M,V,Q,z,A,Re),Z.transparent===!0&&Z.side===Un&&Z.forceSinglePass===!1?(Z.side=Dt,Z.needsUpdate=!0,M.renderBufferDirect(Q,V,z,Z,A,Re),Z.side=oi,Z.needsUpdate=!0,M.renderBufferDirect(Q,V,z,Z,A,Re),Z.side=Un):M.renderBufferDirect(Q,V,z,Z,A,Re),A.onAfterRender(M,V,Q,z,Z,Re)}function as(A,V,Q){V.isScene!==!0&&(V=Me);const z=ue.get(A),Z=m.state.lights,Re=m.state.shadowsArray,Ue=Z.state.version,Ne=D.getParameters(A,Z.state,Re,V,Q),Fe=D.getProgramCacheKey(Ne);let We=z.programs;z.environment=A.isMeshStandardMaterial?V.environment:null,z.fog=V.fog,z.envMap=(A.isMeshStandardMaterial?ce:fe).get(A.envMap||z.environment),We===void 0&&(A.addEventListener("dispose",be),We=new Map,z.programs=We);let De=We.get(Fe);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Ue)return Al(A,Ne),De}else Ne.uniforms=D.getUniforms(A),A.onBuild(Q,Ne,M),A.onBeforeCompile(Ne,M),De=D.acquireProgram(Ne,Fe),We.set(Fe,De),z.uniforms=Ne.uniforms;const ze=z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=ve.uniform),Al(A,Ne),z.needsLights=Hh(A),z.lightsStateVersion=Ue,z.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.directionalShadowMap.value=Z.state.directionalShadowMap,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotShadowMap.value=Z.state.spotShadowMap,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMap.value=Z.state.pointShadowMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix);const st=De.getUniforms(),lt=Vs.seqWithValue(st.seq,ze);return z.currentProgram=De,z.uniformsList=lt,De}function Al(A,V){const Q=ue.get(A);Q.outputColorSpace=V.outputColorSpace,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Bh(A,V,Q,z,Z){V.isScene!==!0&&(V=Me),ee.resetTextureUnits();const Re=V.fog,Ue=z.isMeshStandardMaterial?V.environment:null,Ne=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mn,Fe=(z.isMeshStandardMaterial?ce:fe).get(z.envMap||Ue),We=z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,De=!!Q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ze=!!Q.morphAttributes.position,st=!!Q.morphAttributes.normal,lt=!!Q.morphAttributes.color;let Wt=ni;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Wt=M.toneMapping);const Sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ut=Sn!==void 0?Sn.length:0,Xe=ue.get(z),xo=m.state.lights;if(me===!0&&(Ee===!0||A!==y)){const Ot=A===y&&z.id===I;ve.setState(z,A,Ot)}let ft=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==xo.state.version||Xe.outputColorSpace!==Ne||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Xe.envMap!==Fe||z.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ve.numPlanes||Xe.numIntersection!==ve.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==De||Xe.morphTargets!==ze||Xe.morphNormals!==st||Xe.morphColors!==lt||Xe.toneMapping!==Wt||F.isWebGL2===!0&&Xe.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Xe.__version=z.version);let ai=Xe.currentProgram;ft===!0&&(ai=as(z,V,Z));let wl=!1,yr=!1,Mo=!1;const bt=ai.getUniforms(),li=Xe.uniforms;if(B.useProgram(ai.program)&&(wl=!0,yr=!0,Mo=!0),z.id!==I&&(I=z.id,yr=!0),wl||y!==A){if(bt.setValue(_,"projectionMatrix",A.projectionMatrix),F.logarithmicDepthBuffer&&bt.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),y!==A&&(y=A,yr=!0,Mo=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ot=bt.map.cameraPosition;Ot!==void 0&&Ot.setValue(_,oe.setFromMatrixPosition(A.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&bt.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&bt.setValue(_,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){bt.setOptional(_,Z,"bindMatrix"),bt.setOptional(_,Z,"bindMatrixInverse");const Ot=Z.skeleton;Ot&&(F.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),bt.setValue(_,"boneTexture",Ot.boneTexture,ee),bt.setValue(_,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const So=Q.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0&&F.isWebGL2===!0)&&Le.update(Z,Q,ai),(yr||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,bt.setValue(_,"receiveShadow",Z.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(li.envMap.value=Fe,li.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),yr&&(bt.setValue(_,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&zh(li,Mo),Re&&z.fog===!0&&ie.refreshFogUniforms(li,Re),ie.refreshMaterialUniforms(li,z,X,ne,we),Vs.upload(_,Xe.uniformsList,li,ee)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vs.upload(_,Xe.uniformsList,li,ee),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&bt.setValue(_,"center",Z.center),bt.setValue(_,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(_,"normalMatrix",Z.normalMatrix),bt.setValue(_,"modelMatrix",Z.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ot=z.uniformsGroups;for(let Eo=0,Gh=Ot.length;Eo<Gh;Eo++)if(F.isWebGL2){const Rl=Ot[Eo];Be.update(Rl,ai),Be.bind(Rl,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function zh(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Hh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,V,Q){ue.get(A.texture).__webglTexture=V,ue.get(A.depthTexture).__webglTexture=Q;const z=ue.get(A);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Q===void 0,z.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const Q=ue.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Q=0){P=A,w=V,C=Q;let z=!0,Z=null,Re=!1,Ue=!1;if(A){const Fe=ue.get(A);Fe.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(_.FRAMEBUFFER,null),z=!1):Fe.__webglFramebuffer===void 0?ee.setupRenderTarget(A):Fe.__hasExternalTextures&&ee.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const De=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[V])?Z=De[V][Q]:Z=De[V],Re=!0):F.isWebGL2&&A.samples>0&&ee.useMultisampledRTT(A)===!1?Z=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?Z=De[Q]:Z=De,b.copy(A.viewport),te.copy(A.scissor),G=A.scissorTest}else b.copy(le).multiplyScalar(X).floor(),te.copy(k).multiplyScalar(X).floor(),G=q;if(B.bindFramebuffer(_.FRAMEBUFFER,Z)&&F.drawBuffers&&z&&B.drawBuffers(A,Z),B.viewport(b),B.scissor(te),B.setScissorTest(G),Re){const Fe=ue.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,Q)}else if(Ue){const Fe=ue.get(A.texture),We=V||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,We)}I=-1},this.readRenderTargetPixels=function(A,V,Q,z,Z,Re,Ue){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){B.bindFramebuffer(_.FRAMEBUFFER,Ne);try{const Fe=A.texture,We=Fe.format,De=Fe.type;if(We!==on&&xe.convert(We)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=De===Qr&&(L.has("EXT_color_buffer_half_float")||F.isWebGL2&&L.has("EXT_color_buffer_float"));if(De!==ii&&xe.convert(De)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Jn&&(F.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-z&&Q>=0&&Q<=A.height-Z&&_.readPixels(V,Q,z,Z,xe.convert(We),xe.convert(De),Re)}finally{const Fe=P!==null?ue.get(P).__webglFramebuffer:null;B.bindFramebuffer(_.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,V,Q=0){const z=Math.pow(2,-Q),Z=Math.floor(V.image.width*z),Re=Math.floor(V.image.height*z);ee.setTexture2D(V,0),_.copyTexSubImage2D(_.TEXTURE_2D,Q,0,0,A.x,A.y,Z,Re),B.unbindTexture()},this.copyTextureToTexture=function(A,V,Q,z=0){const Z=V.image.width,Re=V.image.height,Ue=xe.convert(Q.format),Ne=xe.convert(Q.type);ee.setTexture2D(Q,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Q.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Q.unpackAlignment),V.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,z,A.x,A.y,Z,Re,Ue,Ne,V.image.data):V.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,z,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ue,V.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,z,A.x,A.y,Ue,Ne,V.image),z===0&&Q.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Q,z,Z=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Ue=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Fe=xe.convert(z.format),We=xe.convert(z.type);let De;if(z.isData3DTexture)ee.setTexture3D(z,0),De=_.TEXTURE_3D;else if(z.isDataArrayTexture)ee.setTexture2DArray(z,0),De=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,z.unpackAlignment);const ze=_.getParameter(_.UNPACK_ROW_LENGTH),st=_.getParameter(_.UNPACK_IMAGE_HEIGHT),lt=_.getParameter(_.UNPACK_SKIP_PIXELS),Wt=_.getParameter(_.UNPACK_SKIP_ROWS),Sn=_.getParameter(_.UNPACK_SKIP_IMAGES),ut=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,ut.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ut.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,A.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,A.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?_.texSubImage3D(De,Z,V.x,V.y,V.z,Re,Ue,Ne,Fe,We,ut.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(De,Z,V.x,V.y,V.z,Re,Ue,Ne,Fe,ut.data)):_.texSubImage3D(De,Z,V.x,V.y,V.z,Re,Ue,Ne,Fe,We,ut),_.pixelStorei(_.UNPACK_ROW_LENGTH,ze),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,st),_.pixelStorei(_.UNPACK_SKIP_PIXELS,lt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Wt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Sn),Z===0&&z.generateMipmaps&&_.generateMipmap(De),B.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),B.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,B.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?Ri:gh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ri?Ge:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nE extends _o{}nE.prototype.isWebGL1Renderer=!0;class _l extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vl extends $t{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new N,S=new N,w=new N;for(let C=0;C<t.length;C+=3)p(t[C+0],M),p(t[C+1],S),p(t[C+2],w),l(M,S,w,E)}function l(E,M,S,w){const C=w+1,P=[];for(let I=0;I<=C;I++){P[I]=[];const y=E.clone().lerp(S,I/C),b=M.clone().lerp(S,I/C),te=C-I;for(let G=0;G<=te;G++)G===0&&I===C?P[I][G]=y:P[I][G]=y.clone().lerp(b,G/te)}for(let I=0;I<C;I++)for(let y=0;y<2*(C-I)-1;y++){const b=Math.floor(y/2);y%2===0?(h(P[I][b+1]),h(P[I+1][b]),h(P[I][b])):(h(P[I][b+1]),h(P[I+1][b+1]),h(P[I+1][b]))}}function c(E){const M=new N;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(E),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function u(){const E=new N;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const S=m(E)/2/Math.PI+.5,w=d(E)/Math.PI+.5;o.push(S,1-w)}v(),f()}function f(){for(let E=0;E<o.length;E+=6){const M=o[E+0],S=o[E+2],w=o[E+4],C=Math.max(M,S,w),P=Math.min(M,S,w);C>.9&&P<.1&&(M<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),w<.2&&(o[E+4]+=1))}}function h(E){s.push(E.x,E.y,E.z)}function p(E,M){const S=E*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function v(){const E=new N,M=new N,S=new N,w=new N,C=new qe,P=new qe,I=new qe;for(let y=0,b=0;y<s.length;y+=9,b+=6){E.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),C.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),w.copy(E).add(M).add(S).divideScalar(3);const te=m(w);g(C,b+0,E,te),g(P,b+2,M,te),g(I,b+4,S,te)}}function g(E,M,S,w){w<0&&E.x===1&&(o[M]=E.x-1),S.x===0&&S.z===0&&(o[M]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.vertices,e.indices,e.radius,e.details)}}class xl extends vl{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xl(e.radius,e.detail)}}class Ml extends $t{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,p=new N,v=new qe;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}f+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let d=0;d<i;d++){const E=d+m,M=E,S=E+i+1,w=E+i+2,C=E+1;a.push(M,S,C),a.push(S,w,C)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ns extends $t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,p=[],v=[],g=[],m=[];for(let d=0;d<=i;d++){const E=[],M=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const C=w/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+M*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(C+S,1-M),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const M=u[d][E+1],S=u[d][E],w=u[d+1][E],C=u[d+1][E+1];(d!==0||o>0)&&p.push(M,S,C),(d!==i-1||l<Math.PI)&&p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sl extends $t{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new N,f=new N,h=new N;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const g=v/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const g=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,d=(r+1)*(p-1)+v,E=(r+1)*p+v;o.push(g,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vo extends $t{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],u=[],f=new N,h=new N,p=new N,v=new N,g=new N,m=new N,d=new N;for(let M=0;M<=i;++M){const S=M/i*s*Math.PI*2;E(S,s,o,e,p),E(S+.01,s,o,e,v),m.subVectors(v,p),d.addVectors(v,p),g.crossVectors(m,d),d.crossVectors(g,m),g.normalize(),d.normalize();for(let w=0;w<=r;++w){const C=w/r*Math.PI*2,P=-t*Math.cos(C),I=t*Math.sin(C);f.x=p.x+(P*d.x+I*g.x),f.y=p.y+(P*d.y+I*g.y),f.z=p.z+(P*d.z+I*g.z),l.push(f.x,f.y,f.z),h.subVectors(f,p).normalize(),c.push(h.x,h.y,h.z),u.push(M/i),u.push(w/r)}}for(let M=1;M<=i;M++)for(let S=1;S<=r;S++){const w=(r+1)*(M-1)+(S-1),C=(r+1)*M+(S-1),P=(r+1)*M+S,I=(r+1)*(M-1)+S;a.push(w,C,I),a.push(C,P,I)}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2));function E(M,S,w,C,P){const I=Math.cos(M),y=Math.sin(M),b=w/S*M,te=Math.cos(b);P.x=C*(2+te)*.5*I,P.y=C*(2+te)*y*.5,P.z=C*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Nr extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iE extends Sr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const qu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class rE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const sE=new rE;class El{constructor(e){this.manager=e!==void 0?e:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}El.DEFAULT_MATERIAL_NAME="__DEFAULT";class oE extends El{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ts("img");function l(){u(),qu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Qi extends El{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new oE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ih extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ca=new dt,Yu=new N,ju=new N;class aE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $u=new dt,Lr=new N,ua=new N;class lE extends aE{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lr),ua.copy(i.position),ua.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ua),i.updateMatrixWorld(),r.makeTranslation(-Lr.x,-Lr.y,-Lr.z),$u.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}}class Ba extends Ih{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cE extends Ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);const uE={mounted(){this.initThreeScene()},methods:{initThreeScene(){const n=new _l,e=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.setZ(10),e.position.setX(-3);const t=new _o({canvas:document.querySelector("#bg")});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight);const i=new vo(5,1,300,20,4,6),r=new Nr({color:6171647}),s=new et(i,r);s.position.set(3,-.5,-1);const o=new Ba(16777215,5);n.add(s),n.add(o);function a(h){const p=t.domElement.getBoundingClientRect();l=(h.clientX-p.left)/p.width*3.5-2,c=-((h.clientY-p.top)/p.height)*3.5+2,o.position.set(l,c,3.6)}let l=0,c=0;document.addEventListener("mousemove",h=>{a(h)});function u(){requestAnimationFrame(u),s.rotation.x+=.01,t.render(n,e)}u();const f={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{f.width=window.innerWidth,f.height=window.innerHeight,e.aspect=f.width/f.height,e.updateProjectionMatrix(),t.setSize(f.width,f.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2))})}}},fE={id:"bg"};function hE(n,e,t,i,r,s){return Gt(),Vt("canvas",fE)}const dE=kt(uE,[["render",hE]]);const pE={},mE=n=>(el("data-v-bc4a5bbe"),n=n(),tl(),n),gE=mE(()=>Oe("div",{class:"card"},[Oe("header",null,[Oe("h1",null,"Andre Rodrigues"),Oe("p",null,"Welcome to my portfolio")])],-1)),_E=[gE];function vE(n,e){return Gt(),Vt("main",null,_E)}const xE=kt(pE,[["render",vE],["__scopeId","data-v-bc4a5bbe"]]);const ME={name:"Home",components:{MainPageScene:dE,PresentationCard:xE}},SE={class:"app-container"};function EE(n,e,t,i,r,s){const o=xn("MainPageScene"),a=xn("PresentationCard");return Gt(),Vt("div",SE,[Ke(o,{class:"MainPageScene"}),Ke(a)])}const yE=kt(ME,[["render",EE],["__scopeId","data-v-625120b0"]]),TE="/MyPortfolio/assets/Portrait-6552100a.jpg",bE={mounted(){this.initThreeScene()},methods:{initThreeScene(){const n=new _l,e=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3),t=new _o({canvas:document.querySelector("#bg")});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),e.position.setZ(20);const i={width:window.innerWidth,height:window.innerHeight},r=new Qi().load(TE),s=new et(new On(14,14,.5),new In({map:r})),o=new cE(4210752);function a(){const p=new ns(.2,24,24),v=new In({color:16777215}),g=new et(p,v),[m,d,E]=Array(3).fill().map(()=>lu.randFloatSpread(100));g.position.set(m,d,E),n.add(g)}Array(200).fill().forEach(a);function l(){const p=new ns(1,24,24),v=new In({color:16777215}),g=new et(p,v),[m,d,E]=Array(3).fill().map(()=>lu.randFloatSpread(100));g.position.set(m,d,E),n.add(g)}Array(25).fill().forEach(l),n.add(o),n.add(s),s.position.setX(16),window.addEventListener("resize",()=>{i.width=window.innerWidth,i.height=window.innerHeight,e.aspect=i.width/i.height,e.updateProjectionMatrix(),t.setSize(i.width,i.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2))});let c=1,u=1,f=5e-4;function h(){requestAnimationFrame(h),s.rotation.y+=f*c,s.rotation.x+=f*u,(s.rotation.y>=Math.PI/20||s.rotation.y<=-Math.PI/9)&&(c*=-1),(s.rotation.x>=Math.PI/25||s.rotation.x<=-Math.PI/25)&&(u*=-1),t.render(n,e)}h()}}},AE={id:"bg"};function wE(n,e,t,i,r,s){return Gt(),Vt("canvas",AE)}const RE=kt(bE,[["render",wE]]);const CE={},PE=n=>(el("data-v-4f8da045"),n=n(),tl(),n),LE=PE(()=>Oe("div",{class:"card"},[Oe("h1",null,"About me"),Oe("p",null,"I am a Computer Science Gradute at Coventry University with upper second class honnors. Born and raised in portugal, allways had passion for technology and learning new skills. Throughout my life allways had gaming and cinema as main forms of entertainment and I feel like those media were what made me curious about programming and IT.")],-1)),UE=[LE];function DE(n,e){return Gt(),Vt("main",null,UE)}const IE=kt(CE,[["render",DE],["__scopeId","data-v-4f8da045"]]);const NE={name:"About",components:{AboutPageScene:RE,AboutMeCard:IE},mounted(){console.log("About view component is mounted!")}},FE={class:"app-conteiner"};function OE(n,e,t,i,r,s){const o=xn("AboutPageScene"),a=xn("AboutMeCard");return Gt(),Vt("div",FE,[Ke(o),Ke(a)])}const BE=kt(NE,[["render",OE],["__scopeId","data-v-8a26548f"]]),is={_origin:"https://api.emailjs.com"},zE=(n,e="https://api.emailjs.com")=>{is._userID=n,is._origin=e},Nh=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ku{constructor(e){this.status=e.status,this.text=e.responseText}}const Fh=(n,e,t={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new Ku(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new Ku(o))}),s.open("POST",is._origin+n,!0),Object.keys(t).forEach(o=>{s.setRequestHeader(o,t[o])}),s.send(e)}),HE=(n,e,t,i)=>{const r=i||is._userID;return Nh(r,n,e),Fh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},GE=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},VE=(n,e,t,i)=>{const r=i||is._userID,s=GE(t);Nh(r,n,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",n),o.append("template_id",e),o.append("user_id",r),Fh("/api/v1.0/email/send-form",o)},Zu={init:zE,send:HE,sendForm:VE};const kE={data(){return{fullName:"",email:"",message:""}},methods:{sendEmail(){Zu.init("0M07HZzWX3eVk03e1"),this.receiveMail()},receiveMail(){var n={from_name:this.fullName,email:this.email,message:this.message};Zu.send("service_n4ifi99","template_8040gkw",n).then(e=>{alert("Success! "+e.status),console.log(this.email)})}}},WE={class:"card-container"},XE={class:"card"},qE=Oe("p",{class:"title"},"Contact Me",-1),YE={class:"content"},jE={class:"inputs"},$E=Oe("br",null,null,-1),KE=Oe("br",null,null,-1),ZE=Oe("br",null,null,-1),JE=Oe("div",{class:"personal-info"},[Oe("p",null,"Phone Number: +44 07340618568"),Oe("p",null,"Address: 217, Gulson Road, Coventry, United Kingdom")],-1);function QE(n,e,t,i,r,s){return Gt(),Vt("div",WE,[Oe("div",XE,[qE,Oe("div",YE,[Oe("div",jE,[sr(Oe("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>r.fullName=o),placeholder:"Full Name",id:"fullname",required:""},null,512),[[Po,r.fullName]]),$E,sr(Oe("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=o=>r.email=o),placeholder:"Email ID",id:"email_id",required:""},null,512),[[Po,r.email]]),KE,sr(Oe("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.message=o),placeholder:"Message",id:"message",required:""},null,512),[[Po,r.message]]),ZE,Oe("button",{onClick:e[3]||(e[3]=(...o)=>s.sendEmail&&s.sendEmail(...o))},"Send")]),JE])])])}const ey=kt(kE,[["render",QE]]);const ty={components:{ContactForm:ey}},ny={class:"background"},iy={class:"form"};function ry(n,e,t,i,r,s){const o=xn("ContactForm");return Gt(),Vt("main",ny,[Oe("div",iy,[Ke(o)])])}const sy=kt(ty,[["render",ry],["__scopeId","data-v-b27359de"]]),oy="/MyPortfolio/assets/StrokePredictionVideo-dc9cce29.png",ay="/MyPortfolio/assets/KarenFlow-cdb3733e.jpg";const ly={},cy=Ip('<main><header><h1>Welcome to my portfolio</h1></header><section class="first-Project"><h2>Stroke Prediction</h2><h3>Machine Learning</h3><p> I undertook a machine learning project focused on predicting the likelihood of stroke occurrence in individuals. With a database comprising 5,000 entries, I applied various machine learning algorithms to achieve accurate predictions. The project provided me with a comprehensive understanding of machine learning concepts, Python programming, and essential libraries such as NumPy, Pandas, scikit-learn, and Seaborn. Throughout the project, I implemented 15 diverse machine learning algorithms, encompassing classifiers, support vector machines (SVMs), and other relevant techniques. Employing random forest classifier, K-nearest neighbours classifier, and decision tree classifier, I achieved the highest performance. Notably, the random forest classifier exhibited an accuracy of 89%, emerging as the most effective algorithm for stroke prediction. While I did not explicitly mention feature selection or engineering techniques, I effectively analysed the dataset and identified the most influential variables for accurate predictions. By validating the performance and accuracy of the models, I ensured reliable outcomes. The entire project was executed using Jupiter Notebook, providing a structured and well-documented workflow. The experience enhanced my skills in data processing, pre-processing, and model evaluation. It also deepened my understanding of machine learning algorithms and their applications for real-world problems.</p><img src="'+oy+'"></section><section class="second-Project"><h2>Karen</h2><h3>Gaming ChatBot</h3><p>Karen is a Chatbot programmed to have a conversation with the user about gaming in general. From answering user’s questions to naming the most played games to date. We worked on lists of key words that Karen would recognize, process and generate an appropriate response. Karen has also function implemented on its’ code that allows the bot to work with APIs and RSS to get up to date information automatically. This was my first programming project and in my opinion was a great introduction to the field. I developed skills with python, learned how to use GitHub and also developed my teamwork skills.</p><img src="'+ay+'"></section><section class="third-Project"><h2>Gaming Forum</h2><h3>Web Api</h3><p>I developed a RESTful API project individually as part of a university module to enhance my skills in web APIs, KOA framework, and REST principles. Using KOA, REST, and JavaScript, I created user-facing endpoints for account creation, updates, and game-related actions such as reviewing and rating games. As an admin, I implemented functionalities to manage games, ratings, reviews, and user accounts. The API integrated two third-party APIs: &quot;Trivia Questions&quot; for random video game trivia questions and &quot;Cheap shark&quot; to retrieve game names and best prices. I utilized MySQL for data storage and Thunder client for testing. The project showcased my proficiency in JavaScript, API development, integration of third-party services, and database management. Overall, I gained valuable experience in building a RESTful API, implementing user and admin features, and ensuring seamless functionality.</p></section><section class="forth-Project"><h2>This Portfolio!</h2><h3>My first project after university</h3><p>This portfolio was made with VueJS and threeJS. This was my first project after university and I decided to learn something that looked interesting. For the contact page I used MailJS for the fist time aswell. Hope you enjoyed it!</p></section></main>',1),uy=[cy];function fy(n,e,t,i,r,s){return Gt(),Vt("body",null,uy)}const hy=kt(ly,[["render",fy]]),dy="/MyPortfolio/assets/PlaneTexture-a28a463b.jpg",py="/MyPortfolio/assets/waterTexture-10ec9fa9.jpg",my="/MyPortfolio/assets/machineLearningTexture-c1549258.png",gy="/MyPortfolio/assets/KarenObjectTexture-fba2ad2c.jpg",_y="/MyPortfolio/assets/GamingboardTexture-1c796d50.avif";const vy={mounted(){this.initThreeScene()},methods:{initThreeScene(){const n=new _l,e=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.z=4.5,e.position.y=2.5;const t=new _o({canvas:document.querySelector("#bg")});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight);const i=new On(.2,.2,500),r=new Nr({color:41727}),s=new et(i,r),o=new et(i,r),a=new et(i,r),l=new et(i,r),c=new Sl(6,.5,10,200,3.15),u=new Nr({color:1381139}),f=new et(c,r),h=new et(c,u),p=new et(c,r),v=new ns(4,32,16),g=new Qi().load(py),m=new Nr({map:g}),d=new et(v,m),E=new Qi().load(my),M=new In({map:E}),S=new On(5,3,5),w=new et(S,M),C=new Qi().load(dy),P=new Nr({map:C}),I=new Ml(4,30,10),y=new In({color:0}),b=new et(I,y),te=new Qi().load(gy),G=new In({map:te}),O=new xl(2.5,1),W=new et(O,G),K=new Qi().load(_y),ne=new et(new On(5,5,.5),new In({map:K})),X=new iE,Y=new vo(3,1,300,20,4,6),he=new et(Y,X),le=10,k=200,q=4;for(let L=0;L<le;L++)for(let F=0;F<k;F++){const B=new et(new mo(q,q),P);B.position.x=(L-le/2+.5)*q,B.position.z=(F-k/2)*q,B.rotation.x=-Math.PI/2,n.add(B)}function ge(L,F,B){for(let J=0;J<L;J++){const ue=new Ba(16777215,100);ue.position.setY(3),ue.position.setZ(B+J*F),n.add(ue)}}const me=new Ba(16777215,300);ge(20,20,-180),he.position.set(-6,5,-150),ne.position.set(6,4,-108),W.position.set(-6,2.5,-74),b.position.set(0,0,-27),w.position.set(5,3,-35),me.position.set(0,8,-8),d.position.set(0,8,-20),s.position.setX(-4),o.position.setX(4),a.position.setX(-4),a.position.setY(6),a.position.setZ(226),l.position.setX(4),l.position.setY(6),l.position.setZ(226),h.position.setZ(-8),p.position.setZ(-16),n.add(he),n.add(ne),n.add(W),n.add(b),n.add(w),n.add(d),n.add(l),n.add(a),n.add(s),n.add(o),n.add(f),n.add(h),n.add(p),n.add(me);function se(){const L=document.body.getBoundingClientRect().top,F=4.5,B=-.0252;e.position.z=F-L*B,e.position.x=0,e.position.y=2.5}document.body.onscroll=se;const oe={width:window.innerWidth,height:window.innerHeight};let Me=1,ye=1,_=.003;function R(){w.rotation.y+=.005,d.rotation.y+=.005,he.rotation.x+=.01,he.rotation.y+=.005,he.rotation.z+=.005,ne.rotation.y+=_*Me,ne.rotation.x+=_*ye,(ne.rotation.y>=Math.PI/20||ne.rotation.y<=-Math.PI/9)&&(Me*=-1),(ne.rotation.x>=Math.PI/25||ne.rotation.x<=-Math.PI/25)&&(ye*=-1),W.rotation.x+=.01,W.rotation.y+=.01,W.rotation.z+=.01,requestAnimationFrame(R),t.render(n,e)}R(),window.addEventListener("resize",()=>{oe.width=window.innerWidth,oe.height=window.innerHeight,e.aspect=oe.width/oe.height,e.updateProjectionMatrix(),t.setSize(oe.width,oe.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2))})}}},xy={id:"bg"};function My(n,e,t,i,r,s){return Gt(),Vt("canvas",xy)}const Sy=kt(vy,[["render",My],["__scopeId","data-v-3b6b8c57"]]);const Ey={components:{portfolioScene:Sy,PortfolioMarkupVue:hy}},yy={class:"app-container"};function Ty(n,e,t,i,r,s){const o=xn("portfolioScene"),a=xn("PortfolioMarkupVue");return Gt(),Vt("body",null,[Oe("div",yy,[Ke(o)]),Oe("main",null,[Ke(a)])])}const by=kt(Ey,[["render",Ty],["__scopeId","data-v-df4f88d1"]]),Ay=[{path:"/",name:"Home",component:yE},{path:"/about",name:"About",component:BE},{path:"/contact",name:"Contact",component:sy},{path:"/portfolio",name:"Portfolio",component:by}],wy=Ng({history:Zm("/MyPortfolio"),routes:Ay});xm(Dm).use(wy).mount("#app");
