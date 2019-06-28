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

},{"./src/reixs":32}],2:[function(require,module,exports){
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

},{"regenerator-runtime":20}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"./reixs":24,"./reixs-all":22,"./reixs-race":23,"@babel/runtime/helpers/interopRequireDefault":10}],22:[function(require,module,exports){
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

},{"../create-request":26,"./scheduler":25,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/regenerator":18}],23:[function(require,module,exports){
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

},{"../create-request":26,"./scheduler":25,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/regenerator":18}],24:[function(require,module,exports){
"use strict";

var cov_6cbswsomc = function () {
  var path = "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs.js";
  var hash = "aa70c7d7d08bc39ccc1f550a1e58860b9c3d3fc2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/didi/Documents/fengchu/reixs/src/core/constructor/reixs.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 15
        }
      },
      "1": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 22,
          column: 9
        }
      },
      "2": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 30
        }
      },
      "3": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 27
        }
      },
      "4": {
        start: {
          line: 30,
          column: 20
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "5": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "6": {
        start: {
          line: 51,
          column: 13
        },
        end: {
          line: 54,
          column: 5
        }
      },
      "7": {
        start: {
          line: 57,
          column: 20
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "8": {
        start: {
          line: 70,
          column: 25
        },
        end: {
          line: 70,
          column: 35
        }
      },
      "9": {
        start: {
          line: 71,
          column: 31
        },
        end: {
          line: 71,
          column: 43
        }
      },
      "10": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 50
        }
      },
      "11": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 53
        }
      },
      "12": {
        start: {
          line: 81,
          column: 40
        },
        end: {
          line: 81,
          column: 53
        }
      },
      "13": {
        start: {
          line: 82,
          column: 31
        },
        end: {
          line: 82,
          column: 43
        }
      },
      "14": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 50
        }
      },
      "15": {
        start: {
          line: 90,
          column: 57
        },
        end: {
          line: 90,
          column: 61
        }
      },
      "16": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 96,
          column: 9
        }
      },
      "17": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 109,
          column: 9
        }
      },
      "18": {
        start: {
          line: 106,
          column: 12
        },
        end: {
          line: 106,
          column: 32
        }
      },
      "19": {
        start: {
          line: 108,
          column: 12
        },
        end: {
          line: 108,
          column: 43
        }
      },
      "20": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 110,
          column: 19
        }
      },
      "21": {
        start: {
          line: 119,
          column: 8
        },
        end: {
          line: 123,
          column: 9
        }
      },
      "22": {
        start: {
          line: 120,
          column: 12
        },
        end: {
          line: 120,
          column: 38
        }
      },
      "23": {
        start: {
          line: 122,
          column: 12
        },
        end: {
          line: 122,
          column: 78
        }
      },
      "24": {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 124,
          column: 19
        }
      },
      "25": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 137,
          column: 9
        }
      },
      "26": {
        start: {
          line: 134,
          column: 12
        },
        end: {
          line: 134,
          column: 38
        }
      },
      "27": {
        start: {
          line: 136,
          column: 12
        },
        end: {
          line: 136,
          column: 113
        }
      },
      "28": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 19
        }
      },
      "29": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 151,
          column: 9
        }
      },
      "30": {
        start: {
          line: 148,
          column: 12
        },
        end: {
          line: 148,
          column: 40
        }
      },
      "31": {
        start: {
          line: 150,
          column: 12
        },
        end: {
          line: 150,
          column: 43
        }
      },
      "32": {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 152,
          column: 19
        }
      },
      "33": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 37
        }
      },
      "34": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 166,
          column: 9
        }
      },
      "35": {
        start: {
          line: 163,
          column: 12
        },
        end: {
          line: 163,
          column: 38
        }
      },
      "36": {
        start: {
          line: 165,
          column: 12
        },
        end: {
          line: 165,
          column: 45
        }
      },
      "37": {
        start: {
          line: 167,
          column: 8
        },
        end: {
          line: 167,
          column: 19
        }
      },
      "38": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 180,
          column: 9
        }
      },
      "39": {
        start: {
          line: 176,
          column: 30
        },
        end: {
          line: 176,
          column: 56
        }
      },
      "40": {
        start: {
          line: 177,
          column: 12
        },
        end: {
          line: 177,
          column: 54
        }
      },
      "41": {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 179,
          column: 45
        }
      },
      "42": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 181,
          column: 19
        }
      },
      "43": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 194,
          column: 9
        }
      },
      "44": {
        start: {
          line: 190,
          column: 30
        },
        end: {
          line: 190,
          column: 56
        }
      },
      "45": {
        start: {
          line: 191,
          column: 12
        },
        end: {
          line: 191,
          column: 54
        }
      },
      "46": {
        start: {
          line: 193,
          column: 12
        },
        end: {
          line: 193,
          column: 45
        }
      },
      "47": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 195,
          column: 19
        }
      },
      "48": {
        start: {
          line: 203,
          column: 8
        },
        end: {
          line: 212,
          column: 9
        }
      },
      "49": {
        start: {
          line: 204,
          column: 12
        },
        end: {
          line: 208,
          column: 13
        }
      },
      "50": {
        start: {
          line: 205,
          column: 16
        },
        end: {
          line: 205,
          column: 57
        }
      },
      "51": {
        start: {
          line: 207,
          column: 16
        },
        end: {
          line: 207,
          column: 58
        }
      },
      "52": {
        start: {
          line: 209,
          column: 12
        },
        end: {
          line: 209,
          column: 23
        }
      },
      "53": {
        start: {
          line: 211,
          column: 12
        },
        end: {
          line: 211,
          column: 43
        }
      },
      "54": {
        start: {
          line: 220,
          column: 8
        },
        end: {
          line: 229,
          column: 9
        }
      },
      "55": {
        start: {
          line: 221,
          column: 12
        },
        end: {
          line: 225,
          column: 13
        }
      },
      "56": {
        start: {
          line: 222,
          column: 16
        },
        end: {
          line: 222,
          column: 57
        }
      },
      "57": {
        start: {
          line: 224,
          column: 16
        },
        end: {
          line: 224,
          column: 58
        }
      },
      "58": {
        start: {
          line: 226,
          column: 12
        },
        end: {
          line: 226,
          column: 23
        }
      },
      "59": {
        start: {
          line: 228,
          column: 12
        },
        end: {
          line: 228,
          column: 43
        }
      },
      "60": {
        start: {
          line: 239,
          column: 38
        },
        end: {
          line: 239,
          column: 48
        }
      },
      "61": {
        start: {
          line: 240,
          column: 28
        },
        end: {
          line: 240,
          column: 38
        }
      },
      "62": {
        start: {
          line: 241,
          column: 37
        },
        end: {
          line: 241,
          column: 48
        }
      },
      "63": {
        start: {
          line: 242,
          column: 59
        },
        end: {
          line: 242,
          column: 77
        }
      },
      "64": {
        start: {
          line: 250,
          column: 12
        },
        end: {
          line: 250,
          column: 35
        }
      },
      "65": {
        start: {
          line: 252,
          column: 28
        },
        end: {
          line: 252,
          column: 48
        }
      },
      "66": {
        start: {
          line: 253,
          column: 30
        },
        end: {
          line: 253,
          column: 53
        }
      },
      "67": {
        start: {
          line: 256,
          column: 8
        },
        end: {
          line: 259,
          column: 9
        }
      },
      "68": {
        start: {
          line: 258,
          column: 12
        },
        end: {
          line: 258,
          column: 18
        }
      },
      "69": {
        start: {
          line: 263,
          column: 8
        },
        end: {
          line: 267,
          column: 9
        }
      },
      "70": {
        start: {
          line: 264,
          column: 12
        },
        end: {
          line: 264,
          column: 88
        }
      },
      "71": {
        start: {
          line: 266,
          column: 12
        },
        end: {
          line: 266,
          column: 28
        }
      },
      "72": {
        start: {
          line: 270,
          column: 8
        },
        end: {
          line: 273,
          column: 9
        }
      },
      "73": {
        start: {
          line: 272,
          column: 12
        },
        end: {
          line: 272,
          column: 18
        }
      },
      "74": {
        start: {
          line: 275,
          column: 21
        },
        end: {
          line: 280,
          column: 9
        }
      },
      "75": {
        start: {
          line: 283,
          column: 8
        },
        end: {
          line: 286,
          column: 9
        }
      },
      "76": {
        start: {
          line: 285,
          column: 12
        },
        end: {
          line: 285,
          column: 18
        }
      },
      "77": {
        start: {
          line: 290,
          column: 8
        },
        end: {
          line: 294,
          column: 9
        }
      },
      "78": {
        start: {
          line: 291,
          column: 12
        },
        end: {
          line: 291,
          column: 77
        }
      },
      "79": {
        start: {
          line: 293,
          column: 12
        },
        end: {
          line: 293,
          column: 28
        }
      },
      "80": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 300,
          column: 9
        }
      },
      "81": {
        start: {
          line: 299,
          column: 12
        },
        end: {
          line: 299,
          column: 18
        }
      },
      "82": {
        start: {
          line: 302,
          column: 8
        },
        end: {
          line: 302,
          column: 24
        }
      },
      "83": {
        start: {
          line: 307,
          column: 0
        },
        end: {
          line: 311,
          column: 2
        }
      },
      "84": {
        start: {
          line: 308,
          column: 4
        },
        end: {
          line: 310,
          column: 5
        }
      },
      "85": {
        start: {
          line: 309,
          column: 8
        },
        end: {
          line: 309,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 52
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        loc: {
          start: {
            line: 69,
            column: 25
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 69
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        loc: {
          start: {
            line: 80,
            column: 23
          },
          end: {
            line: 84,
            column: 5
          }
        },
        line: 80
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        loc: {
          start: {
            line: 89,
            column: 19
          },
          end: {
            line: 97,
            column: 5
          }
        },
        line: 89
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 5
          }
        },
        loc: {
          start: {
            line: 104,
            column: 16
          },
          end: {
            line: 111,
            column: 5
          }
        },
        line: 104
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        },
        loc: {
          start: {
            line: 118,
            column: 22
          },
          end: {
            line: 125,
            column: 5
          }
        },
        line: 118
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        loc: {
          start: {
            line: 132,
            column: 22
          },
          end: {
            line: 139,
            column: 5
          }
        },
        line: 132
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        loc: {
          start: {
            line: 146,
            column: 24
          },
          end: {
            line: 153,
            column: 5
          }
        },
        line: 146
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        loc: {
          start: {
            line: 160,
            column: 29
          },
          end: {
            line: 168,
            column: 5
          }
        },
        line: 160
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        },
        loc: {
          start: {
            line: 175,
            column: 23
          },
          end: {
            line: 182,
            column: 5
          }
        },
        line: 175
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 176,
            column: 23
          },
          end: {
            line: 176,
            column: 24
          }
        },
        loc: {
          start: {
            line: 176,
            column: 30
          },
          end: {
            line: 176,
            column: 56
          }
        },
        line: 176
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 189,
            column: 5
          }
        },
        loc: {
          start: {
            line: 189,
            column: 23
          },
          end: {
            line: 196,
            column: 5
          }
        },
        line: 189
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 190,
            column: 23
          },
          end: {
            line: 190,
            column: 24
          }
        },
        loc: {
          start: {
            line: 190,
            column: 30
          },
          end: {
            line: 190,
            column: 56
          }
        },
        line: 190
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 202,
            column: 5
          }
        },
        loc: {
          start: {
            line: 202,
            column: 32
          },
          end: {
            line: 213,
            column: 5
          }
        },
        line: 202
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 5
          }
        },
        loc: {
          start: {
            line: 219,
            column: 32
          },
          end: {
            line: 230,
            column: 5
          }
        },
        line: 219
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        loc: {
          start: {
            line: 238,
            column: 57
          },
          end: {
            line: 303,
            column: 5
          }
        },
        line: 238
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 307,
            column: 17
          },
          end: {
            line: 307,
            column: 18
          }
        },
        loc: {
          start: {
            line: 307,
            column: 30
          },
          end: {
            line: 311,
            column: 1
          }
        },
        line: 307
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 308,
            column: 35
          },
          end: {
            line: 308,
            column: 36
          }
        },
        loc: {
          start: {
            line: 308,
            column: 52
          },
          end: {
            line: 310,
            column: 5
          }
        },
        line: 308
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 14,
            column: 35
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 35
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 37
          },
          end: {
            line: 14,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 46
          },
          end: {
            line: 14,
            column: 50
          }
        }],
        line: 14
      },
      "2": {
        loc: {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 81,
            column: 53
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 81,
            column: 53
          }
        }, {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 81,
            column: 53
          }
        }],
        line: 81
      },
      "3": {
        loc: {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 109,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 109,
            column: 9
          }
        }, {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 109,
            column: 9
          }
        }],
        line: 105
      },
      "4": {
        loc: {
          start: {
            line: 119,
            column: 8
          },
          end: {
            line: 123,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 119,
            column: 8
          },
          end: {
            line: 123,
            column: 9
          }
        }, {
          start: {
            line: 119,
            column: 8
          },
          end: {
            line: 123,
            column: 9
          }
        }],
        line: 119
      },
      "5": {
        loc: {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 137,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 137,
            column: 9
          }
        }, {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 137,
            column: 9
          }
        }],
        line: 133
      },
      "6": {
        loc: {
          start: {
            line: 133,
            column: 12
          },
          end: {
            line: 133,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 133,
            column: 12
          },
          end: {
            line: 133,
            column: 38
          }
        }, {
          start: {
            line: 133,
            column: 42
          },
          end: {
            line: 133,
            column: 63
          }
        }, {
          start: {
            line: 133,
            column: 67
          },
          end: {
            line: 133,
            column: 88
          }
        }],
        line: 133
      },
      "7": {
        loc: {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 151,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 151,
            column: 9
          }
        }, {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 151,
            column: 9
          }
        }],
        line: 147
      },
      "8": {
        loc: {
          start: {
            line: 160,
            column: 14
          },
          end: {
            line: 160,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 160,
            column: 23
          },
          end: {
            line: 160,
            column: 27
          }
        }],
        line: 160
      },
      "9": {
        loc: {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        }, {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        }],
        line: 162
      },
      "10": {
        loc: {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 180,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 180,
            column: 9
          }
        }, {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 180,
            column: 9
          }
        }],
        line: 176
      },
      "11": {
        loc: {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 194,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 194,
            column: 9
          }
        }, {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 194,
            column: 9
          }
        }],
        line: 190
      },
      "12": {
        loc: {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 212,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 212,
            column: 9
          }
        }, {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 212,
            column: 9
          }
        }],
        line: 203
      },
      "13": {
        loc: {
          start: {
            line: 204,
            column: 12
          },
          end: {
            line: 208,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 204,
            column: 12
          },
          end: {
            line: 208,
            column: 13
          }
        }, {
          start: {
            line: 204,
            column: 12
          },
          end: {
            line: 208,
            column: 13
          }
        }],
        line: 204
      },
      "14": {
        loc: {
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        }, {
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        }],
        line: 220
      },
      "15": {
        loc: {
          start: {
            line: 221,
            column: 12
          },
          end: {
            line: 225,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 12
          },
          end: {
            line: 225,
            column: 13
          }
        }, {
          start: {
            line: 221,
            column: 12
          },
          end: {
            line: 225,
            column: 13
          }
        }],
        line: 221
      },
      "16": {
        loc: {
          start: {
            line: 238,
            column: 23
          },
          end: {
            line: 238,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 238,
            column: 32
          },
          end: {
            line: 238,
            column: 49
          }
        }],
        line: 238
      },
      "17": {
        loc: {
          start: {
            line: 252,
            column: 28
          },
          end: {
            line: 252,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 252,
            column: 35
          },
          end: {
            line: 252,
            column: 39
          }
        }, {
          start: {
            line: 252,
            column: 42
          },
          end: {
            line: 252,
            column: 48
          }
        }],
        line: 252
      },
      "18": {
        loc: {
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        }, {
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        }],
        line: 256
      },
      "19": {
        loc: {
          start: {
            line: 256,
            column: 12
          },
          end: {
            line: 257,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 256,
            column: 13
          },
          end: {
            line: 256,
            column: 28
          }
        }, {
          start: {
            line: 256,
            column: 32
          },
          end: {
            line: 256,
            column: 72
          }
        }, {
          start: {
            line: 257,
            column: 12
          },
          end: {
            line: 257,
            column: 21
          }
        }, {
          start: {
            line: 257,
            column: 25
          },
          end: {
            line: 257,
            column: 59
          }
        }],
        line: 256
      },
      "20": {
        loc: {
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 273,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 273,
            column: 9
          }
        }, {
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 273,
            column: 9
          }
        }],
        line: 270
      },
      "21": {
        loc: {
          start: {
            line: 270,
            column: 12
          },
          end: {
            line: 271,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 270,
            column: 13
          },
          end: {
            line: 270,
            column: 27
          }
        }, {
          start: {
            line: 270,
            column: 31
          },
          end: {
            line: 270,
            column: 68
          }
        }, {
          start: {
            line: 271,
            column: 12
          },
          end: {
            line: 271,
            column: 20
          }
        }, {
          start: {
            line: 271,
            column: 24
          },
          end: {
            line: 271,
            column: 55
          }
        }],
        line: 270
      },
      "22": {
        loc: {
          start: {
            line: 283,
            column: 8
          },
          end: {
            line: 286,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 283,
            column: 8
          },
          end: {
            line: 286,
            column: 9
          }
        }, {
          start: {
            line: 283,
            column: 8
          },
          end: {
            line: 286,
            column: 9
          }
        }],
        line: 283
      },
      "23": {
        loc: {
          start: {
            line: 283,
            column: 12
          },
          end: {
            line: 284,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 283,
            column: 13
          },
          end: {
            line: 283,
            column: 28
          }
        }, {
          start: {
            line: 283,
            column: 32
          },
          end: {
            line: 283,
            column: 63
          }
        }, {
          start: {
            line: 284,
            column: 12
          },
          end: {
            line: 284,
            column: 21
          }
        }, {
          start: {
            line: 284,
            column: 25
          },
          end: {
            line: 284,
            column: 50
          }
        }],
        line: 283
      },
      "24": {
        loc: {
          start: {
            line: 297,
            column: 8
          },
          end: {
            line: 300,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 297,
            column: 8
          },
          end: {
            line: 300,
            column: 9
          }
        }, {
          start: {
            line: 297,
            column: 8
          },
          end: {
            line: 300,
            column: 9
          }
        }],
        line: 297
      },
      "25": {
        loc: {
          start: {
            line: 297,
            column: 12
          },
          end: {
            line: 298,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 297,
            column: 13
          },
          end: {
            line: 297,
            column: 27
          }
        }, {
          start: {
            line: 297,
            column: 31
          },
          end: {
            line: 297,
            column: 66
          }
        }, {
          start: {
            line: 298,
            column: 12
          },
          end: {
            line: 298,
            column: 20
          }
        }, {
          start: {
            line: 298,
            column: 24
          },
          end: {
            line: 298,
            column: 53
          }
        }],
        line: 297
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
      "85": 0
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
      "17": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0],
      "7": [0, 0],
      "8": [0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0, 0, 0],
      "20": [0, 0],
      "21": [0, 0, 0, 0],
      "22": [0, 0],
      "23": [0, 0, 0, 0],
      "24": [0, 0],
      "25": [0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "aa70c7d7d08bc39ccc1f550a1e58860b9c3d3fc2"
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
        this._http.header = header;
      } else {
        cov_6cbswsomc.b[4][1]++;
        cov_6cbswsomc.s[23]++;
        throw new Error('The argument passed in must be a literal object');
      }

      cov_6cbswsomc.s[24]++;
      return this;
    }
    /**
     * Set request parameters
     * 
     * @param {*} params 
     */

  }, {
    key: "setParams",
    value: function setParams(params) {
      cov_6cbswsomc.f[6]++;
      cov_6cbswsomc.s[25]++;

      if ((cov_6cbswsomc.b[6][0]++, (0, _typeof2["default"])(params) !== 'object') || (cov_6cbswsomc.b[6][1]++, (0, _isPlainObject["default"])(params)) || (cov_6cbswsomc.b[6][2]++, Array.isArray(params))) {
        cov_6cbswsomc.b[5][0]++;
        cov_6cbswsomc.s[26]++;
        this._http.params = params;
      } else {
        cov_6cbswsomc.b[5][1]++;
        cov_6cbswsomc.s[27]++;
        throw new Error('When the parameter type is object, The argument passed in must be a literal object');
      }

      cov_6cbswsomc.s[28]++;
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
      cov_6cbswsomc.f[7]++;
      cov_6cbswsomc.s[29]++;

      if (typeof ifCookie === 'boolean') {
        cov_6cbswsomc.b[7][0]++;
        cov_6cbswsomc.s[30]++;
        this._http.cookie = ifCookie;
      } else {
        cov_6cbswsomc.b[7][1]++;
        cov_6cbswsomc.s[31]++;
        throw new Error('Invalid type');
      }

      cov_6cbswsomc.s[32]++;
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
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_6cbswsomc.b[8][0]++, null);
      cov_6cbswsomc.f[8]++;
      cov_6cbswsomc.s[33]++;
      method = method.toLowerCase();
      cov_6cbswsomc.s[34]++;

      if (_constants.METHOD_TYPES.includes(method)) {
        cov_6cbswsomc.b[9][0]++;
        cov_6cbswsomc.s[35]++;
        this._http.method = method;
      } else {
        cov_6cbswsomc.b[9][1]++;
        cov_6cbswsomc.s[36]++;
        throw new Error('Invalid method');
      }

      cov_6cbswsomc.s[37]++;
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
      cov_6cbswsomc.f[9]++;
      cov_6cbswsomc.s[38]++;

      for (var _len = arguments.length, pipes = new Array(_len), _key = 0; _key < _len; _key++) {
        pipes[_key] = arguments[_key];
      }

      if (pipes.find(function (pipe) {
        cov_6cbswsomc.f[10]++;
        cov_6cbswsomc.s[39]++;
        return typeof pipe !== 'function';
      })) {
        cov_6cbswsomc.b[10][0]++;
        cov_6cbswsomc.s[40]++;
        throw new Error('Pipe must be a function');
      } else {
        cov_6cbswsomc.b[10][1]++;
        cov_6cbswsomc.s[41]++;
        this._pipes.reqPipes = [].concat(pipes);
      }

      cov_6cbswsomc.s[42]++;
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
      cov_6cbswsomc.f[11]++;
      cov_6cbswsomc.s[43]++;

      for (var _len2 = arguments.length, pipes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        pipes[_key2] = arguments[_key2];
      }

      if (pipes.find(function (pipe) {
        cov_6cbswsomc.f[12]++;
        cov_6cbswsomc.s[44]++;
        return typeof pipe !== 'function';
      })) {
        cov_6cbswsomc.b[11][0]++;
        cov_6cbswsomc.s[45]++;
        throw new Error('Pipe must be a function');
      } else {
        cov_6cbswsomc.b[11][1]++;
        cov_6cbswsomc.s[46]++;
        this._pipes.resPipes = [].concat(pipes);
      }

      cov_6cbswsomc.s[47]++;
      return this;
    }
    /**
     * Set request interceptor
     * @param {Function} interceptor 
     */

  }, {
    key: "reqInterceptor",
    value: function reqInterceptor(interceptor) {
      cov_6cbswsomc.f[13]++;
      cov_6cbswsomc.s[48]++;

      if (typeof interceptor === 'function') {
        cov_6cbswsomc.b[12][0]++;
        cov_6cbswsomc.s[49]++;

        if (this._pipes.reqPipes.length) {
          cov_6cbswsomc.b[13][0]++;
          cov_6cbswsomc.s[50]++;
          this._interceptors.afterReq = interceptor;
        } else {
          cov_6cbswsomc.b[13][1]++;
          cov_6cbswsomc.s[51]++;
          this._interceptors.beforeReq = interceptor;
        }

        cov_6cbswsomc.s[52]++;
        return this;
      } else {
        cov_6cbswsomc.b[12][1]++;
        cov_6cbswsomc.s[53]++;
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
      cov_6cbswsomc.f[14]++;
      cov_6cbswsomc.s[54]++;

      if (typeof interceptor === 'function') {
        cov_6cbswsomc.b[14][0]++;
        cov_6cbswsomc.s[55]++;

        if (this._pipes.resPipes.length) {
          cov_6cbswsomc.b[15][0]++;
          cov_6cbswsomc.s[56]++;
          this._interceptors.afterRes = interceptor;
        } else {
          cov_6cbswsomc.b[15][1]++;
          cov_6cbswsomc.s[57]++;
          this._interceptors.beforeRes = interceptor;
        }

        cov_6cbswsomc.s[58]++;
        return this;
      } else {
        cov_6cbswsomc.b[14][1]++;
        cov_6cbswsomc.s[59]++;
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
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : (cov_6cbswsomc.b[16][0]++, this._http.params);
                type = _args.length > 1 ? _args[1] : undefined;
                cov_6cbswsomc.f[15]++;
                _ref3 = (cov_6cbswsomc.s[60]++, this._http), url = _ref3.url, method = _ref3.method, cookie = _ref3.cookie;
                _ref4 = (cov_6cbswsomc.s[61]++, this._hook), errorHook = _ref4.errorHook;
                _ref5 = (cov_6cbswsomc.s[62]++, this._pipes), reqPipes = _ref5.reqPipes, resPipes = _ref5.resPipes;
                _ref6 = (cov_6cbswsomc.s[63]++, this._interceptors), beforeReq = _ref6.beforeReq, afterReq = _ref6.afterReq, beforeRes = _ref6.beforeRes, afterRes = _ref6.afterRes;
                _ref7 = (cov_6cbswsomc.s[64]++, this.constructor.global), globalReqPipes = _ref7.reqPipes, globalResPipes = _ref7.resPipes, globalBeforeReq = _ref7.beforeReq, globalAfterReq = _ref7.afterReq, globalBeforeRes = _ref7.beforeRes, globalAfterRes = _ref7.afterRes;
                requestType = (cov_6cbswsomc.s[65]++, type ? (cov_6cbswsomc.b[17][0]++, type) : (cov_6cbswsomc.b[17][1]++, method));
                requestParams = (cov_6cbswsomc.s[66]++, this._getParams(params)); // Front request interceptor

                cov_6cbswsomc.s[67]++;

                if (!((cov_6cbswsomc.b[19][0]++, globalBeforeReq) && (cov_6cbswsomc.b[19][1]++, globalBeforeReq(requestParams) === false) || (cov_6cbswsomc.b[19][2]++, beforeReq) && (cov_6cbswsomc.b[19][3]++, beforeReq(requestParams) === false))) {
                  _context.next = 17;
                  break;
                }

                cov_6cbswsomc.b[18][0]++;
                cov_6cbswsomc.s[68]++;
                return _context.abrupt("return");

              case 17:
                cov_6cbswsomc.b[18][1]++;

              case 18:
                cov_6cbswsomc.s[69]++;

                try {
                  cov_6cbswsomc.s[70]++;
                  finalParams = (0, _utils.dataFiltering)([].concat((0, _toConsumableArray2["default"])(globalReqPipes), (0, _toConsumableArray2["default"])(reqPipes)), requestParams);
                } catch (error) {
                  cov_6cbswsomc.s[71]++;
                  errorHook(error);
                } // Rear request interceptor


                cov_6cbswsomc.s[72]++;

                if (!((cov_6cbswsomc.b[21][0]++, globalAfterReq) && (cov_6cbswsomc.b[21][1]++, globalAfterReq(finalParams) === false) || (cov_6cbswsomc.b[21][2]++, afterReq) && (cov_6cbswsomc.b[21][3]++, afterReq(finalParams) === false))) {
                  _context.next = 27;
                  break;
                }

                cov_6cbswsomc.b[20][0]++;
                cov_6cbswsomc.s[73]++;
                return _context.abrupt("return");

              case 27:
                cov_6cbswsomc.b[20][1]++;

              case 28:
                cov_6cbswsomc.s[74]++;
                _context.next = 31;
                return request[requestType](url, finalParams, this.requesetHeader, cookie);

              case 31:
                data = _context.sent;
                cov_6cbswsomc.s[75]++;

                if (!((cov_6cbswsomc.b[23][0]++, globalBeforeRes) && (cov_6cbswsomc.b[23][1]++, globalBeforeRes(data) === false) || (cov_6cbswsomc.b[23][2]++, beforeRes) && (cov_6cbswsomc.b[23][3]++, beforeRes(data) === false))) {
                  _context.next = 39;
                  break;
                }

                cov_6cbswsomc.b[22][0]++;
                cov_6cbswsomc.s[76]++;
                return _context.abrupt("return");

              case 39:
                cov_6cbswsomc.b[22][1]++;

              case 40:
                cov_6cbswsomc.s[77]++;

                try {
                  cov_6cbswsomc.s[78]++;
                  finalData = (0, _utils.dataFiltering)([].concat((0, _toConsumableArray2["default"])(globalResPipes), (0, _toConsumableArray2["default"])(resPipes)), data);
                } catch (error) {
                  cov_6cbswsomc.s[79]++;
                  errorHook(error);
                } // Rear response interceptor


                cov_6cbswsomc.s[80]++;

                if (!((cov_6cbswsomc.b[25][0]++, globalAfterRes) && (cov_6cbswsomc.b[25][1]++, globalAfterRes(finalData) === false) || (cov_6cbswsomc.b[25][2]++, afterRes) && (cov_6cbswsomc.b[25][3]++, afterRes(finalData) === false))) {
                  _context.next = 49;
                  break;
                }

                cov_6cbswsomc.b[24][0]++;
                cov_6cbswsomc.s[81]++;
                return _context.abrupt("return");

              case 49:
                cov_6cbswsomc.b[24][1]++;

              case 50:
                cov_6cbswsomc.s[82]++;
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
cov_6cbswsomc.s[83]++;

_constants.METHOD_TYPES.map(function (requestType) {
  cov_6cbswsomc.f[16]++;
  cov_6cbswsomc.s[84]++;

  Reixs.prototype[requestType] = function (params) {
    cov_6cbswsomc.f[17]++;
    cov_6cbswsomc.s[85]++;
    this.request(params, requestType);
  };
});

var _default = Reixs;
exports["default"] = _default;

},{"../../shared/constants":33,"../../shared/utils":34,"../create-request":26,"../request":31,"./scheduler":25,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/helpers/toConsumableArray":16,"@babel/runtime/helpers/typeof":17,"@babel/runtime/regenerator":18,"is-plain-object":19}],25:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/toConsumableArray":16}],26:[function(require,module,exports){
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

},{"./mark-map":27,"./request-timer":28,"./wait":29,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/regenerator":18}],27:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{"../../shared/constants":33,"./handle-fetch":30,"@babel/runtime/helpers/interopRequireDefault":10,"is-plain-object":19}],32:[function(require,module,exports){
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

},{"./core/constructor":21,"@babel/runtime/helpers/construct":6,"@babel/runtime/helpers/interopRequireDefault":10,"is-plain-object":19}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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
