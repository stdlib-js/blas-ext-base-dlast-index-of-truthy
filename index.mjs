// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dindex-of-truthy@esm/index.mjs";function r(e,t,r,n){var d;return e<=0?-1:(n+=(e-1)*r,(d=s(e,t,r*=-1,n))<0?d:e-1-d)}function n(e,s,n){return r(e,s,n,t(e,n))}e(n,"ndarray",r);export{n as default,r as ndarray};
//# sourceMappingURL=index.mjs.map
