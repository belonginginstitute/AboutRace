(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,n){"use strict";n(121)("link",function(e){return function(t){return e(this,"a","href",t)}})},121:function(e,t,n){var i=n(12),r=n(13),a=n(35),l=/"/g,o=function(e,t,n,i){var r=String(a(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(i).replace(l,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},125:function(e,t,n){"use strict";n(110);var i=n(1),r=n.n(i),a=n(87),l=n(89),o=n(90),c=n.n(o),s=a.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),p=a.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),d=a.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),u=function(e){var t=e.clip,n=e.link;return r.a.createElement(s,null,n?r.a.createElement(l.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+c()(t.title)},r.a.createElement(d,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),r.a.createElement(p,null,t.title)):r.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,i=t.allNodeClip.edges;return n&&(i=i.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),r.a.createElement("div",{style:{padding:"0 30px"}},i.map(function(e,t){return r.a.createElement(u,{key:"clip-"+t,clip:e.node,link:!0})}))}},256:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return m}),n(57),n(71);var i=n(32),r=n.n(i),a=n(1),l=n.n(a),o=n(87),c=(n(89),n(90),n(125)),s=n(279),p=n(95),d=n(97),u=o.b.div.withConfig({displayName:"clips__ClipsIntro"})(["font-size:24px;margin-bottom:60px;line-height:1.5;"]),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSelected=function(e){var t=d.parse(window.location.search);t.episode=e,d.stringify(Object.assign({},t)),n.setState({selected:e})},n.state={selected:"all"},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=d.parse(window.location.search).episode||"all";this.setState({selected:e})},n.render=function(){var e=this.state.selected,t=this.props,n=t.data,i=t.location;return l.a.createElement(p.a,{location:i},l.a.createElement("div",{className:"darkwrapper"},l.a.createElement(s.a,{selected:e,onSelected:this.onSelected}),l.a.createElement(u,null,"Various clips from the film featured here. Buy a copy of the film here."),l.a.createElement(c.a,{data:n,selected:e})))},t}(a.Component);t.default=f;var m="1746479201"}}]);
//# sourceMappingURL=component---src-pages-clips-js-dd92119e6d41e8e9dd6f.js.map