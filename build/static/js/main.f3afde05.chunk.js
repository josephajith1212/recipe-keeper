(this["webpackJsonprecipe-keeper"]=this["webpackJsonprecipe-keeper"]||[]).push([[0],{38:function(e,t,c){},41:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(29),s=c.n(r),i=(c(38),c(12)),j=c(13),l=c(33),o=c(7),u=c(25);c(54);u.a.initializeApp({apiKey:"AIzaSyBiXylSJsWAgVqrv7MJxtJkNoTPm589Bwc",authDomain:"recipe-keeper-aa9dd.firebaseapp.com",projectId:"recipe-keeper-aa9dd",storageBucket:"recipe-keeper-aa9dd.appspot.com",messagingSenderId:"570449685197",appId:"1:570449685197:web:5084c96b40be3689275784",measurementId:"G-39PZ4H3T9D"});var d=u.a.firestore(),b=c(17),p=c.n(b),O=c(21),h=c.p+"static/media/delete_icon.1129c53a.svg",x=(c(41),c(1));function f(e){var t=e.recipes,c=Object(j.e)(),n=function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("myRecipe").doc(t).delete();case 2:c.go(0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("img",{src:h,className:"delete",onClick:function(){return n(e.id)}}),Object(x.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(x.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(x.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Cook this"})]},e.id)}))})}c(47);function m(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(n.useState)(!1),b=Object(o.a)(u,2),p=b[0],O=b[1];return Object(n.useEffect)((function(){j(!0),d.collection("myRecipe").get().then((function(e){if(e.empty)O("No recipes available!"),j(!1);else{var t=[];e.docs.map((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),a(t),j(!1)}})).catch((function(e){O(e.message),j(!1)}))}),[]),Object(x.jsxs)("div",{className:"home",children:[p&&Object(x.jsx)("p",{className:"error",children:p}),i&&Object(x.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(x.jsx)(f,{recipes:c})]})}var g=c(32);c(48);function v(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),h=b[0],f=b[1],m=Object(n.useState)(""),v=Object(o.a)(m,2),k=v[0],N=v[1],S=Object(n.useState)([]),y=Object(o.a)(S,2),w=y[0],R=y[1],C=Object(n.useState)(null),I=Object(o.a)(C,2),A=I[0],T=I[1],J=Object(n.useRef)(""),q=Object(n.useRef)(null),B=Object(j.e)(),D=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:c,cookingTime:"".concat(i," minutes"),method:h,ingredients:w},e.prev=2,e.next=5,d.collection("myRecipe").get().then((function(e){var t=[];e.docs.map((function(e){return t.push(e.data().title)})),t.includes(c)?(console.log("reached else"),T("Sorry, that title already exixts. Please try again with a different one."),console.log(A)):(d.collection("myRecipe").add(n),console.log("reached if"))}));case 5:console.log("exit await"),console.log(A),null==A&&B.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Post error!");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();console.log("exit all");return Object(n.useEffect)((function(){q.current.focus()}),[]),Object(x.jsxs)("div",{className:"create",children:[A&&Object(x.jsx)("p",{className:"error",children:A}),Object(x.jsx)("h2",{className:"page-title",children:"Add a new Recipe"}),Object(x.jsxs)("form",{onSubmit:D,children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Recipe title"}),Object(x.jsx)("input",{type:"text",value:c,ref:q,required:!0,onChange:function(e){return a(e.target.value)}})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Ingredients"}),Object(x.jsxs)("div",{className:"ingredients",children:[Object(x.jsx)("input",{type:"text",value:k,ref:J,onChange:function(e){return N(e.target.value)}}),Object(x.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault();var t=k.trim().replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}));t&&!w.includes(t)&&R((function(e){return[].concat(Object(g.a)(e),[t])})),N(""),J.current.focus()},children:"Add"})]})]}),Object(x.jsxs)("p",{children:["Ingredients: ",w.map((function(e){return Object(x.jsxs)("em",{children:[e,", "]},e)}))]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Recipe method"}),Object(x.jsx)("textarea",{value:h,required:!0,onChange:function(e){return f(e.target.value)}})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Cooking time (mins)"}),Object(x.jsx)("input",{type:"number",value:i,required:!0,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)("button",{className:"btn",children:"Submit"})]})]})}c(49);function k(){var e=Object(j.f)().id,t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(n.useState)(!1),p=Object(o.a)(b,2),O=p[0],h=p[1];return Object(n.useEffect)((function(){u(!0),d.collection("myRecipe").doc(e).get().then((function(e){e.exists?(u(!1),r(e.data())):(u(!1),h("Sorry, this recipe is not available."))}))}),[e]),Object(x.jsxs)("div",{className:"recipe",children:[O&&Object(x.jsx)("p",{className:"error",children:O}),l&&Object(x.jsx)("p",{className:"loading",children:"Loading..."}),a&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"page-title",children:a.title}),Object(x.jsxs)("p",{children:["Takes ",a.cookingTime," to cook."]}),Object(x.jsx)("ul",{children:a.ingredients.map((function(e){return Object(x.jsx)("li",{children:e},e)}))}),Object(x.jsx)("p",{className:"method",children:a.method})]})]})}c(50);function N(){return Object(x.jsx)("div",{children:"Search"})}c(51);function S(){return Object(x.jsx)("div",{className:"navbar",children:Object(x.jsxs)("nav",{children:[Object(x.jsx)(i.b,{to:"/",className:"brand",children:Object(x.jsx)("h1",{children:"Recipe Keeper"})}),Object(x.jsx)(i.b,{to:"/create",children:"Create Recipe"})]})})}c(52);var y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(S,{}),Object(x.jsxs)("switch",{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",children:Object(x.jsx)(m,{})}),Object(x.jsx)(j.a,{path:"/create",children:Object(x.jsx)(v,{})}),Object(x.jsx)(j.a,{path:"/recipes/:id",children:Object(x.jsx)(k,{})}),Object(x.jsx)(j.a,{path:"/search",children:Object(x.jsx)(N,{})})]})]})})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.f3afde05.chunk.js.map