(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a671abc"],{"3ebf":function(t,a,e){t.exports=e.p+"img/glogo.0fa3fe04.png"},"5c43":function(t,a,e){"use strict";var s=e("ec3e"),i=e.n(s);i.a},a55b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login container"},[s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"nav-center col-md-4"},[t._m(0),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[s("form",{staticClass:"text-left"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"logemail"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.uId,expression:"uId"}],staticClass:"form-control",attrs:{type:"email",id:"logemail","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.uId},on:{input:function(a){a.target.composing||(t.uId=a.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"log-password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.uPass,expression:"uPass"}],staticClass:"form-control",attrs:{type:"password",id:"log-password",placeholder:"Password"},domProps:{value:t.uPass},on:{input:function(a){a.target.composing||(t.uPass=a.target.value)}}})]),s("button",{staticClass:"prod-btn",attrs:{type:"submit"},on:{click:t.loginUser}},[t._v(" Submit ")]),s("br"),s("br"),s("div",{staticClass:"text-center"},[s("p",[t._v(" Login with Social ID ")]),s("button",{staticClass:"btn",attrs:{id:"g-signin",type:"button"},on:{click:t.google}},[s("img",{staticStyle:{width:"30px"},attrs:{src:e("3ebf"),alt:""}})])])])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[s("form",{staticClass:"text-left"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"sign-email"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.uId,expression:"uId"}],staticClass:"form-control",attrs:{type:"email",id:"sign-email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.uId},on:{input:function(a){a.target.composing||(t.uId=a.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"sign-pass"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.uPass,expression:"uPass"}],staticClass:"form-control",attrs:{type:"password",id:"sign-pass",placeholder:"Password"},domProps:{value:t.uPass},on:{input:function(a){a.target.composing||(t.uPass=a.target.value)}}})]),s("button",{staticClass:"prod-btn",attrs:{type:"submit"},on:{click:t.createUser}},[t._v(" Submit ")])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-tabs ",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item "},[e("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Sign in")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Create a Account")])])])}],n=(e("ac1f"),e("5319"),e("96cf"),e("1da1")),r=e("323e"),o=e.n(r),l=(e("a5d8"),e("8aa5")),c=e.n(l),u=e("a18c");o.a.configure({showSpinner:!1,trickleSpeed:200,easing:"ease",speed:500});var d={name:"Login",data:function(){return{uId:"",uPass:""}},methods:{loginUser:function(){var t=this;o.a.start(),o.a.set(.1),o.a.inc(.2),c.a.auth().signInWithEmailAndPassword(this.uId,this.uPass).then((function(){u["a"].replace({name:"User"}),setTimeout((function(){return o.a.done()}),2e3),t.uId="",t.uPass=""})).catch((function(t){setTimeout((function(){return o.a.done()}),2e3),this.uId="",this.uPass="",window.alert(t.message)}))},createUser:function(){var t=this;o.a.start(),o.a.set(.1),o.a.inc(.2),c.a.auth().createUserWithEmailAndPassword(this.uId,this.uPass).then((function(){t.uId="",t.uPass="",window.alert("Please Sign in to continue."),setTimeout((function(){return o.a.done()}),2e3)})).catch((function(a){setTimeout((function(){return o.a.done()}),2e3),t.uId="",t.uPass="",window.alert(a.message)}))},google:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new c.a.auth.GoogleAuthProvider,o.a.start(),o.a.set(.1),o.a.inc(.2),t.next=6,c.a.auth().signInWithPopup(a).then((function(){u["a"].replace({name:"User"}),setTimeout((function(){return o.a.done()}),2e3)})).catch((function(t){console.log(t),setTimeout((function(){return o.a.done()}),2e3),window.alert(t.message)}));case 6:case"end":return t.stop()}}),t)})))()}}},m=d,p=(e("5c43"),e("2877")),f=Object(p["a"])(m,s,i,!1,null,"06c69878",null);a["default"]=f.exports},ec3e:function(t,a,e){}}]);