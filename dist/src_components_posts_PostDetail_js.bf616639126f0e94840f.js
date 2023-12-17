(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_posts_PostDetail_js"],{

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

/***/ "./src/components/posts/Comments.js":
/*!******************************************!*\
  !*** ./src/components/posts/Comments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/InsertComment */ "./node_modules/@material-ui/icons/InsertComment.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);








// import CreateIcon from '@material-ui/icons/Create';




// import FavoriteIcon from '@material-ui/icons/Favorite';
// import DraftEditor from '../lib/editor/DraftEditor';


const DraftEditor = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prismjs_prism_js"), __webpack_require__.e("vendors-node_modules_draft-js-prism_lib_index_js-node_modules_draftjs-to-html_lib_draftjs-to--5dd13f"), __webpack_require__.e("src_components_lib_editor_DraftEditor_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lib/editor/DraftEditor */ "./src/components/lib/editor/DraftEditor.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loading..")
});
moment__WEBPACK_IMPORTED_MODULE_5___default().locale('ko');
const initialState = {
  dataList: [],
  content: '',
  editItem: {},
  editContent: '',
  placeholder: '댓글을 입력해주세요',
  isShowEditor: false
};
class Comments extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = initialState;
    this.setContent = this.setContent.bind(this);
    this.setEditContent = this.setEditContent.bind(this);
    this.onRegistClick = this.onRegistClick.bind(this);
    this.editComent = this.editComent.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.onEditSave = this.onEditSave.bind(this);
    this.changedContent = this.changedContent.bind(this);
  }
  componentDidMount() {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(this.props.userInfo)) {
      this.setState({
        placeholder: '로그인을 해주세요.'
      });
    }
    this._getData();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps);
    // if (prevProps.color !== this.props.color) {
    //   return this.myRef.style.color;
    // }
    // return null;
  }
  componentWillUnmount() {
    this.setState(initialState);
  }
  _getData = async () => {
    try {
      const res = await _api__WEBPACK_IMPORTED_MODULE_4__.AxiosConfig.getList(_api__WEBPACK_IMPORTED_MODULE_4__.PostsApi.COMMENT_LIST, {
        id: this.props.postId
      });
      console.log('/api/posts/comment-list', res);
      if (res.length > 0) {
        res.map(d => d.isEditing = false);
      }
      this.setState({
        dataList: res,
        content: '',
        editItem: {},
        editContent: '',
        isShowEditor: true
      });
    } catch (e) {
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('error');
    }
  };
  onRegistClick() {
    this._registContent();
  }
  _contentStateInit() {
    this.setState({
      dataList: [],
      content: '',
      editItem: {},
      editContent: '',
      isShowEditor: false
    });
  }
  async _registContent() {
    const now = new Date();
    const params = {
      userId: this.props.userInfo.id,
      postId: Number(this.props.postId),
      content: this.state.content,
      ip: this.props.ip,
      now: now
    };
    await _api__WEBPACK_IMPORTED_MODULE_4__.AxiosConfig.getPost(_api__WEBPACK_IMPORTED_MODULE_4__.PostsApi.COMMENT_REGIST, params);
    this._contentStateInit();
    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('저장되었습니다.');
    console.log('complete!');
    this._getData();
  }
  onEditSave(item) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(this.state.editItem) || this.state.editItem.id !== item.id) {
      return;
      ;
    }
    this._editContent();
  }
  async _editContent() {
    try {
      const editItem = this.state.editItem;
      const now = new Date();
      const params = {
        id: editItem.id,
        content: this.state.editContent,
        ip: this.props.ip,
        now: moment__WEBPACK_IMPORTED_MODULE_5___default()(now).format('YYYY-MM-DD HH:mm:ss')
      };
      await _api__WEBPACK_IMPORTED_MODULE_4__.AxiosConfig.getUpdate(_api__WEBPACK_IMPORTED_MODULE_4__.PostsApi.COMMNET_UPDATE, params);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('저장되었습니다.');
      console.log('complete!');
      this._getData();
    } catch (e) {
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('저장실패');
    }
  }
  deleteComment(item) {
    this._deleteComment(item);
  }
  async _deleteComment(item) {
    try {
      await _api__WEBPACK_IMPORTED_MODULE_4__.AxiosConfig.getDelete(_api__WEBPACK_IMPORTED_MODULE_4__.PostsApi.COMMENT_DELETE, {
        id: item.id,
        postId: item.post_id
      });
      // await axios.delete(`/api/comment/delete?id=${item.id}&postId=${item.post_id}`);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('삭제되었습니다.');
      this._getData();
    } catch (e) {
      console.log(e);
    }
  }
  dateTimeFormat(date) {
    return moment__WEBPACK_IMPORTED_MODULE_5___default()(date).format('YYYY.MM.DD');
  }
  editComent(item) {
    console.log('editComent--', item);
    const itemList = this.state.dataList;
    itemList.map(d => {
      if (item.id === d.id) {
        d.isEditing = true;
      }
      return d;
    });
    this.setState({
      dataList: itemList,
      editItem: item,
      editContent: item.content
    });
  }
  changedContent(obj) {
    // let imageUrl = this.state.image;
    // if(!isEmpty(obj.image)) {
    //   imageUrl = `${process.env.REACT_APP_IMAGE_PATH}/${obj.image}`;
    // }
    this.setState({
      content: obj.content
      // image: imageUrl
    });
  }
  setEditContent(obj) {
    this.setState({
      editContent: obj.content
    });
  }
  setContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mt-20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uB313\uAE00 ", this.state.dataList.length), this.state.dataList.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: index,
      className: "mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex align-items-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: data.userImage,
      width: "26",
      height: "26",
      className: "rounded-circle me-2",
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "flex-grow-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: 'right'
      }
    }, data.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-label": "save",
      size: "small",
      onClick: () => this.onEditSave(data)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UpdateBtns, {
      item: data,
      userInfo: this.props.userInfo,
      onEdit: this.editComent,
      onDelete: this.deleteComment
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
      className: "text-muted"
    }, this.dateTimeFormat(data.created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), !data.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: data.content
      }
    })), data.isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DraftEditor, {
      height: "100px",
      placeholder: this.state.placeholder,
      editContent: this.state.editContent,
      onTemperatureChange: this.setEditContent,
      toolbarHidden: true
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card box-shadow-02"
    }, this.props.userInfo.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: '10px 10px 0px 10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: this.props.userInfo.app_image_url,
      width: "26",
      height: "26",
      className: "rounded-circle me-2",
      alt: ""
    }), this.props.userInfo.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-s"
    }, this.state.isShowEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DraftEditor, {
      height: "100px",
      placeholder: this.state.placeholder,
      editContent: this.state.content,
      onTemperatureChange: this.changedContent,
      toolbarHidden: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "bg-transparent border-light mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "outlined",
      size: "small",
      className: "btn-fr",
      disabled: !this.props.logged,
      onClick: this.onRegistClick
    }, "\uB4F1\uB85D")))));
  }
}
const HtmlContent = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.content
    }
  });
};
const UpdateBtns = props => {
  let cotent = '';
  if (props.item.writer_id === props.userInfo.id || props.userInfo.grade === 'MASTER') {
    cotent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-label": "update",
      size: "small",
      "data-param": props.item.id,
      onClick: () => props.onEdit(props.item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-label": "delete",
      size: "small",
      onClick: () => props.onDelete(props.item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "inblock"
  }, cotent);
};
const CommunicationBtns = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "top-line mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_13__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./src/components/posts/PostDetail.js":
/*!********************************************!*\
  !*** ./src/components/posts/PostDetail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.mjs");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var _redux_modules_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/modules/users */ "./src/redux/modules/users.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _CategorySeletctList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CategorySeletctList */ "./src/components/posts/CategorySeletctList.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comments */ "./src/components/posts/Comments.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _ui_progress_LoaderSample__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/progress/LoaderSample */ "./src/components/ui/progress/LoaderSample.js");




// import { uploadFile } from 'react-s3';




// import ToastUIEditor from '../lib/editor/ToastUIEditor';






// import DraftEditor from '../lib/editor/DraftEditor';
// const ToastUIEditor = React.lazy(() => import('../lib/editor/ToastUIEditor'));
const ToastUIEditor = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prismjs_prism_js"), __webpack_require__.e("vendors-node_modules_toast-ui_editor-plugin-code-syntax-highlight_dist_toastui-editor-plugin--3a7068"), __webpack_require__.e("src_components_lib_editor_ToastUIEditor_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lib/editor/ToastUIEditor */ "./src/components/lib/editor/ToastUIEditor.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "loading..")
});
const DraftEditor = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prismjs_prism_js"), __webpack_require__.e("vendors-node_modules_draft-js-prism_lib_index_js-node_modules_draftjs-to-html_lib_draftjs-to--5dd13f"), __webpack_require__.e("src_components_lib_editor_DraftEditor_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lib/editor/DraftEditor */ "./src/components/lib/editor/DraftEditor.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "loading..")
});
const initialState = {
  title: '',
  content: '',
  file: null,
  image: '',
  email: '',
  commentCnt: 0,
  editContent: '',
  mode: 'read',
  saveButtonText: '수정',
  actionButtonText: '목록',
  id: '',
  modalShow: false,
  updateBtnEl: '',
  deleteBtnEl: '',
  isDisabledCategoty: true,
  isLoading: true
};
class PostDetail extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    console.log('PostDetail props--', props, ({"NODE_ENV":"development","REACT_APP_IMAGE_PATH":"https://lalalol-file.s3.amazonaws.com","REACT_APP_AWS_REGION":"ap-northeast-2","REACT_APP_S3_BUCKET_NAME":"lalalol-file","REACT_APP_CONTENTS_PASSWORD":"minju5543","REACT_APP_FACEBOOK_APP_ID":"265795955063722","REACT_APP_FACEBOOK_TEST_APP_ID":"425845582095607","REACT_APP_GOOGLE_AUTH_CLIENT_ID":"722716081092-t85diskdliut6naptid3aoiegru7d7eq.apps.googleusercontent.com","REACT_APP_HIDDEN_KEY":"passhidden","REACT_APP_AWS_ACCESS_KEY_ID":"AKIAU7IE5QFET2AGAR5C","REACT_APP_AWS_SECRET_ACCESS_KEY":"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"}));
    super(props);
    this.state = initialState;
    // this.childRef = useRef();
    // this.callChildFunc = useCallback(() => {
    //   console.log(childRef.current.getAlert()); // 자식 컴포넌트 함수 호출
    //   console.log(childRef.current.getRowId()); // 자식 컴포넌트 데이터 가져오기
    // });
    this.modeChange = this.modeChange.bind(this);
    this.actionModeChange = this.actionModeChange.bind(this);
    this.changedContent = this.changedContent.bind(this);
    this.deletePost = this.deletePost.bind(this);
    // this.titleChanged = this.titleChanged.bind(this);
  }
  componentDidMount() {
    const {
      location,
      history
    } = this.props;
    //TODO
    const query = query_string__WEBPACK_IMPORTED_MODULE_5__.parse(location.search);
    // if(!state){
    //   history.push('/');
    // }
    console.log('PostDetail - componentDidMount ::', location, history, query);
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(location.hash) && location.hash === '#write' && (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.props.userInfo)) {
      history.push('/auth/login');
    }
    this.setState({
      groupType: query.groupType
    });
    // if(!isEmpty(this.props.location.state) && this.props.location.state.groupType) {
    //   this.setState({groupType: query.groupType});
    // }

    if (this.props.postId) {
      this._getData();
    } else {
      const updateBtnEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
        type: "button",
        className: "btn btn-dark btn-sm btn-fr ms-1",
        onClick: this.modeChange
      }, "\uC800\uC7A5");
      this.setState({
        mode: 'modify',
        saveButtonText: '저장',
        actionButtonText: '취소',
        updateBtnEl: updateBtnEl,
        isDisabledCategoty: false,
        isLoading: false
      });
    }
  }
  componentWillUnmount() {
    this.setState(initialState);
  }
  _getData = async () => {
    this.setState({
      isDisabledCategoty: true
    });
    const res = await _api__WEBPACK_IMPORTED_MODULE_9__.AxiosConfig.getList(_api__WEBPACK_IMPORTED_MODULE_9__.PostsApi.POST_DETAIL, {
      id: this.props.postId
    });
    console.log('PostsApi.POST_DETAIL', _api__WEBPACK_IMPORTED_MODULE_9__.PostsApi.POST_DETAIL, res);
    let deleteBtnEl = '';
    let updateBtnEl = '';
    if (res.length > 0) {
      // updateBtnEl = <button type="button" className="btn btn-dark btn-sm float-end ms-1" onClick={this.modeChange}>{this.state.saveButtonText}</button>;
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.props.userInfo) && (this.props.userInfo.email === res[0].email || this.props.userInfo.grade === 'MASTER')) {
        updateBtnEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
          type: "button",
          className: "btn btn-dark btn-sm btn-fr ms-1",
          onClick: this.modeChange
        }, this.state.saveButtonText);
        deleteBtnEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
          type: "button",
          className: "btn btn-dark btn-sm btn-fr ms-1",
          onClick: this.deletePost
        }, "\uC0AD\uC81C");
      }
      document.title = res[0].subject;
      this.setState({
        title: res[0].subject,
        content: res[0].content,
        id: res[0].id,
        image: res[0].image,
        email: res[0].email,
        commentCnt: res[0].comment_cnt,
        updateBtnEl: updateBtnEl,
        deleteBtnEl: deleteBtnEl,
        isLoading: false
      });
    }
  };
  async deletePost() {
    try {
      await _api__WEBPACK_IMPORTED_MODULE_9__.AxiosConfig.getDelete(_api__WEBPACK_IMPORTED_MODULE_9__.PostsApi.DELETE_POST, {
        id: this.props.postId
      });
      this.props.history.push({
        pathname: '/posts',
        search: `?groupType=${this.state.groupType}`
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success('삭제되었습니다.');
    } catch (e) {
      console.log(e);
    }
  }
  changedContent(obj) {
    let imageUrl = this.state.image;
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(obj.image)) {
      imageUrl = `${"https://lalalol-file.s3.amazonaws.com"}/${obj.image}`;
    }
    this.setState({
      content: obj.content,
      image: imageUrl
    });
  }
  actionModeChange() {
    const {
      history
    } = this.props;
    if (this.state.actionButtonText === '목록') {
      // history.push(this.props.matchUrl);
      history.push({
        pathname: '/posts',
        search: `?groupType=${this.state.groupType}`,
        state: this.props.location.state
      });
    } else {
      this.setModalShow(true);
    }
  }
  goList() {
    const {
      history
    } = this.props;
    this.setModalShow(false);
    history.push({
      pathname: '/posts',
      search: `?groupType=${this.props.groupType}`,
      state: this.props.location.state
    });
  }
  modeChange() {
    if (this.state.mode === 'read') {
      this.setState({
        mode: 'modify',
        saveButtonText: '저장',
        isDisabledCategoty: false
      });
    } else {
      if (this.props.isRegist) {
        this._registContent();
      } else {
        this._updateContent();
      }
    }
  }
  titleChanged = e => {
    this.setState({
      title: e.target.value
    });
  };
  _contentValidation() {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.state.title)) {
      react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("글 제목을 입력하세요.");
      return false;
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.state.content)) {
      react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("내용을 입력하세요.");
      return false;
    }
    const newText = this.state.content.replace(/(<([^>]+)>)/ig, "");
    if (newText.length < 30 && this.state.groupType !== 'GALLERY') {
      react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("내용을 30자 이상 입력하세요.");
      return false;
    }
    return true;
  }
  async _registContent() {
    if (!this._contentValidation()) {
      return;
    }
    const now = new Date();
    const params = {
      name: this.props.userInfo.username,
      email: this.props.userInfo.email,
      password: '',
      subject: this.state.title,
      content: this.state.content,
      ip: this.props.ipInfo.IPv4,
      created_at: now,
      groupType: this.state.groupType,
      image: this.state.image
    };
    await _api__WEBPACK_IMPORTED_MODULE_9__.AxiosConfig.getPost(_api__WEBPACK_IMPORTED_MODULE_9__.PostsApi.REGIST_POST, params);
    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success('저장되었습니다.');
    console.log('complete!');
    const {
      history
    } = this.props;
    history.push({
      pathname: this.props.matchUrl,
      search: `?groupType=${this.state.groupType}`,
      state: this.props.location.state
    });
    // history.push(`${this.props.matchUrl}?groupType=${this.state.groupType}`);
  }
  async _updateContent() {
    // const params = {
    //   title: this.state.title,
    //   content: this.state.content,
    //   id: this.state.id,
    //   file: this.state.file
    // }
    // const formData = new FormData();
    // formData.append(`name`, this.props.userInfo.username);
    // formData.append(`email`, this.props.userInfo.email);
    // formData.append(`file`, this.state.file);
    // formData.append(`title`, this.state.title);
    // formData.append(`content`, this.state.content);
    // formData.append(`ip`, this.props.ipInfo.IPv4);
    // formData.append(`id`, this.state.id);
    // formData.append(`image`, this.state.image);
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // }
    const params = {
      name: this.props.userInfo.username,
      email: this.props.userInfo.email,
      groupType: this.state.groupType,
      file: this.state.file,
      title: this.state.title,
      content: this.state.content,
      ip: this.props.ipInfo.IPv4,
      id: this.state.id,
      image: this.state.image
    };
    await _api__WEBPACK_IMPORTED_MODULE_9__.AxiosConfig.getUpdate(_api__WEBPACK_IMPORTED_MODULE_9__.PostsApi.UPDATE_POST, params);
    this.setState({
      mode: 'read',
      saveButtonText: '수정'
    });
    this._getData();
    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success('저장되었습니다.');
    console.log('complete!');
  }
  _editorElement() {
    let editEl;
    if (this.state.groupType === 'GALLERY') {
      editEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DraftEditor, {
        height: "100vh",
        editContent: this.state.content,
        onTemperatureChange: this.changedContent,
        toolbarHidden: false,
        placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
      });
    } else {
      editEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ToastUIEditor, {
        editContent: this.state.content,
        onTemperatureChange: this.changedContent
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "input-group mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "input-group-text",
      id: "inputGroup-sizing-default"
    }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      className: "form-control",
      "aria-label": "Sizing example input",
      "aria-describedby": "inputGroup-sizing-default",
      value: this.state.title,
      onChange: this.titleChanged
    })), editEl);
  }
  setModalShow(isShow) {
    this.setState({
      modalShow: isShow
    });
  }
  setCurrentGroupType(group) {
    this.setState({
      groupType: group
    });
  }
  getContents() {
    let contentElement;
    // if(this.state.isLoading) {
    //   contentElement = <BasicSpinner />
    // } else 
    if (this.state.mode !== 'read') {
      contentElement = this._editorElement();
    } else {
      contentElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, this.state.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: this.state.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Comments__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ip: this.props.ipInfo.IPv4,
        userInfo: this.props.userInfo,
        postId: this.props.postId,
        logged: this.props.logged,
        commentCnt: this.state.commentCnt
      }));
    }
    return contentElement;
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_progress_LoaderSample__WEBPACK_IMPORTED_MODULE_10__.BasicSpinner, {
      isShow: this.state.isLoading
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "clearfix mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CategorySeletctList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      location: this.props.location,
      categoryGroups: this.props.categoryGroups,
      isDisabled: this.state.isDisabledCategoty,
      groupType: this.props.groupType,
      changedGroupCB: code => this.setCurrentGroupType(code)
    }), this.state.deleteBtnEl, this.state.updateBtnEl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "button",
      className: "btn btn-dark btn-sm btn-fr ms-1",
      onClick: this.actionModeChange
    }, this.state.actionButtonText)), this.getContents(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(MyVerticallyCenteredModal, {
      show: this.state.modalShow
      // onHide={() => this.setModalShow(false)}
      ,
      onHideConfirm: () => this.goList()
    }));
  }
}
function MyVerticallyCenteredModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    size: "sm",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "\uAE00 \uC791\uC131 \uCDE8\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "\uAE00 \uC791\uC131\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    className: "btn btn-dark btn-sm btn-fr ms-1",
    onClick: props.onHide
  }, "\uCDE8\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    className: "btn btn-dark btn-sm btn-fr ms-1",
    onClick: props.onHideConfirm
  }, "\uD655\uC778")));
}
const mapStateToProps = state => ({
  logged: state.users.logged,
  userInfo: state.users.userInfo,
  ipInfo: state.users.ipInfo
});
const mapDispatchToProps = dispatch => {
  return {
    getIpInfo: () => dispatch(_redux_modules_users__WEBPACK_IMPORTED_MODULE_6__.actionCreators.getIpInfo())
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(PostDetail)));
// export default PostDetail;

/***/ })

}]);
//# sourceMappingURL=src_components_posts_PostDetail_js.bf616639126f0e94840f.js.map