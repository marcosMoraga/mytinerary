(this["webpackJsonpmytinerary-moraga"]=this["webpackJsonpmytinerary-moraga"]||[]).push([[0],{106:function(e,t,r){},107:function(e,t,r){},108:function(e,t,r){},109:function(e,t,r){},110:function(e,t,r){},111:function(e,t,r){},112:function(e,t,r){},113:function(e,t,r){},115:function(e,t,r){},116:function(e,t,r){},128:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(21),s=r.n(n),c=(r(76),r(4)),i=r.n(c),o=r(8),u=r(22),l=r(23),j=r(25),d=r(24),m=r(5),b=(r(78),r(12)),p=r(0),h=Object(b.b)((function(e){return{rdxuserImg:e.userReducers.img}}),null)((function(e){var t=Object(a.useState)(!1),r=Object(m.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(!1),i=Object(m.a)(c,2),o=i[0],u=i[1];return Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"background-img"}),Object(p.jsxs)("div",{className:"user-icon",children:[n&&Object(p.jsx)("button",{className:"btnsignin",children:"SIGN-IN"}),""===e.rdxuserImg&&Object(p.jsx)("i",{onClick:function(){s(!n)},className:"fa fa-user-circle","aria-hidden":"true"}),""!==e.rdxuserImg&&Object(p.jsx)("img",{style:{height:"65px"},onClick:function(){u(!o)},alt:"img-user",src:e.rdxuserImg,className:"user-logged"}),o&&Object(p.jsx)("button",{className:"btnsignup",children:"SETTINGS"}),n&&Object(p.jsx)("button",{className:"btnsignup",children:"SIGN-UP"})]})]})})),x=r(44),f=(r(85),r(86),r(87),r(152)),O=r(9);var g=function(e){var t=Object(f.a)("(max-width:1023px)");return Object(p.jsxs)("div",{className:"carrousel",children:[Object(p.jsxs)("div",{className:"inner-top",children:[t&&Object(p.jsx)("i",{onClick:function(){return e.up()},className:"fa fa-chevron-up","aria-hidden":"true"}),Object(p.jsxs)("div",{className:"image-content",children:[Object(p.jsx)(O.b,{className:"red",to:"/city/".concat(e.arrayDatosCarrousel[0]._id),children:Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.arrayDatosCarrousel[0].img,")")},className:"first-image",children:Object(p.jsxs)("h2",{children:[e.arrayDatosCarrousel[0].name," - ",e.arrayDatosCarrousel[0].country]})})}),Object(p.jsx)(O.b,{className:"black",to:"/city/".concat(e.arrayDatosCarrousel[1]._id),children:Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.arrayDatosCarrousel[1].img,")")},className:"second-image",children:Object(p.jsxs)("h2",{children:[e.arrayDatosCarrousel[1].name," - ",e.arrayDatosCarrousel[1].country]})})})]})]}),Object(p.jsxs)("div",{className:"inner-down",children:[Object(p.jsxs)("div",{className:"image-content",children:[Object(p.jsx)(O.b,{className:"orange",to:"/city/".concat(e.arrayDatosCarrousel[2]._id),children:Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.arrayDatosCarrousel[2].img,")")},className:"third-image",children:Object(p.jsxs)("h2",{children:[e.arrayDatosCarrousel[2].name," - ",e.arrayDatosCarrousel[2].country]})})}),Object(p.jsx)(O.b,{className:"green",to:"/city/".concat(e.arrayDatosCarrousel[3]._id),children:Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.arrayDatosCarrousel[3].img,")")},className:"last-image",children:Object(p.jsxs)("h2",{children:[e.arrayDatosCarrousel[3].name," - ",e.arrayDatosCarrousel[3].country]})})})]}),t&&Object(p.jsx)("i",{onClick:function(){return e.down()},className:"fa fa-chevron-down","aria-hidden":"true"})]})]})},y=r(15),v=r.n(y),N={requestCities:function(){return function(){var e=Object(o.a)(i.a.mark((function e(t,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://mytinerary-moraga.herokuapp.com/api/cities");case 2:a=e.sent,t({type:"request",payload:a.data.response.cities});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},requestCity:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(r,a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://mytinerary-moraga.herokuapp.com/api/city/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.response);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},filter:function(e,t){return function(r,a){r({type:"filter",payload:{cities:e,value:t}})}}},k=N,I=["rdxRequest","rdxCities"],w={rdxRequest:k.requestCities},C=Object(b.b)((function(e){return{rdxCities:e.citiesReducer.auxiliary}}),w)((function(e){e.rdxRequest;var t=e.rdxCities,r=Object(x.a)(e,I),a=[];if(t.length>0){var n=t.slice(0,4),s=t.slice(4,8),c=t.slice(8,12);a.push(n),a.push(s),a.push(c),r.takeArray(a)}return t.length>0&&Object(p.jsx)(g,{up:r.up,down:r.down,arrayDatosCarrousel:a[r.pos]})})),S=function(e){var t,r=Object(a.useState)(0),n=Object(m.a)(r,2),s=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(m.a)(i,2),u=o[0],l=o[1],j=Object(a.useState)(5e3),d=Object(m.a)(j,2),b=d[0],h=d[1],x=Object(f.a)("(min-width:1024px)");function O(){c(t-1===s?0:function(e){return e+1})}function g(){c(s>0?function(e){return e-1}:t-1)}function y(){l(!u)}return Object(a.useEffect)((function(){if(e.autoplay){var t=setInterval((function(){g()}),b);return function(){return clearInterval(t)}}})),Object(p.jsxs)("div",{className:"container-carrousel ",onMouseLeave:function(){h(5e3)},onMouseEnter:function(){h(36e5)},children:[u?Object(p.jsx)("button",{onClick:y,children:"Popular Cities"}):Object(p.jsx)("button",{onClick:y,children:"Hidden Popular Cities"}),!u&&Object(p.jsxs)(p.Fragment,{children:[x&&Object(p.jsx)("i",{className:"fa fa-chevron-up",onClick:g,"aria-hidden":"true"}),Object(p.jsx)(C,{up:g,down:O,pos:s,takeArray:function(e){t=e.length}}),x&&Object(p.jsx)("i",{className:"fa fa-chevron-down",onClick:O,"aria-hidden":"true"})]})]})},R=(r(106),function(){return Object(p.jsx)("div",{className:"popular-cities",children:Object(p.jsx)(S,{autoplay:!0})})}),D=(r(107),{addUser:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(r,a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("https://mytinerary-moraga.herokuapp.com/api/user/signup",e);case 3:if(!(n=t.sent).data.success||n.data.error){t.next=10;break}return localStorage.setItem("token",n.data.response.token),r({type:"usuario",payload:{userName:n.data.response.userName,img:n.data.response.img,userID:n.data.response._id}}),t.abrupt("return",{succes:!0});case 10:return t.abrupt("return",{issues:n.data});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}()},signIn:function(e,t,r){return function(){var a=Object(o.a)(i.a.mark((function a(n,s){var c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.post("https://mytinerary-moraga.herokuapp.com/api/user/signin",{email:e,password:t,google:r});case 3:if(!(c=a.sent).data.success||c.data.error){a.next=10;break}return localStorage.setItem("token",c.data.response.token),n({type:"usuario",payload:{userName:c.data.response.userName,img:c.data.response.img,userID:c.data.response._id}}),a.abrupt("return",{sucess:!0});case 10:return a.abrupt("return",{error:c.data.error});case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.error(a.t0);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e,t){return a.apply(this,arguments)}}()},isAuth:function(){return function(){var e=Object(o.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,v.a.get("https://mytinerary-moraga.herokuapp.com/api/user/auth",{headers:{Authorization:"Bearer "+a}});case 4:return n=e.sent,t({type:"usuario",payload:{userName:n.data.response.userName,img:n.data.response.img,userID:n.data.response._id}}),e.abrupt("return",{response:n.data.response});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:"Unauthorized user, try login again"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),t({type:"logout"});case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}),U=D;var E={rdxLogout:U.logout},L=Object(b.b)((function(e){return{rdxUserImage:e.userReducers.img}}),E)((function(e){var t=Object(a.useState)(!0),r=Object(m.a)(t,2),n=r[0],s=r[1],c=function(){s(!n)};return Object(p.jsxs)("div",{className:"sidebar-menu",children:[n?Object(p.jsxs)("nav",{children:[Object(p.jsx)(O.b,{className:"button",to:"/",children:"Home"}),Object(p.jsx)(O.b,{className:"button",to:"/cities",children:"Cities"}),""===e.rdxUserImage&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.b,{className:"button",to:"/sign-in",children:"Sign In"}),Object(p.jsx)(O.b,{className:"button",to:"/sign-up",children:"Sign Up"})]}),""!==e.rdxUserImage&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{style:{border:"none"},className:"button",children:Object(p.jsx)("img",{style:{height:"55px"},alt:"img-user",src:e.rdxUserImage,className:"user-logged"})}),Object(p.jsx)("button",{style:{border:"none"},className:"button",onClick:function(){return e.rdxLogout()},children:"Sign out"})]})]}):"",Object(p.jsx)("div",{className:"action_arrow",children:n?Object(p.jsx)("i",{onClick:c,className:"fas fa-chevron-left"}):Object(p.jsx)("i",{onClick:c,className:"fas fa-chevron-right"})})]})}));r(108);var A=function(e){return Object(p.jsx)(O.b,{style:{width:"".concat(e.width)},to:"/city/"+e.city._id,className:"link-city-card",children:Object(p.jsxs)("div",{className:"city-card",style:{backgroundImage:"url(".concat(e.city.img,")")},children:[Object(p.jsx)("h2",{children:e.city.country}),Object(p.jsx)("h2",{children:e.city.name})]})})};r(109);var F=function(e){return Object(p.jsx)("div",{className:"search-panel",children:Object(p.jsx)("select",{onChange:function(t){var r=e.cities.find((function(e){return e.name===t.target.value}));e.getImg(r.img)},children:e.cities&&e.cities.map((function(e){return Object(p.jsx)("option",{value:e.name,children:e.name},e.name)}))})})},q=(r(110),function(e){return Object(p.jsx)(A,{width:"100%",city:e.imgUrl})}),_=(r(111),function(){return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"footer-right",children:[Object(p.jsxs)("div",{className:"social-media",children:[Object(p.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"}),Object(p.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"}),Object(p.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})]}),Object(p.jsx)("div",{className:"author-rights",children:"COPYRIGHT \xa9 2021 MYTINERARY. ALL RIGHTS RESERVED."})]})})}),T=["rdxRequest"],z={rdxRequest:k.requestCities},P=Object(b.b)((function(e){return{rdxUserName:e.userReducers.userName}}),z)((function(e){var t=e.rdxRequest,r=Object(x.a)(e,T);Object(a.useEffect)((function(){return r.auxiliar&&(""===r.auxiliar.length||2===r.auxiliar.length)&&t()}));var n=Object(f.a)("(max-width:768px)"),s=Object(a.useState)(""),c=Object(m.a)(s,2),i=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(m.a)(u,2),j=l[0],d=l[1];function b(){d(!j)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("main",{children:[Object(p.jsx)(L,{}),!j&&Object(p.jsxs)("div",{className:r.page,children:[Object(p.jsx)("div",{className:"title",children:r.title}),Object(p.jsx)("div",{className:"subtitle",children:Object(p.jsx)("p",{children:r.subtitle})}),r.city&&n&&!j&&r.cities[1]&&Object(p.jsxs)("div",{className:"filter-city",children:[" ",""!==i?Object(p.jsx)(q,{imgUrl:i}):Object(p.jsx)(A,{width:"100%",city:r.cities[0]})," "]}),r.city&&Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsx)(F,{cities:r.cities,getImg:function(e){var t=r.cities.find((function(t){return t.img===e}));o(t)}}),Object(p.jsx)("div",{className:"action-all-cities",children:Object(p.jsx)("button",{onClick:b,children:"to All Cities"})})," "]}),r.home&&Object(p.jsxs)("div",{className:"slogan",children:[Object(p.jsxs)("p",{children:[r.rdxUserName&&r.rdxUserName.toUpperCase()," FIND YOUR PERFECT TRIP"]}),Object(p.jsx)(O.b,{className:"toLink-Cities",to:"/cities",children:"ENJOY THE JOURNEY!"}),n&&Object(p.jsx)(R,{})]})]}),j&&Object(p.jsx)("div",{className:"all-cities",children:r.city&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"filters",children:[Object(p.jsx)("input",{type:"text",className:"input",autoComplete:"off",name:"filtro",onChange:function(e){return r.actionFilter(r.auxiliar,e.target.value.trim())},placeholder:"Filter by city"}),Object(p.jsx)("div",{className:"action-all-cities",children:Object(p.jsx)("button",{onClick:b,children:"to quick search"})})]}),Object(p.jsxs)("div",{className:"container-cities",children:[r.cities.length>0&&r.cities.map((function(e){return Object(p.jsx)(A,{width:"".concat(n?"100%":"48%"),city:e},e.country)})),0===r.cities.length&&Object(p.jsx)("h2",{className:"no-data",children:"No data"})]})]})}),r.city&&!n&&!j&&r.cities[0]&&Object(p.jsxs)("div",{className:"filter-city",children:[" ",""!==i?Object(p.jsx)(q,{imgUrl:i}):Object(p.jsx)(A,{width:"100%",city:r.cities[0]})," "]}),r.home&&!n&&Object(p.jsx)(R,{})]}),r.city&&j&&Object(p.jsx)(_,{})]})})),Y=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{imgUrl:"/assets/img/background.jpg",carrousel:!0}),Object(p.jsx)(P,{title:"MYTINERARY",subtitle:"DESIGNED BY INSIDERS WHO KNOW AND LOVE THEIR CITIES",home:!0,city:!1,page:"home"}),Object(p.jsx)(_,{})]})}}]),r}(a.Component),B=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{imgUrl:"/assets/img/backy.jpeg"}),Object(p.jsx)(P,{actionFilter:this.props.rdxfilter,auxiliar:this.props.rdxauxiliar,cities:this.props.rdxcities,page:"city",title:"CITIES",subtitle:"FIND YOUR WAY AND KEEP THE JOURNEY ON",home:!1,city:!0})]})}}]),r}(a.Component),H={rdxfilter:k.filter},G=Object(b.b)((function(e){var t=e.citiesReducer;return{rdxcities:t.cities,rdxauxiliar:t.auxiliary}}),H)(B),M=r(6),J=r(43),V=r.n(J),W=(r(112),["Chile","Alemania","Argentina","Peru","Venezuela","Bolivia","Canada","France","United States"]),K=function(e){var t=e.handlerAddUser,r=Object(a.useRef)(),n=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(a.useRef)(),o=Object(a.useRef)();var u=function(t){if(!t.error){var r={userName:t.profileObj.givenName,lastName:t.profileObj.familyName,password:t.profileObj.googleId,email:t.profileObj.email,img:t.profileObj.imageUrl,google:!0};e.handlerAddUser(r)}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"sign-form",onSubmit:function(a){a.preventDefault();var u={userName:r.current.value,lastName:n.current.value,password:c.current.value,email:s.current.value,img:i.current.value,country:o.current.value};t(u),e.errors||(n.current.value="",c.current.value="",s.current.value="",i.current.value="",r.current.value="")},children:[Object(p.jsxs)("h2",{style:{fontSize:"1.2rem"},children:["REGISTRATION",Object(p.jsx)("i",{style:{marginLeft:"1rem",fontSize:"1.2rem"},className:"fas fa-user-plus"})]}),Object(p.jsx)("input",{type:"text",ref:r,name:"userName",placeholder:"user name"}),e.errors.userName&&Object(p.jsx)("h2",{className:"error-input",children:e.errors.userName}),Object(p.jsx)("input",{type:"text",ref:n,name:"lastName",placeholder:"last name"}),e.errors.lastName&&Object(p.jsx)("h2",{className:"error-input",children:e.errors.lastName}),Object(p.jsx)("input",{type:"email",ref:s,name:"email",placeholder:"email"}),e.errors.email&&Object(p.jsx)("h2",{className:"error-input",children:e.errors.email}),Object(p.jsx)("input",{type:"text",ref:i,name:"urlImg",placeholder:"url img"}),e.errors.img&&Object(p.jsx)("h2",{className:"error-input",children:e.errors.img}),Object(p.jsxs)("select",{defaultValue:"default",ref:o,name:"country",children:[Object(p.jsx)("option",{value:"default",children:"Select a country"}),W.sort().map((function(e){return Object(p.jsx)("option",{children:e},e)}))]}),Object(p.jsx)("input",{type:"password",ref:c,name:"password",placeholder:"password"}),e.errors.password&&Object(p.jsx)("h2",{className:"error-input",children:e.errors.password}),Object(p.jsx)("input",{type:"submit",value:"send"}),Object(p.jsx)(V.a,{className:"btngoogle",clientId:"236469815759-9la1rd3cucmt23mn4knelpmf6eakgasm.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:u,onFailure:u,cookiePolicy:"single_host_origin"}),Object(p.jsxs)("h2",{children:["if you already have an account ",Object(p.jsx)(O.b,{className:"action-sign-up",to:"/sign-in",children:"sign in"})," here"]})]})})},Q=r(17),X=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).handlerAddUser=function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.rdxAddUser(t);case 2:if(!(r=e.sent).succes){e.next=8;break}a.props.navigate("/"),Q.b.success("Your are registered!"),e.next=13;break;case 8:if(n={},"El email ya esta en uso"!==r.issues.error){e.next=11;break}return e.abrupt("return",Q.b.error("email en uso"));case 11:r.issues.validate.forEach((function(e){var t=e.context.key;n[t]=e.message})),a.setState({errors:n});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={newUser:{},errors:{}},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{imgUrl:"/assets/img/sign-up.jpg"}),Object(p.jsxs)("div",{className:"container-signIn-form",children:[Object(p.jsx)(L,{}),Object(p.jsx)(K,{errors:this.state.errors,handlerAddUser:this.handlerAddUser})]})]})}}]),r}(a.Component),Z={rdxAddUser:U.addUser},$=Object(b.b)((function(e){return{rdxUserName:e.userReducers.userName}}),Z)(X),ee=(r(113),function(e){var t=Object(a.useRef)(),r=Object(a.useRef)();var n=function(t){!t.error&&t.profileObj.email&&e.handlerLogin(t.profileObj.email,t.profileObj.googleId,!0)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"sign-form",onSubmit:function(a){a.preventDefault(),e.handlerLogin(t.current.value,r.current.value,!1)},children:[Object(p.jsxs)("h2",{style:{fontSize:"1.2rem"},children:["LOGIN",Object(p.jsx)("i",{style:{fontSize:"1.2rem",color:"#212164",marginLeft:"1rem"},className:"fa fa-users","aria-hidden":"true"})]}),Object(p.jsx)("input",{type:"email",autoComplete:"on",ref:t,placeholder:"email"}),Object(p.jsx)("input",{type:"password",autoComplete:"on",ref:r,placeholder:"password"}),Object(p.jsx)("input",{type:"submit",value:"sign in"}),Object(p.jsxs)("h2",{children:["If you don't have an account please ",Object(p.jsx)(O.b,{className:"action-sign-up",to:"/sign-up",children:"sign up"})," here"]}),Object(p.jsx)(V.a,{className:"btngoogle",clientId:"236469815759-9la1rd3cucmt23mn4knelpmf6eakgasm.apps.googleusercontent.com",onSuccess:n,onFailure:n,cookiePolicy:"single_host_origin"})]})})}),te=(r(114),r(115),function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).handlerLogin=function(){var e=Object(o.a)(i.a.mark((function e(t,r,n){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.rdxLogin(t,r,n);case 2:(s=e.sent).sucess?(a.props.navigate("/"),Q.b.success("Successfully logged in")):Q.b.error(s.error);case 4:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),a.state={newUser:{},errors:{}},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{imgUrl:"/assets/img/sign-in.jpg"}),Object(p.jsxs)("div",{className:"container-signIn-form",children:[Object(p.jsx)(L,{}),Object(p.jsx)(ee,{handlerLogin:this.handlerLogin}),Object(p.jsx)(Q.a,{autoClose:4e3})]})]})}}]),r}(a.Component)),re={rdxLogin:U.signIn},ae=Object(b.b)(null,re)(te),ne={requestItineraries:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(r,a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://mytinerary-moraga.herokuapp.com/api/itineraries/city/".concat(e));case 2:n=t.sent,r({type:"requestItineraries",payload:n.data.response});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},likeHandler:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(r,a){var n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,v.a.put("https://mytinerary-moraga.herokuapp.com/api/like/itinerary/".concat(e),{},{headers:{Authorization:"Bearer "+n}});case 4:return s=t.sent,r({type:"likes",payload:{itineraryId:e,likes:s.data.likes}}),t.abrupt("return",{liked:s.data.liked,userID:s.data.userID});case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",{error:"You have to log in to like an itinerary!"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}()},addComment:function(e,t){return function(){var r=Object(o.a)(i.a.mark((function r(a){var n,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=localStorage.getItem("token"),r.next=4,v.a.post("https://mytinerary-moraga.herokuapp.com/api/comments/itinerary/".concat(e),t,{headers:{Authorization:"Bearer "+n}});case 4:return s=r.sent,r.abrupt("return",{succes:!0,comments:s.data});case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",{succes:!1,error:"You have to log in to comment an itinerary"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},deleteComment:function(e,t){return function(){var r=Object(o.a)(i.a.mark((function r(a){var n,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=localStorage.getItem("token"),r.next=4,v.a.delete("https://mytinerary-moraga.herokuapp.com/api/comments/".concat(t,"/itinerary/").concat(e),{headers:{Authorization:"Bearer "+n}});case 4:return s=r.sent,r.abrupt("return",{succes:!0,msg:"Comment deleted successfully",comments:s.data.comments});case 8:r.prev=8,r.t0=r.catch(0),console.log("error");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},updateComment:function(e,t,r){return function(){var a=Object(o.a)(i.a.mark((function a(n){var s,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=localStorage.getItem("token"),a.next=4,v.a.put("https://mytinerary-moraga.herokuapp.com/api/comments/".concat(t,"/itinerary/").concat(e),{text:r},{headers:{Authorization:"Bearer "+s}});case 4:return c=a.sent,a.abrupt("return",{succes:!0,msg:"Comment updated successfully",comments:c.data.comments});case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",{error:"Unauthorized user, try log in again"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}},se=ne,ce=(r(116),r(151)),ie=r(150),oe=function(e){var t=Object(a.useState)(!1),r=Object(m.a)(t,2),n=r[0],s=r[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{style:{width:"80px"},onClick:function(){return s(!n)},children:Object(p.jsx)(ce.a,{title:e.title,TransitionComponent:ie.a,placement:"top",arrow:!0,children:e.label})}),n&&Object(p.jsx)("div",{style:{width:"100%"},children:e.children})]})},ue=r(46),le=r.n(ue),je={rdxAddComments:se.addComment,rdxDelete:se.deleteComment,rdxUpdate:se.updateComment},de=Object(b.b)((function(e){return{rdxUserLoggedId:e.userReducers.userID}}),je)((function(e){var t=Object(a.useRef)(),r=Object(a.useRef)(),n=Object(a.useState)([]),s=Object(m.a)(n,2),c=s[0],u=s[1],l=Object(a.useState)({commentId:"",flag:!1}),j=Object(m.a)(l,2),d=j[0],b=j[1],h=Object(f.a)("(max-width:768px)");Object(a.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://mytinerary-moraga.herokuapp.com/api/comments/itinerary/".concat(t));case 2:r=e.sent,u(r.data.comments);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e.itineraryID)}),[e.itineraryID]);var x=function(){var r=Object(o.a)(i.a.mark((function r(a){var n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.next=3,e.rdxAddComments(e.itineraryID,{text:t.current.value});case 3:(n=r.sent).succes?u(n.comments):Q.b.warning(n.error);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(p.jsxs)("div",{style:{overflow:"auto",height:"".concat(h?"90%":"100%")},children:[Object(p.jsx)("h2",{children:"Leave a comment"}),Object(p.jsxs)("form",{onSubmit:x,children:[Object(p.jsx)("textarea",{style:{resize:"none"},type:"text",cols:"30",rows:"3",placeholder:"create a comment",ref:t}),Object(p.jsx)("input",{style:{cursor:"pointer",marginLeft:"0.5rem auto !important"},type:"submit"})]}),Object(p.jsxs)("div",{style:{height:"".concat(h?"10px":"15px")},children:[c.length>0&&c.map((function(t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{display:"flex",overflow:"auto"},children:[!d.flag&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{alt:"user-img",style:{height:"".concat(h?"30px":"60px"),borderRadius:"50%"},src:t.img}),Object(p.jsx)("h2",{style:{marginRight:"1rem"},children:t.text})]}),d.flag&&(t.user!==e.rdxUserLoggedId||d.commentId!==t._id)&&Object(p.jsx)("h2",{style:{marginRight:"1rem"},children:t.text}),d.flag&&d.commentId===t._id&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{ref:r,type:"text",defaultValue:t.text,style:{marginRight:"1rem",height:"3.5rem !important"}}),Object(p.jsx)("button",{style:{cursor:"pointer"},onClick:Object(o.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.rdxUpdate(e.itineraryID,t._id,r.current.value);case 2:n=a.sent,u(n.comments),b({flag:!1});case 5:case"end":return a.stop()}}),a)}))),children:"update"}),Object(p.jsx)("button",{style:{cursor:"pointer"},onClick:function(){return b({flag:!1})},children:"cancel"})]}),localStorage.getItem("token")&&t.user===e.rdxUserLoggedId&&Object(p.jsx)("button",{style:{cursor:"pointer"},onClick:Object(o.a)(i.a.mark((function r(){return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:le.a.fire({title:"Do you want to delete this comment?",showDenyButton:!0,confirmButtonText:"Delete",denyButtonText:"Cancel"}).then((function(r){r.isConfirmed?(le.a.fire("Deleted!","","success"),e.rdxDelete(e.itineraryID,t._id).then((function(e){u(e.comments)}))):r.isDenied&&le.a.fire("Message not deleted","","info")}));case 1:case"end":return r.stop()}}),r)}))),children:Object(p.jsx)("i",{class:"fas fa-times"})}),localStorage.getItem("token")&&t.user===e.rdxUserLoggedId&&Object(p.jsx)("button",{style:{cursor:"pointer",marginLeft:"1rem"},onClick:function(){b({commentId:t._id,flag:!0})},children:Object(p.jsx)("i",{class:"far fa-edit"})})]})},t._id)})),c.length<=0&&Object(p.jsx)("h2",{children:"No comments yet"})]})]})})),me=function(e){var t=Object(f.a)("(max-width:768px)"),r=Object(a.useState)({}),n=Object(m.a)(r,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("http://localhost:4000/api/activities/".concat(e.itineraryID)).then((function(e){return e.json()})).then((function(e){c(e?e.activities:{msg:"No data to display yet"})}))}),[e.itineraryID]),Object(p.jsxs)("div",{style:{height:"".concat(t?"100px":"180px"),overflow:"auto"},children:[s.first&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"first-activity",style:{width:"100%",backgroundPosition:"center",backgroundImage:"url(".concat(s.first.img,")"),backgroundSize:"cover",height:"100%"},children:s.first.title}),Object(p.jsx)("div",{className:"first-activity",style:{width:"100%",backgroundPosition:"center",backgroundImage:"url(".concat(s.second.img,")"),backgroundSize:"cover",height:"100%"},children:s.second.title}),Object(p.jsx)("div",{className:"first-activity",style:{width:"100%",backgroundPosition:"center",backgroundImage:"url(".concat(s.third.img,")"),backgroundSize:"cover",height:"100%"},children:s.third.title})]}),s.msg&&s.msg]})},be=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).componentDidMount=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.rdxrequest(a.props.params.id),!(a.props.rdxCities.length>0)){e.next=5;break}a.setState({city:a.props.rdxCities.find((function(e){return e._id===a.props.params.id}))}),e.next=9;break;case 5:return e.next=7,a.props.rdxrequestCity(a.props.params.id);case 7:t=e.sent,a.setState({city:t});case 9:case"end":return e.stop()}}),e)}))),a.handlerLike=function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.rdxLike(t);case 2:(r=e.sent).error&&Q.b.warning(r.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={city:{img:"-",name:"-"}},a}return Object(l.a)(r,[{key:"convertPrice",value:function(e){switch(e){case 1:return Object(p.jsx)("i",{className:"fas fa-money-bill"});case 2:return Object(p.jsxs)("div",{className:"price-icon-container",children:[Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"})]});case 3:return Object(p.jsxs)("div",{className:"price-icon-container",children:[Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"})]});case 4:return Object(p.jsxs)("div",{className:"price-icon-container",children:[Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"})]});case 5:return Object(p.jsxs)("div",{className:"price-icon-container",children:[Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"}),Object(p.jsx)("i",{className:"fas fa-money-bill"})]});default:new Error("Invalid price")}}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[this.state.city.img&&Object(p.jsx)(h,{imgUrl:this.state.city.img}),Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"ITINERARIES"}),Object(p.jsxs)("article",{className:"itineraries-container",children:[Object(p.jsxs)("div",{className:"itineraries-control-panel",children:[this.props.rdxItineraries.length>0&&this.props.phone&&Object(p.jsx)("i",{className:"fa fa-chevron-up","aria-hidden":"true"}),this.props.rdxItineraries.length>0&&!this.props.phone&&Object(p.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})]}),this.props.rdxItineraries.length>0&&this.props.rdxItineraries[0].user&&this.props.rdxItineraries.map((function(t){return Object(p.jsxs)("div",{className:"itinerary",children:[Object(p.jsx)("div",{className:"header-itinerary",children:Object(p.jsxs)("div",{className:"user-identify",children:[Object(p.jsx)("h2",{children:t.user.name}),Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(t.user.img,")"),borderRadius:"50%"},className:"user-img"})]})}),Object(p.jsxs)("div",{className:"body-itinerary",children:[Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("h2",{children:t.title})}),Object(p.jsx)("div",{className:"atributes",children:Object(p.jsxs)("h2",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fas fa-hourglass-start"}),t.duration,"hrs"]}),Object(p.jsxs)("span",{children:["price",e.convertPrice(t.price)]}),Object(p.jsx)("span",{children:Object(p.jsxs)("button",{onClick:function(){return e.handlerLike(t._id)},children:[localStorage.getItem("token")&&t.likes.includes(e.props.rdxUserId)?Object(p.jsx)("i",{style:{color:"red"},className:"fas fa-heart"}):Object(p.jsx)("i",{className:"far fa-heart"})," ",t.likes.length]})})]})})]}),Object(p.jsx)("div",{className:"footer-itinerary",children:Object(p.jsx)("div",{className:"hashtags",children:Object(p.jsx)("h2",{children:t.hashtags.map((function(e){return Object(p.jsx)("span",{children:e},e)}))})})}),Object(p.jsxs)("div",{className:"interactions",children:[Object(p.jsx)("div",{className:"itinerary-comments",children:Object(p.jsx)(oe,{title:"comments",label:Object(p.jsx)("i",{className:"far fa-comments"}),children:Object(p.jsx)("div",{className:"comments",children:Object(p.jsx)(de,{itineraryID:t._id})})})}),Object(p.jsx)("div",{className:"itinerary-activities",children:Object(p.jsx)(oe,{title:"activities",label:Object(p.jsx)("i",{className:"fas fa-hiking"}),children:Object(p.jsx)("div",{className:"activities",children:Object(p.jsx)(me,{itineraryID:t._id})})})})]})]},t._id)})),Object(p.jsxs)("div",{className:"itineraries-control-panel",children:[this.props.rdxItineraries.length>0&&this.props.phone&&Object(p.jsx)("i",{className:"fa fa-chevron-down","aria-hidden":"true"}),this.props.rdxItineraries.length>0&&!this.props.phone&&Object(p.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})]}),0===this.props.rdxItineraries.length&&Object(p.jsx)("h2",{className:"no-itinerary",children:"No itineraries are available yet"})]}),Object(p.jsx)("article",{className:"back",children:Object(p.jsx)(O.b,{to:"/cities",className:"all-citi",children:Object(p.jsx)("h2",{children:"back to cities"})})})]})]})}}]),r}(a.Component),pe={rdxrequestCity:k.requestCity,rdxrequest:se.requestItineraries,rdxLike:se.likeHandler},he=Object(b.b)((function(e){return{rdxItineraries:e.itinerariesReducer.itineraries,rdxCities:e.citiesReducer.cities,rdxUserId:e.userReducers.userID}}),pe)(be),xe=r(13);function fe(e){return function(t){var r=Object(f.a)("(max-width:768px)"),a=Object(M.g)(),n=Object(M.f)();return Object(p.jsx)(e,Object(xe.a)(Object(xe.a)({},t),{},{params:a,phone:r,navigate:n}))}}var Oe=fe(he),ge=fe($),ye=fe(ae),ve={rdxRequest:k.requestCities,rdxAuth:U.isAuth,rdxLogin:U.signIn},Ne=Object(b.b)((function(e){return{rdxUserName:e.userReducers.userName}}),ve)((function(e){var t=e.rdxRequest,r=e.rdxUserName,n=e.rdxAuth,s=e.rdxLogin;return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:(t=e.sent).error&&Object(Q.b)(t.error),t.response&&s(t.response.email,t.response.password,t.response.google);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}localStorage.getItem("token")&&function(){e.apply(this,arguments)}(),t()}),[t,n,s]),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)(M.c,{children:[Object(p.jsx)(M.a,{path:"/",element:Object(p.jsx)(Y,{})}),Object(p.jsx)(M.a,{path:"/cities",element:Object(p.jsx)(G,{})}),""===r&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(M.a,{path:"/sign-in",element:Object(p.jsx)(ye,{})}),Object(p.jsx)(M.a,{path:"/sign-up",element:Object(p.jsx)(ge,{})})]}),Object(p.jsx)(M.a,{path:"/city/:id",element:Object(p.jsx)(Oe,{})}),Object(p.jsx)(M.a,{path:"*",element:Object(p.jsx)(Y,{})})]}),Object(p.jsx)(Q.a,{autoClose:2e3})]})})),ke=r(39),Ie=r(65),we={cities:"",auxiliary:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"request":return{cities:t.payload,auxiliary:t.payload};case"requestCity":return Object(xe.a)(Object(xe.a)({},e),{},{city:t.payload});case"filter":var r=t.payload.cities.filter((function(e){return e.name.toLowerCase().trim().startsWith(t.payload.value.toLowerCase())}));return Object(xe.a)(Object(xe.a)({},e),{},{cities:r});default:return e}},Se={itineraries:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"requestItineraries":return Object(xe.a)(Object(xe.a)({},e),{},{itineraries:t.payload});case"likes":return Object(xe.a)(Object(xe.a)({},e),{},{itineraries:e.itineraries.map((function(e){return e._id===t.payload.itineraryId?Object(xe.a)(Object(xe.a)({},e),{},{likes:t.payload.likes}):e}))});default:return e}},De={userName:"",img:"",userID:""},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"usuario":return Object(xe.a)(Object(xe.a)({},e),{},{userName:t.payload.userName,img:t.payload.img,userID:t.payload.userID});case"logout":return Object(xe.a)({},De);default:return e}},Ee=Object(ke.b)({citiesReducer:Ce,userReducers:Ue,itinerariesReducer:Re}),Le=Object(ke.c)(Ee,Object(ke.a)(Ie.a));s.a.render(Object(p.jsx)(b.a,{store:Le,children:Object(p.jsx)(Ne,{})}),document.getElementById("root"))},76:function(e,t,r){},78:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){}},[[128,1,2]]]);
//# sourceMappingURL=main.a67317ef.chunk.js.map