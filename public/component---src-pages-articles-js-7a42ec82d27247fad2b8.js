(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var i=a(1),n=a.n(i),r=a(226),o=(a(267),a(225)),l=a(228),c=a.n(l),s=r.b.div.withConfig({displayName:"articles__GreyBackground"})(["background-color:rgba(103,165,195,0.14901960784313725);position:fixed;top:0;left:0;z-index:-999999;height:100%;width:100%;"]),d=r.b.div.withConfig({displayName:"articles__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;padding:60px 30px;margin-bottom:60px;font-family:'Lato';color:snow;background-color:#323232;background-color:#25292b;"]),m=r.b.div.withConfig({displayName:"articles__ArticleTitle"})(["font-family:'Lato';font-size:20px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 30px;line-height:1.25;margin-bottom:7.5px;"]),u=r.b.div.withConfig({displayName:"articles__ArticleImage"})(["margin-bottom:30px;position:absolute;top:0;bottom:0;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),p=r.b.div.withConfig({displayName:"articles__TopText"})(["width:100%;text-align:center;padding:36px 45px;top:0;background-color:#25292b;color:white;"]),g=function(e){var t,a=e.data;return n.a.createElement(o.a,{style:{flexGrow:0,flexShrink:1,marginBottom:30,flexBasis:"33%",textDecoration:"none",color:"inherit"},to:"/articles/"+c()(a.title)},n.a.createElement("div",{className:"articleCard"},n.a.createElement("div",{style:{flex:"1 1 auto",position:"relative",marginBottom:15}},n.a.createElement(u,{background:a.relationships.field_main_image&&a.relationships.field_main_image.localFile.publicURL,className:"articleCardImage"},a.relationships.field_theme_image&&a.relationships.field_theme_image.localFile.publicURL)),n.a.createElement("div",{style:{paddingBottom:30}},n.a.createElement(m,null,a.title),n.a.createElement("p",{style:(t={marginBottom:7.5,color:"#2b2b2b",fontFamily:"Lato",fontSize:14,letterSpacing:"0.04em",lineHeight:1.25,marginLeft:30},t.marginBottom=22.5,t)},"Article by ",a.field_author&&a.field_author.processed),n.a.createElement("div",{className:"articleExcerpt"},a.field_article_summary&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.field_article_summary.processed}})))))};t.default=function(e){var t=e.data;return n.a.createElement("div",null,n.a.createElement(p,null,n.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"articles")),n.a.createElement(d,{dangerouslySetInnerHTML:{__html:t.taxonomyTermArticlesPage.description&&t.taxonomyTermArticlesPage.description.processed}}),n.a.createElement("div",{className:"articles"},n.a.createElement(s,null),t.allNodeArticle.edges.map(function(e,t){return n.a.createElement(g,{key:t,data:e.node})})))};var f="670148157"},225:function(e,t,a){"use strict";var i=a(1),n=a.n(i),r=a(0),o=a.n(r),l=a(224),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"b",function(){return l.push}),a(227),n.a.createContext({}),o.a.object,o.a.string.isRequired,o.a.func,o.a.func},227:function(e,t,a){var i;e.exports=(i=a(229))&&i.default||i},229:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(0),o=a.n(r),l=a(42),c=a(3),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return n.a.createElement(l.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},267:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-articles-js-7a42ec82d27247fad2b8.js.map