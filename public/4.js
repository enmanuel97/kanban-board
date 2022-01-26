(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layout/Layout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layout/Layout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard-layout",
  data: function data() {
    return {
      user: this.$store.state.auth.user
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    signOut: "auth/logout"
  })), {}, {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.signOut();

                _context.next = 3;
                return _this.$router.push({
                  name: "login"
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layout/Layout.vue?vue&type=template&id=bf429894&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layout/Layout.vue?vue&type=template&id=bf429894& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "p-2 mb-3 border-bottom" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "d-flex me-lg-auto align-items-center mb-2 mb-lg-0 text-dark text-decoration-none",
                attrs: { href: "/" },
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-auto w-28 lg:w-32",
                    attrs: {
                      width: "156",
                      height: "60",
                      viewBox: "0 0 147 41",
                      fill: "none",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M9.02785 32.9762C7.2012 32.9762 5.73754 32.5313 4.63687 31.6414C3.5362 30.7515 2.98586 29.1707 2.98586 26.8991V19.3115H0V15.5528H2.98586L3.51278 10.8808H7.48223V15.5528H12.1894V19.3115H7.48223V26.9342C7.48223 27.7773 7.65787 28.3628 8.00914 28.6906C8.38384 28.9951 9.01614 29.1473 9.90604 29.1473H12.084V32.9762H9.02785Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M21.3541 33.3978C19.8554 33.3978 18.6259 33.1636 17.6657 32.6952C16.7056 32.2034 15.9913 31.5594 15.5229 30.7632C15.0546 29.9669 14.8204 29.0888 14.8204 28.1286C14.8204 26.5127 15.4527 25.2013 16.7173 24.1943C17.9819 23.1873 19.8788 22.6838 22.408 22.6838H26.8341V22.2622C26.8341 21.0679 26.4945 20.1897 25.8154 19.6277C25.1362 19.0656 24.2932 18.7846 23.2862 18.7846C22.3729 18.7846 21.5766 19.0071 20.8975 19.452C20.2183 19.8736 19.7968 20.5059 19.6329 21.3489H15.2419C15.359 20.0843 15.7805 18.9837 16.5065 18.0469C17.2559 17.1102 18.2161 16.3959 19.387 15.9041C20.5579 15.3889 21.8694 15.1313 23.3213 15.1313C25.8037 15.1313 27.7591 15.7519 29.1877 16.9931C30.6162 18.2343 31.3304 19.9906 31.3304 22.2622V32.9762H27.5015L27.08 30.166C26.5648 31.1027 25.8388 31.8756 24.9021 32.4844C23.9887 33.0933 22.8061 33.3978 21.3541 33.3978ZM22.3729 29.885C23.6609 29.885 24.6562 29.4634 25.3587 28.6204C26.0847 27.7773 26.5414 26.7352 26.7287 25.494H22.8998C21.7054 25.494 20.8506 25.7165 20.3354 26.1614C19.8202 26.583 19.5626 27.1099 19.5626 27.7422C19.5626 28.4213 19.8202 28.9482 20.3354 29.3229C20.8506 29.6976 21.5298 29.885 22.3729 29.885Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M34.9187 32.9762V7.6842H39.4151V32.9762H34.9187Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M51.7726 33.3978C50.0163 33.3978 48.4589 33.0231 47.1006 32.2737C45.7424 31.5243 44.6768 30.4704 43.904 29.1122C43.1312 27.7539 42.7448 26.1849 42.7448 24.405C42.7448 22.6018 43.1195 20.9976 43.8689 19.5925C44.6417 18.1874 45.6955 17.0985 47.0304 16.3256C48.3887 15.5294 49.9811 15.1313 51.8078 15.1313C53.5173 15.1313 55.0278 15.506 56.3393 16.2554C57.6507 17.0048 58.6694 18.0352 59.3954 19.3466C60.1448 20.6347 60.5195 22.0749 60.5195 23.6674C60.5195 23.925 60.5078 24.1943 60.4843 24.4753C60.4843 24.7563 60.4726 25.0491 60.4492 25.3535H47.206C47.2997 26.7118 47.7681 27.7773 48.6111 28.5501C49.4776 29.3229 50.5198 29.7093 51.7375 29.7093C52.6508 29.7093 53.4119 29.5103 54.0208 29.1122C54.6531 28.6906 55.1215 28.152 55.4259 27.4963H59.9926C59.6647 28.597 59.1144 29.604 58.3415 30.5173C57.5922 31.4072 56.6554 32.1097 55.5313 32.625C54.4307 33.1402 53.1778 33.3978 51.7726 33.3978ZM51.8078 18.7846C50.7071 18.7846 49.7352 19.1007 48.8922 19.733C48.0491 20.3419 47.5105 21.2787 47.2763 22.5433H55.9529C55.8826 21.3958 55.4611 20.4824 54.6883 19.8033C53.9154 19.1242 52.9553 18.7846 51.8078 18.7846Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M63.5986 32.9762V15.5528H67.5681L67.9194 18.5036C68.458 17.4732 69.2308 16.6535 70.2378 16.0446C71.2682 15.4357 72.4743 15.1313 73.856 15.1313C76.0105 15.1313 77.6849 15.8104 78.8792 17.1687C80.0736 18.527 80.6708 20.5176 80.6708 23.1404V32.9762H76.1744V23.562C76.1744 22.0632 75.87 20.9157 75.2611 20.1195C74.6522 19.3232 73.7037 18.9251 72.4157 18.9251C71.1511 18.9251 70.109 19.3701 69.2893 20.26C68.4931 21.1499 68.095 22.3911 68.095 23.9835V32.9762H63.5986Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M92.031 32.9762C90.2044 32.9762 88.7407 32.5313 87.6401 31.6414C86.5394 30.7515 85.9891 29.1707 85.9891 26.8991V19.3115H83.0032V15.5528H85.9891L86.516 10.8808H90.4854V15.5528H95.1926V19.3115H90.4854V26.9342C90.4854 27.7773 90.6611 28.3628 91.0123 28.6906C91.387 28.9951 92.0193 29.1473 92.9092 29.1473H95.0872V32.9762H92.031Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M111.038 32.9322V7.64014H115.534V32.9322H111.038Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M121.604 40.6603L125.644 31.7729H124.59L117.81 15.5088H122.693L127.576 27.7684L132.669 15.5088H137.447L126.382 40.6603H121.604Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M101.071 40.6165C100.465 40.6165 99.9736 40.1251 99.9736 39.5188V1.09774C99.9736 0.491476 100.465 0 101.071 0H108.207C108.51 0 108.756 0.245738 108.756 0.548872V3.10442C108.756 3.40756 108.51 3.65329 108.207 3.65329H104.738C104.435 3.65329 104.189 3.89903 104.189 4.20217V36.3792C104.189 36.6824 104.435 36.9281 104.738 36.9281H108.207C108.51 36.9281 108.756 37.1739 108.756 37.477V40.0677C108.756 40.3708 108.51 40.6165 108.207 40.6165H101.071Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M145.527 15.3706C145.831 15.3694 146.078 15.6155 146.078 15.9195L146.078 39.5187C146.078 40.125 145.587 40.6165 144.98 40.6165L137.845 40.6164C137.542 40.6164 137.296 40.3707 137.296 40.0676L137.296 37.512C137.296 37.2089 137.542 36.9632 137.845 36.9632L141.314 36.9632C141.617 36.9632 141.863 36.7174 141.863 36.4143L141.863 15.9325C141.863 15.6302 142.107 15.3849 142.409 15.3836L145.527 15.3706Z",
                        fill: "#4E0FFF",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M145.527 8.77966C145.831 8.78092 146.078 8.53482 146.078 8.23079L146.078 1.09775C146.078 0.491478 145.587 3.69875e-07 144.98 8.26139e-07L137.845 6.19604e-06C137.542 6.42417e-06 137.296 0.245745 137.296 0.548878L137.296 3.10443C137.296 3.40756 137.542 3.6533 137.845 3.6533L141.314 3.65329C141.617 3.65329 141.863 3.89903 141.863 4.20217L141.863 8.2178C141.863 8.52004 142.107 8.76541 142.409 8.76667L145.527 8.77966Z",
                        fill: "#FF4343",
                      },
                    }),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown text-end" }, [
              _c(
                "a",
                {
                  staticClass:
                    "d-block link-dark text-decoration-none dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "dropdownUser1",
                    "data-bs-toggle": "dropdown",
                    "aria-expanded": "false",
                  },
                },
                [
                  _c("span", { staticStyle: { "padding-right": "5px" } }, [
                    _vm._v(_vm._s(_vm.user.name)),
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "rounded-circle",
                    attrs: {
                      src: "https://github.com/mdo.png",
                      alt: "mdo",
                      width: "32",
                      height: "32",
                    },
                  }),
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass: "dropdown-menu text-small",
                  attrs: { "aria-labelledby": "dropdownUser1" },
                },
                [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "javascript:void(0)" },
                        on: { click: _vm.logout },
                      },
                      [_vm._v("Sign out")]
                    ),
                  ]),
                ]
              ),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("main", { staticClass: "mt-3" }, [_c("router-view")], 1),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/layout/Layout.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/layout/Layout.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_bf429894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=bf429894& */ "./resources/js/pages/layout/Layout.vue?vue&type=template&id=bf429894&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/pages/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_bf429894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_bf429894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layout/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layout/Layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/layout/Layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layout/Layout.vue?vue&type=template&id=bf429894&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/layout/Layout.vue?vue&type=template&id=bf429894& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_bf429894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=bf429894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layout/Layout.vue?vue&type=template&id=bf429894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_bf429894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_bf429894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);