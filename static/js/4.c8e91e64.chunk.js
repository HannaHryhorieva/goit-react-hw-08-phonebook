(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{85:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(34);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,a=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(c=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);c=!0);}catch(s){a=!0,r=s}finally{try{c||null==i.return||i.return()}finally{if(a)throw r}}return n}}(t,e)||Object(c.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},94:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var c=n(8),a=n(0),r=n(85),o=n(18),i=n.n(o),s=n(10);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var u=n(29),b=function(t){return t.contacts.loading},l=function(t){return t.contacts.filter},j=function(t){return t.contacts.items},d=Object(u.a)([j,l],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),f=n(1),h=function(){var t=Object(c.b)();Object(a.useEffect)((function(){return t((function(t){t(Object(s.i)()),i.a.get("/contacts").then((function(e){var n=e.data;return t(Object(s.j)(n))})).catch((function(e){return t(Object(s.h)(e))}))}))}),[t]);var e=Object(c.c)(d);return Object(f.jsx)("ul",{className:"contact-list",children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(f.jsxs)("li",{className:"contacts-item",children:[Object(f.jsxs)("span",{className:"contacts-item-name",children:[c,":"]}),Object(f.jsx)("span",{className:"contacts-item-name",children:a}),Object(f.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return t((e=n,function(t){t(Object(s.f)()),i.a.delete("/contacts/".concat(e)).then((function(){return t(Object(s.g)(e))})).catch((function(e){return t(Object(s.e)(e))}))}));var e},children:"Delete"})]},n)}))})},m=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],o=e[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),l=b[0],d=b[1],h=Object(c.c)(j),m=Object(c.b)(),O=function(t){switch(t.target.name){case"name":o(t.target.value);break;case"number":d(t.target.value)}};return Object(f.jsxs)("form",{className:"phonebookAdd",onSubmit:function(t){if(t.preventDefault(),void 0!==h.find((function(t){return t.name===n})))alert("".concat(n," is already in contacts."));else{m(function(t){var e=Object(r.a)(t,2),n=e[0],c=e[1];return function(t){var e={name:n,number:c};t(Object(s.b)()),i.a.post("/contacts",e).then((function(e){var n=e.data;return t(Object(s.c)(n))})).catch((function(e){return t(Object(s.a)(e))}))}}([n,l]))}o(""),d("")},children:[Object(f.jsxs)("label",{className:"phonebookAdd-label",children:["Name",Object(f.jsx)("input",{value:n,onChange:O,type:"text",name:"name",className:"phonebookAdd-input",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:"phonebookAdd-label",children:["Number",Object(f.jsx)("input",{value:l,onChange:O,type:"tel",name:"number",className:"phonebookAdd-input",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"Add contact"})]})};var O=function(){var t=Object(c.c)(l),e=Object(c.b)();return Object(f.jsxs)("label",{className:"filter-label",children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:t,onChange:function(t){return e(Object(s.d)(t.target.value))},className:"filter-input"})]})};function p(){var t=Object(c.c)(b);return Object(f.jsxs)("div",{children:[t&&Object(f.jsx)("h1",{children:"Loading..."}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:"phonebook-title",children:"Phonebook"}),Object(f.jsx)(m,{})]}),Object(f.jsx)("h3",{className:"phonebook-title",children:"Contacts"}),Object(f.jsx)(O,{}),Object(f.jsx)(h,{})]})}}}]);
//# sourceMappingURL=4.c8e91e64.chunk.js.map