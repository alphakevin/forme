var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&l(e,n,t[n]);return e},c=(e,r)=>t(e,n(r)),s=(e,t)=>{var n={};for(var l in e)a.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&r)for(var l of r(e))t.indexOf(l)<0&&i.call(e,l)&&(n[l]=e[l]);return n};const m={};import{r as d,t as u,D as p,c as f,u as h,a as y,R as g,b as v,F as E,I as x,d as b,o as C,e as N,f as S,g as k,h as w,L as T,i as I,M as D,T as F,j as O,k as A,l as q,m as L}from"./vendor.6628f71a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var _="_app_7bstd_1",P="_header_7bstd_5",M="_fields_7bstd_12",$="_tabs_7bstd_16",j="_outline_7bstd_30",V="_library_7bstd_31",B="/forme/assets/Section.f14b4302.svg",R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Form:"/forme/assets/Form.6460ac37.svg",LongAnswer:"/forme/assets/LongAnswer.d92d19b6.svg",Section:B,ShortAnswer:"/forme/assets/ShortAnswer.7f895f28.svg",SingleCheckbox:"/forme/assets/SingleCheckbox.9c06ca68.svg",Term:"/forme/assets/Term.aa61a3b9.svg"});d.exports.createContext(null).Provider;const z=e=>{let t="";if("string"==typeof e)if(e.startsWith("http")){const{pathname:n}=new URL(e);t=n.split("/src/").pop().split(".")[0].replace(/\//g,":")}else t=e;const n=p(t);return n.enabled=!0,n.log=console.log.bind(console),(e,...t)=>n.apply(n,[e,...t].map(u))};var K;f(Array(52).fill(0).map(((e,t)=>String.fromCharCode(t<26?t+65:t+71))).join(""),6),z(null==m?void 0:m.url),z(null==m?void 0:m.url),(K||(K={})).Component="Component";d.exports.createContext(null).Provider;let X=1;function Q(){return X++,"id-"+X}const U={id:Q(),type:"Form",title:"The Ultra Form",children:[{id:Q(),type:"Section",title:"Basic Information",children:[{id:Q(),type:"Term",title:"Name",children:[{id:Q(),type:"ShortAnswer",question:"First Name"},{id:Q(),type:"ShortAnswer",question:"Last Name"},{id:Q(),type:"ShortAnswer",question:"Nick Name"}]},{id:Q(),type:"Term",title:"Pet",children:[{id:Q(),type:"SingleCheckbox",question:"Do you have pets?",checkedOption:"I have one or more pet",uncheckedOption:"I don't have any pet"}]},{id:Q(),type:"Term",title:"Computer",children:[{id:Q(),type:"SingleCheckbox",question:"Do you have Mac?",checkedOption:"I have Mac",uncheckedOption:"I don't Mac"},{id:Q(),type:"SingleCheckbox",question:"Do you have PC?",checkedOption:"I have PC",uncheckedOption:"I don't PC"}]}]},{id:Q(),type:"Section",title:"Technical Information",children:[{id:Q(),type:"Term",title:"Language Level",children:[{id:Q(),type:"ShortAnswer",question:"Javascript"},{id:Q(),type:"ShortAnswer",question:"go lang"},{id:Q(),type:"ShortAnswer",question:"Python"}]},{id:Q(),type:"Term",title:"Front End",children:[{id:Q(),type:"SingleCheckbox",question:"Do you have React experience?",checkedOption:"Yes, I have",uncheckedOption:"No, never heard of that"}]},{id:Q(),type:"Term",title:"Other",children:[]}]}]},Y=[{type:"Form",name:"Form",category:"Container",level:0,childTypes:["Section"],disabled:!0,getData:e=>{const t=Q();return c(o({type:"Form",title:"Default Section "+t,children:[]},e),{id:t})}},{type:"Section",name:"Section",category:"Container",level:1,childTypes:["Term"],getData:e=>{const t=Q();return c(o({type:"Section",title:"Default Section "+t,children:[]},e),{id:t})}},{type:"Term",name:"Term",category:"Container",level:2,childTypes:["ShortAnswer","LongAnswer","SingleCheckbox"],getData:e=>{const t=Q();return c(o({type:"Term",title:"Default Term "+t,children:[]},e),{id:t})}},{type:"ShortAnswer",name:"Short Answer",category:"FormField",level:3,getData:e=>{const t=Q();return c(o({type:"ShortAnswer",annotationId:null,tip:null,description:"",label:"",question:"Question for short answer "+t},e),{id:t})}},{type:"LongAnswer",name:"Long Answer",category:"FormField",level:3,getData:e=>{const t=Q();return c(o({type:"LongAnswer",annotationId:null,tip:null,description:"",label:"",question:"Question for long answer "+t},e),{id:t})}},{type:"SingleCheckbox",name:"Single Checkbox",category:"FormField",level:3,getData:e=>{const t=Q();return c(o({type:"SingleCheckbox",annotationId:null,tip:null,description:"",question:"Question for single checkbox "+t,checkedOption:"",uncheckedOption:""},e),{id:t})}}],H={};function J(e){return e?H[e]:void 0}function W(e){return Y.filter(e).map((e=>e.type))}function Z(e){var t;return null==(t=null==e?void 0:e.data)?void 0:t.current}function G(){const{active:e}=h(),t=Z(e);return null==t?void 0:t.item.type}function ee(e){const t=G();return d.exports.useMemo((()=>function(e,t){var n,r;if(!e||!t)return!1;const a=J(e);return null!=(r=null==(n=null==a?void 0:a.childTypes)?void 0:n.includes(t))&&r}(e,t)),[e,t])}Y.forEach((e=>{H[e.type]=e}));const te=["Form","Section","Term"],ne=["ShortAnswer","LongAnswer","SingleCheckbox"];function re(e){return t=e.type,te.includes(t);var t}function ae(e){return t=e.type,ne.includes(t);var t}function ie(e){const t=J(e.type);return re(e)?e.title:ae(e)?e.question:`${t.name}`}function le(e){const{id:t,item:n,prefix:r="global",index:a}=e,i=ee(n.type),l={from:"Builder",item:n},{setNodeRef:o,isOver:c}=y({id:`Component-${r}-${t}-${n.id}`,data:l,disabled:!i}),s=c&&i;return g.createElement("div",{className:v("DropArea",{dropOver:s}),"data-for":n.id,ref:o})}function oe(e){const{data:t}=e,[n]=E.useForm(),[r,a]=d.exports.useState("optional");return g.createElement(E,{form:n,layout:"vertical",initialValues:{requiredMarkValue:r},onValuesChange:({requiredMarkValue:e})=>{a(e)},requiredMark:r},g.createElement(E.Item,{label:"Label",required:!0,tooltip:"This is a required field"},g.createElement(x,{defaultValue:t.question,placeholder:"Select all the structures that exist on your property"})),g.createElement(E.Item,{label:"Placeholder"},g.createElement(x,{defaultValue:t.description,placeholder:""})))}function ce(e){const{item:t,index:n}=e,r=J(t.type);return g.createElement("div",{className:"ComponentEditor"},g.createElement("div",{className:"header"},g.createElement("img",{className:"icon",src:R[t.type]}),g.createElement("div",{className:"name"},r.name," - ",n+1)),g.createElement("div",{className:"fields"},g.createElement(oe,{data:t})))}function se(e){const{item:t,index:n}=e;return g.createElement("div",{className:"FormComponent","data-id":`item-${t.id}`},g.createElement(ce,{item:t,index:n}))}const me="A".charCodeAt(0),de="Z".charCodeAt(0)-me+1;function ue(e){var t=me+e-1;return String.fromCharCode(t)}function pe(e){const{item:t,index:n}=e;return g.createElement("div",{className:"FormSection","data-id":`item-${t.id}`},g.createElement("div",{className:"header"},g.createElement("img",{src:B}),g.createElement("span",null,(r=n+1)<=de?ue(r):ue(Math.floor((r-1)/de))+ue(r%de||de),". ",t.title)),g.createElement(ye,{item:t}));var r}function fe(e){const{item:t,index:n}=e;return g.createElement("div",{className:"FormTerm","data-id":`item-${t.id}`},g.createElement("div",{className:"header"},g.createElement("span",null,function(e){const t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let n="";for(const r in t)for(;e>=t[r];)n+=r,e-=t[r];return n}(n+1),". ",t.title)),g.createElement(ye,{item:t}),0===t.children.length&&g.createElement("div",{className:"drop-zone"},g.createElement("div",{className:"spacer"}),g.createElement("div",{className:"tip"},"Drag and drop a component into the term"),g.createElement("div",{className:"spacer"})))}function he(e){const{item:t,index:n}=e;switch(J(t.type),t.type){case"Form":return g.createElement(ge,{item:t,index:n});case"Section":return g.createElement(pe,{item:t,index:n});case"Term":return g.createElement(fe,{item:t,index:n});default:return g.createElement(se,{item:t,index:n})}}function ye(e){const{item:t}=e,n=G();if(n){const e=J(n);if(W((t=>t.level>=e.level)).includes(t.type))return null}return g.createElement("div",{className:"children"},re(t)&&g.createElement(g.Fragment,null,t.children.map(((e,n)=>g.createElement(d.exports.Fragment,{key:e.id},g.createElement(le,{id:e.id,item:t,prefix:"form",index:n}),g.createElement(he,{item:e,index:n})))),g.createElement(le,{id:"last",item:t,prefix:"form",index:t.children.length+1})))}function ge(e){const{item:t}=e;return g.createElement("div",{className:"FormBuilder","data-id":t.id},g.createElement(ye,{item:t}))}function ve(){return g.createElement("div",null,g.createElement(ge,{item:U}))}function Ee(e,t){return e.includes(t)?e:[...e,t]}function xe(e,t){const n=e.indexOf(t);return-1===n?e:[...e.slice(0,n),...e.slice(n+1)]}const be=()=>{},Ce=d.exports.createContext({expandedItems:[],collapsedTypes:[],expand:be,collapse:be,toggle:be});function Ne(e){const t=e,{className:n,item:{type:r},size:a=40}=t,i=s(t,["className","item","size"]);return g.createElement("img",c(o({},i),{className:v("ComponentIcon",n),src:R[r],style:o({width:a,height:a},i.style)}))}function Se(e){var t;const{item:n,index:r}=e,{expandedItems:a,collapsedTypes:i,toggle:l,expand:c}=d.exports.useContext(Ce),s={from:"Builder",item:n},{setNodeRef:m,isOver:u,active:p}=y({id:`Component-tree-content-${n.id}`,data:s}),{listeners:f,setNodeRef:h}=b({id:`Component-Tree-${n.id}`,data:{from:"Builder",item:n}}),E=J(n.type),x=J(null==(t=Z(p))?void 0:t.item.type),C=a.includes(n.id)&&!i.includes(n.type),N=d.exports.useCallback((()=>c(n.id)),[]);d.exports.useEffect((()=>{u&&x.level>E.level&&window.requestAnimationFrame(N)}),[u,E,x]);const S=re(n),k=ie(n),w=d.exports.useCallback((e=>{e.stopPropagation();const t=document.querySelector(`[data-id='item-${n.id}']`);console.log(),t.scrollIntoView({behavior:"smooth"})}),[n]);return g.createElement("li",{className:v("TreeItem",{expanded:C})},g.createElement("div",o({ref:h},f),g.createElement("div",{ref:m,className:v("content",{dragOver:u}),"data-id":n.id,onClick:w},g.createElement("div",{className:"icon",onClick:()=>l(n.id),title:C?"Collapse":"Expand"},g.createElement(Ne,{item:n,size:24})),g.createElement("span",{className:"title"},k),S&&!C&&g.createElement("span",{className:"child-count"},n.children.length))),g.createElement("ul",{className:"children"},S&&g.createElement(g.Fragment,null,n.children.map(((e,t)=>g.createElement(d.exports.Fragment,{key:e.id},g.createElement(le,{id:e.id,item:n,prefix:"tree",index:t}),g.createElement(Se,{item:e,index:t})))),g.createElement(le,{id:"last",item:n,prefix:"tree-last",index:n.children.length+1}))))}function ke(e){const{item:t}=e,[n,r]=d.exports.useState([]),[a,i]=d.exports.useState([]),l=d.exports.useCallback((e=>{r((t=>Ee(t,e)))}),[]),o=d.exports.useCallback((e=>{r((t=>xe(t,e)))}),[]),c=d.exports.useCallback((e=>{r((t=>t.includes(e)?xe(t,e):Ee(t,e)))}),[l,o]),s=G();return d.exports.useEffect((()=>{if(s){const e=J(s),t=W((t=>t.level>=e.level));i(t)}else i([])}),[s]),g.createElement(Ce.Provider,{value:{expandedItems:n,expand:l,collapse:o,toggle:c,collapsedTypes:a}},g.createElement("ul",{className:"Tree"},g.createElement(Se,{item:t,index:0})))}function we(e){const t=e,{data:n}=t,r=s(t,["data"]);if(!n||!n.item)return null;console.log("DraggingItem",n);const a=J(n.item.type),i=ie(n.item);return g.createElement("div",o({className:"DraggingItem"},r),g.createElement(Ne,{className:"icon",item:n.item}),g.createElement("div",{className:"text"},"Library"!==n.from&&g.createElement("div",{className:"title"},a.name),g.createElement("div",{className:"name"},i)))}function Te(e){const{type:t}=e,n=J(t),{attributes:r,listeners:a,setNodeRef:i,transform:l,isDragging:c}=b({id:`Component-${t}`,data:{from:"Library",item:n.getData()}});return g.createElement("div",o(o({className:"ComponentItem",ref:i},a),r),g.createElement(Ne,{className:"icon",item:n}),g.createElement("div",{className:"name"},n.name))}const Ie=Y.filter((e=>!e.disabled));function De(){return g.createElement("div",{className:"Toolbox"},g.createElement("div",{className:"tip"},"Drag and drop a form component into a term"),g.createElement("div",null,Ie.map((e=>g.createElement(Te,{key:e.type,type:e.type})))))}const Fe=C((()=>{const[e,t]=d.exports.useState("1"),[n,r]=d.exports.useState(null),a=N(q,{activationConstraint:{distance:10}}),i=S(a),l=d.exports.useCallback((e=>{console.log(e.active.data),r(e.active.data.current)}),[]),o=d.exports.useCallback((e=>{console.log("DragEnd: ",e.active," drops one ",e.over),r(null)}),[]);return g.createElement(k,{sensors:i,collisionDetection:w,layoutMeasuring:{strategy:T.Always,frequency:200},onDragStart:l,onDragEnd:o},g.createElement(I,{className:_},g.createElement(I.Header,{className:P},g.createElement("h1",null,"Form Builder"),g.createElement(D,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["index"],onSelect:e=>location.href=`/forme/${e.key}.html`},g.createElement(D.Item,{key:"builder"},"Builder"),g.createElement(D.Item,{key:"index"},"Dnd Kit"),g.createElement(D.Item,{key:"formily"},"Formily"))),g.createElement(I,null,g.createElement(I.Sider,{className:j,width:240},g.createElement(ke,{item:U})),g.createElement(I.Content,{className:M},g.createElement(F,{className:$,type:"card",activeKey:e,onTabClick:t},g.createElement(F.TabPane,{tab:"Design",key:"1",style:{overflowY:"auto"}},g.createElement(ve,null)),g.createElement(F.TabPane,{tab:"Schema",key:"2"}))),g.createElement(I.Sider,{className:V,width:240},g.createElement("h2",null,"Component Library"),g.createElement(De,null)))),g.createElement(O,{modifiers:[A]},g.createElement(we,{data:n})))}));L.render(g.createElement(Fe,null),document.getElementById("root"));
