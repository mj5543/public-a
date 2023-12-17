"use strict";
(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_lib_editor_ToastUIEditor_js"],{

/***/ "./src/components/lib/editor/ToastUIEditor.js":
/*!****************************************************!*\
  !*** ./src/components/lib/editor/ToastUIEditor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @toast-ui/editor/dist/toastui-editor.css */ "./node_modules/@toast-ui/editor/dist/toastui-editor.css");
/* harmony import */ var _toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @toast-ui/react-editor */ "./node_modules/@toast-ui/react-editor/dist/esm/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prism-tomorrow.css */ "./src/components/lib/editor/prism-tomorrow.css");
/* harmony import */ var _toast_ui_editor_plugin_code_syntax_highlight_dist_toastui_editor_plugin_code_syntax_highlight_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css */ "./node_modules/@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css");
/* harmony import */ var _toast_ui_editor_plugin_code_syntax_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @toast-ui/editor-plugin-code-syntax-highlight */ "./node_modules/@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.js");
/* harmony import */ var _toast_ui_editor_plugin_code_syntax_highlight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_editor_plugin_code_syntax_highlight__WEBPACK_IMPORTED_MODULE_6__);




// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
// import 'prismjs/themes/prism.css';
// import "prismjs/themes/prism-tomorrow.css";



class ToastUIEditor extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.onChanged = this.onChanged.bind(this);
  }
  componentDidMount() {
    this._setEditorHTML(this.props.editContent);
  }
  editorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  _setEditorHTML(html) {
    this.editorRef.current.getInstance().setHTML(html);
  }
  onChanged() {
    this.props.onTemperatureChange({
      content: `${this.editorRef.current.getInstance().getHTML()}`
    });
    this.editorRef.current.getInstance().moveCursorToEnd();
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_2__.Editor, {
      previewStyle: "vertical",
      usageStatistics: false,
      height: "calc(100vh - 150px)",
      initialEditType: "wysiwyg",
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694..",
      ref: this.editorRef
      // initialValue={this.props.editContent}
      ,
      plugins: [[(_toast_ui_editor_plugin_code_syntax_highlight__WEBPACK_IMPORTED_MODULE_6___default()), {
        highlighter: (prismjs__WEBPACK_IMPORTED_MODULE_3___default())
      }]],
      onChange: this.onChanged
      // hooks={{
      //   addImageBlobHook: async (blob, callback) => {
      //     const upload = await this.uploadImage(blob);
      //     callback(upload, "alt text");
      //     return false;
      //   }
      // }}
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastUIEditor);

/***/ }),

/***/ "./src/components/lib/editor/prism-tomorrow.css":
/*!******************************************************!*\
  !*** ./src/components/lib/editor/prism-tomorrow.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1702810515250
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

}]);
//# sourceMappingURL=src_components_lib_editor_ToastUIEditor_js.509c67e43e5fe496a5ee.js.map