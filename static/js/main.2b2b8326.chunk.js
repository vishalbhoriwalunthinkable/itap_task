(this.webpackJsonpitap_task=this.webpackJsonpitap_task||[]).push([[0],{17:function(e,t,s){},30:function(e,t){},36:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(10),i=s.n(c),r=(s(17),s(2)),o=s(3),l=s(11),j=s.n(l);function d(){return function(e){var t=e.method,s=void 0===t?"get":t,n=e.url,a=e.endpoint,c=e.payload,i=e.query,r=e.type,o=void 0===r?"application/json":r,l=n||"".concat("https://jsonplaceholder.typicode.com","/").concat(a),d=j()(s,l);return new Promise((function(e,t){d.set("Content-Type",o).send(c).query(i).then(e).catch((function(e){var s=e.response&&e.response.body||{};t(s)}))}))}({endpoint:"users"})}var u=s(12),b=(s(36),s(0)),h=["placeholder"];function m(e){var t=e.placeholder,s=Object(u.a)(e,h);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(r.a)(Object(r.a)({className:"Components__SearchBox"},s),{},{placeholder:t}))})}m.defaultProps={placeholder:"Search by user name or email..."};var O=m;s(38);var _=function(e){var t=e.data,s=e.index,a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],r=c[1];return Object(b.jsxs)("div",{className:"Components__ListItem",children:[Object(b.jsxs)("div",{onClick:function(){r(!i)},tabIndex:0,role:"button",style:{outline:"none"},children:[Object(b.jsxs)("span",{className:"ListItem__Index",children:[s,"."]}),Object(b.jsx)("span",{className:"ListItem__Name",children:t.name}),Object(b.jsxs)("span",{className:"ListItem__UserName",children:["@",t.username]})]}),i?Object(b.jsxs)("div",{className:"List__Details",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"List__Details__Heading",children:"Email: "}),Object(b.jsx)("span",{className:"List__Details__Value",children:t.email})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"List__Details__Heading",children:"Phone: "}),Object(b.jsx)("span",{className:"List__Details__Value",children:t.phone})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"List__Details__Heading",children:"Website: "}),Object(b.jsx)("span",{className:"List__Details__Value",children:Object(b.jsx)("a",{href:"#",children:t.website})})]})]}):null]})};function p(e){var t=e.isFetching,s=e.isError,n=e.children,a=e.style;return s?Object(b.jsx)("div",{className:"ContentWrap",children:"Something went wrong..."}):t?Object(b.jsx)("div",{className:"ContentWrap",style:a,children:"Loading..."}):n}p.defaultProps={isError:!1,style:{}};var x=p;s(39);var v=function(){var e=Object(n.useState)({isLoading:!1,isError:!1,listData:[]}),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],j=i[1],u=Object(n.useState)(s.listData||[]),h=Object(o.a)(u,2),m=h[0],p=h[1];return Object(n.useEffect)((function(){a(Object(r.a)(Object(r.a)({},s),{},{isLoading:!0})),d().then((function(e){a(Object(r.a)(Object(r.a)({},s),{},{isLoading:!1,listData:e.body})),p(e.body)})).catch((function(){a({isLoading:!1,isError:!0,listData:[]})}))}),[]),Object(b.jsxs)("div",{className:"View__UserList",children:[Object(b.jsx)("h1",{children:"Users List"}),Object(b.jsxs)("div",{className:"View__UserList__Container",children:[Object(b.jsx)(O,{onChange:function(e){var t=e.target.value,n=s.listData.filter((function(t){return t.name.toLocaleLowerCase().trim().includes(e.target.value.toLocaleLowerCase().trim())||t.email.toLocaleLowerCase().trim().includes(e.target.value.toLocaleLowerCase().trim())}));p(n),j(t)},value:l}),Object(b.jsx)(x,{isFetching:s.isLoading,isError:s.isError,children:m.length?Object(b.jsx)(b.Fragment,{children:m.map((function(e,t){return Object(b.jsx)(_,{data:e,index:t},2*t+1)}))}):Object(b.jsx)("div",{className:"Item__Not__Found",children:"Item not found!"})})]})]})};var f=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2b2b8326.chunk.js.map