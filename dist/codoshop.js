(function(){"use strict";angular.module("codoshop",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.codemirror","codoshop-tree","codoshop-sectionTabs","codoshop-projects","codoshop-colors","codoshop-outline","codoshopTextEditor"])}).call(this),function(){"use strict";angular.module("codoshop").directive("codoshop",function(){return{templateUrl:"app/main.html",controller:["$scope",function(e){return function(t){return function(n){null==e.codoshopVM&&(e.codoshopVM={}),n=e.codoshopVM,null==n.modules&&(n.modules={}),null==e.openFiles&&(e.openFiles=[]),null==e.projects&&(e.projects=[]),e.cmLookup=new WeakMap,t.selectFile=function(e){return function(t){var n,o,i,c,r;for(c=e.openFiles,o=0,i=c.length;i>o;o++)n=c[o],n.selected===!0&&n!==t&&(n.selected=!1);t.selected===!1&&(t.selected=!0),t.click_order=(null!=(r=[].concat(e.openFiles).sort(function(e,t){var n,o;return(null!=(n=t.click_order)?n:0)-(null!=(o=e.click_order)?o:0)}).click_order)?r:0)+1}}(e),e.selectedFile=function(e,t){return function(){return t=e.openFiles.filter(function(e){return e.selected===!0}),t.length>0?t[0]:null}}(e,null),e.$watchCollection("openFiles",function(e){return function(t,n,o){var i,c;c=n.filter(function(e){return function(t){return-1===e.indexOf(t)}}(t)),i=t.filter(function(e){return function(t){return-1===e.indexOf(t)}}(n)),t.every(function(t){return function(n){return n.selected===!0&&-1===t.indexOf(n)?(e.selectFile(n),!1):!0}}(n)),!o.selectedFile()&&o.openFiles.length>0&&e.selectFile(o.openFiles[0])}}(t)),e.newFile=function(e,t){return function(){t={name:"untitled",mode:"plaintext",content:"",selected:!0},e.openFiles.push(t)}}(e,null),t.newProject=function(e){return function(){return function(){e.projects.push({name:"Untitled"})}(null)}}(e),e.windo={w:0,h:0},null==n.columns&&(n.columns=[{sections:[{articles:[{name:"Projects",templateUrl:"components/projects/projects.html"},{name:"Other"}]}],style:{width:"220px"}},{sections:[{tabs:!1,articles:[{name:"Text Editor",templateUrl:"components/textEditor/textEditor.html"}]}],"class":"fc-g-1"},{sections:[{articles:[{name:"Colors",templateUrl:"components/colors/colors.html"}]},{articles:[{name:"Outline",templateUrl:"components/outline/outline.html"}]}]}]),n.isSelected=function(e,t){return e.selected===!0||!t.some(function(e){return e.selected===!0})&&e===t[0]}}}(this)(null)}],link:function(e,t){e.lhc=function(e){return function(t){return console.log("scope line height evaluated"),parseFloat(e.css("line-height"))*t+"px"}}(t),t.draggable({handle:"> .codoshop-wrapper > .top"}),t.tooltip()}}}).directive("topTabs",function(){return{require:"^codoshop",link:function(e,t,n,o){o=[].concat(o)[0],e.select=function(e,t){return function(n){return function(e){t.selectFile(e)}(e.openFiles[n])}}(e,o),e.close=function(e){return function(t){return function(){e.openFiles.splice(t,1)}(e.openFiles[t])}}(e)}}}).directive("resizable",function(){return{link:function(e,t,n){return function(n){t.resizable({handles:n,resize:function(t){return function(n,o){"w"===t&&(o.position.left=o.originalPosition.left),e.windo.w+=1,e.windo.h+=1,e.$apply()}}(n)})}(n.resizable)}}}).directive("hsort",function(){return function(e,t){t.sortable({axis:"x"})}}).directive("vsort",function(){return function(e,t){t.sortable({axis:"y"})}}).animation(".animate-slide",function(){return{addClass:function(e,t,n){return"ng-hide"===t&&$(e).slideUp({duration:150,complete:n,progress:function(e){return function(){$(e).trigger("animationProgress")}}(e)}),function(){}},removeClass:function(e,t,n){return"ng-hide"===t&&("none"===$(e).css("display")&&$(e).hide(),$(e).slideDown({duration:150,complete:n,progress:function(e){return function(){$(e).trigger("animationProgress")}}(e)})),function(){}}}})}.call(this),function(){"use strict";angular.module("codoshop-tree",["ngAnimate"]).controller("zTree",["$scope",function(e){e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]).directive("node",function(){return function(e){e.click=function(e){return function(){switch(e.node.status){case"closed":e.node.status="open";break;default:e.node.status="closed"}}}(e)}})}.call(this),function(){"use strict";angular.module("codoshop-sectionTabs",[]).directive("sectionTabs",function(){return{templateUrl:"components/sectionTabs/sectionTabs.html",link:function(e,t,n){e.tabs=e.$eval(n.tabs)}}})}.call(this),function(){"use strict";angular.module("codoshop-parser",[]).factory("parser",function(){return{what:!0}})}.call(this),function(){"use strict";angular.module("codoshop-projects",["codoshop-tree"]).directive("codoshopProjectsButtonRow",function(){return{templateUrl:"components/projects/buttonRow.html",require:"^codoshop",link:function(e,t,n,o){var i;i=[].concat(o)[0],e.newProject=function(e){return function(){e.newProject()}}(i),e.toggleAll=function(e){return function(t,n){var o,i,c,r,l;for(null==t&&(t=[]),null==n&&(n=[]),e.projects.every(function(e,t){return function(n){return function(o,i){return i&&i.length>0&&("expanded"===o&&e.push(n),"expanded"!==o&&t.push(n)),!0}(n.status,n.dirTree)}}(t,n)),i=0,r=t.length;r>i;i++)o=t[i],o.status="contracted";for(c=0,l=n.length;l>c;c++)o=n[c],0===t.length&&(o.status="expanded")}}(e),e.expandedProjects=function(){return e.projects.filter(function(e){return function(e,t){return t&&t.length>0&&"expanded"===e}(e.status,e.dirTree)})},e.contractedProjects=function(){return e.projects.filter(function(e){return function(e,t){return t&&t.length>0&&"expanded"!==e}(e.status,e.dirTree)})}}}}).directive("codoshopProjects",function(){return{controller:["$scope",function(){}],link:function(){Array.prototype.move=function(e,t){return this.splice(t,0,this.splice(e,1)[0])}}}}).directive("codoshopProject",function(){return{require:"^codoshopProjects",link:function(e,t,n,o){var i;i=[].concat(o)[0],e.openToggle=function(e,n){return function(o,i){null==o&&(o=e.project.status),null==i&&(i=e.project.dirTree),i&&i.length>0&&(n.scrollTop=$(t).parent().scrollTop(),e.project.status="expanded"===o?"contracted":"expanded")}}(e,i),$(t).bind("animationProgress",function(e){return function(){e.adjust()}}(i,t))}}}).directive("codoshopSpacer",function(){return{controller:["$scope",function(){}],require:"^codoshopProjects",link:function(e,t,n,o){var i;i=[].concat(o)[0],i.adjust=function(e,t){return function(){return function(n,o,i,c){return n=$(e).siblings(".codoshop-project"),o=n.last(),i=o.height(),i&&($(e).css("height",$(e).parent().height()-i+1+"px"),c=t.scrollTop,c&&$(e).parent().scrollTop(c)),$(e).height()}(null,null,null,null)}}(t,i),function(t,n){e.$watchGroup([function(){return function(e){return e=$(t).siblings(".codoshop-project"),e.last().height()}(null)},function(){return $(t).parent().height()}],function(){return function(e){e=n.adjust()}(null)})}(t,i)}}})}.call(this),function(){"use strict";angular.module("codoshop-colors",["codoshop-parser"]).directive("colorss",function(){return{link:function(e){e.colors=[],e.$watch(function(){return e.selectedFile()},function(e,t,n){return function(t){n.colors.length=0,e&&(t=n.cmLookup.get(e),CodeMirror.runMode(t.getValue(),e.mode,function(e,t){return function(o){var i;if("atom"===t||"builtin"===t)try{o=chroma(e),o&&n.colors.push({string:o.rgba()})}catch(c){i=c,i=i}}(null)})),n.fillers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}(null)})}}})}.call(this),function(){"use strict";angular.module("codoshop-outline",[]).directive("outline",function(){return{link:function(e){e.treee=[],e.$watch(function(){return e.selectedFile()},function(e,t,n){return function(t,o,i){n.treee.length=0,e&&(t=n.cmLookup.get(e),t.eachLine(function(e){return function(t){e.push(t)}}(o)),o.every(function(e,t,n){return function(e,o){return function(e){return e&&n.push(e),!0}(CodeMirror.fold.auto(t,{line:o,ch:0}))}}(n,t,i)),o.every(function(e,t){return function(n,o){return function(i,c,r,l){return c=CodeMirror.fold.auto(t,{line:o,ch:0}),c&&(i.fold=c,l=c.to,r=c.from,r.ch>0&&(i.name=t.getRange({line:r.line,ch:0},{line:r.line,ch:9999999}))),i.name=n.text,i.nodes=[],e.treee.push(i),!0}({},null,null,null,null)}}(n,t)))}(null,[],[],[])})}}})}.call(this),function(){"use strict";angular.module("codoshopTextEditor",[]).directive("codoshopTextEditor",function(){return{link:function(e){return function(t){var n;n=[].concat(n)[0],e.editorOptions={value:e.file.content,mode:t,lineNumbers:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],theme:"night"}}(e.file.mode)}}})}.call(this),angular.module("codoshop").run(["$templateCache",function(e){e.put("app/main.html",'<div class="codoshop-wrapper"><div class="top"><div class="content"><ul class="dots"><li><a href="javascript:void(0)"></a></li><li><a href="javascript:void(0)"></a></li><li><a href="javascript:void(0)"></a></li></ul></div></div><div class="h-spacer dark"></div><div class="codoshop-content"><div ng-repeat-start="column in codoshopVM.columns" ng-class="column.class" ng-style="column.style" class="codoshop-column"><section ng-repeat-start="section in column.sections" class="fc-g-1"><nav ng-if="section.tabs != false"><div class="codoshop-top-bar"><div></div><div></div></div><section-tabs data-tabs="{{section.articles}}"></section-tabs></nav><article ng-repeat="article in section.articles" ng-show="codoshopVM.isSelected(article, section.articles)"><ng-include src="article.templateUrl"></ng-include></article></section><div ng-repeat-end="" class="h-spacer"></div></div><div ng-repeat-end=""></div></div></div>'),e.put("components/colors/colors.html",'<div ng-attr-colorss="" style="padding: 7px;" class="colors-section light-block fc-g-1"><div class="fp fp-wrap"><div ng-repeat="c in colors" style="width: 21px; height: 21px;" class="color-cell fp fp-center"><div ng-style="{\'background-color\': c.string}"></div></div><div ng-repeat="c in fillers" style="width: 21px; height: 21px;" class="color-cell fp fp-center"><div ng-style="{\'background-color\': \'none\'}"></div></div></div><div></div><h3>[<span class="bold light-violet">{{colors.length}}</span> colors detected] <span style="float: none;" class="fa fa-cog"></span></h3></div>'),e.put("components/outline/outline.html",'<div style="flex-grow: 0; flex-shrink: 0;" class="bg-color-1"><ul class="text-tabs"><li style="flex-grow: 0;"></li><li><a ng-class="{selected: true}" href="javascript:void(0)"><div><span>map</span></div></a></li><li><a href="javascript:void(0)"><div><span>tree</span></div></a></li><li style="flex-grow: 0;"></li></ul></div><div ng-attr-outline="" class="bg-color-1 fc-g-1"><script type="text/ng-template" id="node_template2.html"><a ng-class="{roww: true, dir: node.nodes && node.nodes.length > 0, open: node.status == \'open\', closed: node.status == \'closed\'}" ng-click="click()" ng-attr-node href="javascript:void(0)"> <div class="arrow"></div><div class="icon"></div><div class="label">{{node.name}}</div></a> <ul><li ng-repeat="node in node.nodes" ng-include="\'node_template2.html\'"></li></ul></script><ul ng-controller="zTree" class="ztree"><li ng-repeat="node in treee" ng-include="\'node_template2.html\'"></li></ul></div>'),e.put("components/projects/buttonRow.html",'<li>{{projects.length}} projects</li><li></li><li><a href="javascript:void(0)" ng-click="toggleAll()"><span ng-class="{\'fa-compress\': (expandedProjects().length &gt; 0), \'fa-expand\': (expandedProjects().length == 0 &amp;&amp; contractedProjects().length &gt; 0)}" class="fa"></span></a></li><li></li><li><a href="javascript:void(0)"><span class="fa fa-folder-open"></span></a></li><li></li><li><a href="javascript:void(0)" ng-click="newProject()">+</a></li><li></li>'),e.put("components/projects/projects.html",'<div class="h-spacer dark"></div><ul ng-attr-codoshop-projects-button-row="" class="codoshop-projects-button-row"></ul><div class="h-spacer thick"></div><div ng-attr-codoshop-projects="" ng-attr-vsort="" class="codoshop-project-scrollview"><div ng-repeat-start="project in projects" ng-class="{expanded: project.status == \'expanded\', \'codoshop-project\': true}" ng-attr-codoshop-project=""><div class="divider-block"><div></div><form role="form"><input id="projectName" type="text" placeholder="Untitled" value="{{project.name}}" class="large"></form></div><div class="codoshop-project-subheader">../asdas/asdas/{{project.name}}</div><div class="codoshop-project-details"><button ng-show="project.dirTree &amp;&amp; project.dirTree.length &gt; 0" type="button" ng-click="" style="opacity: 0;" class="up"><span class="fa fa-cog"></span></button> <button type="button" ng-click="" class="up"><span class="fa fa-cog"></span></button> <button ng-show="project.dirTree &amp;&amp; project.dirTree.length &gt; 0" type="button" ng-click="openToggle()" class="up"><div class="fa fa-arrow-down"></div></button></div><div ng-show="project.status == \'expanded\'" class="fp fp-fd-c animate-slide"><script type="text/ng-template" id="node_template.html"><a ng-click="click()" class="bg-color-1" ng-attr-node href="javascript:void(0)"> <div></div> <div class="arrow"></div> <div class="icon fa fa-folder-o"></div> <div class="label">{{node.name}}</div> </a> <ul ng-show="node.status == \'open\'" class="animate-slide"> <li ng-repeat="node in node.nodes" ng-class="{dir: node.type == \'dir\'}" ng-include="\'node_template.html\'"></li> </ul></script><ul ng-controller="zTree" class="codoshop-tree"><li ng-repeat="node in project.dirTree" ng-class="{dir: node.type == \'dir\', open: node.status == \'open\'}" ng-include="\'node_template.html\'"></li></ul></div></div><div ng-repeat-end="" class="fc-s-0"></div><div ng-attr-codoshop-spacer="" class="bg-color-1 fc-s-0"></div></div>'),e.put("components/sectionTabs/sectionTabs.html",'<ul ng-attr-hsort="" class="codoshop-section-tabs"><li ng-repeat="tab in tabs" ng-selected="codoshopVM.isSelected(tab, tabs)"><div><a href="javascript:void(0)"><span>{{tab.name}}</span></a></div></li><li></li><li></li></ul>'),e.put("components/textEditor/textEditor.html",'<ul ng-attr-hsort="" ng-attr-top-tabs="" class="codoshop-text-editor-tabs"><li ng-repeat="file in openFiles" ng-class="{ tab: true, selected: file.selected }"><a href="javascript:void(0)" ng-click="select($index)"><span>{{file.name}}</span></a> <a href="javascript:void(0)" ng-click="close($index)"><div></div></a></li><li><a href="javascript:void(0)" ng-click="newFile()" ng-attr-tooltip="" title="new file"><span>+</span></a></li><li></li></ul><div class="codoshop-text-editor-content"><ui-codemirror ng-repeat="file in openFiles" ng-show="file.selected == true" ui-codemirror-opts="editorOptions" ng-attr-codoshop-text-editor=""></ui-codemirror></div>')}]);