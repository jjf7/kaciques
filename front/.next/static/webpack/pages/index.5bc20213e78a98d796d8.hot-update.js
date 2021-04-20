webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\index.js",
    _s = $RefreshSig$();











function index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      password = _useState3[0],
      setPassword = _useState3[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var result, user;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch("http://localhost:3001/signin", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              });

            case 3:
              result = _context.sent;
              _context.next = 6;
              return result.json();

            case 6:
              user = _context.sent;

              if (user.token) {
                setMsg({
                  status: 1,
                  msg: "Bienvenid@: ".concat(user.username, ",  en breve seras redireccionado...")
                }); //console.log(user)

                Object(_utils_local__WEBPACK_IMPORTED_MODULE_11__["setLocal"])(JSON.stringify(user));
                setTimeout(function () {
                  router.push("/dashboard");
                }, 5000);
              } else {
                setMsg({
                  status: 2,
                  msg: user
                });
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "containerCustom",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "title-h1 bg-light",
          children: ["SISTEMA DE LECTOR DE PRECIOS(SISLECPRE) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Ver 1.0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 83
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: [msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "alert alert-success",
            role: "alert",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fi-rr-check"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this), msg.msg]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "alert alert-danger",
            role: "alert",
            children: msg.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "offset-md-3 col-md-5 col-xs-12",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
                noValidate: true,
                className: "bg-light p-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
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
                    lineNumber: 84,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    sm: 9,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                      onChange: function onChange(e) {
                        setEmail(e.target.value);
                      },
                      name: "email",
                      id: "email",
                      required: true,
                      type: "email",
                      placeholder: "Email",
                      autoFocus: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                      children: "Correcto!"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                      type: "invalid",
                      children: "Introduzca el email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
                  as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"],
                  style: {
                    marginTop: "30px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
                    column: true,
                    sm: 3,
                    children: "Contrase\xF1a"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    sm: 9,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                      onChange: function onChange(e) {
                        setPassword(e.target.value);
                      },
                      name: "password",
                      id: "password",
                      required: true,
                      type: "password",
                      placeholder: "Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                      children: "Correcto!"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                      type: "invalid",
                      children: "Introduzca la contrasena"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                variant: "primary mt-5",
                onClick: handleSubmit,
                children: "Iniciar sesi\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(index, "HDkSO3owfDza5GPje/cA9ZgiFdY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwidXNlciIsInRva2VuIiwic3RhdHVzIiwidXNlcm5hbWUiLCJzZXRMb2NhbCIsInNldFRpbWVvdXQiLCJwdXNoIiwiUm93IiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBRTlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRjhCLGtCQUdSQyxzREFBUSxDQUFDLEVBQUQsQ0FIQTtBQUFBLE1BR3ZCQyxHQUh1QjtBQUFBLE1BR2xCQyxNQUhrQjs7QUFBQSxtQkFJSkYsc0RBQVEsQ0FBQyxFQUFELENBSko7QUFBQSxNQUl2QkcsS0FKdUI7QUFBQSxNQUloQkMsUUFKZ0I7O0FBQUEsbUJBS0VKLHNEQUFRLENBQUMsRUFBRCxDQUxWO0FBQUEsTUFLdkJLLFFBTHVCO0FBQUEsTUFLYkMsV0FMYTs7QUFPOUIsTUFBTUMsWUFBWTtBQUFBLGtTQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsZUFBQyxDQUFDQyxjQUFGO0FBRG1CO0FBQUEscUJBRUVDLEtBQUssQ0FBQyw4QkFBRCxFQUFpQztBQUN6REMsc0JBQU0sRUFBRSxNQURpRDtB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SUUsMEJBQUksRUFBQyxVQUpQO0FBS0Usd0JBQUUsRUFBQyxVQUxMO0FBTUUsOEJBQVEsTUFOVjtBQU9FLDBCQUFJLEVBQUMsVUFQUDtBQVFFLGlDQUFXLEVBQUM7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBV0UscUVBQUMsNERBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFYRixlQVlFLHFFQUFDLDREQUFELENBQU0sT0FBTixDQUFjLFFBQWQ7QUFBdUIsMEJBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFnREUscUVBQUMsOERBQUQ7QUFBUSx1QkFBTyxFQUFDLGNBQWhCO0FBQStCLHVCQUFPLEVBQUVyQixZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRBO0FBQUEsa0JBREY7QUF3RkQ7O0dBaEl1QlYsSztVQUVQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YmMyMDIxM2U3OGE5OGQ3OTZkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQge3NldExvY2FsfSBmcm9tICcuLi91dGlscy9sb2NhbCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zaWduaW5cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAodXNlci50b2tlbikge1xyXG4gICAgICBzZXRNc2coe1xyXG4gICAgICAgIHN0YXR1czogMSxcclxuICAgICAgICBtc2c6IGBCaWVudmVuaWRAOiAke3VzZXIudXNlcm5hbWV9LCAgZW4gYnJldmUgc2VyYXMgcmVkaXJlY2Npb25hZG8uLi5gLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2codXNlcilcclxuICAgICBcclxuICAgICAgc2V0TG9jYWwoSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TXNnKHsgc3RhdHVzOiAyLCBtc2c6IHVzZXIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLXVpY29ucy5mbGF0aWNvbi5jb20vdWljb25zLXJlZ3VsYXItcm91bmRlZC9jc3MvdWljb25zLXJlZ3VsYXItcm91bmRlZC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDdXN0b21cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlLWgxIGJnLWxpZ2h0XCI+U0lTVEVNQSBERSBMRUNUT1IgREUgUFJFQ0lPUyhTSVNMRUNQUkUpIDxzbWFsbD5WZXIgMS4wPC9zbWFsbD48L2g0PlxyXG4gICAgICAgIDxoNT5Mb2dpbjwvaDU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHttc2cgPyAoXHJcbiAgICAgICAgICAgIG1zZy5zdGF0dXMgPT0gMSA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZpLXJyLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAge21zZy5tc2d9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgIHttc2cubXNnfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbWQtMyBjb2wtbWQtNSBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIGNsYXNzTmFtZT1cImJnLWxpZ2h0IHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEludHJvZHV6Y2EgZWwgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5cclxuICAgICAgICAgICAgICAgICAgICBDb250cmFzZSZudGlsZGU7YVxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc209ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Db3JyZWN0byE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnRyb2R1emNhIGxhIGNvbnRyYXNlbmFcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5IG10LTVcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgSW5pY2lhciBzZXNpJm9hY3V0ZTtuXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=