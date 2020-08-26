(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~e041e925"],{"2e66":function(e,t,r){"use strict";r.r(t),r.d(t,"registerStorage",(function(){return Dt}));var n=r("c23d"),o=r.n(n),i=r("9ab4"),a=r("4be4"),s="firebasestorage.googleapis.com",u="storageBucket",c=12e4,l=6e5,h=function(){function e(e,t){this.code_=p(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return p(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),f={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function p(e){return"storage/"+e}function d(){var e="An unknown error occurred, please check the error payload for server response.";return new h(f.UNKNOWN,e)}function _(e){return new h(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function v(e){return new h(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(f.UNAUTHENTICATED,e)}function g(e){return new h(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function y(){return new h(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new h(f.CANCELED,"User canceled the upload/download.")}function E(e){return new h(f.INVALID_URL,"Invalid URL '"+e+"'.")}function w(e){return new h(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function R(){return new h(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A(){return new h(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function O(){return new h(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S(e,t,r){return new h(f.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function T(e,t,r,n){var o,i;return e===t?(o=e,i=1===e?"argument":"arguments"):(o="between "+e+" and "+t,i="arguments"),new h(f.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function C(){return new h(f.APP_DELETED,"The Firebase app was deleted.")}function N(e){return new h(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function k(e,t){return new h(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function U(e){throw new h(f.INTERNAL_ERROR,"Internal error: "+e)}
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
 */var x={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function P(e){switch(e){case x.RAW:case x.BASE64:case x.BASE64URL:case x.DATA_URL:return;default:throw"Expected one of the event types: ["+x.RAW+", "+x.BASE64+", "+x.BASE64URL+", "+x.DATA_URL+"]."}}var D=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function I(e,t){switch(e){case x.RAW:return new D(L(t));case x.BASE64:case x.BASE64URL:return new D(j(e,t));case x.DATA_URL:return new D(G(t),F(t))}throw d()}function L(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var i=n,a=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function B(e){var t;try{t=decodeURIComponent(e)}catch(r){throw k(x.DATA_URL,"Malformed data URL.")}return L(t)}function j(e,t){switch(e){case x.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw k(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case x.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw k(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw k(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var M=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw k(x.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=q(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function G(e){var t=new M(e);return t.base64?j(x.BASE64,t.rest):B(t.rest)}function F(e){var t=new M(e);return t.contentType}function q(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
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
 */var z,H={STATE_CHANGED:"state_changed"},V={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},W={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function X(e){switch(e){case V.RUNNING:case V.PAUSING:case V.CANCELING:return W.RUNNING;case V.PAUSED:return W.PAUSED;case V.SUCCESS:return W.SUCCESS;case V.CANCELED:return W.CANCELED;case V.ERROR:return W.ERROR;default:return W.ERROR}}
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
 */function K(e){return null!=e}function J(e){return void 0!==e}function Z(e){return"function"===typeof e}function $(e){return"object"===typeof e}function Q(e){return $(e)&&null!==e}function Y(e){return $(e)&&!Array.isArray(e)}function ee(e){return"string"===typeof e||e instanceof String}function te(e){return re(e)&&Number.isInteger(e)}function re(e){return"number"===typeof e||e instanceof Number}function ne(e){return oe()&&e instanceof Blob}function oe(){return"undefined"!==typeof Blob}
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(z||(z={}));
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
var ie=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=z.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=z.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=z.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw U("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),K(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return K(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw U("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw U("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw U("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){K(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){K(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),ae=function(){function e(){}return e.prototype.createXhrIo=function(){return new ie},e}();
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
function se(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ue(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=se();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(oe())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function ce(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
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
 */var le=function(){function e(e,t){var r=0,n="";ne(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(ne(this.data_)){var n=this.data_,o=ce(n,t,r);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,r-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(oe()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(ue.apply(null,n))}var o=t.map((function(e){return ee(e)?I(x.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),he=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw w(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),u={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}for(var l="v[A-Za-z0-9_]+",h=s.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp("^https?://"+h+"/"+l+"/b/"+n+"/o"+f,"i"),d={bucket:1,path:3},_="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",b=new RegExp("^https?://"+_+"/"+n+"/"+v,"i"),g={bucket:1,path:2},y=[{regex:a,indices:u,postModify:o},{regex:p,indices:d,postModify:c},{regex:b,indices:g,postModify:c}],m=0;m<y.length;m++){var w=y[m],R=w.regex.exec(t);if(R){var A=R[w.indices.bucket],O=R[w.indices.path];O||(O=""),r=new e(A,O),w.postModify(r);break}}if(null==r)throw E(t);return r},e}();
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
function fe(e){var t;try{t=JSON.parse(e)}catch(r){return null}return Y(t)?t:null}
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
 */function pe(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function de(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function _e(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function ve(e){return"https://"+s+"/v0"+e}function be(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
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
 */function ge(e,t){return t}var ye=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ge}return e}(),me=null;function Ee(e){return!ee(e)||e.length<2?e:_e(e)}function we(){if(me)return me;var e=[];function t(e,t){return Ee(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));var r=new ye("name");function n(e,t){return K(t)?Number(t):t}r.xform=t,e.push(r);var o=new ye("size");return o.xform=n,e.push(o),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),me=e,me}function Re(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new he(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function Ae(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Re(n,e),n}function Oe(e,t,r){var n=fe(t);if(null===n)return null;var o=n;return Ae(e,o,r)}function Se(e,t){var r=fe(t);if(null===r)return null;if(!ee(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map((function(t){var r=e["bucket"],n=e["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=ve(i),s=be({alt:"media",token:t});return a+s}));return a[0]}function Te(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Ce(e){if(!$(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!$(r))throw"Expected object for 'customMetadata' mapping."}else if(Q(r))throw"Mapping for '"+t+"' cannot be an object."}}
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
 */var Ne="maxResults",ke=1e3,Ue="pageToken",xe="prefixes",Pe="items";function De(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[xe])for(var o=0,i=r[xe];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e.makeStorageReference(new he(t,s));n.prefixes.push(u)}if(r[Pe])for(var c=0,l=r[Pe];c<l.length;c++){var h=l[c];u=e.makeStorageReference(new he(t,h["name"]));n.items.push(u)}return n}function Ie(e,t,r){var n=fe(r);if(null===n)return null;var o=n;return De(e,t,o)}function Le(e){if(!$(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===Ne){if(!te(e[Ne])||e[Ne]<=0)throw"Expected maxResults to be a positive number.";if(e[Ne]>1e3)throw"Expected maxResults to be less than or equal to "+ke+"."}else{if(t!==Ue)throw"Unknown option: "+t;if(e[Ue]&&!ee(e[Ue]))throw"Expected pageToken to be string."}}var Be=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
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
 */function je(e){if(!e)throw d()}function Me(e,t){function r(r,n){var o=Oe(e,n,t);return je(null!==o),o}return r}function Ge(e,t){function r(r,n){var o=Ie(e,t,n);return je(null!==o),o}return r}function Fe(e,t){function r(r,n){var o=Oe(e,n,t);return je(null!==o),Se(o,n)}return r}function qe(e){function t(t,r){var n;return n=401===t.getStatus()?b():402===t.getStatus()?v(e.bucket):403===t.getStatus()?g(e.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return t}function ze(e){var t=qe(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=_(e.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function He(e,t,r){var n=t.fullServerUrl(),o=ve(n),i="GET",a=e.maxOperationRetryTime,s=new Be(o,i,Me(e,r),a);return s.errorHandler=ze(t),s}function Ve(e,t,r,n,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=ve(a),u="GET",c=e.maxOperationRetryTime,l=new Be(s,u,Ge(e,t.bucket),c);return l.urlParams=i,l.errorHandler=qe(t),l}function We(e,t,r){var n=t.fullServerUrl(),o=ve(n),i="GET",a=e.maxOperationRetryTime,s=new Be(o,i,Fe(e,r),a);return s.errorHandler=ze(t),s}function Xe(e,t,r,n){var o=t.fullServerUrl(),i=ve(o),a="PATCH",s=Te(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime,l=new Be(i,a,Me(e,n),c);return l.headers=u,l.body=s,l.errorHandler=ze(t),l}function Ke(e,t){var r=t.fullServerUrl(),n=ve(r),o="DELETE",i=e.maxOperationRetryTime;function a(e,t){}var s=new Be(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=ze(t),s}function Je(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ze(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=Je(null,t)),n}function $e(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=Ze(t,n,o),l=Te(c,r),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",f="\r\n--"+u+"--",p=le.getBlob(h,n,f);if(null===p)throw R();var d={name:c["fullPath"]},_=ve(i),v="POST",b=e.maxUploadRetryTime,g=new Be(_,v,Me(e,r),b);return g.urlParams=d,g.headers=a,g.body=p.uploadData(),g.errorHandler=qe(t),g}var Qe=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function Ye(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){je(!1)}var n=t||["active"];return je(!!r&&-1!==n.indexOf(r)),r}function et(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Ze(t,n,o),s={name:a["fullPath"]},u=ve(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Te(a,r),f=e.maxUploadRetryTime;function p(e){var t;Ye(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){je(!1)}return je(ee(t)),t}var d=new Be(u,c,p,f);return d.urlParams=s,d.headers=l,d.body=h,d.errorHandler=qe(t),d}function tt(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=Ye(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){je(!1)}r||je(!1);var o=Number(r);return je(!isNaN(o)),new Qe(o,n.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime,u=new Be(r,a,i,s);return u.headers=o,u.errorHandler=qe(t),u}var rt=262144;function nt(e,t,r,n,o,i,a,s){var u=new Qe(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw A();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var h=u.current,f=h+l,p=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":u.current},_=n.slice(h,f);if(null===_)throw R();function v(e,r){var o,a=Ye(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?Me(t,i)(e,r):null,new Qe(s,c,"final"===a,o)}var b="POST",g=t.maxUploadRetryTime,y=new Be(r,b,v,g);return y.headers=d,y.body=_.uploadData(),y.progressCallback=s||null,y.errorHandler=qe(e),y}
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
 */var ot=function(){function e(e,t,r){var n=Z(e)||K(t)||K(r);if(n)this.next=e,this.error=t||null,this.complete=r||null;else{var o=e;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return e}(),it=function(){function e(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}return e}();
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
function at(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw T(n,o,e,r.length);for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(s){throw s instanceof Error?S(i,e,s.message):S(i,e,s)}}var st=function(){function e(e,t){var r=this;this.validator=function(t){r.optional&&!J(t)||e(t)},this.optional=!!t}return e}();function ut(e,t){return function(r){e(r),t(r)}}function ct(e,t){function r(e){if(!ee(e))throw"Expected string."}var n;return n=e?ut(r,e):r,new st(n,t)}function lt(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||oe()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new st(e)}function ht(e){return new st(Ce,e)}function ft(e){return new st(Le,e)}function pt(){function e(e){var t=re(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new st(e)}function dt(e,t){function r(t){var r=null===t||K(t)&&t instanceof Object;if(!r)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new st(r,t)}function _t(e){function t(e){var t=null===e||Z(e);if(!t)throw"Expected a Function."}return new st(t,e)}
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
 */function vt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
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
 */var bt=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=V.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(f.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(V.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(f.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(V.ERROR))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===V.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.service_.getAuthToken().then((function(r){switch(t.state_){case V.RUNNING:e(r);break;case V.CANCELING:t.transition_(V.CANCELED);break;case V.PAUSING:t.transition_(V.PAUSED);break}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=et(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=tt(e.service_,e.location_,t,e.blob_),o=e.service_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=rt*this.chunkMultiplier_,r=new Qe(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=nt(e.location_,e.service_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(V.ERROR)}var a=e.service_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(V.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){var e=rt*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=He(e.service_,e.location_,e.mappings_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(V.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=$e(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(V.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case V.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case V.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case V.RUNNING:var t=this.state_===V.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case V.PAUSED:this.state_=e,this.notifyObservers_();break;case V.CANCELED:this.error_=m(),this.state_=e,this.notifyObservers_();break;case V.ERROR:this.state_=e,this.notifyObservers_();break;case V.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case V.PAUSING:this.transition_(V.PAUSED);break;case V.CANCELING:this.transition_(V.CANCELED);break;case V.RUNNING:this.start_();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=X(this.state_);return new it(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==H.STATE_CHANGED)throw"Expected one of the event types: ["+H.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=_t(!0).validator,s=dt(null,!0).validator;function u(e){try{return void a(e)}catch(r){}try{s(e);var t=J(e["next"])||J(e["error"])||J(e["complete"]);if(!t)throw"";return}catch(r){throw i}}var c=[ct(o),dt(u,!0),_t(!0),_t(!0)];at("on",c,arguments);var l=this;function h(e){function t(t,r,o){null!==e&&at("on",e,arguments);var i=new ot(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}return t}function f(e){if(null===e)throw i;u(e)}var p=[dt(f),_t(!0),_t(!0)],d=!(J(t)||J(r)||J(n));return d?h(p):h(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=this.observers_.slice();t.forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(X(this.state_)){case W.SUCCESS:vt(this.resolve_.bind(null,this.snapshot))();break;case W.CANCELED:case W.ERROR:var t=this.reject_;vt(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=X(this.state_);switch(t){case W.RUNNING:case W.PAUSED:e.next&&vt(e.next.bind(e,this.snapshot))();break;case W.SUCCESS:e.complete&&vt(e.complete.bind(e))();break;case W.CANCELED:case W.ERROR:e.error&&vt(e.error.bind(e,this.error_))();break;default:e.error&&vt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){at("resume",[],arguments);var e=this.state_===V.PAUSED||this.state_===V.PAUSING;return e&&this.transition_(V.RUNNING),e},e.prototype.pause=function(){at("pause",[],arguments);var e=this.state_===V.RUNNING;return e&&this.transition_(V.PAUSING),e},e.prototype.cancel=function(){at("cancel",[],arguments);var e=this.state_===V.RUNNING||this.state_===V.PAUSING;return e&&this.transition_(V.CANCELING),e},e}(),gt=function(){function e(e,t){this.service=e,this.location=t instanceof he?t:he.makeFromUrl(t)}return e.prototype.toString=function(){return at("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return we()},e.prototype.child=function(e){at("child",[ct()],arguments);var t=de(this.location.path,e),r=new he(this.location.bucket,t);return this.newRef(this.service,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=pe(this.location.path);if(null===e)return null;var t=new he(this.location.bucket,e);return this.newRef(this.service,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new he(this.location.bucket,"");return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return _e(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),at("put",[lt(),ht(!0)],arguments),this.throwIfRoot_("put"),new bt(this,this.service,this.location,this.mappings(),new le(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=x.RAW),at("putString",[ct(),ct(P,!0),ht(!0)],arguments),this.throwIfRoot_("putString");var n=I(t,e),o=Object.assign({},r);return!K(o["contentType"])&&K(n.contentType)&&(o["contentType"]=n.contentType),new bt(this,this.service,this.location,this.mappings(),new le(n.data,!0),o)},e.prototype.delete=function(){var e=this;return at("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then((function(t){var r=Ke(e.service,e.location);return e.service.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){at("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return Object(i["__awaiter"])(this,void 0,void 0,(function(){var r,n,o,a;return Object(i["__generator"])(this,(function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){at("list",[ft(!0)],arguments);var t=this;return this.service.getAuthToken().then((function(r){var n=e||{},o=Ve(t.service,t.location,"/",n.pageToken,n.maxResults);return t.service.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return at("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then((function(t){var r=He(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return at("updateMetadata",[ht()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then((function(r){var n=Xe(t.service,t.location,e,t.mappings());return t.service.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return at("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then((function(t){var r=We(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw O();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw N(e)},e}(),yt=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
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
function mt(e,t,r){var n=1,o=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((function(){o=null,e(f,u())}),t)}function f(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,Object(i["__spreadArrays"])([null,e],t));else{var o,f=u()||a;if(f)l.call.apply(l,Object(i["__spreadArrays"])([null,e],t));else n<64&&(n*=2),1===s?(s=2,o=0):o=1e3*(n+Math.random()),h(o)}}var p=!1;function d(e){p||(p=!0,c||(null!==o?(e||(s=2),clearTimeout(o),h(0)):e||(s=1)))}return h(0),setTimeout((function(){a=!0,d(!0)}),r),d}function Et(e){e(!1)}
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
 */var wt=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new Rt(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===z.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new Rt(a,r))}else{var s=r.getErrorCode()===z.ABORT;t(!1,new Rt(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());J(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=d();s.setServerResponseProp(i.getResponseText()),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(r.canceled){s=e.appDelete_?C():m();o(s)}else{s=y();o(s)}}this.canceled_?r(!1,new Rt(!1,null,!0)):this.backoffId_=mt(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Et(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),Rt=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function At(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Ot(e){var t="undefined"!==typeof o.a?o.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function St(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Tt(e,t,r,n){var o=be(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return St(a,t),At(a,r),Ot(a),new wt(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
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
 */var Ct=function(){function e(t,r,n,o){var i;this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,this.authProvider_=r,this.maxOperationRetryTime_=c,this.maxUploadRetryTime_=l,this.requests_=new Set,this.pool_=n,this.bucket_=null!=o?he.makeFromBucketSpec(o):e.extractBucket_(null===(i=this.app_)||void 0===i?void 0:i.options),this.internals_=new Nt(this)}return e.extractBucket_=function(e){var t=null===e||void 0===e?void 0:e[u];return null==t?null:he.makeFromBucketSpec(t)},e.prototype.getAuthToken=function(){return Object(i["__awaiter"])(this,void 0,void 0,(function(){var e,t;return Object(i["__generator"])(this,(function(r){switch(r.label){case 0:return e=this.authProvider_.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:if(t=r.sent(),null!==t)return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach((function(e){return e.cancel()})),this.requests_.clear()},e.prototype.makeStorageReference=function(e){return new gt(this,e)},e.prototype.makeRequest=function(e,t){var r=this;if(this.deleted_)return new yt(C());var n=Tt(e,this.appId_,t,this.pool_);return this.requests_.add(n),n.getPromise().then((function(){return r.requests_.delete(n)}),(function(){return r.requests_.delete(n)})),n},e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(at("ref",[ct(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new gt(this,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{he.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return at("refFromURL",[ct(t,!1)],arguments),new gt(this,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){at("setMaxUploadRetryTime",[pt()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxOperationRetryTime=function(e){at("setMaxOperationRetryTime",[pt()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),Nt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},e}(),kt="@firebase/storage",Ut="0.3.42",xt="storage";function Pt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new Ct(r,n,new ae,t)}function Dt(e){var t={TaskState:W,TaskEvent:H,StringFormat:x,Storage:Ct,Reference:gt};e.INTERNAL.registerComponent(new a["Component"](xt,Pt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(kt,Ut)}Dt(o.a)},cd51:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r("9ab4"),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296===(64512&o)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},u=function(e){var t=[],r=0,n=0;while(r<e.length){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){i=e[r++];var a=e[r++],s=e[r++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,u=o+2<e.length,c=u?e[o+2]:0,l=i>>2,h=(3&i)<<4|s>>4,f=(15&s)<<2|c>>6,p=63&c;u||(p=64,a||(f=64)),n.push(r[l],r[h],r[f],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):u(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length,s=a?r[e.charAt(o)]:0;++o;var u=o<e.length,c=u?r[e.charAt(o)]:64;++o;var l=o<e.length,h=l?r[e.charAt(o)]:64;if(++o,null==i||null==s||null==c||null==h)throw Error();var f=i<<2|s>>4;if(n.push(f),64!==c){var p=s<<4&240|c>>2;if(n.push(p),64!==h){var d=c<<6&192|h;n.push(d)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){var t=s(e);return c.encodeByteArray(t,!0)},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=p(e[n],t[n]));return e}
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
 */var d=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function b(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function y(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){return _().indexOf("Electron/")>=0}function w(){var e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return _().indexOf("MSAppHost/")>=0}function A(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function O(){return!b()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return"indexedDB"in self&&null!==indexedDB}function T(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",o=window.indexedDB.open(n);o.onsuccess=function(){o.result.close(),r||window.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=function(){r=!1},o.onerror=function(){var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(i){t(i)}}))}function C(){return!(!navigator||!navigator.cookieEnabled)}
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
 */var N="FirebaseError",k=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name=N,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,U.prototype.create),o}return n.__extends(t,e),t}(Error),U=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?x(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new k(o,s),c=0,l=Object.keys(n);c<l.length;c++){var h=l[c];"_"!==h.slice(-1)&&(h in u&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),u[h]=n[h])}return u},e}();function x(e,t){return e.replace(P,(function(e,r){var n=t[r];return null!=n?String(n):"<"+r+"?>"}))}var P=/\{\$([^}]+)}/g;
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
 */function D(e){return JSON.parse(e)}function I(e){return JSON.stringify(e)}
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
 */var L=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=D(h(i[0])||""),r=D(h(i[1])||""),o=i[2],n=r["d"]||{},delete r["d"]}catch(a){}return{header:t,claims:r,data:n,signature:o}},B=function(e){var t=L(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"===typeof t&&(t.hasOwnProperty("nbf")?n=t["nbf"]:t.hasOwnProperty("iat")&&(n=t["iat"]),o=t.hasOwnProperty("exp")?t["exp"]:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},j=function(e){var t=L(e).claims;return"object"===typeof t&&t.hasOwnProperty("iat")?t["iat"]:null},M=function(e){var t=L(e),r=t.claims;return!!r&&"object"===typeof r&&r.hasOwnProperty("iat")},G=function(e){var t=L(e).claims;return"object"===typeof t&&!0===t["admin"]};
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
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function z(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
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
 */function V(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n],a=i[0],s=i[1];r(a,s)}return t.length?"&"+t.join("&"):""}function W(e){var t={},r=e.replace(/^\?/,"").split("&");return r.forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t}
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
 */var X=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"===typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],u=this.chain_[1],c=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=l^u&(c^l),a=1518500249):(i=u^c^l,a=1859775393):n<60?(i=u&c|l&(u|c),a=2400959708):(i=u^c^l,a=3395469782);o=(s<<5|s>>>27)+i+h+a+r[n]&4294967295;h=l,l=c,c=4294967295&(u<<30|u>>>2),u=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;while(n<t){if(0===i)while(n<=r)this.compress_(e,n),n+=this.blockSize;if("string"===typeof e){while(n<t)if(o[i]=e.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}else while(n<t)if(o[i]=e[n],++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();function K(e,t){var r=new J(e,t);return r.subscribe.bind(r)}var J=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=$(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Q),void 0===n.error&&(n.error=Q),void 0===n.complete&&(n.complete=Q);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Z(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"===typeof e[o])return!0}return!1}function Q(){}
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
 */var Y=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o){var i=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".";throw new Error(i)}};function ee(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument ",o}function te(e,t,r,n){if((!n||r)&&"string"!==typeof r)throw new Error(ee(e,t,n)+"must be a valid firebase namespace.")}function re(e,t,r,n){if((!n||r)&&"function"!==typeof r)throw new Error(ee(e,t,n)+"must be a valid function.")}function ne(e,t,r,n){if((!n||r)&&("object"!==typeof r||null===r))throw new Error(ee(e,t,n)+"must be a valid context object.")}
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
 */var oe=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(n)-56320;o=65536+(a<<10)+s}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},ie=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t};t.CONSTANTS=o,t.Deferred=d,t.ErrorFactory=U,t.FirebaseError=k,t.Sha1=X,t.areCookiesEnabled=C,t.assert=i,t.assertionError=a,t.async=Z,t.base64=c,t.base64Decode=h,t.base64Encode=l,t.contains=F,t.createSubscribe=K,t.decode=L,t.deepCopy=f,t.deepExtend=p,t.errorPrefix=ee,t.getUA=_,t.isAdmin=G,t.isBrowser=g,t.isBrowserExtension=y,t.isElectron=E,t.isEmpty=z,t.isIE=w,t.isIndexedDBAvailable=S,t.isMobileCordova=v,t.isNode=b,t.isNodeSdk=A,t.isReactNative=m,t.isSafari=O,t.isUWP=R,t.isValidFormat=M,t.isValidTimestamp=B,t.issuedAtTime=j,t.jsonEval=D,t.map=H,t.querystring=V,t.querystringDecode=W,t.safeGet=q,t.stringLength=ie,t.stringToByteArray=oe,t.stringify=I,t.validateArgCount=Y,t.validateCallback=re,t.validateContextObject=ne,t.validateIndexedDBOpenable=T,t.validateNamespace=te}).call(this,r("c8ba"))}}]);