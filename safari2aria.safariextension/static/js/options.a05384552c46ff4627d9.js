webpackJsonp([2],{100:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},101:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},102:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":e.isLink||!!e.link,"weui-cell_access":e.isLink||!!e.link,"vux-cell-no-border-intent":!e.borderIntent,"vux-cell-disabled":e.disabled},on:{click:e.onClick}},[i("div",{staticClass:"weui-cell__hd"},[e._t("icon")],2),e._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===e.primary&&"left"!==e.valueAlign}},[i("p",[e.title||e.hasTitleSlot?i("label",{staticClass:"vux-label",style:e.getLabelStyles()},[e._t("title",[e._v(e._s(e.title))])],2):e._e(),e._v(" "),e._t("after-title")],2),e._v(" "),i("inline-desc",[e._t("inline-desc",[e._v(e._s(e.inlineDesc))])],2)],1),e._v(" "),i("div",{staticClass:"weui-cell__ft",class:e.valueClass},[e._t("value"),e._v(" "),e._t("default",[e._v(e._s(e.value))]),e._v(" "),e.isLoading?i("i",{staticClass:"weui-loading"}):e._e()],2),e._v(" "),e._t("child")],2)},staticRenderFns:[]}},103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-check-icon",on:{click:e.updateValue}},[i("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===e.type&&e.value===e.val,expression:"type === 'default' && value === val"}],attrs:{type:"success"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===e.type&&e.value===e.val,expression:"type === 'plain' && value === val"}],attrs:{type:"success_circle"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:e.value!==e.val,expression:"value !== val"}],attrs:{type:"circle"}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"radio",attrs:{type:"radio"},domProps:{value:e.val,checked:e._q(e.value,e.val)},on:{__c:function(t){e.value=e.val}}}),e._v(" "),i("span",[e._t("default")],2)],1)},staticRenderFns:[]}},104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[i("div",{staticClass:"weui-cell__bd"},[i("label",{staticClass:"weui-label",style:e.labelStyle,domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],1),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{__c:function(t){var i=e.currentValue,n=t.target,a=!!n.checked;if(Array.isArray(i)){var r=e._i(i,null);a?r<0&&(e.currentValue=i.concat(null)):r>-1&&(e.currentValue=i.slice(0,r).concat(i.slice(r+1)))}else e.currentValue=a}}})])])},staticRenderFns:[]}},105:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},106:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-check-icon",on:{click:e.updateValue}},[i("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===e.type&&e.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===e.type&&e.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!e.value,expression:"!value"}],attrs:{type:"circle"}}),e._v(" "),i("span",[e._t("default")],2)],1)},staticRenderFns:[]}},107:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":e.showWarn}},[i("div",{staticClass:"weui-cell__hd"},[e.hasRestrictedLabel?i("div",{style:e.labelStyles},[e._t("restricted-label")],2):e._e(),e._v(" "),e._t("label",[e.title?i("label",{staticClass:"weui-label",style:{width:e.labelWidth||e.$parent.labelWidth||e.labelWidthComputed,textAlign:e.$parent.labelAlign,marginRight:e.$parent.labelMarginRight},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()])],2),e._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:e.placeholderAlign?"vux-x-input-placeholder-"+e.placeholderAlign:""},[e.type&&"text"!==e.type?e._e():i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"text",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.onBlur,keyup:e.onKeyUp,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),"number"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"number",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:[e.onBlur,function(t){e.$forceUpdate()}],keyup:e.onKeyUp,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"email"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"email",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.onBlur,keyup:e.onKeyUp,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"password"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"password",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.onBlur,keyup:e.onKeyUp,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"tel"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"tel",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.onBlur,keyup:e.onKeyUp,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e()]),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!e.equalWith&&e.showClear&&e.currentValue&&!e.readonly&&!e.disabled,expression:"!equalWith && showClear && currentValue && !readonly && !disabled"}],attrs:{type:"clear"},nativeOn:{click:function(t){e.clear(t)}}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:e.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:e.valid?"":e.firstError}}),e._v(" "),!e.novalidate&&e.hasLengthEqual&&e.dirty&&e.equalWith&&!e.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"}}):e._e(),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!e.novalidate&&e.equalWith&&e.equalWith===e.currentValue&&e.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:e.novalidate&&"success"===e.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:e.novalidate&&"error"===e.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},108:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-label-desc"},[e._t("default")],2)},staticRenderFns:[]}},109:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{class:[e.className,e.isMsg?"weui-icon_msg":""]})},staticRenderFns:[]}},110:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("div",{staticClass:"weui-cells__title",style:{color:e.titleColor},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!e.title},style:{marginTop:"number"==typeof e.gutter?e.gutter+"px":e.gutter}},[e._t("after-title"),e._v(" "),e._t("default")],2)])},staticRenderFns:[]}},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell vux-x-textarea"},[i("div",{staticClass:"weui-cell__hd"},[e.hasRestrictedLabel?i("div",{style:e.labelStyles},[e._t("restricted-label")],2):e._e(),e._v(" "),e._t("label",[e.title?i("label",{staticClass:"weui-label",style:{width:e.$parent.labelWidth||e.labelWidth+"em",textAlign:e.$parent.labelAlign,marginRight:e.$parent.labelMarginRight},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()])],2),e._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"textarea",staticClass:"weui-textarea",style:e.textareaStyle,attrs:{autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,placeholder:e.placeholder,readonly:e.readonly,name:e.name,rows:e.rows,cols:e.cols,maxlength:e.max},domProps:{value:e.currentValue},on:{focus:function(t){e.$emit("on-focus")},blur:function(t){e.$emit("on-blur")},input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showCounter&&e.max,expression:"showCounter && max"}],staticClass:"weui-textarea-counter",on:{click:e.focus}},[i("span",[e._v(e._s(e.count))]),e._v("/"+e._s(e.max)+"\n    ")])])])},staticRenderFns:[]}},112:function(e,t,i){i(89);var n=i(0)(i(69),i(103),null,null);e.exports=n.exports},13:function(e,t,i){i(94);var n=i(0)(i(63),i(109),null,null);e.exports=n.exports},147:function(e,t,i){"use strict";var n=i(14),a=i(144),r=i(325),l=i.n(r);n.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"options",component:l.a}]})},153:function(e,t,i){i(234);var n=i(0)(i(165),i(312),null,null);e.exports=n.exports},158:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(14),a=i(153),r=i.n(a),l=i(147);n.a.config.productionTip=!1,new n.a({router:l.a,render:function(e){return e(r.a)}}).$mount("#app-box")},165:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},166:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(35),a=i.n(n),r=i(18),l=i.n(r),s=i(112),o=i.n(s),u=i(31),c=i.n(u),d=i(29),p=i.n(d),h=i(32),f=i.n(h),v=i(34),m=i.n(v),_=i(26),x=i.n(_),b=i(28),g=i.n(b),y=i(27),w=i.n(y),k=i(30),C=i.n(k),S=i(33),V=i.n(S),$=i(25),W=i.n($);t.default={components:{XHeader:c.a,Group:p.a,XInput:f.a,XTextarea:m.a,CheckIcon:x.a,Flexbox:g.a,FlexboxItem:w.a,XButton:C.a,XSwitch:V.a,Cell:W.a,Radio:o.a},data:function(){var e=localStorage.getItem("safari2aria");try{e=JSON.parse(e||"{}")}catch(t){e={}}return l()({enableCookie:!0,userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4",catchIframe:!0,enableTypefiles:!0,baidupanAutoRestart:!1,baidupanLimitSpeed:1e3,defaultRpcIndex:0,refreshTime:5,filetypes:"mp4 flv m4v asf mpeg mkv mpg divx div 3gp wmv avi mov vob ogg ogv webm flac m4a mp3 aac wma wav ape exe app pkg zip rar dmg iso 7z jpg png jpeg tiff gif bmp pdf epub pages pptx keynote rtf doc docx",rpcList:[{name:"localhost",push:!1,url:"http://127.0.0.1:6800/jsonrpc"}]},e)},methods:{addRpc:function(){this.rpcList.push({name:"localhost",push:!1,url:"http://127.0.0.1:6800/jsonrpc"})},delRpc:function(e){this.rpcList.splice(e,1)},save:function(){var e=JSON.parse(a()(this.$data));safari.self.tab.dispatchMessage("updateSafari2Aria",e),window.close()}}}},234:function(e,t){},237:function(e,t){},25:function(e,t,i){i(88);var n=i(0)(i(58),i(102),null,null);e.exports=n.exports},26:function(e,t,i){i(91);var n=i(0)(i(59),i(106),null,null);e.exports=n.exports},27:function(e,t,i){var n=i(0)(i(60),i(105),null,null);e.exports=n.exports},28:function(e,t,i){i(86);var n=i(0)(i(61),i(100),null,null);e.exports=n.exports},29:function(e,t,i){i(95);var n=i(0)(i(62),i(110),null,null);e.exports=n.exports},30:function(e,t,i){i(85);var n=i(0)(i(64),i(99),null,null);e.exports=n.exports},31:function(e,t,i){i(87);var n=i(0)(i(65),i(101),null,null);e.exports=n.exports},312:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},315:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("x-header",{attrs:{"left-options":{showBack:!1}}},[e._v("设置")]),e._v(" "),i("group",[i("x-switch",{attrs:{title:"自动拦截"},model:{value:e.enableTypefiles,callback:function(t){e.enableTypefiles=t},expression:"enableTypefiles"}}),e._v(" "),i("x-textarea",{directives:[{name:"show",rawName:"v-show",value:e.enableTypefiles,expression:"enableTypefiles"}],attrs:{title:"文件类型"},model:{value:e.filetypes,callback:function(t){e.filetypes=t},expression:"filetypes"}})],1),e._v(" "),i("group",[i("cell",{attrs:{title:"aria2服务器地址:"}},[i("x-button",{attrs:{mini:""},nativeOn:{click:function(t){e.addRpc(t)}}},[e._v("增加")])],1),e._v(" "),i("div",{staticClass:"cell rpcList"},[i("flexbox",{staticClass:"header"},[i("flexbox-item",{attrs:{span:.05}},[e._v("\n          默认\n        ")]),e._v(" "),i("flexbox-item",{attrs:{span:.05}},[e._v("\n          推送\n        ")]),e._v(" "),i("flexbox-item",{attrs:{span:.25}},[e._v("\n          名称\n        ")]),e._v(" "),i("flexbox-item",[e._v("\n          地址\n        ")]),e._v(" "),i("div",{staticClass:"action"},[e._v("操作")])],1),e._v(" "),e._l(e.rpcList,function(t,n){return i("flexbox",{key:n},[i("flexbox-item",{attrs:{span:.05}},[i("Radio",{attrs:{val:n,value:e.defaultRpcIndex},on:{"update:value":function(t){e.defaultRpcIndex=t}}})],1),e._v(" "),i("flexbox-item",{attrs:{span:.05}},[i("check-icon",{attrs:{value:t.push},on:{"update:value":function(e){t.push=e}}})],1),e._v(" "),i("flexbox-item",{staticClass:"name",attrs:{span:.2}},[i("x-input",{attrs:{"show-clear":!1},model:{value:t.name,callback:function(e){t.name=e},expression:"rpc.name"}})],1),e._v(" "),i("flexbox-item",{staticClass:"url"},[i("x-input",{attrs:{"show-clear":!1},model:{value:t.url,callback:function(e){t.url=e},expression:"rpc.url"}})],1),e._v(" "),e.rpcList.length>1?i("x-button",{attrs:{mini:""},nativeOn:{click:function(t){e.delRpc(n)}}},[e._v("删除")]):e._e()],1)})],2)],1),e._v(" "),i("group",[i("x-switch",{attrs:{title:"启用cookie"},model:{value:e.enableCookie,callback:function(t){e.enableCookie=t},expression:"enableCookie"}}),e._v(" "),i("x-switch",{attrs:{title:"启用iframe拦截"},model:{value:e.catchIframe,callback:function(t){e.catchIframe=t},expression:"catchIframe"}}),e._v(" "),i("x-textarea",{attrs:{title:"user-agent","show-clear":!1},model:{value:e.userAgent,callback:function(t){e.userAgent=t},expression:"userAgent"}})],1),e._v(" "),i("group",[i("x-input",{attrs:{title:"列表刷新间隔",type:"number","show-clear":!1},model:{value:e.refreshTime,callback:function(t){e.refreshTime=t},expression:"refreshTime"}},[i("span",{slot:"right"},[e._v("秒")])])],1),e._v(" "),i("group",[i("x-button",{nativeOn:{click:function(t){e.save(e.index)}}},[e._v("保存")])],1)],1)},staticRenderFns:[]}},32:function(e,t,i){i(92);var n=i(0)(i(66),i(107),null,null);e.exports=n.exports},325:function(e,t,i){i(237);var n=i(0)(i(166),i(315),null,null);e.exports=n.exports},33:function(e,t,i){i(90);var n=i(0)(i(67),i(104),null,null);e.exports=n.exports},34:function(e,t,i){i(96);var n=i(0)(i(68),i(111),null,null);e.exports=n.exports},58:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(6),a=i.n(n),r=i(19),l=i(116);t.default={components:{InlineDesc:a.a},props:i.i(l.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&i.i(r.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},59:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),a=i.n(n);t.default={components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}},6:function(e,t,i){i(93);var n=i(0)(null,i(108),null,null);e.exports=n.exports},60:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];t.default={props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={};if(e["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var t=0;t<n.length;t++)e[n[t]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:0}}}},61:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},62:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},63:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}},64:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(19);t.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:String},methods:{onClick:function(){!this.disabled&&i.i(n.a)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},65:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(98),a=i.n(n);t.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},66:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(37),a=i.n(n),r=i(36),l=i(13),s=i.n(l),o=i(6),u=i.n(o),c=i(141),d=i.n(c),p=i(142),h=i.n(p),f=i(117),v={email:{fn:d.a,msg:"邮箱格式"},"china-mobile":{fn:function(e){return h()(e,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(e){return e.length>=2&&e.length<=6},msg:"中文姓名"}};t.default={created:function(){var e=this;this.currentValue=this.value||"",this.title||this.placeholder||this.currentValue||console.warn("no title and no placeholder?"),this.required&&!this.currentValue&&(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=i.i(f.a)(function(){e.$emit("on-change",e.currentValue)},this.debounce))},mounted:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel()},mixins:[r.a],components:{Icon:s.a,InlineDesc:u.a},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String},computed:{labelStyles:function(){return{width:this.labelWidthComputed||this.$parent.labelWidth||this.labelWidthComputed,textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var e=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(e<10)return e+"em"},hasErrors:function(){return a()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},methods:{reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=e,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus()},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(){this.$emit("on-focus",this.currentValue)},onBlur:function(){this.setTouched(),this.validate(),this.$emit("on-blur",this.currentValue)},onKeyUp:function(e){"Enter"===e.key&&(e.target.blur(),this.$emit("on-enter",this.currentValue))},getError:function(){var e=a()(this.errors)[0];this.firstError=this.errors[e]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var e=v[this.isType];if(e){if(this.valid=e.fn(this.currentValue),!this.valid)return void(this.errors.format=e.msg+"格式不对哦~");delete this.errors.format}}if("function"==typeof this.isType){var t=this.isType(this.currentValue);if(this.valid=t.valid,!this.valid)return this.errors.format=t.msg,this.forceShowError=!0,void(this.firstError||this.getError());delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void(this.firstError||this.getError());delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))}},data:function(){return{hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:""}},watch:{valid:function(){this.getError()},value:function(e){this.currentValue=e},equalWith:function(e){e&&this.equalWith?(e.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(e){!this.equalWith&&e&&this.validateEqual(),e&&this.equalWith?(e.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate(),this.$emit("input",e),this._debounce?this._debounce():this.$emit("on-change",e)}}}},67:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(6),a=i.n(n);t.default={components:{InlineDesc:a.a},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title);return{display:"block",width:Math.min(e?5:this.title.length+1,14)+"em"}}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number]},data:function(){return{currentValue:this.value}},watch:{currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)},value:function(e){this.currentValue=e}}}},68:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(36),a=i(6),r=i.n(a),l=i(114),s=i.n(l);t.default={minxins:[n.a],mounted:function(){var e=this;this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$nextTick(function(){e.autosize&&e.bindAutosize()})},components:{InlineDesc:r.a},props:{title:String,inlineDesc:String,showCounter:{type:Boolean,default:!0},max:Number,value:String,name:String,placeholder:String,readonly:Boolean,rows:{type:Number,default:3},cols:{type:Number,default:30},height:Number,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},autosize:Boolean},created:function(){this.currentValue=this.value},watch:{autosize:function(e){this.unbindAutosize(),e&&this.bindAutosize()},value:function(e){this.currentValue=e},currentValue:function(e){this.max&&e&&e.length>this.max&&(this.currentValue=e.slice(0,this.max)),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)}},data:function(){return{hasRestrictedLabel:!1,currentValue:""}},computed:{count:function(){var e=0;return this.currentValue&&(e=this.currentValue.replace(/\n/g,"aa").length),e>this.max?this.max:e},textareaStyle:function(){if(this.height)return{height:this.height+"px"}},labelStyles:function(){return{width:this.$parent.labelWidth||this.labelWidth+"em",textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1}},methods:{bindAutosize:function(){s()(this.$refs.textarea)},unbindAutosize:function(){s.a.destroy(this.$refs.textarea)},focus:function(){this.$refs.textarea.focus()}},beforeDestroy:function(){this.unbindAutosize()}}},69:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),a=i.n(n);t.default={components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",this.val)}},props:{value:[String,Number],val:[String,Number],type:{type:String,default:"default"}}}},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){},91:function(e,t){},92:function(e,t){},93:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t){},99:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"weui-btn",class:e.classes,attrs:{disabled:e.disabled,type:e.actionType},on:{click:e.onClick}},[e.showLoading?i("i",{staticClass:"weui-loading"}):e._e(),e._v(" "),e._t("default",[e._v(e._s(e.text))])],2)},staticRenderFns:[]}}},[158]);