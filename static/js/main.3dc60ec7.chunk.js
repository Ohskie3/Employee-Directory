(this["webpackJsonpweek10-day03"]=this["webpackJsonpweek10-day03"]||[]).push([[0],{45:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(15),s=t.n(c),o=t(6),l=t(18),u=t(17),i=t(16),d=t.n(i),m=(t(43),t(4)),b=function(){var e=Object(n.useState)({users:[],columns:[{Header:"name",accessor:"name",filterable:!0},{Header:"email",accessor:"email",filterable:!0},{Header:"phone",accessor:"phone",filterable:!0},{Header:"gender",accessor:"gender",filterable:!0}]}),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){d.a.get("https://randomuser.me/api?results=50").then((function(e){var a=e.data.results;console.log(a);var n=a.map((function(e){return{name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,phone:e.phone,gender:e.gender}}));r(Object(o.a)(Object(o.a)({},t),{},{users:n}))})).catch((function(e){return console.log(e)}))}),[]),Object(m.jsx)(u.a,{data:t.users,columns:t.columns})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3dc60ec7.chunk.js.map