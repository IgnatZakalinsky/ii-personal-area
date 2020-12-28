(this["webpackJsonpii-personal-area"]=this["webpackJsonpii-personal-area"]||[]).push([[0],{112:function(e,t,n){e.exports={LoginPage:"LoginPage_LoginPage__LrBOi"}},119:function(e,t,n){e.exports={base:"CustomSpin_base__2qa5N"}},137:function(e,t,n){e.exports=n(220)},142:function(e,t,n){},143:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),i=(n(142),n(143),n(144),n(51)),s=n(50),u=n(21),l=n(112),p=n.n(l),d=n(31),f=n(48),m=n(226),g=n(81),b=n.n(g),h=n(227),O=n(225),L=n(65),j=a.a.memo((function(e){var t=e.token,n=e.setToken,r=e.sendToken,o=e.loading;return a.a.createElement("div",{className:b.a.LoginForm},"Login",a.a.createElement("div",{className:b.a.form},a.a.createElement(O.a,{prefix:"t: ",placeholder:"* please input token",value:t,autoFocus:!0,maxLength:36,onChange:function(e){return n(e.currentTarget.value)},onPressEnter:r,suffix:a.a.createElement(h.a,{onClick:r})}),a.a.createElement(L.a,{className:b.a.loginButton,loading:o,onClick:r},"Login")))})),v=n(20),E=n.n(v),y=n(37),k=n(33),x=n(118),w=n.n(x).a.create({baseURL:"https://personal-area-it-incubator.herokuapp.com/1.0/",withCredentials:!0}),N={login:function(){var e=Object(y.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/auth/login",{token:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me:function(){var e=Object(y.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},T=Object(k.b)("app/someThunk",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,n){t.x<10&&e({z:t.x}),n({z:t.x})}));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log("er",Object(d.a)({},e.t0),e.t0),e.abrupt("return",n.rejectWithValue({y:t.x}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),S=Object(k.b)("app/meThunk",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(_.setLoading({isLoading:!0})),e.prev=1,e.next=4,N.me();case 4:return r=e.sent,n.dispatch(_.setVerified({isVerified:!0})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",n.dispatch(S.fulfilled({error:a},"xzId2")),console.log("er",Object(d.a)({},e.t0),e.t0),console.log("error:",a),e.abrupt("return",n.rejectWithValue());case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),P=Object(k.c)({name:"app",initialState:{isAuth:!1,error:"",isVerified:!1,x:1,y:2,z:3,isLoading:!1},reducers:{setAuth:function(e,t){e.isAuth=t.payload.isAuth},setVerified:function(e,t){e.isAuth=t.payload.isVerified,e.isVerified=t.payload.isVerified,e.isLoading=!1},setX:function(e,t){e.x=t.payload.x},setLoading:function(e,t){e.isLoading=t.payload.isLoading,e.error=""}},extraReducers:function(e){e.addCase(T.fulfilled,(function(e,t){e.z=t.payload.z})).addCase(S.fulfilled,(function(e,t){e.error=t.payload.error||"",e.isLoading=!1}))}}),F=P.reducer,_=P.actions,I=(T.rejected,{someThunk:T,meThunk:S}),V=function(e){return e.app},z=Object(k.b)("login/sendTokenThunk",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(R.setLoading({isLoading:!0})),e.prev=1,e.next=4,N.login(t.token);case 4:return r=e.sent,n.dispatch(_.setAuth({isAuth:!0})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),a=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",n.dispatch(z.fulfilled({error:a},"xzId1",{token:t.token})),console.log("er",Object(d.a)({},e.t0),e.t0),console.log("error:",a),e.abrupt("return",n.rejectWithValue({token:t.token}));case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(k.c)({name:"login",initialState:{isLoading:!1,isSuccess:!1,error:""},reducers:{clear:function(e,t){e.isLoading=!1,e.isSuccess=!1,e.error=""},setLoading:function(e,t){e.isLoading=t.payload.isLoading}},extraReducers:function(e){e.addCase(z.fulfilled,(function(e,t){e.isSuccess=!t.payload.error,e.error=t.payload.error||"",e.isLoading=!1}))}}),C=A.reducer,R=A.actions,W={sendTokenThunk:z},G=function(e){return e.login},B=n(135),M=n(119),q=n.n(M),J=n(222),U=a.a.memo((function(e){var t=e.size,n=void 0===t?"large":t,r=e.className,o=Object(B.a)(e,["size","className"]);return a.a.createElement("div",{className:r||q.a.base},a.a.createElement(J.a,Object.assign({size:n},o)))})),X=n(30),Y=function(e){var t=Object(i.b)();return Object(r.useMemo)((function(){return Object(X.b)(e,t)}),[e,t])},$=a.a.memo((function(){var e=Object(u.g)().token,t=Object(r.useState)(e),n=Object(f.a)(t,2),o=n[0],c=n[1],s=Object(i.c)(G),l=s.isLoading,p=s.error,g=s.isSuccess,b=Object(r.useState)(!0),h=Object(f.a)(b,2),O=h[0],L=h[1],v=Object(r.useState)(!1),E=Object(f.a)(v,2),y=E[0],k=E[1],x=Object(r.useState)(!!e),w=Object(f.a)(x,2),N=w[0],T=w[1],S=Y(Object(d.a)({},R,{},W)),P=S.sendTokenThunk,F=S.clear,_=Object(r.useCallback)((function(){l||g||!o?!o&&!O&&m.b.error("no token"):P({token:o})}),[l,g,P,o,O]);return Object(r.useEffect)((function(){O?(F({}),_(),L(!1)):(g&&!y&&(m.b.success("ok!",1),setTimeout((function(){return k(!0)}),500)),p&&(N?T(!1):(m.b.error(p),F({}))))}),[O,L,g,p,e,_,N,F,y]),y?a.a.createElement(u.a,{to:K.PROFILE}):N?a.a.createElement(U,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{loading:l,token:o,setToken:c,sendToken:_}))})),D=a.a.memo((function(){return a.a.createElement("div",{className:p.a.LoginPage},a.a.createElement($,null))})),H=a.a.memo((function(e){var t=Object.assign({},e),n=Object(i.c)(V),o=n.isVerified,c=n.isLoading,s=n.error,l=Object(r.useState)(!0),p=Object(f.a)(l,2),g=p[0],b=p[1],h=Object(r.useState)(!1),O=Object(f.a)(h,2),L=O[0],j=O[1],v=Object(r.useState)(!o),E=Object(f.a)(v,2),y=E[0],k=E[1],x=Y(Object(d.a)({},I)).meThunk;return Object(r.useEffect)((function(){g?(o||x({}),b(!1)):o||c||L?y&&!c&&k(!1):(m.b.error("Not logged in! "+s),setTimeout((function(){return j(!0)}),1500))}),[g,b,o,j,y,k,c,x,s]),L?a.a.createElement(u.a,{to:K.LOGIN}):y?a.a.createElement(U,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",t))})),K={LOGIN:"/login",PROFILE:"/profile",PLAYLISTS:"/playlists"},Q=function(){return a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/",exact:!0,render:function(){return a.a.createElement(u.a,{to:K.LOGIN})}}),a.a.createElement(u.b,{path:K.LOGIN+"/:token",render:function(){return a.a.createElement(D,null)}}),a.a.createElement(u.b,{path:K.LOGIN,render:function(){return a.a.createElement(D,null)}}),a.a.createElement(u.b,{path:K.PROFILE,render:function(){return a.a.createElement(H,null,a.a.createElement("div",null,"profile"))}}),a.a.createElement(u.b,{render:function(){return a.a.createElement("div",null,"404")}}))},Z=n(224),ee=n(223),te=a.a.memo((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z.a,{title:a.a.createElement(a.a.Fragment,null,"Personal Area"),subTitle:a.a.createElement("a",{href:"https://it-incubator.by/",rel:"noopener noreferrer",target:"_blank"},"it-incubator"),extra:[a.a.createElement(s.b,{to:K.LOGIN,key:K.LOGIN},"login"),a.a.createElement(s.b,{to:K.PROFILE,key:K.PROFILE},"profile")]}),a.a.createElement(ee.a,null))})),ne=function(){return a.a.createElement("div",null,a.a.createElement(te,null),a.a.createElement(Q,null))},re=n(69),ae=function(){return w.get("playlists").then((function(e){return e.data}))},oe=function(e){return w.post("playlists2",e).then((function(e){return e.data}))},ce=function(e){return w.delete("playlists/"+e).then((function(e){return e.data}))},ie=function(e){return w.put("playlists",{playlist:{_id:e,name:"new Pl"}}).then((function(e){return e.data}))},se=Object(k.b)("playlists/getPlaylists",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(_.setLoading({isLoading:!0})),e.prev=1,e.next=4,ae();case 4:return r=e.sent,n.dispatch(_.setLoading({isLoading:!1})),e.abrupt("return",{playlists:r.playlists});case 9:return e.prev=9,e.t0=e.catch(1),console.log("er",Object(d.a)({},e.t0),e.t0),n.dispatch(_.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:Object(d.a)({},e.t0)}));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),ue=(Object(k.b)("playlists/addPlaylist",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(_.setLoading({isLoading:!0})),e.prev=1,e.next=4,oe(void 0);case 4:return e.abrupt("return");case 7:return e.prev=7,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Nya, playlists Error!",Object(d.a)({},e.t0)),console.log("error: ",r),n.dispatch(_.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:r}));case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(k.b)("playlists/deletePlaylist",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(_.setLoading({isLoading:!0})),e.prev=1,e.next=4,ce(t.id);case 4:return n.dispatch(se({})),e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Nya, playlists Error!",Object(d.a)({},e.t0)),console.log("error: ",r),n.dispatch(_.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:r}));case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(k.b)("playlists/updatePlaylist",function(){var e=Object(y.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(_.setLoading({isLoading:!0})),e.prev=1,e.next=4,ie(t.id);case 4:return n.dispatch(se({})),e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log("Nya, playlists Error!",Object(d.a)({},e.t0)),console.log("error: ",r),n.dispatch(_.setLoading({isLoading:!1})),e.abrupt("return",n.rejectWithValue({error:r}));case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(k.c)({name:"playlists",initialState:{playlists:[]},reducers:{},extraReducers:function(e){e.addCase(se.fulfilled,(function(e,t){e.playlists=t.payload.playlists}))}})),le=ue.reducer,pe=(ue.actions,Object(X.c)({app:F,login:C,playlists:le})),de=Object(k.a)({reducer:pe,middleware:function(e){return e().prepend(re.a)}}),fe=de;window.store=de;var me=function(){return a.a.createElement(s.a,null,a.a.createElement(i.a,{store:fe},a.a.createElement("div",{className:"App"},a.a.createElement(ne,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.StrictMode,null,a.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,n){e.exports={LoginForm:"LoginForm_LoginForm__2Uuqi",form:"LoginForm_form__1eLSk",loginButton:"LoginForm_loginButton__3Mt46"}}},[[137,1,2]]]);
//# sourceMappingURL=main.a9449e0e.chunk.js.map