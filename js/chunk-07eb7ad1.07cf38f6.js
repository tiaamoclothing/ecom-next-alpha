(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07eb7ad1"],{"0666":function(t,s,i){"use strict";var e=i("b621"),r=i.n(e);r.a},1276:function(t,s,i){"use strict";var e=i("d784"),r=i("44e7"),c=i("825a"),o=i("1d80"),a=i("4840"),n=i("8aa59"),l=i("50c4"),d=i("14c3"),u=i("9263"),p=i("d039"),m=[].push,h=Math.min,v=4294967295,f=!p((function(){return!RegExp(v,"y")}));e("split",2,(function(t,s,i){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var e=String(o(this)),c=void 0===i?v:i>>>0;if(0===c)return[];if(void 0===t)return[e];if(!r(t))return s.call(e,t,c);var a,n,l,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,f=new RegExp(t.source,p+"g");while(a=u.call(f,e)){if(n=f.lastIndex,n>h&&(d.push(e.slice(h,a.index)),a.length>1&&a.index<e.length&&m.apply(d,a.slice(1)),l=a[0].length,h=n,d.length>=c))break;f.lastIndex===a.index&&f.lastIndex++}return h===e.length?!l&&f.test("")||d.push(""):d.push(e.slice(h)),d.length>c?d.slice(0,c):d}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:s.call(this,t,i)}:s,[function(s,i){var r=o(this),c=void 0==s?void 0:s[t];return void 0!==c?c.call(s,r,i):e.call(String(r),s,i)},function(t,r){var o=i(e,t,this,r,e!==s);if(o.done)return o.value;var u=c(t),p=String(this),m=a(u,RegExp),g=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(f?"y":"g"),_=new m(f?u:"^(?:"+u.source+")",b),C=void 0===r?v:r>>>0;if(0===C)return[];if(0===p.length)return null===d(_,p)?[p]:[];var y=0,w=0,x=[];while(w<p.length){_.lastIndex=f?w:0;var k,z=d(_,f?p:p.slice(w));if(null===z||(k=h(l(_.lastIndex+(f?0:w)),p.length))===y)w=n(p,w,g);else{if(x.push(p.slice(y,w)),x.length===C)return x;for(var L=1;L<=z.length-1;L++)if(x.push(z[L]),x.length===C)return x;w=y=k}}return x.push(p.slice(y)),x}]}),!f)},ad44:function(t,s,i){"use strict";var e=i("d9ce"),r=i.n(e);r.a},b621:function(t,s,i){},d2f1:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"product container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-7"},[i("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active",attrs:{"data-interval":"1500"}},[i("img",{staticClass:"d-block p-img",attrs:{src:t.product.imgUrls[0],alt:"..."}})]),t.product.imgUrls[1]?i("div",{staticClass:"carousel-item",attrs:{"data-interval":"1500"}},[i("img",{staticClass:"d-block p-img",attrs:{src:t.product.imgUrls[1],alt:"..."}})]):t._e(),t.product.imgUrls[2]?i("div",{staticClass:"carousel-item",attrs:{"data-interval":"1500"}},[i("img",{staticClass:"d-block p-img",attrs:{src:t.product.imgUrls[2],alt:"..."}})]):t._e()]),t._m(0),t._m(1)])]),i("div",{staticClass:"col-sm-5"},[i("div",{staticClass:"p-spec"},[i("p",{staticClass:"p-spec-name"},[t._v(t._s(t.product.name))]),i("h6",{staticClass:"text-muted"},[t._v(" "+t._s(t.product.shortDes)+" ")]),i("h3",[t._v("₹ "+t._s(t.product.price))]),i("br"),i("label",{attrs:{for:"sizes"}},[t._v("Size")]),t.product.sizes?i("div",{staticClass:"size",attrs:{id:"sizes"}},[t.product.sizes.includes("S")?i("div",{class:{act:"S"===t.size},on:{click:function(s){t.size="S"}}},[t._v(" S ")]):t._e(),t.product.sizes.includes("M")?i("div",{class:{act:"M"===t.size},on:{click:function(s){t.size="M"}}},[t._v(" M ")]):t._e(),t.product.sizes.includes("L")?i("div",{class:{act:"L"===t.size},on:{click:function(s){t.size="L"}}},[t._v(" L ")]):t._e(),t.product.sizes.includes("XL")?i("div",{class:{act:"XL"===t.size},on:{click:function(s){t.size="XL"}}},[t._v(" XL ")]):t._e(),t.product.sizes.includes("XXL")?i("div",{class:{act:"XXL"===t.size},on:{click:function(s){t.size="XXL"}}},[t._v(" XXL ")]):t._e()]):t._e(),i("label",{attrs:{for:"color"}},[t._v("Color "),i("small",{staticClass:"text-muted"},[t._v(" "+t._s(t.color)+" ")])]),i("div",{staticClass:"color-picker",attrs:{id:"color"}},[t.product.colors.includes("black")?i("div",{staticClass:"black",class:{border:"black"===t.color},on:{click:function(s){t.color="black"}}}):t._e(),t.product.colors.includes("white")?i("div",{staticClass:"white",class:{border:"white"===t.color},on:{click:function(s){t.color="white"}}}):t._e(),t.product.colors.includes("yellow")?i("div",{staticClass:"yellow",class:{border:"yellow"===t.color},on:{click:function(s){t.color="yellow"}}}):t._e()])]),i("br"),i("br"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"quantity"},[i("button",{staticClass:"update-num",staticStyle:{padding:"10px 20px"},on:{click:function(s){t.quantity>1?t.quantity--:t.quantity=1}}},[t._v(" - ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",disabled:""},domProps:{value:t.quantity},on:{input:function(s){s.target.composing||(t.quantity=s.target.value)}}}),i("button",{staticClass:"update-num",staticStyle:{padding:"10px 17px"},on:{click:function(s){t.quantity++}}},[t._v(" + ")])])]),i("div",{staticClass:"col-sm-6"},[t.cart.find((function(s){return s.id===t.product.id}))?i("button",{staticClass:"prod-btn"},[i("router-link",{attrs:{to:"/cart"}},[t._v("GO TO CART")])],1):i("button",{staticClass:"prod-btn",attrs:{disabled:""===t.color},on:{click:t.cartAdd}},[t._v(" ADD TO CART ")])])]),i("br"),i("Wishlist",{attrs:{product:t.product}})],1)]),i("br"),i("br"),i("hr"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("h4",{staticClass:"prod-add"},[t._v("Description")]),i("div",{domProps:{innerHTML:t._s(t.product.desc)}},[t._v(t._s(t.product.desc))])]),t._m(2)]),i("div",[i("h4",{staticClass:"prod-add"},[t._v("You may also like")]),i("FeaturedProducts",{attrs:{products:t.featured}})],1)])},r=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Next")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6"},[i("h4",{staticClass:"prod-add"},[t._v("Reviews")])])}],c=(i("4de4"),i("7db0"),i("a15b"),i("fb6a"),i("b0c0"),i("ac1f"),i("1276"),i("5530")),o=i("2f62"),a=i("b348"),n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"heart-wrap"},[i("a",{on:{click:function(s){return t.addToWishlist(t.product)}}},[i("span",{staticClass:"heart",class:{red:t.wish.find((function(s){return s.id===t.product.id}))},attrs:{id:"heart"}}),t.wish.find((function(s){return s.id===t.product.id}))?i("span",{staticStyle:{"font-size":"18px"}},[t._v("In Wishlist")]):i("span",{staticStyle:{"font-size":"18px"}},[t._v(" Add to wishlist")])])])])},l=[],d={props:["product"],name:"Wishlist",computed:Object(c["a"])({},Object(o["b"])({user:"user",wish:"getWishlist"})),methods:{addToWishlist:function(t){this.wish.find((function(s){return s.id===t.id}))?this.$store.commit("removeFromWishlist",t):this.$store.commit("addToWishlist",t)}}},u=d,p=(i("0666"),i("2877")),m=Object(p["a"])(u,n,l,!1,null,"f9dd922c",null),h=m.exports,v={name:"Product",data:function(){return{size:"S",quantity:1,color:""}},metaInfo:function(){return{title:"".concat(this.product.name," | Tiaamo.com"),link:[{rel:"canonical",href:"https://store.sambitsahoo.com/#/p/".concat(this.product.name.toLowerCase().split(" ").join("-"))}],meta:[{name:"description",content:"Buy "+this.product.name+" from Tiaamo.com at Best Prices. "+this.product.shortDes},{property:"og:type",content:"product"},{property:"og:title",content:"".concat(this.product.name," | Tiaamo.com")},{property:"og:description",content:"Buy "+this.product.name+" from Tiaamo.com at Best Prices. "+this.product.shortDes},{property:"og:url",content:"https://store.sambitsahoo.com/#/p/".concat(this.product.name.toLowerCase().split(" ").join("-"))},{property:"og:site_name",content:"Tiaamo.com"},{property:"og:image",content:this.product.imgUrls[0]},{property:"og:image:secure_url",content:this.product.imgUrls[0]},{property:"width",content:"1024"},{property:"height",content:"1024"},{property:"twitter:card",content:this.product.imgUrls[0]},{property:"twitter:description",content:"Buy "+this.product.name+" from Tiaamo.com at Best Prices. "+this.product.shortDes},{property:"twitter:title",content:"".concat(this.product.name," | Tiaamo.com")},{property:"twitter:image",content:this.product.imgUrls[0]}]}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(o["b"])({user:"user",products:"getProducts"})),Object(o["c"])(["cart"])),{},{product:function(){var t=this;return this.products.find((function(s){return s.name.toLowerCase().split(" ").join("-")===t.$route.params._slug}))},featured:function(){var t=this;return this.products.filter((function(s){return s.id!==t.product.id})).slice(0,4)}}),methods:{getSize:function(t){var s=t.srcElement.id;console.log(s),this.size=toString(s)},cartAdd:function(){var t=this.product;t={imgUrls:t.imgUrls,name:t.name,quantity:this.quantity,size:this.size,color:this.color,id:t.id,price:t.price},this.$store.commit("addToCart",Object(c["a"])({},t))}},components:{Wishlist:h,FeaturedProducts:a["a"]}},f=v,g=(i("ad44"),Object(p["a"])(f,e,r,!1,null,"75881083",null));s["default"]=g.exports},d9ce:function(t,s,i){}}]);