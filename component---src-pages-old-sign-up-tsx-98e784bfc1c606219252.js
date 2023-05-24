"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[557],{65145:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(67294);var r=()=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},l.createElement("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),l.createElement("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),l.createElement("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),l.createElement("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"}),l.createElement("path",{d:"M1 1h22v22H1z",fill:"none"}));var n=e=>{let{title:t,onClick:a}=e;return l.createElement("button",{className:"flex items-center gap-2 p-2 text-lg transition-shadow bg-white border rounded shadow-sm w-max hover:shadow-md",onClick:a,type:"button"},l.createElement(r,null),t," with Google")}},64973:function(e,t,a){var l=a(67294),r=a(20574),n=a(47582),c=a(53434),s=a(3740),i=a(65145);t.Z=e=>{let{showPasswordReset:t,hidePasswordField:a,title:o,handleSubmit:m,children:d}=e;const{createGoogleAccount:u}=(0,s.L)((e=>({createGoogleAccount:e.createGoogleAccount}))),h=a;return l.createElement("div",{className:"flex"},l.createElement("div",{className:"hidden w-1/2 lg:block"},l.createElement("img",{src:c.Z,alt:"login-bg",className:"object-cover h-screen"})),l.createElement("div",{className:"w-full p-6 pb-0 md:p-10 lg:w-1/2"},l.createElement("div",null,l.createElement("img",{src:n.Z,alt:"logo",className:"object-contain h-24"})),l.createElement("form",{className:"flex flex-col w-full h-full max-w-md gap-4 mt-8",onSubmit:m},l.createElement("h1",{className:"mb-2 text-3xl font-bold"},o),l.createElement("div",{className:"form-group"},l.createElement("label",{htmlFor:"email"},"Email"),l.createElement("input",{className:"w-full base-field",type:"email",name:"email",id:"email",placeholder:"Email",required:!0})),!a&&l.createElement("div",{className:"form-group"},l.createElement("label",{htmlFor:"password"},"Password"),l.createElement("input",{className:"base-field",type:"password",name:"password",id:"password",placeholder:"Password",required:!0})),l.createElement("button",{className:"base-button md:w-max !px-16 mb-4",type:"submit"},"Submit"),!h&&l.createElement(i.Z,{title:o,onClick:u}),l.createElement("div",null,d),t&&l.createElement("div",null,"Forgot password? ",l.createElement(r.Link,{to:"/reset-password"},"Reset password")))))}},61404:function(e,t,a){a.r(t);var l=a(15785),r=a(67294),n=a(20574),c=a(3740),s=a(64973),i=a(99647),o=a(35444),m=a(32924);t.default=()=>{const{showBanner:e,hideBanner:t}=(0,i.S)(),{loaded:a}=(0,o.a)({userLogged:!1,redirectTo:m.QY.DASHBOARD}),{createUserWithEmailAndPassword:d,sendVerificationEmail:u}=(0,c.L)((e=>({createUserWithEmailAndPassword:e.createUserWithEmailAndPassword,sendVerificationEmail:e.sendVerificationEmail})));if(!a)return null;return r.createElement(s.Z,{title:"Sign Up",handleSubmit:async function(a){t(),a.preventDefault();const r=(0,l.Z)(a.target.elements).reduce(((e,t)=>(e[t.id]=t.value,e)),{}),{email:n,password:c}=r;try{await d(n,c,""),await u()}catch{e({text:"Something went wrong",type:"error"})}}},r.createElement("div",null,"Already have an account? ",r.createElement(n.Link,{to:"/log-in"},"Log In")))}},35444:function(e,t,a){a.d(t,{a:function(){return c}});var l=a(3740),r=a(67294);var n=a(20574);function c(e){void 0===e&&(e={});const{userLogged:t=!0,redirectTo:a="/log-in"}=e,[c,s]=(0,l.L)((e=>[e.user,e.loading])),{0:i,1:o}=(0,r.useState)(!s),m=function(e,t){const{0:a,1:l}=(0,r.useState)(e);return(0,r.useEffect)((()=>{const a=setTimeout((()=>{l(e)}),t);return()=>{clearTimeout(a)}}),[e,t]),a}(i,1),d=t?!!c:!c;return(0,r.useEffect)((()=>{s||d?s||!t||!c||null!=c&&c.emailVerified?o(!s):(0,n.navigate)("/verify-message"):(0,n.navigate)(a)}),[s]),{loaded:m}}},53434:function(e,t,a){t.Z=a.p+"static/login-bg-12cb0a50a99eb339e336969c3b0fa143.svg"}}]);
//# sourceMappingURL=component---src-pages-old-sign-up-tsx-98e784bfc1c606219252.js.map