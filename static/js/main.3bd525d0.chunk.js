(this.webpackJsonptamagotchi=this.webpackJsonptamagotchi||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},4:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(5),o=n.n(r),c=(n(25),n(4),n(2)),l=function(){var e=Object(c.b)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"info",onClick:function(){return e({type:"TRIGGER"})},title:"Info"},"\u24d8"))},s=(n(31),n(0)),u=n(19),d=function(){return Object(a.useEffect)((function(){var e,t,n,a,i,r,o,c=new s.i,l=document.getElementById("js-loader");!function(){var c=document.querySelector("#c");(e=new s.fb).background=new s.j(15856113),e.fog=new s.n(15856113,60,100),(t=new s.sb({canvas:c,antialias:!0})).shadowMap.enabled=!0,t.setPixelRatio(window.devicePixelRatio),document.body.appendChild(t.domElement),(n=new s.W(50,window.innerWidth/window.innerHeight,.1,1e3)).position.z=30,n.position.x=0,n.position.y=-3;var d=(new s.mb).load("model/textures/groot_diffuse.png");d.flipY=!1;var m=new s.M({map:d,color:16777215,skinning:!0});(new u.a).load("model/groot.glb",(function(t){a=t.scene;var n=t.animations;a.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.recieveShadow=!0,e.material=m)})),a.scale.set(2,2,2),a.position.y=-10,e.add(a),l.remove(),r=new s.b(a);var c=n.filter((function(e){return"idle"!==e.name}));i=c.map((function(e){var t=s.a.findByName(c,e.name);return t.tracks.splice(3,3),t.tracks.splice(9,3),t=r.clipAction(t)}));var u=s.a.findByName(n,"idle");(o=r.clipAction(u)).play()}),void 0,(function(e){return console.error(e)}));var f=new s.q(16777215,16777215,.61);f.position.set(0,50,0),e.add(f);var h=8.25,p=new s.k(16777215,.54);p.position.set(-8,12,8),p.castShadow=!0,p.shadow.mapSize=new s.pb(1024,1024),p.shadow.camera.near=.1,p.shadow.camera.far=1500,p.shadow.camera.left=-8.25,p.shadow.camera.right=h,p.shadow.camera.top=h,p.shadow.camera.bottom=-8.25,e.add(p);var v=new s.X(5e3,5e3,1,1),w=new s.M({color:15658734,shininess:0}),b=new s.K(v,w);b.rotation.x=-.5*Math.PI,b.recieveShadow=!0,b.position.y=-10,e.add(b);var E=new s.jb(8,32,32),g=new s.L({color:13940595}),y=new s.K(E,g);y.position.z=-15,y.position.y=-2.5,y.position.x=-.25,e.add(y)}(),function a(){if(r&&r.update(c.getDelta()),function(e){var t=e.domElement,n=window.innerWidth,a=window.innerHeight,i=t.width/window.devicePixelRatio,r=t.height/window.devicePixelRatio,o=i!==n||r!==a;o&&e.setSize(n,a,!1);return o}(t)){var i=t.domElement;n.aspect=i.clientWidth/i.clientHeight,n.updateProjectionMatrix()}t.render(e,n),requestAnimationFrame(a)}();var d=document.querySelectorAll("button");function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d.forEach((function(t){t.classList.toggle("disabled"),e?t.setAttribute("disabled",e):t.removeAttribute("disabled")}))}function f(e,t,n,a){n.reset(),n.setLoop(s.G),n.play(),e.crossFadeTo(n,t,!0),m(!0),setTimeout((function(){e.enabled=!0,n.crossFadeTo(e,a,!0),m()}),1e3*n._clip.duration-1e3*(a+t))}document.querySelector(".dance").addEventListener("click",(function(e){e.preventDefault(),f(o,.25,i[0],.25)})),document.querySelector(".wave").addEventListener("click",(function(e){e.preventDefault(),f(o,.25,i[2],.25)})),document.querySelector(".kick").addEventListener("click",(function(e){e.preventDefault(),f(o,.25,i[1],.25)}))})),i.a.createElement("canvas",{id:"c"})},m=function(){return i.a.createElement("button",{className:"kick"},i.a.createElement("span",{role:"img","aria-label":"Kick",title:"Kick"},"\ud83c\udf46"))},f=function(){return i.a.createElement("button",{className:"dance"},i.a.createElement("span",{role:"img","aria-label":"Dance",title:"Dance"},"\ud83d\udd7a"))},h=function(){return i.a.createElement("button",{className:"wave"},i.a.createElement("span",{role:"img","aria-label":"Wave",title:"Say Hello"},"\ud83d\udc4b"))},p=(n(32),function(){return i.a.createElement("form",null,i.a.createElement(m,null),i.a.createElement(f,null),i.a.createElement(h,null))}),v=n(12),w=n(11),b=n.n(w),E=function(){var e=Object(c.b)();return i.a.createElement("svg",{id:"close",viewBox:"0 0 24 24",fill:"none",onClick:function(){return e({type:"TRIGGER"})},tabIndex:"1"},i.a.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"}))};n(42);n(43).config();var g=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(v.a)(o,2),s=l[0],u=l[1],d=Object(c.c)((function(e){return e.isOpen})),m=Object(c.b)();return b.a.setAppElement("#root"),Object(a.useEffect)((function(){fetch("https://superheroapi.com/api/4373085182766538/303").then((function(e){return e.json()})).then((function(e){return e.powerstats})).then((function(e){r(Object.keys(e)),u(Object.values(e))})).catch((function(e){return console.log(e)}))}),[]),i.a.createElement(b.a,{className:"modal",isOpen:d,onRequestClose:function(){return m({type:"TRIGGER"})}},i.a.createElement(E,{close:function(){return m({type:"TRIGGER"})}}),i.a.createElement("h1",{className:"modal-title"},"About Groot"),i.a.createElement("div",{className:"flexbox"},i.a.createElement("ul",null,n.map((function(e,t){return i.a.createElement("li",{key:t},e)}))),i.a.createElement("ul",null,s.map((function(e,t){return i.a.createElement("li",{className:"level-bar",key:t},i.a.createElement("div",{className:"level-bar--fill",style:{width:e+"%"}},e,"%"))})))),i.a.createElement("p",null,"Groot (/\u0261ru\u02d0t/) is a fictional character appearing in American comic books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, the character first appeared in Tales to Astonish #13 (November 1960). An extraterrestrial, sentient tree-like creature, the original Groot first appeared as an invader that intended to capture humans for experimentation."),i.a.createElement("p",null,'The character was reintroduced as a heroic, noble being in 2006, and appeared in the crossover comic book storyline "Annihilation: Conquest". Groot went on to star in its spin-off series, Guardians of the Galaxy, joining the team of the same name. Groot has been featured in a variety of associated Marvel merchandise, including animated television series, toys and trading cards. Vin Diesel voices Groot in the Marvel Cinematic Universe films Guardians of the Galaxy (2014), Guardians of the Galaxy Vol. 2 (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019), while Krystian Godlewski played the character via performance capture in the first film. Fred Tatasciore voices Groot on the Disney California Adventure ride Guardians of the Galaxy: Mission Breakout. Diesel will return to voice the character in Guardians of the Galaxy Vol. 3. Diesel also voiced Groot as a cameo in the 2018 Disney animated film Ralph Breaks the Internet. Since his film premiere and animated series debut, Groot has become a pop culture icon, with his repeated line "I am Groot" becoming an Internet meme.'))},y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,null),i.a.createElement(d,null),i.a.createElement(p,null),i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(3),k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRIGGER":return!e;default:return e}},x=Object(G.b)({isOpen:k}),j=Object(G.c)(x);o.a.render(i.a.createElement(c.a,{store:j},i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3bd525d0.chunk.js.map