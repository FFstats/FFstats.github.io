(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1LK5":function(n,r){n.exports=function(n,r){var t=n.length;for(n.sort(r);t--;)n[t]=n[t].value;return n}},"7MNl":function(n,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return u})),t.d(r,"d",(function(){return i})),t.d(r,"a",(function(){return a}));var e=t("LvDl");function o(n){var r=[];return n.forEach((function(n){var t=null==n?void 0:n.team_a[0],e=null==n?void 0:n.team_b[0];r.find((function(n){return n.id===(null==t?void 0:t.ownerId)}))?r.find((function(n){return n.id===(null==t?void 0:t.ownerId)})).games.push(n):r.push({id:null==t?void 0:t.ownerId,name:null==t?void 0:t.owner,games:[n]}),r.find((function(n){return n.id===(null==e?void 0:e.ownerId)}))?r.find((function(n){return n.id===(null==e?void 0:e.ownerId)})).games.push(n):r.push({id:null==e?void 0:e.ownerId,name:null==e?void 0:e.owner,games:[n]})})),r}function u(n){var r=[];return n.forEach((function(n){var t=null==n?void 0:n.team_a[0],e=null==n?void 0:n.team_b[0];r.push({name:t.name,score:t.score,id:t.ownerId,week:n.week,year:n.year}),r.push({name:e.name,score:e.score,id:e.ownerId,week:n.week,year:n.year})})),r}function i(n,r,t,e){var o=0,u=0,i=0,a=0,c=0,f=[],l=n;return e||(l=n.filter((function(n){return"NONE"===n.playoffTierType}))),l.forEach((function(n,t){var e=null==n?void 0:n.team_a[0],l=null==n?void 0:n.team_b[0],s=parseFloat(e.score),v=parseFloat(l.score);v===s&&(i++,f.push("T")),r===e.ownerId?(s>v?(o++,f.push("W")):v>s&&(u++,f.push("L")),a+=s,c+=v):r===l.ownerId&&(s>v?(u++,f.push("L")):v>s&&(o++,f.push("W")),a+=v,c+=s)})),console.log(function(n){for(var r=[],t=1,e=0;e<n.length;e++)n[e]===n[e+1]?t++:(r.push({i:e,type:n[e],start:e+2-t,end:e+1,streak:t}),t=1);return r}(f),"consecutives"),{id:r,year:t,wins:o,loses:u,gamelog:f,pct:parseFloat(((o+.5*i)/l.length).toFixed(3)),avgPoints:parseFloat((a/l.length).toFixed(2)),avgPointsAgaisnt:parseFloat((c/l.length).toFixed(2)),scoreFor:parseFloat(a.toFixed(2)),scoreAgaisnt:parseFloat(c.toFixed(2))}}function a(n,r){var t,o,u,i,a,c;t=o=u=i="",a=c=0;var f=null==n?void 0:n.team_a[0],l=null==n?void 0:n.team_b[0],s=parseFloat(f.score),v=parseFloat(l.score);if(s>v?(o=f.ownerId,a=f.score,i=l.ownerId,c=l.score,t=e.find(r,["id",o]).name,u=e.find(r,["id",i]).name):v>s&&(o=l.ownerId,a=l.score,i=f.ownerId,c=f.score,t=e.find(r,["id",o]).name,u=e.find(r,["id",i]).name),""!==t)return{winner:t,loser:u,winnerId:o,loserId:i,scoreWin:a,scoreLose:c,week:n.week,year:n.year,margin:parseFloat((a-c).toFixed(2)),sumScore:parseFloat((a+c).toFixed(2))}}},"88Gu":function(n,r){var t=Date.now;n.exports=function(n){var r=0,e=0;return function(){var o=t(),u=16-(o-e);if(e=o,u>0){if(++r>=800)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}},BiGR:function(n,r,t){var e=t("nmnc"),o=t("03A+"),u=t("Z0cm"),i=e?e.isConcatSpreadable:void 0;n.exports=function(n){return u(n)||o(n)||!!(i&&n&&n[i])}},EA7m:function(n,r,t){var e=t("zZ0H"),o=t("Ioao"),u=t("wclG");n.exports=function(n,r){return u(o(n,r,e),n+"")}},GtlU:function(n,r,t){var e=t("KxBF"),o=t("Sxd8");n.exports=function(n,r,t){var u=null==n?0:n.length;return u?(r=t||void 0===r?1:o(r),e(n,(r=u-r)<0?0:r,u)):[]}},IWTy:function(n,r,t){var e=t("yue5");n.exports=function(n,r,t){for(var o=-1,u=n.criteria,i=r.criteria,a=u.length,c=t.length;++o<a;){var f=e(u[o],i[o]);if(f)return o>=c?f:f*("desc"==t[o]?-1:1)}return n.index-r.index}},Ioao:function(n,r,t){var e=t("heNW"),o=Math.max;n.exports=function(n,r,t){return r=o(void 0===r?n.length-1:r,0),function(){for(var u=arguments,i=-1,a=o(u.length-r,0),c=Array(a);++i<a;)c[i]=u[r+i];i=-1;for(var f=Array(r+1);++i<r;)f[i]=u[i];return f[r]=t(c),e(n,this,f)}}},J2m7:function(n,r,t){var e=t("XKAG")(t("UfWW"));n.exports=e},JC6p:function(n,r,t){var e=t("cq/+"),o=t("7GkX");n.exports=function(n,r){return n&&e(n,r,o)}},KwMD:function(n,r){n.exports=function(n,r,t,e){for(var o=n.length,u=t+(e?1:-1);e?u--:++u<o;)if(r(n[u],u,n))return u;return-1}},KxBF:function(n,r){n.exports=function(n,r,t){var e=-1,o=n.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(o);++e<o;)u[e]=n[e+r];return u}},O0oS:function(n,r,t){var e=t("Cwc5"),o=function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch(r){}}();n.exports=o},SKAX:function(n,r,t){var e=t("JC6p"),o=t("lQqw")(e);n.exports=o},Sxd8:function(n,r,t){var e=t("ZCgT");n.exports=function(n){var r=e(n),t=r%1;return r==r?t?r-t:r:0}},TO8r:function(n,r){var t=/\s/;n.exports=function(n){for(var r=n.length;r--&&t.test(n.charAt(r)););return r}},UfWW:function(n,r,t){var e=t("KwMD"),o=t("ut/Y"),u=t("Sxd8"),i=Math.max;n.exports=function(n,r,t){var a=null==n?0:n.length;if(!a)return-1;var c=null==t?0:u(t);return c<0&&(c=i(a+c,0)),e(n,o(r,3),c)}},XGnz:function(n,r,t){var e=t("CH3K"),o=t("BiGR");n.exports=function n(r,t,u,i,a){var c=-1,f=r.length;for(u||(u=o),a||(a=[]);++c<f;){var l=r[c];t>0&&u(l)?t>1?n(l,t-1,u,i,a):e(a,l):i||(a[a.length]=l)}return a}},XKAG:function(n,r,t){var e=t("ut/Y"),o=t("MMmD"),u=t("7GkX");n.exports=function(n){return function(r,t,i){var a=Object(r);if(!o(r)){var c=e(t,3);r=u(r),t=function(n){return c(a[n],n,a)}}var f=n(r,t,i);return f>-1?a[c?r[f]:f]:void 0}}},Xp7I:function(n,r,t){var e=t("KxBF"),o=t("Sxd8");n.exports=function(n,r,t){return n&&n.length?(r=t||void 0===r?1:o(r),e(n,0,r<0?0:r)):[]}},ZCgT:function(n,r,t){var e=t("tLB3");n.exports=function(n){return n?(n=e(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}},alwl:function(n,r,t){var e=t("eUgh"),o=t("ZWtO"),u=t("ut/Y"),i=t("l9OW"),a=t("1LK5"),c=t("sEf8"),f=t("IWTy"),l=t("zZ0H"),s=t("Z0cm");n.exports=function(n,r,t){r=r.length?e(r,(function(n){return s(n)?function(r){return o(r,1===n.length?n[0]:n)}:n})):[l];var v=-1;r=e(r,c(u));var d=i(n,(function(n,t,o){return{criteria:e(r,(function(r){return r(n)})),index:++v,value:n}}));return a(d,(function(n,r){return f(n,r,t)}))}},"cq/+":function(n,r,t){var e=t("mc0g")();n.exports=e},cvCv:function(n,r){n.exports=function(n){return function(){return n}}},heNW:function(n,r){n.exports=function(n,r,t){switch(t.length){case 0:return n.call(r);case 1:return n.call(r,t[0]);case 2:return n.call(r,t[0],t[1]);case 3:return n.call(r,t[0],t[1],t[2])}return n.apply(r,t)}},jXQH:function(n,r,t){var e=t("TO8r"),o=/^\s+/;n.exports=function(n){return n?n.slice(0,e(n)+1).replace(o,""):n}},"k8Y/":function(n,r,t){var e=t("alwl"),o=t("Z0cm");n.exports=function(n,r,t,u){return null==n?[]:(o(r)||(r=null==r?[]:[r]),o(t=u?void 0:t)||(t=null==t?[]:[t]),e(n,r,t))}},l9OW:function(n,r,t){var e=t("SKAX"),o=t("MMmD");n.exports=function(n,r){var t=-1,u=o(n)?Array(n.length):[];return e(n,(function(n,e,o){u[++t]=r(n,e,o)})),u}},lQqw:function(n,r,t){var e=t("MMmD");n.exports=function(n,r){return function(t,o){if(null==t)return t;if(!e(t))return n(t,o);for(var u=t.length,i=r?u:-1,a=Object(t);(r?i--:++i<u)&&!1!==o(a[i],i,a););return t}}},mc0g:function(n,r){n.exports=function(n){return function(r,t,e){for(var o=-1,u=Object(r),i=e(r),a=i.length;a--;){var c=i[n?a:++o];if(!1===t(u[c],c,u))break}return r}}},"mv/X":function(n,r,t){var e=t("ljhN"),o=t("MMmD"),u=t("wJg7"),i=t("GoyQ");n.exports=function(n,r,t){if(!i(t))return!1;var a=typeof r;return!!("number"==a?o(t)&&u(r,t.length):"string"==a&&r in t)&&e(t[r],n)}},pFRH:function(n,r,t){var e=t("cvCv"),o=t("O0oS"),u=t("zZ0H"),i=o?function(n,r){return o(n,"toString",{configurable:!0,enumerable:!1,value:e(r),writable:!0})}:u;n.exports=i},tLB3:function(n,r,t){var e=t("jXQH"),o=t("GoyQ"),u=t("/9aa"),i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(u(n))return NaN;if(o(n)){var r="function"==typeof n.valueOf?n.valueOf():n;n=o(r)?r+"":r}if("string"!=typeof n)return 0===n?n:+n;n=e(n);var t=a.test(n);return t||c.test(n)?f(n.slice(2),t?2:8):i.test(n)?NaN:+n}},wclG:function(n,r,t){var e=t("pFRH"),o=t("88Gu")(e);n.exports=o},xweI:function(n,r,t){var e=t("XGnz"),o=t("alwl"),u=t("EA7m"),i=t("mv/X"),a=u((function(n,r){if(null==n)return[];var t=r.length;return t>1&&i(n,r[0],r[1])?r=[]:t>2&&i(r[0],r[1],r[2])&&(r=[r[0]]),o(n,e(r,1),[])}));n.exports=a},yue5:function(n,r,t){var e=t("/9aa");n.exports=function(n,r){if(n!==r){var t=void 0!==n,o=null===n,u=n==n,i=e(n),a=void 0!==r,c=null===r,f=r==r,l=e(r);if(!c&&!l&&!i&&n>r||i&&a&&f&&!c&&!l||o&&a&&f||!t&&f||!u)return 1;if(!o&&!i&&!l&&n<r||l&&t&&u&&!o&&!i||c&&t&&u||!a&&u||!f)return-1}return 0}}}]);
//# sourceMappingURL=ae16668d135aeb811e8e1dd06c885dcc9d40dfcf-0bc6080165672e627799.js.map