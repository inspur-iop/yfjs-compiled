!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=a.fn.spinbox,c=function(b,c){this.$element=a(b),this.$element.find(".btn").on("click",function(a){a.preventDefault()}),this.options=a.extend({},a.fn.spinbox.defaults,c),this.$input=this.$element.find(".spinbox-input"),this.$element.on("focusin.bs.spinbox",this.$input,a.proxy(this.changeFlag,this)),this.$element.on("focusout.bs.spinbox",this.$input,a.proxy(this.change,this)),this.$element.on("keydown.bs.spinbox",this.$input,a.proxy(this.keydown,this)),this.$element.on("keyup.bs.spinbox",this.$input,a.proxy(this.keyup,this)),this.bindMousewheelListeners(),this.mousewheelTimeout={},this.options.hold?(this.$element.on("mousedown.bs.spinbox",".spinbox-up",a.proxy(function(){this.startSpin(!0)},this)),this.$element.on("mouseup.bs.spinbox",".spinbox-up, .spinbox-down",a.proxy(this.stopSpin,this)),this.$element.on("mouseout.bs.spinbox",".spinbox-up, .spinbox-down",a.proxy(this.stopSpin,this)),this.$element.on("mousedown.bs.spinbox",".spinbox-down",a.proxy(function(){this.startSpin(!1)},this))):(this.$element.on("click.bs.spinbox",".spinbox-up",a.proxy(function(){this.step(!0)},this)),this.$element.on("click.bs.spinbox",".spinbox-down",a.proxy(function(){this.step(!1)},this))),this.switches={count:1,enabled:!0},"medium"===this.options.speed?this.switches.speed=300:"fast"===this.options.speed?this.switches.speed=100:this.switches.speed=500,this.lastValue=this.options.value,this.render(),this.options.disabled&&this.disable()};c.prototype={constructor:c,destroy:function(){return this.$element.remove(),this.$element.find("input").each(function(){a(this).attr("value",a(this).val())}),this.$element[0].outerHTML},render:function(){var b=this.parseInput(this.$input.val()),c="";""!==b&&0===this.options.value?this.value(b):this.output(this.options.value),this.options.units.length&&a.each(this.options.units,function(a,b){b.length>c.length&&(c=b)})},output:function(a,b){return a=(a+"").split(".").join(this.options.decimalMark),b=b||!0,b&&this.$input.val(a),a},parseInput:function(a){return a=(a+"").split(this.options.decimalMark).join(".")},change:function(){var a=this.parseInput(this.$input.val())||"";this.options.units.length||"."!==this.options.decimalMark?a=this.parseValueWithUnit(a):a/1?a=this.options.value=this.checkMaxMin(a/1):(a=this.checkMaxMin(a.replace(/[^0-9.-]/g,"")||""),this.options.value=a/1),this.output(a),this.changeFlag=!1,this.triggerChangedEvent()},changeFlag:function(){this.changeFlag=!0},stopSpin:function(){void 0!==this.switches.timeout&&(clearTimeout(this.switches.timeout),this.switches.count=1,this.triggerChangedEvent())},triggerChangedEvent:function(){var a=this.value();a!==this.lastValue&&(this.lastValue=a,this.$element.trigger("changed.bs.spinbox",this.output(a,!1)))},startSpin:function(b){if(!this.options.disabled){var c=this.switches.count;1===c?(this.step(b),c=1):c=c<3?1.5:c<8?2.5:4,this.switches.timeout=setTimeout(a.proxy(function(){this.iterate(b)},this),this.switches.speed/c),this.switches.count++}},iterate:function(a){this.step(a),this.startSpin(a)},step:function(a){var b,c,d,e;if(this.changeFlag&&this.change(),d=this.options.value,e=a?this.options.max:this.options.min,a?d<e:d>e){var f=d+(a?1:-1)*this.options.step;this.options.step%1!=0&&(b=(this.options.step+"").split(".")[1].length,c=Math.pow(10,b),f=Math.round(f*c)/c),(a?f>e:f<e)?this.value(e):this.value(f)}else if(this.options.cycle){var g=a?this.options.min:this.options.max;this.value(g)}},value:function(a){return a||0===a?this.options.units.length||"."!==this.options.decimalMark?(this.output(this.parseValueWithUnit(a+(this.unit||""))),this):!isNaN(parseFloat(a))&&isFinite(a)?(this.options.value=a/1,this.output(a+(this.unit?this.unit:"")),this):void 0:(this.changeFlag&&this.change(),this.unit?this.options.value+this.unit:this.output(this.options.value,!1))},isUnitLegal:function(b){var c;return a.each(this.options.units,function(a,d){if(d.toLowerCase()===b.toLowerCase())return c=b.toLowerCase(),!1}),c},parseValueWithUnit:function(a){var b=a.replace(/[^a-zA-Z]/g,""),c=a.replace(/[^0-9.-]/g,"");return b&&(b=this.isUnitLegal(b)),this.options.value=this.checkMaxMin(c/1),this.unit=b||void 0,this.options.value+(b||"")},checkMaxMin:function(a){return isNaN(parseFloat(a))?a:(a<=this.options.max&&a>=this.options.min||(a=a>=this.options.max?this.options.max:this.options.min),a)},disable:function(){this.options.disabled=!0,this.$element.addClass("disabled"),this.$input.attr("disabled",""),this.$element.find("button").addClass("disabled")},enable:function(){this.options.disabled=!1,this.$element.removeClass("disabled"),this.$input.removeAttr("disabled"),this.$element.find("button").removeClass("disabled")},keydown:function(a){var b=a.keyCode;38===b?this.step(!0):40===b&&this.step(!1)},keyup:function(a){var b=a.keyCode;38!==b&&40!==b||this.triggerChangedEvent()},bindMousewheelListeners:function(){var b=this.$input.get(0);b.addEventListener?(b.addEventListener("mousewheel",a.proxy(this.mousewheelHandler,this),!1),b.addEventListener("DOMMouseScroll",a.proxy(this.mousewheelHandler,this),!1)):b.attachEvent("onmousewheel",a.proxy(this.mousewheelHandler,this))},mousewheelHandler:function(a){if(!this.options.disabled){var b=window.event||a,c=Math.max(-1,Math.min(1,b.wheelDelta||-b.detail)),d=this;return clearTimeout(this.mousewheelTimeout),this.mousewheelTimeout=setTimeout(function(){d.triggerChangedEvent()},300),c<0?this.step(!0):this.step(!1),b.preventDefault?b.preventDefault():b.returnValue=!1,!1}}},a.fn.spinbox=function(b){var d,e=Array.prototype.slice.call(arguments,1),f=this.each(function(){var f=a(this),g=f.data("bs.spinbox"),h="object"==typeof b&&b;g||f.data("bs.spinbox",g=new c(this,h)),"string"==typeof b&&(d=g[b].apply(g,e))});return void 0===d?f:d},a.fn.spinbox.defaults={value:0,min:0,max:999,step:1,hold:!0,speed:"medium",disabled:!1,cycle:!1,units:[],decimalMark:"."},a.fn.spinbox.Constructor=c,a.fn.spinbox.noConflict=function(){return a.fn.spinbox=b,this},a(document).on("mousedown.bs.spinbox.data-api",'[data-spy="spinbox"]',function(b){var c=a(b.target).closest(".spinbox");c.data("bs.spinbox")||c.spinbox(c.data())}),a(function(){a('[data-spy="spinbox"]').each(function(){var b=a(this);b.data("bs.spinbox")||b.spinbox(b.data())})})});