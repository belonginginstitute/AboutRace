(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return f}),n(63),n(111);var r=n(32),i=n.n(r),o=n(1),a=n.n(o),l=n(226),c=(n(225),n(228),n(235)),u=n(243),s=n(230),d=l.b.div.withConfig({displayName:"clips__ClipsIntro"})(["font-size:24px;margin-bottom:60px;line-height:1.5;"]),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSelected=function(e){var t=s.parse(window.location.search);t.episode=e,s.stringify(Object.assign({},t)),n.setState({selected:e})},n.state={selected:"all"},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=s.parse(window.location.search).episode||"all";this.setState({selected:e})},n.render=function(){var e=this.state.selected,t=this.props.data;return a.a.createElement("div",{className:"darkwrapper"},a.a.createElement(u.a,{selected:e,onSelected:this.onSelected}),a.a.createElement(d,null,"Various clips from the film featured here. Buy a copy of the film here."),a.a.createElement(c.a,{data:t,selected:e}))},t}(o.Component);t.default=p;var f="1746479201"},225:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(0),a=n.n(o),l=n(224),c=n.n(l);n.d(t,"a",function(){return c.a}),n.d(t,"b",function(){return l.push}),n(227),i.a.createContext({}),a.a.object,a.a.string.isRequired,a.a.func,a.a.func},227:function(e,t,n){var r;e.exports=(r=n(229))&&r.default||r},229:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),a=n.n(o),l=n(42),c=n(3),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},230:function(e,t,n){"use strict";var r=n(231),i=n(62);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(i),o,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(r){var i=e[r];if(void 0===i)return"";if(null===i)return o(r,t);if(Array.isArray(i)){var a=[];return i.slice().forEach(function(e){void 0!==e&&a.push(n(r,e,a.length))}),a.join("&")}return o(r,t)+"="+o(i,t)}).filter(function(e){return e.length>0}).join("&"):""}},231:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},232:function(e,t,n){"use strict";n(236)("link",function(e){return function(t){return e(this,"a","href",t)}})},235:function(e,t,n){"use strict";n(232);var r=n(1),i=n.n(r),o=n(226),a=n(225),l=n(228),c=n.n(l),u=o.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),s=o.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),d=o.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),p=function(e){var t=e.clip,n=e.link;return i.a.createElement(u,null,n?i.a.createElement(a.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+c()(t.title)},i.a.createElement(d,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),i.a.createElement(s,null,t.title)):i.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,r=t.allNodeClip.edges;return n&&(r=r.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),i.a.createElement("div",{style:{padding:"0 30px"}},r.map(function(e,t){return i.a.createElement(p,{key:"clip-"+t,clip:e.node,link:!0})}))}},236:function(e,t,n){var r=n(12),i=n(13),o=n(34),a=/"/g,l=function(e,t,n,r){var i=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},243:function(e,t,n){"use strict";var r=n(32),i=n.n(r),o=n(1),a=n.n(o),l=n(226),c=l.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),u=l.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),s=l.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,r=e.color;return a.a.createElement(c,{color:r},"Sort by: ",a.a.createElement(u,{selected:"all"===t,onClick:function(){return n("all")}},"All"),a.a.createElement(u,{selected:"1"===t,onClick:function(){return n("1")}},a.a.createElement(s,null,"Episode One:")," The Difference Between Us"),a.a.createElement(u,{selected:"2"===t,onClick:function(){return n("2")}},a.a.createElement(s,null,"Episode Two:")," The Story We Tell"),a.a.createElement(u,{selected:"3"===t,onClick:function(){return n("3")}},a.a.createElement(s,null,"Episode Three:")," The House We Live In"))},t}(o.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-clips-js-164605f2eb5c20ef0dd8.js.map