(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"faqQuery",function(){return m});var r=n(32),i=n.n(r),o=n(1),a=n.n(o),l=n(226),u=(n(234),n(228),n(225)),c=(n(230),l.b.div.withConfig({displayName:"qa__Row"})(["display:flex;flex-direction:row;"])),s=Object(l.b)(u.a).withConfig({displayName:"qa__ArrowContainer"})(["cursor:pointer;display:flex;flex-direction:column;color:orange;align-items:center;text-decoration:none;"]),d=l.b.div.withConfig({displayName:"qa__ArrowButton"})(["font-size:90px;line-height:90px;"]),p=l.b.div.withConfig({displayName:"qa__ArrowTitle"})([""]),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allNodeFaq,n=e.nodeFaq,r=n.title,i=n.field_question_summary,o=n.fields.slug,l=t.totalCount,u=-1;t.edges.map(function(e,t){e.node.fields.slug===o&&(u=t)});var f=null,m=null,y=u>0,v=u<l-1;return y&&(f=t.edges[u-1].node.fields.slug),v&&(m=t.edges[u+1].node.fields.slug),a.a.createElement(c,null,y&&a.a.createElement(s,{to:"/qa/"+f},a.a.createElement(d,null,"‹"),a.a.createElement(p,null,"PREVIOUS")),a.a.createElement("p",{style:{maxWidth:700,margin:"0 auto"},dangerouslySetInnerHTML:{__html:i?i.processed:"no summary (just so this doesn't cause build errors), title: "+r}}),v&&a.a.createElement(s,{to:"/qa/"+m},a.a.createElement(d,null,"›"),a.a.createElement(p,null,"NEXT")))},t}(a.a.Component);t.default=f;var m="276235754"},225:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(0),a=n.n(o),l=n(224),u=n.n(l);n.d(t,"a",function(){return u.a}),n.d(t,"b",function(){return l.push}),n(227),i.a.createContext({}),a.a.object,a.a.string.isRequired,a.a.func,a.a.func},227:function(e,t,n){var r;e.exports=(r=n(229))&&r.default||r},229:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),a=n.n(o),l=n(42),u=n(3),c=function(e){var t=e.location,n=u.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},230:function(e,t,n){"use strict";var r=n(231),i=n(62);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(i),o,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(r){var i=e[r];if(void 0===i)return"";if(null===i)return o(r,t);if(Array.isArray(i)){var a=[];return i.slice().forEach(function(e){void 0!==e&&a.push(n(r,e,a.length))}),a.join("&")}return o(r,t)+"="+o(i,t)}).filter(function(e){return e.length>0}).join("&"):""}},231:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},234:function(e,t,n){"use strict";n(112),n(64),n(241);var r=n(32),i=n.n(r),o=n(1),a=n.n(o),l=n(226),u=null,c=function(){if("undefined"==typeof document)return 0;if(null!==u)return u;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var r=e.offsetWidth;return n==r&&(r=t.clientWidth),document.body.removeChild(t),u=n-r};n.d(t,"a",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return y});var s={},d=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onVisibleChange(this.props.visible)},n.UNSAFE_componentWillReceiveProps=function(e){e.visible!==this.props.visible&&this.onVisibleChange(e.visible)},n.onVisibleChange=function(e){var t=Object.values(s).every(function(e){return!1===e});s[this.props.id]=e,t!==Object.values(s).every(function(e){return!1===e})&&(e?(document.body.classList.add("modal-open"),document.body.style.paddingRight=c()+"px",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!0,scrollBarWidth:c()}}))):(document.body.classList.remove("modal-open"),document.body.style.paddingRight="",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!1,scrollBarWidth:0}}))))},n.render=function(){var e=this.props,t=e.children,n=e.style,r=e.className;return a.a.createElement("div",{className:r,style:n},t)},t}(a.a.Component),p=Object(l.b)(d).withConfig({displayName:"overlay__Overlay"})(["background-color:rgba(255,255,255,0.92);position:fixed;left:0;top:0;height:100%;width:100%;z-index:999999999999999999999999;opacity:0;display:none;overflow-y:auto;",""],function(e){return e.visible&&Object(l.a)(["opacity:1;display:inline;"])}),f=(l.b.div.withConfig({displayName:"overlay__OverlayFilter"})(["margin-bottom:30px;"]),l.b.div.withConfig({displayName:"overlay__OverlayTitle"})(["text-align:center;text-transform:uppercase;font-weight:700;letter-spacing:0.35em;border:solid 1px;display:inline-block;padding:15px 30px;margin:0 auto;margin-bottom:30px;margin-top:30px;font-family:'Lato';font-size:30px;"])),m=l.b.div.withConfig({displayName:"overlay__OverlayBody"})(["opacity:1;margin:0 auto;margin-top:180px;padding-bottom:60px;display:flex;justify-content:center;flex-direction:column;",""],function(e){return e.wide?Object(l.a)(["width:90%;"]):Object(l.a)(["width:66%;"])}),y=l.b.div.withConfig({displayName:"overlay__OverlayHeader"})(["position:fixed;top:30px;left:0;width:100%;padding:0 12.5%;"])},240:function(e,t,n){var r=n(25),i=n(19),o=n(35).f;e.exports=function(e){return function(t){for(var n,a=i(t),l=r(a),u=l.length,c=0,s=[];u>c;)o.call(a,n=l[c++])&&s.push(e?[n,a[n]]:a[n]);return s}}},241:function(e,t,n){var r=n(12),i=n(240)(!1);r(r.S,"Object",{values:function(e){return i(e)}})}}]);
//# sourceMappingURL=component---src-templates-qa-js-fb60b7c14c6f7e0cec83.js.map