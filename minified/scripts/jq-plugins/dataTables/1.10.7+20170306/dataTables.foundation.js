!function(a,b,c){var d=function(a,b){"use strict";a.extend(b.ext.classes,{sWrapper:"dataTables_wrapper dt-foundation"}),a.extend(!0,b.defaults,{dom:"<'row'<'small-6 columns'l><'small-6 columns'f>r>t<'row'<'small-6 columns'i><'small-6 columns'p>>",renderer:"foundation"}),b.ext.renderer.pageButton.foundation=function(c,d,e,f,g,h){var i,j,k=new b.Api(c),l=c.oClasses,m=c.oLanguage.oPaginate,n=function(b,d){var f,o,p,q,r=function(a){a.preventDefault(),"ellipsis"!==a.data.action&&k.page(a.data.action).draw(!1)};for(f=0,o=d.length;f<o;f++)if(q=d[f],a.isArray(q))n(b,q);else{switch(i="",j="",q){case"ellipsis":i="&hellip;",j="unavailable";break;case"first":i=m.sFirst,j=q+(g>0?"":" unavailable");break;case"previous":i=m.sPrevious,j=q+(g>0?"":" unavailable");break;case"next":i=m.sNext,j=q+(g<h-1?"":" unavailable");break;case"last":i=m.sLast,j=q+(g<h-1?"":" unavailable");break;default:i=q+1,j=g===q?"current":""}i&&(p=a("<li>",{class:l.sPageButton+" "+j,"aria-controls":c.sTableId,tabindex:c.iTabIndex,id:0===e&&"string"==typeof q?c.sTableId+"_"+q:null}).append(a("<a>",{href:"#"}).html(i)).appendTo(b),c.oApi._fnBindAction(p,{action:q},r))}};n(a(d).empty().html('<ul class="pagination"/>').children("ul"),f)},b.TableTools&&(a.extend(!0,b.TableTools.classes,{container:"DTTT button-group",buttons:{normal:"button small",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},select:{row:"active"}}),a.extend(!0,b.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}))};"function"==typeof define&&define.amd?define(["jquery","jq/dataTables"],d):"object"==typeof exports?d(require("jquery"),require("jq/dataTables")):jQuery&&d(jQuery,jQuery.fn.dataTable)}(window,document);