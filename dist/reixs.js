(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reixs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = require('./src/reixs').default;

},{"./src/reixs":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("./shared/constants");

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    this.observers = [];
    this.x =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var params,
          type,
          url,
          method,
          globalParams,
          requestType,
          requestParams,
          data,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.params;
              type = _args.length > 1 ? _args[1] : undefined;
              url = _this.url, method = _this.method, globalParams = _this.globalParams;
              requestType = type ? type : method;
              requestParams = requestType === 'push' ? params : _objectSpread({}, globalParams, params);
              _context.next = 7;
              return _request.default[requestType](url, requestParams);

            case 7:
              data = _context.sent;

              _this.execute(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var global = args[0],
        globalPipes = args[1],
        _url = args[2],
        _args$ = args[3],
        _method = _args$ === void 0 ? 'get' : _args$,
        _args$2 = args[4],
        _params = _args$2 === void 0 ? null : _args$2; // Cannot be modified


    this.url = _url;
    this.globalHeader = _objectSpread({}, global.globalHeader);
    this.globalParams = _objectSpread({}, global.globalParams);
    this.globalReqPipes = _toConsumableArray(globalPipes.reqPipes);
    this.globalResPipes = _toConsumableArray(globalPipes.resPipes);
    this.params = _params;
    this.setMethod(_method);
  }

  _createClass(_default, [{
    key: "on",
    value: function on(observer) {
      this.observers.push(observer);
      return this;
    }
  }, {
    key: "execute",
    value: function execute(data) {
      this.observers.forEach(function (observer) {
        observer(data);
      });
    }
  }, {
    key: "setParams",
    value: function setParams(params) {
      this.params = params;
    }
  }, {
    key: "setMethod",
    value: function setMethod() {
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_constants.METHOD_TYPES.includes(method)) {
        this.method = method;
      } else {
        throw new Error('Invalid method');
      }
    }
  }]);

  return _default;
}();

exports.default = _default;

},{"./request":4,"./shared/constants":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handler = _interopRequireDefault(require("./handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Multiple requests Shared
var global = {
  globalHeader: {},
  globalParams: {} // Processing parameters

};
var globalPipes = {
  reqPipes: [],
  resPipes: []
  /**
   * Create reixs 
   * 
   * @param {string} url 
   * @param {string} method
   * @param {*} params  
   */

};

function createInstance(url, method, params) {
  return new _handler.default(global, globalPipes, url, method, params);
}
/**
 * Set pipe 
 * 
 * @param {string} name 
 * @param  {...any} funList 
 */


function setPipes(name) {
  for (var _len = arguments.length, funList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funList[_key - 1] = arguments[_key];
  }

  globalPipes[name] = [].concat(funList);
}

var _default = new Proxy(createInstance, {
  get: function get(target, property) {
    switch (property) {
      // Replaced by browserify-versionify transform
      case 'version':
        return '0.1.1';
      // Set request and response pipe

      case 'reqPipes':
      case 'resPipes':
        return setPipes.bind(null, property);
    }
  },
  set: function set(target, property, value) {
    // Must be set to Object
    if (Reflect.has(global, property) && value.constructor === Object) {
      global[property] = value;
    } else {
      throw new Error('Invalid Settings');
    }
  }
});

exports.default = _default;

},{"./handler":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function checkStatus(response) {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error();
  }
}

function handleFetch(promise) {
  return promise.then(function (response) {
    return checkStatus(response);
  }).catch(function (error) {
    return error;
  });
}

var _default = {
  get: function get(url, params) {
    url = new URL(url);
    Object.keys(params).forEach(function (key) {
      return url.searchParams.append(key, params[key]);
    });
    var promise = fetch(url, {
      method: 'get'
    });
    return handleFetch(promise);
  }
};
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTENT_TYPE = exports.METHOD_TYPES = void 0;
var METHOD_TYPES = ['get', 'post', 'form', 'push'];
exports.METHOD_TYPES = METHOD_TYPES;
var CONTENT_TYPE = {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded; charset=UTF-8'
};
exports.CONTENT_TYPE = CONTENT_TYPE;

},{}]},{},[1])(1)
});

//# sourceMappingURL=reixs.js.map
