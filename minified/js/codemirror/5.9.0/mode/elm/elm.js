!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("elm",function(){function a(a,b,c){return b(c),c(a,b)}function b(){return function(b,e){if(b.eatWhile(n))return null;var o=b.next();if(m.test(o)){if("{"==o&&b.eat("-")){var p="comment";return b.eat("#")&&(p="meta"),a(b,e,c(p,1))}return null}if("'"==o)return b.eat("\\")?b.next():b.next(),b.eat("'")?"string":"error";if('"'==o)return a(b,e,d);if(g.test(o))return b.eatWhile(k),b.eat(".")?"qualifier":"variable-2";if(f.test(o)){var q=1===b.pos;return b.eatWhile(k),q?"variable-3":"variable"}if(h.test(o)){if("0"==o){if(b.eat(/[xX]/))return b.eatWhile(i),"integer";if(b.eat(/[oO]/))return b.eatWhile(j),"number"}b.eatWhile(h);var p="number";return b.eat(".")&&(p="number",b.eatWhile(h)),b.eat(/[eE]/)&&(p="number",b.eat(/[-+]/),b.eatWhile(h)),p}return l.test(o)?"-"==o&&b.eat(/-/)&&(b.eatWhile(/-/),!b.eat(l))?(b.skipToEnd(),"comment"):(b.eatWhile(l),"builtin"):"error"}}function c(a,d){return 0==d?b():function(e,f){for(var g=d;!e.eol();){var h=e.next();if("{"==h&&e.eat("-"))++g;else if("-"==h&&e.eat("}")&&(--g,0==g))return f(b()),a}return f(c(a,g)),a}}function d(a,c){for(;!a.eol();){var d=a.next();if('"'==d)return c(b()),"string";if("\\"==d){if(a.eol()||a.eat(n))return c(e),"string";a.eat("&")||a.next()}}return c(b()),"error"}function e(c,e){return c.eat("\\")?a(c,e,d):(c.next(),e(b()),"error")}var f=/[a-z_]/,g=/[A-Z]/,h=/[0-9]/,i=/[0-9A-Fa-f]/,j=/[0-7]/,k=/[a-z_A-Z0-9\']/,l=/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]/,m=/[(),;[\]`{}]/,n=/[ \t\v\f]/,o=function(){for(var a={},b=["case","of","as","if","then","else","let","in","infix","infixl","infixr","type","alias","input","output","foreign","loopback","module","where","import","exposing","_","..","|",":","=","\\",'"',"->","<-"],c=b.length;c--;)a[b[c]]="keyword";return a}();return{startState:function(){return{f:b()}},copyState:function(a){return{f:a.f}},token:function(a,b){var c=b.f(a,function(a){b.f=a}),d=a.current();return o.hasOwnProperty(d)?o[d]:c}}}),a.defineMIME("text/x-elm","elm")});