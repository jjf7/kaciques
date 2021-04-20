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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "containerCustom",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "title-h1",
        children: "SISTEMA DE LECTOR DE PRECIOS(SISLECPRE)Ver 1."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-success",
          role: "alert",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            "class": "fi-rr-check"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, this), msg.msg]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-danger",
          role: "alert",
          children: msg.msg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
                  lineNumber: 73,
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
                    lineNumber: 77,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                    children: "Correcto!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                    type: "invalid",
                    children: "Introduzca el email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
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
                  lineNumber: 96,
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
                    lineNumber: 100,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                    children: "Correcto!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Control.Feedback, {
                    type: "invalid",
                    children: "Introduzca la contrasena"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
              variant: "primary mt-5",
              onClick: handleSubmit,
              children: "Iniciar sesi\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwidXNlciIsInRva2VuIiwic3RhdHVzIiwidXNlcm5hbWUiLCJzZXRMb2NhbCIsInNldFRpbWVvdXQiLCJwdXNoIiwiUm93IiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUU5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUY4QixrQkFHUkMsc0RBQVEsQ0FBQyxFQUFELENBSEE7QUFBQSxNQUd2QkMsR0FIdUI7QUFBQSxNQUdsQkMsTUFIa0I7O0FBQUEsbUJBSUpGLHNEQUFRLENBQUMsRUFBRCxDQUpKO0FBQUEsTUFJdkJHLEtBSnVCO0FBQUEsTUFJaEJDLFFBSmdCOztBQUFBLG1CQUtFSixzREFBUSxDQUFDLEVBQUQsQ0FMVjtBQUFBLE1BS3ZCSyxRQUx1QjtBQUFBLE1BS2JDLFdBTGE7O0FBTzlCLE1BQU1DLFlBQVk7QUFBQSxrU0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLGVBQUMsQ0FBQ0MsY0FBRjtBQURtQjtBQUFBLHFCQUVFQyxLQUFLLENBQUMsOEJBQUQsRUFBaUM7QUFDekRDLHNCQUFNLEVBQUUsTUFEaUQ7QUFFekRDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGZ0Q7QUFLekRDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CWix1QkFBSyxFQUFMQSxLQURtQjtBQUVuQkUsMEJBQVEsRUFBUkE7QUFGbUIsaUJBQWY7QUFMbUQsZUFBakMsQ0FGUDs7QUFBQTtBQUViVyxvQkFGYTtBQUFBO0FBQUEscUJBYUFBLE1BQU0sQ0FBQ0MsSUFBUCxFQWJBOztBQUFBO0FBYWJDLGtCQWJhOztBQWVuQixrQkFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2RqQixzQkFBTSxDQUFDO0FBQ0xrQix3QkFBTSxFQUFFLENBREg7QUFFTG5CLHFCQUFHLHdCQUFpQmlCLElBQUksQ0FBQ0csUUFBdEI7QUFGRSxpQkFBRCxDQUFOLENBRGMsQ0FNZDs7QUFFQUMsOEVBQVEsQ0FBQ1IsSUFBSSxDQUFDQyxTQUFMLENBQWVHLElBQWYsQ0FBRCxDQUFSO0FBR0FLLDBCQUFVLENBQUMsWUFBTTtBQUNmekIsd0JBQU0sQ0FBQzBCLElBQVAsQ0FBWSxZQUFaO0FBQ0QsaUJBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxlQWRELE1BY087QUFDTHRCLHNCQUFNLENBQUM7QUFBRWtCLHdCQUFNLEVBQUUsQ0FBVjtBQUFhbkIscUJBQUcsRUFBRWlCO0FBQWxCLGlCQUFELENBQU47QUFDRDs7QUEvQmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpYLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBaUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLG1CQUNHTixHQUFHLEdBQ0ZBLEdBQUcsQ0FBQ21CLE1BQUosSUFBYyxDQUFkLGdCQUNFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFxQyxjQUFJLEVBQUMsT0FBMUM7QUFBQSxrQ0FDRTtBQUFHLHFCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHbkIsR0FBRyxDQUFDQSxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixnQkFNRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBb0MsY0FBSSxFQUFDLE9BQXpDO0FBQUEsb0JBQ0dBLEdBQUcsQ0FBQ0E7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBBLEdBWUYsRUFiSixlQWVFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQUEsb0NBQ0UscUVBQUMsNERBQUQ7QUFBTSx3QkFBVSxNQUFoQjtBQUFpQix1QkFBUyxFQUFDLGNBQTNCO0FBQUEsc0NBQ0UscUVBQUMsNERBQUQsQ0FBTSxLQUFOO0FBQVksa0JBQUUsRUFBRXdCLDJEQUFoQjtBQUFxQixxQkFBSyxFQUFFO0FBQUVDLDJCQUFTLEVBQUU7QUFBYixpQkFBNUI7QUFBQSx3Q0FDRSxxRUFBQyw0REFBRCxDQUFNLEtBQU47QUFBWSx3QkFBTSxNQUFsQjtBQUFtQixvQkFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBSUUscUVBQUMsMkRBQUQ7QUFBSyxvQkFBRSxFQUFFLENBQVQ7QUFBQSwwQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLDRCQUFRLEVBQUUsa0JBQUNsQixDQUFELEVBQU87QUFDZkosOEJBQVEsQ0FBQ0ksQ0FBQyxDQUFDbUIsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxxQkFISDtBQUlFLHdCQUFJLEVBQUMsT0FKUDtBQUtFLHNCQUFFLEVBQUMsT0FMTDtBQU1FLDRCQUFRLE1BTlY7QUFPRSx3QkFBSSxFQUFDLE9BUFA7QUFRRSwrQkFBVyxFQUFDLE9BUmQ7QUFTRSw2QkFBUztBQVRYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFZRSxxRUFBQyw0REFBRCxDQUFNLE9BQU4sQ0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVpGLGVBYUUscUVBQUMsNERBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1Qix3QkFBSSxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUF3QkUscUVBQUMsNERBQUQsQ0FBTSxLQUFOO0FBQVksa0JBQUUsRUFBRUgsMkRBQWhCO0FBQXFCLHFCQUFLLEVBQUU7QUFBRUMsMkJBQVMsRUFBRTtBQUFiLGlCQUE1QjtBQUFBLHdDQUNFLHFFQUFDLDREQUFELENBQU0sS0FBTjtBQUFZLHdCQUFNLE1BQWxCO0FBQW1CLG9CQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRSxxRUFBQywyREFBRDtBQUFLLG9CQUFFLEVBQUUsQ0FBVDtBQUFBLDBDQUNFLHFFQUFDLG9FQUFEO0FBQ0UsNEJBQVEsRUFBRSxrQkFBQ2xCLENBQUQsRUFBTztBQUNmRixpQ0FBVyxDQUFDRSxDQUFDLENBQUNtQixNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELHFCQUhIO0FBSUUsd0JBQUksRUFBQyxVQUpQO0FBS0Usc0JBQUUsRUFBQyxVQUxMO0FBTUUsNEJBQVEsTUFOVjtBQU9FLHdCQUFJLEVBQUMsVUFQUDtBQVFFLCtCQUFXLEVBQUM7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBV0UscUVBQUMsNERBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYRixlQVlFLHFFQUFDLDREQUFELENBQU0sT0FBTixDQUFjLFFBQWQ7QUFBdUIsd0JBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFnREUscUVBQUMsOERBQUQ7QUFBUSxxQkFBTyxFQUFDLGNBQWhCO0FBQStCLHFCQUFPLEVBQUVyQixZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2RUQ7O0dBckh1QlYsSztVQUVQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjBiZjgyNGIwMzUxZDc2MTVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQge3NldExvY2FsfSBmcm9tICcuLi91dGlscy9sb2NhbCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2lnbmluXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHVzZXIudG9rZW4pIHtcclxuICAgICAgc2V0TXNnKHtcclxuICAgICAgICBzdGF0dXM6IDEsXHJcbiAgICAgICAgbXNnOiBgQmllbnZlbmlkQDogJHt1c2VyLnVzZXJuYW1lfSwgIGVuIGJyZXZlIHNlcmFzIHJlZGlyZWNjaW9uYWRvLi4uYCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgXHJcbiAgICAgIHNldExvY2FsKEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICAgIFxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1zZyh7IHN0YXR1czogMiwgbXNnOiB1c2VyIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQ3VzdG9tXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPlNJU1RFTUEgREUgTEVDVE9SIERFIFBSRUNJT1MoU0lTTEVDUFJFKVZlciAxLjwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHttc2cgPyAoXHJcbiAgICAgICAgICAgIG1zZy5zdGF0dXMgPT0gMSA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmktcnItY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICB7bXNnLm1zZ31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAge21zZy5tc2d9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1tZC0zIGNvbC1tZC01IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+Q29ycmVjdG8hPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSW50cm9kdXpjYSBlbCBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRyYXNlJm50aWxkZTthXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPkNvcnJlY3RvITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEludHJvZHV6Y2EgbGEgY29udHJhc2VuYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnkgbXQtNVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2kmb2FjdXRlO25cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=