_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2wU4":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n("u9iw")}])},KV1Y:function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{t=Math.abs(t),t=isNaN(t)?2:t;var s=e<0?"-":"",a=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),r=a.length>3?a.length%3:0;return s+(r?a.substr(0,r)+c:"")+a.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+c)+(t?n+Math.abs(e-a).toFixed(t).slice(2):"")}catch(o){console.log(o)}}function s(e){return e.toString().replace(/\./g,"").replace(/\,/g,".")}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}))},u9iw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var c=n("o0o1"),s=n.n(c),a=n("nKUr"),r=n("HaE+"),o=n("q1tI"),i=n.n(o),u=n("5Yp1"),l=n("QojX"),d=n("3Z9Z"),h=n("JI6e"),j=n("KV1Y"),p=n("20a2"),b=n("5qq8");function f(){var e=Object(p.useRouter)(),t=Object(o.useState)([]),n=t[0],c=t[1],f=Object(o.useState)([]),x=f[0],O=f[1],g=Object(o.useState)(""),v=g[0],w=g[1],N=Object(o.useState)("Escanea el producto"),m=N[0],y=N[1],E=Object(o.useState)(""),_=E[0],S=E[1],k=Object(o.useState)(""),C=k[0],F=k[1];function I(){return(I=Object(r.a)(s.a.mark((function t(){var n,a,r,o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(Object(b.a)(e)),t.next=3,fetch("http://localhost:3001/products",{headers:{"Content-Type":"application/json","x-access-token":n.token}});case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,t.next=9,fetch("http://localhost:3001/settings",{headers:{"Content-Type":"application/json","x-access-token":n.token}});case 9:return o=t.sent,t.next=12,o.json();case 12:i=t.sent,c(r),O(i[0].dolar);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return i.a.useEffect((function(){!function(){I.apply(this,arguments)}()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)("h4",{className:"title-h1",children:"Lector de Precios"}),Object(a.jsx)("div",{className:"container",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:Object(a.jsx)("div",{style:{width:"50%"},children:Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)(l.a.Group,{as:d.a,children:Object(a.jsxs)(h.a,{sm:12,children:[Object(a.jsx)(l.a.Control,{type:"text",name:"id",value:v,onChange:function(e){return w(e.target.value)},onKeyUp:function(e){e.preventDefault();var t=n.find((function(e){return e.codebar===v}));t?(y("Encontrado!"),e.target.select(),S(t.title),F(Object(j.a)(t.price*x))):y(""===v?"Escanea el producto":"No existe")},autoComplete:"off",autoFocus:"on",placeholder:"C\xf3digo"}),Object(a.jsx)("code",{className:"Escanea el producto"===m?null:"No existe"===m?"rojo":"verde",children:"Encontrado!"===m?"":m}),"Encontrado!"===m?Object(a.jsxs)("div",{className:"mt-5 find",children:[Object(a.jsxs)("h1",{children:[" ",_]}),Object(a.jsxs)("h2",{className:"mt-5",children:[" ","Precio: ",Object(a.jsx)("b",{children:C})," ",Object(a.jsx)("span",{style:{fontSize:"14px"},children:"BsS"})]})]}):""]})})})})})]})})}}},[["2wU4",0,2,1,3,4]]]);