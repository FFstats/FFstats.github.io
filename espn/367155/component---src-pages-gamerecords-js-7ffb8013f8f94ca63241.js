webpackJsonp([81747085020176],{111:function(e,t){},71:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n);a(111);var s=function(e){return l.default.createElement("div",{className:"col-lg-6 records"},l.default.createElement("div",{className:"row mx-lg-2 mb-5 mb-lg-2 clippedbox--color-dark text-center"},l.default.createElement("h2",{className:"heading--gray my-4 col-12"},e.title),l.default.createElement("div",{className:"col-6 px-0 mb-1"},l.default.createElement("p",{className:"heading--gray"},"Team")),l.default.createElement("div",{className:"col-2 px-0"},l.default.createElement("p",{className:"heading--gray"},"Year")),l.default.createElement("div",{className:" col-2 px-0"},l.default.createElement("p",{className:"heading--gray"},"Week")),l.default.createElement("div",{className:" col-2 px-0"},l.default.createElement("p",{className:"heading--gray"},e.label)),e.data.map(function(e,t){return l.default.createElement(l.default.Fragment,{key:t},l.default.createElement("div",{className:"col-12 record"},l.default.createElement("div",{className:"row flex-center"},l.default.createElement("div",{className:"col-6 flex-center pr-0"},l.default.createElement("p",{className:"rank-number"},t+1),l.default.createElement("img",{src:e.image,className:"image",onError:function(e){e.target.src="/img/DEF.png"}}),l.default.createElement("p",null,e.name)),l.default.createElement("div",{className:"col-2 text-center"},l.default.createElement("p",null,e.year.replace("SEASON",""))),l.default.createElement("div",{className:"col-2 text-center"},l.default.createElement("p",null,e.week.replace("Week",""))),l.default.createElement("div",{className:"col-2 text-center"},l.default.createElement("p",null,e.score)))))})))};t.default=s,e.exports=t.default},112:function(e,t){},72:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n);a(112);var s=function(e){return l.default.createElement("div",{className:"col-lg-6 records"},l.default.createElement("div",{className:"row mx-lg-2 mb-5 mb-lg-2 clippedbox--color-dark text-center"},l.default.createElement("h2",{className:"heading--gray my-4 col-12"},e.title),l.default.createElement("div",{className:"offset-1 col-5 r px-0 mb-1"},l.default.createElement("p",{className:"heading--gray"},"Matchup")),l.default.createElement("div",{className:"col-2 px-0"},l.default.createElement("p",{className:"heading--gray"},"Year")),l.default.createElement("div",{className:" col-2 px-0"},l.default.createElement("p",{className:"heading--gray"},"Week")),l.default.createElement("div",{className:" col-2 px-0"},l.default.createElement("p",{className:"heading--gray"},e.label)),e.data.map(function(t,a){return l.default.createElement(l.default.Fragment,{key:a},l.default.createElement("div",{className:"col-12 record"},l.default.createElement("div",{className:"row my-2 flex-center"},l.default.createElement("div",{className:"col-1 pr-0"},l.default.createElement("p",{className:"rank-number"},a+1)),l.default.createElement("div",{className:"col-5 text-center px-0"},l.default.createElement("p",null,t.winner," ",l.default.createElement("span",null,"- ",t.scoreWin)),l.default.createElement("p",{className:"heading--gray mx-2 text-center"},"VS"),l.default.createElement("p",null,t.loser," ",l.default.createElement("span",null,"- ",t.scoreLose))),l.default.createElement("div",{className:"col-2 text-center"},l.default.createElement("p",null,t.year.replace("SEASON",""))),l.default.createElement("div",{className:"col-2 text-center"},l.default.createElement("p",null,t.week.replace("Week",""))),l.default.createElement("div",{className:"col-2 text-center"},"Margin"===e.show&&l.default.createElement("p",null,t.margin),"Points"===e.show&&l.default.createElement("p",null,t.sumScore),"scoreWin"===e.show&&l.default.createElement("p",null,t.scoreWin),"scoreLose"===e.show&&l.default.createElement("p",null,t.scoreLose)))))})))};t.default=s,e.exports=t.default},48:function(e,t){},37:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n);a(48);var s=function(e){return l.default.createElement("select",{className:"form-control",id:"yearSelector",onChange:e.change},l.default.createElement("option",{value:"All"},"All-Time"),e.data.map(function(e,t){return l.default.createElement("option",{key:"key"+t,value:e},e)}))};t.default=s,e.exports=t.default},73:function(e,t,a){"use strict";function r(e,t){var a,r,n,l,s,c;if(a=r=n=l="",s=c=0,parseFloat(e.team_a[0].score)>parseFloat(e.team_b[0].score)?(r=e.team_a[0].ownerId,s=e.team_a[0].score,l=e.team_b[0].ownerId,c=e.team_b[0].score):parseFloat(e.team_b[0].score)>parseFloat(e.team_a[0].score)&&(r=e.team_b[0].ownerId,s=e.team_b[0].score,l=e.team_a[0].ownerId,c=e.team_a[0].score),a=o.find(t,["id",r]).name,n=o.find(t,["id",l]).name,""!=a)return{winner:a,loser:n,winnerId:r,loserId:l,scoreWin:s,scoreLose:c,week:e.week,year:e.year,margin:parseFloat((s-c).toFixed(4)),sumScore:parseFloat((s+c).toFixed(4))}}function n(e,t){return e-t}function l(e,t){return e*t}function s(e,t){return e/t}t.__esModule=!0,t.gameOutcome=r,t.minus=n,t.multiply=l,t.divide=s;var o=a(22)},207:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var o=a(1),c=r(o),i=a(36),d=r(i),m=a(37),u=r(m),f=a(71),p=r(f),g=a(72),h=r(g),y=a(73),w=a(22),E=function(e){function t(a){n(this,t);var r=l(this,e.call(this,a));return r.yearChangeHandler=function(e){var t=e.target.value;r.setState({YearSelected:t},function(){return r.loadYearData()})},r.loadYearData=function(){var e=r.props.data.allDataJson.edges[0].node.owners,t=r.state.YearSelected,a=r.refs.regular_season.checked,n=r.refs.playoffs.checked,l=r.state.gamesByYear,s=r.state.gamesByYear.find(function(e){return e.year===t}),o=[],c=[],i=[],d=[],m=[];if("All"==t)l.forEach(function(e){var t=e.weeks;!n&&a?(t=w.filter(t,{isPlayoff:!1}),o.push(t)):n&&!a?(t=w.filter(t,{isPlayoff:!0}),o.push(t)):n&&a&&o.push(t)});else{var u=s.weeks;!n&&a?(u=w.filter(u,{isPlayoff:!1}),o=u):n&&!a?(u=w.filter(u,{isPlayoff:!0}),o=u):n&&a&&(o=u)}if(o.reverse(),"All"==t)for(var f=0;f<o.length;f++)o[f].map(function(t){t.games.map(function(t){c.push(t),d.push({id:t.team_a[0].ownerId,name:w.find(e,["id",t.team_a[0].ownerId]).name,score:t.team_a[0].score,week:t.week,year:t.year,image:w.find(e,["id",t.team_a[0].ownerId]).image}),d.push({id:t.team_b[0].ownerId,name:w.find(e,["id",t.team_b[0].ownerId]).name,score:t.team_b[0].score,week:t.week,year:t.year,image:w.find(e,["id",t.team_b[0].ownerId]).image})})});else o.map(function(t){t.games.map(function(t){c.push(t),d.push({id:t.team_a[0].ownerId,name:w.find(e,["id",t.team_a[0].ownerId]).name,score:t.team_a[0].score,week:t.week,year:t.year,image:w.find(e,["id",t.team_a[0].ownerId]).image}),d.push({id:t.team_b[0].ownerId,name:w.find(e,["id",t.team_b[0].ownerId]).name,score:t.team_b[0].score,week:t.week,year:t.year,image:w.find(e,["id",t.team_b[0].ownerId]).image})})});"All"==t?c.map(function(e){if(m.find(function(t){return t.id===e.team_a[0].ownerId})){var t=m.find(function(t){return t.id===e.team_a[0].ownerId});t.games.push(e)}else m.push({id:e.team_a[0].ownerId,name:e.team_a[0].owner,games:[e]});if(m.find(function(t){return t.id===e.team_b[0].ownerId})){var t=m.find(function(t){return t.id===e.team_b[0].ownerId});t.games.push(e)}else m.push({id:e.team_b[0].ownerId,name:e.team_b[0].owner,games:[e]})}):c.map(function(e){if(e.team_a[0].name)if(m.find(function(t){return t.id===e.team_a[0].ownerId})){var t=m.find(function(t){return t.id===e.team_a[0].ownerId});t.games.push(e)}else m.push({id:e.team_a[0].ownerId,name:e.team_a[0].name,games:[e]});if(e.team_b[0].name)if(m.find(function(t){return t.id===e.team_b[0].ownerId})){var t=m.find(function(t){return t.id===e.team_b[0].ownerId});t.games.push(e)}else m.push({id:e.team_b[0].ownerId,name:e.team_b[0].name,games:[e]})}),c.map(function(t){i.push((0,y.gameOutcome)(t,e))}),d=w.sortBy(d,["score"]);var p=w.orderBy(w.takeRight(d,10),["score"],["desc"]),g=w.take(d,10);i=w.compact(i);var h=w.orderBy(w.takeRight(w.sortBy(i,["margin"]),10),["margin"],["desc"]),E=w.take(w.sortBy(i,["margin"]),10),b=w.orderBy(w.takeRight(w.sortBy(i,["sumScore"]),10),["sumScore"],["desc"]),_=w.take(w.sortBy(i,["sumScore"]),10),v=w.orderBy(w.takeRight(w.sortBy(i,["scoreLose"]),10),["scoreLose"],["desc"]),k=w.take(w.sortBy(i,["scoreWin"]),10);r.setState({lowestScoreWin:k}),r.setState({highestScoreLoss:v}),r.setState({fewestPoints:_}),r.setState({mostPoints:b}),r.setState({topVictoryMargin:h}),r.setState({bottomVictoryMargin:E}),r.setState({topScores:p}),r.setState({bottomScores:g})},r.regularSeasonClickHandler=function(e){r.loadYearData()},r.yearChangeHandler=r.yearChangeHandler.bind(r),r.loadYearData=r.loadYearData.bind(r),r.state={lowestScoreWin:[],highestScoreLoss:[],fewestPoints:[],mostPoints:[],topVictoryMargin:[],bottomVictoryMargin:[],topScores:[],bottomScores:[],yearLabels:[],YearSelected:"",gamesByYear:[]},r}return s(t,e),t.prototype.UNSAFE_componentWillMount=function(){var e=this.props.data.allDataJson.edges[0].node.years,t=[];e.map(function(e){e.weeks_games.map(function(e){t.push.apply(t,e.games)})});var a=[],r=[],n=[];t.map(function(e){if(r.find(function(t){return t.year===e.year})){var t=r.find(function(t){return t.year===e.year});if(t.weeks.find(function(t){return t.week===e.week})){var a=t.weeks.find(function(t){return t.week===e.week});a.games.push(e)}else t.weeks.push({week:e.week,games:[e]})}else r.push({year:e.year,weeks:[{week:e.week,games:[e]}]}),n.push(e.year)}),r.map(function(e){e.weeks.map(function(e){"NONE"!=e.games[0].playoffTierType?(e.isPlayoff=!0,a.push(e)):e.isPlayoff=!1})}),n.reverse(),this.setState({yearLabels:n}),this.setState({gamesByYear:r}),this.setState({YearSelected:"All"})},t.prototype.componentDidMount=function(){this.loadYearData()},t.prototype.render=function(){var e=this;return c.default.createElement("main",{className:"container-fluid"},c.default.createElement(d.default,{title:"Game Records"}),c.default.createElement("div",{className:"card mb-3"},c.default.createElement("div",{className:"card-header"},c.default.createElement("input",{type:"checkbox",id:"regular-season",ref:"regular_season",value:"regular-season",onChange:this.regularSeasonClickHandler,defaultChecked:!0})," ",c.default.createElement("span",{className:"checkbox-label"},"Regular Season"),c.default.createElement("input",{type:"checkbox",id:"playoffs",ref:"playoffs",value:"playoffs",onChange:this.regularSeasonClickHandler})," ",c.default.createElement("span",{className:"checkbox-label"},"Playoffs"),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement(u.default,{data:this.state.yearLabels,change:function(t){return e.yearChangeHandler(t)}})),c.default.createElement("div",{className:"card-body"},c.default.createElement("div",{className:"row"},c.default.createElement(p.default,{data:this.state.topScores,label:"Score",title:"Top Scores"}),c.default.createElement(p.default,{data:this.state.bottomScores,label:"Score",title:"Lowest Scores"})),c.default.createElement("div",{className:"row my-4"},c.default.createElement(h.default,{data:this.state.topVictoryMargin,label:"Margin",show:"Margin",title:"Highest Victory Margins"}),c.default.createElement(h.default,{data:this.state.bottomVictoryMargin,label:"Margin",show:"Margin",title:"Lowest Victory Margins"})),c.default.createElement("div",{className:"row my-4"},c.default.createElement(h.default,{data:this.state.mostPoints,label:"Points",show:"Points",title:"Most Combined Points"}),c.default.createElement(h.default,{data:this.state.fewestPoints,label:"Points",show:"Points",title:"Fewest Combined Points"})),c.default.createElement("div",{className:"row my-4"},c.default.createElement(h.default,{data:this.state.highestScoreLoss,label:"Score",show:"scoreLose",title:"Highest Score in a Loss"}),c.default.createElement(h.default,{data:this.state.lowestScoreWin,label:"Score",show:"scoreWin",title:"Lowest Score in a Win"}))),c.default.createElement("div",{className:"card-footer small text-muted"})))},t}(c.default.Component);t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-gamerecords-js-7ffb8013f8f94ca63241.js.map