(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~e041e925"],{"2e66":function(e,t,r){"use strict";r.r(t),r.d(t,"registerStorage",(function(){return Mt}));var n=r("c23d"),o=r.n(n),i=r("9ab4"),a=r("4be4"),s="firebasestorage.googleapis.com",u="storageBucket",c=12e4,h=6e5,l=-9007199254740991,p=function(){function e(e,t){this.code_=d(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return d(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),f={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function d(e){return"storage/"+e}function _(){var e="An unknown error occurred, please check the error payload for server response.";return new p(f.UNKNOWN,e)}function v(e){return new p(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function b(e){return new p(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new p(f.UNAUTHENTICATED,e)}function g(e){return new p(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function m(){return new p(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E(){return new p(f.CANCELED,"User canceled the upload/download.")}function w(e){return new p(f.INVALID_URL,"Invalid URL '"+e+"'.")}function R(e){return new p(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function A(){return new p(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function O(){return new p(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function T(){return new p(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S(e,t,r){return new p(f.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function C(e,t,r,n){var o,i;return e===t?(o=e,i=1===e?"argument":"arguments"):(o="between "+e+" and "+t,i="arguments"),new p(f.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function N(){return new p(f.APP_DELETED,"The Firebase app was deleted.")}function k(e){return new p(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function U(e,t){return new p(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new p(f.INTERNAL_ERROR,"Internal error: "+e)}
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
 */var x={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function I(e){switch(e){case x.RAW:case x.BASE64:case x.BASE64URL:case x.DATA_URL:return;default:throw"Expected one of the event types: ["+x.RAW+", "+x.BASE64+", "+x.BASE64URL+", "+x.DATA_URL+"]."}}var D=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function L(e,t){switch(e){case x.RAW:return new D(M(t));case x.BASE64:case x.BASE64URL:return new D(B(e,t));case x.DATA_URL:return new D(G(t),F(t))}throw _()}function M(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var i=n,a=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function j(e){var t;try{t=decodeURIComponent(e)}catch(r){throw U(x.DATA_URL,"Malformed data URL.")}return M(t)}function B(e,t){switch(e){case x.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw U(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case x.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw U(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(h){throw U(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var W=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw U(x.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=q(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function G(e){var t=new W(e);return t.base64?B(x.BASE64,t.rest):j(t.rest)}function F(e){var t=new W(e);return t.contentType}function q(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
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
 */var z,H={STATE_CHANGED:"state_changed"},V={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},X={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function K(e){switch(e){case V.RUNNING:case V.PAUSING:case V.CANCELING:return X.RUNNING;case V.PAUSED:return X.PAUSED;case V.SUCCESS:return X.SUCCESS;case V.CANCELED:return X.CANCELED;case V.ERROR:return X.ERROR;default:return X.ERROR}}
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
 */function J(e){return null!=e}function Z(e){return void 0!==e}function $(e){return"function"===typeof e}function Q(e){return"object"===typeof e}function Y(e){return Q(e)&&null!==e}function ee(e){return Q(e)&&!Array.isArray(e)}function te(e){return"string"===typeof e||e instanceof String}function re(e){return ne(e)&&Number.isInteger(e)}function ne(e){return"number"===typeof e||e instanceof Number}function oe(e){return ie()&&e instanceof Blob}function ie(){return"undefined"!==typeof Blob}
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
var ae=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=z.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=z.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=z.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),J(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return J(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw P("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){J(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){J(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),se=function(){function e(){}return e.prototype.createXhrIo=function(){return new ae},e}();
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
function ue(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=ue();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(ie())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function he(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
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
 */var le=function(){function e(e,t){var r=0,n="";oe(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(oe(this.data_)){var n=this.data_,o=he(n,t,r);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,r-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(ie()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(ce.apply(null,n))}var o=t.map((function(e){return te(e)?L(x.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),pe=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw R(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),u={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}for(var h="v[A-Za-z0-9_]+",l=s.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",f=new RegExp("^https?://"+l+"/"+h+"/b/"+n+"/o"+p,"i"),d={bucket:1,path:3},_="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",b=new RegExp("^https?://"+_+"/"+n+"/"+v,"i"),y={bucket:1,path:2},g=[{regex:a,indices:u,postModify:o},{regex:f,indices:d,postModify:c},{regex:b,indices:y,postModify:c}],m=0;m<g.length;m++){var E=g[m],R=E.regex.exec(t);if(R){var A=R[E.indices.bucket],O=R[E.indices.path];O||(O=""),r=new e(A,O),E.postModify(r);break}}if(null==r)throw w(t);return r},e}();
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
function fe(e){var t;try{t=JSON.parse(e)}catch(r){return null}return ee(t)?t:null}
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
 */function de(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function _e(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function ve(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function be(e){return"https://"+s+"/v0"+e}function ye(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
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
 */function ge(e,t){return t}var me=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ge}return e}(),Ee=null;function we(e){return!te(e)||e.length<2?e:ve(e)}function Re(){if(Ee)return Ee;var e=[];function t(e,t){return we(t)}e.push(new me("bucket")),e.push(new me("generation")),e.push(new me("metageneration")),e.push(new me("name","fullPath",!0));var r=new me("name");function n(e,t){return J(t)?Number(t):t}r.xform=t,e.push(r);var o=new me("size");return o.xform=n,e.push(o),e.push(new me("timeCreated")),e.push(new me("updated")),e.push(new me("md5Hash",null,!0)),e.push(new me("cacheControl",null,!0)),e.push(new me("contentDisposition",null,!0)),e.push(new me("contentEncoding",null,!0)),e.push(new me("contentLanguage",null,!0)),e.push(new me("contentType",null,!0)),e.push(new me("metadata","customMetadata",!0)),Ee=e,Ee}function Ae(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new pe(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function Oe(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Ae(n,e),n}function Te(e,t,r){var n=fe(t);if(null===n)return null;var o=n;return Oe(e,o,r)}function Se(e,t){var r=fe(t);if(null===r)return null;if(!te(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map((function(t){var r=e["bucket"],n=e["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=be(i),s=ye({alt:"media",token:t});return a+s}));return a[0]}function Ce(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Ne(e){if(!Q(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!Q(r))throw"Expected object for 'customMetadata' mapping."}else if(Y(r))throw"Mapping for '"+t+"' cannot be an object."}}
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
 */var ke="maxResults",Ue=1e3,Pe="pageToken",xe="prefixes",Ie="items";function De(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[xe])for(var o=0,i=r[xe];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e.makeStorageReference(new pe(t,s));n.prefixes.push(u)}if(r[Ie])for(var c=0,h=r[Ie];c<h.length;c++){var l=h[c];u=e.makeStorageReference(new pe(t,l["name"]));n.items.push(u)}return n}function Le(e,t,r){var n=fe(r);if(null===n)return null;var o=n;return De(e,t,o)}function Me(e){if(!Q(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===ke){if(!re(e[ke])||e[ke]<=0)throw"Expected maxResults to be a positive number.";if(e[ke]>1e3)throw"Expected maxResults to be less than or equal to "+Ue+"."}else{if(t!==Pe)throw"Unknown option: "+t;if(e[Pe]&&!te(e[Pe]))throw"Expected pageToken to be string."}}var je=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
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
 */function Be(e){if(!e)throw _()}function We(e,t){function r(r,n){var o=Te(e,n,t);return Be(null!==o),o}return r}function Ge(e,t){function r(r,n){var o=Le(e,t,n);return Be(null!==o),o}return r}function Fe(e,t){function r(r,n){var o=Te(e,n,t);return Be(null!==o),Se(o,n)}return r}function qe(e){function t(t,r){var n;return n=401===t.getStatus()?y():402===t.getStatus()?b(e.bucket):403===t.getStatus()?g(e.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return t}function ze(e){var t=qe(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=v(e.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function He(e,t,r){var n=t.fullServerUrl(),o=be(n),i="GET",a=e.maxOperationRetryTime(),s=new je(o,i,We(e,r),a);return s.errorHandler=ze(t),s}function Ve(e,t,r,n,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=be(a),u="GET",c=e.maxOperationRetryTime(),h=new je(s,u,Ge(e,t.bucket),c);return h.urlParams=i,h.errorHandler=qe(t),h}function Xe(e,t,r){var n=t.fullServerUrl(),o=be(n),i="GET",a=e.maxOperationRetryTime(),s=new je(o,i,Fe(e,r),a);return s.errorHandler=ze(t),s}function Ke(e,t,r,n){var o=t.fullServerUrl(),i=be(o),a="PATCH",s=Ce(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime(),h=new je(i,a,We(e,n),c);return h.headers=u,h.body=s,h.errorHandler=ze(t),h}function Je(e,t){var r=t.fullServerUrl(),n=be(r),o="DELETE",i=e.maxOperationRetryTime();function a(e,t){}var s=new je(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=ze(t),s}function Ze(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function $e(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=Ze(null,t)),n}function Qe(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=$e(t,n,o),h=Ce(c,r),l="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",p="\r\n--"+u+"--",f=le.getBlob(l,n,p);if(null===f)throw A();var d={name:c["fullPath"]},_=be(i),v="POST",b=e.maxUploadRetryTime(),y=new je(_,v,We(e,r),b);return y.urlParams=d,y.headers=a,y.body=f.uploadData(),y.errorHandler=qe(t),y}var Ye=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function et(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){Be(!1)}var n=t||["active"];return Be(!!r&&-1!==n.indexOf(r)),r}function tt(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=$e(t,n,o),s={name:a["fullPath"]},u=be(i),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},l=Ce(a,r),p=e.maxUploadRetryTime();function f(e){var t;et(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Be(!1)}return Be(te(t)),t}var d=new je(u,c,f,p);return d.urlParams=s,d.headers=h,d.body=l,d.errorHandler=qe(t),d}function rt(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=et(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Be(!1)}r||Be(!1);var o=Number(r);return Be(!isNaN(o)),new Ye(o,n.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime(),u=new je(r,a,i,s);return u.headers=o,u.errorHandler=qe(t),u}var nt=262144;function ot(e,t,r,n,o,i,a,s){var u=new Ye(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw O();var c=u.total-u.current,h=c;o>0&&(h=Math.min(h,o));var l=u.current,p=l+h,f=h===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":u.current},_=n.slice(l,p);if(null===_)throw A();function v(e,r){var o,a=et(e,["active","final"]),s=u.current+h,c=n.size();return o="final"===a?We(t,i)(e,r):null,new Ye(s,c,"final"===a,o)}var b="POST",y=t.maxUploadRetryTime(),g=new je(r,b,v,y);return g.headers=d,g.body=_.uploadData(),g.progressCallback=s||null,g.errorHandler=qe(e),g}
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
 */var it=function(){function e(e,t,r){var n=$(e)||J(t)||J(r);if(n)this.next=e,this.error=t||null,this.complete=r||null;else{var o=e;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return e}(),at=function(){function e(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}return e}();
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
function st(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw C(n,o,e,r.length);for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(s){throw s instanceof Error?S(i,e,s.message):S(i,e,s)}}var ut=function(){function e(e,t){var r=this;this.validator=function(t){r.optional&&!Z(t)||e(t)},this.optional=!!t}return e}();function ct(e,t){return function(r){e(r),t(r)}}function ht(e,t){function r(e){if(!te(e))throw"Expected string."}var n;return n=e?ct(r,e):r,new ut(n,t)}function lt(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||ie()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new ut(e)}function pt(e){return new ut(Ne,e)}function ft(e){return new ut(Me,e)}function dt(){function e(e){var t=ne(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new ut(e)}function _t(e,t){function r(t){var r=null===t||J(t)&&t instanceof Object;if(!r)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new ut(r,t)}function vt(e){function t(e){var t=null===e||$(e);if(!t)throw"Expected a Function."}return new ut(t,e)}
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
 */function bt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
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
 */var yt=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=V.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(f.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(V.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(f.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(V.ERROR))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===V.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then((function(r){switch(t.state_){case V.RUNNING:e(r);break;case V.CANCELING:t.transition_(V.CANCELED);break;case V.PAUSING:t.transition_(V.PAUSED);break}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=tt(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=rt(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=nt*this.chunkMultiplier_,r=new Ye(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=ot(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(V.ERROR)}var a=e.authWrapper_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(V.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){var e=nt*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=He(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(V.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=Qe(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(V.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case V.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case V.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case V.RUNNING:var t=this.state_===V.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case V.PAUSED:this.state_=e,this.notifyObservers_();break;case V.CANCELED:this.error_=E(),this.state_=e,this.notifyObservers_();break;case V.ERROR:this.state_=e,this.notifyObservers_();break;case V.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case V.PAUSING:this.transition_(V.PAUSED);break;case V.CANCELING:this.transition_(V.CANCELED);break;case V.RUNNING:this.start_();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=K(this.state_);return new at(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==H.STATE_CHANGED)throw"Expected one of the event types: ["+H.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=vt(!0).validator,s=_t(null,!0).validator;function u(e){try{return void a(e)}catch(r){}try{s(e);var t=Z(e["next"])||Z(e["error"])||Z(e["complete"]);if(!t)throw"";return}catch(r){throw i}}var c=[ht(o),_t(u,!0),vt(!0),vt(!0)];st("on",c,arguments);var h=this;function l(e){function t(t,r,o){null!==e&&st("on",e,arguments);var i=new it(t,r,n);return h.addObserver_(i),function(){h.removeObserver_(i)}}return t}function p(e){if(null===e)throw i;u(e)}var f=[_t(p),vt(!0),vt(!0)],d=!(Z(t)||Z(r)||Z(n));return d?l(f):l(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=this.observers_.slice();t.forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(K(this.state_)){case X.SUCCESS:bt(this.resolve_.bind(null,this.snapshot))();break;case X.CANCELED:case X.ERROR:var t=this.reject_;bt(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=K(this.state_);switch(t){case X.RUNNING:case X.PAUSED:e.next&&bt(e.next.bind(e,this.snapshot))();break;case X.SUCCESS:e.complete&&bt(e.complete.bind(e))();break;case X.CANCELED:case X.ERROR:e.error&&bt(e.error.bind(e,this.error_))();break;default:e.error&&bt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){st("resume",[],arguments);var e=this.state_===V.PAUSED||this.state_===V.PAUSING;return e&&this.transition_(V.RUNNING),e},e.prototype.pause=function(){st("pause",[],arguments);var e=this.state_===V.RUNNING;return e&&this.transition_(V.PAUSING),e},e.prototype.cancel=function(){st("cancel",[],arguments);var e=this.state_===V.RUNNING||this.state_===V.PAUSING;return e&&this.transition_(V.CANCELING),e},e}(),gt=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof pe?t:pe.makeFromUrl(t)}return e.prototype.toString=function(){return st("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return Re()},e.prototype.child=function(e){st("child",[ht()],arguments);var t=_e(this.location.path,e),r=new pe(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=de(this.location.path);if(null===e)return null;var t=new pe(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new pe(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ve(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),st("put",[lt(),pt(!0)],arguments),this.throwIfRoot_("put"),new yt(this,this.authWrapper,this.location,this.mappings(),new le(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=x.RAW),st("putString",[ht(),ht(I,!0),pt(!0)],arguments),this.throwIfRoot_("putString");var n=L(t,e),o=Object.assign({},r);return!J(o["contentType"])&&J(n.contentType)&&(o["contentType"]=n.contentType),new yt(this,this.authWrapper,this.location,this.mappings(),new le(n.data,!0),o)},e.prototype.delete=function(){var e=this;return st("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(t){var r=Je(e.authWrapper,e.location);return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){st("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return Object(i["__awaiter"])(this,void 0,void 0,(function(){var r,n,o,a;return Object(i["__generator"])(this,(function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){st("list",[ft(!0)],arguments);var t=this;return this.authWrapper.getAuthToken().then((function(r){var n=e||{},o=Ve(t.authWrapper,t.location,"/",n.pageToken,n.maxResults);return t.authWrapper.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return st("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(t){var r=He(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return st("updateMetadata",[pt()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(r){var n=Ke(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return st("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(t){var r=Xe(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw T();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw k(e)},e}(),mt=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Et=function(){function e(){this.map=new Map,this.id=l}return e.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then((function(){return t.map.delete(r)}),(function(){return t.map.delete(r)}))},e.prototype.clear=function(){this.map.forEach((function(e){e&&e.cancel(!0)})),this.map.clear()},e}(),wt=function(){function e(t,r,n,o,i,a){var s;if(this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var u=this.app_.options;J(u)&&(this.bucket_=e.extractBucket_(u),this.appId_=null!==(s=u.appId)&&void 0!==s?s:null)}this.authProvider_=r,this.storageRefMaker_=n,this.requestMaker_=o,this.pool_=a,this.service_=i,this.maxOperationRetryTime_=c,this.maxUploadRetryTime_=h,this.requestMap_=new Et}return e.extractBucket_=function(e){var t=e[u]||null;if(null==t)return null;var r=pe.makeFromBucketSpec(t);return r.bucket},e.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then((function(e){return null!==e?e.accessToken:null}),(function(){return null})):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw N();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new mt(N());var r=this.requestMaker_(e,this.appId_,t,this.pool_);return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
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
function Rt(e,t,r){var n=1,o=null,a=!1,s=0;function u(){return 2===s}var c=!1;function h(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function l(t){o=setTimeout((function(){o=null,e(p,u())}),t)}function p(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)h.call.apply(h,Object(i["__spreadArrays"])([null,e],t));else{var o,p=u()||a;if(p)h.call.apply(h,Object(i["__spreadArrays"])([null,e],t));else n<64&&(n*=2),1===s?(s=2,o=0):o=1e3*(n+Math.random()),l(o)}}var f=!1;function d(e){f||(f=!0,c||(null!==o?(e||(s=2),clearTimeout(o),l(0)):e||(s=1)))}return l(0),setTimeout((function(){a=!0,d(!0)}),r),d}function At(e){e(!1)}
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
 */var Ot=function(){function e(e,t,r,n,o,i,a,s,u,c,h){var l=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=h,this.promise_=new Promise((function(e,t){l.resolve_=e,l.reject_=t,l.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new Tt(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===z.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new Tt(a,r))}else{var s=r.getErrorCode()===z.ABORT;t(!1,new Tt(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());Z(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=_();s.setServerResponseProp(i.getResponseText()),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(r.canceled){s=e.appDelete_?N():E();o(s)}else{s=m();o(s)}}this.canceled_?r(!1,new Tt(!1,null,!0)):this.backoffId_=Rt(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&At(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),Tt=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function St(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Ct(e){var t="undefined"!==typeof o.a?o.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function Nt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function kt(e,t,r,n){var o=ye(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return Nt(a,t),St(a,r),Ct(a),new Ot(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
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
 */var Ut=function(){function e(e,t,r,n){function o(e,t){return new gt(e,t)}if(this.bucket_=null,this.authWrapper_=new wt(e,t,o,kt,this,r),this.app_=e,null!=n)this.bucket_=pe.makeFromBucketSpec(n);else{var i=this.authWrapper_.bucket();null!=i&&(this.bucket_=new pe(i,""))}this.internals_=new Pt(this)}return e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(st("ref",[ht(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new gt(this.authWrapper_,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{pe.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return st("refFromURL",[ht(t,!1)],arguments),new gt(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){st("setMaxUploadRetryTime",[dt()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){st("setMaxOperationRetryTime",[dt()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),Pt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}(),xt="@firebase/storage",It="0.3.37",Dt="storage";function Lt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new Ut(r,n,new se,t)}function Mt(e){var t={TaskState:X,TaskEvent:H,StringFormat:x,Storage:Ut,Reference:gt};e.INTERNAL.registerComponent(new a["Component"](Dt,Lt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(xt,It)}Mt(o.a)},cd51:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r("9ab4"),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296===(64512&o)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},u=function(e){var t=[],r=0,n=0;while(r<e.length){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){i=e[r++];var a=e[r++],s=e[r++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,u=o+2<e.length,c=u?e[o+2]:0,h=i>>2,l=(3&i)<<4|s>>4,p=(15&s)<<2|c>>6,f=63&c;u||(f=64,a||(p=64)),n.push(r[h],r[l],r[p],r[f])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):u(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length,s=a?r[e.charAt(o)]:0;++o;var u=o<e.length,c=u?r[e.charAt(o)]:64;++o;var h=o<e.length,l=h?r[e.charAt(o)]:64;if(++o,null==i||null==s||null==c||null==l)throw Error();var p=i<<2|s>>4;if(n.push(p),64!==c){var f=s<<4&240|c>>2;if(n.push(f),64!==l){var d=c<<6&192|l;n.push(d)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){var t=s(e);return c.encodeByteArray(t,!0)},l=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function p(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=f(e[n],t[n]));return e}
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function b(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function y(){return"object"===typeof self&&self.self===self}function g(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){return _().indexOf("Electron/")>=0}function w(){var e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return _().indexOf("MSAppHost/")>=0}function A(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function O(){return!b()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
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
 */var T="FirebaseError",S=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name=T,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,C.prototype.create),o}return n.__extends(t,e),t}(Error),C=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?N(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new S(o,s),c=0,h=Object.keys(n);c<h.length;c++){var l=h[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=n[l])}return u},e}();function N(e,t){return e.replace(k,(function(e,r){var n=t[r];return null!=n?String(n):"<"+r+"?>"}))}var k=/\{\$([^}]+)}/g;
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
 */function U(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
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
 */var x=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=U(l(i[0])||""),r=U(l(i[1])||""),o=i[2],n=r["d"]||{},delete r["d"]}catch(a){}return{header:t,claims:r,data:n,signature:o}},I=function(e){var t=x(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"===typeof t&&(t.hasOwnProperty("nbf")?n=t["nbf"]:t.hasOwnProperty("iat")&&(n=t["iat"]),o=t.hasOwnProperty("exp")?t["exp"]:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},D=function(e){var t=x(e).claims;return"object"===typeof t&&t.hasOwnProperty("iat")?t["iat"]:null},L=function(e){var t=x(e),r=t.claims;return!!r&&"object"===typeof r&&r.hasOwnProperty("iat")},M=function(e){var t=x(e).claims;return"object"===typeof t&&!0===t["admin"]};
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
function j(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function W(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function G(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
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
 */function F(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n],a=i[0],s=i[1];r(a,s)}return t.length?"&"+t.join("&"):""}function q(e){var t={},r=e.replace(/^\?/,"").split("&");return r.forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t}
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
 */var z=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"===typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],u=this.chain_[1],c=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=h^u&(c^h),a=1518500249):(i=u^c^h,a=1859775393):n<60?(i=u&c|h&(u|c),a=2400959708):(i=u^c^h,a=3395469782);o=(s<<5|s>>>27)+i+l+a+r[n]&4294967295;l=h,h=c,c=4294967295&(u<<30|u>>>2),u=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;while(n<t){if(0===i)while(n<=r)this.compress_(e,n),n+=this.blockSize;if("string"===typeof e){while(n<t)if(o[i]=e.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}else while(n<t)if(o[i]=e[n],++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();function H(e,t){var r=new V(e,t);return r.subscribe.bind(r)}var V=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=K(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=J),void 0===n.error&&(n.error=J),void 0===n.complete&&(n.complete=J);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function X(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"===typeof e[o])return!0}return!1}function J(){}
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
 */var Z=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o){var i=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".";throw new Error(i)}};function $(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument ",o}function Q(e,t,r,n){if((!n||r)&&"string"!==typeof r)throw new Error($(e,t,n)+"must be a valid firebase namespace.")}function Y(e,t,r,n){if((!n||r)&&"function"!==typeof r)throw new Error($(e,t,n)+"must be a valid function.")}function ee(e,t,r,n){if((!n||r)&&("object"!==typeof r||null===r))throw new Error($(e,t,n)+"must be a valid context object.")}
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
 */var te=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(n)-56320;o=65536+(a<<10)+s}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},re=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t};t.CONSTANTS=o,t.Deferred=d,t.ErrorFactory=C,t.FirebaseError=S,t.Sha1=z,t.assert=i,t.assertionError=a,t.async=X,t.base64=c,t.base64Decode=l,t.base64Encode=h,t.contains=j,t.createSubscribe=H,t.decode=x,t.deepCopy=p,t.deepExtend=f,t.errorPrefix=$,t.getUA=_,t.isAdmin=M,t.isBrowser=y,t.isBrowserExtension=g,t.isElectron=E,t.isEmpty=W,t.isIE=w,t.isMobileCordova=v,t.isNode=b,t.isNodeSdk=A,t.isReactNative=m,t.isSafari=O,t.isUWP=R,t.isValidFormat=L,t.isValidTimestamp=I,t.issuedAtTime=D,t.jsonEval=U,t.map=G,t.querystring=F,t.querystringDecode=q,t.safeGet=B,t.stringLength=re,t.stringToByteArray=te,t.stringify=P,t.validateArgCount=Z,t.validateCallback=Y,t.validateContextObject=ee,t.validateNamespace=Q}).call(this,r("c8ba"))}}]);