(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99d635de"],{"2d3b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("br"),t.searchResults.length>0?r("div",[r("h4",[t._v('Search results for "'+t._s(this.$route.query.q)+'"')]),r("hr"),r("ProductGrid",{attrs:{products:t.searchResults}})],1):r("div",[t._m(0),r("button",{staticClass:"prod-btn"},[r("router-link",{attrs:{to:"/"}},[t._v("Here!")])],1)])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",[t._v("Nothing Found! "),r("br"),t._v(" Checkout our other Produccts!")])}],c=(r("4de4"),r("caad"),r("a15b"),r("2532"),r("5530")),s=r("2f62"),o=r("40f8"),a={name:"Search",data:function(){return{query:this.$route.query.q}},computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])({products:"getProducts"})),{},{searchResults:function(){var t=this;return this.products.filter((function(e){return e.tags.join().includes(t.$route.query.q)}))}}),created:function(){},components:{ProductGrid:o["a"]}},i=a,d=(r("a56f"),r("2877")),h=Object(d["a"])(i,n,u,!1,null,"773d4530",null);e["default"]=h.exports},"3d62":function(t,e,r){},a56f:function(t,e,r){"use strict";var n=r("3d62"),u=r.n(n);u.a}}]);