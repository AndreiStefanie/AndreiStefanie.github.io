webpackJsonp([1],{"6R/f":function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-container flex-wrap"},this._l(this.interests,function(t){return e("Card",{key:t.title,staticClass:"flex-item mb-2",attrs:{title:t.name,subtitle:t.category,content:t.description,links:t.links}})}))};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"73Cz":function(t,e,n){"use strict";e.a={name:"Card",props:{title:String,subtitle:String,content:String,links:Array}}},Roju:function(t,e,n){"use strict";var s=n("w1L5"),r=n("6R/f"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src/components/InterestsContainer.vue",e.a=i.exports},TenU:function(t,e,n){"use strict";var s=n("VvlD"),r=n("Roju");e.a={name:"Interests",components:{InterestsContainer:r.a},data:function(){return{interests:s.a.sort(function(t,e){return t.date>e.date}),showOlder:!1}},computed:{mostRecent:function(){return this.interests.slice(0,3)},old:function(){return this.interests.slice(3)}},scrollToTop:!0}},VvlD:function(t,e,n){"use strict";e.a=[{name:"Real Estate",description:'This was always a fairly interesting topic to me, but just recently I started to really explore and understand it.<br>Check out the story on how I bought my first apartment <a href="">here</a>(upcomming)',category:"finance",date:"01.06.2018"},{name:"Design Systems",description:"The end-user is the ultimate judge of our work. There is no point in having extraordinary features if the user doesn't understand how to use them.<br>Also, design-wise, we (developers) have an easier time than ever thanks to design systems such as material design or fiori",category:"work",date:"10.08.2018"},{name:"Firebase",description:'After watching a few videos from <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw">Google Developers</a> and <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCP4bf6IHJJQehibu6ai__cg">Firebase</a>, I got curious about it. The approach is quite different than our usual client-server one, but with the recent interest around serverless, I think it\'s a really good starting point',category:"work",date:"15.07.2018"}]},XPhr:function(t,e,n){var s=n("fwvP");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("0dd2b1ce",s,!1,{sourceMap:!1})},fwvP:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},k2qE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("TenU"),r=n("sliZ"),i=!1;var a=function(t){i||n("XPhr")},o=n("VU/8")(s.a,r.a,!1,a,null,null);o.options.__file="src/pages/currently.vue",e.default=o.exports},onIg:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"job"},[n("h3",[t._v(t._s(t.title))]),n("h5",[t._v(t._s(t.subtitle))]),n("p",{domProps:{innerHTML:t._s(t.content)}})])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},rhdv:function(t,e,n){"use strict";var s=n("73Cz"),r=n("onIg"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src/components/Card.vue",e.a=i.exports},sliZ:function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("main",[this._m(0),e("h2",{staticClass:"sm-heading"},[this._v("\n    Some of the domains, projects, and activities that I currently focus on\n  ")]),e("interests-container",{staticClass:"mb-4 mt-2",attrs:{interests:this.mostRecent}})],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"lg-heading"},[this._v("\n    Current\n    "),e("span",{staticClass:"text-secondary"},[this._v("Interests")])])}]};e.a=r},w1L5:function(t,e,n){"use strict";var s=n("rhdv");e.a={name:"InterestsContainer",props:{interests:Array},components:{Card:s.a}}}});