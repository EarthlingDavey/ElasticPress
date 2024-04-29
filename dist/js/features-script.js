!function(){"use strict";var e={5251:function(e,s,t){var n=t(9196),a=60103;if(s.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var r=Symbol.for;a=r("react.element"),s.Fragment=r("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var n,r={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(u=s.ref),s)l.call(s,n)&&!o.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:a,type:e,key:c,ref:u,props:r,_owner:i.current}}s.jsx=c,s.jsxs=c},5893:function(e,s,t){e.exports=t(5251)},9196:function(e){e.exports=window.React}},s={};function t(n){var a=s[n];if(void 0!==a)return a.exports;var r=s[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,{a:s}),s},t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},function(){var e=window.wp.element,s=window.wp.i18n,n=window.wp.components,a=window.wp.data,r=window.wp.notices,i=t(5893);const l=(0,e.createContext)(),{Fill:o,Slot:c}=(0,n.createSlotFill)("SettingsPageAction"),u=({children:s,title:t})=>{const{createNotice:u,removeNotice:d}=(0,a.useDispatch)(r.store),{notices:p}=(0,a.useSelect)((e=>({notices:e(r.store).getNotices()})),[]),g=(0,e.useMemo)((()=>({ActionSlot:o,createNotice:u,removeNotice:d})),[u,d]);return(0,i.jsx)(n.SlotFillProvider,{children:(0,i.jsx)(l.Provider,{value:g,children:(0,i.jsxs)("div",{className:"ep-settings-page",children:[(0,i.jsxs)("div",{className:"ep-settings-page__wrap",children:[(0,i.jsxs)("header",{className:"ep-settings-page__header",children:[(0,i.jsx)("h1",{className:"ep-settings-page__title",children:t}),(0,i.jsx)(c,{})]}),s]}),(0,i.jsx)(n.SnackbarList,{className:"ep-settings-page__snackbar-list",notices:p,onRemove:e=>d(e)})]})})})},{apiUrl:d,epioLogoUrl:p,features:g,indexMeta:h,settings:f,settingsDraft:y,syncUrl:_}=window.epDashboard;var m=window.wp.apiFetch,x=t.n(m),b=window.lodash;const v=(0,e.createContext)(),S=({apiUrl:s,children:t,defaultSettings:n,epioLogoUrl:a,features:r,indexMeta:l,syncedSettings:o})=>{const[c,u]=(0,e.useState)(!1),[d,p]=(0,e.useState)(!!l),[g,h]=(0,e.useState)({...n}),[f,y]=(0,e.useState)({...o}),_=(0,e.useCallback)((e=>r.find((s=>s.slug===e))),[r]),m=(0,e.useMemo)((()=>!(0,b.isEqual)(g,f)),[g,f]),S=(0,e.useCallback)(((e,s,t)=>t&&e&&"0"!==e&&e!==s),[]),j=(0,e.useCallback)((e=>{const{slug:s,settingsSchema:t}=e;return t.some((e=>{if(!0!==g?.[s]?.active)return!1;const t=e.requires_sync,n=g?.[s]?.[e.key],a=o?.[s]?.[e.key];return S(n,a,t)}))}),[g,o,S]),w=(0,e.useMemo)((()=>r.reduce(((e,s)=>(j(s)&&e.push(s.slug),e)),[])),[r,j]),C=(0,e.useMemo)((()=>!!w.length),[w]),F={epioLogoUrl:a,features:r,featuresRequiringSync:w,getFeature:_,isBusy:c,isModified:m,isSyncing:d,setIsSyncing:p,isSyncRequired:C,resetSettings:()=>{h({...f})},saveSettings:async()=>{try{u(!0);const e=await x()({body:JSON.stringify(g),headers:{"Content-Type":"application/json"},method:"PUT",url:s});y(e.data)}finally{u(!1)}},savedSettings:f,syncedSettings:o,settings:g,setSettings:h,willSettingRequireSync:S};return(0,i.jsx)(v.Provider,{value:F,children:t})},j=()=>(0,e.useContext)(v);var w=window.wp.dom,C=({disabled:t,help:a,label:r,name:l,onChange:o,options:c,requiresFeature:u,requiresSync:d,syncedValue:p,type:g,value:h})=>{const{getFeature:f,isBusy:y,settings:_,willSettingRequireSync:m}=j(),x=a?(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,w.safeHTML)(a)}}):null,b=c?c.map((e=>({value:e.value,label:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,w.safeHTML)(e.label)}})}))):[],v=!(!u||!0===_[u]?.active)&&f(u),S="active"===l?(0,s.__)("The %s feature must be enabled to use this feature.","elasticpress"):(0,s.__)("The %s feature must be enabled to use the following setting.","elasticpress"),C="active"===l?(0,s.__)("Enabling this feature requires re-syncing your content.","elasticpress"):(0,s.__)("A change to following setting requires re-syncing your content.","elasticpress"),F=y||t||v,T=m(h,p,d),N=e=>{o(e?"1":"0")},M=e=>{const s=e.map((e=>c.find((s=>s.label===e))?.value)).filter(Boolean).join(",");o(s)};return(0,i.jsxs)(i.Fragment,{children:[v?(0,i.jsx)(n.Notice,{isDismissible:!1,status:"active"===l?"error":"warning",children:(0,s.sprintf)(S,v.shortTitle)}):null,T?(0,i.jsx)(n.Notice,{isDismissible:!1,status:"warning",children:C}):null,(0,i.jsx)("div",{className:"ep-dashboard-control",children:(()=>{switch(g){case"checkbox":return(0,i.jsx)(n.CheckboxControl,{checked:"1"===h,help:x,label:r,onChange:N,disabled:F});case"hidden":return null;case"markup":return(0,i.jsx)(e.RawHTML,{children:(0,w.safeHTML)(r)});case"multiple":{const e=c.map((e=>e.label)),s=h.split(",").map((e=>c.find((s=>s.value===e))?.label)).filter(Boolean);return(0,i.jsx)(n.FormTokenField,{__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,label:r,onChange:M,disabled:F,suggestions:e,value:s})}case"radio":return(0,i.jsx)(n.RadioControl,{help:x,label:r,onChange:o,options:b,disabled:F,selected:h});case"select":return(0,i.jsx)(n.SelectControl,{help:x,label:r,onChange:o,options:c,disabled:F,value:h});case"toggle":return(0,i.jsx)(n.ToggleControl,{checked:h,help:x,label:r,onChange:o,disabled:F});case"textarea":return(0,i.jsx)(n.TextareaControl,{help:x,label:r,onChange:o,disabled:F,value:h});default:return(0,i.jsx)(n.TextControl,{help:x,label:r,onChange:o,disabled:F,value:h,type:g})}})()})]})},F=({feature:e,settingsSchema:s})=>{const{getFeature:t,settings:n,setSettings:a,syncedSettings:r}=j(),{isAvailable:l}=t(e);return s.map((s=>{const{default:t,disabled:o,help:c,key:u,label:d,options:p,requires_feature:g,requires_sync:h,type:f}=s;let y="undefined"!==typeof n[e]?.[u]?n[e][u]:t;return"active"!==u||l||(y=!1),(0,i.jsx)(C,{disabled:o||!l,help:c,label:d,name:u,onChange:s=>((s,t)=>{a({...n,[e]:{...n[e],[s]:t}})})(u,s),options:p,syncedValue:r?.[e]?.[u],requiresFeature:g,requiresSync:h,type:f,value:y},u)}))},T=({feature:t})=>{const{epioLogoUrl:a,getFeature:r}=j(),{isPoweredByEpio:l,reqStatusCode:o,reqStatusMessages:c,settingsSchema:u,summary:d,title:p}=r(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h3",{className:"ep-dashboard-heading",children:[(0,i.jsx)(e.RawHTML,{children:(0,w.safeHTML)(p)}),l?(0,i.jsx)("img",{alt:(0,s.__)("ElasticPress.io logo"),height:"20",src:a,width:"110"}):null]}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:(0,w.safeHTML)(d)}}),c.map(((e,s)=>(0,i.jsx)(n.Notice,{isDismissible:!1,status:2===o?"error":"warning",children:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,w.safeHTML)(e)}})},s))),(0,i.jsx)(F,{feature:t,settingsSchema:u})]})},N=({feature:e})=>{const{getFeature:t,featuresRequiringSync:n}=j(),{shortTitle:a,isAvailable:r}=t(e),l=r?"":(0,s.__)("Unavailable","elasticpress"),o=n.includes(e)?(0,s.__)("Sync required","elasticpress"):l;return(0,i.jsxs)("div",{className:"ep-feature-tab",children:[a,o?(0,i.jsx)("small",{className:"ep-feature-tab__status",children:o}):null]})},M=()=>{const{createNotice:t}=(0,e.useContext)(l),{features:a,isBusy:r,isModified:o,isSyncing:c,isSyncRequired:u,resetSettings:d,saveSettings:p,setIsSyncing:g}=j(),h=(0,e.useMemo)((()=>{const e=new URL(_);return e.searchParams.append("do_sync","features"),e.toString()}),[]),f=(0,s.__)("Could not save feature settings. Please try again.","elasticpress"),y=[{url:_,label:(0,s.__)("View sync status","elasticpress")}],m=(0,s.__)("Cannot save settings while a sync is in progress.","elasticpress"),x=(0,s.__)("Changes to feature settings discarded.","elasticpress"),b=[{url:h,label:(0,s.__)("Sync","elasticpress")}],v=(0,s.__)("If you choose to sync later some settings changes may not take effect until the sync is performed. Save and sync later?","elasticpress"),S=(0,s.__)("Saving these settings will begin re-syncing your content. Save and sync now?","elasticpress"),w=(0,s.__)("Feature settings saved. Starting sync…","elasticpress"),C=(0,s.__)("Feature settings saved.","elasticpress"),[F,M]=(0,e.useState)(!1),k=a.filter((e=>e.isVisible)).map((e=>({name:e.slug,title:(0,i.jsx)(N,{feature:e.slug})}))),L=e=>{if("is_syncing"===e.data)return t("error",m,{actions:y}),void g(!0);const n=`${(0,s.__)("ElasticPress: Could not save feature settings.","elasticpress")}\n${e.message}`;console.error(n),t("error",f)};return(0,i.jsxs)("form",{onReset:e=>{e.preventDefault(),d(),t("success",x)},onSubmit:async e=>{if(e.preventDefault(),!u||window.confirm(S)){M(!1);try{await p(),u?(t("success",w),window.location=h):t("success",C)}catch(e){L(e)}}},children:[(0,i.jsx)(n.Panel,{className:"ep-dashboard-panel",children:(0,i.jsxs)(n.PanelBody,{children:[c?(0,i.jsx)(n.Notice,{actions:y,isDismissible:!1,status:"warning",children:m}):null,(0,i.jsx)(n.TabPanel,{className:"ep-dashboard-tabs",orientation:"vertical",tabs:k,children:({name:e})=>(0,i.jsx)(T,{feature:e},e)})]})}),(0,i.jsxs)(n.Flex,{justify:"start",children:[(0,i.jsx)(n.FlexItem,{children:(0,i.jsx)(n.Button,{disabled:r||c,isBusy:r&&!F,type:"submit",variant:"primary",children:u?(0,s.__)("Save and sync now","elasticpress"):(0,s.__)("Save changes","elasticpress")})}),u?(0,i.jsx)(n.FlexItem,{children:(0,i.jsx)(n.Button,{disabled:r||c,isBusy:r&&F,onClick:async()=>{if(window.confirm(v)){M(!0);try{await p(!1),t("success",C,{actions:b})}catch(e){L(e)}}},type:"button",variant:"secondary",children:(0,s.__)("Save and sync later","elasticpress")})}):null,o?(0,i.jsx)(n.FlexItem,{children:(0,i.jsx)(n.Button,{disabled:r,type:"reset",variant:"tertiary",children:(0,s.__)("Discard changes","elasticpress")})}):null]})]})};const k=()=>(0,i.jsx)(u,{title:(0,s.__)("Features","elasticpress"),children:(0,i.jsxs)(S,{apiUrl:d,defaultSettings:y||f,epioLogoUrl:p,features:g,indexMeta:h,syncedSettings:f,syncUrl:_,children:[(0,i.jsx)("p",{children:(0,e.createInterpolateElement)((0,s.__)("ElasticPress Features add functionality to enhance search and queries on your site. You may choose to activate some or all of these Features depending on your needs. You can learn more about each Feature <a>here</a>.","elasticpress"),{a:(0,i.jsx)("a",{target:"_blank",href:"https://elasticpress.zendesk.com/hc/en-us/articles/16671825423501-Features",rel:"noreferrer"})})}),(0,i.jsx)(M,{})]})});if("function"===typeof e.createRoot){(0,e.createRoot)(document.getElementById("ep-dashboard")).render((0,i.jsx)(k,{}))}else(0,e.render)((0,i.jsx)(k,{}),document.getElementById("ep-dashboard"))}()}();