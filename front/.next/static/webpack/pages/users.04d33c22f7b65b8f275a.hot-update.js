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

  var userObject = {
    id: "",
    id_role: "",
    role: "",
    username: "",
    email: "",
    password: ""
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(userObject),
      user = _useState3[0],
      setUser = _useState3[1];

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
                body: JSON.stringify(user)
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
                  msg: "Se ha agregado correctamente el nuevo usuario"
                });
                setShow(false);
                setProduct(userObject);
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
      lineNumber: 80,
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
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
              lineNumber: 91,
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
                  lineNumber: 105,
                  columnNumber: 19
                }, this), categories.map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i._id,
                    children: i.title
                  }, i._id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Seleccione una categor\xEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
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
              lineNumber: 120,
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
                lineNumber: 124,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el nombre del producto."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
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
              lineNumber: 142,
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
                    lineNumber: 148,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
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
                  lineNumber: 150,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                  type: "invalid",
                  children: "Introduzca el precio en D\xF3lares."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                  children: "Correcto!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
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
              lineNumber: 167,
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
                lineNumber: 171,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el c\xF3digo de barras. escaneando el producto con el lector de barras proporcionado."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "secondary",
          onClick: handleClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "primary",
          onClick: handleSubmit,
          children: "Guardar producto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(NewUser, "OgwdK6HdhRJFNQzJcjwarLN6jHQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdVc2VyLmpzIl0sIm5hbWVzIjpbIk5ld1VzZXIiLCJzZXRNc2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwidXNlck9iamVjdCIsImlkIiwiaWRfcm9sZSIsInJvbGUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwic2V0VXNlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtc2ciLCJzZXRQcm9kdWN0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaGFuZGxlS2V5VXAiLCJlIiwiY2hhbmdlIiwidmFsdWUiLCJyZXBsYWNlIiwidGFyZ2V0IiwicHJvZHVjdCIsInByaWNlIiwiUm93IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibWFwIiwiaSIsIl9pZCIsInRpdGxlIiwibWFyZ2luVG9wIiwiY29kZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMxQyxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUQwQyxrQkFF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REYsZUFXRSxxRUFBQyw0REFBRCxDQUFNLE9BQU4sQ0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGLGVBWUUscUVBQUMsNERBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1QixvQkFBSSxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQTBHRSxxRUFBQyw2REFBRCxDQUFPLE1BQVA7QUFBQSxnQ0FDRSxxRUFBQyw4REFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsaUJBQU8sRUFBRUwsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyw4REFBRDtBQUFRLGlCQUFPLEVBQUMsU0FBaEI7QUFBMEIsaUJBQU8sRUFBRXpCLFlBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBMkhEOztHQTVMdUJsQixPO1VBQ1BHLHNEOzs7S0FET0gsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy4wNGQzM2MyMmY3YjY1YjhmMjc1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gXCIuLi91dGlscy9mb3JtYXRcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tMb2NhbCB9IGZyb20gXCIuLi91dGlscy9sb2NhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3VXNlcih7IHNldE1zZyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHVzZXJPYmplY3QgPSB7XHJcbiAgICBpZDogXCJcIixcclxuICAgIGlkX3JvbGU6IFwiXCIsXHJcbiAgICByb2xlOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH07XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodXNlck9iamVjdCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdSA9IEpTT04ucGFyc2UoY2hlY2tMb2NhbChyb3V0ZXIpKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICBcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldE1zZyh7IHN0YXR1czogMSwgbXNnOiBcIlNlIGhhIGFncmVnYWRvIGNvcnJlY3RhbWVudGUgZWwgbnVldm8gdXN1YXJpb1wiIH0pO1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgIHNldFByb2R1Y3QodXNlck9iamVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TXNnKHsgc3RhdHVzOiAyLCBtc2c6ICdSZWxsZW5lIGVsIGZvcm11bGFyaW8nIH0pO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gY2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXEQvZywgXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvKFswLTldKShbMC05XXsyfSkkLywgXCIkMSwkMlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpXFwuPykvZywgXCIuXCIpO1xyXG4gICAgfVxyXG4gICAgZS50YXJnZXQudmFsdWUgPSBjaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UHJvZHVjdCh7IC4uLnByb2R1Y3QsIHByaWNlOiByZXBsYWNlKGUudGFyZ2V0LnZhbHVlKSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxyXG4gICAgICAgIE51ZXZvIFVzdWFyaW9cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgc2l6ZT17XCJsZ1wifSBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlPk51ZXZvIFByb2R1Y3RvPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgdmFsaWRhdGVkPXt2YWxpZGF0ZWR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvciZpYWN1dGU7YVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdCh7IC4uLnByb2R1Y3QsIGNhdGVnb3J5OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiU2VsZWNjaW9uYXIuLi5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYXIuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2kuX2lkfSB2YWx1ZT17aS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2kudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZWxlY2Npb25lIHVuYSBjYXRlZ29yJmlhY3V0ZTthXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgTm9tYnJlIFByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBJbnRyb2R1emNhIGVsIG5vbWJyZSBkZWwgcHJvZHVjdG8uXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgUHJlY2lvXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+JDwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17aGFuZGxlS2V5VXB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbnRyb2R1emNhIGVsIHByZWNpbyBlbiBEJm9hY3V0ZTtsYXJlcy5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+Q29ycmVjdG8hPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIEMmb2FjdXRlO2RpZ29cclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCBjb2RlYmFyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb2RlYmFyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZGViYXJcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQyZvYWN1dGU7ZGlnbyBkZSBiYXJyYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBjJm9hY3V0ZTtkaWdvIGRlIGJhcnJhcy4gZXNjYW5lYW5kbyBlbCBwcm9kdWN0b1xyXG4gICAgICAgICAgICAgICAgICBjb24gZWwgbGVjdG9yIGRlIGJhcnJhcyBwcm9wb3JjaW9uYWRvLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICBHdWFyZGFyIHByb2R1Y3RvXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==