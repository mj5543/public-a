(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_posts_PostList_js"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxiosConfig: () => (/* reexport module object */ _config__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   PostsApi: () => (/* reexport default from dynamic */ _posts__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ "./src/api/posts.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_posts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/api/config.js");




/***/ }),

/***/ "./src/api/posts.js":
/*!**************************!*\
  !*** ./src/api/posts.js ***!
  \**************************/
/***/ ((module) => {

const CATEGOTY_POST_LIST = '/api/posts/category-list';
const POST_DETAIL = '/api/posts/detail';
const POST_LIST = '/api/posts/list';
const DELETE_POST = '/api/posts/delete';
const REGIST_POST = '/api/posts/regist';
const UPDATE_POST = '/api/posts/update';
const MEMBER_PREVIEW_LIST = '/api/posts/list-members-preview';
const PREVIEW_LIST = '/api/posts/list-preview';
const ACTIVITIES_POST = '/api/posts/activities';
const COMMENT_LIST = '/api/posts/comment-list';
const COMMENT_REGIST = '/api/posts/comment-regist';
const COMMNET_UPDATE = '/api/posts/comment-update';
const COMMENT_DELETE = '/api/comment/delete';
const api = {
  POST_LIST,
  POST_DETAIL,
  DELETE_POST,
  REGIST_POST,
  UPDATE_POST,
  MEMBER_PREVIEW_LIST,
  PREVIEW_LIST,
  ACTIVITIES_POST,
  COMMENT_LIST,
  COMMENT_REGIST,
  COMMNET_UPDATE,
  COMMENT_DELETE,
  CATEGOTY_POST_LIST
};
module.exports = api;

/***/ }),

/***/ "./src/components/posts/CategorySeletctList.js":
/*!*****************************************************!*\
  !*** ./src/components/posts/CategorySeletctList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);





const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  }
}));
const CategorySeletctList = props => {
  console.log('CategorySeletctList--', props);
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    depth1: '',
    depth2: '',
    depth1List: [],
    depth2List: []
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(props.categoryGroups)) {
      return;
    }
    let targetCode = props.groupType;
    let depth2 = '';
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(props.location.state)) {
      targetCode = props.location.state;
      depth2 = props.groupType;
    }
    let findCode = targetCode;
    if (targetCode instanceof Object) {
      findCode = depth2;
    }
    let targetCategory = props.categoryGroups.category.find(d => d.node_code === findCode);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(targetCategory)) {
      props.categoryGroups.category.forEach(item => {
        item.sub.forEach(d => {
          if (d.node_code === findCode) {
            targetCategory = item;
          }
        });
      });
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(targetCategory)) {
      return;
    }
    setState({
      ...state,
      depth1List: props.categoryGroups.category,
      depth1: targetCategory.node_code,
      depth2List: targetCategory.sub,
      depth2
    });
  }, [props.groupType]);
  const handleChange = event => {
    const name = event.target.name;
    const targetCategory = props.categoryGroups.category.find(d => d.node_code === event.target.value);
    let depth2 = '';
    let sub = state.depth2List;
    let cbCode = event.target.value;
    if (name === 'depth1') {
      sub = targetCategory.sub;
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(sub)) {
        depth2 = sub[0].node_code;
      }
    } else {
      depth2 = event.target.value;
    }
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(depth2)) {
      cbCode = depth2;
    }
    setState({
      ...state,
      [name]: event.target.value,
      depth2List: sub,
      depth2
    });
    if (props.hasOwnProperty('changedGroupCB')) {
      // let cbCode = state.depth1;
      // if(!isEmpty(state.depth2)) {
      //   cbCode = state.depth2
      // }
      props.changedGroupCB(cbCode);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '50%',
      float: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.formControl,
    disabled: props.isDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: state.depth1,
    onChange: handleChange,
    name: "depth1",
    className: classes.selectEmpty,
    inputProps: {
      'aria-label': 'depth1'
    }
  }, state.depth1List.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: index,
    value: item.node_code
  }, item.node_nm)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.formControl,
    disabled: props.isDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: state.depth2,
    onChange: handleChange,
    name: "depth2",
    className: classes.selectEmpty,
    inputProps: {
      'aria-label': 'depth2'
    }
  }, state.depth2List.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: index,
    value: item.node_code
  }, item.node_nm)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySeletctList);

/***/ }),

/***/ "./src/components/posts/PostList.js":
/*!******************************************!*\
  !*** ./src/components/posts/PostList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CategorySeletctList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategorySeletctList */ "./src/components/posts/CategorySeletctList.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/progress/LoaderDot */ "./src/components/ui/progress/LoaderDot.js");





// import ThumbnailList from './ThumbnailList';
// import DataTableComponent from '../lib/dataDisplay/DataTableCompoenet';



const ThumbnailList = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_ImageListItemBar_ImageListItemBar_js-node_modules_m-1ca8f9"), __webpack_require__.e("src_components_posts_ThumbnailList_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ThumbnailList */ "./src/components/posts/ThumbnailList.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_6__["default"], null)
});
const DataTableComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/*! import() */ "src_components_lib_dataDisplay_DataTableCompoenet_js").then(__webpack_require__.bind(__webpack_require__, /*! ../lib/dataDisplay/DataTableCompoenet */ "./src/components/lib/dataDisplay/DataTableCompoenet.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_6__["default"], null)
});
moment__WEBPACK_IMPORTED_MODULE_2___default().locale('ko');
const initialState = {
  password: '',
  // 첫번째 패스워드
  rePassword: '',
  // 두번째 패스워드
  pMessage: '패스워드를 입력하세요.',
  // 확인 메시지 (패스워드 일치여부를 사용자에게 알려주는 메시지)
  show: false,
  blindStyle: {
    width: '100%'
  },
  bodyEle: '',
  loading: true,
  dataList: [],
  groupType: '',
  columns: [],
  writeButton: '',
  isLoading: true,
  contentEl: ''
};
class PostList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    console.log('props--', props);
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    document.title = `Minju's Blog - ${this.props.groupType}`;
    this.setState({
      groupType: this.props.groupType,
      isLoading: true,
      columns: this._getDataColumns()
    });
    this._getCateroeyList();
    this._setWriteButton();
    // this._getList();
  }
  componentDidUpdate() {
    if (this.state.groupType !== this.props.groupType) {
      document.title = `Minju's Blog - ${this.props.groupType}`;
      this.setState({
        groupType: this.props.groupType,
        isLoading: true
      });
      this._setWriteButton();
      this._getCateroeyList();
    }
    console.log('componentDidUpdate--', this.props);
  }
  componentWillUnmount() {
    this.setState(initialState);
  }
  _setWriteButton() {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(this.props.userInfo)) {
      return;
    }
    let btnEl = '';
    if (this.props.groupType !== 'GUEST' && this.props.userInfo.grade === 'MASTER') {
      btnEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn btn-dark btn-sm btn-fr mt-20"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
        to: {
          pathname: `${this.props.pathInfo.url}/detail`,
          search: `?groupType=${this.props.groupType}`,
          state: this.props.location.state,
          hash: '#write'
        },
        className: "text-white",
        style: {
          textDecoration: 'none'
        }
      }, "\uAE00\uC4F0\uAE30"));
    } else if (this.props.groupType === 'GUEST') {
      btnEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn btn-dark btn-sm btn-fr mt-20"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
        to: {
          pathname: `${this.props.pathInfo.url}/detail`,
          search: `?groupType=${this.props.groupType}`,
          state: this.props.location.state,
          hash: '#write'
        },
        className: "text-white",
        style: {
          textDecoration: 'none'
        }
      }, "\uAE00\uC4F0\uAE30"));
    }
    this.setState({
      writeButton: btnEl
    });
  }
  _getDataColumns() {
    return [{
      name: "작성자",
      selector: row => `${row.name}`,
      sortable: true,
      grow: 1
    }, {
      name: "글 제목",
      selector: row => row.subject,
      sortable: true,
      compact: false,
      grow: 8,
      cell: d => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
        to: {
          pathname: `${this.props.pathInfo.url}/detail`,
          search: `?id=${d.id}&groupType=${this.props.groupType}`,
          state: this.props.location.state
        },
        className: "nav-link text-dark"
      }, d.subject, " ", d.comment_cnt !== 0 && `(${d.comment_cnt})`)
    }, {
      name: "작성일",
      selector: row => row.created_at,
      sortable: true,
      right: false,
      grow: 1,
      format: d => moment__WEBPACK_IMPORTED_MODULE_2___default()(d.created_at).format('YYYY.MM.DD')
      // cell: d => <span>{moment(d.created_at).format('YYYY.MM.DD')}</span>,
    }];
  }
  _getList = async () => {
    const res = await _api__WEBPACK_IMPORTED_MODULE_5__.AxiosConfig.getList(_api__WEBPACK_IMPORTED_MODULE_5__.PostsApi.POST_LIST);
    console.log('_getList--', res);
    const bodyEle = this.boardList(res.data.result);
    this.setState({
      bodyEle: bodyEle,
      loading: false,
      dataList: res.data.result
      // password: '',
    }); //사용자가 입력한 값이 재확인 비번과 일치하지 않을 경우
    // this.setState({ hello : res.data.hello })
  };
  _getCateroeyList = async () => {
    // this._setContents();
    const res = await _api__WEBPACK_IMPORTED_MODULE_5__.AxiosConfig.getList(_api__WEBPACK_IMPORTED_MODULE_5__.PostsApi.CATEGOTY_POST_LIST, {
      groupType: this.props.groupType
    });
    console.log('_getList--', res);
    // const bodyEle = this.boardList(res.data.result);
    this.setState({
      // bodyEle: bodyEle,
      loading: false,
      dataList: res,
      isLoading: false
      // password: '',
    }); //사용자가 입력한 값이 재확인 비번과 일치하지 않을 경우
  };
  _setContents() {
    let contentEl;
    if (this.state.isLoading && this.props.groupType === 'GALLERY') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    }
    if (this.props.groupType === 'GALLERY') {
      contentEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailList, {
        dataList: this.state.dataList
      });
    } else {
      contentEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataTableComponent, {
        columns: this.state.columns,
        dataList: this.state.dataList,
        isLoading: this.state.isLoading,
        isSelectable: false
      });
    }
    // this.setState({
    //   contentEl: contentEl
    // })
    return contentEl;
  }
  boardList(list) {
    try {
      const listItems = list.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
        to: {
          pathname: `${this.props.pathInfo.url}/detail`,
          search: `?id=${item.id}&groupType=${this.props.location.state.groupType}`,
          state: {
            groupType: this.props.location.state.groupType
          }
        },
        className: "nav-link text-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, item.subject)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.dateTimeFormat(item.created_at))));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, listItems);
    } catch (e) {
      console.log('boardList err', e);
    }
  }
  dateTimeFormat(date) {
    return moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('YYYY.MM.DD');
  }
  // goDetail() {
  //   return href="#home"
  // } 
  handleConfirmPassword = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.value !== '1234') {
      this.setState({
        pMessage: "패스워드가 일치하지 않습니다."
        // password: '',
      }); //사용자가 입력한 값이 재확인 비번과 일치하지 않을 경우
    } else {
      this.setState({
        blindStyle: {
          width: '0%'
        }
        // password: '',
      }); //사용자가 입력한 값이 재확인 비번과 일치하지 않을 경우
    }
    console.log('password--', this.state.password);
  };
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "clearfix content-btn-top mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CategorySeletctList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      location: this.props.location,
      categoryGroups: this.props.categoryGroups,
      isDisabled: true,
      groupType: this.props.groupType
    }), this.state.writeButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card",
      style: {
        boxShadow: 'unset'
      }
    }, this._setContents()));
  }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostList);

/***/ }),

/***/ "./src/components/ui/progress/LoaderDot.js":
/*!*************************************************!*\
  !*** ./src/components/ui/progress/LoaderDot.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _progress_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.css */ "./src/components/ui/progress/progress.css");


const LoaderDot = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader--text"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoaderDot);

/***/ })

}]);
//# sourceMappingURL=src_components_posts_PostList_js.b3dede865508f851fcdf.js.map