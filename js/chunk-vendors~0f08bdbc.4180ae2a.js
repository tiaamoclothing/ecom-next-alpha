(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~0f08bdbc"],{8071:function(e,t,n){"use strict";n.r(t);var r,i=n("c23d"),o=n.n(i),a=(n("7d28"),n("4be4")),s=n("9ab4"),c=n("cd51"),u=n("9dbb"),l=(r={},r["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["permission-default"]="The notification permission was not granted and dismissed instead.",r["permission-blocked"]="The notification permission was not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",r["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",r["invalid-vapid-key"]="The public VAPID key must be a string.",r["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r),d=new c["ErrorFactory"]("messaging","Messaging",l);
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
 */
function p(e){var t,n;if(!e||!e.options)throw f("App Configuration Object");if(!e.name)throw f("App Name");var r=["projectId","apiKey","appId","messagingSenderId"],i=e.options;try{for(var o=Object(s["__values"])(r),a=o.next();!a.done;a=o.next()){var c=a.value;if(!i[c])throw f(c)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function f(e){return d.create("missing-app-config-values",{valueName:e})}
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
 */function h(e){var t=new Uint8Array(e),n=btoa(String.fromCharCode.apply(String,Object(s["__spread"])(t)));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function b(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length),o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}
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
 */var v="fcm_token_details_db",g=5,w="fcm_token_object_Store";function y(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i,o=this;return Object(s["__generator"])(this,(function(a){switch(a.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=a.sent(),n=t.map((function(e){return e.name})),!n.includes(v))return[2,null];a.label=2;case 2:return r=null,[4,Object(u["openDb"])(v,g,(function(t){return Object(s["__awaiter"])(o,void 0,void 0,(function(){var n,i,o,a;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(w)?(n=t.transaction.objectStore(w),[4,n.index("fcmSenderId").get(e)]):[2];case 1:return i=s.sent(),[4,n.clear()];case 2:if(s.sent(),!i)return[2];if(2===t.oldVersion){if(o=i,!o.auth||!o.p256dh||!o.endpoint)return[2];r={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"===typeof o.vapidKey?o.vapidKey:h(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(o=i,r={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:h(o.auth),p256dh:h(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:h(o.vapidKey)}});return[2]}}))}))}))];case 3:return i=a.sent(),i.close(),[4,Object(u["deleteDb"])(v)];case 4:return a.sent(),[4,Object(u["deleteDb"])("fcm_vapid_details_db")];case 5:return a.sent(),[4,Object(u["deleteDb"])("undefined")];case 6:return a.sent(),[2,_(r)?r:null]}}))}))}function _(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */var m="firebase-messaging-database",k=1,O="firebase-messaging-store",j=null;function S(){return j||(j=Object(u["openDb"])(m,k,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(O)}}))),j}function I(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i;return Object(s["__generator"])(this,(function(o){switch(o.label){case 0:return t=D(e),[4,S()];case 1:return n=o.sent(),[4,n.transaction(O).objectStore(O).get(t)];case 2:return r=o.sent(),r?[2,r]:[3,3];case 3:return[4,y(e.appConfig.senderId)];case 4:return i=o.sent(),i?[4,T(e,i)]:[3,6];case 5:return o.sent(),[2,i];case 6:return[2]}}))}))}function T(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i;return Object(s["__generator"])(this,(function(o){switch(o.label){case 0:return n=D(e),[4,S()];case 1:return r=o.sent(),i=r.transaction(O,"readwrite"),[4,i.objectStore(O).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function C(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return t=D(e),[4,S()];case 1:return n=i.sent(),r=n.transaction(O,"readwrite"),[4,r.objectStore(O).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function D(e){var t=e.appConfig;return t.appId}
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
 */var K="/firebase-messaging-sw.js",M="/firebase-cloud-messaging-push-scope",P="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",E="https://fcmregistrations.googleapis.com/v1",N="FCM_MSG",R="google.c.a.c_id",x="google.c.a.c_l",A="google.c.a.ts",W="google.c.a.e";
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
 */
function H(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,a,c,u;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return[4,F(e)];case 1:n=s.sent(),r=B(t),i={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(U(e.appConfig),i)];case 3:return a=s.sent(),[4,a.json()];case 4:return o=s.sent(),[3,6];case 5:throw c=s.sent(),d.create("token-subscribe-failed",{errorInfo:c});case 6:if(o.error)throw u=o.error.message,d.create("token-subscribe-failed",{errorInfo:u});if(!o.token)throw d.create("token-subscribe-no-token");return[2,o.token]}}))}))}function L(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,a,c,u;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return[4,F(e)];case 1:n=s.sent(),r=B(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(U(e.appConfig)+"/"+t.token,i)];case 3:return a=s.sent(),[4,a.json()];case 4:return o=s.sent(),[3,6];case 5:throw c=s.sent(),d.create("token-update-failed",{errorInfo:c});case 6:if(o.error)throw u=o.error.message,d.create("token-update-failed",{errorInfo:u});if(!o.token)throw d.create("token-update-no-token");return[2,o.token]}}))}))}function V(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,a,c;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return[4,F(e)];case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(U(e.appConfig)+"/"+t,r)];case 3:return i=s.sent(),[4,i.json()];case 4:if(o=s.sent(),o.error)throw a=o.error.message,d.create("token-unsubscribe-failed",{errorInfo:a});return[3,6];case 5:throw c=s.sent(),d.create("token-unsubscribe-failed",{errorInfo:c});case 6:return[2]}}))}))}function U(e){var t=e.projectId;return E+"/projects/"+t+"/registrations"}function F(e){var t=e.appConfig,n=e.installations;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function B(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==P&&(o.web.applicationPubKey=i),o}
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
 */var q,G=6048e5;function J(e,t,n){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var r,i,o,a;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw d.create("permission-blocked");return[4,X(t,n)];case 1:return r=s.sent(),[4,I(e)];case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:h(r.getKey("auth")),p256dh:h(r.getKey("p256dh"))},i?[3,3]:[2,Q(e,o)];case 3:if(Y(i.subscriptionOptions,o))return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,V(e,i.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,Q(e,o)];case 8:return Date.now()>=i.createTime+G?[2,z({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}}))}))}function $(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return[4,I(e)];case 1:return n=i.sent(),n?[4,V(e,n.token)]:[3,4];case 2:return i.sent(),[4,C(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return r=i.sent(),r?[2,r.unsubscribe()]:[2,!0]}}))}))}function z(e,t,n){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var r,i,o;return Object(s["__generator"])(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,L(t,e)];case 1:return r=a.sent(),i=Object(s["__assign"])({token:r,createTime:Date.now()},e),[4,T(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,$(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function Q(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return[4,H(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,T(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function X(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return n=r.sent(),n?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:b(t)})]}}))}))}function Y(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}
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
 */
function Z(e){return"object"===typeof e&&!!e&&R in e}
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
 */(function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"})(q||(q={}));var ee=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(t){switch(t.label){case 0:return this.vapidKey||(this.vapidKey=P),[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:t.sent(),t.label=3;case 3:if("granted"!==Notification.permission)throw d.create("permission-blocked");return[2,J(this.firebaseDependencies,e,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(t){switch(t.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),[2,$(this.firebaseDependencies,e)]}}))}))},e.prototype.requestPermission=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if(e=t.sent(),"granted"===e)return[2];throw"denied"===e?d.create("permission-blocked"):d.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw d.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw d.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw d.create("invalid-sw-registration");if(this.swRegistration)throw d.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"===typeof e?e:e.next,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw d.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.getServiceWorkerRegistration=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e,t;return Object(s["__generator"])(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register(K,{scope:M})];case 2:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,4];case 3:throw t=n.sent(),d.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=function(e){var t;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o;return Object(s["__generator"])(this,(function(a){switch(a.label){case 0:return(null===(t=e.data)||void 0===t?void 0:t.firebaseMessaging)?(n=e.data.firebaseMessaging,r=n.type,i=n.payload,this.onMessageCallback&&r===q.PUSH_RECEIVED&&this.onMessageCallback(i),o=i.data,Z(o)&&"1"===o[W]?[4,this.logEvent(r,o)]:[3,2]):[2];case 1:a.sent(),a.label=2;case 2:return[2]}}))}))},e.prototype.logEvent=function(e,t){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return n=te(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r=i.sent(),r.logEvent(n,{message_id:t[R],message_name:t[x],message_time:t[A],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function te(e){switch(e){case q.NOTIFICATION_CLICKED:return"notification_open";case q.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */function ne(e){return new Promise((function(t){setTimeout(t,e)}))}
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
 */var re=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!==typeof e)throw d.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.getToken=function(){var e,t;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var n;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,I(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null===n||void 0===n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:P,r.label=2;case 2:return[2,J(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return $(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw d.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw d.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw d.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw d.create("only-available-in-window")},e.prototype.onMessage=function(){throw d.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw d.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r;return Object(s["__generator"])(this,(function(i){switch(i.label){case 0:return t=ie(e),t?[4,ue()]:[2];case 1:return n=i.sent(),se(n)?[2,ce(n,t)]:(r=oe(t),r?[4,de(r)]:[3,3]);case 2:return i.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:i.sent(),i.label=5;case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var r,i;return Object(s["__generator"])(this,(function(o){switch(o.label){case 0:return r=e.newSubscription,r?[3,2]:[4,$(this.firebaseDependencies,self.registration)];case 1:return o.sent(),[2];case 2:return[4,I(this.firebaseDependencies)];case 3:return i=o.sent(),[4,$(this.firebaseDependencies,self.registration)];case 4:return o.sent(),[4,J(this.firebaseDependencies,self.registration,null!==(n=null===(t=null===i||void 0===i?void 0:i.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:P)];case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(s["__awaiter"])(this,void 0,void 0,(function(){var r,i,o,a;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[N],r?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),i=pe(r),i?[4,ae(i)]:[2]):[2];case 1:return o=s.sent(),o?[3,4]:[4,self.clients.openWindow(i)];case 2:return o=s.sent(),[4,ne(3e3)];case 3:return s.sent(),[3,6];case 4:return[4,o.focus()];case 5:o=s.sent(),s.label=6;case 6:return o?(a=le(q.NOTIFICATION_CLICKED,r),[2,o.postMessage(a)]):[2]}}))}))},e}();function ie(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}function oe(e){var t;if(e&&"object"===typeof e.notification){var n=Object(s["__assign"])({},e.notification);return n.data=Object(s["__assign"])(Object(s["__assign"])({},e.notification.data),(t={},t[N]=e,t)),n}}function ae(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i,o,a,c,u;return Object(s["__generator"])(this,(function(l){switch(l.label){case 0:return t=new URL(e,self.location.href),[4,ue()];case 1:n=l.sent();try{for(r=Object(s["__values"])(n),i=r.next();!i.done;i=r.next())if(o=i.value,a=new URL(o.url,self.location.href),a.host===t.host)return[2,o]}catch(d){c={error:d}}finally{try{i&&!i.done&&(u=r.return)&&u.call(r)}finally{if(c)throw c.error}}return[2,null]}}))}))}function se(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}function ce(e,t){var n,r,i=le(q.PUSH_RECEIVED,t);try{for(var o=Object(s["__values"])(e),a=o.next();!a.done;a=o.next()){var c=a.value;c.postMessage(i)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function ue(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function le(e,t){return{firebaseMessaging:{type:e,payload:t}}}function de(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}function pe(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return i||(Z(e.data)?self.location.origin:null)}
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
 */var fe="messaging";function he(e){var t=e.getProvider("app").getImmediate(),n=p(t),r=e.getProvider("installations").getImmediate(),i=e.getProvider("analytics-internal"),o={app:t,appConfig:n,installations:r,analyticsProvider:i};if(!ve())throw d.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new re(o):new ee(o)}var be={isSupported:ve};function ve(){return self&&"ServiceWorkerGlobalScope"in self?we():ge()}function ge(){return"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function we(){return"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}o.a.INTERNAL.registerComponent(new a["Component"](fe,he,"PUBLIC").setServiceProps(be))}}]);