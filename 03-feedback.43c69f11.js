function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("kEUo3");const r=document.querySelector("input[name='email']"),u=document.querySelector("textarea[name='message']"),i=document.querySelector("button[type='submit']");let s=e(l).throttle((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:r.value,message:u.value}))}),500);!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));r.value=null!=e.email?e.email:"",u.value=null!=e.message?e.message:""}(),r.addEventListener("input",s),u.addEventListener("input",s),i.addEventListener("click",(e=>{!function(e){e.preventDefault(),r.value="",u.value="",console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}(e)}));
//# sourceMappingURL=03-feedback.43c69f11.js.map
