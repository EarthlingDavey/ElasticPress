!function(){var e={4184:function(e,s){var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=r.apply(null,t);a&&e.push(a)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)n.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(s,[]))||(e.exports=t)}()},5251:function(e,s,t){"use strict";var n=t(9196),r=60103;if(s.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),s.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var n,i={},o=null,d=null;for(n in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(d=s.ref),s)c.call(s,n)&&!l.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:r,type:e,key:o,ref:d,props:i,_owner:a.current}}s.jsx=o,s.jsxs=o},5893:function(e,s,t){"use strict";e.exports=t(5251)},9196:function(e){"use strict";e.exports=window.React}},s={};function t(n){var r=s[n];if(void 0!==r)return r.exports;var i=s[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,{a:s}),s},t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},function(){"use strict";var e=window.wp.element,s=window.wp.i18n,n=window.wp.components,r=window.wp.data,i=window.wp.notices,a=t(5893);const c=(0,e.createContext)(),{Fill:l,Slot:o}=(0,n.createSlotFill)("SettingsPageAction"),d=({children:s,title:t})=>{const{createNotice:d,removeNotice:u}=(0,r.useDispatch)(i.store),{notices:p}=(0,r.useSelect)((e=>({notices:e(i.store).getNotices()})),[]),y=(0,e.useMemo)((()=>({ActionSlot:l,createNotice:d,removeNotice:u})),[d,u]);return(0,a.jsx)(n.SlotFillProvider,{children:(0,a.jsx)(c.Provider,{value:y,children:(0,a.jsxs)("div",{className:"ep-settings-page",children:[(0,a.jsxs)("div",{className:"ep-settings-page__wrap",children:[(0,a.jsxs)("header",{className:"ep-settings-page__header",children:[(0,a.jsx)("h1",{className:"ep-settings-page__title",children:t}),(0,a.jsx)(o,{})]}),s]}),(0,a.jsx)(n.SnackbarList,{className:"ep-settings-page__snackbar-list",notices:p,onRemove:e=>u(e)})]})})})},u=()=>(0,e.useContext)(c);var p={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let y;const m=new Uint8Array(16);function _(){if(!y&&(y="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(m)}const g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).slice(1));function h(e,s=0){return g[e[s+0]]+g[e[s+1]]+g[e[s+2]]+g[e[s+3]]+"-"+g[e[s+4]]+g[e[s+5]]+"-"+g[e[s+6]]+g[e[s+7]]+"-"+g[e[s+8]]+g[e[s+9]]+"-"+g[e[s+10]]+g[e[s+11]]+g[e[s+12]]+g[e[s+13]]+g[e[s+14]]+g[e[s+15]]}var f=function(e,s,t){if(p.randomUUID&&!s&&!e)return p.randomUUID();const n=(e=e||{}).random||(e.rng||_)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,s){t=t||0;for(let e=0;e<16;++e)s[t+e]=n[e];return s}return h(n)},x=window.wp.date;const b=e=>{let s=0;return e.current_sync_item&&(s+=e.current_sync_item.found_items),s=e.sync_stack.reduce(((e,s)=>e+s.found_items),s),s+=e.totals.failed,s+=e.totals.skipped,s+=e.totals.synced,s},j=e=>{let s=0;return e.current_sync_item&&(s+=e.current_sync_item.failed,s+=e.current_sync_item.skipped,s+=e.current_sync_item.synced),s+=e.totals.failed,s+=e.totals.skipped,s+=e.totals.synced,s},C=(0,e.createContext)(),S=({apiUrl:t,children:n,defaultSyncHistory:r,defaultSyncTrigger:i,indexMeta:c,isEpio:l,nonce:o})=>{const{cancelIndex:d,index:u,indexStatus:p}=((t,n)=>{const r=(0,e.useRef)(new AbortController),i=(0,e.useRef)(null),a=(0,e.useCallback)((async e=>{const t=await e.text(),n=`${(0,s.__)("ElasticPress: Unexpected response.","elasticpress")}\n${t}`;if(!e.ok)throw 403===e.status?new Error((0,s.__)("Permission denied. Reload the sync page and try again.","elasticpress")):(console.error(n),new Error((0,s.__)("Something went wrong. Find troubleshooting steps at https://elasticpress.zendesk.com/hc/en-us/articles/20857557098125/.","elasticpress")));try{return JSON.parse(t)}catch(e){throw console.error(e.message),console.error(n),new Error((0,s.__)("Unable to parse response. Find troubleshooting steps at https://elasticpress.zendesk.com/hc/en-us/articles/20857557098125/.","elasticpress"))}}),[]),c=(0,e.useCallback)((()=>{i.current=null}),[]),l=(0,e.useCallback)(((e,s)=>(i.current=fetch(e,s).then(a).finally(c),i.current)),[c,a]);return{cancelIndex:(0,e.useCallback)((async()=>{r.current.abort(),r.current=new AbortController;const e=new URL(t),s={headers:{"X-WP-Nonce":n},method:"DELETE",signal:r.current.signal};return l(e,s)}),[t,n,l]),index:(0,e.useCallback)((async e=>{r.current.abort(),r.current=new AbortController;const s=new URL(t);Object.keys(e).forEach((t=>{e[t]&&s.searchParams.append(t,e[t])}));const i={headers:{"X-WP-Nonce":n},method:"POST",signal:r.current.signal};return l(s,i)}),[t,n,l]),indexStatus:(0,e.useCallback)((async()=>{r.current.abort(),r.current=new AbortController;const e=new URL(t),s={headers:{"X-WP-Nonce":n},method:"GET",signal:r.current.signal};return l(e,s)}),[t,n,l])}})(t,o),[y,m]=(0,e.useState)([]),[_,g]=(0,e.useState)([]),[h,S]=(0,e.useState)({isCli:!1,isComplete:!1,isDeleting:!1,isFailed:!1,isPaused:!1,isSyncing:!1,itemsProcessed:0,itemsTotal:100,syncStartDateTime:null,syncHistory:r,syncTrigger:i}),w=(0,e.useRef)(h),v=e=>{w.current={...w.current,...e},S((s=>({...s,...e})))},P=(0,e.useCallback)((e=>{g((s=>{const t=[...s];return Object.keys(e).forEach((s=>{if(!e[s].solution)return;const n=t.findIndex((e=>s===e.type));-1!==n?t[n].count+=e[s].count:t.push({...e[s],type:s})})),t}))}),[]),k=(0,e.useCallback)(((e,s)=>{const{isDeleting:t}=w.current,n=Array.isArray(e)?e:[e];for(const e of n)m((n=>[...n,{message:e,status:s,dateTime:(0,x.dateI18n)("Y-m-d H:i:s",new Date),isDeleting:t,id:f()}]))}),[]),N=(0,e.useCallback)((()=>{m([]),g([])}),[m]),T=(0,e.useCallback)((e=>{v({isComplete:!0,isPaused:!1,isSyncing:!1,syncHistory:[e,...w.current.syncHistory]}),document.querySelector('[data-ep-notice="no_sync"]')?.remove()}),[]),I=(0,e.useCallback)((e=>{if("AbortError"===e.name)return;e.message&&k(e.message,"error");const t=e.totals?[e.totals,...w.current.syncHistory]:w.current.syncHistory;k((0,s.__)("Sync failed","elasticpress"),"error"),v({isFailed:!0,isSyncing:!1,syncHistory:t})}),[k]),L=(0,e.useCallback)((()=>{const{isDeleting:e}=w.current,t=e?(0,s.sprintf)((0,s.__)("Your indexing process has been stopped by WP-CLI and your %s index could be missing content. To restart indexing, please click the Start button or use WP-CLI commands to perform the reindex. Please note that search results could be incorrect or incomplete until the reindex finishes.","elasticpress"),l?(0,s.__)("ElasticPress.io","elasticpress"):(0,s.__)("Elasticsearch","elasticpress")):(0,s.__)("Sync interrupted by WP-CLI command.","elasticpress");k(t,"info"),v({isSyncing:!1})}),[l,k]),D=(0,e.useCallback)((e=>{v({isCli:"cli"===e.method,isSyncing:!0,itemsProcessed:j(e),itemsTotal:b(e),syncStartDateTime:e.start_date_time,syncTrigger:e.trigger||null})}),[]),E=(0,e.useCallback)((e=>{const s=e.data?[e.data,...w.current.syncHistory]:w.current.syncHistory;v({syncHistory:s})}),[]),M=(0,e.useCallback)((e=>{const{isPaused:t,isSyncing:n}=w.current,{errors:r,message:i,status:a,totals:c=[],index_meta:l}=e.data;return new Promise((o=>{n&&(r&&P(r),"error"!==a?(i&&k(i,a),Array.isArray(c)?(D(l),l.should_interrupt_sync?L():t?k((0,s.__)("Sync paused","elasticpress"),"info"):o(l.method)):T(c)):I(e.data))}))}),[T,I,D,L,P,k]),F=(0,e.useCallback)((()=>{d().then(E).catch((e=>{if("AbortError"!==e?.name)throw e}))}),[d,E]),A=(0,e.useCallback)((()=>{p().then(M).then(A).catch(I)}),[p,I,M]),R=(0,e.useCallback)((e=>{u(e).then(M).then((s=>{"cli"===s?A():R(e)})).catch(I)}),[A,u,I,M]),H=(0,e.useCallback)((()=>{v({isPaused:!0,isSyncing:!0})}),[]),O=(0,e.useCallback)((e=>{v({isPaused:!1,isSyncing:!0}),R(e)}),[R]),U=(0,e.useCallback)((e=>{const{syncHistory:s}=w.current,t=!(!!s.length&&!e.put_mapping);v({isComplete:!1,isFailed:!1,isDeleting:t,isPaused:!1,isSyncing:!0}),v({itemsProcessed:0,syncStartDateTime:Date.now(),syncTrigger:e.trigger||null}),R(e)}),[R]),B=(0,e.useCallback)((()=>{v({isPaused:!1,isSyncing:!1}),F()}),[F]);(0,e.useEffect)((()=>{(()=>{const e=new URL(document.location.href);e.searchParams.delete("do_sync"),window.history.replaceState({},document.title,e)})(),c&&(D(c),"cli"===c.method?(A(),k((0,s.__)("WP CLI sync in progress","elasticpress"),"info")):(H(),k((0,s.__)("Sync paused","elasticpress"),"info")))}),[A,D,c,k,H,U]);const{isCli:W,isComplete:$,isDeleting:Z,isFailed:V,isPaused:Y,isSyncing:z,itemsProcessed:G,itemsTotal:X,syncHistory:q,syncStartDateTime:J,syncTrigger:K}=w.current,Q={clearLog:N,errorCounts:_,isCli:W,isComplete:$,isDeleting:Z,isFailed:V,isPaused:Y,isSyncing:z,itemsProcessed:G,itemsTotal:X,syncHistory:q,log:y,logMessage:k,pauseSync:H,resumeSync:O,startSync:U,stopSync:B,syncStartDateTime:J,syncTrigger:K};return(0,a.jsx)(C.Provider,{value:Q,children:n})},w=()=>(0,e.useContext)(C),{autoIndex:v,apiUrl:P,indexMeta:k,indexables:N,isEpio:T,nonce:I,postTypes:L,syncHistory:D,syncTrigger:E}=window.epDash,M=(0,e.createContext)(),F=({autoIndex:s,children:t,indexables:n,postTypes:c})=>{const{createNotice:l}=(0,r.useDispatch)(i.store),[o,d]=(0,e.useState)({include:[],indexables:[],lower_limit_object_id:null,offset:0,put_mapping:!1,post_type:[],upper_limit_object_id:null}),[u,p]=(0,e.useState)(!1),y=(0,e.useMemo)((()=>({args:o,autoIndex:s,createNotice:l,indexables:n,postTypes:c,setArgs:d,showLog:u,setShowLog:p})),[o,s,l,n,c,d,u,p]);return(0,a.jsx)(M.Provider,{value:y,children:t})},A=()=>(0,e.useContext)(M);var R=()=>{const{isPaused:e,isSyncing:t,logMessage:r,pauseSync:i,resumeSync:c,stopSync:l}=w(),{args:o}=A();return(0,a.jsxs)("div",{className:"ep-sync-controls",children:[t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Button,{onClick:()=>{l(),r((0,s.__)("Sync stopped","elasticpress"),"info")},variant:"primary",children:(0,s.__)("Stop sync","elasticpress")}),e?(0,a.jsx)(n.Button,{onClick:()=>{c(o),r((0,s.__)("Resuming sync…","elasticpress"),"info")},variant:"secondary",children:(0,s.__)("Resume sync","elasticpress")}):(0,a.jsx)(n.Button,{onClick:()=>{i(),r((0,s.__)("Pausing sync…","elasticpress"),"info")},variant:"secondary",children:(0,s.__)("Pause sync","elasticpress")})]}):(0,a.jsx)(n.Button,{variant:"primary",type:"submit",children:(0,s.__)("Start sync","elasticpress")}),(0,a.jsx)(n.Button,{href:"https://elasticpress.zendesk.com/hc/en-us/articles/5205632443533",target:"_blank",variant:"link",children:(0,s.__)("Learn more about Sync","elasticpress")})]})},H=()=>{const{isSyncing:e}=w(),{args:t,indexables:r,setArgs:i}=A();return r.length>1?(0,a.jsxs)("fieldset",{className:"ep-sync-advanced-control",children:[(0,a.jsx)("legend",{className:"ep-sync-advanced-control__label",children:(0,s.__)("Content to sync","elasticpress")}),r.map((([s,r])=>(0,a.jsx)(n.CheckboxControl,{checked:t.indexables?.includes(s),disabled:e,indeterminate:!t.indexables.length,label:r,onChange:e=>((e,s)=>{const n=t.indexables?[...t.indexables]:[];s?n.push(e):n.splice(n.indexOf(e),1);const r=!n.length||n.includes("post")?t.post_type:[];i({...t,indexables:n,post_type:r})})(s,e)},s)))]}):null},O=()=>{const{isSyncing:e}=w(),{args:t,postTypes:r,setArgs:i}=A();return r.length>1?(0,a.jsxs)("fieldset",{className:"ep-sync-advanced-control",children:[(0,a.jsx)("legend",{className:"ep-sync-advanced-control__label",children:(0,s.__)("Post types to sync","elasticpress")}),r.map((([s,r])=>(0,a.jsx)(n.CheckboxControl,{checked:t.post_type.includes(s),disabled:e,indeterminate:!t.post_type.length,label:r,onChange:e=>((e,s)=>{const n=[...t.post_type];s?n.push(e):n.splice(n.indexOf(e),1),i({...t,post_type:n})})(s,e)},s)))]}):null},U=()=>{const{args:e}=A();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{}),!e.indexables.length||e.indexables.includes("post")?(0,a.jsx)(O,{}):null]})},B=window.wp.compose,W=window.wp.dom,$=()=>{const{errorCounts:t}=w();return(0,a.jsx)("div",{className:"ep-sync-errors",children:t.length?(0,a.jsxs)("table",{className:"ep-sync-errors__table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,s.__)("Count","elasticpress")}),(0,a.jsx)("th",{children:(0,s.__)("Error type","elasticpress")})]})}),t.map((s=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"ep-sync-errors__count",children:s.count}),(0,a.jsxs)("td",{children:[s.type,(0,a.jsx)(e.RawHTML,{className:"ep-sync-errors__solution",children:(0,W.safeHTML)(s.solution)})]})]},s.type)))]}):(0,a.jsx)("p",{children:(0,s.__)("No errors found in the log.","elasticpress")})})},Z=()=>{const{log:s}=w();return(0,a.jsx)("div",{className:"ep-sync-messages",children:s.map((s=>(0,a.jsxs)(e.Fragment,{children:[(0,a.jsx)("div",{className:"ep-sync-messages__line-number",role:"presentation",children:(0,x.dateI18n)("Y-m-d H:i:s",s.dateTime)}),(0,a.jsx)("div",{className:`ep-sync-messages__message ep-sync-messages__message--${s.status}`,children:s.message})]},s.id)))})},V=()=>{const{clearLog:t,errorCounts:r,log:i}=w(),{createNotice:c}=u(),l=(0,e.useMemo)((()=>r.reduce(((e,s)=>e+s.count),0)),[r]),o=(0,e.useMemo)((()=>i.map((e=>`${e.dateTime} ${e.message}`)).join("\n")),[i]),d=(0,B.useCopyToClipboard)(o,(()=>{c("info",(0,s.__)("Copied log to clipboard.","elasticpress"))})),p=[{name:"full",title:(0,s.__)("Log","elasticpress")},{name:"error",title:(0,s.sprintf)((0,s.__)("Errors (%d)","elasticpress"),l)}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TabPanel,{className:"ep-sync-log",initialTabName:l>0?"error":"full",tabs:p,children:({name:e})=>{switch(e){case"full":return(0,a.jsx)(Z,{});case"error":return(0,a.jsx)($,{});default:return null}}}),(0,a.jsxs)(n.Flex,{justify:"start",children:[(0,a.jsx)(n.FlexItem,{children:(0,a.jsx)(n.Button,{disabled:!i.length,onClick:()=>{t()},variant:"secondary",children:(0,s.__)("Clear log","elasticpress")})}),(0,a.jsx)(n.FlexItem,{children:(0,a.jsx)(n.Button,{disabled:!i.length,ref:d,variant:"secondary",children:(0,s.__)("Copy log to clipboard","elasticpress")})})]})]})},Y=()=>{const{isSyncing:e}=w(),{args:t,setArgs:r}=A();return(0,a.jsx)("div",{className:"ep-sync-advanced-control",children:(0,a.jsx)(n.FormTokenField,{disabled:e,label:(0,s.__)("Object IDs","elasticpress"),onChange:e=>{r({...t,include:e})},saveTransform:e=>{const s=parseInt(e,10);return s?s.toString():""},value:t.include})})},z=()=>{const{isSyncing:e}=w(),{args:t,setArgs:r}=A();return(0,a.jsxs)(n.Flex,{className:"ep-sync-advanced-control",justify:"start",children:[(0,a.jsx)(n.FlexItem,{grow:"2",children:(0,a.jsx)(n.TextControl,{disabled:e,help:(0,s.__)("Sync objects with an ID of this number or higher.","elasticpress"),label:(0,s.__)("Lower object ID","elasticpress"),max:t.upper_limit_object_id,min:"0",onChange:e=>{const s=e?Math.max(0,e):e;r({...t,lower_limit_object_id:s})},type:"number",value:t.lower_limit_object_id})}),(0,a.jsx)(n.FlexItem,{grow:"2",children:(0,a.jsx)(n.TextControl,{disabled:e,help:(0,s.__)("Sync objects with an ID of this number or lower.","elasticpress"),label:(0,s.__)("Higher object ID","elasticpress"),min:t.lower_limit_object_id,onChange:e=>{const s=e?Math.max(0,e):e;r({...t,upper_limit_object_id:s})},type:"number",value:t.upper_limit_object_id})})]})},G=()=>{const{isSyncing:e}=w(),{args:t,setArgs:r}=A();return(0,a.jsx)(n.TextControl,{className:"ep-sync-advanced-control",disabled:e,help:(0,s.__)("Specify the number of objects to skip during syncing.","elasticpress"),label:(0,s.__)("Skip objects","elasticpress"),onChange:e=>r({...t,offset:e}),type:"number",value:t.offset})},X=()=>{const[t,r]=(0,e.useState)("all"),{isSyncing:i}=w(),{args:c,setArgs:l}=A();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.RadioControl,{className:"ep-sync-advanced-control",disabled:i,label:(0,s.__)("Objects to sync","elasticpress"),onChange:e=>{let{include:s,lower_limit_object_id:t,offset:n,upper_limit_object_id:i}=c;switch(e){case"include":n=0,t=null,i=null;break;case"limits":n=0,s=[];break;default:s=[],t=null,i=null}l({...c,include:s,lower_limit_object_id:t,offset:n,upper_limit_object_id:i}),r(e)},options:[{label:"All objects",value:"all"},{label:(0,s.__)("Specific IDs","elasticpress"),value:"include"},{label:(0,s.__)("A range of IDs","elasticpress"),value:"limits"}],selected:t}),"all"===t?(0,a.jsx)(G,{}):null,"include"===t?(0,a.jsx)(Y,{}):null,"limits"===t?(0,a.jsx)(z,{}):null]})},q=t(4184),J=t.n(q),K=window.wp.primitives,Q=()=>(0,a.jsx)(K.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,a.jsx)(K.Path,{d:"M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"})}),ee=()=>{const{isCli:t,isComplete:r,isFailed:i,isPaused:c,itemsProcessed:l,itemsTotal:o,syncStartDateTime:d,syncTrigger:u}=w(),p=(0,e.useMemo)((()=>i?(0,s.__)("Sync failed","elasticpress"):r?(0,s.__)("Sync complete","elasticpress"):c?(0,s.__)("Sync paused","elasticpress"):t?(0,s.__)("WP CLI sync in progress","elasticpress"):(0,s.__)("Sync in progress","elasticpress")),[t,r,i,c]),y=o?Math.floor(l/o*100):100,m=(0,e.useMemo)((()=>{if(t)return(0,s.__)("Started manually from WP CLI at <time>%s</time>.","elasticpress");switch(u){case"features":return(0,s.__)("Started automatically after a change to feature settings at <time>%s</time>.","elasticpress");case"install":return(0,s.__)("Started automatically after installing the ElasticPress plugin at <time>%s</time>.","elasticpress");case"manual":return(0,s.__)("Started manually from the Sync page at <time>%s</time>.","elasticpress");case"synonyms-error":return(0,s.__)("Started manually from an error on the Synonyms Settings page at <time>%s</time>.","elasticpress");case"upgrade":return(0,s.__)("Started automatically after updating the ElasticPress plugin at <time>%s</time>.","elasticpress");default:return(0,s.__)("Started on <time>%s</time>.","elasticpress")}}),[t,u]);return(0,a.jsxs)("div",{className:J()("ep-sync-progress",{"ep-sync-progress--syncing":!c&&!r&&!i}),children:[(0,a.jsx)(n.Icon,{icon:Q}),(0,a.jsxs)("div",{className:"ep-sync-progress__details",children:[(0,a.jsx)("strong",{children:p}),d?(0,e.createInterpolateElement)((0,s.sprintf)(m,(0,x.dateI18n)("g:ia l F jS, Y",d)),{time:(0,a.jsx)("time",{dateTime:(0,x.dateI18n)("c",d)})}):null]}),(0,a.jsx)("div",{className:"ep-sync-progress__progress-bar",children:(0,a.jsx)("div",{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":y,className:J()("ep-sync-progress-bar",{"ep-sync-progress-bar--complete":r,"ep-sync-progress-bar--failed":i}),role:"progressbar",children:(0,a.jsx)("div",{className:"ep-sync-progress-bar__progress",style:{minWidth:`${y}%`}})})})]})},se=()=>{const{isDeleting:e,isSyncing:t}=w(),{args:r,setArgs:i}=A();return(0,a.jsxs)(a.Fragment,{children:[r.put_mapping?(0,a.jsx)(n.Notice,{isDismissible:!1,status:"warning",children:(0,s.__)("Search results could be out of date or returned in different order while the sync completes.","elasticpress")}):null,(0,a.jsx)(n.CheckboxControl,{className:"ep-sync-delete",disabled:t,checked:r.put_mapping,help:(0,s.__)("All indexed data on ElasticPress will be deleted without affecting anything on your WordPress website. This may take a few hours depending on the amount of content that needs to be synced and indexed. While this is happening, searches will use the default WordPress results.","elasticpress"),indeterminate:t&&e&&!r.put_mapping,label:(0,s.__)("Delete all data and start fresh sync","elasticpress"),onChange:e=>i({...r,put_mapping:e})})]})},te=()=>(0,a.jsx)(K.SVG,{version:"1.1",xmlns:"https://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)(K.Path,{d:"M 12 20.8 C 16.8 20.8 20.8 16.9 20.8 12 C 20.8 7.2 16.9 3.2 12 3.2 C 7.2 3.2 3.2 7.1 3.2 12 C 3.2 16.8 7.2 20.8 12 20.8 Z M 12 4.8 C 16 4.8 19.2 8.1 19.2 12 C 19.2 16 16 19.2 12 19.2 C 8 19.2 4.8 15.9 4.8 12 C 4.8 8 8 4.8 12 4.8 Z M 13 7 L 11 7 L 11 13 L 13 13 L 13 7 Z M 13 15 L 11 15 L 11 17 L 13 17 L 13 15 Z"})}),ne=()=>(0,a.jsxs)(K.SVG,{version:"1.1",xmlns:"https://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,a.jsx)(K.Path,{d:"M 12 3.25 C 9.679 3.25 7.454 4.172 5.813 5.813 C 4.172 7.454 3.25 9.679 3.25 12 C 3.25 14.32 4.172 16.546 5.813 18.187 C 7.454 19.828 9.679 20.75 12 20.75 C 14.321 20.75 16.546 19.828 18.187 18.187 C 19.828 16.546 20.75 14.32 20.75 12 C 20.75 9.679 19.828 7.454 18.187 5.813 C 16.546 4.172 14.321 3.25 12 3.25 Z M 4.75 12 C 4.75 11.048 4.938 10.105 5.302 9.225 C 5.666 8.346 6.2 7.547 6.874 6.873 C 7.547 6.2 8.346 5.666 9.226 5.302 C 10.105 4.937 11.048 4.75 12 4.75 C 12.952 4.75 13.895 4.937 14.775 5.302 C 15.654 5.666 16.453 6.2 17.127 6.873 C 17.8 7.547 18.334 8.346 18.698 9.225 C 19.063 10.105 19.25 11.048 19.25 12 C 19.25 13.923 18.486 15.767 17.127 17.126 C 15.767 18.486 13.923 19.25 12 19.25 C 10.077 19.25 8.233 18.486 6.874 17.126 C 5.514 15.767 4.75 13.923 4.75 12 Z"}),(0,a.jsx)(K.Path,{d:"M 15.974 8 L 10.59 15.217 L 7.769 13.094 L 7 14.113 L 10.846 17 L 17 8.764 L 15.974 8 Z"})]}),re=({failures:t,method:r,stateDatetime:i,status:c,trigger:l})=>{const o=(0,e.useMemo)((()=>(0,x.dateI18n)("l F j, Y g:ia",i)),[i]),d=(0,e.useMemo)((()=>{switch(c){case"failed":return(0,s.__)("Failed.","elasticpress");case"with_errors":return t?(0,s.sprintf)((0,s._n)("Completed with %d error.","Completed with %d errors.",t,"elasticpress"),t):(0,s.__)("Completed with errors.","elasticpress");case"aborted":return(0,s.__)("Stopped.","elasticpress");case"success":return(0,s.__)("Completed successfully.","elasticpress");default:return(0,s.__)("Completed.","elasticpress")}}),[t,c]),u=(0,e.useMemo)((()=>{if("cli"===r)return(0,s.__)("Manual sync from WP CLI.","elasticpress");switch(l){case"features":return(0,s.__)("Automatic sync after settings change.","elasticpress");case"install":return(0,s.__)("Automatic sync after installation.","elasticpress");case"synonyms-error":return(0,s.__)("Manual sync following an error in synonyms settings.","elasticpress");case"manual":return(0,s.__)("Manual sync from Sync Settings.","elasticpress");case"upgrade":return(0,s.__)("Automatic sync after plugin update.","elasticpress");default:return null}}),[r,l]),p=(0,e.useMemo)((()=>"failed"===c||"with_errors"===c||"aborted"===c),[c]),y=(0,e.useMemo)((()=>"success"===c),[c]);return(0,a.jsxs)("div",{className:J()("ep-previous-sync",{"is-error":p,"is-success":y}),children:[(0,a.jsx)(n.Icon,{icon:p?te:ne}),(0,a.jsx)("div",{className:"ep-previous-sync__title",children:u?(0,s.sprintf)((0,s._x)("%1$s — %2$s","Sync info","elasticpress"),o,u):o}),(0,a.jsx)("div",{className:"ep-previous-sync__help",children:d})]})},ie=()=>{const{syncHistory:e}=w(),s=e.slice(0,5);return(0,a.jsx)("ol",{className:"ep-sync-history",children:s.map((e=>(0,a.jsx)("li",{children:(0,a.jsx)(re,{failures:e.failed,method:e.method,stateDatetime:e.start_date_time,status:e.final_status,trigger:e.trigger})},e.start_date_time)))})},ae=()=>{const{createNotice:t}=u(),{errorCounts:r,isComplete:i,isEpio:c,isSyncing:l,logMessage:o,startSync:d,syncHistory:p,syncTrigger:y}=w(),{args:m,autoIndex:_}=A(),[g,h]=(0,e.useState)(!1),[f,x]=(0,e.useState)(0);return(0,e.useEffect)((()=>{if(i){const e=r.reduce(((e,s)=>e+s.count),0);t("success",(0,s.__)("Sync completed.","elasticpress")),e>f&&h(!0),x(e)}}),[t,f,r,i]),(0,e.useEffect)((()=>{_&&(d({put_mapping:!0,trigger:y}),o((0,s.__)("Starting delete and sync…","elasticpress"),"info"))}),[_,o,d,y]),(0,a.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const{put_mapping:t}=m,n=!p.length||t,r={...m,put_mapping:n,trigger:"manual"};d(r),o((0,s.__)("Starting sync…","elasticpress"),"info")},children:[(0,a.jsx)("p",{children:p.length?(0,s.__)("If you are missing data in your search results or have recently added custom content types to your site, you should run a sync to reflect these changes.","elasticpress"):(0,s.sprintf)((0,s.__)("Run a sync to index your existing content %s. Once syncing finishes, your site is officially supercharged.","elasticpress"),c?(0,s.__)("on ElasticPress.io","elasticpress"):(0,s.__)("in Elasticsearch","elasticpress"))}),(0,a.jsxs)(n.Panel,{className:"ep-sync-panel",children:[(0,a.jsxs)(n.PanelBody,{className:"ep-sync-panel__controls",children:[l||i?(0,a.jsx)(ee,{}):null,(0,a.jsx)(R,{}),p.length?(0,a.jsx)(se,{}):null]}),(0,a.jsx)(n.PanelBody,{onToggle:e=>{h(e)},opened:g,title:"Log",children:(0,a.jsx)(V,{})}),p.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.PanelBody,{className:"ep-sync-panel__advanced",initialOpen:!1,title:(0,s.__)("Advanced options","elasticpress"),children:[(0,a.jsx)(U,{}),(0,a.jsx)(X,{})]}),(0,a.jsx)(n.PanelBody,{title:(0,s.__)("Sync history","elasticpress"),children:(0,a.jsx)(ie,{})})]}):null]})]})};const ce=()=>(0,a.jsx)(S,{apiUrl:P,defaultSyncHistory:D,defaultSyncTrigger:E,indexMeta:k,isEpio:T,nonce:I,children:(0,a.jsx)(F,{autoIndex:v,indexables:N,postTypes:L,children:(0,a.jsx)(d,{title:(0,s.__)("Sync Settings","elasticpress"),children:(0,a.jsx)(ae,{})})})});if("function"===typeof e.createRoot){(0,e.createRoot)(document.getElementById("ep-sync")).render((0,a.jsx)(ce,{}))}else(0,e.render)((0,a.jsx)(ce,{}),document.getElementById("ep-sync"))}()}();