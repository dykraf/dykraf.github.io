webpackJsonp([0],{/***/
"../node_modules/bootstrap/dist/js/bootstrap.js":/***/
function(e,t,n){/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,r){r(t,n("../node_modules/jquery/dist/jquery.js"),n("../node_modules/popper.js/dist/esm/popper.js"))}(0,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
var l=function(e){// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function t(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function n(){return{bindType:i,delegateType:i,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function r(t){var n=this,r=!1;return e(this).one(o.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||o.triggerTransitionEnd(n)},t),this}/**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
var i="transitionend",o={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{
// eslint-disable-next-line no-bitwise
e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;// Get transition-duration of the element
var n=e(t).css("transition-duration");// Return 0 if element or transition duration is not found
// Return 0 if element or transition duration is not found
// If multiple durations are defined, take the first
return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(i)},
// TODO: Remove in v5
supportsTransitionEnd:function(){return Boolean(i)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,n,r){for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var s=r[i],a=n[i],l=a&&o.isElement(a)?"element":t(a);if(!new RegExp(s).test(l))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+l+'" but expected type "'+s+'".')}}};return function(){e.fn.emulateTransitionEnd=r,e.event.special[o.TRANSITION_END]=n()}(),o}(t),u=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="alert",n=e.fn[t],r={DISMISS:'[data-dismiss="alert"]'},o={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},s={ALERT:"alert",FADE:"fade",SHOW:"show"},a=/*#__PURE__*/
function(){function t(e){this._element=e}// Getters
var n=t.prototype;
// Public
// Private
// Static
return n.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=l.getSelectorFromElement(t),r=!1;return n&&(r=e(n)[0]),r||(r=e(t).closest("."+s.ALERT)[0]),r},n._triggerCloseEvent=function(t){var n=e.Event(o.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass(s.SHOW),!e(t).hasClass(s.FADE))return void this._destroyElement(t);var r=l.getTransitionDurationFromElement(t);e(t).one(l.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(r)},n._destroyElement=function(t){e(t).detach().trigger(o.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.alert");i||(i=new t(this),r.data("bs.alert",i)),"close"===n&&i[n](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(o.CLICK_DATA_API,r.DISMISS,a._handleDismiss(new a)),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(t),c=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="button",n=e.fn[t],r={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},o={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},s={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},a=/*#__PURE__*/
function(){function t(e){this._element=e}// Getters
var n=t.prototype;
// Public
// Static
return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(o.DATA_TOGGLE)[0];if(i){var s=e(this._element).find(o.INPUT)[0];if(s){if("radio"===s.type)if(s.checked&&e(this._element).hasClass(r.ACTIVE))t=!1;else{var a=e(i).find(o.ACTIVE)[0];a&&e(a).removeClass(r.ACTIVE)}if(t){if(s.hasAttribute("disabled")||i.hasAttribute("disabled")||s.classList.contains("disabled")||i.classList.contains("disabled"))return;s.checked=!e(this._element).hasClass(r.ACTIVE),e(s).trigger("change")}s.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(r.ACTIVE)),t&&e(this._element).toggleClass(r.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var r=e(this).data("bs.button");r||(r=new t(this),e(this).data("bs.button",r)),"toggle"===n&&r[n]()})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(s.CLICK_DATA_API,o.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(r.BUTTON)||(n=e(n).closest(o.BUTTON)),a._jQueryInterface.call(e(n),"toggle")}).on(s.FOCUS_BLUR_DATA_API,o.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(o.BUTTON)[0];e(n).toggleClass(r.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(t),f=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="carousel",n="bs.carousel",r="."+n,o=e.fn[t],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},u={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},f={SLIDE:"slide"+r,SLID:"slid"+r,KEYDOWN:"keydown"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r,TOUCHEND:"touchend"+r,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},d={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},h={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},p=/*#__PURE__*/
function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(h.INDICATORS)[0],this._addEventListeners()}// Getters
var p=o.prototype;
// Public
// Private
// Static
return p.next=function(){this._isSliding||this._slide(c.NEXT)},p.nextWhenVisible=function(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},p.prev=function(){this._isSliding||this._slide(c.PREV)},p.pause=function(t){t||(this._isPaused=!0),e(this._element).find(h.NEXT_PREV)[0]&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},p.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},p.to=function(t){var n=this;this._activeElement=e(this._element).find(h.ACTIVE_ITEM)[0];var r=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0)){if(this._isSliding)return void e(this._element).one(f.SLID,function(){return n.to(t)});if(r===t)return this.pause(),void this.cycle();var i=t>r?c.NEXT:c.PREV;this._slide(i,this._items[t])}},p.dispose=function(){e(this._element).off(r),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},p._getConfig=function(e){return e=s({},a,e),l.typeCheckConfig(t,e,u),e},p._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(f.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(f.MOUSEENTER,function(e){return t.pause(e)}).on(f.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
e(this._element).on(f.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},p._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},p._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(h.ITEM)),this._items.indexOf(t)},p._getItemByDirection=function(e,t){var n=e===c.NEXT,r=e===c.PREV,i=this._getItemIndex(t),o=this._items.length-1;if((r&&0===i||n&&i===o)&&!this._config.wrap)return t;var s=e===c.PREV?-1:1,a=(i+s)%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},p._triggerSlideEvent=function(t,n){var r=this._getItemIndex(t),i=this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),o=e.Event(f.SLIDE,{relatedTarget:t,direction:n,from:i,to:r});return e(this._element).trigger(o),o},p._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(h.ACTIVE).removeClass(d.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(d.ACTIVE)}},p._slide=function(t,n){var r,i,o,s=this,a=e(this._element).find(h.ACTIVE_ITEM)[0],u=this._getItemIndex(a),p=n||a&&this._getItemByDirection(t,a),g=this._getItemIndex(p),m=Boolean(this._interval);if(t===c.NEXT?(r=d.LEFT,i=d.NEXT,o=c.LEFT):(r=d.RIGHT,i=d.PREV,o=c.RIGHT),p&&e(p).hasClass(d.ACTIVE))return void(this._isSliding=!1);if(!this._triggerSlideEvent(p,o).isDefaultPrevented()&&a&&p){this._isSliding=!0,m&&this.pause(),this._setActiveIndicatorElement(p);var v=e.Event(f.SLID,{relatedTarget:p,direction:o,from:u,to:g});if(e(this._element).hasClass(d.SLIDE)){e(p).addClass(i),l.reflow(p),e(a).addClass(r),e(p).addClass(r);var y=l.getTransitionDurationFromElement(a);e(a).one(l.TRANSITION_END,function(){e(p).removeClass(r+" "+i).addClass(d.ACTIVE),e(a).removeClass(d.ACTIVE+" "+i+" "+r),s._isSliding=!1,setTimeout(function(){return e(s._element).trigger(v)},0)}).emulateTransitionEnd(y)}else e(a).removeClass(d.ACTIVE),e(p).addClass(d.ACTIVE),this._isSliding=!1,e(this._element).trigger(v);m&&this.cycle()}},o._jQueryInterface=function(t){return this.each(function(){var r=e(this).data(n),i=s({},a,e(this).data());"object"==typeof t&&(i=s({},i,t));var l="string"==typeof t?t:i.slide;if(r||(r=new o(this,i),e(this).data(n,r)),"number"==typeof t)r.to(t);else if("string"==typeof l){if(void 0===r[l])throw new TypeError('No method named "'+l+'"');r[l]()}else i.interval&&(r.pause(),r.cycle())})},o._dataApiClickHandler=function(t){var r=l.getSelectorFromElement(this);if(r){var i=e(r)[0];if(i&&e(i).hasClass(d.CAROUSEL)){var a=s({},e(i).data(),e(this).data()),u=this.getAttribute("data-slide-to");u&&(a.interval=!1),o._jQueryInterface.call(e(i),a),u&&e(i).data(n).to(u),t.preventDefault()}}},i(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return a}}]),o}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(f.CLICK_DATA_API,h.DATA_SLIDE,p._dataApiClickHandler),e(window).on(f.LOAD_DATA_API,function(){e(h.DATA_RIDE).each(function(){var t=e(this);p._jQueryInterface.call(t,t.data())})}),e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=o,p._jQueryInterface},p}(t),d=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="collapse",n="bs.collapse",r=e.fn[t],o={toggle:!0,parent:""},a={toggle:"boolean",parent:"(string|element)"},u={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},c={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},f={WIDTH:"width",HEIGHT:"height"},d={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},h=/*#__PURE__*/
function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var r=e(d.DATA_TOGGLE),i=0;i<r.length;i++){var o=r[i],s=l.getSelectorFromElement(o);null!==s&&e(s).filter(t).length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
var h=r.prototype;
// Public
// Private
// Static
return h.toggle=function(){e(this._element).hasClass(c.SHOW)?this.hide():this.show()},h.show=function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(c.SHOW)){var i,o;if(this._parent&&(i=e.makeArray(e(this._parent).find(d.ACTIVES).filter('[data-parent="'+this._config.parent+'"]')),0===i.length&&(i=null)),!(i&&(o=e(i).not(this._selector).data(n))&&o._isTransitioning)){var s=e.Event(u.SHOW);if(e(this._element).trigger(s),!s.isDefaultPrevented()){i&&(r._jQueryInterface.call(e(i).not(this._selector),"hide"),o||e(i).data(n,null));var a=this._getDimension();e(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING),this._element.style[a]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var f=function(){e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.SHOW),t._element.style[a]="",t.setTransitioning(!1),e(t._element).trigger(u.SHOWN)},h=a[0].toUpperCase()+a.slice(1),p="scroll"+h,g=l.getTransitionDurationFromElement(this._element);e(this._element).one(l.TRANSITION_END,f).emulateTransitionEnd(g),this._element.style[a]=this._element[p]+"px"}}}},h.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(c.SHOW)){var n=e.Event(u.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension();if(this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",l.reflow(this._element),e(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.SHOW),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var o=this._triggerArray[i],s=l.getSelectorFromElement(o);if(null!==s){var a=e(s);a.hasClass(c.SHOW)||e(o).addClass(c.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0);var f=function(){t.setTransitioning(!1),e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(u.HIDDEN)};this._element.style[r]="";var d=l.getTransitionDurationFromElement(this._element);e(this._element).one(l.TRANSITION_END,f).emulateTransitionEnd(d)}}},h.setTransitioning=function(e){this._isTransitioning=e},h.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},h._getConfig=function(e){// Coerce string values
return e=s({},o,e),e.toggle=Boolean(e.toggle),l.typeCheckConfig(t,e,a),e},h._getDimension=function(){return e(this._element).hasClass(f.WIDTH)?f.WIDTH:f.HEIGHT},h._getParent=function(){var t=this,n=null;l.isElement(this._config.parent)?(n=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},h._addAriaAndCollapsedClass=function(t,n){if(t){var r=e(t).hasClass(c.SHOW);n.length>0&&e(n).toggleClass(c.COLLAPSED,!r).attr("aria-expanded",r)}},r._getTargetFromElement=function(t){var n=l.getSelectorFromElement(t);return n?e(n)[0]:null},r._jQueryInterface=function(t){return this.each(function(){var i=e(this),a=i.data(n),l=s({},o,i.data(),"object"==typeof t&&t?t:{});if(!a&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),a||(a=new r(this,l),i.data(n,a)),"string"==typeof t){if(void 0===a[t])throw new TypeError('No method named "'+t+'"');a[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return o}}]),r}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(u.CLICK_DATA_API,d.DATA_TOGGLE,function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===t.currentTarget.tagName&&t.preventDefault();var r=e(this),i=l.getSelectorFromElement(this);e(i).each(function(){var t=e(this),i=t.data(n),o=i?"toggle":r.data();h._jQueryInterface.call(t,o)})}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=r,h._jQueryInterface},h}(t),h=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="dropdown",r="bs.dropdown",o="."+r,a=e.fn[t],u=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},f={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},d={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},h={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},p={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},g={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},m=/*#__PURE__*/
function(){function a(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}// Getters
var m=a.prototype;
// Public
// Private
// Static
// eslint-disable-next-line complexity
return m.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(f.DISABLED)){var t=a._getParentFromElement(this._element),r=e(this._menu).hasClass(f.SHOW);if(a._clearMenus(),!r){var i={relatedTarget:this._element},o=e.Event(c.SHOW,i);if(e(t).trigger(o),!o.isDefaultPrevented()){// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){/**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s=this._element;"parent"===this._config.reference?s=t:l.isElement(this._config.reference)&&(s=this._config.reference,// Check if it's jQuery element
void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&e(t).addClass(f.POSITION_STATIC),this._popper=new n(s,this._menu,this._getPopperConfig())}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===e(t).closest(d.NAVBAR_NAV).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(f.SHOW),e(t).toggleClass(f.SHOW).trigger(e.Event(c.SHOWN,i))}}}},m.dispose=function(){e.removeData(this._element,r),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},m.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},m._addEventListeners=function(){var t=this;e(this._element).on(c.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},m._getConfig=function(n){return n=s({},this.constructor.Default,e(this._element).data(),n),l.typeCheckConfig(t,n,this.constructor.DefaultType),n},m._getMenuElement=function(){if(!this._menu){var t=a._getParentFromElement(this._element);this._menu=e(t).find(d.MENU)[0]}return this._menu},m._getPlacement=function(){var t=e(this._element).parent(),n=h.BOTTOM;// Handle dropup
return t.hasClass(f.DROPUP)?(n=h.TOP,e(this._menu).hasClass(f.MENURIGHT)&&(n=h.TOPEND)):t.hasClass(f.DROPRIGHT)?n=h.RIGHT:t.hasClass(f.DROPLEFT)?n=h.LEFT:e(this._menu).hasClass(f.MENURIGHT)&&(n=h.BOTTOMEND),n},m._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},m._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},a._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(r),i="object"==typeof t?t:null;if(n||(n=new a(this,i),e(this).data(r,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},a._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(d.DATA_TOGGLE)),i=0;i<n.length;i++){var o=a._getParentFromElement(n[i]),s=e(n[i]).data(r),l={relatedTarget:n[i]};if(s){var u=s._menu;if(e(o).hasClass(f.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var h=e.Event(c.HIDE,l);e(o).trigger(h),h.isDefaultPrevented()||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[i].setAttribute("aria-expanded","false"),e(u).removeClass(f.SHOW),e(o).removeClass(f.SHOW).trigger(e.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(t){var n,r=l.getSelectorFromElement(t);return r&&(n=e(r)[0]),n||t.parentNode},a._dataApiKeydownHandler=function(t){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(d.MENU).length)):u.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(f.DISABLED))){var n=a._getParentFromElement(this),r=e(n).hasClass(f.SHOW);if(!r&&(27!==t.which||32!==t.which)||r&&(27===t.which||32===t.which)){if(27===t.which){var i=e(n).find(d.DATA_TOGGLE)[0];e(i).trigger("focus")}return void e(this).trigger("click")}var o=e(n).find(d.VISIBLE_ITEMS).get();if(0!==o.length){var s=o.indexOf(t.target);38===t.which&&s>0&&
// Up
s--,40===t.which&&s<o.length-1&&
// Down
s++,s<0&&(s=0),o[s].focus()}}},i(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return p}},{key:"DefaultType",get:function(){return g}}]),a}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(c.KEYDOWN_DATA_API,d.DATA_TOGGLE,m._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,d.MENU,m._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,m._clearMenus).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),m._jQueryInterface.call(e(this),"toggle")}).on(c.CLICK_DATA_API,d.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=a,m._jQueryInterface},m}(t),p=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="modal",n=".bs.modal",r=e.fn[t],o={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},u={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},c={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},d=/*#__PURE__*/
function(){function r(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(f.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}// Getters
var d=r.prototype;
// Public
// Private
// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
// Static
return d.toggle=function(e){return this._isShown?this.hide():this.show(e)},d.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(c.FADE)&&(this._isTransitioning=!0);var r=e.Event(u.SHOW,{relatedTarget:t});e(this._element).trigger(r),this._isShown||r.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(c.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(u.CLICK_DISMISS,f.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(u.MOUSEDOWN_DISMISS,function(){e(n._element).one(u.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},d.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var r=e.Event(u.HIDE);if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1;var i=e(this._element).hasClass(c.FADE);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(u.FOCUSIN),e(this._element).removeClass(c.SHOW),e(this._element).off(u.CLICK_DISMISS),e(this._dialog).off(u.MOUSEDOWN_DISMISS),i){var o=l.getTransitionDurationFromElement(this._element);e(this._element).one(l.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},d.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},d.handleUpdate=function(){this._adjustDialog()},d._getConfig=function(e){return e=s({},o,e),l.typeCheckConfig(t,e,a),e},d._showElement=function(t){var n=this,r=e(this._element).hasClass(c.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,r&&l.reflow(this._element),e(this._element).addClass(c.SHOW),this._config.focus&&this._enforceFocus();var i=e.Event(u.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(i)};if(r){var s=l.getTransitionDurationFromElement(this._element);e(this._dialog).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},d._enforceFocus=function(){var t=this;e(document).off(u.FOCUSIN).on(u.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},d._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(u.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(u.KEYDOWN_DISMISS)},d._setResizeEvent=function(){var t=this;this._isShown?e(window).on(u.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(u.RESIZE)},d._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(c.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(u.HIDDEN)})},d._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},d._showBackdrop=function(t){var n=this,r=e(this._element).hasClass(c.FADE)?c.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=c.BACKDROP,r&&e(this._backdrop).addClass(r),e(this._backdrop).appendTo(document.body),e(this._element).on(u.CLICK_DISMISS,function(e){if(n._ignoreBackdropClick)return void(n._ignoreBackdropClick=!1);e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&l.reflow(this._backdrop),e(this._backdrop).addClass(c.SHOW),!t)return;if(!r)return void t();var i=l.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(l.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(c.SHOW);var o=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(c.FADE)){var s=l.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o()}else t&&t()},d._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},d._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},d._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},d._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
// Adjust fixed content padding
e(f.FIXED_CONTENT).each(function(n,r){var i=e(r)[0].style.paddingRight,o=e(r).css("padding-right");e(r).data("padding-right",i).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),// Adjust sticky content margin
e(f.STICKY_CONTENT).each(function(n,r){var i=e(r)[0].style.marginRight,o=e(r).css("margin-right");e(r).data("margin-right",i).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),// Adjust navbar-toggler margin
e(f.NAVBAR_TOGGLER).each(function(n,r){var i=e(r)[0].style.marginRight,o=e(r).css("margin-right");e(r).data("margin-right",i).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")});// Adjust body padding
var n=document.body.style.paddingRight,r=e(document.body).css("padding-right");e(document.body).data("padding-right",n).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}},d._resetScrollbar=function(){
// Restore fixed content padding
e(f.FIXED_CONTENT).each(function(t,n){var r=e(n).data("padding-right");void 0!==r&&e(n).css("padding-right",r).removeData("padding-right")}),// Restore sticky content and navbar-toggler margin
e(f.STICKY_CONTENT+", "+f.NAVBAR_TOGGLER).each(function(t,n){var r=e(n).data("margin-right");void 0!==r&&e(n).css("margin-right",r).removeData("margin-right")});// Restore body padding
var t=e(document.body).data("padding-right");void 0!==t&&e(document.body).css("padding-right",t).removeData("padding-right")},d._getScrollbarWidth=function(){
// thx d.walsh
var e=document.createElement("div");e.className=c.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},r._jQueryInterface=function(t,n){return this.each(function(){var i=e(this).data("bs.modal"),a=s({},o,e(this).data(),"object"==typeof t&&t?t:{});if(i||(i=new r(this,a),e(this).data("bs.modal",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t](n)}else a.show&&i.show(n)})},i(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return o}}]),r}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(u.CLICK_DATA_API,f.DATA_TOGGLE,function(t){var n,r=this,i=l.getSelectorFromElement(this);i&&(n=e(i)[0]);var o=e(n).data("bs.modal")?"toggle":s({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(n).one(u.SHOW,function(t){t.isDefaultPrevented()||a.one(u.HIDDEN,function(){e(r).is(":visible")&&r.focus()})});d._jQueryInterface.call(e(n),o,this)}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=r,d._jQueryInterface},d}(t),g=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="tooltip",r=".bs.tooltip",o=e.fn[t],a=new RegExp("(^|\\s)bs-tooltip\\S+","g"),u={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},d={SHOW:"show",OUT:"out"},h={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,INSERTED:"inserted"+r,CLICK:"click"+r,FOCUSIN:"focusin"+r,FOCUSOUT:"focusout"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r},p={FADE:"fade",SHOW:"show"},g={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},m={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},v=/*#__PURE__*/
function(){function o(e,t){/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}// Getters
var v=o.prototype;
// Public
// Protected
// Private
// Static
return v.enable=function(){this._isEnabled=!0},v.disable=function(){this._isEnabled=!1},v.toggleEnabled=function(){this._isEnabled=!this._isEnabled},v.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,r=e(t.currentTarget).data(n);r||(r=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,r)),r._activeTrigger.click=!r._activeTrigger.click,r._isWithActiveTrigger()?r._enter(null,r):r._leave(null,r)}else{if(e(this.getTipElement()).hasClass(p.SHOW))return void this._leave(null,this);this._enter(null,this)}},v.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},v.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var r=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(r);var i=e.contains(this.element.ownerDocument.documentElement,this.element);if(r.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=l.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&e(o).addClass(p.FADE);var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(a);this.addAttachmentClass(u);var c=!1===this.config.container?document.body:e(this.config.container);e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(c),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:u,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:g.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(p.SHOW),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var f=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===d.OUT&&t._leave(null,t)};if(e(this.tip).hasClass(p.FADE)){var h=l.getTransitionDurationFromElement(this.tip);e(this.tip).one(l.TRANSITION_END,f).emulateTransitionEnd(h)}else f()}},v.hide=function(t){var n=this,r=this.getTipElement(),i=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==d.SHOW&&r.parentNode&&r.parentNode.removeChild(r),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(i),!i.isDefaultPrevented()){if(e(r).removeClass(p.SHOW),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[m.CLICK]=!1,this._activeTrigger[m.FOCUS]=!1,this._activeTrigger[m.HOVER]=!1,e(this.tip).hasClass(p.FADE)){var s=l.getTransitionDurationFromElement(r);e(r).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o();this._hoverState=""}},v.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},v.isWithContent=function(){return Boolean(this.getTitle())},v.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},v.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},v.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(g.TOOLTIP_INNER),this.getTitle()),t.removeClass(p.FADE+" "+p.SHOW)},v.setElementContent=function(t,n){var r=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?
// Content is a DOM node or a jQuery
r?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[r?"html":"text"](n)},v.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},v._getAttachment=function(e){return c[e.toUpperCase()]},v._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==m.MANUAL){var r=n===m.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=n===m.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(r,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},v._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},v._enter=function(t,n){var r=this.constructor.DATA_KEY;return n=n||e(t.currentTarget).data(r),n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusin"===t.type?m.FOCUS:m.HOVER]=!0),e(n.getTipElement()).hasClass(p.SHOW)||n._hoverState===d.SHOW?void(n._hoverState=d.SHOW):(clearTimeout(n._timeout),n._hoverState=d.SHOW,n.config.delay&&n.config.delay.show?void(n._timeout=setTimeout(function(){n._hoverState===d.SHOW&&n.show()},n.config.delay.show)):void n.show())},v._leave=function(t,n){var r=this.constructor.DATA_KEY;if(n=n||e(t.currentTarget).data(r),n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusout"===t.type?m.FOCUS:m.HOVER]=!1),!n._isWithActiveTrigger()){if(clearTimeout(n._timeout),n._hoverState=d.OUT,!n.config.delay||!n.config.delay.hide)return void n.hide();n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide)}},v._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},v._getConfig=function(n){return n=s({},this.constructor.Default,e(this.element).data(),"object"==typeof n&&n?n:{}),"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),l.typeCheckConfig(t,n,this.constructor.DefaultType),n},v._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},v._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(a);null!==n&&n.length>0&&t.removeClass(n.join(""))},v._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},v._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(p.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),r="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,r),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return r}},{key:"DefaultType",get:function(){return u}}]),o}();/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=o,v._jQueryInterface},v}(t),m=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="popover",n=".bs.popover",r=e.fn[t],o=new RegExp("(^|\\s)bs-popover\\S+","g"),l=s({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),u=s({},g.DefaultType,{content:"(string|element|function)"}),c={FADE:"fade",SHOW:"show"},f={TITLE:".popover-header",CONTENT:".popover-body"},d={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},h=/*#__PURE__*/
function(r){function s(){return r.apply(this,arguments)||this}a(s,r);var h=s.prototype;
// Overrides
// Private
// Static
return h.isWithContent=function(){return this.getTitle()||this._getContent()},h.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},h.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},h.setContent=function(){var t=e(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent(t.find(f.TITLE),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(f.CONTENT),n),t.removeClass(c.FADE+" "+c.SHOW)},h._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},h._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(o);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),r="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new s(this,r),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i(s,null,[{key:"VERSION",
// Getters
get:function(){return"4.1.1"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return u}}]),s}(g);/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=r,h._jQueryInterface},h}(t),v=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="scrollspy",n=e.fn[t],r={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},a={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},u={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},c={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},f={OFFSET:"offset",POSITION:"position"},d=/*#__PURE__*/
function(){function n(t,n){var r=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+c.NAV_LINKS+","+this._config.target+" "+c.LIST_ITEMS+","+this._config.target+" "+c.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(a.SCROLL,function(e){return r._process(e)}),this.refresh(),this._process()}// Getters
var d=n.prototype;
// Public
// Private
// Static
return d.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?f.OFFSET:f.POSITION,r="auto"===this._config.method?n:this._config.method,i=r===f.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=l.getSelectorFromElement(t);if(o&&(n=e(o)[0]),n){var s=n.getBoundingClientRect();if(s.width||s.height)
// TODO (fat): remove sketch reliance on jQuery position/offset
return[e(n)[r]().top+i,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},d.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},d._getConfig=function(n){if(n=s({},r,"object"==typeof n&&n?n:{}),"string"!=typeof n.target){var i=e(n.target).attr("id");i||(i=l.getUID(t),e(n.target).attr("id",i)),n.target="#"+i}return l.typeCheckConfig(t,n,o),n},d._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},d._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},d._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},d._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var r=this._targets[this._targets.length-1];return void(this._activeTarget!==r&&this._activate(r))}if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(void 0===this._offsets[i+1]||e<this._offsets[i+1])&&this._activate(this._targets[i])}},d._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");// eslint-disable-next-line arrow-body-style
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var r=e(n.join(","));r.hasClass(u.DROPDOWN_ITEM)?(r.closest(c.DROPDOWN).find(c.DROPDOWN_TOGGLE).addClass(u.ACTIVE),r.addClass(u.ACTIVE)):(
// Set triggered link as active
r.addClass(u.ACTIVE),// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
r.parents(c.NAV_LIST_GROUP).prev(c.NAV_LINKS+", "+c.LIST_ITEMS).addClass(u.ACTIVE),// Handle special case when .nav-link is inside .nav-item
r.parents(c.NAV_LIST_GROUP).prev(c.NAV_ITEMS).children(c.NAV_LINKS).addClass(u.ACTIVE)),e(this._scrollElement).trigger(a.ACTIVATE,{relatedTarget:t})},d._clear=function(){e(this._selector).filter(c.ACTIVE).removeClass(u.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var r=e(this).data("bs.scrollspy"),i="object"==typeof t&&t;if(r||(r=new n(this,i),e(this).data("bs.scrollspy",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t]()}})},i(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return r}}]),n}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(window).on(a.LOAD_DATA_API,function(){for(var t=e.makeArray(e(c.DATA_SPY)),n=t.length;n--;){var r=e(t[n]);d._jQueryInterface.call(r,r.data())}}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=n,d._jQueryInterface},d}(t),y=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},s=/*#__PURE__*/
function(){function t(e){this._element=e}// Getters
var s=t.prototype;
// Public
// Private
// Static
return s.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(r.ACTIVE)||e(this._element).hasClass(r.DISABLED))){var i,s,a=e(this._element).closest(o.NAV_LIST_GROUP)[0],u=l.getSelectorFromElement(this._element);if(a){var c="UL"===a.nodeName?o.ACTIVE_UL:o.ACTIVE;s=e.makeArray(e(a).find(c)),s=s[s.length-1]}var f=e.Event(n.HIDE,{relatedTarget:this._element}),d=e.Event(n.SHOW,{relatedTarget:s});if(s&&e(s).trigger(f),e(this._element).trigger(d),!d.isDefaultPrevented()&&!f.isDefaultPrevented()){u&&(i=e(u)[0]),this._activate(this._element,a);var h=function(){var r=e.Event(n.HIDDEN,{relatedTarget:t._element}),i=e.Event(n.SHOWN,{relatedTarget:s});e(s).trigger(r),e(t._element).trigger(i)};i?this._activate(i,i.parentNode,h):h()}}},s.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},s._activate=function(t,n,i){var s,a=this;s="UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE);var u=s[0],c=i&&u&&e(u).hasClass(r.FADE),f=function(){return a._transitionComplete(t,u,i)};if(u&&c){var d=l.getTransitionDurationFromElement(u);e(u).one(l.TRANSITION_END,f).emulateTransitionEnd(d)}else f()},s._transitionComplete=function(t,n,i){if(n){e(n).removeClass(r.SHOW+" "+r.ACTIVE);var s=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];s&&e(s).removeClass(r.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(r.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),l.reflow(t),e(t).addClass(r.SHOW),t.parentNode&&e(t.parentNode).hasClass(r.DROPDOWN_MENU)){var a=e(t).closest(o.DROPDOWN)[0];a&&e(a).find(o.DROPDOWN_TOGGLE).addClass(r.ACTIVE),t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab");if(i||(i=new t(this),r.data("bs.tab",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),s._jQueryInterface.call(e(this),"show")}),e.fn.tab=s._jQueryInterface,e.fn.tab.Constructor=s,e.fn.tab.noConflict=function(){return e.fn.tab=t,s._jQueryInterface},s}(t);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
!function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(t),e.Util=l,e.Alert=u,e.Button=c,e.Carousel=f,e.Collapse=d,e.Dropdown=h,e.Modal=p,e.Popover=m,e.Scrollspy=v,e.Tab=y,e.Tooltip=g,Object.defineProperty(e,"__esModule",{value:!0})})},/***/
"../node_modules/holderjs/holder.js":/***/
function(e,t,n){/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(e){if(e.document){var t=e.document;
//https://github.com/inexorabletash/polyfill/blob/master/web.js
t.querySelectorAll||(t.querySelectorAll=function(n){var r,i=t.createElement("style"),o=[];for(t.documentElement.firstChild.appendChild(i),t._qsa=[],i.styleSheet.cssText=n+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",e.scrollBy(0,0),i.parentNode.removeChild(i);t._qsa.length;)r=t._qsa.shift(),r.style.removeAttribute("x-qsa"),o.push(r);return t._qsa=null,o}),t.querySelector||(t.querySelector=function(e){var n=t.querySelectorAll(e);return n.length?n[0]:null}),t.getElementsByClassName||(t.getElementsByClassName=function(e){return e=String(e).replace(/^|\s+/g,"."),t.querySelectorAll(e)}),
//https://github.com/inexorabletash/polyfill
// ES5 15.2.3.14 Object.keys ( O )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),
// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
Array.prototype.forEach||(Array.prototype.forEach=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw TypeError();var r,i=arguments[1];for(r=0;r<n;r++)r in t&&e.call(i,t[r],r,t)}),
//https://github.com/inexorabletash/polyfill/blob/master/web.js
function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob=e.atob||function(e){e=String(e);var n,r=0,i=[],o=0,s=0;if(e=e.replace(/\s/g,""),e.length%4==0&&(e=e.replace(/=+$/,"")),e.length%4==1)throw Error("InvalidCharacterError");if(/[^+\/0-9A-Za-z]/.test(e))throw Error("InvalidCharacterError");for(;r<e.length;)n=t.indexOf(e.charAt(r)),o=o<<6|n,s+=6,24===s&&(i.push(String.fromCharCode(o>>16&255)),i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o)),s=0,o=0),r+=1;return 12===s?(o>>=4,i.push(String.fromCharCode(255&o))):18===s&&(o>>=2,i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o))),i.join("")},e.btoa=e.btoa||function(e){e=String(e);var n,r,i,o,s,a,l,u=0,c=[];if(/[^\x00-\xFF]/.test(e))throw Error("InvalidCharacterError");for(;u<e.length;)n=e.charCodeAt(u++),r=e.charCodeAt(u++),i=e.charCodeAt(u++),
// 111111 112222 222233 333333
o=n>>2,s=(3&n)<<4|r>>4,a=(15&r)<<2|i>>6,l=63&i,u===e.length+2?(a=64,l=64):u===e.length+1&&(l=64),c.push(t.charAt(o),t.charAt(s),t.charAt(a),t.charAt(l));return c.join("")}}(e),
//https://gist.github.com/jimeh/332357
Object.prototype.hasOwnProperty||(/*jshint -W001, -W103 */
Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])}),
// @license http://opensource.org/licenses/MIT
// copyright Paul Irish 2015
// Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
//   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values
// if you want values similar to what you'd get with real perf.now, place this towards the head of the page
// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed
function(){if("performance"in e==!1&&(e.performance={}),Date.now=Date.now||function(){// thanks IE8
return(new Date).getTime()},"now"in e.performance==!1){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),e.performance.now=function(){return Date.now()-t}}}(),
//requestAnimationFrame polyfill for older Firefox/Chrome versions
e.requestAnimationFrame||(e.webkitRequestAnimationFrame&&e.webkitCancelAnimationFrame?
//https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/requestAnimationFrame/polyfill-webkit.js
function(e){e.requestAnimationFrame=function(t){return webkitRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=e.webkitCancelAnimationFrame}(e):e.mozRequestAnimationFrame&&e.mozCancelAnimationFrame?
//https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/requestAnimationFrame/polyfill-moz.js
function(e){e.requestAnimationFrame=function(t){return mozRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=e.mozCancelAnimationFrame}(e):function(e){e.requestAnimationFrame=function(t){return e.setTimeout(t,1e3/60)},e.cancelAnimationFrame=e.clearTimeout}(e))}}(this),function(t,n){e.exports=n()}(0,function(){/******/
return function(e){/******/
// The require function
/******/
function t(r){/******/
// Check if module is in cache
/******/
if(n[r])/******/
return n[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var i=n[r]={/******/
exports:{},/******/
id:r,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return t.m=e,t.c=n,t.p="",t(0)}([/* 0 */
/***/
function(e,t,n){/*
	Holder.js - client side image placeholders
	(c) 2012-2015 Ivan Malopinsky - http://imsky.co
	*/
e.exports=n(1)},/* 1 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(t){/**
	 * Processes provided source attribute and sets up the appropriate rendering workflow
	 *
	 * @private
	 * @param options Instance options from Holder.run
	 * @param renderSettings Instance configuration
	 * @param src Image URL
	 * @param el Image DOM element
	 */
function r(e,t,n,r){var s=i(n.substr(n.lastIndexOf(e.domain)),e);s&&o({mode:null,el:r,flags:s,engineSettings:t})}/**
	 * Processes a Holder URL and extracts configuration from query string
	 *
	 * @private
	 * @param url URL
	 * @param instanceOptions Instance options from Holder.run
	 */
function i(e,t){var n={theme:C(D.settings.themes.gray,null),stylesheets:t.stylesheets,instanceOptions:t},r=e.indexOf("?"),i=[e];-1!==r&&(i=[e.slice(0,r),e.slice(r+1)]);var o=i[0].split("/");n.holderURL=e;var s=o[1],a=s.match(/([\d]+p?)x([\d]+p?)/);if(!a)return!1;if(n.fluid=-1!==s.indexOf("p"),n.dimensions={width:a[1].replace("p","%"),height:a[2].replace("p","%")},2===i.length){var l=m.parse(i[1]);
// Dimensions
if(y.truthy(l.ratio)){n.fluid=!0;var u=parseFloat(n.dimensions.width.replace("%","")),c=parseFloat(n.dimensions.height.replace("%",""));c=Math.floor(c/u*100),u=100,n.dimensions.width=u+"%",n.dimensions.height=c+"%"}if(n.auto=y.truthy(l.auto),
// Colors
l.bg&&(n.theme.bg=y.parseColor(l.bg)),l.fg&&(n.theme.fg=y.parseColor(l.fg)),
//todo: add automatic foreground to themes without foreground
l.bg&&!l.fg&&(n.autoFg=!0),l.theme&&n.instanceOptions.themes.hasOwnProperty(l.theme)&&(n.theme=C(n.instanceOptions.themes[l.theme],null)),
// Text
l.text&&(n.text=l.text),l.textmode&&(n.textmode=l.textmode),l.size&&(n.size=l.size),l.font&&(n.font=l.font),l.align&&(n.align=l.align),l.lineWrap&&(n.lineWrap=l.lineWrap),n.nowrap=y.truthy(l.nowrap),
// Miscellaneous
n.outline=y.truthy(l.outline),y.truthy(l.random)){D.vars.cache.themeKeys=D.vars.cache.themeKeys||Object.keys(n.instanceOptions.themes);var f=D.vars.cache.themeKeys[0|Math.random()*D.vars.cache.themeKeys.length];n.theme=C(n.instanceOptions.themes[f],null)}}return n}/**
	 * Modifies the DOM to fit placeholders and sets up resizable image callbacks (for fluid and automatically sized placeholders)
	 *
	 * @private
	 * @param settings DOM prep settings
	 */
function o(e){var t=e.mode,n=e.el,r=e.flags,i=e.engineSettings,o=r.dimensions,a=r.theme,l=o.width+"x"+o.height;t=null==t?r.fluid?"fluid":"image":t;var f=/holder_([a-z]+)/g;if(null!=r.text&&(a.text=r.text,"object"===n.nodeName.toLowerCase())){for(var d=a.text.split("\\n"),h=0;h<d.length;h++)d[h]=y.encodeHtmlEntity(d[h]);a.text=d.join("\\n")}if(a.text){var p=a.text.match(f);null!==p&&
//todo: optimize template replacement
p.forEach(function(e){"holder_dimensions"===e&&(a.text=a.text.replace(e,l))})}var g=r.holderURL,m=C(i,null);if(r.font&&(/*
	        If external fonts are used in a <img> placeholder rendered with SVG, Holder falls back to canvas.

	        This is done because Firefox and Chrome disallow embedded SVGs from referencing external assets.
	        The workaround is either to change the placeholder tag from <img> to <object> or to use the canvas renderer.
	        */
a.font=r.font,!m.noFontFallback&&"img"===n.nodeName.toLowerCase()&&D.setup.supportsCanvas&&"svg"===m.renderer&&(m=C(m,{renderer:"canvas"}))),
//Chrome and Opera require a quick 10ms re-render if web fonts are used with canvas
r.font&&"canvas"==m.renderer&&(m.reRender=!0),"background"==t)null==n.getAttribute("data-background-src")&&w.setAttr(n,{"data-background-src":g});else{var v={};v[D.vars.dataAttr]=g,w.setAttr(n,v)}r.theme=a,
//todo consider using all renderSettings in holderData
n.holderData={flags:r,engineSettings:m},"image"!=t&&"fluid"!=t||w.setAttr(n,{alt:a.text?a.text+" ["+l+"]":l});var b={mode:t,el:n,holderSettings:{dimensions:o,theme:a,flags:r},engineSettings:m};"image"==t?(r.auto||(n.style.width=o.width+"px",n.style.height=o.height+"px"),"html"==m.renderer?n.style.backgroundColor=a.bg:(s(b),"exact"==r.textmode&&(n.holderData.resizeUpdate=!0,D.vars.resizableImages.push(n),u(n)))):"background"==t&&"html"!=m.renderer?s(b):"fluid"==t&&(n.holderData.resizeUpdate=!0,"%"==o.height.slice(-1)?n.style.height=o.height:null!=r.auto&&r.auto||(n.style.height=o.height+"px"),"%"==o.width.slice(-1)?n.style.width=o.width:null!=r.auto&&r.auto||(n.style.width=o.width+"px"),"inline"!=n.style.display&&""!==n.style.display&&"none"!=n.style.display||(n.style.display="block"),c(n),"html"==m.renderer?n.style.backgroundColor=a.bg:(D.vars.resizableImages.push(n),u(n)))}/**
	 * Core function that takes output from renderers and sets it as the source or background-image of the target element
	 *
	 * @private
	 * @param renderSettings Renderer settings
	 */
function s(e){function n(){var t=null;switch(l.renderer){case"canvas":t=x(c,e);break;case"svg":t=T(c,e);break;default:throw"Holder: invalid renderer: "+l.renderer}return t}var r=null,i=e.mode,o=e.el,s=e.holderSettings,l=e.engineSettings;switch(l.renderer){case"svg":if(!D.setup.supportsSVG)return;break;case"canvas":if(!D.setup.supportsCanvas)return;break;default:return}
//todo: move generation of scene up to flag generation to reduce extra object creation
var u={width:s.dimensions.width,height:s.dimensions.height,theme:s.theme,flags:s.flags},c=a(u);if(null==(r=n()))throw"Holder: couldn't render placeholder";
//todo: add <object> canvas rendering
"background"==i?(o.style.backgroundImage="url("+r+")",l.noBackgroundSize||(o.style.backgroundSize=u.width+"px "+u.height+"px")):("img"===o.nodeName.toLowerCase()?w.setAttr(o,{src:r}):"object"===o.nodeName.toLowerCase()&&w.setAttr(o,{data:r,type:"image/svg+xml"}),l.reRender&&t.setTimeout(function(){var e=n();if(null==e)throw"Holder: couldn't render placeholder";
//todo: refactor this code into a function
"img"===o.nodeName.toLowerCase()?w.setAttr(o,{src:e}):"object"===o.nodeName.toLowerCase()&&w.setAttr(o,{data:e,type:"image/svg+xml"})},150)),
//todo: account for re-rendering
w.setAttr(o,{"data-holder-rendered":!0})}/**
	 * Core function that takes a Holder scene description and builds a scene graph
	 *
	 * @private
	 * @param scene Holder scene object
	 */
//todo: make this function reusable
//todo: merge app defaults and setup properties into the scene argument
function a(e){function t(e,t,n,r){t.width=n,t.height=r,e.width=Math.max(e.width,t.width),e.height+=t.height}var n=D.defaults.size;switch(parseFloat(e.theme.size)?n=e.theme.size:parseFloat(e.flags.size)&&(n=e.flags.size),e.font={family:e.theme.font?e.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:l(e.width,e.height,n,D.defaults.scale),units:e.theme.units?e.theme.units:D.defaults.units,weight:e.theme.fontweight?e.theme.fontweight:"bold"},e.text=e.theme.text||Math.floor(e.width)+"x"+Math.floor(e.height),e.noWrap=e.theme.nowrap||e.flags.nowrap,e.align=e.theme.align||e.flags.align||"center",e.flags.textmode){case"literal":e.text=e.flags.dimensions.width+"x"+e.flags.dimensions.height;break;case"exact":if(!e.flags.exactDimensions)break;e.text=Math.floor(e.flags.exactDimensions.width)+"x"+Math.floor(e.flags.exactDimensions.height)}var r=e.flags.lineWrap||D.setup.lineWrapRatio,i=e.width*r,o=i,s=new v({width:e.width,height:e.height}),a=s.Shape,u=new a.Rect("holderBg",{fill:e.theme.bg});if(u.resize(e.width,e.height),s.root.add(u),e.flags.outline){var c=new E(u.properties.fill);c=c.lighten(c.lighterThan("7f7f7f")?-.1:.1),u.properties.outline={fill:c.toHex(!0),width:2}}var f=e.theme.fg;if(e.flags.autoFg){var d=new E(u.properties.fill),h=new E("fff"),p=new E("000",{alpha:.285714});f=d.blendAlpha(d.lighterThan("7f7f7f")?p:h).toHex(!0)}var g=new a.Group("holderTextGroup",{text:e.text,align:e.align,font:e.font,fill:f});g.moveTo(null,null,1),s.root.add(g);var m=g.textPositionData=I(s);if(!m)throw"Holder: staging fallback not supported yet.";g.properties.leading=m.boundingBox.height;var y=null,b=null;if(m.lineCount>1){var w,_=0,T=0,x=0;b=new a.Group("line"+x),
//Double margin so that left/right-aligned next is not flush with edge of image
"left"!==e.align&&"right"!==e.align||(o=e.width*(1-2*(1-r)));for(var C=0;C<m.words.length;C++){var A=m.words[C];y=new a.Text(A.text);var S="\\n"==A.text;!e.noWrap&&(_+A.width>=o||!0===S)&&(t(g,b,_,g.properties.leading),g.add(b),_=0,T+=g.properties.leading,x+=1,b=new a.Group("line"+x),b.y=T),!0!==S&&(y.moveTo(_,0),_+=m.spaceWidth+A.width,b.add(y))}if(t(g,b,_,g.properties.leading),g.add(b),"left"===e.align)g.moveTo(e.width-i,null,null);else if("right"===e.align){for(w in g.children)b=g.children[w],b.moveTo(e.width-b.width,null,null);g.moveTo(0-(e.width-i),null,null)}else{for(w in g.children)b=g.children[w],b.moveTo((g.width-b.width)/2,null,null);g.moveTo((e.width-g.width)/2,null,null)}g.moveTo(null,(e.height-g.height)/2,null),
//If the text exceeds vertical space, move it down so the first line is visible
(e.height-g.height)/2<0&&g.moveTo(null,0,null)}else y=new a.Text(e.text),b=new a.Group("line0"),b.add(y),g.add(b),"left"===e.align?g.moveTo(e.width-i,null,null):"right"===e.align?g.moveTo(0-(e.width-i),null,null):g.moveTo((e.width-m.boundingBox.width)/2,null,null),g.moveTo(null,(e.height-m.boundingBox.height)/2,null);
//todo: renderlist
return s}/**
	 * Adaptive text sizing function
	 *
	 * @private
	 * @param width Parent width
	 * @param height Parent height
	 * @param fontSize Requested text size
	 * @param scale Proportional scale of text
	 */
function l(e,t,n,r){var i=parseInt(e,10),o=parseInt(t,10),s=Math.max(i,o),a=Math.min(i,o),l=.8*Math.min(a,s*r);return Math.round(Math.max(n,l))}/**
	 * Iterates over resizable (fluid or auto) placeholders and renders them
	 *
	 * @private
	 * @param element Optional element selector, specified only if a specific element needs to be re-rendered
	 */
function u(e){var t;t=null==e||null==e.nodeType?D.vars.resizableImages:[e];for(var n=0,r=t.length;n<r;n++){var i=t[n];if(i.holderData){var o=i.holderData.flags,a=A(i);if(a){if(!i.holderData.resizeUpdate)continue;if(o.fluid&&o.auto){var l=i.holderData.fluidConfig;switch(l.mode){case"width":a.height=a.width/l.ratio;break;case"height":a.width=a.height*l.ratio}}var u={mode:"image",holderSettings:{dimensions:a,theme:o.theme,flags:o},el:i,engineSettings:i.holderData.engineSettings};"exact"==o.textmode&&(o.exactDimensions=a,u.holderSettings.dimensions=o.dimensions),s(u)}else d(i)}}}/**
	 * Sets up aspect ratio metadata for fluid placeholders, in order to preserve proportions when resizing
	 *
	 * @private
	 * @param el Image DOM element
	 */
function c(e){if(e.holderData){var t=A(e);if(t){var n=e.holderData.flags,r={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:t};r.fluidWidth&&!r.fluidHeight?(r.mode="width",r.ratio=r.initialDimensions.width/parseFloat(n.dimensions.height)):!r.fluidWidth&&r.fluidHeight&&(r.mode="height",r.ratio=parseFloat(n.dimensions.width)/r.initialDimensions.height),e.holderData.fluidConfig=r}else d(e)}}/**
	 * Iterates through all current invisible images, and if they're visible, renders them and removes them from further checks. Runs every animation frame.
	 *
	 * @private
	 */
function f(){var e,n=[],r=Object.keys(D.vars.invisibleImages);r.forEach(function(t){e=D.vars.invisibleImages[t],A(e)&&"img"==e.nodeName.toLowerCase()&&(n.push(e),delete D.vars.invisibleImages[t])}),n.length&&O.run({images:n}),
// Done to prevent 100% CPU usage via aggressive calling of requestAnimationFrame
setTimeout(function(){t.requestAnimationFrame(f)},10)}/**
	 * Sets a unique ID for an image detected to be invisible and adds it to the map of invisible images checked by visibilityCheck
	 *
	 * @private
	 * @param el Invisible DOM element
	 */
function d(e){e.holderData.invisibleId||(D.vars.invisibleId+=1,D.vars.invisibleImages["i"+D.vars.invisibleId]=e,e.holderData.invisibleId=D.vars.invisibleId)}
//Helpers
/**
	 * Prevents a function from being called too often, waits until a timer elapses to call it again
	 *
	 * @param fn Function to call
	 */
function h(e){D.vars.debounceTimer||e.call(this),D.vars.debounceTimer&&t.clearTimeout(D.vars.debounceTimer),D.vars.debounceTimer=t.setTimeout(function(){D.vars.debounceTimer=null,e.call(this)},D.setup.debounce)}/**
	 * Holder-specific resize/orientation change callback, debounced to prevent excessive execution
	 */
function p(){h(function(){u(null)})}/*
	Holder.js - client side image placeholders
	(c) 2012-2016 Ivan Malopinsky - http://imsky.co
	*/
//Libraries and functions
var g=n(2),m=n(3),v=n(6),y=n(7),b=n(8),w=n(9),E=n(10),_=n(11),T=n(12),x=n(15),C=y.extend,A=y.dimensionCheck,S=_.svg_ns,O={version:_.version,/**
	     * Adds a theme to default settings
	     *
	     * @param {string} name Theme name
	     * @param {Object} theme Theme object, with foreground, background, size, font, and fontweight properties.
	     */
addTheme:function(e,t){return null!=e&&null!=t&&(D.settings.themes[e]=t),delete D.vars.cache.themeKeys,this},/**
	     * Appends a placeholder to an element
	     *
	     * @param {string} src Placeholder URL string
	     * @param el A selector or a reference to a DOM node
	     */
addImage:function(e,t){return w.getNodeArray(t).forEach(function(t){var n=w.newEl("img"),r={};r[D.setup.dataAttr]=e,w.setAttr(n,r),t.appendChild(n)}),this},/**
	     * Sets whether or not an image is updated on resize.
	     * If an image is set to be updated, it is immediately rendered.
	     *
	     * @param {Object} el Image DOM element
	     * @param {Boolean} value Resizable update flag value
	     */
setResizeUpdate:function(e,t){e.holderData&&(e.holderData.resizeUpdate=!!t,e.holderData.resizeUpdate&&u(e))},/**
	     * Runs Holder with options. By default runs Holder on all images with "holder.js" in their source attributes.
	     *
	     * @param {Object} userOptions Options object, can contain domain, themes, images, and bgnodes properties
	     */
run:function(e){
//todo: split processing into separate queues
e=e||{};var n={},s=C(D.settings,e);D.vars.preempted=!0,D.vars.dataAttr=s.dataAttr||D.setup.dataAttr,n.renderer=s.renderer?s.renderer:D.setup.renderer,-1===D.setup.renderers.join(",").indexOf(n.renderer)&&(n.renderer=D.setup.supportsSVG?"svg":D.setup.supportsCanvas?"canvas":"html");var a=w.getNodeArray(s.images),l=w.getNodeArray(s.bgnodes),u=w.getNodeArray(s.stylenodes),c=w.getNodeArray(s.objects);return n.stylesheets=[],n.svgXMLStylesheet=!0,n.noFontFallback=!!s.noFontFallback,n.noBackgroundSize=!!s.noBackgroundSize,u.forEach(function(e){if(e.attributes.rel&&e.attributes.href&&"stylesheet"==e.attributes.rel.value){var t=e.attributes.href.value,r=w.newEl("a");r.href=t;var i=r.protocol+"//"+r.host+r.pathname+r.search;n.stylesheets.push(i)}}),l.forEach(function(e){
//Skip processing background nodes if getComputedStyle is unavailable, since only modern browsers would be able to use canvas or SVG to render to background
if(t.getComputedStyle){var r=t.getComputedStyle(e,null).getPropertyValue("background-image"),a=e.getAttribute("data-background-src"),l=a||r,u=null,c=s.domain+"/",f=l.indexOf(c);if(0===f)u=l;else if(1===f&&"?"===l[0])u=l.slice(1);else{var d=l.substr(f).match(/([^\"]*)"?\)/);if(null!==d)u=d[1];else if(0===l.indexOf("url("))throw"Holder: unable to parse background URL: "+l}if(u){var h=i(u,s);h&&o({mode:"background",el:e,flags:h,engineSettings:n})}}}),c.forEach(function(e){var t={};try{t.data=e.getAttribute("data"),t.dataSrc=e.getAttribute(D.vars.dataAttr)}catch(e){}var i=null!=t.data&&0===t.data.indexOf(s.domain),o=null!=t.dataSrc&&0===t.dataSrc.indexOf(s.domain);i?r(s,n,t.data,e):o&&r(s,n,t.dataSrc,e)}),a.forEach(function(e){var t={};try{t.src=e.getAttribute("src"),t.dataSrc=e.getAttribute(D.vars.dataAttr),t.rendered=e.getAttribute("data-holder-rendered")}catch(e){}var i=null!=t.src,o=null!=t.dataSrc&&0===t.dataSrc.indexOf(s.domain),a=null!=t.rendered&&"true"==t.rendered;i?0===t.src.indexOf(s.domain)?r(s,n,t.src,e):o&&(
//Image has a valid data-src and an invalid src
a?
//If the placeholder has already been render, re-render it
r(s,n,t.dataSrc,e):
//If the placeholder has not been rendered, check if the image exists and render a fallback if it doesn't
function(e,t,n,i,o){y.imageExists(e,function(e){e||r(t,n,i,o)})}(t.src,s,n,t.dataSrc,e)):o&&r(s,n,t.dataSrc,e)}),this}},D={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",themes:{gray:{bg:"#EEEEEE",fg:"#AAAAAA"},social:{bg:"#3a5a97",fg:"#FFFFFF"},industrial:{bg:"#434A52",fg:"#C2F200"},sky:{bg:"#0D8FDB",fg:"#FFFFFF"},vine:{bg:"#39DBAC",fg:"#1E292C"},lava:{bg:"#F8591A",fg:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16}},I=function(){var e=null,t=null,n=null;return function(r){var i=r.root;if(D.setup.supportsSVG){var o=!1;null!=e&&e.parentNode===document.body||(o=!0),e=b.initSVG(e,i.properties.width,i.properties.height),
//Show staging element before staging
e.style.display="block",o&&(t=w.newEl("text",S),n=function(e){return document.createTextNode(e)}(null),w.setAttr(t,{x:0}),t.appendChild(n),e.appendChild(t),document.body.appendChild(e),e.style.visibility="hidden",e.style.position="absolute",e.style.top="-100%",e.style.left="-100%");var s=i.children.holderTextGroup,a=s.properties;w.setAttr(t,{y:a.font.size,style:y.cssProps({"font-weight":a.font.weight,"font-size":a.font.size+a.font.units,"font-family":a.font.family})}),
//Get bounding box for the whole string (total width and height)
n.nodeValue=a.text;var l=t.getBBox(),u=Math.ceil(l.width/i.properties.width),c=a.text.split(" "),f=a.text.match(/\\n/g);u+=null==f?0:f.length,
//Get bounding box for the string with spaces removed
n.nodeValue=a.text.replace(/[ ]+/g,"");var d=t.getComputedTextLength(),h=l.width-d,p=Math.round(h/Math.max(1,c.length-1)),g=[];if(u>1){n.nodeValue="";for(var m=0;m<c.length;m++)if(0!==c[m].length){n.nodeValue=y.decodeHtmlEntity(c[m]);var v=t.getBBox();g.push({text:c[m],width:v.width})}}
//Hide staging element after staging
return e.style.display="none",{spaceWidth:p,lineCount:u,boundingBox:l,words:g}}
//todo: canvas fallback for measuring text on android 2.3
return!1}}();
//Set up flags
for(var N in D.flags)D.flags.hasOwnProperty(N)&&(D.flags[N].match=function(e){return e.match(this.regex)});
//Properties set once on setup
D.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,dataAttr:"data-src",renderers:["html","canvas","svg"]},
//Properties modified during runtime
D.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{}},
//Pre-flight
function(){var e=w.newEl("canvas");e.getContext&&-1!=e.toDataURL("image/png").indexOf("data:image/png")&&(D.setup.renderer="canvas",D.setup.supportsCanvas=!0),document.createElementNS&&document.createElementNS(S,"svg").createSVGRect&&(D.setup.renderer="svg",D.setup.supportsSVG=!0)}(),
//Starts checking for invisible placeholders
/**
	 * Starts checking for invisible placeholders if not doing so yet. Does nothing otherwise.
	 *
	 * @private
	 */
function(){D.vars.visibilityCheckStarted||(t.requestAnimationFrame(f),D.vars.visibilityCheckStarted=!0)}(),g&&g(function(){D.vars.preempted||O.run(),t.addEventListener?(t.addEventListener("resize",p,!1),t.addEventListener("orientationchange",p,!1)):t.attachEvent("onresize",p),"object"==typeof t.Turbolinks&&t.document.addEventListener("page:change",function(){O.run()})}),e.exports=O}).call(t,function(){return this}())},/* 2 */
/***/
function(e,t){e.exports="undefined"!=typeof window&&/*!
	 * onDomReady.js 1.4.0 (c) 2013 Tubal Martin - MIT license
	 *
	 * Specially modified to work with Holder.js
	 */
function(e){
// Handle when the DOM is ready
function t(e){if(!b){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
if(!s.body)return i(t);
// Execute all callbacks
for(
// Remember that the DOM is ready
b=!0;e=w.shift();)i(e)}}
// The ready event handler
function n(e){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(v||e.type===l||s[d]===f)&&(r(),t())}
// Clean-up method for dom ready events
function r(){v?(s[m](p,n,u),e[m](l,n,u)):(s[h](g,n),e[h](c,n))}
// Defers a function, scheduling it to run after the current call stack has cleared.
function i(e,t){
// Allow 0 to be passed
setTimeout(e,+t>=0?t:1)}function o(e){
// If DOM is ready, execute the function (async), otherwise wait
b?i(e):w.push(e)}
//Lazy loading fix for Firefox < 3.6
//http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),document.readyState="complete"},!1),document.readyState="loading");var s=e.document,a=s.documentElement,l="load",u=!1,c="on"+l,f="complete",d="readyState",h="detachEvent",p="DOMContentLoaded",g="onreadystatechange",m="removeEventListener",
// W3C Event model
v="addEventListener"in s,y=u,
// isReady: Is the DOM ready to be used? Set to true once it occurs.
b=u,
// Callbacks pending execution until DOM is ready
w=[];
// Attach the listeners:
// Catch cases where onDomReady is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
if(s[d]===f)
// Handle it asynchronously to allow scripts the opportunity to delay ready
i(t);else if(v)
// Use the handy event callback
s.addEventListener(p,n,u),
// A fallback to window.onload, that will always work
e.addEventListener(l,n,u);else{
// Ensure firing before onload, maybe late but safe also for iframes
s.attachEvent(g,n),
// A fallback to window.onload, that will always work
e.attachEvent(c,n);
// If IE and not a frame
// continually check to see if the document is ready
try{y=null==e.frameElement&&a}catch(e){}y&&y.doScroll&&function e(){if(!b){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
y.doScroll("left")}catch(t){return i(e,50)}
// detach all dom ready events
r(),
// and execute any waiting functions
t()}}()}
// Add version
// Add method to check if DOM is ready
return o.version="1.4.0",o.isReady=function(){return b},o}(window)},/* 3 */
/***/
function(e,t,n){
//Modified version of component/querystring
//Changes: updated dependencies, dot notation parsing, JSHint fixes
//Fork at https://github.com/imsky/querystring
/**
	 * Module dependencies.
	 */
var r=encodeURIComponent,i=decodeURIComponent,o=n(4),s=n(5),a=/(\w+)\[(\d+)\]/,l=/\w+\.\w+/;/**
	 * Parse the given query `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api public
	 */
t.parse=function(e){if("string"!=typeof e)return{};if(""===(e=o(e)))return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t={},n=e.split("&"),r=0;r<n.length;r++){var s,u,c,f=n[r].split("="),d=i(f[0]);if(s=a.exec(d))t[s[1]]=t[s[1]]||[],t[s[1]][s[2]]=i(f[1]);else if(s=l.test(d)){for(s=d.split("."),u=t;s.length;)if(c=s.shift(),c.length){if(u[c]){if(u[c]&&"object"!=typeof u[c])break}else u[c]={};s.length||(u[c]=i(f[1])),u=u[c]}}else t[f[0]]=null==f[1]?"":i(f[1])}return t},/**
	 * Stringify the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */
t.stringify=function(e){if(!e)return"";var t=[];for(var n in e){var i=e[n];if("array"!=s(i))t.push(r(n)+"="+r(e[n]));else for(var o=0;o<i.length;++o)t.push(r(n+"["+o+"]")+"="+r(i[o]))}return t.join("&")}},/* 4 */
/***/
function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},/* 5 */
/***/
function(e,t){
// code borrowed from https://github.com/feross/is-buffer/blob/master/index.js
function n(e){// For Safari 5-7 (missing Object.prototype.constructor)
return!(null==e||!(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)))}/**
	 * toString ref.
	 */
var r=Object.prototype.toString;/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
e.exports=function(e){switch(r.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!==e?"nan":e&&1===e.nodeType?"element":n(e)?"buffer":typeof(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))}},/* 6 */
/***/
function(e,t){var n=function(e){
//todo: move merge to helpers section
function t(e,t){for(var n in t)e[n]=t[n];return e}var n=1,r=function(e){n++,this.parent=null,this.children={},this.id=n,this.name="n"+n,void 0!==e&&(this.name=e),this.x=this.y=this.z=0,this.width=this.height=0};r.prototype.resize=function(e,t){null!=e&&(this.width=e),null!=t&&(this.height=t)},r.prototype.moveTo=function(e,t,n){this.x=null!=e?e:this.x,this.y=null!=t?t:this.y,this.z=null!=n?n:this.z},r.prototype.add=function(e){var t=e.name;if(void 0!==this.children[t])throw"SceneGraph: child already exists: "+t;this.children[t]=e,e.parent=this};var i=function(){r.call(this,"root"),this.properties=e};i.prototype=new r;var o=function(e,n){if(r.call(this,e),this.properties={fill:"#000000"},void 0!==n)t(this.properties,n);else if(void 0!==e&&"string"!=typeof e)throw"SceneGraph: invalid node name"};o.prototype=new r;var s=function(){o.apply(this,arguments),this.type="group"};s.prototype=new o;var a=function(){o.apply(this,arguments),this.type="rect"};a.prototype=new o;var l=function(e){o.call(this),this.type="text",this.properties.text=e};l.prototype=new o;var u=new i;return this.Shape={Rect:a,Text:l,Group:s},this.root=u,this};e.exports=n},/* 7 */
/***/
function(e,t){/* WEBPACK VAR INJECTION */
(function(e){/**
	 * Shallow object clone and merge
	 *
	 * @param a Object A
	 * @param b Object B
	 * @returns {Object} New object with all of A's properties, and all of B's properties, overwriting A's properties
	 */
t.extend=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);if(null!=t)for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n},/**
	 * Takes a k/v list of CSS properties and returns a rule
	 *
	 * @param props CSS properties object
	 */
t.cssProps=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.join(";")},/**
	 * Encodes HTML entities in a string
	 *
	 * @param str Input string
	 */
t.encodeHtmlEntity=function(e){for(var t=[],n=0,r=e.length-1;r>=0;r--)n=e.charCodeAt(r),n>128?t.unshift(["&#",n,";"].join("")):t.unshift(e[r]);return t.join("")},/**
	 * Checks if an image exists
	 *
	 * @param src URL of image
	 * @param callback Callback to call once image status has been found
	 */
t.imageExists=function(e,t){var n=new Image;n.onerror=function(){t.call(this,!1)},n.onload=function(){t.call(this,!0)},n.src=e},/**
	 * Decodes HTML entities in a string
	 *
	 * @param str Input string
	 */
t.decodeHtmlEntity=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)})},/**
	 * Returns an element's dimensions if it's visible, `false` otherwise.
	 *
	 * @param el DOM element
	 */
t.dimensionCheck=function(e){var t={height:e.clientHeight,width:e.clientWidth};return!(!t.height||!t.width)&&t},/**
	 * Returns true if value is truthy or if it is "semantically truthy"
	 * @param val
	 */
t.truthy=function(e){return"string"==typeof e?"true"===e||"yes"===e||"1"===e||"on"===e||"✓"===e:!!e},/**
	 * Parses input into a well-formed CSS color
	 * @param val
	 */
t.parseColor=function(e){var t,n=/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,r=/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,i=/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,o=e.match(n);return null!==o?(t=o[1]||o[2],"#"!==t[0]?"#"+t:t):null!==(o=e.match(r))?t="rgb("+o.slice(1).join(",")+")":(o=e.match(i),null!==o?t="rgba("+o.slice(1).join(",")+")":null)},/**
	 * Provides the correct scaling ratio for canvas drawing operations on HiDPI screens (e.g. Retina displays)
	 */
t.canvasRatio=function(){var t=1,n=1;if(e.document){var r=e.document.createElement("canvas");if(r.getContext){var i=r.getContext("2d");t=e.devicePixelRatio||1,n=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1}}return t/n}}).call(t,function(){return this}())},/* 8 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){var r=n(9),i="http://www.w3.org/2000/svg";/**
	 * Generic SVG element creation function
	 *
	 * @param svg SVG context, set to null if new
	 * @param width Document width
	 * @param height Document height
	 */
t.initSVG=function(e,t,n){var o,s,a=!1;e&&e.querySelector?null===(s=e.querySelector("style"))&&(a=!0):(e=r.newEl("svg",i),a=!0),a&&(o=r.newEl("defs",i),s=r.newEl("style",i),r.setAttr(s,{type:"text/css"}),o.appendChild(s),e.appendChild(o)),
//IE throws an exception if this is set and Chrome requires it to be set
e.webkitMatchesSelector&&e.setAttribute("xmlns",i);
//Remove comment nodes
for(var l=0;l<e.childNodes.length;l++)8===e.childNodes[l].nodeType&&e.removeChild(e.childNodes[l]);
//Remove CSS
for(;s.childNodes.length;)s.removeChild(s.childNodes[0]);return r.setAttr(e,{width:t,height:n,viewBox:"0 0 "+t+" "+n,preserveAspectRatio:"none"}),e},/**
	 * Converts serialized SVG to a string suitable for data URI use
	 * @param svgString Serialized SVG string
	 * @param [base64] Use base64 encoding for data URI
	 */
t.svgStringToDataURI=function(){return function(t,n){return n?"data:image/svg+xml;charset=UTF-8;base64,"+btoa(e.unescape(encodeURIComponent(t))):"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(t)}}(),/**
	 * Returns serialized SVG with XML processing instructions
	 *
	 * @param svg SVG context
	 * @param stylesheets CSS stylesheets to include
	 */
t.serializeSVG=function(t,n){if(e.XMLSerializer){var i=new XMLSerializer,o="",s=n.stylesheets;
//External stylesheets: Processing Instruction method
if(n.svgXMLStylesheet){
//Add <?xml-stylesheet ?> directives
for(var a=r.createXML(),l=s.length-1;l>=0;l--){var u=a.createProcessingInstruction("xml-stylesheet",'href="'+s[l]+'" rel="stylesheet"');a.insertBefore(u,a.firstChild)}a.removeChild(a.documentElement),o=i.serializeToString(a)}var c=i.serializeToString(t);return c=c.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),o+c}}}).call(t,function(){return this}())},/* 9 */
/***/
function(e,t){/* WEBPACK VAR INJECTION */
(function(e){/**
	 * Generic new DOM element function
	 *
	 * @param tag Tag to create
	 * @param namespace Optional namespace value
	 */
t.newEl=function(t,n){if(e.document)return null==n?e.document.createElement(t):e.document.createElementNS(n,t)},/**
	 * Generic setAttribute function
	 *
	 * @param el Reference to DOM element
	 * @param attrs Object with attribute keys and values
	 */
t.setAttr=function(e,t){for(var n in t)e.setAttribute(n,t[n])},/**
	 * Creates a XML document
	 * @private
	 */
t.createXML=function(){if(e.DOMParser)return(new DOMParser).parseFromString("<xml />","application/xml")},/**
	 * Converts a value into an array of DOM nodes
	 *
	 * @param val A string, a NodeList, a Node, or an HTMLCollection
	 */
t.getNodeArray=function(t){var n=null;return"string"==typeof t?n=document.querySelectorAll(t):e.NodeList&&t instanceof e.NodeList?n=t:e.Node&&t instanceof e.Node?n=[t]:e.HTMLCollection&&t instanceof e.HTMLCollection?n=t:t instanceof Array?n=t:null===t&&(n=[]),n=Array.prototype.slice.call(n)}}).call(t,function(){return this}())},/* 10 */
/***/
function(e,t){var n=function(e,t){
//todo: support rgba, hsla, and rrggbbaa notation
//todo: use CIELAB internally
//todo: add clamp function (with sign)
"string"==typeof e&&(this.original=e,"#"===e.charAt(0)&&(e=e.slice(1)),/[^a-f0-9]+/i.test(e)||(3===e.length&&(e=e.replace(/./g,"$&$&")),6===e.length&&(this.alpha=1,t&&t.alpha&&(this.alpha=t.alpha),this.set(parseInt(e,16)))))};
//todo: jsdocs
n.rgb2hex=function(e,t,n){function r(e){var t=(0|e).toString(16);return e<16&&(t="0"+t),t}return[e,t,n].map(r).join("")},
//todo: jsdocs
n.hsl2rgb=function(e,t,n){var r=e/60,i=(1-Math.abs(2*n-1))*t,o=i*(1-Math.abs(parseInt(r)%2-1)),s=n-i/2,a=0,l=0,u=0;return r>=0&&r<1?(a=i,l=o):r>=1&&r<2?(a=o,l=i):r>=2&&r<3?(l=i,u=o):r>=3&&r<4?(l=o,u=i):r>=4&&r<5?(a=o,u=i):r>=5&&r<6&&(a=i,u=o),a+=s,l+=s,u+=s,a=parseInt(255*a),l=parseInt(255*l),u=parseInt(255*u),[a,l,u]},/**
	 * Sets the color from a raw RGB888 integer
	 * @param raw RGB888 representation of color
	 */
//todo: refactor into a static method
//todo: factor out individual color spaces
//todo: add HSL, CIELAB, and CIELUV
n.prototype.set=function(e){this.raw=e;var t=(16711680&this.raw)>>16,n=(65280&this.raw)>>8,r=255&this.raw,i=.2126*t+.7152*n+.0722*r,o=-.09991*t-.33609*n+.436*r,s=.615*t-.55861*n-.05639*r;return this.rgb={r:t,g:n,b:r},this.yuv={y:i,u:o,v:s},this},/**
	 * Lighten or darken a color
	 * @param multiplier Amount to lighten or darken (-1 to 1)
	 */
n.prototype.lighten=function(e){var t=Math.min(1,Math.max(0,Math.abs(e)))*(e<0?-1:1),r=255*t|0,i=Math.min(255,Math.max(0,this.rgb.r+r)),o=Math.min(255,Math.max(0,this.rgb.g+r)),s=Math.min(255,Math.max(0,this.rgb.b+r)),a=n.rgb2hex(i,o,s);return new n(a)},/**
	 * Output color in hex format
	 * @param addHash Add a hash character to the beginning of the output
	 */
n.prototype.toHex=function(e){return(e?"#":"")+this.raw.toString(16)},/**
	 * Returns whether or not current color is lighter than another color
	 * @param color Color to compare against
	 */
n.prototype.lighterThan=function(e){return e instanceof n||(e=new n(e)),this.yuv.y>e.yuv.y},/**
	 * Returns the result of mixing current color with another color
	 * @param color Color to mix with
	 * @param multiplier How much to mix with the other color
	 */
/*
	Color.prototype.mix = function (color, multiplier) {
	    if (!(color instanceof Color)) {
	        color = new Color(color);
	    }

	    var r = this.rgb.r;
	    var g = this.rgb.g;
	    var b = this.rgb.b;
	    var a = this.alpha;

	    var m = typeof multiplier !== 'undefined' ? multiplier : 0.5;

	    //todo: write a lerp function
	    r = r + m * (color.rgb.r - r);
	    g = g + m * (color.rgb.g - g);
	    b = b + m * (color.rgb.b - b);
	    a = a + m * (color.alpha - a);

	    return new Color(Color.rgbToHex(r, g, b), {
	        'alpha': a
	    });
	};
	*/
/**
	 * Returns the result of blending another color on top of current color with alpha
	 * @param color Color to blend on top of current color, i.e. "Ca"
	 */
//todo: see if .blendAlpha can be merged into .mix
n.prototype.blendAlpha=function(e){e instanceof n||(e=new n(e));var t=e,r=this,i=t.alpha*t.rgb.r+(1-t.alpha)*r.rgb.r,o=t.alpha*t.rgb.g+(1-t.alpha)*r.rgb.g,s=t.alpha*t.rgb.b+(1-t.alpha)*r.rgb.b;return new n(n.rgb2hex(i,o,s))},e.exports=n},/* 11 */
/***/
function(e,t){e.exports={version:"2.9.4",svg_ns:"http://www.w3.org/2000/svg"}},/* 12 */
/***/
function(e,t,n){
//todo: deprecate tag arg, infer tag from shape object
function r(e,t){return f.element({tag:t,width:e.width,height:e.height,fill:e.properties.fill})}function i(e){return u.cssProps({fill:e.fill,"font-weight":e.font.weight,"font-family":e.font.family+", monospace","font-size":e.font.size+e.font.units})}function o(e,t,n){var r=n/2;return["M",r,r,"H",e-r,"V",t-r,"H",r,"V",0,"M",0,r,"L",e,t-r,"M",0,t-r,"L",e,r].join(" ")}var s=n(13),a=n(8),l=n(11),u=n(7),c=l.svg_ns,f={element:function(e){var t=e.tag,n=e.content||"";return delete e.tag,delete e.content,[t,n,e]}};e.exports=function(e,t){var n=t.engineSettings,l=n.stylesheets,u=l.map(function(e){return'<?xml-stylesheet rel="stylesheet" href="'+e+'"?>'}).join("\n"),d="holder_"+Number(new Date).toString(16),h=e.root,p=h.children.holderTextGroup,g="#"+d+" text { "+i(p.properties)+" } ";
// push text down to be equally vertically aligned with canvas renderer
p.y+=.8*p.textPositionData.boundingBox.height;var m=[];Object.keys(p.children).forEach(function(e){var t=p.children[e];Object.keys(t.children).forEach(function(e){var n=t.children[e],r=p.x+t.x+n.x,i=p.y+t.y+n.y,o=f.element({tag:"text",content:n.properties.text,x:r,y:i});m.push(o)})});var v=f.element({tag:"g",content:m}),y=null;if(h.children.holderBg.properties.outline){var b=h.children.holderBg.properties.outline;y=f.element({tag:"path",d:o(h.children.holderBg.width,h.children.holderBg.height,b.width),"stroke-width":b.width,stroke:b.fill,fill:"none"})}var w=r(h.children.holderBg,"rect"),E=[];E.push(w),b&&E.push(y),E.push(v);var _=f.element({tag:"g",id:d,content:E}),T=f.element({tag:"style",
//todo: figure out how to add CDATA directive
content:g,type:"text/css"}),x=f.element({tag:"defs",content:T}),C=f.element({tag:"svg",content:[x,_],width:h.properties.width,height:h.properties.height,xmlns:c,viewBox:[0,0,h.properties.width,h.properties.height].join(" "),preserveAspectRatio:"none"}),A=s(C);return A=u+A[0],a.svgStringToDataURI(A,"background"===t.mode)}},/* 13 */
/***/
function(e,t,n){n(14);
// TODO: remove namespace
e.exports=function e(t,n,r){"use strict";function i(e,t){if(null!==t&&!1!==t&&void 0!==t)return"string"!=typeof t&&"object"!=typeof t?String(t):t}var o,s,a,l,u=1,c=!0;if(r=r||{},"string"==typeof t[0])t[0]=function(e){var t=e.match(/^[\w-]+/),n={tag:t?t[0]:"div",attr:{},children:[]},i=e.match(/#([\w-]+)/),o=e.match(/\$([\w-]+)/),s=e.match(/\.[\w-]+/g);
// Assign id if is set
// Add element to the return object
return i&&(n.attr.id=i[1],r[i[1]]=n),o&&(r[o[1]]=n),s&&(n.attr.class=s.join(" ").replace(/\./g,"")),e.match(/&$/g)&&(c=!1),n}(t[0]);else{if(!Array.isArray(t[0]))throw new Error("First element of array must be a string, or an array and not "+JSON.stringify(t[0]));u=0}for(;u<t.length;u++){
// Don't render element if value is false or null
if(!1===t[u]||null===t[u]){t[0]=!1;break}if(void 0!==t[u]&&!0!==t[u])if("string"==typeof t[u])c&&(t[u]=function(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(t[u])),t[0].children.push(t[u]);else if("number"==typeof t[u])t[0].children.push(t[u]);else if(Array.isArray(t[u])){if(Array.isArray(t[u][0])){if(t[u].reverse().forEach(function(e){t.splice(u+1,0,e)}),0!==u)continue;u++}e(t[u],n,r),t[u][0]&&t[0].children.push(t[u][0])}else if("function"==typeof t[u])a=t[u];else{if("object"!=typeof t[u])throw new TypeError('"'+t[u]+'" is not allowed as a value.');for(s in t[u])t[u].hasOwnProperty(s)&&null!==t[u][s]&&!1!==t[u][s]&&("style"===s&&"object"==typeof t[u][s]?t[0].attr[s]=JSON.stringify(t[u][s],i).slice(2,-2).replace(/","/g,";").replace(/":"/g,":").replace(/\\"/g,"'"):t[0].attr[s]=t[u][s])}}if(!1!==t[0]){o="<"+t[0].tag;for(l in t[0].attr)t[0].attr.hasOwnProperty(l)&&(o+=" "+l+'="'+function(e){return e||0===e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;"):""}(t[0].attr[l])+'"');o+=">",t[0].children.forEach(function(e){o+=e}),o+="</"+t[0].tag+">",t[0]=o}
// returns object containing all elements with an id and the root element
// Return root element on index 0
return r[0]=t[0],a&&a(t[0]),r}},/* 14 */
/***/
function(e,t){/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */
"use strict";/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */
function n(e){var t=""+e,n=r.exec(t);if(!n)return t;var i,o="",s=0,a=0;for(s=n.index;s<t.length;s++){switch(t.charCodeAt(s)){case 34:// "
i="&quot;";break;case 38:// &
i="&amp;";break;case 39:// '
i="&#39;";break;case 60:// <
i="&lt;";break;case 62:// >
i="&gt;";break;default:continue}a!==s&&(o+=t.substring(a,s)),a=s+1,o+=i}return a!==s?o+t.substring(a,s):o}/**
	 * Module variables.
	 * @private
	 */
var r=/["'&<>]/;/**
	 * Module exports.
	 * @public
	 */
e.exports=n},/* 15 */
/***/
function(e,t,n){var r=n(9),i=n(7);e.exports=function(){var e=r.newEl("canvas"),t=null;return function(n){null==t&&(t=e.getContext("2d"));var r=i.canvasRatio(),o=n.root;e.width=r*o.properties.width,e.height=r*o.properties.height,t.textBaseline="middle";var s=o.children.holderBg,a=r*s.width,l=r*s.height;t.fillStyle=s.properties.fill,t.fillRect(0,0,a,l),s.properties.outline&&(
//todo: abstract this into a method
t.strokeStyle=s.properties.outline.fill,t.lineWidth=s.properties.outline.width,t.moveTo(1,1),
// TL, TR, BR, BL
t.lineTo(a-1,1),t.lineTo(a-1,l-1),t.lineTo(1,l-1),t.lineTo(1,1),
// Diagonals
t.moveTo(0,1),t.lineTo(a,l-1),t.moveTo(0,l-1),t.lineTo(a,1),t.stroke());var u=o.children.holderTextGroup;t.font=u.properties.font.weight+" "+r*u.properties.font.size+u.properties.font.units+" "+u.properties.font.family+", monospace",t.fillStyle=u.properties.fill;for(var c in u.children){var f=u.children[c];for(var d in f.children){var h=f.children[d],p=r*(u.x+f.x+h.x),g=r*(u.y+f.y+h.y+u.properties.leading/2);t.fillText(h.properties.text,p,g)}}return e.toDataURL("image/png")}}()}])}),function(e,t){t&&(Holder=e.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package)},/***/
"../node_modules/jquery/dist/jquery.js":/***/
function(e,t,n){var r,i;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function s(e,t,n){t=t||ce;var r,i=t.createElement("script");if(i.text=e,n)for(r in xe)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function a(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?me[ve.call(e)]||"object":typeof e}function l(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=a(e);return!_e(e)&&!Te(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function u(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function c(e,t,n){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
return _e(t)?Ce.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?Ce.grep(e,function(e){return e===t!==n}):"string"!=typeof t?Ce.grep(e,function(e){return ge.call(t,e)>-1!==n}):Ce.filter(t,e,n)}function f(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function d(e){var t={};return Ce.each(e.match(He)||[],function(e,n){t[n]=!0}),t}function h(e){return e}function p(e){throw e}function g(e,t,n,r){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&_e(i=e.promise)?i.call(e).done(t).fail(n):e&&_e(i=e.then)?i.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r))}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function m(){ce.removeEventListener("DOMContentLoaded",m),n.removeEventListener("load",m),Ce.ready()}
// Used by camelCase as callback to replace()
function v(e,t){return t.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function y(e){return e.replace(We,"ms-").replace(Be,v)}function b(){this.expando=Ce.expando+b.uid++}function w(e){
// Only convert to a number if it doesn't change the string
return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Ge.test(e)?JSON.parse(e):e)}function E(e,t,n){var r;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ze,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=w(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Ve.set(e,t,n)}else n=void 0;return n}function _(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return Ce.css(e,t,"")},l=a(),u=n&&n[3]||(Ce.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(Ce.cssNumber[t]||"px"!==u&&+l)&&$e.exec(Ce.css(e,t));if(c&&c[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
u=u||c[3],
// Iteratively approximate from a nonzero starting point
c=+l||1;s--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
Ce.style(e,t,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o;c*=2,Ce.style(e,t,c+u),
// Make sure we update the tween properties later on
n=n||[]}
// Apply relative offset (+=/-=) if specified
return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}function T(e){var t,n=e.ownerDocument,r=e.nodeName,i=Je[r];return i||(t=n.body.appendChild(n.createElement(r)),i=Ce.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Je[r]=i,i)}function x(e,t){
// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,s=e.length;o<s;o++)r=e[o],r.style&&(n=r.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(i[o]=Ue.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Qe(r)&&(i[o]=T(r))):"none"!==n&&(i[o]="none",
// Remember what we're overwriting
Ue.set(r,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function C(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&u(e,t)?Ce.merge([e],n):n}
// Mark scripts as having already been evaluated
function A(e,t){for(var n=0,r=e.length;n<r;n++)Ue.set(e[n],"globalEval",!t||Ue.get(t[n],"globalEval"))}function S(e,t,n,r,i){for(var o,s,l,u,c,f,d=t.createDocumentFragment(),h=[],p=0,g=e.length;p<g;p++)if((o=e[p])||0===o)
// Add nodes directly
if("object"===a(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ce.merge(h,o.nodeType?[o]:o);else if(rt.test(o)){for(s=s||d.appendChild(t.createElement("div")),
// Deserialize a standard representation
l=(et.exec(o)||["",""])[1].toLowerCase(),u=nt[l]||nt._default,s.innerHTML=u[1]+Ce.htmlPrefilter(o)+u[2],
// Descend through wrappers to the right content
f=u[0];f--;)s=s.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ce.merge(h,s.childNodes),
// Remember the top-level container
s=d.firstChild,
// Ensure the created nodes are orphaned (#12392)
s.textContent=""}else h.push(t.createTextNode(o));for(
// Remove wrapper from fragment
d.textContent="",p=0;o=h[p++];)
// Skip elements already in the context collection (trac-4087)
if(r&&Ce.inArray(o,r)>-1)i&&i.push(o);else
// Capture executables
if(c=Ce.contains(o.ownerDocument,o),
// Append to fragment
s=C(d.appendChild(o),"script"),
// Preserve script evaluation history
c&&A(s),n)for(f=0;o=s[f++];)tt.test(o.type||"")&&n.push(o);return d}function O(){return!0}function D(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function I(){try{return ce.activeElement}catch(e){}}function N(e,t,n,r,i,o){var s,a;
// Types can be a map of types/handlers
if("object"==typeof t){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0);for(a in t)N(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=void 0):(
// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=D;else if(!i)return e;
// Use same guid so caller can remove using origFn
return 1===o&&(s=i,i=function(e){
// Can use an empty set, since event contains the info
return Ce().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=Ce.guid++)),e.each(function(){Ce.event.add(this,t,i,r,n)})}
// Prefer a tbody over its parent table for containing new rows
function k(e,t){return u(e,"table")&&u(11!==t.nodeType?t:t.firstChild,"tr")?Ce(e).children("tbody")[0]||e:e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function L(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function j(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function P(e,t){var n,r,i,o,s,a,l,u;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Ue.hasData(e)&&(o=Ue.access(e),s=Ue.set(t,o),u=o.events)){delete s.handle,s.events={};for(i in u)for(n=0,r=u[i].length;n<r;n++)Ce.event.add(t,i,u[i][n])}
// 2. Copy user data
Ve.hasData(e)&&(a=Ve.access(e),l=Ce.extend({},a),Ve.set(t,l))}}
// Fix IE bugs, see support tests
function H(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Ze.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function R(e,t,n,r){
// Flatten any nested arrays
t=he.apply([],t);var i,o,a,l,u,c,f=0,d=e.length,h=d-1,p=t[0],g=_e(p);
// We can't cloneNode fragments that contain checked, in WebKit
if(g||d>1&&"string"==typeof p&&!Ee.checkClone&&ct.test(p))return e.each(function(i){var o=e.eq(i);g&&(t[0]=p.call(this,i,o.html())),R(o,t,n,r)});if(d&&(i=S(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=Ce.map(C(i,"script"),L),l=a.length;f<d;f++)u=i,f!==h&&(u=Ce.clone(u,!0,!0),
// Keep references to cloned scripts for later restoration
l&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ce.merge(a,C(u,"script"))),n.call(e[f],u,f);if(l)
// Evaluate executable scripts on first document insertion
for(c=a[a.length-1].ownerDocument,
// Reenable scripts
Ce.map(a,j),f=0;f<l;f++)u=a[f],tt.test(u.type||"")&&!Ue.access(u,"globalEval")&&Ce.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
Ce._evalUrl&&Ce._evalUrl(u.src):s(u.textContent.replace(ft,""),c,u))}return e}function M(e,t,n){for(var r,i=t?Ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||Ce.cleanData(C(r)),r.parentNode&&(n&&Ce.contains(r.ownerDocument,r)&&A(C(r,"script")),r.parentNode.removeChild(r));return e}function F(e,t,n){var r,i,o,s,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return n=n||ht(e),n&&(s=n.getPropertyValue(t)||n[t],""!==s||Ce.contains(e.ownerDocument,e)||(s=Ce.style(e,t)),!Ee.pixelBoxStyles()&&dt.test(s)&&pt.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function W(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function B(e){
// Shortcut for names that are not vendor prefixed
if(e in wt)return e;for(
// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=bt.length;n--;)if((e=bt[n]+t)in wt)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function q(e){var t=Ce.cssProps[e];return t||(t=Ce.cssProps[e]=B(e)||e),t}function U(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var r=$e.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function V(e,t,n,r,i,o){var s="width"===t?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;s<4;s+=2)
// Both box models exclude margin
"margin"===n&&(l+=Ce.css(e,n+Ye[s],!0,i)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
r?(
// For "content", subtract padding
"content"===n&&(l-=Ce.css(e,"padding"+Ye[s],!0,i)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=Ce.css(e,"border"+Ye[s]+"Width",!0,i))):(
// Add padding
l+=Ce.css(e,"padding"+Ye[s],!0,i),
// For "border" or "margin", add border
"padding"!==n?l+=Ce.css(e,"border"+Ye[s]+"Width",!0,i):a+=Ce.css(e,"border"+Ye[s]+"Width",!0,i));
// Account for positive content-box scroll gutter when requested by providing computedVal
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
return!r&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))),l}function G(e,t,n){
// Start with computed style
var r=ht(e),i=F(e,t,r),o="border-box"===Ce.css(e,"boxSizing",!1,r),s=o;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(dt.test(i)){if(!n)return i;i="auto"}
// Adjust for the element's box model
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// offsetWidth/offsetHeight provide border-box values
// Normalize "" and auto
// Provide the current computed size to request scroll gutter calculation (gh-3589)
return s=s&&(Ee.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===Ce.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(i=parseFloat(i)||0)+V(e,t,n||(o?"border":"content"),s,r,i)+"px"}function z(e,t,n,r,i){return new z.prototype.init(e,t,n,r,i)}function K(){_t&&(!1===ce.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(K):n.setTimeout(K,Ce.fx.interval),Ce.fx.tick())}
// Animations created synchronously will run synchronously
function $(){return n.setTimeout(function(){Et=void 0}),Et=Date.now()}
// Generate parameters to create a standard animation
function Y(e,t){var n,r=0,i={height:e};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)n=Ye[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Q(e,t,n){for(var r,i=(Z.tweeners[t]||[]).concat(Z.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))
// We're done with this property
return r}function X(e,t,n){var r,i,o,s,a,l,u,c,f="width"in t||"height"in t,d=this,h={},p=e.style,g=e.nodeType&&Qe(e),m=Ue.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
n.queue||(s=Ce._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){
// Ensure the complete handler is called before this completes
d.always(function(){s.unqueued--,Ce.queue(e,"fx").length||s.empty.fire()})}));
// Detect show/hide animations
for(r in t)if(i=t[r],Tt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!m||void 0===m[r])continue;g=!0}h[r]=m&&m[r]||Ce.style(e,r)}if((
// Bail out if this is a no-op like .hide().hide()
l=!Ce.isEmptyObject(t))||!Ce.isEmptyObject(h)){
// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
u=m&&m.display,null==u&&(u=Ue.get(e,"display")),c=Ce.css(e,"display"),"none"===c&&(u?c=u:(
// Get nonempty value(s) by temporarily forcing visibility
x([e],!0),u=e.style.display||u,c=Ce.css(e,"display"),x([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=u)&&"none"===Ce.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(d.done(function(){p.display=u}),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1;for(r in h)
// General show/hide setup for this element animation
l||(m?"hidden"in m&&(g=m.hidden):m=Ue.access(e,"fxshow",{display:u}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(m.hidden=!g),
// Show elements before animating them
g&&x([e],!0),/* eslint-disable no-loop-func */
d.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||x([e]),Ue.remove(e,"fxshow");for(r in h)Ce.style(e,r,h[r])})),
// Per-property setup
l=Q(g?m[r]:0,r,d),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}}function J(e,t){var n,r,i,o,s;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=y(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=Ce.cssHooks[r])&&"expand"in s){o=s.expand(o),delete e[r];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function Z(e,t,n){var r,i,o=0,s=Z.prefilters.length,a=Ce.Deferred().always(function(){
// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(i)return!1;for(var t=Et||$(),n=Math.max(0,u.startTime+u.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
r=n/u.duration||0,o=1-r,s=0,l=u.tweens.length;s<l;s++)u.tweens[s].run(o);
// If there's more to do, yield
// If there's more to do, yield
// If this was an empty animation, synthesize a final progress notification
// Resolve the animation and report its conclusion
return a.notifyWith(e,[u,o,n]),o<1&&l?n:(l||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:Ce.extend({},t),opts:Ce.extend(!0,{specialEasing:{},easing:Ce.easing._default},n),originalProperties:t,originalOptions:n,startTime:Et||$(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Ce.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for(J(c,u.opts.specialEasing);o<s;o++)if(r=Z.prefilters[o].call(u,e,c,u.opts))return _e(r.stop)&&(Ce._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;
// Attach callbacks from options
return Ce.map(c,Q,u),_e(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),Ce.fx.timer(Ce.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function ee(e){return(e.match(He)||[]).join(" ")}function te(e){return e.getAttribute&&e.getAttribute("class")||""}function ne(e){return Array.isArray(e)?e:"string"==typeof e?e.match(He)||[]:[]}function re(e,t,n,r){var i;if(Array.isArray(t))
// Serialize array item.
Ce.each(t,function(t,i){n||Pt.test(e)?
// Treat each array item as a scalar.
r(e,i):
// Item is non-scalar (array or object), encode its numeric index.
re(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==a(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(i in t)re(e+"["+i+"]",t[i],n,r)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function ie(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(He)||[];if(_e(n))
// For each dataType in the dataTypeExpression
for(;r=o[i++];)
// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}
// Base inspection function for prefilters and transports
function oe(e,t,n,r){function i(a){var l;return o[a]=!0,Ce.each(e[a]||[],function(e,a){var u=a(t,n,r);return"string"!=typeof u||s||o[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},s=e===Kt;return i(t.dataTypes[0])||!o["*"]&&i("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function se(e,t){var n,r,i=Ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Ce.extend(!0,e,r),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ae(e,t,n){
// Remove auto dataType and get content-type in the process
for(var r,i,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{
// Try convertible dataTypes
for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}s||(s=i)}
// Or just use first one
o=o||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function le(e,t,n,r){var i,o,s,a,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];
// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){
// If none found, seek a pair
if(!(
// Seek a direct converter
s=u[l+" "+o]||u["* "+o]))for(i in u)if(
// If conv2 outputs current
a=i.split(" "),a[1]===o&&(
// If prev can be converted to accepted input
s=u[l+" "+a[0]]||u["* "+a[0]])){
// Condense equivalence converters
!0===s?s=u[i]:!0!==u[i]&&(o=a[0],c.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==s)
// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}var ue=[],ce=n.document,fe=Object.getPrototypeOf,de=ue.slice,he=ue.concat,pe=ue.push,ge=ue.indexOf,me={},ve=me.toString,ye=me.hasOwnProperty,be=ye.toString,we=be.call(Object),Ee={},_e=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},Te=function(e){return null!=e&&e===e.window},xe={type:!0,src:!0,noModule:!0},
// Define a local copy of jQuery
Ce=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new Ce.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
Ae=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;Ce.fn=Ce.prototype={
// The current version of jQuery being used
jquery:"3.3.1",constructor:Ce,
// The default length of a jQuery object is 0
length:0,toArray:function(){return de.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==e?de.call(this):e<0?this[e+this.length]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=Ce.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return Ce.each(this,e)},map:function(e){return this.pushStack(Ce.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(de.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:pe,sort:ue.sort,splice:ue.splice},Ce.extend=Ce.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for(
// Handle a deep copy situation
"boolean"==typeof s&&(u=s,
// Skip the boolean and the target
s=arguments[a]||{},a++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof s||_e(s)||(s={}),
// Extend jQuery itself if only one argument is passed
a===l&&(s=this,a--);a<l;a++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[a]))
// Extend the base object
for(t in e)n=s[t],r=e[t],
// Prevent never-ending loop
s!==r&&(
// Recurse if we're merging plain objects or arrays
u&&r&&(Ce.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&Ce.isPlainObject(n)?n:{},
// Never move original objects, clone them
s[t]=Ce.extend(u,o,r)):void 0!==r&&(s[t]=r));
// Return the modified object
return s},Ce.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!e||"[object Object]"!==ve.call(e))&&(!(t=fe(e))||"function"==typeof(n=ye.call(t,"constructor")&&t.constructor)&&be.call(n)===we)},isEmptyObject:function(e){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){s(e)},each:function(e,t){var n,r=0;if(l(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(Ae,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(l(Object(e))?Ce.merge(n,"string"==typeof e?[e]:e):pe.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ge.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},
// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,s=[];
// Go through the array, translating each of the items to their new values
if(l(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);
// Flatten any nested arrays
return he.apply([],s)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Ee}),"function"==typeof Symbol&&(Ce.fn[Symbol.iterator]=ue[Symbol.iterator]),
// Populate the class2type map
Ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){me["[object "+t+"]"]=t.toLowerCase()});var Se=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(e){function t(e,t,n,r){var i,o,s,a,l,c,d,h=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
p=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:F)!==N&&I(t),t=t||N,L)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==p&&(l=ge.exec(e)))
// ID selector
if(i=l[1]){
// Document context
if(9===p){if(!(s=t.getElementById(i)))return n;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(s.id===i)return n.push(s),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(h&&(s=h.getElementById(i))&&R(t,s)&&s.id===i)return n.push(s),n}else{if(l[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(i)),n}
// Take advantage of querySelectorAll
if(w.qsa&&!V[e+" "]&&(!j||!j.test(e))){if(1!==p)h=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(a=t.getAttribute("id"))?a=a.replace(be,we):t.setAttribute("id",a=M),
// Prefix every selector in the list
c=x(e),o=c.length;o--;)c[o]="#"+a+" "+f(c[o]);d=c.join(","),
// Expand context for sibling selectors
h=me.test(e)&&u(t.parentNode)||t}if(d)try{return Q.apply(n,h.querySelectorAll(d)),n}catch(e){}finally{a===M&&t.removeAttribute("id")}}}
// All others
return A(e.replace(oe,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function n(){function e(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>E.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function r(e){return e[M]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function i(e){var t=N.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function o(e,t){for(var n=e.split("|"),r=n.length;r--;)E.attrHandle[n[r]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(r)return r;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function a(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&_e(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function l(e){return r(function(t){return t=+t,r(function(n,r){
// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function u(e){return e&&void 0!==e.getElementsByTagName&&e}
// Easy API for creating new setFilters
function c(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=B++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i);return!1}:function(t,n,l){var u,c,f,d=[W,a];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(f=t[M]||(t[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((u=c[o])&&u[0]===W&&u[1]===a)
// Assign to newCache so results back-propagate to previous elements
return d[2]=u[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
c[o]=d,d[2]=e(t,n,l))return!0}return!1}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function p(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),u&&t.push(a)));return s}function m(e,t,n,i,o,s){return i&&!i[M]&&(i=m(i)),o&&!o[M]&&(o=m(o,s)),r(function(r,s,a,l){var u,c,f,d=[],h=[],m=s.length,
// Get initial elements from seed or context
v=r||p(t||"*",a.nodeType?[a]:a,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
y=!e||!r&&t?v:g(v,d,e,a,l),b=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(r?e:m||i)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
s:y;
// Apply postFilter
if(
// Find primary matches
n&&n(y,b,a,l),i)for(u=g(b,h),i(u,[],a,l),
// Un-match failing elements by moving them back to matcherIn
c=u.length;c--;)(f=u[c])&&(b[h[c]]=!(y[h[c]]=f));if(r){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
u=[],c=b.length;c--;)(f=b[c])&&
// Restore matcherIn since elem is not yet a final match
u.push(y[c]=f);o(null,b=[],u,l)}for(
// Move matched elements from seed to results to keep them synchronized
c=b.length;c--;)(f=b[c])&&(u=o?J(r,f):d[c])>-1&&(r[u]=!(s[u]=f))}}else b=g(b===s?b.splice(m,b.length):b),o?o(null,s,b,l):Q.apply(s,b)})}function v(e){for(var t,n,r,i=e.length,o=E.relative[e[0].type],s=o||E.relative[" "],a=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=d(function(e){return e===t},s,!0),u=d(function(e){return J(t,e)>-1},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==S)||((t=n).nodeType?l(e,n,r):u(e,n,r));
// Avoid hanging onto element (issue #299)
return t=null,i}];a<i;a++)if(n=E.relative[e[a].type])c=[d(h(c),n)];else{
// Return special upon seeing a positional matcher
if(n=E.filter[e[a].type].apply(null,e[a].matches),n[M]){for(
// Find the next relative operator (if any) for proper handling
r=++a;r<i&&!E.relative[e[r].type];r++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return m(a>1&&h(c),a>1&&f(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(oe,"$1"),n,a<r&&v(e.slice(a,r)),r<i&&v(e=e.slice(r)),r<i&&f(e))}c.push(n)}return h(c)}function y(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,l,u){var c,f,d,h=0,p="0",m=r&&[],v=[],y=S,
// We must always have either seed elements or outermost context
b=r||o&&E.find.TAG("*",u),
// Use integer dirruns iff this is the outermost matcher
w=W+=null==y?1:Math.random()||.1,_=b.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(u&&(S=s===N||s||u);p!==_&&null!=(c=b[p]);p++){if(o&&c){for(f=0,s||c.ownerDocument===N||(I(c),a=!L);d=e[f++];)if(d(c,s||N,a)){l.push(c);break}u&&(W=w)}
// Track unmatched elements for set filters
i&&(
// They will have gone through all possible matchers
(c=!d&&c)&&h--,
// Lengthen the array for every element, matched or not
r&&m.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
h+=p,i&&p!==h){for(f=0;d=n[f++];)d(m,v,s,a);if(r){
// Reintegrate element matches to eliminate the need for sorting
if(h>0)for(;p--;)m[p]||v[p]||(v[p]=$.call(l));
// Discard index placeholder values to get only actual matches
v=g(v)}
// Add matches to results
Q.apply(l,v),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
u&&!r&&v.length>0&&h+n.length>1&&t.uniqueSort(l)}
// Override manipulation of globals by nested matchers
return u&&(W=w,S=y),m};return i?r(s):s}var b,w,E,_,T,x,C,A,S,O,D,
// Local document vars
I,N,k,L,j,P,H,R,
// Instance-specific data
M="sizzle"+1*new Date,F=e.document,W=0,B=0,q=n(),U=n(),V=n(),G=function(e,t){return e===t&&(D=!0),0},
// Instance methods
z={}.hasOwnProperty,K=[],$=K.pop,Y=K.push,Q=K.push,X=K.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
J=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ee="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ne="\\["+ee+"*("+te+")(?:"+ee+
// Operator (capture 2)
"*([*^$|!~]?=)"+ee+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),se=new RegExp("^"+ee+"*,"+ee+"*"),ae=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),le=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ue=new RegExp(re),ce=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},de=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,pe=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ve=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,n){var r="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,we=function(e,t){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Ee=function(){I()},_e=d(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Q.apply(K=X.call(F.childNodes),F.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
K[F.childNodes.length].nodeType}catch(e){Q={apply:K.length?
// Leverage slice if possible
function(e,t){Y.apply(e,X.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}
// Expose support vars for convenience
w=t.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
T=t.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
I=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:F;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return r!==N&&9===r.nodeType&&r.documentElement?(N=r,k=N.documentElement,L=!T(N),F!==N&&(n=N.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ee,!1):n.attachEvent&&n.attachEvent("onunload",Ee)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(N.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=pe.test(N.getElementsByClassName),w.getById=i(function(e){return k.appendChild(e).id=M,!N.getElementsByName||!N.getElementsByName(M).length}),w.getById?(E.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}},E.find.ID=function(e,t){if(void 0!==t.getElementById&&L){var n=t.getElementById(e);return n?[n]:[]}}):(E.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},E.find.ID=function(e,t){if(void 0!==t.getElementById&&L){var n,r,i,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];for(
// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),E.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},E.find.CLASS=w.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&L)return t.getElementsByClassName(e)},P=[],j=[],(w.qsa=pe.test(N.querySelectorAll))&&(i(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
k.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&j.push("[*^$]="+ee+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||j.push("\\["+ee+"*(?:value|"+Z+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+M+"-]").length||j.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||j.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+M+"+*").length||j.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=N.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&j.push("name"+ee+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&j.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
k.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&j.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),j.push(",.*:")})),(w.matchesSelector=pe.test(H=k.matches||k.webkitMatchesSelector||k.mozMatchesSelector||k.oMatchesSelector||k.msMatchesSelector))&&i(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
w.disconnectedMatch=H.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
H.call(e,"[s!='']:x"),P.push("!=",re)}),j=j.length&&new RegExp(j.join("|")),P=P.length&&new RegExp(P.join("|")),t=pe.test(k.compareDocumentPosition),R=t||pe.test(k.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){
// Flag for duplicate removal
if(e===t)return D=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===N||e.ownerDocument===F&&R(F,e)?-1:t===N||t.ownerDocument===F&&R(F,t)?1:O?J(O,e)-J(O,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return D=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],l=[t];
// Parentless nodes are either documents or disconnected
if(!i||!o)return e===N?-1:t===N?1:i?-1:o?1:O?J(O,e)-J(O,t):0;if(i===o)return s(e,t);for(
// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);
// Walk down the tree looking for a discrepancy
for(;a[r]===l[r];)r++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return r?s(a[r],l[r]):a[r]===F?-1:l[r]===F?1:0},N):N},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(
// Set document vars if needed
(e.ownerDocument||e)!==N&&I(e),
// Make sure that attribute selectors are quoted
n=n.replace(le,"='$1']"),w.matchesSelector&&L&&!V[n+" "]&&(!P||!P.test(n))&&(!j||!j.test(n)))try{var r=H.call(e,n);
// IE 9's matchesSelector returns false on disconnected nodes
if(r||w.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,N,null,[e]).length>0},t.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==N&&I(e),R(e,t)},t.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==N&&I(e);var n=E.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&z.call(E.attrHandle,t.toLowerCase())?n(e,t,!L):void 0;return void 0!==r?r:w.attributes||!L?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(be,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
D=!w.detectDuplicates,O=!w.sortStable&&e.slice(0),e.sort(G),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return O=null,e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
_=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=_(e)}else if(3===i||4===i)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[r++];)
// Do not traverse comment nodes
n+=_(t);
// Do not include comment or processing instruction nodes
return n},E=t.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=x(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=q[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&q(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;
// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,d,h,p,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(m){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
p=g="only"===e&&!p&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(p=[s?m.firstChild:m.lastChild],s&&y){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
d=m,f=d[M]||(d[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[d.uniqueID]||(f[d.uniqueID]={}),u=c[e]||[],h=u[0]===W&&u[1],b=h&&u[2],d=h&&m.childNodes[h];d=++h&&d&&d[g]||(
// Fallback to seeking `elem` from the start
b=h=0)||p.pop();)
// When found, cache indexes on `parent` and break
if(1===d.nodeType&&++b&&d===t){c[e]=[W,h,b];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
y&&(
// ...in a gzip-friendly way
d=t,f=d[M]||(d[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[d.uniqueID]||(f[d.uniqueID]={}),u=c[e]||[],h=u[0]===W&&u[1],b=h),!1===b)
// Use the same loop as above to seek `elem` from the start
for(;(d=++h&&d&&d[g]||(b=h=0)||p.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(
// Cache the index of each encountered element
y&&(f=d[M]||(d[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[d.uniqueID]||(f[d.uniqueID]={}),c[e]=[W,b]),d!==t)););
// Incorporate the offset, then check against cycle size
return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,n){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,o=E.pseudos[e]||E.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[M]?o(n):o.length>1?(i=[e,e,"",n],E.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=J(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{
// Potentially complex pseudos
not:r(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=C(e.replace(oe,"$1"));return i[M]?r(function(e,t,n,r){
// Match elements unmatched by `matcher`
for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){
// Don't keep the element (issue #299)
return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ve,ye),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(e){
// lang value must be a valid identifier
return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n;do{if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===k},focus:function(e){return e===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:a(!1),disabled:a(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!E.pseudos.empty(e)},
// Element/input types
header:function(e){return he.test(e.nodeName)},input:function(e){return de.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},E.pseudos.nth=E.pseudos.eq;
// Add button/input type pseudos
for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})E.pseudos[b]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(b);for(b in{submit:!0,reset:!0})E.pseudos[b]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(b);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return c.prototype=E.filters=E.pseudos,E.setFilters=new c,x=t.tokenize=function(e,n){var r,i,o,s,a,l,u,c=U[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=E.preFilter;a;){
// Comma and first run
r&&!(i=se.exec(a))||(i&&(
// Don't consume trailing commas as valid
a=a.slice(i[0].length)||a),l.push(o=[])),r=!1,
// Combinators
(i=ae.exec(a))&&(r=i.shift(),o.push({value:r,
// Cast descendant combinators to space
type:i[0].replace(oe," ")}),a=a.slice(r.length));
// Filters
for(s in E.filter)!(i=fe[s].exec(a))||u[s]&&!(i=u[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?a.length:a?t.error(e):U(e,l).slice(0)},C=t.compile=function(e,t){var n,r=[],i=[],o=V[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=x(e)),n=t.length;n--;)o=v(t[n]),o[M]?r.push(o):i.push(o);
// Cache the compiled function
o=V(e,y(i,r)),
// Save selector and tokenization
o.selector=e}return o},A=t.select=function(e,t,n,r){var i,o,s,a,l,c="function"==typeof e&&e,d=!r&&x(e=c.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===d.length){if(
// Reduce context if the leading compound selector is an ID
o=d[0]=d[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&9===t.nodeType&&L&&E.relative[o[1].type]){if(!(t=(E.find.ID(s.matches[0].replace(ve,ye),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
i=fe.needsContext.test(e)?0:o.length;i--&&(s=o[i],!E.relative[a=s.type]);)if((l=E.find[a])&&(r=l(s.matches[0].replace(ve,ye),me.test(o[0].type)&&u(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),!(e=r.length&&f(o)))return Q.apply(n,r),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(c||C(e,d))(r,t,!L,n,!t||me.test(e)&&u(t.parentNode)||t),n},w.sortStable=M.split("").sort(G).join("")===M,w.detectDuplicates=!!D,I(),w.sortDetached=i(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(N.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(n);Ce.find=Se,Ce.expr=Se.selectors,
// Deprecated
Ce.expr[":"]=Ce.expr.pseudos,Ce.uniqueSort=Ce.unique=Se.uniqueSort,Ce.text=Se.getText,Ce.isXMLDoc=Se.isXML,Ce.contains=Se.contains,Ce.escapeSelector=Se.escape;var Oe=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Ce(e).is(n))break;r.push(e)}return r},De=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ie=Ce.expr.match.needsContext,Ne=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;Ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Ce.find.matchesSelector(r,e)?[r]:[]:Ce.find.matches(e,Ce.grep(t,function(e){return 1===e.nodeType}))},Ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(Ce(e).filter(function(){for(t=0;t<r;t++)if(Ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)Ce.find(e,i[t],n);return r>1?Ce.uniqueSort(n):n},filter:function(e){return this.pushStack(c(this,e||[],!1))},not:function(e){return this.pushStack(c(this,e||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!c(this,"string"==typeof e&&Ie.test(e)?Ce(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var ke,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(Ce.fn.init=function(e,t,n){var r,i;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||ke,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Le.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(html) -> $(array)
if(r[1]){
// HANDLE: $(html, props)
if(t=t instanceof Ce?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
Ce.merge(this,Ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ce,!0)),Ne.test(r[1])&&Ce.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
_e(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}
// Inject the element directly into the jQuery object
return i=ce.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}
// Execute immediately if ready is not present
return e.nodeType?(this[0]=e,this.length=1,this):_e(e)?void 0!==n.ready?n.ready(e):e(Ce):Ce.makeArray(e,this)}).prototype=Ce.fn,
// Initialize central reference
ke=Ce(ce);var je=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Pe={children:!0,contents:!0,next:!0,prev:!0};Ce.fn.extend({has:function(e){var t=Ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&Ce(e);
// Positional selectors never match, since there's no _selection_ context
if(!Ie.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(s?s.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&Ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Ce.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?ge.call(Ce(e),this[0]):ge.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(),Ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Oe(e,"parentNode")},parentsUntil:function(e,t,n){return Oe(e,"parentNode",n)},next:function(e){return f(e,"nextSibling")},prev:function(e){return f(e,"previousSibling")},nextAll:function(e){return Oe(e,"nextSibling")},prevAll:function(e){return Oe(e,"previousSibling")},nextUntil:function(e,t,n){return Oe(e,"nextSibling",n)},prevUntil:function(e,t,n){return Oe(e,"previousSibling",n)},siblings:function(e){return De((e.parentNode||{}).firstChild,e)},children:function(e){return De(e.firstChild)},contents:function(e){
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
return u(e,"iframe")?e.contentDocument:(u(e,"template")&&(e=e.content||e),Ce.merge([],e.childNodes))}},function(e,t){Ce.fn[e]=function(n,r){var i=Ce.map(this,t,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Ce.filter(r,i)),this.length>1&&(Pe[e]||Ce.uniqueSort(i),je.test(e)&&i.reverse()),this.pushStack(i)}});var He=/[^\x20\t\r\n\f]+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
Ce.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?d(e):Ce.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
r,
// Flag to prevent firing
i,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
s=[],
// Index of currently firing callback (modified by add/remove as needed)
l=-1,
// Fire callbacks
u=function(){for(
// Enforce single-firing
i=i||e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=t=!0;s.length;l=-1)for(n=s.shift();++l<o.length;)
// Run callback and check for early termination
!1===o[l].apply(n[0],n[1])&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
l=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
i&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return o&&(n&&!t&&(l=o.length-1,s.push(n)),function t(n){Ce.each(n,function(n,r){_e(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==a(r)&&
// Inspect recursively
t(r)})}(arguments),n&&!t&&u()),this},
// Remove a callback from the list
remove:function(){return Ce.each(arguments,function(e,t){for(var n;(n=Ce.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=l&&l--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?Ce.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||u()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return c},Ce.extend({Deferred:function(e){var t=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",Ce.Callbacks("memory"),Ce.Callbacks("memory"),2],["resolve","done",Ce.Callbacks("once memory"),Ce.Callbacks("once memory"),0,"resolved"],["reject","fail",Ce.Callbacks("once memory"),Ce.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return Ce.Deferred(function(n){Ce.each(t,function(t,r){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=_e(e[r[4]])&&e[r[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&_e(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(e,r,i){function o(e,t,r,i){return function(){var a=this,l=arguments,u=function(){var n,u;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<s)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((n=r.apply(a,l))===t.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
u=n&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof n||"function"==typeof n)&&n.then,
// Handle a returned thenable
_e(u)?
// Special processors (notify) just wait for resolution
i?u.call(n,o(s,t,h,i),o(s,t,p,i)):(
// ...and disregard older resolution values
s++,u.call(n,o(s,t,h,i),o(s,t,p,i),o(s,t,h,t.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==h&&(a=void 0,l=[n]),
// Process the value(s)
// Default process is resolve
(i||t.resolveWith)(a,l))}},
// Only normal processors (resolve) catch and reject exceptions
c=i?u:function(){try{u()}catch(n){Ce.Deferred.exceptionHook&&Ce.Deferred.exceptionHook(n,c.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=s&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==p&&(a=void 0,l=[n]),t.rejectWith(a,l))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?c():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
Ce.Deferred.getStackHook&&(c.stackTrace=Ce.Deferred.getStackHook()),n.setTimeout(c))}}var s=0;return Ce.Deferred(function(n){
// progress_handlers.add( ... )
t[0][3].add(o(0,n,_e(i)?i:h,n.notifyWith)),
// fulfilled_handlers.add( ... )
t[1][3].add(o(0,n,_e(e)?e:h)),
// rejected_handlers.add( ... )
t[2][3].add(o(0,n,_e(r)?r:p))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?Ce.extend(e,i):i}},o={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return Ce.each(t,function(e,n){var s=n[2],a=n[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[n[1]]=s.add,
// Handle state
a&&s.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=a},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
t[3-e][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
t[3-e][3].disable,
// progress_callbacks.lock
t[0][2].lock,
// progress_handlers.lock
t[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
s.add(n[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[n[0]+"With"]=s.fireWith}),i.promise(o),e&&e.call(o,o),o},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
t=arguments.length,
// count of unprocessed arguments
n=t,
// subordinate fulfillment data
r=Array(n),i=de.call(arguments),
// the master Deferred
o=Ce.Deferred(),
// subordinate callback factory
s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?de.call(arguments):n,--t||o.resolveWith(r,i)}};
// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(g(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||_e(i[n]&&i[n].then)))return o.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)g(i[n],s(n),o.reject);return o.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Re=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;Ce.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
n.console&&n.console.warn&&e&&Re.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},Ce.readyException=function(e){n.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var Me=Ce.Deferred();Ce.fn.ready=function(e){return Me.then(e).catch(function(e){Ce.readyException(e)}),this},Ce.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--Ce.readyWait:Ce.isReady)||(
// Remember that the DOM is ready
Ce.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==e&&--Ce.readyWait>0||
// If there are functions bound, to execute
Me.resolveWith(ce,[Ce]))}}),Ce.ready.then=Me.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===ce.readyState||"loading"!==ce.readyState&&!ce.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
n.setTimeout(Ce.ready):(
// Use the handy event callback
ce.addEventListener("DOMContentLoaded",m),
// A fallback to window.onload, that will always work
n.addEventListener("load",m));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Fe=function(e,t,n,r,i,o,s){var l=0,u=e.length,c=null==n;
// Sets many values
if("object"===a(n)){i=!0;for(l in n)Fe(e,t,l,n[l],!0,o,s)}else if(void 0!==r&&(i=!0,_e(r)||(s=!0),c&&(
// Bulk operations run against the entire set
s?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(Ce(e),n)})),t))for(;l<u;l++)t(e[l],n,s?r:r.call(e[l],l,t(e[l],n)));
// Gets
return i?e:c?t.call(e):u?t(e[0],n):o},We=/^-ms-/,Be=/-([a-z])/g,qe=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};b.uid=1,b.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return t||(t={},qe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[y(t)]=n;else
// Copy the properties one-by-one to the cache object
for(r in t)i[y(r)]=t[r];return i},get:function(e,t){
// Always use camelCase key (gh-2257)
return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][y(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){
// Support array or space separated string of keys
Array.isArray(t)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=t.map(y):(t=y(t),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
t=t in r?[t]:t.match(He)||[]),n=t.length;for(;n--;)delete r[t[n]]}
// Remove the expando if there's no more data
(void 0===t||Ce.isEmptyObject(r))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!Ce.isEmptyObject(t)}};var Ue=new b,Ve=new b,Ge=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ze=/[A-Z]/g;Ce.extend({hasData:function(e){return Ve.hasData(e)||Ue.hasData(e)},data:function(e,t,n){return Ve.access(e,t,n)},removeData:function(e,t){Ve.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Ue.access(e,t,n)},_removeData:function(e,t){Ue.remove(e,t)}}),Ce.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;
// Gets all values
if(void 0===e){if(this.length&&(i=Ve.get(o),1===o.nodeType&&!Ue.get(o,"hasDataAttrs"))){for(n=s.length;n--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=y(r.slice(5)),E(o,r,i[r])));Ue.set(o,"hasDataAttrs",!0)}return i}
// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){Ve.set(this,e)}):Fe(this,function(t){var n;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t){if(void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
n=Ve.get(o,e)))return n;if(void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=E(o,e)))return n}else
// Set the data...
this.each(function(){
// We always store the camelCased key
Ve.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ve.remove(this,e)})}}),Ce.extend({queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=Ue.get(e,t),n&&(!r||Array.isArray(n)?r=Ue.access(e,t,Ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=Ce.queue(e,t),r=n.length,i=n.shift(),o=Ce._queueHooks(e,t),s=function(){Ce.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Ue.get(e,n)||Ue.access(e,n,{empty:Ce.Callbacks("once memory").add(function(){Ue.remove(e,[t+"queue",n])})})}}),Ce.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Ce.queue(this[0],e):void 0===t?this:this.each(function(){var n=Ce.queue(this,e,t);
// Ensure a hooks for this queue
Ce._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Ce.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=Ce.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Ue.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var Ke=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$e=new RegExp("^(?:([+-])=|)("+Ke+")([a-z%]*)$","i"),Ye=["Top","Right","Bottom","Left"],Qe=function(e,t){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return e=t||e,"none"===e.style.display||""===e.style.display&&Ce.contains(e.ownerDocument,e)&&"none"===Ce.css(e,"display")},Xe=function(e,t,n,r){var i,o,s={};
// Remember the old values, and insert the new ones
for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
// Revert the old values
for(o in t)e.style[o]=s[o];return i},Je={};Ce.fn.extend({show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Qe(this)?Ce(this).show():Ce(this).hide()})}});var Ze=/^(?:checkbox|radio)$/i,et=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,tt=/^$|^module$|\/(?:java|ecma)script/i,nt={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
nt.optgroup=nt.option,nt.tbody=nt.tfoot=nt.colgroup=nt.caption=nt.thead,nt.th=nt.td;var rt=/<|&#?\w+;/;!function(){var e=ce.createDocumentFragment(),t=e.appendChild(ce.createElement("div")),n=ce.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
Ee.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t.innerHTML="<textarea>x</textarea>",Ee.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var it=ce.documentElement,ot=/^key/,st=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,at=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
Ce.event={global:{},add:function(e,t,n,r,i){var o,s,a,l,u,c,f,d,h,p,g,m=Ue.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(m)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(o=n,n=o.handler,i=o.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&Ce.find.matchesSelector(it,i),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=Ce.guid++),
// Init the element's event structure and main handler, if this is the first
(l=m.events)||(l=m.events={}),(s=m.handle)||(s=m.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==Ce&&Ce.event.triggered!==t.type?Ce.event.dispatch.apply(e,arguments):void 0}),
// Handle multiple events separated by a space
t=(t||"").match(He)||[""],u=t.length;u--;)a=at.exec(t[u])||[],h=g=a[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
h&&(
// If event changes its type, use the special event handlers for the changed type
f=Ce.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(i?f.delegateType:f.bindType)||h,
// Update special based on newly reset type
f=Ce.event.special[h]||{},
// handleObj is passed to all event handlers
c=Ce.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Ce.expr.match.needsContext.test(i),namespace:p.join(".")},o),
// Init the event handler queue if we're the first
(d=l[h])||(d=l[h]=[],d.delegateCount=0,
// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(e,r,p,s)||e.addEventListener&&e.addEventListener(h,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
i?d.splice(d.delegateCount++,0,c):d.push(c),
// Keep track of which events have ever been used, for event optimization
Ce.event.global[h]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,s,a,l,u,c,f,d,h,p,g,m=Ue.hasData(e)&&Ue.get(e);if(m&&(l=m.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(He)||[""],u=t.length;u--;)
// Unbind all events (on this namespace, if provided) for the element
if(a=at.exec(t[u])||[],h=g=a[1],p=(a[2]||"").split(".").sort(),h){for(f=Ce.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,d=l[h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
s=o=d.length;o--;)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,m.handle)||Ce.removeEvent(e,h,m.handle),delete l[h])}else for(h in l)Ce.event.remove(e,h+t[u],n,r,!0);
// Remove data and the expando if it's no longer used
Ce.isEmptyObject(l)&&Ue.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,s,a=Ce.event.fix(e),l=new Array(arguments.length),u=(Ue.get(this,"events")||{})[a.type]||[],c=Ce.event.special[a.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(
// Determine handlers
s=Ce.event.handlers.call(this,a,u),
// Run delegates first; they may want to stop propagation beneath us
t=0;(i=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!a.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
a.rnamespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(r=((Ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,l))&&!1===(a.result=r)&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,r,i,o,s,a=[],l=t.delegateCount,u=e.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],s={},n=0;n<l;n++)r=t[n],
// Don't conflict with Object.prototype properties (#13203)
i=r.selector+" ",void 0===s[i]&&(s[i]=r.needsContext?Ce(i,this).index(u)>-1:Ce.find(i,this,null,[u]).length),s[i]&&o.push(r);o.length&&a.push({elem:u,handlers:o})}
// Add the remaining (directly-bound) handlers
return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(Ce.Event.prototype,e,{enumerable:!0,configurable:!0,get:_e(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[Ce.expando]?e:new Ce.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==I()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===I()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return u(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},Ce.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},Ce.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof Ce.Event))return new Ce.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?O:D,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&Ce.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),
// Mark it as fixed
this[Ce.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
Ce.Event.prototype={constructor:Ce.Event,isDefaultPrevented:D,isPropagationStopped:D,isImmediatePropagationStopped:D,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=O,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=O,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=O,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
Ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==e.which&&ot.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&st.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},Ce.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
Ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Ce.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||Ce.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Ce.fn.extend({on:function(e,t,n,r){return N(this,e,t,n,r)},one:function(e,t,n,r){return N(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,Ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}
// ( types [, fn] )
return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=D),this.each(function(){Ce.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
lt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ut=/<script|<style|<link/i,
// checked="checked" or checked
ct=/checked\s*(?:[^=]|=\s*.checked.)/i,ft=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;Ce.extend({htmlPrefilter:function(e){return e.replace(lt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),l=Ce.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(Ee.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Ce.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
s=C(a),o=C(e),r=0,i=o.length;r<i;r++)H(o[r],s[r]);
// Copy the events from the original to the clone
if(t)if(n)for(o=o||C(e),s=s||C(a),r=0,i=o.length;r<i;r++)P(o[r],s[r]);else P(e,a);
// Return the cloned set
// Preserve script evaluation history
return s=C(a,"script"),s.length>0&&A(s,!l&&C(e,"script")),a},cleanData:function(e){for(var t,n,r,i=Ce.event.special,o=0;void 0!==(n=e[o]);o++)if(qe(n)){if(t=n[Ue.expando]){if(t.events)for(r in t.events)i[r]?Ce.event.remove(n,r):Ce.removeEvent(n,r,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ue.expando]=void 0}n[Ve.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ve.expando]=void 0)}}}),Ce.fn.extend({detach:function(e){return M(this,e,!0)},remove:function(e){return M(this,e)},text:function(e){return Fe(this,function(e){return void 0===e?Ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return R(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){k(this,e).appendChild(e)}})},prepend:function(){return R(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return R(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return R(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
Ce.cleanData(C(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Ce.clone(this,e,t)})},html:function(e){return Fe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ut.test(e)&&!nt[(et.exec(e)||["",""])[1].toLowerCase()]){e=Ce.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},
// Remove element nodes and prevent memory leaks
1===t.nodeType&&(Ce.cleanData(C(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return R(this,arguments,function(t){var n=this.parentNode;Ce.inArray(this,e)<0&&(Ce.cleanData(C(this)),n&&n.replaceChild(t,this))},e)}}),Ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Ce.fn[e]=function(e){for(var n,r=[],i=Ce(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),Ce(i[s])[t](n),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
pe.apply(r,n.get());return this.pushStack(r)}});var dt=new RegExp("^("+Ke+")(?!px)[a-z%]+$","i"),ht=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},pt=new RegExp(Ye.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",it.appendChild(l).appendChild(u);var e=n.getComputedStyle(u);r="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
a=12===t(e.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",s=36===t(e.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===t(e.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
u.style.position="absolute",o=36===u.offsetWidth||"absolute",it.removeChild(l),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function t(e){return Math.round(parseFloat(e))}var r,i,o,s,a,l=ce.createElement("div"),u=ce.createElement("div");
// Finish early in limited (non-browser) environments
u.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",Ee.clearCloneStyle="content-box"===u.style.backgroundClip,Ce.extend(Ee,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
gt=/^(none|table(?!-c[ea]).+)/,mt=/^--/,vt={position:"absolute",visibility:"hidden",display:"block"},yt={letterSpacing:"0",fontWeight:"400"},bt=["Webkit","Moz","ms"],wt=ce.createElement("div").style;Ce.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=F(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var i,o,s,a=y(t),l=mt.test(t),u=e.style;
// Check if we're setting a value
if(
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
l||(t=q(a)),
// Gets hook for the prefixed version, then unprefixed version
s=Ce.cssHooks[t]||Ce.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t];o=typeof n,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===o&&(i=$e.exec(n))&&i[1]&&(n=_(e,t,i),
// Fixes bug #9237
o="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n===n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===o&&(n+=i&&i[3]||(Ce.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
Ee.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
s&&"set"in s&&void 0===(n=s.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,s,a=y(t);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return mt.test(t)||(t=q(a)),s=Ce.cssHooks[t]||Ce.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=F(e,t,r)),"normal"===i&&t in yt&&(i=yt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),Ce.each(["height","width"],function(e,t){Ce.cssHooks[t]={get:function(e,n,r){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!gt.test(Ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?G(e,t,r):Xe(e,vt,function(){return G(e,t,r)})},set:function(e,n,r){var i,o=ht(e),s="border-box"===Ce.css(e,"boxSizing",!1,o),a=r&&V(e,t,r,s,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
// Convert to pixels if value adjustment is needed
return s&&Ee.scrollboxSize()===o.position&&(a-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-V(e,t,"border",!1,o)-.5)),a&&(i=$e.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=Ce.css(e,t)),U(e,n,a)}}}),Ce.cssHooks.marginLeft=W(Ee.reliableMarginLeft,function(e,t){if(t)return(parseFloat(F(e,"marginLeft"))||e.getBoundingClientRect().left-Xe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
Ce.each({margin:"",padding:"",border:"Width"},function(e,t){Ce.cssHooks[e+t]={expand:function(n){for(var r=0,i={},
// Assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ye[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(Ce.cssHooks[e+t].set=U)}),Ce.fn.extend({css:function(e,t){return Fe(this,function(e,t,n){var r,i,o={},s=0;if(Array.isArray(t)){for(r=ht(e),i=t.length;s<i;s++)o[t[s]]=Ce.css(e,t[s],!1,r);return o}return void 0!==n?Ce.style(e,t,n):Ce.css(e,t)},e,t,arguments.length>1)}}),Ce.Tween=z,z.prototype={constructor:z,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||Ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Ce.cssNumber[n]?"":"px")},cur:function(){var e=z.propHooks[this.prop];return e&&e.get?e.get(this):z.propHooks._default.get(this)},run:function(e){var t,n=z.propHooks[this.prop];return this.options.duration?this.pos=t=Ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=Ce.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
Ce.fx.step[e.prop]?Ce.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[Ce.cssProps[e.prop]]&&!Ce.cssHooks[e.prop]?e.elem[e.prop]=e.now:Ce.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},Ce.fx=z.prototype.init,
// Back compat <1.8 extension point
Ce.fx.step={};var Et,_t,Tt=/^(?:toggle|show|hide)$/,xt=/queueHooks$/;Ce.Animation=Ce.extend(Z,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return _(n.elem,e,$e.exec(t),n),n}]},tweener:function(e,t){_e(e)?(t=e,e=["*"]):e=e.match(He);for(var n,r=0,i=e.length;r<i;r++)n=e[r],Z.tweeners[n]=Z.tweeners[n]||[],Z.tweeners[n].unshift(t)},prefilters:[X],prefilter:function(e,t){t?Z.prefilters.unshift(e):Z.prefilters.push(e)}}),Ce.speed=function(e,t,n){var r=e&&"object"==typeof e?Ce.extend({},e):{complete:n||!n&&t||_e(e)&&e,duration:e,easing:n&&t||t&&!_e(t)&&t};
// Go to the end state if fx are off
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return Ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in Ce.fx.speeds?r.duration=Ce.fx.speeds[r.duration]:r.duration=Ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){_e(r.old)&&r.old.call(this),r.queue&&Ce.dequeue(this,r.queue)},r},Ce.fn.extend({fadeTo:function(e,t,n,r){
// Show any hidden elements after setting opacity to 0
return this.filter(Qe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Ce.isEmptyObject(e),o=Ce.speed(t,n,r),s=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=Z(this,Ce.extend({},e),o);
// Empty animations, or finishing resolves immediately
(i||Ue.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Ce.timers,s=Ue.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&xt.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&n||Ce.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Ue.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Ce.timers,s=r?r.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
n.finish=!0,
// Empty the queue first
Ce.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
// Turn off finishing flag
delete n.finish})}}),Ce.each(["toggle","show","hide"],function(e,t){var n=Ce.fn[t];Ce.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Y(t,!0),e,r,i)}}),
// Generate shortcuts for custom animations
Ce.each({slideDown:Y("show"),slideUp:Y("hide"),slideToggle:Y("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Ce.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Ce.timers=[],Ce.fx.tick=function(){var e,t=0,n=Ce.timers;for(Et=Date.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||Ce.fx.stop(),Et=void 0},Ce.fx.timer=function(e){Ce.timers.push(e),Ce.fx.start()},Ce.fx.interval=13,Ce.fx.start=function(){_t||(_t=!0,K())},Ce.fx.stop=function(){_t=null},Ce.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
Ce.fn.delay=function(e,t){return e=Ce.fx?Ce.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}})},function(){var e=ce.createElement("input"),t=ce.createElement("select"),n=t.appendChild(ce.createElement("option"));e.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
Ee.checkOn=""!==e.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
Ee.optSelected=n.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
e=ce.createElement("input"),e.value="t",e.type="radio",Ee.radioValue="t"===e.value}();var Ct,At=Ce.expr.attrHandle;Ce.fn.extend({attr:function(e,t){return Fe(this,Ce.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Ce.removeAttr(this,e)})}}),Ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return void 0===e.getAttribute?Ce.prop(e,t,n):(1===o&&Ce.isXMLDoc(e)||(i=Ce.attrHooks[t.toLowerCase()]||(Ce.expr.match.bool.test(t)?Ct:void 0)),void 0!==n?null===n?void Ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=Ce.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!Ee.radioValue&&"radio"===t&&u(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(He);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
Ct={set:function(e,t,n){
// Remove boolean attributes when set to false
return!1===t?Ce.removeAttr(e,n):e.setAttribute(n,n),n}},Ce.each(Ce.expr.match.bool.source.match(/\w+/g),function(e,t){var n=At[t]||Ce.find.attr;At[t]=function(e,t,r){var i,o,s=t.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return r||(o=At[s],At[s]=i,i=null!=n(e,t,r)?s:null,At[s]=o),i}});var St=/^(?:input|select|textarea|button)$/i,Ot=/^(?:a|area)$/i;Ce.fn.extend({prop:function(e,t){return Fe(this,Ce.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Ce.propFix[e]||e]})}}),Ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fix name and attach hooks
return 1===o&&Ce.isXMLDoc(e)||(t=Ce.propFix[t]||t,i=Ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=Ce.find.attr(e,"tabindex");return t?parseInt(t,10):St.test(e.nodeName)||Ot.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
Ee.optSelected||(Ce.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),Ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Ce.propFix[this.toLowerCase()]=this}),Ce.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,l=0;if(_e(e))return this.each(function(t){Ce(this).addClass(e.call(this,t,te(this)))});if(t=ne(e),t.length)for(;n=this[l++];)if(i=te(n),r=1===n.nodeType&&" "+ee(i)+" "){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");
// Only assign if different to avoid unneeded rendering.
a=ee(r),i!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,l=0;if(_e(e))return this.each(function(t){Ce(this).removeClass(e.call(this,t,te(this)))});if(!arguments.length)return this.attr("class","");if(t=ne(e),t.length)for(;n=this[l++];)if(i=te(n),
// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+ee(i)+" "){for(s=0;o=t[s++];)
// Remove *all* instances
for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
a=ee(r),i!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):_e(e)?this.each(function(n){Ce(this).toggleClass(e.call(this,n,te(this),t),t)}):this.each(function(){var t,i,o,s;if(r)for(
// Toggle individual class names
i=0,o=Ce(this),s=ne(e);t=s[i++];)
// Check each className given, space separated list
o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=te(this),t&&
// Store className if set
Ue.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===e?"":Ue.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+ee(te(n))+" ").indexOf(t)>-1)return!0;return!1}});var Dt=/\r/g;Ce.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=_e(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Ce(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=Ce.map(i,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(t=Ce.valHooks[this.type]||Ce.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)
// Handle most common string cases
return(t=Ce.valHooks[i.type]||Ce.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Dt,""):null==n?"":n)}}}),Ce.extend({valHooks:{option:{get:function(e){var t=Ce.find.attr(e,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=t?t:ee(Ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:i.length;
// Loop through all the selected options
for(r=o<0?l:s?o:0;r<l;r++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=i[r],(n.selected||r===o)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=Ce(n).val(),s)return t;
// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=Ce.makeArray(t),s=i.length;s--;)r=i[s],/* eslint-disable no-cond-assign */
(r.selected=Ce.inArray(Ce.valHooks.option.get(r),o)>-1)&&(n=!0);
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),
// Radios and checkboxes getter/setter
Ce.each(["radio","checkbox"],function(){Ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=Ce.inArray(Ce(e).val(),t)>-1}},Ee.checkOn||(Ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),
// Return jQuery for attributes-only inclusion
Ee.focusin="onfocusin"in n;var It=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};Ce.extend(Ce.event,{trigger:function(e,t,r,i){var o,s,a,l,u,c,f,d,h=[r||ce],p=ye.call(e,"type")?e.type:e,g=ye.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=d=a=r=r||ce,3!==r.nodeType&&8!==r.nodeType&&!It.test(p+Ce.event.triggered)&&(p.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
g=p.split("."),p=g.shift(),g.sort()),u=p.indexOf(":")<0&&"on"+p,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[Ce.expando]?e:new Ce.Event(p,"object"==typeof e&&e),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
e.isTrigger=i?2:3,e.namespace=g.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=r),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:Ce.makeArray(t,[e]),
// Allow special events to draw outside the lines
f=Ce.event.special[p]||{},i||!f.trigger||!1!==f.trigger.apply(r,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!f.noBubble&&!Te(r)){for(l=f.delegateType||p,It.test(l+p)||(s=s.parentNode);s;s=s.parentNode)h.push(s),a=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
a===(r.ownerDocument||ce)&&h.push(a.defaultView||a.parentWindow||n)}for(
// Fire handlers on the event path
o=0;(s=h[o++])&&!e.isPropagationStopped();)d=s,e.type=o>1?l:f.bindType||p,
// jQuery handler
c=(Ue.get(s,"events")||{})[e.type]&&Ue.get(s,"handle"),c&&c.apply(s,t),(
// Native handler
c=u&&s[u])&&c.apply&&qe(s)&&(e.result=c.apply(s,t),!1===e.result&&e.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return e.type=p,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(h.pop(),t)||!qe(r)||u&&_e(r[p])&&!Te(r)&&(a=r[u],a&&(r[u]=null),Ce.event.triggered=p,e.isPropagationStopped()&&d.addEventListener(p,Nt),r[p](),e.isPropagationStopped()&&d.removeEventListener(p,Nt),Ce.event.triggered=void 0,a&&(r[u]=a)),e.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=Ce.extend(new Ce.Event,n,{type:e,isSimulated:!0});Ce.event.trigger(r,null,t)}}),Ce.fn.extend({trigger:function(e,t){return this.each(function(){Ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Ce.event.trigger(e,t,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
Ee.focusin||Ce.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){Ce.event.simulate(t,e.target,Ce.event.fix(e))};Ce.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Ue.access(r,t);i||r.addEventListener(e,n,!0),Ue.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ue.access(r,t)-1;i?Ue.access(r,t,i):(r.removeEventListener(e,n,!0),Ue.remove(r,t))}}});var kt=n.location,Lt=Date.now(),jt=/\?/;
// Cross-browser xml parsing
Ce.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||Ce.error("Invalid XML: "+e),t};var Pt=/\[\]$/,Ht=/\r?\n/g,Rt=/^(?:submit|button|image|reset|file)$/i,Mt=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
Ce.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=_e(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!Ce.isPlainObject(e))
// Serialize the form elements
Ce.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)re(n,e[n],t,i);
// Return the resulting serialization
return r.join("&")},Ce.fn.extend({serialize:function(){return Ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=Ce.prop(this,"elements");return e?Ce.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!Ce(this).is(":disabled")&&Mt.test(this.nodeName)&&!Rt.test(e)&&(this.checked||!Ze.test(e))}).map(function(e,t){var n=Ce(this).val();return null==n?null:Array.isArray(n)?Ce.map(n,function(e){return{name:t.name,value:e.replace(Ht,"\r\n")}}):{name:t.name,value:n.replace(Ht,"\r\n")}}).get()}});var Ft=/%20/g,Wt=/#.*$/,Bt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Ut=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Vt=/^(?:GET|HEAD)$/,Gt=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
zt={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Kt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
$t="*/".concat("*"),
// Anchor tag for parsing the document origin
Yt=ce.createElement("a");Yt.href=kt.href,Ce.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:kt.href,type:"GET",isLocal:Ut.test(kt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":Ce.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?se(se(e,Ce.ajaxSettings),t):se(Ce.ajaxSettings,e)},ajaxPrefilter:ie(zt),ajaxTransport:ie(Kt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function r(e,t,r,a){var u,d,h,w,E,_=t;
// Ignore repeat invocations
c||(c=!0,
// Clear timeout if it exists
l&&n.clearTimeout(l),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=void 0,
// Cache response headers
s=a||"",
// Set readyState
T.readyState=e>0?4:0,
// Determine if successful
u=e>=200&&e<300||304===e,
// Get response data
r&&(w=ae(p,T,r)),
// Convert no matter what (that way responseXXX fields are always set)
w=le(p,w,T,u),
// If successful, handle type chaining
u?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
p.ifModified&&(E=T.getResponseHeader("Last-Modified"),E&&(Ce.lastModified[o]=E),(E=T.getResponseHeader("etag"))&&(Ce.etag[o]=E)),
// if no content
204===e||"HEAD"===p.type?_="nocontent":304===e?_="notmodified":(_=w.state,d=w.data,h=w.error,u=!h)):(
// Extract error from statusText and normalize for non-aborts
h=_,!e&&_||(_="error",e<0&&(e=0))),
// Set data for the fake xhr object
T.status=e,T.statusText=(t||_)+"",
// Success/Error
u?v.resolveWith(g,[d,_,T]):v.rejectWith(g,[T,_,h]),
// Status-dependent callbacks
T.statusCode(b),b=void 0,f&&m.trigger(u?"ajaxSuccess":"ajaxError",[T,p,u?d:h]),
// Complete
y.fireWith(g,[T,_]),f&&(m.trigger("ajaxComplete",[T,p]),
// Handle the global AJAX counter
--Ce.active||Ce.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var i,
// URL without anti-cache param
o,
// Response headers
s,a,
// timeout handle
l,
// Url cleanup var
u,
// Request state (becomes false upon send and true upon completion)
c,
// To know if global events are to be dispatched
f,
// Loop variable
d,
// uncached part of the url
h,
// Create the final options object
p=Ce.ajaxSetup({},t),
// Callbacks context
g=p.context||p,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
m=p.context&&(g.nodeType||g.jquery)?Ce(g):Ce.event,
// Deferreds
v=Ce.Deferred(),y=Ce.Callbacks("once memory"),
// Status-dependent callbacks
b=p.statusCode||{},
// Headers (they are sent all at once)
w={},E={},
// Default abort message
_="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=qt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return c?s:null},
// Caches the header
setRequestHeader:function(e,t){return null==c&&(e=E[e.toLowerCase()]=E[e.toLowerCase()]||e,w[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(p.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(c)
// Execute the appropriate callbacks
T.always(e[T.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)b[t]=[b[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||_;return i&&i.abort(t),r(0,t),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
v.promise(T),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
p.url=((e||p.url||kt.href)+"").replace(Gt,kt.protocol+"//"),
// Alias method option to type as per ticket #12004
p.type=t.method||t.type||p.method||p.type,
// Extract dataTypes list
p.dataTypes=(p.dataType||"*").toLowerCase().match(He)||[""],null==p.crossDomain){u=ce.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{u.href=p.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
u.href=u.href,p.crossDomain=Yt.protocol+"//"+Yt.host!=u.protocol+"//"+u.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
p.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
p.data&&p.processData&&"string"!=typeof p.data&&(p.data=Ce.param(p.data,p.traditional)),
// Apply prefilters
oe(zt,p,t,T),c)return T;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
f=Ce.event&&p.global,
// Watch for a new set of requests
f&&0==Ce.active++&&Ce.event.trigger("ajaxStart"),
// Uppercase the type
p.type=p.type.toUpperCase(),
// Determine if request has content
p.hasContent=!Vt.test(p.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=p.url.replace(Wt,""),
// More options handling for requests with no content
p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Ft,"+")):(
// Remember the hash so we can put it back
h=p.url.slice(o.length),
// If data is available and should be processed, append data to url
p.data&&(p.processData||"string"==typeof p.data)&&(o+=(jt.test(o)?"&":"?")+p.data,
// #9682: remove data so that it's not used in an eventual retry
delete p.data),
// Add or update anti-cache param if needed
!1===p.cache&&(o=o.replace(Bt,"$1"),h=(jt.test(o)?"&":"?")+"_="+Lt+++h),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
p.url=o+h),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
p.ifModified&&(Ce.lastModified[o]&&T.setRequestHeader("If-Modified-Since",Ce.lastModified[o]),Ce.etag[o]&&T.setRequestHeader("If-None-Match",Ce.etag[o])),
// Set the correct header, if data is being sent
(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&T.setRequestHeader("Content-Type",p.contentType),
// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+$t+"; q=0.01":""):p.accepts["*"]);
// Check for headers option
for(d in p.headers)T.setRequestHeader(d,p.headers[d]);
// Allow custom headers/mimetypes and early abort
if(p.beforeSend&&(!1===p.beforeSend.call(g,T,p)||c))
// Abort if not done already and return
return T.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
_="abort",
// Install callbacks on deferreds
y.add(p.complete),T.done(p.success),T.fail(p.error),
// Get transport
i=oe(Kt,p,t,T)){
// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,
// Send global event
f&&m.trigger("ajaxSend",[T,p]),c)return T;
// Timeout
p.async&&p.timeout>0&&(l=n.setTimeout(function(){T.abort("timeout")},p.timeout));try{c=!1,i.send(w,r)}catch(e){
// Rethrow post-completion exceptions
if(c)throw e;
// Propagate others as results
r(-1,e)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return Ce.get(e,t,n,"json")},getScript:function(e,t){return Ce.get(e,void 0,t,"script")}}),Ce.each(["get","post"],function(e,t){Ce[t]=function(e,n,r,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return _e(n)&&(i=i||r,r=n,n=void 0),Ce.ajax(Ce.extend({url:e,type:t,dataType:i,data:n,success:r},Ce.isPlainObject(e)&&e))}}),Ce._evalUrl=function(e){return Ce.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},Ce.fn.extend({wrapAll:function(e){var t;
// The elements to wrap the target around
return this[0]&&(_e(e)&&(e=e.call(this[0])),t=Ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return _e(e)?this.each(function(t){Ce(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Ce(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=_e(e);return this.each(function(n){Ce(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){Ce(this).replaceWith(this.childNodes)}),this}}),Ce.expr.pseudos.hidden=function(e){return!Ce.expr.pseudos.visible(e)},Ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},Ce.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Qt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Xt=Ce.ajaxSettings.xhr();Ee.cors=!!Xt&&"withCredentials"in Xt,Ee.ajax=Xt=!!Xt,Ce.ajaxTransport(function(e){var t,r;
// Cross domain only allowed if supported through XMLHttpRequest
if(Ee.cors||Xt&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr();
// Apply custom fields if provided
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];
// Override mime type if needed
e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(s in i)a.setRequestHeader(s,i[s]);
// Callback
t=function(e){return function(){t&&(t=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof a.status?o(0,"error"):o(
// File: protocol always yields status 0; see #8605, #14207
a.status,a.statusText):o(Qt[a.status]||a.status,a.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},
// Listen to events
a.onload=t(),r=a.onerror=a.ontimeout=t("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===a.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
n.setTimeout(function(){t&&r()})},
// Create the abort callback
t=t("abort");try{
// Do send the request (this may raise an exception)
a.send(e.hasContent&&e.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw e}},abort:function(){t&&t()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
Ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
Ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return Ce.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
Ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
Ce.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(r,i){t=Ce("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
ce.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Jt=[],Zt=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
Ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||Ce.expando+"_"+Lt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
Ce.ajaxPrefilter("json jsonp",function(e,t,r){var i,o,s,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return i=e.jsonpCallback=_e(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+i):!1!==e.jsonp&&(e.url+=(jt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||Ce.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){s=arguments},r.always(function(){
// If previous value didn't exist - remove it
void 0===o?Ce(n).removeProp(i):n[i]=o,
// Save back as free
e[i]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Jt.push(i)),
// Call if it was a function and we have a response
s&&_e(o)&&o(s[0]),s=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
Ee.createHTMLDocument=function(){var e=ce.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
Ce.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return t||(Ee.createHTMLDocument?(t=ce.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=ce.location.href,t.head.appendChild(r)):t=ce),i=Ne.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=S([e],t,o),o&&o.length&&Ce(o).remove(),Ce.merge([],i.childNodes))},/**
 * Load a url into a page
 */
Ce.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return a>-1&&(r=ee(e.slice(a)),e=e.slice(0,a)),_e(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Ce.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,s.html(r?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
Ce("<div>").append(Ce.parseHTML(e)).find(r):
// Otherwise use the full result
e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
Ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Ce.fn[t]=function(e){return this.on(t,e)}}),Ce.expr.pseudos.animated=function(e){return Ce.grep(Ce.timers,function(t){return e===t.elem}).length},Ce.offset={setOffset:function(e,t,n){var r,i,o,s,a,l,u,c=Ce.css(e,"position"),f=Ce(e),d={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),a=f.offset(),o=Ce.css(e,"top"),l=Ce.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
u?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(l)||0),_e(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,Ce.extend({},a))),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):f.css(d)}},Ce.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){Ce.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===Ce.css(r,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=r.getBoundingClientRect();else{for(t=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===Ce.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
i=Ce(e).offset(),i.top+=Ce.css(e,"borderTopWidth",!0),i.left+=Ce.css(e,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:t.top-i.top-Ce.css(r,"marginTop",!0),left:t.left-i.left-Ce.css(r,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===Ce.css(e,"position");)e=e.offsetParent;return e||it})}}),
// Create scrollLeft and scrollTop methods
Ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;Ce.fn[e]=function(r){return Fe(this,function(e,r,i){
// Coalesce documents and windows
var o;if(Te(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
Ce.each(["top","left"],function(e,t){Ce.cssHooks[t]=W(Ee.pixelPosition,function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=F(e,t),dt.test(n)?Ce(e).position()[t]+"px":n})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
Ce.each({Height:"height",Width:"width"},function(e,t){Ce.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){
// Margin is only for outerHeight, outerWidth
Ce.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border");return Fe(this,function(t,n,i){var o;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return Te(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?Ce.css(t,n,a):Ce.style(t,n,i,a)},t,s?i:void 0,s)}})}),Ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){
// Handle event binding
Ce.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Ce.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
Ce.proxy=function(e,t){var n,r,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),_e(e))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return r=de.call(arguments,2),i=function(){return e.apply(t||this,r.concat(de.call(arguments)))},i.guid=e.guid=e.guid||Ce.guid++,i},Ce.holdReady=function(e){e?Ce.readyWait++:Ce.ready(!0)},Ce.isArray=Array.isArray,Ce.parseJSON=JSON.parse,Ce.nodeName=u,Ce.isFunction=_e,Ce.isWindow=Te,Ce.camelCase=y,Ce.type=a,Ce.now=Date.now,Ce.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=Ce.type(e);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},r=[],void 0!==(i=function(){return Ce}.apply(t,r))&&(e.exports=i);var
// Map over jQuery in case of overwrite
en=n.jQuery,
// Map over the $ in case of overwrite
tn=n.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return Ce.noConflict=function(e){return n.$===Ce&&(n.$=tn),e&&n.jQuery===Ce&&(n.jQuery=en),Ce},o||(n.jQuery=n.$=Ce),Ce})},/***/
"../node_modules/jrespond/js/jRespond.js":/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){var n,r;!function(i,o,s){
// Node module pattern
"object"==typeof e&&e&&"object"==typeof e.exports?e.exports=s:(
// browser
i.jRespond=s,n=[],void 0!==(r=function(e){return s}.apply(t,n))&&(e.exports=r))}(this,0,function(e,t,n){"use strict";return function(e){
// array for registered functions
var t=[],n=[],r=e,i="",o="",s=0,a=500,l=function(){
// IE
return"number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},u=function(e){if(void 0===e.length)c(e);else for(var t=0;t<e.length;t++)c(e[t])},c=function(e){var r=e.breakpoint,s=e.enter||void 0;
// add function to stack
t.push(e),
// add corresponding entry to mediaInit
n.push(!1),h(r)&&(void 0!==s&&s.call(null,{entering:i,exiting:o}),n[t.length-1]=!0)},f=function(){for(var e=[],r=[],s=0;s<t.length;s++){var a=t[s].breakpoint,l=t[s].enter||void 0,u=t[s].exit||void 0;"*"===a?(void 0!==l&&e.push(l),void 0!==u&&r.push(u)):h(a)?(void 0===l||n[s]||e.push(l),n[s]=!0):(void 0!==u&&n[s]&&r.push(u),n[s]=!1)}
// loop through exit functions to call
for(var c={entering:i,exiting:o},f=0;f<r.length;f++)r[f].call(null,c);
// then loop through enter functions to call
for(var d=0;d<e.length;d++)e[d].call(null,c)},d=function(e){
// look for existing breakpoint based on width
for(var t=!1,n=0;n<r.length;n++)
// if registered breakpoint found, break out of loop
if(e>=r[n].enter&&e<=r[n].exit){t=!0;break}
// if breakpoint is found and it's not the current one
t&&i!==r[n].label?(o=i,i=r[n].label,
// run the loop
f()):t||""===i||(i="",
// run the loop
f())},h=function(e){
// if there's an array of breakpoints
if("object"==typeof e){if(e.join().indexOf(i)>=0)return!0}else{if("*"===e)return!0;if("string"==typeof e&&i===e)return!0}},p=function(){
// get current width
var e=l();
// if there is a change speed up the timer and fire the returnBreakpoint function
e!==s?(a=100,d(e)):a=500,s=e,
// calls itself on a setTimeout
setTimeout(p,a)};
// return
return p(),{addFunc:function(e){u(e)},getBreakpoint:function(){return i}}}}(0,this.document))}).call(t,n("../node_modules/webpack/buildin/module.js")(e))},/***/
"../node_modules/popper.js/dist/esm/popper.js":/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),/* WEBPACK VAR INJECTION */
function(e){function n(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function r(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},fe))}}/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function i(e){var t={};return e&&"[object Function]"===t.toString.call(e)}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function o(e,t){if(1!==e.nodeType)return[];
// NOTE: 1 DOM access here
var n=getComputedStyle(e,null);return t?n[t]:n}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function s(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function a(e){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}
// Firefox want us to check `-x` and `-y` variations as well
var t=o(e),n=t.overflow,r=t.overflowX;return/(auto|scroll|overlay)/.test(n+t.overflowY+r)?e:a(s(e))}/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function l(e){return 11===e?ge:10===e?me:ge||me}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function u(e){if(!e)return document.documentElement;
// Skip hidden elements which don't have an offsetParent
for(var t=l(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;
// .offsetParent will return the closest TD or TABLE in case
// no offsetParent is present, I hate this job...
return r&&"BODY"!==r&&"HTML"!==r?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===o(n,"position")?u(n):n:e?e.ownerDocument.documentElement:document.documentElement}function c(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||u(e.firstElementChild)===e)}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function f(e){return null!==e.parentNode?f(e.parentNode):e}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function d(e,t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,i=n?t:e,o=document.createRange();o.setStart(r,0),o.setEnd(i,0);var s=o.commonAncestorContainer;
// Both nodes are inside #document
if(e!==s&&t!==s||r.contains(i))return c(s)?s:u(s);
// one of the nodes is inside shadowDOM, find which one
var a=f(e);return a.host?d(a.host,t):d(e,f(t).host)}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[n]}return e[n]}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(t,"top"),i=h(t,"left"),o=n?-1:1;return e.top+=r*o,e.bottom+=r*o,e.left+=i*o,e.right+=i*o,e}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */
function g(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function m(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],l(10)?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function v(){var e=document.body,t=document.documentElement,n=l(10)&&getComputedStyle(t);return{height:m("Height",e,t,n),width:m("Width",e,t,n)}}/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function y(e){return we({},e,{right:e.left+e.width,bottom:e.top+e.height})}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function b(e){var t={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(l(10)){t=e.getBoundingClientRect();var n=h(e,"top"),r=h(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?v():{},a=s.width||e.clientWidth||i.right-i.left,u=s.height||e.clientHeight||i.bottom-i.top,c=e.offsetWidth-a,f=e.offsetHeight-u;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(c||f){var d=o(e);c-=g(d,"x"),f-=g(d,"y"),i.width-=c,i.height-=f}return y(i)}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=l(10),i="HTML"===t.nodeName,s=b(e),u=b(t),c=a(e),f=o(t),d=parseFloat(f.borderTopWidth,10),h=parseFloat(f.borderLeftWidth,10);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
n&&"HTML"===t.nodeName&&(u.top=Math.max(u.top,0),u.left=Math.max(u.left,0));var g=y({top:s.top-u.top-d,left:s.left-u.left-h,width:s.width,height:s.height});
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(g.marginTop=0,g.marginLeft=0,!r&&i){var m=parseFloat(f.marginTop,10),v=parseFloat(f.marginLeft,10);g.top-=d-m,g.bottom-=d-m,g.left-=h-v,g.right-=h-v,
// Attach marginTop and marginLeft because in some circumstances we may need them
g.marginTop=m,g.marginLeft=v}return(r&&!n?t.contains(c):t===c&&"BODY"!==c.nodeName)&&(g=p(g,t)),g}function E(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=w(e,n),i=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:h(n),a=t?0:h(n,"left");return y({top:s-r.top+r.marginTop,left:a-r.left+r.marginLeft,width:i,height:o})}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function _(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===o(e,"position")||_(s(e)))}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */
function T(e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||l())return document.documentElement;for(var t=e.parentElement;t&&"none"===o(t,"transform");)t=t.parentElement;return t||document.documentElement}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function x(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},l=i?T(e):d(e,t);
// Handle viewport case
if("viewport"===r)o=E(l,i);else{
// Handle other cases based on DOM element used as boundaries
var u=void 0;"scrollParent"===r?(u=a(s(t)),"BODY"===u.nodeName&&(u=e.ownerDocument.documentElement)):u="window"===r?e.ownerDocument.documentElement:r;var c=w(u,l,i);
// In case of HTML, we need a different computation
if("HTML"!==u.nodeName||_(l))
// for all the other DOM elements, this one is good
o=c;else{var f=v(),h=f.height,p=f.width;o.top+=c.top-c.marginTop,o.bottom=h+c.top,o.left+=c.left-c.marginLeft,o.right=p+c.left}}
// Add paddings
return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function C(e){return e.width*e.height}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function A(e,t,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=x(n,r,o,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map(function(e){return we({key:e},a[e],{area:C(a[e])})}).sort(function(e,t){return t.area-e.area}),u=l.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),c=u.length>0?u[0].key:l[0].key,f=e.split("-")[1];return c+(f?"-"+f:"")}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function S(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(n,r?T(t):d(t,n),r)}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function O(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function D(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function I(e,t,n){n=n.split("-")[0];
// Get popper node sizes
var r=O(e),i={width:r.width,height:r.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",u=o?"width":"height";return i[s]=t[s]+t[l]/2-r[l]/2,i[a]=n===a?t[a]-r[u]:t[D(a)],i}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function N(e,t){
// use native find if supported
// use native find if supported
return Array.prototype.find?e.find(t):e.filter(t)[0]}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function k(e,t,n){
// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});
// use `find` + `indexOf` if `findIndex` isn't supported
var r=N(e,function(e){return e[t]===n});return e.indexOf(r)}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function L(e,t,n){return(void 0===n?e:e.slice(0,k(e,"name",n))).forEach(function(e){e.function&&
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;// eslint-disable-line dot-notation
e.enabled&&i(n)&&(
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
t.offsets.popper=y(t.offsets.popper),t.offsets.reference=y(t.offsets.reference),t=n(t,e))}),t}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function j(){
// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};
// compute reference element offsets
e.offsets.reference=S(this.state,this.popper,this.reference,this.options.positionFixed),
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=A(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),
// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,
// compute the popper offsets
e.offsets.popper=I(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",
// run the modifiers
e=L(this.modifiers,e),
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function P(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function H(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var i=t[r],o=i?""+i+n:e;if(void 0!==document.body.style[o])return o}return null}/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function R(){
// touch DOM only if `applyStyle` modifier is enabled
// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
return this.state.isDestroyed=!0,P(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[H("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function M(e){var t=e.ownerDocument;return t?t.defaultView:window}function F(e,t,n,r){var i="BODY"===e.nodeName,o=i?e.ownerDocument.defaultView:e;o.addEventListener(t,n,{passive:!0}),i||F(a(o.parentNode),t,n,r),r.push(o)}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function W(e,t,n,r){
// Resize event listener on window
n.updateBound=r,M(e).addEventListener("resize",n.updateBound,{passive:!0});
// Scroll event listener on scroll parents
var i=a(e);return F(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function B(){this.state.eventsEnabled||(this.state=W(this.reference,this.options,this.state,this.scheduleUpdate))}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function q(e,t){
// Remove resize event listener on window
// Remove scroll event listener on scroll parents
// Reset state
return M(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=q(this.reference,this.state))}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function V(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function G(e,t){Object.keys(t).forEach(function(n){var r="";
// add unit if the value is numeric and is one of the following
-1!==["width","height","top","right","bottom","left"].indexOf(n)&&V(t[n])&&(r="px"),e.style[n]=t[n]+r})}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function z(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function K(e){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
// if arrowElement is defined and arrowStyles has some properties
return G(e.instance.popper,e.styles),z(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&G(e.arrowElement,e.arrowStyles),e}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function $(e,t,n,r,i){
// compute reference element offsets
var o=S(i,t,e,n.positionFixed),s=A(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
return t.setAttribute("x-placement",s),G(t,{position:n.positionFixed?"fixed":"absolute"}),n}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function Y(e,t){var n=t.x,r=t.y,i=e.offsets.popper,o=N(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:t.gpuAcceleration,a=u(e.instance.popper),l=b(a),c={position:i.position},f={left:Math.floor(i.left),top:Math.round(i.top),bottom:Math.round(i.bottom),right:Math.floor(i.right)},d="bottom"===n?"top":"bottom",h="right"===r?"left":"right",p=H("transform"),g=void 0,m=void 0;if(m="bottom"===d?-l.height+f.bottom:f.top,g="right"===h?-l.width+f.right:f.left,s&&p)c[p]="translate3d("+g+"px, "+m+"px, 0)",c[d]=0,c[h]=0,c.willChange="transform";else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var v="bottom"===d?-1:1,y="right"===h?-1:1;c[d]=m*v,c[h]=g*y,c.willChange=d+", "+h}
// Attributes
var w={"x-placement":e.placement};
// Update `data` attributes, styles and arrowStyles
return e.attributes=we({},w,e.attributes),e.styles=we({},c,e.styles),e.arrowStyles=we({},e.offsets.arrow,e.arrowStyles),e}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function Q(e,t,n){var r=N(e,function(e){return e.name===t}),i=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!i){var o="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function X(e,t){var n;
// arrow depends on keepTogether in order to work
if(!Q(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof r){
// if arrowElement is not found, don't run the modifier
if(!(r=e.instance.popper.querySelector(r)))return e}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],s=e.offsets,a=s.popper,l=s.reference,u=-1!==["left","right"].indexOf(i),c=u?"height":"width",f=u?"Top":"Left",d=f.toLowerCase(),h=u?"left":"top",p=u?"bottom":"right",g=O(r)[c];
//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjuction
//
// top/left side
l[p]-g<a[d]&&(e.offsets.popper[d]-=a[d]-(l[p]-g)),
// bottom/right side
l[d]+g>a[p]&&(e.offsets.popper[d]+=l[d]+g-a[p]),e.offsets.popper=y(e.offsets.popper);
// compute center of the popper
var m=l[d]+l[c]/2-g/2,v=o(e.instance.popper),b=parseFloat(v["margin"+f],10),w=parseFloat(v["border"+f+"Width"],10),E=m-e.offsets.popper[d]-b-w;
// prevent arrowElement from being placed not contiguously to its popper
return E=Math.max(Math.min(a[c]-g,E),0),e.arrowElement=r,e.offsets.arrow=(n={},be(n,d,Math.round(E)),be(n,h,""),n),e}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function J(e){return"end"===e?"start":"start"===e?"end":e}/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function Z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=_e.indexOf(e),r=_e.slice(n+1).concat(_e.slice(0,n));return t?r.reverse():r}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ee(e,t){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(P(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return e;var n=x(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],i=D(r),o=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case Te.FLIP:s=[r,i];break;case Te.CLOCKWISE:s=Z(r);break;case Te.COUNTERCLOCKWISE:s=Z(r,!0);break;default:s=t.behavior}return s.forEach(function(a,l){if(r!==a||s.length===l+1)return e;r=e.placement.split("-")[0],i=D(r);var u=e.offsets.popper,c=e.offsets.reference,f=Math.floor,d="left"===r&&f(u.right)>f(c.left)||"right"===r&&f(u.left)<f(c.right)||"top"===r&&f(u.bottom)>f(c.top)||"bottom"===r&&f(u.top)<f(c.bottom),h=f(u.left)<f(n.left),p=f(u.right)>f(n.right),g=f(u.top)<f(n.top),m=f(u.bottom)>f(n.bottom),v="left"===r&&h||"right"===r&&p||"top"===r&&g||"bottom"===r&&m,y=-1!==["top","bottom"].indexOf(r),b=!!t.flipVariations&&(y&&"start"===o&&h||y&&"end"===o&&p||!y&&"start"===o&&g||!y&&"end"===o&&m);(d||v||b)&&(
// this boolean to detect any flip loop
e.flipped=!0,(d||v)&&(r=s[l+1]),b&&(o=J(o)),e.placement=r+(o?"-"+o:""),
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
e.offsets.popper=we({},e.offsets.popper,I(e.instance.popper,e.offsets.reference,e.placement)),e=L(e.instance.modifiers,e,"flip"))}),e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function te(e){var t=e.offsets,n=t.popper,r=t.reference,i=e.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",l=s?"left":"top",u=s?"width":"height";return n[a]<o(r[l])&&(e.offsets.popper[l]=o(r[l])-n[u]),n[l]>o(r[a])&&(e.offsets.popper[l]=o(r[a])),e}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function ne(e,t,n,r){
// separate value from unit
var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],s=i[2];
// If it's not a number it's an operator, I guess
if(!o)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=r}return y(a)[t]/100*o}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o}
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return o}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function re(e,t,n,r){var i=[0,0],o=-1!==["right","left"].indexOf(r),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(N(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/,u=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
return u=u.map(function(e,r){
// Most of the units rely on the orientation of the popper
var i=(1===r?!o:o)?"height":"width",s=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return ne(e,i,t,n)})}),u.forEach(function(e,t){e.forEach(function(n,r){V(n)&&(i[t]+=n*("-"===e[r-1]?-1:1))})}),i}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function ie(e,t){var n=t.offset,r=e.placement,i=e.offsets,o=i.popper,s=i.reference,a=r.split("-")[0],l=void 0;return l=V(+n)?[+n,0]:re(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),e.popper=o,e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function oe(e,t){var n=t.boundariesElement||u(e.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
e.instance.reference===n&&(n=u(n));
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var r=H("transform"),i=e.instance.popper.style,o=i.top,s=i.left,a=i[r];i.top="",i.left="",i[r]="";var l=x(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
i.top=o,i.left=s,i[r]=a,t.boundaries=l;var c=t.priority,f=e.offsets.popper,d={primary:function(e){var n=f[e];return f[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(f[e],l[e])),be({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=f[n];return f[e]>l[e]&&!t.escapeWithReference&&(r=Math.min(f[n],l[e]-("right"===e?f.width:f.height))),be({},n,r)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";f=we({},f,d[t](e))}),e.offsets.popper=f,e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function se(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(r){var i=e.offsets,o=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",u=a?"width":"height",c={start:be({},l,o[l]),end:be({},l,o[l]+o[u]-s[u])};e.offsets.popper=we({},s,c[r])}return e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ae(e){if(!Q(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=N(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function le(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,i=r.popper,o=r.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[s?"left":"top"]=o[n]-(a?i[s?"width":"height"]:0),e.placement=D(t),e.offsets.popper=y(i),e}for(var ue="undefined"!=typeof window&&"undefined"!=typeof document,ce=["Edge","Trident","Firefox"],fe=0,de=0;de<ce.length;de+=1)if(ue&&navigator.userAgent.indexOf(ce[de])>=0){fe=1;break}var he=ue&&window.Promise,pe=he?n:r,ge=ue&&!(!window.MSInputMethodContext||!document.documentMode),me=ue&&/MSIE 10/.test(navigator.userAgent),ve=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),be=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],_e=Ee.slice(3),Te={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},xe={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
shift:{/** @prop {number} order=100 - Index used to define the order of execution */
order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:se},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
offset:{/** @prop {number} order=200 - Index used to define the order of execution */
order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ie,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */
order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:oe,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
priority:["left","right","top","bottom"],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
boundariesElement:"scrollParent"},/**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */
order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:te},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
arrow:{/** @prop {number} order=500 - Index used to define the order of execution */
order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:X,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
flip:{/** @prop {number} order=600 - Index used to define the order of execution */
order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ee,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
behavior:"flip",/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
boundariesElement:"viewport"},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
inner:{/** @prop {number} order=700 - Index used to define the order of execution */
order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:!1,/** @prop {ModifierFn} */
fn:le},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
hide:{/** @prop {number} order=800 - Index used to define the order of execution */
order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ae},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */
order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:Y,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
gpuAcceleration:!0,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
x:"bottom",/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
y:"right"},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */
order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:K,/** @prop {Function} */
onLoad:$,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
gpuAcceleration:void 0}},Ce={/**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
placement:"bottom",/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
positionFixed:!1,/**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
eventsEnabled:!0,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
removeOnDestroy:!1,/**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
onCreate:function(){},/**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
onUpdate:function(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
modifiers:xe},Ae=function(){/**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ve(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},
// make update() debounced, so that it only runs at most once-per-tick
this.update=pe(this.update.bind(this)),
// with {} we create a new object with the options inside it
this.options=we({},e.Defaults,o),
// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},
// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,
// Deep merge modifiers options
this.options.modifiers={},Object.keys(we({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){r.options.modifiers[t]=we({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(e){return we({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(e){e.enabled&&i(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),
// fire the first update to position the popper in the right place
this.update();var s=this.options.eventsEnabled;s&&
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners(),this.state.eventsEnabled=s}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
return ye(e,[{key:"update",value:function(){return j.call(this)}},{key:"destroy",value:function(){return R.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return U.call(this)}}]),e}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */
Ae.Utils=("undefined"!=typeof window?window:e).PopperUtils,Ae.placements=Ee,Ae.Defaults=Ce,/* harmony default export */
t.default=Ae}.call(t,n("../node_modules/webpack/buildin/global.js"))},/***/
"../node_modules/popper.js/dist/umd/popper.min.js":/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(t){/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function n(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function r(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function i(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=n(e),o=t.overflow,s=t.overflowX;return/(auto|scroll|overlay)/.test(o+t.overflowY+s)?e:i(r(e))}function o(e){return 11===e?se:10===e?ae:se||ae}function s(e){if(!e)return document.documentElement;for(var t=o(10)?document.body:null,r=e.offsetParent;r===t&&e.nextElementSibling;)r=(e=e.nextElementSibling).offsetParent;var i=r&&r.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(r.nodeName)&&"static"===n(r,"position")?s(r):r:e?e.ownerDocument.documentElement:document.documentElement}function a(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||s(e.firstElementChild)===e)}function l(e){return null===e.parentNode?e:l(e.parentNode)}function u(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,i=n?t:e,o=document.createRange();o.setStart(r,0),o.setEnd(i,0);var c=o.commonAncestorContainer;if(e!==c&&t!==c||r.contains(i))return a(c)?c:s(c);var f=l(e);return f.host?u(f.host,t):u(e,l(t).host)}function c(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[n]}return e[n]}function f(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=c(t,"top"),i=c(t,"left"),o=n?-1:1;return e.top+=r*o,e.bottom+=r*o,e.left+=i*o,e.right+=i*o,e}function d(e,t){var n="x"===t?"Left":"Top",r="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function h(e,t,n,r){return Z(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],o(10)?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function p(){var e=document.body,t=document.documentElement,n=o(10)&&getComputedStyle(t);return{height:h("Height",e,t,n),width:h("Width",e,t,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function m(e){var t={};try{if(o(10)){t=e.getBoundingClientRect();var r=c(e,"top"),i=c(e,"left");t.top+=r,t.left+=i,t.bottom+=r,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var s={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},a="HTML"===e.nodeName?p():{},l=a.width||e.clientWidth||s.right-s.left,u=a.height||e.clientHeight||s.bottom-s.top,f=e.offsetWidth-l,h=e.offsetHeight-u;if(f||h){var m=n(e);f-=d(m,"x"),h-=d(m,"y"),s.width-=f,s.height-=h}return g(s)}function v(e,t){var r=2<arguments.length&&void 0!==arguments[2]&&arguments[2],s=o(10),a="HTML"===t.nodeName,l=m(e),u=m(t),c=i(e),d=n(t),h=parseFloat(d.borderTopWidth,10),p=parseFloat(d.borderLeftWidth,10);r&&"HTML"===t.nodeName&&(u.top=Z(u.top,0),u.left=Z(u.left,0));var v=g({top:l.top-u.top-h,left:l.left-u.left-p,width:l.width,height:l.height});if(v.marginTop=0,v.marginLeft=0,!s&&a){var y=parseFloat(d.marginTop,10),b=parseFloat(d.marginLeft,10);v.top-=h-y,v.bottom-=h-y,v.left-=p-b,v.right-=p-b,v.marginTop=y,v.marginLeft=b}return(s&&!r?t.contains(c):t===c&&"BODY"!==c.nodeName)&&(v=f(v,t)),v}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=v(e,n),i=Z(n.clientWidth,window.innerWidth||0),o=Z(n.clientHeight,window.innerHeight||0),s=t?0:c(n),a=t?0:c(n,"left");return g({top:s-r.top+r.marginTop,left:a-r.left+r.marginLeft,width:i,height:o})}function b(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===n(e,"position")||b(r(e)))}function w(e){if(!e||!e.parentElement||o())return document.documentElement;for(var t=e.parentElement;t&&"none"===n(t,"transform");)t=t.parentElement;return t||document.documentElement}function E(e,t,n,o){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],a={top:0,left:0},l=s?w(e):u(e,t);if("viewport"===o)a=y(l,s);else{var c;"scrollParent"===o?(c=i(r(t)),"BODY"===c.nodeName&&(c=e.ownerDocument.documentElement)):c="window"===o?e.ownerDocument.documentElement:o;var f=v(c,l,s);if("HTML"!==c.nodeName||b(l))a=f;else{var d=p(),h=d.height,g=d.width;a.top+=f.top-f.marginTop,a.bottom=h+f.top,a.left+=f.left-f.marginLeft,a.right=g+f.left}}return a.left+=n,a.top+=n,a.right-=n,a.bottom-=n,a}function _(e){return e.width*e.height}function T(e,t,n,r,i){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=E(n,r,o,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map(function(e){return fe({key:e},a[e],{area:_(a[e])})}).sort(function(e,t){return t.area-e.area}),u=l.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),c=0<u.length?u[0].key:l[0].key,f=e.split("-")[1];return c+(f?"-"+f:"")}function x(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return v(n,r?w(t):u(t,n),r)}function C(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function A(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,n){n=n.split("-")[0];var r=C(e),i={width:r.width,height:r.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",u=o?"width":"height";return i[s]=t[s]+t[l]/2-r[l]/2,i[a]=n===a?t[a]-r[u]:t[A(a)],i}function O(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=O(e,function(e){return e[t]===n});return e.indexOf(r)}function I(t,n,r){return(void 0===r?t:t.slice(0,D(t,"name",r))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var r=t.function||t.fn;t.enabled&&e(r)&&(n.offsets.popper=g(n.offsets.popper),n.offsets.reference=g(n.offsets.reference),n=r(n,t))}),n}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=T(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=I(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function L(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var i=t[r],o=i?""+i+n:e;if(void 0!==document.body.style[o])return o}return null}function j(){return this.state.isDestroyed=!0,k(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[L("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,n,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(t,n,{passive:!0}),o||H(i(s.parentNode),t,n,r),r.push(s)}function R(e,t,n,r){n.updateBound=r,P(e).addEventListener("resize",n.updateBound,{passive:!0});var o=i(e);return H(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function M(){this.state.eventsEnabled||(this.state=R(this.reference,this.options,this.state,this.scheduleUpdate))}function F(e,t){return P(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function W(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=F(this.reference,this.state))}function B(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function q(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&B(t[n])&&(r="px"),e.style[n]=t[n]+r})}function U(e,t){Object.keys(t).forEach(function(n){!1===t[n]?e.removeAttribute(n):e.setAttribute(n,t[n])})}function V(e,t,n){var r=O(e,function(e){return e.name===t}),i=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!i){var o="`"+t+"`";console.warn("`"+n+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}function G(e){return"end"===e?"start":"start"===e?"end":e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=he.indexOf(e),r=he.slice(n+1).concat(he.slice(0,n));return t?r.reverse():r}function K(e,t,n,r){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],s=i[2];if(!o)return e;if(0===s.indexOf("%")){var a;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=r}return g(a)[t]/100*o}if("vh"===s||"vw"===s){return("vh"===s?Z(document.documentElement.clientHeight,window.innerHeight||0):Z(document.documentElement.clientWidth,window.innerWidth||0))/100*o}return o}function $(e,t,n,r){var i=[0,0],o=-1!==["right","left"].indexOf(r),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(O(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1===a?[s]:[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))];return u=u.map(function(e,r){var i=(1===r?!o:o)?"height":"width",s=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return K(e,i,t,n)})}),u.forEach(function(e,t){e.forEach(function(n,r){B(n)&&(i[t]+=n*("-"===e[r-1]?-1:1))})}),i}function Y(e,t){var n,r=t.offset,i=e.placement,o=e.offsets,s=o.popper,a=o.reference,l=i.split("-")[0];return n=B(+r)?[+r,0]:$(r,s,a,l),"left"===l?(s.top+=n[0],s.left-=n[1]):"right"===l?(s.top+=n[0],s.left+=n[1]):"top"===l?(s.left+=n[0],s.top-=n[1]):"bottom"===l&&(s.left+=n[0],s.top+=n[1]),e.popper=s,e}for(var Q=Math.min,X=Math.round,J=Math.floor,Z=Math.max,ee="undefined"!=typeof window&&"undefined"!=typeof document,te=["Edge","Trident","Firefox"],ne=0,re=0;re<te.length;re+=1)if(ee&&0<=navigator.userAgent.indexOf(te[re])){ne=1;break}var ie=ee&&window.Promise,oe=ie?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},se=ee&&!(!window.MSInputMethodContext||!document.documentMode),ae=ee&&/MSIE 10/.test(navigator.userAgent),le=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ue=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ce=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},fe=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},de=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],he=de.slice(3),pe={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},ge=function(){function t(n,r){var i=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};le(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=oe(this.update.bind(this)),this.options=fe({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return ue(t,[{key:"update",value:function(){return N.call(this)}},{key:"destroy",value:function(){return j.call(this)}},{key:"enableEventListeners",value:function(){return M.call(this)}},{key:"disableEventListeners",value:function(){return W.call(this)}}]),t}();return ge.Utils=("undefined"==typeof window?t:window).PopperUtils,ge.placements=de,ge.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var i=e.offsets,o=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",u=a?"width":"height",c={start:ce({},l,o[l]),end:ce({},l,o[l]+o[u]-s[u])};e.offsets.popper=fe({},s,c[r])}return e}},offset:{order:200,enabled:!0,fn:Y,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||s(e.instance.popper);e.instance.reference===n&&(n=s(n));var r=L("transform"),i=e.instance.popper.style,o=i.top,a=i.left,l=i[r];i.top="",i.left="",i[r]="";var u=E(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=o,i.left=a,i[r]=l,t.boundaries=u;var c=t.priority,f=e.offsets.popper,d={primary:function(e){var n=f[e];return f[e]<u[e]&&!t.escapeWithReference&&(n=Z(f[e],u[e])),ce({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=f[n];return f[e]>u[e]&&!t.escapeWithReference&&(r=Q(f[n],u[e]-("right"===e?f.width:f.height))),ce({},n,r)}};return c.forEach(function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";f=fe({},f,d[t](e))}),e.offsets.popper=f,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,i=e.placement.split("-")[0],o=J,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",l=s?"left":"top",u=s?"width":"height";return n[a]<o(r[l])&&(e.offsets.popper[l]=o(r[l])-n[u]),n[l]>o(r[a])&&(e.offsets.popper[l]=o(r[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var r;if(!V(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],s=e.offsets,a=s.popper,l=s.reference,u=-1!==["left","right"].indexOf(o),c=u?"height":"width",f=u?"Top":"Left",d=f.toLowerCase(),h=u?"left":"top",p=u?"bottom":"right",m=C(i)[c];l[p]-m<a[d]&&(e.offsets.popper[d]-=a[d]-(l[p]-m)),l[d]+m>a[p]&&(e.offsets.popper[d]+=l[d]+m-a[p]),e.offsets.popper=g(e.offsets.popper);var v=l[d]+l[c]/2-m/2,y=n(e.instance.popper),b=parseFloat(y["margin"+f],10),w=parseFloat(y["border"+f+"Width"],10),E=v-e.offsets.popper[d]-b-w;return E=Z(Q(a[c]-m,E),0),e.arrowElement=i,e.offsets.arrow=(r={},ce(r,d,X(E)),ce(r,h,""),r),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=E(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],i=A(r),o=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case pe.FLIP:s=[r,i];break;case pe.CLOCKWISE:s=z(r);break;case pe.COUNTERCLOCKWISE:s=z(r,!0);break;default:s=t.behavior}return s.forEach(function(a,l){if(r!==a||s.length===l+1)return e;r=e.placement.split("-")[0],i=A(r);var u=e.offsets.popper,c=e.offsets.reference,f=J,d="left"===r&&f(u.right)>f(c.left)||"right"===r&&f(u.left)<f(c.right)||"top"===r&&f(u.bottom)>f(c.top)||"bottom"===r&&f(u.top)<f(c.bottom),h=f(u.left)<f(n.left),p=f(u.right)>f(n.right),g=f(u.top)<f(n.top),m=f(u.bottom)>f(n.bottom),v="left"===r&&h||"right"===r&&p||"top"===r&&g||"bottom"===r&&m,y=-1!==["top","bottom"].indexOf(r),b=!!t.flipVariations&&(y&&"start"===o&&h||y&&"end"===o&&p||!y&&"start"===o&&g||!y&&"end"===o&&m);(d||v||b)&&(e.flipped=!0,(d||v)&&(r=s[l+1]),b&&(o=G(o)),e.placement=r+(o?"-"+o:""),e.offsets.popper=fe({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=I(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,i=r.popper,o=r.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[s?"left":"top"]=o[n]-(a?i[s?"width":"height"]:0),e.placement=A(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!V(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=O(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,i=e.offsets.popper,o=O(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,l,u=void 0===o?t.gpuAcceleration:o,c=s(e.instance.popper),f=m(c),d={position:i.position},h={left:J(i.left),top:X(i.top),bottom:X(i.bottom),right:J(i.right)},p="bottom"===n?"top":"bottom",g="right"===r?"left":"right",v=L("transform");if(l="bottom"==p?-f.height+h.bottom:h.top,a="right"==g?-f.width+h.right:h.left,u&&v)d[v]="translate3d("+a+"px, "+l+"px, 0)",d[p]=0,d[g]=0,d.willChange="transform";else{var y="bottom"==p?-1:1,b="right"==g?-1:1;d[p]=l*y,d[g]=a*b,d.willChange=p+", "+g}var w={"x-placement":e.placement};return e.attributes=fe({},w,e.attributes),e.styles=fe({},d,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return q(e.instance.popper,e.styles),U(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&q(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,i){var o=x(i,t,e,n.positionFixed),s=T(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),q(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ge})}).call(t,n("../node_modules/webpack/buildin/global.js"))},/***/
"../node_modules/webpack/buildin/global.js":/***/
function(e,t){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n},/***/
"../node_modules/webpack/buildin/module.js":/***/
function(e,t){e.exports=function(e){
// module.parent = undefined by default
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},/***/
"./assets/js/index.js":/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var r=n("../node_modules/bootstrap/dist/js/bootstrap.js"),i=(t(r),n("../node_modules/popper.js/dist/umd/popper.min.js")),o=(t(i),n("../node_modules/holderjs/holder.js")),s=t(o),a=n("../node_modules/jrespond/js/jRespond.js"),l=t(a);n("./assets/sass/main.scss");
// function init(){
//   Pages.init();
// }
// document.addEventListener('DOMContentLoaded', (event)=> { init(); });
var u=u||{};
// function init(){
// Pages.init();
// console.log('test');
// }
/**
 * Main.js
 * Client-Side JS Bootsrap
 * Loads pages and components
 */
// import Pages from './pages/index.js';
!function(e){u.initialize={init:function(){u.initialize.responsiveClasses(),u.initialize.searchOverlay(),u.initialize.holderThumb(),u.initialize.datePicker(),u.initialize.isotopeInit()},responsiveClasses:function(){if(void 0===l.default)return console.log("responsiveClasses: jQuery jRespond not Defined."),!0;(0,l.default)([{label:"smallest",enter:0,exit:479},{label:"handheld",enter:480,exit:767},{label:"tablet",enter:768,exit:991},{label:"laptop",enter:992,exit:1199},{label:"desktop",enter:1200,exit:1e4}]).addFunc([{breakpoint:"desktop",enter:function(){n.addClass("device-lg")},exit:function(){n.removeClass("device-lg")}},{breakpoint:"laptop",enter:function(){n.addClass("device-md")},exit:function(){n.removeClass("device-md")}},{breakpoint:"tablet",enter:function(){n.addClass("device-sm")},exit:function(){n.removeClass("device-sm")}},{breakpoint:"handheld",enter:function(){n.addClass("device-xs")},exit:function(){n.removeClass("device-xs")}},{breakpoint:"smallest",enter:function(){n.addClass("device-xxs")},exit:function(){n.removeClass("device-xxs")}}])},searchOverlay:function(){e("#trigger-overlay").on("click",function(){e("#overlay-search").toggleClass("open"),e("#form-search input[type=text]").focus()}),e(".overlay-close").on("click",function(){e("#overlay-search").removeClass("open")})},holderThumb:function(){s.default.addTheme("thumb",{bg:"#55595c",fg:"#eceeef",text:"Thumbnail"})},datePicker:function(){
// console.log($.fn.datepicker);
void 0!==e.fn.datepicker&&e("#datepicker-alt").datepicker({uiLibrary:"bootstrap4",format:"dd/mm/yyyy"})},isotopeInit:function(){/*
      var iso = new Isotope( '.grid', {
        itemSelector: '.grid-item',
        // layoutMode: 'fitRows'//,
        layoutMode: 'fitRows'//,
      });
      */
/*
      var iso = new Isotope( '.card-product', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
      */
e(".btn-filters").on("click","button.btn-filter",function(){var t=e(this).attr("data-filter");new Isotope(".card-product",{
// options
itemSelector:".grid-item",
// layoutMode: 'fitRows',
filter:t})})}},u.documentOnReady={init:function(){u.initialize.init()},windowscroll:function(){}},u.documentOnLoad={init:function(){}},u.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return u.isMobile.Android()||u.isMobile.BlackBerry()||u.isMobile.iOS()||u.isMobile.Opera()||u.isMobile.Windows()}},u.documentOnResize={init:function(){/*
      var t = setTimeout( function(){
        APPSCRIPT.header.topsocial();
        APPSCRIPT.header.fullWidthMenu();
        APPSCRIPT.header.overlayMenu();
        APPSCRIPT.initialize.fullScreen();
        APPSCRIPT.initialize.verticalMiddle();
        APPSCRIPT.initialize.maxHeight();
        APPSCRIPT.initialize.testimonialsGrid();
        APPSCRIPT.initialize.stickyFooter();
        APPSCRIPT.slider.sliderParallaxDimensions();
        APPSCRIPT.slider.captionPosition();
        APPSCRIPT.portfolio.arrange();
        APPSCRIPT.portfolio.portfolioDescMargin();
        APPSCRIPT.widget.tabsResponsiveResize();
        APPSCRIPT.widget.tabsJustify();
        APPSCRIPT.widget.html5Video();
        APPSCRIPT.widget.masonryThumbs();
        APPSCRIPT.initialize.dataResponsiveClasses();
        APPSCRIPT.initialize.dataResponsiveHeights();
        if( $gridContainer.length > 0 ) {
          if( !$gridContainer.hasClass('.customjs') ) {
            if( $().isotope ) {
              $gridContainer.isotope('layout');
            } else {
              console.log('documentOnResize > init: Isotope not defined.');
            }
          }
        }
        if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
          $('#primary-menu').find('ul.mobile-primary-menu').removeClass('show');
        }
      }, 500 );
      */
r=t.width()}};var t=e(window),n=e("body"),
//$wrapper = $('#wrapper'),
//$header = $('#header'),
//$headerWrap = $('#header-wrap'),
//$content = $('#content'),
//$footer = $('#footer'),
r=t.width();//,
//$goToTopEl = $('#gotoTop');
e(document).ready(u.documentOnReady.init),
//$window.load( APPSCRIPT.documentOnLoad.init );
t.on("resize",u.documentOnResize.init)}(e)}).call(t,n("../node_modules/jquery/dist/jquery.js"))},/***/
"./assets/sass/main.scss":/***/
function(e,t){}},["./assets/js/index.js"]);