webpackHotUpdate_N_E("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return users; });
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_TableUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TableUsers */ "./components/TableUsers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");




var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\users.js",
    _s = $RefreshSig$();







function users() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      users = _useState2[0],
      setUsers = _useState2[1];

  function getData() {
    return _getData.apply(this, arguments);
  }

  function _getData() {
    _getData = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var u, res, data;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_8__["checkLocal"])(router));
              _context.next = 3;
              return fetch("http://localhost:3001/users", {
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
              console.log(data);
              setUsers(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getData();
  }, [msg]);
  var columns = [{
    name: "Id",
    selector: "_id",
    omit: true
  }, {
    name: "Nombre",
    selector: "username",
    sortable: true,
    editable: true
  }, {
    name: "Email",
    selector: "email",
    sortable: true,
    editable: true
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
      className: "title-h1",
      children: "Listado de Usuarios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "containerButtons",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/products",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "btn btn-primary btn-small",
            children: "Listado de Productos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_TableUsers__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setMsg: setMsg,
        className: "mt-5",
        columns: columns,
        data: users
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(users, "G5rZ/9ssT7FmX+G50dAdCSJ3veA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanMiXSwibmFtZXMiOlsidXNlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsInNldFVzZXJzIiwiZ2V0RGF0YSIsInUiLCJKU09OIiwicGFyc2UiLCJjaGVja0xvY2FsIiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwib21pdCIsInNvcnRhYmxlIiwiZWRpdGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEOEIsa0JBRVJDLHNEQUFRLENBQUMsRUFBRCxDQUZBO0FBQUEsTUFFdkJDLEdBRnVCO0FBQUEsTUFFbEJDLE1BRmtCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3ZCSCxLQUh1QjtBQUFBLE1BR2hCTSxRQUhnQjs7QUFBQSxXQUtmQyxPQUxlO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtTQUs5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsZUFEUixHQUNZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsK0RBQVUsQ0FBQ1YsTUFBRCxDQUFyQixDQURaO0FBQUE7QUFBQSxxQkFFb0JXLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUNyREMsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQixrQkFEVDtBQUVQLG9DQUFrQkwsQ0FBQyxDQUFDTTtBQUZiO0FBRDRDLGVBQWhDLENBRnpCOztBQUFBO0FBRVFDLGlCQUZSO0FBQUE7QUFBQSxxQkFRcUJBLEdBQUcsQ0FBQ0MsSUFBSixFQVJyQjs7QUFBQTtBQVFRQyxrQkFSUjtBQVVFQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVgsc0JBQVEsQ0FBQ1csSUFBRCxDQUFSOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTDhCO0FBQUE7QUFBQTs7QUFtQjlCRyx5REFBUyxDQUFDLFlBQU07QUFDZGIsV0FBTztBQUNSLEdBRlEsRUFFTixDQUFDSCxHQUFELENBRk0sQ0FBVDtBQUlBLE1BQU1pQixPQUFPLEdBQUcsQ0FDZDtBQUNFQyxRQUFJLEVBQUUsSUFEUjtBQUVFQyxZQUFRLEVBQUUsS0FGWjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURjLEVBTWQ7QUFDRUYsUUFBSSxFQUFFLFFBRFI7QUFFRUMsWUFBUSxFQUFFLFVBRlo7QUFHRUUsWUFBUSxFQUFFLElBSFo7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FOYyxFQVlkO0FBQ0VKLFFBQUksRUFBRSxPQURSO0FBRUVDLFlBQVEsRUFBRSxPQUZaO0FBR0VFLFlBQVEsRUFBRSxJQUhaO0FBSUVDLFlBQVEsRUFBRTtBQUpaLEdBWmMsQ0FBaEI7QUFvQkEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBRUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSxxRUFBQyw4REFBRDtBQUNFLGNBQU0sRUFBRXJCLE1BRFY7QUFFRSxpQkFBUyxFQUFDLE1BRlo7QUFHRSxlQUFPLEVBQUVnQixPQUhYO0FBSUUsWUFBSSxFQUFFckI7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBOUR1QkEsSztVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy42NDI0OTJkYjJlN2QzYzlhOGJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFRhYmxlVXNlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFibGVVc2Vyc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VycygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICBjb25zdCB1ID0gSlNPTi5wYXJzZShjaGVja0xvY2FsKHJvdXRlcikpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnNcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiB1LnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0VXNlcnMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGF0YSgpO1xyXG4gIH0sIFttc2ddKTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJJZFwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJfaWRcIixcclxuICAgICAgb21pdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTm9tYnJlXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRW1haWxcIixcclxuICAgICAgc2VsZWN0b3I6IFwiZW1haWxcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUtaDFcIj5MaXN0YWRvIGRlIFVzdWFyaW9zPC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckJ1dHRvbnNcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtYWxsXCI+TGlzdGFkbyBkZSBQcm9kdWN0b3M8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRhYmxlVXNlcnNcclxuICAgICAgICAgIHNldE1zZz17c2V0TXNnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YT17dXNlcnN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=