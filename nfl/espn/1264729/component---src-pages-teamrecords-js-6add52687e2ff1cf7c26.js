(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"31yf":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);t("9RAK");a.a=function(e){return r.a.createElement("div",{className:"col-lg-6 records"},r.a.createElement("div",{className:"row mx-lg-2 mb-5 mb-lg-2 clippedbox--color-dark text-center"},r.a.createElement("h2",{className:"heading--gray my-4 col-12"},e.title),r.a.createElement("div",{className:"col-6 px-0 mb-1"},r.a.createElement("p",{className:"heading--gray"},"Team")),r.a.createElement("div",{className:"col-2 px-0"},r.a.createElement("p",{className:"heading--gray"},"Year")),r.a.createElement("div",{className:" col-2 px-0"},r.a.createElement("p",{className:"heading--gray"},"Week")),r.a.createElement("div",{className:" col-2 px-0"},r.a.createElement("p",{className:"heading--gray"},e.label)),e.data.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{className:"col-12 alt"},r.a.createElement("div",{className:"row flex-center"},r.a.createElement("div",{className:"col-6 flex-center pr-0"},r.a.createElement("p",{className:"rank-number"},a+1),r.a.createElement("img",{alt:"team-logo",src:e.image,className:"image",onError:function(e){e.target.src="https://fantasy-franchise.com/img/DEF.png"}}),r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:"col-2 text-center"},r.a.createElement("p",null,e.year)),r.a.createElement("div",{className:"col-2 text-center"},r.a.createElement("p",null,e.week)),r.a.createElement("div",{className:"col-2 text-center"},r.a.createElement("p",null,e.score)))))}))))}},"7MNl":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("LvDl");function r(e,a){var t,r,c,l,s,o;if(t=r=c=l="",s=o=0,parseFloat(e.team_a[0].score)>parseFloat(e.team_b[0].score)?(r=e.team_a[0].ownerId,s=e.team_a[0].score,l=e.team_b[0].ownerId,o=e.team_b[0].score,t=n.find(a,["id",r]).name,c=n.find(a,["id",l]).name):parseFloat(e.team_b[0].score)>parseFloat(e.team_a[0].score)&&(r=e.team_b[0].ownerId,s=e.team_b[0].score,l=e.team_a[0].ownerId,o=e.team_a[0].score,t=n.find(a,["id",r]).name,c=n.find(a,["id",l]).name),""!==t)return{winner:t,loser:c,winnerId:r,loserId:l,scoreWin:s,scoreLose:o,week:e.week,year:e.year,margin:parseFloat((s-o).toFixed(2)),sumScore:parseFloat((s+o).toFixed(2))}}},"9RAK":function(e,a,t){},J2m7:function(e,a,t){var n=t("XKAG")(t("UfWW"));e.exports=n},K0H6:function(e,a,t){},KwMD:function(e,a){e.exports=function(e,a,t,n){for(var r=e.length,c=t+(n?1:-1);n?c--:++c<r;)if(a(e[c],c,e))return c;return-1}},OHyn:function(e,a,t){"use strict";t.r(a);var n=t("KQm4"),r=t("wig9"),c=t.n(r),l=t("J2m7"),s=t.n(l),o=t("q1tI"),m=t.n(o),i=t("Bl7J"),u=t("rMbk"),d=t("xU0K"),f=t("31yf"),p=t("ZVHq"),E=t("7MNl");a.default=function(e){var a=e.data.allGamesJson.nodes,t=e.data.allOwnersJson.nodes,r=Object(o.useState)(Object(n.a)(new Set(a.map((function(e){return e.year})))).reverse())[0],l=Object(o.useState)("All"),v=l[0],g=l[1],N=Object(o.useState)(!1),b=N[0],x=N[1],y=Object(o.useState)(!0),h=y[0],w=y[1],k=Object(o.useState)([]),S=k[0],I=(k[1],Object(o.useState)([])),O=I[0],T=(I[1],Object(o.useState)([])),_=T[0],j=(T[1],Object(o.useState)([])),M=j[0],W=(j[1],[]),K=[],F=a;return Object(o.useEffect)((function(){b||(F=F.filter((function(e){return"WINNERS_BRACKET"!==e.playoffTierType}))),h||(F=F.filter((function(e){return"NONE"!==e.playoffTierType}))),"All"!==v&&(F=F.filter((function(e){return e.year===parseInt(v)}))),F.forEach((function(e){W.push(Object(E.a)(e,t))})),F.forEach((function(e){var a=e.team_a[0],n=e.team_b[0];K.push({id:a.ownerId,name:s()(t,["id",a.ownerId]).name,score:a.score,week:e.week,year:e.year,image:s()(t,["id",a.ownerId]).image}),K.push({id:n.ownerId,name:s()(t,["id",n.ownerId]).name,score:n.score,week:e.week,year:e.year,image:s()(t,["id",n.ownerId]).image})})),W=c()(W)}),[b,h,v]),m.a.createElement(i.a,null,m.a.createElement("main",{className:"container-fluid"},m.a.createElement(u.a,{title:"Game Records"}),m.a.createElement("div",{className:"card mb-3"},m.a.createElement("div",{className:"card-header"},m.a.createElement("input",{type:"checkbox",id:"regular-season",value:"regular-season",onChange:function(e){w(e.target.checked)},checked:h})," ",m.a.createElement("span",{className:"checkbox-label"},"Regular Season"),m.a.createElement("input",{type:"checkbox",id:"playoffs",value:"playoffs",onChange:function(e){x(e.target.checked)},checked:b})," ",m.a.createElement("span",{className:"checkbox-label"},"Playoffs"),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(d.a,{data:r,change:function(e){g(e.target.value)}})),m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row"},m.a.createElement(f.a,{data:S,label:"Score",title:"Top Ten Scores"}),m.a.createElement(f.a,{data:O,label:"Score",title:"Bottom Ten Scores"})),m.a.createElement("div",{className:"row my-4"},m.a.createElement(p.a,{data:_,label:"Margin",title:"Top Ten Victory Margins"}),m.a.createElement(p.a,{data:M,label:"Margin",title:"Bottom Ten Victory Margins"}))),m.a.createElement("div",{className:"card-footer small text-muted"}))))}},Sxd8:function(e,a,t){var n=t("ZCgT");e.exports=function(e){var a=n(e),t=a%1;return a==a?t?a-t:a:0}},TO8r:function(e,a){var t=/\s/;e.exports=function(e){for(var a=e.length;a--&&t.test(e.charAt(a)););return a}},UfWW:function(e,a,t){var n=t("KwMD"),r=t("ut/Y"),c=t("Sxd8"),l=Math.max;e.exports=function(e,a,t){var s=null==e?0:e.length;if(!s)return-1;var o=null==t?0:c(t);return o<0&&(o=l(s+o,0)),n(e,r(a,3),o)}},WdCr:function(e,a,t){},XKAG:function(e,a,t){var n=t("ut/Y"),r=t("MMmD"),c=t("7GkX");e.exports=function(e){return function(a,t,l){var s=Object(a);if(!r(a)){var o=n(t,3);a=c(a),t=function(e){return o(s[e],e,s)}}var m=e(a,t,l);return m>-1?s[o?a[m]:m]:void 0}}},ZCgT:function(e,a,t){var n=t("tLB3");e.exports=function(e){return e?(e=n(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},ZVHq:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);t("K0H6");a.a=function(e){return r.a.createElement("div",{className:"col-lg-6 records"},r.a.createElement("div",{className:"row mx-lg-2 mb-5 mb-lg-2 clippedbox--color-dark text-center"},r.a.createElement("h2",{className:"heading--gray my-4 col-12"},e.title),r.a.createElement("div",{className:"offset-1 col-5 r px-0 mb-1"},r.a.createElement("p",{className:"heading--gray"},"Matchup")),r.a.createElement("div",{className:"col-2 px-0"},r.a.createElement("p",{className:"heading--gray"},"Year")),r.a.createElement("div",{className:" col-2 px-0"},r.a.createElement("p",{className:"heading--gray"},"Week")),r.a.createElement("div",{className:" col-2 px-0"},r.a.createElement("p",{className:"heading--gray"},e.label)),e.data.map((function(a,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("div",{className:"col-12 alt"},r.a.createElement("div",{className:"row my-2 flex-center"},r.a.createElement("div",{className:"col-1 pr-0"},r.a.createElement("p",{className:"rank-number"},t+1)),r.a.createElement("div",{className:"col-5 text-center px-0"},r.a.createElement("p",null,a.winner," ",r.a.createElement("span",null,"- ",a.scoreWin)),r.a.createElement("p",{className:"heading--gray mx-2 text-center"},"VS"),r.a.createElement("p",null,a.loser," ",r.a.createElement("span",null,"- ",a.scoreLose))),r.a.createElement("div",{className:"col-2 text-center"},r.a.createElement("p",null,a.year)),r.a.createElement("div",{className:"col-2 text-center"},r.a.createElement("p",null,a.week)),r.a.createElement("div",{className:"col-2 text-center"},"Margin"===e.show&&r.a.createElement("p",null,a.margin),"Points"===e.show&&r.a.createElement("p",null,a.sumScore),"scoreWin"===e.show&&r.a.createElement("p",null,a.scoreWin),"scoreLose"===e.show&&r.a.createElement("p",null,a.scoreLose)))))}))))}},jXQH:function(e,a,t){var n=t("TO8r"),r=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(r,""):e}},tLB3:function(e,a,t){var n=t("jXQH"),r=t("GoyQ"),c=t("/9aa"),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,o=/^0o[0-7]+$/i,m=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(r(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=r(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var t=s.test(e);return t||o.test(e)?m(e.slice(2),t?2:8):l.test(e)?NaN:+e}},wig9:function(e,a){e.exports=function(e){for(var a=-1,t=null==e?0:e.length,n=0,r=[];++a<t;){var c=e[a];c&&(r[n++]=c)}return r}},xU0K:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);t("WdCr");a.a=function(e){return r.a.createElement("select",{className:"form-control",id:"yearSelector",onChange:e.change},r.a.createElement("option",{value:"All"},"All-Time"),e.data.map((function(e,a){return r.a.createElement("option",{key:"key"+a,value:e},e)})))}}}]);
//# sourceMappingURL=component---src-pages-teamrecords-js-6add52687e2ff1cf7c26.js.map