(()=>{"use strict";var e,t,o,r,n={375:(e,t,o)=>{function r(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}o.d(t,{A:()=>r})},937:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var r=o(375),n=window.matchMedia("(prefers-color-scheme: dark)");function i(e){document.documentElement.dataset.theme=n.matches?"dark":"light"}function l(e){"light"!==e&&"dark"!==e&&"auto"!==e&&(console.error(`Got invalid theme mode: ${e}. Resetting to auto.`),e="auto");var t=n.matches?"dark":"light";document.documentElement.dataset.mode=e;var o="auto"==e?t:e;document.documentElement.dataset.theme=o,localStorage.setItem("mode",e),localStorage.setItem("theme",o),console.log(`[PST]: Changed to ${e} mode using the ${o} theme.`),n.onchange="auto"==e?i:""}function s(){const e=document.documentElement.dataset.defaultMode||"auto",t=localStorage.getItem("mode")||e;var o,r;l(((r=(o=n.matches?["auto","light","dark"]:["auto","dark","light"]).indexOf(t)+1)===o.length&&(r=0),o[r]))}function u(){l(document.documentElement.dataset.mode),document.querySelectorAll(".theme-switch-button").forEach((e=>{e.addEventListener("click",s)}))}function m(){window.addEventListener("activate.bs.scrollspy",(function(){document.querySelectorAll(".bd-toc-nav a").forEach((e=>{e.parentElement.classList.remove("active")})),document.querySelectorAll(".bd-toc-nav a.active").forEach((e=>{e.parentElement.classList.add("active")}))}))}function h(){if(!document.querySelector(".bd-docs-nav"))return;var e=document.querySelector("div.bd-sidebar");let t=parseInt(sessionStorage.getItem("sidebar-scroll-top"),10);if(isNaN(t)){var o=document.querySelector(".bd-docs-nav").querySelectorAll(".active");if(o.length>0){var r=o[o.length-1],n=r.getBoundingClientRect().y-e.getBoundingClientRect().y;if(r.getBoundingClientRect().y>.5*window.innerHeight){let t=.25;e.scrollTop=n-e.clientHeight*t,console.log("[PST]: Scrolled sidebar using last active link...")}}}else e.scrollTop=t,console.log("[PST]: Scrolled sidebar using stored browser position...");window.addEventListener("beforeunload",(()=>{sessionStorage.setItem("sidebar-scroll-top",e.scrollTop)}))}var a=()=>{let e=document.querySelectorAll("form.bd-search");return e.length?(1==e.length?e[0]:document.querySelector("div:not(.search-button__search-container) > form.bd-search")).querySelector("input"):void 0},c=()=>{let e=a(),t=document.querySelector(".search-button__wrapper");e===t.querySelector("input")&&t.classList.toggle("show"),document.activeElement===e?e.blur():(e.focus(),e.select(),e.scrollIntoView({block:"center"}))};function f(e){const t=`${DOCUMENTATION_OPTIONS.pagename}.html`,o=e.currentTarget.getAttribute("href");let r=o.replace(t,"");fetch(o,{method:"HEAD"}).then((()=>{location.href=o})).catch((e=>{location.href=r})),e.preventDefault()}async function v(e){try{var t=new URL(e)}catch(o){if(!(o instanceof TypeError))throw o;{const o=await fetch(window.location.origin,{method:"HEAD"});t=new URL(e,o.url)}}const o=await fetch(t);return await o.json()}var d=document.querySelectorAll(".version-switcher__button");if(d.length){const b=await v(DOCUMENTATION_OPTIONS.theme_switcher_json_url),g=`${DOCUMENTATION_OPTIONS.pagename}.html`;d.forEach((e=>{e.dataset.activeVersionName="",e.dataset.activeVersion=""})),b.forEach((e=>{"name"in e||(e.name=e.version);const t=document.createElement("a");t.setAttribute("class","list-group-item list-group-item-action py-1"),t.setAttribute("href",`${e.url}${g}`),t.setAttribute("role","option");const o=document.createElement("span");o.textContent=`${e.name}`,t.appendChild(o),t.dataset.versionName=e.name,t.dataset.version=e.version,e.version==DOCUMENTATION_OPTIONS.theme_switcher_version_match&&(t.classList.add("active"),d.forEach((t=>{t.innerText=e.name,t.dataset.activeVersionName=e.name,t.dataset.activeVersion=e.version}))),document.querySelectorAll(".version-switcher__menu").forEach((e=>{let o=t.cloneNode(!0);o.onclick=f,e.append(o)}))}))}function p(){new MutationObserver(((e,t)=>{e.forEach((e=>{0!==e.addedNodes.length&&void 0!==e.addedNodes[0].data&&-1!=e.addedNodes[0].data.search("Inserted RTD Footer")&&e.addedNodes.forEach((e=>{document.getElementById("rtd-footer-container").append(e)}))}))})).observe(document.body,{childList:!0})}(0,r.A)(u),(0,r.A)(h),(0,r.A)(m),(0,r.A)((()=>{(()=>{let e=document.querySelectorAll("form.bd-search");window.navigator.platform.toUpperCase().indexOf("MAC")>=0&&e.forEach((e=>e.querySelector("kbd.kbd-shortcut__modifier").innerText="⌘"))})(),window.addEventListener("keydown",(e=>{let t=a();(e.ctrlKey||e.metaKey)&&"KeyK"==e.code?(e.preventDefault(),c()):document.activeElement===t&&"Escape"==e.code&&c()}),!0),document.querySelectorAll(".search-button__button").forEach((e=>{e.onclick=c}));let e=document.querySelector(".search-button__overlay");e&&(e.onclick=c)})),(0,r.A)(p),t()}catch(y){t(y)}}),1)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,c),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(n,a,c)=>{var d;c&&((d=[]).d=1);var i,l,s,u=new Set,m=n.exports,h=new Promise(((e,t)=>{s=t,l=e}));h[t]=m,h[e]=e=>(d&&e(d),u.forEach(e),h.catch((e=>{}))),n.exports=h,a((n=>{var a;i=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{c[t]=e,r(a)}),(e=>{c[o]=e,r(a)}));var c={};return c[e]=e=>e(a),c}}var d={};return d[e]=e=>{},d[t]=n,d})))(n);var c=()=>i.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(a=()=>t(c)).r=0;var o=e=>e!==d&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((t=>t[e](o)))}));return a.r?l:c()}),(e=>(e?s(h[o]=e):l(m),r(d)))),d&&(d.d=0)},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(937)})();
//# sourceMappingURL=pydata-sphinx-theme.js.map