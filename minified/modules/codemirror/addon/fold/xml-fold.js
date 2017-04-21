!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a,b){return a.line-b.line||a.ch-b.ch}function c(a,b,c,d){this.line=b,this.ch=c,this.cm=a,this.text=a.getLine(b),this.min=d?d.from:a.firstLine(),this.max=d?d.to-1:a.lastLine()}function d(a,b){var c=a.cm.getTokenTypeAt(m(a.line,b));return c&&/\btag\b/.test(c)}function e(a){if(!(a.line>=a.max))return a.ch=0,a.text=a.cm.getLine(++a.line),!0}function f(a){if(!(a.line<=a.min))return a.text=a.cm.getLine(--a.line),a.ch=a.text.length,!0}function g(a){for(;;){var b=a.text.indexOf(">",a.ch);if(-1==b){if(e(a))continue;return}{if(d(a,b+1)){var c=a.text.lastIndexOf("/",b),f=c>-1&&!/\S/.test(a.text.slice(c+1,b));return a.ch=b+1,f?"selfClose":"regular"}a.ch=b+1}}}function h(a){for(;;){var b=a.ch?a.text.lastIndexOf("<",a.ch-1):-1;if(-1==b){if(f(a))continue;return}if(d(a,b+1)){p.lastIndex=b,a.ch=b;var c=p.exec(a.text);if(c&&c.index==b)return c}else a.ch=b}}function i(a){for(;;){p.lastIndex=a.ch;var b=p.exec(a.text);if(!b){if(e(a))continue;return}{if(d(a,b.index+1))return a.ch=b.index+b[0].length,b;a.ch=b.index+1}}}function j(a){for(;;){var b=a.ch?a.text.lastIndexOf(">",a.ch-1):-1;if(-1==b){if(f(a))continue;return}{if(d(a,b+1)){var c=a.text.lastIndexOf("/",b),e=c>-1&&!/\S/.test(a.text.slice(c+1,b));return a.ch=b+1,e?"selfClose":"regular"}a.ch=b}}}function k(a,b){for(var c=[];;){var d,e=i(a),f=a.line,h=a.ch-(e?e[0].length:0);if(!e||!(d=g(a)))return;if("selfClose"!=d)if(e[1]){for(var j=c.length-1;j>=0;--j)if(c[j]==e[2]){c.length=j;break}if(j<0&&(!b||b==e[2]))return{tag:e[2],from:m(f,h),to:m(a.line,a.ch)}}else c.push(e[2])}}function l(a,b){for(var c=[];;){var d=j(a);if(!d)return;if("selfClose"!=d){var e=a.line,f=a.ch,g=h(a);if(!g)return;if(g[1])c.push(g[2]);else{for(var i=c.length-1;i>=0;--i)if(c[i]==g[2]){c.length=i;break}if(i<0&&(!b||b==g[2]))return{tag:g[2],from:m(a.line,a.ch),to:m(e,f)}}}else h(a)}}var m=a.Pos,n="A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",o=n+"-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",p=new RegExp("<(/?)(["+n+"]["+o+"]*)","g");a.registerHelper("fold","xml",function(a,b){for(var d=new c(a,b.line,0);;){var e,f=i(d);if(!f||d.line!=b.line||!(e=g(d)))return;if(!f[1]&&"selfClose"!=e){var b=m(d.line,d.ch),h=k(d,f[2]);return h&&{from:b,to:h.from}}}}),a.findMatchingTag=function(a,d,e){var f=new c(a,d.line,d.ch,e);if(-1!=f.text.indexOf(">")||-1!=f.text.indexOf("<")){var i=g(f),j=i&&m(f.line,f.ch),n=i&&h(f);if(i&&n&&!(b(f,d)>0)){var o={from:m(f.line,f.ch),to:j,tag:n[2]};return"selfClose"==i?{open:o,close:null,at:"open"}:n[1]?{open:l(f,n[2]),close:o,at:"close"}:(f=new c(a,j.line,j.ch,e),{open:o,close:k(f,n[2]),at:"open"})}}},a.findEnclosingTag=function(a,b,d){for(var e=new c(a,b.line,b.ch,d);;){var f=l(e);if(!f)break;var g=new c(a,b.line,b.ch,d),h=k(g,f.tag);if(h)return{open:f,close:h}}},a.scanForClosingTag=function(a,b,d,e){return k(new c(a,b.line,b.ch,e?{from:0,to:e}:null),d)}});