(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{OHyn:function(e,a,t){"use strict";t.r(a);var r=t("KQm4"),n=t("JX7q"),s=t("dI71"),o=t("Xp7I"),c=t.n(o),l=t("GtlU"),i=t.n(l),m=t("k8Y/"),d=t.n(m),f=t("xweI"),u=t.n(f),h=t("J2m7"),y=t.n(h),p=t("k4Da"),w=t.n(p),g=t("q1tI"),k=t.n(g),b=t("Bl7J"),E=t("rMbk"),S=t("xU0K"),v=t("31yf"),_=t("ZVHq"),Y=function(e){function a(a){var t;return(t=e.call(this,a)||this).yearChangeHandler=function(e){var a=e.target.value;t.setState({YearSelected:a},(function(){return t.loadYearData()}))},t.loadYearData=function(){var e=t.props.data.allDataJson.edges[0].node.owners,a=t.state.YearSelected,r=t.refs.regular_season.checked,n=t.refs.playoffs.checked,s=t.state.gamesByYear,o=t.state.gamesByYear.find((function(e){return e.year===a})),l=[],m=[],f=[];if("All"===a)s.forEach((function(e){var a=e.weeks;!n&&r?(a=w()(a,{isPlayoff:!1}),l.push(a)):n&&!r?(a=w()(a,{isPlayoff:!0}),l.push(a)):n&&r&&l.push(a)}));else{var h=o.weeks;!n&&r?(h=w()(h,{isPlayoff:!1}),l=h):n&&!r?(h=w()(h,{isPlayoff:!0}),l=h):n&&r&&(l=h)}if(l.reverse(),"All"===a)for(var p=0;p<l.length;p++)l[p].forEach((function(a){a.games.forEach((function(a){m.push(a),f.push({id:a.team_a[0].ownerId,name:a.team_a[0].owner,score:a.team_a[0].score,week:a.week,year:a.year,image:y()(e,["id",a.team_a[0].ownerId]).image}),f.push({id:a.team_b[0].ownerId,name:a.team_b[0].owner,score:a.team_b[0].score,week:a.week,year:a.year,image:y()(e,["id",a.team_b[0].ownerId]).image})}))}));else l.forEach((function(a){a.games.forEach((function(a){m.push(a),f.push({id:a.team_a[0].ownerId,name:a.team_a[0].owner,score:a.team_a[0].score,week:a.week,year:a.year,image:y()(e,["id",a.team_a[0].ownerId]).image}),f.push({id:a.team_b[0].ownerId,name:a.team_b[0].owner,score:a.team_b[0].score,week:a.week,year:a.year,image:y()(e,["id",a.team_b[0].ownerId]).image})}))}));f=u()(f,["score"]);var g=d()(i()(f,10),["score"],["desc"]),k=c()(f,10);t.setState({topScores:g}),t.setState({bottomScores:k})},t.regularSeasonClickHandler=function(e){t.loadYearData()},t.yearChangeHandler=t.yearChangeHandler.bind(Object(n.a)(t)),t.loadYearData=t.loadYearData.bind(Object(n.a)(t)),t.state={topScores:[],bottomScores:[],yearLabels:[],YearSelected:"",gamesByYear:[]},t}Object(s.a)(a,e);var t=a.prototype;return t.UNSAFE_componentWillMount=function(){var e=this.props.data.allDataJson.edges[0].node.years,a=[];e.forEach((function(e){e.weeks_games.forEach((function(e){a.push.apply(a,Object(r.a)(e.games))}))}));var t=[],n=[],s=[];a.forEach((function(e){if(n.find((function(a){return a.year===e.year}))){var a=n.find((function(a){return a.year===e.year}));if(a.weeks.find((function(a){return a.week===e.week})))a.weeks.find((function(a){return a.week===e.week})).games.push(e);else a.weeks.push({week:e.week,games:[e]})}else n.push({year:e.year,weeks:[{week:e.week,games:[e]}]}),s.push(e.year)})),n.forEach((function(e){e.weeks.forEach((function(e){"NONE"!==e.games[0].playoffTierType?(e.isPlayoff=!0,t.push(e)):e.isPlayoff=!1}))})),s.reverse(),this.setState({yearLabels:s}),this.setState({gamesByYear:n}),this.setState({YearSelected:"All"})},t.componentDidMount=function(){this.loadYearData()},t.render=function(){var e=this;return k.a.createElement(b.a,null,k.a.createElement("main",{className:"container-fluid"},k.a.createElement(E.a,{title:"Game Records"}),k.a.createElement("div",{className:"card mb-3"},k.a.createElement("div",{className:"card-header"},k.a.createElement("input",{type:"checkbox",id:"regular-season",ref:"regular_season",value:"regular-season",onChange:this.regularSeasonClickHandler,defaultChecked:!0})," ",k.a.createElement("span",{className:"checkbox-label"},"Regular Season"),k.a.createElement("input",{type:"checkbox",id:"playoffs",ref:"playoffs",value:"playoffs",onChange:this.regularSeasonClickHandler})," ",k.a.createElement("span",{className:"checkbox-label"},"Playoffs"),k.a.createElement("br",null),k.a.createElement("br",null),k.a.createElement(S.a,{data:this.state.yearLabels,change:function(a){return e.yearChangeHandler(a)}})),k.a.createElement("div",{className:"card-body"},k.a.createElement("div",{className:"row"},k.a.createElement(v.a,{data:this.state.topScores,label:"Score",title:"Top Ten Scores"}),k.a.createElement(v.a,{data:this.state.bottomScores,label:"Score",title:"Bottom Ten Scores"})),k.a.createElement("div",{className:"row my-4"},k.a.createElement(_.a,{data:this.state.topScores,label:"Margin",title:"Top Ten Victory Margins"}),k.a.createElement(_.a,{data:this.state.bottomScores,label:"Margin",title:"Bottom Ten Victory Margins"}))),k.a.createElement("div",{className:"card-footer small text-muted"}))))},a}(k.a.Component);a.default=Y}}]);
//# sourceMappingURL=component---src-pages-teamrecords-js-67336242bce18b2a705c.js.map