var BULMA;"object"!=typeof BULMA&&(BULMA={}),function(){var a;return BULMA.hide=function(a){var b;b=BULMA.isVisible(a),b&&(a.style.display="none")},BULMA.show=function(a){var b;b=BULMA.isVisible(a),b||(a.style.display="block")},BULMA.toggle=function(a){var b;b=BULMA.isVisible(a),b?a.style.display="none":a.style.display="block"},BULMA.getElements=function(a){return document.querySelectorAll('[data-bulma="'+a+'"]')},BULMA.isVisible=function(a){var b;return b=window.getComputedStyle?getComputedStyle(a,null).display:a.currentStyle.display,"none"!==b},BULMA.hasClass=function(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)},BULMA.addClass=function(a,b){return a.classList?a.classList.add(b):BULMA.hasClass(a,b)?void 0:a.className+=" "+b},BULMA.removeClass=function(a,b){return a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("\\b"+b+"\\b","g"),"")},BULMA.parseOptions=function(a){var b,c,d,e,f;for(f={},e=a.getAttribute("data-options"),e=(e||"").replace(/\s/g,"").split(";"),b=0,c=e.length;b<c;b++)d=e[b],d&&(d=d.split(":"),f[d[0]]=d[1]);return f},BULMA.click=function(a,b){if(!a.eventListener)return a.eventListener=!0,a.addEventListener("click",b)},BULMA.unclick=function(a,b){if(a.eventListener)return a.eventListener=!1,a.removeEventListener("click",b)},"loading"!==document.readyState?void(BULMA.isReady=!0):(document.addEventListener?document.addEventListener("DOMContentLoaded",function(){BULMA.isReady=!0}):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(BULMA.isReady=!0)}),a=function(a){var b,c,d,e,f;for(b=0,c=d=0,e=a.length;d<e;c=++d)f=a[c],b=~~((b<<5)-b+a.charCodeAt(c));return b})}();var i,j,len,len1,list,lists,menu,menuElems,options,subMenu;if(BULMA.toggleMenu=function(a,b){BULMA.collapseMenu(a,"hide"),BULMA.click(a,function(a){var c,d,e,f;if(a.preventDefault(),a.stopPropagation(),b.single)for(d=menu.querySelectorAll(".is-active"),e=0,f=d.length;e<f;e++)c=d[e],c!==a.target&&(BULMA.removeClass(c,"is-active"),"UL"===c.nextElementSibling.nodeName&&BULMA.hide(c.nextElementSibling));BULMA.collapseMenu(a.target,"toggle")})},BULMA.collapseMenu=function(a,b){var c;if(c=a.nextElementSibling,"show"===b){if(BULMA.show(c),BULMA.isVisible(c))return BULMA.addClass(a,"is-active")}else if("hide"===b){if(BULMA.hide(c),!BULMA.isVisible(c))return BULMA.removeClass(a,"is-active")}else if("toggle"===b)return BULMA.toggle(c),BULMA.isVisible(c)?BULMA.addClass(a,"is-active"):BULMA.removeClass(a,"is-active")},!BULMA.isReady&&(menuElems=BULMA.getElements("menu"),menuElems&&menuElems.length>0))for(i=0,len=menuElems.length;i<len;i++)for(menu=menuElems[i],options=BULMA.parseOptions(menu),lists=menu.querySelectorAll(".menu-list"),j=0,len1=lists.length;j<len1;j++)list=lists[j],subMenu=list.querySelector("ul"),subMenu&&BULMA.toggleMenu(subMenu.previousElementSibling,options);var i,len,modal,modals,options;if(BULMA.toggleModal=function(a,b){if(!b.target)throw new Error("Found [BULMA-MODAL] but there is no target defined!");a.addEventListener("click",function(a){var c,d,e,f;a.preventDefault(),a.stopPropagation(),f=document.getElementById(b.target),c=f.querySelector(".modal-background"),d=f.querySelector(".modal-close"),e=function(){if(BULMA.hasClass(f,"is-active"))return BULMA.removeClass(f,"is-active"),BULMA.unclick(this,e)},(void 0===b.closeByBackdrop||b.closeByBackdrop)&&BULMA.click(c,e),(void 0===b.closeByButton||b.closeByButton)&&BULMA.click(d,e),BULMA.addClass(f,"is-active")})},!BULMA.isReady&&(modals=BULMA.getElements("modal"),modals&&modals.length>0))for(i=0,len=modals.length;i<len;i++)modal=modals[i],options=BULMA.parseOptions(modal),BULMA.toggleModal(modal,options);var i,len,notification,notifications,options;if(BULMA.notification=function(a,b,c){var d,e;if(void 0!==c.deletable&&c.deletable===!1||(d=a.querySelector(".delete"),e=function(b){b.preventDefault(),b.stopPropagation(),a.parentNode.removeChild(a)}),"show"===b)BULMA.removeClass(a,"is-hidden"),BULMA.click(d,e);else if("hide"===b)BULMA.addClass(a,"is-hidden");else if("toggle"===b)return void(BULMA.isVisible(a)?BULMA.notification(a,"hide",c):BULMA.notification(a,"show",c))},!BULMA.isReady&&(notifications=BULMA.getElements("notification"),notifications&&notifications.length>0))for(i=0,len=notifications.length;i<len;i++)notification=notifications[i],options=BULMA.parseOptions(notification),BULMA.notification(notification,"hide",options);var i,j,len,len1,tab,tabs,target,targets;if(BULMA.toggleTab=function(a){var b,c,d,e;for(e=a.target.parentNode.parentNode,e=e.querySelectorAll("li"),b=0,d=e.length;b<d;b++)c=e[b],BULMA.removeClass(c,"is-active"),BULMA.hide(document.querySelector(c.firstChild.getAttribute("data-tab")));BULMA.addClass(a.target.parentNode,"is-active"),BULMA.show(document.querySelector(a.target.getAttribute("data-tab")))},!BULMA.isReady&&(tabs=BULMA.getElements("tabs"),tabs&&tabs.length>0))for(i=0,len=tabs.length;i<len;i++)for(tab=tabs[i],targets=tab.querySelectorAll("[data-tab]"),j=0,len1=targets.length;j<len1;j++)target=targets[j],tab=document.querySelector(target.getAttribute("data-tab")),BULMA.hasClass(target.parentNode,"is-active")===!1&&BULMA.hide(tab),BULMA.click(target,BULMA.toggleTab);