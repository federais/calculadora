(this.webpackJsonpcalculadorra=this.webpackJsonpcalculadorra||[]).push([[0],{14:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),l=a(11),r=a.n(l),n=a(2),i=(a(24),a(0));var b=function(){return Object(i.jsxs)("div",{className:"rootMenu",children:[Object(i.jsx)("div",{className:"background-one",children:Object(i.jsx)("div",{className:"link-container",children:Object(i.jsx)("a",{className:"link-one",href:"matematica",children:"Matematica"})})}),Object(i.jsx)("div",{className:"background-two link-container",children:Object(i.jsx)("a",{className:"link-two",href:"#",children:"Fisica"})}),Object(i.jsx)("div",{className:"background-three link-container",children:Object(i.jsx)("a",{className:"link-three",href:"#",children:"Quimica"})})]})};a(14);var o=function(){return Object(i.jsxs)("div",{className:"rootMatematica",children:[Object(i.jsx)("p",{"data-item":"Matematica",children:"Matematica"}),Object(i.jsx)("section",{children:Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{className:"menuItems",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/matematica/pitagoras","data-item":"Pitagoras",children:"Pitagoras"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/matematica/baschara","data-item":"Bhaskara",children:"Bhaskara"})})]})})})]})},j=a(7),u=a(10);var d=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],l=Object(s.useState)(""),r=Object(j.a)(l,2),n=r[0],b=r[1],o=Object(s.useState)(""),d=Object(j.a)(o,2),h=d[0],p=d[1];return Object(i.jsxs)("div",{className:"rootMatematica",children:[Object(i.jsx)("p",{children:"Pitagoras"}),Object(i.jsx)("small",{children:"Deixe em branco o valor que deseja obter"}),Object(i.jsxs)("div",{class:"form__group field",children:[Object(i.jsx)("input",{type:"number",class:"form__field",placeholder:"Cateto 1",id:"cateto1",value:a,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("label",{for:"cateto 1",class:"form__label",children:"Cateto 1"})]}),Object(i.jsxs)("div",{class:"form__group field",children:[Object(i.jsx)("input",{type:"number",class:"form__field",placeholder:"Cateto 2",id:"cateto2",value:n,onChange:function(e){return b(e.target.value)}}),Object(i.jsx)("label",{for:"cateto 2",class:"form__label",children:"Cateto 2"})]}),Object(i.jsxs)("div",{class:"form__group field",children:[Object(i.jsx)("input",{type:"number",class:"form__field",placeholder:"Hipotenusa",id:"hipotenusa",value:h,onChange:function(e){return p(e.target.value)}}),Object(i.jsx)("label",{for:"hipotenusa",class:"form__label",children:"Hipotenusa"})]}),Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:Object(i.jsx)("defs",{children:Object(i.jsxs)("filter",{id:"gooey",children:[Object(i.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"5",result:"blur"}),Object(i.jsx)("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"highContrastGraphic"}),Object(i.jsx)("feComposite",{in:"SourceGraphic",in2:"highContrastGraphic",operator:"atop"})]})})}),Object(i.jsxs)("button",{id:"gooey-button",onClick:function(e){return function(e){var t=document.querySelector("#resultado"),s=0;switch(""){case a:s=Math.sqrt(Math.pow(h,2)-Math.pow(n,2)),t.value=s;break;case n:s=Math.sqrt(Math.pow(h,2)-Math.pow(a,2)),t.value=s;break;case h:s=Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),t.value=s;break;default:u.b.error("Ops! Chegue novamente seus inputs")}}()},children:["Calcular",Object(i.jsxs)("span",{class:"bubbles",children:[Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"}),Object(i.jsx)("span",{class:"bubble"})]})]}),Object(i.jsxs)("div",{class:"form__group field",children:[Object(i.jsx)("input",{type:"number",disabled:!0,class:"form__field",placeholder:"Resultado",id:"resultado"}),Object(i.jsx)("label",{for:"resultado",class:"form__label blocked ",children:"Resultado"})]})]})};var h=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"rootMatematica",children:[Object(i.jsx)("p",{children:e.title}),Object(i.jsx)("small",{children:"Deixe em branco o valor que deseja obter"}),Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{type:"number",className:"form__field",placeholder:e.input1,id:"cateto1",value:e.value1,onChange:function(t){return e.setValue1(t.target.value)}}),Object(i.jsx)("label",{for:e.input1,className:"form__label",children:e.input1})]}),Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{type:"number",className:"form__field",placeholder:e.input2,id:"cateto2",value:e.value2,onChange:function(t){return e.setValue2(t.target.value)}}),Object(i.jsx)("label",{htmlFor:e.input2,className:"form__label",children:e.input2})]}),Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{type:"number",className:"form__field",placeholder:e.input2,id:e.input2,value:e.value3,onChange:function(t){return e.setValue3(t.target.value)}}),Object(i.jsx)("label",{htmlFor:"{props.input2}",className:"form__label",children:e.input2})]}),Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:Object(i.jsx)("defs",{children:Object(i.jsxs)("filter",{id:"gooey",children:[Object(i.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"5",result:"blur"}),Object(i.jsx)("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"highContrastGraphic"}),Object(i.jsx)("feComposite",{in:"SourceGraphic",in2:"highContrastGraphic",operator:"atop"})]})})}),Object(i.jsxs)("button",{id:"gooey-button",onClick:function(t){return e.handleSubmit(t)},children:["Calcular",Object(i.jsxs)("span",{className:"bubbles",children:[Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"}),Object(i.jsx)("span",{className:"bubble"})]})]}),Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{type:"text",disabled:!0,className:"form__field",placeholder:"Resultado",id:"resultado"}),Object(i.jsx)("label",{for:"resultado",className:"form__label blocked ",children:"Resultado"})]})]})})};var p=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],l=Object(s.useState)(""),r=Object(j.a)(l,2),n=r[0],b=r[1],o=Object(s.useState)(""),u=Object(j.a)(o,2),d=u[0],p=u[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(h,{title:"Baschara",input1:"Valor A",value1:a,setValue1:c,input2:"Valor B",value2:n,setValue2:b,input3:"Valor C",value3:d,setValue3:p,handleSubmit:function(e){console.log("Salve");var t=document.querySelector("#resultado"),s=0,c=Math.pow(n,2)-4*a*d;if(c<0)return s="Delta menor que 0",t.value=s;var l=(Math.sqrt(c)-n)/(2*a),r=(Math.sqrt(c)-n)/(2*a);s="\u0394=".concat(c," | X1=").concat(l.toFixed(1)," | X2= ").concat(r.toFixed(1)),t.value=s}})})},m=function(){return Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.a,{exact:!0,path:"/",component:b}),Object(i.jsx)(n.a,{exact:!0,path:"/matematica",component:o}),Object(i.jsx)(n.a,{exact:!0,path:"/matematica/pitagoras",component:d}),Object(i.jsx)(n.a,{exact:!0,path:"/matematica/baschara",component:p})]})},x=a(15);a(31),a(32);var O=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(x.a,{children:[Object(i.jsx)(m,{path:"/"}),Object(i.jsx)(u.a,{autoClose:3e3,position:"top-left"})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),l(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.c169ce39.chunk.js.map