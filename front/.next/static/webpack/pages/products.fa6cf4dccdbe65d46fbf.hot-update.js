webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_NewProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NewProduct */ "./components/NewProduct.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");




var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\products.js",
    _s = $RefreshSig$();












function products() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      productsData = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      categories = _useState3[0],
      setCategories = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_11__["checkLocal"])(router));

    if (u.role === "user") {
      router.push('/dashboard');
    }

    getData();
  }, [msg]);

  function getData() {
    return _getData.apply(this, arguments);
  }

  function _getData() {
    _getData = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var u, res, data, resC, dataC;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_11__["checkLocal"])(router));
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
              setProducts(data);
              _context.next = 10;
              return fetch("http://localhost:3001/categories", {
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": u.token
                }
              });

            case 10:
              resC = _context.sent;
              _context.next = 13;
              return resC.json();

            case 13:
              dataC = _context.sent;
              console.log(dataC);
              setCategories(dataC);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getData.apply(this, arguments);
  }

  var columns = [{
    name: "Id",
    selector: "id",
    omit: true
  }, {
    name: "IdCategoria",
    selector: "id_categoria",
    omit: true
  }, {
    name: "Categoria",
    selector: "category",
    sortable: true,
    editable: true
  }, {
    name: "Producto",
    selector: "title",
    sortable: true,
    right: true,
    editable: true
  }, {
    name: "Precio",
    selector: "price",
    sortable: true,
    right: true,
    editable: true
  }, {
    name: "Serial",
    selector: "codebar",
    sortable: true,
    right: true,
    editable: true
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
      className: "title-h1",
      children: "Listado de Productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-success",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        "class": "fi-rr-check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, this), msg.msg]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "containerButtons",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NewProduct__WEBPACK_IMPORTED_MODULE_7__["default"], {
          setMsg: setMsg,
          categories: categories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/categories",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "btn btn-info btn-small",
            children: "Categor\xEDas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        categories: categories,
        setMsg: setMsg,
        className: "mt-5",
        columns: columns,
        data: productsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

_s(products, "S6zRsesATs9zAIvZlP6rKbJSoUA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (products);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicHJvZHVjdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsInByb2R1Y3RzRGF0YSIsInNldFByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ1c2VFZmZlY3QiLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsInJvbGUiLCJwdXNoIiwiZ2V0RGF0YSIsImZldGNoIiwiaGVhZGVycyIsInRva2VuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXNDIiwiZGF0YUMiLCJjb25zb2xlIiwibG9nIiwiY29sdW1ucyIsIm5hbWUiLCJzZWxlY3RvciIsIm9taXQiLCJzb3J0YWJsZSIsImVkaXRhYmxlIiwicmlnaHQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQURrQixrQkFHSUMsc0RBQVEsQ0FBQyxFQUFELENBSFo7QUFBQSxNQUdYQyxHQUhXO0FBQUEsTUFHTkMsTUFITTs7QUFBQSxtQkFJa0JGLHNEQUFRLENBQUMsRUFBRCxDQUoxQjtBQUFBLE1BSVhHLFlBSlc7QUFBQSxNQUlHQyxXQUpIOztBQUFBLG1CQUtrQkosc0RBQVEsQ0FBQyxFQUFELENBTDFCO0FBQUEsTUFLWEssVUFMVztBQUFBLE1BS0NDLGFBTEQ7O0FBUWxCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxnRUFBVSxDQUFDYixNQUFELENBQXJCLENBQVY7O0FBQ0EsUUFBR1UsQ0FBQyxDQUFDSSxJQUFGLEtBQVcs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QSxHQVlGLEVBZkosZUFrQkU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVksZ0JBQU0sRUFBRUMsTUFBcEI7QUFBNEIsb0JBQVUsRUFBRUc7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUscUVBQUMseURBQUQ7QUFDRSxrQkFBVSxFQUFFQSxVQURkO0FBRUUsY0FBTSxFQUFFSCxNQUZWO0FBR0UsaUJBQVMsRUFBQyxNQUhaO0FBSUUsZUFBTyxFQUFFdUIsT0FKWDtBQUtFLFlBQUksRUFBRXRCO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7R0F6SFFOLFE7VUFDUUUsc0Q7OztBQTBIRkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuZmE2Y2Y0ZGNjZGJlNjVkNDZmYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJsZVwiO1xyXG5pbXBvcnQgTmV3UHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdQcm9kdWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrTG9jYWwgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxcIjtcclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdHNEYXRhLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBpZih1LnJvbGUgPT09IFwidXNlclwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuICAgIH1cclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbbXNnXSk7XHJcblxyXG4gXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuXHJcbiAgICBjb25zdCByZXNDID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2F0ZWdvcmllc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGFDID0gYXdhaXQgcmVzQy5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YUMpXHJcblxyXG4gICAgc2V0Q2F0ZWdvcmllcyhkYXRhQyk7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklkXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImlkXCIsXHJcbiAgICAgIG9taXQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklkQ2F0ZWdvcmlhXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImlkX2NhdGVnb3JpYVwiLFxyXG4gICAgICBvbWl0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYXRlZ29yaWFcIixcclxuICAgICAgc2VsZWN0b3I6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcm9kdWN0b1wiLFxyXG4gICAgICBzZWxlY3RvcjogXCJ0aXRsZVwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgcmlnaHQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcmVjaW9cIixcclxuICAgICAgc2VsZWN0b3I6IFwicHJpY2VcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIHJpZ2h0OiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2VyaWFsXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImNvZGViYXJcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIHJpZ2h0OiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxpc3RhZG8gZGUgUHJvZHVjdG9zPC9oND5cclxuXHJcbiAgICAgIHttc2cgPyAoXHJcbiAgICAgICAgbXNnLnN0YXR1cyA9PSAxID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmktcnItY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgIHttc2cubXNnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIHttc2cubXNnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJCdXR0b25zXCI+XHJcbiAgICAgICAgICA8TmV3UHJvZHVjdCBzZXRNc2c9e3NldE1zZ30gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtYWxsXCI+Q2F0ZWdvciZpYWN1dGU7YXM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cclxuICAgICAgICAgIHNldE1zZz17c2V0TXNnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YT17cHJvZHVjdHNEYXRhfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=