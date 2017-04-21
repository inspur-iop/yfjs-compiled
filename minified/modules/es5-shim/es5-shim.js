!function(){"use strict";var a=function(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:new Function("return this;")()},b=a();(function(a){var b,c,d=Array,e=d.prototype,f=Object,g=f.prototype,h=Function,i=h.prototype,j=String,k=j.prototype,l=Number,m=l.prototype,n=e.slice,o=e.splice,p=e.push,q=e.unshift,r=e.concat,s=e.join,t=i.call,u=i.apply,v=Math.max,w=Math.min,x=g.toString,y="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,z=Function.prototype.toString,A=/^\s*class /,B=function(a){try{var b=z.call(a),c=b.replace(/\/\/.*\n/g,""),d=c.replace(/\/\*[.\s\S]*\*\//g,""),e=d.replace(/\n/gm," ").replace(/ {2}/g," ");return A.test(e)}catch(a){return!1}},C=function(a){try{return!B(a)&&(z.call(a),!0)}catch(a){return!1}},D="[object Function]",E="[object GeneratorFunction]",b=function(a){if(!a)return!1;if("function"!=typeof a&&"object"!=typeof a)return!1;if(y)return C(a);if(B(a))return!1;var b=x.call(a);return b===D||b===E},F=RegExp.prototype.exec,G=function(a){try{return F.call(a),!0}catch(a){return!1}};c=function(a){return"object"==typeof a&&(y?G(a):"[object RegExp]"===x.call(a))};var H,I=String.prototype.valueOf,J=function(a){try{return I.call(a),!0}catch(a){return!1}};H=function(a){return"string"==typeof a||"object"==typeof a&&(y?J(a):"[object String]"===x.call(a))};var K=f.defineProperty&&function(){try{var a={};f.defineProperty(a,"x",{enumerable:!1,value:a});for(var b in a)return!1;return a.x===a}catch(a){return!1}}(),L=function(a){var b;return b=K?function(a,b,c,d){!d&&b in a||f.defineProperty(a,b,{configurable:!0,enumerable:!1,writable:!0,value:c})}:function(a,b,c,d){!d&&b in a||(a[b]=c)},function(c,d,e){for(var f in d)a.call(d,f)&&b(c,f,d[f],e)}}(g.hasOwnProperty),M=function(a){var b=typeof a;return null===a||"object"!==b&&"function"!==b},N=l.isNaN||function(a){return a!==a},O={ToInteger:function(a){var b=+a;return N(b)?b=0:0!==b&&b!==1/0&&b!==-1/0&&(b=(b>0||-1)*Math.floor(Math.abs(b))),b},ToPrimitive:function(a){var c,d,e;if(M(a))return a;if(d=a.valueOf,b(d)&&(c=d.call(a),M(c)))return c;if(e=a.toString,b(e)&&(c=e.call(a),M(c)))return c;throw new TypeError},ToObject:function(a){if(null==a)throw new TypeError("can't convert "+a+" to object");return f(a)},ToUint32:function(a){return a>>>0}},P=function(){};L(i,{bind:function(a){var c=this;if(!b(c))throw new TypeError("Function.prototype.bind called on incompatible "+c);for(var d,e=n.call(arguments,1),g=function(){if(this instanceof d){var b=u.call(c,this,r.call(e,n.call(arguments)));return f(b)===b?b:this}return u.call(c,a,r.call(e,n.call(arguments)))},i=v(0,c.length-e.length),j=[],k=0;k<i;k++)p.call(j,"$"+k);return d=h("binder","return function ("+s.call(j,",")+"){ return binder.apply(this, arguments); }")(g),c.prototype&&(P.prototype=c.prototype,d.prototype=new P,P.prototype=null),d}});var Q=t.bind(g.hasOwnProperty),R=t.bind(g.toString),S=t.bind(n),T=u.bind(n),U=t.bind(k.slice),V=t.bind(k.split),W=t.bind(k.indexOf),X=t.bind(p),Y=t.bind(g.propertyIsEnumerable),Z=t.bind(e.sort),$=d.isArray||function(a){return"[object Array]"===R(a)},_=1!==[].unshift(0);L(e,{unshift:function(){return q.apply(this,arguments),this.length}},_),L(d,{isArray:$});var aa=f("a"),ba="a"!==aa[0]||!(0 in aa),ca=function(a){var b=!0,c=!0,d=!1;if(a)try{a.call("foo",function(a,c,d){"object"!=typeof d&&(b=!1)}),a.call([1],function(){c="string"==typeof this},"x")}catch(a){d=!0}return!!a&&!d&&b&&c};L(e,{forEach:function(a){var c,d=O.ToObject(this),e=ba&&H(this)?V(this,""):d,f=-1,g=O.ToUint32(e.length);if(arguments.length>1&&(c=arguments[1]),!b(a))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++f<g;)f in e&&(void 0===c?a(e[f],f,d):a.call(c,e[f],f,d))}},!ca(e.forEach)),L(e,{map:function(a){var c,e=O.ToObject(this),f=ba&&H(this)?V(this,""):e,g=O.ToUint32(f.length),h=d(g);if(arguments.length>1&&(c=arguments[1]),!b(a))throw new TypeError("Array.prototype.map callback must be a function");for(var i=0;i<g;i++)i in f&&(h[i]=void 0===c?a(f[i],i,e):a.call(c,f[i],i,e));return h}},!ca(e.map)),L(e,{filter:function(a){var c,d,e=O.ToObject(this),f=ba&&H(this)?V(this,""):e,g=O.ToUint32(f.length),h=[];if(arguments.length>1&&(d=arguments[1]),!b(a))throw new TypeError("Array.prototype.filter callback must be a function");for(var i=0;i<g;i++)i in f&&(c=f[i],(void 0===d?a(c,i,e):a.call(d,c,i,e))&&X(h,c));return h}},!ca(e.filter)),L(e,{every:function(a){var c,d=O.ToObject(this),e=ba&&H(this)?V(this,""):d,f=O.ToUint32(e.length);if(arguments.length>1&&(c=arguments[1]),!b(a))throw new TypeError("Array.prototype.every callback must be a function");for(var g=0;g<f;g++)if(g in e&&!(void 0===c?a(e[g],g,d):a.call(c,e[g],g,d)))return!1;return!0}},!ca(e.every)),L(e,{some:function(a){var c,d=O.ToObject(this),e=ba&&H(this)?V(this,""):d,f=O.ToUint32(e.length);if(arguments.length>1&&(c=arguments[1]),!b(a))throw new TypeError("Array.prototype.some callback must be a function");for(var g=0;g<f;g++)if(g in e&&(void 0===c?a(e[g],g,d):a.call(c,e[g],g,d)))return!0;return!1}},!ca(e.some));var da=!1;e.reduce&&(da="object"==typeof e.reduce.call("es5",function(a,b,c,d){return d})),L(e,{reduce:function(a){var c=O.ToObject(this),d=ba&&H(this)?V(this,""):c,e=O.ToUint32(d.length);if(!b(a))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===e&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var f,g=0;if(arguments.length>=2)f=arguments[1];else for(;;){if(g in d){f=d[g++];break}if(++g>=e)throw new TypeError("reduce of empty array with no initial value")}for(;g<e;g++)g in d&&(f=a(f,d[g],g,c));return f}},!da);var ea=!1;e.reduceRight&&(ea="object"==typeof e.reduceRight.call("es5",function(a,b,c,d){return d})),L(e,{reduceRight:function(a){var c=O.ToObject(this),d=ba&&H(this)?V(this,""):c,e=O.ToUint32(d.length);if(!b(a))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===e&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var f,g=e-1;if(arguments.length>=2)f=arguments[1];else for(;;){if(g in d){f=d[g--];break}if(--g<0)throw new TypeError("reduceRight of empty array with no initial value")}if(g<0)return f;do{g in d&&(f=a(f,d[g],g,c))}while(g--);return f}},!ea);var fa=e.indexOf&&-1!==[0,1].indexOf(1,2);L(e,{indexOf:function(a){var b=ba&&H(this)?V(this,""):O.ToObject(this),c=O.ToUint32(b.length);if(0===c)return-1;var d=0;for(arguments.length>1&&(d=O.ToInteger(arguments[1])),d=d>=0?d:v(0,c+d);d<c;d++)if(d in b&&b[d]===a)return d;return-1}},fa);var ga=e.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);L(e,{lastIndexOf:function(a){var b=ba&&H(this)?V(this,""):O.ToObject(this),c=O.ToUint32(b.length);if(0===c)return-1;var d=c-1;for(arguments.length>1&&(d=w(d,O.ToInteger(arguments[1]))),d=d>=0?d:c-Math.abs(d);d>=0;d--)if(d in b&&a===b[d])return d;return-1}},ga);var ha=function(){var a=[1,2],b=a.splice();return 2===a.length&&$(b)&&0===b.length}();L(e,{splice:function(a,b){return 0===arguments.length?[]:o.apply(this,arguments)}},!ha);var ia=function(){var a={};return e.splice.call(a,0,0,1),1===a.length}();L(e,{splice:function(a,b){if(0===arguments.length)return[];var c=arguments;return this.length=v(O.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof b&&(c=S(arguments),c.length<2?X(c,this.length-a):c[1]=O.ToInteger(b)),o.apply(this,c)}},!ia);var ja=function(){var a=new d(1e5);return a[8]="x",a.splice(1,1),7===a.indexOf("x")}(),ka=function(){var a=256,b=[];return b[a]="a",b.splice(a+1,0,"b"),"a"===b[a]}();L(e,{splice:function(a,b){for(var c,d=O.ToObject(this),e=[],f=O.ToUint32(d.length),g=O.ToInteger(a),h=g<0?v(f+g,0):w(g,f),i=w(v(O.ToInteger(b),0),f-h),k=0;k<i;)c=j(h+k),Q(d,c)&&(e[k]=d[c]),k+=1;var l,m=S(arguments,2),n=m.length;if(n<i){k=h;for(var o=f-i;k<o;)c=j(k+i),l=j(k+n),Q(d,c)?d[l]=d[c]:delete d[l],k+=1;k=f;for(var p=f-i+n;k>p;)delete d[k-1],k-=1}else if(n>i)for(k=f-i;k>h;)c=j(k+i-1),l=j(k+n-1),Q(d,c)?d[l]=d[c]:delete d[l],k-=1;k=h;for(var q=0;q<m.length;++q)d[k]=m[q],k+=1;return d.length=f-i+n,e}},!ja||!ka);var la,ma=e.join;try{la="1,2,3"!==Array.prototype.join.call("123",",")}catch(a){la=!0}la&&L(e,{join:function(a){var b=void 0===a?",":a;return ma.call(H(this)?V(this,""):this,b)}},la);var na="1,2"!==[1,2].join(void 0);na&&L(e,{join:function(a){var b=void 0===a?",":a;return ma.call(this,b)}},na);var oa=function(a){for(var b=O.ToObject(this),c=O.ToUint32(b.length),d=0;d<arguments.length;)b[c+d]=arguments[d],d+=1;return b.length=c+d,c+d},pa=function(){var a={};return 1!==Array.prototype.push.call(a,void 0)||1!==a.length||void 0!==a[0]||!Q(a,0)}();L(e,{push:function(a){return $(this)?p.apply(this,arguments):oa.apply(this,arguments)}},pa);var qa=function(){var a=[];return 1!==a.push(void 0)||1!==a.length||void 0!==a[0]||!Q(a,0)}();L(e,{push:oa},qa),L(e,{slice:function(a,b){var c=H(this)?V(this,""):this;return T(c,arguments)}},ba);var ra=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(a){}return!1}(),sa=function(){try{return[1,2].sort(/a/),!1}catch(a){}return!0}(),ta=function(){try{return[1,2].sort(void 0),!0}catch(a){}return!1}();L(e,{sort:function(a){if(void 0===a)return Z(this);if(!b(a))throw new TypeError("Array.prototype.sort callback must be a function");return Z(this,a)}},ra||!ta||!sa);var ua=!Y({toString:null},"toString"),va=Y(function(){},"prototype"),wa=!Q("x","0"),xa=function(a){var b=a.constructor;return b&&b.prototype===a},ya={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0,$width:!0,$height:!0},za=function(){if("undefined"==typeof window)return!1;for(var a in window)try{!ya["$"+a]&&Q(window,a)&&null!==window[a]&&"object"==typeof window[a]&&xa(window[a])}catch(a){return!0}return!1}(),Aa=function(a){if("undefined"==typeof window||!za)return xa(a);try{return xa(a)}catch(a){return!1}},Ba=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Ca=Ba.length,Da=function(a){return"[object Arguments]"===R(a)},Ea=function(a){return null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&!$(a)&&b(a.callee)},Fa=Da(arguments)?Da:Ea;L(f,{keys:function(a){var c=b(a),d=Fa(a),e=null!==a&&"object"==typeof a,f=e&&H(a);if(!e&&!c&&!d)throw new TypeError("Object.keys called on a non-object");var g=[],h=va&&c;if(f&&wa||d)for(var i=0;i<a.length;++i)X(g,j(i));if(!d)for(var k in a)h&&"prototype"===k||!Q(a,k)||X(g,j(k));if(ua)for(var l=Aa(a),m=0;m<Ca;m++){var n=Ba[m];l&&"constructor"===n||!Q(a,n)||X(g,n)}return g}});var Ga=f.keys&&function(){return 2===f.keys(arguments).length}(1,2),Ha=f.keys&&function(){var a=f.keys(arguments);return 1!==arguments.length||1!==a.length||1!==a[0]}(1),Ia=f.keys;L(f,{keys:function(a){return Ia(Fa(a)?S(a):a)}},!Ga||Ha);var Ja,Ka,La=0!==new Date(-0xc782b5b342b24).getUTCMonth(),Ma=new Date(-0x55d318d56a724),Na=new Date(14496624e5),Oa="Mon, 01 Jan -45875 11:59:59 GMT"!==Ma.toUTCString();Ma.getTimezoneOffset()<-720?(Ja="Tue Jan 02 -45875"!==Ma.toDateString(),Ka=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Na.toString())):(Ja="Mon Jan 01 -45875"!==Ma.toDateString(),Ka=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Na.toString()));var Pa=t.bind(Date.prototype.getFullYear),Qa=t.bind(Date.prototype.getMonth),Ra=t.bind(Date.prototype.getDate),Sa=t.bind(Date.prototype.getUTCFullYear),Ta=t.bind(Date.prototype.getUTCMonth),Ua=t.bind(Date.prototype.getUTCDate),Va=t.bind(Date.prototype.getUTCDay),Wa=t.bind(Date.prototype.getUTCHours),Xa=t.bind(Date.prototype.getUTCMinutes),Ya=t.bind(Date.prototype.getUTCSeconds),Za=t.bind(Date.prototype.getUTCMilliseconds),$a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ab=function(a,b){return Ra(new Date(b,a,0))};L(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Pa(this);return a<0&&Qa(this)>11?a+1:a},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Pa(this),b=Qa(this);return a<0&&b>11?0:b},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Pa(this),b=Qa(this),c=Ra(this);if(a<0&&b>11){if(12===b)return c;return ab(0,a+1)-c+1}return c},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Sa(this);return a<0&&Ta(this)>11?a+1:a},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Sa(this),b=Ta(this);return a<0&&b>11?0:b},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Sa(this),b=Ta(this),c=Ua(this);if(a<0&&b>11){if(12===b)return c;return ab(0,a+1)-c+1}return c}},La),L(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=Va(this),b=Ua(this),c=Ta(this),d=Sa(this),e=Wa(this),f=Xa(this),g=Ya(this);return $a[a]+", "+(b<10?"0"+b:b)+" "+_a[c]+" "+d+" "+(e<10?"0"+e:e)+":"+(f<10?"0"+f:f)+":"+(g<10?"0"+g:g)+" GMT"}},La||Oa),L(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=this.getDay(),b=this.getDate(),c=this.getMonth(),d=this.getFullYear();return $a[a]+" "+_a[c]+" "+(b<10?"0"+b:b)+" "+d}},La||Ja),(La||Ka)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var a=this.getDay(),b=this.getDate(),c=this.getMonth(),d=this.getFullYear(),e=this.getHours(),f=this.getMinutes(),g=this.getSeconds(),h=this.getTimezoneOffset(),i=Math.floor(Math.abs(h)/60),j=Math.floor(Math.abs(h)%60);return $a[a]+" "+_a[c]+" "+(b<10?"0"+b:b)+" "+d+" "+(e<10?"0"+e:e)+":"+(f<10?"0"+f:f)+":"+(g<10?"0"+g:g)+" GMT"+(h>0?"-":"+")+(i<10?"0"+i:i)+(j<10?"0"+j:j)},K&&f.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var bb=-621987552e5,cb="-000001",db=Date.prototype.toISOString&&-1===new Date(bb).toISOString().indexOf(cb),eb=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString(),fb=t.bind(Date.prototype.getTime);L(Date.prototype,{toISOString:function(){if(!isFinite(this)||!isFinite(fb(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var a=Sa(this),b=Ta(this);a+=Math.floor(b/12),b=(b%12+12)%12;var c=[b+1,Ua(this),Wa(this),Xa(this),Ya(this)];a=(a<0?"-":a>9999?"+":"")+U("00000"+Math.abs(a),0<=a&&a<=9999?-4:-6);for(var d=0;d<c.length;++d)c[d]=U("00"+c[d],-2);return a+"-"+S(c,0,2).join("-")+"T"+S(c,2).join(":")+"."+U("000"+Za(this),-3)+"Z"}},db||eb),function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(bb).toJSON().indexOf(cb)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(a){return!1}}()||(Date.prototype.toJSON=function(a){var c=f(this),d=O.ToPrimitive(c);if("number"==typeof d&&!isFinite(d))return null;var e=c.toISOString;if(!b(e))throw new TypeError("toISOString property is not callable");return e.call(c)});var gb=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),hb=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));if(isNaN(Date.parse("2000-01-01T00:00:00.000Z"))||hb||!gb){var ib=Math.pow(2,31)-1,jb=N(new Date(1970,0,1,0,0,0,ib+1).getTime());Date=function(a){var b=function(c,d,e,f,g,h,i){var k,l=arguments.length;if(this instanceof a){var m=h,n=i;if(jb&&l>=7&&i>ib){var o=Math.floor(i/ib)*ib,p=Math.floor(o/1e3);m+=p,n-=1e3*p}k=1===l&&j(c)===c?new a(b.parse(c)):l>=7?new a(c,d,e,f,g,m,n):l>=6?new a(c,d,e,f,g,m):l>=5?new a(c,d,e,f,g):l>=4?new a(c,d,e,f):l>=3?new a(c,d,e):l>=2?new a(c,d):l>=1?new a(c instanceof a?+c:c):new a}else k=a.apply(this,arguments);return M(k)||L(k,{constructor:b},!0),k},c=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),d=[0,31,59,90,120,151,181,212,243,273,304,334,365],e=function(a,b){var c=b>1?1:0;return d[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)},f=function(b){var c=0,d=b;if(jb&&d>ib){var e=Math.floor(d/ib)*ib,f=Math.floor(e/1e3);c+=f,d-=1e3*f}return l(new a(1970,0,1,0,0,c,d))};for(var g in a)Q(a,g)&&(b[g]=a[g]);return L(b,{now:a.now,UTC:a.UTC},!0),b.prototype=a.prototype,L(b.prototype,{constructor:b},!0),L(b,{parse:function(b){var d=c.exec(b);if(d){var g,h=l(d[1]),i=l(d[2]||1)-1,j=l(d[3]||1)-1,k=l(d[4]||0),m=l(d[5]||0),n=l(d[6]||0),o=Math.floor(1e3*l(d[7]||0)),p=Boolean(d[4]&&!d[8]),q="-"===d[9]?1:-1,r=l(d[10]||0),s=l(d[11]||0);return k<(m>0||n>0||o>0?24:25)&&m<60&&n<60&&o<1e3&&i>-1&&i<12&&r<24&&s<60&&j>-1&&j<e(h,i+1)-e(h,i)&&(g=60*(24*(e(h,i)+j)+k+r*q),g=1e3*(60*(g+m+s*q)+n)+o,p&&(g=f(g)),-864e13<=g&&g<=864e13)?g:NaN}return a.parse.apply(this,arguments)}}),b}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var kb=m.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0)),lb={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(a,b){for(var c=-1,d=b;++c<lb.size;)d+=a*lb.data[c],lb.data[c]=d%lb.base,d=Math.floor(d/lb.base)},divide:function(a){for(var b=lb.size,c=0;--b>=0;)c+=lb.data[b],lb.data[b]=Math.floor(c/a),c=c%a*lb.base},numToString:function(){for(var a=lb.size,b="";--a>=0;)if(""!==b||0===a||0!==lb.data[a]){var c=j(lb.data[a]);""===b?b=c:b+=U("0000000",0,7-c.length)+c}return b},pow:function a(b,c,d){return 0===c?d:c%2==1?a(b,c-1,d*b):a(b*b,c/2,d)},log:function(a){for(var b=0,c=a;c>=4096;)b+=12,c/=4096;for(;c>=2;)b+=1,c/=2;return b}};L(m,{toFixed:function(a){var b,c,d,e,f,g,h,i;if(b=l(a),(b=N(b)?0:Math.floor(b))<0||b>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(c=l(this),N(c))return"NaN";if(c<=-1e21||c>=1e21)return j(c);if(d="",c<0&&(d="-",c=-c),e="0",c>1e-21)if(f=lb.log(c*lb.pow(2,69,1))-69,g=f<0?c*lb.pow(2,-f,1):c/lb.pow(2,f,1),g*=4503599627370496,(f=52-f)>0){for(lb.multiply(0,g),h=b;h>=7;)lb.multiply(1e7,0),h-=7;for(lb.multiply(lb.pow(10,h,1),0),h=f-1;h>=23;)lb.divide(1<<23),h-=23;lb.divide(1<<h),lb.multiply(1,1),lb.divide(2),e=lb.numToString()}else lb.multiply(0,g),lb.multiply(1<<-f,0),e=lb.numToString()+U("0.00000000000000000000",2,2+b);return b>0?(i=e.length,e=i<=b?d+U("0.0000000000000000000",0,b-i+2)+e:d+U(e,0,i-b)+"."+U(e,i-b)):e=d+e,e}},kb);var mb=function(){try{return"1"===1..toPrecision(void 0)}catch(a){return!0}}(),nb=m.toPrecision;L(m,{toPrecision:function(a){return void 0===a?nb.call(this):nb.call(this,a)}},mb),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var a=void 0===/()??/.exec("")[1],b=Math.pow(2,32)-1;k.split=function(d,e){var f=String(this);if(void 0===d&&0===e)return[];if(!c(d))return V(this,d,e);var g,h,i,j,k=[],l=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(d.sticky?"y":""),m=0,n=new RegExp(d.source,l+"g");a||(g=new RegExp("^"+n.source+"$(?!\\s)",l));var o=void 0===e?b:O.ToUint32(e);for(h=n.exec(f);h&&!((i=h.index+h[0].length)>m&&(X(k,U(f,m,h.index)),!a&&h.length>1&&h[0].replace(g,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(h[a]=void 0)}),h.length>1&&h.index<f.length&&p.apply(k,S(h,1)),j=h[0].length,m=i,k.length>=o));)n.lastIndex===h.index&&n.lastIndex++,h=n.exec(f);return m===f.length?!j&&n.test("")||X(k,""):X(k,U(f,m)),k.length>o?S(k,0,o):k}}():"0".split(void 0,0).length&&(k.split=function(a,b){return void 0===a&&0===b?[]:V(this,a,b)});var ob=k.replace;(function(){var a=[];return"x".replace(/x(.)?/g,function(b,c){X(a,c)}),1===a.length&&void 0===a[0]})()||(k.replace=function(a,d){var e=b(d),f=c(a)&&/\)[*?]/.test(a.source);if(e&&f){var g=function(b){var c=arguments.length,e=a.lastIndex;a.lastIndex=0;var f=a.exec(b)||[];return a.lastIndex=e,X(f,arguments[c-2],arguments[c-1]),d.apply(this,f)};return ob.call(this,a,g)}return ob.call(this,a,d)});var pb=k.substr,qb="".substr&&"b"!=="0b".substr(-1);L(k,{substr:function(a,b){var c=a;return a<0&&(c=v(this.length+a,0)),pb.call(this,c,b)}},qb);var rb="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",sb="​",tb="["+rb+"]",ub=new RegExp("^"+tb+tb+"*"),vb=new RegExp(tb+tb+"*$"),wb=k.trim&&(rb.trim()||!sb.trim());L(k,{trim:function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return j(this).replace(ub,"").replace(vb,"")}},wb);var xb=t.bind(String.prototype.trim),yb=k.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);L(k,{lastIndexOf:function(a){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");for(var b=j(this),c=j(a),d=arguments.length>1?l(arguments[1]):NaN,e=N(d)?1/0:O.ToInteger(d),f=w(v(e,0),b.length),g=c.length,h=f+g;h>0;){h=v(0,h-g);var i=W(U(b,h,f+g),c);if(-1!==i)return h+i}return-1}},yb);var zb=k.lastIndexOf;if(L(k,{lastIndexOf:function(a){return zb.apply(this,arguments)}},1!==k.lastIndexOf.length),8===parseInt(rb+"08")&&22===parseInt(rb+"0x16")||(parseInt=function(a){var b=/^[\-+]?0[xX]/;return function(c,d){var e=xb(String(c)),f=l(d)||(b.test(e)?16:10);return a(e,f)}}(parseInt)),1/parseFloat("-0")!=-1/0&&(parseFloat=function(a){return function(b){var c=xb(String(b)),d=a(c);return 0===d&&"-"===U(c,0,1)?-0:d}}(parseFloat)),"RangeError: test"!==String(new RangeError("test"))){var Ab=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");var a=this.name;void 0===a?a="Error":"string"!=typeof a&&(a=j(a));var b=this.message;return void 0===b?b="":"string"!=typeof b&&(b=j(b)),a?b?a+": "+b:a:b};Error.prototype.toString=Ab}if(K){var Bb=function(a,b){if(Y(a,b)){var c=Object.getOwnPropertyDescriptor(a,b);c.configurable&&(c.enumerable=!1,Object.defineProperty(a,b,c))}};Bb(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),Bb(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){var Cb=function(){var a="/"+this.source+"/";return this.global&&(a+="g"),this.ignoreCase&&(a+="i"),this.multiline&&(a+="m"),a};RegExp.prototype.toString=Cb}})(b),function(a){var b,c,d,e,f=Function.call,g=Object.prototype,h=f.bind(g.hasOwnProperty),i=f.bind(g.propertyIsEnumerable),j=f.bind(g.toString),k=h(g,"__defineGetter__");k&&(b=f.bind(g.__defineGetter__),c=f.bind(g.__defineSetter__),d=f.bind(g.__lookupGetter__),e=f.bind(g.__lookupSetter__));var l=function(a){return null==a||"object"!=typeof a&&"function"!=typeof a};Object.getPrototypeOf||(Object.getPrototypeOf=function(a){var b=a.__proto__;return b||null===b?b:"[object Function]"===j(a.constructor)?a.constructor.prototype:a instanceof Object?g:null});var m=function(a){try{return a.sentinel=0,0===Object.getOwnPropertyDescriptor(a,"sentinel").value}catch(a){return!1}};if(Object.defineProperty){var n=m({});if(!("undefined"==typeof document||m(document.createElement("div")))||!n)var o=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||o){Object.getOwnPropertyDescriptor=function(a,b){if(l(a))throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(o)try{return o.call(Object,a,b)}catch(a){}var c;if(!h(a,b))return c;if(c={enumerable:i(a,b),configurable:!0},k){var f=a.__proto__,j=a!==g;j&&(a.__proto__=g);var m=d(a,b),n=e(a,b);if(j&&(a.__proto__=f),m||n)return m&&(c.get=m),n&&(c.set=n),c}return c.value=a[b],c.writable=!0,c}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(a){return Object.keys(a)}),!Object.create){var p,q=!({__proto__:null}instanceof Object),r=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(a){return!1}},s=function(){var a,b;b=new ActiveXObject("htmlfile");var c="script";return b.write("<"+c+"></"+c+">"),b.close(),a=b.parentWindow.Object.prototype,b=null,a},t=function(){var a,b=document.createElement("iframe"),c=document.body||document.documentElement;return b.style.display="none",c.appendChild(b),b.src="javascript:",a=b.contentWindow.Object.prototype,c.removeChild(b),b=null,a};p=q||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var a=r()?s():t();delete a.constructor,delete a.hasOwnProperty,delete a.propertyIsEnumerable,delete a.isPrototypeOf,delete a.toLocaleString,delete a.toString,delete a.valueOf;var b=function(){};return b.prototype=a,p=function(){return new b},new b},Object.create=function(a,b){var c,d=function(){};if(null===a)c=p();else{if(null!==a&&l(a))throw new TypeError("Object prototype may only be an Object or null");d.prototype=a,c=new d,c.__proto__=a}return void 0!==b&&Object.defineProperties(c,b),c}}var u=function(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(a){return!1}};if(Object.defineProperty){var v=u({}),w="undefined"==typeof document||u(document.createElement("div"));if(!v||!w)var x=Object.defineProperty,y=Object.defineProperties}if(!Object.defineProperty||x){Object.defineProperty=function(a,f,h){if(l(a))throw new TypeError("Object.defineProperty called on non-object: "+a);if(l(h))throw new TypeError("Property description must be an object: "+h);if(x)try{return x.call(Object,a,f,h)}catch(a){}if("value"in h)if(k&&(d(a,f)||e(a,f))){var i=a.__proto__;a.__proto__=g,delete a[f],a[f]=h.value,a.__proto__=i}else a[f]=h.value;else{var j="get"in h,m="set"in h;if(!k&&(j||m))throw new TypeError("getters & setters can not be defined on this javascript engine");j&&b(a,f,h.get),m&&c(a,f,h.set)}return a}}Object.defineProperties&&!y||(Object.defineProperties=function(a,b){if(y)try{return y.call(Object,a,b)}catch(a){}return Object.keys(b).forEach(function(c){"__proto__"!==c&&Object.defineProperty(a,c,b[c])}),a}),Object.seal||(Object.seal=function(a){if(Object(a)!==a)throw new TypeError("Object.seal can only be called on Objects.");return a}),Object.freeze||(Object.freeze=function(a){if(Object(a)!==a)throw new TypeError("Object.freeze can only be called on Objects.");return a});try{Object.freeze(function(){})}catch(a){Object.freeze=function(a){return function(b){return"function"==typeof b?b:a(b)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(a){if(Object(a)!==a)throw new TypeError("Object.preventExtensions can only be called on Objects.");return a}),Object.isSealed||(Object.isSealed=function(a){if(Object(a)!==a)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(a){if(Object(a)!==a)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(a){if(Object(a)!==a)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var b="";h(a,b);)b+="?";a[b]=!0;var c=h(a,b);return delete a[b],c})}(),"object"==typeof module&&module.exports&&(module.exports=b),"function"==typeof define&&define.amd&&define("es5-shim",function(){return b})}();