webpackHotUpdate_N_E("pages/users",{

/***/ "./components/NewUser.js":
/*!*******************************!*\
  !*** ./components/NewUser.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewUser; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");






var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\components\\NewUser.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function NewUser(_ref) {
  _s();

  var _this = this;

  var setMsg = _ref.setMsg;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      validated = _useState2[0],
      setValidated = _useState2[1];

  var productObject = {
    title: "",
    price: 0.0,
    codebar: "",
    category: ""
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(productObject),
      product = _useState3[0],
      setProduct = _useState3[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
      var form, result, response;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = event.currentTarget;

              if (!(form.checkValidity() === false)) {
                _context.next = 6;
                break;
              }

              event.preventDefault();
              event.stopPropagation();
              _context.next = 15;
              break;

            case 6:
              setValidated(true);
              _context.next = 9;
              return fetch("http://localhost:3001/products", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": localStorage.getItem("token")
                },
                body: JSON.stringify(product)
              });

            case 9:
              result = _context.sent;
              _context.next = 12;
              return result.json();

            case 12:
              response = _context.sent;
              console.log(response);

              if (response == "success") {
                setMsg({
                  status: 1,
                  msg: "Se ha agregado correctamente el nuevo producto"
                });
                setShow(false);
                setProduct(productObject);
              } else {
                setMsg({
                  status: 2,
                  msg: 'Rellene el formulario'
                });
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var handleKeyUp = function handleKeyUp(e) {
    function change(value) {
      return value.replace(/\D/g, "").replace(/([0-9])([0-9]{2})$/, "$1,$2").replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    }

    e.target.value = change(e.target.value);
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      price: Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["replace"])(e.target.value)
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "info",
      onClick: handleShow,
      children: "Nuevo Usuario"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "lg",
      show: show,
      onHide: handleClose,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
          children: "Nuevo Producto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          noValidate: true,
          validated: validated,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__["default"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
              column: true,
              sm: 3,
              children: "Categor\xEDa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sm: 9,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
                onChange: function onChange(e) {
                  setProduct(_objectSpread(_objectSpread({}, product), {}, {
                    category: e.target.value
                  }));
                },
                name: "category",
                id: "category",
                required: true,
                as: "select",
                defaultValue: "Seleccionar...",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "",
                  children: "Seleccionar..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this), categories.map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i._id,
                    children: i.title
                  }, i._id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Seleccione una categor\xEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__["default"],
            style: {
              marginTop: "30px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
              column: true,
              sm: 3,
              children: "Nombre Producto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sm: 9,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
                onChange: function onChange(e) {
                  setProduct(_objectSpread(_objectSpread({}, product), {}, {
                    title: e.target.value
                  }));
                },
                name: "title",
                id: "title",
                required: true,
                type: "text",
                placeholder: "Nombre Producto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el nombre del producto."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__["default"],
            style: {
              marginTop: "30px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
              column: true,
              sm: 3,
              children: "Precio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sm: 9,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: "mb-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__["default"].Prepend, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__["default"].Text, {
                    children: "$"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  onKeyUp: handleKeyUp,
                  name: "price",
                  id: "price",
                  type: "text",
                  required: true,
                  placeholder: "Precio"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                  type: "invalid",
                  children: "Introduzca el precio en D\xF3lares."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                  children: "Correcto!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__["default"],
            style: {
              marginTop: "30px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, {
              column: true,
              sm: 3,
              children: "C\xF3digo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sm: 9,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
                onChange: function onChange(e) {
                  setProduct(_objectSpread(_objectSpread({}, product), {}, {
                    codebar: e.target.value
                  }));
                },
                required: true,
                id: "codebar",
                name: "codebar",
                type: "text",
                placeholder: "C\xF3digo de barra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el c\xF3digo de barras. escaneando el producto con el lector de barras proporcionado."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "secondary",
          onClick: handleClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "primary",
          onClick: handleSubmit,
          children: "Guardar producto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(NewUser, "44pNOUdt5GXamO155rbjCKzvpx8=");

_c = NewUser;

var _c;

$RefreshReg$(_c, "NewUser");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return users; });
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_TableUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TableUsers */ "./components/TableUsers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");
/* harmony import */ var _components_NewUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NewUser */ "./components/NewUser.js");




var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\users.js",
    _s = $RefreshSig$();








function users() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      users = _useState2[0],
      setUsers = _useState2[1];

  function getData() {
    return _getData.apply(this, arguments);
  }

  function _getData() {
    _getData = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var u, res, data;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_8__["checkLocal"])(router));
              _context.next = 3;
              return fetch("http://localhost:3001/users", {
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": u.token
                }
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              data = _context.sent;
              console.log(data);
              setUsers(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getData();
  }, [msg]);
  var columns = [{
    name: "id",
    selector: "_id",
    omit: true
  }, {
    name: "id_role",
    selector: "id_role",
    omit: true
  }, {
    name: "Rol",
    selector: "role",
    sortable: true,
    editable: true
  }, {
    name: "Nombre",
    selector: "username",
    sortable: true,
    editable: true
  }, {
    name: "Email",
    selector: "email",
    sortable: true,
    editable: true
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
      className: "title-h1",
      children: "Listado de Usuarios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-success",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        "class": "fi-rr-check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), msg.msg]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "containerButtons",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/products",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "btn btn-info btn-small",
            children: "Nuevo Usuario"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_TableUsers__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setMsg: setMsg,
        className: "mt-5",
        columns: columns,
        data: users
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s(users, "G5rZ/9ssT7FmX+G50dAdCSJ3veA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: formatMoney, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
function formatMoney(amount) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ",";
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";

  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    var negativeSign = amount < 0 ? "-" : "";
    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e);
  }
}
function replace(value) {
  var a = value.toString().replace(/\./g, "");
  var b = a.replace(/\,/g, ".");
  return b;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdVc2VyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZm9ybWF0LmpzIl0sIm5hbWVzIjpbIk5ld1VzZXIiLCJzZXRNc2ciLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwicHJvZHVjdE9iamVjdCIsInRpdGxlIiwicHJpY2UiLCJjb2RlYmFyIiwiY2F0ZWdvcnkiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwibXNnIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaGFuZGxlS2V5VXAiLCJlIiwiY2hhbmdlIiwidmFsdWUiLCJyZXBsYWNlIiwidGFyZ2V0IiwiUm93IiwiY2F0ZWdvcmllcyIsIm1hcCIsImkiLCJfaWQiLCJtYXJnaW5Ub3AiLCJ1c2VycyIsInJvdXRlciIsInVzZVJvdXRlciIsInNldFVzZXJzIiwiZ2V0RGF0YSIsInUiLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJ0b2tlbiIsInJlcyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwib21pdCIsInNvcnRhYmxlIiwiZWRpdGFibGUiLCJmb3JtYXRNb25leSIsImFtb3VudCIsImRlY2ltYWxDb3VudCIsImRlY2ltYWwiLCJ0aG91c2FuZHMiLCJNYXRoIiwiYWJzIiwiaXNOYU4iLCJuZWdhdGl2ZVNpZ24iLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJzbGljZSIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFDLEtBQUQsQ0FEVTtBQUFBLE1BQ25DQyxJQURtQztBQUFBLE1BQzdCQyxPQUQ2Qjs7QUFBQSxtQkFFUkYsc0RBQVEsQ0FBQyxLQUFELENBRkE7QUFBQSxNQUVuQ0csU0FGbUM7QUFBQSxNQUV4QkMsWUFGd0I7O0FBSTFDLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsU0FBSyxFQUFFLEVBRGE7QUFFcEJDLFNBQUssRUFBRSxHQUZhO0FBR3BCQyxXQUFPLEVBQUUsRUFIVztBQUlwQkMsWUFBUSxFQUFFO0FBSlUsR0FBdEI7O0FBSjBDLG1CQVVaVCxzREFBUSxDQUFDSyxhQUFELENBVkk7QUFBQSxNQVVuQ0ssT0FWbUM7QUFBQSxNQVUxQkMsVUFWMEI7O0FBWTFDLE1BQU1DLFlBQVk7QUFBQSxtU0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsa0JBRGEsR0FDTkQsS0FBSyxDQUFDRSxhQURBOztBQUFBLG9CQUVmRCxJQUFJLENBQUNFLGFBQUwsT0FBeUIsS0FGVjtBQUFBO0FBQUE7QUFBQTs7QUFHakJILG1CQUFLLENBQUNJLGNBQU47QUFDQUosbUJBQUssQ0FBQ0ssZUFBTjtBQUppQjtBQUFBOztBQUFBO0FBTWpCZCwwQkFBWSxDQUFDLElBQUQsQ0FBWjtBQU5pQjtBQUFBLHFCQVFJZSxLQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDM0RDLHNCQUFNLEVBQUUsTUFEbUQ7QUFF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QixDQUF0QztBQUVBLFdBQ0VOLFlBQVksSUFDWEssQ0FBQyxHQUFHbEMsQ0FBQyxDQUFDb0MsTUFBRixDQUFTLENBQVQsRUFBWUYsQ0FBWixJQUFpQlQsU0FBcEIsR0FBZ0MsRUFEdEIsQ0FBWixHQUVBekIsQ0FBQyxDQUFDb0MsTUFBRixDQUFTRixDQUFULEVBQVl2QyxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxPQUFPOEIsU0FBN0MsQ0FGQSxJQUdDRixZQUFZLEdBQ1RDLE9BQU8sR0FDUEUsSUFBSSxDQUFDQyxHQUFMLENBQVNMLE1BQU0sR0FBR3RCLENBQWxCLEVBQ0dnQyxPQURILENBQ1dULFlBRFgsRUFFR2MsS0FGSCxDQUVTLENBRlQsQ0FGUyxHQUtULEVBUkosQ0FERjtBQVdELEdBdEJELENBc0JFLE9BQU83QyxDQUFQLEVBQVU7QUFDVlAsV0FBTyxDQUFDQyxHQUFSLENBQVlNLENBQVo7QUFDRDtBQUNGO0FBRU0sU0FBU0csT0FBVCxDQUFpQkQsS0FBakIsRUFBdUI7QUFFNUIsTUFBTTRDLENBQUMsR0FBRzVDLEtBQUssQ0FBQ3VDLFFBQU4sR0FBaUJ0QyxPQUFqQixDQUF5QixLQUF6QixFQUFnQyxFQUFoQyxDQUFWO0FBQ0EsTUFBTTRDLENBQUMsR0FBR0QsQ0FBQyxDQUFDM0MsT0FBRixDQUFVLEtBQVYsRUFBaUIsR0FBakIsQ0FBVjtBQUNBLFNBQU80QyxDQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuZTVhYzMzMmU1MjAxZWUzZWExODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1VzZXIoeyBzZXRNc2cgfSkge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwcm9kdWN0T2JqZWN0ID0ge1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBwcmljZTogMC4wLFxyXG4gICAgY29kZWJhcjogXCJcIixcclxuICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gIH07XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUocHJvZHVjdE9iamVjdCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VmFsaWRhdGVkKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0TXNnKHsgc3RhdHVzOiAxLCBtc2c6IFwiU2UgaGEgYWdyZWdhZG8gY29ycmVjdGFtZW50ZSBlbCBudWV2byBwcm9kdWN0b1wiIH0pO1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgIHNldFByb2R1Y3QocHJvZHVjdE9iamVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TXNnKHsgc3RhdHVzOiAyLCBtc2c6ICdSZWxsZW5lIGVsIGZvcm11bGFyaW8nIH0pO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gY2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXEQvZywgXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvKFswLTldKShbMC05XXsyfSkkLywgXCIkMSwkMlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpXFwuPykvZywgXCIuXCIpO1xyXG4gICAgfVxyXG4gICAgZS50YXJnZXQudmFsdWUgPSBjaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UHJvZHVjdCh7IC4uLnByb2R1Y3QsIHByaWNlOiByZXBsYWNlKGUudGFyZ2V0LnZhbHVlKSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxyXG4gICAgICAgIE51ZXZvIFVzdWFyaW9cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgc2l6ZT17XCJsZ1wifSBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlPk51ZXZvIFByb2R1Y3RvPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgdmFsaWRhdGVkPXt2YWxpZGF0ZWR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvciZpYWN1dGU7YVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdCh7IC4uLnByb2R1Y3QsIGNhdGVnb3J5OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiU2VsZWNjaW9uYXIuLi5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYXIuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2kuX2lkfSB2YWx1ZT17aS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2kudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZWxlY2Npb25lIHVuYSBjYXRlZ29yJmlhY3V0ZTthXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgTm9tYnJlIFByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBJbnRyb2R1emNhIGVsIG5vbWJyZSBkZWwgcHJvZHVjdG8uXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgUHJlY2lvXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+JDwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17aGFuZGxlS2V5VXB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbnRyb2R1emNhIGVsIHByZWNpbyBlbiBEJm9hY3V0ZTtsYXJlcy5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+Q29ycmVjdG8hPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIEMmb2FjdXRlO2RpZ29cclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCBjb2RlYmFyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb2RlYmFyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZGViYXJcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQyZvYWN1dGU7ZGlnbyBkZSBiYXJyYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBjJm9hY3V0ZTtkaWdvIGRlIGJhcnJhcy4gZXNjYW5lYW5kbyBlbCBwcm9kdWN0b1xyXG4gICAgICAgICAgICAgICAgICBjb24gZWwgbGVjdG9yIGRlIGJhcnJhcyBwcm9wb3JjaW9uYWRvLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICBHdWFyZGFyIHByb2R1Y3RvXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFRhYmxlVXNlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFibGVVc2Vyc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcbmltcG9ydCBOZXdVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL05ld1VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXRVc2VycyhkYXRhKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW21zZ10pO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImlkXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcIl9pZFwiLFxyXG4gICAgICBvbWl0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJpZF9yb2xlXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImlkX3JvbGVcIixcclxuICAgICAgb21pdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUm9sXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcInJvbGVcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOb21icmVcIixcclxuICAgICAgc2VsZWN0b3I6IFwidXNlcm5hbWVcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFbWFpbFwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJlbWFpbFwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxpc3RhZG8gZGUgVXN1YXJpb3M8L2g0PlxyXG5cclxuICAgICAge21zZyA/IChcclxuICAgICAgICBtc2cuc3RhdHVzID09IDEgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmaS1yci1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAge21zZy5tc2d9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAge21zZy5tc2d9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJCdXR0b25zXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbWFsbFwiPk51ZXZvIFVzdWFyaW88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRhYmxlVXNlcnNcclxuICAgICAgICAgIHNldE1zZz17c2V0TXNnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YT17dXNlcnN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSBcIixcIiwgdGhvdXNhbmRzID0gXCIuXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudCk7XHJcbiAgICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xyXG4gIFxyXG4gICAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBhbW91bnQgPCAwID8gXCItXCIgOiBcIlwiO1xyXG4gIFxyXG4gICAgICBsZXQgaSA9IHBhcnNlSW50KFxyXG4gICAgICAgIChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpXHJcbiAgICAgICkudG9TdHJpbmcoKTtcclxuICAgICAgbGV0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIG5lZ2F0aXZlU2lnbiArXHJcbiAgICAgICAgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6IFwiXCIpICtcclxuICAgICAgICBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdGhvdXNhbmRzKSArXHJcbiAgICAgICAgKGRlY2ltYWxDb3VudFxyXG4gICAgICAgICAgPyBkZWNpbWFsICtcclxuICAgICAgICAgICAgTWF0aC5hYnMoYW1vdW50IC0gaSlcclxuICAgICAgICAgICAgICAudG9GaXhlZChkZWNpbWFsQ291bnQpXHJcbiAgICAgICAgICAgICAgLnNsaWNlKDIpXHJcbiAgICAgICAgICA6IFwiXCIpXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UodmFsdWUpe1xyXG4gICAgXHJcbiAgICBjb25zdCBhID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXC4vZywgXCJcIik7XHJcbiAgICBjb25zdCBiID0gYS5yZXBsYWNlKC9cXCwvZywgXCIuXCIpO1xyXG4gICAgcmV0dXJuIGJcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==