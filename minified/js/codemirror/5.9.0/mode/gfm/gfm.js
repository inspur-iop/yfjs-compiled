!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../markdown/markdown"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../markdown/markdown","../../addon/mode/overlay"],a):a(CodeMirror)}(function(a){"use strict";var b=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;a.defineMode("gfm",function(c,d){function e(a){return a.code=!1,null}var f=0,g={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(a){return{code:a.code,codeBlock:a.codeBlock,ateSpace:a.ateSpace}},token:function(a,c){if(c.combineTokens=null,c.codeBlock)return a.match(/^```+/)?(c.codeBlock=!1,null):(a.skipToEnd(),null);if(a.sol()&&(c.code=!1),a.sol()&&a.match(/^```+/))return a.skipToEnd(),c.codeBlock=!0,null;if("`"===a.peek()){a.next();var e=a.pos;a.eatWhile("`");var g=1+a.pos-e;return c.code?g===f&&(c.code=!1):(f=g,c.code=!0),null}if(c.code)return a.next(),null;if(a.eatSpace())return c.ateSpace=!0,null;if((a.sol()||c.ateSpace)&&(c.ateSpace=!1,d.gitHubSpice!==!1)){if(a.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/))return c.combineTokens=!0,"link";if(a.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return c.combineTokens=!0,"link"}return a.match(b)&&"]("!=a.string.slice(a.start-2,a.start)&&(0==a.start||/\W/.test(a.string.charAt(a.start-1)))?(c.combineTokens=!0,"link"):(a.next(),null)},blankLine:e},h={underscoresBreakWords:!1,taskLists:!0,fencedCodeBlocks:"```",strikethrough:!0};for(var i in d)h[i]=d[i];return h.name="markdown",a.overlayMode(a.getMode(c,h),g)},"markdown"),a.defineMIME("text/x-gfm","gfm")});