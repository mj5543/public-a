"use strict";
(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_posts_ThumbnailList_js"],{

/***/ "./src/components/posts/ThumbnailList.js":
/*!***********************************************!*\
  !*** ./src/components/posts/ThumbnailList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_ImageListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ImageListItem */ "./node_modules/@material-ui/core/esm/ImageListItem/ImageListItem.js");
/* harmony import */ var _material_ui_core_ImageListItemBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ImageListItemBar */ "./node_modules/@material-ui/core/esm/ImageListItemBar/ImageListItemBar.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");















moment__WEBPACK_IMPORTED_MODULE_1___default().locale('ko');
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    // width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));
class ThumbnailList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      imageList: []
    };
  }
  componentDidMount() {
    this.setState({
      imageList: this.props.dataList
    });
  }
  // componentWillUnmount() { 
  // }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageItemList, {
      imageList: this.state.imageList
    }));
  }
}
function getPreText(item) {
  let contentText = item.content;
  contentText = contentText.replace(/<IMG(.*?)>/gi, '');
  contentText = contentText.replace(/(<([^>]+)>)/ig, "");
  contentText = contentText.replace(/\r\n|\n/g, '');
  return contentText;
}
const CardImageList = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: 2,
    md: 6,
    className: "g-3"
  }, props.imageList.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    style: {
      fontFamily: 'GothicB'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, data.subject)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: {
      pathname: `/posts/detail`,
      search: `?id=${data.id}&groupType=${data.group_type}`
    },
    className: "btn-text-s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: data.image,
    className: "card-img",
    alt: "",
    style: {
      maxHeight: ''
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
    className: "card-short-text"
  }, getPreText(data)))))));
};
const ImageItemList = props => {
  const classes = useStyles();
  return (
    /*#__PURE__*/
    // <div className={classes.root}>
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      xs: 2,
      md: 6,
      className: "g-3"
    }, props.imageList && props.imageList.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ImageListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: data.image,
      style: {
        height: '180px',
        listStyle: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
      to: {
        pathname: `/posts/detail`,
        search: `?id=${data.id}&groupType=${data.group_type}`
      },
      className: "btn-text-s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: data.image,
      className: "card-img",
      alt: data.subject,
      style: {
        maxHeight: ''
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ImageListItemBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: data.subject,
      subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "by: ", data.name),
      actionIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "aria-label": `info about ${data.subject}`,
        className: classes.icon
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__["default"], null))
    })))))
    // </div>
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailList);

/***/ })

}]);
//# sourceMappingURL=src_components_posts_ThumbnailList_js.8d5767f10cfb8420bb76.js.map