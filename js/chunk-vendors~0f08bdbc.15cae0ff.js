(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~0f08bdbc"],{8071:function(e,t,n){"use strict";n.r(t);n("7d28");var r,i,o=n("4be4"),s=n("cd51"),a=n("9ab4"),c=n("9dbb"),u=n("c23d"),l=n.n(u),d=(r={},r["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["permission-default"]="The notification permission was not granted and dismissed instead.",r["permission-blocked"]="The notification permission was not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",r["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",r["invalid-vapid-key"]="The public VAPID key must be a string.",r["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r),p=new s["ErrorFactory"]("messaging","Messaging",d),f="/firebase-messaging-sw.js",h="/firebase-cloud-messaging-push-scope",g="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",b="https://fcmregistrations.googleapis.com/v1",v="FCM_MSG",w="google.c.a.c_id",y="google.c.a.c_l",_="google.c.a.ts",m="google.c.a.e",k="FirebaseMessaging: ";
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
function O(e){var t=new Uint8Array(e),n=btoa(String.fromCharCode.apply(String,Object(a["__spread"])(t)));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function j(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length),o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}
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
 */(function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"})(i||(i={}));var S="fcm_token_details_db",M=5,T="fcm_token_object_Store";function I(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i,o=this;return Object(a["__generator"])(this,(function(s){switch(s.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=s.sent(),n=t.map((function(e){return e.name})),!n.includes(S))return[2,null];s.label=2;case 2:return r=null,[4,Object(c["openDb"])(S,M,(function(t){return Object(a["__awaiter"])(o,void 0,void 0,(function(){var n,i,o,s;return Object(a["__generator"])(this,(function(a){switch(a.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(T)?(n=t.transaction.objectStore(T),[4,n.index("fcmSenderId").get(e)]):[2];case 1:return i=a.sent(),[4,n.clear()];case 2:if(a.sent(),!i)return[2];if(2===t.oldVersion){if(o=i,!o.auth||!o.p256dh||!o.endpoint)return[2];r={token:o.fcmToken,createTime:null!==(s=o.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"===typeof o.vapidKey?o.vapidKey:O(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(o=i,r={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:O(o.auth),p256dh:O(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:O(o.vapidKey)}});return[2]}}))}))}))];case 3:return i=s.sent(),i.close(),[4,Object(c["deleteDb"])(S)];case 4:return s.sent(),[4,Object(c["deleteDb"])("fcm_vapid_details_db")];case 5:return s.sent(),[4,Object(c["deleteDb"])("undefined")];case 6:return s.sent(),[2,K(r)?r:null]}}))}))}function K(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */var C="firebase-messaging-database",D=1,P="firebase-messaging-store",E=null;function N(){return E||(E=Object(c["openDb"])(C,D,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(P)}}))),E}function R(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i;return Object(a["__generator"])(this,(function(o){switch(o.label){case 0:return t=W(e),[4,N()];case 1:return n=o.sent(),[4,n.transaction(P).objectStore(P).get(t)];case 2:return r=o.sent(),r?[2,r]:[3,3];case 3:return[4,I(e.appConfig.senderId)];case 4:return i=o.sent(),i?[4,x(e,i)]:[3,6];case 5:return o.sent(),[2,i];case 6:return[2]}}))}))}function x(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r,i;return Object(a["__generator"])(this,(function(o){switch(o.label){case 0:return n=W(e),[4,N()];case 1:return r=o.sent(),i=r.transaction(P,"readwrite"),[4,i.objectStore(P).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function A(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var t,n,r;return Object(a["__generator"])(this,(function(i){switch(i.label){case 0:return t=W(e),[4,N()];case 1:return n=i.sent(),r=n.transaction(P,"readwrite"),[4,r.objectStore(P).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function W(e){var t=e.appConfig;return t.appId}
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
 */function H(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,s,c,u;return Object(a["__generator"])(this,(function(a){switch(a.label){case 0:return[4,F(e)];case 1:n=a.sent(),r=L(t),i={method:"POST",headers:n,body:JSON.stringify(r)},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(B(e.appConfig),i)];case 3:return s=a.sent(),[4,s.json()];case 4:return o=a.sent(),[3,6];case 5:throw c=a.sent(),p.create("token-subscribe-failed",{errorInfo:c});case 6:if(o.error)throw u=o.error.message,p.create("token-subscribe-failed",{errorInfo:u});if(!o.token)throw p.create("token-subscribe-no-token");return[2,o.token]}}))}))}function U(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,s,c,u;return Object(a["__generator"])(this,(function(a){switch(a.label){case 0:return[4,F(e)];case 1:n=a.sent(),r=L(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(B(e.appConfig)+"/"+t.token,i)];case 3:return s=a.sent(),[4,s.json()];case 4:return o=a.sent(),[3,6];case 5:throw c=a.sent(),p.create("token-update-failed",{errorInfo:c});case 6:if(o.error)throw u=o.error.message,p.create("token-update-failed",{errorInfo:u});if(!o.token)throw p.create("token-update-no-token");return[2,o.token]}}))}))}function V(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,o,s,c;return Object(a["__generator"])(this,(function(a){switch(a.label){case 0:return[4,F(e)];case 1:n=a.sent(),r={method:"DELETE",headers:n},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(B(e.appConfig)+"/"+t,r)];case 3:return i=a.sent(),[4,i.json()];case 4:if(o=a.sent(),o.error)throw s=o.error.message,p.create("token-unsubscribe-failed",{errorInfo:s});return[3,6];case 5:throw c=a.sent(),p.create("token-unsubscribe-failed",{errorInfo:c});case 6:return[2]}}))}))}function B(e){var t=e.projectId;return b+"/projects/"+t+"/registrations"}function F(e){var t=e.appConfig,n=e.installations;return Object(a["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(a["__generator"])(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function L(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==g&&(o.web.applicationPubKey=i),o}
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
 */var q=6048e5;function G(e,t,n){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var r,i,o,s;return Object(a["__generator"])(this,(function(a){switch(a.label){case 0:if("granted"!==Notification.permission)throw p.create("permission-blocked");return[4,Q(t,n)];case 1:return r=a.sent(),[4,R(e)];case 2:return i=a.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:O(r.getKey("auth")),p256dh:O(r.getKey("p256dh"))},i?[3,3]:[2,z(e,o)];case 3:if(X(i.subscriptionOptions,o))return[3,8];a.label=4;case 4:return a.trys.push([4,6,,7]),[4,V(e,i.token)];case 5:return a.sent(),[3,7];case 6:return s=a.sent(),console.warn(s),[3,7];case 7:return[2,z(e,o)];case 8:return Date.now()>=i.createTime+q?[2,$({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}}))}))}function J(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(a["__generator"])(this,(function(i){switch(i.label){case 0:return[4,R(e)];case 1:return n=i.sent(),n?[4,V(e,n.token)]:[3,4];case 2:return i.sent(),[4,A(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return r=i.sent(),r?[2,r.unsubscribe()]:[2,!0]}}))}))}function $(e,t,n){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var r,i,o;return Object(a["__generator"])(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,5]),[4,U(t,e)];case 1:return r=s.sent(),i=Object(a["__assign"])(Object(a["__assign"])({},e),{token:r,createTime:Date.now()}),[4,x(t,i)];case 2:return s.sent(),[2,r];case 3:return o=s.sent(),[4,J(t,n)];case 4:throw s.sent(),o;case 5:return[2]}}))}))}function z(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(a["__generator"])(this,(function(i){switch(i.label){case 0:return[4,H(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,x(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function Q(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n;return Object(a["__generator"])(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return n=r.sent(),n?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:j(t)})]}}))}))}function X(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Y(e){var t={from:e.from,collapseKey:e.collapse_key};return Z(t,e),ee(t,e),te(t,e),t}function Z(e,t){if(t.notification){e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var r=t.notification.body;r&&(e.notification.body=r);var i=t.notification.image;i&&(e.notification.image=i)}}function ee(e,t){t.data&&(e.data=t.data)}function te(e,t){if(t.fcmOptions){e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}}
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
 */function ne(e){return"object"===typeof e&&!!e&&w in e}
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
 */function re(e){return new Promise((function(t){setTimeout(t,e)}))}
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
 */var ie=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!==typeof e)throw p.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n;return Object(a["__generator"])(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,R(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null===n||void 0===n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:g,r.label=2;case 2:return[2,G(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return J(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw p.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw p.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw p.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw p.create("only-available-in-window")},e.prototype.onMessage=function(){throw p.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw p.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i;return Object(a["__generator"])(this,(function(o){switch(o.label){case 0:return t=se(e),t?[4,le()]:(console.debug(k+"failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return n=o.sent(),ce(n)?[2,ue(n,t)]:(r=!1,t.notification?[4,de(oe(t))]:[3,3]);case 2:o.sent(),r=!0,o.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed||this.bgMessageHandler&&(i=Y(t),"function"===typeof this.bgMessageHandler?this.bgMessageHandler(i):this.bgMessageHandler.next(i)),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(a["__awaiter"])(this,void 0,void 0,(function(){var r,i;return Object(a["__generator"])(this,(function(o){switch(o.label){case 0:return r=e.newSubscription,r?[3,2]:[4,J(this.firebaseDependencies,self.registration)];case 1:return o.sent(),[2];case 2:return[4,R(this.firebaseDependencies)];case 3:return i=o.sent(),[4,J(this.firebaseDependencies,self.registration)];case 4:return o.sent(),[4,G(this.firebaseDependencies,self.registration,null!==(n=null===(t=null===i||void 0===i?void 0:i.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:g)];case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(a["__awaiter"])(this,void 0,void 0,(function(){var r,o,s;return Object(a["__generator"])(this,(function(a){switch(a.label){case 0:return r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[v],r?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),o=pe(r),o?[4,ae(o)]:[2]):[2];case 1:return s=a.sent(),s?[3,4]:[4,self.clients.openWindow(o)];case 2:return s=a.sent(),[4,re(3e3)];case 3:return a.sent(),[3,6];case 4:return[4,s.focus()];case 5:s=a.sent(),a.label=6;case 6:return s?(r.messageType=i.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,s.postMessage(r)]):[2]}}))}))},e}();function oe(e){var t,n=Object(a["__assign"])({},e.notification);return n.data=(t={},t[v]=e,t),n}function se(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}function ae(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,i,o,s,c,u;return Object(a["__generator"])(this,(function(l){switch(l.label){case 0:return t=new URL(e,self.location.href),[4,le()];case 1:n=l.sent();try{for(r=Object(a["__values"])(n),i=r.next();!i.done;i=r.next())if(o=i.value,s=new URL(o.url,self.location.href),s.host===t.host)return[2,o]}catch(d){c={error:d}}finally{try{i&&!i.done&&(u=r.return)&&u.call(r)}finally{if(c)throw c.error}}return[2,null]}}))}))}function ce(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}function ue(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=i.PUSH_RECEIVED;try{for(var o=Object(a["__values"])(e),s=o.next();!s.done;s=o.next()){var c=s.value;c.postMessage(t)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function le(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function de(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function pe(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return i||(ne(e.data)?self.location.origin:null)}
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
 */var fe=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var t,n;return Object(a["__generator"])(this,(function(r){switch(r.label){case 0:return t=e.data,t.isFirebaseMessaging?(this.onMessageCallback&&t.messageType===i.PUSH_RECEIVED&&("function"===typeof this.onMessageCallback?this.onMessageCallback(ge(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),n=t.data,ne(n)&&"1"===n[m]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){return Object(a["__generator"])(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw p.create("permission-blocked");return[4,this.updateVapidKey(null===e||void 0===e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null===e||void 0===e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,G(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){return Object(a["__generator"])(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=g),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(a["__awaiter"])(this,void 0,void 0,(function(){return Object(a["__generator"])(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var e,t;return Object(a["__generator"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register(f,{scope:h})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),p.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(a["__awaiter"])(this,void 0,void 0,(function(){return Object(a["__generator"])(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,J(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(a["__generator"])(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if(e=t.sent(),"granted"===e)return[2];throw"denied"===e?p.create("permission-blocked"):p.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw p.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw p.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");if(this.swRegistration)throw p.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw p.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw p.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return Object(a["__awaiter"])(this,void 0,void 0,(function(){var n,r;return Object(a["__generator"])(this,(function(i){switch(i.label){case 0:return n=he(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r=i.sent(),r.logEvent(n,{message_id:t[w],message_name:t[y],message_time:t[_],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function he(e){switch(e){case i.NOTIFICATION_CLICKED:return"notification_open";case i.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}function ge(e){return delete e.messageType,delete e.isFirebaseMessaging,e}
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
 */function be(e){var t,n;if(!e||!e.options)throw ve("App Configuration Object");if(!e.name)throw ve("App Name");var r=["projectId","apiKey","appId","messagingSenderId"],i=e.options;try{for(var o=Object(a["__values"])(r),s=o.next();!s.done;s=o.next()){var c=s.value;if(!i[c])throw ve(c)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function ve(e){return p.create("missing-app-config-values",{valueName:e})}
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
 */var we="messaging";function ye(e){var t=e.getProvider("app").getImmediate(),n=be(t),r=e.getProvider("installations").getImmediate(),i=e.getProvider("analytics-internal"),o={app:t,appConfig:n,installations:r,analyticsProvider:i};if(!me())throw p.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new ie(o):new fe(o)}var _e={isSupported:me};function me(){return self&&"ServiceWorkerGlobalScope"in self?Oe():ke()}function ke(){return"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function Oe(){return"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}l.a.INTERNAL.registerComponent(new o["Component"](we,ye,"PUBLIC").setServiceProps(_e))}}]);