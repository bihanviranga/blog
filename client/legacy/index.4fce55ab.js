import{_ as t,a as r,b as a,c as n,i as s,d as e,S as o,s as c,e as i,t as l,f,g as u,h,j as v,k as p,l as m,m as d,n as g,o as b,p as y,q as E,r as R,u as k,v as w}from"./client.9eb20045.js";import{p as H}from"./posts.d179865e.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,e=r(t);if(n){var o=r(this).constructor;s=Reflect.construct(e,arguments,o)}else s=e.apply(this,arguments);return a(this,s)}}function q(t,r,a){var n=t.slice();return n[0]=r[a],n}function P(t){var r,a,n,s,e,o,c,E,R=t[0].title+"",k=t[0].summary+"";return{c:function(){r=i("article"),a=i("a"),n=i("h2"),s=l(R),e=f(),o=i("p"),c=l(k),E=f(),this.h()},l:function(t){r=u(t,"ARTICLE",{});var i=h(r);a=u(i,"A",{href:!0});var l=h(a);n=u(l,"H2",{});var f=h(n);s=v(f,R),f.forEach(p),e=m(l),o=u(l,"P",{class:!0});var d=h(o);c=v(d,k),d.forEach(p),l.forEach(p),E=m(i),i.forEach(p),this.h()},h:function(){d(o,"class","svelte-1r1wkbp"),d(a,"href","/blog/".concat(t[0].permalink))},m:function(t,i){g(t,r,i),b(r,a),b(a,n),b(n,s),b(a,e),b(a,o),b(o,c),b(r,E)},p:y,d:function(t){t&&p(r)}}}function T(t){for(var r,a,n,s,e,o,c,j,T=H,x=[],A=0;A<T.length;A+=1)x[A]=P(q(t,T,A));return{c:function(){r=f(),a=i("h1"),n=l("Hello, world!"),s=f(),e=i("p"),o=l("This is a simple description about my blog."),c=f();for(var t=0;t<x.length;t+=1)x[t].c();j=E(),this.h()},l:function(t){R('[data-svelte="svelte-q3vqp2"]',document.head).forEach(p),r=m(t),a=u(t,"H1",{class:!0});var i=h(a);n=v(i,"Hello, world!"),i.forEach(p),s=m(t),e=u(t,"P",{class:!0});var l=h(e);o=v(l,"This is a simple description about my blog."),l.forEach(p),c=m(t);for(var f=0;f<x.length;f+=1)x[f].l(t);j=E(),this.h()},h:function(){document.title="Bihan's Blog",d(a,"class","svelte-1r1wkbp"),d(e,"class","svelte-1r1wkbp")},m:function(t,i){g(t,r,i),g(t,a,i),b(a,n),g(t,s,i),g(t,e,i),b(e,o),g(t,c,i);for(var l=0;l<x.length;l+=1)x[l].m(t,i);g(t,j,i)},p:function(t,r){var a=k(r,1)[0];if(0&a){var n;for(T=H,n=0;n<T.length;n+=1){var s=q(t,T,n);x[n]?x[n].p(s,a):(x[n]=P(s),x[n].c(),x[n].m(j.parentNode,j))}for(;n<x.length;n+=1)x[n].d(1);x.length=T.length}},i:y,o:y,d:function(t){t&&p(r),t&&p(a),t&&p(s),t&&p(e),t&&p(c),w(x,t),t&&p(j)}}}var x=function(r){t(i,o);var a=j(i);function i(t){var r;return n(this,i),r=a.call(this),s(e(r),t,null,T,c,{}),r}return i}();export default x;