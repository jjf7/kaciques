webpackHotUpdate_N_E("pages/products",{

/***/ "./components/NewProduct.js":
/*!**********************************!*\
  !*** ./components/NewProduct.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewCategory; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");






var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\components\\NewProduct.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function NewCategory(_ref) {
  _s();

  var _this = this;

  var categories = _ref.categories,
      setMsg = _ref.setMsg;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();

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
      var u, form, result, response;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_14__["checkLocal"])(router));
              form = event.currentTarget;

              if (!(form.checkValidity() === false)) {
                _context.next = 7;
                break;
              }

              event.preventDefault();
              event.stopPropagation();
              _context.next = 16;
              break;

            case 7:
              setValidated(true);
              _context.next = 10;
              return fetch("http://localhost:3001/products", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": u.token
                },
                body: JSON.stringify(product)
              });

            case 10:
              result = _context.sent;
              _context.next = 13;
              return result.json();

            case 13:
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

            case 16:
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
      variant: "primary",
      onClick: handleShow,
      children: "Nuevo Producto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
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
              lineNumber: 89,
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
                  lineNumber: 103,
                  columnNumber: 19
                }, this), categories.map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i._id,
                    children: i.title
                  }, i._id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Seleccione una categor\xEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
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
              lineNumber: 118,
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
                lineNumber: 122,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el nombre del producto."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
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
              lineNumber: 140,
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
                    lineNumber: 146,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
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
                  lineNumber: 148,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                  type: "invalid",
                  children: "Introduzca el precio en D\xF3lares."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                  children: "Correcto!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
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
              lineNumber: 165,
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
                lineNumber: 169,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el c\xF3digo de barras. escaneando el producto con el lector de barras proporcionado."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "secondary",
          onClick: handleClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "primary",
          onClick: handleSubmit,
          children: "Guardar producto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(NewCategory, "8DHduI4YeTxRHJ9dz5C/+X6DDCQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"]];
});

_c = NewCategory;

var _c;

$RefreshReg$(_c, "NewCategory");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIk5ld0NhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInNldE1zZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ2YWxpZGF0ZWQiLCJzZXRWYWxpZGF0ZWQiLCJwcm9kdWN0T2JqZWN0IiwidGl0bGUiLCJwcmljZSIsImNvZGViYXIiLCJjYXRlZ29yeSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidG9rZW4iLCJib2R5Iiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIm1zZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImhhbmRsZUtleVVwIiwiZSIsImNoYW5nZSIsInZhbHVlIiwicmVwbGFjZSIsInRhcmdldCIsIlJvdyIsIm1hcCIsImkiLCJfaWQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBNkM7QUFBQTs7QUFBQTs7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzFELE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRDBELGtCQUVsQ0Msc0RBQVEsQ0FBQyxLQUFELENBRjBCO0FB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QTtBQUFBO0FBQUEsc0JBWEYsZUFZRSxxRUFBQyw0REFBRCxDQUFNLE9BQU4sQ0FBYyxRQUFkO0FBQXVCLG9CQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBMEdFLHFFQUFDLDZEQUFELENBQU8sTUFBUDtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBTyxFQUFFTCxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLDhEQUFEO0FBQVEsaUJBQU8sRUFBQyxTQUFoQjtBQUEwQixpQkFBTyxFQUFFeEIsWUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUEySEQ7O0dBMUx1QmpCLFc7VUFDUEksc0Q7OztLQURPSixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjZhOTllNTYzNmMxMGY5Zjg4ZGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdDYXRlZ29yeSh7IGNhdGVnb3JpZXMsIHNldE1zZyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RPYmplY3QgPSB7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHByaWNlOiAwLjAsXHJcbiAgICBjb2RlYmFyOiBcIlwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgfTtcclxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShwcm9kdWN0T2JqZWN0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB1ID0gSlNPTi5wYXJzZShjaGVja0xvY2FsKHJvdXRlcikpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VmFsaWRhdGVkKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0TXNnKHsgc3RhdHVzOiAxLCBtc2c6IFwiU2UgaGEgYWdyZWdhZG8gY29ycmVjdGFtZW50ZSBlbCBudWV2byBwcm9kdWN0b1wiIH0pO1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgIHNldFByb2R1Y3QocHJvZHVjdE9iamVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TXNnKHsgc3RhdHVzOiAyLCBtc2c6ICdSZWxsZW5lIGVsIGZvcm11bGFyaW8nIH0pO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gY2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXEQvZywgXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvKFswLTldKShbMC05XXsyfSkkLywgXCIkMSwkMlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpXFwuPykvZywgXCIuXCIpO1xyXG4gICAgfVxyXG4gICAgZS50YXJnZXQudmFsdWUgPSBjaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UHJvZHVjdCh7IC4uLnByb2R1Y3QsIHByaWNlOiByZXBsYWNlKGUudGFyZ2V0LnZhbHVlKSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxyXG4gICAgICAgIE51ZXZvIFByb2R1Y3RvXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNpemU9e1wibGdcIn0gc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5OdWV2byBQcm9kdWN0bzwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIENhdGVnb3ImaWFjdXRlO2FcclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNlbGVjY2lvbmFyLi4uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmFyLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpLl9pZH0gdmFsdWU9e2kuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uZSB1bmEgY2F0ZWdvciZpYWN1dGU7YVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIE5vbWJyZSBQcm9kdWN0b1xyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KHsgLi4ucHJvZHVjdCwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZSBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBub21icmUgZGVsIHByb2R1Y3RvLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIFByZWNpb1xyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PiQ8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e2hhbmRsZUtleVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBwcmVjaW8gZW4gRCZvYWN1dGU7bGFyZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT17M30+XHJcbiAgICAgICAgICAgICAgICBDJm9hY3V0ZTtkaWdvXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KHsgLi4ucHJvZHVjdCwgY29kZWJhcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29kZWJhclwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2RlYmFyXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkMmb2FjdXRlO2RpZ28gZGUgYmFycmFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+Q29ycmVjdG8hPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEludHJvZHV6Y2EgZWwgYyZvYWN1dGU7ZGlnbyBkZSBiYXJyYXMuIGVzY2FuZWFuZG8gZWwgcHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgY29uIGVsIGxlY3RvciBkZSBiYXJyYXMgcHJvcG9yY2lvbmFkby5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgIENlcnJhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgR3VhcmRhciBwcm9kdWN0b1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=