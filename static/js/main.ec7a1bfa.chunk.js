(window.webpackJsonpreminderapp=window.webpackJsonpreminderapp||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(22),c=n.n(o),i=n(66),l=n(67),d=n(93),m=n(68),s=n(94),u=n(45),p=n(70),E=n.n(p),b=n(71),f=(n(109),n(91)),R=n.n(f),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={text:"",date:new Date},n.render_Reminders=function(){var e=n.props.reminders;return a.a.createElement("ul",{className:"list-group"},e.map(function(e){return a.a.createElement("li",{key:e.id,className:"list-group-item"},a.a.createElement("div",null,e.text),a.a.createElement("div",null,E()(new Date(e.date)).fromNow()),a.a.createElement("div",{className:"closeIcon btn btn-danger",onClick:function(){return n.props.remove_Reminder(e.id)}},"X"))}))},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:R.a}),a.a.createElement("div",{className:"reminder-title"},a.a.createElement("h2",null,"What Should U Do ?")),a.a.createElement("input",{className:"form-control",type:"text",value:this.state.text,placeholder:"Enter What U think ... ?",onChange:function(t){return e.setState({text:t.target.value})}}),a.a.createElement(b.a,{className:"form-control",value:this.state.date,placeholderText:"Enter Date",selected:this.state.date,onChange:function(t){e.setState({date:t})},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time"}),a.a.createElement("button",{onClick:function(){e.props.add_Reminder(e.state.text,e.state.date),e.setState({text:"",date:""})},className:"btn btn-primary btn-block"},"Add Reminder"),this.render_Reminders(),a.a.createElement("button",{onClick:function(){return e.props.clear_Reminder()},className:"btn btn-danger btn-block clearReminder"},"Clear Reminders"))}}]),t}(r.Component),v=Object(u.b)(function(e){return{reminders:e}},{add_Reminder:function(e,t){var n={type:"ADD_REMINDER",text:e,date:t};return console.log("Add",n),n},remove_Reminder:function(e){var t={type:"REMOVE_REMINDER",id:e};return console.log("Remove",t),t},clear_Reminder:function(){return{type:"CLEAR_REMINDERS"}}})(h),g=n(39),_=n(92),k=n(35),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;return e=Object(k.read_cookie)("reminders"),"ADD_REMINDER"===t.type?(n=[].concat(Object(_.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(k.bake_cookie)("reminders",n),console.log("from reducer ",n),n):"REMOVE_REMINDER"===t.type?(n=e.filter(function(e){return e.id!==t.id}),Object(k.bake_cookie)("reminders",n),console.log("from reducer ",n),n):"CLEAR_REMINDERS"===t.type?(n=[],Object(k.bake_cookie)("reminders",n),console.log("from reducer ",n),n):e},N=(n(110),n(111),Object(g.b)(y));c.a.render(a.a.createElement(u.a,{store:N},a.a.createElement(v,null)),document.getElementById("root"))},91:function(e,t,n){e.exports=n.p+"static/media/reminder.2c51f81e.png"},95:function(e,t,n){e.exports=n(112)}},[[95,1,2]]]);
//# sourceMappingURL=main.ec7a1bfa.chunk.js.map