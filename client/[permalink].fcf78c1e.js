import{S as s,i as t,s as a,e as o,t as e,a as r,l as n,c as i,b as p,d as c,f as l,g as f,j as h,k as m,o as u,n as d,H as j}from"./client.7375358a.js";import{f as x}from"./posts.68c3ce2f.js";function k(s){let t,a,x,k,H,$=s[0].title+"",b=s[0].html+"";return{c(){t=o("h1"),a=e($),x=r(),H=n(),this.h()},l(s){t=i(s,"H1",{});var o=p(t);a=c(o,$),o.forEach(l),x=f(s),H=n(),this.h()},h(){k=new j(H)},m(s,o){h(s,t,o),m(t,a),h(s,x,o),k.m(b,s,o),h(s,H,o)},p(s,[t]){1&t&&$!==($=s[0].title+"")&&u(a,$),1&t&&b!==(b=s[0].html+"")&&k.p(b)},i:d,o:d,d(s){s&&l(t),s&&l(x),s&&l(H),s&&k.d()}}}function H(s){return{post:x(s.params.permalink)}}function $(s,t,a){let{post:o}=t;return s.$$set=s=>{"post"in s&&a(0,o=s.post)},[o]}export default class extends s{constructor(s){super(),t(this,s,$,k,a,{post:0})}}export{H as preload};
