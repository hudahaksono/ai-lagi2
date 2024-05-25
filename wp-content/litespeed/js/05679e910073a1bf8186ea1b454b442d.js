window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/lagi.uxper.co\/wp-includes\/js\/wp-emoji-release.min.js"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83d\udc26\u200d\u2b1b","\ud83d\udc26\u200b\u2b1b")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLiteSpeedLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings)
;/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
;/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){e.fn._fadeIn=e.fn.fadeIn;var t=e.noop||function(){},o=/MSIE/.test(navigator.userAgent),n=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),i=(document.documentMode,"function"==typeof document.createElement("div").style.setExpression&&document.createElement("div").style.setExpression);e.blockUI=function(e){d(window,e)},e.unblockUI=function(e){a(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.on("mouseover",function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).on("mouseout",function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var o=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var t=e(this);o.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,d(this,t)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){a(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var s=null,l=[];function d(d,c){var u,b,h=d==window,k=c&&c.message!==undefined?c.message:undefined;if(!(c=e.extend({},e.blockUI.defaults,c||{})).ignoreIfBlocked||!e(d).data("blockUI.isBlocked")){if(c.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,c.overlayCSS||{}),u=e.extend({},e.blockUI.defaults.css,c.css||{}),c.onOverlayClick&&(c.overlayCSS.cursor="pointer"),b=e.extend({},e.blockUI.defaults.themedCSS,c.themedCSS||{}),k=k===undefined?c.message:k,h&&s&&a(window,{fadeOut:0}),k&&"string"!=typeof k&&(k.parentNode||k.jquery)){var y=k.jquery?k[0]:k,m={};e(d).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(d).data("blockUI.onUnblock",c.onUnblock);var g,v,I,w,U=c.baseZ;g=o||c.forceIframe?e('<iframe class="blockUI" style="z-index:'+U+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+c.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),v=c.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+U+++';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+U+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),c.theme&&h?(w='<div class="blockUI '+c.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(U+10)+';display:none;position:fixed">',c.title&&(w+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),w+='<div class="ui-widget-content ui-dialog-content"></div>',w+="</div>"):c.theme?(w='<div class="blockUI '+c.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(U+10)+';display:none;position:absolute">',c.title&&(w+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),w+='<div class="ui-widget-content ui-dialog-content"></div>',w+="</div>"):w=h?'<div class="blockUI '+c.blockMsgClass+' blockPage" style="z-index:'+(U+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+c.blockMsgClass+' blockElement" style="z-index:'+(U+10)+';display:none;position:absolute"></div>',I=e(w),k&&(c.theme?(I.css(b),I.addClass("ui-widget-content")):I.css(u)),c.theme||v.css(c.overlayCSS),v.css("position",h?"fixed":"absolute"),(o||c.forceIframe)&&g.css("opacity",0);var x=[g,v,I],C=e(h?"body":d);e.each(x,function(){this.appendTo(C)}),c.theme&&c.draggable&&e.fn.draggable&&I.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var S=i&&(!e.support.boxModel||e("object,embed",h?null:d).length>0);if(n||S){if(h&&c.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(n||!e.support.boxModel)&&!h)var E=p(d,"borderTopWidth"),O=p(d,"borderLeftWidth"),T=E?"(0 - "+E+")":0,M=O?"(0 - "+O+")":0;e.each(x,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)h?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+c.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),h?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),M&&o.setExpression("left",M),T&&o.setExpression("top",T);else if(c.centerY)h&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!c.centerY&&h){var n="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(c.css&&c.css.top?parseInt(c.css.top,10):0)+') + "px"';o.setExpression("top",n)}})}if(k&&(c.theme?I.find(".ui-widget-content").append(k):I.append(k),(k.jquery||k.nodeType)&&e(k).show()),(o||c.forceIframe)&&c.showOverlay&&g.show(),c.fadeIn){var B=c.onBlock?c.onBlock:t,j=c.showOverlay&&!k?B:t,H=k?B:t;c.showOverlay&&v._fadeIn(c.fadeIn,j),k&&I._fadeIn(c.fadeIn,H)}else c.showOverlay&&v.show(),k&&I.show(),c.onBlock&&c.onBlock.bind(I)();if(r(1,d,c),h?(s=I[0],l=e(c.focusableElements,s),c.focusInput&&setTimeout(f,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-p(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-p(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0");o&&(i.top=l>0?l+"px":"0")}(I[0],c.centerX,c.centerY),c.timeout){var z=setTimeout(function(){h?e.unblockUI(c):e(d).unblock(c)},c.timeout);e(d).data("blockUI.timeout",z)}}}function a(t,o){var n,i,d=t==window,a=e(t),u=a.data("blockUI.history"),f=a.data("blockUI.timeout");f&&(clearTimeout(f),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),r(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock")),i=d?e(document.body).children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(i.length>1&&(i[1].style.cursor=o.cursorReset),i.length>2&&(i[2].style.cursor=o.cursorReset)),d&&(s=l=null),o.fadeOut?(n=i.length,i.stop().fadeOut(o.fadeOut,function(){0==--n&&c(i,u,o,t)})):c(i,u,o,t)}function c(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function r(t,o,n){var i=o==window,l=e(o);if((t||(!i||s)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).on(d,n,u):e(document).off(d,u)}}function u(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&s&&t.data.constrainTabKey){var o=l,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){f(i)},10),!1}var d=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&d.onOverlayClick&&d.onOverlayClick(t),a.parents("div."+d.blockMsgClass).length>0||0===a.parents().children().filter("div.blockUI").length}function f(e){if(l){var t=l[!0===e?l.length-1:0];t&&t.trigger("focus")}}function p(t,o){return parseInt(e.css(t,o),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
;var wc_add_to_cart_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/lagi.uxper.co\/cart\/","is_cart":"","cart_redirect_after_add":"no"}
;jQuery(function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;var a=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),t(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("ajax_request_not_sent.adding_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)};a.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},a.prototype.run=function(){var a=this,e=a.requests[0].complete;a.requests[0].complete=function(){"function"==typeof e&&e(),a.requests.shift(),a.requests.length>0&&a.run()},t.ajax(this.requests[0])},a.prototype.onAddToCart=function(a){var e=t(this);if(e.is(".ajax_add_to_cart")){if(!e.attr("data-product_id"))return!0;if(a.preventDefault(),e.removeClass("added"),e.addClass("loading"),!1===t(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[e]))return t(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,e]),!0;var r={};t.each(e.data(),function(t,a){r[t]=a}),t.each(e[0].dataset,function(t,a){r[t]=a}),t(document.body).trigger("adding_to_cart",[e,r]),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:r,success:function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,e]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},a.prototype.onRemoveFromCart=function(a){var e=t(this),r=e.closest(".woocommerce-mini-cart-item");a.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:e.data("cart_item_key")},success:function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash,e]):window.location=e.attr("href")},error:function(){window.location=e.attr("href")},dataType:"json"})},a.prototype.updateButton=function(a,e,r,d){(d=void 0!==d&&d)&&(d.removeClass("loading"),e&&d.addClass("added"),e&&!wc_add_to_cart_params.is_cart&&0===d.parent().find(".added_to_cart").length&&d.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[d]))},a.prototype.updateFragments=function(a,e){e&&(t.each(e,function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),t.each(e,function(a,e){t(a).replaceWith(e),t(a).stop(!0).css("opacity","1").unblock()}),t(document.body).trigger("wc_fragments_loaded"))},new a});
;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}(function(){})});
;var woocommerce_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"}
;jQuery(function(o){o(".woocommerce-ordering").on("change","select.orderby",function(){o(this).closest("form").trigger("submit")}),o("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(o(this).attr("min"));e>=0&&parseFloat(o(this).val())<e&&o(this).val(e)});var e="store_notice"+(o(".woocommerce-store-notice").data("noticeId")||"");"hidden"===Cookies.get(e)?o(".woocommerce-store-notice").hide():o(".woocommerce-store-notice").show(),o(".woocommerce-store-notice__dismiss-link").on("click",function(s){Cookies.set(e,"hidden",{path:"/"}),o(".woocommerce-store-notice").hide(),s.preventDefault()}),o(".woocommerce-input-wrapper span.description").length&&o(document.body).on("click",function(){o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),o(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),o(".woocommerce-input-wrapper :input").on("keydown",function(e){var s=o(this).parent().find("span.description");if(27===e.which&&s.length&&s.is(":visible"))return s.prop("aria-hidden",!0).slideUp(250),e.preventDefault(),!1}).on("click focus",function(){var e=o(this).parent(),s=e.find("span.description");e.addClass("currentTarget"),o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),s.length&&s.is(":hidden")&&s.prop("aria-hidden",!1).slideDown(250),e.removeClass("currentTarget")}),o.scroll_to_notices=function(e){e.length&&o("html, body").animate({scrollTop:e.offset().top-100},1e3)},o('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),o(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),o(".password-input").append('<span class="show-password-input"></span>'),o(".show-password-input").on("click",function(){o(this).hasClass("display-password")?o(this).removeClass("display-password"):o(this).addClass("display-password"),o(this).hasClass("display-password")?o(this).siblings(['input[type="password"]']).prop("type","text"):o(this).siblings('input[type="text"]').prop("type","password")})});
;(function(){var c=document.body.className;c=c.replace(/woocommerce-no-js/,'woocommerce-js');document.body.className=c})()
;(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function s(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const e=()=>{const t=new Map;return t.largestIndex=0,t.set=function(e,s){""===e?e=t.largestIndex++:/^[0-9]+$/.test(e)&&(e=parseInt(e),t.largestIndex<=e&&(t.largestIndex=e+1)),Map.prototype.set.call(t,e,s)},t};this.tree=e();const s=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,i]of this.formData){const n=t.match(s);if(n)if(""===n.groups.array)this.tree.set(n.groups.name,i);else{const t=[...n.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t,e])=>e));t.unshift(n.groups.name);const s=t.pop();t.reduce(((t,s)=>{if(/^[0-9]+$/.test(s)&&(s=parseInt(s)),t.get(s)instanceof Map)return t.get(s);const i=e();return t.set(s,i),i}),this.tree).set(s,i)}}}t.r(e),t.d(e,{date:()=>d,dayofweek:()=>u,email:()=>r,enum:()=>h,file:()=>f,maxdate:()=>z,maxfilesize:()=>I,maxitems:()=>v,maxlength:()=>x,maxnumber:()=>b,mindate:()=>A,minfilesize:()=>$,minitems:()=>g,minlength:()=>w,minnumber:()=>y,number:()=>c,required:()=>o,requiredfile:()=>a,tel:()=>l,time:()=>m,url:()=>p}),s.prototype.entries=function(){return this.tree.entries()},s.prototype.get=function(t){return this.tree.get(t)},s.prototype.getAll=function(t){if(!this.has(t))return[];const e=t=>{const s=[];if(t instanceof Map)for(const[i,n]of t)s.push(...e(n));else""!==t&&s.push(t);return s};return e(this.get(t))},s.prototype.has=function(t){return this.tree.has(t)},s.prototype.keys=function(){return this.tree.keys()},s.prototype.values=function(){return this.tree.values()};const i=s;function n({rule:t,field:e,error:s,...i}){this.rule=t,this.field=e,this.error=s,this.properties=i}const o=function(t){if(0===t.getAll(this.field).length)throw new n(this)},a=function(t){if(0===t.getAll(this.field).length)throw new n(this)},r=function(t){if(!t.getAll(this.field).every((t=>{if((t=t.trim()).length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,s]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(s))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(s))return!1;const i=s.split(".");if(i.length<2)return!1;for(const t of i){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))return!1;if(!/^[a-z0-9-]+$/i.test(t))return!1}return!0})))throw new n(this)},p=function(t){const e=t.getAll(this.field);if(!e.every((t=>{if(""===(t=t.trim()))return!1;try{return(t=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(t))(new URL(t).protocol.replace(/:$/,""))}catch{return!1}})))throw new n(this)},l=function(t){if(!t.getAll(this.field).every((t=>(t=(t=t.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(t)))))throw new n(this)},c=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)))))throw new n(this)},d=function(t){if(!t.getAll(this.field).every((t=>{if(t=t.trim(),!/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t))return!1;const e=new Date(t);return!Number.isNaN(e.valueOf())})))throw new n(this)},m=function(t){if(!t.getAll(this.field).every((t=>{const e=t.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);if(!e)return!1;const s=parseInt(e[1]),i=parseInt(e[2]),n=e[3]?parseInt(e[3]):0;return 0<=s&&s<=23&&0<=i&&i<=59&&0<=n&&n<=59})))throw new n(this)},f=function(t){if(!t.getAll(this.field).every((t=>t instanceof File&&this.accept?.some((e=>/^\.[a-z0-9]+$/i.test(e)?t.name.toLowerCase().endsWith(e.toLowerCase()):(t=>{const e=[],s=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(s){const t=s.groups.toplevel.toLowerCase(),i=s.groups.sub.toLowerCase();for(const[n,o]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===i&&o.startsWith(t+"/")||o===s[0])&&e.push(...n.split("|"))}return e})(e).some((e=>(e="."+e.trim(),t.name.toLowerCase().endsWith(e.toLowerCase())))))))))throw new n(this)},h=function(t){if(!t.getAll(this.field).every((t=>this.accept?.some((e=>t===String(e))))))throw new n(this)},u=function(t){if(!t.getAll(this.field).every((t=>{const e=0===(s=new Date(t).getDay())?7:s;var s;return this.accept?.some((t=>e===parseInt(t)))})))throw new n(this)},g=function(t){if(t.getAll(this.field).length<parseInt(this.threshold))throw new n(this)},v=function(t){const e=t.getAll(this.field);if(parseInt(this.threshold)<e.length)throw new n(this)},w=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{"string"==typeof t&&(s+=t.length)})),0!==s&&s<parseInt(this.threshold))throw new n(this)},x=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{"string"==typeof t&&(s+=t.length)})),parseInt(this.threshold)<s)throw new n(this)},y=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(t)<parseFloat(this.threshold)))))throw new n(this)},b=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(this.threshold)<parseFloat(t)))))throw new n(this)},A=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold)))))throw new n(this)},z=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t)))))throw new n(this)},$=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{t instanceof File&&(s+=t.size)})),s<parseInt(this.threshold))throw new n(this)},I=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{t instanceof File&&(s+=t.size)})),parseInt(this.threshold)<s)throw new n(this)};var E;window.swv={validators:e,validate:(t,s,o={})=>{const a=(t.rules??[]).filter((({rule:t,...s})=>"function"==typeof e[t]&&("function"!=typeof e[t].matches||e[t].matches(s,o))));if(!a.length)return new Map;const r=new i(s),p=a.reduce(((t,s)=>{const{rule:i,...o}=s;if(t.get(o.field)?.error)return t;try{e[i].call({rule:i,...o},r)}catch(e){if(e instanceof n)return t.set(o.field,e)}return t}),new Map);for(const t of r.keys())p.has(t)||p.set(t,{validInputs:r.getAll(t)});return p},...null!==(E=window.swv)&&void 0!==E?E:{}}})()
;var wpcf7={"api":{"root":"https:\/\/lagi.uxper.co\/wp-json\/","namespace":"contact-form-7\/v1"},"cached":"1"}
;(()=>{"use strict";const e=e=>Math.abs(parseInt(e,10)),t=(e,t)=>{const a=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);a.has(t)&&(t=a.get(t)),Array.from(a.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const n=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),n&&n!==t&&e.classList.remove(n),t},a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return r.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:o,path:c,endpoint:s,headers:i,body:l,data:d,...p}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),c=r?n+"/"+r:n),"string"==typeof c&&(-1!==t.indexOf("?")&&(c=c.replace("?","&")),c=c.replace(/^\//,""),o=t+c),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],d&&(l=JSON.stringify(d),i["Content-Type"]="application/json");const u={code:"fetch_error",message:"You are probably offline."},f={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(o||c||window.location.href,{...p,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw f}));throw f}))),(()=>{throw u}))}))(e)},r=[];function o(e){var a,n;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{target:o,scope:l=e,...d}=r;if(void 0===(null===(a=e.wpcf7)||void 0===a?void 0:a.schema))return;const p={...e.wpcf7.schema};if(void 0!==o){if(!e.contains(o))return;if(!o.closest(".wpcf7-form-control-wrap[data-name]"))return;if(o.closest(".novalidate"))return}const u=new FormData,f=[];for(const e of l.querySelectorAll(".wpcf7-form-control-wrap"))if(!e.closest(".novalidate")&&(e.querySelectorAll(":where( input, textarea, select ):enabled").forEach((e=>{if(e.name)switch(e.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":e.checked&&u.append(e.name,e.value);break;case"select-multiple":for(const t of e.selectedOptions)u.append(e.name,t.value);break;case"file":for(const t of e.files)u.append(e.name,t);break;default:u.append(e.name,e.value)}})),e.dataset.name&&(f.push(e.dataset.name),e.setAttribute("data-under-validation","1"),e.contains(o))))break;p.rules=(null!==(n=p.rules)&&void 0!==n?n:[]).filter((e=>{let{field:t}=e;return f.includes(t)}));const m=e.getAttribute("data-status");Promise.resolve(t(e,"validating")).then((t=>{if(void 0!==swv){const t=swv.validate(p,u,r);for(const[a,{error:n,validInputs:r}]of t)s(e,a),void 0!==n&&c(e,a,n,{scope:l}),i(e,a,null!=r?r:[])}})).finally((()=>{t(e,m),e.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach((e=>{e.removeAttribute("data-under-validation")}))}))}n.use=e=>{r.unshift(e)};const c=(e,t,a,n)=>{var r;const{scope:o=e,...c}=null!=n?n:{},s=`${null===(r=e.wpcf7)||void 0===r?void 0:r.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),i=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",s),i&&i.id?t.insertAdjacentHTML("beforeend",`<a href="#${i.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),o.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((t=>{if("validating"===e.getAttribute("data-status")&&!t.dataset.underValidation)return;const n=document.createElement("span");n.classList.add("wpcf7-not-valid-tip"),n.setAttribute("aria-hidden","true"),n.insertAdjacentText("beforeend",a),t.appendChild(n),t.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),t.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",s),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{n.setAttribute("style","display: none")})),n.addEventListener("click",(e=>{n.setAttribute("style","display: none")})))}))}))},s=(e,t)=>{var a,n;const r=`${null===(a=e.wpcf7)||void 0===a?void 0:a.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");null===(n=e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${r}`))||void 0===n||n.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{var t;null===(t=e.querySelector(".wpcf7-not-valid-tip"))||void 0===t||t.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},i=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{if("output"===e.tagName.toLowerCase()){const t=e;0===a.length&&a.push(t.dataset.default),a.slice(0,1).forEach((e=>{e instanceof File&&(e=e.name),t.textContent=e}))}else e.querySelectorAll("output").forEach((e=>{e.hasAttribute("data-default")?0===a.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()})),a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.textContent=a,e.appendChild(n)}))}))};function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return d(e),void t(e,"submitting");const o=new FormData(e);r.submitter&&r.submitter.name&&o.append(r.submitter.name,r.submitter.value);const s={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(o,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:o};n({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:o,wpcf7:{endpoint:"feedback",form:e,detail:s}}).then((n=>{const r=t(e,n.status);return s.status=n.status,s.apiResponse=n,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,s):["sent","failed"].includes(r)&&a(e,`mail${r}`,s),a(e,"submit",s),n})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{c(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}n.use(((e,n)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:n,detail:r}=e.wpcf7;d(n),a(n,"beforesubmit",r),t(n,"submitting")}return n(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&s(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function p(e){const r=new FormData(e),o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(r,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:r};n({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:o}}).then((n=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),o.apiResponse=n,a(e,"reset",o)})).catch((e=>console.error(e)))}n.use(((e,a)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:a,detail:n}=e.wpcf7;d(a),t(a,"resetting")}return a(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},f=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function m(t){const a=new FormData(t);t.wpcf7={id:e(a.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:e(a.get("_wpcf7_container_post")),parent:t.closest(".wpcf7"),schema:void 0},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(t),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(t),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(t),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(t),(t=>{const a=(t,a)=>{const n=e(t.getAttribute("data-starting-value")),r=e(t.getAttribute("data-maximum-value")),o=e(t.getAttribute("data-minimum-value")),c=t.classList.contains("down")?n-a.value.length:a.value.length;t.setAttribute("data-current-value",c),t.innerText=c,r&&r<a.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),o&&a.value.length<o?t.classList.add("too-short"):t.classList.remove("too-short")},n=e=>{e={init:!1,...e},t.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),o=t.querySelector(`[name="${r}"]`);o&&(o.value=o.defaultValue,a(n,o),e.init&&o.addEventListener("keyup",(e=>{a(n,o)})))}))};n({init:!0}),t.addEventListener("wpcf7reset",(e=>{n()}))})(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{wpcf7.submit(t,{submitter:e.submitter}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),n({endpoint:`contact-forms/${t.wpcf7.id}/feedback/schema`,method:"GET"}).then((e=>{t.wpcf7.schema=e})),t.addEventListener("change",(e=>{e.target.closest(".wpcf7-form-control")&&wpcf7.validate(t,{target:e.target})}))}document.addEventListener("DOMContentLiteSpeedLoaded",(e=>{var t;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:m,submit:l,reset:p,validate:o,...null!==(t=wpcf7)&&void 0!==t?t:{}},document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}))):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")}))})()
;(function($){'use strict';$(document).on('ready',function(){})})(jQuery)
;/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window,factory){if(typeof define=='function'&&define.amd){define('jquery-bridget/jquery-bridget',['jquery'],function(jQuery){return factory(window,jQuery)})}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('jquery'))}else{window.jQueryBridget=factory(window,window.jQuery)}}(window,function factory(window,jQuery){'use strict';var arraySlice=Array.prototype.slice;var console=window.console;var logError=typeof console=='undefined'?function(){}:function(message){console.error(message)};function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return}
	if(!PluginClass.prototype.option){PluginClass.prototype.option=function(opts){if(!$.isPlainObject(opts)){return}
		this.options=$.extend(!0,this.options,opts)}}
	$.fn[namespace]=function(arg0){if(typeof arg0=='string'){var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args)}
		plainCall(this,arg0);return this};function methodCall($elems,methodName,args){var returnValue;var pluginMethodStr='$().'+namespace+'("'+methodName+'")';$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(!instance){logError(namespace+' not initialized. Cannot call methods, i.e. '+pluginMethodStr);return}
		var method=instance[methodName];if(!method||methodName.charAt(0)=='_'){logError(pluginMethodStr+' is not a valid method');return}
		var value=method.apply(instance,args);returnValue=returnValue===undefined?value:returnValue});return returnValue!==undefined?returnValue:$elems}
	function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){instance.option(options);instance._init()}else{instance=new PluginClass(elem,options);$.data(elem,namespace,instance)}})}
	updateJQuery($)}
	function updateJQuery($){if(!$||($&&$.bridget)){return}
		$.bridget=jQueryBridget}
	updateJQuery(jQuery||window.jQuery);return jQueryBridget}));(function(global,factory){if(typeof define=='function'&&define.amd){define('ev-emitter/ev-emitter',factory)}else if(typeof module=='object'&&module.exports){module.exports=factory()}else{global.EvEmitter=factory()}}(typeof window!='undefined'?window:this,function(){function EvEmitter(){}
	var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return}
		var events=this._events=this._events||{};var listeners=events[eventName]=events[eventName]||[];if(listeners.indexOf(listener)==-1){listeners.push(listener)}
		return this};proto.once=function(eventName,listener){if(!eventName||!listener){return}
		this.on(eventName,listener);var onceEvents=this._onceEvents=this._onceEvents||{};var onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};onceListeners[listener]=!0;return this};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return}
		var index=listeners.indexOf(listener);if(index!=-1){listeners.splice(index,1)}
		return this};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return}
		listeners=listeners.slice(0);args=args||[];var onceListeners=this._onceEvents&&this._onceEvents[eventName];for(var i=0;i<listeners.length;i++){var listener=listeners[i]
			var isOnce=onceListeners&&onceListeners[listener];if(isOnce){this.off(eventName,listener);delete onceListeners[listener]}
			listener.apply(this,args)}
		return this};proto.allOff=function(){delete this._events;delete this._onceEvents};return EvEmitter}));(function(window,factory){if(typeof define=='function'&&define.amd){define('get-size/get-size',factory)}else if(typeof module=='object'&&module.exports){module.exports=factory()}else{window.getSize=factory()}})(window,function factory(){'use strict';function getStyleSize(value){var num=parseFloat(value);var isValid=value.indexOf('%')==-1&&!isNaN(num);return isValid&&num}
	function noop(){}
	var logError=typeof console=='undefined'?noop:function(message){console.error(message)};var measurements=['paddingLeft','paddingRight','paddingTop','paddingBottom','marginLeft','marginRight','marginTop','marginBottom','borderLeftWidth','borderRightWidth','borderTopWidth','borderBottomWidth'];var measurementsLength=measurements.length;function getZeroSize(){var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];size[measurement]=0}
		return size}
	function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError('Style returned '+style+'. Are you running this code in a hidden iframe on Firefox? '+'See https://bit.ly/getsizebug1')}
		return style}
	var isSetup=!1;var isBoxSizeOuter;function setup(){if(isSetup){return}
		isSetup=!0;var div=document.createElement('div');div.style.width='200px';div.style.padding='1px 2px 3px 4px';div.style.borderStyle='solid';div.style.borderWidth='1px 2px 3px 4px';div.style.boxSizing='border-box';var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);isBoxSizeOuter=Math.round(getStyleSize(style.width))==200;getSize.isBoxSizeOuter=isBoxSizeOuter;body.removeChild(div)}
	function getSize(elem){setup();if(typeof elem=='string'){elem=document.querySelector(elem)}
		if(!elem||typeof elem!='object'||!elem.nodeType){return}
		var style=getStyle(elem);if(style.display=='none'){return getZeroSize()}
		var size={};size.width=elem.offsetWidth;size.height=elem.offsetHeight;var isBorderBox=size.isBorderBox=style.boxSizing=='border-box';for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];var value=style[measurement];var num=parseFloat(value);size[measurement]=!isNaN(num)?num:0}
		var paddingWidth=size.paddingLeft+size.paddingRight;var paddingHeight=size.paddingTop+size.paddingBottom;var marginWidth=size.marginLeft+size.marginRight;var marginHeight=size.marginTop+size.marginBottom;var borderWidth=size.borderLeftWidth+size.borderRightWidth;var borderHeight=size.borderTopWidth+size.borderBottomWidth;var isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter;var styleWidth=getStyleSize(style.width);if(styleWidth!==!1){size.width=styleWidth+(isBorderBoxSizeOuter?0:paddingWidth+borderWidth)}
		var styleHeight=getStyleSize(style.height);if(styleHeight!==!1){size.height=styleHeight+(isBorderBoxSizeOuter?0:paddingHeight+borderHeight)}
		size.innerWidth=size.width-(paddingWidth+borderWidth);size.innerHeight=size.height-(paddingHeight+borderHeight);size.outerWidth=size.width+marginWidth;size.outerHeight=size.height+marginHeight;return size}
	return getSize});(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('desandro-matches-selector/matches-selector',factory)}else if(typeof module=='object'&&module.exports){module.exports=factory()}else{window.matchesSelector=factory()}}(window,function factory(){'use strict';var matchesMethod=(function(){var ElemProto=window.Element.prototype;if(ElemProto.matches){return'matches'}
	if(ElemProto.matchesSelector){return'matchesSelector'}
	var prefixes=['webkit','moz','ms','o'];for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var method=prefix+'MatchesSelector';if(ElemProto[method]){return method}}})();return function matchesSelector(elem,selector){return elem[matchesMethod](selector)}}));(function(window,factory){if(typeof define=='function'&&define.amd){define('fizzy-ui-utils/utils',['desandro-matches-selector/matches-selector'],function(matchesSelector){return factory(window,matchesSelector)})}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('desandro-matches-selector'))}else{window.fizzyUIUtils=factory(window,window.matchesSelector)}}(window,function factory(window,matchesSelector){var utils={};utils.extend=function(a,b){for(var prop in b){a[prop]=b[prop]}
	return a};utils.modulo=function(num,div){return((num%div)+div)%div};var arraySlice=Array.prototype.slice;utils.makeArray=function(obj){if(Array.isArray(obj)){return obj}
	if(obj===null||obj===undefined){return[]}
	var isArrayLike=typeof obj=='object'&&typeof obj.length=='number';if(isArrayLike){return arraySlice.call(obj)}
	return[obj]};utils.removeFrom=function(ary,obj){var index=ary.indexOf(obj);if(index!=-1){ary.splice(index,1)}};utils.getParent=function(elem,selector){while(elem.parentNode&&elem!=document.body){elem=elem.parentNode;if(matchesSelector(elem,selector)){return elem}}};utils.getQueryElement=function(elem){if(typeof elem=='string'){return document.querySelector(elem)}
	return elem};utils.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event)}};utils.filterFindElements=function(elems,selector){elems=utils.makeArray(elems);var ffElems=[];var isElement=function(elem){return(typeof HTMLElement==="object"?elem instanceof HTMLElement:elem&&typeof elem==="object"&&elem!==null&&elem.nodeType===1&&typeof elem.nodeName==="string")};elems.forEach(function(elem){if(!isElement(elem)){return}
	if(!selector){ffElems.push(elem);return}
	if(matchesSelector(elem,selector)){ffElems.push(elem)}
	var childElems=elem.querySelectorAll(selector);for(var i=0;i<childElems.length;i++){ffElems.push(childElems[i])}});return ffElems};utils.debounceMethod=function(_class,methodName,threshold){threshold=threshold||100;var method=_class.prototype[methodName];var timeoutName=methodName+'Timeout';_class.prototype[methodName]=function(){var timeout=this[timeoutName];clearTimeout(timeout);var args=arguments;var _this=this;this[timeoutName]=setTimeout(function(){method.apply(_this,args);delete _this[timeoutName]},threshold)}};utils.docReady=function(callback){var readyState=document.readyState;if(readyState=='complete'||readyState=='interactive'){setTimeout(callback)}else{document.addEventListener('DOMContentLiteSpeedLoaded',callback)}};utils.toDashed=function(str){return str.replace(/(.)([A-Z])/g,function(match,$1,$2){return $1+'-'+$2}).toLowerCase()};var console=window.console;utils.htmlInit=function(WidgetClass,namespace){utils.docReady(function(){var dashedNamespace=utils.toDashed(namespace);var dataAttr='data-'+dashedNamespace;var dataAttrElems=document.querySelectorAll('['+dataAttr+']');var jsDashElems=document.querySelectorAll('.js-'+dashedNamespace);var elems=utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));var dataOptionsAttr=dataAttr+'-options';var jQuery=window.jQuery;elems.forEach(function(elem){var attr=elem.getAttribute(dataAttr)||elem.getAttribute(dataOptionsAttr);var options;try{options=attr&&JSON.parse(attr)}catch(error){if(console){console.error('Error parsing '+dataAttr+' on '+elem.className+': '+error)}
	return}
	var instance=new WidgetClass(elem,options);if(jQuery){jQuery.data(elem,namespace,instance)}})})};return utils}));(function(window,factory){if(typeof define=='function'&&define.amd){define('outlayer/item',['ev-emitter/ev-emitter','get-size/get-size'],factory)}else if(typeof module=='object'&&module.exports){module.exports=factory(require('ev-emitter'),require('get-size'))}else{window.Outlayer={};window.Outlayer.Item=factory(window.EvEmitter,window.getSize)}}(window,function factory(EvEmitter,getSize){'use strict';function isEmptyObj(obj){for(var prop in obj){return!1}
	prop=null;return!0}
	var docElemStyle=document.documentElement.style;var transitionProperty=typeof docElemStyle.transition=='string'?'transition':'WebkitTransition';var transformProperty=typeof docElemStyle.transform=='string'?'transform':'WebkitTransform';var transitionEndEvent={WebkitTransition:'webkitTransitionEnd',transition:'transitionend'}[transitionProperty];var vendorProperties={transform:transformProperty,transition:transitionProperty,transitionDuration:transitionProperty+'Duration',transitionProperty:transitionProperty+'Property',transitionDelay:transitionProperty+'Delay'};function Item(element,layout){if(!element){return}
		this.element=element;this.layout=layout;this.position={x:0,y:0};this._create()}
	var proto=Item.prototype=Object.create(EvEmitter.prototype);proto.constructor=Item;proto._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:'absolute'})};proto.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event)}};proto.getSize=function(){this.size=getSize(this.element)};proto.css=function(style){var elemStyle=this.element.style;for(var prop in style){var supportedProp=vendorProperties[prop]||prop;elemStyle[supportedProp]=style[prop]}};proto.getPosition=function(){var style=getComputedStyle(this.element);var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');var xValue=style[isOriginLeft?'left':'right'];var yValue=style[isOriginTop?'top':'bottom'];var x=parseFloat(xValue);var y=parseFloat(yValue);var layoutSize=this.layout.size;if(xValue.indexOf('%')!=-1){x=(x/100)*layoutSize.width}
		if(yValue.indexOf('%')!=-1){y=(y/100)*layoutSize.height}
		x=isNaN(x)?0:x;y=isNaN(y)?0:y;x-=isOriginLeft?layoutSize.paddingLeft:layoutSize.paddingRight;y-=isOriginTop?layoutSize.paddingTop:layoutSize.paddingBottom;this.position.x=x;this.position.y=y};proto.layoutPosition=function(){var layoutSize=this.layout.size;var style={};var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');var xPadding=isOriginLeft?'paddingLeft':'paddingRight';var xProperty=isOriginLeft?'left':'right';var xResetProperty=isOriginLeft?'right':'left';var x=this.position.x+layoutSize[xPadding];style[xProperty]=this.getXValue(x);style[xResetProperty]='';var yPadding=isOriginTop?'paddingTop':'paddingBottom';var yProperty=isOriginTop?'top':'bottom';var yResetProperty=isOriginTop?'bottom':'top';var y=this.position.y+layoutSize[yPadding];style[yProperty]=this.getYValue(y);style[yResetProperty]='';this.css(style);this.emitEvent('layout',[this])};proto.getXValue=function(x){var isHorizontal=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&!isHorizontal?((x/this.layout.size.width)*100)+'%':x+'px'};proto.getYValue=function(y){var isHorizontal=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&isHorizontal?((y/this.layout.size.height)*100)+'%':y+'px'};proto._transitionTo=function(x,y){this.getPosition();var curX=this.position.x;var curY=this.position.y;var didNotMove=x==this.position.x&&y==this.position.y;this.setPosition(x,y);if(didNotMove&&!this.isTransitioning){this.layoutPosition();return}
		var transX=x-curX;var transY=y-curY;var transitionStyle={};transitionStyle.transform=this.getTranslate(transX,transY);this.transition({to:transitionStyle,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})};proto.getTranslate=function(x,y){var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');x=isOriginLeft?x:-x;y=isOriginTop?y:-y;return'translate3d('+x+'px, '+y+'px, 0)'};proto.goTo=function(x,y){this.setPosition(x,y);this.layoutPosition()};proto.moveTo=proto._transitionTo;proto.setPosition=function(x,y){this.position.x=parseFloat(x);this.position.y=parseFloat(y)};proto._nonTransition=function(args){this.css(args.to);if(args.isCleaning){this._removeStyles(args.to)}
		for(var prop in args.onTransitionEnd){args.onTransitionEnd[prop].call(this)}};proto.transition=function(args){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(args);return}
		var _transition=this._transn;for(var prop in args.onTransitionEnd){_transition.onEnd[prop]=args.onTransitionEnd[prop]}
		for(prop in args.to){_transition.ingProperties[prop]=!0;if(args.isCleaning){_transition.clean[prop]=!0}}
		if(args.from){this.css(args.from);var h=this.element.offsetHeight;h=null}
		this.enableTransition(args.to);this.css(args.to);this.isTransitioning=!0};function toDashedAll(str){return str.replace(/([A-Z])/g,function($1){return'-'+$1.toLowerCase()})}
	var transitionProps='opacity,'+toDashedAll(transformProperty);proto.enableTransition=function(){if(this.isTransitioning){return}
		var duration=this.layout.options.transitionDuration;duration=typeof duration=='number'?duration+'ms':duration;this.css({transitionProperty:transitionProps,transitionDuration:duration,transitionDelay:this.staggerDelay||0});this.element.addEventListener(transitionEndEvent,this,!1)};proto.onwebkitTransitionEnd=function(event){this.ontransitionend(event)};proto.onotransitionend=function(event){this.ontransitionend(event)};var dashedVendorProperties={'-webkit-transform':'transform'};proto.ontransitionend=function(event){if(event.target!==this.element){return}
		var _transition=this._transn;var propertyName=dashedVendorProperties[event.propertyName]||event.propertyName;delete _transition.ingProperties[propertyName];if(isEmptyObj(_transition.ingProperties)){this.disableTransition()}
		if(propertyName in _transition.clean){this.element.style[event.propertyName]='';delete _transition.clean[propertyName]}
		if(propertyName in _transition.onEnd){var onTransitionEnd=_transition.onEnd[propertyName];onTransitionEnd.call(this);delete _transition.onEnd[propertyName]}
		this.emitEvent('transitionEnd',[this])};proto.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(transitionEndEvent,this,!1);this.isTransitioning=!1};proto._removeStyles=function(style){var cleanStyle={};for(var prop in style){cleanStyle[prop]=''}
		this.css(cleanStyle)};var cleanTransitionStyle={transitionProperty:'',transitionDuration:'',transitionDelay:''};proto.removeTransitionStyles=function(){this.css(cleanTransitionStyle)};proto.stagger=function(delay){delay=isNaN(delay)?0:delay;this.staggerDelay=delay+'ms'};proto.removeElem=function(){this.element.parentNode.removeChild(this.element);this.css({display:''});this.emitEvent('remove',[this])};proto.remove=function(){if(!transitionProperty||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}
		this.once('transitionEnd',function(){this.removeElem()});this.hide()};proto.reveal=function(){delete this.isHidden;this.css({display:''});var options=this.layout.options;var onTransitionEnd={};var transitionEndProperty=this.getHideRevealTransitionEndProperty('visibleStyle');onTransitionEnd[transitionEndProperty]=this.onRevealTransitionEnd;this.transition({from:options.hiddenStyle,to:options.visibleStyle,isCleaning:!0,onTransitionEnd:onTransitionEnd})};proto.onRevealTransitionEnd=function(){if(!this.isHidden){this.emitEvent('reveal')}};proto.getHideRevealTransitionEndProperty=function(styleProperty){var optionStyle=this.layout.options[styleProperty];if(optionStyle.opacity){return'opacity'}
		for(var prop in optionStyle){return prop}};proto.hide=function(){this.isHidden=!0;this.css({display:''});var options=this.layout.options;var onTransitionEnd={};var transitionEndProperty=this.getHideRevealTransitionEndProperty('hiddenStyle');onTransitionEnd[transitionEndProperty]=this.onHideTransitionEnd;this.transition({from:options.visibleStyle,to:options.hiddenStyle,isCleaning:!0,onTransitionEnd:onTransitionEnd})};proto.onHideTransitionEnd=function(){if(this.isHidden){this.css({display:'none'});this.emitEvent('hide')}};proto.destroy=function(){this.css({position:'',left:'',right:'',top:'',bottom:'',transition:'',transform:''})};return Item}));(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('outlayer/outlayer',['ev-emitter/ev-emitter','get-size/get-size','fizzy-ui-utils/utils','./item'],function(EvEmitter,getSize,utils,Item){return factory(window,EvEmitter,getSize,utils,Item)})}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('ev-emitter'),require('get-size'),require('fizzy-ui-utils'),require('./item'))}else{window.Outlayer=factory(window,window.EvEmitter,window.getSize,window.fizzyUIUtils,window.Outlayer.Item)}}(window,function factory(window,EvEmitter,getSize,utils,Item){'use strict';var console=window.console;var jQuery=window.jQuery;var noop=function(){};var GUID=0;var instances={};function Outlayer(element,options){var queryElement=utils.getQueryElement(element);if(!queryElement){if(console){console.error('Bad element for '+this.constructor.namespace+': '+(queryElement||element))}
	return}
	this.element=queryElement;if(jQuery){this.$element=jQuery(this.element)}
	this.options=utils.extend({},this.constructor.defaults);this.option(options);var id=++GUID;this.element.outlayerGUID=id;instances[id]=this;this._create();var isInitLayout=this._getOption('initLayout');if(isInitLayout){this.layout()}}
	Outlayer.namespace='outlayer';Outlayer.Item=Item;Outlayer.defaults={containerStyle:{position:'relative'},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:'0.4s',hiddenStyle:{opacity:0,transform:'scale(0.001)'},visibleStyle:{opacity:1,transform:'scale(1)'}};var proto=Outlayer.prototype;utils.extend(proto,EvEmitter.prototype);proto.option=function(opts){utils.extend(this.options,opts)};proto._getOption=function(option){var oldOption=this.constructor.compatOptions[option];return oldOption&&this.options[oldOption]!==undefined?this.options[oldOption]:this.options[option]};Outlayer.compatOptions={initLayout:'isInitLayout',horizontal:'isHorizontal',layoutInstant:'isLayoutInstant',originLeft:'isOriginLeft',originTop:'isOriginTop',resize:'isResizeBound',resizeContainer:'isResizingContainer'};proto._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);utils.extend(this.element.style,this.options.containerStyle);var canBindResize=this._getOption('resize');if(canBindResize){this.bindResize()}};proto.reloadItems=function(){this.items=this._itemize(this.element.children)};proto._itemize=function(elems){var itemElems=this._filterFindItemElements(elems);var Item=this.constructor.Item;var items=[];for(var i=0;i<itemElems.length;i++){var elem=itemElems[i];var item=new Item(elem,this);items.push(item)}
		return items};proto._filterFindItemElements=function(elems){return utils.filterFindElements(elems,this.options.itemSelector)};proto.getItemElements=function(){return this.items.map(function(item){return item.element})};proto.layout=function(){this._resetLayout();this._manageStamps();var layoutInstant=this._getOption('layoutInstant');var isInstant=layoutInstant!==undefined?layoutInstant:!this._isLayoutInited;this.layoutItems(this.items,isInstant);this._isLayoutInited=!0};proto._init=proto.layout;proto._resetLayout=function(){this.getSize()};proto.getSize=function(){this.size=getSize(this.element)};proto._getMeasurement=function(measurement,size){var option=this.options[measurement];var elem;if(!option){this[measurement]=0}else{if(typeof option=='string'){elem=this.element.querySelector(option)}else if(option instanceof HTMLElement){elem=option}
		this[measurement]=elem?getSize(elem)[size]:option}};proto.layoutItems=function(items,isInstant){items=this._getItemsForLayout(items);this._layoutItems(items,isInstant);this._postLayout()};proto._getItemsForLayout=function(items){return items.filter(function(item){return!item.isIgnored})};proto._layoutItems=function(items,isInstant){this._emitCompleteOnItems('layout',items);if(!items||!items.length){return}
		var queue=[];items.forEach(function(item){var position=this._getItemLayoutPosition(item);position.item=item;position.isInstant=isInstant||item.isLayoutInstant;queue.push(position)},this);this._processLayoutQueue(queue)};proto._getItemLayoutPosition=function(){return{x:0,y:0}};proto._processLayoutQueue=function(queue){this.updateStagger();queue.forEach(function(obj,i){this._positionItem(obj.item,obj.x,obj.y,obj.isInstant,i)},this)};proto.updateStagger=function(){var stagger=this.options.stagger;if(stagger===null||stagger===undefined){this.stagger=0;return}
		this.stagger=getMilliseconds(stagger);return this.stagger};proto._positionItem=function(item,x,y,isInstant,i){if(isInstant){item.goTo(x,y)}else{item.stagger(i*this.stagger);item.moveTo(x,y)}};proto._postLayout=function(){this.resizeContainer()};proto.resizeContainer=function(){var isResizingContainer=this._getOption('resizeContainer');if(!isResizingContainer){return}
		var size=this._getContainerSize();if(size){this._setContainerMeasure(size.width,!0);this._setContainerMeasure(size.height,!1)}};proto._getContainerSize=noop;proto._setContainerMeasure=function(measure,isWidth){if(measure===undefined){return}
		var elemSize=this.size;if(elemSize.isBorderBox){measure+=isWidth?elemSize.paddingLeft+elemSize.paddingRight+elemSize.borderLeftWidth+elemSize.borderRightWidth:elemSize.paddingBottom+elemSize.paddingTop+elemSize.borderTopWidth+elemSize.borderBottomWidth}
		measure=Math.max(measure,0);this.element.style[isWidth?'width':'height']=measure+'px'};proto._emitCompleteOnItems=function(eventName,items){var _this=this;function onComplete(){_this.dispatchEvent(eventName+'Complete',null,[items])}
		var count=items.length;if(!items||!count){onComplete();return}
		var doneCount=0;function tick(){doneCount++;if(doneCount==count){onComplete()}}
		items.forEach(function(item){item.once(eventName,tick)})};proto.dispatchEvent=function(type,event,args){var emitArgs=event?[event].concat(args):args;this.emitEvent(type,emitArgs);if(jQuery){this.$element=this.$element||jQuery(this.element);if(event){var $event=jQuery.Event(event);$event.type=type;this.$element.trigger($event,args)}else{this.$element.trigger(type,args)}}};proto.ignore=function(elem){var item=this.getItem(elem);if(item){item.isIgnored=!0}};proto.unignore=function(elem){var item=this.getItem(elem);if(item){delete item.isIgnored}};proto.stamp=function(elems){elems=this._find(elems);if(!elems){return}
		this.stamps=this.stamps.concat(elems);elems.forEach(this.ignore,this)};proto.unstamp=function(elems){elems=this._find(elems);if(!elems){return}
		elems.forEach(function(elem){utils.removeFrom(this.stamps,elem);this.unignore(elem)},this)};proto._find=function(elems){if(!elems){return}
		if(typeof elems=='string'){elems=this.element.querySelectorAll(elems)}
		elems=utils.makeArray(elems);return elems};proto._manageStamps=function(){if(!this.stamps||!this.stamps.length){return}
		this._getBoundingRect();this.stamps.forEach(this._manageStamp,this)};proto._getBoundingRect=function(){var boundingRect=this.element.getBoundingClientRect();var size=this.size;this._boundingRect={left:boundingRect.left+size.paddingLeft+size.borderLeftWidth,top:boundingRect.top+size.paddingTop+size.borderTopWidth,right:boundingRect.right-(size.paddingRight+size.borderRightWidth),bottom:boundingRect.bottom-(size.paddingBottom+size.borderBottomWidth)}};proto._manageStamp=noop;proto._getElementOffset=function(elem){var boundingRect=elem.getBoundingClientRect();var thisRect=this._boundingRect;var size=getSize(elem);var offset={left:boundingRect.left-thisRect.left-size.marginLeft,top:boundingRect.top-thisRect.top-size.marginTop,right:thisRect.right-boundingRect.right-size.marginRight,bottom:thisRect.bottom-boundingRect.bottom-size.marginBottom};return offset};proto.handleEvent=utils.handleEvent;proto.bindResize=function(){window.addEventListener('resize',this);this.isResizeBound=!0};proto.unbindResize=function(){window.removeEventListener('resize',this);this.isResizeBound=!1};proto.onresize=function(){this.resize()};utils.debounceMethod(Outlayer,'onresize',100);proto.resize=function(){if(!this.isResizeBound||!this.needsResizeLayout()){return}
		this.layout()};proto.needsResizeLayout=function(){var size=getSize(this.element);var hasSizes=this.size&&size;return hasSizes&&size.innerWidth!==this.size.innerWidth};proto.addItems=function(elems){var items=this._itemize(elems);if(items.length){this.items=this.items.concat(items)}
		return items};proto.appended=function(elems){var items=this.addItems(elems);if(!items.length){return}
		this.layoutItems(items,!0);this.reveal(items)};proto.prepended=function(elems){var items=this._itemize(elems);if(!items.length){return}
		var previousItems=this.items.slice(0);this.items=items.concat(previousItems);this._resetLayout();this._manageStamps();this.layoutItems(items,!0);this.reveal(items);this.layoutItems(previousItems)};proto.reveal=function(items){this._emitCompleteOnItems('reveal',items);if(!items||!items.length){return}
		var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.reveal()})};proto.hide=function(items){this._emitCompleteOnItems('hide',items);if(!items||!items.length){return}
		var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.hide()})};proto.revealItemElements=function(elems){var items=this.getItems(elems);this.reveal(items)};proto.hideItemElements=function(elems){var items=this.getItems(elems);this.hide(items)};proto.getItem=function(elem){for(var i=0;i<this.items.length;i++){var item=this.items[i];if(item.element==elem){return item}}};proto.getItems=function(elems){elems=utils.makeArray(elems);var items=[];elems.forEach(function(elem){var item=this.getItem(elem);if(item){items.push(item)}},this);return items};proto.remove=function(elems){var removeItems=this.getItems(elems);this._emitCompleteOnItems('remove',removeItems);if(!removeItems||!removeItems.length){return}
		removeItems.forEach(function(item){item.remove();utils.removeFrom(this.items,item)},this)};proto.destroy=function(){var style=this.element.style;style.height='';style.position='';style.width='';this.items.forEach(function(item){item.destroy()});this.unbindResize();var id=this.element.outlayerGUID;delete instances[id];delete this.element.outlayerGUID;if(jQuery){jQuery.removeData(this.element,this.constructor.namespace)}};Outlayer.data=function(elem){elem=utils.getQueryElement(elem);var id=elem&&elem.outlayerGUID;return id&&instances[id]};Outlayer.create=function(namespace,options){var Layout=subclass(Outlayer);Layout.defaults=utils.extend({},Outlayer.defaults);utils.extend(Layout.defaults,options);Layout.compatOptions=utils.extend({},Outlayer.compatOptions);Layout.namespace=namespace;Layout.data=Outlayer.data;Layout.Item=subclass(Item);utils.htmlInit(Layout,namespace);if(jQuery&&jQuery.bridget){jQuery.bridget(namespace,Layout)}
		return Layout};function subclass(Parent){function SubClass(){Parent.apply(this,arguments)}
		SubClass.prototype=Object.create(Parent.prototype);SubClass.prototype.constructor=SubClass;return SubClass}
	var msUnits={ms:1,s:1000};function getMilliseconds(time){if(typeof time=='number'){return time}
		var matches=time.match(/(^\d*\.?\d*)(\w*)/);var num=matches&&matches[1];var unit=matches&&matches[2];if(!num.length){return 0}
		num=parseFloat(num);var mult=msUnits[unit]||1;return num*mult}
	Outlayer.Item=Item;return Outlayer}));(function(window,factory){if(typeof define=='function'&&define.amd){define('isotope-layout/js/item',['outlayer/outlayer'],factory)}else if(typeof module=='object'&&module.exports){module.exports=factory(require('outlayer'))}else{window.Isotope=window.Isotope||{};window.Isotope.Item=factory(window.Outlayer)}}(window,function factory(Outlayer){'use strict';function Item(){Outlayer.Item.apply(this,arguments)}
	var proto=Item.prototype=Object.create(Outlayer.Item.prototype);var _create=proto._create;proto._create=function(){this.id=this.layout.itemGUID++;_create.call(this);this.sortData={}};proto.updateSortData=function(){if(this.isIgnored){return}
		this.sortData.id=this.id;this.sortData['original-order']=this.id;this.sortData.random=Math.random();var getSortData=this.layout.options.getSortData;var sorters=this.layout._sorters;for(var key in getSortData){var sorter=sorters[key];this.sortData[key]=sorter(this.element,this)}};var _destroy=proto.destroy;proto.destroy=function(){_destroy.apply(this,arguments);this.css({display:''})};return Item}));(function(window,factory){if(typeof define=='function'&&define.amd){define('isotope-layout/js/layout-mode',['get-size/get-size','outlayer/outlayer'],factory)}else if(typeof module=='object'&&module.exports){module.exports=factory(require('get-size'),require('outlayer'))}else{window.Isotope=window.Isotope||{};window.Isotope.LayoutMode=factory(window.getSize,window.Outlayer)}}(window,function factory(getSize,Outlayer){'use strict';function LayoutMode(isotope){this.isotope=isotope;if(isotope){this.options=isotope.options[this.namespace];this.element=isotope.element;this.items=isotope.filteredItems;this.size=isotope.size}}
	var proto=LayoutMode.prototype;var facadeMethods=['_resetLayout','_getItemLayoutPosition','_manageStamp','_getContainerSize','_getElementOffset','needsResizeLayout','_getOption'];facadeMethods.forEach(function(methodName){proto[methodName]=function(){return Outlayer.prototype[methodName].apply(this.isotope,arguments)}});proto.needsVerticalResizeLayout=function(){var size=getSize(this.isotope.element);var hasSizes=this.isotope.size&&size;return hasSizes&&size.innerHeight!=this.isotope.size.innerHeight};proto._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)};proto.getColumnWidth=function(){this.getSegmentSize('column','Width')};proto.getRowHeight=function(){this.getSegmentSize('row','Height')};proto.getSegmentSize=function(segment,size){var segmentName=segment+size;var outerSize='outer'+size;this._getMeasurement(segmentName,outerSize);if(this[segmentName]){return}
		var firstItemSize=this.getFirstItemSize();this[segmentName]=firstItemSize&&firstItemSize[outerSize]||this.isotope.size['inner'+size]};proto.getFirstItemSize=function(){var firstItem=this.isotope.filteredItems[0];return firstItem&&firstItem.element&&getSize(firstItem.element)};proto.layout=function(){this.isotope.layout.apply(this.isotope,arguments)};proto.getSize=function(){this.isotope.getSize();this.size=this.isotope.size};LayoutMode.modes={};LayoutMode.create=function(namespace,options){function Mode(){LayoutMode.apply(this,arguments)}
		Mode.prototype=Object.create(proto);Mode.prototype.constructor=Mode;if(options){Mode.options=options}
		Mode.prototype.namespace=namespace;LayoutMode.modes[namespace]=Mode;return Mode};return LayoutMode}));(function(window,factory){if(typeof define=='function'&&define.amd){define('masonry-layout/masonry',['outlayer/outlayer','get-size/get-size'],factory)}else if(typeof module=='object'&&module.exports){module.exports=factory(require('outlayer'),require('get-size'))}else{window.Masonry=factory(window.Outlayer,window.getSize)}}(window,function factory(Outlayer,getSize){var Masonry=Outlayer.create('masonry');Masonry.compatOptions.fitWidth='isFitWidth';var proto=Masonry.prototype;proto._resetLayout=function(){this.getSize();this._getMeasurement('columnWidth','outerWidth');this._getMeasurement('gutter','outerWidth');this.measureColumns();this.colYs=[];for(var i=0;i<this.cols;i++){this.colYs.push(0)}
	this.maxY=0;this.horizontalColIndex=0};proto.measureColumns=function(){this.getContainerWidth();if(!this.columnWidth){var firstItem=this.items[0];var firstItemElem=firstItem&&firstItem.element;this.columnWidth=firstItemElem&&getSize(firstItemElem).outerWidth||this.containerWidth}
	var columnWidth=this.columnWidth+=this.gutter;var containerWidth=this.containerWidth+this.gutter;var cols=containerWidth/columnWidth;var excess=columnWidth-containerWidth%columnWidth;var mathMethod=excess&&excess<1?'round':'floor';cols=Math[mathMethod](cols);this.cols=Math.max(cols,1)};proto.getContainerWidth=function(){var isFitWidth=this._getOption('fitWidth');var container=isFitWidth?this.element.parentNode:this.element;var size=getSize(container);this.containerWidth=size&&size.innerWidth};proto._getItemLayoutPosition=function(item){item.getSize();var remainder=item.size.outerWidth%this.columnWidth;var mathMethod=remainder&&remainder<1?'round':'ceil';var colSpan=Math[mathMethod](item.size.outerWidth/this.columnWidth);colSpan=Math.min(colSpan,this.cols);var colPosMethod=this.options.horizontalOrder?'_getHorizontalColPosition':'_getTopColPosition';var colPosition=this[colPosMethod](colSpan,item);var position={x:this.columnWidth*colPosition.col,y:colPosition.y};var setHeight=colPosition.y+item.size.outerHeight;var setMax=colSpan+colPosition.col;for(var i=colPosition.col;i<setMax;i++){this.colYs[i]=setHeight}
	return position};proto._getTopColPosition=function(colSpan){var colGroup=this._getTopColGroup(colSpan);var minimumY=Math.min.apply(Math,colGroup);return{col:colGroup.indexOf(minimumY),y:minimumY,}};proto._getTopColGroup=function(colSpan){if(colSpan<2){return this.colYs}
	var colGroup=[];var groupCount=this.cols+1-colSpan;for(var i=0;i<groupCount;i++){colGroup[i]=this._getColGroupY(i,colSpan)}
	return colGroup};proto._getColGroupY=function(col,colSpan){if(colSpan<2){return this.colYs[col]}
	var groupColYs=this.colYs.slice(col,col+colSpan);return Math.max.apply(Math,groupColYs)};proto._getHorizontalColPosition=function(colSpan,item){var col=this.horizontalColIndex%this.cols;var isOver=colSpan>1&&col+colSpan>this.cols;col=isOver?0:col;var hasSize=item.size.outerWidth&&item.size.outerHeight;this.horizontalColIndex=hasSize?col+colSpan:this.horizontalColIndex;return{col:col,y:this._getColGroupY(col,colSpan),}};proto._manageStamp=function(stamp){var stampSize=getSize(stamp);var offset=this._getElementOffset(stamp);var isOriginLeft=this._getOption('originLeft');var firstX=isOriginLeft?offset.left:offset.right;var lastX=firstX+stampSize.outerWidth;var firstCol=Math.floor(firstX/this.columnWidth);firstCol=Math.max(0,firstCol);var lastCol=Math.floor(lastX/this.columnWidth);lastCol-=lastX%this.columnWidth?0:1;lastCol=Math.min(this.cols-1,lastCol);var isOriginTop=this._getOption('originTop');var stampMaxY=(isOriginTop?offset.top:offset.bottom)+stampSize.outerHeight;for(var i=firstCol;i<=lastCol;i++){this.colYs[i]=Math.max(stampMaxY,this.colYs[i])}};proto._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var size={height:this.maxY};if(this._getOption('fitWidth')){size.width=this._getContainerFitWidth()}
	return size};proto._getContainerFitWidth=function(){var unusedCols=0;var i=this.cols;while(--i){if(this.colYs[i]!==0){break}
	unusedCols++}
	return(this.cols-unusedCols)*this.columnWidth-this.gutter};proto.needsResizeLayout=function(){var previousWidth=this.containerWidth;this.getContainerWidth();return previousWidth!=this.containerWidth};return Masonry}));(function(window,factory){if(typeof define=='function'&&define.amd){define('isotope-layout/js/layout-modes/masonry',['../layout-mode','masonry-layout/masonry'],factory)}else if(typeof module=='object'&&module.exports){module.exports=factory(require('../layout-mode'),require('masonry-layout'))}else{factory(window.Isotope.LayoutMode,window.Masonry)}}(window,function factory(LayoutMode,Masonry){'use strict';var MasonryMode=LayoutMode.create('masonry');var proto=MasonryMode.prototype;var keepModeMethods={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var method in Masonry.prototype){if(!keepModeMethods[method]){proto[method]=Masonry.prototype[method]}}
	var measureColumns=proto.measureColumns;proto.measureColumns=function(){this.items=this.isotope.filteredItems;measureColumns.call(this)};var _getOption=proto._getOption;proto._getOption=function(option){if(option=='fitWidth'){return this.options.isFitWidth!==undefined?this.options.isFitWidth:this.options.fitWidth}
		return _getOption.apply(this.isotope,arguments)};return MasonryMode}));(function(window,factory){if(typeof define=='function'&&define.amd){define('isotope-layout/js/layout-modes/fit-rows',['../layout-mode'],factory)}else if(typeof exports=='object'){module.exports=factory(require('../layout-mode'))}else{factory(window.Isotope.LayoutMode)}}(window,function factory(LayoutMode){'use strict';var FitRows=LayoutMode.create('fitRows');var proto=FitRows.prototype;proto._resetLayout=function(){this.x=0;this.y=0;this.maxY=0;this._getMeasurement('gutter','outerWidth')};proto._getItemLayoutPosition=function(item){item.getSize();var itemWidth=item.size.outerWidth+this.gutter;var containerWidth=this.isotope.size.innerWidth+this.gutter;if(this.x!==0&&itemWidth+this.x>containerWidth){this.x=0;this.y=this.maxY}
	var position={x:this.x,y:this.y};this.maxY=Math.max(this.maxY,this.y+item.size.outerHeight);this.x+=itemWidth;return position};proto._getContainerSize=function(){return{height:this.maxY}};return FitRows}));(function(window,factory){if(typeof define=='function'&&define.amd){define('isotope-layout/js/layout-modes/vertical',['../layout-mode'],factory)}else if(typeof module=='object'&&module.exports){module.exports=factory(require('../layout-mode'))}else{factory(window.Isotope.LayoutMode)}}(window,function factory(LayoutMode){'use strict';var Vertical=LayoutMode.create('vertical',{horizontalAlignment:0});var proto=Vertical.prototype;proto._resetLayout=function(){this.y=0};proto._getItemLayoutPosition=function(item){item.getSize();var x=(this.isotope.size.innerWidth-item.size.outerWidth)*this.options.horizontalAlignment;var y=this.y;this.y+=item.size.outerHeight;return{x:x,y:y}};proto._getContainerSize=function(){return{height:this.y}};return Vertical}));(function(window,factory){if(typeof define=='function'&&define.amd){define(['outlayer/outlayer','get-size/get-size','desandro-matches-selector/matches-selector','fizzy-ui-utils/utils','isotope-layout/js/item','isotope-layout/js/layout-mode','isotope-layout/js/layout-modes/masonry','isotope-layout/js/layout-modes/fit-rows','isotope-layout/js/layout-modes/vertical'],function(Outlayer,getSize,matchesSelector,utils,Item,LayoutMode){return factory(window,Outlayer,getSize,matchesSelector,utils,Item,LayoutMode)})}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('outlayer'),require('get-size'),require('desandro-matches-selector'),require('fizzy-ui-utils'),require('isotope-layout/js/item'),require('isotope-layout/js/layout-mode'),require('isotope-layout/js/layout-modes/masonry'),require('isotope-layout/js/layout-modes/fit-rows'),require('isotope-layout/js/layout-modes/vertical'))}else{window.Isotope=factory(window,window.Outlayer,window.getSize,window.matchesSelector,window.fizzyUIUtils,window.Isotope.Item,window.Isotope.LayoutMode)}}(window,function factory(window,Outlayer,getSize,matchesSelector,utils,Item,LayoutMode){var jQuery=window.jQuery;var trim=String.prototype.trim?function(str){return str.trim()}:function(str){return str.replace(/^\s+|\s+$/g,'')};var Isotope=Outlayer.create('isotope',{layoutMode:'masonry',isJQueryFiltering:!0,sortAscending:!0});Isotope.Item=Item;Isotope.LayoutMode=LayoutMode;var proto=Isotope.prototype;proto._create=function(){this.itemGUID=0;this._sorters={};this._getSorters();Outlayer.prototype._create.call(this);this.modes={};this.filteredItems=this.items;this.sortHistory=['original-order'];for(var name in LayoutMode.modes){this._initLayoutMode(name)}};proto.reloadItems=function(){this.itemGUID=0;Outlayer.prototype.reloadItems.call(this)};proto._itemize=function(){var items=Outlayer.prototype._itemize.apply(this,arguments);for(var i=0;i<items.length;i++){var item=items[i];item.id=this.itemGUID++}
	this._updateItemsSortData(items);return items};proto._initLayoutMode=function(name){var Mode=LayoutMode.modes[name];var initialOpts=this.options[name]||{};this.options[name]=Mode.options?utils.extend(Mode.options,initialOpts):initialOpts;this.modes[name]=new Mode(this)};proto.layout=function(){if(!this._isLayoutInited&&this._getOption('initLayout')){this.arrange();return}
	this._layout()};proto._layout=function(){var isInstant=this._getIsInstant();this._resetLayout();this._manageStamps();this.layoutItems(this.filteredItems,isInstant);this._isLayoutInited=!0};proto.arrange=function(opts){this.option(opts);this._getIsInstant();var filtered=this._filter(this.items);this.filteredItems=filtered.matches;this._bindArrangeComplete();if(this._isInstant){this._noTransition(this._hideReveal,[filtered])}else{this._hideReveal(filtered)}
	this._sort();this._layout()};proto._init=proto.arrange;proto._hideReveal=function(filtered){this.reveal(filtered.needReveal);this.hide(filtered.needHide)};proto._getIsInstant=function(){var isLayoutInstant=this._getOption('layoutInstant');var isInstant=isLayoutInstant!==undefined?isLayoutInstant:!this._isLayoutInited;this._isInstant=isInstant;return isInstant};proto._bindArrangeComplete=function(){var isLayoutComplete,isHideComplete,isRevealComplete;var _this=this;function arrangeParallelCallback(){if(isLayoutComplete&&isHideComplete&&isRevealComplete){_this.dispatchEvent('arrangeComplete',null,[_this.filteredItems])}}
	this.once('layoutComplete',function(){isLayoutComplete=!0;arrangeParallelCallback()});this.once('hideComplete',function(){isHideComplete=!0;arrangeParallelCallback()});this.once('revealComplete',function(){isRevealComplete=!0;arrangeParallelCallback()})};proto._filter=function(items){var filter=this.options.filter;filter=filter||'*';var matches=[];var hiddenMatched=[];var visibleUnmatched=[];var test=this._getFilterTest(filter);for(var i=0;i<items.length;i++){var item=items[i];if(item.isIgnored){continue}
	var isMatched=test(item);if(isMatched){matches.push(item)}
	if(isMatched&&item.isHidden){hiddenMatched.push(item)}else if(!isMatched&&!item.isHidden){visibleUnmatched.push(item)}}
	return{matches:matches,needReveal:hiddenMatched,needHide:visibleUnmatched}};proto._getFilterTest=function(filter){if(jQuery&&this.options.isJQueryFiltering){return function(item){return jQuery(item.element).is(filter)}}
	if(typeof filter=='function'){return function(item){return filter(item.element)}}
	return function(item){return matchesSelector(item.element,filter)}};proto.updateSortData=function(elems){var items;if(elems){elems=utils.makeArray(elems);items=this.getItems(elems)}else{items=this.items}
	this._getSorters();this._updateItemsSortData(items)};proto._getSorters=function(){var getSortData=this.options.getSortData;for(var key in getSortData){var sorter=getSortData[key];this._sorters[key]=mungeSorter(sorter)}};proto._updateItemsSortData=function(items){var len=items&&items.length;for(var i=0;len&&i<len;i++){var item=items[i];item.updateSortData()}};var mungeSorter=(function(){function mungeSorter(sorter){if(typeof sorter!='string'){return sorter}
	var args=trim(sorter).split(' ');var query=args[0];var attrMatch=query.match(/^\[(.+)\]$/);var attr=attrMatch&&attrMatch[1];var getValue=getValueGetter(attr,query);var parser=Isotope.sortDataParsers[args[1]];sorter=parser?function(elem){return elem&&parser(getValue(elem))}:function(elem){return elem&&getValue(elem)};return sorter}
	function getValueGetter(attr,query){if(attr){return function getAttribute(elem){return elem.getAttribute(attr)}}
		return function getChildText(elem){var child=elem.querySelector(query);return child&&child.textContent}}
	return mungeSorter})();Isotope.sortDataParsers={'parseInt':function(val){return parseInt(val,10)},'parseFloat':function(val){return parseFloat(val)}};proto._sort=function(){if(!this.options.sortBy){return}
	var sortBys=utils.makeArray(this.options.sortBy);if(!this._getIsSameSortBy(sortBys)){this.sortHistory=sortBys.concat(this.sortHistory)}
	var itemSorter=getItemSorter(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(itemSorter)};proto._getIsSameSortBy=function(sortBys){for(var i=0;i<sortBys.length;i++){if(sortBys[i]!=this.sortHistory[i]){return!1}}
	return!0};function getItemSorter(sortBys,sortAsc){return function sorter(itemA,itemB){for(var i=0;i<sortBys.length;i++){var sortBy=sortBys[i];var a=itemA.sortData[sortBy];var b=itemB.sortData[sortBy];if(a>b||a<b){var isAscending=sortAsc[sortBy]!==undefined?sortAsc[sortBy]:sortAsc;var direction=isAscending?1:-1;return(a>b?1:-1)*direction}}
	return 0}}
	proto._mode=function(){var layoutMode=this.options.layoutMode;var mode=this.modes[layoutMode];if(!mode){throw new Error('No layout mode: '+layoutMode)}
		mode.options=this.options[layoutMode];return mode};proto._resetLayout=function(){Outlayer.prototype._resetLayout.call(this);this._mode()._resetLayout()};proto._getItemLayoutPosition=function(item){return this._mode()._getItemLayoutPosition(item)};proto._manageStamp=function(stamp){this._mode()._manageStamp(stamp)};proto._getContainerSize=function(){return this._mode()._getContainerSize()};proto.needsResizeLayout=function(){return this._mode().needsResizeLayout()};proto.appended=function(elems){var items=this.addItems(elems);if(!items.length){return}
		var filteredItems=this._filterRevealAdded(items);this.filteredItems=this.filteredItems.concat(filteredItems)};proto.prepended=function(elems){var items=this._itemize(elems);if(!items.length){return}
		this._resetLayout();this._manageStamps();var filteredItems=this._filterRevealAdded(items);this.layoutItems(this.filteredItems);this.filteredItems=filteredItems.concat(this.filteredItems);this.items=items.concat(this.items)};proto._filterRevealAdded=function(items){var filtered=this._filter(items);this.hide(filtered.needHide);this.reveal(filtered.matches);this.layoutItems(filtered.matches,!0);return filtered.matches};proto.insert=function(elems){var items=this.addItems(elems);if(!items.length){return}
		var i,item;var len=items.length;for(i=0;i<len;i++){item=items[i];this.element.appendChild(item.element)}
		var filteredInsertItems=this._filter(items).matches;for(i=0;i<len;i++){items[i].isLayoutInstant=!0}
		this.arrange();for(i=0;i<len;i++){delete items[i].isLayoutInstant}
		this.reveal(filteredInsertItems)};var _remove=proto.remove;proto.remove=function(elems){elems=utils.makeArray(elems);var removeItems=this.getItems(elems);_remove.call(this,elems);var len=removeItems&&removeItems.length;for(var i=0;len&&i<len;i++){var item=removeItems[i];utils.removeFrom(this.filteredItems,item)}};proto.shuffle=function(){for(var i=0;i<this.items.length;i++){var item=this.items[i];item.sortData.random=Math.random()}
		this.options.sortBy='random';this._sort();this._layout()};proto._noTransition=function(fn,args){var transitionDuration=this.options.transitionDuration;this.options.transitionDuration=0;var returnValue=fn.apply(this,args);this.options.transitionDuration=transitionDuration;return returnValue};proto.getFilteredItemElements=function(){return this.filteredItems.map(function(item){return item.element})};return Isotope}))
;/*!
 * Infinite Scroll PACKAGED v3.0.6
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,l){function a(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,a){var h=l.data(a,i);if(!h)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var c=h[e];if(!c||"_"==e.charAt(0))return void s(r+" is not a valid method");var u=c.apply(h,n);o=void 0===o?u:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=l.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),l.data(n,i,o))})}l=l||e||t.jQuery,l&&(r.prototype.option||(r.prototype.option=function(t){l.isPlainObject(t)&&(this.options=l.extend(!0,this.options,t))}),l.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return a(this,t,e)}return h(this,t),this},n(l))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLiteSpeedLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,l=document.querySelectorAll("["+s+"]"),a=document.querySelectorAll(".js-"+r),h=i.makeArray(l).concat(i.makeArray(a)),c=s+"-options",u=t.jQuery;h.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(c);try{i=r&&JSON.parse(r)}catch(l){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+l))}var a=new e(t,i);u&&u.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/core",["ev-emitter/ev-emitter","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("fizzy-ui-utils")):t.InfiniteScroll=e(t,t.EvEmitter,t.fizzyUIUtils)}(window,function(t,e,i){function n(t,e){var s=i.getQueryElement(t);if(!s)return void console.error("Bad element for InfiniteScroll: "+(s||t));if(t=s,t.infiniteScrollGUID){var l=r[t.infiniteScrollGUID];return l.option(e),l}this.element=t,this.options=i.extend({},n.defaults),this.option(e),o&&(this.$element=o(this.element)),this.create()}var o=t.jQuery,r={};n.defaults={},n.create={},n.destroy={};var s=n.prototype;i.extend(s,e.prototype);var l=0;s.create=function(){var t=this.guid=++l;this.element.infiniteScrollGUID=t,r[t]=this,this.pageIndex=1,this.loadCount=0,this.updateGetPath();var e=this.getPath&&this.getPath();if(!e)return void console.error("Disabling InfiniteScroll");this.updateGetAbsolutePath(),this.log("initialized",[this.element.className]),this.callOnInit();for(var i in n.create)n.create[i].call(this)},s.option=function(t){i.extend(this.options,t)},s.callOnInit=function(){var t=this.options.onInit;t&&t.call(this,this)},s.dispatchEvent=function(t,e,i){this.log(t,i);var n=e?[e].concat(i):i;if(this.emitEvent(t,n),o&&this.$element){t+=".infiniteScroll";var r=t;if(e){var s=o.Event(e);s.type=t,r=s}this.$element.trigger(r,i)}};var a={initialized:function(t){return"on "+t},request:function(t){return"URL: "+t},load:function(t,e){return(t.title||"")+". URL: "+e},error:function(t,e){return t+". URL: "+e},append:function(t,e,i){return i.length+" items. URL: "+e},last:function(t,e){return"URL: "+e},history:function(t,e){return"URL: "+e},pageIndex:function(t,e){return"current page determined to be: "+t+" from "+e}};s.log=function(t,e){if(this.options.debug){var i="[InfiniteScroll] "+t,n=a[t];n&&(i+=". "+n.apply(this,e)),console.log(i)}},s.updateMeasurements=function(){this.windowHeight=t.innerHeight;var e=this.element.getBoundingClientRect();this.top=e.top+t.pageYOffset},s.updateScroller=function(){var e=this.options.elementScroll;if(!e)return void(this.scroller=t);if(this.scroller=e===!0?this.element:i.getQueryElement(e),!this.scroller)throw"Unable to find elementScroll: "+e},s.updateGetPath=function(){var t=this.options.path;if(!t)return void console.error("InfiniteScroll path option required. Set as: "+t);var e=typeof t;if("function"==e)return void(this.getPath=t);var i="string"==e&&t.match("{{#}}");return i?void this.updateGetPathTemplate(t):void this.updateGetPathSelector(t)},s.updateGetPathTemplate=function(t){this.getPath=function(){var e=this.pageIndex+1;return t.replace("{{#}}",e)}.bind(this);var e=t.replace(/(\\\?|\?)/,"\\?").replace("{{#}}","(\\d\\d?\\d?)"),i=new RegExp(e),n=location.href.match(i);n&&(this.pageIndex=parseInt(n[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))};var h=[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];return s.updateGetPathSelector=function(t){var e=document.querySelector(t);if(!e)return void console.error("Bad InfiniteScroll path option. Next link not found: "+t);for(var i,n,o=e.getAttribute("href"),r=0;o&&r<h.length;r++){n=h[r];var s=o.match(n);if(s){i=s.slice(1);break}}return i?(this.isPathSelector=!0,this.getPath=function(){var t=this.pageIndex+1;return i[0]+t+i[2]}.bind(this),this.pageIndex=parseInt(i[1],10)-1,void this.log("pageIndex",[this.pageIndex,"next link"])):void console.error("InfiniteScroll unable to parse next link href: "+o)},s.updateGetAbsolutePath=function(){var t=this.getPath(),e=t.match(/^http/)||t.match(/^\//);if(e)return void(this.getAbsolutePath=this.getPath);var i=location.pathname,n=t.match(/^\?/);if(n)return void(this.getAbsolutePath=function(){return i+this.getPath()});var o=i.substring(0,i.lastIndexOf("/"));this.getAbsolutePath=function(){return o+"/"+this.getPath()}},n.create.hideNav=function(){var t=i.getQueryElement(this.options.hideNav);t&&(t.style.display="none",this.nav=t)},n.destroy.hideNav=function(){this.nav&&(this.nav.style.display="")},s.destroy=function(){this.allOff();for(var t in n.destroy)n.destroy[t].call(this);delete this.element.infiniteScrollGUID,delete r[this.guid],o&&this.$element&&o.removeData(this.element,"infiniteScroll")},n.throttle=function(t,e){e=e||200;var i,n;return function(){var o=+new Date,r=arguments,s=function(){i=o,t.apply(this,r)}.bind(this);i&&o<i+e?(clearTimeout(n),n=setTimeout(s,e)):s()}},n.data=function(t){t=i.getQueryElement(t);var e=t&&t.infiniteScrollGUID;return e&&r[e]},n.setJQuery=function(t){o=t},i.htmlInit(n,"infinite-scroll"),s._init=function(){},o&&o.bridget&&o.bridget("infiniteScroll",n),n}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/page-load",["./core"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core")):e(t,t.InfiniteScroll)}(window,function(t,e){function i(t){for(var e=document.createDocumentFragment(),i=0;t&&i<t.length;i++)e.appendChild(t[i]);return e}function n(t){for(var e=t.querySelectorAll("script"),i=0;i<e.length;i++){var n=e[i],r=document.createElement("script");o(n,r),r.innerHTML=n.innerHTML,n.parentNode.replaceChild(r,n)}}function o(t,e){for(var i=t.attributes,n=0;n<i.length;n++){var o=i[n];e.setAttribute(o.name,o.value)}}function r(t,e,i,n,o){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType=e||"",r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.onload=function(){if(200==r.status)i(r.response);else if(204==r.status)o(r.response);else{var t=new Error(r.statusText);n(t)}},r.onerror=function(){var e=new Error("Network error requesting "+t);n(e)},r.send()}var s=e.prototype;return e.defaults.loadOnScroll=!0,e.defaults.checkLastPage=!0,e.defaults.responseType="document",e.create.pageLoad=function(){this.canLoad=!0,this.on("scrollThreshold",this.onScrollThresholdLoad),this.on("load",this.checkLastPage),this.options.outlayer&&this.on("append",this.onAppendOutlayer)},s.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()},s.loadNextPage=function(){if(!this.isLoading&&this.canLoad){var t=this.getAbsolutePath();this.isLoading=!0;var e=function(e){this.onPageLoad(e,t)}.bind(this),i=function(e){this.onPageError(e,t)}.bind(this),n=function(e){this.lastPageReached(e,t)}.bind(this);r(t,this.options.responseType,e,i,n),this.dispatchEvent("request",null,[t])}},s.onPageLoad=function(t,e){return this.options.append||(this.isLoading=!1),this.pageIndex++,this.loadCount++,this.dispatchEvent("load",null,[t,e]),this.appendNextPage(t,e),t},s.appendNextPage=function(t,e){var n=this.options.append,o="document"==this.options.responseType;if(o&&n){var r=t.querySelectorAll(n),s=i(r),l=function(){this.appendItems(r,s),this.isLoading=!1,this.dispatchEvent("append",null,[t,e,r])}.bind(this);this.options.outlayer?this.appendOutlayerItems(s,l):l()}},s.appendItems=function(t,e){t&&t.length&&(e=e||i(t),n(e),this.element.appendChild(e))},s.appendOutlayerItems=function(i,n){var o=e.imagesLoaded||t.imagesLoaded;return o?void o(i,n):(console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),void(this.isLoading=!1))},s.onAppendOutlayer=function(t,e,i){this.options.outlayer.appended(i)},s.checkLastPage=function(t,e){var i=this.options.checkLastPage;if(i){var n=this.options.path;if("function"==typeof n){var o=this.getPath();if(!o)return void this.lastPageReached(t,e)}var r;if("string"==typeof i?r=i:this.isPathSelector&&(r=n),r&&t.querySelector){var s=t.querySelector(r);s||this.lastPageReached(t,e)}}},s.lastPageReached=function(t,e){this.canLoad=!1,this.dispatchEvent("last",null,[t,e])},s.onPageError=function(t,e){return this.isLoading=!1,this.canLoad=!1,this.dispatchEvent("error",null,[t,e]),t},e.create.prefill=function(){if(this.options.prefill){var t=this.options.append;if(!t)return void console.error("append option required for prefill. Set as :"+t);this.updateMeasurements(),this.updateScroller(),this.isPrefilling=!0,this.on("append",this.prefill),this.once("error",this.stopPrefill),this.once("last",this.stopPrefill),this.prefill()}},s.prefill=function(){var t=this.getPrefillDistance();this.isPrefilling=t>=0,this.isPrefilling?(this.log("prefill"),this.loadNextPage()):this.stopPrefill()},s.getPrefillDistance=function(){return this.options.elementScroll?this.scroller.clientHeight-this.scroller.scrollHeight:this.windowHeight-this.element.clientHeight},s.stopPrefill=function(){this.log("stopPrefill"),this.off("append",this.prefill)},e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/scroll-watch",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;return e.defaults.scrollThreshold=400,e.create.scrollWatch=function(){this.pageScrollHandler=this.onPageScroll.bind(this),this.resizeHandler=this.onResize.bind(this);var t=this.options.scrollThreshold,e=t||0===t;e&&this.enableScrollWatch()},e.destroy.scrollWatch=function(){this.disableScrollWatch()},n.enableScrollWatch=function(){this.isScrollWatching||(this.isScrollWatching=!0,this.updateMeasurements(),this.updateScroller(),this.on("last",this.disableScrollWatch),this.bindScrollWatchEvents(!0))},n.disableScrollWatch=function(){this.isScrollWatching&&(this.bindScrollWatchEvents(!1),delete this.isScrollWatching)},n.bindScrollWatchEvents=function(e){var i=e?"addEventListener":"removeEventListener";this.scroller[i]("scroll",this.pageScrollHandler),t[i]("resize",this.resizeHandler)},n.onPageScroll=e.throttle(function(){var t=this.getBottomDistance();t<=this.options.scrollThreshold&&this.dispatchEvent("scrollThreshold")}),n.getBottomDistance=function(){return this.options.elementScroll?this.getElementBottomDistance():this.getWindowBottomDistance()},n.getWindowBottomDistance=function(){var e=this.top+this.element.clientHeight,i=t.pageYOffset+this.windowHeight;return e-i},n.getElementBottomDistance=function(){var t=this.scroller.scrollHeight,e=this.scroller.scrollTop+this.scroller.clientHeight;return t-e},n.onResize=function(){this.updateMeasurements()},i.debounceMethod(e,"onResize",150),e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/history",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;e.defaults.history="replace";var o=document.createElement("a");return e.create.history=function(){if(this.options.history){o.href=this.getAbsolutePath();var t=o.origin||o.protocol+"//"+o.host,e=t==location.origin;return e?void(this.options.append?this.createHistoryAppend():this.createHistoryPageLoad()):void console.error("[InfiniteScroll] cannot set history with different origin: "+o.origin+" on "+location.origin+" . History behavior disabled.")}},n.createHistoryAppend=function(){this.updateMeasurements(),this.updateScroller(),this.scrollPages=[{top:0,path:location.href,title:document.title}],this.scrollPageIndex=0,this.scrollHistoryHandler=this.onScrollHistory.bind(this),this.unloadHandler=this.onUnload.bind(this),this.scroller.addEventListener("scroll",this.scrollHistoryHandler),this.on("append",this.onAppendHistory),this.bindHistoryAppendEvents(!0)},n.bindHistoryAppendEvents=function(e){var i=e?"addEventListener":"removeEventListener";this.scroller[i]("scroll",this.scrollHistoryHandler),t[i]("unload",this.unloadHandler)},n.createHistoryPageLoad=function(){this.on("load",this.onPageLoadHistory)},e.destroy.history=n.destroyHistory=function(){var t=this.options.history&&this.options.append;t&&this.bindHistoryAppendEvents(!1)},n.onAppendHistory=function(t,e,i){if(i&&i.length){var n=i[0],r=this.getElementScrollY(n);o.href=e,this.scrollPages.push({top:r,path:o.href,title:t.title})}},n.getElementScrollY=function(t){return this.options.elementScroll?this.getElementElementScrollY(t):this.getElementWindowScrollY(t)},n.getElementWindowScrollY=function(e){var i=e.getBoundingClientRect();return i.top+t.pageYOffset},n.getElementElementScrollY=function(t){return t.offsetTop-this.top},n.onScrollHistory=function(){for(var t,e,i=this.getScrollViewY(),n=0;n<this.scrollPages.length;n++){var o=this.scrollPages[n];if(o.top>=i)break;t=n,e=o}t!=this.scrollPageIndex&&(this.scrollPageIndex=t,this.setHistory(e.title,e.path))},i.debounceMethod(e,"onScrollHistory",150),n.getScrollViewY=function(){return this.options.elementScroll?this.scroller.scrollTop+this.scroller.clientHeight/2:t.pageYOffset+this.windowHeight/2},n.setHistory=function(t,e){var i=this.options.history,n=i&&history[i+"State"];n&&(history[i+"State"](null,t,e),this.options.historyTitle&&(document.title=t),this.dispatchEvent("history",null,[t,e]))},n.onUnload=function(){var e=this.scrollPageIndex;if(0!==e){var i=this.scrollPages[e],n=t.pageYOffset-i.top+this.top;this.destroyHistory(),scrollTo(0,n)}},n.onPageLoadHistory=function(t,e){this.setHistory(t.title,e)},e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/button",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){function n(t,e){this.element=t,this.infScroll=e,this.clickHandler=this.onClick.bind(this),this.element.addEventListener("click",this.clickHandler),e.on("request",this.disable.bind(this)),e.on("load",this.enable.bind(this)),e.on("error",this.hide.bind(this)),e.on("last",this.hide.bind(this))}return e.create.button=function(){var t=i.getQueryElement(this.options.button);if(t)return void(this.button=new n(t,this))},e.destroy.button=function(){this.button&&this.button.destroy()},n.prototype.onClick=function(t){t.preventDefault(),this.infScroll.loadNextPage()},n.prototype.enable=function(){this.element.removeAttribute("disabled")},n.prototype.disable=function(){this.element.disabled="disabled"},n.prototype.hide=function(){this.element.style.display="none"},n.prototype.destroy=function(){this.element.removeEventListener("click",this.clickHandler)},e.Button=n,e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/status",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){r(t,"none")}function o(t){r(t,"block")}function r(t,e){t&&(t.style.display=e)}var s=e.prototype;return e.create.status=function(){var t=i.getQueryElement(this.options.status);t&&(this.statusElement=t,this.statusEventElements={request:t.querySelector(".infinite-scroll-request"),error:t.querySelector(".infinite-scroll-error"),last:t.querySelector(".infinite-scroll-last")},this.on("request",this.showRequestStatus),this.on("error",this.showErrorStatus),this.on("last",this.showLastStatus),this.bindHideStatus("on"))},s.bindHideStatus=function(t){var e=this.options.append?"append":"load";this[t](e,this.hideAllStatus)},s.showRequestStatus=function(){this.showStatus("request")},s.showErrorStatus=function(){this.showStatus("error")},s.showLastStatus=function(){this.showStatus("last"),this.bindHideStatus("off")},s.showStatus=function(t){o(this.statusElement),this.hideStatusEventElements();var e=this.statusEventElements[t];o(e)},s.hideAllStatus=function(){n(this.statusElement),this.hideStatusEventElements()},s.hideStatusEventElements=function(){for(var t in this.statusEventElements){var e=this.statusEventElements[t];n(e)}},e}),function(t,e){"function"==typeof define&&define.amd?define(["infinite-scroll/js/core","infinite-scroll/js/page-load","infinite-scroll/js/scroll-watch","infinite-scroll/js/history","infinite-scroll/js/button","infinite-scroll/js/status"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./core"),require("./page-load"),require("./scroll-watch"),require("./history"),require("./button"),require("./status")))}(window,function(t){return t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){if(Array.isArray(t))return t;var e="object"==typeof t&&"number"==typeof t.length;return e?h.call(t):[t]}function o(t,e,r){if(!(this instanceof o))return new o(t,e,r);var s=t;return"string"==typeof t&&(s=document.querySelectorAll(t)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),l&&(this.jqDeferred=new l.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||t))}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var l=t.jQuery,a=t.console,h=Array.prototype.slice;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var c={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(l=e,l.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(l(this))})},o.makeJQueryPlugin(),o});
;/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

!function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof module&&module.exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof module&&module.exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}var c=b.prototype;c.reset=function(){this.spaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=d[this.sortDirection]||d.downwardLeftToRight},c.pack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b];if(c.canFit(a)){this.placeInSpace(a,c);break}}},c.columnPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.x<=a.x&&c.x+c.width>=a.x+a.width&&c.height>=a.height-.01;if(d){a.y=c.y,this.placed(a);break}}},c.rowPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.y<=a.y&&c.y+c.height>=a.y+a.height&&c.width>=a.width-.01;if(d){a.x=c.x,this.placed(a);break}}},c.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},c.placed=function(a){for(var b=[],c=0;c<this.spaces.length;c++){var d=this.spaces[c],e=d.getMaximalFreeRects(a);e?b.push.apply(b,e):b.push(d)}this.spaces=b,this.mergeSortSpaces()},c.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},c.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b];a:for(;c;){for(var d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue a}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}b++,c=a[b]}return a};var d={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("./rect")):a.Packery.Item=b(a.Outlayer,a.Packery.Rect)}(window,function(a,b){var c=document.documentElement.style,d="string"==typeof c.transform?"transform":"WebkitTransform",e=function(){a.Item.apply(this,arguments)},f=e.prototype=Object.create(a.Item.prototype),g=f._create;f._create=function(){g.call(this),this.rect=new b};var h=f.moveTo;return f.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b),e=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d;return e?void this.goTo(a,b):void h.apply(this,arguments)},f.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},f.disablePlacing=function(){this.isPlacing=!1},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},f.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||(a=this.dropPlaceholder=document.createElement("div"),a.className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},f.positionDropPlaceholder=function(){this.dropPlaceholder.style[d]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},f.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof module&&module.exports?module.exports=b(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e){function f(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function g(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function h(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=b.create("packery");i.Item=e;var j=i.prototype;j._create=function(){b.prototype._create.call(this),this.packer=new d,this.shiftPacker=new d,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(b,c){c&&a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},j._resetLayout=function(){this.getSize(),this._getMeasurements();var a,b,c;this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},j._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},j._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},j.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},j._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},j._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},j._setRectSize=function(b,c){var d=a(b),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},j._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},j._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},j._manageStamp=function(a){var b,d=this.getItem(a);if(d&&d.isPlacing)b=d.rect;else{var e=this._getElementOffset(a);b=new c({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},j.sortItemsByPosition=function(){var a=this._getOption("horizontal")?g:f;this.items.sort(a)},j.fit=function(a,b,c){var d=this.getItem(a);d&&(this.stamp(d.element),d.enablePlacing(),this.updateShiftTargets(d),b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,this.shift(d,b,c),this._bindFitEvents(d),d.moveTo(d.rect.x,d.rect.y),this.shiftLayout(),this.unstamp(d.element),this.sortItemsByPosition(),d.disablePlacing())},j._bindFitEvents=function(a){function b(){d++,2==d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},j.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},j.needsResizeLayout=function(){var b=a(this.element),c=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[c]!=this.size[c]},j.resizeShiftPercentLayout=function(){var b=this._getItemsForLayout(this.items),c=this._getOption("horizontal"),d=c?"y":"x",e=c?"height":"width",f=c?"rowHeight":"columnWidth",g=c?"innerHeight":"innerWidth",h=this[f];if(h=h&&h+this.gutter){this._getMeasurements();var i=this[f]+this.gutter;b.forEach(function(a){var b=Math.round(a.rect[d]/h);a.rect[d]=b*i})}else{var j=a(this.element)[g]+this.gutter,k=this.packer[e];b.forEach(function(a){a.rect[d]=a.rect[d]/k*j})}this.shiftLayout()},j.itemDragStart=function(a){if(this.isEnabled){this.stamp(a);var b=this.getItem(a);b&&(b.enablePlacing(),b.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(b))}},j.updateShiftTargets=function(a){this.shiftPacker.reset(),this._getBoundingRect();var b=this._getOption("originLeft"),d=this._getOption("originTop");this.stamps.forEach(function(a){var e=this.getItem(a);if(!e||!e.isPlacing){var f=this._getElementOffset(a),g=new c({x:b?f.left:f.right,y:d?f.top:f.bottom});this._setRectSize(a,g),this.shiftPacker.placed(g)}},this);var e=this._getOption("horizontal"),f=e?"rowHeight":"columnWidth",g=e?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h,i=this[f];if(i=i&&i+this.gutter){var j=Math.ceil(a.rect[g]/i),k=Math.floor((this.shiftPacker[g]+this.gutter)/i);h=(k-j)*i;for(var l=0;k>l;l++)this._addShiftTarget(l*i,0,h)}else h=this.shiftPacker[g]+this.gutter-a.rect[g],this._addShiftTarget(0,0,h);var m=this._getItemsForLayout(this.items),n=this._getPackMethod();m.forEach(function(a){var b=a.rect;this._setRectSize(a.element,b),this.shiftPacker[n](b),this._addShiftTarget(b.x,b.y,h);var c=e?b.x+b.width:b.x,d=e?b.y:b.y+b.height;if(this._addShiftTarget(c,d,h),i)for(var f=Math.round(b[g]/i),j=1;f>j;j++){var k=e?c:b.x+i*j,l=e?b.y+i*j:d;this._addShiftTarget(k,l,h)}},this)},j._addShiftTarget=function(a,b,c){var d=this._getOption("horizontal")?b:a;if(!(0!==d&&d>c)){var e=a+","+b,f=-1!=this.shiftTargetKeys.indexOf(e);f||(this.shiftTargetKeys.push(e),this.shiftTargets.push({x:a,y:b}))}},j.shift=function(a,b,c){var d,e=1/0,f={x:b,y:c};this.shiftTargets.forEach(function(a){var b=h(a,f);e>b&&(d=a,e=b)}),a.rect.x=d.x,a.rect.y=d.y};var k=120;j.itemDragMove=function(a,b,c){function d(){f.shift(e,b,c),e.positionDropPlaceholder(),f.layout()}var e=this.isEnabled&&this.getItem(a);if(e){b-=this.size.paddingLeft,c-=this.size.paddingTop;var f=this,g=new Date;this._itemDragTime&&g-this._itemDragTime<k?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(d,k)):(d(),this._itemDragTime=g)}},j.itemDragEnd=function(a){function b(){d++,2==d&&(c.element.classList.remove("is-positioning-post-drag"),c.hideDropPlaceholder(),e.dispatchEvent("dragItemPositioned",null,[c]))}var c=this.isEnabled&&this.getItem(a);if(c){clearTimeout(this.dragTimeout),c.element.classList.add("is-positioning-post-drag");var d=0,e=this;c.once("layout",b),this.once("layoutComplete",b),c.moveTo(c.rect.x,c.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),c.disablePlacing(),this.unstamp(c.element)}},j.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},j.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},j._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},j.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},j.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},j._bindUIDraggableEvents=function(a,b){var c=this.handleUIDraggable;a[b]("dragstart",c.start)[b]("drag",c.drag)[b]("dragstop",c.stop)};var l=j.destroy;return j.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},i.Rect=c,i.Packer=d,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope-layout/js/layout-mode","packery/js/packery"],b):"object"==typeof module&&module.exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery")):b(a.Isotope.LayoutMode,a.Packery)}(window,function(a,b){var c=a.create("packery"),d=c.prototype,e={_getElementOffset:!0,_getMeasurement:!0};for(var f in b.prototype)e[f]||(d[f]=b.prototype[f]);var g=d._resetLayout;d._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)};var h=d._getItemLayoutPosition;d._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)};var i=d.needsResizeLayout;d.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)};var j=d._getOption;return d._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},c});
;/**
 * Swiper 10.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2023
 */

var Swiper = (function () {
    'use strict';

    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */
    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
        return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }
    function extend$1(target, src) {
        if (target === void 0) {
            target = {};
        }
        if (src === void 0) {
            src = {};
        }
        Object.keys(src).forEach(key => {
            if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
            extend$1(target[key], src[key]);
        }
    });
    }
    const ssrDocument = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ''
        },
        querySelector() {
            return null;
        },
        querySelectorAll() {
            return [];
        },
        getElementById() {
            return null;
        },
        createEvent() {
            return {
                initEvent() {}
            };
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS() {
            return {};
        },
        importNode() {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        }
    };
    function getDocument() {
        const doc = typeof document !== 'undefined' ? document : {};
        extend$1(doc, ssrDocument);
        return doc;
    }
    const ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ''
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return '';
                }
            };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {};
        },
        requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }
            clearTimeout(id);
        }
    };
    function getWindow() {
        const win = typeof window !== 'undefined' ? window : {};
        extend$1(win, ssrWindow);
        return win;
    }

    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach(key => {
            try {
                object[key] = null;
    } catch (e) {
            // no getter for object
        }
        try {
            delete object[key];
        } catch (e) {
            // something got wrong
        }
    });
    }
    function nextTick(callback, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setTimeout(callback, delay);
    }
    function now() {
        return Date.now();
    }
    function getComputedStyle$1(el) {
        const window = getWindow();
        let style;
        if (window.getComputedStyle) {
            style = window.getComputedStyle(el, null);
        }
        if (!style && el.currentStyle) {
            style = el.currentStyle;
        }
        if (!style) {
            style = el.style;
        }
        return style;
    }
    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = 'x';
        }
        const window = getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = getComputedStyle$1(el);
        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }
        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
            // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
            // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    }
    function isObject(o) {
        return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }
    function isNode(node) {
        // eslint-disable-next-line
        if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
            return node instanceof HTMLElement;
        }
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function extend() {
        const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
        const noExtend = ['__proto__', 'constructor', 'prototype'];
        for (let i = 1; i < arguments.length; i += 1) {
            const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
            if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend(to[nextKey], nextSource[nextKey]);
                            }
                        } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend(to[nextKey], nextSource[nextKey]);
                            }
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }
        return to;
    }
    function setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll(_ref) {
        let {
            swiper,
            targetPosition,
            side
        } = _ref;
        const window = getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = 'none';
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? 'next' : 'prev';
        const isOutOfBound = (current, target) => {
            return dir === 'next' && current >= target || dir === 'prev' && current <= target;
        };
        const animate = () => {
            time = new Date().getTime();
            if (startTime === null) {
                startTime = time;
            }
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) {
                currentPosition = targetPosition;
            }
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.scrollSnapType = '';
                setTimeout(() => {
                    swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window.requestAnimationFrame(animate);
        };
        animate();
    }
    function getSlideTransformEl(slideEl) {
        return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
    }
    function elementChildren(element, selector) {
        if (selector === void 0) {
            selector = '';
        }
        return [...element.children].filter(el => el.matches(selector));
    }
    function createElement(tag, classes) {
        if (classes === void 0) {
            classes = [];
        }
        const el = document.createElement(tag);
        el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
        return el;
    }
    function elementOffset(el) {
        const window = getWindow();
        const document = getDocument();
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    function elementPrevAll(el, selector) {
        const prevEls = [];
        while (el.previousElementSibling) {
            const prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if (prev.matches(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return prevEls;
    }
    function elementNextAll(el, selector) {
        const nextEls = [];
        while (el.nextElementSibling) {
            const next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if (next.matches(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return nextEls;
    }
    function elementStyle(el, prop) {
        const window = getWindow();
        return window.getComputedStyle(el, null).getPropertyValue(prop);
    }
    function elementIndex(el) {
        let child = el;
        let i;
        if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
            }
            return i;
        }
        return undefined;
    }
    function elementParents(el, selector) {
        const parents = []; // eslint-disable-line
        let parent = el.parentElement; // eslint-disable-line
        while (parent) {
            if (selector) {
                if (parent.matches(selector)) parents.push(parent);
            } else {
                parents.push(parent);
            }
            parent = parent.parentElement;
        }
        return parents;
    }
    function elementTransitionEnd(el, callback) {
        function fireCallBack(e) {
            if (e.target !== el) return;
            callback.call(el, e);
            el.removeEventListener('transitionend', fireCallBack);
        }
        if (callback) {
            el.addEventListener('transitionend', fireCallBack);
        }
    }
    function elementOuterSize(el, size, includeMargins) {
        const window = getWindow();
        if (includeMargins) {
            return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
        }
        return el.offsetWidth;
    }

    let support;
    function calcSupport() {
        const window = getWindow();
        const document = getDocument();
        return {
            smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
        };
    }
    function getSupport() {
        if (!support) {
            support = calcSupport();
        }
        return support;
    }

    let deviceCached;
    function calcDevice(_temp) {
        let {
            userAgent
        } = _temp === void 0 ? {} : _temp;
        const support = getSupport();
        const window = getWindow();
        const platform = window.navigator.platform;
        const ua = userAgent || window.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === 'Win32';
        let macos = platform === 'MacIntel';

        // iPadOs 13 fix
        const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
        if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
        }

        // Android
        if (android && !windows) {
            device.os = 'android';
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }

        // Export object
        return device;
    }
    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }
        if (!deviceCached) {
            deviceCached = calcDevice(overrides);
        }
        return deviceCached;
    }

    let browser;
    function calcBrowser() {
        const window = getWindow();
        let needPerspectiveFix = false;
        function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }
        if (isSafari()) {
            const ua = String(window.navigator.userAgent);
            if (ua.includes('Version/')) {
                const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
                needPerspectiveFix = major < 16 || major === 16 && minor < 2;
            }
        }
        return {
            isSafari: needPerspectiveFix || isSafari(),
            needPerspectiveFix,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
        };
    }
    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }
        return browser;
    }

    function Resize(_ref) {
        let {
            swiper,
            on,
            emit
        } = _ref;
        const window = getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('beforeResize');
            emit('resize');
        };
        const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver(entries => {
                animationFrame = window.requestAnimationFrame(() => {
                    const {
                        width,
                        height
                    } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(_ref2 => {
                let {
                    contentBoxSize,
                    contentRect,
                    target
                } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
            if (newWidth !== width || newHeight !== height) {
                resizeHandler();
            }
        });
        });
            observer.observe(swiper.el);
        };
        const removeObserver = () => {
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('orientationchange');
        };
        on('init', () => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
        on('destroy', () => {
            removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
    }

    function Observer(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const observers = [];
        const window = getWindow();
        const attach = function (target, options) {
            if (options === void 0) {
                options = {};
            }
            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            const observer = new ObserverFunc(mutations => {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(observerUpdate);
            } else {
                window.setTimeout(observerUpdate, 0);
            }
        });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            observers.push(observer);
        };
        const init = () => {
            if (!swiper.params.observer) return;
            if (swiper.params.observeParents) {
                const containerParents = elementParents(swiper.hostEl);
                for (let i = 0; i < containerParents.length; i += 1) {
                    attach(containerParents[i]);
                }
            }
            // Observe container
            attach(swiper.hostEl, {
                childList: swiper.params.observeSlideChildren
            });

            // Observe wrapper
            attach(swiper.wrapperEl, {
                attributes: false
            });
        };
        const destroy = () => {
            observers.forEach(observer => {
                observer.disconnect();
        });
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on('init', init);
        on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */

    var eventsEmitter = {
        on(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(event => {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
            return self;
        },
        once(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny(handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }
            return self;
        },
        offAny(handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }
            return self;
        },
        off(events, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(event => {
                if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else if (self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler, index) => {
                    if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                    self.eventsListeners[event].splice(index, 1);
                }
            });
            }
        });
            return self;
        },
        emit() {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }
            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(event => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                self.eventsAnyListeners.forEach(eventHandler => {
                    eventHandler.apply(context, [event, ...data]);
            });
            }
            if (self.eventsListeners && self.eventsListeners[event]) {
                self.eventsListeners[event].forEach(eventHandler => {
                    eventHandler.apply(context, data);
            });
            }
        });
            return self;
        }
    };

    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const el = swiper.el;
        if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = el.clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
            height = swiper.params.height;
        } else {
            height = el.clientHeight;
        }
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        }

        // Subtract paddings
        width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
        height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        const swiper = this;
        function getDirectionLabel(property) {
            if (swiper.isHorizontal()) {
                return property;
            }
            // prettier-ignore
            return {
                'width': 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                'marginRight': 'marginBottom'
            }[property];
        }
        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const {
            wrapperEl,
            slidesEl,
            size: swiperSize,
            rtlTranslate: rtl,
            wrongRTL
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        swiper.virtualSize = -spaceBetween;

        // reset margins
        slides.forEach(slideEl => {
            if (rtl) {
                slideEl.style.marginLeft = '';
            } else {
                slideEl.style.marginRight = '';
    }
        slideEl.style.marginBottom = '';
        slideEl.style.marginTop = '';
    });

        // reset cssMode offsets
        if (params.centeredSlides && params.cssMode) {
            setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
            setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) {
            swiper.grid.initSlides(slidesLength);
        }

        // Calc slides
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
            return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
        for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            let slide;
            if (slides[i]) slide = slides[i];
            if (gridEnabled) {
                swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
            }
            if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                if (shouldResetSlideSize) {
                    slides[i].style[getDirectionLabel('width')] = ``;
                }
                const slideStyles = getComputedStyle(slide);
                const currentTransform = slide.style.transform;
                const currentWebKitTransform = slide.style.webkitTransform;
                if (currentTransform) {
                    slide.style.transform = 'none';
                }
                if (currentWebKitTransform) {
                    slide.style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
                } else {
                    // eslint-disable-next-line
                    const width = getDirectionPropertyValue(slideStyles, 'width');
                    const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                    const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                    const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                    const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                    const boxSizing = slideStyles.getPropertyValue('box-sizing');
                    if (boxSizing && boxSizing === 'border-box') {
                        slideSize = width + marginLeft + marginRight;
                    } else {
                        const {
                            clientWidth,
                            offsetWidth
                        } = slide;
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) {
                    slide.style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide.style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) {
                    slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (params.setWrapperSize) {
            wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (gridEnabled) {
            swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
        }

        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (isVirtual && params.loop) {
            const size = slidesSizesGrid[0] + spaceBetween;
            if (params.slidesPerGroup > 1) {
                const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                const groupSize = size * params.slidesPerGroup;
                for (let i = 0; i < groups; i += 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
            }
            for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                if (params.slidesPerGroup === 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                }
                slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                swiper.virtualSize += size;
            }
        }
        if (snapGrid.length === 0) snapGrid = [0];
        if (spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
            slides.filter((_, slideIndex) => {
                if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) {
                return false;
            }
            return true;
        }).forEach(slideEl => {
                slideEl.style[key] = `${spaceBetween}px`;
        });
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
            allSlidesSize -= spaceBetween;
            const maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map(snap => {
                if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
            allSlidesSize -= spaceBetween;
            if (allSlidesSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach((snap, snapIndex) => {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
            });
                slidesGrid.forEach((snap, snapIndex) => {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
            setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
            swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
        }
        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) {
                swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
    }

    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        const getSlideByIndex = index => {
            if (isVirtual) {
                return swiper.slides[swiper.getSlideIndexByData(index)];
            }
            return swiper.slides[index];
        };
        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                (swiper.visibleSlides || []).forEach(slide => {
                    activeSlides.push(slide);
            });
            } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    const index = swiper.activeIndex + i;
                    if (index > swiper.slides.length && !isVirtual) break;
                    activeSlides.push(getSlideByIndex(index));
                }
            }
        } else {
            activeSlides.push(getSlideByIndex(swiper.activeIndex));
        }

        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }

        // Update Height
        if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
    }

    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        // eslint-disable-next-line
        const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
        for (let i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) {
            translate = this && this.translate || 0;
        }
        const swiper = this;
        const params = swiper.params;
        const {
            slides,
            rtlTranslate: rtl,
            snapGrid
        } = swiper;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
        let offsetCenter = -translate;
        if (rtl) offsetCenter = translate;

        // Visible Slides
        slides.forEach(slideEl => {
            slideEl.classList.remove(params.slideVisibleClass);
    });
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        let spaceBetween = params.spaceBetween;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) {
                slideOffset -= slides[0].swiperSlideOffset;
            }
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
                slides[i].classList.add(params.slideVisibleClass);
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
    }

    function updateProgress(translate) {
        const swiper = this;
        if (typeof translate === 'undefined') {
            const multiplier = swiper.rtlTranslate ? -1 : 1;
            // eslint-disable-next-line
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let {
            progress,
            isBeginning,
            isEnd,
            progressLoop
        } = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
            const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
            isBeginning = isBeginningRounded || progress <= 0;
            isEnd = isEndRounded || progress >= 1;
            if (isBeginningRounded) progress = 0;
            if (isEndRounded) progress = 1;
        }
        if (params.loop) {
            const firstSlideIndex = swiper.getSlideIndexByData(0);
            const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
            const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
            const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
            const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
            const translateAbs = Math.abs(translate);
            if (translateAbs >= firstSlideTranslate) {
                progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
            } else {
                progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
            }
            if (progressLoop > 1) progressLoop -= 1;
        }
        Object.assign(swiper, {
            progress,
            progressLoop,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
        }
        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        const swiper = this;
        const {
            slides,
            params,
            slidesEl,
            activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const getFilteredSlide = selector => {
            return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
        };
        slides.forEach(slideEl => {
            slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
        let activeSlide;
        if (isVirtual) {
            if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else {
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
            }
        } else {
            activeSlide = slides[activeIndex];
        }
        if (activeSlide) {
            // Active classes
            activeSlide.classList.add(params.slideActiveClass);

            // Next Slide
            let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) {
                nextSlide = slides[0];
            }
            if (nextSlide) {
                nextSlide.classList.add(params.slideNextClass);
            }
            // Prev Slide
            let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !prevSlide === 0) {
                prevSlide = slides[slides.length - 1];
            }
            if (prevSlide) {
                prevSlide.classList.add(params.slidePrevClass);
            }
        }
        swiper.emitSlidesClasses();
    }

    const processLazyPreloader = (swiper, imageEl) => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        const slideEl = imageEl.closest(slideSelector());
        if (slideEl) {
            let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (!lazyEl && swiper.isElement) {
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                } else {
                    // init later
                    requestAnimationFrame(() => {
                        if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                });
                }
            }
            if (lazyEl) lazyEl.remove();
        }
    };
    const unlazy = (swiper, index) => {
        if (!swiper.slides[index]) return;
        const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
        if (imageEl) imageEl.removeAttribute('loading');
    };
    const preload = swiper => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        let amount = swiper.params.lazyPreloadPrevNext;
        const len = swiper.slides.length;
        if (!len || !amount || amount < 0) return;
        amount = Math.min(amount, len);
        const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
        const activeIndex = swiper.activeIndex;
        if (swiper.params.grid && swiper.params.grid.rows > 1) {
            const activeColumn = activeIndex;
            const preloadColumns = [activeColumn - amount];
            preloadColumns.push(...Array.from({
                length: amount
            }).map((_, i) => {
                return activeColumn + slidesPerView + i;
        }));
            swiper.slides.forEach((slideEl, i) => {
                if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
            return;
        }
        const slideIndexLastInView = activeIndex + slidesPerView - 1;
        if (swiper.params.rewind || swiper.params.loop) {
            for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            }
        } else {
            for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
                if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
                    unlazy(swiper, i);
                }
            }
        }
    };

    function getActiveIndexByTranslate(swiper) {
        const {
            slidesGrid,
            params
        } = swiper;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        let activeIndex;
        for (let i = 0; i < slidesGrid.length; i += 1) {
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                    activeIndex = i;
                } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                    activeIndex = i + 1;
                }
            } else if (translate >= slidesGrid[i]) {
                activeIndex = i;
            }
        }
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
        return activeIndex;
    }
    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const {
            snapGrid,
            params,
            activeIndex: previousIndex,
            realIndex: previousRealIndex,
            snapIndex: previousSnapIndex
        } = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        const getVirtualRealIndex = aIndex => {
            let realIndex = aIndex - swiper.virtual.slidesBefore;
            if (realIndex < 0) {
                realIndex = swiper.virtual.slides.length + realIndex;
            }
            if (realIndex >= swiper.virtual.slides.length) {
                realIndex -= swiper.virtual.slides.length;
            }
            return realIndex;
        };
        if (typeof activeIndex === 'undefined') {
            activeIndex = getActiveIndexByTranslate(swiper);
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
            }
            return;
        }
        // Get real index
        let realIndex;
        if (swiper.virtual && params.virtual.enabled && params.loop) {
            realIndex = getVirtualRealIndex(activeIndex);
        } else if (swiper.slides[activeIndex]) {
            realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
        } else {
            realIndex = activeIndex;
        }
        Object.assign(swiper, {
            previousSnapIndex,
            snapIndex,
            previousRealIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        if (swiper.initialized) {
            preload(swiper);
        }
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            if (previousRealIndex !== realIndex) {
                swiper.emit('realIndexChange');
            }
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(el, path) {
        const swiper = this;
        const params = swiper.params;
        let slide = el.closest(`.${params.slideClass}, swiper-slide`);
        if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
            [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
                slide = pathEl;
            }
        });
        }
        let slideFound = false;
        let slideIndex;
        if (slide) {
            for (let i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) {
                    slideFound = true;
                    slideIndex = i;
                    break;
                }
            }
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = slideIndex;
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y';
        }
        const swiper = this;
        const {
            params,
            rtlTranslate: rtl,
            translate,
            wrapperEl
        } = swiper;
        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }
        if (params.cssMode) {
            return translate;
        }
        let currentTranslate = getTranslate(wrapperEl, axis);
        currentTranslate += swiper.cssOverflowAdjustment();
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        const swiper = this;
        const {
            rtlTranslate: rtl,
            params,
            wrapperEl,
            progress
        } = swiper;
        let x = 0;
        let y = 0;
        const z = 0;
        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
            if (swiper.isHorizontal()) {
                x -= swiper.cssOverflowAdjustment();
            } else {
                y -= swiper.cssOverflowAdjustment();
            }
            wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        }

        // Check if we need to update progress
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }
        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) {
            translate = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (translateBounds === void 0) {
            translateBounds = true;
        }
        const swiper = this;
        const {
            params,
            wrapperEl
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        const minTranslate = swiper.minTranslate();
        const maxTranslate = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

        // Update progress
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? 'left' : 'top'
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? 'left' : 'top']: -newTranslate,
                    behavior: 'smooth'
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) {
                            swiper.emit('transitionEnd');
                        }
                    };
                }
                swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }

    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };

    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
        }
        swiper.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
        let {
            swiper,
            runCallbacks,
            direction,
            step
        } = _ref;
        const {
            activeIndex,
            previousIndex
        } = swiper;
        let dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
        }
        swiper.emit(`transition${step}`);
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit(`slideResetTransition${step}`);
                return;
            }
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === 'next') {
                swiper.emit(`slideNextTransition${step}`);
            } else {
                swiper.emit(`slidePrevTransition${step}`);
            }
        }
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        if (params.cssMode) return;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'Start'
        });
    }

    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'End'
        });
    }

    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) {
            index = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === 'string') {
            index = parseInt(index, 10);
        }
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        const {
            params,
            snapGrid,
            slidesGrid,
            previousIndex,
            activeIndex,
            rtlTranslate: rtl,
            wrapperEl,
            enabled
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
            return false;
        }
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        const translate = -snapGrid[snapIndex];
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                        slideIndex = i;
                    } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                        slideIndex = i + 1;
                    }
                } else if (normalizedTranslate >= normalizedGrid) {
                    slideIndex = i;
                }
            }
        }
        // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) {
                    return false;
                }
            }
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        // Update progress
        swiper.updateProgress(translate);
        let direction;
        if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

        // Update Index
        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
            if (speed === 0) {
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = 'none';
                    swiper._immediateVirtual = true;
                }
                if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                    swiper._cssModeVirtualInitialSet = true;
                    requestAnimationFrame(() => {
                        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                });
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                }
                if (isVirtual) {
                    requestAnimationFrame(() => {
                        swiper.wrapperEl.style.scrollSnapType = '';
                    swiper._immediateVirtual = false;
                });
                }
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t,
                        side: isH ? 'left' : 'top'
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? 'left' : 'top']: t,
                    behavior: 'smooth'
                });
            }
            return true;
        }
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) {
            swiper.transitionEnd(runCallbacks, direction);
        } else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
            }
            swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === 'string') {
            const indexAsNumber = parseInt(index, 10);
            index = indexAsNumber;
        }
        const swiper = this;
        let newIndex = index;
        if (swiper.params.loop) {
            if (swiper.virtual && swiper.params.virtual.enabled) {
                // eslint-disable-next-line
                newIndex = newIndex + swiper.virtual.slidesBefore;
            } else {
                newIndex = swiper.getSlideIndexByData(newIndex);
            }
        }
        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            enabled,
            params,
            animating
        } = swiper;
        if (!enabled) return swiper;
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
        }
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: 'next'
            });
            // eslint-disable-next-line
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
            if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                requestAnimationFrame(() => {
                    swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            });
                return true;
            }
        }
        if (params.rewind && swiper.isEnd) {
            return swiper.slideTo(0, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params,
            snapGrid,
            slidesGrid,
            rtlTranslate,
            enabled,
            animating
        } = swiper;
        if (!enabled) return swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: 'prev'
            });
            // eslint-disable-next-line
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate;
        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate);
        const normalizedSnapGrid = snapGrid.map(val => normalize(val));
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === 'undefined' && params.cssMode) {
            let prevSnapIndex;
            snapGrid.forEach((snap, snapIndex) => {
                if (normalizedTranslate >= snap) {
                // prevSnap = snap;
                prevSnapIndex = snapIndex;
            }
        });
            if (typeof prevSnapIndex !== 'undefined') {
                prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
        }
        let prevIndex = 0;
        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
            requestAnimationFrame(() => {
                swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        });
            return true;
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (threshold === void 0) {
            threshold = 0.5;
        }
        const swiper = this;
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.clickedIndex;
        let realIndex;
        const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    nextTick(() => {
                        swiper.slideTo(slideToIndex);
                });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                nextTick(() => {
                    swiper.slideTo(slideToIndex);
            });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };

    function loopCreate(slideRealIndex) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index) => {
            el.setAttribute('data-swiper-slide-index', index);
    });
        swiper.loopFix({
            slideRealIndex,
            direction: params.centeredSlides ? undefined : 'next'
        });
    }

    function loopFix(_temp) {
        let {
            slideRealIndex,
            slideTo = true,
            direction,
            setTranslate,
            activeSlideIndex,
            byController,
            byMousewheel
        } = _temp === void 0 ? {} : _temp;
        const swiper = this;
        if (!swiper.params.loop) return;
        swiper.emit('beforeLoopFix');
        const {
            slides,
            allowSlidePrev,
            allowSlideNext,
            slidesEl,
            params
        } = swiper;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        if (swiper.virtual && params.virtual.enabled) {
            if (slideTo) {
                if (!params.centeredSlides && swiper.snapIndex === 0) {
                    swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
                } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
                    swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
                } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
                    swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                }
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
            return;
        }
        const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
        let loopedSlides = params.loopedSlides || slidesPerView;
        if (loopedSlides % params.slidesPerGroup !== 0) {
            loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
        }
        swiper.loopedSlides = loopedSlides;
        const prependSlidesIndexes = [];
        const appendSlidesIndexes = [];
        let activeIndex = swiper.activeIndex;
        if (typeof activeSlideIndex === 'undefined') {
            activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
        } else {
            activeIndex = activeSlideIndex;
        }
        const isNext = direction === 'next' || !direction;
        const isPrev = direction === 'prev' || !direction;
        let slidesPrepended = 0;
        let slidesAppended = 0;
        // prepend last slides before start
        if (activeSlideIndex < loopedSlides) {
            slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
            for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                prependSlidesIndexes.push(slides.length - index - 1);
            }
        } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
            slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
            for (let i = 0; i < slidesAppended; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlidesIndexes.push(index);
            }
        }
        if (isPrev) {
            prependSlidesIndexes.forEach(index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
            slidesEl.prepend(swiper.slides[index]);
            swiper.slides[index].swiperLoopMoveDOM = false;
        });
        }
        if (isNext) {
            appendSlidesIndexes.forEach(index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
            slidesEl.append(swiper.slides[index]);
            swiper.slides[index].swiperLoopMoveDOM = false;
        });
        }
        swiper.recalcSlides();
        if (params.slidesPerView === 'auto') {
            swiper.updateSlides();
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        if (slideTo) {
            if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === 'undefined') {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else {
                    if (setTranslate) {
                        swiper.slideToLoop(slideRealIndex, 0, false, true);
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) {
                if (typeof slideRealIndex === 'undefined') {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                }
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.controller && swiper.controller.control && !byController) {
            const loopParams = {
                slideRealIndex,
                direction,
                setTranslate,
                activeSlideIndex,
                byController: true
            };
            if (Array.isArray(swiper.controller.control)) {
                swiper.controller.control.forEach(c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                    slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
            });
            } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
                swiper.controller.control.loopFix({
                        ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
            }
        }
        swiper.emit('loopFix');
    }

    function loopDestroy() {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        swiper.recalcSlides();
        const newSlidesOrder = [];
        swiper.slides.forEach(slideEl => {
            const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
        swiper.slides.forEach(slideEl => {
            slideEl.removeAttribute('data-swiper-slide-index');
    });
        newSlidesOrder.forEach(slideEl => {
            slidesEl.append(slideEl);
    });
        swiper.recalcSlides();
        swiper.slideTo(swiper.realIndex, 0);
    }

    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };

    function setGrabCursor(moving) {
        const swiper = this;
        if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        el.style.cursor = 'move';
        el.style.cursor = moving ? 'grabbing' : 'grab';
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
        });
        }
    }

    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
        });
        }
    }

    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };

    // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
    function closestElement(selector, base) {
        if (base === void 0) {
            base = this;
        }
        function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) {
                return null;
            }
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }
    function onTouchStart(event) {
        const swiper = this;
        const document = getDocument();
        const window = getWindow();
        const data = swiper.touchEventsData;
        data.evCache.push(event);
        const {
            params,
            touches,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        if (!swiper.animating && params.cssMode && params.loop) {
            swiper.loopFix();
        }
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        let targetEl = e.target;
        if (params.touchEventsTarget === 'wrapper') {
            if (!swiper.wrapperEl.contains(targetEl)) return;
        }
        if ('which' in e && e.which === 3) return;
        if ('button' in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;

        // change target el for shadow root component
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
        // eslint-disable-next-line
        const eventPath = event.composedPath ? event.composedPath() : event.path;
        if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
            targetEl = eventPath[0];
        }
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e.target && e.target.shadowRoot);

        // use closestElement for shadow root element to get the actual closest for nested shadow root element
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!targetEl.closest(params.swipeHandler)) return;
        }
        touches.currentX = e.pageX;
        touches.currentY = e.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY;

        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

        const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === 'prevent') {
                event.preventDefault();
            } else {
                return;
            }
        }
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;
        let preventDefault = true;
        if (targetEl.matches(data.focusableElements)) {
            preventDefault = false;
            if (targetEl.nodeName === 'SELECT') {
                data.isTouched = false;
            }
        }
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
            document.activeElement.blur();
        }
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
            e.preventDefault();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
            swiper.freeMode.onTouchStart();
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        const document = getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const {
            params,
            touches,
            rtlTranslate: rtl,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
        const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
        const pageX = targetTouch.pageX;
        const pageY = targetTouch.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!e.target.matches(data.focusableElements)) {
                swiper.allowClick = false;
            }
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    prevX: swiper.touches.currentX,
                    prevY: swiper.touches.currentY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }
            return;
        }
        if (params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
            }
        }
        if (document.activeElement) {
            if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) return;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
        if (typeof data.isScrolling === 'undefined') {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        if (!params.cssMode && e.cancelable) {
            e.preventDefault();
        }
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }
        let diff = swiper.isHorizontal() ? diffX : diffY;
        let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
        if (params.oneWayMovement) {
            diff = Math.abs(diff) * (rtl ? 1 : -1);
            touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
        }
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
            touchesDiff = -touchesDiff;
        }
        const prevTouchesDirection = swiper.touchesDirection;
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
        const isLoop = swiper.params.loop && !params.cssMode;
        const allowLoopFix = swiper.swipeDirection === 'next' && swiper.allowSlideNext || swiper.swipeDirection === 'prev' && swiper.allowSlidePrev;
        if (!data.isMoved) {
            if (isLoop && allowLoopFix) {
                swiper.loopFix({
                    direction: swiper.swipeDirection
                });
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        let loopFixed;
        if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
            // need another loop fix
            swiper.loopFix({
                direction: swiper.swipeDirection,
                setTranslate: true
            });
            loopFixed = true;
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if (diff > 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
                swiper.loopFix({
                    direction: 'prev',
                    setTranslate: true,
                    activeSlideIndex: 0
                });
            }
            if (data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            }
        } else if (diff < 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
                swiper.loopFix({
                    direction: 'next',
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
            }
            if (data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
        }
        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }

        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
            data.currentTranslate = data.startTranslate;
        }

        // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger || params.cssMode) return;

        // Update active index in free mode
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
            swiper.freeMode.onTouchMove();
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate);
        // Update translate
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        const swiper = this;
        const data = swiper.touchEventsData;
        const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
        if (pointerIndex >= 0) {
            data.evCache.splice(pointerIndex, 1);
        }
        if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(event.type)) {
            const proceed = ['pointercancel', 'contextmenu'].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
            if (!proceed) {
                return;
            }
        }
        const {
            params,
            touches,
            rtlTranslate: rtl,
            slidesGrid,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }

        // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;

        // Tap, doubleTap, Click
        if (swiper.allowClick) {
            const pathTree = e.path || e.composedPath && e.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
            swiper.emit('tap click', e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
            }
        }
        data.lastClickTime = now();
        nextTick(() => {
            if (!swiper.destroyed) swiper.allowClick = true;
    });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.cssMode) {
            return;
        }
        if (params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        }

        // Find current slide
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i + increment] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) {
            if (swiper.isBeginning) {
                rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            } else if (swiper.isEnd) {
                rewindFirstIndex = 0;
            }
        }
        // Find current slide size
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) {
                    swiper.slideTo(stopIndex + increment);
                } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                    swiper.slideTo(rewindLastIndex);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                    swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                }
                if (swiper.swipeDirection === 'prev') {
                    swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                }
            } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        const swiper = this;
        const {
            params,
            el
        } = swiper;
        if (el && el.offsetWidth === 0) return;

        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }

        // Save locks
        const {
            allowSlideNext,
            allowSlidePrev,
            snapGrid
        } = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

        // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        const isVirtualLoop = isVirtual && params.loop;
        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            if (swiper.params.loop && !isVirtual) {
                swiper.slideToLoop(swiper.realIndex, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            clearTimeout(swiper.autoplay.resizeTimeout);
            swiper.autoplay.resizeTimeout = setTimeout(() => {
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                swiper.autoplay.resume();
            }
        }, 500);
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        const swiper = this;
        if (!swiper.enabled) return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        const swiper = this;
        const {
            wrapperEl,
            rtlTranslate,
            enabled
        } = swiper;
        if (!enabled) return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) {
            swiper.translate = -wrapperEl.scrollLeft;
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        }
        // eslint-disable-next-line
        if (swiper.translate === 0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }
        swiper.emit('setTranslate', swiper.translate, false);
    }

    function onLoad(e) {
        const swiper = this;
        processLazyPreloader(swiper, e.target);
        if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
            return;
        }
        swiper.update();
    }

    let dummyEventAttached = false;
    function dummyEventListener() {}
    const events = (swiper, method) => {
        const document = getDocument();
        const {
            params,
            el,
            wrapperEl,
            device
        } = swiper;
        const capture = !!params.nested;
        const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        const swiperMethod = method;

        // Touch Events
        el[domMethod]('pointerdown', swiper.onTouchStart, {
            passive: false
        });
        document[domMethod]('pointermove', swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]('pointerup', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointercancel', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerout', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerleave', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('contextmenu', swiper.onTouchEnd, {
            passive: true
        });

        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
            el[domMethod]('click', swiper.onClick, true);
        }
        if (params.cssMode) {
            wrapperEl[domMethod]('scroll', swiper.onScroll);
        }

        // Resize handler
        if (params.updateOnWindowResize) {
            swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
            swiper[swiperMethod]('observerUpdate', onResize, true);
        }

        // Images loader
        el[domMethod]('load', swiper.onLoad, {
            capture: true
        });
    };
    function attachEvents() {
        const swiper = this;
        const document = getDocument();
        const {
            params
        } = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }
        swiper.onClick = onClick.bind(swiper);
        swiper.onLoad = onLoad.bind(swiper);
        if (!dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
        }
        events(swiper, 'on');
    }
    function detachEvents() {
        const swiper = this;
        events(swiper, 'off');
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };

    const isGridEnabled = (swiper, params) => {
        return swiper.grid && params.grid && params.grid.rows > 1;
    };
    function setBreakpoint() {
        const swiper = this;
        const {
            realIndex,
            initialized,
            params,
            el
        } = swiper;
        const breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

        // Get breakpoint for window width and update parameters
        const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
        const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
                el.classList.add(`${params.containerModifierClass}grid-column`);
            }
            swiper.emitContainerClasses();
        }

        // Toggle navigation, pagination, scrollbar
        ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
            if (typeof breakpointParams[prop] === 'undefined') return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) {
            swiper[prop].disable();
        }
        if (!wasModuleEnabled && isModuleEnabled) {
            swiper[prop].enable();
        }
    });
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        const wasLoop = params.loop;
        if (directionChanged && initialized) {
            swiper.changeDirection();
        }
        extend(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        const hasLoop = swiper.params.loop;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) {
            swiper.disable();
        } else if (!wasEnabled && isEnabled) {
            swiper.enable();
        }
        swiper.currentBreakpoint = breakpoint;
        swiper.emit('_beforeBreakpoint', breakpointParams);
        if (initialized) {
            if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) {
                swiper.loopDestroy();
            }
        }
        swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
        if (base === void 0) {
            base = 'window';
        }
        if (!breakpoints || base === 'container' && !containerEl) return undefined;
        let breakpoint = false;
        const window = getWindow();
        const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints).map(point => {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
        points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
        for (let i = 0; i < points.length; i += 1) {
            const {
                point,
                value
            } = points[i];
            if (base === 'window') {
                if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                    breakpoint = point;
                }
            } else if (value <= containerEl.clientWidth) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }

    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };

    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach(item => {
            if (typeof item === 'object') {
            Object.keys(item).forEach(classNames => {
                if (item[classNames]) {
                resultClasses.push(prefix + classNames);
            }
        });
        } else if (typeof item === 'string') {
            resultClasses.push(prefix + item);
        }
    });
        return resultClasses;
    }
    function addClasses() {
        const swiper = this;
        const {
            classNames,
            params,
            rtl,
            el,
            device
        } = swiper;
        // prettier-ignore
        const suffixes = prepareClasses(['initialized', params.direction, {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        }, {
            'autoheight': params.autoHeight
        }, {
            'rtl': rtl
        }, {
            'grid': params.grid && params.grid.rows > 1
        }, {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        }, {
            'android': device.android
        }, {
            'ios': device.ios
        }, {
            'css-mode': params.cssMode
        }, {
            'centered': params.cssMode && params.centeredSlides
        }, {
            'watch-progress': params.watchSlidesProgress
        }], params.containerModifierClass);
        classNames.push(...suffixes);
        el.classList.add(...classNames);
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        const swiper = this;
        const {
            el,
            classNames
        } = swiper;
        el.classList.remove(...classNames);
        swiper.emitContainerClasses();
    }

    var classes = {
        addClasses,
        removeClasses
    };

    function checkOverflow() {
        const swiper = this;
        const {
            isLocked: wasLocked,
            params
        } = swiper;
        const {
            slidesOffsetBefore
        } = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }
        if (params.allowSlideNext === true) {
            swiper.allowSlideNext = !swiper.isLocked;
        }
        if (params.allowSlidePrev === true) {
            swiper.allowSlidePrev = !swiper.isLocked;
        }
        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
        }
        if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        }
    }
    var checkOverflow$1 = {
        checkOverflow
    };

    var defaults = {
        init: true,
        direction: 'horizontal',
        oneWayMovement: false,
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        enabled: true,
        focusableElements: 'input, select, option, textarea, button, video, label',
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        // Breakpoints
        breakpoints: undefined,
        breakpointsBase: 'window',
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: true,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 5,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // loop
        loop: false,
        loopedSlides: null,
        loopPreventsSliding: true,
        // rewind
        rewind: false,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        // NS
        containerModifierClass: 'swiper-',
        // NEW
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) {
                obj = {};
            }
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) {
                extend(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) {
                params[moduleParamName] = {
                    enabled: true
                };
            }
            if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
                params[moduleParamName].auto = true;
            }
            if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
                params[moduleParamName].auto = true;
            }
            if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                extend(allModulesParams, obj);
                return;
            }
            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                params[moduleParamName].enabled = true;
            }
            if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
            };
            extend(allModulesParams, obj);
        };
    }

    /* eslint no-param-reassign: "off" */
    const prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes
    };
    const extendedDefaults = {};
    class Swiper {
        constructor() {
            let el;
            let params;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
                params = args[0];
            } else {
                [el, params] = args;
            }
            if (!params) params = {};
            params = extend({}, params);
            if (el && !params.el) params.el = el;
            const document = getDocument();
            if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
                const swipers = [];
                document.querySelectorAll(params.el).forEach(containerEl => {
                    const newParams = extend({}, params, {
                        el: containerEl
                    });
                swipers.push(new Swiper(newParams));
            });
                // eslint-disable-next-line no-constructor-return
                return swipers;
            }

            // Swiper Instance
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [...swiper.__modules__];
            if (params.modules && Array.isArray(params.modules)) {
                swiper.modules.push(...params.modules);
            }
            const allModulesParams = {};
            swiper.modules.forEach(mod => {
                mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
        });
        });

            // Extend defaults with modules params
            const swiperParams = extend({}, defaults, allModulesParams);

            // Extend defaults with passed params
            swiper.params = extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend({}, swiper.params);
            swiper.passedParams = extend({}, params);

            // add event listeners
            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
            });
            }
            if (swiper.params && swiper.params.onAny) {
                swiper.onAny(swiper.params.onAny);
            }

            // Extend Swiper
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                // Classes
                classNames: [],
                // Slides
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                cssOverflowAdjustment() {
                    // Returns 0 unless `translate` is > 2**23
                    // Should be subtracted from css values to prevent overflow
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    focusableElements: swiper.params.focusableElements,
                    // Last click time
                    lastClickTime: 0,
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    startMoving: undefined,
                    evCache: []
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit('_swiper');

            // Init
            if (swiper.params.init) {
                swiper.init();
            }

            // Return app instance
            // eslint-disable-next-line no-constructor-return
            return swiper;
        }
        getSlideIndex(slideEl) {
            const {
                slidesEl,
                params
            } = this;
            const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            const firstSlideIndex = elementIndex(slides[0]);
            return elementIndex(slideEl) - firstSlideIndex;
        }
        getSlideIndexByData(index) {
            return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
        }
        recalcSlides() {
            const swiper = this;
            const {
                slidesEl,
                params
            } = swiper;
            swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        }
        enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }
            swiper.emit('enable');
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) {
                swiper.unsetGrabCursor();
            }
            swiper.emit('disable');
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(' ').filter(className => {
                return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
            swiper.emit('_containerClasses', cls.join(' '));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed) return '';
            return slideEl.className.split(' ').filter(className => {
                return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.forEach(slideEl => {
                const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
            swiper.emit('_slideClasses', updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) {
                view = 'current';
            }
            if (exact === void 0) {
                exact = false;
            }
            const swiper = this;
            const {
                params,
                slides,
                slidesGrid,
                slidesSizesGrid,
                size: swiperSize,
                activeIndex
            } = swiper;
            let spv = 1;
            if (typeof params.slidesPerView === 'number') return params.slidesPerView;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                let breakLoop;
                for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
                for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
            } else {
                // eslint-disable-next-line
                if (view === 'current') {
                    for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                } else {
                    // previous
                    for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                }
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const {
                snapGrid,
                params
            } = swiper;
            // Breakpoints
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
                if (imageEl.complete) {
                processLazyPreloader(swiper, imageEl);
            }
        });
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                setTranslate();
                if (params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                    const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                    translated = swiper.slideTo(slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit('update');
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }
            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
            }
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
            swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.forEach(slideEl => {
                if (newDirection === 'vertical') {
                slideEl.style.width = '';
            } else {
                slideEl.style.height = '';
            }
        });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
            swiper.rtl = direction === 'rtl';
            swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
            if (swiper.rtl) {
                swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = 'rtl';
            } else {
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = 'ltr';
            }
            swiper.update();
        }
        mount(element) {
            const swiper = this;
            if (swiper.mounted) return true;

            // Find el
            let el = element || swiper.params.el;
            if (typeof el === 'string') {
                el = document.querySelector(el);
            }
            if (!el) {
                return false;
            }
            el.swiper = swiper;
            if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === 'SWIPER-CONTAINER') {
                swiper.isElement = true;
            }
            const getWrapperSelector = () => {
                return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
            };
            const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = el.shadowRoot.querySelector(getWrapperSelector());
                    // Children needs to return slot items
                    return res;
                }
                return elementChildren(el, getWrapperSelector())[0];
            };
            // Find Wrapper
            let wrapperEl = getWrapper();
            if (!wrapperEl && swiper.params.createElements) {
                wrapperEl = createElement('div', swiper.params.wrapperClass);
                el.append(wrapperEl);
                elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
                    wrapperEl.append(slideEl);
            });
            }
            Object.assign(swiper, {
                el,
                wrapperEl,
                slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                hostEl: swiper.isElement ? el.parentNode.host : el,
                mounted: true,
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
                wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
            });
            return true;
        }
        init(el) {
            var swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit('beforeInit');

            // Set breakpoint
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }

            // Add Classes
            swiper.addClasses();

            // Update size
            swiper.updateSize();

            // Update slides
            swiper.updateSlides();
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }

            // Set Grab Cursor
            if (swiper.params.grabCursor && swiper.enabled) {
                swiper.setGrabCursor();
            }

            // Slide To Initial Slide
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            }

            // Create loop
            if (swiper.params.loop) {
                swiper.loopCreate();
            }

            // Attach events
            swiper.attachEvents();
            const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
            if (swiper.isElement) {
                lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
            }
            lazyElements.forEach(imageEl => {
                if (imageEl.complete) {
                processLazyPreloader(swiper, imageEl);
            } else {
                imageEl.addEventListener('load', e => {
                    processLazyPreloader(swiper, e.target);
            });
            }
        });
            preload(swiper);

            // Init Flag
            swiper.initialized = true;
            preload(swiper);

            // Emit
            swiper.emit('init');
            swiper.emit('afterInit');
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }
            if (cleanStyles === void 0) {
                cleanStyles = true;
            }
            const swiper = this;
            const {
                params,
                el,
                wrapperEl,
                slides
            } = swiper;
            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }
            swiper.emit('beforeDestroy');

            // Init Flag
            swiper.initialized = false;

            // Detach events
            swiper.detachEvents();

            // Destroy loop
            if (params.loop) {
                swiper.loopDestroy();
            }

            // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                el.removeAttribute('style');
                wrapperEl.removeAttribute('style');
                if (slides && slides.length) {
                    slides.forEach(slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                    slideEl.removeAttribute('style');
                    slideEl.removeAttribute('data-swiper-slide-index');
                });
                }
            }
            swiper.emit('destroy');

            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(eventName => {
                swiper.off(eventName);
        });
            if (deleteInstance !== false) {
                swiper.el.swiper = null;
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            extend(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
            if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
                modules.push(mod);
            }
        }
        static use(module) {
            if (Array.isArray(module)) {
                module.forEach(m => Swiper.installModule(m));
                return Swiper;
            }
            Swiper.installModule(module);
            return Swiper;
        }
    }
    Object.keys(prototypes).forEach(prototypeGroup => {
        Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
});
});
    Swiper.use([Resize, Observer]);

    function Virtual(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        let cssModeTimeout;
        const document = getDocument();
        swiper.virtual = {
            cache: {},
            from: undefined,
            to: undefined,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const tempDOM = document.createElement('div');
        function renderSlide(slide, index) {
            const params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            // eslint-disable-next-line
            let slideEl;
            if (params.renderSlide) {
                slideEl = params.renderSlide.call(swiper, slide, index);
                if (typeof slideEl === 'string') {
                    tempDOM.innerHTML = slideEl;
                    slideEl = tempDOM.children[0];
                }
            } else if (swiper.isElement) {
                slideEl = createElement('swiper-slide');
            } else {
                slideEl = createElement('div', swiper.params.slideClass);
            }
            slideEl.setAttribute('data-swiper-slide-index', index);
            if (!params.renderSlide) {
                slideEl.innerHTML = slide;
            }
            if (params.cache) {
                swiper.virtual.cache[index] = slideEl;
            }
            return slideEl;
        }
        function update(force) {
            const {
                slidesPerView,
                slidesPerGroup,
                centeredSlides,
                loop: isLoop
            } = swiper.params;
            const {
                addSlidesBefore,
                addSlidesAfter
            } = swiper.params.virtual;
            const {
                from: previousFrom,
                to: previousTo,
                slides,
                slidesGrid: previousSlidesGrid,
                offset: previousOffset
            } = swiper.virtual;
            if (!swiper.params.cssMode) {
                swiper.updateActiveIndex();
            }
            const activeIndex = swiper.activeIndex || 0;
            let offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            let slidesAfter;
            let slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
            }
            let from = activeIndex - slidesBefore;
            let to = activeIndex + slidesAfter;
            if (!isLoop) {
                from = Math.max(from, 0);
                to = Math.min(to, slides.length - 1);
            }
            let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            if (isLoop && activeIndex >= slidesBefore) {
                from -= slidesBefore;
                if (!centeredSlides) offset += swiper.slidesGrid[0];
            } else if (isLoop && activeIndex < slidesBefore) {
                from = -slidesBefore;
                if (centeredSlides) offset += swiper.slidesGrid[0];
            }
            Object.assign(swiper.virtual, {
                from,
                to,
                offset,
                slidesGrid: swiper.slidesGrid,
                slidesBefore,
                slidesAfter
            });
            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                emit('virtualUpdate');
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.forEach(slideEl => {
                        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
                });
                }
                swiper.updateProgress();
                emit('virtualUpdate');
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset,
                    from,
                    to,
                    slides: function getSlides() {
                        const slidesToRender = [];
                        for (let i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()
                });
                if (swiper.params.virtual.renderExternalUpdate) {
                    onRendered();
                } else {
                    emit('virtualUpdate');
                }
                return;
            }
            const prependIndexes = [];
            const appendIndexes = [];
            const getSlideIndex = index => {
                let slideIndex = index;
                if (index < 0) {
                    slideIndex = slides.length + index;
                } else if (slideIndex >= slides.length) {
                    // eslint-disable-next-line
                    slideIndex = slideIndex - slides.length;
                }
                return slideIndex;
            };
            if (force) {
                swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
                    slideEl.remove();
            });
            } else {
                for (let i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        const slideIndex = getSlideIndex(i);
                        swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
                            slideEl.remove();
                    });
                    }
                }
            }
            const loopFrom = isLoop ? -slides.length : 0;
            const loopTo = isLoop ? slides.length * 2 : slides.length;
            for (let i = loopFrom; i < loopTo; i += 1) {
                if (i >= from && i <= to) {
                    const slideIndex = getSlideIndex(i);
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(slideIndex);
                    } else {
                        if (i > previousTo) appendIndexes.push(slideIndex);
                        if (i < previousFrom) prependIndexes.push(slideIndex);
                    }
                }
            }
            appendIndexes.forEach(index => {
                swiper.slidesEl.append(renderSlide(slides[index], index));
        });
            if (isLoop) {
                for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
                    const index = prependIndexes[i];
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
                }
            } else {
                prependIndexes.sort((a, b) => b - a);
                prependIndexes.forEach(index => {
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
            });
            }
            elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
            onRendered();
        }
        function appendSlide(slides) {
            if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
            } else {
                swiper.virtual.slides.push(slides);
            }
            update(true);
        }
        function prependSlide(slides) {
            const activeIndex = swiper.activeIndex;
            let newActiveIndex = activeIndex + 1;
            let numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }
            if (swiper.params.virtual.cache) {
                const cache = swiper.virtual.cache;
                const newCache = {};
                Object.keys(cache).forEach(cachedIndex => {
                    const cachedEl = cache[cachedIndex];
                const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
                if (cachedElIndex) {
                    cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                }
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
            });
                swiper.virtual.cache = newCache;
            }
            update(true);
            swiper.slideTo(newActiveIndex, 0);
        }
        function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            let activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) {
                for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                        // shift cache indexes
                        Object.keys(swiper.virtual.cache).forEach(key => {
                            if (key > slidesIndexes) {
                            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                            delete swiper.virtual.cache[key];
                        }
                    });
                    }
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);
                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                    // shift cache indexes
                    Object.keys(swiper.virtual.cache).forEach(key => {
                        if (key > slidesIndexes) {
                        swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                        swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                        delete swiper.virtual.cache[key];
                    }
                });
                }
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
            update(true);
            swiper.slideTo(activeIndex, 0);
        }
        function removeAllSlides() {
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }
            update(true);
            swiper.slideTo(0, 0);
        }
        on('beforeInit', () => {
            if (!swiper.params.virtual.enabled) return;
        let domSlidesAssigned;
        if (typeof swiper.passedParams.virtual.slides === 'undefined') {
            const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
            if (slides && slides.length) {
                swiper.virtual.slides = [...slides];
                domSlidesAssigned = true;
                slides.forEach((slideEl, slideIndex) => {
                    slideEl.setAttribute('data-swiper-slide-index', slideIndex);
                swiper.virtual.cache[slideIndex] = slideEl;
                slideEl.remove();
            });
            }
        }
        if (!domSlidesAssigned) {
            swiper.virtual.slides = swiper.params.virtual.slides;
        }
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        update();
    });
        on('setTranslate', () => {
            if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(() => {
                update();
        }, 100);
        } else {
            update();
        }
    });
        on('init update resize', () => {
            if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) {
            setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
    });
        Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update
        });
    }

    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const document = getDocument();
        const window = getWindow();
        swiper.keyboard = {
            enabled: false
        };
        extendParams({
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        });
        function handle(event) {
            if (!swiper.enabled) return;
            const {
                rtlTranslate: rtl
            } = swiper;
            let e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            const kc = e.keyCode || e.charCode;
            const pageUpDown = swiper.params.keyboard.pageUpDown;
            const isPageUp = pageUpDown && kc === 33;
            const isPageDown = pageUpDown && kc === 34;
            const isArrowLeft = kc === 37;
            const isArrowRight = kc === 39;
            const isArrowUp = kc === 38;
            const isArrowDown = kc === 40;
            // Directions locks
            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
            }
            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                let inView = false;
                // Check that swiper should be inside of visible area of window
                if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
                    return undefined;
                }
                const el = swiper.el;
                const swiperWidth = el.clientWidth;
                const swiperHeight = el.clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const swiperOffset = elementOffset(el);
                if (rtl) swiperOffset.left -= el.scrollLeft;
                const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                        inView = true;
                    }
                }
                if (!inView) return undefined;
            }
            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }
            emit('keyPress', kc);
            return undefined;
        }
        function enable() {
            if (swiper.keyboard.enabled) return;
            document.addEventListener('keydown', handle);
            swiper.keyboard.enabled = true;
        }
        function disable() {
            if (!swiper.keyboard.enabled) return;
            document.removeEventListener('keydown', handle);
            swiper.keyboard.enabled = false;
        }
        on('init', () => {
            if (swiper.params.keyboard.enabled) {
            enable();
        }
    });
        on('destroy', () => {
            if (swiper.keyboard.enabled) {
            disable();
        }
    });
        Object.assign(swiper.keyboard, {
            enable,
            disable
        });
    }

    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const window = getWindow();
        extendParams({
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: 'swiper-no-mousewheel'
            }
        });
        swiper.mousewheel = {
            enabled: false
        };
        let timeout;
        let lastScrollTime = now();
        let lastEventBeforeSnap;
        const recentWheelEvents = [];
        function normalize(e) {
            // Reasonable defaults
            const PIXEL_STEP = 10;
            const LINE_HEIGHT = 40;
            const PAGE_HEIGHT = 800;
            let sX = 0;
            let sY = 0; // spinX, spinY
            let pX = 0;
            let pY = 0; // pixelX, pixelY

            // Legacy
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }
            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }
            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }
            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        function handleMouseEnter() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = true;
        }
        function handleMouseLeave() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = false;
        }
        function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
                // Prevent if delta of wheel scroll delta is below configured threshold
                return false;
            }
            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
                // Prevent if time between scrolls is below configured threshold
                return false;
            }

            // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).
            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
                // Return false as a default
                return true;
            }
            // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.
            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    emit('scroll', newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                emit('scroll', newEvent.raw);
            }
            // If you got here is because an animation has been triggered so store the current time
            lastScrollTime = new window.Date().getTime();
            // Return false as a default
            return false;
        }
        function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel;
            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }
            return false;
        }
        function handle(event) {
            let e = event;
            let disableParentSwiper = true;
            if (!swiper.enabled) return;

            // Ignore event if the target or its parents have the swiper-no-mousewheel class
            if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
            const params = swiper.params.mousewheel;
            if (swiper.params.cssMode) {
                e.preventDefault();
            }
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            }
            const targetElContainsTarget = targetEl && targetEl.contains(e.target);
            if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            let delta = 0;
            const rtlFactor = swiper.rtlTranslate ? -1 : 1;
            const data = normalize(e);
            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }
            if (delta === 0) return true;
            if (params.invert) delta = -delta;

            // Get the scroll positions
            let positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

            // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.
            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                // Register the new event in a variable which stores the relevant data
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                };

                // Keep the most recent events
                if (recentWheelEvents.length >= 2) {
                    recentWheelEvents.shift(); // only store the last N events
                }

                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent);

                // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.
                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                        animateSlider(newEvent);
                    }
                } else {
                    animateSlider(newEvent);
                }

                // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.
                if (releaseScroll(newEvent)) {
                    return true;
                }
            } else {
                // Freemode or scrollContainer:

                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                if (!ignoreWheelEvents) {
                    lastEventBeforeSnap = undefined;
                    let position = swiper.getTranslate() + delta * params.sensitivity;
                    const wasBeginning = swiper.isBeginning;
                    const wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                        swiper.updateSlidesClasses();
                    }
                    if (swiper.params.loop) {
                        swiper.loopFix({
                            direction: newEvent.direction < 0 ? 'next' : 'prev',
                            byMousewheel: true
                        });
                    }
                    if (swiper.params.freeMode.sticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(timeout);
                        timeout = undefined;
                        if (recentWheelEvents.length >= 15) {
                            recentWheelEvents.shift(); // only store the last N events
                        }

                        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                        const firstEvent = recentWheelEvents[0];
                        recentWheelEvents.push(newEvent);
                        if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                            recentWheelEvents.splice(0);
                        } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            timeout = nextTick(() => {
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                        }

                        if (!timeout) {
                            // if we get here, then we haven't detected the end of a momentum scroll, so
                            // we'll consider a scroll "complete" when there haven't been any wheel events
                            // for 500ms.
                            timeout = nextTick(() => {
                                const snapToThreshold = 0.5;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 500);
                        }
                    }

                    // Emit event
                    if (!ignoreWheelEvents) emit('scroll', e);

                    // Stop autoplay
                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                    // Return page scroll on edge positions
                    if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
                        return true;
                    }
                }
            }
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            return false;
        }
        function events(method) {
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            }
            targetEl[method]('mouseenter', handleMouseEnter);
            targetEl[method]('mouseleave', handleMouseLeave);
            targetEl[method]('wheel', handle);
        }
        function enable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener('wheel', handle);
                return true;
            }
            if (swiper.mousewheel.enabled) return false;
            events('addEventListener');
            swiper.mousewheel.enabled = true;
            return true;
        }
        function disable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, handle);
                return true;
            }
            if (!swiper.mousewheel.enabled) return false;
            events('removeEventListener');
            swiper.mousewheel.enabled = false;
            return true;
        }
        on('init', () => {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            disable();
        }
        if (swiper.params.mousewheel.enabled) enable();
    });
        on('destroy', () => {
            if (swiper.params.cssMode) {
            enable();
        }
        if (swiper.mousewheel.enabled) disable();
    });
        Object.assign(swiper.mousewheel, {
            enable,
            disable
        });
    }

    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        if (swiper.params.createElements) {
            Object.keys(checkProps).forEach(key => {
                if (!params[key] && params.auto === true) {
                let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                if (!element) {
                    element = createElement('div', checkProps[key]);
                    element.className = checkProps[key];
                    swiper.el.append(element);
                }
                params[key] = element;
                originalParams[key] = element;
            }
        });
        }
        return params;
    }

    function Navigation(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
                navigationDisabledClass: 'swiper-navigation-disabled'
            }
        });
        swiper.navigation = {
            nextEl: null,
            prevEl: null
        };
        const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
        function getEl(el) {
            let res;
            if (el && typeof el === 'string' && swiper.isElement) {
                res = swiper.el.querySelector(el);
                if (res) return res;
            }
            if (el) {
                if (typeof el === 'string') res = [...document.querySelectorAll(el)];
                if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
                    res = swiper.el.querySelector(el);
                }
            }
            if (el && !res) return el;
            // if (Array.isArray(res) && res.length === 1) res = res[0];
            return res;
        }
        function toggleEl(el, disabled) {
            const params = swiper.params.navigation;
            el = makeElementsArray(el);
            el.forEach(subEl => {
                if (subEl) {
                    subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
                    if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) {
                        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                    }
                }
            });
        }
        function update() {
            // Update Navigation Buttons
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (swiper.params.loop) {
                toggleEl(prevEl, false);
                toggleEl(nextEl, false);
                return;
            }
            toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
        }
        function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slidePrev();
            emit('navigationPrev');
        }
        function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slideNext();
            emit('navigationNext');
        }
        function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev'
            });
            if (!(params.nextEl || params.prevEl)) return;
            let nextEl = getEl(params.nextEl);
            let prevEl = getEl(params.prevEl);
            Object.assign(swiper.navigation, {
                nextEl,
                prevEl
            });
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const initButton = (el, dir) => {
                if (el) {
                    el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
                }
                if (!swiper.enabled && el) {
                    el.classList.add(...params.lockClass.split(' '));
                }
            };
            nextEl.forEach(el => initButton(el, 'next'));
            prevEl.forEach(el => initButton(el, 'prev'));
        }
        function destroy() {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const destroyButton = (el, dir) => {
                el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
                el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
            };
            nextEl.forEach(el => destroyButton(el, 'next'));
            prevEl.forEach(el => destroyButton(el, 'prev'));
        }
        on('init', () => {
            if (swiper.params.navigation.enabled === false) {
            // eslint-disable-next-line
            disable();
        } else {
            init();
            update();
        }
    });
        on('toEdge fromEdge lock unlock', () => {
            update();
    });
        on('destroy', () => {
            destroy();
    });
        on('enable disable', () => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (swiper.enabled) {
            update();
            return;
        }
        [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
    });
        on('click', (_s, e) => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if (nextEl.length) {
                isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            } else if (prevEl.length) {
                isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            }
            if (isHidden === true) {
                emit('navigationShow');
            } else {
                emit('navigationHide');
            }
            [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
        }
    });
        const enable = () => {
            swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
            init();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy
        });
    }

    function classesToSelector(classes) {
        if (classes === void 0) {
            classes = '';
        }
        return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
            .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const pfx = 'swiper-pagination';
        extendParams({
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: number => number,
            formatFractionTotal: number => number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
    }
    });
        swiper.pagination = {
            el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;
        const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
        }
        function setSideBullets(bulletEl, position) {
            const {
                bulletActiveClass
            } = swiper.params.pagination;
            if (!bulletEl) return;
            bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
        }
        function onBulletClick(e) {
            const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
            if (!bulletEl) {
                return;
            }
            e.preventDefault();
            const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
            if (swiper.params.loop) {
                if (swiper.realIndex === index) return;
                const realIndex = swiper.realIndex;
                const newSlideIndex = swiper.getSlideIndexByData(index);
                const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                const loopFix = dir => {
                    const indexBeforeLoopFix = swiper.activeIndex;
                    swiper.loopFix({
                        direction: dir,
                        activeSlideIndex: newSlideIndex,
                        slideTo: false
                    });
                    const indexAfterFix = swiper.activeIndex;
                    if (indexBeforeLoopFix === indexAfterFix) {
                        swiper.slideToLoop(realIndex, 0, false, true);
                    }
                };
                if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
                    loopFix(newSlideIndex > currentSlideIndex ? 'next' : 'prev');
                } else if (swiper.params.centeredSlides) {
                    const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (newSlideIndex < Math.floor(slidesPerView / 2)) {
                        loopFix('prev');
                    }
                }
                swiper.slideToLoop(index);
            } else {
                swiper.slideTo(index);
            }
        }
        function update() {
            // Render || Update Pagination bullets/items
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            // Current/Total
            let current;
            let previousIndex;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                previousIndex = swiper.previousRealIndex || 0;
                current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
                previousIndex = swiper.previousSnapIndex;
            } else {
                previousIndex = swiper.previousIndex || 0;
                current = swiper.activeIndex || 0;
            }
            // Types
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
                    el.forEach(subEl => {
                        subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                });
                    if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                        dynamicBulletIndex += current - (previousIndex || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (dynamicBulletIndex < 0) {
                            dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.forEach(bulletEl => {
                    const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
                bulletEl.classList.remove(...classesToRemove);
            });
                if (el.length > 1) {
                    bullets.forEach(bullet => {
                        const bulletIndex = elementIndex(bullet);
                    if (bulletIndex === current) {
                        bullet.classList.add(...params.bulletActiveClass.split(' '));
                    } else if (swiper.isElement) {
                        bullet.setAttribute('part', 'bullet');
                    }
                    if (params.dynamicBullets) {
                        if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                            bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                        }
                        if (bulletIndex === firstIndex) {
                            setSideBullets(bullet, 'prev');
                        }
                        if (bulletIndex === lastIndex) {
                            setSideBullets(bullet, 'next');
                        }
                    }
                });
                } else {
                    const bullet = bullets[current];
                    if (bullet) {
                        bullet.classList.add(...params.bulletActiveClass.split(' '));
                    }
                    if (swiper.isElement) {
                        bullets.forEach((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
                    });
                    }
                    if (params.dynamicBullets) {
                        const firstDisplayedBullet = bullets[firstIndex];
                        const lastDisplayedBullet = bullets[lastIndex];
                        for (let i = firstIndex; i <= lastIndex; i += 1) {
                            if (bullets[i]) {
                                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                            }
                        }
                        setSideBullets(firstDisplayedBullet, 'prev');
                        setSideBullets(lastDisplayedBullet, 'next');
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? 'right' : 'left';
                    bullets.forEach(bullet => {
                        bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
                });
                }
            }
            el.forEach((subEl, subElIndex) => {
                if (params.type === 'fraction') {
                subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
                    fractionEl.textContent = params.formatFractionCurrent(current + 1);
            });
                subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
                    totalEl.textContent = params.formatFractionTotal(total);
            });
            }
            if (params.type === 'progressbar') {
                let progressbarDirection;
                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }
                subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
                    progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
            });
            }
            if (params.type === 'custom' && params.renderCustom) {
                subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                if (subElIndex === 0) emit('paginationRender', subEl);
            } else {
                if (subElIndex === 0) emit('paginationRender', subEl);
                emit('paginationUpdate', subEl);
            }
            if (swiper.params.watchOverflow && swiper.enabled) {
                subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
            }
        });
        }
        function render() {
            // Render Container
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            let paginationHTML = '';
            if (params.type === 'bullets') {
                let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
                    numberOfBullets = slidesLength;
                }
                for (let i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        // prettier-ignore
                        paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
                    }
                }
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
                }
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                }
            }
            swiper.pagination.bullets = [];
            el.forEach(subEl => {
                if (params.type !== 'custom') {
                subEl.innerHTML = paginationHTML || '';
            }
            if (params.type === 'bullets') {
                swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
            }
        });
            if (params.type !== 'custom') {
                emit('paginationRender', el[0]);
            }
        }
        function init() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: 'swiper-pagination'
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let el;
            if (typeof params.el === 'string' && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === 'string') {
                el = [...document.querySelectorAll(params.el)];
            }
            if (!el) {
                el = params.el;
            }
            if (!el || el.length === 0) return;
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
                el = [...swiper.el.querySelectorAll(params.el)];
                // check if it belongs to another nested Swiper
                if (el.length > 1) {
                    el = el.filter(subEl => {
                        if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
                    return true;
                })[0];
                }
            }
            if (Array.isArray(el) && el.length === 1) el = el[0];
            Object.assign(swiper.pagination, {
                el
            });
            el = makeElementsArray(el);
            el.forEach(subEl => {
                if (params.type === 'bullets' && params.clickable) {
                subEl.classList.add(...(params.clickableClass || '').split(' '));
            }
            subEl.classList.add(params.modifierClass + params.type);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === 'bullets' && params.dynamicBullets) {
                subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) {
                subEl.classList.add(params.progressbarOppositeClass);
            }
            if (params.clickable) {
                subEl.addEventListener('click', onBulletClick);
            }
            if (!swiper.enabled) {
                subEl.classList.add(params.lockClass);
            }
        });
        }
        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => {
                    subEl.classList.remove(params.hiddenClass);
                subEl.classList.remove(params.modifierClass + params.type);
                subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.clickable) {
                    subEl.classList.remove(...(params.clickableClass || '').split(' '));
                    subEl.removeEventListener('click', onBulletClick);
                }
            });
            }
            if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
        }
        on('changeDirection', () => {
            if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let {
            el
        } = swiper.pagination;
        el = makeElementsArray(el);
        el.forEach(subEl => {
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
    });
        on('init', () => {
            if (swiper.params.pagination.enabled === false) {
            // eslint-disable-next-line
            disable();
        } else {
            init();
            render();
            update();
        }
    });
        on('activeIndexChange', () => {
            if (typeof swiper.snapIndex === 'undefined') {
            update();
        }
    });
        on('snapIndexChange', () => {
            update();
    });
        on('snapGridLengthChange', () => {
            render();
        update();
    });
        on('destroy', () => {
            destroy();
    });
        on('enable disable', () => {
            let {
                el
            } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
        }
    });
        on('lock unlock', () => {
            update();
    });
        on('click', (_s, e) => {
            const targetEl = e.target;
        const el = makeElementsArray(swiper.pagination.el);
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
            if (isHidden === true) {
                emit('paginationShow');
            } else {
                emit('paginationHide');
            }
            el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
        }
    });
        const enable = () => {
            swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
            }
            init();
            render();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
            }
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy
        });
    }

    function Scrollbar(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const document = getDocument();
        let isTouched = false;
        let timeout = null;
        let dragTimeout = null;
        let dragStartPos;
        let dragSize;
        let trackSize;
        let divider;
        extendParams({
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
                scrollbarDisabledClass: 'swiper-scrollbar-disabled',
                horizontalClass: `swiper-scrollbar-horizontal`,
                verticalClass: `swiper-scrollbar-vertical`
            }
        });
        swiper.scrollbar = {
            el: null,
            dragEl: null
        };
        function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
                scrollbar,
                rtlTranslate: rtl
            } = swiper;
            const {
                dragEl,
                el
            } = scrollbar;
            const params = swiper.params.scrollbar;
            const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
            let newSize = dragSize;
            let newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
                dragEl.style.width = `${newSize}px`;
            } else {
                dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
                dragEl.style.height = `${newSize}px`;
            }
            if (params.hide) {
                clearTimeout(timeout);
                el.style.opacity = 1;
                timeout = setTimeout(() => {
                    el.style.opacity = 0;
                el.style.transitionDuration = '400ms';
            }, 1000);
            }
        }
        function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
        }
        function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
                scrollbar
            } = swiper;
            const {
                dragEl,
                el
            } = scrollbar;
            dragEl.style.width = '';
            dragEl.style.height = '';
            trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }
            if (swiper.isHorizontal()) {
                dragEl.style.width = `${dragSize}px`;
            } else {
                dragEl.style.height = `${dragSize}px`;
            }
            if (divider >= 1) {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
            if (swiper.params.scrollbar.hide) {
                el.style.opacity = 0;
            }
            if (swiper.params.watchOverflow && swiper.enabled) {
                scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
            }
        }
        function getPointerPosition(e) {
            return swiper.isHorizontal() ? e.clientX : e.clientY;
        }
        function setDragPosition(e) {
            const {
                scrollbar,
                rtlTranslate: rtl
            } = swiper;
            const {
                el
            } = scrollbar;
            let positionRatio;
            positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }
            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        function onDragStart(e) {
            const params = swiper.params.scrollbar;
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el,
                dragEl
            } = scrollbar;
            isTouched = true;
            dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            wrapperEl.style.transitionDuration = '100ms';
            dragEl.style.transitionDuration = '100ms';
            setDragPosition(e);
            clearTimeout(dragTimeout);
            el.style.transitionDuration = '0ms';
            if (params.hide) {
                el.style.opacity = 1;
            }
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style['scroll-snap-type'] = 'none';
            }
            emit('scrollbarDragStart', e);
        }
        function onDragMove(e) {
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el,
                dragEl
            } = scrollbar;
            if (!isTouched) return;
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            setDragPosition(e);
            wrapperEl.style.transitionDuration = '0ms';
            el.style.transitionDuration = '0ms';
            dragEl.style.transitionDuration = '0ms';
            emit('scrollbarDragMove', e);
        }
        function onDragEnd(e) {
            const params = swiper.params.scrollbar;
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el
            } = scrollbar;
            if (!isTouched) return;
            isTouched = false;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style['scroll-snap-type'] = '';
                wrapperEl.style.transitionDuration = '';
            }
            if (params.hide) {
                clearTimeout(dragTimeout);
                dragTimeout = nextTick(() => {
                    el.style.opacity = 0;
                el.style.transitionDuration = '400ms';
            }, 1000);
            }
            emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        }
        function events(method) {
            const {
                scrollbar,
                params
            } = swiper;
            const el = scrollbar.el;
            if (!el) return;
            const target = el;
            const activeListener = params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            const passiveListener = params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!target) return;
            const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            target[eventMethod]('pointerdown', onDragStart, activeListener);
            document[eventMethod]('pointermove', onDragMove, activeListener);
            document[eventMethod]('pointerup', onDragEnd, passiveListener);
        }
        function enableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events('on');
        }
        function disableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events('off');
        }
        function init() {
            const {
                scrollbar,
                el: swiperEl
            } = swiper;
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                el: 'swiper-scrollbar'
            });
            const params = swiper.params.scrollbar;
            if (!params.el) return;
            let el;
            if (typeof params.el === 'string' && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === 'string') {
                el = document.querySelectorAll(params.el);
            } else if (!el) {
                el = params.el;
            }
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
                el = swiperEl.querySelector(params.el);
            }
            if (el.length > 0) el = el[0];
            el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            let dragEl;
            if (el) {
                dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
                if (!dragEl) {
                    dragEl = createElement('div', swiper.params.scrollbar.dragClass);
                    el.append(dragEl);
                }
            }
            Object.assign(scrollbar, {
                el,
                dragEl
            });
            if (params.draggable) {
                enableDraggable();
            }
            if (el) {
                el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
            }
        }
        function destroy() {
            const params = swiper.params.scrollbar;
            const el = swiper.scrollbar.el;
            if (el) {
                el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            }
            disableDraggable();
        }
        on('init', () => {
            if (swiper.params.scrollbar.enabled === false) {
            // eslint-disable-next-line
            disable();
        } else {
            init();
            updateSize();
            setTranslate();
        }
    });
        on('update resize observerUpdate lock unlock', () => {
            updateSize();
    });
        on('setTranslate', () => {
            setTranslate();
    });
        on('setTransition', (_s, duration) => {
            setTransition(duration);
    });
        on('enable disable', () => {
            const {
                el
            } = swiper.scrollbar;
        if (el) {
            el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
        }
    });
        on('destroy', () => {
            destroy();
    });
        const enable = () => {
            swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
            if (swiper.scrollbar.el) {
                swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
            }
            init();
            updateSize();
            setTranslate();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
            if (swiper.scrollbar.el) {
                swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
            }
            destroy();
        };
        Object.assign(swiper.scrollbar, {
            enable,
            disable,
            updateSize,
            setTranslate,
            init,
            destroy
        });
    }

    function Parallax(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            parallax: {
                enabled: false
            }
        });
        const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
        const setTransform = (el, progress) => {
            const {
                rtl
            } = swiper;
            const rtlFactor = rtl ? -1 : 1;
            const p = el.getAttribute('data-swiper-parallax') || '0';
            let x = el.getAttribute('data-swiper-parallax-x');
            let y = el.getAttribute('data-swiper-parallax-y');
            const scale = el.getAttribute('data-swiper-parallax-scale');
            const opacity = el.getAttribute('data-swiper-parallax-opacity');
            const rotate = el.getAttribute('data-swiper-parallax-rotate');
            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }
            if (x.indexOf('%') >= 0) {
                x = `${parseInt(x, 10) * progress * rtlFactor}%`;
            } else {
                x = `${x * progress * rtlFactor}px`;
            }
            if (y.indexOf('%') >= 0) {
                y = `${parseInt(y, 10) * progress}%`;
            } else {
                y = `${y * progress}px`;
            }
            if (typeof opacity !== 'undefined' && opacity !== null) {
                const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                el.style.opacity = currentOpacity;
            }
            let transform = `translate3d(${x}, ${y}, 0px)`;
            if (typeof scale !== 'undefined' && scale !== null) {
                const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                transform += ` scale(${currentScale})`;
            }
            if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
                const currentRotate = rotate * progress * -1;
                transform += ` rotate(${currentRotate}deg)`;
            }
            el.style.transform = transform;
        };
        const setTranslate = () => {
            const {
                el,
                slides,
                progress,
                snapGrid,
                isElement
            } = swiper;
            const elements = elementChildren(el, elementsSelector);
            if (swiper.isElement) {
                elements.push(...elementChildren(swiper.hostEl, elementsSelector));
            }
            elements.forEach(subEl => {
                setTransform(subEl, progress);
        });
            slides.forEach((slideEl, slideIndex) => {
                let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            }
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
                setTransform(subEl, slideProgress);
        });
        });
        };
        const setTransition = function (duration) {
            if (duration === void 0) {
                duration = swiper.params.speed;
            }
            const {
                el,
                hostEl
            } = swiper;
            const elements = [...el.querySelectorAll(elementsSelector)];
            if (swiper.isElement) {
                elements.push(...hostEl.querySelectorAll(elementsSelector));
            }
            elements.forEach(parallaxEl => {
                let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
        };
        on('beforeInit', () => {
            if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
        on('init', () => {
            if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
        on('setTranslate', () => {
            if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
        on('setTransition', (_swiper, duration) => {
            if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
    }

    function Zoom(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const window = getWindow();
        extendParams({
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        });
        swiper.zoom = {
            enabled: false
        };
        let currentScale = 1;
        let isScaling = false;
        let fakeGestureTouched;
        let fakeGestureMoved;
        const evCache = [];
        const gesture = {
            originX: 0,
            originY: 0,
            slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            imageEl: undefined,
            imageWrapEl: undefined,
            maxRatio: 3
        };
        const image = {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
        };
        const velocity = {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
        };
        let scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
            get() {
                return scale;
            },
            set(value) {
                if (scale !== value) {
                    const imageEl = gesture.imageEl;
                    const slideEl = gesture.slideEl;
                    emit('zoomChange', value, imageEl, slideEl);
                }
                scale = value;
            }
        });
        function getDistanceBetweenTouches() {
            if (evCache.length < 2) return 1;
            const x1 = evCache[0].pageX;
            const y1 = evCache[0].pageY;
            const x2 = evCache[1].pageX;
            const y2 = evCache[1].pageY;
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance;
        }
        function getScaleOrigin() {
            if (evCache.length < 2) return {
                x: null,
                y: null
            };
            const box = gesture.imageEl.getBoundingClientRect();
            return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
        }
        function getSlideSelector() {
            return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        }
        function eventWithinSlide(e) {
            const slideSelector = getSlideSelector();
            if (e.target.matches(slideSelector)) return true;
            if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
            return false;
        }
        function eventWithinZoomContainer(e) {
            const selector = `.${swiper.params.zoom.containerClass}`;
            if (e.target.matches(selector)) return true;
            if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
            return false;
        }

        // Events
        function onGestureStart(e) {
            if (e.pointerType === 'mouse') {
                evCache.splice(0, evCache.length);
            }
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            evCache.push(e);
            if (evCache.length < 2) {
                return;
            }
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches();
            if (!gesture.slideEl) {
                gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
                if (!gesture.imageWrapEl) {
                    gesture.imageEl = undefined;
                    return;
                }
                gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            }
            if (gesture.imageEl) {
                const [originX, originY] = getScaleOrigin();
                gesture.originX = originX;
                gesture.originY = originY;
                gesture.imageEl.style.transitionDuration = '0ms';
            }
            isScaling = true;
        }
        function onGestureChange(e) {
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
            if (pointerIndex >= 0) evCache[pointerIndex] = e;
            if (evCache.length < 2) {
                return;
            }
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches();
            if (!gesture.imageEl) {
                return;
            }
            zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
            }
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }
        function onGestureEnd(e) {
            if (!eventWithinSlide(e)) return;
            if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
            if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
            if (!fakeGestureTouched || !fakeGestureMoved) {
                return;
            }
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            if (!gesture.imageEl) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
            currentScale = zoom.scale;
            isScaling = false;
            if (zoom.scale > 1 && gesture.slideEl) {
                gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            } else if (zoom.scale <= 1 && gesture.slideEl) {
                gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            }
            if (zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
                gesture.slideEl = undefined;
            }
        }
        function onTouchStart(e) {
            const device = swiper.device;
            if (!gesture.imageEl) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            const event = evCache.length > 0 ? evCache[0] : e;
            image.touchesStart.x = event.pageX;
            image.touchesStart.y = event.pageY;
        }
        function onTouchMove(e) {
            if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
            const zoom = swiper.zoom;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !gesture.slideEl) return;
            if (!image.isMoved) {
                image.width = gesture.imageEl.offsetWidth;
                image.height = gesture.imageEl.offsetHeight;
                image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
                image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
                gesture.slideWidth = gesture.slideEl.offsetWidth;
                gesture.slideHeight = gesture.slideEl.offsetHeight;
                gesture.imageWrapEl.style.transitionDuration = '0ms';
            }
            // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
            image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
            const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
            if (touchesDiff > 5) {
                swiper.allowClick = false;
            }
            if (!image.isMoved && !isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    return;
                }
                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    return;
                }
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            e.stopPropagation();
            image.isMoved = true;
            const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
            const {
                originX,
                originY
            } = gesture;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
            if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
            }
            if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
            }
            if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
            }
            if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
            }

            // Velocity
            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }
        function onTouchEnd() {
            const zoom = swiper.zoom;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            let momentumDurationX = 300;
            let momentumDurationY = 300;
            const momentumDistanceX = velocity.x * momentumDurationX;
            const newPositionX = image.currentX + momentumDistanceX;
            const momentumDistanceY = velocity.y * momentumDurationY;
            const newPositionY = image.currentY + momentumDistanceY;

            // Fix duration
            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY;
            // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }
        function onTransitionEnd() {
            const zoom = swiper.zoom;
            if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
                if (gesture.imageEl) {
                    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
                }
                if (gesture.imageWrapEl) {
                    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
                }
                gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
                zoom.scale = 1;
                currentScale = 1;
                gesture.slideEl = undefined;
                gesture.imageEl = undefined;
                gesture.imageWrapEl = undefined;
                gesture.originX = 0;
                gesture.originY = 0;
            }
        }
        function zoomIn(e) {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (e && e.target) {
                    gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                }
                if (!gesture.slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                    } else {
                        gesture.slideEl = swiper.slides[swiper.activeIndex];
                    }
                }
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.touchAction = 'none';
            }
            gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            let touchX;
            let touchY;
            let offsetX;
            let offsetY;
            let diffX;
            let diffY;
            let translateX;
            let translateY;
            let imageWidth;
            let imageHeight;
            let scaledWidth;
            let scaledHeight;
            let translateMinX;
            let translateMinY;
            let translateMaxX;
            let translateMaxY;
            let slideWidth;
            let slideHeight;
            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.pageX;
                touchY = e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            const forceZoomRatio = typeof e === 'number' ? e : null;
            if (currentScale === 1 && forceZoomRatio) {
                touchX = undefined;
                touchY = undefined;
            }
            zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            if (e && !(currentScale === 1 && forceZoomRatio)) {
                slideWidth = gesture.slideEl.offsetWidth;
                slideHeight = gesture.slideEl.offsetHeight;
                offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
                offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.imageEl.offsetWidth;
                imageHeight = gesture.imageEl.offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }
                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            if (forceZoomRatio && zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
            }
            gesture.imageWrapEl.style.transitionDuration = '300ms';
            gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
            gesture.imageEl.style.transitionDuration = '300ms';
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }
        function zoomOut() {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                } else {
                    gesture.slideEl = swiper.slides[swiper.activeIndex];
                }
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.style.touchAction = '';
            }
            zoom.scale = 1;
            currentScale = 1;
            gesture.imageWrapEl.style.transitionDuration = '300ms';
            gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
            gesture.imageEl.style.transitionDuration = '300ms';
            gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
            gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            gesture.slideEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }

        // Toggle Zoom
        function zoomToggle(e) {
            const zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoomOut();
            } else {
                // Zoom In
                zoomIn(e);
            }
        }
        function getListeners() {
            const passiveListener = swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            const activeListenerWithCapture = swiper.params.passiveListeners ? {
                passive: false,
                capture: true
            } : true;
            return {
                passiveListener,
                activeListenerWithCapture
            };
        }

        // Attach/Detach Events
        function enable() {
            const zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            const {
                passiveListener,
                activeListenerWithCapture
            } = getListeners();

            // Scale image
            swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
            swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
            ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
                swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });

            // Move image
            swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
        }
        function disable() {
            const zoom = swiper.zoom;
            if (!zoom.enabled) return;
            zoom.enabled = false;
            const {
                passiveListener,
                activeListenerWithCapture
            } = getListeners();

            // Scale image
            swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
            swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
            ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
                swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });

            // Move image
            swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
        }
        on('init', () => {
            if (swiper.params.zoom.enabled) {
            enable();
        }
    });
        on('destroy', () => {
            disable();
    });
        on('touchStart', (_s, e) => {
            if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
        on('touchEnd', (_s, e) => {
            if (!swiper.zoom.enabled) return;
        onTouchEnd();
    });
        on('doubleTap', (_s, e) => {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            zoomToggle(e);
        }
    });
        on('transitionEnd', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            onTransitionEnd();
        }
    });
        on('slideChange', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            onTransitionEnd();
        }
    });
        Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle
        });
    }

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'
            }
        });

        swiper.controller = {
            control: undefined
        };
        function LinearSpline(x, y) {
            const binarySearch = function search() {
                let maxIndex;
                let minIndex;
                let guess;
                return (array, val) => {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            let i1;
            let i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) return 0;

                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;

                // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
            return this;
        }
        function getInterpolateFunction(c) {
            swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
        function setTranslate(_t, byController) {
            const controlled = swiper.controller.control;
            let multiplier;
            let controlledTranslate;
            const Swiper = swiper.constructor;
            function setControlledTranslate(c) {
                if (c.destroyed) return;

                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    getInterpolateFunction(c);
                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
                        multiplier = 1;
                    }
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }
                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (let i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        }
        function setTransition(duration, byController) {
            const Swiper = swiper.constructor;
            const controlled = swiper.controller.control;
            let i;
            function setControlledTransition(c) {
                if (c.destroyed) return;
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) {
                        nextTick(() => {
                            c.updateAutoHeight();
                    });
                    }
                    elementTransitionEnd(c.wrapperEl, () => {
                        if (!controlled) return;
                    c.transitionEnd();
                });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        }
        function removeSpline() {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        }
        on('beforeInit', () => {
            if (typeof window !== 'undefined' && (
                // eslint-disable-line
                typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
            const controlElement = document.querySelector(swiper.params.controller.control);
            if (controlElement && controlElement.swiper) {
                swiper.controller.control = controlElement.swiper;
            } else if (controlElement) {
                const onControllerSwiper = e => {
                    swiper.controller.control = e.detail[0];
                    swiper.update();
                    controlElement.removeEventListener('init', onControllerSwiper);
                };
                controlElement.addEventListener('init', onControllerSwiper);
            }
            return;
        }
        swiper.controller.control = swiper.params.controller.control;
    });
        on('update', () => {
            removeSpline();
    });
        on('resize', () => {
            removeSpline();
    });
        on('observerUpdate', () => {
            removeSpline();
    });
        on('setTranslate', (_s, translate, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTranslate(translate, byController);
    });
        on('setTransition', (_s, duration, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTransition(duration, byController);
    });
        Object.assign(swiper.controller, {
            setTranslate,
            setTransition
        });
    }

    function A11y(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group',
                id: null
            }
        });
        swiper.a11y = {
            clicked: false
        };
        let liveRegion = null;
        function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0) return;
            notification.innerHTML = '';
            notification.innerHTML = message;
        }
        const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
        function getRandomNumber(size) {
            if (size === void 0) {
                size = 16;
            }
            const randomChar = () => Math.round(16 * Math.random()).toString(16);
            return 'x'.repeat(size).replace(/x/g, randomChar);
        }
        function makeElFocusable(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('tabIndex', '0');
        });
        }
        function makeElNotFocusable(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('tabIndex', '-1');
        });
        }
        function addElRole(el, role) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('role', role);
        });
        }
        function addElRoleDescription(el, description) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-roledescription', description);
        });
        }
        function addElControls(el, controls) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-controls', controls);
        });
        }
        function addElLabel(el, label) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-label', label);
        });
        }
        function addElId(el, id) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('id', id);
        });
        }
        function addElLive(el, live) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-live', live);
        });
        }
        function disableEl(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-disabled', true);
        });
        }
        function enableEl(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-disabled', false);
        });
        }
        function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return;
            const params = swiper.params.a11y;
            const targetEl = e.target;
            if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
                if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
            }
            if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    notify(params.lastSlideMessage);
                } else {
                    notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    notify(params.firstSlideMessage);
                } else {
                    notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
                targetEl.click();
            }
        }
        function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (prevEl) {
                if (swiper.isBeginning) {
                    disableEl(prevEl);
                    makeElNotFocusable(prevEl);
                } else {
                    enableEl(prevEl);
                    makeElFocusable(prevEl);
                }
            }
            if (nextEl) {
                if (swiper.isEnd) {
                    disableEl(nextEl);
                    makeElNotFocusable(nextEl);
                } else {
                    enableEl(nextEl);
                    makeElFocusable(nextEl);
                }
            }
        }
        function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
        }
        function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable;
        }
        function updatePagination() {
            const params = swiper.params.a11y;
            if (!hasPagination()) return;
            swiper.pagination.bullets.forEach(bulletEl => {
                if (swiper.params.pagination.clickable) {
                makeElFocusable(bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole(bulletEl, 'button');
                    addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                }
            }
            if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
                bulletEl.setAttribute('aria-current', 'true');
            } else {
                bulletEl.removeAttribute('aria-current');
            }
        });
        }
        const initNavEl = (el, wrapperId, message) => {
            makeElFocusable(el);
            if (el.tagName !== 'BUTTON') {
                addElRole(el, 'button');
                el.addEventListener('keydown', onEnterOrSpaceKey);
            }
            addElLabel(el, message);
            addElControls(el, wrapperId);
        };
        const handlePointerDown = () => {
            swiper.a11y.clicked = true;
        };
        const handlePointerUp = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                if (!swiper.destroyed) {
                    swiper.a11y.clicked = false;
                }
            });
        });
        };
        const handleFocus = e => {
            if (swiper.a11y.clicked) return;
            const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!slideEl || !swiper.slides.includes(slideEl)) return;
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
            if (isActive || isVisible) return;
            if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
            if (swiper.isHorizontal()) {
                swiper.el.scrollLeft = 0;
            } else {
                swiper.el.scrollTop = 0;
            }
            swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        };
        const initSlides = () => {
            const params = swiper.params.a11y;
            if (params.itemRoleDescriptionMessage) {
                addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
            }
            if (params.slideRole) {
                addElRole(swiper.slides, params.slideRole);
            }
            const slidesLength = swiper.slides.length;
            if (params.slideLabelMessage) {
                swiper.slides.forEach((slideEl, index) => {
                    const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
                const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                addElLabel(slideEl, ariaLabelMessage);
            });
            }
        };
        const init = () => {
            const params = swiper.params.a11y;
            swiper.el.append(liveRegion);

            // Container
            const containerEl = swiper.el;
            if (params.containerRoleDescriptionMessage) {
                addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
            }
            if (params.containerMessage) {
                addElLabel(containerEl, params.containerMessage);
            }

            // Wrapper
            const wrapperEl = swiper.wrapperEl;
            const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
            addElId(wrapperEl, wrapperId);
            addElLive(wrapperEl, live);

            // Slide
            initSlides();

            // Navigation
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
            }
            if (prevEl) {
                prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
            }

            // Pagination
            if (hasClickablePagination()) {
                const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
                paginationEl.forEach(el => {
                    el.addEventListener('keydown', onEnterOrSpaceKey);
            });
            }

            // Tab focus
            swiper.el.addEventListener('focus', handleFocus, true);
            swiper.el.addEventListener('pointerdown', handlePointerDown, true);
            swiper.el.addEventListener('pointerup', handlePointerUp, true);
        };
        function destroy() {
            if (liveRegion) liveRegion.remove();
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
            }
            if (prevEl) {
                prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
            }

            // Pagination
            if (hasClickablePagination()) {
                const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
                paginationEl.forEach(el => {
                    el.removeEventListener('keydown', onEnterOrSpaceKey);
            });
            }

            // Tab focus
            swiper.el.removeEventListener('focus', handleFocus, true);
            swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
            swiper.el.removeEventListener('pointerup', handlePointerUp, true);
        }
        on('beforeInit', () => {
            liveRegion = createElement('span', swiper.params.a11y.notificationClass);
        liveRegion.setAttribute('aria-live', 'assertive');
        liveRegion.setAttribute('aria-atomic', 'true');
    });
        on('afterInit', () => {
            if (!swiper.params.a11y.enabled) return;
        init();
    });
        on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
            if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
        on('fromEdge toEdge afterInit lock unlock', () => {
            if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
        on('paginationUpdate', () => {
            if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
        on('destroy', () => {
            if (!swiper.params.a11y.enabled) return;
        destroy();
    });
    }

    function History(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            history: {
                enabled: false,
                root: '',
                replaceState: false,
                key: 'slides',
                keepQuery: false
            }
        });
        let initialized = false;
        let paths = {};
        const slugify = text => {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        };
        const getPathValues = urlOverride => {
            const window = getWindow();
            let location;
            if (urlOverride) {
                location = new URL(urlOverride);
            } else {
                location = window.location;
            }
            const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
            const total = pathArray.length;
            const key = pathArray[total - 2];
            const value = pathArray[total - 1];
            return {
                key,
                value
            };
        };
        const setHistory = (key, index) => {
            const window = getWindow();
            if (!initialized || !swiper.params.history.enabled) return;
            let location;
            if (swiper.params.url) {
                location = new URL(swiper.params.url);
            } else {
                location = window.location;
            }
            const slide = swiper.slides[index];
            let value = slugify(slide.getAttribute('data-history'));
            if (swiper.params.history.root.length > 0) {
                let root = swiper.params.history.root;
                if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                value = `${root}/${key ? `${key}/` : ''}${value}`;
            } else if (!location.pathname.includes(key)) {
                value = `${key ? `${key}/` : ''}${value}`;
            }
            if (swiper.params.history.keepQuery) {
                value += location.search;
            }
            const currentState = window.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                window.history.replaceState({
                    value
                }, null, value);
            } else {
                window.history.pushState({
                    value
                }, null, value);
            }
        };
        const scrollToSlide = (speed, value, runCallbacks) => {
            if (value) {
                for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                    const slide = swiper.slides[i];
                    const slideHistory = slugify(slide.getAttribute('data-history'));
                    if (slideHistory === value) {
                        const index = swiper.getSlideIndex(slide);
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        };
        const setHistoryPopState = () => {
            paths = getPathValues(swiper.params.url);
            scrollToSlide(swiper.params.speed, paths.value, false);
        };
        const init = () => {
            const window = getWindow();
            if (!swiper.params.history) return;
            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            initialized = true;
            paths = getPathValues(swiper.params.url);
            if (!paths.key && !paths.value) {
                if (!swiper.params.history.replaceState) {
                    window.addEventListener('popstate', setHistoryPopState);
                }
                return;
            }
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', setHistoryPopState);
            }
        };
        const destroy = () => {
            const window = getWindow();
            if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', setHistoryPopState);
            }
        };
        on('init', () => {
            if (swiper.params.history.enabled) {
            init();
        }
    });
        on('destroy', () => {
            if (swiper.params.history.enabled) {
            destroy();
        }
    });
        on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
            }
        });
        on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
            setHistory(swiper.params.history.key, swiper.activeIndex);
        }
    });
    }

    function HashNavigation(_ref) {
        let {
            swiper,
            extendParams,
            emit,
            on
        } = _ref;
        let initialized = false;
        const document = getDocument();
        const window = getWindow();
        extendParams({
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
                getSlideIndex(_s, hash) {
                    if (swiper.virtual && swiper.params.virtual.enabled) {
                        const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
                        if (!slideWithHash) return 0;
                        const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
                        return index;
                    }
                    return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
                }
            }
        });
        const onHashChange = () => {
            emit('hashChange');
            const newHash = document.location.hash.replace('#', '');
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
            if (newHash !== activeSlideHash) {
                const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
                if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
                swiper.slideTo(newIndex);
            }
        };
        const setHash = () => {
            if (!initialized || !swiper.params.hashNavigation.enabled) return;
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, `#${activeSlideHash}` || '');
                emit('hashSet');
            } else {
                document.location.hash = activeSlideHash || '';
                emit('hashSet');
            }
        };
        const init = () => {
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            initialized = true;
            const hash = document.location.hash.replace('#', '');
            if (hash) {
                const speed = 0;
                const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
                swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
            }
            if (swiper.params.hashNavigation.watchState) {
                window.addEventListener('hashchange', onHashChange);
            }
        };
        const destroy = () => {
            if (swiper.params.hashNavigation.watchState) {
                window.removeEventListener('hashchange', onHashChange);
            }
        };
        on('init', () => {
            if (swiper.params.hashNavigation.enabled) {
            init();
        }
    });
        on('destroy', () => {
            if (swiper.params.hashNavigation.enabled) {
            destroy();
        }
    });
        on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
                setHash();
            }
        });
        on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
            setHash();
        }
    });
    }

    /* eslint no-underscore-dangle: "off" */
    /* eslint no-use-before-define: "off" */
    function Autoplay(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit,
            params
        } = _ref;
        swiper.autoplay = {
            running: false,
            paused: false,
            timeLeft: 0
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        let timeout;
        let raf;
        let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
        let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
        let autoplayTimeLeft;
        let autoplayStartTime = new Date().getTime;
        let wasPaused;
        let isTouched;
        let pausedByTouch;
        let touchStartTimeout;
        let slideChanged;
        let pausedByInteraction;
        function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
            if (e.target !== swiper.wrapperEl) return;
            swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
            resume();
        }
        const calcTimeLeft = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.autoplay.paused) {
                wasPaused = true;
            } else if (wasPaused) {
                autoplayDelayCurrent = autoplayTimeLeft;
                wasPaused = false;
            }
            const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
            swiper.autoplay.timeLeft = timeLeft;
            emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
            raf = requestAnimationFrame(() => {
                calcTimeLeft();
        });
        };
        const getSlideDelay = () => {
            let activeSlideEl;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
            } else {
                activeSlideEl = swiper.slides[swiper.activeIndex];
            }
            if (!activeSlideEl) return undefined;
            const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
            return currentSlideDelay;
        };
        const run = delayForce => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            cancelAnimationFrame(raf);
            calcTimeLeft();
            let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
            autoplayDelayTotal = swiper.params.autoplay.delay;
            autoplayDelayCurrent = swiper.params.autoplay.delay;
            const currentSlideDelay = getSlideDelay();
            if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
                delay = currentSlideDelay;
                autoplayDelayTotal = currentSlideDelay;
                autoplayDelayCurrent = currentSlideDelay;
            }
            autoplayTimeLeft = delay;
            const speed = swiper.params.speed;
            const proceed = () => {
                if (!swiper || swiper.destroyed) return;
                if (swiper.params.autoplay.reverseDirection) {
                    if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                        swiper.slidePrev(speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                        emit('autoplay');
                    }
                } else {
                    if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit('autoplay');
                    }
                }
                if (swiper.params.cssMode) {
                    autoplayStartTime = new Date().getTime();
                    requestAnimationFrame(() => {
                        run();
                });
                }
            };
            if (delay > 0) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    proceed();
            }, delay);
            } else {
                requestAnimationFrame(() => {
                    proceed();
            });
            }

            // eslint-disable-next-line
            return delay;
        };
        const start = () => {
            swiper.autoplay.running = true;
            run();
            emit('autoplayStart');
        };
        const stop = () => {
            swiper.autoplay.running = false;
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
            emit('autoplayStop');
        };
        const pause = (internal, reset) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            clearTimeout(timeout);
            if (!internal) {
                pausedByInteraction = true;
            }
            const proceed = () => {
                emit('autoplayPause');
                if (swiper.params.autoplay.waitForTransition) {
                    swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
                } else {
                    resume();
                }
            };
            swiper.autoplay.paused = true;
            if (reset) {
                if (slideChanged) {
                    autoplayTimeLeft = swiper.params.autoplay.delay;
                }
                slideChanged = false;
                proceed();
                return;
            }
            const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
            autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
            if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
            proceed();
        };
        const resume = () => {
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
            autoplayStartTime = new Date().getTime();
            if (pausedByInteraction) {
                pausedByInteraction = false;
                run(autoplayTimeLeft);
            } else {
                run();
            }
            swiper.autoplay.paused = false;
            emit('autoplayResume');
        };
        const onVisibilityChange = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            const document = getDocument();
            if (document.visibilityState === 'hidden') {
                pausedByInteraction = true;
                pause(true);
            }
            if (document.visibilityState === 'visible') {
                resume();
            }
        };
        const onPointerEnter = e => {
            if (e.pointerType !== 'mouse') return;
            pausedByInteraction = true;
            if (swiper.animating || swiper.autoplay.paused) return;
            pause(true);
        };
        const onPointerLeave = e => {
            if (e.pointerType !== 'mouse') return;
            if (swiper.autoplay.paused) {
                resume();
            }
        };
        const attachMouseEvents = () => {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.el.addEventListener('pointerenter', onPointerEnter);
                swiper.el.addEventListener('pointerleave', onPointerLeave);
            }
        };
        const detachMouseEvents = () => {
            swiper.el.removeEventListener('pointerenter', onPointerEnter);
            swiper.el.removeEventListener('pointerleave', onPointerLeave);
        };
        const attachDocumentEvents = () => {
            const document = getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
        };
        const detachDocumentEvents = () => {
            const document = getDocument();
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
        on('init', () => {
            if (swiper.params.autoplay.enabled) {
            attachMouseEvents();
            attachDocumentEvents();
            autoplayStartTime = new Date().getTime();
            start();
        }
    });
        on('destroy', () => {
            detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) {
            stop();
        }
    });
        on('beforeTransitionStart', (_s, speed, internal) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
            pause(true, true);
        } else {
            stop();
        }
    });
        on('sliderFirstMove', () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.params.autoplay.disableOnInteraction) {
            stop();
            return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(() => {
            pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
    }, 200);
    });
        on('touchEnd', () => {
            if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
        clearTimeout(touchStartTimeout);
        clearTimeout(timeout);
        if (swiper.params.autoplay.disableOnInteraction) {
            pausedByTouch = false;
            isTouched = false;
            return;
        }
        if (pausedByTouch && swiper.params.cssMode) resume();
        pausedByTouch = false;
        isTouched = false;
    });
        on('slideChange', () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
        slideChanged = true;
    });
        Object.assign(swiper.autoplay, {
            start,
            stop,
            pause,
            resume
        });
    }

    function Thumb(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-thumbs'
            }
        });
        let initialized = false;
        let swiperCreated = false;
        swiper.thumbs = {
            swiper: null
        };
        function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const clickedIndex = thumbsSwiper.clickedIndex;
            const clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            let slideToIndex;
            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }
            if (swiper.params.loop) {
                swiper.slideToLoop(slideToIndex);
            } else {
                swiper.slideTo(slideToIndex);
            }
        }
        function init() {
            const {
                thumbs: thumbsParams
            } = swiper.params;
            if (initialized) return false;
            initialized = true;
            const SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Object.assign(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                Object.assign(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper.update();
            } else if (isObject(thumbsParams.swiper)) {
                const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                Object.assign(thumbsSwiperParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                swiperCreated = true;
            }
            swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', onThumbClick);
            return true;
        }
        function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

            // Activate thumbs
            let thumbsToActivate = 1;
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }
            if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
            }
            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                    elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
                        slideEl.classList.add(thumbActiveClass);
                });
                }
            } else {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                    if (thumbsSwiper.slides[swiper.realIndex + i]) {
                        thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                    }
                }
            }
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                const currentThumbsIndex = thumbsSwiper.activeIndex;
                let newThumbsIndex;
                let direction;
                if (thumbsSwiper.params.loop) {
                    const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
                    newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                    direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }
                if (useOffset) {
                    newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }
        }
        on('beforeInit', () => {
            const {
                thumbs
            } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
            const document = getDocument();
            const getThumbsElementAndInit = () => {
                const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                if (thumbsElement && thumbsElement.swiper) {
                    thumbs.swiper = thumbsElement.swiper;
                    init();
                    update(true);
                } else if (thumbsElement) {
                    const onThumbsSwiper = e => {
                        thumbs.swiper = e.detail[0];
                        thumbsElement.removeEventListener('init', onThumbsSwiper);
                        init();
                        update(true);
                        thumbs.swiper.update();
                        swiper.update();
                    };
                    thumbsElement.addEventListener('init', onThumbsSwiper);
                }
                return thumbsElement;
            };
            const watchForThumbsToAppear = () => {
                if (swiper.destroyed) return;
                const thumbsElement = getThumbsElementAndInit();
                if (!thumbsElement) {
                    requestAnimationFrame(watchForThumbsToAppear);
                }
            };
            requestAnimationFrame(watchForThumbsToAppear);
        } else {
            init();
            update(true);
        }
    });
        on('slideChange update resize observerUpdate', () => {
            update();
    });
        on('setTransition', (_s, duration) => {
            const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
        on('beforeDestroy', () => {
            const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) {
            thumbsSwiper.destroy();
        }
    });
        Object.assign(swiper.thumbs, {
            init,
            update
        });
    }

    function freeMode(_ref) {
        let {
            swiper,
            extendParams,
            emit,
            once
        } = _ref;
        extendParams({
            freeMode: {
                enabled: false,
                momentum: true,
                momentumRatio: 1,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
                minimumVelocity: 0.02
            }
        });
        function onTouchStart() {
            if (swiper.params.cssMode) return;
            const translate = swiper.getTranslate();
            swiper.setTranslate(translate);
            swiper.setTransition(0);
            swiper.touchEventsData.velocities.length = 0;
            swiper.freeMode.onTouchEnd({
                currentPos: swiper.rtl ? swiper.translate : -swiper.translate
            });
        }
        function onTouchMove() {
            if (swiper.params.cssMode) return;
            const {
                touchEventsData: data,
                touches
            } = swiper;
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
            });
        }
        function onTouchEnd(_ref2) {
            let {
                currentPos
            } = _ref2;
            if (swiper.params.cssMode) return;
            const {
                params,
                wrapperEl,
                rtlTranslate: rtl,
                snapGrid,
                touchEventsData: data
            } = swiper;
            // Time diff
            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }
            if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                    const lastMoveEvent = data.velocities.pop();
                    const velocityEvent = data.velocities.pop();
                    const distance = lastMoveEvent.position - velocityEvent.position;
                    const time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                        swiper.velocity = 0;
                    }
                    // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || now() - lastMoveEvent.time > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let momentumDuration = 1000 * params.freeMode.momentumRatio;
                const momentumDistance = swiper.velocity * momentumDuration;
                let newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                let doBounce = false;
                let afterBouncePosition;
                const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                let needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeMode.sticky) {
                    let nextSlide;
                    for (let j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                if (needsLoopFix) {
                    once('transitionEnd', () => {
                        swiper.loopFix();
                });
                }
                // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                    if (params.freeMode.sticky) {
                        // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                        if (moveDistance < currentSlideSize) {
                            momentumDuration = params.speed;
                        } else if (moveDistance < 2 * currentSlideSize) {
                            momentumDuration = params.speed * 1.5;
                        } else {
                            momentumDuration = params.speed * 2.5;
                        }
                    }
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeMode.momentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    elementTransitionEnd(wrapperEl, () => {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(() => {
                        swiper.setTranslate(afterBouncePosition);
                    elementTransitionEnd(wrapperEl, () => {
                        if (!swiper || swiper.destroyed) return;
                    swiper.transitionEnd();
                });
                }, 0);
                });
                } else if (swiper.velocity) {
                    emit('_freeModeNoMomentumRelease');
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        elementTransitionEnd(wrapperEl, () => {
                            if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            } else if (params.freeMode) {
                emit('_freeModeNoMomentumRelease');
            }
            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
        }
        Object.assign(swiper, {
            freeMode: {
                onTouchStart,
                onTouchMove,
                onTouchEnd
            }
        });
    }

    function Grid(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            grid: {
                rows: 1,
                fill: 'column'
            }
        });
        let slidesNumberEvenToRows;
        let slidesPerRow;
        let numFullColumns;
        let wasMultiRow;
        const getSpaceBetween = () => {
            let spaceBetween = swiper.params.spaceBetween;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
            } else if (typeof spaceBetween === 'string') {
                spaceBetween = parseFloat(spaceBetween);
            }
            return spaceBetween;
        };
        const initSlides = slidesLength => {
            const {
                slidesPerView
            } = swiper.params;
            const {
                rows,
                fill
            } = swiper.params.grid;
            numFullColumns = Math.floor(slidesLength / rows);
            if (Math.floor(slidesLength / rows) === slidesLength / rows) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
            }
            if (slidesPerView !== 'auto' && fill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
            }
            slidesPerRow = slidesNumberEvenToRows / rows;
        };
        const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
            const {
                slidesPerGroup
            } = swiper.params;
            const spaceBetween = getSpaceBetween();
            const {
                rows,
                fill
            } = swiper.params.grid;
            // Set slides order
            let newSlideOrderIndex;
            let column;
            let row;
            if (fill === 'row' && slidesPerGroup > 1) {
                const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                row = Math.floor(slideIndexInGroup / columnsInGroup);
                column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                slide.style.order = newSlideOrderIndex;
            } else if (fill === 'column') {
                column = Math.floor(i / rows);
                row = i - column * rows;
                if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                    row += 1;
                    if (row >= rows) {
                        row = 0;
                        column += 1;
                    }
                }
            } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
            }
            slide.row = row;
            slide.column = column;
            slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
        };
        const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
            const {
                centeredSlides,
                roundLengths
            } = swiper.params;
            const spaceBetween = getSpaceBetween();
            const {
                rows
            } = swiper.params.grid;
            swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
            swiper.wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
            if (centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid.splice(0, snapGrid.length);
                snapGrid.push(...newSlidesGrid);
            }
        };
        const onInit = () => {
            wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
        };
        const onUpdate = () => {
            const {
                params,
                el
            } = swiper;
            const isMultiRow = params.grid && params.grid.rows > 1;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                numFullColumns = 1;
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (params.grid.fill === 'column') {
                    el.classList.add(`${params.containerModifierClass}grid-column`);
                }
                swiper.emitContainerClasses();
            }
            wasMultiRow = isMultiRow;
        };
        on('init', onInit);
        on('update', onUpdate);
        swiper.grid = {
            initSlides,
            updateSlide,
            updateWrapperSize
        };
    }

    function appendSlide(slides) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (params.loop) {
            swiper.loopDestroy();
        }
        const appendElement = slideEl => {
            if (typeof slideEl === 'string') {
                const tempDOM = document.createElement('div');
                tempDOM.innerHTML = slideEl;
                slidesEl.append(tempDOM.children[0]);
                tempDOM.innerHTML = '';
            } else {
                slidesEl.append(slideEl);
            }
        };
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) appendElement(slides[i]);
            }
        } else {
            appendElement(slides);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        const swiper = this;
        const {
            params,
            activeIndex,
            slidesEl
        } = swiper;
        if (params.loop) {
            swiper.loopDestroy();
        }
        let newActiveIndex = activeIndex + 1;
        const prependElement = slideEl => {
            if (typeof slideEl === 'string') {
                const tempDOM = document.createElement('div');
                tempDOM.innerHTML = slideEl;
                slidesEl.prepend(tempDOM.children[0]);
                tempDOM.innerHTML = '';
            } else {
                slidesEl.prepend(slideEl);
            }
        };
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) prependElement(slides[i]);
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            prependElement(slides);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        const swiper = this;
        const {
            params,
            activeIndex,
            slidesEl
        } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.recalcSlides();
        }
        const baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        const slidesBuffer = [];
        for (let i = baseLength - 1; i >= index; i -= 1) {
            const currentSlide = swiper.slides[i];
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) slidesEl.append(slides[i]);
            }
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            slidesEl.append(slides);
        }
        for (let i = 0; i < slidesBuffer.length; i += 1) {
            slidesEl.append(slidesBuffer[i]);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        const swiper = this;
        const {
            params,
            activeIndex
        } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
        }
        let newActiveIndex = activeIndexBuffer;
        let indexToRemove;
        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (let i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        const swiper = this;
        const slidesIndexes = [];
        for (let i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
        let {
            swiper
        } = _ref;
        Object.assign(swiper, {
            appendSlide: appendSlide.bind(swiper),
            prependSlide: prependSlide.bind(swiper),
            addSlide: addSlide.bind(swiper),
            removeSlide: removeSlide.bind(swiper),
            removeAllSlides: removeAllSlides.bind(swiper)
        });
    }

    function effectInit(params) {
        const {
            effect,
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams,
            perspective,
            recreateShadows,
            getEffectParams
        } = params;
        on('beforeInit', () => {
            if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) {
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
        on('setTranslate', () => {
            if (swiper.params.effect !== effect) return;
        setTranslate();
    });
        on('setTransition', (_s, duration) => {
            if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
        on('transitionEnd', () => {
            if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return;
            // remove shadows
            swiper.slides.forEach(slideEl => {
                slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
        });
            // create new one
            recreateShadows();
        }
    });
        let requireUpdateOnVirtual;
        on('virtualUpdate', () => {
            if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) {
            requireUpdateOnVirtual = true;
        }
        requestAnimationFrame(() => {
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
            setTranslate();
            requireUpdateOnVirtual = false;
        }
    });
    });
    }

    function effectTarget(effectParams, slideEl) {
        const transformEl = getSlideTransformEl(slideEl);
        if (transformEl !== slideEl) {
            transformEl.style.backfaceVisibility = 'hidden';
            transformEl.style['-webkit-backface-visibility'] = 'hidden';
        }
        return transformEl;
    }

    function effectVirtualTransitionEnd(_ref) {
        let {
            swiper,
            duration,
            transformElements,
            allSlides
        } = _ref;
        const {
            activeIndex
        } = swiper;
        const getSlide = el => {
            if (!el.parentElement) {
                // assume shadow root
                const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
                return slide;
            }
            return el.parentElement;
        };
        if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            let transitionEndTarget;
            if (allSlides) {
                transitionEndTarget = transformElements;
            } else {
                transitionEndTarget = transformElements.filter(transformEl => {
                    const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
                return swiper.getSlideIndex(el) === activeIndex;
            });
            }
            transitionEndTarget.forEach(el => {
                elementTransitionEnd(el, () => {
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
        }
    }

    function EffectFade(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            fadeEffect: {
                crossFade: false
            }
        });
        const setTranslate = () => {
            const {
                slides
            } = swiper;
            const params = swiper.params.fadeEffect;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = swiper.slides[i];
                const offset = slideEl.swiperSlideOffset;
                let tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.opacity = slideOpacity;
                targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
        });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: 'fade',
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: !swiper.params.cssMode
        })
    });
    }

    function EffectCube(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        });
        const createSlideShadows = (slideEl, progress, isHorizontal) => {
            let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBefore) {
                shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
                slideEl.append(shadowBefore);
            }
            if (!shadowAfter) {
                shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
                slideEl.append(shadowAfter);
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            // create new ones
            const isHorizontal = swiper.isHorizontal();
            swiper.slides.forEach(slideEl => {
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress, isHorizontal);
        });
        };
        const setTranslate = () => {
            const {
                el,
                wrapperEl,
                slides,
                width: swiperWidth,
                height: swiperHeight,
                rtlTranslate: rtl,
                size: swiperSize,
                browser
            } = swiper;
            const params = swiper.params.cubeEffect;
            const isHorizontal = swiper.isHorizontal();
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let wrapperRotate = 0;
            let cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
                    if (!cubeShadowEl) {
                        cubeShadowEl = createElement('div', 'swiper-cube-shadow');
                        swiper.wrapperEl.append(cubeShadowEl);
                    }
                    cubeShadowEl.style.height = `${swiperWidth}px`;
                } else {
                    cubeShadowEl = el.querySelector('.swiper-cube-shadow');
                    if (!cubeShadowEl) {
                        cubeShadowEl = createElement('div', 'swiper-cube-shadow');
                        el.append(cubeShadowEl);
                    }
                }
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
                }
                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }
                if (rtl) {
                    tx = -tx;
                }
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }
                slideEl.style.transform = transform;
                if (params.slideShadows) {
                    createSlideShadows(slideEl, progress, isHorizontal);
                }
            }
            wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
            wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
            if (params.shadow) {
                if (isHorizontal) {
                    cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
                } else {
                    const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    const scale1 = params.shadowScale;
                    const scale2 = params.shadowScale / multiplier;
                    const offset = params.shadowOffset;
                    cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
                }
            }
            const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
            wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
            wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
        };
        const setTransition = duration => {
            const {
                el,
                slides
            } = swiper;
            slides.forEach(slideEl => {
                slideEl.style.transitionDuration = `${duration}ms`;
            slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
                subEl.style.transitionDuration = `${duration}ms`;
        });
        });
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                const shadowEl = el.querySelector('.swiper-cube-shadow');
                if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
            }
        };
        effectInit({
            effect: 'cube',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.cubeEffect,
            perspective: () => true,
            overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true
        })
    });
    }

    function createShadow(suffix, slideEl, side) {
        const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
        const shadowContainer = getSlideTransformEl(slideEl);
        let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
        if (!shadowEl) {
            shadowEl = createElement('div', shadowClass.split(' '));
            shadowContainer.append(shadowEl);
        }
        return shadowEl;
    }

    function EffectFlip(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        });
        const createSlideShadows = (slideEl, progress) => {
            let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBefore) {
                shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
            }
            if (!shadowAfter) {
                shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            // Set shadows
            swiper.params.flipEffect;
            swiper.slides.forEach(slideEl => {
                let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min(slideEl.progress, 1), -1);
            }
            createSlideShadows(slideEl, progress);
        });
        };
        const setTranslate = () => {
            const {
                slides,
                rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.flipEffect;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min(slideEl.progress, 1), -1);
                }
                const offset = slideEl.swiperSlideOffset;
                const rotate = -180 * progress;
                let rotateY = rotate;
                let rotateX = 0;
                let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }
                slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (params.slideShadows) {
                    createSlideShadows(slideEl, progress);
                }
                const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
                shadowEl.style.transitionDuration = `${duration}ms`;
        });
        });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: 'flip',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.flipEffect,
            perspective: () => true,
            overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: !swiper.params.cssMode
        })
    });
    }

    function EffectCoverflow(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        });
        const setTranslate = () => {
            const {
                width: swiperWidth,
                height: swiperHeight,
                slides,
                slidesSizesGrid
            } = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform = swiper.translate;
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth;
            // Each slide offset from center
            for (let i = 0, length = slides.length; i < length; i += 1) {
                const slideEl = slides[i];
                const slideSize = slidesSizesGrid[i];
                const slideOffset = slideEl.swiperSlideOffset;
                const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                let translateZ = -translate * Math.abs(offsetMultiplier);
                let stretch = params.stretch;
                // Allow percentage to make a relative stretch for responsive sliders
                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                    stretch = parseFloat(params.stretch) / 100 * slideSize;
                }
                let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = slideTransform;
                slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
                    let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
                    if (!shadowBeforeEl) {
                        shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
                    }
                    if (!shadowAfterEl) {
                        shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
                    }
                    if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
                shadowEl.style.transitionDuration = `${duration}ms`;
        });
        });
        };
        effectInit({
            effect: 'coverflow',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
            watchSlidesProgress: true
        })
    });
    }

    function EffectCreative(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: false,
                progressMultiplier: 1,
                perspective: true,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const getTranslateValue = value => {
            if (typeof value === 'string') return value;
            return `${value}px`;
        };
        const setTranslate = () => {
            const {
                slides,
                wrapperEl,
                slidesSizesGrid
            } = swiper;
            const params = swiper.params.creativeEffect;
            const {
                progressMultiplier: multiplier
            } = params;
            const isCenteredSlides = swiper.params.centeredSlides;
            if (isCenteredSlides) {
                const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
                let originalProgress = progress;
                if (!isCenteredSlides) {
                    originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
                }
                const offset = slideEl.swiperSlideOffset;
                const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
                const r = [0, 0, 0];
                let custom = false;
                if (!swiper.isHorizontal()) {
                    t[1] = t[0];
                    t[0] = 0;
                }
                let data = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                if (progress < 0) {
                    data = params.next;
                    custom = true;
                } else if (progress > 0) {
                    data = params.prev;
                    custom = true;
                }
                // set translate
                t.forEach((value, index) => {
                    t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            });
                // set rotates
                r.forEach((value, index) => {
                    r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const translateString = t.join(', ');
                const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

                // Set shadows
                if (custom && data.shadow || !custom) {
                    let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                    if (!shadowEl && data.shadow) {
                        shadowEl = createShadow('creative', slideEl);
                    }
                    if (shadowEl) {
                        const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                        shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                    }
                }
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
                targetEl.style.opacity = opacityString;
                if (data.origin) {
                    targetEl.style.transformOrigin = data.origin;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
                shadowEl.style.transitionDuration = `${duration}ms`;
        });
        });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: 'creative',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => swiper.params.creativeEffect.perspective,
            overwriteParams: () => ({
            watchSlidesProgress: true,
            virtualTranslate: !swiper.params.cssMode
        })
    });
    }

    function EffectCards(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            cardsEffect: {
                slideShadows: true,
                rotate: true,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        });
        const setTranslate = () => {
            const {
                slides,
                activeIndex,
                rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.cardsEffect;
            const {
                startTranslate,
                isTouched
            } = swiper.touchEventsData;
            const currentTranslate = rtl ? -swiper.translate : swiper.translate;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideProgress, -4), 4);
                let offset = slideEl.swiperSlideOffset;
                if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                    swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
                }
                if (swiper.params.centeredSlides && swiper.params.cssMode) {
                    offset -= slides[0].swiperSlideOffset;
                }
                let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let tY = 0;
                const tZ = -100 * Math.abs(progress);
                let scale = 1;
                let rotate = -params.perSlideRotate * progress;
                let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
                const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                if (isSwipeToNext || isSwipeToPrev) {
                    const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                    rotate += -28 * progress * subProgress;
                    scale += -0.5 * subProgress;
                    tXAdd += 96 * subProgress;
                    tY = `${-25 * subProgress * Math.abs(progress)}%`;
                }
                if (progress < 0) {
                    // next
                    tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
                } else if (progress > 0) {
                    // prev
                    tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
                } else {
                    tX = `${tX}px`;
                }
                if (!swiper.isHorizontal()) {
                    const prevY = tY;
                    tY = tX;
                    tX = prevY;
                }
                const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

                /* eslint-disable */
                const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
                /* eslint-enable */

                if (params.slideShadows) {
                    // Set shadows
                    let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                    if (!shadowEl) {
                        shadowEl = createShadow('cards', slideEl);
                    }
                    if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                }
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
                shadowEl.style.transitionDuration = `${duration}ms`;
        });
        });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: 'cards',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
            watchSlidesProgress: true,
            virtualTranslate: !swiper.params.cssMode
        })
    });
    }

    /**
     * Swiper 10.3.1
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * https://swiperjs.com
     *
     * Copyright 2014-2023 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: September 28, 2023
     */


        // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);

    return Swiper;


})();
;(function(){"use strict";var a,b,c;a=jQuery,b=function(){class d{static transition(e){var f,g,h,i;for(i in f=e[0],g=this.transitions,g)if(h=g[i],null!=f.style[i])return h}}return d.transitions={webkitTransition:"webkitTransitionEnd",mozTransition:"mozTransitionEnd",oTransition:"oTransitionEnd",transition:"transitionend"},d}(),c=function(){class d{static growl(e={}){return new d(e)}constructor(e={}){this.render=this.render.bind(this),this.bind=this.bind.bind(this),this.unbind=this.unbind.bind(this),this.mouseEnter=this.mouseEnter.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.click=this.click.bind(this),this.close=this.close.bind(this),this.cycle=this.cycle.bind(this),this.waitAndDismiss=this.waitAndDismiss.bind(this),this.present=this.present.bind(this),this.dismiss=this.dismiss.bind(this),this.remove=this.remove.bind(this),this.animate=this.animate.bind(this),this.$growls=this.$growls.bind(this),this.$growl=this.$growl.bind(this),this.html=this.html.bind(this),this.content=this.content.bind(this),this.container=this.container.bind(this),this.settings=a.extend({},d.settings,e),this.initialize(this.settings.location),this.render()}initialize(e){var f;return f="growls-"+e,a("body:not(:has(#"+f+"))").append("<div id=\""+f+"\" />")}render(){var e;e=this.$growl(),this.$growls(this.settings.location).append(e),this.settings.fixed?this.present():this.cycle()}bind(e=this.$growl()){return e.on("click",this.click),this.settings.delayOnHover&&(e.on("mouseenter",this.mouseEnter),e.on("mouseleave",this.mouseLeave)),e.on("contextmenu",this.close).find(`.${this.settings.namespace}-close`).on("click",this.close)}unbind(e=this.$growl()){return e.off("click",this.click),this.settings.delayOnHover&&(e.off("mouseenter",this.mouseEnter),e.off("mouseleave",this.mouseLeave)),e.off("contextmenu",this.close).find(`.${this.settings.namespace}-close`).off("click",this.close)}mouseEnter(){var f;return f=this.$growl(),f.stop(!0,!0)}mouseLeave(){return this.waitAndDismiss()}click(e){if(null!=this.settings.url)return e.preventDefault(),e.stopPropagation(),window.open(this.settings.url)}close(e){var f;return e.preventDefault(),e.stopPropagation(),f=this.$growl(),f.stop().queue(this.dismiss).queue(this.remove)}cycle(){var e;return e=this.$growl(),e.queue(this.present).queue(this.waitAndDismiss())}waitAndDismiss(){var e;return e=this.$growl(),e.delay(this.settings.duration).queue(this.dismiss).queue(this.remove)}present(e){var f;return f=this.$growl(),this.bind(f),this.animate(f,`${this.settings.namespace}-incoming`,"out",e)}dismiss(e){var f;return f=this.$growl(),this.unbind(f),this.animate(f,`${this.settings.namespace}-outgoing`,"in",e)}remove(e){return this.$growl().remove(),"function"==typeof e?e():void 0}animate(e,f,g="in",h){var i;i=b.transition(e),e["in"===g?"removeClass":"addClass"](f),e.offset().position,e["in"===g?"addClass":"removeClass"](f),null==h||(null==i?h():e.one(i,h))}$growls(e){var f;return null==this.$_growls&&(this.$_growls=[]),null==(f=this.$_growls)[e]?f[e]=a("#growls-"+e):f[e]}$growl(){return null==this.$_growl?this.$_growl=a(this.html()):this.$_growl}html(){return this.container(this.content())}content(){return`<div class='${this.settings.namespace}-close'>${this.settings.close}</div>\n<div class='${this.settings.namespace}-title'>${this.settings.title}</div>\n<div class='${this.settings.namespace}-message'>${this.settings.message}</div>`}container(e){return`<div class='${this.settings.namespace} ${this.settings.namespace}-${this.settings.style} ${this.settings.namespace}-${this.settings.size}'>\n  ${e}\n</div>`}}return d.settings={namespace:"growl",duration:3200,close:"&#215;",location:"default",style:"default",size:"medium",delayOnHover:!0},d}(),this.Growl=c,a.growl=function(d={}){return c.growl(d)},a.growl.error=function(d={}){var e;return e={title:"Error!",style:"error"},a.growl(a.extend(e,d))},a.growl.notice=function(d={}){var e;return e={title:"Notice!",style:"notice"},a.growl(a.extend(e,d))},a.growl.warning=function(d={}){var e;return e={title:"Warning!",style:"warning"},a.growl(a.extend(e,d))}}).call(this);
;/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=!1
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=!0
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.Context.refreshAll()
for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=!0}
return this}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:'default',horizontal:!1,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=!1
this.didResize=!1
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
if(!Waypoint.windowContext){Waypoint.windowContext=!0
Waypoint.windowContext=new Context(window)}
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
var isWindow=this.element==this.element.window
if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=!1}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=!0
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=!1}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=!0
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
if(waypoint.triggerPoint===null){continue}
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment)
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto)}}())
;!function(){var s,i,c,a,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,u=!1,d=!1,l={x:0,y:0},f=!1,m=document.documentElement,h=[],w=/^Mac/.test(navigator.platform),v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},y={37:1,38:1,39:1,40:1};function b(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,n=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?t:e,s=e,p.keyboardSupport&&Y("keydown",D),top!=self)d=!0;else if(Q&&o<n&&(e.offsetHeight<=o||t.offsetHeight<=o)){var r,a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(a),c=function(){r||(r=setTimeout(function(){u||(a.style.height="0",a.style.height=m.scrollHeight+"px",r=null)},500))},setTimeout(c,10),Y("resize",c);if((i=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",e.appendChild(l)}}p.fixedBackground||u||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var g=[],S=!1,x=Date.now();function k(d,f,m){var e,t;if(e=0<(e=f)?1:-1,t=0<(t=m)?1:-1,(l.x!==e||l.y!==t)&&(l.x=e,l.y=t,g=[],x=0),1!=p.accelerationMax){var o=Date.now()-x;if(o<p.accelerationDelta){var n=(1+50/o)/2;1<n&&(n=Math.min(n,p.accelerationMax),f*=n,m*=n)}x=Date.now()}if(g.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),!S){var r=q(),h=d===r||d===document.body;null==d.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(d)&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto");var w=function(e){for(var t=Date.now(),o=0,n=0,r=0;r<g.length;r++){var a=g[r],l=t-a.start,i=l>=p.animationTime,c=i?1:l/p.animationTime;p.pulseAlgorithm&&(c=F(c));var s=a.x*c-a.lastX>>0,u=a.y*c-a.lastY>>0;o+=s,n+=u,a.lastX+=s,a.lastY+=u,i&&(g.splice(r,1),r--)}h?window.scrollBy(o,n):(o&&(d.scrollLeft+=o),n&&(d.scrollTop+=n)),f||m||(g=[]),g.length?j(w,d,1e3/p.frameRate+1):(S=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))};j(w,d,0),S=!0}}function e(e){f||b();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(s,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(s,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;w&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var r=z(t);return r?!!function(e){if(!e)return;h.length||(h=[e,e,e]);e=Math.abs(e),h.push(e),h.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=h.join(",")}catch(e){}},1e3);var t=120<e&&P(e);return!P(120)&&!P(100)&&!t}(n)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(n)&&(n*=p.stepSize/120),k(r,o,n),e.preventDefault(),void C()):!d||!W||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function D(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==v.spacebar;document.body.contains(s)||(s=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!n.test(t.type)||N(s,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&n.test(t.type))&&e.keyCode===v.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&y[e.keyCode])return!0;var r=0,a=0,l=z(s);if(!l)return!d||!W||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case v.up:a=-p.arrowScroll;break;case v.down:a=p.arrowScroll;break;case v.spacebar:a=-(e.shiftKey?1:-1)*i*.9;break;case v.pageup:a=.9*-i;break;case v.pagedown:a=.9*i;break;case v.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case v.end:var c=l.scrollHeight-l.scrollTop-i;a=0<c?c+10:0;break;case v.left:r=-p.arrowScroll;break;case v.right:r=p.arrowScroll;break;default:return!0}k(l,r,a),e.preventDefault(),C()}function t(e){s=e.target}var n,r,M=(n=0,function(e){return e.uniqueID||(e.uniqueID=n++)}),E={},T={},B={};function C(){clearTimeout(r),r=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=m.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(m)&&O(o)||X(m);if(d&&L(m)||!d&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{h=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(h[0],e)&&K(h[1],e)&&K(h[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){if(!$){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return $});function V(e){var t,o;return(e*=p.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*p.pulseNormalize}function F(e){return 1<=e?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=V(1)),V(e))}var I=window.navigator.userAgent,_=/Edge/.test(I),W=/chrome/i.test(I)&&!_,U=/safari/i.test(I)&&!_,G=/mobile/i.test(I),J=/Windows NT 6.1/i.test(I)&&/rv:11/i.test(I),Q=U&&(/Version\/8/i.test(I)||/Version\/9/i.test(I)),Z=(W||U||J)&&!G,ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch(e){}var te=!!ee&&{passive:!1},oe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}oe&&Z&&(Y(oe,e,te),Y("mousedown",t),Y("load",b)),ne.destroy=function(){i&&i.disconnect(),A(oe,e),A("mousedown",t),A("keydown",D),A("resize",c),A("load",b)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne}();
;/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b={},c={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:!1,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},d=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c},e=/^([\-\+]=)(\d+)/;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if("options"===(b=b||{}))return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.off("click.smoothscroll",b.delegateSelector).on("click.smoothscroll",b.delegateSelector,e):this.off("click.smoothscroll").on("click.smoothscroll",e),this}});var f=function(a){var b={relative:""},c="string"==typeof a&&e.exec(a);return"number"==typeof a?b.px=a:c&&(b.relative=c[1],b.px=parseFloat(c[2])||0),b},g=function(b){var c=a(b.scrollTarget);b.autoFocus&&c.length&&(c[0].focus(),c.is(document.activeElement)||(c.prop({tabIndex:-1}),c[0].focus())),b.afterScroll.call(b.link,b)};a.smoothScroll=function(c,d){if("options"===c&&"object"==typeof d)return a.extend(b,d);var e,h,i,j,k=f(c),l={},m=0,n="offset",o="scrollTop",p={},q={};k.px?e=a.extend({link:null},a.fn.smoothScroll.defaults,b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,c||{},b),e.scrollElement&&(n="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative")),d&&(k=f(d))),o="left"===e.direction?"scrollLeft":o,e.scrollElement?(h=e.scrollElement,k.px||/^(?:HTML|BODY)$/.test(h[0].nodeName)||(m=h[o]())):h=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(h,e),l=k.px?k:{relative:"",px:a(e.scrollTarget)[n]()&&a(e.scrollTarget)[n]()[e.direction]||0},p[o]=l.relative+(l.px+m+e.offset),i=e.speed,"auto"===i&&(j=Math.abs(p[o]-h[o]()),i=j/e.autoCoefficient),q={duration:i,easing:e.easing,complete:function(){g(e)}},e.step&&(q.step=e.step),h.length?h.stop().animate(p,q):g(e)},a.smoothScroll.version="2.2.0",a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c});
;/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
;/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);
;var theme_vars={"ajax_url":"https:\/\/lagi.uxper.co\/wp-admin\/admin-ajax.php","header_sticky":"","content_protected_enable":"","scroll_top_enable":"1","send_user_info":"Sending user info,please wait...","notice_cookie_enable":"","notice_cookie_confirm":"no","notice_cookie_messages":"<i class=\"fal fa-cookie-bite\"><\/i><p>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.<\/p><a id=\"lagi-button-cookie-notice-ok\" class=\"lagi-button full-filled size-xs wide\">Accept all cookies<\/a>","prevText":"Prev","nextText":"Next"}
;"use strict";(function($){"use strict";$.fn.LagiGridLayout=function(){var $el,$grid,$queryInput,resizeTimer;function calculateMasonrySize($isotopeOptions){var windowWidth=window.innerWidth,$gridWidth=$grid[0].getBoundingClientRect().width,$column=1,$gutter=0,$row_gap=0,settings=$grid.data("grid"),lgGutter=settings.gutter?settings.gutter:0,mdGutter=settings.gutterTablet?settings.gutterTablet:lgGutter,smGutter=settings.gutterMobile?settings.gutterMobile:mdGutter,lgRowGap=settings.RowGap?settings.RowGap:0,mdRowGap=settings.RowGapTablet?settings.RowGapTablet:lgRowGap,smRowGap=settings.RowGapMobile?settings.RowGapMobile:mdRowGap,lgColumns=settings.columns?settings.columns:1,mdColumns=settings.columnsTablet?settings.columnsTablet:lgColumns,smColumns=settings.columnsMobile?settings.columnsMobile:mdColumns;var tabletBreakPoint=1200;var mobileBreakPoint=720;if(typeof elementorFrontendConfig!=="undefined"){tabletBreakPoint=elementorFrontendConfig.breakpoints.lg;mobileBreakPoint=elementorFrontendConfig.breakpoints.md}
if(windowWidth>=tabletBreakPoint){$column=lgColumns;$gutter=lgGutter;$row_gap=lgRowGap}else if(windowWidth>=mobileBreakPoint){$column=mdColumns;$gutter=mdGutter;$row_gap=mdRowGap}else{$column=smColumns;$gutter=smGutter;$row_gap=smRowGap}
var totalGutterPerRow=($column-1)*$gutter;var columnWidth=($gridWidth-totalGutterPerRow)/$column;columnWidth=Math.floor(columnWidth);var columnWidth2=columnWidth;if($column>1){columnWidth2=columnWidth*2+$gutter}
if(settings.type!="metro"){$grid.children(".grid-sizer").css({width:columnWidth+"px",});$grid.children(".grid-item").each(function(index){var gridItem=$(this);if(gridItem.data("width")===2){gridItem.css({width:columnWidth2+"px",})}else{gridItem.css({width:columnWidth+"px",})}
if("masonry"!==settings.type){gridItem.css({marginBottom:$row_gap+"px",})}})}
if($(window).width()>767){$(".lagi-portfolio-mosaic .type-portfolio:nth-child(4n+2)").each(function(){var _this=$(this),cur_height=0,height=0,marginTop=0;cur_height=_this.height();height=_this.next().height();if(height>cur_height){marginTop=(height-cur_height)/2;_this.css("margin-top",marginTop+"px")}else if(cur_height>height){marginTop=(cur_height-height)/2;_this.next().css("margin-top",marginTop+"px")}});$(".lagi-portfolio-mosaic .type-portfolio:nth-child(4n+1)").each(function(){var _this=$(this),cur_height=0,height=0,marginTop=0;cur_height=_this.height();height=_this.prev().height();if(height>cur_height){marginTop=(height-cur_height)/2;_this.css("margin-top",marginTop+"px")}else if(cur_height>height){marginTop=(cur_height-height)/2;_this.prev().css("margin-top",marginTop+"px")}})}
if($isotopeOptions){$isotopeOptions.packery.gutter=$gutter;$isotopeOptions.fitRows.gutter=$gutter;$grid.isotope($isotopeOptions)}
$grid.isotope("layout")}
return this.each(function(){$el=$(this);$grid=$el.find(".lagi-grid");$queryInput=$el.find(".lagi-query-input");var settings=$grid.data("grid");var gridData;if($grid.length>0&&settings&&typeof settings.type!=="undefined"){var $isotopeOptions={itemSelector:".grid-item",percentPosition:!0,transitionDuration:0,packery:{columnWidth:".grid-sizer",},fitRows:{gutter:30,},};if("masonry"===settings.type){$isotopeOptions.layoutMode="packery"}else{$isotopeOptions.layoutMode="fitRows"}
gridData=$grid.imagesLoaded(function(){calculateMasonrySize($isotopeOptions);if("grid"===settings.type){$grid.isotope("layout")}
$grid.addClass("loaded")});$(window).on("resize",function(){calculateMasonrySize($isotopeOptions);clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){calculateMasonrySize($isotopeOptions)},500)})}
$el.on("LagiQueryEnd",function(event,el,$items,$pagination){if(el.hasClass("lagi-portfolio-wrapper")){$queryInput=el.find(".lagi-query-input")}else if(el.hasClass("lagi-blog-wrapper")){$queryInput=el.find(".lagi-query-input")}else if(el.hasClass("lagi-job-wrapper")){$queryInput=el.find(".lagi-query-input")}
$grid=el.find(".lagi-grid");if($queryInput.val()){el.find(".grid-item").removeClass("lagi-skeleton-loading");var $pagination_type=el.data("pagination");if($pagination_type=="navigation"&&el.length>0){var $grid_postision=parseInt(el.offset().top);$("html, body").animate({scrollTop:$grid_postision-100,},1000)}
if($grid.length>0&&settings&&typeof settings.type!=="undefined"){el.find(".lagi-pagination").html($pagination);var height=$grid.height();$grid.isotope().css("height",height).append($items).isotope("reloadItems",$items).imagesLoaded().always(function(){$items.addClass("animate");calculateMasonrySize($isotopeOptions);if("grid"===settings.type){$grid.isotope("layout")}})}else{$grid.append($items).imagesLoaded().always(function(){$items.addClass("animate")})}}})})}})(jQuery);("use strict");(function(x){"use strict";x.fn.LagiGridLayout=function(){var e,C,d,t;function p(i){var e=window.innerWidth,t=C[0].getBoundingClientRect().width,o=1,n=0,a=0,r=C.data("grid"),s=r.gutter?r.gutter:0,l=r.gutterTablet?r.gutterTablet:s,d=r.gutterMobile?r.gutterMobile:l,p=r.RowGap?r.RowGap:0,f=r.RowGapTablet?r.RowGapTablet:p,g=r.RowGapMobile?r.RowGapMobile:f,u=r.columns?r.columns:1,c=r.columnsTablet?r.columnsTablet:u,h=r.columnsMobile?r.columnsMobile:c;var m=1200;var y=720;if(typeof elementorFrontendConfig!=="undefined"){m=elementorFrontendConfig.breakpoints.lg;y=elementorFrontendConfig.breakpoints.md}
if(e>=m){o=u;n=s;a=p}else if(e>=y){o=c;n=l;a=f}else{o=h;n=d;a=g}
var w=(o-1)*n;var v=(t-w)/o;v=Math.floor(v);var b=v;if(o>1){b=v*2+n}
if(r.type!="metro"){C.children(".grid-sizer").css({width:v+"px",});C.children(".grid-item").each(function(i){var e=x(this);if(e.data("width")===2){e.css({width:b+"px",})}else{e.css({width:v+"px",})}
if("masonry"!==r.type){e.css({marginBottom:a+"px",})}})}
if(x(window).width()>767){x(".lagi-portfolio-mosaic .type-portfolio:nth-child(4n+2)").each(function(){var i=x(this),e=0,t=0,o=0;e=i.height();t=i.next().height();if(t>e){o=(t-e)/2;i.css("margin-top",o+"px")}else if(e>t){o=(e-t)/2;i.next().css("margin-top",o+"px")}});x(".lagi-portfolio-mosaic .type-portfolio:nth-child(4n+1)").each(function(){var i=x(this),e=0,t=0,o=0;e=i.height();t=i.prev().height();if(t>e){o=(t-e)/2;i.css("margin-top",o+"px")}else if(e>t){o=(e-t)/2;i.prev().css("margin-top",o+"px")}})}
if(i){i.packery.gutter=n;i.fitRows.gutter=n;C.isotope(i)}
C.isotope("layout")}
return this.each(function(){e=x(this);C=e.find(".lagi-grid");d=e.find(".lagi-query-input");var s=C.data("grid");var i;if(C.length>0&&s&&typeof s.type!=="undefined"){var l={itemSelector:".grid-item",percentPosition:!0,transitionDuration:0,packery:{columnWidth:".grid-sizer",},fitRows:{gutter:30,},};if("masonry"===s.type){l.layoutMode="packery"}else{l.layoutMode="fitRows"}
i=C.imagesLoaded(function(){p(l);if("grid"===s.type){C.isotope("layout")}
C.addClass("loaded")});x(window).on("resize",function(){p(l);clearTimeout(t);t=setTimeout(function(){p(l)},500)})}
e.on("LagiQueryEnd",function(i,e,t,o){if(e.hasClass("lagi-portfolio-wrapper")){d=e.find(".lagi-query-input")}else if(e.hasClass("lagi-blog-wrapper")){d=e.find(".lagi-query-input")}else if(e.hasClass("lagi-job-wrapper")){d=e.find(".lagi-query-input")}
C=e.find(".lagi-grid");if(d.val()){e.find(".grid-item").removeClass("lagi-skeleton-loading");var n=e.data("pagination");if(n=="navigation"&&e.length>0){var a=parseInt(e.offset().top);x("html, body").animate({scrollTop:a-100,},1e3)}
if(C.length>0&&s&&typeof s.type!=="undefined"){e.find(".lagi-pagination").html(o);var r=C.height();C.isotope().css("height",r).append(t).isotope("reloadItems",t).imagesLoaded().always(function(){t.addClass("animate");p(l);if("grid"===s.type){C.isotope("layout")}})}else{C.append(t).imagesLoaded().always(function(){t.addClass("animate")})}}})})}})(jQuery);("use strict");(function($){"use strict";$.fn.LagiGridQuery=function(){var $el,$grid;var isQuerying=!1;var $queryInput;var infiniteLoader=!1;function initFilterCount(){if($(".total-result").length==0){return}
var foundPosts=getQuery("found_posts");$(".total-result").text(foundPosts)}
function handlerFilter(){$el.children(".lagi-grid-filter").on("click",".filter-wrap .btn-filter a",function(e){e.preventDefault();var $self=$(this);var $parent=$self.closest(".ux-filter");var filterValue=[];$el.find(".grid-item").addClass("lagi-skeleton-loading");$parent.find(".filter-control").each(function(){var filter=$(this).find("a.save").attr("data-filter");if(filter){var arg=[];$(this).find('input[name="'+filter+'"]:checked').each(function(){arg.push($(this).val())});var obj={};obj[filter]=arg;filterValue.push(obj)}else{var filter=$(this).find("input.input-control").attr("name");var arg=[];$(this).find("input:checked").each(function(){arg.push($(this).val())});var obj={};obj[filter]=arg;filterValue.push(obj)}
if($self.hasClass("clear")){var arg=[];obj[filter]=arg;$parent.find("input:checkbox").removeAttr("checked")}});if("*"===filterValue){setQueryVars("extra_query","")}else{setQueryVars("extra_query",filterValue)}
$el.children(".lagi-grid-filter").find(".action-wrap .filter-control").slideUp(200);$el.trigger("LagiBeginQuery")})}
function handlerPagination(){if($("body").hasClass("elementor-editor-active")){return}
if($el.data("pagination")==="loadmore"){$el.children(".lagi-pagination").find(".lagi-loadmore-button").on("click",function(e){e.preventDefault();var current=$(this).closest(".lagi-grid-wrapper");if(!isQuerying){$(this).hide();var paged=getQueryVars("paged",current);paged++;setQueryVars("paged",paged,current);infiniteLoader=!0;handlerQuery()}})}else if($el.data("pagination")==="infinite"){var infiniteReady=setInterval(function(){if($grid.hasClass("loaded")){handlerScrollInfinite();clearInterval(infiniteReady)}},200)}else if($el.data("pagination")==="navigation"){$el.on("click",".lagi-pagination a.page-numbers",function(e){e.preventDefault();if(isQuerying){return}
var current=$(this).closest(".lagi-grid-wrapper");current.find(".grid-item").addClass("lagi-skeleton-loading");if($(".uxper-search-form").length>0){$(window).scrollTop($(".uxper-search-form").offset().top-50)}
current.find(".lagi-pagination .page-numbers").removeClass("current");$(this).addClass("current");var paged=getQueryVars("paged",current);if(!$(this).hasClass("next")&&!$(this).hasClass("prev")){var current_page=$(this).text();paged=parseInt(current_page)}
if($(this).hasClass("next")){paged=parseInt(paged)+1}
if($(this).hasClass("prev")){paged=parseInt(paged)-1}
setQueryVars("paged",paged,current);var current=$(this).closest(".lagi-grid-wrapper");handlerQuery(!0)})}}
function handlerScrollInfinite(){var windowHeight=$(window).height();var halfWH=(90/100)*windowHeight;halfWH=parseInt(halfWH);var elOffsetTop=$el.offset().top;var elHeight=$el.outerHeight(!0);var offsetTop=elOffsetTop+elHeight;var finalOffset=offsetTop-halfWH;var oldST=0;$(window).on("scroll",function(){var st=$(this).scrollTop();if(st>oldST&&st>=finalOffset){if(!isQuerying){var paged=getQueryVars("paged",$el);var maxNumberPages=getQuery("max_num_pages",$el);if(paged<maxNumberPages){paged++;setQueryVars("paged",paged,$el);infiniteLoader=!0;handlerQuery()}}}
oldST=st});$(window).on("resize",function(){setTimeout(function(){windowHeight=$(window).height();halfWH=(90/100)*windowHeight;halfWH=parseInt(halfWH);elOffsetTop=$el.offset().top;elHeight=$el.outerHeight(!0);offsetTop=elOffsetTop+elHeight;finalOffset=offsetTop-halfWH},100)})}
function handlerQuery(reset){isQuerying=!0;var loader;var current_el;loader=$el.find(".lagi-loader");if(infiniteLoader){loader.addClass("show")}
if($el.hasClass("lagi-portfolio-wrapper")){$queryInput=$el.find(".lagi-query-input");current_el=$el}else if($el.hasClass("lagi-blog-wrapper")){$queryInput=$el.find(".lagi-query-input");current_el=$el}else if($el.hasClass("lagi-job-wrapper")){$queryInput=$el.find(".lagi-query-input");current_el=$el}
setTimeout(function(){var query=JSON.parse($queryInput.val());var query_data=$.param(query);$.ajax({url:theme_vars.ajax_url,type:"POST",data:query_data,dataType:"json",success:function success(results){setQuery("max_num_pages",results.max_num_pages);setQuery("found_posts",results.found_posts);setQuery("count",results.count);initFilterCount();var html=results.template;var $newItems=$(html);var $pagination=results.pagination;if(reset===!0){$el.find(".grid-item").remove()}
$el.trigger("LagiQueryEnd",[current_el,$newItems,$pagination]);handlerQueryEnd();loader.removeClass("show");isQuerying=!1;infiniteLoader=!1;if($(window).width()>767){$(".lagi-portfolio-mosaic .type-portfolio:nth-child(4n+2)").each(function(){var _this=$(this),cur_height=0,height=0,marginTop=0;cur_height=_this.height();height=_this.next().height();if(height>cur_height){marginTop=(height-cur_height)/2;_this.css("margin-top",marginTop+"px")}else if(cur_height>height){marginTop=(cur_height-height)/2;_this.next().css("margin-top",marginTop+"px")}});$(".lagi-portfolio-mosaic .type-portfolio:nth-child(4n+1)").each(function(){var _this=$(this),cur_height=0,height=0,marginTop=0;cur_height=_this.height();height=_this.prev().height();if(height>cur_height){marginTop=(height-cur_height)/2;_this.css("margin-top",marginTop+"px")}else if(cur_height>height){marginTop=(cur_height-height)/2;_this.prev().css("margin-top",marginTop+"px")}})}},})},500)}
function handlerQueryEnd(){if($el.data("pagination")==="navigation"){return}
var foundPosts=getQuery("found_posts");var paged=getQueryVars("paged");var numberPages=getQueryVars("posts_per_page");if(foundPosts<=paged*numberPages){$el.children(".lagi-pagination").hide();$el.children(".lagi-pagination-messages").show(1000)}else{$el.children(".lagi-pagination").show();$el.children(".lagi-pagination").find(".lagi-loadmore-button").show();$el.children(".lagi-pagination-messages").hide(1)}}
function getQuery(name,current){if(current){$el=current}
if($el.hasClass("lagi-portfolio-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-blog-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-job-wrapper")){$queryInput=$el.find(".lagi-query-input")}
var query=JSON.parse($queryInput.val());return query[name]}
function setQuery(name,newValue){if($el.hasClass("lagi-portfolio-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-blog-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-job-wrapper")){$queryInput=$el.find(".lagi-query-input")}
if($queryInput.val()){var query=JSON.parse($queryInput.val());query[name]=newValue;$queryInput.val(JSON.stringify(query))}}
function getQueryVars(name,current){if(current){$el=current}
if($el.hasClass("lagi-portfolio-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-blog-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-job-wrapper")){$queryInput=$el.find(".lagi-query-input")}
var queryVars=JSON.parse($queryInput.val());return queryVars.query_vars[name]}
function setQueryVars(name,newValue,current){if(current){$el=current}
if($el.hasClass("lagi-portfolio-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-blog-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-job-wrapper")){$queryInput=$el.find(".lagi-query-input")}
var queryVars=JSON.parse($queryInput.val());queryVars.query_vars[name]=newValue;$queryInput.val(JSON.stringify(queryVars))}
return this.each(function(){$el=$(this);$grid=$el.find(".lagi-grid");if($el.hasClass("lagi-portfolio-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-blog-wrapper")){$queryInput=$el.find(".lagi-query-input")}else if($el.hasClass("lagi-job-wrapper")){$queryInput=$el.find(".lagi-query-input")}
handlerFilter();if(!$queryInput)return;initFilterCount();handlerPagination();$el.on("LagiBeginQuery",function(){setQueryVars("paged",1);handlerQuery(!0)})})}})(jQuery);("use strict");function _typeof(obj){"@babel/helpers - typeof";return((_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}),_typeof(obj))}
var LAGI=LAGI||{};(function($){"use strict";var $body=$("body"),$window=$(window),ajax_url=theme_vars.ajax_url,_header_sticky=theme_vars.header_sticky,content_protected_enable=theme_vars.content_protected_enable,scroll_top_enable=theme_vars.scroll_top_enable;function isInViewport(node){var rect=node.getBoundingClientRect();return((rect.height>0||rect.width>0)&&rect.bottom>=0&&rect.right>=0&&rect.top<=(window.innerHeight||document.documentElement.clientHeight)&&rect.left<=(window.innerWidth||document.documentElement.clientWidth))}
function addQueryArg(key,value,url){var re=new RegExp("([?&])"+key+"=.*?(&|$)","i");var separator=url.indexOf("?")!==-1?"&":"?";if(url.match(re)){return url.replace(re,"$1"+key+"="+value+"$2")}else{return url+separator+key+"="+value}}
LAGI.element={init:function init(){LAGI.element.rtl();LAGI.element.cookie_notices();LAGI.element.general();LAGI.element.nice_select();LAGI.element.blog_filter();LAGI.element.retina_logo();LAGI.element.swiper_carousel();LAGI.element.scroll_to_top();LAGI.element.main_menu();LAGI.element.header_sticky();LAGI.element.toggle_popup();LAGI.element.grid_layout();LAGI.element.validate_form();LAGI.element.forget_password();LAGI.element.colormode();LAGI.element.motionfx();LAGI.element.scroll_bar();LAGI.element.mouse_style();LAGI.element.lagiconvertsvg();if(content_protected_enable==1){LAGI.element.content_protected()}},window_load:function window_load(){LAGI.element.page_loading_effect();LAGI.element.handler_entrance_queue_animation();var hashTag=window.location.hash;if(LAGI.element.is_valid_smoothscroll_target(hashTag)){LAGI.element.smooth_scroll(hashTag)}},rtl:function rtl(){$(window).load(function(){if($("body").attr("dir")=="rtl"){$(".elementor-section-stretched").each(function(){var val=$(this).css("left");$(this).css("left","auto");$(this).css("right",val)})}})},general:function general(){$(".block-search.search-icon").on("click",function(e){e.preventDefault();$(".search-form-wrapper.canvas-search").addClass("on")});$(".canvas-search").on("click",".btn-close,.bg-overlay",function(e){e.preventDefault();$(this).parents(".canvas-search").removeClass("on")})},nice_select:function nice_select(){$(".nice-select").niceSelect()},blog_filter:function blog_filter(){$(".lagi-filter-form .form-group select").each(function(){$(this).on("change",function(){var baseUrl=$(this).parents("form").data("homeurl"),cat_name=$(this).find("option:selected").val(),category=$(this).attr("name"),url=$(this).parents("form").data("url"),currentURL=window.location.href,new_url="";if(category=="sort-by"){new_url=addQueryArg("sort_by",cat_name,currentURL);window.location.href=new_url}else if(category=="orderby"){new_url=addQueryArg("orderby",cat_name,url);window.location.href=new_url}else{if(cat_name=="-1"){new_url=url}else{new_url=baseUrl+"/"+category+"/"+cat_name}
window.location.href=new_url}})})},retina_logo:function retina_logo(){if(window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.5)").matches||window.matchMedia("only screen and (-o-min-device-pixel-ratio: 3/2)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.5)").matches||window.matchMedia("only screen and (min-device-pixel-ratio: 1.5)").matches){$(".site-logo img").each(function(){$(this).addClass("logo-retina");$(this).attr("src",$(this).data("retina"))})}},cookie_notices:function cookie_notices(){if(theme_vars.notice_cookie_enable==1&&theme_vars.notice_cookie_confirm!="yes"&&theme_vars.notice_cookie_messages!=""){$.growl({location:"br",fixed:!0,duration:3600000,size:"large",title:"",message:theme_vars.notice_cookie_messages,});$("#lagi-button-cookie-notice-ok").on("click",function(){$(this).parents(".growl-message").first().siblings(".growl-close").trigger("click");var _data={action:"notice_cookie_confirm",};_data=$.param(_data);$.ajax({url:theme_vars.ajax_url,type:"POST",data:_data,dataType:"json",success:function success(results){},error:function error(errorThrown){console.log(errorThrown)},})})}},page_loading_effect:function page_loading_effect(){setTimeout(function(){$body.addClass("loaded")},200);var $loader=$("#page-preloader");setTimeout(function(){$loader.remove()},2000)},handler_entrance_queue_animation:function handler_entrance_queue_animation(){var animateQueueDelay=200,queueResetDelay;$(".lagi-entrance-animation-queue").each(function(){var itemQueue=[],queueTimer,queueDelay=$(this).data("animation-delay")?$(this).data("animation-delay"):animateQueueDelay;$(this).children(".item").waypoint(function(){var _self=this.element?this.element:$(this);queueResetDelay=setTimeout(function(){queueDelay=animateQueueDelay},animateQueueDelay);itemQueue.push(_self);LAGI.element.process_item_queue(itemQueue,queueDelay,queueTimer);queueDelay+=animateQueueDelay},{offset:"90%",triggerOnce:!0,})})},process_item_queue:function process_item_queue(itemQueue,queueDelay,queueTimer,queueResetDelay){clearTimeout(queueResetDelay);queueTimer=window.setInterval(function(){if(itemQueue!==undefined&&itemQueue.length){$(itemQueue.shift()).addClass("animate");LAGI.element.process_item_queue()}else{window.clearInterval(queueTimer)}},queueDelay)},swiper_carousel:function swiper_carousel(){$(".lagi-swiper-slider").each(function(){var slider_name=$(this).data("name");if($(this).find(".woocommerce-product-gallery__image").length){$(this).find(".woocommerce-product-gallery__image").wrap('<div class="swiper-slide"></div>')}
if($(this).hasClass("lagi-swiper-linked-yes")){var mainSlider=$(this).children(".lagi-main-swiper").LagiSwiper();var thumbsSlider=$(this).children(".lagi-thumbs-swiper").LagiSwiper();mainSlider.controller.control=thumbsSlider;thumbsSlider.controller.control=mainSlider}else{$(this).LagiSwiper()}});var product_thumb=new Swiper(".lagi-product-thumbnail-1",{slidesPerView:{lg:4,md:4,sm:4,},spaceBetween:15,navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},direction:'vertical',loop:!0,slideToClickedSlide:!0,centeredSlides:!0,watchSlidesProgress:!0,});var product_review=new Swiper(".lagi-product-thumbnail-2",{loop:!0,spaceBetween:0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",},thumbs:{swiper:product_thumb,},});$(".thumbnail-inner .woocommerce-product-gallery__image").each(function(){var img=$(this).find("img").data("src");$(this).zoom({url:img})});$(".thumbnail-inner .woocommerce-product-gallery__image").each(function(){var img=$(this).find("img").data("src");$(this).zoom({url:img})})},scroll_to_top:function scroll_to_top(){if(scroll_top_enable!=1){return}
var $scrollUp=$("#page-scroll-up");var lastScrollTop=0;$window.on("scroll",function(){var st=$(this).scrollTop();if(st>lastScrollTop){$scrollUp.removeClass("show")}else{if($window.scrollTop()>200){$scrollUp.addClass("show")}else{$scrollUp.removeClass("show")}}
lastScrollTop=st});$scrollUp.on("click",function(evt){$("html, body").animate({scrollTop:0,},600);evt.preventDefault()})},main_menu:function main_menu(){var translate=0,index=0;$(".canvas-menu .menu-item-has-children>a,.canvas-menu .page_item_has_children>a, .canvas-menu .children .elementor-heading-title").on("click",function(e){e.preventDefault();e.stopPropagation();index++;translate=translate-100;var ul_parent=$(this).closest("ul.menu");ul_parent.css("transform","translate("+translate+"%, 0px)");var parent=$(this).closest("li, .elementor-widget-wrap");parent.find(">.sub-menu,>.children, > .lagi-list-layout-block").fadeIn(300);parent.find("> ul.children, .lagi-list").prepend('<a href="#" class="btn-canvas-menu btn-back-menu"><i class="fal fa-arrow-left"></i></a>');var height=parent.find(">.sub-menu,>.children, > .lagi-list-layout-block").outerHeight();if(height>0){$("ul.menu").css("min-height",height+"px")}});$(".canvas-menu").on("click",".btn-back-menu",function(e){e.preventDefault();translate=translate+100;index--;var ul_parent=$(this).parents("ul.menu");ul_parent.css("transform","translate("+translate+"%, 0px)");$(this).closest(".sub-menu,.children, .lagi-list-layout-block, ul.children").fadeOut(300);$(this).closest(".sub-menu,.children, .lagi-list-layout-block, ul.children").find(".btn-back-menu").remove();$(this).remove();$("ul.menu").css("min-height","auto")});$(".canvas-menu").on("click",".icon-menu",function(e){e.preventDefault();$(this).parents(".canvas-menu").toggleClass("active")});$(".canvas-menu").on("click",".btn-close,.bg-overlay",function(e){e.preventDefault();$(this).parents(".canvas-menu").removeClass("active")});$(".site-menu .sub-menu").each(function(){var width=$(this).outerWidth();if(width>0){var offset=$(this).offset();var w_body=$("body").outerWidth();var left=offset.left;if(w_body<left+width){$(this).css("left","-100%")}}})},header_sticky:function header_sticky(){if(_header_sticky=="yes"){return}
var offset=0,height=0;if($("header.site-header").length>0){offset=$("header.site-header").offset().top;height=$("header.site-header").outerHeight()}
var has_wpadminbar=$("#wpadminbar").length;var wpadminbar=0;var lastScroll=0;if(has_wpadminbar>0){wpadminbar=$("#wpadminbar").height();$(".header-sticky").addClass("has-wpadminbar")}
$(window).on("scroll",function(){var currentScroll=$(window).scrollTop();if(currentScroll>offset+wpadminbar+height+100){$(".header-sticky").addClass("scroll")}else{$(".header-sticky").removeClass("scroll")}
if(currentScroll>lastScroll){$(".header-sticky").removeClass("on")}else{if(currentScroll<offset+wpadminbar+height+100){$(".header-sticky").removeClass("on")}else{$(".header-sticky").addClass("on")}}
lastScroll=currentScroll})},toggle_popup:function toggle_popup(){$(".lagi-popup").on("click",".bg-overlay, .btn-close",function(e){e.preventDefault();$("html").css("overflow","auto");$("html").css("margin-right","0");$(this).closest(".lagi-popup").removeClass("open");$("iframe").each(function(index){$(this).attr("src",$(this).attr("src"));return!1})});$(".btn-lagi-popup").on("click",function(e){e.preventDefault();var id=$(this).attr("href");$("html").css("overflow","hidden");$("html").css("margin-right","15px");$(".lagi-popup").removeClass("open");$(id).addClass("open")})},content_protected:function content_protected(){var $contentProtectedAlert=$("#lagi-content-protected-box");var delayTime=3000;$(document).on("contextmenu",function(){$contentProtectedAlert.show().delay(delayTime).fadeOut();return!1});$(window).on("keydown",function(event){if(event.keyCode==123){$contentProtectedAlert.show().delay(delayTime).fadeOut();return!1}
if(event.ctrlKey&&event.shiftKey&&(event.keyCode==67||event.keyCode==73||event.keyCode==74)){$contentProtectedAlert.show().delay(delayTime).fadeOut();return!1}
if(event.metaKey&&event.altKey&&(event.keyCode==67||event.keyCode==73||event.keyCode==74)){$contentProtectedAlert.show().delay(delayTime).fadeOut();return!1}
if(event.metaKey&&event.shiftKey&&event.keyCode==67){$contentProtectedAlert.show().delay(delayTime).fadeOut();return!1}});$("html").bind("cut copy paste",function(e){e.preventDefault()})},get_smooth_scroll_offset:function get_smooth_scroll_offset(){if(smoothScrollOffset){return smoothScrollOffset}
var windowWidth=window.innerWidth,smoothScrollOffset=0;if(windowWidth>600){var adminBarHeight=$("#wpadminbar").height();smoothScrollOffset+=adminBarHeight}
if(smoothScrollOffset>0){smoothScrollOffset=-smoothScrollOffset}
return smoothScrollOffset},is_valid_smoothscroll_target:function is_valid_smoothscroll_target(selector){if(selector.match(/^([.#])(.+)/)){return!0}
return!1},smooth_scroll:function smooth_scroll(target){var offset=LAGI.element.get_smooth_scroll_offset();$.smoothScroll({offset:0,scrollTarget:$(target),speed:600,easing:"linear",})},grid_layout:function grid_layout(){$(".lagi-grid-wrapper").LagiGridLayout();$(".lagi-grid-wrapper").LagiGridQuery()},validate_form:function validate_form(){$("#lagi-lagin").validate({rules:{email:{required:!0,},password:{required:!0,minlength:5,maxlength:30,},},submitHandler:function submitHandler(form){$.ajax({url:ajax_url,type:"POST",cache:!1,dataType:"json",data:{email:$("#ip_email").val(),password:$("#ip_password").val(),action:"get_lagin_user",},beforeSend:function beforeSend(){$(".form-account p.msg").removeClass("text-error text-success text-warning");$(".form-account p.msg").text(theme_vars.send_user_info);$("#lagi-lagin p.msg").show();$(".form-account .loading-effect").fadeIn()},success:function success(data){$(".form-account p.msg").text(data.messages);if(data.success!=!0){$("#lagi-lagin p.msg").addClass(data.class)}
$(".form-account .loading-effect").fadeOut();if(data.redirect!=""){window.location.href=data.redirect}},})},});$("#lagi-register").validate({rules:{reg_firstname:{required:!0,},reg_lastname:{required:!0,},reg_email:{required:!0,email:!0,},reg_password:{required:!0,minlength:5,maxlength:20,},accept_account:{required:!0,},},submitHandler:function submitHandler(form){$.ajax({url:ajax_url,type:"POST",cache:!1,dataType:"json",data:{account_type:$('input[name="account_type"]:checked').val(),firstname:$("#ip_reg_firstname").val(),lastname:$("#ip_reg_lastname").val(),email:$("#ip_reg_email").val(),password:$("#ip_reg_password").val(),action:"get_register_user",},beforeSend:function beforeSend(){$(".form-account p.msg").removeClass("text-error text-success text-warning");$(".form-account p.msg").text(theme_vars.send_user_info);$("#lagi-register p.msg").show();$(".form-account .loading-effect").fadeIn()},success:function success(data){$(".form-account p.msg").text(data.messages);if(data.success!=!0){$("#lagi-register p.msg").addClass(data.class)}else{if(data.redirect!=""){window.location.href=data.redirect}}
$(".form-account .loading-effect").fadeOut()},})},});jQuery.extend(jQuery.validator.messages,{required:"This field is required",remote:"Please fix this field",email:"A valid email address is required",url:"Please enter a valid URL",date:"Please enter a valid date",dateISO:"Please enter a valid date (ISO)",number:"Please enter a valid number.",digits:"Please enter only digits",creditcard:"Please enter a valid credit card number",equalTo:"Please enter the same value again",accept:"Please enter a value with a valid extension",maxlength:jQuery.validator.format("Please enter no more than {0} characters"),minlength:jQuery.validator.format("Please enter at least {0} characters"),rangelength:jQuery.validator.format("Please enter a value between {0} and {1} characters long"),range:jQuery.validator.format("Please enter a value between {0} and {1}"),max:jQuery.validator.format("Please enter a value less than or equal to {0}"),min:jQuery.validator.format("Please enter a value greater than or equal to {0}"),})},forget_password:function forget_password($this){$("#lagi_forgetpass").on("click",function(e){e.preventDefault();var $form=$(this).parents("form");$.ajax({type:"post",url:ajax_url,dataType:"json",data:$form.serialize(),beforeSend:function beforeSend(){$(".forgot-form p.msg").removeClass("text-error text-success text-warning");$(".forgot-form p.msg").text(theme_vars.forget_password);$(".forgot-form p.msg").show();$(".forgot-form .loading-effect").fadeIn()},success:function success(data){$(".forgot-form p.msg").text(data.message);$(".forgot-form p.msg").addClass(data.class);$(".forgot-form .loading-effect").fadeOut()},})});$(".generate-password").on("click",function(e){e.preventDefault();var Password={_pattern:/[a-zA-Z0-9_\-\+\.\}\{\?\!\@\#\$\%\&\*\~]/,_getRandomByte:function _getRandomByte(){if(window.crypto&&window.crypto.getRandomValues){var result=new Uint8Array(1);window.crypto.getRandomValues(result);return result[0]}else if(window.msCrypto&&window.msCrypto.getRandomValues){var result=new Uint8Array(1);window.msCrypto.getRandomValues(result);return result[0]}else{return Math.floor(Math.random()*256)}},generate:function generate(length){return Array.apply(null,{length:length,}).map(function(){var result;while(!0){result=String.fromCharCode(this._getRandomByte());if(this._pattern.test(result)){return result}}},this).join("")},};$("#new-password").val(Password.generate(24));$("#new-password-error").fadeOut()});$("#reset-form").validate({rules:{new_password:{required:!0,minlength:8,},},submitHandler:function submitHandler(form){var new_password=$(form).find('input[name="new_password"]').val();var lagin=$(form).find('input[name="lagin"]').val();$.ajax({type:"POST",url:ajax_url,data:{new_password:new_password,lagin:lagin,action:"change_password_ajax",},beforeSend:function beforeSend(){$(".reset-form p.msg").removeClass("text-error text-success text-warning");$(".reset-form p.msg").text(theme_vars.change_password);$(".reset-form p.msg").show();$(".reset-form .loading-effect").fadeIn()},success:function success(data){var data=$.parseJSON(data);$(".reset-form p.msg").text(data.message);$(".reset-form p.msg").addClass(data.class);$(".reset-form .loading-effect").fadeOut();if(data.redirect){window.location.href=data.redirect}},})},})},colormode:function colormode($this){$(".lagi-mode-switcher").on("click",function(e){e.preventDefault();var _this=$(this),body=$("body");_this.toggleClass("lagi-dark-scheme");body.toggleClass("lagi-dark-scheme lagi-light-scheme")})},motionfx:function motionfx($this){$(".elementor-element, .elementor-column").each(function(){var _this=$(this);var data=$(this).data("settings");var array=[];$.map(data,function(value,index){return(array[index]=value)});if(array.motion_fx_translateY_effect){_this.addClass("lagi-parallax");_this.attr("data-direction",array.motion_fx_translateY_direction);var speed=[];$.map(array.motion_fx_translateY_speed,function(value,index){return(speed[index]=value)});_this.attr("data-size",speed.size)}
if(array.motion_fx_translateX_effect){_this.addClass("lagi-parallax");_this.attr("data-direction",array.motion_fx_translateX_direction);var speed=[];$.map(array.motion_fx_translateX_speed,function(value,index){return(speed[index]=value)});_this.attr("data-size",speed.size)}
if(array.motion_fx_opacity_effect){_this.addClass("lagi-parallax");_this.attr("data-direction",array.motion_fx_opacity_direction);var speed=[];$.map(array.motion_fx_opacity_level,function(value,index){return(speed[index]=value)});_this.attr("data-size",speed.size);_this.attr("data-height",$(this).outerHeight())}
if(array.motion_fx_mouseTrack_effect){_this.addClass("lagi-mousetrack");_this.attr("data-direction",array.motion_fx_mouseTrack_direction);var speed=[];$.map(array.motion_fx_mouseTrack_speed,function(value,index){return(speed[index]=value)});_this.attr("data-type","mousetrack");_this.attr("data-size",speed.size)}
if(array.motion_fx_tilt_effect){_this.addClass("lagi-mousetrack");_this.attr("data-direction",array.motion_fx_tilt_direction);var speed=[];$.map(array.motion_fx_tilt_speed,function(value,index){return(speed[index]=value)});_this.attr("data-type","tilt");_this.attr("data-size",speed.size)}})},scroll_bar:function scroll_bar($this){$(".scroll-bar-wrap").each(function(){var height=$("body").outerHeight();var current=$(window).scrollTop();var top=(current/height)*100;$(this).find(".scroll-bar-current").css("top",top+"%")})},mouse_style:function mouse_style($this){$("#wrapper").on("mousemove",function(event){$(".mouse-style").css("--x",event.clientX+"px");$(".mouse-style").css("--y",event.clientY+"px");if(event.target.tagName==="A"||event.target.tagName==="BUTTON"||$(event.target).css("cursor")==="pointer"||(event.target.parentNode&&event.target.parentNode.tagName==="A")||(event.target.tagName==="INPUT"&&event.target.name==="submit")){$(".mouse-style").css("--scale","1.4");$(".mouse-style").css("opacity","0.7")}else{$(".mouse-style").css("--scale","1");$(".mouse-style").css("opacity","1")}})},lagiconvertsvg:function lagiconvertsvg(){(function(window,_ref){var implementation=_ref.implementation;var isLocal=window.location.protocol==="file:";var hasSvgSupport=implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");function uniqueClasses(list){list=list.split(" ");var hash={};var i=list.length;var out=[];while(i--){if(!hash.hasOwnProperty(list[i])){hash[list[i]]=1;out.unshift(list[i])}}
return out.join(" ")}
var forEach=Array.prototype.forEach||function(fn,scope){if(this===void 0||this===null||typeof fn!=="function"){throw new TypeError()}
var i;var len=this.length>>>0;for(i=0;i<len;++i){if(i in this){fn.call(scope,this[i],i,this)}}};var svgCache={};var svgCount=0;var svgCountEls=[];var requestQueue=[];var ranScripts={};var svgClone=function svgClone(sourceSvg){return sourceSvg.cloneNode(!0)};var queueRequest=function queueRequest(url,callback){requestQueue[url]=requestQueue[url]||[];requestQueue[url].push(callback)};var processRequestQueue=function processRequestQueue(url){for(var i=0,len=requestQueue[url].length;i<len;i++){(function(index){setTimeout(function(){requestQueue[url][index](svgClone(svgCache[url]))},0)})(i)}};var svgLoad=function svgLoad(url,callback){if(!window.SVGSVGElement)return;if(svgCache[url]!==undefined){if(svgCache[url]instanceof SVGSVGElement){callback(svgClone(svgCache[url]))}else{queueRequest(url,callback)}}else{if(!window.XMLHttpRequest){callback("Browser does not support XMLHttpRequest");return!1}
svgCache[url]={};queueRequest(url,callback);var httpRequest=new XMLHttpRequest();httpRequest.onreadystatechange=function(){if(httpRequest.readyState===4){if(httpRequest.status===404||httpRequest.responseXML===null){callback("Unable to load SVG file: ".concat(url));if(isLocal)
callback("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.");callback();return!1}
if(httpRequest.status===200||(isLocal&&httpRequest.status===0)){if(httpRequest.responseXML instanceof Document){svgCache[url]=httpRequest.responseXML.documentElement}else if(DOMParser&&DOMParser instanceof Function){var xmlDoc;try{var parser=new DOMParser();xmlDoc=parser.parseFromString(httpRequest.responseText,"text/xml")}catch(e){xmlDoc=undefined}
if(!xmlDoc||xmlDoc.getElementsByTagName("parsererror").length){callback("Unable to parse SVG file: ".concat(url));return!1}else{svgCache[url]=xmlDoc.documentElement}}
processRequestQueue(url)}else{callback("There was a problem injecting the SVG: ".concat(httpRequest.status," ").concat(httpRequest.statusText));return!1}}};httpRequest.open("GET",url);if(httpRequest.overrideMimeType)
httpRequest.overrideMimeType("text/xml");httpRequest.send()}};var injectElement=function injectElement(el,evalScripts,pngFallback,callback){var imgUrl=el.getAttribute("data-src")||el.getAttribute("src");if(!/\.svg/i.test(imgUrl)){callback("Attempted to inject a file with a non-svg extension: ".concat(imgUrl));return}
if(!hasSvgSupport){var perElementFallback=el.getAttribute("data-fallback")||el.getAttribute("data-png");if(perElementFallback){el.setAttribute("src",perElementFallback);callback(null)}else if(pngFallback){el.setAttribute("src","".concat(pngFallback,"/").concat(imgUrl.split("/").pop().replace(".svg",".png")));callback(null)}else{callback("This browser does not support SVG and no PNG fallback was defined.")}
return}
if(svgCountEls.includes(el)){return}
svgCountEls.push(el);el.setAttribute("src","");svgLoad(imgUrl,function(svg){if(typeof svg==="undefined"||typeof svg==="string"){callback(svg);return!1}
var imgId=el.getAttribute("id");if(imgId){svg.setAttribute("id",imgId)}
var imgTitle=el.getAttribute("title");if(imgTitle){svg.setAttribute("title",imgTitle)}
var classMerge=[].concat(svg.getAttribute("class")||[],"injected-svg",el.getAttribute("class")||[]).join(" ");svg.setAttribute("class",uniqueClasses(classMerge));var imgStyle=el.getAttribute("style");if(imgStyle){svg.setAttribute("style",imgStyle)}
var imgData=[].filter.call(el.attributes,function(_ref2){var name=_ref2.name;return/^data-\w[\w\-]*$/.test(name)||"onclick".match(name)});forEach.call(imgData,function(_ref3){var name=_ref3.name,value=_ref3.value;if(name&&value){svg.setAttribute(name,value)}});var iriElementsAndProperties={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"],};var element;var elementDefs;var properties;var currentId;var newId;Object.keys(iriElementsAndProperties).forEach(function(key){element=key;properties=iriElementsAndProperties[key];elementDefs=svg.querySelectorAll("defs ".concat(element,"[id]"));var _loop2=function _loop2(i,elementsLen){currentId=elementDefs[i].id;newId="".concat(currentId,"-").concat(svgCount);var referencingElements=void 0;forEach.call(properties,function(property){referencingElements=svg.querySelectorAll("[".concat(property,'*="').concat(currentId,'"]'));for(var j=0,referencingElementLen=referencingElements.length;j<referencingElementLen;j++){referencingElements[j].setAttribute(property,"url(#".concat(newId,")"))}});elementDefs[i].id=newId};for(var i=0,elementsLen=elementDefs.length;i<elementsLen;i++){_loop2(i,elementsLen)}});svg.removeAttribute("xmlns:a");var scripts=svg.querySelectorAll("script");var scriptsToEval=[];var script;var scriptType;for(var k=0,scriptsLen=scripts.length;k<scriptsLen;k++){scriptType=scripts[k].getAttribute("type");if(!scriptType||scriptType==="application/ecmascript"||scriptType==="application/javascript"){script=scripts[k].innerText||scripts[k].textContent;scriptsToEval.push(script);svg.removeChild(scripts[k])}}
if(scriptsToEval.length>0&&(evalScripts==="always"||(evalScripts==="once"&&!ranScripts[imgUrl]))){for(var l=0,scriptsToEvalLen=scriptsToEval.length;l<scriptsToEvalLen;l++){new Function(scriptsToEval[l])(window)}
ranScripts[imgUrl]=!0}
var styleTags=svg.querySelectorAll("style");forEach.call(styleTags,function(styleTag){styleTag.textContent+=""});el.parentNode.replaceChild(svg,el);delete svgCountEls[svgCountEls.indexOf(el)];el=null;svgCount++;callback(svg)})};var lagisvg=function lagisvg(elements){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var done=arguments.length>2?arguments[2]:undefined;var evalScripts=options.evalScripts||"always";var pngFallback=options.pngFallback||!1;var eachCallback=options.each;if(elements&&elements.length!==undefined){var elementsLoaded=0;forEach.call(elements,function(element){injectElement(element,evalScripts,pngFallback,function(svg){if(eachCallback&&typeof eachCallback==="function")
eachCallback(svg);if(done&&elements.length===++elementsLoaded)
done(elementsLoaded)})})}else{if(elements){injectElement(elements,evalScripts,pngFallback,function(svg){if(eachCallback&&typeof eachCallback==="function")
eachCallback(svg);if(done)done(1);elements=null})}else{if(done)done(0)}}};if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=exports=lagisvg}else if(typeof define==="function"&&define.amd){define(function(){return lagisvg})}else if(_typeof(window)==="object"){window.lagisvg=lagisvg}})(window,document);var ready=function ready(callback){if(document.readyState!=="loading"){callback()}else{document.addEventListener("DOMContentLiteSpeedLoaded",callback)}};ready(function(){var el=document.querySelectorAll(".lagisvg img");lagisvg(el)})},};LAGI.woocommerce={init:function init(){LAGI.woocommerce.quantity()},quantity:function quantity(){$("body").on("click",".entry-quantity .plus",function(e){var input=$(this).parents(".entry-quantity").find(".input-text.qty");var val=parseInt(input.val())+1;input.attr("value",val);$('.button[name="update_cart"]').prop("disabled",!1)});$("body").on("click",".entry-quantity .minus",function(e){var input=$(this).parents(".entry-quantity").find(".input-text.qty");var val=parseInt(input.val())-1;if(input.val()>0){input.attr("value",val)}
$('.button[name="update_cart"]').prop("disabled",!1)})},};LAGI.onReady={init:function init(){LAGI.element.init();LAGI.woocommerce.init()},};LAGI.onLoad={init:function init(){LAGI.element.window_load()},};LAGI.onScroll={init:function init(){var scrolled=$(window).scrollTop();$(".lagi-parallax").each(function(index,element){var initY=$(this).offset().top;var height=$(this).height();var endY=initY+$(this).height();var direction=$(this).data("direction");var size=$(this).data("size");var targetHeight=$(this).data("height");var targetHeightTop=$(this).offset().top;var visible=isInViewport(this);if(visible&&$(window).width()>767){var diff=scrolled-initY;var ratio=Math.round((diff/height)*100);if(direction=="up"){$(this).find("> .elementor-widget-container").css("transform","translateY("+parseInt(-(ratio*size))+"px)")}else if(direction=="down"){$(this).find("> .elementor-widget-container").css("transform","translateY("+parseInt(ratio*size)+"px)")}else if(direction=="left"){$(this).find("> .elementor-widget-container").css("transform","translateX("+parseInt(-(ratio*size))+"px)")}else if(direction=="right"){$(this).find("> .elementor-widget-container").css("transform","translateX("+parseInt(ratio*size)+"px)")}else if(direction=="out-in"){if(window.scrollY>targetHeightTop){var scrollPercent=(targetHeight-(window.scrollY-targetHeightTop))/targetHeight;if(scrollPercent>=0){$(this).css("opacity",scrollPercent)}}}}});LAGI.element.scroll_bar()},};LAGI.onResize={init:function init(){},};LAGI.onMouseMove={init:function init(e){var w=$(window).width();var h=$(window).height();if($(window).width()>767){$(".lagi-mousetrack").each(function(i,el){var offset=parseInt($(el).data("size"));var direction=$(this).data("direction");var type=$(this).data("type");$(el).removeClass("lagi-tilt");var offsetX=0.5-e.pageX/w;var offsetY=0.5-(e.pageY-$(window).scrollTop())/h;if(type=="mousetrack"){if(direction=="direct"){var offsetX=e.pageX/w;var offsetY=(e.pageY-$(window).scrollTop())/h}
var translate="translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px, 0px)";$(el).css({"-webkit-transform":translate,transform:translate,"moz-transform":translate,})}else if(type=="tilt"){if(direction=="opposite"){var tiltX=Math.round(offsetY*offset);var tiltY=Math.round(offsetX*offset)}else if(direction=="direct"){var tiltX=-Math.round(offsetY*offset);var tiltY=-Math.round(offsetX*offset)}
var translate="rotateX(var(--rotateX))rotateY(var(--rotateY))";$(el).addClass("lagi-tilt");$(el).find("> .elementor-widget-container").css({"--rotateX":tiltX+"deg","--rotateY":tiltY+"deg","-webkit-transform":translate,transform:translate,"moz-transform":translate,})}})}},};$(document).on("ready",LAGI.onReady.init);$(window).on("scroll",LAGI.onScroll.init);$(window).on("resize",LAGI.onResize.init);$(window).on("load",LAGI.onLoad.init);$(window).on("mousemove",LAGI.onMouseMove.init)})(jQuery);("use strict");(function($){"use strict";$.fn.LagiSwiper=function(options){var defaults={};var settings=$.extend({},defaults,options);var $swiper;this.each(function(){var $slider=$(this);var $sliderInner=$slider.children(".swiper-inner").first();var sliderSettings=$slider.data();var $sliderContainer=$sliderInner.children(".swiper-container").first(),lgItems=sliderSettings.lgItems?sliderSettings.lgItems:1,mdItems=sliderSettings.mdItems?sliderSettings.mdItems:lgItems,smItems=sliderSettings.smItems?sliderSettings.smItems:mdItems,lgGutter=sliderSettings.lgGutter?sliderSettings.lgGutter:0,mdGutter=sliderSettings.mdGutter?sliderSettings.mdGutter:lgGutter,smGutter=sliderSettings.smGutter?sliderSettings.smGutter:mdGutter,speed=sliderSettings.speed?sliderSettings.speed:1000;lgItems="auto-fixed"===lgItems?"auto":lgItems;mdItems="auto-fixed"===mdItems?"auto":mdItems;smItems="auto-fixed"===smItems?"auto":smItems;var swiperOptions=$.extend({},{slidesPerView:smItems,spaceBetween:smGutter,breakpoints:{720:{slidesPerView:mdItems,spaceBetween:mdGutter,},1200:{slidesPerView:lgItems,spaceBetween:lgGutter,},},},settings);if(sliderSettings.slidesPerGroup=="inherit"){swiperOptions.slidesPerGroup=smItems;swiperOptions.breakpoints[720].slidesPerGroup=mdItems;swiperOptions.breakpoints[1200].slidesPerGroup=lgItems}
swiperOptions.watchOverflow=!0;if(sliderSettings.slideColumns){swiperOptions.slidesPerColumn=sliderSettings.slideColumns}
if(sliderSettings.initialSlide){swiperOptions.initialSlide=sliderSettings.initialSlide}
if(sliderSettings.autoHeight){swiperOptions.autoHeight=!0}
if(typeof sliderSettings.simulatetouch!=="undefined"&&!sliderSettings.simulatetouch){swiperOptions.simulateTouch=!1}
if(sliderSettings.hashnavigation){swiperOptions.hashNavigation=!0}
if(speed){swiperOptions.speed=speed}
if(sliderSettings.effect){swiperOptions.effect=sliderSettings.effect;if("custom"===sliderSettings.fadeEffect){swiperOptions.fadeEffect={crossFade:!1,}}else{swiperOptions.fadeEffect={crossFade:!0,}}}
if(sliderSettings.loop){swiperOptions.loop=!0;if(sliderSettings.loopedslides){swiperOptions.loopedSlides=sliderSettings.loopedslides}}
if(sliderSettings.centered){swiperOptions.centeredSlides=!0}
if(sliderSettings.autoplay){swiperOptions.autoplay={delay:sliderSettings.autoplay,disableOnInteraction:!1,}}
if(sliderSettings.freeMode){swiperOptions.freeMode=!0}
var $wrapControls;if(sliderSettings.wrapControls){var $wrapControlsWrap=$('<div class="swiper-controls-wrap"></div>');$wrapControls=$('<div class="swiper-controls"></div>');$wrapControlsWrap.append($wrapControls);$slider.append($wrapControlsWrap)}
if(sliderSettings.nav){if(sliderSettings.customNav&&sliderSettings.customNav!==""){var $customBtn=$("#"+sliderSettings.customNav);var $swiperPrev=$customBtn.find(".slider-prev-btn");var $swiperNext=$customBtn.find(".slider-next-btn")}else{var $swiperPrev=$('<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i><span class="nav-button-text">'+theme_vars.prevText+"</span></div>");var $swiperNext=$('<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i><span class="nav-button-text">'+theme_vars.nextText+"</span></div>");var $swiperNavButtons=$('<div class="swiper-nav-buttons"></div>');$swiperNavButtons.append($swiperPrev).append($swiperNext);var $swiperNavButtonsWrap=$('<div class="swiper-nav-buttons-wrap"></div>');if("grid"==sliderSettings.navAlignedBy){$swiperNavButtonsWrap.append('<div class="container"><div class="row"><div class="col-sm-12"></div></div></div>');$swiperNavButtonsWrap.find(".col-sm-12").append($swiperNavButtons)}else{$swiperNavButtonsWrap.append($swiperNavButtons)}
if($wrapControls){$wrapControls.append($swiperNavButtonsWrap)}else{$sliderInner.append($swiperNavButtonsWrap)}}
swiperOptions.navigation={nextEl:$swiperNext[0],prevEl:$swiperPrev[0],}}
if(sliderSettings.pagination){var $swiperPaginationWrap=$('<div class="swiper-pagination-wrap"><div class="swiper-pagination-inner"></div></div>');var $swiperPagination=$('<div class="swiper-pagination"></div>');$swiperPaginationWrap.find(".swiper-pagination-inner").append($swiperPagination);var $swiperPaginationContainerWrap=$('<div class="swiper-pagination-container"></div>');if("grid"==sliderSettings.paginationAlignedBy){$swiperPaginationContainerWrap.append('<div class="container"><div class="row"><div class="col-sm-12"></div></div></div>');$swiperPaginationContainerWrap.find(".col-sm-12").append($swiperPaginationWrap)}else{$swiperPaginationContainerWrap.append($swiperPaginationWrap)}
if($wrapControls){$wrapControls.append($swiperPaginationContainerWrap)}else{$slider.append($swiperPaginationContainerWrap)}
var paginationType="bullets";if(sliderSettings.paginationType){paginationType=sliderSettings.paginationType}
swiperOptions.pagination={el:$swiperPagination[0],type:paginationType,clickable:!0,};if($slider.hasClass("pagination-style-04")){var $swiperAltArrows=$('<div class="swiper-alt-arrow-button swiper-alt-arrow-prev" data-action="prev"></div><div class="swiper-alt-arrow-button swiper-alt-arrow-next" data-action="next"></div>');$swiperPaginationWrap.find(".swiper-pagination-inner").append($swiperAltArrows);swiperOptions.pagination.renderCustom=function(swiper,current,total){var currentStr=current.toString();var totalStr=total.toString();return('<div class="fraction"><div class="current">'+currentStr+'</div><div class="separator">/</div><div class="total">'+totalStr+"</div></div>")}}else if($slider.hasClass("pagination-style-03")){swiperOptions.pagination.renderCustom=function(swiper,current,total){var currentStr=current.toString();var totalStr=total.toString();currentStr=currentStr.padStart(2,"0");totalStr=totalStr.padStart(2,"0");return('<div class="fraction"><div class="current">'+currentStr+'</div><div class="separator"></div><div class="total">'+totalStr+"</div></div>")}}else if($slider.hasClass("pagination-style-06")){swiperOptions.pagination.renderCustom=function(swiper,current,total){var currentStr=current.toString();var totalStr=total.toString();currentStr=currentStr.padStart(2,"0");totalStr=totalStr.padStart(2,"0");return('<div class="fraction"><div class="current">'+currentStr+'<div class="separator">/</div></div><div class="total">'+totalStr+"</div></div>")}}}
if(sliderSettings.scrollbar){var $scrollbar=$('<div class="swiper-scrollbar"></div>');$sliderContainer.prepend($scrollbar);swiperOptions.scrollbar={el:$scrollbar,draggable:!0,};swiperOptions.loop=!1}
if(sliderSettings.mousewheel){swiperOptions.mousewheel={enabled:!0,}}
if(sliderSettings.vertical){swiperOptions.direction="vertical"}
if(sliderSettings.slidetoclickedslide){swiperOptions.slideToClickedSlide=!0;swiperOptions.touchRatio=0.2}
var $swiper=new Swiper('.swiper-container',swiperOptions);if(sliderSettings.layerTransition){$swiper.on("init",function(){var index=$swiper.activeIndex;var slides=$swiper.$wrapperEl.find(".swiper-slide");var currentSlide=slides.eq(index);currentSlide.addClass("animated")});$swiper.on("slideChangeTransitionEnd",function(){var index=$swiper.activeIndex;var slides=$swiper.$wrapperEl.find(".swiper-slide");var currentSlide=slides.eq(index);currentSlide.addClass("animated")});$swiper.on("slideChangeTransitionStart",function(){var slides=$swiper.$wrapperEl.find(".swiper-slide");slides.removeClass("animated")})}
if($slider.hasClass("pagination-style-04")){$slider.on("click",".swiper-alt-arrow-button",function(){var action=$(this).data("action");switch(action){case "prev":$swiper.slidePrev();break;case "next":$swiper.slideNext();break}})}
$(document).trigger("LagiSwiperInit",[$swiper,$slider,swiperOptions])});return $swiper}})(jQuery);("use strict")
;(function($){"use strict";var LagiListHandler=function($scope,$){var $element=$scope.find(".lagi-list");var $heading=$element.find(".heading");var $list_inner=$element.find(".list-inner");var id_control=$element.data("id");if(id_control){$('.lagi-list[data-id="'+id_control+'"] .item:nth-child(1)').addClass("active");$element.on("click",".item",function(e){e=e||window.event;e.preventDefault();e.stopPropagation();var index=$(this).index();const imageCarousel=$("#"+id_control+" .swiper-container");var swiperInstance=imageCarousel[0].swiper;swiperInstance.slideTo(index);$(this).addClass("active");$(".lagi-list .item").not(this).removeClass("active")})}
if(window.matchMedia("(max-width: 576px)").matches){$heading.click(function(){$list_inner.slideToggle();$(this).find("i").toggleClass("far fa-chevron-up far fa-chevron-down")})}};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-list.default",LagiListHandler)})})(jQuery)
;(function($){"use strict";var LagiHeading1Handler=function($scope,$){const title=$scope.find(".elementor-heading-title");const imageUrl=title.data('image');if(imageUrl){const mark=title.find('mark');const spanElement=$('<span class="image"><image src="'+imageUrl+'"  alt=""/></span>');mark.append(spanElement)}};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-heading.default",LagiHeading1Handler)})})(jQuery)
;!function(r){"use strict";var o=function(t,s){this.el=r(t),this.options=r.extend({},r.fn.typed.defaults,s),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};o.prototype={constructor:o,init:function(){var s=this;s.timeout=setTimeout(function(){for(var t=0;t<s.strings.length;++t)s.sequence[t]=t;s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.typewrite(s.strings[s.sequence[s.arrayPos]],s.strPos)},s.startDelay)},build:function(){var e=this;if(this.showCursor===!0&&(this.cursor=r('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var t=this.stringsElement.children();r.each(t,function(t,s){e.strings.push(r(s).html())})}this.init()},typewrite:function(n,a){if(this.stop!==!0){var t=Math.round(70*Math.random())+this.typeSpeed,h=this;h.timeout=setTimeout(function(){var t=0,s=n.substr(a);if("^"===s.charAt(0)){var e=1;/^\^\d+/.test(s)&&(s=/\d+/.exec(s)[0],e+=s.length,t=parseInt(s)),n=n.substring(0,a)+n.substring(a+e)}if("html"===h.contentType){var i=n.substr(a).charAt(0);if("<"===i||"&"===i){var r="",o="";for(o="<"===i?">":";";n.substr(a+1).charAt(0)!==o;)r+=n.substr(a).charAt(0),a++;a++,r+=o}}h.timeout=setTimeout(function(){if(a===n.length){if(h.options.onStringTyped(h.arrayPos),h.arrayPos===h.strings.length-1&&(h.options.callback(),h.curLoop++,h.loop===!1||h.curLoop===h.loopCount))return;h.timeout=setTimeout(function(){h.backspace(n,a)},h.backDelay)}else{0===a&&h.options.preStringTyped(h.arrayPos);var t=n.substr(0,a+1);h.attr?h.el.attr(h.attr,t):h.isInput?h.el.val(t):"html"===h.contentType?h.el.html(t):h.el.text(t),a++,h.typewrite(n,a)}},t)},t)}},backspace:function(e,i){if(this.stop!==!0){var t=Math.round(70*Math.random())+this.backSpeed,r=this;r.timeout=setTimeout(function(){if("html"===r.contentType&&">"===e.substr(i).charAt(0)){for(var t="";"<"!==e.substr(i-1).charAt(0);)t-=e.substr(i).charAt(0),i--;i--,t+="<"}var s=e.substr(0,i);r.attr?r.el.attr(r.attr,s):r.isInput?r.el.val(s):"html"===r.contentType?r.el.html(s):r.el.text(s),i>r.stopNum?(i--,r.backspace(e,i)):i<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.shuffle&&(r.sequence=r.shuffleArray(r.sequence)),r.init()):r.typewrite(r.strings[r.sequence[r.arrayPos]],i))},t)}},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.attr("id");this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},r.fn.typed=function(i){return this.each(function(){var t=r(this),s=t.data("typed"),e="object"==typeof i&&i;s&&s.reset(),t.data("typed",s=new o(this,e)),"string"==typeof i&&s[i]()})},r.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);
;(function($){"use strict";var LagiClientLogoAnimationHandler=function($scope,$){$(".client-logo-inner").each(function(){var item=$(this).find(".lagi-client-logo-item");if(item.length>0){var bodyWidth=$("body").width();if(bodyWidth<768){bodyWidth=1000}
$(this).css("min-width",bodyWidth)}})};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-client-logo-animation.default",LagiClientLogoAnimationHandler)})})(jQuery)
;(function($){"use strict";const lagiVerticalTabsHandler=function($scope,$){const $element=$scope.find(".lagi-vertical-tabs");const content=$element.find('.content-vertical-tabs');const autoPlay=content.data('autoplay');const time=content.data('time');const youtubeIframe=$element.find('iframe');let currentTab=0;function reloadYouTubeVideo(){const src=youtubeIframe.attr('src');youtubeIframe.attr('src',src)}
function activeTab(obj){$element.find("ul li").removeClass("active");$element.find(obj).addClass("active");const id=$element.find(obj).find("a").attr("href");$element.find(".vertical-tabs-item").hide();$element.find(id).show();reloadYouTubeVideo()}
function autoPlayTab(){const tabs=$element.find(".nav-vertical-tabs li");if(currentTab>=tabs.length){currentTab=0}
activeTab(tabs[currentTab]);currentTab++;setTimeout(autoPlayTab,time)}
$element.find(".nav-vertical-tabs li").click(function(e){e.preventDefault()
activeTab(this);return!1});if(autoPlay=='yes'){setTimeout(autoPlayTab,time)}else{activeTab($element.find("li:first-child"))}};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-vertical-tabs.default",lagiVerticalTabsHandler)})})(jQuery)
;(function($){"use strict";var LagiPricingTableHandler=function($scope,$){};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-pricing-table.default",LagiPricingTableHandler)})})(jQuery)
;(function($){"use strict";var LagiToggleHandler=function($scope,$){function caculate_pricing_li_height($param){var height=[];var sum_li=0;$(".lagi-pricing-features").each(function(){var li=$(this).attr("data-count");if(li>sum_li){sum_li=li}});for(let i=0;i<sum_li;i++){$param.find(".lagi-pricing-features").each(function(){var item_height=$(this).find("li:nth-child("+(i+1)+")").innerHeight();if(height.hasOwnProperty(i)){if(item_height>height[i]){height[i]=item_height}}else{height.push(item_height)}})}
for(let j=0;j<=height.length;j++){$param.find(".lagi-pricing-features li:nth-child( "+(j+1)+" )").css("height",height[j]+"px")}}
if($(".lagi-pricing-plan").hasClass("sercondary")){caculate_pricing_li_height($(".pricing-plan-item.pricing-plan-sercondary"))}else{caculate_pricing_li_height($(".pricing-plan-item.pricing-plan-primary"))}
$(".lagi-pricing-plan .switch").on("click",function(e){e.preventDefault();var _this=$(this),item=$(this).parents(".lagi-pricing-plan").find(".pricing-plan-item");$(".lagi-pricing-plan .switch-label .switch").removeClass("active");_this.toggleClass("active");item.each(function(){if($(this).hasClass("active")){$(this).removeClass("active")}else{$(this).addClass("active")}});if(_this.closest(".lagi-pricing-plan").hasClass("sercondary")){caculate_pricing_li_height($(".pricing-plan-item.pricing-plan-primary"))}else{caculate_pricing_li_height($(".pricing-plan-item.pricing-plan-sercondary"))}})};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-content-toggle.default",LagiToggleHandler)})})(jQuery)
;(function($){"use strict";var SwiperHandler=function($scope,$){var $element=$scope.find(".lagi-slider-widget");$element.LagiSwiper()};var SwiperLinkedHandler=function($scope,$){var $element=$scope.find(".lagi-slider-widget");if($scope.hasClass("lagi-swiper-linked-yes")){var thumbsSlider=new Swiper(".lagi-thumbs-swiper",{loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,});var mainSlider=$element.filter(".lagi-main-swiper").LagiSwiper({thumbs:{swiper:thumbsSlider,},})}else{$element.LagiSwiper()}};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/lagi-image-carousel.default",SwiperHandler);elementorFrontend.hooks.addAction("frontend/element_ready/lagi-modern-carousel.default",SwiperHandler);elementorFrontend.hooks.addAction("frontend/element_ready/lagi-modern-slider.default",SwiperHandler);elementorFrontend.hooks.addAction("frontend/element_ready/lagi-team-member-carousel.default",SwiperHandler);elementorFrontend.hooks.addAction("frontend/element_ready/lagi-product-carousel.default",SwiperHandler);elementorFrontend.hooks.addAction("frontend/element_ready/lagi-testimonial.default",SwiperLinkedHandler)})})(jQuery)
;/*! elementor - v3.17.0 - 08-11-2023 */
(()=>{"use strict";var e,r,_,t,a,i={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return i[e].call(_.exports,_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=i,e=[],__webpack_require__.O=(r,_,t,a)=>{if(!_){var i=1/0;for(u=0;u<e.length;u++){for(var[_,t,a]=e[u],n=!0,c=0;c<_.length;c++)(!1&a||i>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,a<i&&(i=a));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[_,t,a]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);__webpack_require__.r(a);var i={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,__webpack_require__.d(a,i),a},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.1b6e05e0607040eb8929.bundle.min.js":48===e?"text-path.b50b3e74488a4e302613.bundle.min.js":209===e?"accordion.8799675460c73eb48972.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js":181===e?"toggle.31881477c45ff5cf9d4d.bundle.min.js":791===e?"video.fea4f8dfdf17262f23e8.bundle.min.js":268===e?"image-carousel.4455c6362492d9067512.bundle.min.js":357===e?"text-editor.2c35aafbe5bf0e127950.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.284c9bf9b36eadd05080.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},a="elementor:",__webpack_require__.l=(e,r,_,i)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",a+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");if(_.length)for(var t=_.length-1;t>-1&&!e;)e=_[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var a=new Promise(((_,a)=>t=e[r]=[_,a]));_.push(t[2]=a);var i=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(i,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var a=_&&("load"===_.type?"missing":_.type),i=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",n.name="ChunkLoadError",n.type=a,n.request=i,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,a,[i,n,c]=_,o=0;if(i.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<i.length;o++)a=i[o],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();
;/*! elementor - v3.17.0 - 08-11-2023 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{381:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{t=Array.isArray(t)?t:[t];for(const n of t)if(e.constructor.name===n.prototype[Symbol.toStringTag])return!0;return!1}},8135:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$elements:this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}}getDocumentSettings(e){let t;if(this.isEdit){t={};const e=elementor.settings.page.model;jQuery.each(e.getActiveControls(),(n=>{t[n]=e.attributes[n]}))}else t=this.$element.data("elementor-settings")||{};return this.getItems(t,e)}runElementsHandlers(){this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))})):this.runElementsHandlers()}onSettingsChange(){}}t.default=_default},6752:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090));class NestedTitleKeyboardHandler extends r.default{__construct(e){super.__construct(e),this.directionNext="next",this.directionPrevious="previous",this.focusableElementSelector='audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])'}getDefaultSettings(){return{selectors:{itemTitle:".e-n-tab-title",itemContainer:".e-n-tabs-content > .e-con"},ariaAttributes:{titleStateAttribute:"aria-selected",activeTitleSelector:'[aria-selected="true"]'},datasets:{titleIndex:"data-tab-index"},keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?this.directionNext:this.directionPrevious,ArrowUp:this.directionPrevious,ArrowRight:elementorFrontendConfig.is_rtl?this.directionPrevious:this.directionNext,ArrowDown:this.directionNext}}}getDefaultElements(){const e=this.getSettings("selectors");return{$itemTitles:this.findElement(e.itemTitle),$itemContainers:this.findElement(e.itemContainer),$focusableContainerElements:this.getFocusableElements(this.findElement(e.itemContainer))}}getFocusableElements(e){return e.find(this.focusableElementSelector).not("[disabled], [inert]")}getKeyDirectionValue(e){const t=this.getSettings("keyDirection")[e.key];return this.directionNext===t?1:-1}getTitleIndex(e){const{titleIndex:t}=this.getSettings("datasets");return e.getAttribute(t)}getTitleFilterSelector(e){const{titleIndex:t}=this.getSettings("datasets");return`[${t}="${e}"]`}getActiveTitleElement(){const e=this.getSettings("ariaAttributes").activeTitleSelector;return this.elements.$itemTitles.filter(e)}onInit(){super.onInit(...arguments)}bindEvents(){this.elements.$itemTitles.on(this.getTitleEvents()),this.elements.$focusableContainerElements.on(this.getContentElementEvents())}unbindEvents(){this.elements.$itemTitles.off(),this.elements.$itemContainers.children().off()}getTitleEvents(){return{keydown:this.handleTitleKeyboardNavigation.bind(this)}}getContentElementEvents(){return{keydown:this.handleContentElementKeyboardNavigation.bind(this)}}isDirectionKey(e){return["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)}isActivationKey(e){return["Enter"," "].includes(e.key)}handleTitleKeyboardNavigation(e){if(this.isDirectionKey(e)){e.preventDefault();const t=parseInt(this.getTitleIndex(e.currentTarget))||1,n=this.elements.$itemTitles.length,i=this.getTitleIndexFocusUpdated(e,t,n);this.changeTitleFocus(i),e.stopPropagation()}else if(this.isActivationKey(e)){if(e.preventDefault(),this.handeTitleLinkEnterOrSpaceEvent(e))return;const t=this.getTitleIndex(e.currentTarget);elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard",{widgetId:this.getID(),titleIndex:t})}else"Escape"===e.key&&this.handleTitleEscapeKeyEvents(e)}handeTitleLinkEnterOrSpaceEvent(e){const t="a"===e?.currentTarget?.tagName?.toLowerCase();return!elementorFrontend.isEditMode()&&t&&(e?.currentTarget?.click(),e.stopPropagation()),t}getTitleIndexFocusUpdated(e,t,n){let i=0;switch(e.key){case"Home":i=1;break;case"End":i=n;break;default:const r=this.getKeyDirectionValue(e);i=n<t+r?1:0===t+r?n:t+r}return i}changeTitleFocus(e){const t=this.elements.$itemTitles.filter(this.getTitleFilterSelector(e));this.setTitleTabindex(e),t.trigger("focus")}setTitleTabindex(e){this.elements.$itemTitles.attr("tabindex","-1");this.elements.$itemTitles.filter(this.getTitleFilterSelector(e)).attr("tabindex","0")}handleTitleEscapeKeyEvents(){}handleContentElementKeyboardNavigation(e){"Tab"!==e.key||e.shiftKey?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),this.handleContentElementEscapeEvents(e)):this.handleContentElementTabEvents(e)}handleContentElementEscapeEvents(){this.getActiveTitleElement().trigger("focus")}handleContentElementTabEvents(){}}t.default=NestedTitleKeyboardHandler},1292:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2821));class CarouselHandlerBase extends r.default{getDefaultSettings(){return{selectors:{carousel:`.${elementorFrontend.config.swiperClass}`,swiperWrapper:".swiper-wrapper",slideContent:".swiper-slide",swiperArrow:".elementor-swiper-button",paginationWrapper:".swiper-pagination",paginationBullet:".swiper-pagination-bullet",paginationBulletWrapper:".swiper-pagination-bullets"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$swiperContainer:this.$element.find(e.carousel),$swiperWrapper:this.$element.find(e.swiperWrapper),$swiperArrows:this.$element.find(e.swiperArrow),$paginationWrapper:this.$element.find(e.paginationWrapper),$paginationBullets:this.$element.find(e.paginationBullet),$paginationBulletWrapper:this.$element.find(e.paginationBulletWrapper)};return t.$slides=t.$swiperContainer.find(e.slideContent),t}getSwiperSettings(){const e=this.getElementSettings(),t=+e.slides_to_show||3,n=1===t,i=elementorFrontend.config.responsive.activeBreakpoints,r={mobile:1,tablet:n?1:2},s={slidesPerView:t,loop:"yes"===e.infinite,speed:e.speed,handleElementorBreakpoints:!0,breakpoints:{}};let o=t;Object.keys(i).reverse().forEach((t=>{const n=r[t]?r[t]:o;s.breakpoints[i[t].value]={slidesPerView:+e["slides_to_show_"+t]||n,slidesPerGroup:+e["slides_to_scroll_"+t]||1},e.image_spacing_custom&&(s.breakpoints[i[t].value].spaceBetween=this.getSpaceBetween(t)),o=+e["slides_to_show_"+t]||n})),"yes"===e.autoplay&&(s.autoplay={delay:e.autoplay_speed,disableOnInteraction:"yes"===e.pause_on_interaction}),n?(s.effect=e.effect,"fade"===e.effect&&(s.fadeEffect={crossFade:!0})):s.slidesPerGroup=+e.slides_to_scroll||1,e.image_spacing_custom&&(s.spaceBetween=this.getSpaceBetween());const a="arrows"===e.navigation||"both"===e.navigation,l="dots"===e.navigation||"both"===e.navigation||e.pagination;return a&&(s.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),l&&(s.pagination={el:`.elementor-element-${this.getID()} .swiper-pagination`,type:e.pagination?e.pagination:"bullets",clickable:!0,renderBullet:(e,t)=>`<span class="${t}" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e+1}"></span>`}),"yes"===e.lazyload&&(s.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),s.a11y={enabled:!0,prevSlideMessage:elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,nextSlideMessage:elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,firstSlideMessage:elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,lastSlideMessage:elementorFrontend.config.i18n.a11yCarouselLastSlideMessage},s.on={slideChangeTransitionEnd:()=>{this.a11ySetSlideAriaHidden()},slideChange:()=>{this.a11ySetPaginationTabindex(),this.handleElementHandlers()},init:()=>{this.a11ySetWidgetAriaDetails(),this.a11ySetPaginationTabindex(),this.a11ySetSlideAriaHidden("initialisation")}},this.applyOffsetSettings(e,s,t),s}getOffsetWidth(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"offset_width","size",e)||0}applyOffsetSettings(e,t,n){const i=e.offset_sides;if(elementorFrontend.isEditMode()&&"NestedCarousel"===this.constructor.name||!i||"none"===i)return;this.getOffsetWidth();switch(i){case"right":this.forceSliderToShowNextSlideWhenOnLast(t,n),this.addClassToSwiperContainer("offset-right");break;case"left":this.addClassToSwiperContainer("offset-left");break;case"both":this.forceSliderToShowNextSlideWhenOnLast(t,n),this.addClassToSwiperContainer("offset-both")}}forceSliderToShowNextSlideWhenOnLast(e,t){e.slidesPerView=t+.001}addClassToSwiperContainer(e){this.getDefaultElements().$swiperContainer[0].classList.add(e)}async onInit(){if(super.onInit(...arguments),!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;const e=elementorFrontend.utils.swiper;this.swiper=await new e(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper);"yes"===this.getElementSettings().pause_on_hover&&this.togglePauseOnHover(!0)}bindEvents(){this.elements.$swiperArrows.on("keydown",this.onDirectionArrowKeydown.bind(this)),this.elements.$paginationWrapper.on("keydown",".swiper-pagination-bullet",this.onDirectionArrowKeydown.bind(this)),this.elements.$swiperContainer.on("keydown",".swiper-slide",this.onDirectionArrowKeydown.bind(this)),this.$element.find(":focusable").on("focus",this.onFocusDisableAutoplay.bind(this)),elementorFrontend.elements.$window.on("resize",this.getSwiperSettings.bind(this))}unbindEvents(){this.elements.$swiperArrows.off(),this.elements.$paginationWrapper.off(),this.elements.$swiperContainer.off(),this.$element.find(":focusable").off(),elementorFrontend.elements.$window.off("resize")}onDirectionArrowKeydown(e){const t=elementorFrontend.config.is_rtl,n=e.originalEvent.code,i=t?"ArrowLeft":"ArrowRight";if(!(-1!==["ArrowLeft","ArrowRight"].indexOf(n)))return!0;(t?"ArrowRight":"ArrowLeft")===n?this.swiper.slidePrev():i===n&&this.swiper.slideNext()}onFocusDisableAutoplay(){this.swiper.autoplay.stop()}updateSwiperOption(e){const t=this.getElementSettings()[e],n=this.swiper.params;switch(e){case"autoplay_speed":n.autoplay.delay=t;break;case"speed":n.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",arrows_position:"arrows_position"}}onElementChange(e){if(0===e.indexOf("image_spacing_custom"))return void this.updateSpaceBetween(e);if(this.getChangeableProperties()[e])if("pause_on_hover"===e){const e=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===e)}else this.updateSwiperOption(e)}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}getSpaceBetween(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"image_spacing_custom","size",e)||0}updateSpaceBetween(e){const t=e.match("image_spacing_custom_(.*)"),n=t?t[1]:"desktop",i=this.getSpaceBetween(n);"desktop"!==n&&(this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween=i),this.swiper.params.spaceBetween=i,this.swiper.update()}getPaginationBullets(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"array";const t=this.$element.find(this.getSettings("selectors").paginationBullet);return"array"===e?Array.from(t):t}a11ySetWidgetAriaDetails(){const e=this.$element;e.attr("aria-roledescription","carousel"),e.attr("aria-label",elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel)}a11ySetPaginationTabindex(){const e=this.swiper?.params.pagination.bulletClass,t=this.swiper?.params.pagination.bulletActiveClass;this.getPaginationBullets().forEach((e=>{e.classList?.contains(t)||e.removeAttribute("tabindex")}));const n="ArrowLeft"===event?.code||"ArrowRight"===event?.code;event?.target?.classList?.contains(e)&&n&&this.$element.find(`.${t}`).trigger("focus")}getSwiperWrapperTranformXValue(){let e=this.elements.$swiperWrapper[0]?.style.transform;return e=e.replace("translate3d(",""),e=e.split(","),e=parseInt(e[0].replace("px","")),e||0}a11ySetSlideAriaHidden(){if("number"!=typeof("initialisation"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")?0:this.swiper?.activeIndex))return;const e=this.getSwiperWrapperTranformXValue(),t=this.elements.$swiperWrapper[0].clientWidth;this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((n,i)=>{0<=i.offsetLeft+e&&t>i.offsetLeft+e?(i.removeAttribute("aria-hidden"),i.removeAttribute("inert")):(i.setAttribute("aria-hidden",!0),i.setAttribute("inert",""))}))}handleElementHandlers(){}}t.default=CarouselHandlerBase},2821:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090));class SwiperHandlerBase extends r.default{getInitialSlide(){const e=this.getEditSettings();return e.activeItemIndex?e.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const e=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(e.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+e.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+e.classes.slideBackground),this.$activeImageBg.addClass(e.classes.kenBurnsActive)}}t.default=SwiperHandlerBase},3090:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(e){this.isActive(e)&&(this.$element=e.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:()=>!0,isElementInTheCurrentDocument(){return!!elementorFrontend.isEditMode()&&elementor.documents.currentDocument.id.toString()===this.$element[0].closest(".elementor").dataset.elementorId},findElement(e){var t=this.$element;return t.find(e).filter((function(){return jQuery(this).parent().closest(".elementor-element").is(t)}))},getUniqueHandlerID(e,t){return e||(e=this.getModelCID()),t||(t=this.$element),e+t.attr("data-element_type")+this.getConstructorID()},initEditorListeners(){var e=this;if(e.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback(t){t.cid===e.getModelCID()&&e.onDestroy()}}],e.onElementChange){const t=e.getWidgetType()||e.getElementType();let n="change";"global"!==t&&(n+=":"+t),e.editorListeners.push({event:n,to:elementor.channels.editor,callback(t,n){e.getUniqueHandlerID(n.model.cid,n.$el)===e.getUniqueHandlerID()&&e.onElementChange(t.model.get("name"),t,n)}})}e.onEditSettingsChange&&e.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback(t,n){if(n.model.cid!==e.getModelCID())return;const i=Object.keys(t.changed)[0];e.onEditSettingsChange(i,t.changed[i])}}),["page"].forEach((function(t){var n="on"+t[0].toUpperCase()+t.slice(1)+"SettingsChange";e[n]&&e.editorListeners.push({event:"change",to:elementor.settings[t].model,callback(t){e[n](t.changed)}})}))},getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.addListenerOnce(e,t.event,t.callback,t.to)}))},removeEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.removeListeners(e,t.event,null,t.to)}))},getElementType(){return this.$element.data("element_type")},getWidgetType(){const e=this.$element.data("widget_type");if(e)return e.split(".")[0]},getID(){return this.$element.data("id")},getModelCID(){return this.$element.data("model-cid")},getElementSettings(e){let t={};const n=this.getModelCID();if(this.isEdit&&n){const e=elementorFrontend.config.elements.data[n],i=e.attributes;let r=i.widgetType||i.elType;i.isInner&&(r="inner-"+r);let s=elementorFrontend.config.elements.keys[r];s||(s=elementorFrontend.config.elements.keys[r]=[],jQuery.each(e.controls,((e,t)=>{t.frontend_available&&s.push(e)}))),jQuery.each(e.getActiveControls(),(function(e){if(-1!==s.indexOf(e)){let n=i[e];n.toJSON&&(n=n.toJSON()),t[e]=n}}))}else t=this.$element.data("settings")||{};return this.getItems(t,e)},getEditSettings(e){var t={};return this.isEdit&&(t=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(t,e)},getCurrentDeviceSetting(e){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),e)},onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},2263:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090));class StretchedElement extends r.default{getStretchedClass(){return"e-stretched"}getStretchSettingName(){return"stretch_element"}getStretchActiveValue(){return"yes"}bindEvents(){const e=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(e,"resize",this.stretch),elementorFrontend.addListenerOnce(e,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(e,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}isActive(e){return elementorFrontend.isEditMode()||e.$element.hasClass(this.getStretchedClass())}getStretchElementForConfig(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?this.$element.find(e):this.$element}getStretchElementConfig(){return{element:this.getStretchElementForConfig(),selectors:{container:this.getStretchContainer()},considerScrollbar:elementorFrontend.isEditMode()&&elementorFrontend.config.is_rtl}}initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())}getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}isStretchSettingEnabled(){return this.getElementSettings(this.getStretchSettingName())===this.getStretchActiveValue()}stretch(){this.isStretchSettingEnabled()&&this.stretchElement.stretch()}onInit(){this.isActive(this.getSettings())&&(this.initStretch(),super.onInit(...arguments),this.stretch())}onElementChange(e){this.getStretchSettingName()===e&&(this.isStretchSettingEnabled()?this.stretch():this.stretchElement.reset())}onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}t.default=StretchedElement},6412:(e,t,n)=>{"use strict";var i=n(3203),r=i(n(5955)),s=i(n(8135)),o=i(n(5658)),a=i(n(2263)),l=i(n(3090)),c=i(n(2821)),u=i(n(1292)),d=i(n(7323)),h=i(n(32)),g=i(n(6752));r.default.frontend={Document:s.default,tools:{StretchElement:o.default},handlers:{Base:l.default,StretchedElement:a.default,SwiperBase:c.default,CarouselBase:u.default,NestedTabs:d.default,NestedAccordion:h.default,NestedTitleKeyboardHandler:g.default}}},5658:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window},considerScrollbar:!1,cssOutput:"inline"}),getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch(){const e=this.getSettings();let t;try{t=jQuery(e.selectors.container)}catch(e){}t&&t.length||(t=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var n=this.elements.$element,i=t.innerWidth(),r=n.offset().left,s="fixed"===n.css("position"),o=s?0:r,a=window===t[0];if(!a){var l=t.offset().left;s&&(o=l),r>l&&(o=r-l)}if(e.considerScrollbar&&a){o-=window.innerWidth-i}s||(elementorFrontend.config.is_rtl&&(o=i-(n.outerWidth()+o)),o=-o),e.margin&&(o+=e.margin);var c={};let u=i;e.margin&&(u-=2*e.margin),c.width=u+"px",c[e.direction]=o+"px","variables"!==e.cssOutput?n.css(c):this.applyCssVariables(n,c)},reset(){const e={},t=this.getSettings(),n=this.elements.$element;"variables"!==t.cssOutput?(e.width="",e[t.direction]="",n.css(e)):this.resetCssVariables(n)},applyCssVariables(e,t){e.css("--stretch-width",t.width),t.left?e.css("--stretch-left",t.left):e.css("--stretch-right",t.right)},resetCssVariables(e){e.css({"--stretch-width":"","--stretch-left":"","--stretch-right":""})}})},6630:(e,t)=>{"use strict";function getChildrenWidth(e){let t=0;const n=e[0].parentNode,i=getComputedStyle(n),r=parseFloat(i.gap)||0;for(let n=0;n<e.length;n++)t+=e[n].offsetWidth+r;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.changeScrollStatus=function changeScrollStatus(e,t){"mousedown"===t.type?(e.classList.add("e-scroll"),e.dataset.pageX=t.pageX):(e.classList.remove("e-scroll","e-scroll-active"),e.dataset.pageX="")},t.setHorizontalScrollAlignment=function setHorizontalScrollAlignment(e){let{element:t,direction:n,justifyCSSVariable:i,horizontalScrollStatus:r}=e;if(!t)return;!function isHorizontalScroll(e,t){return e.clientWidth<getChildrenWidth(e.children)&&"enable"===t}(t,r)?t.style.setProperty(i,""):function initialScrollPosition(e,t,n){const i=elementorFrontend.config.is_rtl;if("end"===t)e.style.setProperty(n,"start"),e.scrollLeft=i?-1*getChildrenWidth(e.children):getChildrenWidth(e.children);else e.style.setProperty(n,"start"),e.scrollLeft=0}(t,n,i)},t.setHorizontalTitleScrollValues=function setHorizontalTitleScrollValues(e,t,n){const i=e.classList.contains("e-scroll"),r="enable"===t,s=e.scrollWidth>e.clientWidth;if(!i||!r||!s)return;n.preventDefault();const o=parseFloat(e.dataset.pageX),a=n.pageX-o;let l=0;l=20<a?5:-20>a?-5:a;e.scrollLeft=e.scrollLeft-l,e.classList.add("e-scroll-active")}},2618:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(740);var r=i(n(7597)),s=i(n(381));class ArgsObject extends r.default{static getInstanceType(){return"ArgsObject"}constructor(e){super(),this.args=e}requireArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.args;if(!Object.prototype.hasOwnProperty.call(t,e))throw Error(`${e} is required.`)}requireArgumentType(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),typeof n[e]!==t)throw Error(`${e} invalid type: ${t}.`)}requireArgumentInstance(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),!(n[e]instanceof t||(0,s.default)(n[e],t)))throw Error(`${e} invalid instance.`)}requireArgumentConstructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),n[e].constructor.toString()!==t.prototype.constructor.toString())throw Error(`${e} invalid constructor type.`)}}t.default=ArgsObject},869:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ForceMethodImplementation=void 0,n(740);class ForceMethodImplementation extends Error{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`,t),Object.keys(t).length&&console.error(t),Error.captureStackTrace(this,ForceMethodImplementation)}}t.ForceMethodImplementation=ForceMethodImplementation;t.default=e=>{const t=Error().stack.split("\n")[2].trim(),n=t.startsWith("at new")?"constructor":t.split(" ")[1],i={};if(i.functionName=n,i.fullName=n,i.functionName.includes(".")){const e=i.functionName.split(".");i.className=e[0],i.functionName=e[1]}else i.isStatic=!0;throw new ForceMethodImplementation(i,e)}},7597:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class InstanceType{static[Symbol.hasInstance](e){let t=super[Symbol.hasInstance](e);if(e&&!e.constructor.getInstanceType)return t;if(e&&(e.instanceTypes||(e.instanceTypes=[]),t||this.getInstanceType()===e.constructor.getInstanceType()&&(t=!0),t)){const t=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===e.instanceTypes.indexOf(t)&&e.instanceTypes.push(t)}return!t&&e&&(t=e.instanceTypes&&Array.isArray(e.instanceTypes)&&-1!==e.instanceTypes.indexOf(this.getInstanceType())),t}static getInstanceType(){elementorModules.ForceMethodImplementation()}constructor(){let e=new.target;const t=[];for(;e.__proto__&&e.__proto__.name;)t.push(e.__proto__),e=e.__proto__;t.reverse().forEach((e=>this instanceof e))}}t.default=InstanceType},1192:(e,t,n)=>{"use strict";n(740);const Module=function(){const e=jQuery,t=arguments,n=this,i={};let r;this.getItems=function(e,t){if(t){const n=t.split("."),i=n.splice(0,1);if(!n.length)return e[i];if(!e[i])return;return this.getItems(e[i],n.join("."))}return e},this.getSettings=function(e){return this.getItems(r,e)},this.setSettings=function(t,i,s){if(s||(s=r),"object"==typeof t)return e.extend(s,t),n;const o=t.split("."),a=o.splice(0,1);return o.length?(s[a]||(s[a]={}),n.setSettings(o.join("."),i,s[a])):(s[a]=i,n)},this.getErrorMessage=function(e,t){let n;if("forceMethodImplementation"===e)n=`The method '${t}' must to be implemented in the inheritor child.`;else n="An error occurs";return n},this.forceMethodImplementation=function(e){throw new Error(this.getErrorMessage("forceMethodImplementation",e))},this.on=function(t,r){if("object"==typeof t)return e.each(t,(function(e){n.on(e,this)})),n;return t.split(" ").forEach((function(e){i[e]||(i[e]=[]),i[e].push(r)})),n},this.off=function(e,t){if(!i[e])return n;if(!t)return delete i[e],n;const r=i[e].indexOf(t);return-1!==r&&(delete i[e][r],i[e]=i[e].filter((e=>e))),n},this.trigger=function(t){const r="on"+t[0].toUpperCase()+t.slice(1),s=Array.prototype.slice.call(arguments,1);n[r]&&n[r].apply(n,s);const o=i[t];return o?(e.each(o,(function(e,t){t.apply(n,s)})),n):n},n.__construct.apply(n,t),e.each(n,(function(e){const t=n[e];"function"==typeof t&&(n[e]=function(){return t.apply(n,arguments)})})),function(){r=n.getDefaultSettings();const i=t[0];i&&e.extend(!0,r,i)}(),n.trigger("init")};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(e){const t=jQuery,n=this,child=function(){return n.apply(this,arguments)};return t.extend(child,n),(child.prototype=Object.create(t.extend({},n.prototype,e))).constructor=child,child.__super__=n.prototype,child},e.exports=Module},6516:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2640)).default.extend({getDefaultSettings:()=>({container:null,items:null,columnsCount:3,verticalSpaceBetween:30}),getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run(){var e=[],t=this.elements.$container.position().top,n=this.getSettings(),i=n.columnsCount;t+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(r){var s=Math.floor(r/i),o=jQuery(this),a=o[0].getBoundingClientRect().height+n.verticalSpaceBetween;if(s){var l=o.position(),c=r%i,u=l.top-t-e[c];u-=parseInt(o.css("margin-top"),10),u*=-1,o.css("margin-top",u+"px"),e[c]+=a}else e.push(a)}))}});t.default=r},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Scroll{static scrollObserver(e){let t=0;const n={root:e.root||null,rootMargin:e.offset||"0px",threshold:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=[];if(e>0&&e<=100){const n=100/e;for(let e=0;e<=100;e+=n)t.push(e/100)}else t.push(0);return t}(e.sensitivity)};return new IntersectionObserver((function handleIntersect(n){const i=n[0].boundingClientRect.y,r=n[0].isIntersecting,s=i<t?"down":"up",o=Math.abs(parseFloat((100*n[0].intersectionRatio).toFixed(2)));e.callback({sensitivity:e.sensitivity,isInViewport:r,scrollPercentage:o,intersectionScrollDirection:s}),t=i}),n)}static getElementViewportPercentage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e[0].getBoundingClientRect(),i=t.start||0,r=t.end||0,s=window.innerHeight*i/100,o=window.innerHeight*r/100,a=n.top-window.innerHeight,l=0-a+s,c=n.top+s+e.height()-a+o,u=Math.max(0,Math.min(l/c,1));return parseFloat((100*u).toFixed(2))}static getPageScrollPercentage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const n=e.start||0,i=e.end||0,r=t||document.documentElement.scrollHeight-document.documentElement.clientHeight,s=r*n/100,o=r+s+r*i/100;return(document.documentElement.scrollTop+document.body.scrollTop+s)/o*100}}},2640:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(1192)).default.extend({elements:null,getDefaultElements:()=>({}),bindEvents(){},onInit(){this.initElements(),this.bindEvents()},initElements(){this.elements=this.getDefaultElements()}});t.default=r},5955:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(1192)),s=i(n(2640)),o=i(n(2618)),a=i(n(6516)),l=i(n(400)),c=i(n(869)),u=window.elementorModules={Module:r.default,ViewModule:s.default,ArgsObject:o.default,ForceMethodImplementation:c.default,utils:{Masonry:a.default,Scroll:l.default}};t.default=u},7148:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(6752));class NestedAccordionTitleKeyboardHandler extends r.default{__construct(){super.__construct(...arguments);const e=arguments.length<=0?void 0:arguments[0];this.toggleTitle=e.toggleTitle}getDefaultSettings(){return{...super.getDefaultSettings(),selectors:{itemTitle:".e-n-accordion-item-title",itemContainer:".e-n-accordion-item > .e-con"},ariaAttributes:{titleStateAttribute:"aria-expanded",activeTitleSelector:'[aria-expanded="true"]'},datasets:{titleIndex:"data-accordion-index"}}}handeTitleLinkEnterOrSpaceEvent(e){this.toggleTitle(e)}handleContentElementEscapeEvents(e){this.getActiveTitleElement().trigger("focus"),this.toggleTitle(e)}handleTitleEscapeKeyEvents(e){const t=e?.currentTarget?.parentElement,n=t?.open;n&&this.toggleTitle(e)}}t.default=NestedAccordionTitleKeyboardHandler},32:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090)),s=i(n(7148));class NestedAccordion extends r.default{constructor(){super(...arguments),this.animations=new Map}getDefaultSettings(){return{selectors:{accordion:".e-n-accordion",accordionContentContainers:".e-n-accordion > .e-con",accordionItems:".e-n-accordion-item",accordionItemTitles:".e-n-accordion-item-title",accordionContent:".e-n-accordion-item > .e-con",accordionWrapper:".e-n-accordion-item"},default_state:"expanded"}}getDefaultElements(){const e=this.getSettings("selectors");return{$accordion:this.findElement(e.accordion),$contentContainers:this.findElement(e.accordionContentContainers),$accordionItems:this.findElement(e.accordionItems),$accordionTitles:this.findElement(e.accordionItemTitles),$accordionContent:this.findElement(e.accordionContent)}}onInit(){super.onInit(...arguments),elementorFrontend.isEditMode()&&this.interlaceContainers(),this.injectKeyboardHandler()}injectKeyboardHandler(){"nested-accordion.default"===this.getSettings("elementName")&&new s.default({$element:this.$element,toggleTitle:this.clickListener.bind(this)})}interlaceContainers(){const{$contentContainers:e,$accordionItems:t}=this.getDefaultElements();e.each(((e,n)=>{t[e].appendChild(n)}))}bindEvents(){this.elements.$accordionTitles.on("click",this.clickListener.bind(this))}unbindEvents(){this.elements.$accordionTitles.off()}clickListener(e){e.preventDefault();const t=this.getSettings(),n=e?.currentTarget?.closest(t.selectors.accordionWrapper),i=n.querySelector(t.selectors.accordionItemTitles),r=n.querySelector(t.selectors.accordionContent),{max_items_expended:s}=this.getElementSettings(),{$accordionTitles:o,$accordionItems:a}=this.elements;"one"===s&&this.closeAllItems(a,o),n.open?this.closeAccordionItem(n,i):this.prepareOpenAnimation(n,i,r)}animateItem(e,t,n,i){e.style.overflow="hidden";let r=this.animations.get(e);r&&r.cancel(),r=e.animate({height:[t,n]},{duration:this.getAnimationDuration()}),r.onfinish=()=>this.onAnimationFinish(e,i),this.animations.set(e,r),e.querySelector("summary")?.setAttribute("aria-expanded",i)}closeAccordionItem(e,t){const n=`${e.offsetHeight}px`,i=`${t.offsetHeight}px`;this.animateItem(e,n,i,!1)}prepareOpenAnimation(e,t,n){e.style.overflow="hidden",e.style.height=`${e.offsetHeight}px`,e.open=!0,window.requestAnimationFrame((()=>this.openAccordionItem(e,t,n)))}openAccordionItem(e,t,n){const i=`${e.offsetHeight}px`,r=`${t.offsetHeight+n.offsetHeight}px`;this.animateItem(e,i,r,!0)}onAnimationFinish(e,t){e.open=t,this.animations.set(e,null),e.style.height=e.style.overflow=""}closeAllItems(e,t){t.each(((t,n)=>{this.closeAccordionItem(e[t],n)}))}getAnimationDuration(){const{size:e,unit:t}=this.getElementSettings("n_accordion_animation_duration");return e*("ms"===t?1:1e3)}}t.default=NestedAccordion},7323:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090)),s=n(6630);class NestedTabs extends r.default{constructor(){super(...arguments),this.resizeListenerNestedTabs=null}getTabTitleFilterSelector(e){return`[data-tab-index="${e}"]`}getTabContentFilterSelector(e){return`*:nth-child(${e})`}getTabIndex(e){return e.getAttribute("data-tab-index")}getDefaultSettings(){return{selectors:{widgetContainer:".e-n-tabs",tabTitle:".e-n-tab-title",tabContent:".e-n-tabs-content > .e-con",headingContainer:".e-n-tabs-heading",activeTabContentContainers:".e-con.e-active"},classes:{active:"e-active"},ariaAttributes:{titleStateAttribute:"aria-selected",activeTitleSelector:'[aria-selected="true"]'},showTabFn:"show",hideTabFn:"hide",toggleSelf:!1,hidePrevious:!0,autoExpand:!0}}getDefaultElements(){const e=this.getSettings("selectors");return{$tabTitles:this.findElement(e.tabTitle),$tabContents:this.findElement(e.tabContent),$headingContainer:this.findElement(e.headingContainer)}}getKeyboardNavigationSettings(){return this.getSettings()}activateDefaultTab(){const e=this.getSettings(),t=this.getEditSettings("activeItemIndex")||1,n={showTabFn:e.showTabFn,hideTabFn:e.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(t),this.setSettings(n)}deactivateActiveTab(e){const t=this.getSettings(),n=t.classes.active,i=t.ariaAttributes.activeTitleSelector,r="."+n,s=this.elements.$tabTitles.filter(i),o=this.elements.$tabContents.filter(r);return this.setTabDeactivationAttributes(s,e),o.removeClass(n),o[t.hideTabFn](0,(()=>this.onHideTabContent(o))),o}getTitleActivationAttributes(){return{tabindex:"0",[this.getSettings("ariaAttributes").titleStateAttribute]:"true"}}setTabDeactivationAttributes(e){const t=this.getSettings("ariaAttributes").titleStateAttribute;e.attr({tabindex:"-1",[t]:"false"})}onHideTabContent(){}activateTab(e){const t=this.getSettings(),n=t.classes.active,i="show"===t.showTabFn?0:400;let r=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));if(!r.length){const t=Math.max(e-1,1);r=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))}r.attr(this.getTitleActivationAttributes()),s.addClass(n),s[t.showTabFn](i,(()=>this.onShowTabContent(s)))}onShowTabContent(e){elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate",e),elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")}isActiveTab(e){return"true"===this.elements.$tabTitles.filter('[data-tab-index="'+e+'"]').attr(this.getSettings("ariaAttributes").titleStateAttribute)}onTabClick(e){e.preventDefault(),this.changeActiveTab(e.currentTarget?.getAttribute("data-tab-index"),!0)}getTabEvents(){return{click:this.onTabClick.bind(this)}}getHeadingEvents(){const e=this.elements.$headingContainer[0];return{mousedown:s.changeScrollStatus.bind(this,e),mouseup:s.changeScrollStatus.bind(this,e),mouseleave:s.changeScrollStatus.bind(this,e),mousemove:s.setHorizontalTitleScrollValues.bind(this,e,this.getHorizontalScrollSetting())}}bindEvents(){this.elements.$tabTitles.on(this.getTabEvents()),this.elements.$headingContainer.on(this.getHeadingEvents());const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};this.resizeListenerNestedTabs=s.setHorizontalScrollAlignment.bind(this,e),elementorFrontend.elements.$window.on("resize",this.resizeListenerNestedTabs),elementorFrontend.elements.$window.on("resize",this.setTouchMode.bind(this)),elementorFrontend.elements.$window.on("elementor/nested-tabs/activate",this.reInitSwipers),elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard",this.changeActiveTabByKeyboard.bind(this))}unbindEvents(){this.elements.$tabTitles.off(),this.elements.$headingContainer.off(),this.elements.$tabContents.children().off(),elementorFrontend.elements.$window.off("resize"),elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")}reInitSwipers(e,t){const n=t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);for(const e of n){if(!e.swiper)return;e.swiper.initialized=!1,e.swiper.init()}}onInit(){super.onInit(...arguments),this.getSettings("autoExpand")&&this.activateDefaultTab();const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,s.setHorizontalScrollAlignment)(e),this.setTouchMode(),"nested-tabs.default"===this.getSettings("elementName")&&new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings())}onEditSettingsChange(e,t){"activeItemIndex"===e&&this.changeActiveTab(t,!1)}onElementChange(e){if(this.checkSliderPropsToWatch(e)){const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,s.setHorizontalScrollAlignment)(e)}}checkSliderPropsToWatch(e){return 0===e.indexOf("horizontal_scroll")||"breakpoint_selector"===e||0===e.indexOf("tabs_justify_horizontal")||0===e.indexOf("tabs_title_space_between")}changeActiveTab(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.isEdit&&this.isElementInTheCurrentDocument())return window.top.$e.run("document/repeater/select",{container:elementor.getContainer(this.$element.attr("data-id")),index:parseInt(e)});const t=this.isActiveTab(e),n=this.getSettings();if(!n.toggleSelf&&t||!n.hidePrevious||this.deactivateActiveTab(e),!n.hidePrevious&&t&&this.deactivateActiveTab(e),!t){if(this.isAccordionVersion())return void this.activateMobileTab(e);this.activateTab(e)}}changeActiveTabByKeyboard(e,t){t.widgetId===this.getID()&&this.changeActiveTab(t.titleIndex,!0)}activateMobileTab(e){setTimeout((()=>{this.activateTab(e),this.forceActiveTabToBeInViewport(e)}),10)}forceActiveTabToBeInViewport(e){if(!elementorFrontend.isEditMode())return;const t=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e));elementor.helpers.isInViewport(t[0])||t[0].scrollIntoView({block:"center"})}getActiveClass(){return this.getSettings().classes.active}getTabsDirection(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"tabs_justify_horizontal","",e)}getHorizontalScrollSetting(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"horizontal_scroll","",e)}isAccordionVersion(){return"contents"===this.elements.$headingContainer.css("display")}setTouchMode(){const e=this.getSettings("selectors").widgetContainer;if(elementorFrontend.isEditMode()||"resize"===event?.type){const t=["mobile","mobile_extra","tablet","tablet_extra"],n=elementorFrontend.getCurrentDeviceMode();if(-1!==t.indexOf(n))return void this.$element.find(e).attr("data-touch-mode","true")}else if("ontouchstart"in window)return void this.$element.find(e).attr("data-touch-mode","true");this.$element.find(e).attr("data-touch-mode","false")}}t.default=NestedTabs},5089:(e,t,n)=>{"use strict";var i=n(930),r=n(9268),s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not a function")}},1378:(e,t,n)=>{"use strict";var i=n(930),r=String,s=TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+r(e)+" as a prototype")}},6112:(e,t,n)=>{"use strict";var i=n(8759),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not an object")}},6198:(e,t,n)=>{"use strict";var i=n(4088),r=n(7740),s=n(2871),createMethod=function(e){return function(t,n,o){var a,l=i(t),c=s(l),u=r(o,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},2306:(e,t,n)=>{"use strict";var i=n(8240),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},375:(e,t,n)=>{"use strict";var i=n(2371),r=n(930),s=n(2306),o=n(211)("toStringTag"),a=Object,l="Arguments"==s(function(){return arguments}());e.exports=i?s:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=a(e),o))?n:l?s(t):"Object"==(i=s(t))&&r(t.callee)?"Arguments":i}},8474:(e,t,n)=>{"use strict";var i=n(9606),r=n(6095),s=n(4399),o=n(7826);e.exports=function(e,t,n){for(var a=r(t),l=o.f,c=s.f,u=0;u<a.length;u++){var d=a[u];i(e,d)||n&&i(n,d)||l(e,d,c(t,d))}}},2585:(e,t,n)=>{"use strict";var i=n(5283),r=n(7826),s=n(5736);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5736:e=>{"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1343:(e,t,n)=>{"use strict";var i=n(930),r=n(7826),s=n(3712),o=n(9444);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(i(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(e){}l?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9444:(e,t,n)=>{"use strict";var i=n(2086),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},5283:(e,t,n)=>{"use strict";var i=n(3677);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7886:e=>{"use strict";var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},821:(e,t,n)=>{"use strict";var i=n(2086),r=n(8759),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4999:e=>{"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},1448:(e,t,n)=>{"use strict";var i,r,s=n(2086),o=n(4999),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=(i=u.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(!(i=o.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/))&&(r=+i[1]),e.exports=r},8684:e=>{"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79:(e,t,n)=>{"use strict";var i=n(8240),r=Error,s=i("".replace),o=String(r("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!r.prepareStackTrace)for(;t--;)e=s(e,a,"");return e}},8395:(e,t,n)=>{"use strict";var i=n(2585),r=n(79),s=n(2114),o=Error.captureStackTrace;e.exports=function(e,t,n,a){s&&(o?o(e,t):i(e,"stack",r(n,a)))}},2114:(e,t,n)=>{"use strict";var i=n(3677),r=n(5736);e.exports=!i((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},1695:(e,t,n)=>{"use strict";var i=n(2086),r=n(4399).f,s=n(2585),o=n(1343),a=n(9444),l=n(8474),c=n(7189);e.exports=function(e,t){var n,u,d,h,g,p=e.target,f=e.global,m=e.stat;if(n=f?i:m?i[p]||a(p,{}):(i[p]||{}).prototype)for(u in t){if(h=t[u],d=e.dontCallGetSet?(g=r(n,u))&&g.value:n[u],!c(f?u:p+(m?".":"#")+u,e.forced)&&void 0!==d){if(typeof h==typeof d)continue;l(h,d)}(e.sham||d&&d.sham)&&s(h,"sham",!0),o(n,u,h,e)}}},3677:e=>{"use strict";e.exports=function(e){try{return!!e()}catch(e){return!0}}},7258:(e,t,n)=>{"use strict";var i=n(6059),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},6059:(e,t,n)=>{"use strict";var i=n(3677);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9413:(e,t,n)=>{"use strict";var i=n(6059),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},4398:(e,t,n)=>{"use strict";var i=n(5283),r=n(9606),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function something(){}.name,c=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1518:(e,t,n)=>{"use strict";var i=n(8240),r=n(5089);e.exports=function(e,t,n){try{return i(r(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(e){}}},8240:(e,t,n)=>{"use strict";var i=n(6059),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);e.exports=i?o:function(e){return function(){return s.apply(e,arguments)}}},563:(e,t,n)=>{"use strict";var i=n(2086),r=n(930);e.exports=function(e,t){return arguments.length<2?(n=i[e],r(n)?n:void 0):i[e]&&i[e][t];var n}},2964:(e,t,n)=>{"use strict";var i=n(5089),r=n(1858);e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},2086:function(e,t,n){"use strict";var check=function(e){return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},9606:(e,t,n)=>{"use strict";var i=n(8240),r=n(3060),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function hasOwn(e,t){return s(r(e),t)}},7153:e=>{"use strict";e.exports={}},6761:(e,t,n)=>{"use strict";var i=n(5283),r=n(3677),s=n(821);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5974:(e,t,n)=>{"use strict";var i=n(8240),r=n(3677),s=n(2306),o=Object,a=i("".split);e.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},5070:(e,t,n)=>{"use strict";var i=n(930),r=n(8759),s=n(7530);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},9277:(e,t,n)=>{"use strict";var i=n(8240),r=n(930),s=n(4489),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8945:(e,t,n)=>{"use strict";var i=n(8759),r=n(2585);e.exports=function(e,t){i(t)&&"cause"in t&&r(e,"cause",t.cause)}},3278:(e,t,n)=>{"use strict";var i,r,s,o=n(640),a=n(2086),l=n(8759),c=n(2585),u=n(9606),d=n(4489),h=n(8944),g=n(7153),p="Object already initialized",f=a.TypeError,m=a.WeakMap;if(o||d.state){var v=d.state||(d.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,i=function(e,t){if(v.has(e))throw f(p);return t.facade=e,v.set(e,t),t},r=function(e){return v.get(e)||{}},s=function(e){return v.has(e)}}else{var b=h("state");g[b]=!0,i=function(e,t){if(u(e,b))throw f(p);return t.facade=e,c(e,b,t),t},r=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:i,get:r,has:s,enforce:function(e){return s(e)?r(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw f("Incompatible receiver, "+e+" required");return n}}}},930:(e,t,n)=>{"use strict";var i=n(7886),r=i.all;e.exports=i.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},7189:(e,t,n)=>{"use strict";var i=n(3677),r=n(930),s=/#|\.prototype\./,isForced=function(e,t){var n=a[o(e)];return n==c||n!=l&&(r(t)?i(t):!!t)},o=isForced.normalize=function(e){return String(e).replace(s,".").toLowerCase()},a=isForced.data={},l=isForced.NATIVE="N",c=isForced.POLYFILL="P";e.exports=isForced},1858:e=>{"use strict";e.exports=function(e){return null==e}},8759:(e,t,n)=>{"use strict";var i=n(930),r=n(7886),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:i(e)||e===s}:function(e){return"object"==typeof e?null!==e:i(e)}},3296:e=>{"use strict";e.exports=!1},2071:(e,t,n)=>{"use strict";var i=n(563),r=n(930),s=n(5516),o=n(1876),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&s(t.prototype,a(e))}},2871:(e,t,n)=>{"use strict";var i=n(4005);e.exports=function(e){return i(e.length)}},3712:(e,t,n)=>{"use strict";var i=n(8240),r=n(3677),s=n(930),o=n(9606),a=n(5283),l=n(4398).CONFIGURABLE,c=n(9277),u=n(3278),d=u.enforce,h=u.get,g=String,p=Object.defineProperty,f=i("".slice),m=i("".replace),v=i([].join),b=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),S=e.exports=function(e,t,n){"Symbol("===f(g(t),0,7)&&(t="["+m(g(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),b&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var i=d(e);return o(i,"source")||(i.source=v(y,"string"==typeof t?t:"")),e};Function.prototype.toString=S((function toString(){return s(this)&&h(this).source||c(this)}),"toString")},5681:e=>{"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function trunc(e){var i=+e;return(i>0?n:t)(i)}},1879:(e,t,n)=>{"use strict";var i=n(4059);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},7826:(e,t,n)=>{"use strict";var i=n(5283),r=n(6761),s=n(8202),o=n(6112),a=n(2258),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",g="writable";t.f=i?s?function defineProperty(e,t,n){if(o(e),t=a(t),o(n),"function"==typeof e&&"prototype"===t&&"value"in n&&g in n&&!n[g]){var i=u(e,t);i&&i[g]&&(e[t]=n.value,n={configurable:h in n?n[h]:i[h],enumerable:d in n?n[d]:i[d],writable:!1})}return c(e,t,n)}:c:function defineProperty(e,t,n){if(o(e),t=a(t),o(n),r)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4399:(e,t,n)=>{"use strict";var i=n(5283),r=n(9413),s=n(7446),o=n(5736),a=n(4088),l=n(2258),c=n(9606),u=n(6761),d=Object.getOwnPropertyDescriptor;t.f=i?d:function getOwnPropertyDescriptor(e,t){if(e=a(e),t=l(t),u)try{return d(e,t)}catch(e){}if(c(e,t))return o(!r(s.f,e,t),e[t])}},62:(e,t,n)=>{"use strict";var i=n(1352),r=n(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return i(e,r)}},6952:(e,t)=>{"use strict";t.f=Object.getOwnPropertySymbols},5516:(e,t,n)=>{"use strict";var i=n(8240);e.exports=i({}.isPrototypeOf)},1352:(e,t,n)=>{"use strict";var i=n(8240),r=n(9606),s=n(4088),o=n(6198).indexOf,a=n(7153),l=i([].push);e.exports=function(e,t){var n,i=s(e),c=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&l(u,n);for(;t.length>c;)r(i,n=t[c++])&&(~o(u,n)||l(u,n));return u}},7446:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function propertyIsEnumerable(e){var t=i(this,e);return!!t&&t.enumerable}:n},7530:(e,t,n)=>{"use strict";var i=n(1518),r=n(6112),s=n(1378);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=i(Object.prototype,"__proto__","set"))(n,[]),t=n instanceof Array}catch(e){}return function setPrototypeOf(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},7999:(e,t,n)=>{"use strict";var i=n(9413),r=n(930),s=n(8759),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!s(a=i(n,e)))return a;if(r(n=e.valueOf)&&!s(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!s(a=i(n,e)))return a;throw o("Can't convert object to primitive value")}},6095:(e,t,n)=>{"use strict";var i=n(563),r=n(8240),s=n(62),o=n(6952),a=n(6112),l=r([].concat);e.exports=i("Reflect","ownKeys")||function ownKeys(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},1632:(e,t,n)=>{"use strict";var i=n(7826).f;e.exports=function(e,t,n){n in e||i(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},9586:(e,t,n)=>{"use strict";var i=n(1858),r=TypeError;e.exports=function(e){if(i(e))throw r("Can't call method on "+e);return e}},8944:(e,t,n)=>{"use strict";var i=n(9197),r=n(5422),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},4489:(e,t,n)=>{"use strict";var i=n(2086),r=n(9444),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},9197:(e,t,n)=>{"use strict";var i=n(3296),r=n(4489);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.0",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5558:(e,t,n)=>{"use strict";var i=n(1448),r=n(3677),s=n(2086).String;e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},7740:(e,t,n)=>{"use strict";var i=n(9502),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},4088:(e,t,n)=>{"use strict";var i=n(5974),r=n(9586);e.exports=function(e){return i(r(e))}},9502:(e,t,n)=>{"use strict";var i=n(5681);e.exports=function(e){var t=+e;return t!=t||0===t?0:i(t)}},4005:(e,t,n)=>{"use strict";var i=n(9502),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},3060:(e,t,n)=>{"use strict";var i=n(9586),r=Object;e.exports=function(e){return r(i(e))}},1288:(e,t,n)=>{"use strict";var i=n(9413),r=n(8759),s=n(2071),o=n(2964),a=n(7999),l=n(211),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!r(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=i(l,e,t),!r(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},2258:(e,t,n)=>{"use strict";var i=n(1288),r=n(2071);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},2371:(e,t,n)=>{"use strict";var i={};i[n(211)("toStringTag")]="z",e.exports="[object z]"===String(i)},4059:(e,t,n)=>{"use strict";var i=n(375),r=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},9268:e=>{"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},5422:(e,t,n)=>{"use strict";var i=n(8240),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},1876:(e,t,n)=>{"use strict";var i=n(5558);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(e,t,n)=>{"use strict";var i=n(5283),r=n(3677);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},640:(e,t,n)=>{"use strict";var i=n(2086),r=n(930),s=i.WeakMap;e.exports=r(s)&&/native code/.test(String(s))},211:(e,t,n)=>{"use strict";var i=n(2086),r=n(9197),s=n(9606),o=n(5422),a=n(5558),l=n(1876),c=i.Symbol,u=r("wks"),d=l?c.for||c:c&&c.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(c,e)?c[e]:d("Symbol."+e)),u[e]}},1557:(e,t,n)=>{"use strict";var i=n(563),r=n(9606),s=n(2585),o=n(5516),a=n(7530),l=n(8474),c=n(1632),u=n(5070),d=n(1879),h=n(8945),g=n(8395),p=n(5283),f=n(3296);e.exports=function(e,t,n,m){var v="stackTraceLimit",b=m?2:1,y=e.split("."),S=y[y.length-1],w=i.apply(null,y);if(w){var E=w.prototype;if(!f&&r(E,"cause")&&delete E.cause,!n)return w;var T=i("Error"),C=t((function(e,t){var n=d(m?t:e,void 0),i=m?new w(e):new w;return void 0!==n&&s(i,"message",n),g(i,C,i.stack,2),this&&o(E,this)&&u(i,this,C),arguments.length>b&&h(i,arguments[b]),i}));if(C.prototype=E,"Error"!==S?a?a(C,T):l(C,T,{name:!0}):p&&v in w&&(c(C,w,v),c(C,w,"prepareStackTrace")),l(C,w),!f)try{E.name!==S&&s(E,"name",S),E.constructor=C}catch(e){}return C}}},740:(e,t,n)=>{"use strict";var i=n(1695),r=n(2086),s=n(7258),o=n(1557),a="WebAssembly",l=r[a],c=7!==Error("e",{cause:7}).cause,exportGlobalErrorCauseWrapper=function(e,t){var n={};n[e]=o(e,t,c),i({global:!0,constructor:!0,arity:1,forced:c},n)},exportWebAssemblyErrorCauseWrapper=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),i({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};exportGlobalErrorCauseWrapper("Error",(function(e){return function Error(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("EvalError",(function(e){return function EvalError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("RangeError",(function(e){return function RangeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("ReferenceError",(function(e){return function ReferenceError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("SyntaxError",(function(e){return function SyntaxError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("TypeError",(function(e){return function TypeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("URIError",(function(e){return function URIError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("CompileError",(function(e){return function CompileError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("LinkError",(function(e){return function LinkError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("RuntimeError",(function(e){return function RuntimeError(t){return s(e,this,arguments)}}))},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=6412,e(e.s=t)}]);
;!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();
;/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.2",
/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;e.collisionWidth>n?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});
;var elementorFrontendConfig={"environmentMode":{"edit":!1,"wpPreview":!1,"isScriptDebug":!1},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":!1,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":!0},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":!1},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":!0},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":!1},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":!1},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":!1}}},"version":"3.17.3","is_static":!1,"experimentalFeatures":{"e_dom_optimization":!0,"e_optimized_assets_loading":!0,"e_swiper_latest":!0,"landing-pages":!0,"e_global_styleguide":!0},"urls":{"assets":"https:\/\/lagi.uxper.co\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":9143,"title":"Home%20Studio%20%E2%80%93%20AI%20Lagi%20%E2%80%93%20AI%20Artificial%20Intelligence%20WordPress%20Theme","excerpt":"","featuredImage":!1}}
;/*! elementor - v3.17.0 - 08-11-2023 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819],{9220:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(8135));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:i.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,o=t.elementorType,i=this.documentClasses[o]||this.documentClasses.base;this.documents[n]=new i({$element:e,id:n})}}t.default=_default},9804:(e,t,n)=>{var o=n(3203),i=o(n(6397)),s=o(n(8704)),r=o(n(4985)),a=o(n(7537)),l=o(n(355)),d=o(n(2804)),c=o(n(3384));e.exports=function(e){var t=this;const o={};this.elementsHandlers={"accordion.default":()=>n.e(209).then(n.bind(n,8470)),"alert.default":()=>n.e(745).then(n.bind(n,9269)),"counter.default":()=>n.e(120).then(n.bind(n,7884)),"progress.default":()=>n.e(192).then(n.bind(n,1351)),"tabs.default":()=>n.e(520).then(n.bind(n,9459)),"toggle.default":()=>n.e(181).then(n.bind(n,2)),"video.default":()=>n.e(791).then(n.bind(n,5363)),"image-carousel.default":()=>n.e(268).then(n.bind(n,5914)),"text-editor.default":()=>n.e(357).then(n.bind(n,1327)),"wp-widget-media_audio.default":()=>n.e(52).then(n.bind(n,7602))},elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-tabs.default"]=()=>Promise.resolve().then(n.bind(n,7323))),elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-accordion.default"]=()=>Promise.resolve().then(n.bind(n,32)));const addElementsHandlers=()=>{this.elementsHandlers.section=[d.default,...s.default,l.default,c.default],this.elementsHandlers.container=[...s.default],elementorFrontend.isEditMode()&&this.elementsHandlers.container.push(...r.default),this.elementsHandlers.column=a.default,e.each(this.elementsHandlers,((e,t)=>{const n=e.split(".");e=n[0];const o=n[1]||null;this.attachHandler(e,t,o)}))},isClassHandler=e=>e.prototype?.getUniqueHandlerID;this.addHandler=function(t,n){const i=n.$element.data("model-cid");let s;if(i){s=t.prototype.getConstructorID(),o[i]||(o[i]={});const e=o[i][s];e&&e.onDestroy()}const r=new t(n);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`,n.$element,e),i&&(o[i][s]=r)},this.attachHandler=(e,n,o)=>{Array.isArray(n)||(n=[n]),n.forEach((n=>function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";o=o?"."+o:"";const i=e+o;elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`,(e=>{if(isClassHandler(n))t.addHandler(n,{$element:e,elementName:i},!0);else{const o=n();if(!o)return;o instanceof Promise?o.then((n=>{let{default:o}=n;t.addHandler(o,{$element:e,elementName:i},!0)})):t.addHandler(o,{$element:e,elementName:i},!0)}}))}(e,n,o)))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise((e=>{t().then((t=>{let{default:n}=t;e(n)}))}))},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){if(elementorFrontend.config.is_static)return;const n=jQuery(t),o=n.attr("data-element_type");if(o&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",n,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`,n,e),"widget"===o)){const t=n.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,n,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",i.default),addElementsHandlers()}}},5654:(e,t,n)=>{var o=n(3203);n(59);var i=o(n(9220)),s=o(n(5107)),r=o(n(3308)),a=o(n(1604)),l=o(n(1911)),d=o(n(4773)),c=o(n(2064)),u=o(n(8628)),h=o(n(8646)),m=o(n(6866)),g=o(n(4375)),p=o(n(6404)),f=o(n(6046)),v=o(n(1322)),b=n(6028);const _=n(9469),y=n(9804),w=n(3346);class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0","elementorFrontend.config.experimentalFeatures.e_dom_optimization"),!elementorFrontend.config.experimentalFeatures.e_dom_optimization}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",(()=>this.setDeviceModeData()))}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()","3.0.0","getKitSettings() and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const o=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let i=o.indexOf(e);for(;i>0;){const e=t[n+"_"+o[i]];if(e||0===e)return e;i--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let o;return o=e[n]?e[n]:e[t],o}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,anchors:new w,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:r.default,assetsLoader:new m.default,escapeHTML:b.escapeHTML,events:p.default,controls:new v.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(()=>this.onDocumentLoaded())):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(r.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,o){if(o||(o=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,o),o instanceof jQuery){const i=t+"."+e;o.on(i,n)}else o.on(t,n,e);else o.on(t,n)}removeListeners(e,t,n,o){if(o||(o=this.elements.$window),o instanceof jQuery){const i=t+"."+e;o.off(i,n)}else o.off(t,n,e)}debounce(e,t){let n;return function(){const o=this,i=arguments,s=!n;clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(o,i)}),t),s&&e.apply(o,i)}}waypoint(e,t,n){n=jQuery.extend({offset:"100%",triggerOnce:!0},n);return e.elementorWaypoint((function(){const e=this.element||this,o=t.apply(e,arguments);return n.triggerOnce&&this.destroy&&this.destroy(),o}),n)}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:f.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach((e=>{let[t,n]=e;this.modulesHandlers[t]=new n}))}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach((e=>{let[t,n]=e;n.is_enabled&&(this.config.responsive.activeBreakpoints[t]=n)}))}init(){this.hooks=new _,this.breakpoints=new g.default(this.config.responsive),this.storage=new s.default,this.elementsHandler=new y(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),p.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new i.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery((()=>elementorFrontend.init()))},4058:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{classes:{swiperContainer:`elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,swiperWrapper:"swiper-wrapper",swiperSlide:"elementor-background-slideshow__slide swiper-slide",swiperPreloader:"swiper-lazy-preloader",slideBackground:"elementor-background-slideshow__slide__image",kenBurns:"elementor-ken-burns",kenBurnsActive:"elementor-ken-burns--active",kenBurnsIn:"elementor-ken-burns--in",kenBurnsOut:"elementor-ken-burns--out"}}}getSwiperOptions(){const e=this.getElementSettings(),t={grabCursor:!1,slidesPerView:1,slidesPerGroup:1,loop:"yes"===e.background_slideshow_loop,speed:e.background_slideshow_transition_duration,autoplay:{delay:e.background_slideshow_slide_duration,stopOnLastSlide:!e.background_slideshow_loop},handleElementorBreakpoints:!0,on:{slideChange:()=>{e.background_slideshow_ken_burns&&this.handleKenBurns()}}};switch("yes"===e.background_slideshow_loop&&(t.loopedSlides=this.getSlidesCount()),e.background_slideshow_slide_transition){case"fade":t.effect="fade",t.fadeEffect={crossFade:!0};break;case"slide_down":t.autoplay.reverseDirection=!0,t.direction="vertical";break;case"slide_up":t.direction="vertical"}return"yes"===e.background_slideshow_lazyload&&(t.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),t}buildSwiperElements(){const e=this.getSettings("classes"),t=this.getElementSettings(),n="slide_left"===t.background_slideshow_slide_transition?"ltr":"rtl",o=jQuery("<div>",{class:e.swiperContainer,dir:n}),i=jQuery("<div>",{class:e.swiperWrapper}),s=t.background_slideshow_ken_burns,r="yes"===t.background_slideshow_lazyload;let a=e.slideBackground;if(s){a+=" "+e.kenBurns;const n="in"===t.background_slideshow_ken_burns_zoom_direction?"kenBurnsIn":"kenBurnsOut";a+=" "+e[n]}r&&(a+=" swiper-lazy"),this.elements.$slides=jQuery(),t.background_slideshow_gallery.forEach((t=>{const n=jQuery("<div>",{class:e.swiperSlide});let o;if(r){const n=jQuery("<div>",{class:e.swiperPreloader});o=jQuery("<div>",{class:a,"data-background":t.url}),o.append(n)}else o=jQuery("<div>",{class:a,style:'background-image: url("'+t.url+'");'});n.append(o),i.append(n),this.elements.$slides=this.elements.$slides.add(n)})),o.append(i),this.$element.prepend(o),this.elements.$backgroundSlideShowContainer=o}async initSlider(){if(1>=this.getSlidesCount())return;const e=this.getElementSettings(),t=elementorFrontend.utils.swiper;this.swiper=await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),this.elements.$backgroundSlideShowContainer.data("swiper",this.swiper),e.background_slideshow_ken_burns&&this.handleKenBurns()}activate(){this.buildSwiperElements(),this.initSlider()}deactivate(){this.swiper&&(this.swiper.destroy(),this.elements.$backgroundSlideShowContainer.remove())}run(){"slideshow"===this.getElementSettings("background_background")?this.activate():this.deactivate()}onInit(){super.onInit(),this.getElementSettings("background_slideshow_gallery")&&this.run()}onDestroy(){super.onDestroy(),this.deactivate()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundSlideshow},9501:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{backgroundVideoContainer:".elementor-background-video-container",backgroundVideoEmbed:".elementor-background-video-embed",backgroundVideoHosted:".elementor-background-video-hosted"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$backgroundVideoContainer:this.$element.find(e.backgroundVideoContainer)};return t.$backgroundVideoEmbed=t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),t.$backgroundVideoHosted=t.$backgroundVideoContainer.children(e.backgroundVideoHosted),t}calcVideosSize(e){let t="16:9";"vimeo"===this.videoType&&(t=e[0].width+":"+e[0].height);const n=this.elements.$backgroundVideoContainer.outerWidth(),o=this.elements.$backgroundVideoContainer.outerHeight(),i=t.split(":"),s=i[0]/i[1],r=n/o>s;return{width:r?n:o*s,height:r?n/s:o}}changeVideoSize(){if("hosted"!==this.videoType&&!this.player)return;let e;if("youtube"===this.videoType?e=jQuery(this.player.getIframe()):"vimeo"===this.videoType?e=jQuery(this.player.element):"hosted"===this.videoType&&(e=this.elements.$backgroundVideoHosted),!e)return;const t=this.calcVideosSize(e);e.width(t.width).height(t.height)}startVideoLoop(e){if(!this.player.getIframe().contentWindow)return;const t=this.getElementSettings(),n=t.background_video_start||0,o=t.background_video_end;if(!t.background_play_once||e){if(this.player.seekTo(n),o){setTimeout((()=>{this.startVideoLoop(!1)}),1e3*(o-n+1))}}else this.player.stopVideo()}prepareVimeoVideo(e,t){const n=this.getElementSettings(),o={url:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!n.background_play_once,transparent:!1,background:!0,muted:!0};n.background_privacy_mode&&(o.dnt=!0),this.player=new e.Player(this.elements.$backgroundVideoContainer,o),this.handleVimeoStartEndTimes(n),this.player.ready().then((()=>{jQuery(this.player.element).addClass("elementor-background-video-embed"),this.changeVideoSize()}))}handleVimeoStartEndTimes(e){e.background_video_start&&this.player.on("play",(t=>{0===t.seconds&&this.player.setCurrentTime(e.background_video_start)})),this.player.on("timeupdate",(t=>{e.background_video_end&&e.background_video_end<t.seconds&&(e.background_play_once?this.player.pause():this.player.setCurrentTime(e.background_video_start)),this.player.getDuration().then((n=>{e.background_video_start&&!e.background_video_end&&t.seconds>n-.5&&this.player.setCurrentTime(e.background_video_start)}))}))}prepareYTVideo(e,t){const n=this.elements.$backgroundVideoContainer,o=this.getElementSettings();let i=e.PlayerState.PLAYING;window.chrome&&(i=e.PlayerState.UNSTARTED);const s={videoId:t,events:{onReady:()=>{this.player.mute(),this.changeVideoSize(),this.startVideoLoop(!0),this.player.playVideo()},onStateChange:t=>{switch(t.data){case i:n.removeClass("elementor-invisible elementor-loading");break;case e.PlayerState.ENDED:"function"==typeof this.player.seekTo&&this.player.seekTo(o.background_video_start||0),o.background_play_once&&this.player.destroy()}}},playerVars:{controls:0,rel:0,playsinline:1}};o.background_privacy_mode&&(s.host="https://www.youtube-nocookie.com",s.origin=window.location.hostname),n.addClass("elementor-loading elementor-invisible"),this.player=new e.Player(this.elements.$backgroundVideoEmbed[0],s)}activate(){let e,t=this.getElementSettings("background_video_link");const n=this.getElementSettings("background_play_once");if(-1!==t.indexOf("vimeo.com")?(this.videoType="vimeo",this.apiProvider=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(this.videoType="youtube",this.apiProvider=elementorFrontend.utils.youtube),this.apiProvider)e=this.apiProvider.getVideoIDFromURL(t),this.apiProvider.onApiReady((n=>{"youtube"===this.videoType&&this.prepareYTVideo(n,e),"vimeo"===this.videoType&&this.prepareVimeoVideo(n,t)}));else{this.videoType="hosted";const e=this.getElementSettings("background_video_start"),o=this.getElementSettings("background_video_end");(e||o)&&(t+="#t="+(e||0)+(o?","+o:"")),this.elements.$backgroundVideoHosted.attr("src",t).one("canplay",this.changeVideoSize.bind(this)),n&&this.elements.$backgroundVideoHosted.on("ended",(()=>{this.elements.$backgroundVideoHosted.hide()}))}elementorFrontend.elements.$window.on("resize elementor/bg-video/recalc",this.changeVideoSize)}deactivate(){"youtube"===this.videoType&&this.player.getIframe()||"vimeo"===this.videoType?this.player.destroy():this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),elementorFrontend.elements.$window.off("resize",this.changeVideoSize)}run(){const e=this.getElementSettings();(e.background_play_on_mobile||"mobile"!==elementorFrontend.getCurrentDeviceMode())&&("video"===e.background_background&&e.background_video_link?this.activate():this.deactivate())}onInit(){super.onInit(...arguments),this.changeVideoSize=this.changeVideoSize.bind(this),this.run()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundVideo},8704:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(4058)),s=o(n(9501)),r=[i.default,s.default];t.default=r},7537:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[o(n(4058)).default];t.default=i},4985:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[()=>n.e(413).then(n.bind(n,2929)),()=>n.e(413).then(n.bind(n,343)),()=>n.e(413).then(n.bind(n,8073))];t.default=o},6397:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),o=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((()=>{e.removeClass("elementor-invisible").addClass("animated "+t)}),o)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(){if(super.onInit(...arguments),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},355:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class HandlesPosition extends elementorModules.frontend.handlers.Base{isActive(){return elementorFrontend.isEditMode()}isFirstSection(){return this.$element[0]===document.querySelector(".elementor-edit-mode .elementor-top-section")}isOverflowHidden(){return"hidden"===this.$element.css("overflow")}getOffset(){if("body"===elementor.config.document.container)return this.$element.offset().top;const e=jQuery(elementor.config.document.container);return this.$element.offset().top-e.offset().top}setHandlesPosition(){const e=elementor.documents.getCurrent();if(!e||!e.container.isEditable())return;const t="elementor-section--handles-inside";if(elementor.settings.page.model.attributes.scroll_snap)return void this.$element.addClass(t);const n=this.isOverflowHidden();if(!n&&!this.isFirstSection())return;const o=n?0:this.getOffset();if(o<25){this.$element.addClass(t);const e=this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");o<-5?e.css("top",-o):e.css("top","")}else this.$element.removeClass(t)}onInit(){this.isActive()&&(this.setHandlesPosition(),this.$element.on("mouseenter",this.setHandlesPosition.bind(this)))}}t.default=HandlesPosition},3384:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Shapes extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:"> .elementor-shape-%s"},svgURL:elementorFrontend.config.urls.assets+"shapes/"}}getDefaultElements(){const e={},t=this.getSettings("selectors");return e.$topContainer=this.$element.find(t.container.replace("%s","top")),e.$bottomContainer=this.$element.find(t.container.replace("%s","bottom")),e}isActive(){return elementorFrontend.isEditMode()}getSvgURL(e,t){let n=this.getSettings("svgURL")+t+".svg";return elementor.config.additional_shapes&&e in elementor.config.additional_shapes&&(n=elementor.config.additional_shapes[e],-1<t.indexOf("-negative")&&(n=n.replace(".svg","-negative.svg"))),n}buildSVG(e){const t="shape_divider_"+e,n=this.getElementSettings(t),o=this.elements["$"+e+"Container"];if(o.attr("data-shape",n),!n)return void o.empty();let i=n;this.getElementSettings(t+"_negative")&&(i+="-negative");const s=this.getSvgURL(n,i);jQuery.get(s,(e=>{o.empty().append(e.childNodes[0])})),this.setNegative(e)}setNegative(e){this.elements["$"+e+"Container"].attr("data-negative",!!this.getElementSettings("shape_divider_"+e+"_negative"))}onInit(){this.isActive(this.getSettings())&&(super.onInit(...arguments),["top","bottom"].forEach((e=>{this.getElementSettings("shape_divider_"+e)&&this.buildSVG(e)})))}onElementChange(e){const t=e.match(/^shape_divider_(top|bottom)$/);if(t)return void this.buildSVG(t[1]);const n=e.match(/^shape_divider_(top|bottom)_negative$/);n&&(this.buildSVG(n[1]),this.setNegative(n[1]))}}t.default=Shapes},2804:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class StretchedSection extends elementorModules.frontend.handlers.StretchedElement{getStretchedClass(){return"elementor-section-stretched"}getStretchSettingName(){return"stretch_section"}getStretchActiveValue(){return"section-stretched"}}t.default=StretchedSection},3346:(e,t,n)=>{var o=n(6028);e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({scrollDuration:500,selectors:{links:'a[href*="#"]',targets:".elementor-element, .elementor-menu-anchor",scrollable:(0,o.isScrollSnapActive)()?"body":"html, body"}}),getDefaultElements(){return{$scrollable:jQuery(this.getSettings("selectors").scrollable)}},bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.handleAnchorLinks)},handleAnchorLinks(e){var t,n=e.currentTarget,i=location.pathname===n.pathname;if(location.hostname===n.hostname&&i&&!(n.hash.length<2)){try{t=jQuery(n.hash).filter(this.getSettings("selectors.targets"))}catch(e){return}if(t.length){var s=t.offset().top,r=elementorFrontend.elements.$wpAdminBar,a=jQuery(".elementor-section.elementor-sticky--active:visible");r.length>0&&(s-=r.height()),a.length>0&&(s-=Math.max.apply(null,a.map((function(){return jQuery(this).outerHeight()})).get())),e.preventDefault(),s=elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance",s),(0,o.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","none"),this.elements.$scrollable.animate({scrollTop:s},this.getSettings("scrollDuration"),"linear",(()=>{(0,o.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","")}))}}},onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments)}})},6866:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=new Promise((t=>{const o="style"===e?this.getStyleElement(n.src):this.getScriptElement(n.src);o.onload=()=>t(!0);const i="head"===n.parent?n.parent:"body";document[i].appendChild(o)}))),n.loader}}t.default=AssetsLoader;const n=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min",o=elementorFrontendConfig.experimentalFeatures.e_swiper_latest?`${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5`:`${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;AssetsLoader.assets={script:{dialog:{src:`${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`},"share-link":{src:`${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`},swiper:{src:o}},style:{}}},1322:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let o;return o="object"==typeof e[t]&&n?e[t][n]:e[t],o}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const o=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)||elementorFrontend.getCurrentDeviceMode(),i=this.getControlValue(e,t,n);if("widescreen"===o){const o=this.getControlValue(e,`${t}_widescreen`,n);return o||0===o?o:i}const s=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let r=o,a=s.indexOf(o),l="";for(;a<=s.length;){if("desktop"===r){l=i;break}const o=`${t}_${r}`,d=this.getControlValue(e,o,n);if(d||0===d){l=d;break}a++,r=s[a]}return l}}},8646:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise((e=>{n.e(723).then(n.t.bind(n,3896,23)).then((t=>{let{default:n}=t;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),o=elementorFrontend.utils.assetsLoader.load("script","share-link");return Promise.all([e,t,o]).then((()=>e))}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),o=elementorFrontend.isEditMode(),i=o&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),s=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(o&&s&&e.preventDefault());if(e.preventDefault(),o&&!elementor.getPreferences("lightbox_in_editor"))return;if(i)return;(this.isOptimizedAssetsLoading()?await LightboxManager.getLightbox():elementorFrontend.utils.lightbox).createLightbox(t)}isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(e=>this.onLinkClick(e)))}onInit(){super.onInit(...arguments),this.isOptimizedAssetsLoading()&&!elementorFrontend.isEditMode()&&this.elements.$links.each(((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1}))}}t.default=LightboxManager},8628:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Swiper{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),e instanceof jQuery&&(e=e[0]),e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),new Promise((t=>{if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)return t(this.createSwiperInstance(e,this.config));elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>t(this.createSwiperInstance(e,this.config))))}))}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach((o=>{const i=parseInt(o);let s;if(i===t.mobile.value||i+1===t.mobile.value)s=0;else if(!t.widescreen||i!==t.widescreen.value&&i+1!==t.widescreen.value){const e=n.findIndex((e=>i===e||i+1===e));s=n[e-1]}else s=i;e.breakpoints[s]=e.breakpoints[o],e.breakpoints[o]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}},2064:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5719);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e){const t=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!t)return;const n=this.actions[t[1]];if(!n)return;let o={};const i=e.match(/settings=(.+)/);i&&(o=JSON.parse(atob(i[1])));for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];n(o,...r)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("data-e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},6028:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,(e=>t[e]||e))};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},4773:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((()=>{this.onApiReady(e)}),350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},1911:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(4773));class VimeoLoader extends i.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=(e=super.getAutoplayURL(e)).match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},1604:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(4773));class YoutubeLoader extends i.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},59:(e,t,n)=>{n.p=elementorFrontendConfig.urls.assets+"js/"},4375:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach((e=>{t.push(e.value)})),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),o=n.length;return e="min"===t[n[o-1]].direction?n[o-2]:n[o-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let o;if(n[0]===e)o=320;else if("widescreen"===e)o=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const i=n.indexOf(e);o=t[n[i-1]].value+1}return o}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map((e=>"_"+e)).join("|")+"$")}}t.default=Breakpoints},6404:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e instanceof jQuery?e[0]:e,o&&e.dispatchEvent(new CustomEvent(o,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;var n=Events;t.default=n},9469:e=>{e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,o,i){var s,r,a;if(n[e][t])if(o)if(s=n[e][t],i)for(a=s.length;a--;)(r=s[a]).callback===o&&r.context===i&&s.splice(a,1);else for(a=s.length;a--;)s[a].callback===o&&s.splice(a,1);else n[e][t]=[]}function _addHook(e,t,o,i,s){var r={callback:o,priority:i,context:s},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,(function(){if(this.callback===o)return l=!0,!1})),l)return;a.push(r),a=function _hookInsertSort(e){for(var t,n,o,i=1,s=e.length;i<s;i++){for(t=e[i],n=i;(o=e[n-1])&&o.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[r];n[e][t]=a}function _runHook(e,t,o){var i,s,r=n[e][t];if(!r)return"filters"===e&&o[0];if(s=r.length,"filters"===e)for(i=0;i<s;i++)o[0]=r[i].callback.apply(r[i].context,o);else for(i=0;i<s;i++)r[i].callback.apply(r[i].context,o);return"filters"!==e||o[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),o=n.shift();return"string"==typeof o?_runHook("filters",o,n):e},addFilter:function addFilter(t,n,o,i){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,o=parseInt(o||10,10),i),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),o=n.shift();return"string"==typeof o&&_runHook("actions",o,n),e},addAction:function addAction(t,n,o,i){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,o=parseInt(o||10,10),i),e}},e}},3308:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,o=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),i=matchUserAgent("Firefox"),s=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),r=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!r&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||o),d=matchUserAgent("Chrome")&&!!window.CSS,c=matchUserAgent("AppleWebKit")&&!d;var u={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,appleWebkit:c,blink:d,chrome:l,edge:a,firefox:i,ie:r,mac:matchUserAgent("Macintosh"),opera:o,safari:s,webkit:matchUserAgent("AppleWebKit")};t.default=u},5107:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let o=n.getItem("elementor");o=o?JSON.parse(o):{},o.__expiration||(o.__expiration={});const i=o.__expiration;let s=[];e?i[e]&&(s=[e]):s=Object.keys(i);let r=!1;return s.forEach((e=>{new Date(i[e])<new Date&&(delete o[e],delete i[e],r=!0)})),r&&this.save(o,t.session),e?o[e]:o}set(e,t,n){n=n||{};const o=this.get(null,n);if(o[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),o.__expiration[e]=t.getTime()}this.save(o,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},6046:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",(()=>n.e(48).then(n.bind(n,6468))))}}t.default=_default},1855:(e,t,n)=>{var o=n(5516),i=TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},3621:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5719:(e,t,n)=>{var o=n(1695),i=n(2086),s=n(563),r=n(5736),a=n(7826).f,l=n(9606),d=n(1855),c=n(5070),u=n(1879),h=n(3621),m=n(79),g=n(5283),p=n(3296),f="DOMException",v=s("Error"),b=s(f),_=function DOMException(){d(this,y);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),o=new b(t,n),i=v(t);return i.name=f,a(o,"stack",r(1,m(i.stack,1))),c(o,this,_),o},y=_.prototype=b.prototype,w="stack"in v(f),k="stack"in new b(1,2),S=b&&g&&Object.getOwnPropertyDescriptor(i,f),E=!(!S||S.writable&&S.configurable),M=w&&!E&&!k;o({global:!0,constructor:!0,forced:p||M},{DOMException:M?_:b});var C=s(f),A=C.prototype;if(A.constructor!==C)for(var D in p||a(A,"constructor",r(1,C)),h)if(l(h,D)){var $=h[D],R=$.s;l(C,R)||a(C,R,r(6,$.c))}}},e=>{e.O(0,[354],(()=>{return t=5654,e(e.s=t);var t}));e.O()}]);
;