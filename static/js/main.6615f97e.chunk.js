(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{102:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(45),l=a.n(i),s=(a(102),a(90)),o=a(91),c=a(96),m=a(95),p=a(92),u=a.n(p),d=a(46),g=a.n(d),b=(a(350),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),f=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},h=function(e){var t=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer"},"Register")))))},E=function(e){var t=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))},w=a(93),v=a.n(w),N=a(94),y=a.n(N),C=(a(351),function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(v.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{style:{paddingTop:"20px"},alt:"logo",src:y.a}))))}),A=(a(352),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),U=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},"Philipp, your current rank is..."),r.a.createElement("div",{className:"white f1"},"#5"))},R=(a(353),new g.a.App({apiKey:"df3e0358c44f4c5d879f386fd3f7fe52"})),S={particles:{number:{value:70,density:{enable:!0,value_area:800}}}},K=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),R.models.predict(g.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signedout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box;return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{className:"particles",params:S}),r.a.createElement(f,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(U,null),r.a.createElement(A,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(b,{box:i,imageUrl:a})):"signin"===n?r.a.createElement(h,{onRouteChange:this.onRouteChange}):r.a.createElement(E,{onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(354);l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t){e.exports="data:image/png;base64,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"},97:function(e,t,a){e.exports=a(355)}},[[97,1,2]]]);
//# sourceMappingURL=main.6615f97e.chunk.js.map