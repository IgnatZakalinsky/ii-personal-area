(this["webpackJsonpii-personal-area"]=this["webpackJsonpii-personal-area"]||[]).push([[0],{112:function(e,t,n){e.exports={LoginPage:"LoginPage_LoginPage__LrBOi"}},119:function(e,t,n){e.exports={base:"CustomSpin_base__2qa5N"}},137:function(e,t,n){e.exports=n(220)},142:function(e,t,n){},143:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),i=(n(142),n(143),n(144),n(40)),s=n(51),u=n(21),l=n(112),p=n.n(l),d=n(26),f=n(49),m=n(226),g=n(73),b=n.n(g),h=n(227),v=n(225),O=n(65),j=a.a.memo((function(e){var t=e.token,n=e.setToken,r=e.sendToken,o=e.loading;return a.a.createElement("div",{className:b.a.LoginForm},"Login",a.a.createElement("div",{className:b.a.form},a.a.createElement(v.a,{className:b.a.tokenInput,prefix:"t: ",placeholder:"*please, input token",value:t,autoFocus:!0,maxLength:36,onChange:function(e){return n(e.currentTarget.value)},onPressEnter:r,suffix:a.a.createElement(h.a,{onClick:r})}),a.a.createElement(O.a,{className:b.a.loginButton,loading:o,onClick:r},"Login")))})),L=n(19),E=n.n(L),k=n(33),y=n(30),x=n(118),w=n.n(x).a.create({baseURL:"https://personal-area-it-incubator.herokuapp.com/1.0/",withCredentials:!0}),T={login:function(){var e=Object(k.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/auth/login",{token:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me:function(){var e=Object(k.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),logout:function(){var e=Object(k.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/auth/logout");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},I={id:0,level:0,telegramId:746128e3,lastUpdateDate:"2020-12-30T10:09:01.0488913Z",inactive:!1,courseId:1,courseTitle:"Front-end developer",firstName:"Fake",lastName:"Anonymous",isAdmin:!1},N=Object(y.b)("app/someThunk",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,n){t.x<10&&e({z:t.x}),n({z:t.x})}));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log("er",Object(d.a)({},e.t0),e.t0),e.abrupt("return",n.rejectWithValue({y:t.x}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(y.b)("app/meThunk",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(V.setLoading({isLoading:!0})),e.prev=1,e.next=4,T.me();case 4:return r=e.sent,n.dispatch(V.setVerified({isVerified:!0,user:r.user})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",n.dispatch(F.fulfilled({error:a},"xzId2")),console.log("er",Object(d.a)({},e.t0),e.t0),console.log("error:",a),e.abrupt("return",n.rejectWithValue());case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),P=Object(y.b)("app/logoutThunk",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(V.setLoading({isLoading:!0})),e.prev=1,e.next=4,T.logout();case 4:return r=e.sent,n.dispatch(V.setVerified({isVerified:!1,user:I})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",n.dispatch(F.fulfilled({error:a},"xzId3")),console.log("er",Object(d.a)({},e.t0),e.t0),console.log("error:",a),e.abrupt("return",n.rejectWithValue());case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(y.c)({name:"app",initialState:{isAuth:!1,error:"",isVerified:!1,user:I,x:1,y:2,z:3,isLoading:!1},reducers:{setAuth:function(e,t){e.isAuth=t.payload.isAuth},setVerified:function(e,t){e.isAuth=t.payload.isVerified,e.isVerified=t.payload.isVerified,e.isLoading=!1,e.user=t.payload.user},setX:function(e,t){e.x=t.payload.x},setLoading:function(e,t){e.isLoading=t.payload.isLoading,e.error=""}},extraReducers:function(e){e.addCase(N.fulfilled,(function(e,t){e.z=t.payload.z})).addCase(F.fulfilled,(function(e,t){e.error=t.payload.error||"",e.isLoading=!1}))}}),S=_.reducer,V=_.actions,A=(N.rejected,{someThunk:N,meThunk:F,logoutThunk:P}),z=function(e){return e.app},C=Object(y.b)("login/sendTokenThunk",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(G.setLoading({isLoading:!0})),e.prev=1,e.next=4,T.login(t.token);case 4:return r=e.sent,n.dispatch(V.setAuth({isAuth:!0})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",n.dispatch(C.fulfilled({error:a},"xzId1",{token:t.token})),console.log("er",Object(d.a)({},e.t0),e.t0),console.log("error:",a),e.abrupt("return",n.rejectWithValue({token:t.token}));case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),R=Object(y.c)({name:"login",initialState:{isLoading:!1,isSuccess:!1,error:""},reducers:{clear:function(e,t){e.isLoading=!1,e.isSuccess=!1,e.error=""},setLoading:function(e,t){e.isLoading=t.payload.isLoading}},extraReducers:function(e){e.addCase(C.fulfilled,(function(e,t){e.isSuccess=!t.payload.error,e.error=t.payload.error||"",e.isLoading=!1}))}}),W=R.reducer,G=R.actions,B={sendTokenThunk:C},U=function(e){return e.login},M=n(135),q=n(119),J=n.n(q),Z=n(222),D=a.a.memo((function(e){var t=e.size,n=void 0===t?"large":t,r=e.className,o=Object(M.a)(e,["size","className"]);return a.a.createElement("div",{className:r||J.a.base},a.a.createElement(Z.a,Object.assign({size:n},o)))})),X=n(32),Y=function(e){var t=Object(i.b)();return Object(r.useMemo)((function(){return Object(X.b)(e,t)}),[e,t])},$=a.a.memo((function(){var e=Object(u.g)().token,t=Object(r.useState)(e),n=Object(f.a)(t,2),o=n[0],c=n[1],s=Object(i.c)(U),l=s.isLoading,p=s.error,g=s.isSuccess,b=Object(r.useState)(!0),h=Object(f.a)(b,2),v=h[0],O=h[1],L=Object(r.useState)(!1),E=Object(f.a)(L,2),k=E[0],y=E[1],x=Object(r.useState)(!!e),w=Object(f.a)(x,2),T=w[0],I=w[1],N=Y(Object(d.a)({},G,{},B)),F=N.sendTokenThunk,P=N.clear,_=Object(r.useCallback)((function(){l||g||!o?!o&&!v&&m.b.error("no token"):F({token:o})}),[l,g,F,o,v]);return Object(r.useEffect)((function(){v?(P({}),_(),O(!1)):(g&&!k&&(m.b.success("ok!",1),setTimeout((function(){return y(!0)}),500)),p&&(T?I(!1):(m.b.error(p),P({}))))}),[v,O,g,p,e,_,T,P,k]),k?a.a.createElement(u.a,{to:te.PROFILE}):T?a.a.createElement(D,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{loading:l,token:o,setToken:c,sendToken:_}))})),H=a.a.memo((function(){return a.a.createElement("div",{className:p.a.LoginPage},a.a.createElement($,null))})),K=a.a.memo((function(e){var t=Object.assign({},e),n=Object(i.c)(z),o=n.isVerified,c=n.isLoading,s=n.error,l=Object(r.useState)(!0),p=Object(f.a)(l,2),g=p[0],b=p[1],h=Object(r.useState)(!1),v=Object(f.a)(h,2),O=v[0],j=v[1],L=Object(r.useState)(!o),E=Object(f.a)(L,2),k=E[0],y=E[1],x=Y(Object(d.a)({},A)).meThunk;return Object(r.useEffect)((function(){g?(o||x({}),b(!1)):o||c||O?k&&!c&&y(!1):(m.b.error("Not logged in! "+s),setTimeout((function(){return j(!0)}),1500))}),[g,b,o,j,k,y,c,x,s]),O?a.a.createElement(u.a,{to:te.LOGIN}):k?a.a.createElement(D,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",t))})),Q=function(){var e=Object(i.c)(z).user;return a.a.createElement("div",{style:{marginLeft:30}},a.a.createElement("div",null,e.courseTitle),a.a.createElement("div",null,e.level," lvl"),a.a.createElement("div",null,e.firstName," ",e.lastName))},ee=function(){return a.a.createElement("div",null,a.a.createElement(Q,null))},te={LOGIN:"/login",PROFILE:"/profile",PLAYLISTS:"/playlists"},ne=function(){return a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/",exact:!0,render:function(){return a.a.createElement(u.a,{to:te.PROFILE})}}),a.a.createElement(u.b,{path:te.LOGIN+"/:token",render:function(){return a.a.createElement(H,null)}}),a.a.createElement(u.b,{path:te.LOGIN,render:function(){return a.a.createElement(H,null)}}),a.a.createElement(u.b,{path:te.PROFILE,render:function(){return a.a.createElement(K,null,a.a.createElement(ee,null))}}),a.a.createElement(u.b,{render:function(){return a.a.createElement("div",null,"404")}}))},re=n(224),ae=n(223),oe=a.a.memo((function(){var e=Y(Object(d.a)({},A)).logoutThunk,t=Object(i.c)(z).isVerified;return a.a.createElement(a.a.Fragment,null,a.a.createElement(re.a,{title:a.a.createElement(a.a.Fragment,null,"Personal Area"),subTitle:a.a.createElement("a",{href:"https://it-incubator.by/",rel:"noopener noreferrer",target:"_blank"},"it-incubator"),extra:[t&&a.a.createElement(s.b,{to:te.PROFILE,key:"PROFILE"},"PROFILE"),t&&a.a.createElement(s.b,{to:te.LOGIN,key:"LOGOUT",onClick:e},"LOGOUT")]}),a.a.createElement(ae.a,null))})),ce=function(){return a.a.createElement("div",null,a.a.createElement(oe,null),a.a.createElement(ne,null))},ie=n(69),se=function(){return w.get("playlists").then((function(e){return e.data}))},ue=function(e){return w.post("playlists2",e).then((function(e){return e.data}))},le=function(e){return w.delete("playlists/"+e).then((function(e){return e.data}))},pe=function(e){return w.put("playlists",{playlist:{_id:e,name:"new Pl"}}).then((function(e){return e.data}))},de=Object(y.b)("playlists/getPlaylists",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(V.setLoading({isLoading:!0})),e.prev=1,e.next=4,se();case 4:return r=e.sent,n.dispatch(V.setLoading({isLoading:!1})),e.abrupt("return",{playlists:r.playlists});case 9:return e.prev=9,e.t0=e.catch(1),console.log("er",Object(d.a)({},e.t0),e.t0),n.dispatch(V.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:Object(d.a)({},e.t0)}));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),fe=(Object(y.b)("playlists/addPlaylist",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(V.setLoading({isLoading:!0})),e.prev=1,e.next=4,ue(void 0);case 4:return e.abrupt("return");case 7:return e.prev=7,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Nya, playlists Error!",Object(d.a)({},e.t0)),console.log("error: ",r),n.dispatch(V.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:r}));case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(y.b)("playlists/deletePlaylist",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(V.setLoading({isLoading:!0})),e.prev=1,e.next=4,le(t.id);case 4:return n.dispatch(de({})),e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Nya, playlists Error!",Object(d.a)({},e.t0)),console.log("error: ",r),n.dispatch(V.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:r}));case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(y.b)("playlists/updatePlaylist",function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(V.setLoading({isLoading:!0})),e.prev=1,e.next=4,pe(t.id);case 4:return n.dispatch(de({})),e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Nya, playlists Error!",Object(d.a)({},e.t0)),console.log("error: ",r),n.dispatch(V.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:r}));case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(y.c)({name:"playlists",initialState:{playlists:[]},reducers:{},extraReducers:function(e){e.addCase(de.fulfilled,(function(e,t){e.playlists=t.payload.playlists}))}})),me=fe.reducer,ge=(fe.actions,Object(X.c)({app:S,login:W,playlists:me})),be=Object(y.a)({reducer:ge,middleware:function(e){return e().prepend(ie.a)}}),he=be;window.store=be;var ve=function(){return a.a.createElement(s.a,null,a.a.createElement(i.a,{store:he},a.a.createElement("div",{className:"App"},a.a.createElement(ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.StrictMode,null,a.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,n){e.exports={LoginForm:"LoginForm_LoginForm__2Uuqi",form:"LoginForm_form__1eLSk",loginButton:"LoginForm_loginButton__3Mt46",tokenInput:"LoginForm_tokenInput__ZfIG2"}}},[[137,1,2]]]);
//# sourceMappingURL=main.f70bc3fd.chunk.js.map