!function(a,b){"use strict";var c,d,e,f=a,g=f.document,h=f.navigator,i=f.setTimeout,j=f.clearTimeout,k=f.setInterval,l=f.clearInterval,m=f.getComputedStyle,n=f.encodeURIComponent,o=f.ActiveXObject,p=f.Error,q=f.Number.parseInt||f.parseInt,r=f.Number.parseFloat||f.parseFloat,s=f.Number.isNaN||f.isNaN,t=f.Date.now,u=f.Object.keys,v=f.Object.defineProperty,w=f.Object.prototype.hasOwnProperty,x=f.Array.prototype.slice,y=function(){var a=function(a){return a};if("function"==typeof f.wrap&&"function"==typeof f.unwrap)try{var b=g.createElement("div"),c=f.unwrap(b);1===b.nodeType&&c&&1===c.nodeType&&(a=f.unwrap)}catch(a){}return a}(),z=function(a){return x.call(a,0)},A=function(){var a,c,d,e,f,g=z(arguments),h=g[0]||{};for(a=1,c=g.length;a<c;a++)if(null!=(d=g[a]))for(e in d)w.call(d,e)&&(h[e],f=d[e],h!==f&&f!==b&&(h[e]=f));return h},B=function(a){var b,c,d,e;if("object"!=typeof a||null==a||"number"==typeof a.nodeType)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;c<d;c++)w.call(a,c)&&(b[c]=B(a[c]));else{b={};for(e in a)w.call(a,e)&&(b[e]=B(a[e]))}return b},C=function(a,b){for(var c={},d=0,e=b.length;d<e;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},D=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},E=function(a){if(a)for(var b in a)w.call(a,b)&&delete a[b];return a},F=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},G=function(a){var b;return"string"==typeof a&&a&&(b=a.split("#")[0].split("?")[0],b=a.slice(0,a.lastIndexOf("/")+1)),b},H=function(a){var b,c;return"string"==typeof a&&a&&(c=a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]?b=c[1]:(c=a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/))&&c[1]&&(b=c[1])),b},I=function(){var a,b;try{throw new p}catch(a){b=a}return b&&(a=b.sourceURL||b.fileName||H(b.stack)),a},J=function(){var a,c,d;if(g.currentScript&&(a=g.currentScript.src))return a;if(c=g.getElementsByTagName("script"),1===c.length)return c[0].src||b;if("readyState"in c[0])for(d=c.length;d--;)if("interactive"===c[d].readyState&&(a=c[d].src))return a;return"loading"===g.readyState&&(a=c[c.length-1].src)?a:(a=I())?a:b},K=function(){var a,c,d,e=g.getElementsByTagName("script");for(a=e.length;a--;){if(!(d=e[a].src)){c=null;break}if(d=G(d),null==c)c=d;else if(c!==d){c=null;break}}return c||b},L=function(){return(G(J())||K()||"")+"ZeroClipboard.swf"},M=function(){return null==a.opener&&(!!a.top&&a!=a.top||!!a.parent&&a!=a.parent)}(),N={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,sandboxed:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},O="11.0.0",P={},Q={},R=null,S=0,T=0,U={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"}},V=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"],W=["flash-disabled","flash-outdated","flash-sandboxed","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"],X=new RegExp("^flash-("+W.map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Y=new RegExp("^flash-("+W.slice(1).map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Z={swfPath:L(),trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},$=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(w.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))Z[b]=a[b];else if(null==N.bridge)if("containerId"===b||"swfObjectId"===b){if(!na(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");Z[b]=a[b]}else Z[b]=a[b];{if("string"!=typeof a||!a)return B(Z);if(w.call(Z,a))return Z[a]}},_=function(){return Ta(),{browser:C(h,["userAgent","platform","appName"]),flash:D(N,["bridge"]),zeroclipboard:{version:Va.version,config:Va.config()}}},aa=function(){return!!(N.disabled||N.outdated||N.sandboxed||N.unavailable||N.degraded||N.deactivated)},ba=function(a,d){var e,f,g,h={};if("string"==typeof a&&a)g=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&void 0===d)for(e in a)w.call(a,e)&&"string"==typeof e&&e&&"function"==typeof a[e]&&Va.on(e,a[e]);if(g&&g.length){for(e=0,f=g.length;e<f;e++)a=g[e].replace(/^on/,""),h[a]=!0,P[a]||(P[a]=[]),P[a].push(d);if(h.ready&&N.ready&&Va.emit({type:"ready"}),h.error){for(e=0,f=W.length;e<f;e++)if(!0===N[W[e].replace(/^flash-/,"")]){Va.emit({type:"error",name:W[e]});break}c!==b&&Va.version!==c&&Va.emit({type:"error",name:"version-mismatch",jsVersion:Va.version,swfVersion:c})}}return Va},ca=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=u(P);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&void 0===b)for(c in a)w.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Va.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;c<d;c++)if(a=f[c].toLowerCase().replace(/^on/,""),(g=P[a])&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return Va},da=function(a){return"string"==typeof a&&a?B(P[a])||null:B(P)},ea=function(a){var b,c,d;if((a=oa(a))&&!va(a))return"ready"===a.type&&!0===N.overdue?Va.emit({type:"error",name:"flash-overdue"}):(b=A({},a),ta.call(this,b),"copy"===a.type&&(d=Da(Q),c=d.data,R=d.formatMap),c)},fa=function(){var a=N.sandboxed;if(Ta(),"boolean"!=typeof N.ready&&(N.ready=!1),N.sandboxed!==a&&!0===N.sandboxed)N.ready=!1,Va.emit({type:"error",name:"flash-sandboxed"});else if(!Va.isFlashUnusable()&&null===N.bridge){var b=Z.flashLoadTimeout;"number"==typeof b&&b>=0&&(S=i(function(){"boolean"!=typeof N.deactivated&&(N.deactivated=!0),!0===N.deactivated&&Va.emit({type:"error",name:"flash-deactivated"})},b)),N.overdue=!1,Ba()}},ga=function(){Va.clearData(),Va.blur(),Va.emit("destroy"),Ca(),Va.off()},ha=function(a,b){var c;if("object"==typeof a&&a&&void 0===b)c=a,Va.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&w.call(c,d)&&"string"==typeof c[d]&&c[d]&&(Q[d]=c[d])},ia=function(a){void 0===a?(E(Q),R=null):"string"==typeof a&&w.call(Q,a)&&delete Q[a]},ja=function(a){return void 0===a?B(Q):"string"==typeof a&&w.call(Q,a)?Q[a]:void 0},ka=function(a){if(a&&1===a.nodeType){d&&(La(d,Z.activeClass),d!==a&&La(d,Z.hoverClass)),d=a,Ka(a,Z.hoverClass);var b=a.getAttribute("title")||Z.title;if("string"==typeof b&&b){var c=Aa(N.bridge);c&&c.setAttribute("title",b)}var e=!0===Z.forceHandCursor||"pointer"===Ma(a,"cursor");Ra(e),Qa()}},la=function(){var a=Aa(N.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px"),d&&(La(d,Z.hoverClass),La(d,Z.activeClass),d=null)},ma=function(){return d||null},na=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},oa=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){b=b.toLowerCase(),!a.target&&(/^(copy|aftercopy|_click)$/.test(b)||"error"===b&&"clipboard-error"===a.name)&&(a.target=e),A(a,{type:b,target:a.target||d||null,relatedTarget:a.relatedTarget||null,currentTarget:N&&N.bridge||null,timeStamp:a.timeStamp||t()||null});var c=U[a.type];return"error"===a.type&&a.name&&c&&(c=c[a.name]),c&&(a.message=c),"ready"===a.type&&A(a,{target:null,version:N.version}),"error"===a.type&&(X.test(a.name)&&A(a,{target:null,minimumVersion:O}),Y.test(a.name)&&A(a,{version:N.version})),"copy"===a.type&&(a.clipboardData={setData:Va.setData,clearData:Va.clearData}),"aftercopy"===a.type&&(a=Ea(a,R)),a.target&&!a.relatedTarget&&(a.relatedTarget=pa(a.target)),qa(a)}},pa=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?g.getElementById(b):null},qa=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,d="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,e="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=Na(c),i=f.screenLeft||f.screenX||0,j=f.screenTop||f.screenY||0,k=g.body.scrollLeft+g.documentElement.scrollLeft,l=g.body.scrollTop+g.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,A(a,{srcElement:c,fromElement:d,toElement:e,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},ra=function(a){return!/^(?:(?:before)?copy|destroy)$/.test(a&&"string"==typeof a.type&&a.type||"")},sa=function(a,b,c,d){d?i(function(){a.apply(b,c)},0):a.apply(b,c)},ta=function(a){if("object"==typeof a&&a&&a.type){var b=ra(a),c=P["*"]||[],d=P[a.type]||[],e=c.concat(d);if(e&&e.length){var g,h,i,j,k,l=this;for(g=0,h=e.length;g<h;g++)i=e[g],j=l,"string"==typeof i&&"function"==typeof f[i]&&(i=f[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=A({},a),sa(i,j,[k],b))}return this}},ua=function(a){var b=null;return(!1===M||a&&"error"===a.type&&a.name&&-1!==V.indexOf(a.name))&&(b=!1),b},va=function(a){var b=a.target||d||null,f="swf"===a._source;switch(delete a._source,a.type){case"error":var g="flash-sandboxed"===a.name||ua(a);"boolean"==typeof g&&(N.sandboxed=g),-1!==W.indexOf(a.name)?A(N,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,degraded:"flash-degraded"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1}):"version-mismatch"===a.name&&(c=a.swfVersion,A(N,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),Pa();break;case"ready":c=a.swfVersion;var h=!0===N.deactivated;A(N,{disabled:!1,outdated:!1,sandboxed:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:h,ready:!h}),Pa();break;case"beforecopy":e=b;break;case"copy":var i,j,k=a.relatedTarget;!Q["text/html"]&&!Q["text/plain"]&&k&&(j=k.value||k.outerHTML||k.innerHTML)&&(i=k.value||k.textContent||k.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",i),j!==i&&a.clipboardData.setData("text/html",j)):!Q["text/plain"]&&a.target&&(i=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",i));break;case"aftercopy":wa(a),Va.clearData(),b&&b!==Ja()&&b.focus&&b.focus();break;case"_mouseover":Va.focus(b),!0===Z.bubbleEvents&&f&&(b&&b!==a.relatedTarget&&!F(a.relatedTarget,b)&&xa(A({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),xa(A({},a,{type:"mouseover"})));break;case"_mouseout":Va.blur(),!0===Z.bubbleEvents&&f&&(b&&b!==a.relatedTarget&&!F(a.relatedTarget,b)&&xa(A({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),xa(A({},a,{type:"mouseout"})));break;case"_mousedown":Ka(b,Z.activeClass),!0===Z.bubbleEvents&&f&&xa(A({},a,{type:a.type.slice(1)}));break;case"_mouseup":La(b,Z.activeClass),!0===Z.bubbleEvents&&f&&xa(A({},a,{type:a.type.slice(1)}));break;case"_click":e=null,!0===Z.bubbleEvents&&f&&xa(A({},a,{type:a.type.slice(1)}));break;case"_mousemove":!0===Z.bubbleEvents&&f&&xa(A({},a,{type:a.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type))return!0},wa=function(a){if(a.errors&&a.errors.length>0){var b=B(a);A(b,{type:"error",name:"clipboard-error"}),delete b.success,i(function(){Va.emit(b)},0)}},xa=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,d=c&&c.ownerDocument||g,e={view:d.defaultView||f,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:d.createEvent?0:1},h=A(e,a);c&&d.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=d.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},ya=function(){var a=Z.flashLoadTimeout;if("number"==typeof a&&a>=0){var b=Math.min(1e3,a/10),c=Z.swfObjectId+"_fallbackContent";T=k(function(){var a=g.getElementById(c);Oa(a)&&(Pa(),N.deactivated=null,Va.emit({type:"error",name:"swf-not-found"}))},b)}},za=function(){var a=g.createElement("div");return a.id=Z.containerId,a.className=Z.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+Sa(Z.zIndex),a},Aa=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},Ba=function(){var a,b=N.bridge,c=Aa(b);if(!b){var d=Ia(f.location.host,Z),e="never"===d?"none":"all",h=Ga(A({jsVersion:Va.version},Z)),i=Z.swfPath+Fa(Z.swfPath,Z);c=za();var j=g.createElement("div");c.appendChild(j),g.body.appendChild(c);var k=g.createElement("div"),l="activex"===N.pluginType;k.innerHTML='<object id="'+Z.swfObjectId+'" name="'+Z.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+d+'"/><param name="allowNetworking" value="'+e+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/><div id="'+Z.swfObjectId+'_fallbackContent">&nbsp;</div></object>',b=k.firstChild,k=null,y(b).ZeroClipboard=Va,c.replaceChild(b,j),ya()}return b||(b=g[Z.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),N.bridge=b||null,b},Ca=function(){var a=N.bridge;if(a){var d=Aa(a);d&&("activex"===N.pluginType&&"readyState"in a?(a.style.display="none",function b(){if(4===a.readyState){for(var c in a)"function"==typeof a[c]&&(a[c]=null);a.parentNode&&a.parentNode.removeChild(a),d.parentNode&&d.parentNode.removeChild(d)}else i(b,10)}()):(a.parentNode&&a.parentNode.removeChild(a),d.parentNode&&d.parentNode.removeChild(d))),Pa(),N.ready=null,N.bridge=null,N.deactivated=null,c=b}},Da=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&w.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},Ea=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(w.call(a,d))if("errors"===d){c[d]=a[d]?a[d].slice():[];for(var e=0,f=c[d].length;e<f;e++)c[d][e].format=b[c[d][e].format]}else if("success"!==d&&"data"!==d)c[d]=a[d];else{c[d]={};var g=a[d];for(var h in g)h&&w.call(g,h)&&w.call(b,h)&&(c[d][b[h]]=g[h])}return c},Fa=function(a,b){return null==b||b&&!0===b.cacheBust?(-1===a.indexOf("?")?"?":"&")+"noCache="+t():""},Ga=function(a){var b,c,d,e,g="",h=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?e=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(e=a.trustedDomains)),e&&e.length)for(b=0,c=e.length;b<c;b++)if(w.call(e,b)&&e[b]&&"string"==typeof e[b]){if(!(d=Ha(e[b])))continue;if("*"===d){h.length=0,h.push(d);break}h.push.apply(h,[d,"//"+d,f.location.protocol+"//"+d])}return h.length&&(g+="trustedOrigins="+n(h.join(","))),!0===a.forceEnhancedClipboard&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+n(a.swfObjectId)),"string"==typeof a.jsVersion&&a.jsVersion&&(g+=(g?"&":"")+"jsVersion="+n(a.jsVersion)),g},Ha=function(a){if(null==a||""===a)return null;if(""===(a=a.replace(/^\s+|\s+$/g,"")))return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},Ia=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;b<c;b++)if(w.call(a,b)&&(d=Ha(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=Ha(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),Ja=function(){try{return g.activeElement}catch(a){return null}},Ka=function(a,b){var c,d,e,f=[];if("string"==typeof b&&b&&(f=b.split(/\s+/)),a&&1===a.nodeType&&f.length>0)if(a.classList)for(c=0,d=f.length;c<d;c++)a.classList.add(f[c]);else if(a.hasOwnProperty("className")){for(e=" "+a.className+" ",c=0,d=f.length;c<d;c++)-1===e.indexOf(" "+f[c]+" ")&&(e+=f[c]+" ");a.className=e.replace(/^\s+|\s+$/g,"")}return a},La=function(a,b){var c,d,e,f=[];if("string"==typeof b&&b&&(f=b.split(/\s+/)),a&&1===a.nodeType&&f.length>0)if(a.classList&&a.classList.length>0)for(c=0,d=f.length;c<d;c++)a.classList.remove(f[c]);else if(a.className){for(e=(" "+a.className+" ").replace(/[\r\n\t]/g," "),c=0,d=f.length;c<d;c++)e=e.replace(" "+f[c]+" "," ");a.className=e.replace(/^\s+|\s+$/g,"")}return a},Ma=function(a,b){var c=m(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},Na=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c=a.getBoundingClientRect(),d=f.pageXOffset,e=f.pageYOffset,h=g.documentElement.clientLeft||0,i=g.documentElement.clientTop||0,j=0,k=0;if("relative"===Ma(g.body,"position")){var l=g.body.getBoundingClientRect(),m=g.documentElement.getBoundingClientRect();j=l.left-m.left||0,k=l.top-m.top||0}b.left=c.left+d-h-j,b.top=c.top+e-i-k,b.width="width"in c?c.width:c.right-c.left,b.height="height"in c?c.height:c.bottom-c.top}return b},Oa=function(a){if(!a)return!1;var b=m(a,null),c=r(b.height)>0,d=r(b.width)>0,e=r(b.top)>=0,f=r(b.left)>=0,g=c&&d&&e&&f,h=g?null:Na(a);return"none"!==b.display&&"collapse"!==b.visibility&&(g||!!h&&(c||h.height>0)&&(d||h.width>0)&&(e||h.top>=0)&&(f||h.left>=0))},Pa=function(){j(S),S=0,l(T),T=0},Qa=function(){var a;if(d&&(a=Aa(N.bridge))){var b=Na(d);A(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+Sa(Z.zIndex)})}},Ra=function(a){!0===N.ready&&(N.bridge&&"function"==typeof N.bridge.setHandCursor?N.bridge.setHandCursor(a):N.ready=!1)},Sa=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||s(a)?"string"==typeof a&&(b=Sa(q(a,10))):b=a,"number"==typeof b?b:"auto"},Ta=function(b){var c,d,e,f=N.sandboxed,g=null;if(b=!0===b,!1===M)g=!1;else{try{d=a.frameElement||null}catch(a){e={name:a.name,message:a.message}}if(d&&1===d.nodeType&&"IFRAME"===d.nodeName)try{g=d.hasAttribute("sandbox")}catch(a){g=null}else{try{c=document.domain||null}catch(a){c=null}(null===c||e&&"SecurityError"===e.name&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase()))&&(g=!0)}}return N.sandboxed=g,f===g||b||Ua(o),g},Ua=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(i=!0,a.version&&(l=b(a.version)),!l&&a.description&&(l=b(a.description)),a.filename&&(k=c(a.filename)))}var e,f,g,i=!1,j=!1,k=!1,l="";if(h.plugins&&h.plugins.length)e=h.plugins["Shockwave Flash"],d(e),h.plugins["Shockwave Flash 2.0"]&&(i=!0,l="2.0.0.11");else if(h.mimeTypes&&h.mimeTypes.length)g=h.mimeTypes["application/x-shockwave-flash"],e=g&&g.enabledPlugin,d(e);else if(void 0!==a){j=!0;try{f=new a("ShockwaveFlash.ShockwaveFlash.7"),i=!0,l=b(f.GetVariable("$version"))}catch(c){try{f=new a("ShockwaveFlash.ShockwaveFlash.6"),i=!0,l="6.0.21"}catch(c){try{f=new a("ShockwaveFlash.ShockwaveFlash"),i=!0,l=b(f.GetVariable("$version"))}catch(a){j=!1}}}}N.disabled=!0!==i,N.outdated=l&&r(l)<r(O),N.version=l||"0.0.0",N.pluginType=k?"pepper":j?"activex":i?"netscape":"unknown"};Ua(o),Ta(!0);var Va=function(){if(!(this instanceof Va))return new Va;"function"==typeof Va._createClient&&Va._createClient.apply(this,z(arguments))};v(Va,"version",{value:"2.2.0",writable:!1,configurable:!0,enumerable:!0}),Va.config=function(){return $.apply(this,z(arguments))},Va.state=function(){return _.apply(this,z(arguments))},Va.isFlashUnusable=function(){return aa.apply(this,z(arguments))},Va.on=function(){return ba.apply(this,z(arguments))},Va.off=function(){return ca.apply(this,z(arguments))},Va.handlers=function(){return da.apply(this,z(arguments))},Va.emit=function(){return ea.apply(this,z(arguments))},Va.create=function(){return fa.apply(this,z(arguments))},Va.destroy=function(){return ga.apply(this,z(arguments))},Va.setData=function(){return ha.apply(this,z(arguments))},Va.clearData=function(){return ia.apply(this,z(arguments))},Va.getData=function(){return ja.apply(this,z(arguments))},Va.focus=Va.activate=function(){return ka.apply(this,z(arguments))},Va.blur=Va.deactivate=function(){return la.apply(this,z(arguments))},Va.activeElement=function(){return ma.apply(this,z(arguments))};var Wa=0,Xa={},Ya=0,Za={},$a={};A(Z,{autoActivate:!0});var _a=function(a){var b=this;b.id=""+Wa++,Xa[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Va.on("*",function(a){return b.emit(a)}),Va.on("destroy",function(){b.destroy()}),Va.create()},ab=function(a,d){var e,f,g,h={},i=Xa[this.id],j=i&&i.handlers;if(!i)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");if("string"==typeof a&&a)g=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&void 0===d)for(e in a)w.call(a,e)&&"string"==typeof e&&e&&"function"==typeof a[e]&&this.on(e,a[e]);if(g&&g.length){for(e=0,f=g.length;e<f;e++)a=g[e].replace(/^on/,""),h[a]=!0,j[a]||(j[a]=[]),j[a].push(d);if(h.ready&&N.ready&&this.emit({type:"ready",client:this}),h.error){for(e=0,f=W.length;e<f;e++)if(N[W[e].replace(/^flash-/,"")]){this.emit({type:"error",name:W[e],client:this});break}c!==b&&Va.version!==c&&this.emit({type:"error",name:"version-mismatch",jsVersion:Va.version,swfVersion:c})}}return this},bb=function(a,b){var c,d,e,f,g,h=Xa[this.id],i=h&&h.handlers;if(!i)return this;if(0===arguments.length)f=u(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&void 0===b)for(c in a)w.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;c<d;c++)if(a=f[c].toLowerCase().replace(/^on/,""),(g=i[a])&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return this},cb=function(a){var b=null,c=Xa[this.id]&&Xa[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:B(c)),b},db=function(a){if(ib.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=A({},a));var b=A({},oa(a),{client:this});jb.call(this,b)}return this},eb=function(a){if(!Xa[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");a=kb(a);for(var b=0;b<a.length;b++)if(w.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===Za[a[b].zcClippingId].indexOf(this.id)&&Za[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Ya++,Za[a[b].zcClippingId]=[this.id],!0===Z.autoActivate&&lb(a[b]));var c=Xa[this.id]&&Xa[this.id].elements;-1===c.indexOf(a[b])&&c.push(a[b])}return this},fb=function(a){var b=Xa[this.id];if(!b)return this;var c,d=b.elements;a=void 0===a?d.slice(0):kb(a);for(var e=a.length;e--;)if(w.call(a,e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=d.indexOf(a[e],c));)d.splice(c,1);var f=Za[a[e].zcClippingId];if(f){for(c=0;-1!==(c=f.indexOf(this.id,c));)f.splice(c,1);0===f.length&&(!0===Z.autoActivate&&mb(a[e]),delete a[e].zcClippingId)}}return this},gb=function(){var a=Xa[this.id];return a&&a.elements?a.elements.slice(0):[]},hb=function(){Xa[this.id]&&(this.unclip(),this.off(),delete Xa[this.id])},ib=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Xa[this.id],c=b&&b.elements,d=!!c&&c.length>0,e=!a.target||d&&-1!==c.indexOf(a.target),f=a.relatedTarget&&d&&-1!==c.indexOf(a.relatedTarget),g=a.client&&a.client===this;return!(!b||!(e||f||g))},jb=function(a){var b=Xa[this.id];if("object"==typeof a&&a&&a.type&&b){var c=ra(a),d=b&&b.handlers["*"]||[],e=b&&b.handlers[a.type]||[],g=d.concat(e);if(g&&g.length){var h,i,j,k,l,m=this;for(h=0,i=g.length;h<i;h++)j=g[h],k=m,"string"==typeof j&&"function"==typeof f[j]&&(j=f[j]),"object"==typeof j&&j&&"function"==typeof j.handleEvent&&(k=j,j=j.handleEvent),"function"==typeof j&&(l=A({},a),sa(j,k,[l],c))}}},kb=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},lb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=f.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},c=function(c){(c||(c=f.event))&&(b(c),Va.focus(a))};a.addEventListener("mouseover",c,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),$a[a.zcClippingId]={mouseover:c,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},mb=function(a){if(a&&1===a.nodeType){var b=$a[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;f<g;f++)c="mouse"+e[f],"function"==typeof(d=b[c])&&a.removeEventListener(c,d,!1);delete $a[a.zcClippingId]}}};Va._createClient=function(){_a.apply(this,z(arguments))},Va.prototype.on=function(){return ab.apply(this,z(arguments))},Va.prototype.off=function(){return bb.apply(this,z(arguments))},Va.prototype.handlers=function(){return cb.apply(this,z(arguments))},Va.prototype.emit=function(){return db.apply(this,z(arguments))},Va.prototype.clip=function(){return eb.apply(this,z(arguments))},Va.prototype.unclip=function(){return fb.apply(this,z(arguments))},Va.prototype.elements=function(){return gb.apply(this,z(arguments))},Va.prototype.destroy=function(){return hb.apply(this,z(arguments))},Va.prototype.setText=function(a){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData("text/plain",a),this},Va.prototype.setHtml=function(a){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData("text/html",a),this},Va.prototype.setRichText=function(a){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData("application/rtf",a),this},Va.prototype.setData=function(){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData.apply(this,z(arguments)),this},Va.prototype.clearData=function(){if(!Xa[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");return Va.clearData.apply(this,z(arguments)),this},Va.prototype.getData=function(){if(!Xa[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");return Va.getData.apply(this,z(arguments))},"function"==typeof define&&define.amd?define(function(){return Va}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Va:a.ZeroClipboard=Va}(function(){return this||window}());