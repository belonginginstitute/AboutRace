(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"faqQuery",function(){return y});var r=n(32),o=n.n(r),i=n(1),a=n.n(i),c=n(225),l=(n(249),n(228),n(227)),s=(n(235),c.b.div.withConfig({displayName:"qa__Row"})(["display:flex;flex-direction:row;"])),u=Object(c.b)(l.a).withConfig({displayName:"qa__ArrowContainer"})(["cursor:pointer;display:flex;flex-direction:column;color:orange;align-items:center;text-decoration:none;"]),d=c.b.div.withConfig({displayName:"qa__ArrowButton"})(["font-size:90px;line-height:90px;"]),p=c.b.div.withConfig({displayName:"qa__ArrowTitle"})([""]),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allNodeFaq,n=e.nodeFaq,r=n.title,o=n.field_question_summary,i=n.fields.slug,c=t.totalCount,l=-1;t.edges.map(function(e,t){e.node.fields.slug===i&&(l=t)});var f=null,y=null,m=l>0,h=l<c-1;return m&&(f=t.edges[l-1].node.fields.slug),h&&(y=t.edges[l+1].node.fields.slug),a.a.createElement(s,null,m&&a.a.createElement(u,{to:"/qa/"+f},a.a.createElement(d,null,"‹"),a.a.createElement(p,null,"PREVIOUS")),a.a.createElement("p",{style:{maxWidth:700,margin:"0 auto"},dangerouslySetInnerHTML:{__html:o?o.processed:"no summary (just so this doesn't cause build errors), title: "+r}}),h&&a.a.createElement(u,{to:"/qa/"+y},a.a.createElement(d,null,"›"),a.a.createElement(p,null,"NEXT")))},t}(a.a.Component);t.default=f;var y="276235754"},227:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(1),o=n.n(r),i=n(0),a=n.n(i),c=n(226),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"c",function(){return c.push}),n(229);var s=o.a.createContext({}),u=function(e){return o.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},229:function(e,t,n){var r;e.exports=(r=n(231))&&r.default||r},231:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),c=n(42),l=n(3),s=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return o.a.createElement(c.a,{location:t,pageResources:n})};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},232:function(e,t,n){"use strict";var r=null;t.a=function(){if("undefined"==typeof document)return 0;if(null!==r)return r;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var o=e.offsetWidth;return n===o&&(o=t.clientWidth),document.body.removeChild(t),r=n-o}},235:function(e,t,n){"use strict";const r=n(237),o=n(238);function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function a(e,t){return t.decode?o(e):e}function c(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,i]=o.replace(/\+/g," ").split("=");i=void 0===i?null:a(i,t),n(a(e,t),i,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=c,t.parse=l,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("");case"bracket":return(t,n)=>null===n?[i(t,e),"[]"].join(""):[i(t,e),"[]=",i(n,e)].join("");default:return(t,n)=>null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(r=>{const o=e[r];if(void 0===o)return"";if(null===o)return i(r,t);if(Array.isArray(o)){const e=[];for(const t of o.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return i(r,t)+"="+i(o,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:l(c(e),t)}))},237:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},238:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),c=0;c<i.length;c++){var l=i[c];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},249:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return y}),n(111),n(64),n(253);var r=n(32),o=n.n(r),i=n(1),a=n.n(i),c=n(225),l=n(232),s={},u=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onVisibleChange(this.props.visible)},n.UNSAFE_componentWillReceiveProps=function(e){e.visible!==this.props.visible&&this.onVisibleChange(e.visible)},n.onVisibleChange=function(e){var t=Object.values(s).every(function(e){return!1===e});s[this.props.id]=e,t!==Object.values(s).every(function(e){return!1===e})&&(e?(document.body.classList.add("modal-open"),document.body.style.paddingRight=Object(l.a)()+"px",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!0,scrollBarWidth:Object(l.a)()}}))):(document.body.classList.remove("modal-open"),document.body.style.paddingRight="",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!1,scrollBarWidth:0}}))))},n.render=function(){var e=this.props,t=e.children,n=e.style,r=e.className;return a.a.createElement("div",{className:r,style:n},t)},t}(a.a.Component),d=Object(c.b)(u).withConfig({displayName:"overlay__Overlay"})(["background-color:rgba(255,255,255,0.92);position:fixed;left:0;top:0;height:100%;width:100%;z-index:999999999999999999999999;opacity:0;display:none;overflow-y:auto;",""],function(e){return e.visible&&Object(c.a)(["opacity:1;display:inline;"])}),p=(c.b.div.withConfig({displayName:"overlay__OverlayFilter"})(["margin-bottom:30px;"]),c.b.div.withConfig({displayName:"overlay__OverlayTitle"})(["text-align:center;text-transform:uppercase;font-weight:700;letter-spacing:0.35em;border:solid 1px;display:inline-block;padding:15px 30px;margin:0 auto;margin-bottom:30px;margin-top:30px;font-family:'Lato';font-size:30px;"])),f=c.b.div.withConfig({displayName:"overlay__OverlayBody"})(["opacity:1;margin:0 auto;margin-top:180px;padding-bottom:60px;display:flex;justify-content:center;flex-direction:column;",""],function(e){return e.wide?Object(c.a)(["width:90%;"]):Object(c.a)(["width:66%;"])}),y=c.b.div.withConfig({displayName:"overlay__OverlayHeader"})(["position:fixed;top:30px;left:0;width:100%;padding:0 12.5%;"])},253:function(e,t,n){var r=n(12),o=n(254)(!1);r(r.S,"Object",{values:function(e){return o(e)}})},254:function(e,t,n){var r=n(25),o=n(19),i=n(33).f;e.exports=function(e){return function(t){for(var n,a=o(t),c=r(a),l=c.length,s=0,u=[];l>s;)i.call(a,n=c[s++])&&u.push(e?[n,a[n]]:a[n]);return u}}}}]);
//# sourceMappingURL=component---src-templates-qa-js-e4d74f0aab3ae0d9edc7.js.map