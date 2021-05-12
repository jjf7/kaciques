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
        children: [products.lengt, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsIm1vbmVkYSIsInNldE1vbmVkYSIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsImZldGNoIiwiaGVhZGVycyIsInRva2VuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXNTIiwiZGF0YVMiLCJzZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaSIsImNvZGViYXIiLCJyZXN1bHQiLCJ0YXJnZXQiLCJzZWxlY3QiLCJmb3JtYXRNb25leSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJsZW5ndCIsIndpZHRoIiwidGV4dEFsaWduIiwibGVuZ3RoIiwiUm93IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEOEIsa0JBR0VDLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHdkJDLFFBSHVCO0FBQUEsTUFHYkMsV0FIYTs7QUFBQSxtQkFJSkYsc0RBQVEsQ0FBQyxFQUFELENBSko7QUFBQSxNQUl2QkcsS0FKdUI7QUFBQSxNQUloQkMsUUFKZ0I7O0FBQUEsbUJBS0ZKLHNEQUFRLENBQUMs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YUFBWixHQUE0QixFQUE1QixHQUFpQ0E7QUFUcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFaRixFQXdCR0EsT0FBTyxLQUFLLGFBQVosZ0JBQ0M7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQSwwQ0FDRTtBQUFJLDZCQUFTLEVBQUMsY0FBZDtBQUFBLDhCQUE4QkU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUksNkJBQVMsRUFBQyxtQkFBZDtBQUFBLCtCQUNHLEdBREgsMkJBRVU7QUFBQSxnQ0FBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZWLEVBRXlCLEdBRnpCLGVBR0U7QUFBQSxnQ0FBT1I7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsR0FVQyxFQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdEIsZ0JBc0NlO0FBQU0sdUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE2REQ7O0dBcEh1QlIsSztVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYzI5NWZiMGVlN2NiOWRhNTk1MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RvbGFyLCBzZXREb2xhcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21vbmVkYSwgc2V0TW9uZWRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiBcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJvZHVjdHMoKTtcclxuICAgIGNvbnNvbGUubG9nKCd1cGxvYWQgMSB0aW1lJylcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKXtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHNcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCByZXNTID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2V0dGluZ3NcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhUyA9IGF3YWl0IHJlc1MuanNvbigpO1xyXG5cclxuICAgIHNldFByb2R1Y3RzKGRhdGEpO1xyXG4gICAgc2V0RG9sYXIoZGF0YVNbMF0uZG9sYXIpO1xyXG4gICAgc2V0TW9uZWRhKGRhdGFTWzBdLm1vbmVkYSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2goZSkge1xyXG4gICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9kdWN0cy5maW5kKChpKSA9PiBpLmNvZGViYXIgPT09IGlkKTtcclxuICAgIFxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiRW5jb250cmFkbyFcIik7XHJcbiAgICAgIGUudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgICBzZXRUaXRsZShyZXN1bHQudGl0bGUpO1xyXG4gICAgICBzZXRQcmljZShmb3JtYXRNb25leShyZXN1bHQucHJpY2UgKiBkb2xhcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVzc2FnZShpZCA9PT0gXCJcIiA/IFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiIDogXCJObyBleGlzdGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxlY3RvciBkZSBQcmVjaW9zPC9oND5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+e3Byb2R1Y3RzLmxlbmd0fVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI3MCVcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgPyA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDJm9hY3V0ZTtkaWdvXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPT09IFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1lc3NhZ2UgPT09IFwiTm8gZXhpc3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJvam9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidmVyZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlID09PSBcIkVuY29udHJhZG8hXCIgPyBcIlwiIDogbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgPC9jb2RlPlxyXG5cclxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UgPT09IFwiRW5jb250cmFkbyFcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmluZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlUHJvZHVjdFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgcHJpY2VQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJlY2lvOiA8Yj57cHJpY2V9PC9iPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbmVkYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gOiA8c3BhbiBjbGFzc05hbWU9XCJmaW5kXCI+RXNwZXJlIHBvciBmYXZvci4uLjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9