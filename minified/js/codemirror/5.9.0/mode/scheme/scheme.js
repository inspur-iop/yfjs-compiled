!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("scheme",function(){function a(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}function b(a,b,c){this.indent=a,this.type=b,this.prev=c}function c(a,c,d){a.indentStack=new b(c,d,a.indentStack)}function d(a){a.indentStack=a.indentStack.prev}function e(a){return a.match(r)}function f(a){return a.match(s)}function g(a,b){return b===!0&&a.backUp(1),a.match(u)}function h(a){return a.match(t)}var i="builtin",j="comment",k="string",l="atom",m="number",n="bracket",o=2,p=a("λ case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),q=a("define let letrec let* lambda"),r=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),s=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),t=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),u=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);return{startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1}},token:function(a,b){if(null==b.indentStack&&a.sol()&&(b.indentation=a.indentation()),a.eatSpace())return null;var r=null;switch(b.mode){case"string":for(var s,t=!1;null!=(s=a.next());){if('"'==s&&!t){b.mode=!1;break}t=!t&&"\\"==s}r=k;break;case"comment":for(var s,u=!1;null!=(s=a.next());){if("#"==s&&u){b.mode=!1;break}u="|"==s}r=j;break;case"s-expr-comment":if(b.mode=!1,"("!=a.peek()&&"["!=a.peek()){a.eatWhile(/[^\/s]/),r=j;break}b.sExprComment=0;default:var v=a.next();if('"'==v)b.mode="string",r=k;else if("'"==v)r=l;else if("#"==v)if(a.eat("|"))b.mode="comment",r=j;else if(a.eat(/[tf]/i))r=l;else if(a.eat(";"))b.mode="s-expr-comment",r=j;else{var w=null,x=!1,y=!0;a.eat(/[ei]/i)?x=!0:a.backUp(1),a.match(/^#b/i)?w=e:a.match(/^#o/i)?w=f:a.match(/^#x/i)?w=h:a.match(/^#d/i)?w=g:a.match(/^[-+0-9.]/,!1)?(y=!1,w=g):x||a.eat("#"),null!=w&&(y&&!x&&a.match(/^#[ei]/i),w(a)&&(r=m))}else if(/^[-+0-9.]/.test(v)&&g(a,!0))r=m;else if(";"==v)a.skipToEnd(),r=j;else if("("==v||"["==v){for(var z,A="",B=a.column();null!=(z=a.eat(/[^\s\(\[\;\)\]]/));)A+=z;A.length>0&&q.propertyIsEnumerable(A)?c(b,B+o,v):(a.eatSpace(),a.eol()||";"==a.peek()?c(b,B+1,v):c(b,B+a.current().length,v)),a.backUp(a.current().length-1),"number"==typeof b.sExprComment&&b.sExprComment++,r=n}else")"==v||"]"==v?(r=n,null!=b.indentStack&&b.indentStack.type==(")"==v?"(":"[")&&(d(b),"number"==typeof b.sExprComment&&0==--b.sExprComment&&(r=j,b.sExprComment=!1))):(a.eatWhile(/[\w\$_\-!$%&*+\.\/:<=>?@\^~]/),r=p&&p.propertyIsEnumerable(a.current())?i:"variable")}return"number"==typeof b.sExprComment?j:r},indent:function(a){return null==a.indentStack?a.indentation:a.indentStack.indent},closeBrackets:{pairs:'()[]{}""'},lineComment:";;"}}),a.defineMIME("text/x-scheme","scheme")});