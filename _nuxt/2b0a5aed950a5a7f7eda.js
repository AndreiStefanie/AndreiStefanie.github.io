(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";var s={name:"Heading",props:{h1:String,h1E:String,h2:String}},r=n(6),a=Object(r.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"lg-heading"},[e._v("\n    "+e._s(e.h1)+"\n    "),n("span",{staticClass:"text-secondary"},[e._v("\n      "+e._s(e.h1E)+"\n    ")])]),e._v(" "),n("h2",{staticClass:"sm-heading"},[e._v("\n    "+e._s(e.h2)+"\n  ")])])},[],!1,null,null,null);a.options.__file="Heading.vue";t.a=a.exports},140:function(e,t,n){"use strict";var s={name:"Card",props:{title:String,subtitle:String,content:String,links:Array}},r=n(6),a=Object(r.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job"},[n("h3",[e._v(e._s(e.title))]),e._v(" "),n("h5",[e._v(e._s(e.subtitle))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.content)}})])},[],!1,null,null,null);a.options.__file="Card.vue";t.a=a.exports},141:function(e,t,n){var s=n(145);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n(16).default)("0865e527",s,!0,{})},144:function(e,t,n){"use strict";var s=n(141);n.n(s).a},145:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"",""])},148:function(e,t,n){"use strict";n.r(t);var s=[{name:"Real Estate",description:'This was always a fairly interesting topic to me, but just recently I started to really explore and understand it.<br>Check out the story on how I bought my first apartment <a href="">here</a>(upcomming)',category:"finance",date:"01.06.2018"},{name:"Design Systems",description:"The end-user is the ultimate judge of our work. There is no point in having extraordinary features if the user doesn't understand how to use them.<br>Also, design-wise, we (developers) have an easier time than ever thanks to design systems such as material design or fiori",category:"work",date:"10.08.2018"},{name:"Firebase",description:'After watching a few videos from <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw">Google Developers</a> and <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCP4bf6IHJJQehibu6ai__cg">Firebase</a>, I got curious about it. The approach is quite different than our usual client-server one, but with the recent interest around serverless, I think it\'s a really good starting point',category:"work",date:"15.07.2018"},{name:"Web Components (and Polymer)",description:"After seeing how much attention web components are getting (it turns out pretty much any company that has a decent website uses them; also, google seems to push polymer way harder than angular), I started digging a bit deeper.<br/>Nowadays, people (including me) tend to avoid learning new frameworks mostly because how fast they are changing (this is my guess at least). Polymer doesn't feel like that.<br/>Also, other frameworks seem to embrace web components - Vue, for example, supports creating web components with it's CLI (the vue library is still needed to run the component, however, it can be integrated just like a native one.",category:"",date:"01.09.2018"}],r=n(140),a={name:"InterestsContainer",props:{interests:Array},components:{Card:r.a}},i=n(6),o=Object(i.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-container flex-wrap"},this._l(this.interests,function(e){return t("Card",{key:e.title,staticClass:"flex-item mb-2",attrs:{title:e.name,subtitle:e.category,content:e.description,links:e.links}})}))},[],!1,null,null,null);o.options.__file="InterestsContainer.vue";var l=o.exports,c=n(139),u={name:"Interests",components:{InterestsContainer:l,Heading:c.a},data:function(){return{interests:s.sort(function(e,t){return e.date>t.date}),showOlder:!1}},computed:{mostRecent:function(){return this.interests.slice(0,4)},old:function(){return this.interests.slice(4)}},scrollToTop:!0},h=(n(144),Object(i.a)(u,function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("Heading",{attrs:{h1:"Current",h1E:"Interests",h2:"Some of the domains, projects, and activities that I currently focus on"}}),this._v(" "),t("interests-container",{staticClass:"mb-4 mt-2",attrs:{interests:this.mostRecent}})],1)},[],!1,null,null,null));h.options.__file="currently.vue";t.default=h.exports}}]);