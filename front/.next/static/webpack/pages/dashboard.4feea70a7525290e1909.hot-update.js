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
        lineNumber: 66,
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
                  lineNumber: 80,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("code", {
                  className: message === "Escanea el producto" ? null : message === "No existe" ? "rojo" : "verde",
                  children: message === "Encontrado!" ? "" : message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, this), message === "Encontrado!" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "mt-5 find",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
                    children: [" ", title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
                    className: "mt-5",
                    children: [" ", "Precio: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
                      children: price
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 33
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      style: {
                        fontSize: "14px"
                      },
                      children: "BsS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 21
                }, this) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZG9sYXIiLCJzZXREb2xhciIsImlkIiwic2V0SWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJwcmljZSIsInNldFByaWNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsInRva2VuIiwidSIsIkpTT04iLCJwYXJzZSIsImNoZWNrTG9jYWwiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc1MiLCJkYXRhUyIsInNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImZpbmQiLCJpIiwiY29kZWJhciIsInRhcmdldCIsInNlbGVjdCIsImZvcm1hdE1vbmV5IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIndpZHRoIiwidGV4dEFsaWduIiwiUm93IiwidmFsdWUiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQ4QixrQkFHRUMsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUd2QkMsUUFIdUI7QUFBQSxNQUdiQyxXQUhhOztBQUFBLG1CQUlKRixzREFBUSxDQUFDLEVBQUQsQ0FKSjtBQUFBLE1BSXZCRyxLQUp1QjtBQUFBLE1BSWhCQyxRQUpnQjs7QUFBQSxtQkFLVkosc0RBQVEsQ0FBQyxFQUFELENBTEU7QUFBQSxNQUt2QkssRUFMdUI7QUFBQSxNQUtuQkMsS0FM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QUFBLHdCQURELEdBVUMsRUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNEREOztHQWpIdUJqRCxLO1VBQ1BFLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC40ZmVlYTcwYTc1MjUyOTBlMTkwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gXCIuLi91dGlscy9mb3JtYXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrTG9jYWwgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZG9sYXIsIHNldERvbGFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9kdWN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHModG9rZW4pIHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0c1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHJlc1MgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXR0aW5nc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGFTID0gYXdhaXQgcmVzUy5qc29uKCk7XHJcblxyXG4gICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICBzZXREb2xhcihkYXRhU1swXS5kb2xhcik7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuIFxyXG4gIGZ1bmN0aW9uIHNlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwcm9kdWN0cy5maW5kKChpKSA9PiBpLmNvZGViYXIgPT09IGlkKTtcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJFbmNvbnRyYWRvIVwiKTtcclxuICAgICAgZS50YXJnZXQuc2VsZWN0KCk7XHJcbiAgICAgIHNldFRpdGxlKHJlc3VsdC50aXRsZSk7XHJcbiAgICAgIHNldFByaWNlKGZvcm1hdE1vbmV5KHJlc3VsdC5wcmljZSAqIGRvbGFyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNZXNzYWdlKGlkID09PSBcIlwiID8gXCJFc2NhbmVhIGVsIHByb2R1Y3RvXCIgOiBcIk5vIGV4aXN0ZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxlY3RvciBkZSBQcmVjaW9zPC9oND5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDJm9hY3V0ZTtkaWdvXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPT09IFwiRXNjYW5lYSBlbCBwcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1lc3NhZ2UgPT09IFwiTm8gZXhpc3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJvam9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidmVyZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlID09PSBcIkVuY29udHJhZG8hXCIgPyBcIlwiIDogbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgPC9jb2RlPlxyXG5cclxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UgPT09IFwiRW5jb250cmFkbyFcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmluZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxPiB7dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJlY2lvOiA8Yj57cHJpY2V9PC9iPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PkJzUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==