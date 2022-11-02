(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),i=c(1),d=(c(13),c(14),c(6)),o=c.n(d);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(15);var j=c(0),b=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.todos,c=e.setOpen,s=e.setOnSelect,a=e.onSelect,n=t.find((function(e){return e.id===a})),d=Object(i.useState)({id:0,name:"",email:"",phone:""}),o=Object(l.a)(d,2),h=o[0],u=o[1],O=Object(i.useState)(!1),m=Object(l.a)(O,2),x=m[0],f=m[1];return Object(i.useEffect)((function(){var e;(e=null===n||void 0===n?void 0:n.userId,r("/users/".concat(e))).then((function(e){u(e),f(!0)})).catch((function(e){throw new Error(e)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),x?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",a]}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(!1),s(-1)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===n||void 0===n?void 0:n.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:!0===(null===n||void 0===n?void 0:n.completed)?"has-text-success":"has-text-danger",children:!0===(null===n||void 0===n?void 0:n.completed)?"Done":"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:Sincere@april.biz",children:h.name})]})]})]}):Object(j.jsx)(b,{})]})},u=function(e){var t=e.todos,c=Object(i.useState)(-1),s=Object(l.a)(c,2),a=s[0],n=s[1],d=Object(i.useState)(!1),r=Object(l.a)(d,2),b=r[0],u=r[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,c=e.completed,s=e.title;return Object(j.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":a===t}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:c&&Object(j.jsx)("i",{className:"fas fa-check"})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:c?"has-text-success":"has-text-danger",children:s})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){u(!0),n(t)},children:Object(j.jsx)("i",{className:o()("far",{"fa-eye-slash":a===t},{"fa-eye":a!==t})})},t)})]},t)}))})]}),b&&Object(j.jsx)(h,{todos:t,setOpen:u,onSelect:a,setOnSelect:n})]})},O=function(e){var t=e.todos,c=Object(i.useState)(""),s=Object(l.a)(c,2),a=s[0],n=s[1],d=Object(i.useState)(""),o=Object(l.a)(d,2),r=o[0],b=o[1],h=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return"active"===r?h=h.filter((function(e){return!e.completed})):"completed"===r&&(h=h.filter((function(e){return e.completed}))),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return b(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",defaultValue:"",value:a,onChange:function(e){n(null===e||void 0===e?void 0:e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{todos:h})})]})},m=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!0),d=Object(l.a)(a,2),o=d[0],h=d[1],u=Object(n.a)(c);return Object(i.useEffect)((function(){r("/todos").then((function(e){h(!1),s(e)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:o?Object(j.jsx)(b,{}):Object(j.jsx)(O,{todos:u})})]})})})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6fc6f038.chunk.js.map