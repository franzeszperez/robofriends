(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,a){},13:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(6),i=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(1),c=a(2),l=a(4),h=a(3),m=function(e){e.robots;throw new Error("Nooo")},u=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:n}))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},b=function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(e){var t;return Object(s.a)(this,a),(t=n.call(this,e)).state={hasError:!1},t}return Object(c.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),a}(t.Component),f=(a(12),function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this,n=this.state.robots.filter((function(n){return n.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(u,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(b,null,r.a.createElement(m,{robots:n}))))}}]),a}(t.Component));a(13),a(14);i.a.render(r.a.createElement(f,{robots:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.2d699e3f.chunk.js.map