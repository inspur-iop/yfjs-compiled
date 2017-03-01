!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=a;b.fn.customScrollbar=function(a,c){var d={skin:void 0,hScroll:!0,vScroll:!0,hScrollArrows:!0,vScrollArrows:!0,fullScreen:!1,updateOnWindowResize:!0,animationSpeed:300,swipeSpeed:1,wheelSpeed:40,fixedThumbWidth:void 0,fixedThumbHeight:void 0,onCustomScroll:void 0},e=function(a,c){this.$element=b(a),this.options=c,this.addScrollableClass(),this.addSkinClass(),this.addScrollBarComponents(),this.options.vScroll&&(this.vScrollbar=new f(this,new h)),this.options.hScroll&&(this.hScrollbar=new f(this,new g)),this.$element.data("scrollable",this),this.initKeyboardScrolling(),this.bindEvents()};e.prototype={addScrollableClass:function(){this.$element.hasClass("scrollable")||(this.scrollableAdded=!0,this.$element.addClass("scrollable")),this.options.fullScreen&&!this.$element.hasClass("scrollable-full-view")&&this.$element.addClass("scrollable-full-view")},removeScrollableClass:function(){this.scrollableAdded&&this.$element.removeClass("scrollable")},addSkinClass:function(){"string"!=typeof this.options.skin||this.$element.hasClass(this.options.skin)||(this.skinClassAdded=!0,this.$element.addClass(this.options.skin))},removeSkinClass:function(){this.skinClassAdded&&this.$element.removeClass(this.options.skin)},addScrollBarComponents:function(){this.assignViewPort(),0==this.$viewPort.length&&(this.$element.wrapInner('<div class="viewport" />'),this.assignViewPort(),this.viewPortAdded=!0),this.assignOverview(),0==this.$overview.length&&(this.$viewPort.wrapInner('<div class="overview" />'),this.assignOverview(),this.overviewAdded=!0),this.addScrollBar("vertical","prepend"),this.addScrollBar("horizontal","append")},removeScrollbarComponents:function(){this.removeScrollbar("vertical"),this.removeScrollbar("horizontal"),this.overviewAdded&&this.$element.unwrap(),this.viewPortAdded&&this.$element.unwrap()},removeScrollbar:function(a){this[a+"ScrollbarAdded"]&&this.$element.find(".scroll-bar."+a).remove()},assignViewPort:function(){this.$viewPort=this.$element.find(".viewport")},assignOverview:function(){this.$overview=this.$viewPort.find(".overview")},addScrollBar:function(a,b){0==this.$element.find(".scroll-bar."+a).length&&(this.$element[b]("<div class='scroll-bar "+a+"'><a class='thumb-head'><span class='thumb-arrow'></span></a><a class='thumb-tail'><span class='thumb-arrow'></span></a><div class='thumb-rail'><div class='thumb'></div></div></div>"),this[a+"ScrollbarAdded"]=!0)},resize:function(a){this.vScrollbar&&this.vScrollbar.resize(a),this.hScrollbar&&this.hScrollbar.resize(a)},scrollTo:function(a){this.vScrollbar&&this.vScrollbar.scrollToElement(a),this.hScrollbar&&this.hScrollbar.scrollToElement(a)},scrollToXY:function(a,b){this.scrollToX(a),this.scrollToY(b)},scrollToX:function(a){this.hScrollbar&&this.hScrollbar.scrollOverviewTo(a,!0)},scrollToY:function(a){this.vScrollbar&&this.vScrollbar.scrollOverviewTo(a,!0)},scrollByXY:function(a,b){this.scrollToX(a),this.scrollToY(b)},scrollByX:function(a){this.hScrollbar&&this.hScrollbar.scrollOverviewBy(a,!0)},scrollByY:function(a){this.vScrollbar&&this.vScrollbar.scrollOverviewBy(a,!0)},remove:function(){this.removeScrollableClass(),this.removeSkinClass(),this.removeScrollbarComponents(),this.$element.data("scrollable",null),this.removeKeyboardScrolling(),this.vScrollbar&&this.vScrollbar.remove(),this.hScrollbar&&this.hScrollbar.remove()},setAnimationSpeed:function(a){this.options.animationSpeed=a},isInside:function(a,c){var d=b(a),e=b(c),f=d.offset(),g=e.offset();return f.top>=g.top&&f.left>=g.left&&f.top+d.height()<=g.top+e.height()&&f.left+d.width()<=g.left+e.width()},initKeyboardScrolling:function(){var a=this;this.elementKeydown=function(b){document.activeElement===a.$element[0]&&(a.vScrollbar&&a.vScrollbar.keyScroll(b),a.hScrollbar&&a.hScrollbar.keyScroll(b))},this.$element.attr("tabindex","-1").keydown(this.elementKeydown)},removeKeyboardScrolling:function(){this.$element.removeAttr("tabindex").unbind("keydown",this.elementKeydown)},bindEvents:function(){this.options.onCustomScroll&&this.$element.on("customScroll",this.options.onCustomScroll)}};var f=function(a,b){this.scrollable=a,this.sizing=b,this.$scrollBar=this.sizing.scrollBar(this.scrollable.$element),this.$thumb=this.$scrollBar.find(".thumb"),this.$thumbRail=this.$scrollBar.find(".thumb-rail"),this.thumbHeadSize=this.calculateThumbHeadSize(),this.thumbTailSize=this.calculateThumbTailSize(),this.setScrollPosition(0,0),this.resize(),this.initMouseMoveScrolling(),this.initMouseWheelScrolling(),this.initTouchScrolling(),this.initMouseClickScrolling(),this.initWindowResize()};f.prototype={resize:function(a){this.scrollable.$viewPort.width(this.scrollable.$element.width()||this.scrollable.$overview.width()),this.scrollable.$viewPort.height(this.scrollable.$element.height()||this.scrollable.$overview.height()),this.sizing.size(this.scrollable.$viewPort,this.sizing.size(this.scrollable.$element)),this.viewPortSize=this.sizing.size(this.scrollable.$viewPort),this.overviewSize=this.sizing.size(this.scrollable.$overview),this.ratio=(this.viewPortSize-(this.thumbHeadSize+this.thumbTailSize))/this.overviewSize,this.sizing.size(this.$scrollBar,this.viewPortSize),this.thumbSize=this.calculateThumbSize(),this.sizing.size(this.$thumb,this.thumbSize),this.maxThumbPosition=this.calculateMaxThumbPosition(),this.maxOverviewPosition=this.calculateMaxOverviewPosition(),this.enabled=this.viewPortSize>0&&this.overviewSize>this.viewPortSize,void 0===this.scrollPercent&&(this.scrollPercent=0),this.enabled?this.rescroll(a):this.setScrollPosition(0,0),this.$scrollBar.toggle(this.enabled)},calculateThumbHeadSize:function(){return this.sizing.fixedThumbHeadSize(this.scrollable.options,this.$scrollBar)},calculateThumbTailSize:function(){return this.sizing.fixedThumbTailSize(this.scrollable.options,this.$scrollBar)},calculateThumbSize:function(){var a,b=this.sizing.fixedThumbSize(this.scrollable.options);return a=b?b:this.ratio*this.viewPortSize,Math.max(a,this.sizing.minSize(this.$thumb))},initMouseMoveScrolling:function(){var a=this;this.$thumb.on("mousedown",function(b){a.enabled&&a.startMouseMoveScrolling(b)}),this.documentMouseup=function(b){a.stopMouseMoveScrolling(b)},b(document).on("mouseup.customScrollbar",this.documentMouseup),this.documentMousemove=function(b){a.mouseMoveScroll(b)},b(document).on("mousemove.customScrollbar",this.documentMousemove),this.$thumb.on("mouseup",this.documentMouseup),this.$thumb.on("click",function(a){a.stopPropagation()})},removeMouseMoveScrolling:function(){this.$thumb.off("mousedown mouseup click"),b(document).off("mouseup.customScrollbar",this.documentMouseup),b(document).off("mousemove.customScrollbar",this.documentMousemove)},initMouseWheelScrolling:function(){var a=this;this.scrollable.$element.mousewheel(function(b,c,d,e){a.enabled&&a.mouseWheelScroll(d,e)&&(b.stopPropagation(),b.preventDefault())})},removeMouseWheelScrolling:function(){this.scrollable.$element.unbind("mousewheel")},initTouchScrolling:function(){if(document.addEventListener){var a=this;this.elementTouchstart=function(b){a.enabled&&a.startTouchScrolling(b)},this.scrollable.$element[0].addEventListener("touchstart",this.elementTouchstart),this.documentTouchmove=function(b){a.touchScroll(b)},document.addEventListener("touchmove",this.documentTouchmove),this.elementTouchend=function(b){a.stopTouchScrolling(b)},this.scrollable.$element[0].addEventListener("touchend",this.elementTouchend)}},removeTouchScrolling:function(){document.addEventListener&&(this.scrollable.$element[0].removeEventListener("touchstart",this.elementTouchstart),document.removeEventListener("touchmove",this.documentTouchmove),this.scrollable.$element[0].removeEventListener("touchend",this.elementTouchend))},initMouseClickScrolling:function(){var a=this;this.scrollBarClick=function(b){a.mouseClickScroll(b)},this.$scrollBar.click(this.scrollBarClick)},removeMouseClickScrolling:function(){this.$scrollBar.unbind("click",this.scrollBarClick)},initWindowResize:function(){if(this.scrollable.options.updateOnWindowResize){var a=this;this.windowResize=function(){a.resize()},b(window).on("resize.customScrollbar",this.windowResize)}},removeWindowResize:function(){b(window).off("resize.customScrollbar",this.windowResize)},isKeyScrolling:function(a){return null!=this.keyScrollDelta(a)},keyScrollDelta:function(a){for(var b in this.sizing.scrollingKeys)if(b==a)return this.sizing.scrollingKeys[a](this.viewPortSize);return null},startMouseMoveScrolling:function(a){this.mouseMoveScrolling||(this.mouseMoveScrolling=!0,b("html").addClass("not-selectable"),this.setUnselectable(b("html"),"on"),this.setScrollEvent(a))},stopMouseMoveScrolling:function(a){this.mouseMoveScrolling&&(b("html").removeClass("not-selectable"),this.setUnselectable(b("html"),null),this.mouseMoveScrolling=!1)},setUnselectable:function(a,b){a.attr("unselectable")!=b&&(a.attr("unselectable",b),a.find(":not(input)").attr("unselectable",b))},mouseMoveScroll:function(a){if(this.mouseMoveScrolling){var b=this.sizing.mouseDelta(this.scrollEvent,a);this.scrollThumbBy(b),this.setScrollEvent(a)}},startTouchScrolling:function(a){a.touches&&1==a.touches.length&&(this.setScrollEvent(a.touches[0]),this.touchScrolling=!0,a.stopPropagation())},touchScroll:function(a){if(this.touchScrolling&&a.touches&&1==a.touches.length){var b=-this.sizing.mouseDelta(this.scrollEvent,a.touches[0])*this.scrollable.options.swipeSpeed,c=this.scrollOverviewBy(b);c&&(a.stopPropagation(),a.preventDefault(),this.setScrollEvent(a.touches[0]))}},stopTouchScrolling:function(a){this.touchScrolling=!1,a.stopPropagation()},mouseWheelScroll:function(a,b){var c=-this.sizing.wheelDelta(a,b)*this.scrollable.options.wheelSpeed;if(0!=c)return this.scrollOverviewBy(c)},mouseClickScroll:function(a){var b=this.viewPortSize-20;a["page"+this.sizing.scrollAxis()]<this.$thumb.offset()[this.sizing.offsetComponent()]&&(b=-b),this.scrollOverviewBy(b)},keyScroll:function(a){var b=a.which;this.enabled&&this.isKeyScrolling(b)&&this.scrollOverviewBy(this.keyScrollDelta(b))&&a.preventDefault()},scrollThumbBy:function(a){var b=this.thumbPosition();b+=a,b=this.positionOrMax(b,this.maxThumbPosition);var c=this.scrollPercent;this.scrollPercent=b/this.maxThumbPosition;var d=b*this.maxOverviewPosition/this.maxThumbPosition;return this.setScrollPosition(d,b),c!=this.scrollPercent&&(this.triggerCustomScroll(c),!0)},thumbPosition:function(){return this.$thumb.position()[this.sizing.offsetComponent()]},scrollOverviewBy:function(a,b){var c=this.overviewPosition()+a;return b=b||!1,this.scrollOverviewTo(c,b)},overviewPosition:function(){return-this.scrollable.$overview.position()[this.sizing.offsetComponent()]},scrollOverviewTo:function(a,b){a=this.positionOrMax(a,this.maxOverviewPosition);var c=this.scrollPercent;this.scrollPercent=a/this.maxOverviewPosition;var d=this.scrollPercent*this.maxThumbPosition;return b?this.setScrollPositionWithAnimation(a,d):this.setScrollPosition(a,d),c!=this.scrollPercent&&(this.triggerCustomScroll(c),!0)},positionOrMax:function(a,b){return a<0?0:a>b?b:a},triggerCustomScroll:function(a){this.scrollable.$element.trigger("customScroll",{scrollAxis:this.sizing.scrollAxis(),direction:this.sizing.scrollDirection(a,this.scrollPercent),scrollPercent:100*this.scrollPercent})},rescroll:function(a){if(a){var b=this.positionOrMax(this.overviewPosition(),this.maxOverviewPosition);this.scrollPercent=b/this.maxOverviewPosition;var c=this.scrollPercent*this.maxThumbPosition;this.setScrollPosition(b,c)}else{var c=this.scrollPercent*this.maxThumbPosition,b=this.scrollPercent*this.maxOverviewPosition;this.setScrollPosition(b,c)}},checkScroll:function(){var a=this.thumbPosition();a<=0?(this.$scrollBar.addClass("scroll-on-head"),this.setUnselectable(this.$scrollBar.find(".thumb-head"),"on")):this.$scrollBar.hasClass("scroll-on-head")&&(this.$scrollBar.removeClass("scroll-on-head"),this.setUnselectable(this.$scrollBar.find(".thumb-head"),null)),this.maxThumbPosition-a<.1?(this.$scrollBar.addClass("scroll-on-tail"),this.setUnselectable(this.$scrollBar.find(".thumb-tail"),"on")):this.$scrollBar.hasClass("scroll-on-tail")&&(this.$scrollBar.removeClass("scroll-on-tail"),this.setUnselectable(this.$scrollBar.find(".thumb-tail"),null))},setScrollPosition:function(a,b){this.$thumb.css(this.sizing.offsetComponent(),b+"px"),this.scrollable.$overview.css(this.sizing.offsetComponent(),-a+"px"),this.checkScroll()},setScrollPositionWithAnimation:function(a,c){var d={},e={};d[this.sizing.offsetComponent()]=c+"px",this.$thumb.animate(d,this.scrollable.options.animationSpeed,b.proxy(this.checkScroll,this)),e[this.sizing.offsetComponent()]=-a+"px",this.scrollable.$overview.animate(e,this.scrollable.options.animationSpeed)},calculateMaxThumbPosition:function(){return this.sizing.size(this.$scrollBar)-this.thumbSize-this.sizing.fixedThumbOuterSize(this.$thumb)-(this.thumbTailSize+this.thumbHeadSize)},calculateMaxOverviewPosition:function(){return this.sizing.size(this.scrollable.$overview)-this.sizing.size(this.scrollable.$viewPort)},setScrollEvent:function(a){var b="page"+this.sizing.scrollAxis();this.scrollEvent&&this.scrollEvent[b]==a[b]||(this.scrollEvent={pageX:a.pageX,pageY:a.pageY})},scrollToElement:function(a){var c=b(a);if(this.sizing.isInside(c,this.scrollable.$overview)&&!this.sizing.isInside(c,this.scrollable.$viewPort)){var d=c.offset(),e=this.scrollable.$overview.offset();this.scrollable.$viewPort.offset();this.scrollOverviewTo(d[this.sizing.offsetComponent()]-e[this.sizing.offsetComponent()],!0)}},remove:function(){this.removeMouseMoveScrolling(),this.removeMouseWheelScrolling(),this.removeTouchScrolling(),this.removeMouseClickScrolling(),this.removeWindowResize()}};var g=function(){};g.prototype={size:function(a,b){return b?a.width(b):a.width()},innerSize:function(a,b){return b?a.css("width","number"==typeof b||/^\d+(\.\d+)?$/.test?b+"px":b):a.innerWidth()},minSize:function(a){return parseInt(a.css("min-width"))||0},fixedThumbHeadSize:function(a,b){if(a.hScrollArrows){var c=b.find(".thumb-head:first");return c.outerWidth()||0}return 0},fixedThumbTailSize:function(a,b){if(a.hScrollArrows){var c=b.find(".thumb-tail:first");return c.outerWidth()||0}return 0},fixedThumbSize:function(a){return a.fixedThumbWidth},fixedThumbOuterSize:function(a){return a.outerWidth()-a.innerWidth()},scrollBar:function(a){return a.find(".scroll-bar.horizontal")},mouseDelta:function(a,b){return b.pageX-a.pageX},offsetComponent:function(){return"left"},wheelDelta:function(a,b){return a},scrollAxis:function(){return"X"},scrollDirection:function(a,b){return a<b?"right":"left"},scrollingKeys:{37:function(a){return-10},39:function(a){return 10}},isInside:function(a,c){var d=b(a),e=b(c),f=d.offset(),g=e.offset();return f.left>=g.left&&f.left+d.width()<=g.left+e.width()}};var h=function(){};return h.prototype={size:function(a,b){return b?a.height(b):a.height()},innerSize:function(a,b){return b?a.css("height","number"==typeof b||/^\d+(\.\d+)?$/.test?b+"px":b):a.innerHeight()},minSize:function(a){return parseInt(a.css("min-height"))||0},fixedThumbHeadSize:function(a,b){if(a.vScrollArrows){var c=b.find(".thumb-head:first");return c.outerHeight()||0}return 0},fixedThumbTailSize:function(a,b){if(a.vScrollArrows){var c=b.find(".thumb-tail:first");return c.outerHeight()||0}return 0},fixedThumbSize:function(a){return a.fixedThumbHeight},fixedThumbOuterSize:function(a){return a.outerHeight()-a.innerHeight()},scrollBar:function(a){return a.find(".scroll-bar.vertical")},mouseDelta:function(a,b){return b.pageY-a.pageY},offsetComponent:function(){return"top"},wheelDelta:function(a,b){return b},scrollAxis:function(){return"Y"},scrollDirection:function(a,b){return a<b?"down":"up"},scrollingKeys:{38:function(a){return-10},40:function(a){return 10},33:function(a){return-(a-20)},34:function(a){return a-20}},isInside:function(a,c){var d=b(a),e=b(c),f=d.offset(),g=e.offset();return f.top>=g.top&&f.top+d.height()<=g.top+e.height()}},this.each(function(){if(void 0==a&&(a=d),"string"==typeof a){var f=b(this).data("scrollable");f&&f[a](c)}else{if("object"!=typeof a)throw"Invalid type of options";a=b.extend(d,a),new e(b(this),a)}})},function(a){function b(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=0,g=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),g=e,void 0!==c.axis&&c.axis===c.HORIZONTAL_AXIS&&(g=0,f=e),void 0!==c.wheelDeltaY&&(g=c.wheelDeltaY/120),void 0!==c.wheelDeltaX&&(f=c.wheelDeltaX/120),d.unshift(b,e,f,g),(a.event.dispatch||a.event.handle).apply(this,d)}var c=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var d=c.length;d;)a.event.fixHooks[c[--d]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],b,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}(a)});