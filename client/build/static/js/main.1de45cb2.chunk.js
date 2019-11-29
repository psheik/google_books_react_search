(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),c=a(57),i=a(58),s=a(59),m=a(21),u=a(5),d=a(6),h=a(8),v=a(7),f=a(9),E=(a(29),function(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)});function b(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function k(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function p(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(30);var N=function(e){var t=e.title,a=e.subtitle,n=e.authors,r=e.link,o=e.description,c=e.image,i=e.Button;return l.a.createElement(b,null,l.a.createElement(k,{className:"flex-wrap-reverse"},l.a.createElement(p,{size:"md-8"},l.a.createElement("h3",{className:"font-italic"},t),a&&l.a.createElement("h5",{className:"font-italic"},a)),l.a.createElement(p,{size:"md-4"},l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:r},"View"),l.a.createElement(i,null)))),l.a.createElement(k,null,l.a.createElement(p,{size:"md-6"},l.a.createElement("p",{className:"font-italic small"},"Written by ",n))),l.a.createElement(k,null,l.a.createElement(p,{size:"12 sm-4 md-2"},l.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:c,alt:t})),l.a.createElement(p,{size:"12 sm-8 md-10"},l.a.createElement("p",null,o))))};a(31);var B=function(e){var t=e.children;return l.a.createElement("div",{className:"jumbotron mt-4"},t)};var S=function(){return l.a.createElement("footer",null,l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("strong",null," UC Berkeley Coding Bootcamp"))},w=a(10),j=a.n(w),y={getBooks:function(e){return j.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return j.a.get("/api/books")},deleteBook:function(e){return j.a.delete("/api/books/"+e)},saveBook:function(e){return j.a.post("/api/books",e)}};var I=function(e){var t=e.icon,a=e.title,n=e.children;return l.a.createElement("div",{className:"card mt-4"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,l.a.createElement("strong",null,l.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),l.a.createElement("div",{className:"card-body"},n))};var C=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Search by title or author",name:"q",onChange:a,required:!0})),l.a.createElement("div",{className:"pull-right"},l.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg btn-info float-left"},"Search")))},O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],q:"",message:"Search For A Book"},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.getBooks=function(){y.getBooks(a.state.q).then(function(e){return a.setState({books:e.data})}).catch(function(){return a.setState({books:[],message:"No Books Found"})})},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});y.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(k,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(B,null,l.a.createElement("h1",{className:"text-center"},l.a.createElement("strong",null,"Google Books React Search")),l.a.createElement("h2",{className:"text-center"},"Search for and Save Books"))),l.a.createElement(p,{size:"md-12"},l.a.createElement(I,{title:"Search",icon:"far fa-book"},l.a.createElement(C,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),l.a.createElement(k,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(I,{title:"Results"},this.state.books.length?l.a.createElement(E,null,this.state.books.map(function(t){return l.a.createElement(N,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-success"},"Save")}})})):l.a.createElement("h2",{className:"text-center"},this.state.message)))),l.a.createElement(S,null))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.getSavedBooks=function(){y.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(e){y.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(k,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(B,null,l.a.createElement("h1",{className:"text-center"},l.a.createElement("strong",null,"Google Books React Search")),l.a.createElement("h2",{className:"text-center"},"Search for and Save Books")))),l.a.createElement(k,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(I,{title:"Saved Books",icon:"download"},this.state.books.length?l.a.createElement(E,null,this.state.books.map(function(t){return l.a.createElement(N,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger"},"Delete")}})})):l.a.createElement("h2",null,"No Saved Books")))),l.a.createElement(S,null))}}]),t}(n.Component);var z=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(k,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(B,null,l.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),l.a.createElement("h1",{className:"text-center"})))))},q=a(56),F=(a(50),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},l.a.createElement(q.a,{className:"navbar-brand",to:"/"},"Google Books React Search"),l.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Search Books")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved"},"Saved Books")))))}}]),t}(n.Component));var D=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:O}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:x}),l.a.createElement(s.a,{component:z}))))};o.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1de45cb2.chunk.js.map