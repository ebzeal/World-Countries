(this["webpackJsonpusers-cards"]=this["webpackJsonpusers-cards"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/loader.bed1d767.gif"},27:function(e,t,a){e.exports=a(51)},32:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(8),i=(a(32),a(18)),u=a(19),s=a(25),m=a(20),d=a(26),p=a(5),h=a(21),g=a.n(h),f={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(234, 233, 233, .95)",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",height:"400px",overflow:"scroll"}},E=function(e){return r.a.createElement("div",null,r.a.createElement(g.a,{isOpen:e.isOpen,onAfterOpen:e.onAfterOpen,onRequestClose:e.onRequestClose,style:f,contentLabel:"Example Modal"},r.a.createElement("button",{onClick:e.onRequestClose},"close"),e.children))},v=(a(43),function(e){var t=e.country;e.openModal,e.countryName;return r.a.createElement("div",{className:"card-container",onClick:function(){var t=e.country,a=e.openModal,n=e.countryName;a(),n(t.name)}},r.a.createElement("img",{alt:t.name,src:t.flag}),r.a.createElement("h1",null,t.name),r.a.createElement("p",null," ",t.capital," "))}),b=(a(44),function(e){var t=e.countries,a=e.page,n=e.openModal,l=20*(a-1),o=l+20,c=t.slice(l,o);return r.a.createElement("div",{className:"card-list"},c.map((function(a){return r.a.createElement(v,{key:t.indexOf(a),number:t.indexOf(a),country:a,openModal:n,countryName:e.countryName})})))}),C=(a(45),function(e){var t=e.placeholder,a=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),N=function(e){var t=e.filteredCountries,a=e.getPageNumbers,n=e.showPrevPage,l=e.showNextPage;return r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("i",{class:"fa fa-arrow-left","aria-hidden":"true",onClick:n}),a(t.length),r.a.createElement("i",{class:"fa fa-arrow-right","aria-hidden":"true",onClick:l}))},y=(a(46),function(e){var t=e.countries,a=e.countryName,n=t.filter((function(e){return e.name==a}))[0],l=n.name,o=n.alpha3Code,c=n.capital,i=n.flag,u=n.callingCodes,s=n.region,m=n.subregion,d=n.population,p=n.timezones,h=n.borders,g=n.nativeName,f=n.currencies,E=n.languages;return r.a.createElement("div",{className:"modal-box"},r.a.createElement("div",{className:"card"},r.a.createElement("div",null,"Country:",r.a.createElement("h1",null," ",l," ",r.a.createElement("span",null," (",o," )")," "),r.a.createElement("img",{src:i,alt:"flag of "+l}),"Native name: ",r.a.createElement("i",null," ",g," ")),r.a.createElement("div",null,"Capital: ",r.a.createElement("i",null,"  ",c," ")," Calling Codes :",r.a.createElement("i",null," ",u[0]," "))),r.a.createElement("div",{className:"card"},"Region : ",r.a.createElement("i",null," ",s," "),"Subregion : ",r.a.createElement("i",null," ",m," "),"Population: ",r.a.createElement("i",null," ",d," ")," ",r.a.createElement("br",null),"Timezones: ",p.map((function(e){return r.a.createElement("li",null,e," ")}))),r.a.createElement("div",{className:"card"},"Borders:  ",h.map((function(e){var a=t.filter((function(t){return t.alpha3Code==e}));return r.a.createElement("li",null," ",a[0].name," ")})),"Currencies: ",f.map((function(e){var t=e.code,a=e.name,n=e.symbol;return r.a.createElement("div",null,r.a.createElement("li",null,"code: ",r.a.createElement("span",null," ",t," ")," "),r.a.createElement("li",null,"name: ",r.a.createElement("span",null," ",a," ")," "),r.a.createElement("li",null,"symbol: ",r.a.createElement("span",null," ",n," ")," "))})),"Languages: ",E.map((function(e){return r.a.createElement("li",null," ",e.name," ")}))))}),w=function(e,t){return e.toLowerCase().includes(t)},O=(a(47),a(22)),P=a.n(O),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({page:1,searchField:t.target.value.toLowerCase()})},e.getPageNumbers=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,t=Math.ceil(e/20),a=[],n=1;n<=t;n++)a.push("".concat(n));return a.map((function(e){return r.a.createElement(c.a,null,r.a.createElement(p.b,null,r.a.createElement("i",{className:"pagesNumbered"},r.a.createElement(c.b,{to:"?page=".concat(e)}," ",e," "))))}))},e.showPrevPage=function(){var t=e.state.page;return 1===t?"":e.setState({page:t-1})},e.showNextPage=function(){e.setState({page:e.state.page+1})},e.openModal=function(){e.setState({modalIsOpen:!0})},e.afterOpenModal=function(){},e.closeModal=function(){e.setState({modalIsOpen:!1})},e.getCountry=function(t){e.setState({countryName:t})},e.state={countries:[],searchField:"",loaded:!1,page:1,modalIsOpen:!1,countryName:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e.setState({countries:t})})).then((function(t){return e.setState({loaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.searchField,n=e.loaded,l=e.page,o=e.countryName,c=t.filter((function(e){var t=e.name,n=e.capital;return w(t,a)||w(n,a)}));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,0===c.length?"No Country":1===c.length?"1 Country":"".concat(c.length," Countries")),r.a.createElement(C,{placeholder:"search countries by name or capital",handleChange:this.handleChange}),r.a.createElement(b,{countries:c,page:l,openModal:this.openModal,countryName:this.getCountry}),r.a.createElement(E,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal"},r.a.createElement(y,{countries:t,countryName:o})),r.a.createElement(N,{filteredCountries:c,showPrevPage:this.showPrevPage,showNextPage:this.showNextPage,getPageNumbers:this.getPageNumbers})):r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:P.a,alt:"World loader"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c1b58221.chunk.js.map