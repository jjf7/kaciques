webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");






var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\dashboard.js",
    _s = $RefreshSig$();









function index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      dolar = _useState2[0],
      setDolar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      moneda = _useState3[0],
      setMoneda = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      id = _useState4[0],
      setId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Escanea el producto"),
      message = _useState5[0],
      setMessage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      title = _useState6[0],
      setTitle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      price = _useState7[0],
      setPrice = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_11__["checkLocal"])(router));
    Promise.all([fetch("http://localhost:3001/products", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token
      }
    }), fetch("http://localhost:3001/settings", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token
      }
    })]).then( /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var _ref3, res, res2, a, b;

        return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3 = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2), res = _ref3[0], res2 = _ref3[1];
                _context.next = 3;
                return res.json();

              case 3:
                a = _context.sent;
                _context.next = 6;
                return res2.json();

              case 6:
                b = _context.sent;
                return _context.abrupt("return", [a, b]);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()).then(function (_ref4) {
      var _ref5 = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 2),
          a = _ref5[0],
          b = _ref5[1];

      setProducts(a);
      setDolar(b[0].dolar);
      setMoneda(b[0].moneda);
    })["catch"](function (e) {
      return console.log(e);
    });
  }, []);

  function search(_x2) {
    return _search.apply(this, arguments);
  }

  function _search() {
    _search = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var result;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return products.find(function (i) {
                return i.codebar === id;
              });

            case 3:
              result = _context2.sent;

              if (result) {
                setMessage("Encontrado!");
                e.target.select();
                setTitle(result.title);
                setPrice(Object(_utils_format__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(result.price * dolar));
              } else {
                setMessage(id === "" ? "Escanea el producto" : "No existe");
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _search.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "title-h1",
        children: "Lector de Precios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        style: {
          display: "flex",
          justifyContent: "center",
          height: "50vh"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "70%"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: products.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"],
                className: "mt-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  sm: 12,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
                    type: "text",
                    name: "id",
                    value: id,
                    onChange: function onChange(e) {
                      return setId(e.target.value);
                    },
                    onKeyUp: search,
                    autoComplete: "off",
                    autoFocus: "on",
                    placeholder: "C\xF3digo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                    className: message === "Escanea el producto" ? null : message === "No existe" ? "rojo" : "verde",
                    children: message === "Encontrado!" ? "" : message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  children: message === "Encontrado!" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "find",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      className: "titleProduct",
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                      className: "priceProduct",
                      children: [" ", "Precio: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                        children: price
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 35
                      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: moneda
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 50
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 23
                  }, this) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "find",
              children: "Espere por favor..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(index, "Eh1GtqrQC4Ar7GqKFO2uQ0lEDbI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsIm1vbmVkYSIsInNldE1vbmVkYSIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwidXNlRWZmZWN0IiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwicmVzMiIsImpzb24iLCJhIiwiYiIsImUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaSIsImNvZGViYXIiLCJyZXN1bHQiLCJ0YXJnZXQiLCJzZWxlY3QiLCJmb3JtYXRNb25leSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIndpZHRoIiwidGV4dEFsaWduIiwibGVuZ3RoIiwiUm93IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUQ4QixrQkFHRUMsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUd2QkMsUUFIdUI7QUFBQSxNQUdiQyxXQUhhOztBQUFBLG1CQUlKRixzREFBUSxDQUFDLEVBQUQsQ0FKSjtBQUFBLE1BSXZCRyxLQUp1QjtBQUFBLE1BSWhCQyxRQUpnQjs7QUFBQSxtQkFLRkosc0RBQVEsQ0FBQyxFQUFELENBTE47QUFBQSxNQUt2QkssTUFM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QURBLEdBRUEsT0FOUjtBQUFBLDhCQVNHQSxPQUFPLEtBQUssYUFBWixHQUE0QixFQUE1QixHQUFpQ0E7QUFUcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLGVBNkJBLHFFQUFDLDJEQUFEO0FBQUEsdUNBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDQ0EsT0FBTyxLQUFLLGFBQVosZ0JBQ0c7QUFBSyw2QkFBUyxFQUFDLE1BQWY7QUFBQSw0Q0FDRTtBQUFJLCtCQUFTLEVBQUMsY0FBZDtBQUFBLGdDQUE4QkU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQUksK0JBQVMsRUFBQyxjQUFkO0FBQUEsaUNBQ0csR0FESCwyQkFFVTtBQUFBLGtDQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRlYsb0JBRXlCO0FBQUEsa0NBQU9SO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESCxHQVNHO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxnQkErQ0M7QUFBTSx1QkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0VEOztHQTNIdUJSLEs7VUFDUEUsc0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjMxNzQyNDRjNWFlOGQ2NTNjZmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RvbGFyLCBzZXREb2xhcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21vbmVkYSwgc2V0TW9uZWRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1ID0gSlNPTi5wYXJzZShjaGVja0xvY2FsKHJvdXRlcikpO1xyXG4gICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0c1wiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3NldHRpbmdzXCIsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgIF0pXHJcbiAgICAgIC50aGVuKGFzeW5jIChbcmVzLCByZXMyXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgY29uc3QgYiA9IGF3YWl0IHJlczIuanNvbigpXHJcbiAgICAgICAgcmV0dXJuIFthLCBiXVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoW2EsIGJdKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMoYSk7XHJcbiAgICAgICAgc2V0RG9sYXIoYlswXS5kb2xhcik7XHJcbiAgICAgICAgc2V0TW9uZWRhKGJbMF0ubW9uZWRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2goZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvZHVjdHMuZmluZCgoaSkgPT4gaS5jb2RlYmFyID09PSBpZCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiRW5jb250cmFkbyFcIik7XHJcbiAgICAgIGUudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgICBzZXRUaXRsZShyZXN1bHQudGl0bGUpO1xyXG4gICAgICBzZXRQcmljZShmb3JtYXRNb25leShyZXN1bHQucHJpY2UgKiBkb2xhcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVzc2FnZShpZCA9PT0gXCJcIiA/IFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiIDogXCJObyBleGlzdGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxlY3RvciBkZSBQcmVjaW9zPC9oND5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI3MCVcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sICBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkMmb2FjdXRlO2RpZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID09PSBcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbWVzc2FnZSA9PT0gXCJObyBleGlzdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyb2pvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidmVyZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlID09PSBcIkVuY29udHJhZG8hXCIgPyBcIlwiIDogbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZSA9PT0gXCJFbmNvbnRyYWRvIVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVByb2R1Y3RcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByaWNlUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW86IDxiPntwcmljZX08L2I+IDxzcGFuPnttb25lZGF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmRcIj5Fc3BlcmUgcG9yIGZhdm9yLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9