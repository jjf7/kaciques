_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{KV1Y:function(e,t,r){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{t=Math.abs(t),t=isNaN(t)?2:t;var n=e<0?"-":"",c=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),o=c.length>3?c.length%3:0;return n+(o?c.substr(0,o)+a:"")+c.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?r+Math.abs(e-c).toFixed(t).slice(2):"")}catch(i){console.log(i)}}function n(e){return e.toString().replace(/\./g,"").replace(/\,/g,".")}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}))},"O1O/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return r("auAi")}])},auAi:function(e,t,r){"use strict";r.r(t);var a=r("o0o1"),n=r.n(a),c=r("nKUr"),o=r("HaE+"),i=r("q1tI"),s=r.n(i),l=r("YFqc"),d=r.n(l),u=r("5Yp1"),b=r("KQm4"),j=r("rePB"),p=r("ODXe"),h=r("h4VS"),O=r("vOnD"),x=r("d76Q"),g=r.n(x),m=r("zM5D"),f=r("cWnB"),y=r("QojX"),v=r("3Z9Z"),C=r("JI6e"),k=r("zUrK"),P=r("jDKy"),w=r("KV1Y"),N=r("20a2"),S=r("5qq8");function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(j.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(){var e=Object(h.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n        columns={columns}\n  height: 34px;\n  width: 32px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return _=function(){return e},e}function E(){var e=Object(h.a)(["\n  height: 32px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return E=function(){return e},e}var D=O.default.input(E()),I=Object(O.default)(f.a)(_()),z=function(e){var t=e.filterText,r=e.onFilter,a=e.onClear;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(D,{id:"search",type:"text",placeholder:"Introduzca el nombre del producto a buscar","aria-label":"Search Input",value:t,onChange:r}),Object(c.jsx)(I,{type:"button",onClick:a,children:"X"})]})},q=function(e){var t=e.columns,r=e.data,a=e.setMsg,l=e.categories,d=Object(N.useRouter)(),u=Object(i.useState)(!1),j=u[0],h=u[1],O=s.a.useState(""),x=Object(p.a)(O,2),F=x[0],_=x[1],E=Object(i.useState)(!1),D=E[0],I=E[1],q={id:"",title:"",price:"",codebar:"",category:"",id_categoria:""},L=Object(i.useState)(q),G=L[0],J=L[1],V=function(){return h(!1)},$=s.a.useState(!1),B=Object(p.a)($,2),H=B[0],K=B[1],M=r.filter((function(e){return e.title&&e.title.toLowerCase().includes(F.toLowerCase())})),R=s.a.useMemo((function(){return Object(c.jsx)(z,{onFilter:function(e){return _(e.target.value)},onClear:function(){F&&(K(!H),_(""))},filterText:F})}),[F,H]),U=function(e){J(T(T({},G),{},{id:e.id,title:e.title,price:e.price,codebar:e.codebar,category:e.category,id_categoria:e.id_categoria})),h(!0)},Y=function(){var e=Object(o.a)(n.a.mark((function e(t){var r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=JSON.parse(Object(S.a)(d)),!1!==t.currentTarget.checkValidity()){e.next=7;break}t.preventDefault(),t.stopPropagation(),e.next=15;break;case 7:return I(!0),e.next=10,fetch("http://localhost:3001/products/".concat(G.id),{method:"PUT",headers:{"Content-Type":"application/json","x-access-token":r.token},body:JSON.stringify({title:G.title,price:Object(w.b)(G.price),codebar:G.codebar,category:G.id_categoria})});case 10:return c=e.sent,e.next=13,c.json();case 13:"success"==(o=e.sent)?(a({status:1,msg:"Se ha editado correctamente el producto"}),h(!1),J(q)):a({status:2,msg:o});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(n.a.mark((function e(t){var r,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=JSON.parse(Object(S.a)(d)),!confirm("Estas seguro de eliminar el producto?")){e.next=13;break}return e.next=4,fetch("http://localhost:3001/products/".concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json","x-access-token":r.token}});case 4:return c=e.sent,console.log(c),e.next=8,c.json();case 8:o=e.sent,console.log("response:",o),a("success"==o?{status:1,msg:"Se ha eliminado el producto correctamente"}:{status:1,msg:"Ha ocurrido un error"}),e.next=13;break;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=t.map((function(e){return e})),Q=Object(i.useCallback)((function(){return[].concat(Object(b.a)(X),[{name:"Acciones",allowOverflow:!0,right:!0,minWidth:"200px",cell:function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn btn-warning btn-sm",type:"button",onClick:function(){return U(e)},style:{backgroundColor:"aliceblue"},children:Object(c.jsx)("i",{className:"fi-rr-edit"})}),Object(c.jsx)("button",{className:"btn btn-danger btn-sm ml-2 text-danger",type:"button",onClick:function(){return A(e)},style:{backgroundColor:"aliceblue"},children:Object(c.jsx)("i",{className:"fi-rr-trash"})})]})}}])}),[X]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{columns:Q(),data:M,defaultSortField:"title",pagination:!0,paginationPerPage:5,paginationResetDefaultPage:H,subHeader:!0,subHeaderComponent:R,persistTableHead:!0}),Object(c.jsxs)(m.a,{size:"lg",show:j,onHide:V,children:[Object(c.jsx)(m.a.Header,{closeButton:!0,children:Object(c.jsx)(m.a.Title,{children:"Editar producto"})}),Object(c.jsx)(m.a.Body,{children:Object(c.jsxs)(y.a,{validated:D,children:[Object(c.jsxs)(y.a.Group,{as:v.a,children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"Categor\xeda"}),Object(c.jsxs)(C.a,{sm:9,children:[Object(c.jsx)(y.a.Control,{onChange:function(e){J(T(T({},G),{},{id_categoria:e.target.value}))},name:"id_categoria",id:"id_categoria",required:!0,as:"select",value:G.id_categoria,children:l.map((function(e){return Object(c.jsx)("option",{value:e._id,children:e.title},e._id)}))}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Seleccione una categor\xeda"})]})]}),Object(c.jsxs)(y.a.Group,{as:v.a,style:{marginTop:"30px"},children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"Nombre Producto"}),Object(c.jsxs)(C.a,{sm:9,children:[Object(c.jsx)(P.a,{onChange:function(e){J(T(T({},G),{},{title:e.target.value}))},name:"title",id:"title",required:!0,value:G.title,type:"text",placeholder:"Nombre Producto"}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Introduzca el nombre del producto."})]})]}),Object(c.jsxs)(y.a.Group,{as:v.a,style:{marginTop:"30px"},children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"Precio"}),Object(c.jsx)(C.a,{sm:9,children:Object(c.jsxs)(k.a,{className:"mb-2",children:[Object(c.jsx)(k.a.Prepend,{children:Object(c.jsx)(k.a.Text,{children:"$"})}),Object(c.jsx)(P.a,{onKeyUp:function(e){e.target.value=e.target.value.replace(/\D/g,"").replace(/([0-9])([0-9]{2})$/,"$1,$2").replace(/\B(?=(\d{3})+(?!\d)\.?)/g,"."),J(T(T({},G),{},{price:e.target.value}))},onChange:function(e){J(T(T({},G),{},{price:e.target.value}))},name:"price",id:"price",value:G.price,type:"text",required:!0,placeholder:"Precio"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Introduzca el precio en D\xf3lares."}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"})]})})]}),Object(c.jsxs)(y.a.Group,{as:v.a,style:{marginTop:"30px"},children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"C\xf3digo"}),Object(c.jsxs)(C.a,{sm:9,children:[Object(c.jsx)(y.a.Control,{onChange:function(e){J(T(T({},G),{},{codebar:e.target.value}))},required:!0,id:"codebar",name:"codebar",value:G.codebar,type:"text",placeholder:"C\xf3digo de barra"}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Introduzca el c\xf3digo de barras. escaneando el producto con el lector de barras proporcionado."})]})]})]})}),Object(c.jsxs)(m.a.Footer,{children:[Object(c.jsx)(f.a,{variant:"secondary",onClick:V,children:"Cerrar"}),Object(c.jsx)(f.a,{variant:"primary",onClick:Y,children:"Editar producto"})]})]})]})};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){Object(j.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e){var t=e.categories,r=e.setMsg,a=Object(N.useRouter)(),s=Object(i.useState)(!1),l=s[0],d=s[1],u=Object(i.useState)(!1),b=u[0],j=u[1],p={title:"",price:0,codebar:"",category:""},h=Object(i.useState)(p),O=h[0],x=h[1],g=function(){var e=Object(o.a)(n.a.mark((function e(t){var c,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=JSON.parse(Object(S.a)(a)),!1!==t.currentTarget.checkValidity()){e.next=7;break}t.preventDefault(),t.stopPropagation(),e.next=16;break;case 7:return j(!0),e.next=10,fetch("http://localhost:3001/products",{method:"POST",headers:{"Content-Type":"application/json","x-access-token":c.token},body:JSON.stringify(O)});case 10:return o=e.sent,e.next=13,o.json();case 13:i=e.sent,console.log(i),"success"==i?(r({status:1,msg:"Se ha agregado correctamente el nuevo producto"}),d(!1),x(p)):r({status:2,msg:"Rellene el formulario"});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return d(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{variant:"primary",onClick:function(){return d(!0)},children:"Nuevo Producto"}),Object(c.jsxs)(m.a,{size:"lg",show:l,onHide:F,children:[Object(c.jsx)(m.a.Header,{closeButton:!0,children:Object(c.jsx)(m.a.Title,{children:"Nuevo Producto"})}),Object(c.jsx)(m.a.Body,{children:Object(c.jsxs)(y.a,{noValidate:!0,validated:b,children:[Object(c.jsxs)(y.a.Group,{as:v.a,children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"Categor\xeda"}),Object(c.jsxs)(C.a,{sm:9,children:[Object(c.jsxs)(y.a.Control,{onChange:function(e){x(G(G({},O),{},{category:e.target.value}))},name:"category",id:"category",required:!0,as:"select",defaultValue:"Seleccionar...",children:[Object(c.jsx)("option",{value:"",children:"Seleccionar..."}),t.map((function(e){return Object(c.jsx)("option",{value:e._id,children:e.title},e._id)}))]}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Seleccione una categor\xeda"})]})]}),Object(c.jsxs)(y.a.Group,{as:v.a,style:{marginTop:"30px"},children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"Nombre Producto"}),Object(c.jsxs)(C.a,{sm:9,children:[Object(c.jsx)(P.a,{onChange:function(e){x(G(G({},O),{},{title:e.target.value}))},name:"title",id:"title",required:!0,type:"text",placeholder:"Nombre Producto"}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Introduzca el nombre del producto."})]})]}),Object(c.jsxs)(y.a.Group,{as:v.a,style:{marginTop:"30px"},children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"Precio"}),Object(c.jsx)(C.a,{sm:9,children:Object(c.jsxs)(k.a,{className:"mb-2",children:[Object(c.jsx)(k.a.Prepend,{children:Object(c.jsx)(k.a.Text,{children:"$"})}),Object(c.jsx)(P.a,{onKeyUp:function(e){e.target.value=e.target.value.replace(/\D/g,"").replace(/([0-9])([0-9]{2})$/,"$1,$2").replace(/\B(?=(\d{3})+(?!\d)\.?)/g,"."),x(G(G({},O),{},{price:Object(w.b)(e.target.value)}))},name:"price",id:"price",type:"text",required:!0,placeholder:"Precio"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Introduzca el precio en D\xf3lares."}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"})]})})]}),Object(c.jsxs)(y.a.Group,{as:v.a,style:{marginTop:"30px"},children:[Object(c.jsx)(y.a.Label,{column:!0,sm:3,children:"C\xf3digo"}),Object(c.jsxs)(C.a,{sm:9,children:[Object(c.jsx)(y.a.Control,{onChange:function(e){x(G(G({},O),{},{codebar:e.target.value}))},required:!0,id:"codebar",name:"codebar",type:"text",placeholder:"C\xf3digo de barra"}),Object(c.jsx)(y.a.Control.Feedback,{children:"Correcto!"}),Object(c.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Introduzca el c\xf3digo de barras. escaneando el producto con el lector de barras proporcionado."})]})]})]})}),Object(c.jsxs)(m.a.Footer,{children:[Object(c.jsx)(f.a,{variant:"secondary",onClick:F,children:"Cerrar"}),Object(c.jsx)(f.a,{variant:"primary",onClick:g,children:"Guardar producto"})]})]})]})}t.default=function(){var e=Object(N.useRouter)(),t=Object(i.useState)(""),r=t[0],a=t[1],s=Object(i.useState)([]),l=s[0],b=s[1],j=Object(i.useState)([]),p=j[0],h=j[1];function O(){return(O=Object(o.a)(n.a.mark((function t(){var r,a,c,o,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(Object(S.a)(e)),t.next=3,fetch("http://localhost:3001/products",{headers:{"Content-Type":"application/json","x-access-token":r.token}});case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,b(c),t.next=10,fetch("http://localhost:3001/categories",{headers:{"Content-Type":"application/json","x-access-token":r.token}});case 10:return o=t.sent,t.next=13,o.json();case 13:i=t.sent,h(i);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(i.useEffect)((function(){"user"===JSON.parse(Object(S.a)(e)).role&&e.push("/dashboard"),function(){O.apply(this,arguments)}()}),[r]),Object(c.jsxs)(u.a,{children:[Object(c.jsx)("h4",{className:"title-h1",children:"Listado de Productos"}),r?1==r.status?Object(c.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(c.jsx)("i",{className:"fi-rr-check"}),r.msg]}):Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:r.msg}):"",Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"containerButtons",children:[Object(c.jsx)(J,{setMsg:a,categories:p}),Object(c.jsx)(d.a,{href:"/categories",children:Object(c.jsx)("a",{className:"btn btn-info btn-small",children:"Categor\xedas"})})]}),Object(c.jsx)(q,{categories:p,setMsg:a,className:"mt-5",columns:[{name:"Id",selector:"id",omit:!0},{name:"IdCategoria",selector:"id_categoria",omit:!0},{name:"Categoria",selector:"category",sortable:!0,editable:!0},{name:"Producto",selector:"title",sortable:!0,right:!0,editable:!0},{name:"Precio",selector:"price",sortable:!0,right:!0,editable:!0,cell:function(e){return"".concat(e.price," $")}},{name:"Serial",selector:"codebar",sortable:!0,right:!0,editable:!0}],data:l})]})]})}},zUrK:function(e,t,r){"use strict";var a=r("hVfy"),n=r("RAs/"),c=r("TSYQ"),o=r.n(c),i=r("q1tI"),s=r.n(i),l=r("YdCC"),d=r("vUet"),u=Object(l.a)("input-group-append"),b=Object(l.a)("input-group-prepend"),j=Object(l.a)("input-group-text",{Component:"span"}),p=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.size,i=e.hasValidation,l=e.className,u=e.as,b=void 0===u?"div":u,j=Object(a.a)(e,["bsPrefix","size","hasValidation","className","as"]);return r=Object(d.a)(r,"input-group"),s.a.createElement(b,Object(n.a)({ref:t},j,{className:o()(l,r,c&&r+"-"+c,i&&"has-validation")}))}));p.displayName="InputGroup";var h=Object(n.a)({},p,{Text:j,Radio:function(e){return s.a.createElement(j,null,s.a.createElement("input",Object(n.a)({type:"radio"},e)))},Checkbox:function(e){return s.a.createElement(j,null,s.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},Append:u,Prepend:b});t.a=h}},[["O1O/",0,2,1,3,4,5]]]);