!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){function i(){$(this).children(".item").matchHeight({property:"min-height"})}function o(){const e=$(".fullwidth-slideshow"),t=$(".fullwidth-slideshow-pager");$(".fullwidth-slideshow").owlCarousel({autoPlay:5e3,stopOnHover:!0,transitionStyle:"fade",slideSpeed:350,singleItem:!0,autoHeight:!0,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],afterAction:function(){const e=this.currentItem;$(".fullwidth-slideshow-pager").find(".owl-item").removeClass("synced").eq(e).addClass("synced"),void 0!==$(".fullwidth-slideshow-pager").data("owlCarousel")&&function(e){const i=t.data("owlCarousel").owl.visibleItems;let o=e,n=!1;for(const e in i)o===i[e]&&(n=!0);!1===n?o>i[i.length-1]?t.trigger("owl.goTo",o-i.length+2):(o-1==-1&&(o=0),t.trigger("owl.goTo",o)):o===i[i.length-1]?t.trigger("owl.goTo",i[1]):o===i[0]&&t.trigger("owl.goTo",o-1)}(e)},responsiveRefreshRate:200}),$(".fullwidth-slideshow-pager").owlCarousel({autoPlay:5e3,stopOnHover:!0,items:8,itemsDesktop:[1199,8],itemsDesktopSmall:[979,7],itemsTablet:[768,6],itemsMobile:[480,4],autoHeight:!0,pagination:!1,navigation:!1,responsiveRefreshRate:100,afterInit(e){e.find(".owl-item").eq(0).addClass("synced")}}),$(".fullwidth-slideshow-pager").on("click",".owl-item",function(t){t.preventDefault();const i=$(this).data("owlItem");e.trigger("owl.goTo",i)});const i=$(".fullwidth-slideshow").data("owlCarousel");$(document.documentElement).keyup(e=>{37===e.keyCode?i.prev():39===e.keyCode&&i.next()}),$(".owl-carousel").length&&$(".owl-carousel").data("owlCarousel").reinit()}$("#menulink").click(e=>{e.preventDefault(),$(".hamburger-wrapper").toggleClass("open"),$(".navigation-wrapper").hasClass("show-menu")?($(".navigation-wrapper").removeClass("show-menu"),$(".navigation").hide(),$(".navigation li").removeClass("small-padding")):($(".navigation-wrapper").addClass("show-menu"),$(".navigation").fadeIn(),$(".navigation li").addClass("small-padding"))}),$(".home-section, .page-section, .small-section, .split-section").each(function(){$(this).attr("data-background")&&$(this).css("background-image",`url(${$(this).data("background")})`)}),$(document).ready(()=>{$(window).trigger("resize"),o()}),$(window).resize(()=>{$(".js-height-full").height($(window).height()),$(".js-height-parent").each(function(){$(this).height($(this).parent().first().height())}),$(".items-container").each(i)});let n,a=$(window).height();$(window).resize(()=>{a=$(window).height(),n=$(".navigation").height(),$("#header-wrap").css("height",`${a-n/2}px`),$("#header-wrap .logo").css("width",`${$("#header-wrap .container").width()}px`)}).resize()}]);