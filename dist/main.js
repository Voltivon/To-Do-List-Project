(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"body, html{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'comic sans', Courier, monospace;\n    \n}\n\n\n#content-div{\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    \n}\n\n.form-div{\n    display: grid;\n    text-align: center;\n    justify-items: center;\n    align-content: center;\n    width: 200px;\n    align-items: center;\n    \n}\n\n.user-input {\n    margin-bottom: 20px;\n}\n\n",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],s=o.base?c[0]+o.base:c[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var m=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=l,t.splice(l,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var c=o(e,r),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{Math.pow(10,8);var e=36e5;function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function r(e,n){var r;t(1,arguments);var a=o(null!==(r=null==n?void 0:n.additionalDigits)&&void 0!==r?r:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,l=s(e);if(l.date){var c=u(l.date,a);i=d(c.restDateString,c.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var m,f=i.getTime(),v=0;if(l.time&&(v=p(l.time),isNaN(v)))return new Date(NaN);if(!l.timezone){var y=new Date(f+v),h=new Date(0);return h.setFullYear(y.getUTCFullYear(),y.getUTCMonth(),y.getUTCDate()),h.setHours(y.getUTCHours(),y.getUTCMinutes(),y.getUTCSeconds(),y.getUTCMilliseconds()),h}return m=g(l.timezone),isNaN(m)?new Date(NaN):new Date(f+v+m)}var a={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e){var t,n={},o=e.split(a.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?t=o[0]:(n.date=o[0],t=o[1],a.timeZoneDelimiter.test(n.date)&&(n.date=e.split(a.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=a.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function u(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:NaN,restDateString:""};var r=o[1]?parseInt(o[1]):null,a=o[2]?parseInt(o[2]):null;return{year:null===a?r:100*a,restDateString:e.slice((o[1]||o[2]).length)}}function d(e,t){if(null===t)return new Date(NaN);var n=e.match(i);if(!n)return new Date(NaN);var o=!!n[4],r=m(n[1]),a=m(n[2])-1,l=m(n[3]),c=m(n[4]),s=m(n[5])-1;if(o)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,s)?function(e,t,n){var o=new Date(0);o.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(t,c,s):new Date(NaN);var u=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(v[t]||(y(e)?29:28))}(t,a,l)&&function(e,t){return t>=1&&t<=(y(e)?366:365)}(t,r)?(u.setUTCFullYear(t,a,Math.max(r,l)),u):new Date(NaN)}function m(e){return e?parseInt(e):1}function p(t){var n=t.match(l);if(!n)return NaN;var o=f(n[1]),r=f(n[2]),a=f(n[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(o,r,a)?o*e+6e4*r+1e3*a:NaN}function f(e){return e&&parseFloat(e.replace(",","."))||0}function g(t){if("Z"===t)return 0;var n=t.match(c);if(!n)return 0;var o="+"===n[1]?-1:1,r=parseInt(n[2]),a=n[3]&&parseInt(n[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?o*(r*e+6e4*a):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function y(e){return e%400==0||e%4==0&&e%100!=0}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function D(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===h(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function b(){return function(e){t(1,arguments);var n=D(e);return n.setHours(0,0,0,0),n}(Date.now())}function N(){document.querySelector(".add-todo-form").style.display=""}function S(){const e=document.getElementById("add-to-checklist").value;if(""!==e){const t=document.querySelector(".todo-ul"),n=document.createElement("li");n.textContent=e;const o=document.createElement("span");o.className="remove-checklist-item";const r=document.createTextNode("×");n.appendChild(o),o.appendChild(r),t.appendChild(n),document.getElementById("add-to-checklist").value=""}if(document.querySelectorAll("li").length>0){console.log("Inside module of...,",document.querySelectorAll("li").length);const e=document.querySelectorAll("li");console.log(e),e.forEach((e=>{e.addEventListener("click",(function(){e.remove()}))}))}}function T(){const e=document.querySelectorAll("li");for(let t=0;t<e.length;t++)e[t].remove();document.getElementById("add-todo").reset()}let w=[];const C=()=>{let e=document.getElementById("Title").value,t=document.getElementById("Description").value,n=document.getElementById("DueDate").value,o=document.getElementById("Priority").value,a=document.getElementById("Notes").value;if(""==e||""==t||""==n)return void alert("Please enter a valid input");if(r(n)<b())return alert("You have entered a date that has already passed!"),console.log("due date",r(n)),void console.log("date now",b());const i=document.querySelectorAll("li");let l=[];for(let e=0;e<i.length;e++){let t=i[e].textContent.replace("×","");l.push(t)}let c=l.join(", ");return console.log("called createTodo module"),console.log({Title:e,Description:t,DueDate:n,Priority:o,Notes:a,CheckList:c}),console.log("pushing this object to array"),w.push({Title:e,Description:t,DueDate:n,Priority:o,Notes:a,CheckList:c}),console.log(w),function({Title:e,Description:t,DueDate:n,Priority:o,Notes:r,CheckList:a}){console.log("saving object to local storage"),localStorage.setItem("Title",document.getElementById("Title").value),localStorage.setItem("Description",document.getElementById("Description").value),localStorage.setItem("DueDate",document.getElementById("DueDate").value),localStorage.setItem("Priority",document.getElementById("Priority").value),localStorage.setItem("Notes",document.getElementById("Notes").value),localStorage.setItem("CheckList",a),function(){const e=document.querySelectorAll(".card");console.log("show me the node count",e);for(let t=0;t<e.length;t++)e[t].remove();console.log("display to screen");const t=document.querySelector(".projects"),n=document.createElement("div");n.classList.add(".card"),t.appendChild(n);let o={Title:localStorage.getItem("Title"),Description:localStorage.getItem("Description"),DueDate:localStorage.getItem("DueDate"),Priority:localStorage.getItem("Priority"),Notes:localStorage.getItem("Notes"),CheckList:localStorage.getItem("CheckList")};console.log(o);for(let e in o){console.log(`${e}: ${o[e]}`);const t=document.createElement("p");t.textContent=`${e}: ${o[e]}`,n.appendChild(t)}}()}({Title:e,Description:t,DueDate:n,Priority:o,CheckList:c}),T(),{Title:e,Description:t,DueDate:n,Priority:o,Notes:a,CheckList:c}};var I=n(379),E=n.n(I),x=n(795),j=n.n(x),k=n(569),L=n.n(k),P=n(565),q=n.n(P),M=n(216),U=n.n(M),B=n(589),A=n.n(B),Z=n(28),$={};$.styleTagTransform=A(),$.setAttributes=q(),$.insert=L().bind(null,"head"),$.domAPI=j(),$.insertStyleElement=U(),E()(Z.Z,$),Z.Z&&Z.Z.locals&&Z.Z.locals,function(){console.log("Called this module");let e=[];console.log("push to array");e.push({projectTitle:"Default Project blah bla blah"}),console.log(e)}(),document.querySelector(".add-todo-button").addEventListener("click",N),document.querySelector(".add-new-item").addEventListener("click",S),document.querySelector(".reset-button").addEventListener("click",T),document.querySelector(".submit-button").addEventListener("click",C);const F=C();console.log("show properties from todo",F)})()})();