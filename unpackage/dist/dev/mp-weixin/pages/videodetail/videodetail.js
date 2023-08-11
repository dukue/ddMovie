(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/videodetail/videodetail"],{

/***/ 117:
/*!**********************************************************************************************************!*\
  !*** C:/Users/dk/Documents/HBuilderProjects/Dmovie/main.js?{"page":"pages%2Fvideodetail%2Fvideodetail"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _videodetail = _interopRequireDefault(__webpack_require__(/*! ./pages/videodetail/videodetail.vue */ 118));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_videodetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 118:
/*!***************************************************************************************!*\
  !*** C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videodetail.vue?vue&type=template&id=5ec600a0&scoped=true& */ 119);
/* harmony import */ var _videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videodetail.vue?vue&type=script&lang=js& */ 121);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videodetail.vue?vue&type=style&index=0&id=5ec600a0&scoped=true&lang=css& */ 123);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ec600a0",
  null,
  false,
  _videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/videodetail/videodetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 119:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue?vue&type=template&id=5ec600a0&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videodetail.vue?vue&type=template&id=5ec600a0&scoped=true& */ 120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_template_id_5ec600a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 120:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue?vue&type=template&id=5ec600a0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNavBar: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 174))
    },
    tnToast: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-toast/tn-toast */ "tuniao-ui/components/tn-toast/tn-toast").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-toast/tn-toast.vue */ 241))
    },
    tnSticky: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-sticky/tn-sticky */ "tuniao-ui/components/tn-sticky/tn-sticky").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-sticky/tn-sticky.vue */ 276))
    },
    tnReadMore: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-read-more/tn-read-more */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-read-more/tn-read-more")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-read-more/tn-read-more.vue */ 281))
    },
    tnScrollList: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-scroll-list/tn-scroll-list */ "tuniao-ui/components/tn-scroll-list/tn-scroll-list").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-scroll-list/tn-scroll-list.vue */ 288))
    },
    tnPopup: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-popup/tn-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-popup/tn-popup")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-popup/tn-popup.vue */ 295))
    },
    tnGrid: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-grid/tn-grid */ "tuniao-ui/components/tn-grid/tn-grid").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-grid/tn-grid.vue */ 213))
    },
    tnGridItem: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-grid-item/tn-grid-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-grid-item/tn-grid-item")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-grid-item/tn-grid-item.vue */ 302))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.show = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 121:
/*!****************************************************************************************************************!*\
  !*** C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videodetail.vue?vue&type=script&lang=js& */ 122);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 122:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 85));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 87));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      title: '',
      content: "",
      col: 3,
      vid: 1,
      video: {},
      inputdata: [],
      show: false,
      playdata: [],
      Videosrc: "",
      itemActive: "",
      playTime: 0,
      allTime: 0,
      activeIndex: 0,
      collect: false,
      ctext: "收藏",
      cicon: "tn-icon-star",
      collectionName: 'collection',
      controlshow: true,
      shadow: {
        backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%,rgba(231, 231, 231, 0.5) 80%)",
        paddingTop: "200rpx",
        marginTop: "-200rpx"
      },
      //数据库名称，这里我推测应该是要和下面一行数据库路径中的名称保持一致，暂时没验证过不一致会怎样
      databaseName: 'vhistory',
      //数据库路径
      databasePath: '_doc/vhistory.db',
      //数据表名称
      tableName: 'history'
    };
  },
  methods: {
    controltag: function controltag() {
      if (this.controlshow == false) {
        this.controlshow = true;
      } else {
        this.controlshow = false;
      }
    },
    videoTimeUpdateEvent: function videoTimeUpdateEvent(e) {
      // 播放进度改变
      this.playTime = e.detail.currentTime;
      this.allTime = e.detail.duration;
    },
    autoNext: function autoNext() {
      this.activeIndex += 1;
      this.Videosrc = this.playdata[this.activeIndex].link;
      this.title = this.playdata[this.activeIndex].Num;
      this.playTime = 0;
      this.$refs.toast.show({
        title: '播放完毕',
        content: '即将跳转到下一集',
        icon: 'success',
        duration: 1500
      });
    },
    clickCollect: function clickCollect() {
      if (this.collect == false) {
        this.collection();
        this.$refs.toast.show({
          title: '',
          content: '收藏成功',
          icon: 'success',
          duration: 1000
        });
      } else {
        this.deleteDataByName();
        this.$refs.toast.show({
          title: '',
          content: '取消收藏',
          icon: 'success',
          duration: 1000
        });
      }
    },
    collection: function collection() {
      var _this = this;
      var key = "(name,url,vid)";
      var value = "'" + this.video.vName + "', '" + this.video.vPic + "', '" + this.vid + "'";
      var insertSql = "insert into " + this.collectionName + key + " values(" + value + ")";
      plus.sqlite.executeSql({
        // 注意这里 name 传参是数据库名，而不是表名
        name: this.databaseName,
        sql: insertSql,
        success: function success(res) {
          _this.log = '插入数据成功';
          _this.collect = true;
          _this.cicon = "tn-icon-star-fill yellowc";
          _this.ctext = "已收藏";
        },
        fail: function fail(e) {
          console.log(e);
          if (e.code === -1404) {
            _this.log = '插入失败,该数据已存在';
          } else {
            _this.log = '插入数据失败';
          }
        }
      });
    },
    getVideoByid: function getVideoByid(url, vid) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$myRequest({
                  url: url,
                  data: {
                    vid: vid
                  }
                });
              case 2:
                res = _context.sent;
                return _context.abrupt("return", res.data);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getUrlByid: function getUrlByid(url, vid) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$myRequest({
                  url: url,
                  data: {
                    vid: vid
                  }
                });
              case 2:
                res = _context2.sent;
                return _context2.abrupt("return", res.data);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handClick: function handClick(item, index) {
      this.Videosrc = item.link;
      this.title = item.Num;
      this.activeIndex = index;
      this.playTime = 0;
    },
    insertOneData: function insertOneData() {
      var _this4 = this;
      var key = "(name,url,year,vnum,vid,time,alltime,aindex)";
      var value = "'" + this.video.vName + "', '" + this.video.vPic + "', '" + this.video.vPublishyear + "', '" + this.title + "', '" + this.vid + "', '" + this.playTime + "', '" + this.allTime + "', '" + this.activeIndex + "'";
      var insertSql = "insert into " + this.tableName + key + " values(" + value + ")";
      plus.sqlite.executeSql({
        // 注意这里 name 传参是数据库名，而不是表名
        name: this.databaseName,
        sql: insertSql,
        success: function success(res) {
          _this4.log = '插入数据成功';
        },
        fail: function fail(e) {
          console.log(e);
          if (e.code === -1404) {
            _this4.log = '插入失败,该数据已存在';
          } else {
            _this4.log = '插入数据失败';
          }
        }
      });
    },
    deleteDataByName: function deleteDataByName() {
      var _this5 = this;
      var deleteDataByNameSql = "DELETE FROM ".concat(this.collectionName, " WHERE vid = '").concat(this.vid, "'");
      console.log(deleteDataByNameSql);
      plus.sqlite.executeSql({
        name: this.databaseName,
        sql: deleteDataByNameSql,
        success: function success(res) {
          console.log(res);
          _this5.collect = false;
          _this5.cicon = "tn-icon-star";
          _this5.ctext = "收藏";
        },
        fail: function fail(e) {
          console.log(e);
          _this5.log = '根据姓名删除数据失败';
        }
      });
    },
    updateOneData: function updateOneData() {
      var _this6 = this;
      var updatesql = "update " + this.tableName + " set time=" + this.playTime + "," + "vnum=" + "'" + this.title + "'" + "," + "alltime=" + this.allTime + "," + "aindex=" + this.activeIndex + " where vid=" + this.vid;
      plus.sqlite.executeSql({
        // 注意这里 name 传参是数据库名，而不是表名
        name: this.databaseName,
        sql: updatesql,
        success: function success(res) {
          _this6.log = '更新数据成功';
        },
        fail: function fail(e) {
          console.log(e);
          _this6.log = '更新失败,该数据已存在';
        }
      });
    },
    querryTargetData: function querryTargetData() {
      var _this7 = this;
      var key = "vid";
      var value = "'" + this.vid + "'";
      var selectSql = "select * from " + this.collectionName + " where " + key + " = " + value;
      // 注意这里使用的是 selectSql，不是 executeSql
      plus.sqlite.selectSql({
        name: this.databaseName,
        sql: selectSql,
        success: function success(res) {
          if (res.length !== 0) {
            _this7.collect = true;
            _this7.cicon = "tn-icon-star-fill yellowc";
            _this7.ctext = "已收藏";
          }
          _this7.log = '查询数据成功';
        },
        fail: function fail(e) {
          console.log(e);
          _this7.log = '查询数据失败';
        }
      });
    },
    querryHistoryData: function querryHistoryData() {
      var _this8 = this;
      var key = "vid";
      var value = this.vid;
      var selectSql = "select * from " + this.tableName + " where " + key + " = " + value;
      // 注意这里使用的是 selectSql，不是 executeSql
      plus.sqlite.selectSql({
        name: this.databaseName,
        sql: selectSql,
        success: function success(res) {
          if (res.length !== 0) {
            uni.showLoading({
              title: '定位到上次播放位置' + res[0].time
            });
            setTimeout(function () {
              uni.hideLoading();
            }, 2000);
            _this8.playTime = res[0].time;
            _this8.activeIndex = res[0].aindex;
            _this8.Videosrc = _this8.playdata[_this8.activeIndex].link;
            _this8.title = _this8.playdata[_this8.activeIndex].Num;
          }
          _this8.log = '查询数据成功';
        },
        fail: function fail(e) {
          console.log(e);
          _this8.log = '查询数据失败';
        }
      });
    }
  },
  onLoad: function onLoad(option) {
    var _this9 = this;
    this.vid = option.vid;
    this.getVideoByid('/video/selectVideoById', this.vid).then(function (result) {
      _this9.video = result;
    }), this.getVideoByid('/video/selectVideoContent', this.vid).then(function (result) {
      var regex = /<\/?(?:p|span)[^>]*>|style="[^"]*"|[^一-\u9fa5A-Za-z（。，！？；：“”‘’、）]/g;
      _this9.content = result.replace(regex, '').replace(/[A-Za-z]/g, '');
    }), this.getVideoByid('/video/selectPlayUrl', this.vid).then(function (result) {
      var oarray = result.replace(/(f|t)(s|p)m3u8#?/g, "").split("$");
      var narray = [];
      var larry = [];
      //获取去空新数组
      for (var i = 0; i < oarray.length; i++) {
        if (oarray[i] !== "" && oarray[i] !== null) {
          narray.push(oarray[i]);
        }
      }
      for (var _i = 0; _i < narray.length; _i += 2) {
        var Num = narray[_i];
        var link = narray[_i + 1];
        larry.push({
          Num: Num,
          link: link
        });
      }
      _this9.playdata = larry;
      _this9.Videosrc = larry[0].link;
      _this9.title = larry[0].Num;
      _this9.querryHistoryData();
    });
    this.querryTargetData();
  },
  onReady: function onReady() {
    var _this10 = this;
    this.$nextTick(function () {
      _this10.$refs.readMore.init();
    });
  },
  onUnload: function onUnload() {
    this.insertOneData();
    this.updateOneData();
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 123:
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue?vue&type=style&index=0&id=5ec600a0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videodetail.vue?vue&type=style&index=0&id=5ec600a0&scoped=true&lang=css& */ 124);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videodetail_vue_vue_type_style_index_0_id_5ec600a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 124:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dk/Documents/HBuilderProjects/Dmovie/pages/videodetail/videodetail.vue?vue&type=style&index=0&id=5ec600a0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[117,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/videodetail/videodetail.js.map