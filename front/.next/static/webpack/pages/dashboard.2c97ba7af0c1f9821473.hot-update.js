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
          alignItems: "center",
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
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  className: "mt-4",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsIm1vbmVkYSIsInNldE1vbmVkYSIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwidXNlRWZmZWN0IiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwicmVzMiIsImpzb24iLCJhIiwiYiIsImUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaSIsImNvZGViYXIiLCJyZXN1bHQiLCJ0YXJnZXQiLCJzZWxlY3QiLCJmb3JtYXRNb25leSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsInRleHRBbGlnbiIsImxlbmd0aCIsIlJvdyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFEOEIsa0JBR0VDLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHdkJDLFFBSHVCO0FBQUEsTUFHYkMsV0FIYTs7QUFBQSxtQkFJSkYsc0RBQVEsQ0FBQyxFQUFELENBSko7QUFBQSxNQUl2QkcsS0FKdUI7QUFBQSxNQUloQkMsUUFKZ0I7O0FBQUEsbUJBS0ZKLHNEQUFRLENBQUMsRUFBRCxDQUxOO0FB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N2FmMGMxZjk4MjE0NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gXCIuLi91dGlscy9mb3JtYXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrTG9jYWwgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZG9sYXIsIHNldERvbGFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbW9uZWRhLCBzZXRNb25lZGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJFc2NhbmVhIGVsIHByb2R1Y3RvXCIpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2V0dGluZ3NcIiwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgXSlcclxuICAgICAgLnRoZW4oYXN5bmMgKFtyZXMsIHJlczJdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBjb25zdCBiID0gYXdhaXQgcmVzMi5qc29uKClcclxuICAgICAgICByZXR1cm4gW2EsIGJdXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChbYSwgYl0pID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0cyhhKTtcclxuICAgICAgICBzZXREb2xhcihiWzBdLmRvbGFyKTtcclxuICAgICAgICBzZXRNb25lZGEoYlswXS5tb25lZGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9kdWN0cy5maW5kKChpKSA9PiBpLmNvZGViYXIgPT09IGlkKTtcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJFbmNvbnRyYWRvIVwiKTtcclxuICAgICAgZS50YXJnZXQuc2VsZWN0KCk7XHJcbiAgICAgIHNldFRpdGxlKHJlc3VsdC50aXRsZSk7XHJcbiAgICAgIHNldFByaWNlKGZvcm1hdE1vbmV5KHJlc3VsdC5wcmljZSAqIGRvbGFyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNZXNzYWdlKGlkID09PSBcIlwiID8gXCJFc2NhbmVhIGVsIHByb2R1Y3RvXCIgOiBcIk5vIGV4aXN0ZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlLWgxXCI+TGVjdG9yIGRlIFByZWNpb3M8L2g0PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNzAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTRcIiBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkMmb2FjdXRlO2RpZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID09PSBcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbWVzc2FnZSA9PT0gXCJObyBleGlzdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyb2pvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidmVyZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlID09PSBcIkVuY29udHJhZG8hXCIgPyBcIlwiIDogbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZSA9PT0gXCJFbmNvbnRyYWRvIVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVByb2R1Y3RcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByaWNlUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW86IDxiPntwcmljZX08L2I+IDxzcGFuPnttb25lZGF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmRcIj5Fc3BlcmUgcG9yIGZhdm9yLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9