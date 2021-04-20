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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      id = _useState3[0],
      setId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Escanea el producto"),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      title = _useState5[0],
      setTitle = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState6[0],
      setPrice = _useState6[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    getProducts();
  }, []);

  function getProducts(_x) {
    return _getProducts.apply(this, arguments);
  }

  function _getProducts() {
    _getProducts = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
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
                  "x-access-token": token
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

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getProducts.apply(this, arguments);
  }

  function search(e) {
    e.preventDefault();
    var result = products.find(function (i) {
      return i.codebar === id;
    });

    if (result) {
      setMessage("Encontrado!");
      e.target.select();
      setTitle(result.title);
      setPrice(Object(_utils_format__WEBPACK_IMPORTED_MODULE_8__["formatMoney"])(result.price * dolar));
    } else {
      setMessage(id === "" ? "Escanea el producto" : "No existe");
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
        className: "title-h1",
        children: "Lector de Precios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            width: "50%"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
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
                  lineNumber: 81,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("code", {
                  className: message === "Escanea el producto" ? null : message === "No existe" ? "rojo" : "verde",
                  children: message === "Encontrado!" ? "" : message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this), message === "Encontrado!" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "mt-5 find",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
                    children: [" ", title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
                    className: "mt-5",
                    children: [" ", "Precio: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                      children: price
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 33
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      style: {
                        fontSize: "14px"
                      },
                      children: "BsS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(index, "Ru7cJA+XSJj8qHsUJSglWdzyBq4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsInRva2VuIiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc1MiLCJkYXRhUyIsInNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImZpbmQiLCJpIiwiY29kZWJhciIsInRhcmdldCIsInNlbGVjdCIsImZvcm1hdE1vbmV5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIndpZHRoIiwidGV4dEFsaWduIiwiUm93IiwidmFsdWUiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQ4QixrQkFJRUMsc0RBQVEsQ0FBQyxFQUFELENBSlY7QUFBQSxNQUl2QkMsUUFKdUI7QUFBQSxNQUliQyxXQUphOztBQUFBLG1CQUtKRixzREFBUSxDQUFDLEVBQUQsQ0FMSjtBQUFBLE1BS3ZCRyxLQUx1QjtBQUFBLE1BS2hCQyxRQUxnQjs7QUFBQSxtQkFNVkosc0RBQVEsQ0FBQyxFQUFELENBTkU7QUFBQSxNQU12QkssRUFOdUI7QUFBQSxNQU1uQkMsS0FO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QVVDLEVBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTRERDs7R0FsSHVCakQsSztVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNTA2MGU3ZTIzMTYwNzY0NmNhMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuIFxyXG5cclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZG9sYXIsIHNldERvbGFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9kdWN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHModG9rZW4pIHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0c1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHJlc1MgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXR0aW5nc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhUyA9IGF3YWl0IHJlc1MuanNvbigpO1xyXG5cclxuICAgIHNldFByb2R1Y3RzKGRhdGEpO1xyXG4gICAgc2V0RG9sYXIoZGF0YVNbMF0uZG9sYXIpO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiBcclxuICBmdW5jdGlvbiBzZWFyY2goZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcHJvZHVjdHMuZmluZCgoaSkgPT4gaS5jb2RlYmFyID09PSBpZCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiRW5jb250cmFkbyFcIik7XHJcbiAgICAgIGUudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgICBzZXRUaXRsZShyZXN1bHQudGl0bGUpO1xyXG4gICAgICBzZXRQcmljZShmb3JtYXRNb25leShyZXN1bHQucHJpY2UgKiBkb2xhcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVzc2FnZShpZCA9PT0gXCJcIiA/IFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiIDogXCJObyBleGlzdGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUtaDFcIj5MZWN0b3IgZGUgUHJlY2lvczwvaDQ+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPVwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQyZvYWN1dGU7ZGlnb1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Y29kZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID09PSBcIkVzY2FuZWEgZWwgcHJvZHVjdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtZXNzYWdlID09PSBcIk5vIGV4aXN0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyb2pvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInZlcmRlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSA9PT0gXCJFbmNvbnRyYWRvIVwiID8gXCJcIiA6IG1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIDwvY29kZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlID09PSBcIkVuY29udHJhZG8hXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZpbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMT4ge3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbzogPGI+e3ByaWNlfTwvYj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5Cc1M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=