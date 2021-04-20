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
/* harmony import */ var _components_NewUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NewUser */ "./components/NewUser.js");




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
    name: "id",
    selector: "_id",
    omit: true
  }, {
    name: "id_role",
    selector: "id_role",
    omit: true
  }, {
    name: "Rol",
    selector: "role",
    sortable: true,
    editable: true
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
      lineNumber: 65,
      columnNumber: 7
    }, this), msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-success",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        "class": "fi-rr-check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), msg.msg]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "containerButtons",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NewUser__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_TableUsers__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setMsg: setMsg,
        className: "mt-5",
        columns: columns,
        data: users
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanMiXSwibmFtZXMiOlsidXNlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsInNldFVzZXJzIiwiZ2V0RGF0YSIsInUiLCJKU09OIiwicGFyc2UiLCJjaGVja0xvY2FsIiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwib21pdCIsInNvcnRhYmxlIiwiZWRpdGFibGUiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEOEIsa0JBRVJDLHNEQUFRLENBQUMsRUFBRCxDQUZBO0FBQUEsTUFFdkJDLEdBRnVCO0FBQUEsTUFFbEJDLE1BRmtCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3ZCSCxLQUh1QjtBQUFBLE1BR2hCTSxRQUhnQjs7QUFBQSxXQUtmQyxPQUxlO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtTQUs5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsZUFEUixHQUNZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsK0RBQVUsQ0FBQ1YsTUFBRCxDQUFyQixDQURaO0FBQUE7QUFBQSxxQkFFb0JXLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUNyREMsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQixrQkFEVDtBQUVQLG9DQUFrQkwsQ0FBQyxDQUFDTTtBQUZiO0FBRDRDLGVBQWhDLENBRnpCOztBQUFBO0FBRVFDLGlCQUZSO0FBQUE7QUFBQSxxQkFRcUJBLEdBQUcsQ0FBQ0MsSUFBSixFQVJyQjs7QUFBQTtBQVFRQyxrQkFSUjtBQVVFQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVgsc0JBQVEsQ0FBQ1csSUFBRCxDQUFSOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTDhCO0FBQUE7QUFBQTs7QUFtQjlCRyx5REFBUyxDQUFDLFlBQU07QUFDZGIsV0FBTztBQUNSLEdBRlEsRUFFTixDQUFDSCxHQUFELENBRk0sQ0FBVDtBQUlBLE1BQU1pQixPQUFPLEdBQUcsQ0FDZDtBQUNFQyxRQUFJLEVBQUUsSUFEUjtBQUVFQyxZQUFRLEVBQUUsS0FGWjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURjLEVBTWQ7QUFDRUYsUUFBSSxFQUFFLFNBRFI7QUFFRUMsWUFBUSxFQUFFLFNBRlo7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOYyxFQVdkO0FBQ0VGLFFBQUksRUFBRSxLQURSO0FBRUVDLFlBQVEsRUFBRSxNQUZaO0FBR0VFLFlBQVEsRUFBRSxJQUhaO0FBSUVDLFlBQVEsRUFBRTtBQUpaLEdBWGMsRUFpQmQ7QUFDRUosUUFBSSxFQUFFLFFBRFI7QUFFRUMsWUFBUSxFQUFFLFVBRlo7QUFHRUUsWUFBUSxFQUFFLElBSFo7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FqQmMsRUF1QmQ7QUFDRUosUUFBSSxFQUFFLE9BRFI7QUFFRUMsWUFBUSxFQUFFLE9BRlo7QUFHRUUsWUFBUSxFQUFFLElBSFo7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0F2QmMsQ0FBaEI7QUErQkEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFHR3RCLEdBQUcsR0FDRkEsR0FBRyxDQUFDdUIsTUFBSixJQUFjLENBQWQsZ0JBQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBcUMsVUFBSSxFQUFDLE9BQTFDO0FBQUEsOEJBQ0U7QUFBRyxpQkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHdkIsR0FBRyxDQUFDQSxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGdCQU1FO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLFVBQUksRUFBQyxPQUF6QztBQUFBLGdCQUNHQSxHQUFHLENBQUNBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBBLEdBWUYsRUFmSixlQWtCRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBRUU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBRUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FLHFFQUFDLDhEQUFEO0FBQ0UsY0FBTSxFQUFFQyxNQURWO0FBRUUsaUJBQVMsRUFBQyxNQUZaO0FBR0UsZUFBTyxFQUFFZ0IsT0FIWDtBQUlFLFlBQUksRUFBRXJCO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0F4RnVCQSxLO1VBQ1BFLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzLmVmNjcyNDJjNWMxYTZiNjg2ODEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgVGFibGVVc2VycyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJsZVVzZXJzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrTG9jYWwgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxcIjtcclxuaW1wb3J0IE5ld1VzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3VXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcnMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgY29uc3QgdSA9IEpTT04ucGFyc2UoY2hlY2tMb2NhbChyb3V0ZXIpKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldFVzZXJzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbbXNnXSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaWRcIixcclxuICAgICAgc2VsZWN0b3I6IFwiX2lkXCIsXHJcbiAgICAgIG9taXQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImlkX3JvbGVcIixcclxuICAgICAgc2VsZWN0b3I6IFwiaWRfcm9sZVwiLFxyXG4gICAgICBvbWl0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSb2xcIixcclxuICAgICAgc2VsZWN0b3I6IFwicm9sZVwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5vbWJyZVwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJ1c2VybmFtZVwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkVtYWlsXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImVtYWlsXCIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgIH1cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlLWgxXCI+TGlzdGFkbyBkZSBVc3VhcmlvczwvaDQ+XHJcblxyXG4gICAgICB7bXNnID8gKFxyXG4gICAgICAgIG1zZy5zdGF0dXMgPT0gMSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZpLXJyLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICB7bXNnLm1zZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICB7bXNnLm1zZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckJ1dHRvbnNcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPE5ld1VzZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUYWJsZVVzZXJzXHJcbiAgICAgICAgICBzZXRNc2c9e3NldE1zZ31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTVcIlxyXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgIGRhdGE9e3VzZXJzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9