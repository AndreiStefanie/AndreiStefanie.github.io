(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(t,e,s){var a=s(142);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(16).default)("0dc7caf4",a,!0,{})},141:function(t,e,s){"use strict";var a=s(139);s.n(a).a},142:function(t,e,s){(t.exports=s(15)(!1)).push([t.i,"\n.card{display:flex;position:relative;z-index:2;flex-direction:column;align-content:center\n}\n.card-title{flex:0 1 15%;order:1\n}\n.card-content{flex:1 0 70%;order:2\n}\n.card-tags{flex:0 1 15%;order:3;justify-self:flex-end\n}\n.tags-container{position:relative;display:flex;flex-flow:row wrap;justify-content:center;align-content:flex-end;text-align:center\n}\n.tag{background-color:#eece1a;color:#000;padding:.2rem .3rem;margin:.7rem .3rem;white-space:nowrap;font:italic .8rem serif\n}\n.card-links{position:absolute;top:10px;right:10px\n}\n.card-link{cursor:pointer;margin:.4rem;z-index:4\n}\n.card-link,.website{position:relative\n}",""])},143:function(t,e,s){"use strict";var a={name:"Card",props:{title:String,subtitle:String,content:String,website:String,source:String,tags:Array}},n=(s(141),s(6)),r=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"job card"},[s("h3",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"card-content",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),s("div",{staticClass:"tags-container card-tags"},t._l(t.tags,function(e){return s("span",{key:e,staticClass:"tag"},[t._v(t._s(e))])})),t._v(" "),s("div",{staticClass:"card-links"},[t.website?s("a",{staticClass:"website card-link",attrs:{href:t.website,target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fas fa-external-link-square-alt"})]):t._e(),t._v(" "),t.source?s("a",{staticClass:"source card-link",attrs:{href:t.source,target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fab fa-github"})]):t._e()])])},[],!1,null,null,null);r.options.__file="Card.vue";e.a=r.exports},145:function(t,e,s){"use strict";e.a=[{name:"SlimList",description:"I built this as a side project because I couldn't find a to-do app that just stays out of my way. Also, it was a good opportunity to work with what firebase has to offer (fantastic experience) and get a better understanding of PWA concepts.",tags:["Vue","Material Design","Firebase","Javascript","PWA"],image:"slimlist.png",website:"https://slimlist-19a19.firebaseapp.com/",source:"https://github.com/AndreiStefanie/slimlist-vue"},{name:"Cluj Refill",description:"Part of an european project. It aims to encourage and facilitate the <strong>reuse</strong> of vacant places. <br/>It was built in roughly 3 months by me together with a small group of highly motivated colleagues.",tags:["Vue","nodejs","express","javascript","sequelizejs"],image:"refill.png",website:"https://clujrefill.ro"},{name:"msg.PUMA",description:"Built on top of the widely used SAP FS-RI module, msg.<strong>PUMA</strong> (<strong>P</strong>rofessional <strong>U</strong>nderwriting <strong>M</strong>anagement <strong>A</strong>pplication) covers all the standard processes required by the facultative reinsurance business and much more. It will forever be one of my favorite projects. Really nice team, well structured and planned project, and very interesting from both technical and business points of view.",tags:["Abap","Floor Plan Manager","FS-RI","SAP"],image:""},{name:"msg.WorkManagement",description:"I proposed this as an introductory project for a few new colleagues. It turned out that the company could actually use it since the target business case (project assignments mainly) was handled through a huge excel file. The overall feedback received from the managers was very positive and I was also impressed by the amount of work my colleagues put into it.",tags:["Abap","Floor Plan Manager"],image:""},{name:"Course Rating Platform",description:"This is my <strong>diploma project</strong>. <br/>It provides a platform for students to <strong>anonymously</strong> provide feedback to their teachers and helps teachers visualize and understand the result. <br/>It completely avoids the error-prone anonymous code access method by leveraging <strong>Intel SGX</strong>.",tags:["Vue","Intel SGX","Lumen","PHP"],image:"crp-architecture.png",source:""},{name:"msg.myWorkPlace",description:"",tags:["Abap","UI5","Cordova","Floor Plan Manager"],image:""},{name:"thxOS",description:"The project was built on top of a provided bootloader. It supports <strong>64bit</strong> (long) mode, <strong>interrupts</strong> (hardware and software), and <strong>user input</strong>.",tags:["C","asm","Operating Systems"],image:"",source:"https://github.com/AndreiStefanie/thxOS"},{name:"pintOS",description:"Pintos is a project widely used for teaching <strong>operating systems design</strong>. We started with a basic version and implemented functionality like <strong>thread scheduling</strong> and <strong>file handling</strong>.",tags:["C","asm","Operating Systems"],image:""},{name:"FileParser",description:"",tags:["C++","Win32 API","DLL"],image:"",source:"https://github.com/AndreiStefanie/fileParser"}]},146:function(t,e,s){var a=s(150);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(16).default)("05256fa7",a,!0,{})},149:function(t,e,s){"use strict";var a=s(146);s.n(a).a},150:function(t,e,s){(t.exports=s(15)(!1)).push([t.i,'\n.msg[data-v-54cca624]{color:#841439\n}\n.project-bg[data-v-54cca624]{background-size:cover;background-repeat:no-repeat;background-position:50%;position:relative;z-index:-2\n}\n.project-bg[data-v-54cca624]:after{content:"";position:absolute;top:0;right:0;width:100%;height:100%;z-index:-1;background:rgba(85,85,85,.8)\n}',""])},154:function(t,e,s){"use strict";s.r(e);var a=s(79),n=s.n(a),r=s(143),o=s(145),i=n()({name:"ProjectPage",scrollToTop:!0,components:{Card:r.a},data:function(){return{projects:o.a}}},"scrollToTop",!0),c=(s(149),s(6)),l=Object(c.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("main",{attrs:{id:"work"}},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("div",{staticClass:"flex-container flex-wrap"},this._l(this.projects,function(t){return e("Card",{key:t.title,staticClass:"flex-item project-bg mb-2",style:t.image?{backgroundImage:"url(/img/"+t.image+")"}:"",attrs:{title:t.name,content:t.description,website:t.website,source:t.source,tags:t.tags}})}))])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"lg-heading"},[this._v("\n    My\n    "),e("span",{staticClass:"text-secondary"},[this._v("Work")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"sm-heading"},[this._v("\n    Here are a few of the most notable projects I worked on.\n    Some of them are from "),e("a",{staticClass:"msg",attrs:{href:"https://www.msg-systems.ro/",target:"_blank"}},[this._v("msg")]),this._v(",\n    the company I work for, some others are from university,\n    and others from my free time.\n  ")])}],!1,null,"54cca624",null);l.options.__file="projects.vue";e.default=l.exports}}]);