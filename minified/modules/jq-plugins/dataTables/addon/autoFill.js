!function(a,b,c){var d=function(d,e){"use strict";var f=function(a,b){if(!(this instanceof f))throw"Warning: AutoFill must be initialised with the keyword 'new'";if(!d.fn.dataTableExt.fnVersionCheck("1.7.0"))throw"Warning: AutoFill requires DataTables 1.7 or greater";return this.c={},this.s={filler:{height:0,width:0},border:{width:2},drag:{startX:-1,startY:-1,startTd:null,endTd:null,dragging:!1},screen:{interval:null,y:0,height:0,scrollTop:0},scroller:{top:0,bottom:0},columns:[]},this.dom={table:null,filler:null,borderTop:null,borderRight:null,borderBottom:null,borderLeft:null,currentTarget:null},this.fnSettings=function(){return this.s},this._fnInit(a,b),this};return f.prototype={_fnInit:function(a,c){var g=this;this.s.dt=e.Api?new e.Api(a).settings()[0]:a.fnSettings(),this.s.init=c||{},this.dom.table=this.s.dt.nTable,d.extend(!0,this.c,f.defaults,c),this._initColumns();var h=d("<div/>",{class:"AutoFill_filler"}).appendTo("body");this.dom.filler=h[0],this.s.filler.height=h.height(),this.s.filler.width=h.width(),h[0].style.display="none";var i,j=b.body;""!==g.s.dt.oScroll.sY&&(g.s.dt.nTable.parentNode.style.position="relative",j=g.s.dt.nTable.parentNode),i=d("<div/>",{class:"AutoFill_border"}),this.dom.borderTop=i.clone().appendTo(j)[0],this.dom.borderRight=i.clone().appendTo(j)[0],this.dom.borderBottom=i.clone().appendTo(j)[0],this.dom.borderLeft=i.clone().appendTo(j)[0],h.on("mousedown.DTAF",function(a){return this.onselectstart=function(){return!1},g._fnFillerDragStart.call(g,a),!1}),d("tbody",this.dom.table).on("mouseover.DTAF mouseout.DTAF",">tr>td, >tr>th",function(a){g._fnFillerDisplay.call(g,a)}),d(this.dom.table).on("destroy.dt.DTAF",function(){h.off("mousedown.DTAF").remove(),d("tbody",this.dom.table).off("mouseover.DTAF mouseout.DTAF")})},_initColumns:function(){var a,b,c=this,e=this.s.dt,g=this.s.init;for(a=0,b=e.aoColumns.length;a<b;a++)this.s.columns[a]=d.extend(!0,{},f.defaults.column);for(e.oApi._fnApplyColumnDefs(e,g.aoColumnDefs||g.columnDefs,g.aoColumns||g.columns,function(a,b){c._fnColumnOptions(a,b)}),a=0,b=e.aoColumns.length;a<b;a++){var h=this.s.columns[a];h.read||(h.read=this._fnReadCell),h.write||(h.read=this._fnWriteCell),h.step||(h.read=this._fnStep)}},_fnColumnOptions:function(a,b){var d=this.s.columns[a],e=function(a,e){b[e[0]]!==c&&(d[a]=b[e[0]]),b[e[1]]!==c&&(d[a]=b[e[1]])};e("enable",["bEnable","enable"]),e("read",["fnRead","read"]),e("write",["fnWrite","write"]),e("step",["fnStep","step"]),e("increment",["bIncrement","increment"])},_fnTargetCoords:function(a){var b=d(a).parents("tr")[0],c=this.s.dt.oInstance.fnGetPosition(a);return{x:d("td",b).index(a),y:d("tr",b.parentNode).index(b),row:c[0],column:c[2]}},_fnUpdateBorder:function(a,b){var c,e=this.s.border.width,f=d(a).offset(),g=d(b).offset(),h=f.left-e,i=g.left+d(b).outerWidth(),j=f.top-e,k=g.top+d(b).outerHeight(),l=g.left+d(b).outerWidth()-f.left+2*e,m=g.top+d(b).outerHeight()-f.top+2*e;if(f.left>g.left&&(h=g.left-e,i=f.left+d(a).outerWidth(),l=f.left+d(a).outerWidth()-g.left+2*e),""!==this.s.dt.oScroll.sY){var n=d(this.s.dt.nTable.parentNode).offset(),o=d(this.s.dt.nTable.parentNode).scrollTop(),p=d(this.s.dt.nTable.parentNode).scrollLeft();h-=n.left-p,i-=n.left-p,j-=n.top-o,k-=n.top-o}c=this.dom.borderTop.style,c.top=j+"px",c.left=h+"px",c.height=this.s.border.width+"px",c.width=l+"px",c=this.dom.borderBottom.style,c.top=k+"px",c.left=h+"px",c.height=this.s.border.width+"px",c.width=l+"px",c=this.dom.borderLeft.style,c.top=j+"px",c.left=h+"px",c.height=m+"px",c.width=this.s.border.width+"px",c=this.dom.borderRight.style,c.top=j+"px",c.left=i+"px",c.height=m+"px",c.width=this.s.border.width+"px"},_fnFillerDragStart:function(c){var e=this,f=this.dom.currentTarget;this.s.drag.dragging=!0,e.dom.borderTop.style.display="block",e.dom.borderRight.style.display="block",e.dom.borderBottom.style.display="block",e.dom.borderLeft.style.display="block";var g=this._fnTargetCoords(f);this.s.drag.startX=g.x,this.s.drag.startY=g.y,this.s.drag.startTd=f,this.s.drag.endTd=f,this._fnUpdateBorder(f,f),d(b).bind("mousemove.AutoFill",function(a){e._fnFillerDragMove.call(e,a)}),d(b).bind("mouseup.AutoFill",function(a){e._fnFillerFinish.call(e,a)}),this.s.screen.y=c.pageY,this.s.screen.height=d(a).height(),this.s.screen.scrollTop=d(b).scrollTop(),""!==this.s.dt.oScroll.sY&&(this.s.scroller.top=d(this.s.dt.nTable.parentNode).offset().top,this.s.scroller.bottom=this.s.scroller.top+d(this.s.dt.nTable.parentNode).height()),this.s.screen.interval=setInterval(function(){var a=d(b).scrollTop(),c=a-e.s.screen.scrollTop;e.s.screen.y+=c,e.s.screen.height-e.s.screen.y+a<50?d("html, body").animate({scrollTop:a+50},240,"linear"):e.s.screen.y-a<50&&d("html, body").animate({scrollTop:a-50},240,"linear"),""!==e.s.dt.oScroll.sY&&(e.s.screen.y>e.s.scroller.bottom-50?d(e.s.dt.nTable.parentNode).animate({scrollTop:d(e.s.dt.nTable.parentNode).scrollTop()+50},240,"linear"):e.s.screen.y<e.s.scroller.top+50&&d(e.s.dt.nTable.parentNode).animate({scrollTop:d(e.s.dt.nTable.parentNode).scrollTop()-50},240,"linear"))},250)},_fnFillerDragMove:function(a){if(a.target&&"TD"==a.target.nodeName.toUpperCase()&&a.target!=this.s.drag.endTd){var c=this._fnTargetCoords(a.target);"y"==this.c.mode&&c.x!=this.s.drag.startX&&(a.target=d("tbody>tr:eq("+c.y+")>td:eq("+this.s.drag.startX+")",this.dom.table)[0]),"x"==this.c.mode&&c.y!=this.s.drag.startY&&(a.target=d("tbody>tr:eq("+this.s.drag.startY+")>td:eq("+c.x+")",this.dom.table)[0]),"either"==this.c.mode&&(c.x!=this.s.drag.startX?a.target=d("tbody>tr:eq("+this.s.drag.startY+")>td:eq("+c.x+")",this.dom.table)[0]:c.y!=this.s.drag.startY&&(a.target=d("tbody>tr:eq("+c.y+")>td:eq("+this.s.drag.startX+")",this.dom.table)[0])),"both"!==this.c.mode&&(c=this._fnTargetCoords(a.target));var e=this.s.drag;e.endTd=a.target,c.y>=this.s.drag.startY?this._fnUpdateBorder(e.startTd,e.endTd):this._fnUpdateBorder(e.endTd,e.startTd),this._fnFillerPosition(a.target)}this.s.screen.y=a.pageY,this.s.screen.scrollTop=d(b).scrollTop(),""!==this.s.dt.oScroll.sY&&(this.s.scroller.scrollTop=d(this.s.dt.nTable.parentNode).scrollTop(),this.s.scroller.top=d(this.s.dt.nTable.parentNode).offset().top,this.s.scroller.bottom=this.s.scroller.top+d(this.s.dt.nTable.parentNode).height())},_fnFillerFinish:function(a){var c,f,g,h=this;d(b).unbind("mousemove.AutoFill mouseup.AutoFill"),this.dom.borderTop.style.display="none",this.dom.borderRight.style.display="none",this.dom.borderBottom.style.display="none",this.dom.borderLeft.style.display="none",this.s.drag.dragging=!1,clearInterval(this.s.screen.interval);var i=[],j=this.dom.table,k=this._fnTargetCoords(this.s.drag.startTd),l=this._fnTargetCoords(this.s.drag.endTd),m=function(a){return h.s.dt.oApi._fnVisibleToColumnIndex(h.s.dt,a)};if(k.y<=l.y)for(c=k.y;c<=l.y;c++)if(k.x<=l.x)for(g=k.x;g<=l.x;g++)i.push({node:d("tbody>tr:eq("+c+")>td:eq("+g+")",j)[0],x:g-k.x,y:c-k.y,colIdx:m(g)});else for(g=k.x;g>=l.x;g--)i.push({node:d("tbody>tr:eq("+c+")>td:eq("+g+")",j)[0],x:g-k.x,y:c-k.y,colIdx:m(g)});else for(c=k.y;c>=l.y;c--)if(k.x<=l.x)for(g=k.x;g<=l.x;g++)i.push({node:d("tbody>tr:eq("+c+")>td:eq("+g+")",j)[0],x:g-k.x,y:c-k.y,colIdx:m(g)});else for(g=k.x;g>=l.x;g--)i.push({node:d("tbody>tr:eq("+c+")>td:eq("+g+")",j)[0],x:k.x-g,y:k.y-c,colIdx:m(g)});if(!(i.length<=1)){var n,o=[];for(c=0,f=i.length;c<f;c++){var p=i[c],q=this.s.columns[p.colIdx],r=q.read.call(q,p.node),s=q.step.call(q,p.node,r,n,c,p.x,p.y);q.write.call(q,p.node,s),n=s,o.push({cell:p,colIdx:p.colIdx,newValue:s,oldValue:r})}null!==this.c.complete&&this.c.complete.call(this,o),e.Api?new e.Api(this.s.dt).draw(!1):this.s.dt.oInstance.fnDraw()}},_fnFillerDisplay:function(a){var b=this.dom.filler;if(!this.s.drag.dragging){var c="td"==a.target.nodeName.toLowerCase()?a.target:d(a.target).parents("td")[0],e=this._fnTargetCoords(c).column;if(!this.s.columns[e].enable)return void(b.style.display="none");"mouseover"==a.type?(this.dom.currentTarget=c,this._fnFillerPosition(c),b.style.display="block"):a.relatedTarget&&a.relatedTarget.className.match(/AutoFill/)||(b.style.display="none")}},_fnFillerPosition:function(a){var b=d(a).offset(),c=this.dom.filler;c.style.top=b.top-this.s.filler.height/2-1+d(a).outerHeight()+"px",c.style.left=b.left-this.s.filler.width/2-1+d(a).outerWidth()+"px"}},e.AutoFill=f,e.AutoFill=f,f.version="1.2.1",f.defaults={mode:"y",complete:null,column:{enable:!0,increment:!0,read:function(a){return d(a).html()},write:function(a,b){var c=d(a).parents("table");if(e.Api)c.DataTable().cell(a).data(b);else{var f=c.dataTable(),g=f.fnGetPosition(a);f.fnUpdate(b,g[0],g[2],!1)}},step:function(a,b,d,e,f,g){var h=/(\-?\d+)/,i=this.increment&&d?d.match(h):null;return i?d.replace(h,parseInt(i[1],10)+(f<0||g<0?-1:1)):d===c?b:d}}},f};"function"==typeof define&&define.amd?define(["jquery","jq/dataTables"],d):"object"==typeof exports?d(require("jquery"),require("jq/dataTables")):jQuery&&!jQuery.fn.dataTable.AutoFill&&d(jQuery,jQuery.fn.dataTable)}(window,document);