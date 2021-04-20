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
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");






var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\components\\NewUser.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function NewUser(_ref) {
  _s();

  var setMsg = _ref.setMsg;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      validated = _useState2[0],
      setValidated = _useState2[1];

  var userObject = {
    id: "",
    id_role: "",
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
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_12__["checkLocal"])(router));
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
                body: JSON.stringify({
                  username: user.username,
                  email: user.email,
                  password: user.password,
                  roles: user.roles
                })
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
                  msg: "Rellene el formulario"
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "info",
      onClick: handleShow,
      children: "Nuevo Usuario"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "lg",
      show: show,
      onHide: handleClose,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
          children: "Nuevo usuario"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          validated: validated,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              column: true,
              sm: 3,
              children: "Rol"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
              sm: 9,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control, {
                onChange: function onChange(e) {
                  setUser(_objectSpread(_objectSpread({}, user), {}, {
                    id_role: e.target.value
                  }));
                },
                name: "id_role",
                id: "id_role",
                required: true,
                as: "select",
                defaultValue: "Seleccionar...",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "",
                  children: "Seleccionar..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "6079ab4c3c6b1e091c985626",
                  children: "Admin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "6079ab4c3c6b1e091c985625",
                  children: "User"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                type: "invalid",
                children: "Seleccione un rol"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"],
            style: {
              marginTop: "30px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              column: true,
              sm: 3,
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
              sm: 9,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                onChange: function onChange(e) {
                  setUser(_objectSpread(_objectSpread({}, user), {}, {
                    username: e.target.value
                  }));
                },
                name: "username",
                id: "username",
                required: true,
                value: user.username,
                type: "text",
                placeholder: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el nombre del usuario"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"],
            style: {
              marginTop: "30px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              column: true,
              sm: 3,
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
              sm: 9,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                onChange: function onChange(e) {
                  setUser(_objectSpread(_objectSpread({}, user), {}, {
                    email: e.target.value
                  }));
                },
                name: "email",
                id: "email",
                required: true,
                value: user.email,
                type: "text",
                placeholder: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                children: "Correcto!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                type: "invalid",
                children: "Introduzca el email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Footer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "secondary",
          onClick: handleClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "primary",
          onClick: handleSubmit,
          children: "Guardar usuario"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(NewUser, "OgwdK6HdhRJFNQzJcjwarLN6jHQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdVc2VyLmpzIl0sIm5hbWVzIjpbIk5ld1VzZXIiLCJzZXRNc2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwidXNlck9iamVjdCIsImlkIiwiaWRfcm9sZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidG9rZW4iLCJib2R5Iiwic3RyaW5naWZ5Iiwicm9sZXMiLCJyZXN1bHQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwibXNnIiwic2V0UHJvZHVjdCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsIlJvdyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMxQyxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUQwQyxrQkFFbEJDLHNEQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFbkNDLElBRm1DO0FBQUEsTUFFN0JDLE9BRjZCOztBQUFBLG1CQUdSRixzREFBUSxDQUFDLEtBQUQsQ0FIQTtBQUFBLE1BR25DRyxTQUhtQztBQUFBLE1BR3hCQyxZ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aUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBTyxFQUFFOEIsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyw4REFBRDtBQUFRLGlCQUFPLEVBQUMsU0FBaEI7QUFBMEIsaUJBQU8sRUFBRTFCLFlBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBZ0dEOztHQTFKdUJqQixPO1VBQ1BHLHNEOzs7S0FET0gsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy41MWZkZDczMjdmZGVmYTRjOGI2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdVc2VyKHsgc2V0TXNnIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbGlkYXRlZCwgc2V0VmFsaWRhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdXNlck9iamVjdCA9IHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgaWRfcm9sZTogXCJcIixcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9O1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHVzZXJPYmplY3QpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0c1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcclxuICAgICAgICAgICAgcm9sZXM6IHVzZXIucm9sZXMsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldE1zZyh7XHJcbiAgICAgICAgICBzdGF0dXM6IDEsXHJcbiAgICAgICAgICBtc2c6IFwiU2UgaGEgYWdyZWdhZG8gY29ycmVjdGFtZW50ZSBlbCBudWV2byB1c3VhcmlvXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdCh1c2VyT2JqZWN0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNc2coeyBzdGF0dXM6IDIsIG1zZzogXCJSZWxsZW5lIGVsIGZvcm11bGFyaW9cIiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCIgb25DbGljaz17aGFuZGxlU2hvd30+XHJcbiAgICAgICAgTnVldm8gVXN1YXJpb1xyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbCBzaXplPXtcImxnXCJ9IHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+TnVldm8gdXN1YXJpbzwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT17M30+XHJcbiAgICAgICAgICAgICAgICBSb2xcclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCBpZF9yb2xlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImlkX3JvbGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImlkX3JvbGVcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlNlbGVjY2lvbmFyLi4uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmFyLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDc5YWI0YzNjNmIxZTA5MWM5ODU2MjZcIj5BZG1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjA3OWFiNGMzYzZiMWUwOTFjOTg1NjI1XCI+VXNlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZWxlY2Npb25lIHVuIHJvbFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs5fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+Q29ycmVjdG8hPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEludHJvZHV6Y2EgZWwgbm9tYnJlIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBJbnRyb2R1emNhIGVsIGVtYWlsXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICBDZXJyYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIEd1YXJkYXIgdXN1YXJpb1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=