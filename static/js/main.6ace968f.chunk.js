(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={container:"BookCard_container__1kG97",thumbnail:"BookCard_thumbnail__1pAvR",missingThumbnail:"BookCard_missingThumbnail__3cxUp",title:"BookCard_title__2eMll",subtitle:"BookCard_subtitle__3SsK6"}},,,,,,function(e,t,a){e.exports={searchForm:"SearchBar_searchForm__3ueJ7",textInput:"SearchBar_textInput__2Ac26",submitBtn:"SearchBar_submitBtn__3MhfZ"}},function(e,t,a){e.exports={App:"App_App__2-o7Q",altContent:"App_altContent__20VUf"}},function(e,t,a){e.exports={container:"Header_container__oV9By",title:"Header_title__2kXPI"}},,,function(e,t,a){e.exports={container:"ResultViewer_container__2l5oS"}},function(e,t,a){e.exports={container:"Footer_container__1g-sZ"}},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){e.exports=a.p+"static/media/spinner.b078f316.webm"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=a(2),s=a(3),i=a(5),u=a(4),m=a(6),h=a(7),p=a.n(h),f=function(e){var t=e.searchChange,a=e.fetchVolumes;return r.a.createElement("form",{className:p.a.searchForm,onSubmit:a},r.a.createElement("input",{className:p.a.textInput,name:"searchQuery",type:"text",placeholder:"Search by book title, author, or ISBN... ",onChange:t}),r.a.createElement("input",{className:p.a.submitBtn,type:"submit",value:"Search"}))},_=a(9),b=a.n(_),E=function(e){var t=e.searchChange,a=e.fetchVolumes;return r.a.createElement("header",{className:b.a.container},r.a.createElement("h1",{className:b.a.title},"Book Finder"),r.a.createElement(f,{searchChange:t,fetchVolumes:a}))},d=a(1),g=a.n(d),v=function(e){var t=e.volumeInfo;return r.a.createElement("li",{className:g.a.container},t.imageLinks?r.a.createElement("img",{className:g.a.thumbnail,src:t.imageLinks.smallThumbnail,alt:"Cover art"}):r.a.createElement("p",{className:g.a.missingThumbnail},"Missing Image"),r.a.createElement("h1",{className:g.a.title},t.title?t.title:"Missing title data"),r.a.createElement("div",null,r.a.createElement("h2",{className:g.a.subtitle},"Author(s)"),r.a.createElement("div",null,t.authors?t.authors.map(function(e){return r.a.createElement("p",null,e)}):r.a.createElement("p",null,"Missing author data"))),r.a.createElement("div",null,r.a.createElement("h2",{className:g.a.subtitle},"Publishing Company")," ",r.a.createElement("p",null,t.publisher?t.publisher:"Missing publisher data")),r.a.createElement("a",{target:"_blank",href:t.canonicalVolumeLink,rel:"noopener noreferrer"},"Learn More..."))},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.a.Component),w=a(12),y=a.n(w),C=function(e){var t=e.volumes;return r.a.createElement("main",{className:y.a.container},r.a.createElement(k,null,r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(v,{volumeInfo:e.volumeInfo})}))))},S=a(13),N=a.n(S),B=function(){return r.a.createElement("footer",{className:N.a.container},r.a.createElement("p",null,"Made by Adrian Zhan"))},x=a(8),I=a.n(x),A="".concat("AIzaSyAlXxRJAzwXRpHD4NJ0ZGAzEpMXpbL_VQ8"),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={isFetching:!1,searchQuery:null,volumes:null},n.searchChange=function(e){n.setState({searchQuery:e.target.value})},n.fetchVolumes=function(e){n.state.searchQuery?(n.setState({isFetching:!0}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n.state.searchQuery,"&maxResults=20&key=").concat(A),{method:"GET",mode:"cors"}).then(function(e){return e.json().then(function(e){n.setState({volumes:e.items}),n.setState({isFetching:!1})})}).catch(function(e){return console.log(e)}),e.preventDefault()):e.preventDefault()},n.getContent=function(){var e=n.state,t=e.isFetching,o=e.volumes;return t?r.a.createElement("main",null,r.a.createElement("video",{className:I.a.altContent,src:a(20),type:"video/webm",autoPlay:!0,loop:!0})):o||t?r.a.createElement(C,{volumes:o}):r.a.createElement("main",null,r.a.createElement("h1",{className:I.a.altContent},"Search for books"))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:I.a.App},r.a.createElement(E,{searchChange:this.searchChange,fetchVolumes:this.fetchVolumes}),this.getContent(),r.a.createElement(B,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.6ace968f.chunk.js.map