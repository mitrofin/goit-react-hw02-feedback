(this["webpackJsonpgoit-react-hw02-feedback"]=this["webpackJsonpgoit-react-hw02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={statsList:"Statistics_statsList__Bos4Q"}},11:function(t,e,a){t.exports={notificationTitle:"Notification_notificationTitle__1HYGp"}},19:function(t,e,a){"use strict";a.r(e);var c=a(2),s=a.n(c),n=a(7),i=a.n(n),r=(a(6),a(8)),o=a(9),l=a(10),b=a(13),d=a(12),u=a(1),j=a.n(u),h=a(0);var m=function(t){var e=t.good,a=t.bad,c=t.neutral,s=t.total,n=t.positivePercentage;return Object(h.jsxs)("ul",{className:j.a.statsList,children:[Object(h.jsx)("li",{className:j.a.statsListItem,children:Object(h.jsxs)("p",{className:j.a.itemText,children:["Good: ",e]})}),Object(h.jsx)("li",{className:j.a.statsListItem,children:Object(h.jsxs)("p",{className:j.a.itemText,children:["Neutral: ",c]})}),Object(h.jsx)("li",{className:j.a.statsListItem,children:Object(h.jsxs)("p",{className:j.a.itemText,children:["Bad: ",a]})}),Object(h.jsx)("li",{className:j.a.statsListItem,children:Object(h.jsxs)("p",{className:j.a.itemText,children:["Total: ",s]})}),Object(h.jsx)("li",{className:j.a.statsListItem,children:Object(h.jsxs)("p",{className:j.a.itemText,children:["Positive feedback: ",n,"%"]})})]})},x=a(4),f=a.n(x);function p(t){var e=t.title,a=t.children;return Object(h.jsxs)("section",{className:f.a.section,children:[Object(h.jsx)("h2",{className:f.a.sectionTitle,children:e}),a]})}var O=a(11),v=a.n(O);function k(t){var e=t.message;return Object(h.jsx)("h3",{className:v.a.notificationTitle,children:e})}var g=a(5),N=a.n(g);function _(t){var e=t.options,a=t.leaveFeedback;return Object(h.jsx)("div",{className:N.a.buttonWrapper,children:Object.keys(e).map((function(t){return Object(h.jsx)("button",{type:"button",className:N.a.button,id:t,onClick:function(t){return a(t)},children:t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase()},t)}))})}var T=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.feedbackHandler=function(e){t.setState((function(t){var a=e.target.id;return Object(r.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(100/t.countTotalFeedback()*t.state.good)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad,s=this.countTotalFeedback();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback!",children:Object(h.jsx)(_,{options:this.state,leaveFeedback:this.feedbackHandler})}),Object(h.jsxs)(p,{title:"Statistics",children:[0===s&&Object(h.jsx)(k,{message:"No feedback given"}),s>0&&Object(h.jsx)(m,{good:e,neutral:a,bad:c,total:s,positivePercentage:this.countPositiveFeedbackPercentage()})]})]})}}]),a}(c.Component);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))},4:function(t,e,a){t.exports={section:"Section_section__2wwCI",sectionTitle:"Section_sectionTitle__1caKA"}},5:function(t,e,a){t.exports={buttonWrapper:"Feedback_buttonWrapper__3UQcg",button:"Feedback_button__3bahM"}},6:function(t,e,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.a75c69f7.chunk.js.map