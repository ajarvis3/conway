(this.webpackJsonpconway=this.webpackJsonpconway||[]).push([[0],{121:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),c=n(13),a=n.n(c),u=(n(39),n(40),n(5)),h=n(2),s=Object(u.b)({key:"widthState",default:5}),f=Object(u.b)({key:"heightState",default:5}),l=Object(u.b)({key:"runState",default:!1}),o=n(3),v=function(){var t=Object(u.c)(l),e=Object(h.a)(t,2),n=e[0],i=e[1];return Object(o.jsx)("button",{onClick:function(){return i(!n)},children:n?"Stop":"Run"})},j=n(34),b=n.n(j),d=function(t){var e=t.state,n=t.setState,i=t.label;return Object(o.jsxs)("span",{children:[i,":",Object(o.jsx)("input",{type:"number",onChange:function(t){b.a.isInt(t.target.value)?n(parseInt(t.target.value)):n(0)},value:e})]})},O=function(){var t=Object(u.c)(s),e=Object(h.a)(t,2),n=e[0],i=e[1],r=Object(u.c)(f),c=Object(h.a)(r,2),a=c[0],l=c[1];return Object(o.jsxs)("div",{id:"control",children:[Object(o.jsx)(d,{state:n,setState:i,label:"Width"}),Object(o.jsx)(d,{state:a,setState:l,label:"Height"}),Object(o.jsx)(v,{})]})};var g=function(t,e){var n=Object(i.useRef)(t);Object(i.useEffect)((function(){n.current=t}),[t]),Object(i.useEffect)((function(){if(null!==e){var t=setInterval((function(){return n.current()}),e);return function(){return clearInterval(t)}}}),[e])},w=n(4),p=n(7),x=function(){function t(e,n){Object(w.a)(this,t),this.alive=void 0,this.width=void 0,this.height=void 0,this.width=e,this.height=n,this.alive=new Array(n).fill(!1).map((function(){return new Array(e).fill(!1)}))}return Object(p.a)(t,[{key:"toggleAlive",value:function(e,n){var i=new t(this.width,this.height);return i.alive=this.alive.map((function(t){return t.slice()})),i.alive[e][n]=!this.alive[e][n],i}},{key:"runRound",value:function(){var e=new t(this.width,this.height);e.alive=this.alive.map((function(t){return t.slice()}));for(var n=0;n<this.height;n++)for(var i=0;i<this.width;i++){var r=0;n>0&&this.alive[n-1][i]&&(r+=1),n<this.height-1&&this.alive[n+1][i]&&(r+=1),i>0&&this.alive[n][i-1]&&(r+=1),i<this.width-1&&this.alive[n][i+1]&&(r+=1),n>0&&i>0&&this.alive[n-1][i-1]&&(r+=1),n>0&&i<this.width-1&&this.alive[n-1][i+1]&&(r+=1),n<this.height-1&&i>0&&this.alive[n+1][i-1]&&(r+=1),n<this.height-1&&i<this.width-1&&this.alive[n+1][i+1]&&(r+=1),r<2||r>3?e.alive[n][i]=!1:this.alive[n][i]||3!==r||(e.alive[n][i]=!0)}return e}}]),t}(),y=function(){var t=Object(u.d)(s),e=Object(u.d)(f),n=Object(u.d)(l),r=Object(i.useRef)(0),c=Object(i.useRef)(0),a=Object(i.useRef)(null),v=Object(i.useRef)((function(){})),j=Object(i.useState)(new x(t,e)),b=Object(h.a)(j,2),d=b[0],O=b[1];Object(i.useEffect)((function(){if(a&&a.current){var t=a.current.getContext("2d");t.clearRect(0,0,a.current.width,a.current.height);for(var e=0;e<d.height;e++)for(var n=0;n<d.width;n++){var i=d.alive[e][n]?"#ffffff":"#000000";t.fillStyle=i,t.strokeStyle="#808080";var u=n*r.current,h=e*c.current;t.fillRect(u,h,r.current,c.current),t.beginPath(),t.rect(u,h,r.current,c.current),t.stroke()}}}),[d,t,e]),Object(i.useEffect)((function(){a&&(O(new x(t,e)),r.current=a.current.width/t,c.current=a.current.height/e)}),[t,e]),Object(i.useEffect)((function(){v.current=n?function(){O(d.runRound())}:function(){}})),g((function(){v.current()}),1e3);var w=Object(i.useCallback)((function(t){if(a&&a.current){var e=Math.floor(t.nativeEvent.offsetX/r.current),n=Math.floor(t.nativeEvent.offsetY/c.current);O(d.toggleAlive(n,e))}}),[d]),p=window.innerHeight<window.innerWidth?.9*window.innerHeight:.9*window.innerWidth,y=p*(t>e?1:t/e),k=p*(e>t?1:e/t);return Object(o.jsx)("canvas",{id:"conway-game",ref:a,onClick:w,width:y,height:k})};var k=function(){return Object(o.jsx)(u.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(O,{}),Object(o.jsx)(y,{})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),c(t),a(t)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),S()},39:function(t,e,n){},40:function(t,e,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.8d79e583.chunk.js.map