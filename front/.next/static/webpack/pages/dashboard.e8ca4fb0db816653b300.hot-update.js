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
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");





var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\dashboard.js",
    _s = $RefreshSig$();









function index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      dolar = _useState2[0],
      setDolar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      moneda = _useState3[0],
      setMoneda = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      id = _useState4[0],
      setId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Escanea el producto"),
      message = _useState5[0],
      setMessage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      title = _useState6[0],
      setTitle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState7[0],
      setPrice = _useState7[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    getProducts();
    console.log('upload 1 time');
    console.log(products);
  }, []);

  function getProducts() {
    return _getProducts.apply(this, arguments);
  }

  function _getProducts() {
    _getProducts = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var u, res, data, resS, dataS;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_10__["checkLocal"])(router));
              _context.next = 3;
              return fetch("http://localhost:3001/products", {
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
              _context.next = 9;
              return fetch("http://localhost:3001/settings", {
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": u.token
                }
              });

            case 9:
              resS = _context.sent;
              _context.next = 12;
              return resS.json();

            case 12:
              dataS = _context.sent;
              setProducts(data);
              setDolar(dataS[0].dolar);
              setMoneda(dataS[0].moneda);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getProducts.apply(this, arguments);
  }

  function search(_x) {
    return _search.apply(this, arguments);
  }

  function _search() {
    _search = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var result;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
                setPrice(Object(_utils_format__WEBPACK_IMPORTED_MODULE_8__["formatMoney"])(result.price * dolar));
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
        className: "title-h1",
        children: "Lector de Precios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh"
        },
        children: [products.length, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            width: "70%"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: products.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
              as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
                sm: 12,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Control, {
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
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("code", {
                  className: message === "Escanea el producto" ? null : message === "No existe" ? "rojo" : "verde",
                  children: message === "Encontrado!" ? "" : message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this), message === "Encontrado!" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "mt-4 find",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
                    className: "titleProduct",
                    children: title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
                    className: "mt-4 priceProduct",
                    children: [" ", "Precio: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                      children: price
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 33
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      children: moneda
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 21
                }, this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 38
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "find",
              children: "Espere por favor..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(index, "Eh1GtqrQC4Ar7GqKFO2uQ0lEDbI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsIm1vbmVkYSIsInNldE1vbmVkYSIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsImZldGNoIiwiaGVhZGVycyIsInRva2VuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXNTIiwiZGF0YVMiLCJzZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaSIsImNvZGViYXIiLCJyZXN1bHQiLCJ0YXJnZXQiLCJzZWxlY3QiLCJmb3JtYXRNb25leSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJsZW5ndGgiLCJ3aWR0aCIsInRleHRBbGlnbiIsIlJvdyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDhCLGtCQUdFQyxzREFBUSxDQUFDLEVBQUQsQ0FIVjtBQUFBLE1BR3ZCQyxRQUh1QjtBQUFBLE1BR2JDLFdBSGE7O0FBQUEsbUJBSUpGLHNEQUFRLENBQUMsRUFBRCxDQUpKO0FBQUEsTUFJdkJHLEtBSnVCO0FBQUEsTUFJaEJDLFFBSmdCOztBQUFBLG1CQUtGSixzREFBUSxDQUFDLEVBQUQsQ0FM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NEIsRUFBNUIsR0FBaUNBO0FBVHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBWkYsRUF3QkdBLE9BQU8sS0FBSyxhQUFaLGdCQUNDO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEsMENBQ0U7QUFBSSw2QkFBUyxFQUFDLGNBQWQ7QUFBQSw4QkFBOEJFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFJLDZCQUFTLEVBQUMsbUJBQWQ7QUFBQSwrQkFDRyxHQURILDJCQUVVO0FBQUEsZ0NBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGVixFQUV5QixHQUZ6QixlQUdFO0FBQUEsZ0NBQU9SO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELEdBVUMsRUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXRCLGdCQXNDZTtBQUFNLHVCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2Q2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNkREOztHQXBIdUJSLEs7VUFDUEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmU4Y2E0ZmIwZGI4MTY2NTNiMzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tMb2NhbCB9IGZyb20gXCIuLi91dGlscy9sb2NhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkb2xhciwgc2V0RG9sYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb25lZGEsIHNldE1vbmVkYV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIik7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgICBjb25zb2xlLmxvZygndXBsb2FkIDEgdGltZScpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKCl7XHJcbiAgICBjb25zdCB1ID0gSlNPTi5wYXJzZShjaGVja0xvY2FsKHJvdXRlcikpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcmVzUyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3NldHRpbmdzXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YVMgPSBhd2FpdCByZXNTLmpzb24oKTtcclxuXHJcbiAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgIHNldERvbGFyKGRhdGFTWzBdLmRvbGFyKTtcclxuICAgIHNldE1vbmVkYShkYXRhU1swXS5tb25lZGEpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKGUpIHtcclxuICAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvZHVjdHMuZmluZCgoaSkgPT4gaS5jb2RlYmFyID09PSBpZCk7XHJcbiAgICBcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0TWVzc2FnZShcIkVuY29udHJhZG8hXCIpO1xyXG4gICAgICBlLnRhcmdldC5zZWxlY3QoKTtcclxuICAgICAgc2V0VGl0bGUocmVzdWx0LnRpdGxlKTtcclxuICAgICAgc2V0UHJpY2UoZm9ybWF0TW9uZXkocmVzdWx0LnByaWNlICogZG9sYXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoaWQgPT09IFwiXCIgPyBcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIiA6IFwiTm8gZXhpc3RlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUtaDFcIj5MZWN0b3IgZGUgUHJlY2lvczwvaDQ+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPntwcm9kdWN0cy5sZW5ndGh9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjcwJVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMCA/IDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkMmb2FjdXRlO2RpZ29cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGNvZGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9PT0gXCJFc2NhbmVhIGVsIHByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbWVzc2FnZSA9PT0gXCJObyBleGlzdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicm9qb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ2ZXJkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UgPT09IFwiRW5jb250cmFkbyFcIiA/IFwiXCIgOiBtZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICA8L2NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZSA9PT0gXCJFbmNvbnRyYWRvIVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmaW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVQcm9kdWN0XCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCBwcmljZVByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW86IDxiPntwcmljZX08L2I+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bW9uZWRhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiA6IDxzcGFuIGNsYXNzTmFtZT1cImZpbmRcIj5Fc3BlcmUgcG9yIGZhdm9yLi4uPC9zcGFuPn1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=