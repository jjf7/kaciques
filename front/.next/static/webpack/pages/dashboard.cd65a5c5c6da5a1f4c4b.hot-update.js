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
                    className: "mt-4 find",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      className: "titleProduct",
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                      className: "mt-4 priceProduct",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsIm1vbmVkYSIsInNldE1vbmVkYSIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwidXNlRWZmZWN0IiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwicmVzMiIsImpzb24iLCJhIiwiYiIsImUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaSIsImNvZGViYXIiLCJyZXN1bHQiLCJ0YXJnZXQiLCJzZWxlY3QiLCJmb3JtYXRNb25leSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsInRleHRBbGlnbiIsImxlbmd0aCIsIlJvdyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFEOEIsa0JBR0VDLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHdkJDLFFBSHVCO0FBQUEsTUFHYkMsV0FIYTs7QUFBQSxtQkFJSkYsc0RBQVEsQ0FBQyxFQUFELENBSko7QUFBQSxNQUl2QkcsS0FKdUI7QUFBQSxNQUloQkMsUUFKZ0I7O0FBQUEsbUJBS0ZKLHNEQUFRLENBQUMsRUFBRCxDQUxOO0FB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YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tMb2NhbCB9IGZyb20gXCIuLi91dGlscy9sb2NhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkb2xhciwgc2V0RG9sYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb25lZGEsIHNldE1vbmVkYV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIik7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdSA9IEpTT04ucGFyc2UoY2hlY2tMb2NhbChyb3V0ZXIpKTtcclxuICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHNcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXR0aW5nc1wiLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICBdKVxyXG4gICAgICAudGhlbihhc3luYyAoW3JlcywgcmVzMl0pID0+IHtcclxuICAgICAgICBjb25zdCBhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIGNvbnN0IGIgPSBhd2FpdCByZXMyLmpzb24oKVxyXG4gICAgICAgIHJldHVybiBbYSwgYl1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKFthLCBiXSkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKGEpO1xyXG4gICAgICAgIHNldERvbGFyKGJbMF0uZG9sYXIpO1xyXG4gICAgICAgIHNldE1vbmVkYShiWzBdLm1vbmVkYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2R1Y3RzLmZpbmQoKGkpID0+IGkuY29kZWJhciA9PT0gaWQpO1xyXG5cclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0TWVzc2FnZShcIkVuY29udHJhZG8hXCIpO1xyXG4gICAgICBlLnRhcmdldC5zZWxlY3QoKTtcclxuICAgICAgc2V0VGl0bGUocmVzdWx0LnRpdGxlKTtcclxuICAgICAgc2V0UHJpY2UoZm9ybWF0TW9uZXkocmVzdWx0LnByaWNlICogZG9sYXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoaWQgPT09IFwiXCIgPyBcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIiA6IFwiTm8gZXhpc3RlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUtaDFcIj5MZWN0b3IgZGUgUHJlY2lvczwvaDQ+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI3MCVcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPVwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDJm9hY3V0ZTtkaWdvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Y29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9PT0gXCJFc2NhbmVhIGVsIHByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lc3NhZ2UgPT09IFwiTm8gZXhpc3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicm9qb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInZlcmRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSA9PT0gXCJFbmNvbnRyYWRvIVwiID8gXCJcIiA6IG1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jb2RlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UgPT09IFwiRW5jb250cmFkbyFcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmaW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVByb2R1Y3RcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgcHJpY2VQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbzogPGI+e3ByaWNlfTwvYj4gPHNwYW4+e21vbmVkYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmluZFwiPkVzcGVyZSBwb3IgZmF2b3IuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=