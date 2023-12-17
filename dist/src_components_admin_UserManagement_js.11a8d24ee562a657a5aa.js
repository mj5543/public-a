"use strict";
(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_admin_UserManagement_js"],{

/***/ "./src/components/admin/UserManagement.js":
/*!************************************************!*\
  !*** ./src/components/admin/UserManagement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/progress/LoaderDot */ "./src/components/ui/progress/LoaderDot.js");
/* harmony import */ var _lib_material_ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/material-ui/Tooltip */ "./src/components/lib/material-ui/Tooltip.js");



// import { Link } from 'react-router-dom';





// import FullFeaturedCrudGrid from '../lib/material-ui/DataCrudGrid';
// import DataTableComponent from '../lib/dataDisplay/DataTableCompoenet';
const DataTableComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "src_components_lib_dataDisplay_DataTableCompoenet_js").then(__webpack_require__.bind(__webpack_require__, /*! ../lib/dataDisplay/DataTableCompoenet */ "./src/components/lib/dataDisplay/DataTableCompoenet.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_5__["default"], null)
});
const FullFeaturedCrudGrid = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_icons_Add_js-node_modules_material-ui_icons_Close_js-node_mo-5c6557"), __webpack_require__.e("src_components_lib_material-ui_DataCrudGrid_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lib/material-ui/DataCrudGrid */ "./src/components/lib/material-ui/DataCrudGrid.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_progress_LoaderDot__WEBPACK_IMPORTED_MODULE_5__["default"], null)
});
(__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config)();
const crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
const solt = "passhidden";
class UserManagement extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    console.log('props--', props);
    super(props);
    this.state = {
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
      contentEl: '',
      editableItem: {}
    }; // 초기 state값을 셋팅해준다. 빈 스트링 값은 false를 뜻한다.
    this.setEditableItem = this.setEditableItem.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this._passwordForm = this._passwordForm.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }
  componentDidMount() {
    this._getList();
  }
  // componentDidUpdate() {
  //   if(this.state.groupType !== this.props.groupType) {
  //     this.setState({
  //       groupType: this.props.groupType,
  //     });
  //     this._getCateroeyList();
  //   }
  //   console.log('componentDidUpdate--', this.props);

  // }
  componentWillUnmount() {}
  handlePassword = e => {
    let list = [];
    debugger;
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log('password changed--', e);
    list = this.state.dataList;
    list.map(d => {
      if (d.id.toString() === e.target.name) {
        d.password = e.target.value;
      }
      return d;
    });
    this.setState({
      dataList: list
    });
  };
  _passwordForm(d) {
    const inputName = d.id.toString();
    this.setState({
      [inputName]: d.password
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, d.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      className: "form-control",
      style: {
        display: 'inline-block',
        width: '40%'
      },
      name: inputName,
      value: this.state[inputName],
      onChange: this.handlePassword
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      id: d.id,
      onClick: this.passwordChange
    }, "\uC218\uC815"));
  }
  async userUpdate(e) {
    try {
      console.log('passwordChange--', e);
      const targetItem = this.state.dataList.find(d => d.id === e.id);
      console.log('targetItem--', targetItem);
      const changedPassword = e.password;
      const cipher = crypto.createCipher('aes192', solt);
      cipher.update(changedPassword, 'utf8', 'base64'); // javascript는 utf-8 라고 안 씀
      const output = cipher.final('base64');
      await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/user-update', {
        email: targetItem.email,
        password: output,
        grade: e.grade
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('저장되었습니다.');
    } catch (e) {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('저장실패');
      console.log(e);
    }
  }
  async passwordChange(e) {
    try {
      console.log('passwordChange--', e);
      const targetItem = this.state.dataList.find(d => d.id.toString() === e.target.id);
      console.log('targetItem--', targetItem);
      const changedPassword = this.state[e.target.id];
      const cipher = crypto.createCipher('aes192', solt);
      cipher.update(changedPassword, 'utf8', 'base64'); // javascript는 utf-8 라고 안 씀
      const output = cipher.final('base64');
      await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/user-password-change', {
        email: targetItem.email,
        password: output
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('저장되었습니다.');
    } catch (e) {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('저장실패');
      console.log(e);
    }
  }
  // _getDataColumns() {
  //   return [
  //     {
  //       name: "User Name",
  //       selector: row => `${row.username}`,
  //       sortable: true,
  //       grow: 1,
  //     },
  //     {
  //       name: "패스워드",
  //       selector: row => row.password,
  //       sortable: true,
  //       compact: false,
  //       grow: 8,
  //       cell: d => this._passwordForm(d)
  //     },
  //     {
  //       name: "가입일",
  //       selector: row => row.create_at,
  //       sortable: true,
  //       right: false,
  //       grow: 1,
  //       format: d => moment(d.create_at).format('YYYY.MM.DD'),
  //       // cell: d => <span>{moment(d.created_at).format('YYYY.MM.DD')}</span>,
  //     }
  //   ]
  // }
  _getDataColumns() {
    return [{
      field: 'id',
      headerName: 'Id',
      type: 'number',
      width: 50
    }, {
      field: 'username',
      headerName: 'User Name',
      width: 150,
      editable: true
    }, {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
      renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_material_ui_Tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipB, {
        title: params.row.email
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "table-cell-trucate"
      }, params.row.email))
    }, {
      field: 'password',
      headerName: 'Password',
      width: 130,
      editable: true
    }, {
      field: 'grade',
      headerName: 'Grade',
      width: 120,
      editable: true
    }, {
      field: 'provided_app',
      headerName: 'Provided',
      width: 120,
      editable: true
    }, {
      field: 'create_at',
      headerName: 'Date Created',
      type: 'date',
      width: 120
    }, {
      field: 'logout_at',
      headerName: 'Last Login',
      type: 'dateTime',
      width: 200,
      editable: true
    }];
  }
  _getPassword(pass) {
    const decipher = crypto.createDecipher('aes192', solt);
    decipher.update(pass, 'base64', 'utf8');
    const deoutput = decipher.final('utf8');
    console.log('복호화된 문자:' + deoutput);
    return deoutput;
  }
  _getList = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/users');
    console.log('users  _getList--', res);
    const tempList = res.data.result.map(d => {
      d.password = this._getPassword(d.password);
      d.create_at = new Date(d.create_at);
      d.logout_at = new Date(d.logout_at);
      return d;
    });
    this.setState({
      isLoading: false,
      dataList: tempList
    });
    this.setState({
      columns: this._getDataColumns()
    });

    // this._setContents();
  };
  _setContents() {
    // this.setState({
    //   contentEl: <DataTableComponent columns={this.state.columns} 
    //   dataList={this.state.dataList} 
    //   isLoading={this.state.isLoading} 
    //   isSelectable={true} 
    //   onSelectedChagenItemCB={this.setEditableItem} />
    // // })
    // return <DataTableComponent columns={this.state.columns} 
    // dataList={this.state.dataList} 
    // isLoading={this.state.isLoading} 
    // isSelectable={true} 
    // onSelectedChagenItemCB={this.setEditableItem} />

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FullFeaturedCrudGrid, {
      columns: this.state.columns,
      dataList: this.state.dataList,
      isLoading: this.state.isLoading,
      onSelectedChagenItemCB: d => this.userUpdate(d)
    });
  }
  setEditableItem(item) {
    this.setState({
      editableItem: item
    });
  }
  dateTimeFormat(date) {
    return moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format('YYYY.MM.DD');
  }
  // goDetail() {
  //   return href="#home"
  // } 

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card",
      style: {
        boxShadow: 'unset'
      }
    }, this._setContents());
  }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManagement);

/***/ }),

/***/ "./src/components/lib/material-ui/Tooltip.js":
/*!***************************************************!*\
  !*** ./src/components/lib/material-ui/Tooltip.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipB: () => (/* binding */ TooltipB),
/* harmony export */   TooltipG: () => (/* binding */ TooltipG),
/* harmony export */   TooltipW: () => (/* binding */ TooltipW)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/styled.js");




const TooltipB = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(({
  className,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  arrow: true,
  classes: {
    popper: className
  }
})))(({
  theme
}) => ({
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].tooltip}`]: {
    ...theme.typography.body2,
    backgroundColor: theme.palette.common.black
  }
}));
const TooltipW = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(({
  className,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  arrow: true,
  classes: {
    popper: className
  }
})))(({
  theme
}) => ({
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].arrow}`]: {
    color: theme.palette.common.white
  },
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].tooltip}`]: {
    ...theme.typography.body2,
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1]
  }
}));
const TooltipG = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(({
  className,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  arrow: true,
  classes: {
    popper: className
  }
})))(({
  theme
}) => ({
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].arrow}`]: {
    color: '#f5f5f9'
  },
  [`& .${_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].tooltip}`]: {
    ...theme.typography.body2,
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#f5f5f9',
    boxShadow: theme.shadows[1]
  }
}));

/***/ }),

/***/ "./src/components/ui/progress/LoaderDot.js":
/*!*************************************************!*\
  !*** ./src/components/ui/progress/LoaderDot.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=src_components_admin_UserManagement_js.11a8d24ee562a657a5aa.js.map