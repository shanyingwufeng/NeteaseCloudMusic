(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5da39b92","chunk-6b2aad72"],{"107c":function(t,e,n){var c=n("d039");t.exports=c((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var c=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==c(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"14e5":function(t,e,n){"use strict";n("53ff")},"1e1d":function(t,e,n){"use strict";n("b0c0");var c=n("7a23"),r=Object(c["V"])("data-v-190bd9f8");Object(c["D"])("data-v-190bd9f8");var a={class:"titleBar"},o={class:"name"},i={class:"more"},s=Object(c["k"])("div",null,[Object(c["k"])("span",{class:"iconfont icon-youjiantou"})],-1);Object(c["B"])();var u=r((function(t,e,n,r,u,l){return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["k"])("span",o,Object(c["L"])(r.name),1),Object(c["k"])("div",i,[Object(c["k"])("span",null,Object(c["L"])(r.rightText),1),s])])})),l={name:"TitleBar",components:{},props:["titleBarName","rightText"],setup:function(t){var e=Object(c["F"])(),n=Object(c["F"])();return Object(c["x"])((function(){e.value=t.titleBarName,n.value=t.rightText?t.rightText:"更多"})),Object(c["z"])((function(){e.value=t.titleBarName,n.value=t.rightText?t.rightText:"更多"})),{name:e,rightText:n}}};n("c384");l.render=u,l.__scopeId="data-v-190bd9f8";e["a"]=l},"21fc":function(t,e,n){"use strict";n("81b1")},"233a":function(t,e,n){"use strict";n("77af")},2532:function(t,e,n){"use strict";var c=n("23e7"),r=n("5a34"),a=n("1d80"),o=n("577e"),i=n("ab13");c({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~o(a(this)).indexOf(o(r(t)),arguments.length>1?arguments[1]:void 0)}})},"3a5e":function(t,e,n){"use strict";var c=n("7a23"),r=Object(c["V"])("data-v-a3601dda");Object(c["D"])("data-v-a3601dda");var a={class:"loading"},o=Object(c["k"])("div",null,null,-1),i=Object(c["k"])("div",null,null,-1),s=Object(c["k"])("div",null,null,-1);Object(c["B"])();var u=r((function(t,e,n,r,u,l){return Object(c["A"])(),Object(c["g"])("div",a,[o,i,s])})),l={name:"Loading"};n("14e5");l.render=u,l.__scopeId="data-v-a3601dda";e["a"]=l},"44e7":function(t,e,n){var c=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4df4":function(t,e,n){"use strict";var c=n("0366"),r=n("7b0b"),a=n("9bdd"),o=n("e95a"),i=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,d,f,b,h=r(t),v="function"==typeof this?this:Array,O=arguments.length,g=O>1?arguments[1]:void 0,j=void 0!==g,p=u(h),m=0;if(j&&(g=c(g,O>2?arguments[2]:void 0,2)),void 0==p||v==Array&&o(p))for(e=i(h.length),n=new v(e);e>m;m++)b=j?g(h[m],m):h[m],s(n,m,b);else for(d=p.call(h),f=d.next,n=new v;!(l=f.call(d)).done;m++)b=j?a(d,g,[l.value,m],!0):l.value,s(n,m,b);return n.length=m,n}},"4f71":function(t,e,n){},"53ff":function(t,e,n){},5991:function(t,e,n){"use strict";n("96d8")},"5a34":function(t,e,n){var c=n("44e7");t.exports=function(t){if(c(t))throw TypeError("The method doesn't accept regular expressions");return t}},6062:function(t,e,n){"use strict";var c=n("6d61"),r=n("6566");t.exports=c("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var c=n("9bf2").f,r=n("7c73"),a=n("e2cc"),o=n("0366"),i=n("19aa"),s=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,b=n("69f3"),h=b.set,v=b.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,c){i(t,l,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=c&&s(c,t[u],{that:t,AS_ENTRIES:n})})),b=v(e),O=function(t,e,n){var c,r,a=b(t),o=g(t,e);return o?o.value=n:(a.last=o={index:r=f(e,!0),key:e,value:n,previous:c=a.last,next:void 0,removed:!1},a.first||(a.first=o),c&&(c.next=o),d?a.size++:t.size++,"F"!==r&&(a.index[r]=o)),t},g=function(t,e){var n,c=b(t),r=f(e);if("F"!==r)return c.index[r];for(n=c.first;n;n=n.next)if(n.key==e)return n};return a(l.prototype,{clear:function(){var t=this,e=b(t),n=e.index,c=e.first;while(c)c.removed=!0,c.previous&&(c.previous=c.previous.next=void 0),delete n[c.index],c=c.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=b(e),c=g(e,t);if(c){var r=c.next,a=c.previous;delete n.index[c.index],c.removed=!0,a&&(a.next=r),r&&(r.previous=a),n.first==c&&(n.first=r),n.last==c&&(n.last=a),d?n.size--:e.size--}return!!c},forEach:function(t){var e,n=b(this),c=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){c(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),a(l.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return O(this,0===t?0:t,e)}}:{add:function(t){return O(this,t=0===t?0:t,t)}}),d&&c(l.prototype,"size",{get:function(){return b(this).size}}),l},setStrong:function(t,e,n){var c=e+" Iterator",r=v(e),a=v(c);u(t,e,(function(t,e){h(this,{type:c,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var c=n("23e7"),r=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("f183"),s=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),b=n("d44e"),h=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),O=-1!==t.indexOf("Weak"),g=v?"set":"add",j=r[t],p=j&&j.prototype,m=j,y={},k=function(t){var e=p[t];o(p,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(O&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return O&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(O&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},x=a(t,"function"!=typeof j||!(O||p.forEach&&!d((function(){(new j).entries().next()}))));if(x)m=n.getConstructor(e,t,v,g),i.enable();else if(a(t,!0)){var S=new m,w=S[g](O?{}:-0,1)!=S,A=d((function(){S.has(1)})),I=f((function(t){new j(t)})),H=!O&&d((function(){var t=new j,e=5;while(e--)t[g](e,e);return!t.has(-0)}));I||(m=e((function(e,n){u(e,m,t);var c=h(new j,e,m);return void 0!=n&&s(n,c[g],{that:c,AS_ENTRIES:v}),c})),m.prototype=p,p.constructor=m),(A||H)&&(k("delete"),k("has"),v&&k("get")),(H||w)&&k(g),O&&p.clear&&delete p.clear}return y[t]=m,c({global:!0,forced:m!=j},y),b(m,t),O||n.setStrong(m,t,v),m}},"6e81":function(t,e,n){"use strict";n("ef94")},7156:function(t,e,n){var c=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,o;return r&&"function"==typeof(a=e.constructor)&&a!==n&&c(o=a.prototype)&&o!==n.prototype&&r(t,o),t}},"77af":function(t,e,n){},"794b":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c");var c=n("7a23"),r=Object(c["V"])("data-v-02d55299");Object(c["D"])("data-v-02d55299");var a={class:"search"},o={class:"searchInput"},i={key:1,class:"content"};Object(c["B"])();var s=r((function(t,e,n,r,s,u){var l=Object(c["H"])("Loading"),d=Object(c["H"])("SearchHistory"),f=Object(c["H"])("HotSearchList"),b=Object(c["H"])("MusicZone"),h=Object(c["H"])("SearchResult");return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["k"])("div",o,[Object(c["k"])("span",{class:"iconfont icon-jiantou-xia back",onClick:e[1]||(e[1]=function(t){return r.back()})}),Object(c["S"])(Object(c["k"])("input",{ref:"searchInput",type:"text",placeholder:t.placeholder,onKeydown:e[2]||(e[2]=Object(c["T"])((function(e){return r.search(t.searchKeyword)}),["enter"])),"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.searchKeyword=e})},null,40,["placeholder"]),[[c["O"],t.searchKeyword]]),r.searchResult?(Object(c["A"])(),Object(c["g"])("span",{key:0,class:"iconfont icon-cha-copy fork",onClick:e[4]||(e[4]=function(t){return r.fork()})})):Object(c["h"])("",!0)]),r.loading?(Object(c["A"])(),Object(c["g"])(l,{key:0})):Object(c["h"])("",!0),r.loadingContent?(Object(c["A"])(),Object(c["g"])("div",i,[Object(c["k"])(d,{onSearch:r.search},null,8,["onSearch"]),Object(c["k"])(f,{data:t.detailSearchHot,onSearch:r.search},null,8,["data","onSearch"]),Object(c["k"])(b)])):Object(c["h"])("",!0),r.searchResult?(Object(c["A"])(),Object(c["g"])(h,{key:2,data:t.searchSongs},null,8,["data"])):Object(c["h"])("",!0)])})),u=n("5530"),l=n("1da1"),d=(n("caad"),n("2532"),n("a434"),n("a630"),n("3ca3"),n("d3b7"),n("6062"),n("ddb0"),n("96cf"),Object(c["V"])("data-v-1666a7c3"));Object(c["D"])("data-v-1666a7c3");var f={class:"searchTop"},b={class:"searchInput"};Object(c["B"])();var h=d((function(t,e,n,r,a,o){return Object(c["A"])(),Object(c["g"])("div",f,[Object(c["k"])("div",b,[Object(c["k"])("span",{class:"iconfont icon-jiantou-xia",onClick:e[1]||(e[1]=function(e){return t.$router.go(-1)})}),Object(c["S"])(Object(c["k"])("input",{ref:"searchInput",type:"text",placeholder:t.placeholder,onKeydown:e[2]||(e[2]=Object(c["T"])((function(){return r.search&&r.search.apply(r,arguments)}),["enter"])),"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.searchKeyword=e})},null,40,["placeholder"]),[[c["O"],t.searchKeyword]])])])})),v=n("986b"),O=n("5502"),g={name:"SearchTop",props:["data"],setup:function(t){var e=Object(c["E"])({searchInput:"",placeholder:"",searchKeyword:"",searchHistory:[],searchSongs:[],songCount:0}),n=Object(O["c"])(),r=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.commit("hiddenSearchContent"),n.commit("showLoading"),t.next=4,Object(v["d"])(e.searchKeyword);case 4:c=t.sent,console.log(c),e.songCount=c.data.result.songCount,e.searchSongs=c.data.result.songs,localStorage.getItem("searchHistory")?(e.searchHistory=JSON.parse(localStorage.getItem("searchHistory")),e.searchHistory.push(e.searchKeyword),e.searchHistory=Array.from(new Set(e.searchHistory)),localStorage.searchHistory=JSON.stringify(e.searchHistory),n.commit("hiddenLoading")):(e.searchHistory.push(e.searchKeyword),localStorage.setItem("searchHistory",JSON.stringify(e.searchHistory)),n.commit("hiddenLoading")),n.commit("setSearchHistory",JSON.parse(localStorage.getItem("searchHistory")));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c["x"])((function(){e.searchInput.focus(),e.placeholder=t.data})),Object(c["z"])((function(){e.searchInput.focus(),e.placeholder=t.data})),Object(u["a"])(Object(u["a"])({},Object(c["M"])(e)),{},{search:r,loading:Object(c["e"])((function(){return n.state.loading}))})}};n("94e2");g.render=h,g.__scopeId="data-v-1666a7c3";var j=g,p=Object(c["V"])("data-v-ada22d50");Object(c["D"])("data-v-ada22d50");var m={key:0,class:"searchHistory"},y=Object(c["k"])("span",{class:"left"},"历史",-1),k={class:"searchHistoryList center"},x=Object(c["k"])("span",{class:"iconfont icon-shanchu1"},null,-1);Object(c["B"])();var S=p((function(t,e,n,r,a,o){return t.$store.getters.isSearchHistoryShow?(Object(c["A"])(),Object(c["g"])("div",m,[y,Object(c["k"])("div",k,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.$store.getters.searchHistory,(function(t,e){return Object(c["A"])(),Object(c["g"])("span",{class:"item",key:e,onClick:function(e){return r.search(t)}},Object(c["L"])(t),9,["onClick"])})),128))]),Object(c["k"])("div",{class:"right",onClick:e[1]||(e[1]=function(t){return r.deleteSearchHistory()})},[x])])):Object(c["h"])("",!0)})),w=(n("e17f"),n("2241")),A={name:"SearchHistory",setup:function(t,e){var n=e.emit,r=Object(O["c"])(),a=function(t){n("search",t)},o=function(){w["a"].confirm({message:"确定清除全部历史记录？"}).then((function(){r.commit("hiddenSearchHistory"),localStorage.removeItem("searchHistory")})).catch((function(){}))};return Object(c["x"])((function(){localStorage.getItem("searchHistory")?(r.state.isSearchHistoryShow=!0,r.commit("setSearchHistory",JSON.parse(localStorage.getItem("searchHistory")))):r.state.isSearchHistoryShow=!1})),{deleteSearchHistory:o,search:a}}};n("21fc");A.render=S,A.__scopeId="data-v-ada22d50";var I=A,H=Object(c["V"])("data-v-5e8a2500");Object(c["D"])("data-v-5e8a2500");var E={class:"hotSearchList"},C=Object(c["i"])('<div class="topBar" data-v-5e8a2500><div class="left" data-v-5e8a2500><span class="hotSearch" data-v-5e8a2500>热搜榜</span><span class="hotVideo" data-v-5e8a2500>视频榜</span></div><div class="right" data-v-5e8a2500><div data-v-5e8a2500><span class="iconfont icon-bofang6" data-v-5e8a2500></span></div><span data-v-5e8a2500>播放</span></div></div>',1),R={class:"list"},T={key:0,class:"content"},L={class:"searchWord"},N={key:0,class:"iconUrl"},B=Object(c["k"])("span",{class:"name"},"展开更多热搜",-1),D=Object(c["k"])("span",{class:"iconfont icon-jiantou9"},null,-1),_=Object(c["k"])("span",{class:"name"},"隐藏更多热搜",-1),K=Object(c["k"])("span",{class:"iconfont icon--up"},null,-1);Object(c["B"])();var z=H((function(t,e,n,r,a,o){var i=Object(c["I"])("lazy");return Object(c["A"])(),Object(c["g"])("div",E,[C,Object(c["k"])("div",R,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.list,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{class:"item",key:n,onClick:function(t){return r.search(e.searchWord)}},[n<t.showId?(Object(c["A"])(),Object(c["g"])("div",T,[Object(c["k"])("span",{class:["id",{hot:n<3}]},Object(c["L"])(n+1),3),Object(c["k"])("span",L,Object(c["L"])(e.searchWord),1),e.iconUrl?Object(c["S"])((Object(c["A"])(),Object(c["g"])("img",N,null,512)),[[i,e.iconUrl]]):Object(c["h"])("",!0)])):Object(c["h"])("",!0)],8,["onClick"])})),128)),t.moreShow?(Object(c["A"])(),Object(c["g"])("div",{key:0,class:"more",onClick:e[1]||(e[1]=function(){return r.action&&r.action.apply(r,arguments)})},[B,D])):Object(c["h"])("",!0),t.moreShow?Object(c["h"])("",!0):(Object(c["A"])(),Object(c["g"])("div",{key:1,class:"more",onClick:e[2]||(e[2]=function(){return r.action&&r.action.apply(r,arguments)})},[_,K]))])])})),V={name:"HotSearchList",props:["data"],emits:["search"],setup:function(t,e){var n=e.emit,r=Object(c["E"])({list:[],showId:10,moreShow:!0,active:1}),a=function(t){n("search",t)},o=function(){1==r.moreShow?r.showId=r.list.length:r.showId=10,r.moreShow=!r.moreShow};return Object(c["x"])((function(){r.list=t.data})),Object(c["z"])((function(){r.list=t.data})),Object(u["a"])(Object(u["a"])({},Object(c["M"])(r)),{},{action:o,search:a})}};n("cd27");V.render=z,V.__scopeId="data-v-5e8a2500";var M=V,F=Object(c["V"])("data-v-b4d781e6");Object(c["D"])("data-v-b4d781e6");var J={class:"musicZone"},U=Object(c["k"])("div",{class:"name"},"音乐专区",-1),P={class:"list"},G={class:"top"},q={class:"title"},W={class:"bottom"},$=Object(c["k"])("span",{class:"name"},"展开更多专区",-1),Z=Object(c["k"])("span",{class:"iconfont icon-jiantou9"},null,-1),Y=Object(c["k"])("span",{class:"name"},"隐藏更多专区",-1),Q=Object(c["k"])("span",{class:"iconfont icon--up"},null,-1);Object(c["B"])();var X=F((function(t,e,n,r,a,o){return Object(c["A"])(),Object(c["g"])("div",J,[U,Object(c["k"])("div",P,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.list,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{class:{item:r.isItemShow(n)},key:n,style:{background:e.background}},[n<t.showId?(Object(c["A"])(),Object(c["g"])("div",{key:0,class:["content",{hasSubtitle:e.subTitle,noSubtitle:!e.subTitle}]},[Object(c["k"])("div",G,[Object(c["k"])("div",q,Object(c["L"])(e.title),1),Object(c["k"])("div",null,[Object(c["k"])("span",{class:e.className},null,2)])]),Object(c["k"])("span",W,Object(c["L"])(e.subTitle),1)],2)):Object(c["h"])("",!0)],6)})),128)),t.moreShow?(Object(c["A"])(),Object(c["g"])("div",{key:0,class:"more",onClick:e[1]||(e[1]=function(){return r.action&&r.action.apply(r,arguments)})},[$,Z])):Object(c["h"])("",!0),t.moreShow?Object(c["h"])("",!0):(Object(c["A"])(),Object(c["g"])("div",{key:1,class:"more",onClick:e[2]||(e[2]=function(){return r.action&&r.action.apply(r,arguments)})},[Y,Q]))])])})),tt={name:"MusicZone",setup:function(){var t=Object(c["E"])({list:[{id:1,title:"歌手分类",background:"linear-gradient(to right,#8A7C75,#DACCC5)",className:"iconfont icon-ttpodicon"},{id:2,title:"曲风分类",subTitle:"查查你的专属曲风偏好",background:"linear-gradient(to right,#E65342,#F4AFA1)",className:"iconfont icon-qufeng"},{id:3,title:"影视原声专区",subTitle:"听歌追剧好时光",background:"linear-gradient(to right,#BA5029,#EABA8B)",className:"iconfont icon-iconweibiaoti2zhuanhuan"},{id:4,title:"电音专区",subTitle:"全球热门电音嗨翻现场",background:"linear-gradient(to right,#4D3DEC,#8BCFEE)",className:"iconfont icon-qufeng"},{id:5,title:"说唱专区",subTitle:"说唱人物志Vol.6 Travis Scott",background:"linear-gradient(to right,#E74C29,#F5BC78)",className:"iconfont icon-RAP"},{id:6,title:"摇滚专区",subTitle:"国摇新声势力等你来听",background:"linear-gradient(to right,#220771,#953097)",className:"iconfont icon-yaogun"},{id:7,title:"古典专区",subTitle:"大咖来了Vol.2:古典VS流行",background:"linear-gradient(to right,#8B5149,#E7C4AE)",className:"iconfont icon-gangqin-copy"},{id:8,title:"ACG专区",subTitle:"测测你的ACG大粉头吗",background:"linear-gradient(to right,#D85E74,#F6C9C7)",className:"iconfont icon-weibiaoti-1"},{id:9,title:"DJ专区",subTitle:"潮流网络热歌一网打尽",background:"linear-gradient(to right,#7856D3,#CBAEED)",className:"iconfont icon-dj"},{id:10,title:"亲子专区",subTitle:"陪伴宝贝快乐成长",background:"linear-gradient(to right,#DB9457,#EBD2A6)",className:"iconfont icon-qinzi"},{id:11,title:"中国特色专区",subTitle:"了解中国传统音乐文化",background:"linear-gradient(to right,#CA375E,#E58995)",className:"iconfont icon-pipa"},{id:12,title:"经典专区",subTitle:"致敬时代 留住经典",background:"linear-gradient(to right,#BA9D54,#E1D0A4)",className:"iconfont icon-cidai1-copy"}],showId:6,moreShow:!0}),e=function(e){if(e<t.showId)return!0},n=function(){1==t.moreShow?t.showId=t.list.length:t.showId=6,t.moreShow=!t.moreShow};return Object(u["a"])(Object(u["a"])({},Object(c["M"])(t)),{},{action:n,isItemShow:e})}};n("233a");tt.render=X,tt.__scopeId="data-v-b4d781e6";var et=tt,nt=Object(c["V"])("data-v-62464948");Object(c["D"])("data-v-62464948");var ct={class:"recommendedActivities"},rt=Object(c["k"])("div",{class:"name"},"推荐活动",-1),at={class:"list"},ot={class:"title"};Object(c["B"])();var it=nt((function(t,e,n,r,a,o){var i=Object(c["I"])("lazy");return Object(c["A"])(),Object(c["g"])("div",ct,[rt,Object(c["k"])("div",at,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(r.list,(function(t,e){return Object(c["A"])(),Object(c["g"])("div",{class:"item",key:e},[Object(c["S"])(Object(c["k"])("img",null,null,512),[[i,t.imgUrl]]),Object(c["k"])("span",ot,Object(c["L"])(t.title),1)])})),128))])])})),st={name:"RecommendedActivities",setup:function(){var t=Object(c["E"])([{id:1,imgUrl:n("cf05"),title:"邀请福利：速领现金券+VIP月卡！"},{id:2,imgUrl:n("cf05"),title:"说唱人物志Vol.6：Travis Scott的奇妙游乐园"}]);return{list:t}}};n("b13e");st.render=it,st.__scopeId="data-v-62464948";var ut=st,lt=n("8cc6"),dt=n("3a5e"),ft=n("6c02"),bt={name:"Search",components:{SearchTop:j,SearchHistory:I,HotSearchList:M,MusicZone:et,RecommendedActivities:ut,SearchResult:lt["default"],Loading:dt["a"]},setup:function(){var t=Object(c["E"])({searchInput:"",placeholder:"",searchKeyword:"",searchHistory:[],searchSongs:[],songCount:0,detailSearchHot:[]}),e=Object(O["c"])(),n=Object(ft["d"])(),r=function(){e.getters.searchResult?(t.searchKeyword="",e.commit("hiddenSearchResult"),e.commit("showLoadingContent")):n.go(-1)},a=function(){t.searchKeyword="",t.searchInput.focus(),e.commit("hiddenSearchResult"),e.commit("showLoadingContent")};Object(c["x"])(Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("hiddenLoadingContent"),e.commit("showLoading"),e.commit("hiddenSearchResult"),n.next=5,Object(v["b"])().then((function(e){t.searchInput.focus(),t.placeholder=e.data.data.showKeyword}));case 5:return n.next=7,Object(v["a"])().then((function(n){t.detailSearchHot=n.data.data,e.commit("hiddenLoading"),e.commit("showLoadingContent")}));case 7:case"end":return n.stop()}}),n)}))));var o=function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(c){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("showLoading"),e.commit("hiddenLoadingContent"),e.commit("hiddenSearchResult"),t.searchKeyword=c,n.next=6,Object(v["d"])(t.searchKeyword).then(function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(c){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.songCount=c.data.result.songCount,t.searchSongs=c.data.result.songs,e.commit("hiddenLoading"),e.commit("showSearchResult");case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 6:localStorage.getItem("searchHistory")?(t.searchHistory=JSON.parse(localStorage.getItem("searchHistory")),t.searchHistory.includes(c)&&(r=t.searchHistory.indexOf(c),t.searchHistory.splice(r,1)),t.searchHistory.push(t.searchKeyword),t.searchHistory=Array.from(new Set(t.searchHistory)),t.searchHistory.reverse(),localStorage.searchHistory=JSON.stringify(t.searchHistory)):(t.searchHistory=[],t.searchHistory.push(t.searchKeyword),t.searchHistory.reverse(),localStorage.setItem("searchHistory",JSON.stringify(t.searchHistory))),e.commit("setSearchHistory",JSON.parse(localStorage.getItem("searchHistory")));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(u["a"])(Object(u["a"])({},Object(c["M"])(t)),{},{back:r,fork:a,search:o,loading:Object(c["e"])((function(){return e.state.loading})),loadingContent:Object(c["e"])((function(){return e.state.loadingContent})),searchResult:Object(c["e"])((function(){return e.state.searchResult}))})}};n("5991");bt.render=s,bt.__scopeId="data-v-02d55299";e["default"]=bt},"808c":function(t,e,n){},"81b1":function(t,e,n){},"841c":function(t,e,n){"use strict";var c=n("d784"),r=n("825a"),a=n("1d80"),o=n("129f"),i=n("577e"),s=n("14c3");c("search",(function(t,e,n){return[function(e){var n=a(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,n):new RegExp(e)[t](i(n))},function(t){var c=r(this),a=i(t),u=n(e,c,a);if(u.done)return u.value;var l=c.lastIndex;o(l,0)||(c.lastIndex=0);var d=s(c,a);return o(c.lastIndex,l)||(c.lastIndex=l),null===d?-1:d.index}]}))},"8cc6":function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),r=Object(c["V"])("data-v-20ceb3ff");Object(c["D"])("data-v-20ceb3ff");var a={class:"searchResult"},o={class:"songList"},i={class:"list"},s={class:"left"},u={class:"title"},l={class:"bottom"},d={class:"author"},f=Object(c["k"])("div",{class:"right"},[Object(c["k"])("span",{class:"iconfont icon-bofang"}),Object(c["k"])("span",{class:"iconfont icon-gengduo"})],-1),b={class:"watchAll"},h=Object(c["k"])("div",null,[Object(c["k"])("span",{class:"iconfont icon-youjiantou"})],-1);Object(c["B"])();var v=r((function(t,e,n,v,O,g){var j=Object(c["H"])("TitleBar"),p=Object(c["H"])("router-link");return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["k"])("div",o,[Object(c["k"])(j,{titleBarName:"单曲"}),Object(c["k"])("div",i,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.songList,(function(t,e){return Object(c["A"])(),Object(c["g"])(p,{class:"item",key:e,to:{path:"/playpage",query:{id:t.id}}},{default:r((function(){return[Object(c["k"])("div",s,[Object(c["k"])("div",u,Object(c["L"])(t.name),1),Object(c["k"])("div",l,[Object(c["k"])("span",d,Object(c["L"])(t.artists[0].name),1)])]),f]})),_:2},1032,["to"])})),128))]),Object(c["k"])("div",b,[Object(c["k"])("span",null,"查看全部"+Object(c["L"])(t.songCount)+"首单曲",1),h])])])})),O=n("5530"),g=(n("fb6a"),n("1e1d")),j={name:"SearchResult",components:{TitleBar:g["a"]},props:["data"],setup:function(t){var e=Object(c["E"])({songList:[],songCount:0});return Object(c["x"])((function(){e.songList=t.data.slice(0,5),e.songCount=t.data.length})),Object(O["a"])({},Object(c["M"])(e))}};n("6e81");j.render=v,j.__scopeId="data-v-20ceb3ff";e["default"]=j},"91d4":function(t,e,n){},9263:function(t,e,n){"use strict";var c=n("577e"),r=n("ad6d"),a=n("9f7f"),o=n("5692"),i=n("7c73"),s=n("69f3").get,u=n("fce3"),l=n("107c"),d=RegExp.prototype.exec,f=o("native-string-replace",String.prototype.replace),b=d,h=function(){var t=/a/,e=/b*/g;return d.call(t,"a"),d.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],g=h||O||v||u||l;g&&(b=function(t){var e,n,a,o,u,l,g,j=this,p=s(j),m=c(t),y=p.raw;if(y)return y.lastIndex=j.lastIndex,e=b.call(y,m),j.lastIndex=y.lastIndex,e;var k=p.groups,x=v&&j.sticky,S=r.call(j),w=j.source,A=0,I=m;if(x&&(S=S.replace("y",""),-1===S.indexOf("g")&&(S+="g"),I=m.slice(j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&"\n"!==m.charAt(j.lastIndex-1))&&(w="(?: "+w+")",I=" "+I,A++),n=new RegExp("^(?:"+w+")",S)),O&&(n=new RegExp("^"+w+"$(?!\\s)",S)),h&&(a=j.lastIndex),o=d.call(x?n:j,I),x?o?(o.input=o.input.slice(A),o[0]=o[0].slice(A),o.index=j.lastIndex,j.lastIndex+=o[0].length):j.lastIndex=0:h&&o&&(j.lastIndex=j.global?o.index+o[0].length:a),O&&o&&o.length>1&&f.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&k)for(o.groups=l=i(null),u=0;u<k.length;u++)g=k[u],l[g[0]]=o[g[1]];return o}),t.exports=b},"94e2":function(t,e,n){"use strict";n("91d4")},"96d8":function(t,e,n){},"986b":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i}));var c=n("0c6d");function r(){return Object(c["a"])({url:"/search/default"})}function a(){return Object(c["a"])({url:"/search/hot"})}function o(){return Object(c["a"])({url:"/search/hot/detail"})}function i(t){return Object(c["a"])({url:"/search?keywords="+t})}},"9bdd":function(t,e,n){var c=n("825a"),r=n("2a62");t.exports=function(t,e,n,a){try{return a?e(c(n)[0],n[1]):e(n)}catch(o){throw r(t),o}}},"9f7f":function(t,e,n){var c=n("d039"),r=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=c((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=c((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var c=n("23e7"),r=n("23cb"),a=n("a691"),o=n("50c4"),i=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),f=Math.max,b=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,c,l,d,O,g,j=i(this),p=o(j.length),m=r(t,p),y=arguments.length;if(0===y?n=c=0:1===y?(n=0,c=p-m):(n=y-2,c=b(f(a(e),0),p-m)),p+n-c>h)throw TypeError(v);for(l=s(j,c),d=0;d<c;d++)O=m+d,O in j&&u(l,d,j[O]);if(l.length=c,n<c){for(d=m;d<p-c;d++)O=d+c,g=d+n,O in j?j[g]=j[O]:delete j[g];for(d=p;d>p-c+n;d--)delete j[d-1]}else if(n>c)for(d=p-c;d>m;d--)O=d+c-1,g=d+n-1,O in j?j[g]=j[O]:delete j[g];for(d=0;d<n;d++)j[d+m]=arguments[d+2];return j.length=p-c+n,l}})},a630:function(t,e,n){var c=n("23e7"),r=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));c({target:"Array",stat:!0,forced:o},{from:r})},ab13:function(t,e,n){var c=n("b622"),r=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(c){}}return!1}},ac1f:function(t,e,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var c=n("825a");t.exports=function(){var t=c(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b13e:function(t,e,n){"use strict";n("da8e")},bb2f:function(t,e,n){var c=n("d039");t.exports=!c((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c384:function(t,e,n){"use strict";n("4f71")},caad:function(t,e,n){"use strict";var c=n("23e7"),r=n("4d64").includes,a=n("44d2");c({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},cd27:function(t,e,n){"use strict";n("808c")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d784:function(t,e,n){"use strict";n("ac1f");var c=n("6eeb"),r=n("9263"),a=n("d039"),o=n("b622"),i=n("9112"),s=o("species"),u=RegExp.prototype;t.exports=function(t,e,n,l){var d=o(t),f=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),b=f&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!b||n){var h=/./[d],v=e(d,""[t],(function(t,e,n,c,a){var o=e.exec;return o===r||o===u.exec?f&&!a?{done:!0,value:h.call(e,n,c)}:{done:!0,value:t.call(n,e,c)}:{done:!1}}));c(String.prototype,t,v[0]),c(u,d,v[1])}l&&i(u[d],"sham",!0)}},da8e:function(t,e,n){},ef94:function(t,e,n){},f183:function(t,e,n){var c=n("23e7"),r=n("d012"),a=n("861d"),o=n("5135"),i=n("9bf2").f,s=n("241c"),u=n("057f"),l=n("90e3"),d=n("bb2f"),f=!1,b=l("meta"),h=0,v=Object.isExtensible||function(){return!0},O=function(t){i(t,b,{value:{objectID:"O"+h++,weakData:{}}})},g=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,b)){if(!v(t))return"F";if(!e)return"E";O(t)}return t[b].objectID},j=function(t,e){if(!o(t,b)){if(!v(t))return!0;if(!e)return!1;O(t)}return t[b].weakData},p=function(t){return d&&f&&v(t)&&!o(t,b)&&O(t),t},m=function(){y.enable=function(){},f=!0;var t=s.f,e=[].splice,n={};n[b]=1,t(n).length&&(s.f=function(n){for(var c=t(n),r=0,a=c.length;r<a;r++)if(c[r]===b){e.call(c,r,1);break}return c},c({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},y=t.exports={enable:m,fastKey:g,getWeakData:j,onFreeze:p};r[b]=!0},fb6a:function(t,e,n){"use strict";var c=n("23e7"),r=n("861d"),a=n("e8b5"),o=n("23cb"),i=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=d("slice"),b=l("species"),h=[].slice,v=Math.max;c({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,c,l,d=s(this),f=i(d.length),O=o(t,f),g=o(void 0===e?f:e,f);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,O,g);for(c=new(void 0===n?Array:n)(v(g-O,0)),l=0;O<g;O++,l++)O in d&&u(c,l,d[O]);return c.length=l,c}})},fce3:function(t,e,n){var c=n("d039");t.exports=c((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-5da39b92.31cc0c0d.js.map