(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),c=a.n(l),s=(a(16),a(3)),r=a(4),o=a(6),u=a(5),d=a(7),k=(a(17),a(18),function(e){return i.a.createElement("div",{id:"header"},i.a.createElement("div",{id:"logo_tag"},i.a.createElement("h1",null,"todone"),i.a.createElement("p",null,"A simple todo app.")),i.a.createElement("i",{className:"gear-icon"}))}),m=(a(19),function(e){return i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{onClick:e.click,className:"nav-link "+e.activeClass,id:e.id+"Nav",href:"#"+e.id},e.label))}),p=function(e){return i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",{id:"list-nav",className:"nav nav-pills nav-fill"},e.displays.map(function(t,a){return t.id===e.activeDisplay?i.a.createElement(m,{key:a,click:e.switchDisplayHandler.bind(void 0,t.id),id:t.id,label:t.label,activeClass:"active"}):i.a.createElement(m,{key:a,click:e.switchDisplayHandler.bind(void 0,t.id),id:t.id,label:t.label,activeClass:""})})))},y=a(1),f=a(2),h=(a(20),function(e){return i.a.createElement("li",{className:"list-group-item"},i.a.createElement("i",{data:e.id,onClick:e.checkedToggle,id:e.keyValue+"CheckBox",className:"far "+e.checkedClass}),i.a.createElement("span",{className:"to-do-item",contentEditable:"true"},e.content,i.a.createElement("i",{data:e.id,onClick:e.removeItem,id:e.keyValue+"EditButton",className:"far fa-edit"}),i.a.createElement("i",{data:e.id,onClick:e.removeItem,id:e.keyValue+"DeleteButton",className:"far fa-trash-alt"})),e.quickLinks)}),g=function(e){var t=null;return t=e.enteringInput?i.a.createElement("li",{id:e.id+"Input",className:"list-group-item add-task-input"},i.a.createElement("button",{onClick:e.inputToggleHandler,className:"fas fa-plus"}),i.a.createElement("input",{autoFocus:!0,onKeyDown:function(t){"Enter"===t.key&&(e.inputToggleHandler(t,"replay"),t.target.value="")},onBlur:e.inputToggleHandler,id:e.id+"InputField",type:"text"})):i.a.createElement("li",{id:e.id+"Button",className:"list-group-item add-task-button"},i.a.createElement("button",{onClick:e.inputToggleHandler,className:"fas fa-plus"},i.a.createElement("span",null,e.buttonLabel))),i.a.createElement("div",null,t)},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).inputToggleHandler=function(e,t){if(a.state.enteringInput)if(""!==e.target.value){var n=e.target.id.replace("InputField",""),i=a.state.keyCounter,l=a.state[n];a.setState(Object(y.a)({keyCounter:++i,enteringInput:!1},n,[].concat(Object(f.a)(l),[{content:e.target.value,key:a.state.keyCounter+[n],isChecked:!1}]))),t&&a.setState({enteringInput:!0})}else a.setState({enteringInput:!1});else a.setState({enteringInput:!0})},a.removeItem=function(e,t){var n=a.state[e].filter(function(e){return e.key!==t});a.setState(Object(y.a)({},e,n))},a.checkedToggle=function(e,t,n){var i=a.state[n];if("far fa-circle"===e.target.className){var l=i.map(function(e){return e.key===t?(e.isChecked=!0,e):e});a.setState(Object(y.a)({},n,l))}else{var c=i.map(function(e){return e.key===t?(e.isChecked=!1,e):e});a.setState(Object(y.a)({},n,c))}},a.moveItem=function(e,t){var n=a.state[t],i=n.filter(function(t){return t.key===e}),l=n.filter(function(t){return t.key!==e});a.setState(Object(y.a)({},t,l)),"weekList"===t?a.setState({todayList:[].concat(Object(f.a)(i),Object(f.a)(a.state.todayList))}):a.setState({weekList:[].concat(Object(f.a)(i),Object(f.a)(a.state.weekList))})},a.state={enteringInput:!1,buttonLabel:"Add task",keyCounter:4,todayList:[{content:"this is a test for today",key:1,isChecked:!1}],weekList:[{content:"this is a test for this week",key:2,isChecked:!1}],allList:[{content:"this is a test for all",key:3,isChecked:!1}]},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.allList.map(function(t){return i.a.createElement(h,{checkedToggle:function(a){e.checkedToggle(a,t.key,"allList")},checkedClass:t.isChecked?"fa-check-circle":"fa-circle",id:"allList",key:t.key,content:t.content,removeItem:function(){return e.removeItem("allList",t.key)},quickLinks:i.a.createElement("div",{className:"quicklinks"},i.a.createElement("a",{onClick:function(){e.moveItem(t.key,"allList")},id:t.key+"MoveWeek",href:"#week"},"Move to this week"))})}),a=this.state.weekList.map(function(t){return i.a.createElement(h,{checkedToggle:function(a){e.checkedToggle(a,t.key,"weekList")},checkedClass:t.isChecked?"fa-check-circle":"fa-circle",id:"weekList",key:t.key,content:t.content,removeItem:function(){return e.removeItem("weekList",t.key)},quickLinks:i.a.createElement("div",{className:"quicklinks"},i.a.createElement("a",{onClick:function(){e.moveItem(t.key,"weekList")},id:t.key+"MoveToday",href:"#today"},"Move to today"))})}),n=this.state.todayList.map(function(t){return i.a.createElement(h,{checkedToggle:function(a){e.checkedToggle(a,t.key,"todayList")},checkedClass:t.isChecked?"fa-check-circle":"fa-circle",id:"todayList",key:t.key,content:t.content,removeItem:function(){return e.removeItem("todayList",t.key)}})}),l=i.a.createElement(g,{id:"allList",inputToggleHandler:this.inputToggleHandler,enteringInput:this.state.enteringInput,buttonLabel:"Add a task"}),c=i.a.createElement(g,{id:"weekList",inputToggleHandler:this.inputToggleHandler,enteringInput:this.state.enteringInput,buttonLabel:"Add a task for this week"}),s=i.a.createElement(g,{id:"todayList",inputToggleHandler:this.inputToggleHandler,enteringInput:this.state.enteringInput,buttonLabel:"Add a task for today"}),r=i.a.createElement("div",null,i.a.createElement("ul",{className:"list-group",id:"allList"},t,l),i.a.createElement("ul",{className:"list-group",id:"weekList"},a),i.a.createElement("ul",{className:"list-group",id:"todayList"},n)),o=i.a.createElement("div",null,i.a.createElement("ul",{className:"list-group",id:"weekList"},a,c),i.a.createElement("ul",{className:"list-group",id:"todayList"},n)),u=i.a.createElement("div",null,i.a.createElement("ul",{className:"list-group",id:"todayList"},n,s));return"today"===this.props.activeDisplay?u:"week"===this.props.activeDisplay?o:r}}]),t}(n.Component),E="today";!function(){if(window.location.hash){var e=window.location.hash;E=e.replace("#","")}}();var b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={displays:[{label:"Today",id:"today"},{label:"This Week",id:"week"},{label:"All Tasks",id:"all"}],activeDisplay:E},a.switchDisplayHandler=function(e){a.setState({activeDisplay:e})},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"page"},i.a.createElement("div",{id:"app-container"},i.a.createElement(k,null),i.a.createElement(p,{displays:this.state.displays,switchDisplayHandler:this.switchDisplayHandler,activeDisplay:this.state.activeDisplay}),i.a.createElement(v,{activeDisplay:this.state.activeDisplay})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.7b2df697.chunk.js.map