(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~1fb195ae"],{"001a":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var i=r(n("c23d")),o=n("9ab4"),a=n("4be4"),s={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},u=function(e){function t(n,r,i){var o=e.call(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o.code=n,o.details=i,o}return o.__extends(t,e),t}(Error);function c(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function l(e,t,n){var r=c(e),i=r,o=void 0;try{var a=t&&t.error;if(a){var l=a.status;if("string"===typeof l){if(!s[l])return new u("internal","internal");r=s[l],i=l}var f=a.message;"string"===typeof f&&(i=f),o=a.details,void 0!==o&&(o=n.decode(o))}}catch(d){}return"ok"===r?null:new u(r,i,o)}var f=function(){function e(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((function(e){return n.auth=e}),(function(){})),this.messaging||t.get().then((function(e){return n.messaging=e}),(function(){}))}return e.prototype.getAuthToken=function(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:if(!this.auth)return[2,void 0];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return e=t.sent(),e?[2,e.accessToken]:[2,void 0];case 3:return t.sent(),[2,void 0];case 4:return[2]}}))}))},e.prototype.getInstanceIdToken=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){if(!this.messaging||!("Notification"in self)||"granted"!==Notification.permission)return[2,void 0];try{return[2,this.messaging.getToken()]}catch(t){return[2,void 0]}return[2]}))}))},e.prototype.getContext=function(){return o.__awaiter(this,void 0,void 0,(function(){var e,t;return o.__generator(this,(function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}}))}))},e}(),d="type.googleapis.com/google.protobuf.Int64Value",h="type.googleapis.com/google.protobuf.UInt64Value";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var g=function(){function e(){}return e.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map((function(e){return t.encode(e)}));if("function"===typeof e||"object"===typeof e)return p(e,(function(e){return t.encode(e)}));throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case d:case h:var n=Number(e["value"]);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((function(e){return t.decode(e)})):"function"===typeof e||"object"===typeof e?p(e,(function(e){return t.decode(e)})):e},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){var t,n=new Promise((function(n,r){t=setTimeout((function(){r(new u("deadline-exceeded","deadline-exceeded"))}),e)}));return{timer:t,promise:n}}var _=function(){function e(e,t,n,r){var i=this;void 0===r&&(r="us-central1"),this.app_=e,this.region_=r,this.serializer=new g,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return i.deleteService()}},this.contextProvider=new f(t,n),this.cancelAllRequests=new Promise((function(e){i.deleteService=function(){return e()}}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId,n=this.region_;if(null!==this.emulatorOrigin){var r=this.emulatorOrigin;return r+"/"+t+"/"+n+"/"+e}return"https://"+n+"-"+t+".cloudfunctions.net/"+e},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,t){var n=this;return function(r){return n.call(e,r,t||{})}},e.prototype.postJSON=function(e,t,n){return o.__awaiter(this,void 0,void 0,(function(){var r,i;return o.__generator(this,(function(o){switch(o.label){case 0:n.append("Content-Type","application/json"),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,fetch(e,{method:"POST",body:JSON.stringify(t),headers:n})];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),[2,{status:0,json:null}];case 4:i=null,o.label=5;case 5:return o.trys.push([5,7,,8]),[4,r.json()];case 6:return i=o.sent(),[3,8];case 7:return o.sent(),[3,8];case 8:return[2,{status:r.status,json:i}]}}))}))},e.prototype.call=function(e,t,n){return o.__awaiter(this,void 0,void 0,(function(){var r,i,a,s,c,f,d,h,p,g,_,b;return o.__generator(this,(function(o){switch(o.label){case 0:return r=this._url(e),t=this.serializer.encode(t),i={data:t},a=new Headers,[4,this.contextProvider.getContext()];case 1:return s=o.sent(),s.authToken&&a.append("Authorization","Bearer "+s.authToken),s.instanceIdToken&&a.append("Firebase-Instance-ID-Token",s.instanceIdToken),c=n.timeout||7e4,f=v(c),d=f.timer,h=f.promise,[4,Promise.race([m(d,this.postJSON(r,i,a)),h,m(d,this.cancelAllRequests)])];case 2:if(p=o.sent(),!p)throw new u("cancelled","Firebase Functions instance was deleted.");if(g=l(p.status,p.json,this.serializer),g)throw g;if(!p.json)throw new u("internal","Response is not valid JSON object.");if(_=p.json.data,"undefined"===typeof _&&(_=p.json.result),"undefined"===typeof _)throw new u("internal","Response is missing data field.");return b=this.serializer.decode(_),[2,{data:b}]}}))}))},e}();function m(e,t){return o.__awaiter(this,void 0,void 0,(function(){var n;return o.__generator(this,(function(r){switch(r.label){case 0:return[4,t];case 1:return n=r.sent(),clearTimeout(e),[2,n]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b="functions";function w(e,t){var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging");return new _(n,r,i,t)}function y(e){var t={Functions:_};e.INTERNAL.registerComponent(new a.Component(b,w,"PUBLIC").setServiceProps(t).setMultipleInstances(!0))}var O="@firebase/functions",I="0.4.50";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
y(i),i.registerVersion(O,I)},"4be4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("9ab4"),i=n("cd51"),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a="[DEFAULT]",s=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=a);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.Deferred;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=r.__assign({identifier:a,optional:!1},e),n=t.identifier,i=t.optional,o=this.normalizeInstanceIdentifier(n);try{var s=this.getOrInitializeService(o);if(!s){if(i)return null;throw Error("Service "+this.name+" is not available")}return s}catch(u){if(i)return null;throw u}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,c(e))try{this.getOrInitializeService(a)}catch(h){}try{for(var i=r.__values(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=r.__read(o.value,2),u=s[0],l=s[1],f=this.normalizeInstanceIdentifier(u);try{var d=this.getOrInitializeService(f);l.resolve(d)}catch(h){}}}catch(p){t={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=a),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,u(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:a:e},e}();function u(e){return e===a?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new s(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=o,t.ComponentContainer=l,t.Provider=s},"7d28":function(e,t,n){"use strict";n.r(t),n.d(t,"registerInstallations",(function(){return Le}));var r,i=n("c23d"),o=n.n(i),a=n("4be4"),s=n("9ab4"),u=n("cd51"),c=n("9dbb"),l="@firebase/installations",f="0.4.16",d=1e4,h="w:"+f,p="FIS_v2",g="https://firebaseinstallations.googleapis.com/v1",v=36e5,_="installations",m="Installations",b=(r={},r["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),w=new u["ErrorFactory"](_,m,b);function y(e){return e instanceof u["FirebaseError"]&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){var t=e.projectId;return g+"/projects/"+t+"/installations"}function I(e){return{token:e.token,requestStatus:2,expiresIn:N(e.expiresIn),creationTime:Date.now()}}function E(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,w.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function j(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S(e,t){var n=t.refreshToken,r=j(e);return r.append("Authorization",L(n)),r}function T(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(s["__generator"])(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return t=n.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function N(e){return Number(e.replace("s","000"))}function L(e){return p+" "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){var n=t.fid;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,r,i,o,a,u,c;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return t=O(e),r=j(e),i={fid:n,authVersion:p,appId:e.appId,sdkVersion:h},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,T((function(){return fetch(t,o)}))];case 1:return a=s.sent(),a.ok?[4,a.json()]:[3,3];case 2:return u=s.sent(),c={fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:I(u.authToken)},[2,c];case 3:return[4,E("Create Installation",a)];case 4:throw s.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){var t=btoa(String.fromCharCode.apply(String,Object(s["__spread"])(e)));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R=/^[cdef][\w-]{21}$/,P="";function D(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var n=H(e);return R.test(n)?n:P}catch(r){return P}}function H(e){var t=k(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x=new Map;function U(e,t){var n=F(e);B(n,t),V(n,t)}function q(e,t){J();var n=F(e),r=x.get(n);r||(r=new Set,x.set(n,r)),r.add(t)}function M(e,t){var n=F(e),r=x.get(n);r&&(r.delete(t),0===r.size&&x.delete(n),G())}function B(e,t){var n,r,i=x.get(e);if(i)try{for(var o=Object(s["__values"])(i),a=o.next();!a.done;a=o.next()){var u=a.value;u(t)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function V(e,t){var n=J();n&&n.postMessage({key:e,fid:t}),G()}var z=null;function J(){return!z&&"BroadcastChannel"in self&&(z=new BroadcastChannel("[Firebase] FID Change"),z.onmessage=function(e){B(e.data.key,e.data.fid)}),z}function G(){0===x.size&&z&&(z.close(),z=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W="firebase-installations-database",K=1,$="firebase-installations-store",X=null;function Y(){return X||(X=Object(c["openDb"])(W,K,(function(e){switch(e.oldVersion){case 0:e.createObjectStore($)}}))),X}function Z(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,a;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return n=F(e),[4,Y()];case 1:return r=s.sent(),i=r.transaction($,"readwrite"),o=i.objectStore($),[4,o.get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||U(e,t.fid),[2,t]}}))}))}function Q(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return t=F(e),[4,Y()];case 1:return n=i.sent(),r=n.transaction($,"readwrite"),[4,r.objectStore($).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function ee(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,a,u;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return n=F(e),[4,Y()];case 1:return r=s.sent(),i=r.transaction($,"readwrite"),o=i.objectStore($),[4,o.get(n)];case 2:return a=s.sent(),u=t(a),void 0!==u?[3,4]:[4,o.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,o.put(u,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!u||a&&a.fid===u.fid||U(e,u.fid),[2,u]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return[4,ee(e,(function(n){var r=ne(n),i=re(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return n=i.sent(),n.fid!==P?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function ne(e){var t=e||{fid:D(),registrationStatus:0};return se(t)}function re(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(w.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=ie(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:oe(e)}:{installationEntry:t}}function ie(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,C(e,t)];case 1:return n=i.sent(),[2,Z(e,n)];case 2:return r=i.sent(),y(r)&&409===r.serverCode?[4,Q(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,Z(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}function oe(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i;return Object(s["__generator"])(this,(function(o){switch(o.label){case 0:return[4,ae(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,A(100)];case 3:return o.sent(),[4,ae(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,te(e)];case 6:return n=o.sent(),r=n.installationEntry,i=n.registrationPromise,i?[2,i]:[2,r];case 7:return[2,t]}}))}))}function ae(e){return ee(e,(function(e){if(!e)throw w.create("installation-not-found");return se(e)}))}function se(e){return ue(e)?{fid:e.fid,registrationStatus:0}:e}function ue(e){return 1===e.registrationStatus&&e.registrationTime+d<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e,i,o,a,u,c,l,f;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return e=le(n,t),i=S(n,t),o=r.getImmediate({optional:!0}),o&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:h}},u={method:"POST",headers:i,body:JSON.stringify(a)},[4,T((function(){return fetch(e,u)}))];case 1:return c=s.sent(),c.ok?[4,c.json()]:[3,3];case 2:return l=s.sent(),f=I(l),[2,f];case 3:return[4,E("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function le(e,t){var n=t.fid;return O(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t){return void 0===t&&(t=!1),Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o;return Object(s["__generator"])(this,(function(a){switch(a.label){case 0:return[4,ee(e.appConfig,(function(r){if(!ge(r))throw w.create("not-registered");var i=r.authToken;if(!t&&ve(i))return r;if(1===i.requestStatus)return n=de(e,t),r;if(!navigator.onLine)throw w.create("app-offline");var o=me(r);return n=pe(e,o),o}))];case 1:return r=a.sent(),n?[4,n]:[3,3];case 2:return o=a.sent(),[3,4];case 3:o=r.authToken,a.label=4;case 4:return i=o,[2,i]}}))}))}function de(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return[4,he(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,A(100)];case 3:return i.sent(),[4,he(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return r=n.authToken,0===r.requestStatus?[2,fe(e,t)]:[2,r]}}))}))}function he(e){return ee(e,(function(e){if(!ge(e))throw w.create("not-registered");var t=e.authToken;return be(t)?Object(s["__assign"])(Object(s["__assign"])({},e),{authToken:{requestStatus:0}}):e}))}function pe(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i;return Object(s["__generator"])(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,ce(e,t)];case 1:return n=o.sent(),i=Object(s["__assign"])(Object(s["__assign"])({},t),{authToken:n}),[4,Z(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return r=o.sent(),!y(r)||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,Q(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(s["__assign"])(Object(s["__assign"])({},t),{authToken:{requestStatus:0}}),[4,Z(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}function ge(e){return void 0!==e&&2===e.registrationStatus}function ve(e){return 2===e.requestStatus&&!_e(e)}function _e(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+v}function me(e){var t={requestStatus:1,requestTime:Date.now()};return Object(s["__assign"])(Object(s["__assign"])({},e),{authToken:t})}function be(e){return 1===e.requestStatus&&e.requestTime+d<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return[4,te(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,r=t.registrationPromise,r?r.catch(console.error):fe(e).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t){return void 0===t&&(t=!1),Object(s["__awaiter"])(this,void 0,void 0,(function(){var n;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return[4,Oe(e.appConfig)];case 1:return r.sent(),[4,fe(e,t)];case 2:return n=r.sent(),[2,n.token]}}))}))}function Oe(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(s["__generator"])(this,(function(n){switch(n.label){case 0:return[4,te(e)];case 1:return t=n.sent().registrationPromise,t?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o;return Object(s["__generator"])(this,(function(a){switch(a.label){case 0:return n=Ee(e,t),r=S(e,t),i={method:"DELETE",headers:r},[4,T((function(){return fetch(n,i)}))];case 1:return o=a.sent(),o.ok?[3,3]:[4,E("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function Ee(e,t){var n=t.fid;return O(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return t=e.appConfig,[4,ee(t,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(n=r.sent(),!n)return[3,6];if(1!==n.registrationStatus)return[3,2];throw w.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw w.create("app-offline");case 3:return[4,Ie(t,n)];case 4:return r.sent(),[4,Q(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t){var n=e.appConfig;return q(n,t),function(){M(n,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){var t,n;if(!e||!e.options)throw Ne("App Configuration");if(!e.name)throw Ne("App Name");var r=["projectId","apiKey","appId"];try{for(var i=Object(s["__values"])(r),o=i.next();!o.done;o=i.next()){var a=o.value;if(!e.options[a])throw Ne(a)}}catch(u){t={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ne(e){return w.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){var t="installations";e.INTERNAL.registerComponent(new a["Component"](t,(function(e){var t=e.getProvider("app").getImmediate(),n=Te(t),r=e.getProvider("platform-logger"),i={appConfig:n,platformLoggerProvider:r},o={app:t,getId:function(){return we(i)},getToken:function(e){return ye(i,e)},delete:function(){return je(i)},onIdChange:function(e){return Se(i,e)}};return o}),"PUBLIC")),e.registerVersion(l,f)}Le(o.a)},abfd:function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.r(t),n.d(t,"LogLevel",(function(){return o})),n.d(t,"Logger",(function(){return f})),n.d(t,"setLogLevel",(function(){return d})),n.d(t,"setUserLogHandler",(function(){return h}));var o,a=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));var s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},u=o.INFO,c=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),a=c[t];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[a].apply(console,r(["["+o+"]  "+e.name+":"],n))}},f=function(){function e(e){this.name=e,this._logLevel=u,this._logHandler=l,this._userLogHandler=null,a.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?s[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],e)),this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],e)),this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],e)),this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],e)),this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],e)),this._logHandler.apply(this,r([this,o.ERROR],e))},e}();function d(e){a.forEach((function(t){t.setLogLevel(e)}))}function h(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var s=i.map((function(e){if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}},r=0,i=a;r<i.length;r++){var u=i[r];n(u)}}}}]);