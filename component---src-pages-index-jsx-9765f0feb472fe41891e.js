"use strict";(self.webpackChunksteven_kneiser=self.webpackChunksteven_kneiser||[]).push([[230],{6495:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var o=n(7294),i=n(5444),l=n(6406),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var d=function(){return(d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}");var s,c=function(){return function(){window.Calendly={},window.Calendly._util={}}.call(window),window.Calendly._util.domReady=function(e){var t=!1,n=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o)):(document.detachEvent("onreadystatechange",o),window.detachEvent("onload",o))},o=function(){t||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(t=!0,n(),e())};if("complete"===document.readyState)e();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o);else{document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o);var i=!1;try{i=null==window.frameElement&&document.documentElement}catch(l){}i&&i.doScroll&&function l(){if(!t){try{i.doScroll("left")}catch(o){return setTimeout(l,50)}t=!0,n(),e()}}()}},window.Calendly._util.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},function(){window.Calendly._url={},window.Calendly._url.extractQueryStringParams=function(e){var t,n,o,i,l,r,a,d;for((l=document.createElement("a")).href=e,i={},t=0,o=(r=l.search.substr(1).split("&")).length;o>t;t++)n=(a=r[t].split("="))[0],void 0!==(d=a[1])&&(i[n.toLowerCase()]=decodeURIComponent(d));return i},window.Calendly._url.stripQuery=function(e){return e.split("?")[0]}}.call(window),function(){window.Calendly._util.snakeCaseKeys=function(e){var t,n;for(t in n={},e)n[t.split(/(?=[A-Z])/).join("_").toLowerCase()]=e[t];return n},window.Calendly._util.pick=function(e,t){var n,o,i,l;if(e){for(l={},n=0,i=t.length;i>n;n++)e[o=t[n]]&&(l[o]=e[o]);return l}}}.call(window),e=window,t=function(e){function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),l=[],r=!1,a=-1,d=void 0,s=void 0,c=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},u=function(e){var t=e||window.event;return!!c(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},p=function(e){setTimeout((function(){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(s=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}))},m=function(){setTimeout((function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)}))};e.disableBodyScroll=function(e,o){if(i){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!l.some((function(t){return t.targetElement===e}))){var d={targetElement:e,options:o||{}};l=[].concat(t(l),[d]),e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-a;!c(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&0>n?u(e):e.stopPropagation())}(t,e)},r||(document.addEventListener("touchmove",u,n?{passive:!1}:void 0),r=!0)}}else{p(o);var s={targetElement:e,options:o||{}};l=[].concat(t(l),[s])}},e.clearAllBodyScrollLocks=function(){i?(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),r&&(document.removeEventListener("touchmove",u,n?{passive:!1}:void 0),r=!1),l=[],a=-1):(m(),l=[])},e.enableBodyScroll=function(e){if(i){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,l=l.filter((function(t){return t.targetElement!==e})),r&&0===l.length&&(document.removeEventListener("touchmove",u,n?{passive:!1}:void 0),r=!1)}else(l=l.filter((function(t){return t.targetElement!==e}))).length||m()}},o={exports:{}},"function"==typeof define&&n.amdO?define(["exports"],t):"undefined"!=typeof exports&&(o.exports=exports),t(o.exports),e.bodyScrollLock=o.exports,function(){var e,t,n,o,i;window.Calendly._autoLoadInlineWidgets=function(){return window.Calendly._util.domReady((function(){return t()}))},window.Calendly.initBadgeWidget=function(t){return window.Calendly._util.domReady((function(){return e(t)}))},window.Calendly.destroyBadgeWidget=function(){return window.Calendly.badgeWidget?(window.Calendly.badgeWidget.destroy(),delete window.Calendly.badgeWidget):void 0},window.Calendly.initPopupWidget=function(e){return window.Calendly._util.domReady((function(){return window.Calendly.showPopupWidget(e.url,"PopupButton",e)}))},window.Calendly.initInlineWidget=function(e){return e.url?(e.parentElement||(e.parentElement=o()),window.Calendly._util.domReady((function(){return e.embedType="Inline",new window.Calendly.Iframe(e)}))):void 0},window.Calendly.showPopupWidget=function(e,t,n){var o;return null==t&&(t="PopupButton"),null==n&&(n={}),window.Calendly.closePopupWidget(),o=function(){return delete window.Calendly.popupWidget},window.Calendly.popupWidget=new window.Calendly.PopupWidget(e,o,t,n),window.Calendly.popupWidget.show()},window.Calendly.closePopupWidget=function(){return window.Calendly.popupWidget?window.Calendly.popupWidget.close():void 0},o=function(){return document.scripts[document.scripts.length-1].parentNode},t=function(){var e,t,n,o,l;for(t=document.querySelectorAll(".calendly-inline-widget"),l=[],n=0,o=t.length;o>n;n++)e=t[n],i(e)?l.push(void 0):(e.setAttribute("data-processed",!0),l.push(new window.Calendly.Iframe({parentElement:e,inlineStyles:!0,embedType:"Inline"})));return l},i=function(e){return e.getAttribute("data-processed")||"false"===e.getAttribute("data-auto-load")},e=function(e){var t,o,i;return window.Calendly.destroyBadgeWidget(),t=n(e),i=function(){return window.Calendly.showPopupWidget(e.url,"PopupWidget",e)},o=window.Calendly._util.assign({onClick:i},t),window.Calendly.badgeWidget=new window.Calendly.BadgeWidget(o)},n=function(e){var t;return t={},["color","textColor","text","branding"].forEach((function(n){return t[n]=e[n],delete e[n]})),t}}.call(window),function(){window.Calendly.Iframe=function(){function e(e){this.options=e,this.parseOptions(),this.build(),this.inject()}return e.prototype.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e.prototype.parseOptions=function(){var e;if(e={inlineStyles:!1},this.options=window.Calendly._util.assign({},e,this.options),this.parent=this.options.parentElement,!this.parent)throw"Calendly: Parent element not set";if(this.parent.jquery&&(this.parent=this.parent[0]),this.inlineStyles=this.options.inlineStyles,this.embedType=this.options.embedType,this.url=(this.options.url||this.getUrlFromParent()).split("#")[0],!this.url)throw"Calendly: Widget URL not set"},e.prototype.build=function(){return this.node=document.createElement("iframe"),this.node.src=this.getSource(),this.node.width="100%",this.node.height="100%",this.node.frameBorder="0",this.node.onload=function(){var e=document.querySelector(".calendly-spinner");e&&(e.style.visibility="hidden")}},e.prototype.inject=function(){return this.format(),this.parent.appendChild(this.buildSpinner()),this.parent.appendChild(this.node)},e.prototype.getSource=function(){var e;return e=window.Calendly._url.stripQuery(this.url)+"?"+this.getParams(),this.filterConsentParam(e)},e.prototype.getUrlFromParent=function(){return this.parent.getAttribute("data-url")},e.prototype.getParams=function(){var e,t,n,o;for(e in t={embed_domain:this.getDomain(),embed_type:this.embedType},n=[],t=window.Calendly._util.assign(t,this.getUtmParamsFromHost(),this.getParamsFromUrl(),this.getParamsFromOptions()))o=t[e],n.push(e+"="+encodeURIComponent(o));return n.join("&")},e.prototype.getUtmParamsFromHost=function(){var e,t;return e=["utm_campaign","utm_source","utm_medium","utm_content","utm_term"],t=window.Calendly._url.extractQueryStringParams(window.location.href),window.Calendly._util.pick(t,e)},e.prototype.getParamsFromUrl=function(){return window.Calendly._url.extractQueryStringParams(this.url)},e.prototype.getParamsFromOptions=function(){return window.Calendly._util.assign({},this.getPrefillParams(),this.getUtmParams())},e.prototype.getUtmParams=function(){var e;return this.options.utm?(e=["utmCampaign","utmSource","utmMedium","utmContent","utmTerm"],window.Calendly._util.snakeCaseKeys(window.Calendly._util.pick(this.options.utm,e))):null},e.prototype.getPrefillParams=function(){var e,t,n,o,i;if(!this.options.prefill)return null;if(t=["name","firstName","lastName","email","location"],n=window.Calendly._util.snakeCaseKeys(window.Calendly._util.pick(this.options.prefill,t)),this.options.prefill.customAnswers)for(e in o=this.options.prefill.customAnswers)i=o[e],e.match(/^a\d{1,2}$/)&&(n[e]=i);if(this.options.prefill.guests&&Array.isArray(this.options.prefill.guests)&&this.options.prefill.guests.length>0&&(n.guests=this.options.prefill.guests.join(",")),this.options.prefill.date&&this.options.prefill.date instanceof Date){var l=this.options.prefill.date.getMonth()+1,r=this.options.prefill.date.getDate(),a=this.options.prefill.date.getFullYear();n.date=[a,l<10?"0"+l:l,r<10?"0"+r:r].join("-")}return n},e.prototype.getDomain=function(){return document.location.host},e.prototype.filterConsentParam=function(e){return e.replace(/consent_accept=1&?/g,"")},e.prototype.format=function(){return this.isMobile?this.formatMobile():this.formatDesktop()},e.prototype.formatDesktop=function(){return this.inlineStyles?this.parent.setAttribute("style","position: relative;"+this.parent.getAttribute("style")):void 0},e.prototype.formatMobile=function(){return this.inlineStyles?this.parent.setAttribute("style","position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;"+this.parent.getAttribute("style")):this.parent.className+=" calendly-mobile"},e.prototype.buildSpinner=function(){var e;return(e=document.createElement("div")).className="calendly-spinner",e.appendChild(this.buildBounce(1)),e.appendChild(this.buildBounce(2)),e.appendChild(this.buildBounce(3)),e},e.prototype.buildBounce=function(e){var t;return(t=document.createElement("div")).className="calendly-bounce"+e,t},e}()}.call(window),function(){window.Calendly.PopupWidget=function(){function e(e,t,n,o){this.url=e,this.onClose=t,this.embedType=n,this.options=null!=o?o:{},this.close=function(e,t){return function(){return e.apply(t,arguments)}}(this.close,this)}return e.prototype.show=function(){return this.buildOverlay(),this.insertOverlay(),this.lockPageScroll()},e.prototype.close=function(){return this.unlockPageScroll(),this.destroyOverlay(),this.onClose()},e.prototype.buildOverlay=function(){return this.overlay=document.createElement("div"),this.overlay.className="calendly-overlay",this.overlay.appendChild(this.buildCloseOverlay()),this.overlay.appendChild(this.buildPopup()),this.overlay.appendChild(this.buildCloseButton())},e.prototype.insertOverlay=function(){return document.body.appendChild(this.overlay)},e.prototype.buildCloseOverlay=function(){var e;return(e=document.createElement("div")).className="calendly-close-overlay",e.onclick=this.close,e},e.prototype.buildPopup=function(){var e;return(e=document.createElement("div")).className="calendly-popup",e.appendChild(this.buildPopupContent()),e},e.prototype.buildPopupContent=function(){var e;return(e=document.createElement("div")).className="calendly-popup-content",e.setAttribute("data-url",this.url),this.options.parentElement=e,this.options.embedType=this.embedType,new window.Calendly.Iframe(this.options),e},e.prototype.buildCloseButton=function(){var e;return(e=document.createElement("div")).className="calendly-popup-close",e.onclick=this.close,e},e.prototype.destroyOverlay=function(){return this.overlay.parentNode.removeChild(this.overlay)},e.prototype.lockPageScroll=function(){return bodyScrollLock.disableBodyScroll(this.overlay),document.addEventListener("touchmove",this.handleLockedTouchmove,{passive:!1})},e.prototype.unlockPageScroll=function(){return bodyScrollLock.enableBodyScroll(this.overlay),document.removeEventListener("touchmove",this.handleLockedTouchmove,{passive:!1})},e.prototype.handleLockedTouchmove=function(e){return e.preventDefault()},e}()}.call(window),function(){window.Calendly.BadgeWidget=function(){function e(e){this.options=e,this.buildWidget(),this.insertWidget()}return e.prototype.destroy=function(){return this.widget.parentNode.removeChild(this.widget)},e.prototype.buildWidget=function(){return this.widget=document.createElement("div"),this.widget.className="calendly-badge-widget",this.widget.appendChild(this.buildContent())},e.prototype.insertWidget=function(){return document.body.insertBefore(this.widget,document.body.firstChild)},e.prototype.buildContent=function(){var e;return(e=document.createElement("div")).className="calendly-badge-content","#ffffff"===this.options.color&&(e.className+=" calendly-white"),e.onclick=this.options.onClick,e.innerHTML=this.options.text,e.style.background=this.options.color,e.style.color=this.options.textColor,this.options.branding&&e.appendChild(this.buildBranding()),e},e.prototype.buildBranding=function(){var e;return(e=document.createElement("span")).innerHTML="powered by Calendly",e},e}()}.call(window),window.Calendly._autoLoadInlineWidgets();var e,t,o};!function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"}(s||(s={}));var u=function(){window.Calendly||c()},p=function(e,t){if(!t)return e;var n=t.backgroundColor,o=t.hideEventTypeDetails,i=t.hideLandingPageDetails,l=t.primaryColor,r=t.textColor,a=t.hideGdprBanner,d=e.indexOf("?"),s=d>-1,c=e.slice(d+1);return(s?e.slice(0,d):e)+"?"+[c,n?"background_color="+n:null,o?"hide_event_type_details=1":null,i?"hide_landing_page_details=1":null,l?"primary_color="+l:null,r?"text_color="+r:null,a?"hide_gdpr_banner=1":null].filter((function(e){return null!==e})).join("&")},m={minWidth:"320px",height:"630px"},y=(function(e){function t(t){var n=e.call(this,t)||this;return n.widgetParentContainerRef=(0,o.createRef)(),n.destroyInlineWidget=n.destroyInlineWidget.bind(n),n.getChildNodeCount=n.getChildNodeCount.bind(n),n.shouldWidgetUpdate=n.shouldWidgetUpdate.bind(n),n.initWidget=n.initWidget.bind(n),n}a(t,e),t.prototype.componentDidUpdate=function(e){var t=this;this.shouldWidgetUpdate(e)&&(this.getChildNodeCount()?(this.destroyInlineWidget(),this.initWidget()):this.calendlyWidgetListener("inserted",(function(){t.calendlyWidgetListener("removed",t.initWidget),t.destroyInlineWidget()})))},t.prototype.componentDidMount=function(){u(),window.Calendly.initInlineWidget({url:p(this.props.url,this.props.pageSettings),parentElement:this.widgetParentContainerRef.current,prefill:this.props.prefill,utm:this.props.utm})},t.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||m,ref:this.widgetParentContainerRef,"data-auto-load":"false"})},t.prototype.destroyInlineWidget=function(){this.widgetParentContainerRef.current.innerHTML=""},t.prototype.getChildNodeCount=function(){return this.widgetParentContainerRef.current.childNodes.length},t.prototype.initWidget=function(){window.Calendly.initInlineWidget({url:p(this.props.url,this.props.pageSettings),parentElement:this.widgetParentContainerRef.current,prefill:this.props.prefill,utm:this.props.utm})},t.prototype.calendlyWidgetListener=function(e,t){var n="inserted"===e,o="removed"===e;return new MutationObserver((function(e,i){(i.disconnect(),n)&&(e.some((function(e){return!!e.addedNodes.length}))&&t());o&&(e.some((function(e){return!!e.removedNodes.length}))&&t())})).observe(this.widgetParentContainerRef.current,{childList:!0})},t.prototype.shouldWidgetUpdate=function(e){var t=this;return e.url!==this.props.url||["pageSettings","prefill","utm"].some((function(n){return JSON.stringify(e[n])!==JSON.stringify(t.props[n])}))}}(o.Component),function(e){return function(t){return t.preventDefault(),n=e,void window.Calendly.initPopupWidget(n);var n}}),h=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}a(t,e),t.prototype.componentWillUnmount=function(){window.Calendly.closePopupWidget()},t.prototype.componentDidMount=function(){u()},t.prototype.render=function(){var e={url:p(this.props.url,this.props.pageSettings),prefill:this.props.prefill,utm:this.props.utm};return(0,o.createElement)("button",{onClick:y(e),style:this.props.styles||{},className:this.props.className||""},this.props.text)}}(o.Component),{branding:!1,color:"#00a2ff",textColor:"#ffffff",text:"Schedule time with me"}),f=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}a(t,e),t.prototype.componentDidUpdate=function(){var e=d(d(d({},h),this.props),{url:p(this.props.url,this.props.pageSettings)});window.Calendly.initBadgeWidget(e)},t.prototype.componentDidMount=function(){u();var e=d(d(d({},h),this.props),{url:p(this.props.url,this.props.pageSettings)});window.Calendly.initBadgeWidget(e)},t.prototype.componentWillUnmount=function(){window.Calendly.destroyBadgeWidget(),window.Calendly.closePopupWidget()},t.prototype.render=function(){return(0,o.createElement)(o.Fragment,null)}}(o.Component),function(e){function t(t){var n=e.call(this,t)||this;return n.handleEvent=n.handleEvent.bind(n),n}a(t,e),t.prototype.componentDidMount=function(){window.addEventListener("message",this.handleEvent)},t.prototype.componentWillUnmount=function(){window.removeEventListener("message",this.handleEvent)},t.prototype.handleEvent=function(e){var t=e.data.event;t===s.DATE_AND_TIME_SELECTED?this.props.onDateAndTimeSelected&&this.props.onDateAndTimeSelected(e):t===s.EVENT_SCHEDULED?this.props.onEventScheduled&&this.props.onEventScheduled(e):t===s.EVENT_TYPE_VIEWED?this.props.onEventTypeViewed&&this.props.onEventTypeViewed(e):t===s.PROFILE_PAGE_VIEWED&&this.props.onProfilePageViewed&&this.props.onProfilePageViewed(e)},t.prototype.render=function(){return this.props.children||null}}(o.Component),n(9488));function g(){var e=function(){return function(e){u();var t={url:p(e.url,e.pageSettings),prefill:e.prefill,utm:e.utm};window.Calendly.initPopupWidget(t)}({url:"https://calendly.com/kneiser/30min"})};return o.createElement(o.Fragment,null,o.createElement("link",{href:"https://assets.calendly.com/assets/external/widget.css",rel:"stylesheet"}),o.createElement("script",{defer:!0,type:"text/javascript",src:"https://assets.calendly.com/assets/external/widget.js"}),o.createElement("button",{type:"button",onClick:e,onKeyDown:e,className:"calendly-module--popup--3enZ4"},o.createElement("img",{src:f.Z,alt:"theshteves"})))}var w=n.p+"static/construction-ec2a7e94d540d1771db00fb99878b1c9.webp";function v(){return o.createElement(l.Z,{title:"Hi, I'm Steven Kneiser"},o.createElement("figure",{className:"py-8"},o.createElement("h1",{className:"text-center"},"stevenkneiser.com",o.createElement("br",null),o.createElement("span",{className:"font-thin italic bg-gradient-to-tr from-yellow-50 via-yellow-50 to-yellow-500 inline-block transform -translate-y-1"},"    under construction  ")),o.createElement("div",{className:"my-8 text-9xl leading-none text-center"},"🚧",o.createElement("div",{className:"inline-block ml-12",style:{animation:"4s elevate infinite linear alternate"}},"🏗"),o.createElement("br",null),o.createElement("span",{className:"inline-block transform rotate-3"},"🚧🚧"))),o.createElement("div",null,o.createElement("h2",{className:"text-xl leading-snug"},"Welcome to my new little home"," ",o.createElement("span",{className:"inline-block w-80 text-right"},"...on"," ",o.createElement("span",{className:"inline-block transform translate-y-4 rotate-12"},"...the"," "),o.createElement("span",{className:"inline-block transform translate-y-20 rotate-45"},"...internet"),o.createElement("span",{className:"inline-block transform translate-y-56 rotate-90 translate-x-28"},"...weee",o.createElement("span",{className:"font-thin text-gray-400"},"eeeeeeeeee"),o.createElement("span",{className:"filter blur"},"ee"),"💥"))),o.createElement("figure",{className:"flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center"},o.createElement("div",{className:"px-4"},"👤 "),o.createElement(i.rU,{to:"/about"},"More /about me")),o.createElement("figure",{className:"flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center"},o.createElement("div",{className:"px-4"},"📆 "),o.createElement(i.rU,{to:"/now"},"What I’m doing /now")),o.createElement("figure",{className:"flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center"},o.createElement("div",{className:"px-4"},"✍️ "),o.createElement(i.rU,{to:"/blog"},"Recent /blog writing"))),o.createElement("img",{src:w,alt:"construction work",className:"m-auto p-12"}),o.createElement(g,null))}},9488:function(e,t,n){t.Z=n.p+"static/theshteves-transparent-5e49d19110b370c878e8d00155165203.webp"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9765f0feb472fe41891e.js.map