(this["webpackJsonpusers-cards"]=this["webpackJsonpusers-cards"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/loader.bed1d767.gif"},27:function(e,t,a){e.exports=a(51)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(5),i=(a(32),a(19)),s=a(20),u=a(25),m=a(21),d=a(26),h=a(6),p=(a(33),function(e){var t=e.country,a=e.openModal,n=e.countryName;return r.a.createElement("div",{className:"card-container",onClick:function(){a(),n(t.name)}},r.a.createElement("img",{alt:t.name,src:t.flag}),r.a.createElement("h1",null,t.name),r.a.createElement("p",null," ",t.capital," "))}),f=(a(34),Object(h.f)((function(e){var t=e.countries,a=e.openModal,n=e.location,l=e.searchField,o=n.search,c=20*((o?parseInt(o.split("=")[1]):1)-1),i=c+20,s=l.length>0?t:t.slice(c,i);return r.a.createElement("div",{className:"card-list"},s.map((function(n){return r.a.createElement(p,{key:t.indexOf(n),number:t.indexOf(n),country:n,openModal:a,countryName:e.countryName})})))}))),g=(a(40),function(e){var t=e.placeholder,a=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),E=Object(h.f)((function(e){var t=e.filteredCountries,a=e.getPageNumbers,n=(e.showPrevPage,e.showNextPage,e.location.search),l=parseInt(n.split("=")[1]);return r.a.createElement("div",null,r.a.createElement("p",null),1===l?"":r.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"},r.a.createElement(c.b,{to:"?page=".concat(l-1)},"Prev")),a(t.length),r.a.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"},r.a.createElement(c.b,{to:"?page=".concat(l+1)},"Next")))})),v=a(14),C=a.n(v),b={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(234, 233, 233, .95)",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",height:"400px",overflow:"scroll"}};C.a.setAppElement("#root");var N=function(e){return r.a.createElement("div",null,r.a.createElement(C.a,{isOpen:e.isOpen,onAfterOpen:e.onAfterOpen,onRequestClose:e.onRequestClose,style:b,contentLabel:"Example Modal"},r.a.createElement("button",{onClick:e.onRequestClose},"close"),e.children))},y=(a(49),function(e){var t=e.countries,a=e.countryName,n=t.filter((function(e){return e.name===a}))[0],l=n.name,o=n.alpha3Code,c=n.capital,i=n.flag,s=n.callingCodes,u=n.region,m=n.subregion,d=n.population,h=n.timezones,p=n.borders,f=n.nativeName,g=n.currencies,E=n.languages;return r.a.createElement("div",{className:"modal-box"},r.a.createElement("div",{className:"card"},r.a.createElement("div",null,"Country:",r.a.createElement("h1",null," ",l," ",r.a.createElement("span",null," (",o," )")," "),r.a.createElement("img",{src:i,alt:"flag of "+l}),"Native name: ",r.a.createElement("i",null," ",f," ")),r.a.createElement("div",null,"Capital: ",r.a.createElement("i",null,"  ",c," ")," Calling Codes :",r.a.createElement("i",null," ",s[0]," "))),r.a.createElement("div",{className:"card"},"Region : ",r.a.createElement("i",null," ",u," "),"Subregion : ",r.a.createElement("i",null," ",m," "),"Population: ",r.a.createElement("i",null," ",d," ")," ",r.a.createElement("br",null),"Timezones: ",h.map((function(e){return r.a.createElement("li",null,e," ")}))),r.a.createElement("div",{className:"card"},"Borders:  ",p.map((function(e){var a=t.filter((function(t){return t.alpha3Code===e}));return r.a.createElement("li",null," ",a[0].name," ")})),"Currencies: ",g.map((function(e){var t=e.code,a=e.name,n=e.symbol;return r.a.createElement("div",null,r.a.createElement("li",null,"code: ",r.a.createElement("span",null," ",t," ")," "),r.a.createElement("li",null,"name: ",r.a.createElement("span",null," ",a," ")," "),r.a.createElement("li",null,"symbol: ",r.a.createElement("span",null," ",n," ")," "))})),"Languages: ",E.map((function(e){return r.a.createElement("li",null," ",e.name," ")}))))}),O=function(e,t){return e.toLowerCase().includes(t)},w=(a(50),a(24)),P=a.n(w),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({page:1,searchField:t.target.value.toLowerCase()})},e.getPageNumbers=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,a=Math.ceil(t/20),n=[],l=1;l<=a;l++)n.push("".concat(l));return n.map((function(t){return r.a.createElement("i",{className:"pagesNumbered",onClick:e.setPage},r.a.createElement(c.b,{to:"?page=".concat(t)}," ",t," "))}))},e.setPage=function(){return{}},e.openModal=function(){e.setState({modalIsOpen:!0})},e.closeModal=function(){e.setState({modalIsOpen:!1})},e.getCountry=function(t){e.setState({countryName:t})},e.filteredCountries=function(e,t){return e.filter((function(e){var a=e.name,n=e.capital;return O(a,t)||O(n,t)}))},e.CardListContainer=function(t){var a=e.state,n=a.countries,l=a.searchField,o=a.page,c=e.filteredCountries(n,l);return r.a.createElement(f,Object.assign({countries:c,page:o,openModal:e.openModal,countryName:e.getCountry,searchField:l},t))},e.state={countries:[],searchField:"",loaded:!1,page:1,modalIsOpen:!1,countryName:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e.setState({countries:t})})).then((function(t){return e.setState({loaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.searchField,n=e.loaded,l=e.countryName,o=this.filteredCountries(t,a);return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,0===o.length?"No Country":1===o.length?"1 Country":"".concat(o.length," Countries")),r.a.createElement(g,{placeholder:"search countries by name or capital",handleChange:this.handleChange}),r.a.createElement(N,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal"},r.a.createElement(y,{countries:t,countryName:l})),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",render:this.CardListContainer}),";"),r.a.createElement(E,{filteredCountries:o,showPrevPage:this.showPrevPage,showNextPage:this.showNextPage,getPageNumbers:this.getPageNumbers})):r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:P.a,alt:"World loader"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.baff300c.chunk.js.map