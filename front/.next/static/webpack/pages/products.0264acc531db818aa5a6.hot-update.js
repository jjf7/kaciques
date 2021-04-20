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
              setCategories(dataC);

            case 15:
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
      lineNumber: 96,
      columnNumber: 7
    }, this), msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-success",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        className: "fi-rr-check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, this), msg.msg]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/categories",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "btn btn-info btn-small",
            children: "Categor\xEDas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        categories: categories,
        setMsg: setMsg,
        className: "mt-5",
        columns: columns,
        data: productsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicHJvZHVjdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsInByb2R1Y3RzRGF0YSIsInNldFByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ1c2VFZmZlY3QiLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsInJvbGUiLCJwdXNoIiwiZ2V0RGF0YSIsImZldGNoIiwiaGVhZGVycyIsInRva2VuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXNDIiwiZGF0YUMiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwib21pdCIsInNvcnRhYmxlIiwiZWRpdGFibGUiLCJyaWdodCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRGtCLGtCQUdJQyxzREFBUSxDQUFDLEVBQUQsQ0FIWjtBQUFBLE1BR1hDLEdBSFc7QUFBQSxNQUdOQyxNQUhNOztBQUFBLG1CQUlrQkYsc0RBQVEsQ0FBQyxFQUFELENBSjFCO0FBQUEsTUFJWEcsWUFKVztBQUFBLE1BSUdDLFdBSkg7O0FBQUEsbUJBS2tCSixzREFBUSxDQUFDLEVBQUQsQ0FMMUI7QUFBQSxNQUtYSyxVQUxXO0FBQUEsTUFLQ0MsYUFMRDs7QUFRbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGdFQUFVLENBQUNiLE1BQUQsQ0FBckIsQ0FBVjs7QUFDQSxRQUFHVSxDQUFDLENBQUNJLElBQUYsS0FBVyxNQUFkLEVBQXNCO0FBQ3BC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QUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVksZ0JBQU0sRUFBRUMsTUFBcEI7QUFBNEIsb0JBQVUsRUFBRUc7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUscUVBQUMseURBQUQ7QUFDRSxrQkFBVSxFQUFFQSxVQURkO0FBRUUsY0FBTSxFQUFFSCxNQUZWO0FBR0UsaUJBQVMsRUFBQyxNQUhaO0FBSUUsZUFBTyxFQUFFcUIsT0FKWDtBQUtFLFlBQUksRUFBRXBCO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7R0F2SFFOLFE7VUFDUUUsc0Q7OztBQXdIRkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuMDI2NGFjYzUzMWRiODE4YWE1YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJsZVwiO1xyXG5pbXBvcnQgTmV3UHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdQcm9kdWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrTG9jYWwgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxcIjtcclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdHNEYXRhLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBpZih1LnJvbGUgPT09IFwidXNlclwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuICAgIH1cclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbbXNnXSk7XHJcblxyXG4gXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuXHJcbiAgICBjb25zdCByZXNDID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2F0ZWdvcmllc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGFDID0gYXdhaXQgcmVzQy5qc29uKCk7XHJcblxyXG4gICAgc2V0Q2F0ZWdvcmllcyhkYXRhQyk7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklkXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImlkXCIsXHJcbiAgICAgIG9taXQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklkQ2F0ZWdvcmlhXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImlkX2NhdGVnb3JpYVwiLFxyXG4gICAgICBvbWl0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYXRlZ29yaWFcIixcclxuICAgICAgc2VsZWN0b3I6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcm9kdWN0b1wiLFxyXG4gICAgICBzZWxlY3RvcjogXCJ0aXRsZVwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgcmlnaHQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcmVjaW9cIixcclxuICAgICAgc2VsZWN0b3I6IFwicHJpY2VcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIHJpZ2h0OiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2VyaWFsXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImNvZGViYXJcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIHJpZ2h0OiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxpc3RhZG8gZGUgUHJvZHVjdG9zPC9oND5cclxuXHJcbiAgICAgIHttc2cgPyAoXHJcbiAgICAgICAgbXNnLnN0YXR1cyA9PSAxID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZpLXJyLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICB7bXNnLm1zZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICB7bXNnLm1zZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQnV0dG9uc1wiPlxyXG4gICAgICAgICAgPE5ld1Byb2R1Y3Qgc2V0TXNnPXtzZXRNc2d9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IC8+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbWFsbFwiPkNhdGVnb3ImaWFjdXRlO2FzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8VGFibGVcclxuICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XHJcbiAgICAgICAgICBzZXRNc2c9e3NldE1zZ31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTVcIlxyXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgIGRhdGE9e3Byb2R1Y3RzRGF0YX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9