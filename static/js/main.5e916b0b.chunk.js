(this["webpackJsonpusers-cards"]=this["webpackJsonpusers-cards"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/loader.bed1d767.gif"},21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),o=n.n(r),c=n(5),i=(n(26),n(13)),u=n(14),s=n(19),m=n(15),d=n(20),p=(n(27),function(e){var t=e.country,n=e.openModal,a=e.countryName;return l.a.createElement("div",{className:"card-container",onClick:function(){n(),a(t.name)}},l.a.createElement("img",{alt:t.name,src:t.flag}),l.a.createElement("h1",null,t.name),l.a.createElement("p",null," ",t.capital," "))}),h=(n(28),function(e){var t=e.countries,n=(e.page,e.openModal);return l.a.createElement("div",{className:"card-list"},t.map((function(a){return l.a.createElement(p,{key:t.indexOf(a),number:t.indexOf(a),country:a,openModal:n,countryName:e.countryName})})))}),f=(n(29),function(e){var t=e.placeholder,n=e.handleChange;return l.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),g=n(6),E=n.n(g),v={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(234, 233, 233, .95)",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",height:"400px",overflow:"scroll"}};E.a.setAppElement("#root");var C=function(e){return l.a.createElement("div",null,l.a.createElement(E.a,{isOpen:e.isOpen,onAfterOpen:e.onAfterOpen,onRequestClose:e.onRequestClose,style:v,contentLabel:"Example Modal"},l.a.createElement("button",{onClick:e.onRequestClose},"close"),e.children))},y=(n(40),function(e){var t=e.countries,n=e.countryName,a=t.filter((function(e){return e.name==n}))[0],r=a.name,o=a.alpha3Code,c=a.capital,i=a.flag,u=a.callingCodes,s=a.region,m=a.subregion,d=a.population,p=a.timezones,h=a.borders,f=a.nativeName,g=a.currencies,E=a.languages;return l.a.createElement("div",{className:"modal-box"},l.a.createElement("div",{className:"card"},l.a.createElement("div",null,"Country:",l.a.createElement("h1",null," ",r," ",l.a.createElement("span",null," (",o," )")," "),l.a.createElement("img",{src:i,alt:"flag of "+r}),"Native name: ",l.a.createElement("i",null," ",f," ")),l.a.createElement("div",null,"Capital: ",l.a.createElement("i",null,"  ",c," ")," Calling Codes :",l.a.createElement("i",null," ",u[0]," "))),l.a.createElement("div",{className:"card"},"Region : ",l.a.createElement("i",null," ",s," "),"Subregion : ",l.a.createElement("i",null," ",m," "),"Population: ",l.a.createElement("i",null," ",d," ")," ",l.a.createElement("br",null),"Timezones: ",p.map((function(e){return l.a.createElement("li",null,e," ")}))),l.a.createElement("div",{className:"card"},"Borders:  ",h.map((function(e){var n=t.filter((function(t){return t.alpha3Code==e}));return l.a.createElement("li",null," ",n[0].name," ")})),"Currencies: ",g.map((function(e){var t=e.code,n=e.name,a=e.symbol;return l.a.createElement("div",null,l.a.createElement("li",null,"code: ",l.a.createElement("span",null," ",t," ")," "),l.a.createElement("li",null,"name: ",l.a.createElement("span",null," ",n," ")," "),l.a.createElement("li",null,"symbol: ",l.a.createElement("span",null," ",a," ")," "))})),"Languages: ",E.map((function(e){return l.a.createElement("li",null," ",e.name," ")}))))}),b=function(e,t){return e.toLowerCase().includes(t)},N=(n(41),n(16)),O=n.n(N),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({page:1,searchField:t.target.value.toLowerCase()})},e.showPrevPage=function(){var t=e.state.page;return 1===t?"":e.setState({page:t-1})},e.showNextPage=function(){e.setState({page:e.state.page+1})},e.openModal=function(){e.setState({modalIsOpen:!0})},e.afterOpenModal=function(){},e.closeModal=function(){e.setState({modalIsOpen:!1})},e.getCountry=function(t){e.setState({countryName:t})},e.state={countries:[],searchField:"",loaded:!1,page:1,modalIsOpen:!1,countryName:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e.setState({countries:t})})).then((function(t){return e.setState({loaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,n=e.searchField,a=e.loaded,r=e.page,o=e.countryName,c=t.filter((function(e){var t=e.name,a=e.capital;return b(t,n)||b(a,n)}));return l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,0===c.length?"No Country":1===c.length?"1 Country":"".concat(c.length," Countries")),l.a.createElement(f,{placeholder:"search countries by name or capital",handleChange:this.handleChange}),l.a.createElement(h,{countries:c,page:r,openModal:this.openModal,countryName:this.getCountry}),l.a.createElement(C,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal"},l.a.createElement(y,{countries:t,countryName:o}))):l.a.createElement("div",{className:"loader"},l.a.createElement("img",{src:O.a,alt:"World loader"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5e916b0b.chunk.js.map