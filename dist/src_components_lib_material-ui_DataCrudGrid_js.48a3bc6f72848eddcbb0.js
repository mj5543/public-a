"use strict";
(globalThis["webpackChunklalalol_build"] = globalThis["webpackChunklalalol_build"] || []).push([["src_components_lib_material-ui_DataCrudGrid_js"],{

/***/ "./src/components/lib/material-ui/DataCrudGrid.js":
/*!********************************************************!*\
  !*** ./src/components/lib/material-ui/DataCrudGrid.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullFeaturedCrudGrid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/DeleteOutlined */ "./node_modules/@material-ui/icons/DeleteOutlined.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/dist/index-esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _ui_progress_LoaderSample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/progress/LoaderSample */ "./src/components/ui/progress/LoaderSample.js");


// import PropTypes from 'prop-types';










const defaultTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(theme => ({
  actions: {
    color: theme.palette.text.secondary
  },
  textPrimary: {
    color: theme.palette.text.primary
  },
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
}), {
  defaultTheme
});
function LoadingBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_progress_LoaderSample__WEBPACK_IMPORTED_MODULE_2__.RefreshingLoader, {
    isShow: true
  });
}
function NoData() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
}
function EditToolbar() {
  const compProps = (0,_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.useGridSlotComponentProps)();
  const handleClick = () => {
    const rowModels = compProps.apiRef.current.getRowModels();
    const lastModel = rowModels.get(rowModels.size);
    const id = lastModel.id + 1;
    console.log('rowModels--', rowModels);
    // const id = 2;
    // compProps.apiRef.current.setEditRowsModel([{ id, isNew: true }]);
    compProps.apiRef.current.setRows([...compProps.rows, {
      id,
      isNew: true
    }]);
    compProps.apiRef.current.setRowMode(id, 'edit');
    // Wait for the grid to render with the new row
    setTimeout(() => {
      compProps.apiRef.current.scrollToIndexes({
        rowIndex: compProps.apiRef.current.getRowsCount() - 1
      });
      compProps.apiRef.current.setCellFocus(id, 'username');
    }, 150);
  };
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbarContainer, {
    className: classes.floatRight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__["default"], null),
    onClick: handleClick
  }, "Add record"));
}
function CustomToolbar() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbar, {
    className: classes.floatLeft
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(EditToolbar, null));
}
function EditIconAction(props) {
  // let id;
  // compProps.apiRef.current.getSelectedRows().forEach((value, key) => {
  //   id = key
  // })
  const handleEditClick = event => {
    const id = Number(event.currentTarget.id);
    props.apiRef.current.setRowMode(id, 'edit');
    // Wait for the grid to render with the new row
    setTimeout(() => {
      props.apiRef.current.scrollToIndexes({
        rowIndex: props.apiRef.current.getRowsCount() - 1
      });
      props.apiRef.current.setCellFocus(id, 'username');
    }, 150);
  };
  const handleDeleteClick = event => {
    const id = Number(event.currentTarget.id);
    props.apiRef.current.updateRows([{
      id,
      _action: 'delete'
    }]);
  };
  return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    label: "Edit",
    id: props.id,
    onClick: handleEditClick,
    color: "inherit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    label: "Delete",
    id: props.id,
    onClick: handleDeleteClick,
    color: "inherit"
  })];
}
function SaveIconAction(props) {
  // let id;
  // compProps.apiRef.current.getSelectedRows().forEach((value, key) => {
  //   id = key
  // })
  const handleSaveClick = event => {
    const id = Number(event.currentTarget.id);
    props.apiRef.current.commitRowChange(id);
    props.apiRef.current.setRowMode(id, 'view');
    const row = props.apiRef.current.getRow(id);
    props.apiRef.current.updateRows([{
      ...row,
      isNew: false
    }]);
    setTimeout(() => {
      const rowData = props.apiRef.current.getRow(id);
      props.onSelectedChagenItemCB(rowData);
      console.log('saveRow', rowData);
    });
  };
  const handleCancelClick = event => {
    const id = Number(event.currentTarget.id);
    props.apiRef.current.setRowMode(id, 'view');
    const row = props.apiRef.current.getRow(id);
    if (row.isNew) {
      props.apiRef.current.updateRows([{
        id,
        _action: 'delete'
      }]);
    } else {
      const preItem = props.dataList.find(d => d.id === id);
      props.apiRef.current.updateRows([{
        ...preItem
      }]);
    }
  };
  return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__["default"], null),
    id: props.id,
    label: "Save",
    onClick: handleSaveClick,
    color: "primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__["default"], null),
    id: props.id,
    label: "Cancel",
    onClick: handleCancelClick,
    color: "inherit"
  })];
}
function ActionIcons(props) {
  const compProps = (0,_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.useGridSlotComponentProps)();
  console.log('ActionIcons--', props);
  const isInEditMode = compProps.apiRef.current.getRowMode(props.id) === 'edit';
  // const editKey = `edit${props.id}`
  if (isInEditMode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SaveIconAction, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      apiRef: compProps.apiRef
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(EditIconAction, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      apiRef: compProps.apiRef
    }));
  }
}
// EditToolbar.propTypes = {
//   apiRef: PropTypes.shape({
//     current: PropTypes.object.isRequired,
//   }).isRequired,
//   selectedCellParams: PropTypes.any,
// };

function FullFeaturedCrudGrid(props) {
  const classes = useStyles();
  // const apiRef = useGridApiRef();
  // const {rowParams} = GridRowParams;

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const rows = props.dataList;
  const [editRowsModel, setEditRowsModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const handleCellEditChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newModel => {
    const updatedModel = {
      ...newModel
    };
    // const [firstName, lastName] = value.toString().split(' ');
    const updatedRows = rows.map(row => {
      // if (row.id === id) {
      //   return { ...row, firstName, lastName };
      // }
      return row;
    });
    setEditRowsModel(updatedModel);
    // setRows(updatedRows);
    // if (field === 'fullName') {
    //   const [firstName, lastName] = value.toString().split(' ');
    //   const updatedRows = rows.map((row) => {
    //     if (row.id === id) {
    //       return { ...row, firstName, lastName };
    //     }
    //     return row;
    //   });
    //   setRows(updatedRows);
    // }
  }, []);
  const columns = [...props.columns, {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: classes.actions,
    disableClickEventBubbling: true,
    renderCell: params => {
      console.log('renderCell--', params);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ActionIcons, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, props));
    }
    // getActions: (params) => {
    //   console.log('getActions--', params)
    //   return <ActionIcons key={params.id} {...params} {...props} />
    // }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      height: 500,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_progress_LoaderSample__WEBPACK_IMPORTED_MODULE_2__.RefreshingLoader, {
    isShow: props.isLoading
  }), !props.isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid, {
    rows: rows,
    columns: columns,
    editMode: "row",
    rowHeight: 30,
    editRowsModel: editRowsModel,
    onEditRowsModelChange: handleCellEditChange,
    onRowEditStart: handleRowEditStart,
    onRowEditStop: handleRowEditStop,
    components: {
      Toolbar: CustomToolbar,
      LoadingOverlay: LoadingBar,
      NoRowsOverlay: NoData
    }
    // componentsProps={{
    //   toolbar: { apiRef },
    // }}
  }));
}

/***/ })

}]);
//# sourceMappingURL=src_components_lib_material-ui_DataCrudGrid_js.48a3bc6f72848eddcbb0.js.map