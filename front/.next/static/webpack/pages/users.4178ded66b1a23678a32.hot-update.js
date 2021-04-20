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
    var u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_8__["checkLocal"])(router));

    if (u.role === "user") {
      router.push('/dashboard');
    }

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
      lineNumber: 69,
      columnNumber: 7
    }, this), msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-success",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        className: "fi-rr-check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this), msg.msg]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "containerButtons",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NewUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
          setMsg: setMsg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_TableUsers__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setMsg: setMsg,
        className: "mt-5",
        columns: columns,
        data: users
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanMiXSwibmFtZXMiOlsidXNlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsInNldFVzZXJzIiwiZ2V0RGF0YSIsInUiLCJKU09OIiwicGFyc2UiLCJjaGVja0xvY2FsIiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJyb2xlIiwicHVzaCIsImNvbHVtbnMiLCJuYW1lIiwic2VsZWN0b3IiLCJvbWl0Iiwic29ydGFibGUiLCJlZGl0YWJsZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQ4QixrQkFFUkMsc0RBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUV2QkMsR0FGdUI7QUFBQSxNQUVsQkMsTUFGa0I7O0FBQUEsbUJBR0pGLHNEQUFRLENBQUMsRUFBRCxDQUhKO0FBQUEsTUFHdkJILEtBSHVCO0FBQUEsTUFHaEJNLFFBSGdCOztBQUFBLFdBS2ZDLE9BTGU7QUFBQTtBQUFBOztBQUFBO0FBQUEsa1NBSzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxlQURSLEdBQ1lDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQywrREFBVSxDQUFDVixNQUFELENBQXJCLENBRFo7QUFBQTtBQUFBLHFCQUVvQlcsS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQ3JEQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCLGtCQURUO0FBRVAsb0NBQWtCTCxDQUFDLENBQUNNO0FBRmI7QUFENEMsZUFBaEMsQ0FGekI7O0FBQUE7QUFFUUMsaUJBRlI7QUFBQTtBQUFBLHFCQVFxQkEsR0FBRyxDQUFDQyxJQUFKLEVBUnJCOztBQUFBO0FBUVFDLGtCQVJSO0FBVUVDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBWCxzQkFBUSxDQUFDVyxJQUFELENBQVI7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMOEI7QUFBQTtBQUFBOztBQW1COUJHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1aLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLCtEQUFVLENBQUNWLE1BQUQsQ0FBckIsQ0FBVjs7QUFDQSxRQUFHTyxDQUFDLENBQUNhLElBQUYsS0FBVyxNQUFkLEVBQXNCO0FBQ3BCcEIsWUFBTSxDQUFDcUIsSUFBUCxDQUFZLFlBQVo7QUFDRDs7QUFDRGYsV0FBTztBQUNSLEdBTlEsRUFNTixDQUFDSCxHQUFELENBTk0sQ0FBVDtBQVFBLE1BQU1tQixPQUFPLEdBQUcsQ0FDZDtBQUNFQyxRQUFJLEVBQUUsSUFEUjtBQUVFQyxZQUFRLEVBQUUsS0FGWjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURjLEVBTWQ7QUFDRUYsUUFBSSxFQUFFLFNBRFI7QUFFRUMsWUFBUSxFQUFFLFNBRlo7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOYyxFQVdkO0FBQ0VGLFFBQUksRUFBRSxLQURSO0FBRUVDLFlBQVEsRUFBRSxNQUZaO0FBR0VFLFlBQVEsRUFBRSxJQUhaO0FBSUVDLFlBQVEsRUFBRTtBQUpaLEdBWGMsRUFpQmQ7QUFDRUosUUFBSSxFQUFFLFFBRFI7QUFFRUMsWUFBUSxFQUFFLFVBRlo7QUFHRUUsWUFBUSxFQUFFLElBSFo7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FqQmMsRUF1QmQ7QUFDRUosUUFBSSxFQUFFLE9BRFI7QUFFRUMsWUFBUSxFQUFFLE9BRlo7QUFHRUUsWUFBUSxFQUFFLElBSFo7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0F2QmMsQ0FBaEI7QUErQkEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFHR3hCLEdBQUcsR0FDRkEsR0FBRyxDQUFDeUIsTUFBSixJQUFjLENBQWQsZ0JBQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBcUMsVUFBSSxFQUFDLE9BQTFDO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUd6QixHQUFHLENBQUNBLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZ0JBTUU7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBb0MsVUFBSSxFQUFDLE9BQXpDO0FBQUEsZ0JBQ0dBLEdBQUcsQ0FBQ0E7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEEsR0FZRixFQWZKLGVBa0JFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFFRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSwrQkFFRSxxRUFBQywyREFBRDtBQUFTLGdCQUFNLEVBQUVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRSxxRUFBQyw4REFBRDtBQUNFLGNBQU0sRUFBRUEsTUFEVjtBQUVFLGlCQUFTLEVBQUMsTUFGWjtBQUdFLGVBQU8sRUFBRWtCLE9BSFg7QUFJRSxZQUFJLEVBQUV2QjtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBNUZ1QkEsSztVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy40MTc4ZGVkNjZiMWEyMzY3OGEzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFRhYmxlVXNlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFibGVVc2Vyc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0xvY2FsIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsXCI7XHJcbmltcG9ydCBOZXdVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL05ld1VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IHUudG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXRVc2VycyhkYXRhKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1ID0gSlNPTi5wYXJzZShjaGVja0xvY2FsKHJvdXRlcikpO1xyXG4gICAgaWYodS5yb2xlID09PSBcInVzZXJcIikge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW21zZ10pO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImlkXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcIl9pZFwiLFxyXG4gICAgICBvbWl0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJpZF9yb2xlXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImlkX3JvbGVcIixcclxuICAgICAgb21pdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUm9sXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcInJvbGVcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOb21icmVcIixcclxuICAgICAgc2VsZWN0b3I6IFwidXNlcm5hbWVcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFbWFpbFwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJlbWFpbFwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkxpc3RhZG8gZGUgVXN1YXJpb3M8L2g0PlxyXG5cclxuICAgICAge21zZyA/IChcclxuICAgICAgICBtc2cuc3RhdHVzID09IDEgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmktcnItY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgIHttc2cubXNnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIHttc2cubXNnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyQnV0dG9uc1wiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8TmV3VXNlciBzZXRNc2c9e3NldE1zZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VGFibGVVc2Vyc1xyXG4gICAgICAgICAgc2V0TXNnPXtzZXRNc2d9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC01XCJcclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICBkYXRhPXt1c2Vyc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==