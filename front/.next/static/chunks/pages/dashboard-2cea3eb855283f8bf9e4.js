_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2wU4":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n("u9iw")}])},"5Yp1":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n("nKUr"),r=n("q1tI"),a=n.n(r),s=n("20a2");function o(e){localStorage.setItem("theme",e),document.documentElement.className=e}var i=n("g4pe"),l=n.n(i),u=n("ODXe"),d=n("YFqc"),f=n.n(d);function j(){var e=Object(r.useState)(!0),t=(e[0],e[1]);return Object(r.useEffect)((function(){localStorage.getItem("theme")?"theme-dark"===localStorage.getItem("theme")?t(!0):t(!1):t(!0)}),[]),Object(c.jsx)("a",{onClick:function(){"theme-dark"===localStorage.getItem("theme")?(o("theme-light"),t(!1)):(o("theme-dark"),t(!0))},children:Object(c.jsx)("i",{className:"fi-rr-opacity"})})}var h=n("5qq8");function p(){var e=Object(s.useRouter)(),t=a.a.useState(!0),n=Object(u.a)(t,2),r=n[0],o=n[1],i=e.pathname;a.a.useEffect((function(){"user"===JSON.parse(Object(h.a)(e)).role&&o(!1)}),[]);return Object(c.jsxs)("aside",{children:[Object(c.jsx)("div",{className:"/dashboard"==i?"active":"",children:Object(c.jsx)(f.a,{href:"/dashboard",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("i",{className:"fi-rr-calculator"}),Object(c.jsx)("span",{children:"Dashboard"})]})})}),r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"/settings"==i?"active":"",children:Object(c.jsx)(f.a,{href:"/settings",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("i",{className:"fi-rr-settings"}),Object(c.jsx)("span",{children:"Configuraci\xf3n"})]})})}),Object(c.jsx)("div",{className:"/products"==i?"active":"",children:Object(c.jsx)(f.a,{href:"/products",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("i",{className:"fi-rr-list-check"}),Object(c.jsx)("span",{children:"Products"})]})})}),Object(c.jsx)("div",{className:"/users"==i?"active":"",children:Object(c.jsx)(f.a,{href:"/users",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("i",{className:"fi-rr-users"}),Object(c.jsx)("span",{children:"USers"})]})})})]}):"",Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"#",onClick:function(){localStorage.removeItem("user"),e.push("/")},children:[Object(c.jsx)("i",{className:"fi-rr-sign-out"}),Object(c.jsx)("span",{children:"Salir"})]})}),Object(c.jsx)("div",{children:Object(c.jsx)(j,{})})]})}var b=n("b0oO");function v(e){var t=e.children;Object(s.useRouter)();return Object(r.useEffect)((function(){localStorage.getItem("theme")?"theme-dark"===localStorage.getItem("theme")?o("theme-dark"):"theme-light"===localStorage.getItem("theme")&&o("theme-light"):o("theme-dark")})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(c.jsx)("link",{rel:"stylesheet",href:"https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"})]}),Object(c.jsxs)("div",{className:"containerCustom",children:[Object(c.jsx)(b.a,{}),Object(c.jsx)(p,{}),Object(c.jsx)("div",{className:"main",children:t})]})]})}},KV1Y:function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{t=Math.abs(t),t=isNaN(t)?2:t;var r=e<0?"-":"",a=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),s=a.length>3?a.length%3:0;return r+(s?a.substr(0,s)+c:"")+a.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+c)+(t?n+Math.abs(e-a).toFixed(t).slice(2):"")}catch(o){console.log(o)}}function r(e){return e.toString().replace(/\./g,"").replace(/\,/g,".")}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,c){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,c).catch((function(e){0}));var r=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=c(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(r,e.as):o||a}}),[r,e.href,e.as]),f=d.href,j=d.as,h=e.children,p=e.replace,b=e.shallow,v=e.scroll,O=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var m=a.Children.only(h),x=m&&"object"===typeof m&&m.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),N=c(g,2),y=N[0],w=N[1],E=a.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);(0,a.useEffect)((function(){var e=w&&t&&(0,s.isLocalURL)(f),c="undefined"!==typeof O?O:n&&n.locale,r=l[f+"%"+j+(c?"%"+c:"")];e&&!r&&u(n,f,j,{locale:c})}),[j,f,w,O,t,n]);var k={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,c,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=c.indexOf("#")<0),t[r?"replace":"push"](n,c,{shallow:a,locale:i,scroll:o}))}(e,n,f,j,p,b,v,O)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(n,f,j,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var S="undefined"!==typeof O?O:n&&n.locale,I=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(j,S,n&&n.locales,n&&n.domainLocales);k.href=I||(0,s.addBasePath)((0,s.addLocale)(j,S,n&&n.defaultLocale))}return a.default.cloneElement(m,k)};t.default=d},u9iw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var c=n("nKUr"),r=n("o0o1"),a=n.n(r),s=n("HaE+"),o=n("q1tI"),i=n("5Yp1"),l=n("QojX"),u=n("3Z9Z"),d=n("JI6e"),f=n("KV1Y"),j=n("20a2"),h=n("5qq8");function p(){var e=Object(j.useRouter)(),t=Object(o.useState)([]),n=t[0],r=t[1],p=Object(o.useState)([]),b=p[0],v=p[1],O=Object(o.useState)([]),m=O[0],x=O[1],g=Object(o.useState)(""),N=g[0],y=g[1],w=Object(o.useState)("Escanea el producto"),E=w[0],k=w[1],S=Object(o.useState)(""),I=S[0],C=S[1],_=Object(o.useState)(""),M=_[0],L=_[1];Object(o.useEffect)(Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:console.log("upload 1 time"),console.log(n);case 4:case"end":return e.stop()}}),e)}))),[]);var q=function(){var t=Object(s.a)(a.a.mark((function t(){var n,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=JSON.parse(Object(h.a)(e)),t.next=4,fetch("http://localhost:3001/products",{headers:{"Content-Type":"application/json","x-access-token":n.token}});case 4:return t.next=6,t.sent.json();case 6:return c=t.sent,t.next=9,fetch("http://localhost:3001/settings",{headers:{"Content-Type":"application/json","x-access-token":n.token}});case 9:return t.next=11,t.sent.json();case 11:s=t.sent,r(c),v(s[0].dolar),x(s[0].moneda),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}();function R(){return(R=Object(s.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n.find((function(e){return e.codebar===N}));case 3:(c=e.sent)?(k("Encontrado!"),t.target.select(),C(c.title),L(Object(f.a)(c.price*b))):k(""===N?"Escanea el producto":"No existe");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)("h4",{className:"title-h1",children:"Lector de Precios"}),Object(c.jsx)("div",{className:"container",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:Object(c.jsx)("div",{style:{width:"70%"},children:Object(c.jsx)("div",{style:{textAlign:"center"},children:n.length>0?Object(c.jsx)(l.a.Group,{as:u.a,children:Object(c.jsxs)(d.a,{sm:12,children:[Object(c.jsx)(l.a.Control,{type:"text",name:"id",value:N,onChange:function(e){return y(e.target.value)},onKeyUp:function(e){return R.apply(this,arguments)},autoComplete:"off",autoFocus:"on",placeholder:"C\xf3digo"}),Object(c.jsx)("code",{className:"Escanea el producto"===E?null:"No existe"===E?"rojo":"verde",children:"Encontrado!"===E?"":E}),"Encontrado!"===E?Object(c.jsxs)("div",{className:"mt-4 find",children:[Object(c.jsx)("h1",{className:"titleProduct",children:I}),Object(c.jsxs)("h2",{className:"mt-4 priceProduct",children:[" ","Precio: ",Object(c.jsx)("b",{children:M})," ",Object(c.jsx)("span",{children:m})]})]}):""]})}):Object(c.jsx)("span",{className:"find",children:"Espere por favor..."})})})})]})})}},vNVm:function(e,t,n){"use strict";var c=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,r.useRef)(),l=(0,r.useState)(!1),u=c(l,2),d=u[0],f=u[1],j=(0,r.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var c=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:c}),n}(n),r=c.id,a=c.observer,s=c.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!s&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[j,d]};var r=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["2wU4",0,2,1,3]]]);