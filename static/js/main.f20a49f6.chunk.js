(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(n,e,t){n.exports=t(43)},36:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var o={};t.r(o),t.d(o,"updateDate",function(){return y}),t.d(o,"addTodo",function(){return O}),t.d(o,"deleteTodo",function(){return w}),t.d(o,"toggleTodo",function(){return j});var r={};t.r(r),t.d(r,"circle",function(){return z});var a={};t.r(a),t.d(a,"round",function(){return M});var i=t(0),c=t.n(i),u=t(10),d=t.n(u),l=(t(36),t(2)),s=t(6),m=t(20),f=t(21),p=t(27),b=t(22),h=t(30),g=t(3),v=t(4),x=t(9),y=function(n){return{type:"UPDATE_DATE",date:n}},O=function(n){return{type:"ADD_TODO",text:n}},w=function(n){return{type:"DELETE_TODO",id:n}},j=function(n){return{type:"TOGGLE_TODO",id:n}};function E(){var n=Object(l.a)(["\n  position: relative;\n  font-family: monospace;\n  font-size: 3em;\n  font-weight: 300;\n  color: white;\n  text-align: right;\n  padding-right: 32px;\n  animation: "," 1s ease-in-out 1;\n"]);return E=function(){return n},n}function T(){var n=Object(l.a)(["\n  position: relative;\n  font-family: monospace;\n  font-size: 8em;\n  font-weight: 100;\n  color: white;\n  text-align: right;\n  margin-bottom: 8px;\n  animation: "," 1s ease-in-out 1;\n"]);return T=function(){return n},n}function k(){var n=Object(l.a)(["\n  from {\n    ",": ","px;\n    opacity: 0\n  }\n  to {\n    ",": 0px;\n    opacity: 1\n  }\n"]);return k=function(){return n},n}var D=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Object(g.c)(k(),n,e,n)},N=g.b.h2(T(),D("left")),I=g.b.h3(E(),D("top",32)),S=function(n){function e(){return Object(m.a)(this,e),Object(p.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(f.a)(e,[{key:"componentWillMount",value:function(){var n=this;setInterval(function(){var e=new Date;n.props.updateDate(e)},100)}},{key:"render",value:function(){var n=this.props,e=n.year,t=n.month,o=n.day,r=n.hours,a=n.minutes,i=n.seconds,u=n.period;return c.a.createElement("div",{className:"date-display"},c.a.createElement("div",null,c.a.createElement(N,null,function(){var n=["January","February","March","April","May","June","July","August","September","October","November","December"];return n[t]&&o&&e?"".concat(n[t]," ").concat(o,", ").concat(e):""}()),c.a.createElement(I,null,r&&a&&i&&u?"".concat(r,":").concat(a,":").concat(i," ").concat(u):"")))}}]),e}(i.Component),q=Object(x.b)(function(n){return Object(s.a)({},n.DateHandler)},function(n){return Object(v.a)(o,n)})(S);function A(){var n=Object(l.a)(["\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n  font-size: ","px;\n  font-weight: 700;\n  color: ",";\n  box-shadow: 0 0 5px darkgray;\n  transition: box-shadow 0.2s ease-in-out;\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0 20px darkgray;\n  }\n"]);return A=function(){return n},n}var z=g.b.div(A(),function(n){return n.width},function(n){return n.width},function(n){return.3*n.width},function(n){return n.color});function C(){var n=Object(l.a)(["\n  flex: 1;\n  font-size: ","px;\n  padding: 0 0.8em;\n  font-weight: 200;\n  border: none;\n  border-radius: ","px;\n"]);return C=function(){return n},n}var M=g.b.input(C(),function(n){return n.fontSize},function(n){return n.borderRadius});function _(){var n=Object(l.a)(["\n  width: 100%;\n  max-width: 1026px;\n  height: 240px;\n  border: none;\n  border-radius: 25px;\n  overflow: scroll;\n"]);return _=function(){return n},n}function H(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  "," {\n    max-width: 960px;\n    margin-right: 1em;\n    &:focus {\n      outline: none;\n    }\n  }\n  margin-bottom: 1em;\n"]);return H=function(){return n},n}var J=g.b.div(H(),a.round),G=g.b.ul(_()),L=Object(x.b)(function(n){return Object(s.a)({},n.TodoHandler)},function(n){return Object(v.a)(o,n)})(function(n){n.className;var e,t=n.todoItems,o=n.addTodo,i=n.deleteTodo,u=n.toggleTodo;return c.a.createElement("div",{className:"todo-list"},c.a.createElement(J,null,c.a.createElement(a.round,{className:"text-input",type:"text",placeholder:"Type something",fontSize:"16",borderRadius:25,onKeyPress:function(n){13===n.charCode&&(o(n.target.value),n.target.value="")}}),c.a.createElement(r.circle,{width:50,fontSize:"100",color:"#194a2f",onClick:function(){var n=document.querySelector(".text-input"),e=document.querySelector(".text-input"),t=document.querySelector(".todo-items");o(n.value),e.value="",t.scrollTop=0}},"Add")),c.a.createElement(G,{className:"todo-items"},void 0===(e=t)||0===e.length?c.a.createElement(U,{key:"empty",text:"Empty",accessories:!1}):e.map(function(n){return console.log(n),c.a.createElement(U,Object.assign({key:n.id},n,{accessories:!0,onComplete:function(){u(n.id)},onDelete:function(){i(n.id)},onRedo:function(){u(n.id)}}))})))});function P(){var n=Object(l.a)(['\n  position: absolute;\n  top: 50%;\n  width: 48px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transform: translate(0, -50%);\n  transition: 0.5s;\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    width: 48px;\n    height: 6px;\n    border-radius: 3px;\n    background-color: white;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n    transition: 0.5s;\n  }\n  &:before {\n    top: -16px;\n  }\n  &:after {\n    top: 16px;\n  }\n']);return P=function(){return n},n}function R(){var n=Object(l.a)(["\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  .active {\n    background: transparent;\n    box-shadow: none;\n  }\n  .active:before {\n    top: 0;\n    transform: rotate(135deg);\n  }\n  .active:after {\n    top: 0;\n    transform: rotate(45deg);\n  }\n"]);return R=function(){return n},n}g.b.div(R()),g.b.div(P());var W=t(11),B=t(12);function F(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-bottom: 1px solid white;\n  padding: 0 0 0 1em;\n  .todo-text {\n    flex: 1;\n    text-decoration: ","\n    font-size: 1em;\n    color: ","\n  }\n  .completed-text {\n    visibility: ","\n    color: lightGray;\n    width: 100px;\n    text-align: center;\n  }\n  &:last-child {\n    border-bottom: none;\n  }\n  .todo-icon-container {\n    visibility: ","\n    background-color: #194a2f;\n    height: 100%;\n    padding: 1em;\n    .todo-icon {\n      color: white;\n      margin-right: 1em;\n      &:last-child {\n        margin-right: 0;\n      }\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]);return F=function(){return n},n}var U=Object(g.b)(function(n){var e=n.className,t=n.text,o=n.completed,r=n.onComplete,a=n.onDelete,i=n.onRedo;return c.a.createElement("li",{className:e},c.a.createElement("span",{className:"todo-text"},t),c.a.createElement("span",{className:"completed-text"},"Completed"),c.a.createElement("div",{className:"todo-icon-container"},o?c.a.createElement(W.a,{className:"todo-icon",icon:B.b,onClick:r}):c.a.createElement(W.a,{className:"todo-icon",icon:B.a,onClick:i}),c.a.createElement(W.a,{className:"todo-icon",icon:B.c,onClick:a})))})(F(),function(n){return n.completed?"line-through":"none"},function(n){return n.completed?"lightGray":"white"},function(n){var e=n.accessories,t=n.completed;return e&&t?"visible":"hidden"},function(n){return n.accessories?"visible":"hidden"});function K(){var n=Object(l.a)(["\n  /* http://meyerweb.com/eric/tools/css/reset/ \n  v2.0 | 20110126\n  License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .App {\n    height: 100vh;\n  }\n"]);return K=function(){return n},n}var Y=Object(g.a)(K());function $(){var n=Object(l.a)(["\n  background-color: #194a2f;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  perspective: 50em;\n  position: relative;\n  .date-display {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 3em;\n  }\n  .todo-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 1em;\n  }\n"]);return $=function(){return n},n}function Q(){var n=Object(l.a)(["\n  width: 100%;\n"]);return Q=function(){return n},n}var V=g.b.main(Q()),X=Object(g.b)(function(n){var e=n.className;return c.a.createElement("div",{className:e},c.a.createElement(V,null,c.a.createElement(q,null),c.a.createElement(L,null)),c.a.createElement(Y,null))})($());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z={year:"",month:"",day:"",hours:"",minutes:"",seconds:"",period:""},nn=function(n,e){return e&&n>12&&(n%=12),n<10?"0".concat(n):n},en=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_DATE":return{year:e.date.getFullYear(),month:e.date.getMonth(),day:e.date.getDate(),hours:nn(e.date.getHours(),!0),minutes:nn(e.date.getMinutes(),!1),seconds:nn(e.date.getSeconds(),!1),period:e.date.getHours()>12?"PM":"AM"};default:return n}},tn=t(26),on={nextTodoId:0,todoItems:[]},rn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return""===e.text.trim()?n:{nextTodoId:n.nextTodoId+1,todoItems:[{id:"todo-".concat(n.nextTodoId),text:e.text,completed:!1}].concat(Object(tn.a)(n.todoItems))};case"DELETE_TODO":return Object(s.a)({},n,{todoItems:n.todoItems.filter(function(n){return n.id!==e.id})});case"TOGGLE_TODO":return Object(s.a)({},n,{todoItems:n.todoItems.map(function(n){return n.id===e.id?Object(s.a)({},n,{completed:!n.completed}):n})});default:return n}},an=Object(v.b)({DateHandler:en,TodoHandler:rn}),cn=function(){try{var n=localStorage.getItem("binder-state");if(null===n)return;return JSON.parse(n)}catch(e){return}},un=function(n){return void 0===cn()?Object(v.c)(n):Object(v.c)(n,cn())}(an);un.subscribe(function(){!function(n){try{var e=JSON.stringify(n);localStorage.setItem("binder-state",e)}catch(t){alert("An error has occurred while saving your data.")}}(un.getState())}),d.a.render(c.a.createElement(x.a,{store:un},c.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.f20a49f6.chunk.js.map