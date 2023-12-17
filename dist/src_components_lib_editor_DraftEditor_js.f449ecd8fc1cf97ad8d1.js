"use strict";
(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_lib_editor_DraftEditor_js"],{

/***/ "./src/components/lib/code/PrismCode.js":
/*!**********************************************!*\
  !*** ./src/components/lib/code/PrismCode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");



const PrismCode = ({
  code,
  language
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlightAll();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Code"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: `language-${language}`
  }, code)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrismCode);

/***/ }),

/***/ "./src/components/lib/editor/DraftEditor.js":
/*!**************************************************!*\
  !*** ./src/components/lib/editor/DraftEditor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-s3 */ "./node_modules/react-s3/index.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var _code_PrismCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../code/PrismCode */ "./src/components/lib/code/PrismCode.js");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var draft_js_prism__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draft-js-prism */ "./node_modules/draft-js-prism/lib/index.js");
/* harmony import */ var draft_js_prism__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draft_js_prism__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);










// const PrismDecorator = require('draft-js-prism');

// require('dotenv').config();
console.log('runtimeEnv--', ({"NODE_ENV":"development","REACT_APP_IMAGE_PATH":"https://lalalol-file.s3.amazonaws.com","REACT_APP_AWS_REGION":"ap-northeast-2","REACT_APP_S3_BUCKET_NAME":"lalalol-file","REACT_APP_CONTENTS_PASSWORD":"minju5543","REACT_APP_FACEBOOK_APP_ID":"265795955063722","REACT_APP_FACEBOOK_TEST_APP_ID":"425845582095607","REACT_APP_GOOGLE_AUTH_CLIENT_ID":"722716081092-t85diskdliut6naptid3aoiegru7d7eq.apps.googleusercontent.com","REACT_APP_HIDDEN_KEY":"passhidden","REACT_APP_AWS_ACCESS_KEY_ID":"AKIAU7IE5QFET2AGAR5C","REACT_APP_AWS_SECRET_ACCESS_KEY":"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"}));
const Prism = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
const decorator = new (draft_js_prism__WEBPACK_IMPORTED_MODULE_9___default())({
  // Provide your own instance of PrismJS
  prism: Prism,
  defaultSyntax: "javascript"
});
class DraftEditor extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    console.log('BoardDetail props--', props);
    const editorState = draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty(decorator);
    this.state = {
      // editorState: EditorState.createEmpty(),
      editorState: editorState,
      content: '',
      editContent: '',
      tempFileType: '',
      tempImageUrl: '',
      fileConfig: {}
    };
    this.handleChange = this.handleChange.bind(this);
    // this.uploadImageCallBack = this.uploadImageCallBack(this);
  }
  componentDidMount() {
    this.calcState(this.props.editContent);
    // if (process.env.NODE_ENV === "production") {
    //   this._getConfig();
    // } else {
    //   this.setState({
    //     fileConfig: {
    //       bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
    //       region: process.env.REACT_APP_AWS_REGION,
    //       accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    //       secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    //     }
    //   })
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState ', prevState);
    console.log('prevProps ', prevProps);
    // if(isEmpty(prevProps.editContent)) {
    //   // const editorState = EditorState.createEmpty(decorator)
    //   const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));  
    //   this.setState({
    //     editorState
    //   })

    // }
  }
  handleChange(e) {
    this.props.onTemperatureChange({
      content: `${e}`,
      image: this.state.tempImageUrl
    });
  }
  calcState(value) {
    if (value) {
      console.log(value);
      const blocksFromHTML = (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertFromHTML)(value);
      console.log('contentBlocks', blocksFromHTML.contentBlocks);
      const state = draft_js__WEBPACK_IMPORTED_MODULE_4__.ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      this.setState({
        editorState: draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createWithContent(state, this.decorator)
      });
    }
  }
  insertImageBlock() {
    const contentState = this.state.editorState.getCurrentContent();
    console.log("contentStateRaw", JSON.stringify((0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(contentState), null, 2));
    console.log('this.state.tempFileType--', this.state.tempFileType);
    const contentStateWithEntity = contentState.createEntity(this.state.tempFileType, "IMMUTABLE"
    // { src: this.props.tempImageUrl }
    );
    const newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.set(this.state.editorState, {
      currentContent: contentStateWithEntity
    });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const insertedEditorState = draft_js__WEBPACK_IMPORTED_MODULE_4__.AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
    this.setState({
      editorState: insertedEditorState
    });
  }
  _getConfig = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/fileconfig`);
    this.setState({
      fileConfig: res.data
    });
  };
  _getData = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/posts/detail?id=${this.props.postId}`);
    console.log('/api/posts/detail', res);
    if (res.data.result.length > 0) {
      this.setState({
        title: res.data.result[0].subject,
        content: res.data.result[0].content
      });
    }
  };
  onEditorStateChange = currentState => {
    // editorState에 값 설정
    this.setState({
      editorState: currentState
    });
    const htmlContent = draftjs_to_html__WEBPACK_IMPORTED_MODULE_5___default()((0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(currentState.getCurrentContent()));
    console.log('htmlContent', htmlContent);
    this.handleChange(htmlContent);
    const decorator = new (draft_js_prism__WEBPACK_IMPORTED_MODULE_9___default())({
      // Provide your own instance of PrismJS
      prism: Prism,
      defaultSyntax: "javascript"
    });
    draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.set(currentState, {
      decorator
    });
    // this.props.changedContent = draftToHtml(convertToRaw(currentState.getCurrentContent()));
  };
  editContent = content => {
    this.setState({
      editContent: content
    });
  };
  uploadImageCallBack = file => {
    console.log('file---', file);
    this.setState({
      tempFileType: file.type,
      tempImageUrl: file.name
    });
    // let awsconfig;
    // if (process.env.NODE_ENV === "production") {
    //   awsconfig = {
    //     bucketName: process.env.S3_BUCKET_NAME,
    //     region: process.env.AWS_REGION,
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //   }
    // } else {
    //   awsconfig = {
    //     bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
    //     region: process.env.REACT_APP_AWS_REGION,
    //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    //   }
    // }

    // this.insertImageBlock()
    // const awsconfig = this.state.fileConfig;
    const awsconfig = {
      bucketName: "lalalol-file",
      region: "ap-northeast-2",
      accessKeyId: "AKIAU7IE5QFET2AGAR5C",
      secretAccessKey: "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"
    };
    return new Promise((resolve, reject) => {
      console.log('resolve file---', file);
      (0,react_s3__WEBPACK_IMPORTED_MODULE_2__.uploadFile)(file, awsconfig).then(res => {
        console.log(res);
        resolve({
          data: {
            link: res.location
          }
        });
      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  };
  myBlockRenderer(contentBlock) {
    const type = contentBlock.getType();
    console.log('myBlockRenderer-', type);
    if (type === 'code') {
      return {
        component: MediaComponent,
        editable: true,
        props: {
          foo: 'bar'
        }
      };
    }
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        height: this.props.height
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3__.Editor, {
      toolbarHidden: this.props.toolbarHidden
      // 에디터와 툴바 모두에 적용되는 클래스
      ,
      wrapperClassName: "draft-wrapper"
      // 에디터 주변에 적용된 클래스
      ,
      editorClassName: "draft-editor"
      // 툴바 주위에 적용된 클래스
      ,
      toolbarClassName: "toolbar-class"
      // 툴바 설정
      ,
      toolbar: {
        // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
        inline: {
          inDropdown: false
        },
        list: {
          inDropdown: true
        },
        textAlign: {
          inDropdown: true
        },
        link: {
          inDropdown: true
        },
        history: {
          inDropdown: false
        },
        image: {
          uploadCallback: this.uploadImageCallBack,
          inputAccept: 'image/*',
          previewImage: true,
          urlEnabled: false,
          uploadEnabled: true,
          alt: {
            present: false,
            mandatory: false
          },
          defaultSize: {
            height: 'auto',
            width: 'auto'
          }
        }
      },
      placeholder: this.props.placeholder
      // 한국어 설정
      ,
      localization: {
        locale: 'ko'
      },
      spellCheck: true
      // 초기값 설정
      ,
      editorState: this.state.editorState
      // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
      ,
      onEditorStateChange: this.onEditorStateChange
      // blockRendererFn={this.myBlockRenderer}
    }));
  }
}
class MediaComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    console.log('MediaComponent', this.props);
    const {
      block,
      contentState
    } = this.props;
    const enKey = contentState.getLastCreatedEntityKey();
    // console.log('block.getEntityAt(0)', block.getEntityAt(0))
    console.log('block', block);
    // const data = contentState.getEntity(enKey).getData();
    // console.log('data', data)
    // const {foo} = this.props.blockProps;
    // const data = contentState.getEntity(block.getEntityAt(0)).getData();
    // Return a <figure> or some other content using this data.
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_code_PrismCode__WEBPACK_IMPORTED_MODULE_7__["default"], {
      code: block.text,
      language: "javascript"
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DraftEditor);

/***/ })

}]);
//# sourceMappingURL=src_components_lib_editor_DraftEditor_js.f449ecd8fc1cf97ad8d1.js.map