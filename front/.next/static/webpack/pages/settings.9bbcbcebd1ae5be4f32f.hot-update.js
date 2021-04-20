webpackHotUpdate_N_E("pages/settings",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/local */ "./utils/local.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\Owner\\Desktop\\kaciques\\front\\pages\\settings.js",
    _s = $RefreshSig$();







function settings() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      settings = _useState[0],
      setSettings = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      dolar = _useState2[0],
      setDolar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      msg = _useState3[0],
      setMsg = _useState3[1];

  var getData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var u, res, data;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_6__["checkLocal"])(router));
              _context.next = 3;
              return fetch("http://localhost:3001/settings", {
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
              setDolar(Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatMoney"])(data[0].dolar));
              setSettings(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getData() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getData();
  });

  var handleKeyUp = function handleKeyUp(e) {
    function change(value) {
      return value.replace(/\D/g, "").replace(/([0-9])([0-9]{2})$/, "$1,$2").replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    }

    e.target.value = change(e.target.value);
    setDolar(e.target.value);
  };

  var handleOnChange = function handleOnChange(e) {
    console.log(e.target.value);
    setDolar(e.target.value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var u, result, json;
      return C_Users_Owner_Desktop_kaciques_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (!(dolar === "")) {
                _context2.next = 5;
                break;
              }

              setMsg({
                status: 2,
                msg: 'Debe introducir el precio del dolar'
              });
              _context2.next = 14;
              break;

            case 5:
              u = JSON.parse(Object(_utils_local__WEBPACK_IMPORTED_MODULE_6__["checkLocal"])(router));
              _context2.next = 8;
              return fetch("http://localhost:3001/settings/".concat(settings[0]._id), {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": u.token
                },
                body: JSON.stringify({
                  dolar: Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["replace"])(dolar)
                })
              });

            case 8:
              result = _context2.sent;
              _context2.next = 11;
              return result.json();

            case 11:
              json = _context2.sent;

              if (json == "success") {
                setMsg({
                  status: 1,
                  msg: "Success"
                });
              } else {
                setMsg({
                  status: 2,
                  msg: json
                });
              }

              console.log(json);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: "title-h1",
      children: "Configuraci\xF3n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), msg ? msg.status == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-success",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        "class": "fi-rr-check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }, this), " Se ha modificado correctamente"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row mb-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-2 col-xs-12 label",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "",
            children: "Precio del D\xF3lar:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-3 col-xs-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "dolar",
            onKeyUp: handleKeyUp,
            onChange: handleOnChange,
            className: "form-control",
            placeholder: "Introduzca el precio del D\xF3lar",
            value: dolar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "1$"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_s(settings, "aE4tPV6ZipuRFe/dg8fnzdoOZvc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (settings);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsic2V0dGluZ3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldFNldHRpbmdzIiwiZG9sYXIiLCJzZXREb2xhciIsIm1zZyIsInNldE1zZyIsImdldERhdGEiLCJ1IiwiSlNPTiIsInBhcnNlIiwiY2hlY2tMb2NhbCIsImZldGNoIiwiaGVhZGVycyIsInRva2VuIiwicmVzIiwianNvbiIsImRhdGEiLCJmb3JtYXRNb25leSIsInVzZUVmZmVjdCIsImhhbmRsZUtleVVwIiwiZSIsImNoYW5nZSIsInZhbHVlIiwicmVwbGFjZSIsInRhcmdldCIsImhhbmRsZU9uQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RhdHVzIiwiX2lkIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBRWxCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRmtCLGtCQUdjQyxzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdYSCxRQUhXO0FBQUEsTUFHREksV0FIQzs7QUFBQSxtQkFJUUQsc0RBQVEsQ0FBQyxFQUFELENBSmhCO0FBQUEsTUFJWEUsS0FKVztBQUFBLE1BSUpDLFFBSkk7O0FBQUEsbUJBS0lILHNEQUFRLENBQUMsRUFBRCxDQUxaO0FBQUEsTUFLWEksR0FMVztBQUFBLE1BS05DLE1BTE07O0FBT2xCLE1BQU1DLE9BQU87QUFBQSxrU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsZUFEUSxHQUNKQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsK0RBQVUsQ0FBQ1osTUFBRCxDQUFyQixDQURJ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VUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBbUJFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsK0JBQ0U7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxpQkFBTyxFQUFFMEIsWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkNEOztHQXpIUS9CLFE7VUFFUUUscUQ7OztBQTJIRkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuOWJiY2JjZWJkMWFlNWJlNGYzMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXksIHJlcGxhY2UgfSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCB7IGNoZWNrTG9jYWwgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5ncygpIHtcclxuIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkb2xhciwgc2V0RG9sYXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHUgPSBKU09OLnBhcnNlKGNoZWNrTG9jYWwocm91dGVyKSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXR0aW5nc1wiLHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHNldERvbGFyKGZvcm1hdE1vbmV5KGRhdGFbMF0uZG9sYXIpKVxyXG4gIHNldFNldHRpbmdzKGRhdGEpXHJcbiAgXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICBnZXREYXRhKClcclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlVcCA9IChlKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2UodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oWzAtOV0pKFswLTldezJ9KSQvLCBcIiQxLCQyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZClcXC4/KS9nLCBcIi5cIik7XHJcbiAgICB9XHJcbiAgICBlLnRhcmdldC52YWx1ZSA9IGNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXREb2xhcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0RG9sYXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGRvbGFyID09PSBcIlwiKSB7XHJcbiAgICAgIHNldE1zZyh7IHN0YXR1czogMiwgbXNnOiAnRGViZSBpbnRyb2R1Y2lyIGVsIHByZWNpbyBkZWwgZG9sYXInIH0pO1xyXG5cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc3QgdSA9IEpTT04ucGFyc2UoY2hlY2tMb2NhbChyb3V0ZXIpKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXR0aW5ncy8ke3NldHRpbmdzWzBdLl9pZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogdS50b2tlbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRvbGFyOiByZXBsYWNlKGRvbGFyKSB9KSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gIFxyXG4gICAgICBpZiAoanNvbiA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldE1zZyh7IHN0YXR1czogMSwgbXNnOiBcIlN1Y2Nlc3NcIiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNc2coeyBzdGF0dXM6IDIsIG1zZzoganNvbiB9KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1oMVwiPkNvbmZpZ3VyYWNpJm9hY3V0ZTtuPC9oND5cclxuICAgICAge21zZyA/IChcclxuICAgICAgICBtc2cuc3RhdHVzID09IDEgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICA8aSBjbGFzcz1cImZpLXJyLWNoZWNrXCI+PC9pPiBTZSBoYSBtb2RpZmljYWRvIGNvcnJlY3RhbWVudGUgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAge21zZy5tc2d9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXhzLTEyIGxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIj5QcmVjaW8gZGVsIEQmb2FjdXRlO2xhcjo8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkb2xhclwiXHJcbiAgICAgICAgICAgICAgb25LZXlVcD17aGFuZGxlS2V5VXB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnRyb2R1emNhIGVsIHByZWNpbyBkZWwgRCZvYWN1dGU7bGFyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZG9sYXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPjEkPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dGluZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=