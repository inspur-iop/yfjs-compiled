!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("dylan",function(a){function b(a,b,c){return b.tokenize=c,c(a,b)}function c(a,c){var f=a.peek();if("'"==f||'"'==f)return a.next(),b(a,c,e(f,"string"));if("/"==f)return a.next(),a.eat("*")?b(a,c,d):a.eat("/")?(a.skipToEnd(),"comment"):(a.skipTo(" "),"operator");if(/\d/.test(f))return a.match(/^\d*(?:\.\d*)?(?:e[+\-]?\d+)?/),"number";if("#"==f)return a.next(),f=a.peek(),'"'==f?(a.next(),b(a,c,e('"',"string-2"))):"b"==f?(a.next(),a.eatWhile(/[01]/),"number"):"x"==f?(a.next(),a.eatWhile(/[\da-f]/i),"number"):"o"==f?(a.next(),a.eatWhile(/[0-7]/),"number"):(a.eatWhile(/[-a-zA-Z]/),"keyword");if(a.match("end"))return"keyword";for(var g in i)if(i.hasOwnProperty(g)){var k=i[g];if(k instanceof Array&&k.some(function(b){return a.match(b)})||a.match(k))return j[g]}return a.match("define")?"def":(a.eatWhile(/[\w\-]/),m[a.current()]?n[a.current()]:a.current().match(h)?"variable":(a.next(),"variable-2"))}function d(a,b){for(var d,e=!1;d=a.next();){if("/"==d&&e){b.tokenize=c;break}e="*"==d}return"comment"}function e(a,b){return function(d,e){for(var f,g=!1;null!=(f=d.next());)if(f==a){g=!0;break}return g&&(e.tokenize=c),b}}var f={unnamedDefinition:["interface"],namedDefinition:["module","library","macro","C-struct","C-union","C-function","C-callable-wrapper"],typeParameterizedDefinition:["class","C-subtype","C-mapped-subtype"],otherParameterizedDefinition:["method","function","C-variable","C-address"],constantSimpleDefinition:["constant"],variableSimpleDefinition:["variable"],otherSimpleDefinition:["generic","domain","C-pointer-type","table"],statement:["if","block","begin","method","case","for","select","when","unless","until","while","iterate","profiling","dynamic-bind"],separator:["finally","exception","cleanup","else","elseif","afterwards"],other:["above","below","by","from","handler","in","instance","let","local","otherwise","slot","subclass","then","to","keyed-by","virtual"],signalingCalls:["signal","error","cerror","break","check-type","abort"]};f.otherDefinition=f.unnamedDefinition.concat(f.namedDefinition).concat(f.otherParameterizedDefinition),f.definition=f.typeParameterizedDefinition.concat(f.otherDefinition),f.parameterizedDefinition=f.typeParameterizedDefinition.concat(f.otherParameterizedDefinition),f.simpleDefinition=f.constantSimpleDefinition.concat(f.variableSimpleDefinition).concat(f.otherSimpleDefinition),f.keyword=f.statement.concat(f.separator).concat(f.other);var g="[-_a-zA-Z?!*@<>$%]+",h=new RegExp("^"+g),i={symbolKeyword:g+":",symbolClass:"<"+g+">",symbolGlobal:"\\*"+g+"\\*",symbolConstant:"\\$"+g},j={symbolKeyword:"atom",symbolClass:"tag",symbolGlobal:"variable-2",symbolConstant:"variable-3"};for(var k in i)i.hasOwnProperty(k)&&(i[k]=new RegExp("^"+i[k]));i.keyword=[/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];var l={};l.keyword="keyword",l.definition="def",l.simpleDefinition="def",l.signalingCalls="builtin";var m={},n={};return["keyword","definition","simpleDefinition","signalingCalls"].forEach(function(a){f[a].forEach(function(b){m[b]=a,n[b]=l[a]})}),{startState:function(){return{tokenize:c,currentIndent:0}},token:function(a,b){if(a.eatSpace())return null;var c=b.tokenize(a,b);return c},blockCommentStart:"/*",blockCommentEnd:"*/"}}),a.defineMIME("text/x-dylan","dylan")});