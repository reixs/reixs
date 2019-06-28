(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reixs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var cov_1vlm2kvfme = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/index.js";
  var hash = "42a501895f7d44ff6988a30edc1f755a46aa3ca1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/index.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 47
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "42a501895f7d44ff6988a30edc1f755a46aa3ca1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_1vlm2kvfme.s[0]++;
module.exports = require('./src/reixs')["default"];

},{"./src/reixs":40}],2:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],4:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":15}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],8:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],9:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":15}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],11:[function(require,module,exports){
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;
},{}],12:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],13:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],14:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":17,"./assertThisInitialized":3}],15:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],16:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":2,"./iterableToArray":12,"./nonIterableSpread":13}],17:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],18:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":27}],19:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],20:[function(require,module,exports){
(function (Buffer){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this,require("buffer").Buffer)

},{"base64-js":19,"buffer":20,"ieee754":23}],21:[function(require,module,exports){
'use strict';

/**
 * Module dependenices
 */

const clone = require('shallow-clone');
const typeOf = require('kind-of');
const isPlainObject = require('is-plain-object');

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;

},{"is-plain-object":22,"kind-of":26,"shallow-clone":28}],22:[function(require,module,exports){
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('isobject');

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

},{"isobject":25}],23:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],24:[function(require,module,exports){
'use strict';

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

module.exports = isPlainObject;

},{}],25:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

},{}],26:[function(require,module,exports){
var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

},{}],27:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],28:[function(require,module,exports){
(function (Buffer){
/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const valueOf = Symbol.prototype.valueOf;
const typeOf = require('kind-of');

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : (/\w+$/.exec(val) || void 0);
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

}).call(this,require("buffer").Buffer)

},{"buffer":20,"kind-of":26}],29:[function(require,module,exports){
"use strict";

var cov_2qquxcom0f = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/constructor/index.js";
  var hash = "981ca3ceaeeb6a50f1033e62327062eeaf9f4166";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/constructor/index.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "1": {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 6,
          column: 32
        }
      },
      "2": {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 7,
          column: 34
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "981ca3ceaeeb6a50f1033e62327062eeaf9f4166"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReixsRace = exports.ReixsAll = exports.Reixs = void 0;

var _reixs = _interopRequireDefault(require("./reixs"));

var _reixsAll = _interopRequireDefault(require("./reixs-all"));

var _reixsRace = _interopRequireDefault(require("./reixs-race"));

var Reixs = (cov_2qquxcom0f.s[0]++, _reixs["default"]);
exports.Reixs = Reixs;
var ReixsAll = (cov_2qquxcom0f.s[1]++, _reixsAll["default"]);
exports.ReixsAll = ReixsAll;
var ReixsRace = (cov_2qquxcom0f.s[2]++, _reixsRace["default"]);
exports.ReixsRace = ReixsRace;

},{"./reixs":32,"./reixs-all":30,"./reixs-race":31,"@babel/runtime/helpers/interopRequireDefault":10}],30:[function(require,module,exports){
"use strict";

var cov_2dvwh68ba7 = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs-all.js";
  var hash = "54d83ff2b8176b73c3d260da24ea722e721ddb0c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs-all.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 20
        }
      },
      "1": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 15
        }
      },
      "2": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "3": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 27
        }
      },
      "4": {
        start: {
          line: 22,
          column: 57
        },
        end: {
          line: 22,
          column: 61
        }
      },
      "5": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "6": {
        start: {
          line: 36,
          column: 30
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "7": {
        start: {
          line: 37,
          column: 21
        },
        end: {
          line: 46,
          column: 11
        }
      },
      "8": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 45,
          column: 14
        }
      },
      "9": {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 44,
          column: 18
        }
      },
      "10": {
        start: {
          line: 42,
          column: 24
        },
        end: {
          line: 42,
          column: 37
        }
      },
      "11": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        loc: {
          start: {
            line: 35,
            column: 25
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 55
          },
          end: {
            line: 37,
            column: 56
          }
        },
        loc: {
          start: {
            line: 37,
            column: 66
          },
          end: {
            line: 46,
            column: 9
          }
        },
        line: 37
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 38,
            column: 32
          },
          end: {
            line: 38,
            column: 33
          }
        },
        loc: {
          start: {
            line: 38,
            column: 43
          },
          end: {
            line: 45,
            column: 13
          }
        },
        line: 38
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 41,
            column: 20
          },
          end: {
            line: 41,
            column: 21
          }
        },
        loc: {
          start: {
            line: 41,
            column: 36
          },
          end: {
            line: 43,
            column: 21
          }
        },
        line: 41
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "54d83ff2b8176b73c3d260da24ea722e721ddb0c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createRequest = _interopRequireDefault(require("../create-request"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

/**
 *  Concurrent request
 */
var ReixsAll =
/*#__PURE__*/
function (_Scheduler) {
  (0, _inherits2["default"])(ReixsAll, _Scheduler);

  function ReixsAll() {
    var _this;

    (0, _classCallCheck2["default"])(this, ReixsAll);
    cov_2dvwh68ba7.f[0]++;
    cov_2dvwh68ba7.s[1]++;
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReixsAll).call(this));
    _this._schedulers = (cov_2dvwh68ba7.s[0]++, []);
    cov_2dvwh68ba7.s[2]++;

    for (var _len = arguments.length, schedulers = new Array(_len), _key = 0; _key < _len; _key++) {
      schedulers[_key] = arguments[_key];
    }

    _this._schedulers = schedulers;
    cov_2dvwh68ba7.s[3]++;

    _this._initRequest();

    return _this;
  }
  /**
   * Create request function
   */


  (0, _createClass2["default"])(ReixsAll, [{
    key: "_initRequest",
    value: function _initRequest() {
      cov_2dvwh68ba7.f[1]++;

      var _ref = (cov_2dvwh68ba7.s[4]++, this),
          _config = _ref._config,
          _sendRequest = _ref._sendRequest,
          _execute = _ref._execute,
          _hook = _ref._hook;

      cov_2dvwh68ba7.s[5]++;
      this.request = (0, _createRequest["default"])(_config, _sendRequest.bind(this), _execute.bind(this), _hook);
    }
    /**
     * Concurrent all scheduler
     * 
     */

  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _ref2, _schedulers, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_2dvwh68ba7.f[2]++;
                _ref2 = (cov_2dvwh68ba7.s[6]++, this), _schedulers = _ref2._schedulers;
                cov_2dvwh68ba7.s[7]++;
                _context.next = 5;
                return Promise.all(_schedulers.map(function (scheduler) {
                  cov_2dvwh68ba7.f[3]++;
                  cov_2dvwh68ba7.s[8]++;
                  return new Promise(function (resolve) {
                    cov_2dvwh68ba7.f[4]++;
                    cov_2dvwh68ba7.s[9]++;
                    scheduler.request.call(Object.assign({}, scheduler, {
                      injection: function injection(data) {
                        cov_2dvwh68ba7.f[5]++;
                        cov_2dvwh68ba7.s[10]++;
                        resolve(data);
                      }
                    }));
                  });
                }));

              case 5:
                data = _context.sent;
                cov_2dvwh68ba7.s[11]++;
                return _context.abrupt("return", data);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _sendRequest() {
        return _sendRequest2.apply(this, arguments);
      }

      return _sendRequest;
    }()
  }]);
  return ReixsAll;
}(_scheduler["default"]);

exports["default"] = ReixsAll;

},{"../create-request":34,"./scheduler":33,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/regenerator":18}],31:[function(require,module,exports){
"use strict";

var cov_2jy325k3xb = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs-race.js";
  var hash = "6b1e9084db1e0484085ff1b50dbf15d473294b6b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs-race.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 20
        }
      },
      "1": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 15
        }
      },
      "2": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "3": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 27
        }
      },
      "4": {
        start: {
          line: 22,
          column: 57
        },
        end: {
          line: 22,
          column: 61
        }
      },
      "5": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "6": {
        start: {
          line: 36,
          column: 30
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "7": {
        start: {
          line: 37,
          column: 21
        },
        end: {
          line: 46,
          column: 11
        }
      },
      "8": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 45,
          column: 14
        }
      },
      "9": {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 44,
          column: 18
        }
      },
      "10": {
        start: {
          line: 42,
          column: 24
        },
        end: {
          line: 42,
          column: 37
        }
      },
      "11": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        loc: {
          start: {
            line: 35,
            column: 25
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 56
          },
          end: {
            line: 37,
            column: 57
          }
        },
        loc: {
          start: {
            line: 37,
            column: 67
          },
          end: {
            line: 46,
            column: 9
          }
        },
        line: 37
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 38,
            column: 32
          },
          end: {
            line: 38,
            column: 33
          }
        },
        loc: {
          start: {
            line: 38,
            column: 43
          },
          end: {
            line: 45,
            column: 13
          }
        },
        line: 38
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 41,
            column: 20
          },
          end: {
            line: 41,
            column: 21
          }
        },
        loc: {
          start: {
            line: 41,
            column: 36
          },
          end: {
            line: 43,
            column: 21
          }
        },
        line: 41
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6b1e9084db1e0484085ff1b50dbf15d473294b6b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createRequest = _interopRequireDefault(require("../create-request"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

/**
 *  Multiple request race
 */
var ReixsRace =
/*#__PURE__*/
function (_Scheduler) {
  (0, _inherits2["default"])(ReixsRace, _Scheduler);

  function ReixsRace() {
    var _this;

    (0, _classCallCheck2["default"])(this, ReixsRace);
    cov_2jy325k3xb.f[0]++;
    cov_2jy325k3xb.s[1]++;
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReixsRace).call(this));
    _this._schedulers = (cov_2jy325k3xb.s[0]++, []);
    cov_2jy325k3xb.s[2]++;

    for (var _len = arguments.length, schedulers = new Array(_len), _key = 0; _key < _len; _key++) {
      schedulers[_key] = arguments[_key];
    }

    _this._schedulers = schedulers;
    cov_2jy325k3xb.s[3]++;

    _this._initRequest();

    return _this;
  }
  /**
   * Create request function
   */


  (0, _createClass2["default"])(ReixsRace, [{
    key: "_initRequest",
    value: function _initRequest() {
      cov_2jy325k3xb.f[1]++;

      var _ref = (cov_2jy325k3xb.s[4]++, this),
          _config = _ref._config,
          _sendRequest = _ref._sendRequest,
          _execute = _ref._execute,
          _hook = _ref._hook;

      cov_2jy325k3xb.s[5]++;
      this.request = (0, _createRequest["default"])(_config, _sendRequest.bind(this), _execute.bind(this), _hook);
    }
    /**
     * The scheduler for the race
     * 
     */

  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _ref2, _schedulers, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_2jy325k3xb.f[2]++;
                _ref2 = (cov_2jy325k3xb.s[6]++, this), _schedulers = _ref2._schedulers;
                cov_2jy325k3xb.s[7]++;
                _context.next = 5;
                return Promise.race(_schedulers.map(function (scheduler) {
                  cov_2jy325k3xb.f[3]++;
                  cov_2jy325k3xb.s[8]++;
                  return new Promise(function (resolve) {
                    cov_2jy325k3xb.f[4]++;
                    cov_2jy325k3xb.s[9]++;
                    scheduler.request.call(Object.assign({}, scheduler, {
                      injection: function injection(data) {
                        cov_2jy325k3xb.f[5]++;
                        cov_2jy325k3xb.s[10]++;
                        resolve(data);
                      }
                    }));
                  });
                }));

              case 5:
                data = _context.sent;
                cov_2jy325k3xb.s[11]++;
                return _context.abrupt("return", data);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _sendRequest() {
        return _sendRequest2.apply(this, arguments);
      }

      return _sendRequest;
    }()
  }]);
  return ReixsRace;
}(_scheduler["default"]);

exports["default"] = ReixsRace;

},{"../create-request":34,"./scheduler":33,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/regenerator":18}],32:[function(require,module,exports){
"use strict";

var cov_6cbswsomc = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs.js";
  var hash = "641c6ae73304f7edf63abf7d0552df4f09f38eb2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 15
        }
      },
      "1": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "2": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 30
        }
      },
      "3": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 27
        }
      },
      "4": {
        start: {
          line: 31,
          column: 20
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "5": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "6": {
        start: {
          line: 52,
          column: 13
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "7": {
        start: {
          line: 58,
          column: 20
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "8": {
        start: {
          line: 71,
          column: 25
        },
        end: {
          line: 71,
          column: 35
        }
      },
      "9": {
        start: {
          line: 72,
          column: 31
        },
        end: {
          line: 72,
          column: 43
        }
      },
      "10": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 50
        }
      },
      "11": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 53
        }
      },
      "12": {
        start: {
          line: 82,
          column: 40
        },
        end: {
          line: 82,
          column: 53
        }
      },
      "13": {
        start: {
          line: 83,
          column: 31
        },
        end: {
          line: 83,
          column: 43
        }
      },
      "14": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 50
        }
      },
      "15": {
        start: {
          line: 91,
          column: 57
        },
        end: {
          line: 91,
          column: 61
        }
      },
      "16": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 97,
          column: 9
        }
      },
      "17": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 110,
          column: 9
        }
      },
      "18": {
        start: {
          line: 107,
          column: 12
        },
        end: {
          line: 107,
          column: 32
        }
      },
      "19": {
        start: {
          line: 109,
          column: 12
        },
        end: {
          line: 109,
          column: 43
        }
      },
      "20": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 111,
          column: 19
        }
      },
      "21": {
        start: {
          line: 120,
          column: 8
        },
        end: {
          line: 124,
          column: 9
        }
      },
      "22": {
        start: {
          line: 121,
          column: 12
        },
        end: {
          line: 121,
          column: 49
        }
      },
      "23": {
        start: {
          line: 123,
          column: 12
        },
        end: {
          line: 123,
          column: 78
        }
      },
      "24": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 19
        }
      },
      "25": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 132,
          column: 43
        }
      },
      "26": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 153,
          column: 9
        }
      },
      "27": {
        start: {
          line: 142,
          column: 12
        },
        end: {
          line: 150,
          column: 13
        }
      },
      "28": {
        start: {
          line: 143,
          column: 16
        },
        end: {
          line: 147,
          column: 17
        }
      },
      "29": {
        start: {
          line: 144,
          column: 20
        },
        end: {
          line: 144,
          column: 57
        }
      },
      "30": {
        start: {
          line: 146,
          column: 20
        },
        end: {
          line: 146,
          column: 46
        }
      },
      "31": {
        start: {
          line: 149,
          column: 16
        },
        end: {
          line: 149,
          column: 57
        }
      },
      "32": {
        start: {
          line: 152,
          column: 12
        },
        end: {
          line: 152,
          column: 113
        }
      },
      "33": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 19
        }
      },
      "34": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 167,
          column: 9
        }
      },
      "35": {
        start: {
          line: 164,
          column: 12
        },
        end: {
          line: 164,
          column: 40
        }
      },
      "36": {
        start: {
          line: 166,
          column: 12
        },
        end: {
          line: 166,
          column: 43
        }
      },
      "37": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 168,
          column: 19
        }
      },
      "38": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 177,
          column: 37
        }
      },
      "39": {
        start: {
          line: 178,
          column: 8
        },
        end: {
          line: 182,
          column: 9
        }
      },
      "40": {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 179,
          column: 38
        }
      },
      "41": {
        start: {
          line: 181,
          column: 12
        },
        end: {
          line: 181,
          column: 45
        }
      },
      "42": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 19
        }
      },
      "43": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 196,
          column: 9
        }
      },
      "44": {
        start: {
          line: 192,
          column: 30
        },
        end: {
          line: 192,
          column: 56
        }
      },
      "45": {
        start: {
          line: 193,
          column: 12
        },
        end: {
          line: 193,
          column: 54
        }
      },
      "46": {
        start: {
          line: 195,
          column: 12
        },
        end: {
          line: 195,
          column: 45
        }
      },
      "47": {
        start: {
          line: 197,
          column: 8
        },
        end: {
          line: 197,
          column: 19
        }
      },
      "48": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 210,
          column: 9
        }
      },
      "49": {
        start: {
          line: 206,
          column: 30
        },
        end: {
          line: 206,
          column: 56
        }
      },
      "50": {
        start: {
          line: 207,
          column: 12
        },
        end: {
          line: 207,
          column: 54
        }
      },
      "51": {
        start: {
          line: 209,
          column: 12
        },
        end: {
          line: 209,
          column: 45
        }
      },
      "52": {
        start: {
          line: 211,
          column: 8
        },
        end: {
          line: 211,
          column: 19
        }
      },
      "53": {
        start: {
          line: 219,
          column: 8
        },
        end: {
          line: 228,
          column: 9
        }
      },
      "54": {
        start: {
          line: 220,
          column: 12
        },
        end: {
          line: 224,
          column: 13
        }
      },
      "55": {
        start: {
          line: 221,
          column: 16
        },
        end: {
          line: 221,
          column: 57
        }
      },
      "56": {
        start: {
          line: 223,
          column: 16
        },
        end: {
          line: 223,
          column: 58
        }
      },
      "57": {
        start: {
          line: 225,
          column: 12
        },
        end: {
          line: 225,
          column: 23
        }
      },
      "58": {
        start: {
          line: 227,
          column: 12
        },
        end: {
          line: 227,
          column: 43
        }
      },
      "59": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 245,
          column: 9
        }
      },
      "60": {
        start: {
          line: 237,
          column: 12
        },
        end: {
          line: 241,
          column: 13
        }
      },
      "61": {
        start: {
          line: 238,
          column: 16
        },
        end: {
          line: 238,
          column: 57
        }
      },
      "62": {
        start: {
          line: 240,
          column: 16
        },
        end: {
          line: 240,
          column: 58
        }
      },
      "63": {
        start: {
          line: 242,
          column: 12
        },
        end: {
          line: 242,
          column: 23
        }
      },
      "64": {
        start: {
          line: 244,
          column: 12
        },
        end: {
          line: 244,
          column: 43
        }
      },
      "65": {
        start: {
          line: 255,
          column: 38
        },
        end: {
          line: 255,
          column: 48
        }
      },
      "66": {
        start: {
          line: 256,
          column: 28
        },
        end: {
          line: 256,
          column: 38
        }
      },
      "67": {
        start: {
          line: 257,
          column: 37
        },
        end: {
          line: 257,
          column: 48
        }
      },
      "68": {
        start: {
          line: 258,
          column: 59
        },
        end: {
          line: 258,
          column: 77
        }
      },
      "69": {
        start: {
          line: 266,
          column: 12
        },
        end: {
          line: 266,
          column: 35
        }
      },
      "70": {
        start: {
          line: 268,
          column: 28
        },
        end: {
          line: 268,
          column: 48
        }
      },
      "71": {
        start: {
          line: 269,
          column: 30
        },
        end: {
          line: 269,
          column: 53
        }
      },
      "72": {
        start: {
          line: 272,
          column: 8
        },
        end: {
          line: 275,
          column: 9
        }
      },
      "73": {
        start: {
          line: 274,
          column: 12
        },
        end: {
          line: 274,
          column: 18
        }
      },
      "74": {
        start: {
          line: 279,
          column: 8
        },
        end: {
          line: 283,
          column: 9
        }
      },
      "75": {
        start: {
          line: 280,
          column: 12
        },
        end: {
          line: 280,
          column: 88
        }
      },
      "76": {
        start: {
          line: 282,
          column: 12
        },
        end: {
          line: 282,
          column: 28
        }
      },
      "77": {
        start: {
          line: 286,
          column: 8
        },
        end: {
          line: 289,
          column: 9
        }
      },
      "78": {
        start: {
          line: 288,
          column: 12
        },
        end: {
          line: 288,
          column: 18
        }
      },
      "79": {
        start: {
          line: 291,
          column: 21
        },
        end: {
          line: 296,
          column: 9
        }
      },
      "80": {
        start: {
          line: 299,
          column: 8
        },
        end: {
          line: 302,
          column: 9
        }
      },
      "81": {
        start: {
          line: 301,
          column: 12
        },
        end: {
          line: 301,
          column: 18
        }
      },
      "82": {
        start: {
          line: 306,
          column: 8
        },
        end: {
          line: 310,
          column: 9
        }
      },
      "83": {
        start: {
          line: 307,
          column: 12
        },
        end: {
          line: 307,
          column: 77
        }
      },
      "84": {
        start: {
          line: 309,
          column: 12
        },
        end: {
          line: 309,
          column: 28
        }
      },
      "85": {
        start: {
          line: 313,
          column: 8
        },
        end: {
          line: 316,
          column: 9
        }
      },
      "86": {
        start: {
          line: 315,
          column: 12
        },
        end: {
          line: 315,
          column: 18
        }
      },
      "87": {
        start: {
          line: 318,
          column: 8
        },
        end: {
          line: 318,
          column: 24
        }
      },
      "88": {
        start: {
          line: 323,
          column: 0
        },
        end: {
          line: 327,
          column: 2
        }
      },
      "89": {
        start: {
          line: 324,
          column: 4
        },
        end: {
          line: 326,
          column: 5
        }
      },
      "90": {
        start: {
          line: 325,
          column: 8
        },
        end: {
          line: 325,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 52
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        loc: {
          start: {
            line: 70,
            column: 25
          },
          end: {
            line: 74,
            column: 5
          }
        },
        line: 70
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        loc: {
          start: {
            line: 81,
            column: 23
          },
          end: {
            line: 85,
            column: 5
          }
        },
        line: 81
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        loc: {
          start: {
            line: 90,
            column: 19
          },
          end: {
            line: 98,
            column: 5
          }
        },
        line: 90
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        loc: {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 112,
            column: 5
          }
        },
        line: 105
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        loc: {
          start: {
            line: 119,
            column: 22
          },
          end: {
            line: 126,
            column: 5
          }
        },
        line: 119
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 5
          }
        },
        loc: {
          start: {
            line: 131,
            column: 20
          },
          end: {
            line: 133,
            column: 5
          }
        },
        line: 131
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        loc: {
          start: {
            line: 140,
            column: 38
          },
          end: {
            line: 155,
            column: 5
          }
        },
        line: 140
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        },
        loc: {
          start: {
            line: 162,
            column: 24
          },
          end: {
            line: 169,
            column: 5
          }
        },
        line: 162
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        loc: {
          start: {
            line: 176,
            column: 29
          },
          end: {
            line: 184,
            column: 5
          }
        },
        line: 176
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 5
          }
        },
        loc: {
          start: {
            line: 191,
            column: 23
          },
          end: {
            line: 198,
            column: 5
          }
        },
        line: 191
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 192,
            column: 23
          },
          end: {
            line: 192,
            column: 24
          }
        },
        loc: {
          start: {
            line: 192,
            column: 30
          },
          end: {
            line: 192,
            column: 56
          }
        },
        line: 192
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 205,
            column: 5
          }
        },
        loc: {
          start: {
            line: 205,
            column: 23
          },
          end: {
            line: 212,
            column: 5
          }
        },
        line: 205
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 206,
            column: 23
          },
          end: {
            line: 206,
            column: 24
          }
        },
        loc: {
          start: {
            line: 206,
            column: 30
          },
          end: {
            line: 206,
            column: 56
          }
        },
        line: 206
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 5
          }
        },
        loc: {
          start: {
            line: 218,
            column: 32
          },
          end: {
            line: 229,
            column: 5
          }
        },
        line: 218
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        },
        loc: {
          start: {
            line: 235,
            column: 32
          },
          end: {
            line: 246,
            column: 5
          }
        },
        line: 235
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 254,
            column: 5
          }
        },
        loc: {
          start: {
            line: 254,
            column: 57
          },
          end: {
            line: 319,
            column: 5
          }
        },
        line: 254
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 323,
            column: 17
          },
          end: {
            line: 323,
            column: 18
          }
        },
        loc: {
          start: {
            line: 323,
            column: 30
          },
          end: {
            line: 327,
            column: 1
          }
        },
        line: 323
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 324,
            column: 35
          },
          end: {
            line: 324,
            column: 36
          }
        },
        loc: {
          start: {
            line: 324,
            column: 52
          },
          end: {
            line: 326,
            column: 5
          }
        },
        line: 324
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 15,
            column: 35
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 35
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 37
          },
          end: {
            line: 15,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 46
          },
          end: {
            line: 15,
            column: 50
          }
        }],
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 53
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 53
          }
        }, {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 53
          }
        }],
        line: 82
      },
      "3": {
        loc: {
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 110,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 110,
            column: 9
          }
        }, {
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 110,
            column: 9
          }
        }],
        line: 106
      },
      "4": {
        loc: {
          start: {
            line: 120,
            column: 8
          },
          end: {
            line: 124,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 8
          },
          end: {
            line: 124,
            column: 9
          }
        }, {
          start: {
            line: 120,
            column: 8
          },
          end: {
            line: 124,
            column: 9
          }
        }],
        line: 120
      },
      "5": {
        loc: {
          start: {
            line: 140,
            column: 22
          },
          end: {
            line: 140,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 140,
            column: 31
          },
          end: {
            line: 140,
            column: 36
          }
        }],
        line: 140
      },
      "6": {
        loc: {
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 153,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 153,
            column: 9
          }
        }, {
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 153,
            column: 9
          }
        }],
        line: 141
      },
      "7": {
        loc: {
          start: {
            line: 141,
            column: 12
          },
          end: {
            line: 141,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 141,
            column: 12
          },
          end: {
            line: 141,
            column: 38
          }
        }, {
          start: {
            line: 141,
            column: 42
          },
          end: {
            line: 141,
            column: 63
          }
        }, {
          start: {
            line: 141,
            column: 67
          },
          end: {
            line: 141,
            column: 88
          }
        }],
        line: 141
      },
      "8": {
        loc: {
          start: {
            line: 142,
            column: 12
          },
          end: {
            line: 150,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 12
          },
          end: {
            line: 150,
            column: 13
          }
        }, {
          start: {
            line: 142,
            column: 12
          },
          end: {
            line: 150,
            column: 13
          }
        }],
        line: 142
      },
      "9": {
        loc: {
          start: {
            line: 143,
            column: 16
          },
          end: {
            line: 147,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 143,
            column: 16
          },
          end: {
            line: 147,
            column: 17
          }
        }, {
          start: {
            line: 143,
            column: 16
          },
          end: {
            line: 147,
            column: 17
          }
        }],
        line: 143
      },
      "10": {
        loc: {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 167,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 167,
            column: 9
          }
        }, {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 167,
            column: 9
          }
        }],
        line: 163
      },
      "11": {
        loc: {
          start: {
            line: 176,
            column: 14
          },
          end: {
            line: 176,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 176,
            column: 23
          },
          end: {
            line: 176,
            column: 27
          }
        }],
        line: 176
      },
      "12": {
        loc: {
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        }, {
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        }],
        line: 178
      },
      "13": {
        loc: {
          start: {
            line: 192,
            column: 8
          },
          end: {
            line: 196,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 192,
            column: 8
          },
          end: {
            line: 196,
            column: 9
          }
        }, {
          start: {
            line: 192,
            column: 8
          },
          end: {
            line: 196,
            column: 9
          }
        }],
        line: 192
      },
      "14": {
        loc: {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 210,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 210,
            column: 9
          }
        }, {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 210,
            column: 9
          }
        }],
        line: 206
      },
      "15": {
        loc: {
          start: {
            line: 219,
            column: 8
          },
          end: {
            line: 228,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 8
          },
          end: {
            line: 228,
            column: 9
          }
        }, {
          start: {
            line: 219,
            column: 8
          },
          end: {
            line: 228,
            column: 9
          }
        }],
        line: 219
      },
      "16": {
        loc: {
          start: {
            line: 220,
            column: 12
          },
          end: {
            line: 224,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 220,
            column: 12
          },
          end: {
            line: 224,
            column: 13
          }
        }, {
          start: {
            line: 220,
            column: 12
          },
          end: {
            line: 224,
            column: 13
          }
        }],
        line: 220
      },
      "17": {
        loc: {
          start: {
            line: 236,
            column: 8
          },
          end: {
            line: 245,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 236,
            column: 8
          },
          end: {
            line: 245,
            column: 9
          }
        }, {
          start: {
            line: 236,
            column: 8
          },
          end: {
            line: 245,
            column: 9
          }
        }],
        line: 236
      },
      "18": {
        loc: {
          start: {
            line: 237,
            column: 12
          },
          end: {
            line: 241,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 237,
            column: 12
          },
          end: {
            line: 241,
            column: 13
          }
        }, {
          start: {
            line: 237,
            column: 12
          },
          end: {
            line: 241,
            column: 13
          }
        }],
        line: 237
      },
      "19": {
        loc: {
          start: {
            line: 254,
            column: 23
          },
          end: {
            line: 254,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 254,
            column: 32
          },
          end: {
            line: 254,
            column: 49
          }
        }],
        line: 254
      },
      "20": {
        loc: {
          start: {
            line: 268,
            column: 28
          },
          end: {
            line: 268,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 268,
            column: 35
          },
          end: {
            line: 268,
            column: 39
          }
        }, {
          start: {
            line: 268,
            column: 42
          },
          end: {
            line: 268,
            column: 48
          }
        }],
        line: 268
      },
      "21": {
        loc: {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 275,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 275,
            column: 9
          }
        }, {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 275,
            column: 9
          }
        }],
        line: 272
      },
      "22": {
        loc: {
          start: {
            line: 272,
            column: 12
          },
          end: {
            line: 273,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 272,
            column: 13
          },
          end: {
            line: 272,
            column: 28
          }
        }, {
          start: {
            line: 272,
            column: 32
          },
          end: {
            line: 272,
            column: 72
          }
        }, {
          start: {
            line: 273,
            column: 12
          },
          end: {
            line: 273,
            column: 21
          }
        }, {
          start: {
            line: 273,
            column: 25
          },
          end: {
            line: 273,
            column: 59
          }
        }],
        line: 272
      },
      "23": {
        loc: {
          start: {
            line: 286,
            column: 8
          },
          end: {
            line: 289,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 286,
            column: 8
          },
          end: {
            line: 289,
            column: 9
          }
        }, {
          start: {
            line: 286,
            column: 8
          },
          end: {
            line: 289,
            column: 9
          }
        }],
        line: 286
      },
      "24": {
        loc: {
          start: {
            line: 286,
            column: 12
          },
          end: {
            line: 287,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 286,
            column: 13
          },
          end: {
            line: 286,
            column: 27
          }
        }, {
          start: {
            line: 286,
            column: 31
          },
          end: {
            line: 286,
            column: 68
          }
        }, {
          start: {
            line: 287,
            column: 12
          },
          end: {
            line: 287,
            column: 20
          }
        }, {
          start: {
            line: 287,
            column: 24
          },
          end: {
            line: 287,
            column: 55
          }
        }],
        line: 286
      },
      "25": {
        loc: {
          start: {
            line: 299,
            column: 8
          },
          end: {
            line: 302,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 299,
            column: 8
          },
          end: {
            line: 302,
            column: 9
          }
        }, {
          start: {
            line: 299,
            column: 8
          },
          end: {
            line: 302,
            column: 9
          }
        }],
        line: 299
      },
      "26": {
        loc: {
          start: {
            line: 299,
            column: 12
          },
          end: {
            line: 300,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 299,
            column: 13
          },
          end: {
            line: 299,
            column: 28
          }
        }, {
          start: {
            line: 299,
            column: 32
          },
          end: {
            line: 299,
            column: 63
          }
        }, {
          start: {
            line: 300,
            column: 12
          },
          end: {
            line: 300,
            column: 21
          }
        }, {
          start: {
            line: 300,
            column: 25
          },
          end: {
            line: 300,
            column: 50
          }
        }],
        line: 299
      },
      "27": {
        loc: {
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 316,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 316,
            column: 9
          }
        }, {
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 316,
            column: 9
          }
        }],
        line: 313
      },
      "28": {
        loc: {
          start: {
            line: 313,
            column: 12
          },
          end: {
            line: 314,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 313,
            column: 13
          },
          end: {
            line: 313,
            column: 27
          }
        }, {
          start: {
            line: 313,
            column: 31
          },
          end: {
            line: 313,
            column: 66
          }
        }, {
          start: {
            line: 314,
            column: 12
          },
          end: {
            line: 314,
            column: 20
          }
        }, {
          start: {
            line: 314,
            column: 24
          },
          end: {
            line: 314,
            column: 53
          }
        }],
        line: 313
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0, 0, 0],
      "23": [0, 0],
      "24": [0, 0, 0, 0],
      "25": [0, 0],
      "26": [0, 0, 0, 0],
      "27": [0, 0],
      "28": [0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "641c6ae73304f7edf63abf7d0552df4f09f38eb2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _isPlainObject = _interopRequireDefault(require("is-plain-object"));

var _cloneDeep = _interopRequireDefault(require("clone-deep"));

var _utils = require("../../shared/utils");

var _constants = require("../../shared/constants");

var _createRequest = _interopRequireDefault(require("../create-request"));

var request = _interopRequireWildcard(require("../request"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

/**
 *  Separate request object
 */
var Reixs =
/*#__PURE__*/
function (_Scheduler) {
  (0, _inherits2["default"])(Reixs, _Scheduler);

  function Reixs(url) {
    var _this;

    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_6cbswsomc.b[0][0]++, 'get');
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_6cbswsomc.b[1][0]++, null);
    (0, _classCallCheck2["default"])(this, Reixs);
    cov_6cbswsomc.f[0]++;
    cov_6cbswsomc.s[0]++;
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Reixs).call(this)); // Initialize the http

    _this._http = (cov_6cbswsomc.s[5]++, {
      url: '',
      method: null,
      header: {},
      params: null,
      cookie: true // Data filtering

    });
    _this._pipes = (cov_6cbswsomc.s[6]++, {
      reqPipes: [],
      resPipes: [] // Different stage interceptors

    });
    _this._interceptors = (cov_6cbswsomc.s[7]++, {
      beforeReq: null,
      afterReq: null,
      beforeRes: null,
      afterRes: null
      /**
       * Complete request header
       * 
       * @return {Object} 
       */

    });
    cov_6cbswsomc.s[1]++;
    _this._http = Object.assign({}, _this._http, {
      url: url,
      params: params
    });
    cov_6cbswsomc.s[2]++;

    _this.setMethod(method); // Create request function


    cov_6cbswsomc.s[3]++;

    _this._initRequest();

    return _this;
  } // Multiple requests Shared


  (0, _createClass2["default"])(Reixs, [{
    key: "_getParams",

    /**
     * Complete request parameters
     * 
     * @param {Object} params 
     */
    value: function _getParams(params) {
      cov_6cbswsomc.f[2]++;
      cov_6cbswsomc.s[11]++;

      if ((0, _typeof2["default"])(params) !== 'object') {
        cov_6cbswsomc.b[2][0]++;
        cov_6cbswsomc.s[12]++;
        return params;
      } else {
        cov_6cbswsomc.b[2][1]++;
      }

      var _ref = (cov_6cbswsomc.s[13]++, Reixs.global),
          globalParams = _ref.globalParams;

      cov_6cbswsomc.s[14]++;
      return Object.assign(globalParams, params);
    }
    /**
     * Create request function
     */

  }, {
    key: "_initRequest",
    value: function _initRequest() {
      cov_6cbswsomc.f[3]++;

      var _ref2 = (cov_6cbswsomc.s[15]++, this),
          _config = _ref2._config,
          _sendRequest = _ref2._sendRequest,
          _execute = _ref2._execute,
          _hook = _ref2._hook;

      cov_6cbswsomc.s[16]++;
      this.request = (0, _createRequest["default"])(_config, _sendRequest.bind(this), _execute.bind(this), _hook);
    }
    /**
     * Set the request url
     * 
     * @param {string} url 
     */

  }, {
    key: "setUrl",
    value: function setUrl(url) {
      cov_6cbswsomc.f[4]++;
      cov_6cbswsomc.s[17]++;

      if (typeof url === 'string') {
        cov_6cbswsomc.b[3][0]++;
        cov_6cbswsomc.s[18]++;
        this._http.url = url;
      } else {
        cov_6cbswsomc.b[3][1]++;
        cov_6cbswsomc.s[19]++;
        throw new Error('Invalid type');
      }

      cov_6cbswsomc.s[20]++;
      return this;
    }
    /**
     * Set the request header
     * 
     * @param {Object} header 
     */

  }, {
    key: "setHeader",
    value: function setHeader(header) {
      cov_6cbswsomc.f[5]++;
      cov_6cbswsomc.s[21]++;

      if ((0, _isPlainObject["default"])(header)) {
        cov_6cbswsomc.b[4][0]++;
        cov_6cbswsomc.s[22]++;
        this._http.header = (0, _cloneDeep["default"])(header);
      } else {
        cov_6cbswsomc.b[4][1]++;
        cov_6cbswsomc.s[23]++;
        throw new Error('The argument passed in must be a literal object');
      }

      cov_6cbswsomc.s[24]++;
      return this;
    }
    /**
     * Get default parameters
     */

  }, {
    key: "defaultParams",
    value: function defaultParams() {
      cov_6cbswsomc.f[6]++;
      cov_6cbswsomc.s[25]++;
      return (0, _cloneDeep["default"])(this._http.params);
    }
    /**
     * Set request parameters
     * 
     * @param {*} params 
     */

  }, {
    key: "setParams",
    value: function setParams(params) {
      var ifDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_6cbswsomc.b[5][0]++, false);
      cov_6cbswsomc.f[7]++;
      cov_6cbswsomc.s[26]++;

      if ((cov_6cbswsomc.b[7][0]++, (0, _typeof2["default"])(params) !== 'object') || (cov_6cbswsomc.b[7][1]++, (0, _isPlainObject["default"])(params)) || (cov_6cbswsomc.b[7][2]++, Array.isArray(params))) {
        cov_6cbswsomc.b[6][0]++;
        cov_6cbswsomc.s[27]++;

        if (typeof ifDeep === 'boolean') {
          cov_6cbswsomc.b[8][0]++;
          cov_6cbswsomc.s[28]++;

          if (ifDeep) {
            cov_6cbswsomc.b[9][0]++;
            cov_6cbswsomc.s[29]++;
            this._http.params = (0, _cloneDeep["default"])(params);
          } else {
            cov_6cbswsomc.b[9][1]++;
            cov_6cbswsomc.s[30]++;
            this._http.params = params;
          }
        } else {
          cov_6cbswsomc.b[8][1]++;
          cov_6cbswsomc.s[31]++;
          throw new Error('IfDeep must be Boolean');
        }
      } else {
        cov_6cbswsomc.b[6][1]++;
        cov_6cbswsomc.s[32]++;
        throw new Error('When the parameter type is object, The argument passed in must be a literal object');
      }

      cov_6cbswsomc.s[33]++;
      return this;
    }
    /**
     * Set whether to carry cookies
     * 
     * @param {boolean} ifCookie 
     */

  }, {
    key: "setCookie",
    value: function setCookie(ifCookie) {
      cov_6cbswsomc.f[8]++;
      cov_6cbswsomc.s[34]++;

      if (typeof ifCookie === 'boolean') {
        cov_6cbswsomc.b[10][0]++;
        cov_6cbswsomc.s[35]++;
        this._http.cookie = ifCookie;
      } else {
        cov_6cbswsomc.b[10][1]++;
        cov_6cbswsomc.s[36]++;
        throw new Error('Invalid type');
      }

      cov_6cbswsomc.s[37]++;
      return this;
    }
    /**
     * Set the request method
     * 
     * @param {string} method 
     */

  }, {
    key: "setMethod",
    value: function setMethod() {
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_6cbswsomc.b[11][0]++, null);
      cov_6cbswsomc.f[9]++;
      cov_6cbswsomc.s[38]++;
      method = method.toLowerCase();
      cov_6cbswsomc.s[39]++;

      if (_constants.METHOD_TYPES.includes(method)) {
        cov_6cbswsomc.b[12][0]++;
        cov_6cbswsomc.s[40]++;
        this._http.method = method;
      } else {
        cov_6cbswsomc.b[12][1]++;
        cov_6cbswsomc.s[41]++;
        throw new Error('Invalid method');
      }

      cov_6cbswsomc.s[42]++;
      return this;
    }
    /**
     * Set the request filter pipeline
     * 
     * @param  {...any} pipes 
     */

  }, {
    key: "reqPipes",
    value: function reqPipes() {
      cov_6cbswsomc.f[10]++;
      cov_6cbswsomc.s[43]++;

      for (var _len = arguments.length, pipes = new Array(_len), _key = 0; _key < _len; _key++) {
        pipes[_key] = arguments[_key];
      }

      if (pipes.find(function (pipe) {
        cov_6cbswsomc.f[11]++;
        cov_6cbswsomc.s[44]++;
        return typeof pipe !== 'function';
      })) {
        cov_6cbswsomc.b[13][0]++;
        cov_6cbswsomc.s[45]++;
        throw new Error('Pipe must be a function');
      } else {
        cov_6cbswsomc.b[13][1]++;
        cov_6cbswsomc.s[46]++;
        this._pipes.reqPipes = [].concat(pipes);
      }

      cov_6cbswsomc.s[47]++;
      return this;
    }
    /**
     * Set the response filter pipeline
     * 
     * @param  {...any} pipes 
     */

  }, {
    key: "resPipes",
    value: function resPipes() {
      cov_6cbswsomc.f[12]++;
      cov_6cbswsomc.s[48]++;

      for (var _len2 = arguments.length, pipes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        pipes[_key2] = arguments[_key2];
      }

      if (pipes.find(function (pipe) {
        cov_6cbswsomc.f[13]++;
        cov_6cbswsomc.s[49]++;
        return typeof pipe !== 'function';
      })) {
        cov_6cbswsomc.b[14][0]++;
        cov_6cbswsomc.s[50]++;
        throw new Error('Pipe must be a function');
      } else {
        cov_6cbswsomc.b[14][1]++;
        cov_6cbswsomc.s[51]++;
        this._pipes.resPipes = [].concat(pipes);
      }

      cov_6cbswsomc.s[52]++;
      return this;
    }
    /**
     * Set request interceptor
     * @param {Function} interceptor 
     */

  }, {
    key: "reqInterceptor",
    value: function reqInterceptor(interceptor) {
      cov_6cbswsomc.f[14]++;
      cov_6cbswsomc.s[53]++;

      if (typeof interceptor === 'function') {
        cov_6cbswsomc.b[15][0]++;
        cov_6cbswsomc.s[54]++;

        if (this._pipes.reqPipes.length) {
          cov_6cbswsomc.b[16][0]++;
          cov_6cbswsomc.s[55]++;
          this._interceptors.afterReq = interceptor;
        } else {
          cov_6cbswsomc.b[16][1]++;
          cov_6cbswsomc.s[56]++;
          this._interceptors.beforeReq = interceptor;
        }

        cov_6cbswsomc.s[57]++;
        return this;
      } else {
        cov_6cbswsomc.b[15][1]++;
        cov_6cbswsomc.s[58]++;
        throw new Error('Invalid type');
      }
    }
    /**
     * Set response interceptor
     * @param {Function} interceptor 
     */

  }, {
    key: "resInterceptor",
    value: function resInterceptor(interceptor) {
      cov_6cbswsomc.f[15]++;
      cov_6cbswsomc.s[59]++;

      if (typeof interceptor === 'function') {
        cov_6cbswsomc.b[17][0]++;
        cov_6cbswsomc.s[60]++;

        if (this._pipes.resPipes.length) {
          cov_6cbswsomc.b[18][0]++;
          cov_6cbswsomc.s[61]++;
          this._interceptors.afterRes = interceptor;
        } else {
          cov_6cbswsomc.b[18][1]++;
          cov_6cbswsomc.s[62]++;
          this._interceptors.beforeRes = interceptor;
        }

        cov_6cbswsomc.s[63]++;
        return this;
      } else {
        cov_6cbswsomc.b[17][1]++;
        cov_6cbswsomc.s[64]++;
        throw new Error('Invalid type');
      }
    }
    /**
     * Send the request to the server
     * 
     * @param {*} params 
     * @param {string} type 
     */

  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var params,
            type,
            _ref3,
            url,
            method,
            cookie,
            _ref4,
            errorHook,
            _ref5,
            reqPipes,
            resPipes,
            _ref6,
            beforeReq,
            afterReq,
            beforeRes,
            afterRes,
            _ref7,
            globalReqPipes,
            globalResPipes,
            globalBeforeReq,
            globalAfterReq,
            globalBeforeRes,
            globalAfterRes,
            requestType,
            requestParams,
            finalParams,
            data,
            finalData,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : (cov_6cbswsomc.b[19][0]++, this._http.params);
                type = _args.length > 1 ? _args[1] : undefined;
                cov_6cbswsomc.f[16]++;
                _ref3 = (cov_6cbswsomc.s[65]++, this._http), url = _ref3.url, method = _ref3.method, cookie = _ref3.cookie;
                _ref4 = (cov_6cbswsomc.s[66]++, this._hook), errorHook = _ref4.errorHook;
                _ref5 = (cov_6cbswsomc.s[67]++, this._pipes), reqPipes = _ref5.reqPipes, resPipes = _ref5.resPipes;
                _ref6 = (cov_6cbswsomc.s[68]++, this._interceptors), beforeReq = _ref6.beforeReq, afterReq = _ref6.afterReq, beforeRes = _ref6.beforeRes, afterRes = _ref6.afterRes;
                _ref7 = (cov_6cbswsomc.s[69]++, this.constructor.global), globalReqPipes = _ref7.reqPipes, globalResPipes = _ref7.resPipes, globalBeforeReq = _ref7.beforeReq, globalAfterReq = _ref7.afterReq, globalBeforeRes = _ref7.beforeRes, globalAfterRes = _ref7.afterRes;
                requestType = (cov_6cbswsomc.s[70]++, type ? (cov_6cbswsomc.b[20][0]++, type) : (cov_6cbswsomc.b[20][1]++, method));
                requestParams = (cov_6cbswsomc.s[71]++, this._getParams(params)); // Front request interceptor

                cov_6cbswsomc.s[72]++;

                if (!((cov_6cbswsomc.b[22][0]++, globalBeforeReq) && (cov_6cbswsomc.b[22][1]++, globalBeforeReq(requestParams) === false) || (cov_6cbswsomc.b[22][2]++, beforeReq) && (cov_6cbswsomc.b[22][3]++, beforeReq(requestParams) === false))) {
                  _context.next = 17;
                  break;
                }

                cov_6cbswsomc.b[21][0]++;
                cov_6cbswsomc.s[73]++;
                return _context.abrupt("return");

              case 17:
                cov_6cbswsomc.b[21][1]++;

              case 18:
                cov_6cbswsomc.s[74]++;

                try {
                  cov_6cbswsomc.s[75]++;
                  finalParams = (0, _utils.dataFiltering)([].concat((0, _toConsumableArray2["default"])(globalReqPipes), (0, _toConsumableArray2["default"])(reqPipes)), requestParams);
                } catch (error) {
                  cov_6cbswsomc.s[76]++;
                  errorHook(error);
                } // Rear request interceptor


                cov_6cbswsomc.s[77]++;

                if (!((cov_6cbswsomc.b[24][0]++, globalAfterReq) && (cov_6cbswsomc.b[24][1]++, globalAfterReq(finalParams) === false) || (cov_6cbswsomc.b[24][2]++, afterReq) && (cov_6cbswsomc.b[24][3]++, afterReq(finalParams) === false))) {
                  _context.next = 27;
                  break;
                }

                cov_6cbswsomc.b[23][0]++;
                cov_6cbswsomc.s[78]++;
                return _context.abrupt("return");

              case 27:
                cov_6cbswsomc.b[23][1]++;

              case 28:
                cov_6cbswsomc.s[79]++;
                _context.next = 31;
                return request[requestType](url, finalParams, this.requesetHeader, cookie);

              case 31:
                data = _context.sent;
                cov_6cbswsomc.s[80]++;

                if (!((cov_6cbswsomc.b[26][0]++, globalBeforeRes) && (cov_6cbswsomc.b[26][1]++, globalBeforeRes(data) === false) || (cov_6cbswsomc.b[26][2]++, beforeRes) && (cov_6cbswsomc.b[26][3]++, beforeRes(data) === false))) {
                  _context.next = 39;
                  break;
                }

                cov_6cbswsomc.b[25][0]++;
                cov_6cbswsomc.s[81]++;
                return _context.abrupt("return");

              case 39:
                cov_6cbswsomc.b[25][1]++;

              case 40:
                cov_6cbswsomc.s[82]++;

                try {
                  cov_6cbswsomc.s[83]++;
                  finalData = (0, _utils.dataFiltering)([].concat((0, _toConsumableArray2["default"])(globalResPipes), (0, _toConsumableArray2["default"])(resPipes)), data);
                } catch (error) {
                  cov_6cbswsomc.s[84]++;
                  errorHook(error);
                } // Rear response interceptor


                cov_6cbswsomc.s[85]++;

                if (!((cov_6cbswsomc.b[28][0]++, globalAfterRes) && (cov_6cbswsomc.b[28][1]++, globalAfterRes(finalData) === false) || (cov_6cbswsomc.b[28][2]++, afterRes) && (cov_6cbswsomc.b[28][3]++, afterRes(finalData) === false))) {
                  _context.next = 49;
                  break;
                }

                cov_6cbswsomc.b[27][0]++;
                cov_6cbswsomc.s[86]++;
                return _context.abrupt("return");

              case 49:
                cov_6cbswsomc.b[27][1]++;

              case 50:
                cov_6cbswsomc.s[87]++;
                return _context.abrupt("return", finalData);

              case 52:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _sendRequest() {
        return _sendRequest2.apply(this, arguments);
      }

      return _sendRequest;
    }()
  }, {
    key: "requesetHeader",
    get: function get() {
      cov_6cbswsomc.f[1]++;

      var _ref8 = (cov_6cbswsomc.s[8]++, this._http),
          header = _ref8.header;

      var _ref9 = (cov_6cbswsomc.s[9]++, Reixs.global),
          globalHeader = _ref9.globalHeader;

      cov_6cbswsomc.s[10]++;
      return Object.assign(globalHeader, header);
    }
  }]);
  return Reixs;
}(_scheduler["default"]); // Bind request category 


Reixs.global = (cov_6cbswsomc.s[4]++, {
  globalHeader: {},
  globalParams: {},
  reqPipes: [],
  resPipes: [],
  beforeReq: null,
  afterReq: null,
  beforeRes: null,
  afterRes: null // Network request information

});
cov_6cbswsomc.s[88]++;

_constants.METHOD_TYPES.map(function (requestType) {
  cov_6cbswsomc.f[17]++;
  cov_6cbswsomc.s[89]++;

  Reixs.prototype[requestType] = function (params) {
    cov_6cbswsomc.f[18]++;
    cov_6cbswsomc.s[90]++;
    this.request(params, requestType);
  };
});

var _default = Reixs;
exports["default"] = _default;

},{"../../shared/constants":41,"../../shared/utils":42,"../create-request":34,"../request":39,"./scheduler":33,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/helpers/toConsumableArray":16,"@babel/runtime/helpers/typeof":17,"@babel/runtime/regenerator":18,"clone-deep":21,"is-plain-object":24}],33:[function(require,module,exports){
"use strict";

var cov_4baxrbazu = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/constructor/scheduler.js";
  var hash = "a59cad73c39c4e04c10b06522c2429654e63d898";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/constructor/scheduler.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "1": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "2": {
        start: {
          line: 22,
          column: 16
        },
        end: {
          line: 22,
          column: 25
        }
      },
      "3": {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 29,
          column: 38
        }
      },
      "4": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 38,
          column: 9
        }
      },
      "5": {
        start: {
          line: 31,
          column: 12
        },
        end: {
          line: 37,
          column: 13
        }
      },
      "6": {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 34,
          column: 18
        }
      },
      "7": {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 33,
          column: 30
        }
      },
      "8": {
        start: {
          line: 36,
          column: 16
        },
        end: {
          line: 36,
          column: 45
        }
      },
      "9": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "10": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 48,
          column: 44
        }
      },
      "11": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 50,
          column: 43
        }
      },
      "12": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 19
        }
      },
      "13": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 65,
          column: 9
        }
      },
      "14": {
        start: {
          line: 62,
          column: 12
        },
        end: {
          line: 62,
          column: 44
        }
      },
      "15": {
        start: {
          line: 64,
          column: 12
        },
        end: {
          line: 64,
          column: 43
        }
      },
      "16": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 19
        }
      },
      "17": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 79,
          column: 9
        }
      },
      "18": {
        start: {
          line: 76,
          column: 12
        },
        end: {
          line: 76,
          column: 41
        }
      },
      "19": {
        start: {
          line: 78,
          column: 12
        },
        end: {
          line: 78,
          column: 43
        }
      },
      "20": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 19
        }
      },
      "21": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "22": {
        start: {
          line: 90,
          column: 12
        },
        end: {
          line: 90,
          column: 40
        }
      },
      "23": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 43
        }
      },
      "24": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 19
        }
      },
      "25": {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 108,
          column: 9
        }
      },
      "26": {
        start: {
          line: 104,
          column: 12
        },
        end: {
          line: 104,
          column: 36
        }
      },
      "27": {
        start: {
          line: 105,
          column: 12
        },
        end: {
          line: 105,
          column: 23
        }
      },
      "28": {
        start: {
          line: 107,
          column: 12
        },
        end: {
          line: 107,
          column: 43
        }
      },
      "29": {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 119,
          column: 9
        }
      },
      "30": {
        start: {
          line: 118,
          column: 12
        },
        end: {
          line: 118,
          column: 49
        }
      },
      "31": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 30
        }
      },
      "32": {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 140,
          column: 9
        }
      },
      "33": {
        start: {
          line: 136,
          column: 12
        },
        end: {
          line: 136,
          column: 48
        }
      },
      "34": {
        start: {
          line: 137,
          column: 12
        },
        end: {
          line: 137,
          column: 23
        }
      },
      "35": {
        start: {
          line: 139,
          column: 12
        },
        end: {
          line: 139,
          column: 43
        }
      },
      "36": {
        start: {
          line: 149,
          column: 8
        },
        end: {
          line: 154,
          column: 9
        }
      },
      "37": {
        start: {
          line: 150,
          column: 12
        },
        end: {
          line: 150,
          column: 44
        }
      },
      "38": {
        start: {
          line: 151,
          column: 12
        },
        end: {
          line: 151,
          column: 23
        }
      },
      "39": {
        start: {
          line: 153,
          column: 12
        },
        end: {
          line: 153,
          column: 43
        }
      },
      "40": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 168,
          column: 9
        }
      },
      "41": {
        start: {
          line: 164,
          column: 12
        },
        end: {
          line: 164,
          column: 40
        }
      },
      "42": {
        start: {
          line: 165,
          column: 12
        },
        end: {
          line: 165,
          column: 23
        }
      },
      "43": {
        start: {
          line: 167,
          column: 12
        },
        end: {
          line: 167,
          column: 43
        }
      },
      "44": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 182,
          column: 9
        }
      },
      "45": {
        start: {
          line: 178,
          column: 12
        },
        end: {
          line: 178,
          column: 44
        }
      },
      "46": {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 179,
          column: 23
        }
      },
      "47": {
        start: {
          line: 181,
          column: 12
        },
        end: {
          line: 181,
          column: 43
        }
      },
      "48": {
        start: {
          line: 187,
          column: 0
        },
        end: {
          line: 187,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 19
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 28
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 51
          },
          end: {
            line: 32,
            column: 52
          }
        },
        loc: {
          start: {
            line: 32,
            column: 58
          },
          end: {
            line: 34,
            column: 17
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        loc: {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        },
        loc: {
          start: {
            line: 60,
            column: 23
          },
          end: {
            line: 67,
            column: 5
          }
        },
        line: 60
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        loc: {
          start: {
            line: 74,
            column: 20
          },
          end: {
            line: 81,
            column: 5
          }
        },
        line: 74
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        loc: {
          start: {
            line: 88,
            column: 19
          },
          end: {
            line: 95,
            column: 5
          }
        },
        line: 88
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        loc: {
          start: {
            line: 102,
            column: 15
          },
          end: {
            line: 109,
            column: 5
          }
        },
        line: 102
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        loc: {
          start: {
            line: 116,
            column: 21
          },
          end: {
            line: 120,
            column: 5
          }
        },
        line: 116
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        },
        loc: {
          start: {
            line: 125,
            column: 20
          },
          end: {
            line: 127,
            column: 5
          }
        },
        line: 125
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 134,
            column: 5
          }
        },
        loc: {
          start: {
            line: 134,
            column: 25
          },
          end: {
            line: 141,
            column: 5
          }
        },
        line: 134
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        loc: {
          start: {
            line: 148,
            column: 21
          },
          end: {
            line: 155,
            column: 5
          }
        },
        line: 148
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 5
          }
        },
        loc: {
          start: {
            line: 162,
            column: 17
          },
          end: {
            line: 169,
            column: 5
          }
        },
        line: 162
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        loc: {
          start: {
            line: 176,
            column: 21
          },
          end: {
            line: 183,
            column: 5
          }
        },
        line: 176
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 38,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 38,
            column: 9
          }
        }, {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 38,
            column: 9
          }
        }],
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 36,
            column: 16
          },
          end: {
            line: 36,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 36,
            column: 16
          },
          end: {
            line: 36,
            column: 25
          }
        }, {
          start: {
            line: 36,
            column: 29
          },
          end: {
            line: 36,
            column: 45
          }
        }],
        line: 36
      },
      "2": {
        loc: {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }, {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }],
        line: 47
      },
      "3": {
        loc: {
          start: {
            line: 47,
            column: 12
          },
          end: {
            line: 47,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 12
          },
          end: {
            line: 47,
            column: 40
          }
        }, {
          start: {
            line: 47,
            column: 44
          },
          end: {
            line: 47,
            column: 62
          }
        }],
        line: 47
      },
      "4": {
        loc: {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 65,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 65,
            column: 9
          }
        }, {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 65,
            column: 9
          }
        }],
        line: 61
      },
      "5": {
        loc: {
          start: {
            line: 61,
            column: 12
          },
          end: {
            line: 61,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 61,
            column: 12
          },
          end: {
            line: 61,
            column: 40
          }
        }, {
          start: {
            line: 61,
            column: 44
          },
          end: {
            line: 61,
            column: 62
          }
        }],
        line: 61
      },
      "6": {
        loc: {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 79,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 79,
            column: 9
          }
        }, {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 79,
            column: 9
          }
        }],
        line: 75
      },
      "7": {
        loc: {
          start: {
            line: 75,
            column: 12
          },
          end: {
            line: 75,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 75,
            column: 12
          },
          end: {
            line: 75,
            column: 40
          }
        }, {
          start: {
            line: 75,
            column: 44
          },
          end: {
            line: 75,
            column: 73
          }
        }],
        line: 75
      },
      "8": {
        loc: {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }, {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }],
        line: 89
      },
      "9": {
        loc: {
          start: {
            line: 89,
            column: 12
          },
          end: {
            line: 89,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 89,
            column: 12
          },
          end: {
            line: 89,
            column: 36
          }
        }, {
          start: {
            line: 89,
            column: 40
          },
          end: {
            line: 89,
            column: 53
          }
        }],
        line: 89
      },
      "10": {
        loc: {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        }, {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        }],
        line: 103
      },
      "11": {
        loc: {
          start: {
            line: 117,
            column: 8
          },
          end: {
            line: 119,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 8
          },
          end: {
            line: 119,
            column: 9
          }
        }, {
          start: {
            line: 117,
            column: 8
          },
          end: {
            line: 119,
            column: 9
          }
        }],
        line: 117
      },
      "12": {
        loc: {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        }, {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        }],
        line: 135
      },
      "13": {
        loc: {
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 154,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 154,
            column: 9
          }
        }, {
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 154,
            column: 9
          }
        }],
        line: 149
      },
      "14": {
        loc: {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 168,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 168,
            column: 9
          }
        }, {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 168,
            column: 9
          }
        }],
        line: 163
      },
      "15": {
        loc: {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        }, {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        }],
        line: 177
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a59cad73c39c4e04c10b06522c2429654e63d898"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * The underlying request model
 */
var Scheduler =
/*#__PURE__*/
function () {
  function Scheduler() {
    (0, _classCallCheck2["default"])(this, Scheduler);
    this._config = (cov_4baxrbazu.s[0]++, {
      throttle: false,
      debounce: 0,
      audit: false,
      overtime: null // Life cycle function

    });
    this._hook = (cov_4baxrbazu.s[1]++, {
      prepareHook: null,
      tartHook: null,
      endHook: null,
      errorHook: null // Task queue executed after the request is completed

    });
    this._taskList = (cov_4baxrbazu.s[2]++, new Map());
  }

  (0, _createClass2["default"])(Scheduler, [{
    key: "_execute",

    /**
     * Circular call task
     * @param {*} data 
     */
    value: function _execute(data) {
      cov_4baxrbazu.f[0]++;

      var _ref = (cov_4baxrbazu.s[3]++, this._hook),
          errorHook = _ref.errorHook;

      cov_4baxrbazu.s[4]++;

      if (data !== undefined) {
        cov_4baxrbazu.b[0][0]++;
        cov_4baxrbazu.s[5]++;

        try {
          cov_4baxrbazu.s[6]++;
          (0, _toConsumableArray2["default"])(this._taskList.keys()).forEach(function (task) {
            cov_4baxrbazu.f[1]++;
            cov_4baxrbazu.s[7]++;
            task(data);
          });
        } catch (error) {
          cov_4baxrbazu.s[8]++;
          (cov_4baxrbazu.b[1][0]++, errorHook) && (cov_4baxrbazu.b[1][1]++, errorHook(error));
        }
      } else {
        cov_4baxrbazu.b[0][1]++;
      }
    }
    /**
     * Set throttle
     * 
     * @param {number|boolean} settings 
     */

  }, {
    key: "throttle",
    value: function throttle(settings) {
      cov_4baxrbazu.f[2]++;
      cov_4baxrbazu.s[9]++;

      if ((cov_4baxrbazu.b[3][0]++, typeof settings === 'number') || (cov_4baxrbazu.b[3][1]++, settings === false)) {
        cov_4baxrbazu.b[2][0]++;
        cov_4baxrbazu.s[10]++;
        this._config.throttle = settings;
      } else {
        cov_4baxrbazu.b[2][1]++;
        cov_4baxrbazu.s[11]++;
        throw new Error('Invalid type');
      }

      cov_4baxrbazu.s[12]++;
      return this;
    }
    /**
     * Set debounce
     * 
     * @param {number|boolean} settings 
     */

  }, {
    key: "debounce",
    value: function debounce(settings) {
      cov_4baxrbazu.f[3]++;
      cov_4baxrbazu.s[13]++;

      if ((cov_4baxrbazu.b[5][0]++, typeof settings === 'number') || (cov_4baxrbazu.b[5][1]++, settings === false)) {
        cov_4baxrbazu.b[4][0]++;
        cov_4baxrbazu.s[14]++;
        this._config.debounce = settings;
      } else {
        cov_4baxrbazu.b[4][1]++;
        cov_4baxrbazu.s[15]++;
        throw new Error('Invalid type');
      }

      cov_4baxrbazu.s[16]++;
      return this;
    }
    /**
     * Set audit
     * 
     * @param {number|boolean} settings 
     */

  }, {
    key: "audit",
    value: function audit(settings) {
      cov_4baxrbazu.f[4]++;
      cov_4baxrbazu.s[17]++;

      if ((cov_4baxrbazu.b[7][0]++, typeof settings === 'number') || (cov_4baxrbazu.b[7][1]++, typeof settings === 'boolean')) {
        cov_4baxrbazu.b[6][0]++;
        cov_4baxrbazu.s[18]++;
        this._config.audit = settings;
      } else {
        cov_4baxrbazu.b[6][1]++;
        cov_4baxrbazu.s[19]++;
        throw new Error('Invalid type');
      }

      cov_4baxrbazu.s[20]++;
      return this;
    }
    /**
     * Set overtime
     * 
     * @param {number|null} time 
     */

  }, {
    key: "overtime",
    value: function overtime(time) {
      cov_4baxrbazu.f[5]++;
      cov_4baxrbazu.s[21]++;

      if ((cov_4baxrbazu.b[9][0]++, typeof time === 'number') || (cov_4baxrbazu.b[9][1]++, time === null)) {
        cov_4baxrbazu.b[8][0]++;
        cov_4baxrbazu.s[22]++;
        this._config.overtime = time;
      } else {
        cov_4baxrbazu.b[8][1]++;
        cov_4baxrbazu.s[23]++;
        throw new Error('Invalid type');
      }

      cov_4baxrbazu.s[24]++;
      return this;
    }
    /**
     * Add task
     * 
     * @param {Function} task 
     */

  }, {
    key: "task",
    value: function task(_task) {
      cov_4baxrbazu.f[6]++;
      cov_4baxrbazu.s[25]++;

      if (typeof _task === 'function') {
        cov_4baxrbazu.b[10][0]++;
        cov_4baxrbazu.s[26]++;

        this._taskList.set(_task);

        cov_4baxrbazu.s[27]++;
        return this;
      } else {
        cov_4baxrbazu.b[10][1]++;
        cov_4baxrbazu.s[28]++;
        throw new Error('Invalid type');
      }
    }
    /**
     * Remove assigned task
     * 
     * @param {Function} task 
     */

  }, {
    key: "removeTask",
    value: function removeTask(task) {
      cov_4baxrbazu.f[7]++;
      cov_4baxrbazu.s[29]++;

      if (!this._taskList["delete"](task)) {
        cov_4baxrbazu.b[11][0]++;
        cov_4baxrbazu.s[30]++;
        throw new Error('Remove task failed');
      } else {
        cov_4baxrbazu.b[11][1]++;
      }
    }
    /**
     * Remove all task
     */

  }, {
    key: "removeAllTask",
    value: function removeAllTask() {
      cov_4baxrbazu.f[8]++;
      cov_4baxrbazu.s[31]++;

      this._taskList.clear();
    }
    /**
     * Request to prepare
     * 
     * @param {Function} prepareHook 
     */

  }, {
    key: "prepare",
    value: function prepare(prepareHook) {
      cov_4baxrbazu.f[9]++;
      cov_4baxrbazu.s[32]++;

      if (typeof prepareHook === 'function') {
        cov_4baxrbazu.b[12][0]++;
        cov_4baxrbazu.s[33]++;
        this._hook.prepareHook = prepareHook;
        cov_4baxrbazu.s[34]++;
        return this;
      } else {
        cov_4baxrbazu.b[12][1]++;
        cov_4baxrbazu.s[35]++;
        throw new Error('Invalid type');
      }
    }
    /**
     * Request to start
     * 
     * @param {Function} startHook 
     */

  }, {
    key: "start",
    value: function start(startHook) {
      cov_4baxrbazu.f[10]++;
      cov_4baxrbazu.s[36]++;

      if (typeof startHook === 'function') {
        cov_4baxrbazu.b[13][0]++;
        cov_4baxrbazu.s[37]++;
        this._hook.startHook = startHook;
        cov_4baxrbazu.s[38]++;
        return this;
      } else {
        cov_4baxrbazu.b[13][1]++;
        cov_4baxrbazu.s[39]++;
        throw new Error('Invalid type');
      }
    }
    /**
     * Request to end
     * 
     * @param {Function} endHook 
     */

  }, {
    key: "end",
    value: function end(endHook) {
      cov_4baxrbazu.f[11]++;
      cov_4baxrbazu.s[40]++;

      if (typeof endHook === 'function') {
        cov_4baxrbazu.b[14][0]++;
        cov_4baxrbazu.s[41]++;
        this._hook.endHook = endHook;
        cov_4baxrbazu.s[42]++;
        return this;
      } else {
        cov_4baxrbazu.b[14][1]++;
        cov_4baxrbazu.s[43]++;
        throw new Error('Invalid type');
      }
    }
    /**
     * Request to error
     * 
     * @param {Function} errorHook 
     */

  }, {
    key: "error",
    value: function error(errorHook) {
      cov_4baxrbazu.f[12]++;
      cov_4baxrbazu.s[44]++;

      if (typeof errorHook === 'function') {
        cov_4baxrbazu.b[15][0]++;
        cov_4baxrbazu.s[45]++;
        this._hook.errorHook = errorHook;
        cov_4baxrbazu.s[46]++;
        return this;
      } else {
        cov_4baxrbazu.b[15][1]++;
        cov_4baxrbazu.s[47]++;
        throw new Error('Invalid type');
      }
    }
  }]);
  return Scheduler;
}(); // Scheduler is blocked from inheriting an Object


cov_4baxrbazu.s[48]++;
Object.setPrototypeOf(Scheduler.prototype, Object.create(null));
var _default = Scheduler;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/toConsumableArray":16}],34:[function(require,module,exports){
"use strict";

var cov_j7h90ew1t = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/create-request/index.js";
  var hash = "3a554ae6e06561d1ea01c0cbaf82bb3f2dfad4df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/create-request/index.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 14,
          column: 33
        }
      },
      "1": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 43
        }
      },
      "2": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 16,
          column: 43
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "4": {
        start: {
          line: 18,
          column: 50
        },
        end: {
          line: 18,
          column: 54
        }
      },
      "5": {
        start: {
          line: 19,
          column: 54
        },
        end: {
          line: 19,
          column: 60
        }
      },
      "6": {
        start: {
          line: 22,
          column: 28
        },
        end: {
          line: 22,
          column: 32
        }
      },
      "7": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 36
        }
      },
      "8": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "9": {
        start: {
          line: 27,
          column: 12
        },
        end: {
          line: 27,
          column: 37
        }
      },
      "10": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 32,
          column: 10
        }
      },
      "11": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 32
        }
      },
      "12": {
        start: {
          line: 34,
          column: 32
        },
        end: {
          line: 34,
          column: 81
        }
      },
      "13": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "14": {
        start: {
          line: 37,
          column: 12
        },
        end: {
          line: 37,
          column: 32
        }
      },
      "15": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 38,
          column: 18
        }
      },
      "16": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "17": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 49,
          column: 13
        }
      },
      "18": {
        start: {
          line: 45,
          column: 16
        },
        end: {
          line: 47,
          column: 17
        }
      },
      "19": {
        start: {
          line: 46,
          column: 20
        },
        end: {
          line: 46,
          column: 35
        }
      },
      "20": {
        start: {
          line: 48,
          column: 16
        },
        end: {
          line: 48,
          column: 29
        }
      },
      "21": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 50,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 13,
            column: 60
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 11
          },
          end: {
            line: 17,
            column: 12
          }
        },
        loc: {
          start: {
            line: 17,
            column: 34
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 24,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 24,
            column: 19
          }
        }, {
          start: {
            line: 24,
            column: 23
          },
          end: {
            line: 24,
            column: 36
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 28,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 28,
            column: 9
          }
        }, {
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 28,
            column: 9
          }
        }],
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 33,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 33,
            column: 17
          }
        }, {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 33,
            column: 32
          }
        }],
        line: 33
      },
      "3": {
        loc: {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }, {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }],
        line: 36
      },
      "4": {
        loc: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 19
          }
        }, {
          start: {
            line: 37,
            column: 23
          },
          end: {
            line: 37,
            column: 32
          }
        }],
        line: 37
      },
      "5": {
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }, {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }],
        line: 42
      },
      "6": {
        loc: {
          start: {
            line: 42,
            column: 12
          },
          end: {
            line: 42,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 12
          },
          end: {
            line: 42,
            column: 18
          }
        }, {
          start: {
            line: 42,
            column: 22
          },
          end: {
            line: 42,
            column: 40
          }
        }],
        line: 42
      },
      "7": {
        loc: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 49,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 49,
            column: 13
          }
        }, {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 49,
            column: 13
          }
        }],
        line: 44
      },
      "8": {
        loc: {
          start: {
            line: 45,
            column: 16
          },
          end: {
            line: 47,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 16
          },
          end: {
            line: 47,
            column: 17
          }
        }, {
          start: {
            line: 45,
            column: 16
          },
          end: {
            line: 47,
            column: 17
          }
        }],
        line: 45
      },
      "9": {
        loc: {
          start: {
            line: 50,
            column: 12
          },
          end: {
            line: 50,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 50,
            column: 12
          },
          end: {
            line: 50,
            column: 19
          }
        }, {
          start: {
            line: 50,
            column: 23
          },
          end: {
            line: 50,
            column: 32
          }
        }],
        line: 50
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3a554ae6e06561d1ea01c0cbaf82bb3f2dfad4df"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _markMap = _interopRequireDefault(require("./mark-map"));

var _wait = require("./wait");

var _requestTimer = _interopRequireDefault(require("./request-timer"));

/**
 * The method to create the request
 * 
 * @param {Object} config 
 * @param {Function} sendRequest 
 * @param {Array} execute 
 * @param {Object} hook 
 */
function _default(config, sendRequest, execute, hook) {
  cov_j7h90ew1t.f[0]++;
  var markMap = (cov_j7h90ew1t.s[0]++, new _markMap["default"]());
  var throttleWait = (cov_j7h90ew1t.s[1]++, new _wait.ThrottleWait());
  var debounceWait = (cov_j7h90ew1t.s[2]++, new _wait.DebounceWait());
  cov_j7h90ew1t.s[3]++;
  return (
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _ref2,
          prepareHook,
          startHook,
          endHook,
          _ref3,
          throttle,
          debounce,
          audit,
          overtime,
          _ref4,
          injection,
          mark,
          _ref5,
          timeout,
          data,
          _args = arguments;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cov_j7h90ew1t.f[1]++;
              _ref2 = (cov_j7h90ew1t.s[4]++, hook), prepareHook = _ref2.prepareHook, startHook = _ref2.startHook, endHook = _ref2.endHook;
              _ref3 = (cov_j7h90ew1t.s[5]++, config), throttle = _ref3.throttle, debounce = _ref3.debounce, audit = _ref3.audit, overtime = _ref3.overtime; // External rewrite method

              _ref4 = (cov_j7h90ew1t.s[6]++, this), injection = _ref4.injection;
              cov_j7h90ew1t.s[7]++;
              (cov_j7h90ew1t.b[0][0]++, prepareHook) && (cov_j7h90ew1t.b[0][1]++, prepareHook());
              cov_j7h90ew1t.s[8]++;

              if (audit) {
                cov_j7h90ew1t.b[1][0]++;
                cov_j7h90ew1t.s[9]++;
                mark = markMap.get(audit);
              } else {
                cov_j7h90ew1t.b[1][1]++;
              }

              cov_j7h90ew1t.s[10]++;
              _context.next = 11;
              return Promise.all([throttleWait.get(throttle), debounceWait.get(debounce)]);

            case 11:
              cov_j7h90ew1t.s[11]++;
              (cov_j7h90ew1t.b[2][0]++, startHook) && (cov_j7h90ew1t.b[2][1]++, startHook());
              cov_j7h90ew1t.s[12]++;
              _context.next = 16;
              return (0, _requestTimer["default"])(sendRequest.apply(void 0, _args), overtime);

            case 16:
              _ref5 = _context.sent;
              timeout = _ref5.timeout;
              data = _ref5.data;
              cov_j7h90ew1t.s[13]++;

              if (!(data === undefined)) {
                _context.next = 28;
                break;
              }

              cov_j7h90ew1t.b[3][0]++;
              cov_j7h90ew1t.s[14]++;
              (cov_j7h90ew1t.b[4][0]++, endHook) && (cov_j7h90ew1t.b[4][1]++, endHook());
              cov_j7h90ew1t.s[15]++;
              return _context.abrupt("return");

            case 28:
              cov_j7h90ew1t.b[3][1]++;

            case 29:
              cov_j7h90ew1t.s[16]++;

              // If audit is set, the duplicate request is discarded
              if ((cov_j7h90ew1t.b[6][0]++, !audit) || (cov_j7h90ew1t.b[6][1]++, markMap.test(mark))) {
                cov_j7h90ew1t.b[5][0]++;
                cov_j7h90ew1t.s[17]++;

                // If the timeout occurs, the task is not processed
                if (!timeout) {
                  cov_j7h90ew1t.b[7][0]++;
                  cov_j7h90ew1t.s[18]++;

                  if (injection) {
                    cov_j7h90ew1t.b[8][0]++;
                    cov_j7h90ew1t.s[19]++;
                    injection(data);
                  } else {
                    cov_j7h90ew1t.b[8][1]++;
                  }

                  cov_j7h90ew1t.s[20]++;
                  execute(data);
                } else {
                  cov_j7h90ew1t.b[7][1]++;
                }

                cov_j7h90ew1t.s[21]++;
                (cov_j7h90ew1t.b[9][0]++, endHook) && (cov_j7h90ew1t.b[9][1]++, endHook());
              } else {
                cov_j7h90ew1t.b[5][1]++;
              }

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))
  );
}

},{"./mark-map":35,"./request-timer":36,"./wait":37,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/regenerator":18}],35:[function(require,module,exports){
"use strict";

var cov_2hnr12on33 = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/create-request/mark-map.js";
  var hash = "ce89061b426ad2f13cb04aeb2a8b5a4ff1fadc7a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/create-request/mark-map.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 11
        },
        end: {
          line: 5,
          column: 13
        }
      },
      "1": {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "2": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "3": {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 14,
          column: 32
        }
      },
      "4": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 35
        }
      },
      "5": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 30,
          column: 13
        }
      },
      "6": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "7": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "8": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 27,
          column: 44
        }
      },
      "9": {
        start: {
          line: 28,
          column: 16
        },
        end: {
          line: 28,
          column: 30
        }
      },
      "10": {
        start: {
          line: 29,
          column: 16
        },
        end: {
          line: 29,
          column: 32
        }
      },
      "11": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 35,
          column: 13
        }
      },
      "12": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 19
        }
      },
      "13": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 47,
          column: 9
        }
      },
      "14": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 24
        }
      },
      "15": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 53,
          column: 9
        }
      },
      "16": {
        start: {
          line: 50,
          column: 27
        },
        end: {
          line: 50,
          column: 31
        }
      },
      "17": {
        start: {
          line: 51,
          column: 26
        },
        end: {
          line: 51,
          column: 49
        }
      },
      "18": {
        start: {
          line: 52,
          column: 12
        },
        end: {
          line: 52,
          column: 33
        }
      },
      "19": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        loc: {
          start: {
            line: 44,
            column: 15
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 44
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }, {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        }, {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        }],
        line: 17
      },
      "2": {
        loc: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 19,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 28
          }
        }, {
          start: {
            line: 18,
            column: 20
          },
          end: {
            line: 18,
            column: 61
          }
        }, {
          start: {
            line: 19,
            column: 23
          },
          end: {
            line: 19,
            column: 37
          }
        }],
        line: 17
      },
      "3": {
        loc: {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        }, {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        }],
        line: 45
      },
      "4": {
        loc: {
          start: {
            line: 45,
            column: 12
          },
          end: {
            line: 45,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 45,
            column: 12
          },
          end: {
            line: 45,
            column: 16
          }
        }, {
          start: {
            line: 45,
            column: 20
          },
          end: {
            line: 45,
            column: 46
          }
        }],
        line: 45
      },
      "5": {
        loc: {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 53,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 53,
            column: 9
          }
        }, {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 53,
            column: 9
          }
        }],
        line: 49
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ce89061b426ad2f13cb04aeb2a8b5a4ff1fadc7a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Verify that mark is deprecated
 */
var _default =
/*#__PURE__*/
function () {
  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    this._map = (cov_2hnr12on33.s[0]++, []);
  }

  (0, _createClass2["default"])(_default, [{
    key: "get",

    /**
     * Get mark
     * @param {number|boolean} audit 
     */
    value: function get(audit) {
      cov_2hnr12on33.f[0]++;

      var _ref = (cov_2hnr12on33.s[1]++, this),
          _map = _ref._map;

      cov_2hnr12on33.s[2]++;

      if (audit) {
        cov_2hnr12on33.b[0][0]++;
        var sym = (cov_2hnr12on33.s[3]++, Symbol());
        var time = (cov_2hnr12on33.s[4]++, Date.now());
        var sign;
        cov_2hnr12on33.s[5]++;

        if ((cov_2hnr12on33.b[2][0]++, !_map.length) || (cov_2hnr12on33.b[2][1]++, time - _map[_map.length - 1].time > audit) && (cov_2hnr12on33.b[2][2]++, audit !== true)) {
          cov_2hnr12on33.b[1][0]++;
          cov_2hnr12on33.s[6]++;
          sign = {
            sym: sym,
            time: time
          };
          cov_2hnr12on33.s[7]++;

          _map.push(sign);
        } else {
          cov_2hnr12on33.b[1][1]++;
          cov_2hnr12on33.s[8]++;
          sign = _map[_map.length - 1];
          cov_2hnr12on33.s[9]++;
          sign.sym = sym;
          cov_2hnr12on33.s[10]++;
          sign.time = time;
        }

        cov_2hnr12on33.s[11]++;
        return {
          sign: sign,
          sym: sign.sym
        };
      } else {
        cov_2hnr12on33.b[0][1]++;
      }

      cov_2hnr12on33.s[12]++;
      return null;
    }
    /**
     * Verify the mark
     * @param {Object} mark 
     */

  }, {
    key: "test",
    value: function test(mark) {
      cov_2hnr12on33.f[1]++;
      cov_2hnr12on33.s[13]++;

      if ((cov_2hnr12on33.b[4][0]++, mark) && (cov_2hnr12on33.b[4][1]++, mark.sym !== mark.sign.sym)) {
        cov_2hnr12on33.b[3][0]++;
        cov_2hnr12on33.s[14]++;
        return false;
      } else {
        cov_2hnr12on33.b[3][1]++;
      }

      cov_2hnr12on33.s[15]++;

      if (mark) {
        cov_2hnr12on33.b[5][0]++;

        var _ref2 = (cov_2hnr12on33.s[16]++, this),
            _map = _ref2._map;

        var index = (cov_2hnr12on33.s[17]++, _map.indexOf(mark.sign));
        cov_2hnr12on33.s[18]++;

        _map.splice(index, 1);
      } else {
        cov_2hnr12on33.b[5][1]++;
      }

      cov_2hnr12on33.s[19]++;
      return true;
    }
  }]);
  return _default;
}();

exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10}],36:[function(require,module,exports){
"use strict";

var cov_1ufklkfomx = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/create-request/request-timer.js";
  var hash = "d685842fdd5575e5aa11dcc579aa425b6337ef7f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/create-request/request-timer.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 10,
          column: 10
        }
      },
      "1": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 43
        }
      },
      "2": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "3": {
        start: {
          line: 20,
          column: 20
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "4": {
        start: {
          line: 20,
          column: 40
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "5": {
        start: {
          line: 24,
          column: 18
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "6": {
        start: {
          line: 24,
          column: 45
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "7": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 29,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "createWait",
        decl: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 6,
            column: 19
          }
        },
        loc: {
          start: {
            line: 6,
            column: 26
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 22
          },
          end: {
            line: 8,
            column: 23
          }
        },
        loc: {
          start: {
            line: 8,
            column: 31
          },
          end: {
            line: 10,
            column: 9
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 23
          },
          end: {
            line: 9,
            column: 24
          }
        },
        loc: {
          start: {
            line: 9,
            column: 27
          },
          end: {
            line: 9,
            column: 36
          }
        },
        line: 9
      },
      "3": {
        name: "requestTimer",
        decl: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 19,
            column: 36
          }
        },
        loc: {
          start: {
            line: 19,
            column: 52
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 19
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 34
          }
        },
        loc: {
          start: {
            line: 20,
            column: 40
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 20
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 24,
            column: 40
          },
          end: {
            line: 24,
            column: 41
          }
        },
        loc: {
          start: {
            line: 24,
            column: 45
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 10,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 41
          }
        }, {
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 10,
            column: 10
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 11
          },
          end: {
            line: 29,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 28,
            column: 34
          }
        }, {
          start: {
            line: 29,
            column: 10
          },
          end: {
            line: 29,
            column: 40
          }
        }],
        line: 28
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d685842fdd5575e5aa11dcc579aa425b6337ef7f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = requestTimer;

/**
 * Create delay promise
 * 
 * @param {number} time 
 */
function createWait(time) {
  cov_1ufklkfomx.f[0]++;
  cov_1ufklkfomx.s[0]++;
  return time === 0 ? (cov_1ufklkfomx.b[0][0]++, Promise.resolve()) : (cov_1ufklkfomx.b[0][1]++, new Promise(function (resolve) {
    cov_1ufklkfomx.f[1]++;
    cov_1ufklkfomx.s[1]++;
    setTimeout(function () {
      cov_1ufklkfomx.f[2]++;
      cov_1ufklkfomx.s[2]++;
      return resolve();
    }, time);
  }));
}
/**
 * Detect timeout
 * 
 * @param {Promise} promise 
 * @param {null|number} time 
 */


function requestTimer(promise, time) {
  cov_1ufklkfomx.f[3]++;
  var request = (cov_1ufklkfomx.s[3]++, promise.then(function (data) {
    cov_1ufklkfomx.f[4]++;
    cov_1ufklkfomx.s[4]++;
    return {
      timeout: false,
      data: data
    };
  }));
  var timer = (cov_1ufklkfomx.s[5]++, createWait(time).then(function () {
    cov_1ufklkfomx.f[5]++;
    cov_1ufklkfomx.s[6]++;
    return {
      timeout: true,
      data: null
    };
  }));
  cov_1ufklkfomx.s[7]++;
  return time === null ? (cov_1ufklkfomx.b[1][0]++, request) : (cov_1ufklkfomx.b[1][1]++, Promise.race([request, timer]));
}

},{}],37:[function(require,module,exports){
"use strict";

var cov_1lsek7bsky = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/create-request/wait.js";
  var hash = "dd39401a7fc2e3ae94046b71626ddbc2445cc2c0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/create-request/wait.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 5,
          column: 17
        }
      },
      "1": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 17,
          column: 30
        }
      },
      "2": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 16,
          column: 20
        }
      },
      "3": {
        start: {
          line: 14,
          column: 16
        },
        end: {
          line: 14,
          column: 34
        }
      },
      "4": {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "5": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 15
        }
      },
      "6": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "7": {
        start: {
          line: 35,
          column: 12
        },
        end: {
          line: 35,
          column: 40
        }
      },
      "8": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 33
        }
      },
      "9": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 48
        }
      },
      "10": {
        start: {
          line: 38,
          column: 38
        },
        end: {
          line: 38,
          column: 47
        }
      },
      "11": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 15
        }
      },
      "12": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 58,
          column: 9
        }
      },
      "13": {
        start: {
          line: 56,
          column: 12
        },
        end: {
          line: 56,
          column: 37
        }
      },
      "14": {
        start: {
          line: 57,
          column: 12
        },
        end: {
          line: 57,
          column: 30
        }
      },
      "15": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 34
          },
          end: {
            line: 12,
            column: 35
          }
        },
        loc: {
          start: {
            line: 12,
            column: 43
          },
          end: {
            line: 17,
            column: 9
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 38
          },
          end: {
            line: 13,
            column: 39
          }
        },
        loc: {
          start: {
            line: 13,
            column: 42
          },
          end: {
            line: 16,
            column: 13
          }
        },
        line: 13
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 25
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        loc: {
          start: {
            line: 33,
            column: 14
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 33
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 35,
            column: 31
          },
          end: {
            line: 35,
            column: 32
          }
        },
        loc: {
          start: {
            line: 35,
            column: 37
          },
          end: {
            line: 35,
            column: 39
          }
        },
        line: 35
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 38,
            column: 27
          },
          end: {
            line: 38,
            column: 28
          }
        },
        loc: {
          start: {
            line: 38,
            column: 38
          },
          end: {
            line: 38,
            column: 47
          }
        },
        line: 38
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        loc: {
          start: {
            line: 46,
            column: 18
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 46
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        },
        loc: {
          start: {
            line: 54,
            column: 14
          },
          end: {
            line: 60,
            column: 5
          }
        },
        line: 54
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 17,
            column: 30
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 22
          },
          end: {
            line: 17,
            column: 10
          }
        }, {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 30
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }, {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }],
        line: 34
      },
      "2": {
        loc: {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 58,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 58,
            column: 9
          }
        }, {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 58,
            column: 9
          }
        }],
        line: 55
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "dd39401a7fc2e3ae94046b71626ddbc2445cc2c0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceWait = exports.ThrottleWait = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Create wait object
 */
var Wait =
/*#__PURE__*/
function () {
  function Wait() {
    (0, _classCallCheck2["default"])(this, Wait);
    this._timer = (cov_1lsek7bsky.s[0]++, null);
  }

  (0, _createClass2["default"])(Wait, [{
    key: "_createPromise",

    /**
     * Create internal promise
     * @param {number} time 
     */
    value: function _createPromise(time) {
      var _this = this;

      cov_1lsek7bsky.f[0]++;
      cov_1lsek7bsky.s[1]++;
      return time ? (cov_1lsek7bsky.b[0][0]++, new Promise(function (resolve) {
        cov_1lsek7bsky.f[1]++;
        cov_1lsek7bsky.s[2]++;
        _this._timer = setTimeout(function () {
          cov_1lsek7bsky.f[2]++;
          cov_1lsek7bsky.s[3]++;
          _this._timer = null;
          cov_1lsek7bsky.s[4]++;
          resolve();
        }, time);
      })) : (cov_1lsek7bsky.b[0][1]++, Promise.resolve());
    }
  }]);
  return Wait;
}();
/**
 * Create debounce wait object
 */


var ThrottleWait =
/*#__PURE__*/
function (_Wait) {
  (0, _inherits2["default"])(ThrottleWait, _Wait);

  function ThrottleWait() {
    (0, _classCallCheck2["default"])(this, ThrottleWait);
    cov_1lsek7bsky.f[3]++;
    cov_1lsek7bsky.s[5]++;
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ThrottleWait).call(this));
  }
  /**
   * get await promise
   * @param {number} time 
   */


  (0, _createClass2["default"])(ThrottleWait, [{
    key: "get",
    value: function get(time) {
      cov_1lsek7bsky.f[4]++;
      cov_1lsek7bsky.s[6]++;

      if (this._timer) {
        cov_1lsek7bsky.b[1][0]++;
        cov_1lsek7bsky.s[7]++;
        return new Promise(function () {
          cov_1lsek7bsky.f[5]++;
        });
      } else {
        cov_1lsek7bsky.b[1][1]++;
      }

      cov_1lsek7bsky.s[8]++;

      this._createPromise(time);

      cov_1lsek7bsky.s[9]++;
      return new Promise(function (resolve) {
        cov_1lsek7bsky.f[6]++;
        cov_1lsek7bsky.s[10]++;
        return resolve();
      });
    }
  }]);
  return ThrottleWait;
}(Wait);
/**
 * Create debounce wait object
 */


exports.ThrottleWait = ThrottleWait;

var DebounceWait =
/*#__PURE__*/
function (_Wait2) {
  (0, _inherits2["default"])(DebounceWait, _Wait2);

  function DebounceWait() {
    (0, _classCallCheck2["default"])(this, DebounceWait);
    cov_1lsek7bsky.f[7]++;
    cov_1lsek7bsky.s[11]++;
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DebounceWait).call(this));
  }
  /**
   * get await promise
   * @param {number} time 
   */


  (0, _createClass2["default"])(DebounceWait, [{
    key: "get",
    value: function get(time) {
      cov_1lsek7bsky.f[8]++;
      cov_1lsek7bsky.s[12]++;

      if (this._timer) {
        cov_1lsek7bsky.b[2][0]++;
        cov_1lsek7bsky.s[13]++;
        clearTimeout(this._timer);
        cov_1lsek7bsky.s[14]++;
        this._timer = null;
      } else {
        cov_1lsek7bsky.b[2][1]++;
      }

      cov_1lsek7bsky.s[15]++;
      return this._createPromise(time);
    }
  }]);
  return DebounceWait;
}(Wait);

exports.DebounceWait = DebounceWait;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14}],38:[function(require,module,exports){
"use strict";

var cov_6u1cw2xxk = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/request/handle-fetch.js";
  var hash = "e6e9435815ac4b5cc4a337333db7f86e04122d71";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/request/handle-fetch.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "1": {
        start: {
          line: 9,
          column: 28
        },
        end: {
          line: 9,
          column: 64
        }
      },
      "2": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 14,
          column: 9
        }
      },
      "3": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 34
        }
      },
      "4": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 34
        }
      },
      "5": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "6": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 30,
          column: 10
        }
      },
      "7": {
        start: {
          line: 27,
          column: 26
        },
        end: {
          line: 27,
          column: 47
        }
      },
      "8": {
        start: {
          line: 29,
          column: 12
        },
        end: {
          line: 29,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "checkStatus",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "handleFetch",
        decl: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 35
          }
        },
        loc: {
          start: {
            line: 25,
            column: 45
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 25
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 14
          },
          end: {
            line: 27,
            column: 15
          }
        },
        loc: {
          start: {
            line: 27,
            column: 26
          },
          end: {
            line: 27,
            column: 47
          }
        },
        line: 27
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 16
          }
        },
        loc: {
          start: {
            line: 28,
            column: 24
          },
          end: {
            line: 30,
            column: 9
          }
        },
        line: 28
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }, {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 8,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 8,
            column: 30
          }
        }, {
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 8,
            column: 55
          }
        }],
        line: 8
      },
      "2": {
        loc: {
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 14,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 14,
            column: 9
          }
        }, {
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 14,
            column: 9
          }
        }],
        line: 10
      },
      "3": {
        loc: {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 23
          }
        }, {
          start: {
            line: 10,
            column: 27
          },
          end: {
            line: 10,
            column: 67
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e6e9435815ac4b5cc4a337333db7f86e04122d71"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleFetch;

/**
 * Check for success
 * 
 * @param {Object} response 
 */
function checkStatus(response) {
  cov_6u1cw2xxk.f[0]++;
  cov_6u1cw2xxk.s[0]++;

  if ((cov_6u1cw2xxk.b[1][0]++, response.status >= 200) && (cov_6u1cw2xxk.b[1][1]++, response.status < 300)) {
    cov_6u1cw2xxk.b[0][0]++;
    var contentType = (cov_6u1cw2xxk.s[1]++, response.headers.get('content-type'));
    cov_6u1cw2xxk.s[2]++;

    if ((cov_6u1cw2xxk.b[3][0]++, contentType) && (cov_6u1cw2xxk.b[3][1]++, contentType.includes('application/json'))) {
      cov_6u1cw2xxk.b[2][0]++;
      cov_6u1cw2xxk.s[3]++;
      return response.json();
    } else {
      cov_6u1cw2xxk.b[2][1]++;
      cov_6u1cw2xxk.s[4]++;
      return response.text();
    }
  } else {
    cov_6u1cw2xxk.b[0][1]++;
    cov_6u1cw2xxk.s[5]++;
    throw new Error();
  }
}
/**
 * Handle fetch
 * 
 * @param {Object} promise 
 */


function handleFetch(promise) {
  cov_6u1cw2xxk.f[1]++;
  cov_6u1cw2xxk.s[6]++;
  return promise.then(function (response) {
    cov_6u1cw2xxk.f[2]++;
    cov_6u1cw2xxk.s[7]++;
    return checkStatus(response);
  })["catch"](function (error) {
    cov_6u1cw2xxk.f[3]++;
    cov_6u1cw2xxk.s[8]++;
    throw error;
  });
}

},{}],39:[function(require,module,exports){
"use strict";

var cov_nwqbl1dc7 = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/request/index.js";
  var hash = "2ff696614833024bcc0755e74bc2ae096b252ced";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/request/index.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 22
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "2": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 17,
          column: 68
        }
      },
      "3": {
        start: {
          line: 17,
          column: 28
        },
        end: {
          line: 17,
          column: 67
        }
      },
      "4": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 36
        }
      },
      "5": {
        start: {
          line: 21,
          column: 20
        },
        end: {
          line: 27,
          column: 6
        }
      },
      "6": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 31
        }
      },
      "7": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 22
        }
      },
      "8": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 41
        }
      },
      "9": {
        start: {
          line: 42,
          column: 20
        },
        end: {
          line: 48,
          column: 6
        }
      },
      "10": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 31
        }
      },
      "11": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 22
        }
      },
      "12": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 64,
          column: 5
        }
      },
      "13": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 35
        }
      },
      "14": {
        start: {
          line: 65,
          column: 20
        },
        end: {
          line: 73,
          column: 6
        }
      },
      "15": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 31
        }
      },
      "16": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 22
        }
      },
      "17": {
        start: {
          line: 87,
          column: 19
        },
        end: {
          line: 87,
          column: 21
        }
      },
      "18": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "19": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 91,
          column: 10
        }
      },
      "20": {
        start: {
          line: 90,
          column: 12
        },
        end: {
          line: 90,
          column: 86
        }
      },
      "21": {
        start: {
          line: 93,
          column: 8
        },
        end: {
          line: 93,
          column: 34
        }
      },
      "22": {
        start: {
          line: 95,
          column: 20
        },
        end: {
          line: 103,
          column: 6
        }
      },
      "23": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "get",
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 19
          }
        },
        loc: {
          start: {
            line: 13,
            column: 48
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 17,
            column: 22
          }
        },
        loc: {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 67
          }
        },
        line: 17
      },
      "2": {
        name: "push",
        decl: {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 39,
            column: 20
          }
        },
        loc: {
          start: {
            line: 39,
            column: 49
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 39
      },
      "3": {
        name: "post",
        decl: {
          start: {
            line: 60,
            column: 16
          },
          end: {
            line: 60,
            column: 20
          }
        },
        loc: {
          start: {
            line: 60,
            column: 49
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 60
      },
      "4": {
        name: "form",
        decl: {
          start: {
            line: 85,
            column: 16
          },
          end: {
            line: 85,
            column: 20
          }
        },
        loc: {
          start: {
            line: 85,
            column: 49
          },
          end: {
            line: 105,
            column: 1
          }
        },
        line: 85
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 89,
            column: 34
          },
          end: {
            line: 89,
            column: 35
          }
        },
        loc: {
          start: {
            line: 89,
            column: 41
          },
          end: {
            line: 91,
            column: 9
          }
        },
        line: 89
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 21
          },
          end: {
            line: 26,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 39
          }
        }, {
          start: {
            line: 26,
            column: 42
          },
          end: {
            line: 26,
            column: 48
          }
        }],
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 47,
            column: 30
          },
          end: {
            line: 47,
            column: 39
          }
        }, {
          start: {
            line: 47,
            column: 42
          },
          end: {
            line: 47,
            column: 48
          }
        }],
        line: 47
      },
      "3": {
        loc: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        }, {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        }],
        line: 62
      },
      "4": {
        loc: {
          start: {
            line: 72,
            column: 21
          },
          end: {
            line: 72,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 72,
            column: 30
          },
          end: {
            line: 72,
            column: 39
          }
        }, {
          start: {
            line: 72,
            column: 42
          },
          end: {
            line: 72,
            column: 48
          }
        }],
        line: 72
      },
      "5": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }, {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }],
        line: 88
      },
      "6": {
        loc: {
          start: {
            line: 102,
            column: 21
          },
          end: {
            line: 102,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 102,
            column: 30
          },
          end: {
            line: 102,
            column: 39
          }
        }, {
          start: {
            line: 102,
            column: 42
          },
          end: {
            line: 102,
            column: 48
          }
        }],
        line: 102
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2ff696614833024bcc0755e74bc2ae096b252ced"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.push = push;
exports.post = post;
exports.form = form;

var _constants = require("../../shared/constants");

var _handleFetch = _interopRequireDefault(require("./handle-fetch"));

var _isPlainObject = _interopRequireDefault(require("is-plain-object"));

/**
 * Query String Parameters
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */
function get(url, data, headers, cookie) {
  cov_nwqbl1dc7.f[0]++;
  cov_nwqbl1dc7.s[0]++;
  url = new URL(url);
  cov_nwqbl1dc7.s[1]++;

  if ((0, _isPlainObject["default"])(data)) {
    cov_nwqbl1dc7.b[0][0]++;
    cov_nwqbl1dc7.s[2]++;
    Object.keys(data).forEach(function (key) {
      cov_nwqbl1dc7.f[1]++;
      cov_nwqbl1dc7.s[3]++;
      return url.searchParams.append(key, data[key]);
    });
  } else {
    cov_nwqbl1dc7.b[0][1]++;
    cov_nwqbl1dc7.s[4]++;
    url.search = data.toString();
  }

  var promise = (cov_nwqbl1dc7.s[5]++, fetch(url, {
    method: 'GET',
    headers: Object.assign({}, headers),
    credentials: cookie ? (cov_nwqbl1dc7.b[1][0]++, 'include') : (cov_nwqbl1dc7.b[1][1]++, 'omit')
  }));
  cov_nwqbl1dc7.s[6]++;
  return (0, _handleFetch["default"])(promise);
}
/**
 * Dynamic Router
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */


function push(url, data, headers, cookie) {
  cov_nwqbl1dc7.f[2]++;
  cov_nwqbl1dc7.s[7]++;
  url = new URL(url);
  cov_nwqbl1dc7.s[8]++;
  url.pathname += "/".concat(data.toString());
  var promise = (cov_nwqbl1dc7.s[9]++, fetch(url, {
    method: 'GET',
    headers: Object.assign({}, headers),
    credentials: cookie ? (cov_nwqbl1dc7.b[2][0]++, 'include') : (cov_nwqbl1dc7.b[2][1]++, 'omit')
  }));
  cov_nwqbl1dc7.s[10]++;
  return (0, _handleFetch["default"])(promise);
}
/**
 * Request Payload
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */


function post(url, data, headers, cookie) {
  cov_nwqbl1dc7.f[3]++;
  cov_nwqbl1dc7.s[11]++;
  url = new URL(url);
  cov_nwqbl1dc7.s[12]++;

  if ((0, _isPlainObject["default"])(data)) {
    cov_nwqbl1dc7.b[3][0]++;
    cov_nwqbl1dc7.s[13]++;
    data = JSON.stringify(data);
  } else {
    cov_nwqbl1dc7.b[3][1]++;
  }

  var promise = (cov_nwqbl1dc7.s[14]++, fetch(url, {
    method: 'POST',
    body: data.toString(),
    headers: Object.assign({
      'Content-type': _constants.CONTENT_TYPE['JSON']
    }, headers),
    credentials: cookie ? (cov_nwqbl1dc7.b[4][0]++, 'include') : (cov_nwqbl1dc7.b[4][1]++, 'omit')
  }));
  cov_nwqbl1dc7.s[15]++;
  return (0, _handleFetch["default"])(promise);
}
/**
 * Form Data
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */


function form(url, data, headers, cookie) {
  cov_nwqbl1dc7.f[4]++;
  cov_nwqbl1dc7.s[16]++;
  url = new URL(url);
  var fromData = (cov_nwqbl1dc7.s[17]++, '');
  cov_nwqbl1dc7.s[18]++;

  if ((0, _isPlainObject["default"])(data)) {
    cov_nwqbl1dc7.b[5][0]++;
    cov_nwqbl1dc7.s[19]++;
    Object.keys(data).forEach(function (key) {
      cov_nwqbl1dc7.f[5]++;
      cov_nwqbl1dc7.s[20]++;
      fromData += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]), "&");
    });
  } else {
    cov_nwqbl1dc7.b[5][1]++;
    cov_nwqbl1dc7.s[21]++;
    fromData = data.toString();
  }

  var promise = (cov_nwqbl1dc7.s[22]++, fetch(url, {
    method: 'POST',
    body: fromData,
    headers: Object.assign({
      'Content-type': _constants.CONTENT_TYPE['FORM']
    }, headers),
    credentials: cookie ? (cov_nwqbl1dc7.b[6][0]++, 'include') : (cov_nwqbl1dc7.b[6][1]++, 'omit')
  }));
  cov_nwqbl1dc7.s[23]++;
  return (0, _handleFetch["default"])(promise);
}

},{"../../shared/constants":41,"./handle-fetch":38,"@babel/runtime/helpers/interopRequireDefault":10,"is-plain-object":24}],40:[function(require,module,exports){
"use strict";

var cov_1n41lqrvsu = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/reixs.js";
  var hash = "bc709ac8d278fc2f5e6c7f478472129cd763273d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/reixs.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 16,
          column: 6
        }
      },
      "1": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 15,
          column: 9
        }
      },
      "2": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 14,
          column: 43
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 37
        }
      },
      "4": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "5": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 32
        }
      },
      "6": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 39
        }
      },
      "7": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 42
        }
      },
      "8": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 46,
          column: 56
        }
      },
      "9": {
        start: {
          line: 46,
          column: 30
        },
        end: {
          line: 46,
          column: 56
        }
      },
      "10": {
        start: {
          line: 48,
          column: 0
        },
        end: {
          line: 48,
          column: 58
        }
      },
      "11": {
        start: {
          line: 48,
          column: 31
        },
        end: {
          line: 48,
          column: 58
        }
      },
      "12": {
        start: {
          line: 51,
          column: 0
        },
        end: {
          line: 51,
          column: 29
        }
      },
      "13": {
        start: {
          line: 54,
          column: 0
        },
        end: {
          line: 54,
          column: 48
        }
      },
      "14": {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 55,
          column: 48
        }
      },
      "15": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 56
        }
      },
      "16": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 59,
          column: 54
        }
      },
      "17": {
        start: {
          line: 60,
          column: 0
        },
        end: {
          line: 60,
          column: 56
        }
      },
      "18": {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 61,
          column: 54
        }
      },
      "19": {
        start: {
          line: 64,
          column: 0
        },
        end: {
          line: 72,
          column: 2
        }
      },
      "20": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 70,
          column: 9
        }
      },
      "21": {
        start: {
          line: 67,
          column: 12
        },
        end: {
          line: 67,
          column: 45
        }
      },
      "22": {
        start: {
          line: 69,
          column: 12
        },
        end: {
          line: 69,
          column: 78
        }
      },
      "23": {
        start: {
          line: 75,
          column: 0
        },
        end: {
          line: 83,
          column: 2
        }
      },
      "24": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 81,
          column: 9
        }
      },
      "25": {
        start: {
          line: 78,
          column: 12
        },
        end: {
          line: 78,
          column: 45
        }
      },
      "26": {
        start: {
          line: 80,
          column: 12
        },
        end: {
          line: 80,
          column: 78
        }
      }
    },
    fnMap: {
      "0": {
        name: "setPipes",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 17
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 21
          }
        },
        loc: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "setInterceptor",
        decl: {
          start: {
            line: 26,
            column: 9
          },
          end: {
            line: 26,
            column: 23
          }
        },
        loc: {
          start: {
            line: 26,
            column: 35
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 26
      },
      "3": {
        name: "reixs",
        decl: {
          start: {
            line: 41,
            column: 9
          },
          end: {
            line: 41,
            column: 14
          }
        },
        loc: {
          start: {
            line: 41,
            column: 36
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 41
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 46,
            column: 13
          }
        },
        loc: {
          start: {
            line: 46,
            column: 30
          },
          end: {
            line: 46,
            column: 56
          }
        },
        line: 46
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 48,
            column: 13
          },
          end: {
            line: 48,
            column: 14
          }
        },
        loc: {
          start: {
            line: 48,
            column: 31
          },
          end: {
            line: 48,
            column: 58
          }
        },
        line: 48
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        loc: {
          start: {
            line: 65,
            column: 15
          },
          end: {
            line: 71,
            column: 5
          }
        },
        line: 65
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 5
          }
        },
        loc: {
          start: {
            line: 76,
            column: 15
          },
          end: {
            line: 82,
            column: 5
          }
        },
        line: 76
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 15,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 15,
            column: 9
          }
        }, {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 15,
            column: 9
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 66,
            column: 8
          },
          end: {
            line: 70,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 8
          },
          end: {
            line: 70,
            column: 9
          }
        }, {
          start: {
            line: 66,
            column: 8
          },
          end: {
            line: 70,
            column: 9
          }
        }],
        line: 66
      },
      "3": {
        loc: {
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        }, {
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        }],
        line: 77
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bc709ac8d278fc2f5e6c7f478472129cd763273d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _constructor = require("./core/constructor");

var _isPlainObject = _interopRequireDefault(require("is-plain-object"));

/**
 * Set pipe 
 * 
 * @param {string} name 
 * @param  {...any} funList 
 */
function setPipes(name) {
  cov_1n41lqrvsu.f[0]++;
  cov_1n41lqrvsu.s[0]++;

  for (var _len = arguments.length, funList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funList[_key - 1] = arguments[_key];
  }

  funList.forEach(function (fn) {
    cov_1n41lqrvsu.f[1]++;
    cov_1n41lqrvsu.s[1]++;

    if (typeof fn !== 'function') {
      cov_1n41lqrvsu.b[0][0]++;
      cov_1n41lqrvsu.s[2]++;
      throw new Error('Invalid type');
    } else {
      cov_1n41lqrvsu.b[0][1]++;
    }
  });
  cov_1n41lqrvsu.s[3]++;
  _constructor.Reixs.global[name] = [].concat(funList);
}
/**
 * Set Interceptor
 * 
 * @param {string} name 
 * @param {Function} fun 
 */


function setInterceptor(name, fun) {
  cov_1n41lqrvsu.f[2]++;
  cov_1n41lqrvsu.s[4]++;

  if (typeof fn === 'function') {
    cov_1n41lqrvsu.b[1][0]++;
    cov_1n41lqrvsu.s[5]++;
    _constructor.Reixs.global[name] = fun;
  } else {
    cov_1n41lqrvsu.b[1][1]++;
    cov_1n41lqrvsu.s[6]++;
    throw new Error('Invalid type');
  }
}
/**
 * reixs method
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {*} params 
 */


function reixs(url, method, params) {
  cov_1n41lqrvsu.f[3]++;
  cov_1n41lqrvsu.s[7]++;
  return new _constructor.Reixs(url, method, params);
} // reixs.all


cov_1n41lqrvsu.s[8]++;

reixs.all = function () {
  cov_1n41lqrvsu.f[4]++;
  cov_1n41lqrvsu.s[9]++;

  for (var _len2 = arguments.length, scheduler = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    scheduler[_key2] = arguments[_key2];
  }

  return (0, _construct2["default"])(_constructor.ReixsAll, scheduler);
}; // reixs.race


cov_1n41lqrvsu.s[10]++;

reixs.race = function () {
  cov_1n41lqrvsu.f[5]++;
  cov_1n41lqrvsu.s[11]++;

  for (var _len3 = arguments.length, scheduler = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    scheduler[_key3] = arguments[_key3];
  }

  return (0, _construct2["default"])(_constructor.ReixsRace, scheduler);
}; // Replaced by browserify-versionify transform


cov_1n41lqrvsu.s[12]++;
reixs.version = '0.1.1'; // Set request and response pipe

cov_1n41lqrvsu.s[13]++;
reixs.reqPipes = setPipes.bind(null, 'reqPipes');
cov_1n41lqrvsu.s[14]++;
reixs.resPipes = setPipes.bind(null, 'resPipes'); // Set request and response interceptor

cov_1n41lqrvsu.s[15]++;
reixs.beforeReq = setInterceptor.bind(null, 'beforeReq');
cov_1n41lqrvsu.s[16]++;
reixs.afterReq = setInterceptor.bind(null, 'afterReq');
cov_1n41lqrvsu.s[17]++;
reixs.beforeRes = setInterceptor.bind(null, 'beforeRes');
cov_1n41lqrvsu.s[18]++;
reixs.afterRes = setInterceptor.bind(null, 'afterRes'); // Set global header

cov_1n41lqrvsu.s[19]++;
Reflect.defineProperty(reixs, 'globalHeader', {
  set: function set(value) {
    cov_1n41lqrvsu.f[6]++;
    cov_1n41lqrvsu.s[20]++;

    if ((0, _isPlainObject["default"])(value)) {
      cov_1n41lqrvsu.b[2][0]++;
      cov_1n41lqrvsu.s[21]++;
      _constructor.Reixs.global.globalHeader = value;
    } else {
      cov_1n41lqrvsu.b[2][1]++;
      cov_1n41lqrvsu.s[22]++;
      throw new Error('The argument passed in must be a literal object');
    }
  }
}); // Set global params

cov_1n41lqrvsu.s[23]++;
Reflect.defineProperty(reixs, 'globalParams', {
  set: function set(value) {
    cov_1n41lqrvsu.f[7]++;
    cov_1n41lqrvsu.s[24]++;

    if ((0, _isPlainObject["default"])(value)) {
      cov_1n41lqrvsu.b[3][0]++;
      cov_1n41lqrvsu.s[25]++;
      _constructor.Reixs.global.globalParams = value;
    } else {
      cov_1n41lqrvsu.b[3][1]++;
      cov_1n41lqrvsu.s[26]++;
      throw new Error('The argument passed in must be a literal object');
    }
  }
});
var _default = reixs;
exports["default"] = _default;

},{"./core/constructor":29,"@babel/runtime/helpers/construct":6,"@babel/runtime/helpers/interopRequireDefault":10,"is-plain-object":24}],41:[function(require,module,exports){
"use strict";

var cov_18ouegwuwg = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/shared/constants.js";
  var hash = "846c2f272a2c3399e400ea8fc13c9575e7bc4678";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/shared/constants.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 28
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 11,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "846c2f272a2c3399e400ea8fc13c9575e7bc4678"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTENT_TYPE = exports.METHOD_TYPES = void 0;
var METHOD_TYPES = (cov_18ouegwuwg.s[0]++, ['get', 'post', 'form', 'push']);
exports.METHOD_TYPES = METHOD_TYPES;
var CONTENT_TYPE = (cov_18ouegwuwg.s[1]++, {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded; charset=UTF-8'
});
exports.CONTENT_TYPE = CONTENT_TYPE;

},{}],42:[function(require,module,exports){
"use strict";

var cov_1b2z63p4vd = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/shared/utils.js";
  var hash = "cf6148d12692bfd7eb7598c8bc221027b1acf94d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/shared/utils.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 67
        }
      },
      "1": {
        start: {
          line: 8,
          column: 57
        },
        end: {
          line: 8,
          column: 66
        }
      },
      "2": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "dataFiltering",
        decl: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 29
          }
        },
        loc: {
          start: {
            line: 7,
            column: 43
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 44
          },
          end: {
            line: 8,
            column: 45
          }
        },
        loc: {
          start: {
            line: 8,
            column: 57
          },
          end: {
            line: 8,
            column: 66
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "cf6148d12692bfd7eb7598c8bc221027b1acf94d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataFiltering = dataFiltering;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * Data processing
 * 
 * @param {Array} pipes 
 * @param {*} data 
 */
function dataFiltering(pipes, data) {
  cov_1b2z63p4vd.f[0]++;
  var newData = (cov_1b2z63p4vd.s[0]++, [data].concat((0, _toConsumableArray2["default"])(pipes)).reduce(function (prev, cur) {
    cov_1b2z63p4vd.f[1]++;
    cov_1b2z63p4vd.s[1]++;
    return cur(prev);
  }));
  cov_1b2z63p4vd.s[2]++;
  return newData;
}

},{"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/toConsumableArray":16}]},{},[1])(1)
});

//# sourceMappingURL=reixs.js.map
