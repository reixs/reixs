(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reixs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = require('./src/reixs').default;

},{"./src/reixs":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function _default() {
  _classCallCheck(this, _default);

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var global = args[0],
      globalPipes = args[1],
      url = args[2],
      _args$ = args[3],
      method = _args$ === void 0 ? 'get' : _args$,
      _args$2 = args[4],
      params = _args$2 === void 0 ? null : _args$2; // Cannot be modified

  this.entity = fetch(url);
  this.globalHeader = _objectSpread({}, global.globalHeader);
  this.globalParams = _objectSpread({}, global.globalParams);
  this.globalReqPipes = _toConsumableArray(globalPipes.reqPipes);
  this.globalResPipes = _toConsumableArray(globalPipes.resPipes);
  this.method = method;
  this.params = params;
};

exports.default = _default;

},{}],3:[function(require,module,exports){
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
    }
  }
});

exports.default = _default;

},{"./handler":2}]},{},[1])(1)
});

//# sourceMappingURL=reixs.js.map
