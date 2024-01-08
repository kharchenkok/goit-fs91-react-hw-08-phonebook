"use strict";(self.webpackChunkgoit_fs91_react_hw_08_phonebook=self.webpackChunkgoit_fs91_react_hw_08_phonebook||[]).push([[870],{4240:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var o=n(1418),r=n.n(o),a="Section_section__Z2PLw",c="Section_section__title__5once",s=n(3329),i=function(e){var t=e.title,n=e.children,o=e.extraClass,i=void 0===o?"":o,l=r()(a,i);return(0,s.jsxs)("section",{className:l,children:[t&&(0,s.jsx)("h2",{className:c,children:t}),n]})}},2870:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var o=n(4240),r=n(2791),a=n(4420),c=n(9644),s=n(3553),i=function(e){return e.filter.nameFilter},l=function(e){return e.contacts.contacts},u=(0,s.P1)([l],(function(e){return e&&e.slice().toSorted((function(e,t){return t.id-e.id}))})),d={selectContacts:l,sortedContacts:u,isLoadingContacts:function(e){return e.contacts.isLoading},errorContacts:function(e){return e.contacts.error},filteredNameContacts:(0,s.P1)([u,i],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))},f="Filter_filter__vxThR",m=n(3329),h=function(){var e=(0,a.I0)(),t=(0,a.v9)(d.sortedContacts),n=(0,a.v9)(i);return(0,m.jsx)(m.Fragment,{children:t.length>0&&(0,m.jsx)("input",{className:f,type:"text",value:n,placeholder:"Find contacts by name",onChange:function(t){e((0,c.E)(t.target.value))}})})},_=n(719),p="Notification_notification__SfISU",v=function(e){var t=e.text;return(0,m.jsx)("div",{className:p,children:t})},x=n(2479),C=n(6451),g=[{label:"yellow",color:"#faae20"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"pink",color:"#E91E63"}];function b(){var e=Math.floor(Math.random()*g.length);return g[e].color}var j="ContactList_contactList__UFVCg",L="ContactList_contactItem__ppNQ5",N="ContactList_contactDelButton__eePj0",w="ContactList_nameIcon__5BSnI",k=function(){var e=(0,a.I0)(),t=(0,a.v9)(d.sortedContacts),n=(0,a.v9)(d.filteredNameContacts),o=(0,a.v9)(d.errorContacts),c=(0,a.v9)(d.isLoadingContacts);(0,r.useEffect)((function(){e((0,C.yF)())}),[e]);return c&&0===t.length?(0,m.jsx)(v,{text:"Loading..."}):o?(0,m.jsx)(v,{text:"Error (".concat(o,") while loading contacts. Please try again later.")}):(0,m.jsx)("div",{children:n.length>0&&t.length>0?(0,m.jsx)("ul",{className:j,children:n.map((function(t){var n=t.id,r=t.name,a=t.number;return(0,m.jsxs)("li",{className:L,children:[(0,m.jsxs)("p",{children:[(0,m.jsx)(_.BHb,{style:{color:b()},className:w}),r]}),(0,m.jsxs)("p",{children:[(0,m.jsx)(_.kq7,{}),a]}),(0,m.jsx)("button",{type:"button",onClick:function(){return function(t,n){e((0,C.GK)(t)),o?(0,x.x2)("Error while deleting contact"):(0,x.JQ)("Contact ".concat(n," deleted"))}(n,r)},className:N,children:"Delete"})]},n)}))}):(0,m.jsx)(v,{text:"No contacts in the list"})})},F=n(4403);function y(){var e=(0,a.I0)(),t=(0,a.v9)(d.sortedContacts),n=(0,a.v9)(d.errorContacts);return(0,m.jsxs)("form",{onSubmit:function(o){o.preventDefault();var r=o.target,a=r.name,c=r.number,s=t.find((function(e){return e.name.toLowerCase()===a.value.toLowerCase()}));a.value.trim()&&c.value.trim()?s?(0,x.K2)("".concat(a.value," is already in contacts!")):(e((0,C.uK)({name:a.value,number:c.value})),n?(0,x.x2)("Error adding contact."):((0,x.s$)("".concat(a.value," added to contacts!")),o.target.reset())):(0,x.x2)("Make sure all fields are completed!")},className:F.Z.form,children:[(0,m.jsx)("input",{type:"text",name:"name",placeholder:"Name",required:!0,className:F.Z.formInput}),(0,m.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number",required:!0,className:F.Z.formInput}),(0,m.jsx)("button",{type:"submit",children:"Add"})]})}var I=function(){return(0,m.jsxs)("div",{className:"wrapper",children:[(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(h,{}),(0,m.jsx)(k,{})]}),(0,m.jsx)(o.Z,{title:"Add new contact",children:(0,m.jsx)(y,{})})]})}},2479:function(e,t,n){n.d(t,{JQ:function(){return s},K2:function(){return a},s$:function(){return c},x2:function(){return r}});var o=n(9085);function r(e){o.Am.error(e,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}function a(e){o.Am.warn(e,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}function c(e){o.Am.success(e,{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}function s(e){o.Am.info(e,{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}},4403:function(e,t){t.Z={form:"ContactForm_form__dhl+T",formLabel:"ContactForm_formLabel__TSwxK",formInput:"ContactForm_formInput__GszVU",formLinkText:"ContactForm_formLinkText__l4wUu"}}}]);
//# sourceMappingURL=870.a02eefd0.chunk.js.map