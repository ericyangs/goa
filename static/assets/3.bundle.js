(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{19:function(t,a,e){"use strict";e.d(a,"a",function(){return r}),e.d(a,"b",function(){return n});var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm text-center"},[e("form",{attrs:{action:"",method:"post"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.xsrf,expression:"xsrf"}],attrs:{type:"hidden",name:"_xsrf"},domProps:{value:t.xsrf},on:{input:function(a){a.target.composing||(t.xsrf=a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.avatar,expression:"avatar"}],attrs:{type:"hidden",name:"avatar"},domProps:{value:t.avatar},on:{input:function(a){a.target.composing||(t.avatar=a.target.value)}}}),t._v(" "),e("p",{staticClass:"mb-3"},[t.avatar?e("img",{staticClass:"img-thumbnail",attrs:{width:"120",height:"120",src:t.avatar}}):t._e()]),t._v(" "),t._m(0)]),t._v(" "),e("avatar-cropper",{attrs:{trigger:"#pick-avatar","upload-url":"/member/upload/image"},on:{uploaded:t.handleUploaded}})],1)])},n=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-group mb-3",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"pick-avatar"}},[this._v("选择jpg,gif,png格式的图片")]),this._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[this._v("保存")])])}];r._withStripped=!0},23:function(t,a,e){"use strict";e.r(a);var r=e(19),n=e(6);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);var i=e(1),o=Object(i.a)(n.default,r.a,r.b,!1,null,null,null);o.options.__file="views/assets/components/avatar.vue",a.default=o.exports},6:function(t,a,e){"use strict";e.r(a);var r=e(7),n=e.n(r);for(var s in r)"default"!==s&&function(t){e.d(a,t,function(){return r[t]})}(s);a.default=n.a},7:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={created:function(){this.avatar=this.userAvatar},props:["userAvatar","xsrf"],components:{AvatarCropper:function(t){return t&&t.__esModule?t:{default:t}}(e(20)).default},data:function(){return{avatar:void 0}},methods:{handleUploaded:function(t){this.avatar=t.data.path}}};a.default=r}}]);