(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{796:function(e,t,n){"use strict";n.r(t);var r=n(348),d=n(612),c=n(606),l=n(611),o=n(23),h=n(19),m=(n(91),n(95)),v=n.n(m),f={name:"View Schedule",data:function(){return{schedule:[],headers:[{text:"Day",value:"day"},{text:"Start Time",value:"timeStart"},{text:"End Time",value:"timeEnd"},{text:"Class Name",value:"className"},{text:"Studio Number",value:"studioNum"},{text:"Age Group",value:"ageGroup"},{text:"Additional Information",value:"addInformation"},{text:"Start Date",value:"startDate"},{text:"End Date",value:"endDate"}]}},methods:{getSchedule:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://www.beyonddancers.com/admin/schedule").then((function(t){e.schedule=t.data,console.log(Object(o.a)(t.data))}));case 2:case"end":return t.stop()}}),t)})))()}},created:function(){this.getSchedule()}},w=n(79),component=Object(w.a)(f,(function(){var e=this,t=e._self._c;return t(l.a,[t("h2",{staticClass:"txt-header"},[e._v("View Schedule")]),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(r.a,{attrs:{id:"inspire"}},[t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.schedule,"items-per-page":10}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);