!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t,console.log(t),e.disabled=!0,n.disabled=!1}e.addEventListener("click",(function(){t=setInterval(o,1e3)})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.1a5e497f.js.map