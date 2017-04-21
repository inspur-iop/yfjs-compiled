define("echarts2/chart/force",["require","./base","../data/Graph","../layout/Force","zrender2/shape/Line","zrender2/shape/BezierCurve","zrender2/shape/Image","../util/shape/Icon","../config","../util/ecData","zrender2/tool/util","zrender2/config","zrender2/tool/vector","../chart"],function(a){"use strict";function b(a,b,f,j,k){var l=this;g.call(this,a,b,f,j,k),this.__nodePositionMap={},this._graph=new h(!0),this._layout=new i,this._layout.onupdate=function(){l._step()},this._steps=1,this.ondragstart=function(){c.apply(l,arguments)},this.ondragend=function(){e.apply(l,arguments)},this.ondrop=function(){},this.shapeHandler.ondragstart=function(){l.isDragstart=!0},this.onmousemove=function(){d.apply(l,arguments)},this.refresh(j)}function c(a){if(this.isDragstart&&a.target){a.target.fixed=!0,this.isDragstart=!1,this.zr.on(q.EVENT.MOUSEMOVE,this.onmousemove)}}function d(){this._layout.temperature=.8,this._step()}function e(a,b){if(this.isDragend&&a.target){a.target.fixed=!1,b.dragIn=!0,b.needRefresh=!1,this.isDragend=!1,this.zr.un(q.EVENT.MOUSEMOVE,this.onmousemove)}}function f(a,b,c){var d=r.create();return d[0]=(Math.random()-.5)*c+a,d[1]=(Math.random()-.5)*c+b,d}var g=a("./base"),h=a("../data/Graph"),i=a("../layout/Force"),j=a("zrender2/shape/Line"),k=a("zrender2/shape/BezierCurve"),l=a("zrender2/shape/Image"),m=a("../util/shape/Icon"),n=a("../config");n.force={zlevel:1,z:2,center:["50%","50%"],size:"100%",preventOverlap:!1,coolDown:.99,minRadius:10,maxRadius:20,ratioScaling:!1,large:!1,useWorker:!1,steps:1,scaling:1,gravity:1,symbol:"circle",symbolSize:0,linkSymbol:null,linkSymbolSize:[10,15],draggable:!0,clickable:!0,roam:!1,itemStyle:{normal:{label:{show:!1,position:"inside"},nodeStyle:{brushType:"both",borderColor:"#5182ab",borderWidth:1},linkStyle:{color:"#5182ab",width:1,type:"line"}},emphasis:{label:{show:!1},nodeStyle:{},linkStyle:{opacity:0}}}};var o=a("../util/ecData"),p=a("zrender2/tool/util"),q=a("zrender2/config"),r=a("zrender2/tool/vector");return b.prototype={constructor:b,type:n.CHART_TYPE_FORCE,_init:function(){this.selectedMap={};var a,b=this.component.legend,c=this.series;this.clear();for(var d=0,e=c.length;d<e;d++){var f=c[d];if(f.type===n.CHART_TYPE_FORCE){if(c[d]=this.reformOption(c[d]),a=c[d].name||"",this.selectedMap[a]=!b||b.isSelected(a),!this.selectedMap[a])continue;this.buildMark(d),this._initSerie(f,d);break}}this.animationEffect()},_getNodeCategory:function(a,b){return a.categories&&a.categories[b.category||0]},_getNodeQueryTarget:function(a,b,c){c=c||"normal";var d=this._getNodeCategory(a,b)||{};return[b.itemStyle&&b.itemStyle[c],d&&d.itemStyle&&d.itemStyle[c],a.itemStyle[c].nodeStyle]},_getEdgeQueryTarget:function(a,b,c){return c=c||"normal",[b.itemStyle&&b.itemStyle[c],a.itemStyle[c].linkStyle]},_initSerie:function(a,b){this._temperature=1,a.matrix?this._graph=this._getSerieGraphFromDataMatrix(a):a.links&&(this._graph=this._getSerieGraphFromNodeLinks(a)),this._buildLinkShapes(a,b),this._buildNodeShapes(a,b);var c=!0===a.roam||"move"===a.roam,d=!0===a.roam||"scale"===a.roam;this.zr.modLayer(this.getZlevelBase(),{panable:c,zoomable:d}),(this.query("markPoint.effect.show")||this.query("markLine.effect.show"))&&this.zr.modLayer(n.EFFECT_ZLEVEL,{panable:c,zoomable:d}),this._initLayout(a),this._step()},_getSerieGraphFromDataMatrix:function(a){for(var b=[],c=0,d=[],e=0;e<a.matrix.length;e++)d[e]=a.matrix[e].slice();for(var f=a.data||a.nodes,e=0;e<f.length;e++){var g={},i=f[e];for(var j in i)"name"===j?g.id=i.name:g[j]=i[j];var k=this._getNodeCategory(a,i),l=k?k.name:i.name;if(this.selectedMap[l]=this.isSelected(l),this.selectedMap[l])b.push(g),c++;else{d.splice(c,1);for(var m=0;m<d.length;m++)d[m].splice(c,1)}}var n=h.fromMatrix(b,d,!0);return n.eachNode(function(a,b){a.layout={size:a.data.value,mass:0},a.rawIndex=b}),n.eachEdge(function(a){a.layout={weight:a.data.weight}}),n},_getSerieGraphFromNodeLinks:function(a){for(var b=new h(!0),c=a.data||a.nodes,d=0,e=c.length;d<e;d++){var f=c[d];if(f&&!f.ignore){var g=this._getNodeCategory(a,f),i=g?g.name:f.name;if(this.selectedMap[i]=this.isSelected(i),this.selectedMap[i]){b.addNode(f.name,f).rawIndex=d}}}for(var d=0,e=a.links.length;d<e;d++){var j=a.links[d],k=j.source,l=j.target;"number"==typeof k&&(k=c[k])&&(k=k.name),"number"==typeof l&&(l=c[l])&&(l=l.name);var m=b.addEdge(k,l,j);m&&(m.rawIndex=d)}return b.eachNode(function(a){var b=a.data.value;if(null==b){b=0;for(var c=0;c<a.edges.length;c++)b+=a.edges[c].data.weight||0}a.layout={size:b,mass:0}}),b.eachEdge(function(a){a.layout={weight:null==a.data.weight?1:a.data.weight}}),b},_initLayout:function(a){var b=this._graph,c=b.nodes.length,d=this.query(a,"minRadius"),e=this.query(a,"maxRadius");this._steps=a.steps||1;var g=this._layout;g.center=this.parseCenter(this.zr,a.center),g.width=this.parsePercent(a.size,this.zr.getWidth()),g.height=this.parsePercent(a.size,this.zr.getHeight()),g.large=a.large,g.scaling=a.scaling,g.ratioScaling=a.ratioScaling,g.gravity=a.gravity,g.temperature=1,g.coolDown=a.coolDown,g.preventNodeEdgeOverlap=a.preventOverlap,g.preventNodeOverlap=a.preventOverlap;for(var h=1/0,i=-1/0,j=0;j<c;j++){var k=b.nodes[j];i=Math.max(k.layout.size,i),h=Math.min(k.layout.size,h)}for(var l=i-h,j=0;j<c;j++){var k=b.nodes[j];l>0?(k.layout.size=(k.layout.size-h)*(e-d)/l+d,k.layout.mass=k.layout.size/e):(k.layout.size=(e-d)/2,k.layout.mass=.5)}for(var j=0;j<c;j++){var k=b.nodes[j];if(void 0!==this.__nodePositionMap[k.id])k.layout.position=r.create(),r.copy(k.layout.position,this.__nodePositionMap[k.id]);else if(void 0!==k.data.initial)k.layout.position=r.create(),r.copy(k.layout.position,k.data.initial);else{var m=this._layout.center,n=Math.min(this._layout.width,this._layout.height);k.layout.position=f(m[0],m[1],.8*n)}var o=k.shape.style,p=k.layout.size;o.width=o.width||2*p,o.height=o.height||2*p,o.x=-o.width/2,o.y=-o.height/2,r.copy(k.shape.position,k.layout.position)}c=b.edges.length,i=-1/0;for(var j=0;j<c;j++){var q=b.edges[j];q.layout.weight>i&&(i=q.layout.weight)}for(var j=0;j<c;j++){var q=b.edges[j];q.layout.weight/=i}this._layout.init(b,a.useWorker)},_buildNodeShapes:function(a,b){var c=this._graph,d=this.query(a,"categories");c.eachNode(function(c){var e=this._getNodeCategory(a,c.data),f=[c.data,e,a],g=this._getNodeQueryTarget(a,c.data),h=this._getNodeQueryTarget(a,c.data,"emphasis"),i=new m({style:{x:0,y:0,color:this.deepQuery(g,"color"),brushType:"both",strokeColor:this.deepQuery(g,"strokeColor")||this.deepQuery(g,"borderColor"),lineWidth:this.deepQuery(g,"lineWidth")||this.deepQuery(g,"borderWidth")},highlightStyle:{color:this.deepQuery(h,"color"),strokeColor:this.deepQuery(h,"strokeColor")||this.deepQuery(h,"borderColor"),lineWidth:this.deepQuery(h,"lineWidth")||this.deepQuery(h,"borderWidth")},clickable:a.clickable,zlevel:this.getZlevelBase(),z:this.getZBase()});i.style.color||(i.style.color=e?this.getColor(e.name):this.getColor(c.id)),i.style.iconType=this.deepQuery(f,"symbol");var j=this.deepQuery(f,"symbolSize")||0;"number"==typeof j&&(j=[j,j]),i.style.width=2*j[0],i.style.height=2*j[1],i.style.iconType.match("image")&&(i.style.image=i.style.iconType.replace(new RegExp("^image:\\/\\/"),""),i=new l({style:i.style,highlightStyle:i.highlightStyle,clickable:i.clickable,zlevel:this.getZlevelBase(),z:this.getZBase()})),this.deepQuery(f,"itemStyle.normal.label.show")&&(i.style.text=null==c.data.label?c.id:c.data.label,i.style.textPosition=this.deepQuery(f,"itemStyle.normal.label.position"),i.style.textColor=this.deepQuery(f,"itemStyle.normal.label.textStyle.color"),i.style.textFont=this.getFont(this.deepQuery(f,"itemStyle.normal.label.textStyle")||{})),this.deepQuery(f,"itemStyle.emphasis.label.show")&&(i.highlightStyle.textPosition=this.deepQuery(f,"itemStyle.emphasis.label.position"),i.highlightStyle.textColor=this.deepQuery(f,"itemStyle.emphasis.label.textStyle.color"),i.highlightStyle.textFont=this.getFont(this.deepQuery(f,"itemStyle.emphasis.label.textStyle")||{})),this.deepQuery(f,"draggable")&&(this.setCalculable(i),i.dragEnableTime=0,i.draggable=!0,i.ondragstart=this.shapeHandler.ondragstart,i.ondragover=null);if(void 0!==c.category){var e=d[c.category];e&&e.name||""}o.pack(i,a,b,c.data,c.rawIndex,c.data.name||"",c.category),this.shapeList.push(i),this.zr.addShape(i),c.shape=i},this)},_buildLinkShapes:function(a,b){for(var c=this._graph,d=c.edges.length,e=0;e<d;e++){var f=c.edges[e],g=f.data,h=f.node1,i=f.node2,l=c.getEdge(i,h),n=this._getEdgeQueryTarget(a,g),q=this.deepQuery(n,"type");a.linkSymbol&&"none"!==a.linkSymbol&&(q="line");var r="line"===q?j:k,s=new r({style:{xStart:0,yStart:0,xEnd:0,yEnd:0},clickable:this.query(a,"clickable"),highlightStyle:{},zlevel:this.getZlevelBase(),z:this.getZBase()});if(l&&l.shape&&(s.style.offset=4,l.shape.style.offset=4),p.merge(s.style,this.query(a,"itemStyle.normal.linkStyle"),!0),p.merge(s.highlightStyle,this.query(a,"itemStyle.emphasis.linkStyle"),!0),void 0!==g.itemStyle&&(g.itemStyle.normal&&p.merge(s.style,g.itemStyle.normal,!0),g.itemStyle.emphasis&&p.merge(s.highlightStyle,g.itemStyle.emphasis,!0)),s.style.lineWidth=s.style.lineWidth||s.style.width,s.style.strokeColor=s.style.strokeColor||s.style.color,s.highlightStyle.lineWidth=s.highlightStyle.lineWidth||s.highlightStyle.width,s.highlightStyle.strokeColor=s.highlightStyle.strokeColor||s.highlightStyle.color,o.pack(s,a,b,f.data,null==f.rawIndex?e:f.rawIndex,f.data.name||h.id+" - "+i.id,h.id,i.id),this.shapeList.push(s),this.zr.addShape(s),f.shape=s,a.linkSymbol&&"none"!==a.linkSymbol){var t=new m({style:{x:-5,y:0,width:a.linkSymbolSize[0],height:a.linkSymbolSize[1],iconType:a.linkSymbol,brushType:"fill",color:s.style.strokeColor},highlightStyle:{brushType:"fill"},position:[0,0],rotation:0,zlevel:this.getZlevelBase(),z:this.getZBase()});s._symbolShape=t,this.shapeList.push(t),this.zr.addShape(t)}}},_updateLinkShapes:function(){for(var a=r.create(),b=r.create(),c=r.create(),d=r.create(),e=this._graph.edges,f=0,g=e.length;f<g;f++){var h=e[f],i=h.node1.shape,j=h.node2.shape;r.copy(c,i.position),r.copy(d,j.position);var k=h.shape.style;if(r.sub(a,c,d),r.normalize(a,a),k.offset?(b[0]=a[1],b[1]=-a[0],r.scaleAndAdd(c,c,b,k.offset),r.scaleAndAdd(d,d,b,k.offset)):"bezier-curve"===h.shape.type&&(k.cpX1=(c[0]+d[0])/2-(d[1]-c[1])/4,k.cpY1=(c[1]+d[1])/2-(c[0]-d[0])/4),k.xStart=c[0],k.yStart=c[1],k.xEnd=d[0],k.yEnd=d[1],h.shape.modSelf(),h.shape._symbolShape){var l=h.shape._symbolShape;r.copy(l.position,d),r.scaleAndAdd(l.position,l.position,a,j.style.width/2+2);var m=Math.atan2(a[1],a[0]);l.rotation=Math.PI/2-m,l.modSelf()}}},_syncNodePositions:function(){for(var a=this._graph,b=0;b<a.nodes.length;b++){var c=a.nodes[b],d=c.layout.position,e=c.data,f=c.shape,g=f.fixed||e.fixX,h=f.fixed||e.fixY;!0===g?g=1:isNaN(g)&&(g=0),!0===h?h=1:isNaN(h)&&(h=0),f.position[0]+=(d[0]-f.position[0])*(1-g),f.position[1]+=(d[1]-f.position[1])*(1-h),r.copy(d,f.position);var i=e.name;if(i){var j=this.__nodePositionMap[i];j||(j=this.__nodePositionMap[i]=r.create()),r.copy(j,d)}f.modSelf()}},_step:function(a){this._syncNodePositions(),this._updateLinkShapes(),this.zr.refreshNextFrame(),this._layout.temperature>.01?this._layout.step(this._steps):this.messageCenter.dispatch(n.EVENT.FORCE_LAYOUT_END,{},{},this.myChart)},refresh:function(a){if(a&&(this.option=a,this.series=this.option.series),this.legend=this.component.legend,this.legend)this.getColor=function(a){return this.legend.getColor(a)},this.isSelected=function(a){return this.legend.isSelected(a)};else{var b={},c=0;this.getColor=function(a){return b[a]?b[a]:(b[a]||(b[a]=this.zr.getColor(c++)),b[a])},this.isSelected=function(){return!0}}this._init()},dispose:function(){this.clear(),this.shapeList=null,this.effectList=null,this._layout.dispose(),this._layout=null,this.__nodePositionMap={}},getPosition:function(){var a=[];return this._graph.eachNode(function(b){b.layout&&a.push({name:b.data.name,position:Array.prototype.slice.call(b.layout.position)})}),a}},p.inherits(b,g),a("../chart").define("force",b),b}),define("echarts2/layout/Force",["require","./forceLayoutWorker","zrender2/tool/vector"],function(a){function b(){if("undefined"!=typeof Worker&&"undefined"!=typeof Blob)try{var a=new Blob([d.getWorkerCode()]);c=window.URL.createObjectURL(a)}catch(a){c=""}return c}var c,d=a("./forceLayoutWorker"),e=a("zrender2/tool/vector"),f=window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16)},g="undefined"==typeof Float32Array?Array:Float32Array,h=function(a){void 0===c&&b(),a=a||{},this.width=a.width||500,this.height=a.height||500,this.center=a.center||[this.width/2,this.height/2],this.ratioScaling=a.ratioScaling||!1,this.scaling=a.scaling||1,this.gravity=void 0!==a.gravity?a.gravity:1,this.large=a.large||!1,this.preventNodeOverlap=a.preventNodeOverlap||!1,this.preventNodeEdgeOverlap=a.preventNodeEdgeOverlap||!1,this.maxSpeedIncrease=a.maxSpeedIncrease||1,this.onupdate=a.onupdate||function(){},this.temperature=a.temperature||1,this.coolDown=a.coolDown||.99,this._layout=null,this._layoutWorker=null;var d=this,e=this._$onupdate;this._$onupdate=function(a){e.call(d,a)}};return h.prototype.updateConfig=function(){var a=this.width,b=this.height,c=Math.min(a,b),d={center:this.center,width:this.ratioScaling?a:c,height:this.ratioScaling?b:c,scaling:this.scaling||1,gravity:this.gravity||1,barnesHutOptimize:this.large,preventNodeOverlap:this.preventNodeOverlap,preventNodeEdgeOverlap:this.preventNodeEdgeOverlap,maxSpeedIncrease:this.maxSpeedIncrease};if(this._layoutWorker)this._layoutWorker.postMessage({cmd:"updateConfig",config:d});else for(var e in d)this._layout[e]=d[e]},h.prototype.init=function(a,b){if(this._layoutWorker&&(this._layoutWorker.terminate(),this._layoutWorker=null),c&&b)try{this._layoutWorker||(this._layoutWorker=new Worker(c),this._layoutWorker.onmessage=this._$onupdate),this._layout=null}catch(a){this._layoutWorker=null,this._layout||(this._layout=new d)}else this._layout||(this._layout=new d);this.temperature=1,this.graph=a;for(var e=a.nodes.length,f=new g(2*e),h=new g(e),i=new g(e),j=0;j<e;j++){var k=a.nodes[j];f[2*j]=k.layout.position[0],f[2*j+1]=k.layout.position[1],h[j]=void 0===k.layout.mass?1:k.layout.mass,i[j]=void 0===k.layout.size?1:k.layout.size,k.layout.__index=j}e=a.edges.length;for(var l=new g(2*e),m=new g(e),j=0;j<e;j++){var n=a.edges[j];l[2*j]=n.node1.layout.__index,l[2*j+1]=n.node2.layout.__index,m[j]=n.layout.weight||1}this._layoutWorker?this._layoutWorker.postMessage({cmd:"init",nodesPosition:f,nodesMass:h,nodesSize:i,edges:l,edgesWeight:m}):(this._layout.initNodes(f,h,i),this._layout.initEdges(l,m)),this.updateConfig()},h.prototype.step=function(a){var b=this.graph.nodes;if(this._layoutWorker){for(var c=new g(2*b.length),d=0;d<b.length;d++){var h=b[d];c[2*d]=h.layout.position[0],c[2*d+1]=h.layout.position[1]}this._layoutWorker.postMessage(c.buffer,[c.buffer]),this._layoutWorker.postMessage({cmd:"update",steps:a,temperature:this.temperature,coolDown:this.coolDown});for(var d=0;d<a;d++)this.temperature*=this.coolDown}else{f(this._$onupdate);for(var d=0;d<b.length;d++){var h=b[d];e.copy(this._layout.nodes[d].position,h.layout.position)}for(var d=0;d<a;d++)this._layout.temperature=this.temperature,this._layout.update(),this.temperature*=this.coolDown}},h.prototype._$onupdate=function(a){if(this._layoutWorker){for(var b=new Float32Array(a.data),c=0;c<this.graph.nodes.length;c++){var d=this.graph.nodes[c];d.layout.position[0]=b[2*c],d.layout.position[1]=b[2*c+1]}this.onupdate&&this.onupdate()}else if(this._layout){for(var c=0;c<this.graph.nodes.length;c++){var d=this.graph.nodes[c];e.copy(d.layout.position,this._layout.nodes[c].position)}this.onupdate&&this.onupdate()}},h.prototype.dispose=function(){this._layoutWorker&&this._layoutWorker.terminate(),this._layoutWorker=null,this._layout=null},h}),define("echarts2/layout/forceLayoutWorker",["require","zrender2/tool/vector"],function a(b){"use strict";function c(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new i(4),this.size=0}function d(){this.position=g.create(),this.force=g.create(),this.forcePrev=g.create(),this.speed=g.create(),this.speedPrev=g.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function e(a,b){this.node1=a,this.node2=b,this.weight=1}function f(){this.barnesHutOptimize=!1,this.barnesHutTheta=1.5,this.repulsionByDegree=!1,this.preventNodeOverlap=!1,this.preventNodeEdgeOverlap=!1,this.strongGravity=!0,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.center=[0,0],this.width=500,this.height=500,this.maxSpeedIncrease=1,this.nodes=[],this.edges=[],this.bbox=new i(4),this._rootRegion=new c,this._rootRegion.centerOfMass=g.create(),this._massArr=null,this._k=0}var g,h="undefined"==typeof window&&void 0===b;g=h?{create:function(a,b){var c=new Float32Array(2);return c[0]=a||0,c[1]=b||0,c},dist:function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},len:function(a){var b=a[0],c=a[1];return Math.sqrt(b*b+c*c)},scaleAndAdd:function(a,b,c,d){return a[0]=b[0]+c[0]*d,a[1]=b[1]+c[1]*d,a},scale:function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a},add:function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a},sub:function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]},normalize:function(a,b){var c=b[0],d=b[1],e=c*c+d*d;return e>0&&(e=1/Math.sqrt(e),a[0]=b[0]*e,a[1]=b[1]*e),a},negate:function(a,b){return a[0]=-b[0],a[1]=-b[1],a},copy:function(a,b){return a[0]=b[0],a[1]=b[1],a},set:function(a,b,c){return a[0]=b,a[1]=c,a}}:b("zrender2/tool/vector");var i="undefined"==typeof Float32Array?Array:Float32Array;if(c.prototype.beforeUpdate=function(){for(var a=0;a<this.nSubRegions;a++)this.subRegions[a].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},c.prototype.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var a=0;a<this.nSubRegions;a++)this.subRegions[a].afterUpdate()},c.prototype.addNode=function(a){if(0===this.nSubRegions){if(null==this.node)return void(this.node=a);this._addNodeToSubRegion(this.node),this.node=null}this._addNodeToSubRegion(a),this._updateCenterOfMass(a)},c.prototype.findSubRegion=function(a,b){for(var c=0;c<this.nSubRegions;c++){var d=this.subRegions[c];if(d.contain(a,b))return d}},c.prototype.contain=function(a,b){return this.bbox[0]<=a&&this.bbox[2]>=a&&this.bbox[1]<=b&&this.bbox[3]>=b},c.prototype.setBBox=function(a,b,c,d){this.bbox[0]=a,this.bbox[1]=b,this.bbox[2]=c,this.bbox[3]=d,this.size=(c-a+d-b)/2},c.prototype._newSubRegion=function(){var a=this.subRegions[this.nSubRegions];return a||(a=new c,this.subRegions[this.nSubRegions]=a),this.nSubRegions++,a},c.prototype._addNodeToSubRegion=function(a){var b=this.findSubRegion(a.position[0],a.position[1]),c=this.bbox;if(!b){var d=(c[0]+c[2])/2,e=(c[1]+c[3])/2,f=(c[2]-c[0])/2,g=(c[3]-c[1])/2,h=a.position[0]>=d?1:0,i=a.position[1]>=e?1:0,b=this._newSubRegion();b.setBBox(h*f+c[0],i*g+c[1],(h+1)*f+c[0],(i+1)*g+c[1])}b.addNode(a)},c.prototype._updateCenterOfMass=function(a){null==this.centerOfMass&&(this.centerOfMass=g.create());var b=this.centerOfMass[0]*this.mass,c=this.centerOfMass[1]*this.mass;b+=a.position[0]*a.mass,c+=a.position[1]*a.mass,this.mass+=a.mass,this.centerOfMass[0]=b/this.mass,this.centerOfMass[1]=c/this.mass},f.prototype.nodeToNodeRepulsionFactor=function(a,b,c){return c*c*a/b},f.prototype.edgeToNodeRepulsionFactor=function(a,b,c){return c*a/b},f.prototype.attractionFactor=function(a,b,c){return a*b/c},f.prototype.initNodes=function(a,b,c){this.temperature=1;var e=a.length/2;this.nodes.length=0;for(var f=void 0!==c,g=0;g<e;g++){var h=new d;h.position[0]=a[2*g],h.position[1]=a[2*g+1],h.mass=b[g],f&&(h.size=c[g]),this.nodes.push(h)}this._massArr=b,f&&(this._sizeArr=c)},f.prototype.initEdges=function(a,b){var c=a.length/2;this.edges.length=0;for(var d=void 0!==b,f=0;f<c;f++){var g=a[2*f],h=a[2*f+1],i=this.nodes[g],j=this.nodes[h];if(i&&j){i.outDegree++,j.inDegree++;var k=new e(i,j);d&&(k.weight=b[f]),this.edges.push(k)}}},f.prototype.update=function(){var a=this.nodes.length;if(this.updateBBox(),this._k=.4*this.scaling*Math.sqrt(this.width*this.height/a),this.barnesHutOptimize){this._rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this._rootRegion.beforeUpdate();for(var b=0;b<a;b++)this._rootRegion.addNode(this.nodes[b]);this._rootRegion.afterUpdate()}else{var c=0,d=this._rootRegion.centerOfMass;g.set(d,0,0);for(var b=0;b<a;b++){var e=this.nodes[b];c+=e.mass,g.scaleAndAdd(d,d,e.position,e.mass)}c>0&&g.scale(d,d,1/c)}this.updateForce(),this.updatePosition()},f.prototype.updateForce=function(){for(var a=this.nodes.length,b=0;b<a;b++){var c=this.nodes[b];g.copy(c.forcePrev,c.force),g.copy(c.speedPrev,c.speed),g.set(c.force,0,0)}this.updateNodeNodeForce(),this.gravity>0&&this.updateGravityForce(),this.updateEdgeForce(),this.preventNodeEdgeOverlap&&this.updateNodeEdgeForce()},f.prototype.updatePosition=function(){for(var a=this.nodes.length,b=g.create(),c=0;c<a;c++){var d=this.nodes[c],e=d.speed;g.scale(d.force,d.force,1/30);var f=g.len(d.force)+.1,h=Math.min(f,500)/f;g.scale(d.force,d.force,h),g.add(e,e,d.force),g.scale(e,e,this.temperature),g.sub(b,e,d.speedPrev);var i=g.len(b);if(i>0){g.scale(b,b,1/i);var j=g.len(d.speedPrev);j>0&&(i=Math.min(i/j,this.maxSpeedIncrease)*j,g.scaleAndAdd(e,d.speedPrev,b,i))}var k=g.len(e),h=Math.min(k,100)/(k+.1);g.scale(e,e,h),g.add(d.position,d.position,e)}},f.prototype.updateNodeNodeForce=function(){for(var a=this.nodes.length,b=0;b<a;b++){var c=this.nodes[b];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this._rootRegion,c);else for(var d=b+1;d<a;d++){var e=this.nodes[d];this.applyNodeToNodeRepulsion(c,e,!1)}}},f.prototype.updateGravityForce=function(){for(var a=0;a<this.nodes.length;a++)this.applyNodeGravity(this.nodes[a])},f.prototype.updateEdgeForce=function(){for(var a=0;a<this.edges.length;a++)this.applyEdgeAttraction(this.edges[a])},f.prototype.updateNodeEdgeForce=function(){for(var a=0;a<this.nodes.length;a++)for(var b=0;b<this.edges.length;b++)this.applyEdgeToNodeRepulsion(this.edges[b],this.nodes[a])},f.prototype.applyRegionToNodeRepulsion=function(){var a=g.create();return function(b,c){if(b.node)this.applyNodeToNodeRepulsion(b.node,c,!0);else{if(0===b.mass&&0===c.mass)return;g.sub(a,c.position,b.centerOfMass);var d=a[0]*a[0]+a[1]*a[1];if(d>this.barnesHutTheta*b.size*b.size){var e=this._k*this._k*(c.mass+b.mass)/(d+1);g.scaleAndAdd(c.force,c.force,a,2*e)}else for(var f=0;f<b.nSubRegions;f++)this.applyRegionToNodeRepulsion(b.subRegions[f],c)}}}(),f.prototype.applyNodeToNodeRepulsion=function(){var a=g.create();return function(b,c,d){if(b!==c&&(0!==b.mass||0!==c.mass)){g.sub(a,b.position,c.position);var e=a[0]*a[0]+a[1]*a[1];if(0!==e){var f,h=b.mass+c.mass,i=Math.sqrt(e);g.scale(a,a,1/i),this.preventNodeOverlap?(i=i-b.size-c.size,i>0?f=this.nodeToNodeRepulsionFactor(h,i,this._k):i<=0&&(f=this._k*this._k*10*h)):f=this.nodeToNodeRepulsionFactor(h,i,this._k),d||g.scaleAndAdd(b.force,b.force,a,2*f),g.scaleAndAdd(c.force,c.force,a,2*-f)}}}}(),f.prototype.applyEdgeAttraction=function(){var a=g.create();return function(b){var c=b.node1,d=b.node2;g.sub(a,c.position,d.position);var e,f=g.len(a);e=0===this.edgeWeightInfluence?1:1==this.edgeWeightInfluence?b.weight:Math.pow(b.weight,this.edgeWeightInfluence);var h;if(!(this.preventOverlap&&(f=f-c.size-d.size)<=0)){var h=this.attractionFactor(e,f,this._k);g.scaleAndAdd(c.force,c.force,a,-h),g.scaleAndAdd(d.force,d.force,a,h)}}}(),f.prototype.applyNodeGravity=function(){var a=g.create();return function(b){g.sub(a,this.center,b.position),this.width>this.height?a[1]*=this.width/this.height:a[0]*=this.height/this.width;var c=g.len(a)/100;this.strongGravity?g.scaleAndAdd(b.force,b.force,a,c*this.gravity*b.mass):g.scaleAndAdd(b.force,b.force,a,this.gravity*b.mass/(c+1))}}(),f.prototype.applyEdgeToNodeRepulsion=function(){var a=g.create(),b=g.create(),c=g.create();return function(d,e){var f=d.node1,h=d.node2;if(f!==e&&h!==e){g.sub(a,h.position,f.position),g.sub(b,e.position,f.position);var i=g.len(a);g.scale(a,a,1/i);var j=g.dot(a,b);if(!(j<0||j>i)){g.scaleAndAdd(c,f.position,a,j);var k=g.dist(c,e.position)-e.size,l=this.edgeToNodeRepulsionFactor(e.mass,Math.max(k,.1),100);g.sub(a,e.position,c),g.normalize(a,a),g.scaleAndAdd(e.force,e.force,a,l),g.scaleAndAdd(f.force,f.force,a,-l),g.scaleAndAdd(h.force,h.force,a,-l)}}}}(),f.prototype.updateBBox=function(){for(var a=1/0,b=1/0,c=-1/0,d=-1/0,e=0;e<this.nodes.length;e++){var f=this.nodes[e].position;a=Math.min(a,f[0]),b=Math.min(b,f[1]),c=Math.max(c,f[0]),d=Math.max(d,f[1])}this.bbox[0]=a,this.bbox[1]=b,this.bbox[2]=c,this.bbox[3]=d},f.getWorkerCode=function(){var b=a.toString();return b.slice(b.indexOf("{")+1,b.lastIndexOf("return"))},h){var j=null;self.onmessage=function(a){if(a.data instanceof ArrayBuffer){if(!j)return;for(var b=new Float32Array(a.data),c=b.length/2,d=0;d<c;d++){var e=j.nodes[d];e.position[0]=b[2*d],e.position[1]=b[2*d+1]}}else switch(a.data.cmd){case"init":j||(j=new f),j.initNodes(a.data.nodesPosition,a.data.nodesMass,a.data.nodesSize),j.initEdges(a.data.edges,a.data.edgesWeight);break;case"updateConfig":if(j)for(var g in a.data.config)j[g]=a.data.config[g];break;case"update":var h=a.data.steps;if(j){var c=j.nodes.length,b=new Float32Array(2*c);j.temperature=a.data.temperature;for(var d=0;d<h;d++)j.update(),j.temperature*=a.data.coolDown;for(var d=0;d<c;d++){var e=j.nodes[d];b[2*d]=e.position[0],b[2*d+1]=e.position[1]}self.postMessage(b.buffer,[b.buffer])}else{var i=new Float32Array;self.postMessage(i.buffer,[i.buffer])}}}}return f});