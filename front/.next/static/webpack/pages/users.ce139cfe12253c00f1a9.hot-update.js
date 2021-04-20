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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");






var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\components\\NewUser.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function NewUser(_ref) {
  _s();

  var _this = this;

  var setMsg = _ref.setMsg;
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
      variant: "info",
      onClick: handleShow,
      children: "Nuevo Usuario"
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

_s(NewUser, "8DHduI4YeTxRHJ9dz5C/+X6DDCQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdVc2VyLmpzIl0sIm5hbWVzIjpbIk5ld1VzZXIiLCJzZXRNc2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwicHJvZHVjdE9iamVjdCIsInRpdGxlIiwicHJpY2UiLCJjb2RlYmFyIiwiY2F0ZWdvcnkiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtc2ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJoYW5kbGVLZXlVcCIsImUiLCJjaGFuZ2UiLCJ2YWx1ZSIsInJlcGxhY2UiLCJ0YXJnZXQiLCJSb3ciLCJjYXRlZ29yaWVzIiwibWFwIiwiaSIsIl9pZCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUR3QyxrQkFFbEJDLHNEQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFbkNDLElBRm1DO0FBQUEsTUFFN0JDLE9BRjZCOztBQUFB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Q0FBYyxRQUFkO0FBQXVCLG9CQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBMEdFLHFFQUFDLDZEQUFELENBQU8sTUFBUDtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBTyxFQUFFTCxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLDhEQUFEO0FBQVEsaUJBQU8sRUFBQyxTQUFoQjtBQUEwQixpQkFBTyxFQUFFeEIsWUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUEySEQ7O0dBMUx1QmhCLE87VUFDTEcsc0Q7OztLQURLSCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzLmNlMTM5Y2ZlMTIyNTNjMDBmMWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdVc2VyKHsgc2V0TXNnIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwcm9kdWN0T2JqZWN0ID0ge1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBwcmljZTogMC4wLFxyXG4gICAgY29kZWJhcjogXCJcIixcclxuICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gIH07XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUocHJvZHVjdE9iamVjdCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdSA9IEpTT04ucGFyc2UoY2hlY2tMb2NhbChyb3V0ZXIpKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvZHVjdCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICBcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldE1zZyh7IHN0YXR1czogMSwgbXNnOiBcIlNlIGhhIGFncmVnYWRvIGNvcnJlY3RhbWVudGUgZWwgbnVldm8gcHJvZHVjdG9cIiB9KTtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgICBzZXRQcm9kdWN0KHByb2R1Y3RPYmplY3QpO1xyXG4gICAgICAgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE1zZyh7IHN0YXR1czogMiwgbXNnOiAnUmVsbGVuZSBlbCBmb3JtdWxhcmlvJyB9KTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKGUpID0+IHtcclxuICAgIGZ1bmN0aW9uIGNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICAucmVwbGFjZSgvXFxEL2csIFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbMC05XSkoWzAtOV17Mn0pJC8sIFwiJDEsJDJcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKVxcLj8pL2csIFwiLlwiKTtcclxuICAgIH1cclxuICAgIGUudGFyZ2V0LnZhbHVlID0gY2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCBwcmljZTogcmVwbGFjZShlLnRhcmdldC52YWx1ZSkgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImluZm9cIiBvbkNsaWNrPXtoYW5kbGVTaG93fT5cclxuICAgICAgICBOdWV2byBVc3VhcmlvXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNpemU9e1wibGdcIn0gc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5OdWV2byBQcm9kdWN0bzwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIENhdGVnb3ImaWFjdXRlO2FcclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNlbGVjY2lvbmFyLi4uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmFyLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpLl9pZH0gdmFsdWU9e2kuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uZSB1bmEgY2F0ZWdvciZpYWN1dGU7YVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIE5vbWJyZSBQcm9kdWN0b1xyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KHsgLi4ucHJvZHVjdCwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZSBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBub21icmUgZGVsIHByb2R1Y3RvLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIFByZWNpb1xyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PiQ8L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e2hhbmRsZUtleVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBwcmVjaW8gZW4gRCZvYWN1dGU7bGFyZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT17M30+XHJcbiAgICAgICAgICAgICAgICBDJm9hY3V0ZTtkaWdvXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KHsgLi4ucHJvZHVjdCwgY29kZWJhcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29kZWJhclwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2RlYmFyXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkMmb2FjdXRlO2RpZ28gZGUgYmFycmFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+Q29ycmVjdG8hPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEludHJvZHV6Y2EgZWwgYyZvYWN1dGU7ZGlnbyBkZSBiYXJyYXMuIGVzY2FuZWFuZG8gZWwgcHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgY29uIGVsIGxlY3RvciBkZSBiYXJyYXMgcHJvcG9yY2lvbmFkby5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgIENlcnJhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgR3VhcmRhciBwcm9kdWN0b1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=