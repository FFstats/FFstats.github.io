(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"Lf+c":function(e,a,t){"use strict";t.r(a);var n=t("KQm4"),r=t("J2m7"),l=t.n(r),s=(t("K/os"),t("q1tI")),o=t.n(s),d=t("Bl7J"),c=t("rMbk"),i=(t("/riL"),t("xU0K")),m=t("aIYv");a.default=function(e){var a=Object(s.useState)([]),t=a[0],r=a[1],u=Object(s.useState)([]),f=u[0],b=u[1],p=o.a.useState("All"),h=p[0],w=p[1],g=Object(s.useState)(!1),E=g[0],y=g[1],N=Object(s.useState)(!0),F=N[0],S=N[1],_=e.data.allGamesJson.nodes,v=e.data.allOwnersJson.nodes,T=Object(n.a)(new Set(_.map((function(e){return e.year})))).reverse();return Object(s.useEffect)((function(){var e,a,t;e=[],a=[],t=_,E||(t=t.filter((function(e){return"WINNERS_BRACKET"!==e.playoffTierType}))),F||(t=t.filter((function(e){return"NONE"!==e.playoffTierType}))),"All"!==h&&(t=t.filter((function(e){return e.year===h}))),t.forEach((function(e){a.find((function(a){return a.id===e.team_a[0].ownerId}))?a.find((function(a){return a.id===e.team_a[0].ownerId})).games.push(e):a.push({id:e.team_a[0].ownerId,name:e.team_a[0].owner,games:[e]}),a.find((function(a){return a.id===e.team_b[0].ownerId}))?a.find((function(a){return a.id===e.team_b[0].ownerId})).games.push(e):a.push({id:e.team_b[0].ownerId,name:e.team_b[0].owner,games:[e]})})),a.forEach((function(a){var t=0,n=0,r=0,s=0,o=0;a.games.forEach((function(e){e.team_a[0].ownerId===a.id?(s+=parseFloat(e.team_a[0].score),o+=parseFloat(e.team_b[0].score)):e.team_b[0].ownerId===a.id&&(s+=parseFloat(e.team_b[0].score),o+=parseFloat(e.team_a[0].score)),"HOME"===e.winner&&e.team_a[0].ownerId===a.id||"AWAY"===e.winner&&e.team_b[0].ownerId===a.id?t++:parseFloat(e.team_b[0].score)===parseFloat(e.team_a[0].score)?r++:n++}));var d=parseFloat(t+.5*r)/a.games.length,c=l()(v,["id",a.id]);e.push({team:""!==c.fantasyname?c.name+" ("+c.fantasyname+")":c.name,wins:t,loses:n,ties:r,points:parseFloat(s.toFixed(2)),pointsAgainst:parseFloat(o.toFixed(2)),winRate:d.toFixed(3)})})),e.sort((function(e,a){return(e=new Date(e.wins))>(a=new Date(a.wins))?-1:e<a?1:0})),e.forEach((function(e,a){e.rank=a+1})),b((function(){return e}))}),[h,E,F]),Object(s.useEffect)((function(){r((function(){return Object(n.a)(T)}))}),[]),o.a.createElement(d.a,null,o.a.createElement("main",{className:"container-fluid standings"},o.a.createElement(c.a,{title:"Standings"}),o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"card-header"},o.a.createElement("input",{type:"checkbox",id:"regular-season",value:"regular-season",onChange:function(e){S(e.target.checked)},checked:F})," ",o.a.createElement("span",{className:"checkbox-label"},"Regular Season"),o.a.createElement("input",{type:"checkbox",id:"playoffs",value:"playoffs",onChange:function(e){y(e.target.checked)},checked:E})," ",o.a.createElement("span",{className:"checkbox-label"},"Playoffs"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.a,{data:t,change:function(e){w(e.target.value)}})),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"table-responsive"},o.a.createElement(m.BootstrapTable,{data:f,options:{defaultSortName:"rank",defaultSortOrder:"asc"},bordered:!1,trClassName:"alt",version:"4"},o.a.createElement(m.TableHeaderColumn,{dataField:"rank",isKey:!0,dataSort:!0,className:"heading--gray",width:"10%"},"Rank"),o.a.createElement(m.TableHeaderColumn,{dataField:"team",dataSort:!0,className:"heading--gray"},"Team"),o.a.createElement(m.TableHeaderColumn,{dataField:"wins",dataSort:!0,className:"heading--gray",width:"10%"},"W"),o.a.createElement(m.TableHeaderColumn,{dataField:"loses",dataSort:!0,className:"heading--gray",width:"10%"},"L"),o.a.createElement(m.TableHeaderColumn,{dataField:"ties",dataSort:!0,className:"heading--gray",width:"10%"},"T"),o.a.createElement(m.TableHeaderColumn,{dataField:"winRate",dataSort:!0,className:"heading--gray",width:"10%"},"PCT"),o.a.createElement(m.TableHeaderColumn,{dataField:"points",dataSort:!0,className:"heading--gray",width:"10%"},"PF"),o.a.createElement(m.TableHeaderColumn,{dataField:"pointsAgainst",dataSort:!0,className:"heading--gray",width:"10%"},"PA")))),o.a.createElement("div",{className:"card-footer small text-muted"}))))}}}]);
//# sourceMappingURL=component---src-pages-standingstest-js-d2772f31363d06101dfa.js.map