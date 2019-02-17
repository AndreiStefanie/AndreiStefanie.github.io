(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,n){var content=n(148);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("66000c34",content,!0,{sourceMap:!1})},146:function(e,t,n){"use strict";var r={name:"Heading",props:{h1:String,h1E:String,h2:String}},o=n(7),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"lg-heading"},[e._v("\n    "+e._s(e.h1)+"\n    "),n("span",{staticClass:"text-secondary"},[e._v("\n      "+e._s(e.h1E)+"\n    ")])]),e._v(" "),n("h2",{staticClass:"sm-heading"},[e._v("\n    "+e._s(e.h2)+"\n  ")])])},[],!1,null,null,null);t.a=component.exports},147:function(e,t,n){"use strict";var r=n(145);n.n(r).a},148:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,".card{display:flex;position:relative;z-index:2;flex-direction:column;align-content:center}.card-title{flex:0 1 1fr;order:1}.card-content{flex:1 0 2fr;order:2}.card-tags{flex:0 1 1fr;order:3;justify-self:flex-end}.tags-container{position:relative;display:flex;flex-flow:row wrap;justify-content:center;align-content:flex-end;text-align:center}.tag{background-color:#eece1a;color:#000;padding:.2rem .3rem;margin:.7rem .3rem;white-space:nowrap;font:italic .8rem serif}.card-links{position:absolute;top:10px;right:10px}.card-link{cursor:pointer;margin:.4rem;z-index:4}.card-link,.website{position:relative}",""])},149:function(e,t,n){"use strict";var r={name:"Card",props:{title:String,subtitle:String,content:String,website:String,source:String,tags:Array}},o=(n(147),n(7)),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job card"},[n("h3",{staticClass:"card-title"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"card-content",domProps:{innerHTML:e._s(e.content)}}),e._v(" "),n("div",{staticClass:"tags-container card-tags"},e._l(e.tags,function(t){return n("span",{key:t,staticClass:"tag"},[e._v(e._s(t))])}),0),e._v(" "),n("div",{staticClass:"card-links"},[e.website?n("a",{staticClass:"website card-link",attrs:{href:e.website,target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fas fa-external-link-square-alt"})]):e._e(),e._v(" "),e.source?n("a",{staticClass:"source card-link",attrs:{href:e.source,target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-github"})]):e._e()])])},[],!1,null,null,null);t.a=component.exports},154:function(e,t,n){"use strict";n.r(t);var r=[{name:"Real Estate",description:'This was always a fairly interesting topic to me, but just recently I started to really explore and understand it.<br>Check out the story on how I bought my first apartment <a href="">here</a>(upcomming)',category:"finance",date:"01.06.2018"},{name:"Design Systems",description:"The end-user is the ultimate judge of our work. There is no point in having extraordinary features if the user doesn't understand how to use them.<br>Also, design-wise, we (developers) have an easier time than ever thanks to design systems such as material design or fiori",category:"work",date:"10.08.2018"},{name:"Firebase",description:'After watching a few videos from <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw">Google Developers</a> and <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCP4bf6IHJJQehibu6ai__cg">Firebase</a>, I got curious about it. The approach is quite different than our usual client-server one, but with the recent interest around serverless, I think it\'s a really good starting point',category:"work",date:"15.07.2018"},{name:"Web Components (and Polymer)",description:"After seeing how much attention web components are getting (it turns out pretty much any company that has a decent website uses them; also, google seems to push polymer way harder than angular), I started digging a bit deeper.<br/>Nowadays, people (including me) tend to avoid learning new frameworks mostly because how fast they are changing (this is my guess at least). Polymer doesn't feel like that.<br/>Also, other frameworks seem to embrace web components - Vue, for example, supports creating web components with it's CLI (the vue library is still needed to run the component, however, it can be integrated just like a native one.",category:"",date:"01.09.2018"}],o=n(149),l={name:"InterestsContainer",props:{interests:Array},components:{Card:o.a}},c=n(7),d=Object(c.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-container flex-wrap"},this._l(this.interests,function(i){return t("Card",{key:i.title,staticClass:"flex-item mb-2",attrs:{title:i.name,subtitle:i.category,content:i.description,links:i.links}})}),1)},[],!1,null,null,null).exports,h=n(146),f={name:"Interests",components:{InterestsContainer:d,Heading:h.a},data:function(){return{interests:r.sort(function(e,t){return e.date>t.date}),showOlder:!1}},computed:{mostRecent:function(){return this.interests.slice(0,4)},old:function(){return this.interests.slice(4)}},scrollToTop:!0},m=Object(c.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("Heading",{attrs:{h1:"Current",h1E:"Interests",h2:"Some of the domains, projects, and activities that I currently focus on"}}),this._v(" "),t("interests-container",{staticClass:"mb-4 mt-2",attrs:{interests:this.mostRecent}})],1)},[],!1,null,null,null);t.default=m.exports}}]);