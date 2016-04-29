(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":5}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":6}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
},{"../core-js/object/define-property":1}],4:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

exports["default"] = function (obj) {
  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/symbol":2}],5:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":24}],6:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":10,"../../modules/es6.object.to-string":34,"../../modules/es6.symbol":35}],7:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],8:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":23}],9:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],10:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],11:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":7}],12:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],13:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":16}],14:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":24}],15:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":10,"./$.ctx":11,"./$.global":18}],16:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],17:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":24,"./$.to-iobject":31}],18:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],19:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],20:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":24,"./$.descriptors":13,"./$.property-desc":27}],21:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":9}],22:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":9}],23:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],24:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],25:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":24,"./$.to-iobject":31}],26:[function(require,module,exports){
module.exports = true;
},{}],27:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],28:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":20}],29:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":24,"./$.has":19,"./$.wks":33}],30:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":18}],31:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":12,"./$.iobject":21}],32:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],33:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":18,"./$.shared":30,"./$.uid":32}],34:[function(require,module,exports){

},{}],35:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":24,"./$.an-object":8,"./$.descriptors":13,"./$.enum-keys":14,"./$.export":15,"./$.fails":16,"./$.get-names":17,"./$.global":18,"./$.has":19,"./$.is-array":22,"./$.keyof":25,"./$.library":26,"./$.property-desc":27,"./$.redefine":28,"./$.set-to-string-tag":29,"./$.shared":30,"./$.to-iobject":31,"./$.uid":32,"./$.wks":33}],36:[function(require,module,exports){
/*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean=false} [merge]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.6';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

},{}],37:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],38:[function(require,module,exports){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  return id.match(/[^\/]+\.vue$/)[0]
}

},{}],39:[function(require,module,exports){
/**
 * Service for sending network requests.
 */

var xhr = require('./lib/xhr');
var jsonp = require('./lib/jsonp');
var Promise = require('./lib/promise');

module.exports = function (_) {

    var originUrl = _.url.parse(location.href);
    var jsonType = {'Content-Type': 'application/json;charset=utf-8'};

    function Http(url, options) {

        var promise;

        if (_.isPlainObject(url)) {
            options = url;
            url = '';
        }

        options = _.extend({url: url}, options);
        options = _.extend(true, {},
            Http.options, this.options, options
        );

        if (options.crossOrigin === null) {
            options.crossOrigin = crossOrigin(options.url);
        }

        options.method = options.method.toUpperCase();
        options.headers = _.extend({}, Http.headers.common,
            !options.crossOrigin ? Http.headers.custom : {},
            Http.headers[options.method.toLowerCase()],
            options.headers
        );

        if (_.isPlainObject(options.data) && /^(GET|JSONP)$/i.test(options.method)) {
            _.extend(options.params, options.data);
            delete options.data;
        }

        if (options.emulateHTTP && !options.crossOrigin && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
            options.headers['X-HTTP-Method-Override'] = options.method;
            options.method = 'POST';
        }

        if (options.emulateJSON && _.isPlainObject(options.data)) {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            options.data = _.url.params(options.data);
        }

        if (_.isObject(options.data) && /FormData/i.test(options.data.toString())) {
            delete options.headers['Content-Type'];
        }

        if (_.isPlainObject(options.data)) {
            options.data = JSON.stringify(options.data);
        }

        promise = (options.method == 'JSONP' ? jsonp : xhr).call(this.vm, _, options);
        promise = extendPromise(promise.then(transformResponse, transformResponse), this.vm);

        if (options.success) {
            promise = promise.success(options.success);
        }

        if (options.error) {
            promise = promise.error(options.error);
        }

        return promise;
    }

    function extendPromise(promise, vm) {

        promise.success = function (fn) {

            return extendPromise(promise.then(function (response) {
                return fn.call(vm, response.data, response.status, response) || response;
            }), vm);

        };

        promise.error = function (fn) {

            return extendPromise(promise.then(undefined, function (response) {
                return fn.call(vm, response.data, response.status, response) || response;
            }), vm);

        };

        promise.always = function (fn) {

            var cb = function (response) {
                return fn.call(vm, response.data, response.status, response) || response;
            };

            return extendPromise(promise.then(cb, cb), vm);
        };

        return promise;
    }

    function transformResponse(response) {

        try {
            response.data = JSON.parse(response.responseText);
        } catch (e) {
            response.data = response.responseText;
        }

        return response.ok ? response : Promise.reject(response);
    }

    function crossOrigin(url) {

        var requestUrl = _.url.parse(url);

        return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
    }

    Http.options = {
        method: 'get',
        params: {},
        data: '',
        xhr: null,
        jsonp: 'callback',
        beforeSend: null,
        crossOrigin: null,
        emulateHTTP: false,
        emulateJSON: false
    };

    Http.headers = {
        put: jsonType,
        post: jsonType,
        patch: jsonType,
        delete: jsonType,
        common: {'Accept': 'application/json, text/plain, */*'},
        custom: {'X-Requested-With': 'XMLHttpRequest'}
    };

    ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

        Http[method] = function (url, data, success, options) {

            if (_.isFunction(data)) {
                options = success;
                success = data;
                data = undefined;
            }

            return this(url, _.extend({method: method, data: data, success: success}, options));
        };
    });

    return _.http = Http;
};

},{"./lib/jsonp":41,"./lib/promise":42,"./lib/xhr":44}],40:[function(require,module,exports){
/**
 * Install plugin.
 */

function install(Vue) {

    var _ = require('./lib/util')(Vue);

    Vue.url = require('./url')(_);
    Vue.http = require('./http')(_);
    Vue.resource = require('./resource')(_);

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function () {
                return _.options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function () {
                return _.options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function () {
                return Vue.resource.bind(this);
            }
        }

    });
}

if (window.Vue) {
    Vue.use(install);
}

module.exports = install;
},{"./http":39,"./lib/util":43,"./resource":45,"./url":46}],41:[function(require,module,exports){
/**
 * JSONP request.
 */

var Promise = require('./promise');

module.exports = function (_, options) {

    var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {}, script, body;

    options.params[options.jsonp] = callback;

    if (_.isFunction(options.beforeSend)) {
        options.beforeSend.call(this, {}, options);
    }

    return new Promise(function (resolve, reject) {

        script = document.createElement('script');
        script.src = _.url(options);
        script.type = 'text/javascript';
        script.async = true;

        window[callback] = function (data) {
            body = data;
        };

        var handler = function (event) {

            delete window[callback];
            document.body.removeChild(script);

            if (event.type === 'load' && !body) {
                event.type = 'error';
            }

            response.ok = event.type !== 'error';
            response.status = response.ok ? 200 : 404;
            response.responseText = body ? body : event.type;

            (response.ok ? resolve : reject)(response);
        };

        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });

};

},{"./promise":42}],42:[function(require,module,exports){
/**
 * Promises/A+ polyfill v1.1.0 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING  = 2;

function Promise(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise.reject = function (r) {
    return new Promise(function (resolve, reject) {
        reject(r);
    });
};

Promise.resolve = function (x) {
    return new Promise(function (resolve, reject) {
        resolve(x);
    });
};

Promise.all = function all(iterable) {
    return new Promise(function (resolve, reject) {
        var count = 0,
            result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            iterable[i].then(resolver(i), reject);
        }
    });
};

Promise.race = function race(iterable) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            iterable[i].then(resolve, reject);
        }
    });
};

var p = Promise.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }
        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    async(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

var queue = [];
var async = function (callback) {
    queue.push(callback);

    if (queue.length === 1) {
        async.async();
    }
};

async.run = function () {
    while (queue.length) {
        queue[0]();
        queue.shift();
    }
};

if (window.MutationObserver) {
    var el = document.createElement('div');
    var mo = new MutationObserver(async.run);

    mo.observe(el, {
        attributes: true
    });

    async.async = function () {
        el.setAttribute("x", 0);
    };
} else {
    async.async = function () {
        setTimeout(async.run);
    };
}

module.exports = window.Promise || Promise;

},{}],43:[function(require,module,exports){
/**
 * Utility functions.
 */

module.exports = function (Vue) {

    var _ = Vue.util.extend({}, Vue.util);

    _.isString = function (value) {
        return typeof value === 'string';
    };

    _.isFunction = function (value) {
        return typeof value === 'function';
    };

    _.options = function (fn, obj, options) {

        options = options || {};

        if (_.isFunction(options)) {
            options = options.call(obj);
        }

        return _.extend(fn.bind({vm: obj, options: options}), fn, {options: options});
    };

    _.each = function (obj, iterator) {

        var i, key;

        if (typeof obj.length == 'number') {
            for (i = 0; i < obj.length; i++) {
                iterator.call(obj[i], obj[i], i);
            }
        } else if (_.isObject(obj)) {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    iterator.call(obj[key], obj[key], key);
                }
            }
        }

        return obj;
    };

    _.extend = function (target) {

        var array = [], args = array.slice.call(arguments, 1), deep;

        if (typeof target == 'boolean') {
            deep = target;
            target = args.shift();
        }

        args.forEach(function (arg) {
            extend(target, arg, deep);
        });

        return target;
    };

    function extend(target, source, deep) {
        for (var key in source) {
            if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
                if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
                    target[key] = {};
                }
                if (_.isArray(source[key]) && !_.isArray(target[key])) {
                    target[key] = [];
                }
                extend(target[key], source[key], deep);
            } else if (source[key] !== undefined) {
                target[key] = source[key];
            }
        }
    }

    return _;
};

},{}],44:[function(require,module,exports){
/**
 * XMLHttp request.
 */

var Promise = require('./promise');
var XDomain = window.XDomainRequest;

module.exports = function (_, options) {

    var request = new XMLHttpRequest(), promise;

    if (XDomain && options.crossOrigin) {
        request = new XDomainRequest(); options.headers = {};
    }

    if (_.isPlainObject(options.xhr)) {
        _.extend(request, options.xhr);
    }

    if (_.isFunction(options.beforeSend)) {
        options.beforeSend.call(this, request, options);
    }

    promise = new Promise(function (resolve, reject) {

        request.open(options.method, _.url(options), true);

        _.each(options.headers, function (value, header) {
            request.setRequestHeader(header, value);
        });

        var handler = function (event) {

            request.ok = event.type === 'load';

            if (request.ok && request.status) {
                request.ok = request.status >= 200 && request.status < 300;
            }

            (request.ok ? resolve : reject)(request);
        };

        request.onload = handler;
        request.onabort = handler;
        request.onerror = handler;

        request.send(options.data);
    });

    return promise;
};

},{"./promise":42}],45:[function(require,module,exports){
/**
 * Service for interacting with RESTful services.
 */

module.exports = function (_) {

    function Resource(url, params, actions, options) {

        var self = this, resource = {};

        actions = _.extend({},
            Resource.actions,
            actions
        );

        _.each(actions, function (action, name) {

            action = _.extend(true, {url: url, params: params || {}}, options, action);

            resource[name] = function () {
                return (self.$http || _.http)(opts(action, arguments));
            };
        });

        return resource;
    }

    function opts(action, args) {

        var options = _.extend({}, action), params = {}, data, success, error;

        switch (args.length) {

            case 4:

                error = args[3];
                success = args[2];

            case 3:
            case 2:

                if (_.isFunction(args[1])) {

                    if (_.isFunction(args[0])) {

                        success = args[0];
                        error = args[1];

                        break;
                    }

                    success = args[1];
                    error = args[2];

                } else {

                    params = args[0];
                    data = args[1];
                    success = args[2];

                    break;
                }

            case 1:

                if (_.isFunction(args[0])) {
                    success = args[0];
                } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                    data = args[0];
                } else {
                    params = args[0];
                }

                break;

            case 0:

                break;

            default:

                throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
        }

        options.data = data;
        options.params = _.extend({}, options.params, params);

        if (success) {
            options.success = success;
        }

        if (error) {
            options.error = error;
        }

        return options;
    }

    Resource.actions = {

        get: {method: 'GET'},
        save: {method: 'POST'},
        query: {method: 'GET'},
        update: {method: 'PUT'},
        remove: {method: 'DELETE'},
        delete: {method: 'DELETE'}

    };

    return _.resource = Resource;
};

},{}],46:[function(require,module,exports){
/**
 * Service for URL templating.
 */

var ie = document.documentMode;
var el = document.createElement('a');

module.exports = function (_) {

    function Url(url, params) {

        var urlParams = {}, queryParams = {}, options = url, query;

        if (!_.isPlainObject(options)) {
            options = {url: url, params: params};
        }

        options = _.extend(true, {},
            Url.options, this.options, options
        );

        url = options.url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {

            if (options.params[name]) {
                urlParams[name] = true;
                return slash + encodeUriSegment(options.params[name]);
            }

            return '';
        });

        if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
            url = options.root + '/' + url;
        }

        _.each(options.params, function (value, key) {
            if (!urlParams[key]) {
                queryParams[key] = value;
            }
        });

        query = Url.params(queryParams);

        if (query) {
            url += (url.indexOf('?') == -1 ? '?' : '&') + query;
        }

        return url;
    }

    /**
     * Url options.
     */

    Url.options = {
        url: '',
        root: null,
        params: {}
    };

    /**
     * Encodes a Url parameter string.
     *
     * @param {Object} obj
     */

    Url.params = function (obj) {

        var params = [];

        params.add = function (key, value) {

            if (_.isFunction (value)) {
                value = value();
            }

            if (value === null) {
                value = '';
            }

            this.push(encodeUriSegment(key) + '=' + encodeUriSegment(value));
        };

        serialize(params, obj);

        return params.join('&');
    };

    /**
     * Parse a URL and return its components.
     *
     * @param {String} url
     */

    Url.parse = function (url) {

        if (ie) {
            el.href = url;
            url = el.href;
        }

        el.href = url;

        return {
            href: el.href,
            protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
            port: el.port,
            host: el.host,
            hostname: el.hostname,
            pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
            search: el.search ? el.search.replace(/^\?/, '') : '',
            hash: el.hash ? el.hash.replace(/^#/, '') : ''
        };
    };

    function serialize(params, obj, scope) {

        var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;

        _.each(obj, function (value, key) {

            hash = _.isObject(value) || _.isArray(value);

            if (scope) {
                key = scope + '[' + (plain || hash ? key : '') + ']';
            }

            if (!scope && array) {
                params.add(value.name, value.value);
            } else if (hash) {
                serialize(params, value, key);
            } else {
                params.add(key, value);
            }
        });
    }

    function encodeUriSegment(value) {

        return encodeUriQuery(value, true).
            replace(/%26/gi, '&').
            replace(/%3D/gi, '=').
            replace(/%2B/gi, '+');
    }

    function encodeUriQuery(value, spaces) {

        return encodeURIComponent(value).
            replace(/%40/gi, '@').
            replace(/%3A/gi, ':').
            replace(/%24/g, '$').
            replace(/%2C/gi, ',').
            replace(/%20/g, (spaces ? '%20' : '+'));
    }

    return _.url = Url;
};

},{}],47:[function(require,module,exports){
/*!
 * vue-router v0.7.13
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.VueRouter = factory();
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0, l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  function map (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var noWarning = false;
  function warn(msg) {
    if (!noWarning && typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  function tryDecode(uri, asComponent) {
    try {
      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
    } catch (e) {
      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
    }
  }

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(callback) {
      var string = this.string,
          ch;

      for (var i = 0, l = string.length; i < l; i++) {
        ch = string.charAt(i);
        callback({ validChars: ch });
      }
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "/", repeat: true });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "", repeat: true });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar() {},
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        specificity.val += '2';
        names.push(match[1]);
      } else if (segment === "") {
        results.push(new EpsilonSegment());
        specificity.val += '1';
      } else {
        results.push(new StaticSegment(segment));
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype = {
    get: function get(charSpec) {
      var nextStates = this.nextStates;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      // DEBUG "Processing `" + ch + "`:"
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      // DEBUG "  " + debugState(this)
      var returned = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }

    /** IF DEBUG
    , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
    END IF **/
  };

  /** IF DEBUG
  function debug(log) {
    console.log(log);
  }

  function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
  END IF **/

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    return tryDecode(part, true);
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = [],
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0, l = routes.length; i < l; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0, m = segments.length; j < m; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = addSegment(currentState, segment);
          regex += segment.regex();
        }

        var handler = { handler: route.handler, names: names };
        handlers.push(handler);
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name],
          result = [];
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0, l = value.length; j < l; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path, silent) {
      noWarning = silent;
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        if (queryString) {
          queryParams = this.parseQueryString(queryString);
        }
      }

      path = tryDecode(path);
      if (!path) return;

      // DEBUG GROUP path

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      // END DEBUG GROUP

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = map;

  var genQuery = RouteRecognizer.prototype.generateQueryString;

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * Warn stuff.
   *
   * @param {String} msg
   */

  function warn$1(msg) {
    /* istanbul ignore next */
    if (typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  /**
   * Resolve a relative path.
   *
   * @param {String} base
   * @param {String} relative
   * @param {Boolean} append
   * @return {String}
   */

  function resolvePath(base, relative, append) {
    var query = base.match(/(\?.*)$/);
    if (query) {
      query = query[1];
      base = base.slice(0, -query.length);
    }
    // a query!
    if (relative.charAt(0) === '?') {
      return base + relative;
    }
    var stack = base.split('/');
    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }
    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }
    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }
    return stack.join('/');
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig(component, name) {
    var options = component && (component.$options || component.options);
    return options && options.route && options.route[name];
  }

  /**
   * Resolve an async component factory. Have to do a dirty
   * mock here because of Vue core's internal API depends on
   * an ID check.
   *
   * @param {Object} handler
   * @param {Function} cb
   */

  var resolver = undefined;

  function resolveAsyncComponent(handler, cb) {
    if (!resolver) {
      resolver = {
        resolve: exports$1.Vue.prototype._resolveComponent,
        $options: {
          components: {
            _: handler.component
          }
        }
      };
    } else {
      resolver.$options.components._ = handler.component;
    }
    resolver.resolve('_', function (Component) {
      handler.component = Component;
      cb(Component);
    });
  }

  /**
   * Map the dynamic segments in a path to params.
   *
   * @param {String} path
   * @param {Object} params
   * @param {Object} query
   */

  function mapParams(path, params, query) {
    if (params === undefined) params = {};

    path = path.replace(/:([^\/]+)/g, function (_, key) {
      var val = params[key];
      /* istanbul ignore if */
      if (!val) {
        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
      }
      return val || '';
    });
    if (query) {
      path += genQuery(query);
    }
    return path;
  }

  var hashRE = /#.*$/;

  var HTML5History = (function () {
    function HTML5History(_ref) {
      var root = _ref.root;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HTML5History);

      if (root && root !== '/') {
        // make sure there's the starting slash
        if (root.charAt(0) !== '/') {
          root = '/' + root;
        }
        // remove trailing slash
        this.root = root.replace(/\/$/, '');
        this.rootRE = new RegExp('^\\' + this.root);
      } else {
        this.root = null;
      }
      this.onChange = onChange;
      // check base tag
      var baseEl = document.querySelector('base');
      this.base = baseEl && baseEl.getAttribute('href');
    }

    HTML5History.prototype.start = function start() {
      var _this = this;

      this.listener = function (e) {
        var url = location.pathname + location.search;
        if (_this.root) {
          url = url.replace(_this.rootRE, '');
        }
        _this.onChange(url, e && e.state, location.hash);
      };
      window.addEventListener('popstate', this.listener);
      this.listener();
    };

    HTML5History.prototype.stop = function stop() {
      window.removeEventListener('popstate', this.listener);
    };

    HTML5History.prototype.go = function go(path, replace, append) {
      var url = this.formatPath(path, append);
      if (replace) {
        history.replaceState({}, '', url);
      } else {
        // record scroll position by replacing current state
        history.replaceState({
          pos: {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }, '', location.href);
        // then push new state
        history.pushState({}, '', url);
      }
      var hashMatch = path.match(hashRE);
      var hash = hashMatch && hashMatch[0];
      path = url
      // strip hash so it doesn't mess up params
      .replace(hashRE, '')
      // remove root before matching
      .replace(this.rootRE, '');
      this.onChange(path, null, hash);
    };

    HTML5History.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/'
      // absolute path
      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
    };

    return HTML5History;
  })();

  var HashHistory = (function () {
    function HashHistory(_ref) {
      var hashbang = _ref.hashbang;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HashHistory);

      this.hashbang = hashbang;
      this.onChange = onChange;
    }

    HashHistory.prototype.start = function start() {
      var self = this;
      this.listener = function () {
        var path = location.hash;
        var raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
          raw = '/' + raw;
        }
        var formattedPath = self.formatPath(raw);
        if (formattedPath !== path) {
          location.replace(formattedPath);
          return;
        }
        // determine query
        // note it's possible to have queries in both the actual URL
        // and the hash fragment itself.
        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
        self.onChange(path.replace(/^#!?/, '') + query);
      };
      window.addEventListener('hashchange', this.listener);
      this.listener();
    };

    HashHistory.prototype.stop = function stop() {
      window.removeEventListener('hashchange', this.listener);
    };

    HashHistory.prototype.go = function go(path, replace, append) {
      path = this.formatPath(path, append);
      if (replace) {
        location.replace(path);
      } else {
        location.hash = path;
      }
    };

    HashHistory.prototype.formatPath = function formatPath(path, append) {
      var isAbsoloute = path.charAt(0) === '/';
      var prefix = '#' + (this.hashbang ? '!' : '');
      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
    };

    return HashHistory;
  })();

  var AbstractHistory = (function () {
    function AbstractHistory(_ref) {
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, AbstractHistory);

      this.onChange = onChange;
      this.currentPath = '/';
    }

    AbstractHistory.prototype.start = function start() {
      this.onChange('/');
    };

    AbstractHistory.prototype.stop = function stop() {
      // noop
    };

    AbstractHistory.prototype.go = function go(path, replace, append) {
      path = this.currentPath = this.formatPath(path, append);
      this.onChange(path);
    };

    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
    };

    return AbstractHistory;
  })();

  /**
   * Determine the reusability of an existing router view.
   *
   * @param {Directive} view
   * @param {Object} handler
   * @param {Transition} transition
   */

  function canReuse(view, handler, transition) {
    var component = view.childVM;
    if (!component || !handler) {
      return false;
    }
    // important: check view.Component here because it may
    // have been changed in activate hook
    if (view.Component !== handler.component) {
      return false;
    }
    var canReuseFn = getRouteConfig(component, 'canReuse');
    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
      to: transition.to,
      from: transition.from
    }) : true; // defaults to true
  }

  /**
   * Check if a component can deactivate.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function canDeactivate(view, transition, next) {
    var fromComponent = view.childVM;
    var hook = getRouteConfig(fromComponent, 'canDeactivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, fromComponent, next, {
        expectBoolean: true
      });
    }
  }

  /**
   * Check if a component can activate.
   *
   * @param {Object} handler
   * @param {Transition} transition
   * @param {Function} next
   */

  function canActivate(handler, transition, next) {
    resolveAsyncComponent(handler, function (Component) {
      // have to check due to async-ness
      if (transition.aborted) {
        return;
      }
      // determine if this component can be activated
      var hook = getRouteConfig(Component, 'canActivate');
      if (!hook) {
        next();
      } else {
        transition.callHook(hook, null, next, {
          expectBoolean: true
        });
      }
    });
  }

  /**
   * Call deactivate hooks for existing router-views.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function deactivate(view, transition, next) {
    var component = view.childVM;
    var hook = getRouteConfig(component, 'deactivate');
    if (!hook) {
      next();
    } else {
      transition.callHooks(hook, component, next);
    }
  }

  /**
   * Activate / switch component for a router-view.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Number} depth
   * @param {Function} [cb]
   */

  function activate(view, transition, depth, cb, reuse) {
    var handler = transition.activateQueue[depth];
    if (!handler) {
      saveChildView(view);
      if (view._bound) {
        view.setComponent(null);
      }
      cb && cb();
      return;
    }

    var Component = view.Component = handler.component;
    var activateHook = getRouteConfig(Component, 'activate');
    var dataHook = getRouteConfig(Component, 'data');
    var waitForData = getRouteConfig(Component, 'waitForData');

    view.depth = depth;
    view.activated = false;

    var component = undefined;
    var loading = !!(dataHook && !waitForData);

    // "reuse" is a flag passed down when the parent view is
    // either reused via keep-alive or as a child of a kept-alive view.
    // of course we can only reuse if the current kept-alive instance
    // is of the correct type.
    reuse = reuse && view.childVM && view.childVM.constructor === Component;

    if (reuse) {
      // just reuse
      component = view.childVM;
      component.$loadingRouteData = loading;
    } else {
      saveChildView(view);

      // unbuild current component. this step also destroys
      // and removes all nested child views.
      view.unbuild(true);

      // build the new component. this will also create the
      // direct child view of the current one. it will register
      // itself as view.childView.
      component = view.build({
        _meta: {
          $loadingRouteData: loading
        },
        created: function created() {
          this._routerView = view;
        }
      });

      // handle keep-alive.
      // when a kept-alive child vm is restored, we need to
      // add its cached child views into the router's view list,
      // and also properly update current view's child view.
      if (view.keepAlive) {
        component.$loadingRouteData = loading;
        var cachedChildView = component._keepAliveRouterView;
        if (cachedChildView) {
          view.childView = cachedChildView;
          component._keepAliveRouterView = null;
        }
      }
    }

    // cleanup the component in case the transition is aborted
    // before the component is ever inserted.
    var cleanup = function cleanup() {
      component.$destroy();
    };

    // actually insert the component and trigger transition
    var insert = function insert() {
      if (reuse) {
        cb && cb();
        return;
      }
      var router = transition.router;
      if (router._rendered || router._transitionOnLoad) {
        view.transition(component);
      } else {
        // no transition on first render, manual transition
        /* istanbul ignore if */
        if (view.setCurrent) {
          // 0.12 compat
          view.setCurrent(component);
        } else {
          // 1.0
          view.childVM = component;
        }
        component.$before(view.anchor, null, false);
      }
      cb && cb();
    };

    var afterData = function afterData() {
      // activate the child view
      if (view.childView) {
        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
      }
      insert();
    };

    // called after activation hook is resolved
    var afterActivate = function afterActivate() {
      view.activated = true;
      if (dataHook && waitForData) {
        // wait until data loaded to insert
        loadData(component, transition, dataHook, afterData, cleanup);
      } else {
        // load data and insert at the same time
        if (dataHook) {
          loadData(component, transition, dataHook);
        }
        afterData();
      }
    };

    if (activateHook) {
      transition.callHooks(activateHook, component, afterActivate, {
        cleanup: cleanup,
        postActivate: true
      });
    } else {
      afterActivate();
    }
  }

  /**
   * Reuse a view, just reload data if necessary.
   *
   * @param {Directive} view
   * @param {Transition} transition
   */

  function reuse(view, transition) {
    var component = view.childVM;
    var dataHook = getRouteConfig(component, 'data');
    if (dataHook) {
      loadData(component, transition, dataHook);
    }
  }

  /**
   * Asynchronously load and apply data to component.
   *
   * @param {Vue} component
   * @param {Transition} transition
   * @param {Function} hook
   * @param {Function} cb
   * @param {Function} cleanup
   */

  function loadData(component, transition, hook, cb, cleanup) {
    component.$loadingRouteData = true;
    transition.callHooks(hook, component, function () {
      component.$loadingRouteData = false;
      component.$emit('route-data-loaded', component);
      cb && cb();
    }, {
      cleanup: cleanup,
      postActivate: true,
      processData: function processData(data) {
        // handle promise sugar syntax
        var promises = [];
        if (isPlainObject(data)) {
          Object.keys(data).forEach(function (key) {
            var val = data[key];
            if (isPromise(val)) {
              promises.push(val.then(function (resolvedVal) {
                component.$set(key, resolvedVal);
              }));
            } else {
              component.$set(key, val);
            }
          });
        }
        if (promises.length) {
          return promises[0].constructor.all(promises);
        }
      }
    });
  }

  /**
   * Save the child view for a kept-alive view so that
   * we can restore it when it is switched back to.
   *
   * @param {Directive} view
   */

  function saveChildView(view) {
    if (view.keepAlive && view.childVM && view.childView) {
      view.childVM._keepAliveRouterView = view.childView;
    }
    view.childView = null;
  }

  /**
   * Check plain object.
   *
   * @param {*} val
   */

  function isPlainObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  /**
   * A RouteTransition object manages the pipeline of a
   * router-view switching process. This is also the object
   * passed into user route hooks.
   *
   * @param {Router} router
   * @param {Route} to
   * @param {Route} from
   */

  var RouteTransition = (function () {
    function RouteTransition(router, to, from) {
      babelHelpers.classCallCheck(this, RouteTransition);

      this.router = router;
      this.to = to;
      this.from = from;
      this.next = null;
      this.aborted = false;
      this.done = false;
    }

    /**
     * Abort current transition and return to previous location.
     */

    RouteTransition.prototype.abort = function abort() {
      if (!this.aborted) {
        this.aborted = true;
        // if the root path throws an error during validation
        // on initial load, it gets caught in an infinite loop.
        var abortingOnLoad = !this.from.path && this.to.path === '/';
        if (!abortingOnLoad) {
          this.router.replace(this.from.path || '/');
        }
      }
    };

    /**
     * Abort current transition and redirect to a new location.
     *
     * @param {String} path
     */

    RouteTransition.prototype.redirect = function redirect(path) {
      if (!this.aborted) {
        this.aborted = true;
        if (typeof path === 'string') {
          path = mapParams(path, this.to.params, this.to.query);
        } else {
          path.params = path.params || this.to.params;
          path.query = path.query || this.to.query;
        }
        this.router.replace(path);
      }
    };

    /**
     * A router view transition's pipeline can be described as
     * follows, assuming we are transitioning from an existing
     * <router-view> chain [Component A, Component B] to a new
     * chain [Component A, Component C]:
     *
     *  A    A
     *  | => |
     *  B    C
     *
     * 1. Reusablity phase:
     *   -> canReuse(A, A)
     *   -> canReuse(B, C)
     *   -> determine new queues:
     *      - deactivation: [B]
     *      - activation: [C]
     *
     * 2. Validation phase:
     *   -> canDeactivate(B)
     *   -> canActivate(C)
     *
     * 3. Activation phase:
     *   -> deactivate(B)
     *   -> activate(C)
     *
     * Each of these steps can be asynchronous, and any
     * step can potentially abort the transition.
     *
     * @param {Function} cb
     */

    RouteTransition.prototype.start = function start(cb) {
      var transition = this;

      // determine the queue of views to deactivate
      var deactivateQueue = [];
      var view = this.router._rootView;
      while (view) {
        deactivateQueue.unshift(view);
        view = view.childView;
      }
      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

      // determine the queue of route handlers to activate
      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
        return match.handler;
      });

      // 1. Reusability phase
      var i = undefined,
          reuseQueue = undefined;
      for (i = 0; i < reverseDeactivateQueue.length; i++) {
        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
          break;
        }
      }
      if (i > 0) {
        reuseQueue = reverseDeactivateQueue.slice(0, i);
        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
        activateQueue = activateQueue.slice(i);
      }

      // 2. Validation phase
      transition.runQueue(deactivateQueue, canDeactivate, function () {
        transition.runQueue(activateQueue, canActivate, function () {
          transition.runQueue(deactivateQueue, deactivate, function () {
            // 3. Activation phase

            // Update router current route
            transition.router._onTransitionValidated(transition);

            // trigger reuse for all reused views
            reuseQueue && reuseQueue.forEach(function (view) {
              return reuse(view, transition);
            });

            // the root of the chain that needs to be replaced
            // is the top-most non-reusable view.
            if (deactivateQueue.length) {
              var _view = deactivateQueue[deactivateQueue.length - 1];
              var depth = reuseQueue ? reuseQueue.length : 0;
              activate(_view, transition, depth, cb);
            } else {
              cb();
            }
          });
        });
      });
    };

    /**
     * Asynchronously and sequentially apply a function to a
     * queue.
     *
     * @param {Array} queue
     * @param {Function} fn
     * @param {Function} cb
     */

    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
      var transition = this;
      step(0);
      function step(index) {
        if (index >= queue.length) {
          cb();
        } else {
          fn(queue[index], transition, function () {
            step(index + 1);
          });
        }
      }
    };

    /**
     * Call a user provided route transition hook and handle
     * the response (e.g. if the user returns a promise).
     *
     * If the user neither expects an argument nor returns a
     * promise, the hook is assumed to be synchronous.
     *
     * @param {Function} hook
     * @param {*} [context]
     * @param {Function} [cb]
     * @param {Object} [options]
     *                 - {Boolean} expectBoolean
     *                 - {Boolean} postActive
     *                 - {Function} processData
     *                 - {Function} cleanup
     */

    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var _ref$expectBoolean = _ref.expectBoolean;
      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
      var _ref$postActivate = _ref.postActivate;
      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
      var processData = _ref.processData;
      var cleanup = _ref.cleanup;

      var transition = this;
      var nextCalled = false;

      // abort the transition
      var abort = function abort() {
        cleanup && cleanup();
        transition.abort();
      };

      // handle errors
      var onError = function onError(err) {
        postActivate ? next() : abort();
        if (err && !transition.router._suppress) {
          warn$1('Uncaught error during transition: ');
          throw err instanceof Error ? err : new Error(err);
        }
      };

      // since promise swallows errors, we have to
      // throw it in the next tick...
      var onPromiseError = function onPromiseError(err) {
        try {
          onError(err);
        } catch (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      };

      // advance the transition to the next step
      var next = function next() {
        if (nextCalled) {
          warn$1('transition.next() should be called only once.');
          return;
        }
        nextCalled = true;
        if (transition.aborted) {
          cleanup && cleanup();
          return;
        }
        cb && cb();
      };

      var nextWithBoolean = function nextWithBoolean(res) {
        if (typeof res === 'boolean') {
          res ? next() : abort();
        } else if (isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort();
          }, onPromiseError);
        } else if (!hook.length) {
          next();
        }
      };

      var nextWithData = function nextWithData(data) {
        var res = undefined;
        try {
          res = processData(data);
        } catch (err) {
          return onError(err);
        }
        if (isPromise(res)) {
          res.then(next, onPromiseError);
        } else {
          next();
        }
      };

      // expose a clone of the transition object, so that each
      // hook gets a clean copy and prevent the user from
      // messing with the internals.
      var exposed = {
        to: transition.to,
        from: transition.from,
        abort: abort,
        next: processData ? nextWithData : next,
        redirect: function redirect() {
          transition.redirect.apply(transition, arguments);
        }
      };

      // actually call the hook
      var res = undefined;
      try {
        res = hook.call(context, exposed);
      } catch (err) {
        return onError(err);
      }

      if (expectBoolean) {
        // boolean hooks
        nextWithBoolean(res);
      } else if (isPromise(res)) {
        // promise
        if (processData) {
          res.then(nextWithData, onPromiseError);
        } else {
          res.then(next, onPromiseError);
        }
      } else if (processData && isPlainOjbect(res)) {
        // data promise sugar
        nextWithData(res);
      } else if (!hook.length) {
        next();
      }
    };

    /**
     * Call a single hook or an array of async hooks in series.
     *
     * @param {Array} hooks
     * @param {*} context
     * @param {Function} cb
     * @param {Object} [options]
     */

    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
      var _this = this;

      if (Array.isArray(hooks)) {
        this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, next, options);
          }
        }, cb);
      } else {
        this.callHook(hooks, context, cb, options);
      }
    };

    return RouteTransition;
  })();

  function isPlainOjbect(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  function toArray(val) {
    return val ? Array.prototype.slice.call(val) : [];
  }

  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

  /**
   * Route Context Object
   *
   * @param {String} path
   * @param {Router} router
   */

  var Route = function Route(path, router) {
    var _this = this;

    babelHelpers.classCallCheck(this, Route);

    var matched = router._recognizer.recognize(path);
    if (matched) {
      // copy all custom fields from route configs
      [].forEach.call(matched, function (match) {
        for (var key in match.handler) {
          if (!internalKeysRE.test(key)) {
            _this[key] = match.handler[key];
          }
        }
      });
      // set query and params
      this.query = matched.queryParams;
      this.params = [].reduce.call(matched, function (prev, cur) {
        if (cur.params) {
          for (var key in cur.params) {
            prev[key] = cur.params[key];
          }
        }
        return prev;
      }, {});
    }
    // expose path and router
    this.path = path;
    // for internal use
    this.matched = matched || router._notFoundHandler;
    // internal reference to router
    Object.defineProperty(this, 'router', {
      enumerable: false,
      value: router
    });
    // Important: freeze self to prevent observation
    Object.freeze(this);
  };

  function applyOverride (Vue) {
    var _Vue$util = Vue.util;
    var extend = _Vue$util.extend;
    var isArray = _Vue$util.isArray;
    var defineReactive = _Vue$util.defineReactive;

    // override Vue's init and destroy process to keep track of router instances
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      options = options || {};
      var root = options._parent || options.parent || this;
      var router = root.$router;
      var route = root.$route;
      if (router) {
        // expose router
        this.$router = router;
        router._children.push(this);
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          defineReactive(this, '$route', route);
        }
      }
      init.call(this, options);
    };

    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      if (!this._isBeingDestroyed && this.$router) {
        this.$router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    };

    // 1.0 only: enable route mixins
    var strats = Vue.config.optionMergeStrategies;
    var hooksToMergeRE = /^(data|activate|deactivate)$/;

    if (strats) {
      strats.route = function (parentVal, childVal) {
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var a = ret[key];
          var b = childVal[key];
          // for data, activate and deactivate, we need to merge them into
          // arrays similar to lifecycle hooks.
          if (a && hooksToMergeRE.test(key)) {
            ret[key] = (isArray(a) ? a : [a]).concat(b);
          } else {
            ret[key] = b;
          }
        }
        return ret;
      };
    }
  }

  function View (Vue) {

    var _ = Vue.util;
    var componentDef =
    // 0.12
    Vue.directive('_component') ||
    // 1.0
    Vue.internalDirectives.component;
    // <router-view> extends the internal component directive
    var viewDef = _.extend({}, componentDef);

    // with some overrides
    _.extend(viewDef, {

      _isRouterView: true,

      bind: function bind() {
        var route = this.vm.$route;
        /* istanbul ignore if */
        if (!route) {
          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
          return;
        }
        // force dynamic directive so v-component doesn't
        // attempt to build right now
        this._isDynamicLiteral = true;
        // finally, init by delegating to v-component
        componentDef.bind.call(this);

        // locate the parent view
        var parentView = undefined;
        var parent = this.vm;
        while (parent) {
          if (parent._routerView) {
            parentView = parent._routerView;
            break;
          }
          parent = parent.$parent;
        }
        if (parentView) {
          // register self as a child of the parent view,
          // instead of activating now. This is so that the
          // child's activate hook is called after the
          // parent's has resolved.
          this.parentView = parentView;
          parentView.childView = this;
        } else {
          // this is the root view!
          var router = route.router;
          router._rootView = this;
        }

        // handle late-rendered view
        // two possibilities:
        // 1. root view rendered after transition has been
        //    validated;
        // 2. child view rendered after parent view has been
        //    activated.
        var transition = route.router._currentTransition;
        if (!parentView && transition.done || parentView && parentView.activated) {
          var depth = parentView ? parentView.depth + 1 : 0;
          activate(this, transition, depth);
        }
      },

      unbind: function unbind() {
        if (this.parentView) {
          this.parentView.childView = null;
        }
        componentDef.unbind.call(this);
      }
    });

    Vue.elementDirective('router-view', viewDef);
  }

  var trailingSlashRE = /\/$/;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var queryStringRE = /\?.*$/;

  // install v-link, which provides navigation support for
  // HTML5 history mode
  function Link (Vue) {
    var _Vue$util = Vue.util;
    var _bind = _Vue$util.bind;
    var isObject = _Vue$util.isObject;
    var addClass = _Vue$util.addClass;
    var removeClass = _Vue$util.removeClass;

    var onPriority = Vue.directive('on').priority;
    var LINK_UPDATE = '__vue-router-link-update__';

    var activeId = 0;

    Vue.directive('link-active', {
      priority: 9999,
      bind: function bind() {
        var _this = this;

        var id = String(activeId++);
        // collect v-links contained within this element.
        // we need do this here before the parent-child relationship
        // gets messed up by terminal directives (if, for, components)
        var childLinks = this.el.querySelectorAll('[v-link]');
        for (var i = 0, l = childLinks.length; i < l; i++) {
          var link = childLinks[i];
          var existingId = link.getAttribute(LINK_UPDATE);
          var value = existingId ? existingId + ',' + id : id;
          // leave a mark on the link element which can be persisted
          // through fragment clones.
          link.setAttribute(LINK_UPDATE, value);
        }
        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
          if (link.activeIds.indexOf(id) > -1) {
            link.updateClasses(path, _this.el);
          }
        });
      },
      unbind: function unbind() {
        this.vm.$off(LINK_UPDATE, this.cb);
      }
    });

    Vue.directive('link', {
      priority: onPriority - 2,

      bind: function bind() {
        var vm = this.vm;
        /* istanbul ignore if */
        if (!vm.$route) {
          warn$1('v-link can only be used inside a router-enabled app.');
          return;
        }
        this.router = vm.$route.router;
        // update things when the route changes
        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
        // check v-link-active ids
        var activeIds = this.el.getAttribute(LINK_UPDATE);
        if (activeIds) {
          this.el.removeAttribute(LINK_UPDATE);
          this.activeIds = activeIds.split(',');
        }
        // no need to handle click if link expects to be opened
        // in a new window/tab.
        /* istanbul ignore if */
        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
          return;
        }
        // handle click
        this.handler = _bind(this.onClick, this);
        this.el.addEventListener('click', this.handler);
      },

      update: function update(target) {
        this.target = target;
        if (isObject(target)) {
          this.append = target.append;
          this.exact = target.exact;
          this.prevActiveClass = this.activeClass;
          this.activeClass = target.activeClass;
        }
        this.onRouteUpdate(this.vm.$route);
      },

      onClick: function onClick(e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) return;
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) return;

        var target = this.target;
        if (target) {
          // v-link with expression, just go
          e.preventDefault();
          this.router.go(target);
        } else {
          // no expression, delegate for an <a> inside
          var el = e.target;
          while (el.tagName !== 'A' && el !== this.el) {
            el = el.parentNode;
          }
          if (el.tagName === 'A' && sameOrigin(el)) {
            e.preventDefault();
            var path = el.pathname;
            if (this.router.history.root) {
              path = path.replace(this.router.history.rootRE, '');
            }
            this.router.go({
              path: path,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      },

      onRouteUpdate: function onRouteUpdate(route) {
        // router.stringifyPath is dependent on current route
        // and needs to be called again whenver route changes.
        var newPath = this.router.stringifyPath(this.target);
        if (this.path !== newPath) {
          this.path = newPath;
          this.updateActiveMatch();
          this.updateHref();
        }
        if (this.activeIds) {
          this.vm.$emit(LINK_UPDATE, this, route.path);
        } else {
          this.updateClasses(route.path, this.el);
        }
      },

      updateActiveMatch: function updateActiveMatch() {
        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      },

      updateHref: function updateHref() {
        if (this.el.tagName !== 'A') {
          return;
        }
        var path = this.path;
        var router = this.router;
        var isAbsolute = path.charAt(0) === '/';
        // do not format non-hash relative paths
        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      },

      updateClasses: function updateClasses(path, el) {
        var activeClass = this.activeClass || this.router._linkActiveClass;
        // clear old class
        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
          toggleClasses(el, this.prevActiveClass, removeClass);
        }
        // remove query string before matching
        var dest = this.path.replace(queryStringRE, '');
        path = path.replace(queryStringRE, '');
        // add new class
        if (this.exact) {
          if (dest === path ||
          // also allow additional trailing slash
          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        } else {
          if (this.activeRE && this.activeRE.test(path)) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        }
      },

      unbind: function unbind() {
        this.el.removeEventListener('click', this.handler);
        this.unwatch && this.unwatch();
      }
    });

    function sameOrigin(link) {
      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
    }

    // this function is copied from v-bind:class implementation until
    // we properly expose it...
    function toggleClasses(el, key, fn) {
      key = key.trim();
      if (key.indexOf(' ') === -1) {
        fn(el, key);
        return;
      }
      var keys = key.split(/\s+/);
      for (var i = 0, l = keys.length; i < l; i++) {
        fn(el, keys[i]);
      }
    }
  }

  var historyBackends = {
    abstract: AbstractHistory,
    hash: HashHistory,
    html5: HTML5History
  };

  // late bind during install
  var Vue = undefined;

  /**
   * Router constructor
   *
   * @param {Object} [options]
   */

  var Router = (function () {
    function Router() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$hashbang = _ref.hashbang;
      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
      var _ref$abstract = _ref.abstract;
      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
      var _ref$history = _ref.history;
      var history = _ref$history === undefined ? false : _ref$history;
      var _ref$saveScrollPosition = _ref.saveScrollPosition;
      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
      var _ref$transitionOnLoad = _ref.transitionOnLoad;
      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
      var _ref$suppressTransitionError = _ref.suppressTransitionError;
      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
      var _ref$root = _ref.root;
      var root = _ref$root === undefined ? null : _ref$root;
      var _ref$linkActiveClass = _ref.linkActiveClass;
      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
      babelHelpers.classCallCheck(this, Router);

      /* istanbul ignore if */
      if (!Router.installed) {
        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
      }

      // Vue instances
      this.app = null;
      this._children = [];

      // route recognizer
      this._recognizer = new RouteRecognizer();
      this._guardRecognizer = new RouteRecognizer();

      // state
      this._started = false;
      this._startCb = null;
      this._currentRoute = {};
      this._currentTransition = null;
      this._previousTransition = null;
      this._notFoundHandler = null;
      this._notFoundRedirect = null;
      this._beforeEachHooks = [];
      this._afterEachHooks = [];

      // trigger transition on initial render?
      this._rendered = false;
      this._transitionOnLoad = transitionOnLoad;

      // history mode
      this._root = root;
      this._abstract = abstract;
      this._hashbang = hashbang;

      // check if HTML5 history is available
      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
      this._history = history && hasPushState;
      this._historyFallback = history && !hasPushState;

      // create history object
      var inBrowser = Vue.util.inBrowser;
      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

      var History = historyBackends[this.mode];
      this.history = new History({
        root: root,
        hashbang: this._hashbang,
        onChange: function onChange(path, state, anchor) {
          _this._match(path, state, anchor);
        }
      });

      // other options
      this._saveScrollPosition = saveScrollPosition;
      this._linkActiveClass = linkActiveClass;
      this._suppress = suppressTransitionError;
    }

    /**
     * Allow directly passing components to a route
     * definition.
     *
     * @param {String} path
     * @param {Object} handler
     */

    // API ===================================================

    /**
    * Register a map of top-level paths.
    *
    * @param {Object} map
    */

    Router.prototype.map = function map(_map) {
      for (var route in _map) {
        this.on(route, _map[route]);
      }
      return this;
    };

    /**
     * Register a single root-level path
     *
     * @param {String} rootPath
     * @param {Object} handler
     *                 - {String} component
     *                 - {Object} [subRoutes]
     *                 - {Boolean} [forceRefresh]
     *                 - {Function} [before]
     *                 - {Function} [after]
     */

    Router.prototype.on = function on(rootPath, handler) {
      if (rootPath === '*') {
        this._notFound(handler);
      } else {
        this._addRoute(rootPath, handler, []);
      }
      return this;
    };

    /**
     * Set redirects.
     *
     * @param {Object} map
     */

    Router.prototype.redirect = function redirect(map) {
      for (var path in map) {
        this._addRedirect(path, map[path]);
      }
      return this;
    };

    /**
     * Set aliases.
     *
     * @param {Object} map
     */

    Router.prototype.alias = function alias(map) {
      for (var path in map) {
        this._addAlias(path, map[path]);
      }
      return this;
    };

    /**
     * Set global before hook.
     *
     * @param {Function} fn
     */

    Router.prototype.beforeEach = function beforeEach(fn) {
      this._beforeEachHooks.push(fn);
      return this;
    };

    /**
     * Set global after hook.
     *
     * @param {Function} fn
     */

    Router.prototype.afterEach = function afterEach(fn) {
      this._afterEachHooks.push(fn);
      return this;
    };

    /**
     * Navigate to a given path.
     * The path can be an object describing a named path in
     * the format of { name: '...', params: {}, query: {}}
     * The path is assumed to be already decoded, and will
     * be resolved against root (if provided)
     *
     * @param {String|Object} path
     * @param {Boolean} [replace]
     */

    Router.prototype.go = function go(path) {
      var replace = false;
      var append = false;
      if (Vue.util.isObject(path)) {
        replace = path.replace;
        append = path.append;
      }
      path = this.stringifyPath(path);
      if (path) {
        this.history.go(path, replace, append);
      }
    };

    /**
     * Short hand for replacing current path
     *
     * @param {String} path
     */

    Router.prototype.replace = function replace(path) {
      if (typeof path === 'string') {
        path = { path: path };
      }
      path.replace = true;
      this.go(path);
    };

    /**
     * Start the router.
     *
     * @param {VueConstructor} App
     * @param {String|Element} container
     * @param {Function} [cb]
     */

    Router.prototype.start = function start(App, container, cb) {
      /* istanbul ignore if */
      if (this._started) {
        warn$1('already started.');
        return;
      }
      this._started = true;
      this._startCb = cb;
      if (!this.app) {
        /* istanbul ignore if */
        if (!App || !container) {
          throw new Error('Must start vue-router with a component and a ' + 'root container.');
        }
        /* istanbul ignore if */
        if (App instanceof Vue) {
          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
        }
        this._appContainer = container;
        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
        // give it a name for better debugging
        Ctor.options.name = Ctor.options.name || 'RouterApp';
      }

      // handle history fallback in browsers that do not
      // support HTML5 history API
      if (this._historyFallback) {
        var _location = window.location;
        var _history = new HTML5History({ root: this._root });
        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
        if (path && path !== '/') {
          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
          return;
        }
      }

      this.history.start();
    };

    /**
     * Stop listening to route changes.
     */

    Router.prototype.stop = function stop() {
      this.history.stop();
      this._started = false;
    };

    /**
     * Normalize named route object / string paths into
     * a string.
     *
     * @param {Object|String|Number} path
     * @return {String}
     */

    Router.prototype.stringifyPath = function stringifyPath(path) {
      var generatedPath = '';
      if (path && typeof path === 'object') {
        if (path.name) {
          var extend = Vue.util.extend;
          var currentParams = this._currentTransition && this._currentTransition.to.params;
          var targetParams = path.params || {};
          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
        } else if (path.path) {
          generatedPath = encodeURI(path.path);
        }
        if (path.query) {
          // note: the generated query string is pre-URL-encoded by the recognizer
          var query = this._recognizer.generateQueryString(path.query);
          if (generatedPath.indexOf('?') > -1) {
            generatedPath += '&' + query.slice(1);
          } else {
            generatedPath += query;
          }
        }
      } else {
        generatedPath = encodeURI(path ? path + '' : '');
      }
      return generatedPath;
    };

    // Internal methods ======================================

    /**
    * Add a route containing a list of segments to the internal
    * route recognizer. Will be called recursively to add all
    * possible sub-routes.
    *
    * @param {String} path
    * @param {Object} handler
    * @param {Array} segments
    */

    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
      guardComponent(path, handler);
      handler.path = path;
      handler.fullPath = (segments.reduce(function (path, segment) {
        return path + segment.path;
      }, '') + path).replace('//', '/');
      segments.push({
        path: path,
        handler: handler
      });
      this._recognizer.add(segments, {
        as: handler.name
      });
      // add sub routes
      if (handler.subRoutes) {
        for (var subPath in handler.subRoutes) {
          // recursively walk all sub routes
          this._addRoute(subPath, handler.subRoutes[subPath],
          // pass a copy in recursion to avoid mutating
          // across branches
          segments.slice());
        }
      }
    };

    /**
     * Set the notFound route handler.
     *
     * @param {Object} handler
     */

    Router.prototype._notFound = function _notFound(handler) {
      guardComponent('*', handler);
      this._notFoundHandler = [{ handler: handler }];
    };

    /**
     * Add a redirect record.
     *
     * @param {String} path
     * @param {String} redirectPath
     */

    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
      if (path === '*') {
        this._notFoundRedirect = redirectPath;
      } else {
        this._addGuard(path, redirectPath, this.replace);
      }
    };

    /**
     * Add an alias record.
     *
     * @param {String} path
     * @param {String} aliasPath
     */

    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
      this._addGuard(path, aliasPath, this._match);
    };

    /**
     * Add a path guard.
     *
     * @param {String} path
     * @param {String} mappedPath
     * @param {Function} handler
     */

    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
      var _this2 = this;

      this._guardRecognizer.add([{
        path: path,
        handler: function handler(match, query) {
          var realPath = mapParams(mappedPath, match.params, query);
          _handler.call(_this2, realPath);
        }
      }]);
    };

    /**
     * Check if a path matches any redirect records.
     *
     * @param {String} path
     * @return {Boolean} - if true, will skip normal match.
     */

    Router.prototype._checkGuard = function _checkGuard(path) {
      var matched = this._guardRecognizer.recognize(path, true);
      if (matched) {
        matched[0].handler(matched[0], matched.queryParams);
        return true;
      } else if (this._notFoundRedirect) {
        matched = this._recognizer.recognize(path);
        if (!matched) {
          this.replace(this._notFoundRedirect);
          return true;
        }
      }
    };

    /**
     * Match a URL path and set the route context on vm,
     * triggering view updates.
     *
     * @param {String} path
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._match = function _match(path, state, anchor) {
      var _this3 = this;

      if (this._checkGuard(path)) {
        return;
      }

      var currentRoute = this._currentRoute;
      var currentTransition = this._currentTransition;

      if (currentTransition) {
        if (currentTransition.to.path === path) {
          // do nothing if we have an active transition going to the same path
          return;
        } else if (currentRoute.path === path) {
          // We are going to the same path, but we also have an ongoing but
          // not-yet-validated transition. Abort that transition and reset to
          // prev transition.
          currentTransition.aborted = true;
          this._currentTransition = this._prevTransition;
          return;
        } else {
          // going to a totally different path. abort ongoing transition.
          currentTransition.aborted = true;
        }
      }

      // construct new route and transition context
      var route = new Route(path, this);
      var transition = new RouteTransition(this, route, currentRoute);

      // current transition is updated right now.
      // however, current route will only be updated after the transition has
      // been validated.
      this._prevTransition = currentTransition;
      this._currentTransition = transition;

      if (!this.app) {
        (function () {
          // initial render
          var router = _this3;
          _this3.app = new _this3._appConstructor({
            el: _this3._appContainer,
            created: function created() {
              this.$router = router;
            },
            _meta: {
              $route: route
            }
          });
        })();
      }

      // check global before hook
      var beforeHooks = this._beforeEachHooks;
      var startTransition = function startTransition() {
        transition.start(function () {
          _this3._postTransition(route, state, anchor);
        });
      };

      if (beforeHooks.length) {
        transition.runQueue(beforeHooks, function (hook, _, next) {
          if (transition === _this3._currentTransition) {
            transition.callHook(hook, null, next, {
              expectBoolean: true
            });
          }
        }, startTransition);
      } else {
        startTransition();
      }

      if (!this._rendered && this._startCb) {
        this._startCb.call(null);
      }

      // HACK:
      // set rendered to true after the transition start, so
      // that components that are acitvated synchronously know
      // whether it is the initial render.
      this._rendered = true;
    };

    /**
     * Set current to the new transition.
     * This is called by the transition object when the
     * validation of a route has succeeded.
     *
     * @param {Transition} transition
     */

    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
      // set current route
      var route = this._currentRoute = transition.to;
      // update route context for all children
      if (this.app.$route !== route) {
        this.app.$route = route;
        this._children.forEach(function (child) {
          child.$route = route;
        });
      }
      // call global after hook
      if (this._afterEachHooks.length) {
        this._afterEachHooks.forEach(function (hook) {
          return hook.call(null, {
            to: transition.to,
            from: transition.from
          });
        });
      }
      this._currentTransition.done = true;
    };

    /**
     * Handle stuff after the transition.
     *
     * @param {Route} route
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
      // handle scroll positions
      // saved scroll positions take priority
      // then we check if the path has an anchor
      var pos = state && state.pos;
      if (pos && this._saveScrollPosition) {
        Vue.nextTick(function () {
          window.scrollTo(pos.x, pos.y);
        });
      } else if (anchor) {
        Vue.nextTick(function () {
          var el = document.getElementById(anchor.slice(1));
          if (el) {
            window.scrollTo(window.scrollX, el.offsetTop);
          }
        });
      }
    };

    return Router;
  })();

  function guardComponent(path, handler) {
    var comp = handler.component;
    if (Vue.util.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      warn$1('invalid component for route "' + path + '".');
    }
  }

  /* Installation */

  Router.installed = false;

  /**
   * Installation interface.
   * Install the necessary directives.
   */

  Router.install = function (externalVue) {
    /* istanbul ignore if */
    if (Router.installed) {
      warn$1('already installed.');
      return;
    }
    Vue = externalVue;
    applyOverride(Vue);
    View(Vue);
    Link(Vue);
    exports$1.Vue = Vue;
    Router.installed = true;
  };

  // auto install
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Router);
  }

  return Router;

}));
},{}],48:[function(require,module,exports){
;(function () {

  var vueTouch = {}
  var Hammer = typeof require === 'function'
    ? require('hammerjs')
    : window.Hammer
  var gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe']
  var directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical']
  var customeEvents = {}

  if (!Hammer) {
    throw new Error('[vue-touch] cannot locate Hammer.js.')
  }

  // exposed global options
  vueTouch.config = {}

  vueTouch.install = function (Vue) {

    Vue.directive('touch', {

      isFn: true,
      acceptStatement: true,
      priority: Vue.directive('on').priority,

      bind: function () {
        if (!this.el.hammer) {
          this.el.hammer = new Hammer.Manager(this.el)
        }
        var mc = this.mc = this.el.hammer
        // determine event type
        var event = this.arg
        if (!event) {
          console.warn('[vue-touch] event type argument is required.')
        }
        var recognizerType, recognizer

        if (customeEvents[event]) {
          // custom event
          var custom = customeEvents[event]
          recognizerType = custom.type
          recognizer = new Hammer[capitalize(recognizerType)](custom)
          recognizer.recognizeWith(mc.recognizers)
          mc.add(recognizer)
        } else {
          // built-in event
          for (var i = 0; i < gestures.length; i++) {
            if (event.indexOf(gestures[i]) === 0) {
              recognizerType = gestures[i]
              break
            }
          }
          if (!recognizerType) {
            console.warn('[vue-touch] invalid event type: ' + event)
            return
          }
          recognizer = mc.get(recognizerType)
          if (!recognizer) {
            // add recognizer
            recognizer = new Hammer[capitalize(recognizerType)]()
            // make sure multiple recognizers work together...
            recognizer.recognizeWith(mc.recognizers)
            mc.add(recognizer)
          }
          // apply global options
          var globalOptions = vueTouch.config[recognizerType]
          if (globalOptions) {
            guardDirections(globalOptions)
            recognizer.set(globalOptions)
          }
          // apply local options
          var localOptions =
            this.el.hammerOptions &&
            this.el.hammerOptions[recognizerType]
          if (localOptions) {
            guardDirections(localOptions)
            recognizer.set(localOptions)
          }
        }
        this.recognizer = recognizer
      },

      update: function (fn) {
        var mc = this.mc
        var vm = this.vm
        var event = this.arg
        // teardown old handler
        if (this.handler) {
          mc.off(event, this.handler)
        }
        if (typeof fn !== 'function') {
          console.warn(
            '[vue-touch] invalid handler function for v-touch: ' +
            this.arg + '="' + this.descriptor.raw
          )
        } else {
          mc.on(event, fn)
        }
      },

      unbind: function () {
        this.mc.off(this.arg, this.handler)
        if (!Object.keys(this.mc.handlers).length) {
          this.mc.destroy()
          this.el.hammer = null
        }
      }
    })

    Vue.directive('touch-options', {
      priority: Vue.directive('on').priority + 1,
      update: function (options) {
        var opts = this.el.hammerOptions || (this.el.hammerOptions = {})
        if (!this.arg) {
          console.warn('[vue-touch] recognizer type argument for v-touch-options is required.')
        } else {
          opts[this.arg] = options
        }
      }
    })
  }

  /**
   * Register a custom event.
   *
   * @param {String} event
   * @param {Object} options - a Hammer.js recognizer option object.
   *                           required fields:
   *                           - type: the base recognizer to use for this event
   */

  vueTouch.registerCustomEvent = function (event, options) {
    options.event = event
    customeEvents[event] = options
  }

  function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function guardDirections (options) {
    var dir = options.direction
    if (typeof dir === 'string') {
      if (directions.indexOf(dir) > -1) {
        options.direction = Hammer['DIRECTION_' + dir.toUpperCase()]
      } else {
        console.warn('[vue-touch] invalid direction: ' + dir)
      }
    }
  }

  if (typeof exports == "object") {
    module.exports = vueTouch
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueTouch })
  } else if (window.Vue) {
    window.VueTouch = vueTouch
    Vue.use(vueTouch)
  }

})()

},{"hammerjs":36}],49:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v1.0.21
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined') {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;
  if (this.size === this.limit) {
    removed = this.shift();
  }

  var entry = this.get(key, true);
  if (!entry) {
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var c;
var prev;
var i;
var l;
var lastFilterIndex;
var inSingle;
var inDouble;
var curly;
var square;
var paren;
/**
 * Push a filter to the current directive object
 */

function pushFilter() {
  var exp = str.slice(lastFilterIndex, i).trim();
  var filter;
  if (exp) {
    filter = {};
    var tokens = exp.match(filterTokenRE);
    filter.name = tokens[0];
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg);
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter);
  }
  lastFilterIndex = i + 1;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  inSingle = inDouble = false;
  curly = square = paren = 0;
  lastFilterIndex = 0;
  dir = {};

  for (i = 0, l = str.length; i < l; i++) {
    prev = c;
    c = str.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
    } else if (c === 0x7C && // pipe
    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        dir.expression = str.slice(0, i).trim();
      } else {
        // already has filter
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  var doc = document.documentElement;
  var parent = node && node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        !/^(data|time|rtc|rb)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @return {Object|undefined}
 */

function getIsBinding(el) {
  // dynamic syntax
  var exp = getAttr(el, 'is');
  if (exp != null) {
    return { id: exp };
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  var options = {};
  var key;
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE9: isIE9,
	isAndroid: isAndroid,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initScope().
    this._data = {};

    // save raw constructor data before merge
    // so that we know which properties are provided at
    // instantiation.
    this._runtimeData = options.data;

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var booleanLiteralRE = /^(?:true|false)$/;

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here becaue the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat true/false as paths
  !booleanLiteralRE.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queueIndex;
var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;
var internalQueueDepleted = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue = [];
  userQueue = [];
  has = {};
  circular = {};
  waiting = internalQueueDepleted = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  runBatcherQueue(queue);
  internalQueueDepleted = true;
  runBatcherQueue(userQueue);
  // dev tool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
  resetBatcherState();
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
    var watcher = queue[queueIndex];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    if (internalQueueDepleted && !watcher.user) {
      // an internal watcher triggered by a user watcher...
      // let's run it immediately after current user watcher is done.
      userQueue.splice(queueIndex + 1, 0, watcher);
    } else {
      // push watcher into appropriate queue
      var q = watcher.user ? userQueue : queue;
      has[id] = q.length;
      q.push(watcher);
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushBatcherQueue);
      }
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = Object.create(null);
  this.newDepIds = null;
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
  this.newDepIds = Object.create(null);
  this.newDeps.length = 0;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds[id]) {
    this.newDepIds[id] = true;
    this.newDeps.push(dep);
    if (!this.depIds[id]) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds[dep.id]) {
      dep.removeSub(this);
    }
  }
  this.depIds = this.newDepIds;
  var tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

function traverse(val) {
  var i, keys;
  if (isArray(val)) {
    i = val.length;
    while (i--) traverse(val[i]);
  } else if (isObject(val)) {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) traverse(val[keys[i]]);
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);

  if (!tagMatch && !entityMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment.
  if (isRealTemplate(node)) {
    trimNode(node.content);
    return node.content;
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el)) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new isntance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.before(prevEl.nextSibling);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = trackByKey ? trackByKey === '$index' ? index : getPath(value, trackByKey) : key || value;
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else {
        def(value, id, frag);
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = trackByKey ? trackByKey === '$index' ? index : getPath(value, trackByKey) : key || value;
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = trackByKey ? trackByKey === '$index' ? index : getPath(value, trackByKey) : key || value;
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * wathcer's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.value = _toString(value);
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', this.forceUpdate);
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.value;
      if (isArray(model)) {
        var val = self.getValue();
        if (el.checked) {
          if (indexOf(model, val) < 0) {
            model.push(val);
          }
        } else {
          model.$remove(val);
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
  if (camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (value && typeof value === 'string') {
      this.handleObject(stringToObject(value));
    } else if (isPlainObject(value)) {
      this.handleObject(value);
    } else if (isArray(value)) {
      this.handleArray(value);
    } else {
      this.cleanup();
    }
  },

  handleObject: function handleObject(value) {
    this.cleanup(value);
    this.prevKeys = Object.keys(value);
    setObjectClasses(this.el, value);
  },

  handleArray: function handleArray(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val && isPlainObject(val)) {
        setObjectClasses(this.el, val);
      } else if (val && typeof val === 'string') {
        addClass(this.el, val);
      }
    }
    this.prevKeys = value.slice();
  },

  cleanup: function cleanup(value) {
    if (!this.prevKeys) return;

    var i = this.prevKeys.length;
    while (i--) {
      var key = this.prevKeys[i];
      if (!key) continue;

      var keys = isPlainObject(key) ? Object.keys(key) : [key];
      for (var j = 0, l = keys.length; j < l; j++) {
        toggleClasses(this.el, keys[j], removeClass);
      }
    }
  }
};

function setObjectClasses(el, obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    if (!obj[key]) continue;
    toggleClasses(el, key, addClass);
  }
}

function stringToObject(value) {
  var res = {};
  var keys = value.trim().split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    res[keys[i]] = true;
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function toggleClasses(el, key, fn) {
  key = key.trim();

  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }

  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  // coerce is a function
  return coerce(value);
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    if (oldId) {
      removeClass(el, oldId + '-transition');
    }
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  dirs.sort(directiveComparator);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator(a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
  return a > b ? -1 : a === b ? 0 : 1;
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;
      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && node.tagName !== 'SCRIPT') {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = value;
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    modifiers = parseModifiers(attr.name);
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value)) {
      value.trim().split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key) || runtimeData && hasOwn(runtimeData, key) && props[key].raw === null) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
        if (typeof handler === 'function') {
          handler._fromParent = true;
          vm.$on(name.replace(eventRE), handler);
        } else if (process.env.NODE_ENV !== 'production') {
          warn('v-on:' + name + '="' + attrs[i].value + '" ' + 'expects a function value, got ' + handler, vm);
        }
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression(exp);
    if (res) {
      if (asStatement && !isSimplePath(exp)) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   */

  currency: function currency(value, _currency) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    var stringified = Math.abs(value).toFixed(2);
    var _int = stringified.slice(0, -3);
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = stringified.slice(-3);
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = id;
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.21';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":37}],50:[function(require,module,exports){
var inserted = exports.cache = {}

exports.insert = function (css) {
  if (inserted[css]) return
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return elem
}

},{}],51:[function(require,module,exports){
exports.sync = function (store, router) {
  patchStore(store)
  store.router = router

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  store.watch(
    function (state) {
      return state.route
    },
    function (route) {
      if (route.path === currentPath) {
        return
      }
      isTimeTraveling = true
      currentPath = route.path
      router.go(route.path)
    },
    { deep: true, sync: true }
  )

  // sync store on router navigation
  router.afterEach(function (transition) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    var to = transition.to
    currentPath = to.path
    store.dispatch('router/ROUTE_CHANGED', {
      path: to.path,
      query: to.query,
      params: to.params
    })
  })
}

function patchStore (store) {
  // add state
  var set = store._vm.constructor.parsers.path.setPath
  store._dispatching = true
  set(store._vm._data, 'route', {
    path: '',
    query: null,
    params: null
  })
  store._dispatching = false
  // add mutations
  store.hotUpdate({
    modules: {
      route: {
        mutations: {
          'router/ROUTE_CHANGED': function (state, to) {
            state.path = to.path
            state.query = to.query
            state.params = to.params
          }
        }
      }
    }
  })
}

},{}],52:[function(require,module,exports){
/*!
 * Vuex v0.6.2
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, function () { 'use strict';

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  babelHelpers;

  /**
   * Merge an array of objects into one.
   *
   * @param {Array<Object>} arr
   * @return {Object}
   */

  function mergeObjects(arr) {
    return arr.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var existing = prev[key];
        if (existing) {
          // allow multiple mutation objects to contain duplicate
          // handlers for the same mutation type
          if (Array.isArray(existing)) {
            existing.push(obj[key]);
          } else {
            prev[key] = [prev[key], obj[key]];
          }
        } else {
          prev[key] = obj[key];
        }
      });
      return prev;
    }, {});
  }

  /**
   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
   *
   * @param {*} obj
   * @return {*}
   */

  function deepClone(obj) {
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object') {
      var cloned = {};
      var keys = Object.keys(obj);
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        cloned[key] = deepClone(obj[key]);
      }
      return cloned;
    } else {
      return obj;
    }
  }

  /**
   * Hacks to get access to Vue internals.
   * Maybe we should expose these...
   */

  var Watcher = void 0;
  function getWatcher(vm) {
    if (!Watcher) {
      var unwatch = vm.$watch('__vuex__', function (a) {
        return a;
      });
      Watcher = vm._watchers[0].constructor;
      unwatch();
    }
    return Watcher;
  }

  var Dep = void 0;
  function getDep(vm) {
    if (!Dep) {
      Dep = vm._data.__ob__.dep.constructor;
    }
    return Dep;
  }

  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  var devtoolMiddleware = {
    onInit: function onInit(state, store) {
      if (!hook) return;
      hook.emit('vuex:init', store);
      hook.on('vuex:travel-to-state', function (targetState) {
        var currentState = store._vm._data;
        store._dispatching = true;
        Object.keys(targetState).forEach(function (key) {
          currentState[key] = targetState[key];
        });
        store._dispatching = false;
      });
    },
    onMutation: function onMutation(mutation, state) {
      if (!hook) return;
      hook.emit('vuex:mutation', mutation, state);
    }
  };

  function override (Vue) {
    // override init and inject vuex init procedure
    var _init = Vue.prototype._init;
    Vue.prototype._init = function () {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };

    function vuexInit() {
      var options = this.$options;
      var store = options.store;
      var vuex = options.vuex;
      // store injection

      if (store) {
        this.$store = store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
      // vuex option handling
      if (vuex) {
        if (!this.$store) {
          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
        }
        var state = vuex.state;
        var getters = vuex.getters;
        var actions = vuex.actions;
        // handle deprecated state option

        if (state && !getters) {
          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
          getters = state;
        }
        // getters
        if (getters) {
          options.computed = options.computed || {};
          for (var key in getters) {
            defineVuexGetter(this, key, getters[key]);
          }
        }
        // actions
        if (actions) {
          options.methods = options.methods || {};
          for (var _key in actions) {
            options.methods[_key] = makeBoundAction(actions[_key], this.$store);
          }
        }
      }
    }

    function setter() {
      throw new Error('vuex getter properties are read-only.');
    }

    function defineVuexGetter(vm, key, getter) {
      Object.defineProperty(vm, key, {
        enumerable: true,
        configurable: true,
        get: makeComputedGetter(vm.$store, getter),
        set: setter
      });
    }

    function makeComputedGetter(store, getter) {
      var id = store._getterCacheId;
      // cached
      if (getter[id]) {
        return getter[id];
      }
      var vm = store._vm;
      var Watcher = getWatcher(vm);
      var Dep = getDep(vm);
      var watcher = new Watcher(vm, function (state) {
        return getter(state);
      }, null, { lazy: true });
      var computedGetter = function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      };
      getter[id] = computedGetter;
      return computedGetter;
    }

    function makeBoundAction(action, store) {
      return function vuexBoundAction() {
        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return action.call.apply(action, [this, store].concat(args));
      };
    }

    // option merging
    var merge = Vue.config.optionMergeStrategies.computed;
    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
      if (!toVal) return fromVal;
      if (!fromVal) return toVal;
      return {
        getters: merge(toVal.getters, fromVal.getters),
        state: merge(toVal.state, fromVal.state),
        actions: merge(toVal.actions, fromVal.actions)
      };
    };
  }

  var Vue = void 0;
  var uid = 0;

  var Store = function () {

    /**
     * @param {Object} options
     *        - {Object} state
     *        - {Object} actions
     *        - {Object} mutations
     *        - {Array} middlewares
     *        - {Boolean} strict
     */

    function Store() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$state = _ref.state;
      var state = _ref$state === undefined ? {} : _ref$state;
      var _ref$mutations = _ref.mutations;
      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
      var _ref$modules = _ref.modules;
      var modules = _ref$modules === undefined ? {} : _ref$modules;
      var _ref$middlewares = _ref.middlewares;
      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
      var _ref$strict = _ref.strict;
      var strict = _ref$strict === undefined ? false : _ref$strict;
      babelHelpers.classCallCheck(this, Store);

      this._getterCacheId = 'vuex_store_' + uid++;
      this._dispatching = false;
      this._rootMutations = this._mutations = mutations;
      this._modules = modules;
      // bind dispatch to self
      var dispatch = this.dispatch;
      this.dispatch = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        dispatch.apply(_this, args);
      };
      // use a Vue instance to store the state tree
      // suppress warnings just in case the user has added
      // some funky global mixins
      if (!Vue) {
        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
      }
      var silent = Vue.config.silent;
      Vue.config.silent = true;
      this._vm = new Vue({
        data: state
      });
      Vue.config.silent = silent;
      this._setupModuleState(state, modules);
      this._setupModuleMutations(modules);
      this._setupMiddlewares(middlewares, state);
      // add extra warnings in strict mode
      if (strict) {
        this._setupMutationCheck();
      }
    }

    /**
     * Getter for the entire state tree.
     * Read only.
     *
     * @return {Object}
     */

    babelHelpers.createClass(Store, [{
      key: 'dispatch',


      /**
       * Dispatch an action.
       *
       * @param {String} type
       */

      value: function dispatch(type) {
        var _this2 = this;

        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          payload[_key2 - 1] = arguments[_key2];
        }

        // compatibility for object actions, e.g. FSA
        if ((typeof type === 'undefined' ? 'undefined' : babelHelpers.typeof(type)) === 'object' && type.type && arguments.length === 1) {
          payload = [type];
          type = type.type;
        }
        var mutation = this._mutations[type];
        var prevSnapshot = this._prevSnapshot;
        var state = this.state;
        var snapshot = void 0,
            clonedPayload = void 0;
        if (mutation) {
          this._dispatching = true;
          // apply the mutation
          if (Array.isArray(mutation)) {
            mutation.forEach(function (m) {
              return m.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
            });
          } else {
            mutation.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
          }
          this._dispatching = false;
          // invoke middlewares
          if (this._needSnapshots) {
            snapshot = this._prevSnapshot = deepClone(state);
            clonedPayload = deepClone(payload);
          }
          this._middlewares.forEach(function (m) {
            if (m.onMutation) {
              if (m.snapshot) {
                m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this2);
              } else {
                m.onMutation({ type: type, payload: payload }, state, _this2);
              }
            }
          });
        } else {
          console.warn('[vuex] Unknown mutation: ' + type);
        }
      }

      /**
       * Watch state changes on the store.
       * Same API as Vue's $watch, except when watching a function,
       * the function gets the state as the first argument.
       *
       * @param {String|Function} expOrFn
       * @param {Function} cb
       * @param {Object} [options]
       */

    }, {
      key: 'watch',
      value: function watch(expOrFn, cb, options) {
        var _this3 = this;

        return this._vm.$watch(function () {
          return typeof expOrFn === 'function' ? expOrFn(_this3.state) : _this3._vm.$get(expOrFn);
        }, cb, options);
      }

      /**
       * Hot update mutations & modules.
       *
       * @param {Object} options
       *        - {Object} [mutations]
       *        - {Object} [modules]
       */

    }, {
      key: 'hotUpdate',
      value: function hotUpdate() {
        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var mutations = _ref2.mutations;
        var modules = _ref2.modules;

        this._rootMutations = this._mutations = mutations || this._rootMutations;
        this._setupModuleMutations(modules || this._modules);
      }

      /**
       * Attach sub state tree of each module to the root tree.
       *
       * @param {Object} state
       * @param {Object} modules
       */

    }, {
      key: '_setupModuleState',
      value: function _setupModuleState(state, modules) {
        var setPath = Vue.parsers.path.setPath;

        Object.keys(modules).forEach(function (key) {
          setPath(state, key, modules[key].state || {});
        });
      }

      /**
       * Bind mutations for each module to its sub tree and
       * merge them all into one final mutations map.
       *
       * @param {Object} updatedModules
       */

    }, {
      key: '_setupModuleMutations',
      value: function _setupModuleMutations(updatedModules) {
        var modules = this._modules;
        var getPath = Vue.parsers.path.getPath;

        var allMutations = [this._rootMutations];
        Object.keys(updatedModules).forEach(function (key) {
          modules[key] = updatedModules[key];
        });
        Object.keys(modules).forEach(function (key) {
          var module = modules[key];
          if (!module || !module.mutations) return;
          // bind mutations to sub state tree
          var mutations = {};
          Object.keys(module.mutations).forEach(function (name) {
            var original = module.mutations[name];
            mutations[name] = function (state) {
              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
              }

              original.apply(undefined, [getPath(state, key)].concat(args));
            };
          });
          allMutations.push(mutations);
        });
        this._mutations = mergeObjects(allMutations);
      }

      /**
       * Setup mutation check: if the vuex instance's state is mutated
       * outside of a mutation handler, we throw en error. This effectively
       * enforces all mutations to the state to be trackable and hot-reloadble.
       * However, this comes at a run time cost since we are doing a deep
       * watch on the entire state tree, so it is only enalbed with the
       * strict option is set to true.
       */

    }, {
      key: '_setupMutationCheck',
      value: function _setupMutationCheck() {
        var _this4 = this;

        var Watcher = getWatcher(this._vm);
        /* eslint-disable no-new */
        new Watcher(this._vm, '$data', function () {
          if (!_this4._dispatching) {
            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
          }
        }, { deep: true, sync: true });
        /* eslint-enable no-new */
      }

      /**
       * Setup the middlewares. The devtools middleware is always
       * included, since it does nothing if no devtool is detected.
       *
       * A middleware can demand the state it receives to be
       * "snapshots", i.e. deep clones of the actual state tree.
       *
       * @param {Array} middlewares
       * @param {Object} state
       */

    }, {
      key: '_setupMiddlewares',
      value: function _setupMiddlewares(middlewares, state) {
        var _this5 = this;

        this._middlewares = [devtoolMiddleware].concat(middlewares);
        this._needSnapshots = middlewares.some(function (m) {
          return m.snapshot;
        });
        if (this._needSnapshots) {
          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
        }
        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
        // call init hooks
        this._middlewares.forEach(function (m) {
          if (m.onInit) {
            m.onInit(m.snapshot ? initialSnapshot : state, _this5);
          }
        });
      }
    }, {
      key: 'state',
      get: function get() {
        return this._vm._data;
      },
      set: function set(v) {
        throw new Error('[vuex] Vuex root state is read only.');
      }
    }]);
    return Store;
  }();

  function install(_Vue) {
    Vue = _Vue;
    override(Vue);
  }

  // auto install in dist mode
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  function createLogger() {
    console.warn('[vuex] Vuex.createLogger has been deprecated.' + 'Use `import createLogger from \'vuex/logger\' instead.');
  }

  var index = {
    Store: Store,
    install: install,
    createLogger: createLogger
  };

  return index;

}));
},{}],53:[function(require,module,exports){
'use strict';

// Credits: borrowed code from fcomb/redux-logger

function createLogger() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$collapsed = _ref.collapsed;
  var collapsed = _ref$collapsed === undefined ? true : _ref$collapsed;
  var _ref$transformer = _ref.transformer;
  var transformer = _ref$transformer === undefined ? function (state) {
    return state;
  } : _ref$transformer;
  var _ref$mutationTransfor = _ref.mutationTransformer;
  var mutationTransformer = _ref$mutationTransfor === undefined ? function (mut) {
    return mut;
  } : _ref$mutationTransfor;

  return {
    snapshot: true,
    onMutation: function onMutation(mutation, nextState, prevState) {
      if (typeof console === 'undefined') {
        return;
      }
      var time = new Date();
      var formattedTime = ' @ ' + pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
      var formattedMutation = mutationTransformer(mutation);
      var message = 'mutation ' + mutation.type + formattedTime;
      var startMessage = collapsed ? console.groupCollapsed : console.group;

      // render
      try {
        startMessage.call(console, message);
      } catch (e) {
        console.log(message);
      }

      console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
      console.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
      console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

      try {
        console.groupEnd();
      } catch (e) {
        console.log('—— log end ——');
      }
    }
  };
}

function repeat(str, times) {
  return new Array(times + 1).join(str);
}

function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}

module.exports = createLogger;
},{}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    iconList: '<option></option><option data-icon="fa fa-adjust" value="fa-adjust">fa-adjust</option><option data-icon="fa fa-adn" value="fa-adn">fa-adn</option><option value="fa-align-center" data-icon="fa fa-align-center">fa-align-center</option><option value="fa-align-justify" data-icon="fa fa-align-justify">fa-align-justify</option><option value="fa-align-left" data-icon="fa fa-align-left">fa-align-left</option><option value="fa-align-right" data-icon="fa fa-align-right">fa-align-right</option><option value="fa-ambulance" data-icon="fa fa-ambulance">fa-ambulance</option><option value="fa-anchor" data-icon="fa fa-anchor">fa-anchor</option><option value="fa-android" data-icon="fa fa-android">fa-android</option><option value="fa-angellist" data-icon="fa fa-angellist">fa-angellist</option><option value="fa-angle-double-down" data-icon="fa fa-angle-double-down">fa-angle-double-down</option><option value="fa-angle-double-left" data-icon="fa fa-angle-double-left">fa-angle-double-left</option><option value="fa-angle-double-right" data-icon="fa fa-angle-double-right">fa-angle-double-right</option><option value="fa-angle-double-up" data-icon="fa fa-angle-double-up">fa-angle-double-up</option><option value="fa-angle-down" data-icon="fa fa-angle-down">fa-angle-down</option><option value="fa-angle-left" data-icon="fa fa-angle-left">fa-angle-left</option><option value="fa-angle-right" data-icon="fa fa-angle-right">fa-angle-right</option><option value="fa-angle-up" data-icon="fa fa-angle-up">fa-angle-up</option><option value="fa-apple" data-icon="fa fa-apple">fa-apple</option><option value="fa-archive" data-icon="fa fa-archive">fa-archive</option><option value="fa-area-chart" data-icon="fa fa-area-chart">fa-area-chart</option><option value="fa-arrow-circle-down" data-icon="fa fa-arrow-circle-down">fa-arrow-circle-down</option><option value="fa-arrow-circle-left" data-icon="fa fa-arrow-circle-left">fa-arrow-circle-left</option><option value="fa-arrow-circle-o-down" data-icon="fa fa-arrow-circle-o-down">fa-arrow-circle-o-down</option><option value="fa-arrow-circle-o-left" data-icon="fa fa-arrow-circle-o-left">fa-arrow-circle-o-left</option><option value="fa-arrow-circle-o-right" data-icon="fa fa-arrow-circle-o-right">fa-arrow-circle-o-right</option><option value="fa-arrow-circle-o-up" data-icon="fa fa-arrow-circle-o-up">fa-arrow-circle-o-up</option><option value="fa-arrow-circle-right" data-icon="fa fa-arrow-circle-right">fa-arrow-circle-right</option><option value="fa-arrow-circle-up" data-icon="fa fa-arrow-circle-up">fa-arrow-circle-up</option><option value="fa-arrow-down" data-icon="fa fa-arrow-down">fa-arrow-down</option><option value="fa-arrow-left" data-icon="fa fa-arrow-left">fa-arrow-left</option><option value="fa-arrow-right" data-icon="fa fa-arrow-right">fa-arrow-right</option><option value="fa-arrow-up" data-icon="fa fa-arrow-up">fa-arrow-up</option><option value="fa-arrows" data-icon="fa fa-arrows">fa-arrows</option><option value="fa-arrows-alt" data-icon="fa fa-arrows-alt">fa-arrows-alt</option><option value="fa-arrows-h" data-icon="fa fa-arrows-h">fa-arrows-h</option><option value="fa-arrows-v" data-icon="fa fa-arrows-v">fa-arrows-v</option><option value="fa-asterisk" data-icon="fa fa-asterisk">fa-asterisk</option><option value="fa-at" data-icon="fa fa-at">fa-at</option><option value="fa-automobile" data-icon="fa fa-automobile">fa-automobile</option><option value="fa-backward" data-icon="fa fa-backward">fa-backward</option><option value="fa-ban" data-icon="fa fa-ban">fa-ban</option><option value="fa-bank" data-icon="fa fa-bank">fa-bank</option><option value="fa-bar-chart" data-icon="fa fa-bar-chart">fa-bar-chart</option><option value="fa-bar-chart-o" data-icon="fa fa-bar-chart-o">fa-bar-chart-o</option><option value="fa-barcode" data-icon="fa fa-barcode">fa-barcode</option><option value="fa-bars" data-icon="fa fa-bars">fa-bars</option><option value="fa-bed" data-icon="fa fa-bed">fa-bed</option><option value="fa-beer" data-icon="fa fa-beer">fa-beer</option><option value="fa-behance" data-icon="fa fa-behance">fa-behance</option><option value="fa-behance-square" data-icon="fa fa-behance-square">fa-behance-square</option><option value="fa-bell" data-icon="fa fa-bell">fa-bell</option><option value="fa-bell-o" data-icon="fa fa-bell-o">fa-bell-o</option><option value="fa-bell-slash" data-icon="fa fa-bell-slash">fa-bell-slash</option><option value="fa-bell-slash-o" data-icon="fa fa-bell-slash-o">fa-bell-slash-o</option><option value="fa-bicycle" data-icon="fa fa-bicycle">fa-bicycle</option><option value="fa-binoculars" data-icon="fa fa-binoculars">fa-binoculars</option><option value="fa-birthday-cake" data-icon="fa fa-birthday-cake">fa-birthday-cake</option><option value="fa-bitbucket" data-icon="fa fa-bitbucket">fa-bitbucket</option><option value="fa-bitbucket-square" data-icon="fa fa-bitbucket-square">fa-bitbucket-square</option><option value="fa-bitcoin" data-icon="fa fa-bitcoin">fa-bitcoin</option><option value="fa-bold" data-icon="fa fa-bold">fa-bold</option><option value="fa-bolt" data-icon="fa fa-bolt">fa-bolt</option><option value="fa-bomb" data-icon="fa fa-bomb">fa-bomb</option><option value="fa-book" data-icon="fa fa-book">fa-book</option><option value="fa-bookmark" data-icon="fa fa-bookmark">fa-bookmark</option><option value="fa-bookmark-o" data-icon="fa fa-bookmark-o">fa-bookmark-o</option><option value="fa-briefcase" data-icon="fa fa-briefcase">fa-briefcase</option><option value="fa-btc" data-icon="fa fa-btc">fa-btc</option><option value="fa-bug" data-icon="fa fa-bug">fa-bug</option><option value="fa-building" data-icon="fa fa-building">fa-building</option><option value="fa-building-o" data-icon="fa fa-building-o">fa-building-o</option><option value="fa-bullhorn" data-icon="fa fa-bullhorn">fa-bullhorn</option><option value="fa-bullseye" data-icon="fa fa-bullseye">fa-bullseye</option><option value="fa-bus" data-icon="fa fa-bus">fa-bus</option><option value="fa-buysellads" data-icon="fa fa-buysellads">fa-buysellads</option><option value="fa-cab" data-icon="fa fa-cab">fa-cab</option><option value="fa-calculator" data-icon="fa fa-calculator">fa-calculator</option><option value="fa-calendar" data-icon="fa fa-calendar">fa-calendar</option><option value="fa-calendar-o" data-icon="fa fa-calendar-o">fa-calendar-o</option><option value="fa-camera" data-icon="fa fa-camera">fa-camera</option><option value="fa-camera-retro" data-icon="fa fa-camera-retro">fa-camera-retro</option><option value="fa-car" data-icon="fa fa-car">fa-car</option><option value="fa-caret-down" data-icon="fa fa-caret-down">fa-caret-down</option><option value="fa-caret-left" data-icon="fa fa-caret-left">fa-caret-left</option><option value="fa-caret-right" data-icon="fa fa-caret-right">fa-caret-right</option><option value="fa-caret-square-o-down" data-icon="fa fa-caret-square-o-down">fa-caret-square-o-down</option><option value="fa-caret-square-o-left" data-icon="fa fa-caret-square-o-left">fa-caret-square-o-left</option><option value="fa-caret-square-o-right" data-icon="fa fa-caret-square-o-right">fa-caret-square-o-right</option><option value="fa-caret-square-o-up" data-icon="fa fa-caret-square-o-up">fa-caret-square-o-up</option><option value="fa-caret-up" data-icon="fa fa-caret-up">fa-caret-up</option><option value="fa-cart-arrow-down" data-icon="fa fa-cart-arrow-down">fa-cart-arrow-down</option><option value="fa-cart-plus" data-icon="fa fa-cart-plus">fa-cart-plus</option><option value="fa-cc" data-icon="fa fa-cc">fa-cc</option><option value="fa-cc-amex" data-icon="fa fa-cc-amex">fa-cc-amex</option><option value="fa-cc-discover" data-icon="fa fa-cc-discover">fa-cc-discover</option><option value="fa-cc-mastercard" data-icon="fa fa-cc-mastercard">fa-cc-mastercard</option><option value="fa-cc-paypal" data-icon="fa fa-cc-paypal">fa-cc-paypal</option><option value="fa-cc-stripe" data-icon="fa fa-cc-stripe">fa-cc-stripe</option><option value="fa-cc-visa" data-icon="fa fa-cc-visa">fa-cc-visa</option><option value="fa-certificate" data-icon="fa fa-certificate">fa-certificate</option><option value="fa-chain" data-icon="fa fa-chain">fa-chain</option><option value="fa-chain-broken" data-icon="fa fa-chain-broken">fa-chain-broken</option><option value="fa-check" data-icon="fa fa-check">fa-check</option><option value="fa-check-circle" data-icon="fa fa-check-circle">fa-check-circle</option><option value="fa-check-circle-o" data-icon="fa fa-check-circle-o">fa-check-circle-o</option><option value="fa-check-square" data-icon="fa fa-check-square">fa-check-square</option><option value="fa-check-square-o" data-icon="fa fa-check-square-o">fa-check-square-o</option><option value="fa-chevron-circle-down" data-icon="fa fa-chevron-circle-down">fa-chevron-circle-down</option><option value="fa-chevron-circle-left" data-icon="fa fa-chevron-circle-left">fa-chevron-circle-left</option><option value="fa-chevron-circle-right" data-icon="fa fa-chevron-circle-right">fa-chevron-circle-right</option><option value="fa-chevron-circle-up" data-icon="fa fa-chevron-circle-up">fa-chevron-circle-up</option><option value="fa-chevron-down" data-icon="fa fa-chevron-down">fa-chevron-down</option><option value="fa-chevron-left" data-icon="fa fa-chevron-left">fa-chevron-left</option><option value="fa-chevron-right" data-icon="fa fa-chevron-right">fa-chevron-right</option><option value="fa-chevron-up" data-icon="fa fa-chevron-up">fa-chevron-up</option><option value="fa-child" data-icon="fa fa-child">fa-child</option><option value="fa-circle" data-icon="fa fa-circle">fa-circle</option><option value="fa-circle-o" data-icon="fa fa-circle-o">fa-circle-o</option><option value="fa-circle-o-notch" data-icon="fa fa-circle-o-notch">fa-circle-o-notch</option><option value="fa-circle-thin" data-icon="fa fa-circle-thin">fa-circle-thin</option><option value="fa-clipboard" data-icon="fa fa-clipboard">fa-clipboard</option><option value="fa-clock-o" data-icon="fa fa-clock-o">fa-clock-o</option><option value="fa-close" data-icon="fa fa-close">fa-close</option><option value="fa-cloud" data-icon="fa fa-cloud">fa-cloud</option><option value="fa-cloud-download" data-icon="fa fa-cloud-download">fa-cloud-download</option><option value="fa-cloud-upload" data-icon="fa fa-cloud-upload">fa-cloud-upload</option><option value="fa-cny" data-icon="fa fa-cny">fa-cny</option><option value="fa-code" data-icon="fa fa-code">fa-code</option><option value="fa-code-fork" data-icon="fa fa-code-fork">fa-code-fork</option><option value="fa-codepen" data-icon="fa fa-codepen">fa-codepen</option><option value="fa-coffee" data-icon="fa fa-coffee">fa-coffee</option><option value="fa-cog" data-icon="fa fa-cog">fa-cog</option><option value="fa-cogs" data-icon="fa fa-cogs">fa-cogs</option><option value="fa-columns" data-icon="fa fa-columns">fa-columns</option><option value="fa-comment" data-icon="fa fa-comment">fa-comment</option><option value="fa-comment-o" data-icon="fa fa-comment-o">fa-comment-o</option><option value="fa-comments" data-icon="fa fa-comments">fa-comments</option><option value="fa-comments-o" data-icon="fa fa-comments-o">fa-comments-o</option><option value="fa-compass" data-icon="fa fa-compass">fa-compass</option><option value="fa-compress" data-icon="fa fa-compress">fa-compress</option><option value="fa-connectdevelop" data-icon="fa fa-connectdevelop">fa-connectdevelop</option><option value="fa-copy" data-icon="fa fa-copy">fa-copy</option><option value="fa-copyright" data-icon="fa fa-copyright">fa-copyright</option><option value="fa-credit-card" data-icon="fa fa-credit-card">fa-credit-card</option><option value="fa-crop" data-icon="fa fa-crop">fa-crop</option><option value="fa-crosshairs" data-icon="fa fa-crosshairs">fa-crosshairs</option><option value="fa-css3" data-icon="fa fa-css3">fa-css3</option><option value="fa-cube" data-icon="fa fa-cube">fa-cube</option><option value="fa-cubes" data-icon="fa fa-cubes">fa-cubes</option><option value="fa-cut" data-icon="fa fa-cut">fa-cut</option><option value="fa-cutlery" data-icon="fa fa-cutlery">fa-cutlery</option><option value="fa-dashboard" data-icon="fa fa-dashboard">fa-dashboard</option><option value="fa-dashcube" data-icon="fa fa-dashcube">fa-dashcube</option><option value="fa-database" data-icon="fa fa-database">fa-database</option><option value="fa-dedent" data-icon="fa fa-dedent">fa-dedent</option><option value="fa-delicious" data-icon="fa fa-delicious">fa-delicious</option><option value="fa-desktop" data-icon="fa fa-desktop">fa-desktop</option><option value="fa-deviantart" data-icon="fa fa-deviantart">fa-deviantart</option><option value="fa-diamond" data-icon="fa fa-diamond">fa-diamond</option><option value="fa-digg" data-icon="fa fa-digg">fa-digg</option><option value="fa-dollar" data-icon="fa fa-dollar">fa-dollar</option><option value="fa-dot-circle-o" data-icon="fa fa-dot-circle-o">fa-dot-circle-o</option><option value="fa-download" data-icon="fa fa-download">fa-download</option><option value="fa-dribbble" data-icon="fa fa-dribbble">fa-dribbble</option><option value="fa-dropbox" data-icon="fa fa-dropbox">fa-dropbox</option><option value="fa-drupal" data-icon="fa fa-drupal">fa-drupal</option><option value="fa-edit" data-icon="fa fa-edit">fa-edit</option><option value="fa-eject" data-icon="fa fa-eject">fa-eject</option><option value="fa-ellipsis-h" data-icon="fa fa-ellipsis-h">fa-ellipsis-h</option><option value="fa-ellipsis-v" data-icon="fa fa-ellipsis-v">fa-ellipsis-v</option><option value="fa-empire" data-icon="fa fa-empire">fa-empire</option><option value="fa-envelope" data-icon="fa fa-envelope">fa-envelope</option><option value="fa-envelope-o" data-icon="fa fa-envelope-o">fa-envelope-o</option><option value="fa-envelope-square" data-icon="fa fa-envelope-square">fa-envelope-square</option><option value="fa-eraser" data-icon="fa fa-eraser">fa-eraser</option><option value="fa-eur" data-icon="fa fa-eur">fa-eur</option><option value="fa-euro" data-icon="fa fa-euro">fa-euro</option><option value="fa-exchange" data-icon="fa fa-exchange">fa-exchange</option><option value="fa-exclamation" data-icon="fa fa-exclamation">fa-exclamation</option><option value="fa-exclamation-circle" data-icon="fa fa-exclamation-circle">fa-exclamation-circle</option><option value="fa-exclamation-triangle" data-icon="fa fa-exclamation-triangle">fa-exclamation-triangle</option><option value="fa-expand" data-icon="fa fa-expand">fa-expand</option><option value="fa-external-link" data-icon="fa fa-external-link">fa-external-link</option><option value="fa-external-link-square" data-icon="fa fa-external-link-square">fa-external-link-square</option><option value="fa-eye" data-icon="fa fa-eye">fa-eye</option><option value="fa-eye-slash" data-icon="fa fa-eye-slash">fa-eye-slash</option><option value="fa-eyedropper" data-icon="fa fa-eyedropper">fa-eyedropper</option><option value="fa-facebook" data-icon="fa fa-facebook">fa-facebook</option><option value="fa-facebook-f" data-icon="fa fa-facebook-f">fa-facebook-f</option><option value="fa-facebook-official" data-icon="fa fa-facebook-official">fa-facebook-official</option><option value="fa-facebook-square" data-icon="fa fa-facebook-square">fa-facebook-square</option><option value="fa-fast-backward" data-icon="fa fa-fast-backward">fa-fast-backward</option><option value="fa-fast-forward" data-icon="fa fa-fast-forward">fa-fast-forward</option><option value="fa-fax" data-icon="fa fa-fax">fa-fax</option><option value="fa-female" data-icon="fa fa-female">fa-female</option><option value="fa-fighter-jet" data-icon="fa fa-fighter-jet">fa-fighter-jet</option><option value="fa-file" data-icon="fa fa-file">fa-file</option><option value="fa-file-archive-o" data-icon="fa fa-file-archive-o">fa-file-archive-o</option><option value="fa-file-audio-o" data-icon="fa fa-file-audio-o">fa-file-audio-o</option><option value="fa-file-code-o" data-icon="fa fa-file-code-o">fa-file-code-o</option><option value="fa-file-excel-o" data-icon="fa fa-file-excel-o">fa-file-excel-o</option><option value="fa-file-image-o" data-icon="fa fa-file-image-o">fa-file-image-o</option><option value="fa-file-movie-o" data-icon="fa fa-file-movie-o">fa-file-movie-o</option><option value="fa-file-o" data-icon="fa fa-file-o">fa-file-o</option><option value="fa-file-pdf-o" data-icon="fa fa-file-pdf-o">fa-file-pdf-o</option><option value="fa-file-photo-o" data-icon="fa fa-file-photo-o">fa-file-photo-o</option><option value="fa-file-picture-o" data-icon="fa fa-file-picture-o">fa-file-picture-o</option><option value="fa-file-powerpoint-o" data-icon="fa fa-file-powerpoint-o">fa-file-powerpoint-o</option><option value="fa-file-sound-o" data-icon="fa fa-file-sound-o">fa-file-sound-o</option><option value="fa-file-text" data-icon="fa fa-file-text">fa-file-text</option><option value="fa-file-text-o" data-icon="fa fa-file-text-o">fa-file-text-o</option><option value="fa-file-video-o" data-icon="fa fa-file-video-o">fa-file-video-o</option><option value="fa-file-word-o" data-icon="fa fa-file-word-o">fa-file-word-o</option><option value="fa-file-zip-o" data-icon="fa fa-file-zip-o">fa-file-zip-o</option><option value="fa-files-o" data-icon="fa fa-files-o">fa-files-o</option><option value="fa-film" data-icon="fa fa-film">fa-film</option><option value="fa-filter" data-icon="fa fa-filter">fa-filter</option><option value="fa-fire" data-icon="fa fa-fire">fa-fire</option><option value="fa-fire-extinguisher" data-icon="fa fa-fire-extinguisher">fa-fire-extinguisher</option><option value="fa-flag" data-icon="fa fa-flag">fa-flag</option><option value="fa-flag-checkered" data-icon="fa fa-flag-checkered">fa-flag-checkered</option><option value="fa-flag-o" data-icon="fa fa-flag-o">fa-flag-o</option><option value="fa-flash" data-icon="fa fa-flash">fa-flash</option><option value="fa-flask" data-icon="fa fa-flask">fa-flask</option><option value="fa-flickr" data-icon="fa fa-flickr">fa-flickr</option><option value="fa-floppy-o" data-icon="fa fa-floppy-o">fa-floppy-o</option><option value="fa-folder" data-icon="fa fa-folder">fa-folder</option><option value="fa-folder-o" data-icon="fa fa-folder-o">fa-folder-o</option><option value="fa-folder-open" data-icon="fa fa-folder-open">fa-folder-open</option><option value="fa-folder-open-o" data-icon="fa fa-folder-open-o">fa-folder-open-o</option><option value="fa-font" data-icon="fa fa-font">fa-font</option><option value="fa-forumbee" data-icon="fa fa-forumbee">fa-forumbee</option><option value="fa-forward" data-icon="fa fa-forward">fa-forward</option><option value="fa-foursquare" data-icon="fa fa-foursquare">fa-foursquare</option><option value="fa-frown-o" data-icon="fa fa-frown-o">fa-frown-o</option><option value="fa-futbol-o" data-icon="fa fa-futbol-o">fa-futbol-o</option><option value="fa-gamepad" data-icon="fa fa-gamepad">fa-gamepad</option><option value="fa-gavel" data-icon="fa fa-gavel">fa-gavel</option><option value="fa-gbp" data-icon="fa fa-gbp">fa-gbp</option><option value="fa-ge" data-icon="fa fa-ge">fa-ge</option><option value="fa-gear" data-icon="fa fa-gear">fa-gear</option><option value="fa-gears" data-icon="fa fa-gears">fa-gears</option><option value="fa-genderless" data-icon="fa fa-genderless">fa-genderless</option><option value="fa-gift" data-icon="fa fa-gift">fa-gift</option><option value="fa-git" data-icon="fa fa-git">fa-git</option><option value="fa-git-square" data-icon="fa fa-git-square">fa-git-square</option><option value="fa-github" data-icon="fa fa-github">fa-github</option><option value="fa-github-alt" data-icon="fa fa-github-alt">fa-github-alt</option><option value="fa-github-square" data-icon="fa fa-github-square">fa-github-square</option><option value="fa-gittip" data-icon="fa fa-gittip">fa-gittip</option><option value="fa-glass" data-icon="fa fa-glass">fa-glass</option><option value="fa-globe" data-icon="fa fa-globe">fa-globe</option><option value="fa-google" data-icon="fa fa-google">fa-google</option><option value="fa-google-plus" data-icon="fa fa-google-plus">fa-google-plus</option><option value="fa-google-plus-square" data-icon="fa fa-google-plus-square">fa-google-plus-square</option><option value="fa-google-wallet" data-icon="fa fa-google-wallet">fa-google-wallet</option><option value="fa-graduation-cap" data-icon="fa fa-graduation-cap">fa-graduation-cap</option><option value="fa-gratipay" data-icon="fa fa-gratipay">fa-gratipay</option><option value="fa-group" data-icon="fa fa-group">fa-group</option><option value="fa-h-square" data-icon="fa fa-h-square">fa-h-square</option><option value="fa-hacker-news" data-icon="fa fa-hacker-news">fa-hacker-news</option><option value="fa-hand-o-down" data-icon="fa fa-hand-o-down">fa-hand-o-down</option><option value="fa-hand-o-left" data-icon="fa fa-hand-o-left">fa-hand-o-left</option><option value="fa-hand-o-right" data-icon="fa fa-hand-o-right">fa-hand-o-right</option><option value="fa-hand-o-up" data-icon="fa fa-hand-o-up">fa-hand-o-up</option><option value="fa-hdd-o" data-icon="fa fa-hdd-o">fa-hdd-o</option><option value="fa-header" data-icon="fa fa-header">fa-header</option><option value="fa-headphones" data-icon="fa fa-headphones">fa-headphones</option><option value="fa-heart" data-icon="fa fa-heart">fa-heart</option><option value="fa-heart-o" data-icon="fa fa-heart-o">fa-heart-o</option><option value="fa-heartbeat" data-icon="fa fa-heartbeat">fa-heartbeat</option><option value="fa-history" data-icon="fa fa-history">fa-history</option><option value="fa-home" data-icon="fa fa-home">fa-home</option><option value="fa-hospital-o" data-icon="fa fa-hospital-o">fa-hospital-o</option><option value="fa-hotel" data-icon="fa fa-hotel">fa-hotel</option><option value="fa-html5" data-icon="fa fa-html5">fa-html5</option><option value="fa-ils" data-icon="fa fa-ils">fa-ils</option><option value="fa-image" data-icon="fa fa-image">fa-image</option><option value="fa-inbox" data-icon="fa fa-inbox">fa-inbox</option><option value="fa-indent" data-icon="fa fa-indent">fa-indent</option><option value="fa-info" data-icon="fa fa-info">fa-info</option><option value="fa-info-circle" data-icon="fa fa-info-circle">fa-info-circle</option><option value="fa-inr" data-icon="fa fa-inr">fa-inr</option><option value="fa-instagram" data-icon="fa fa-instagram">fa-instagram</option><option value="fa-institution" data-icon="fa fa-institution">fa-institution</option><option value="fa-ioxhost" data-icon="fa fa-ioxhost">fa-ioxhost</option><option value="fa-italic" data-icon="fa fa-italic">fa-italic</option><option value="fa-joomla" data-icon="fa fa-joomla">fa-joomla</option><option value="fa-jpy" data-icon="fa fa-jpy">fa-jpy</option><option value="fa-jsfiddle" data-icon="fa fa-jsfiddle">fa-jsfiddle</option><option value="fa-key" data-icon="fa fa-key">fa-key</option><option value="fa-keyboard-o" data-icon="fa fa-keyboard-o">fa-keyboard-o</option><option value="fa-krw" data-icon="fa fa-krw">fa-krw</option><option value="fa-language" data-icon="fa fa-language">fa-language</option><option value="fa-laptop" data-icon="fa fa-laptop">fa-laptop</option><option value="fa-lastfm" data-icon="fa fa-lastfm">fa-lastfm</option><option value="fa-lastfm-square" data-icon="fa fa-lastfm-square">fa-lastfm-square</option><option value="fa-leaf" data-icon="fa fa-leaf">fa-leaf</option><option value="fa-leanpub" data-icon="fa fa-leanpub">fa-leanpub</option><option value="fa-legal" data-icon="fa fa-legal">fa-legal</option><option value="fa-lemon-o" data-icon="fa fa-lemon-o">fa-lemon-o</option><option value="fa-level-down" data-icon="fa fa-level-down">fa-level-down</option><option value="fa-level-up" data-icon="fa fa-level-up">fa-level-up</option><option value="fa-life-bouy" data-icon="fa fa-life-bouy">fa-life-bouy</option><option value="fa-life-buoy" data-icon="fa fa-life-buoy">fa-life-buoy</option><option value="fa-life-ring" data-icon="fa fa-life-ring">fa-life-ring</option><option value="fa-life-saver" data-icon="fa fa-life-saver">fa-life-saver</option><option value="fa-lightbulb-o" data-icon="fa fa-lightbulb-o">fa-lightbulb-o</option><option value="fa-line-chart" data-icon="fa fa-line-chart">fa-line-chart</option><option value="fa-link" data-icon="fa fa-link">fa-link</option><option value="fa-linkedin" data-icon="fa fa-linkedin">fa-linkedin</option><option value="fa-linkedin-square" data-icon="fa fa-linkedin-square">fa-linkedin-square</option><option value="fa-linux" data-icon="fa fa-linux">fa-linux</option><option value="fa-list" data-icon="fa fa-list">fa-list</option><option value="fa-list-alt" data-icon="fa fa-list-alt">fa-list-alt</option><option value="fa-list-ol" data-icon="fa fa-list-ol">fa-list-ol</option><option value="fa-list-ul" data-icon="fa fa-list-ul">fa-list-ul</option><option value="fa-location-arrow" data-icon="fa fa-location-arrow">fa-location-arrow</option><option value="fa-lock" data-icon="fa fa-lock">fa-lock</option><option value="fa-long-arrow-down" data-icon="fa fa-long-arrow-down">fa-long-arrow-down</option><option value="fa-long-arrow-left" data-icon="fa fa-long-arrow-left">fa-long-arrow-left</option><option value="fa-long-arrow-right" data-icon="fa fa-long-arrow-right">fa-long-arrow-right</option><option value="fa-long-arrow-up" data-icon="fa fa-long-arrow-up">fa-long-arrow-up</option><option value="fa-magic" data-icon="fa fa-magic">fa-magic</option><option value="fa-magnet" data-icon="fa fa-magnet">fa-magnet</option><option value="fa-mail-forward" data-icon="fa fa-mail-forward">fa-mail-forward</option><option value="fa-mail-reply" data-icon="fa fa-mail-reply">fa-mail-reply</option><option value="fa-mail-reply-all" data-icon="fa fa-mail-reply-all">fa-mail-reply-all</option><option value="fa-male" data-icon="fa fa-male">fa-male</option><option value="fa-map-marker" data-icon="fa fa-map-marker">fa-map-marker</option><option value="fa-mars" data-icon="fa fa-mars">fa-mars</option><option value="fa-mars-double" data-icon="fa fa-mars-double">fa-mars-double</option><option value="fa-mars-stroke" data-icon="fa fa-mars-stroke">fa-mars-stroke</option><option value="fa-mars-stroke-h" data-icon="fa fa-mars-stroke-h">fa-mars-stroke-h</option><option value="fa-mars-stroke-v" data-icon="fa fa-mars-stroke-v">fa-mars-stroke-v</option><option value="fa-maxcdn" data-icon="fa fa-maxcdn">fa-maxcdn</option><option value="fa-meanpath" data-icon="fa fa-meanpath">fa-meanpath</option><option value="fa-medium" data-icon="fa fa-medium">fa-medium</option><option value="fa-medkit" data-icon="fa fa-medkit">fa-medkit</option><option value="fa-meh-o" data-icon="fa fa-meh-o">fa-meh-o</option><option value="fa-mercury" data-icon="fa fa-mercury">fa-mercury</option><option value="fa-microphone" data-icon="fa fa-microphone">fa-microphone</option><option value="fa-microphone-slash" data-icon="fa fa-microphone-slash">fa-microphone-slash</option><option value="fa-minus" data-icon="fa fa-minus">fa-minus</option><option value="fa-minus-circle" data-icon="fa fa-minus-circle">fa-minus-circle</option><option value="fa-minus-square" data-icon="fa fa-minus-square">fa-minus-square</option><option value="fa-minus-square-o" data-icon="fa fa-minus-square-o">fa-minus-square-o</option><option value="fa-mobile" data-icon="fa fa-mobile">fa-mobile</option><option value="fa-mobile-phone" data-icon="fa fa-mobile-phone">fa-mobile-phone</option><option value="fa-money" data-icon="fa fa-money">fa-money</option><option value="fa-moon-o" data-icon="fa fa-moon-o">fa-moon-o</option><option value="fa-mortar-board" data-icon="fa fa-mortar-board">fa-mortar-board</option><option value="fa-motorcycle" data-icon="fa fa-motorcycle">fa-motorcycle</option><option value="fa-music" data-icon="fa fa-music">fa-music</option><option value="fa-navicon" data-icon="fa fa-navicon">fa-navicon</option><option value="fa-neuter" data-icon="fa fa-neuter">fa-neuter</option><option value="fa-newspaper-o" data-icon="fa fa-newspaper-o">fa-newspaper-o</option><option value="fa-openid" data-icon="fa fa-openid">fa-openid</option><option value="fa-outdent" data-icon="fa fa-outdent">fa-outdent</option><option value="fa-pagelines" data-icon="fa fa-pagelines">fa-pagelines</option><option value="fa-paint-brush" data-icon="fa fa-paint-brush">fa-paint-brush</option><option value="fa-paper-plane" data-icon="fa fa-paper-plane">fa-paper-plane</option><option value="fa-paper-plane-o" data-icon="fa fa-paper-plane-o">fa-paper-plane-o</option><option value="fa-paperclip" data-icon="fa fa-paperclip">fa-paperclip</option><option value="fa-paragraph" data-icon="fa fa-paragraph">fa-paragraph</option><option value="fa-paste" data-icon="fa fa-paste">fa-paste</option><option value="fa-pause" data-icon="fa fa-pause">fa-pause</option><option value="fa-paw" data-icon="fa fa-paw">fa-paw</option><option value="fa-paypal" data-icon="fa fa-paypal">fa-paypal</option><option value="fa-pencil" data-icon="fa fa-pencil">fa-pencil</option><option value="fa-pencil-square" data-icon="fa fa-pencil-square">fa-pencil-square</option><option value="fa-pencil-square-o" data-icon="fa fa-pencil-square-o">fa-pencil-square-o</option><option value="fa-phone" data-icon="fa fa-phone">fa-phone</option><option value="fa-phone-square" data-icon="fa fa-phone-square">fa-phone-square</option><option value="fa-photo" data-icon="fa fa-photo">fa-photo</option><option value="fa-picture-o" data-icon="fa fa-picture-o">fa-picture-o</option><option value="fa-pie-chart" data-icon="fa fa-pie-chart">fa-pie-chart</option><option value="fa-pied-piper" data-icon="fa fa-pied-piper">fa-pied-piper</option><option value="fa-pied-piper-alt" data-icon="fa fa-pied-piper-alt">fa-pied-piper-alt</option><option value="fa-pinterest" data-icon="fa fa-pinterest">fa-pinterest</option><option value="fa-pinterest-p" data-icon="fa fa-pinterest-p">fa-pinterest-p</option><option value="fa-pinterest-square" data-icon="fa fa-pinterest-square">fa-pinterest-square</option><option value="fa-plane" data-icon="fa fa-plane">fa-plane</option><option value="fa-play" data-icon="fa fa-play">fa-play</option><option value="fa-play-circle" data-icon="fa fa-play-circle">fa-play-circle</option><option value="fa-play-circle-o" data-icon="fa fa-play-circle-o">fa-play-circle-o</option><option value="fa-plug" data-icon="fa fa-plug">fa-plug</option><option value="fa-plus" data-icon="fa fa-plus">fa-plus</option><option value="fa-plus-circle" data-icon="fa fa-plus-circle">fa-plus-circle</option><option value="fa-plus-square" data-icon="fa fa-plus-square">fa-plus-square</option><option value="fa-plus-square-o" data-icon="fa fa-plus-square-o">fa-plus-square-o</option><option value="fa-power-off" data-icon="fa fa-power-off">fa-power-off</option><option value="fa-print" data-icon="fa fa-print">fa-print</option><option value="fa-puzzle-piece" data-icon="fa fa-puzzle-piece">fa-puzzle-piece</option><option value="fa-qq" data-icon="fa fa-qq">fa-qq</option><option value="fa-qrcode" data-icon="fa fa-qrcode">fa-qrcode</option><option value="fa-question" data-icon="fa fa-question">fa-question</option><option value="fa-question-circle" data-icon="fa fa-question-circle">fa-question-circle</option><option value="fa-quote-left" data-icon="fa fa-quote-left">fa-quote-left</option><option value="fa-quote-right" data-icon="fa fa-quote-right">fa-quote-right</option><option value="fa-ra" data-icon="fa fa-ra">fa-ra</option><option value="fa-random" data-icon="fa fa-random">fa-random</option><option value="fa-rebel" data-icon="fa fa-rebel">fa-rebel</option><option value="fa-recycle" data-icon="fa fa-recycle">fa-recycle</option><option value="fa-reddit" data-icon="fa fa-reddit">fa-reddit</option><option value="fa-reddit-square" data-icon="fa fa-reddit-square">fa-reddit-square</option><option value="fa-refresh" data-icon="fa fa-refresh">fa-refresh</option><option value="fa-remove" data-icon="fa fa-remove">fa-remove</option><option value="fa-renren" data-icon="fa fa-renren">fa-renren</option><option value="fa-reorder" data-icon="fa fa-reorder">fa-reorder</option><option value="fa-repeat" data-icon="fa fa-repeat">fa-repeat</option><option value="fa-reply" data-icon="fa fa-reply">fa-reply</option><option value="fa-reply-all" data-icon="fa fa-reply-all">fa-reply-all</option><option value="fa-retweet" data-icon="fa fa-retweet">fa-retweet</option><option value="fa-rmb" data-icon="fa fa-rmb">fa-rmb</option><option value="fa-road" data-icon="fa fa-road">fa-road</option><option value="fa-rocket" data-icon="fa fa-rocket">fa-rocket</option><option value="fa-rotate-left" data-icon="fa fa-rotate-left">fa-rotate-left</option><option value="fa-rotate-right" data-icon="fa fa-rotate-right">fa-rotate-right</option><option value="fa-rouble" data-icon="fa fa-rouble">fa-rouble</option><option value="fa-rss" data-icon="fa fa-rss">fa-rss</option><option value="fa-rss-square" data-icon="fa fa-rss-square">fa-rss-square</option><option value="fa-rub" data-icon="fa fa-rub">fa-rub</option><option value="fa-ruble" data-icon="fa fa-ruble">fa-ruble</option><option value="fa-rupee" data-icon="fa fa-rupee">fa-rupee</option><option value="fa-save" data-icon="fa fa-save">fa-save</option><option value="fa-scissors" data-icon="fa fa-scissors">fa-scissors</option><option value="fa-search" data-icon="fa fa-search">fa-search</option><option value="fa-search-minus" data-icon="fa fa-search-minus">fa-search-minus</option><option value="fa-search-plus" data-icon="fa fa-search-plus">fa-search-plus</option><option value="fa-sellsy" data-icon="fa fa-sellsy">fa-sellsy</option><option value="fa-send" data-icon="fa fa-send">fa-send</option><option value="fa-send-o" data-icon="fa fa-send-o">fa-send-o</option><option value="fa-server" data-icon="fa fa-server">fa-server</option><option value="fa-share" data-icon="fa fa-share">fa-share</option><option value="fa-share-alt" data-icon="fa fa-share-alt">fa-share-alt</option><option value="fa-share-alt-square" data-icon="fa fa-share-alt-square">fa-share-alt-square</option><option value="fa-share-square" data-icon="fa fa-share-square">fa-share-square</option><option value="fa-share-square-o" data-icon="fa fa-share-square-o">fa-share-square-o</option><option value="fa-shekel" data-icon="fa fa-shekel">fa-shekel</option><option value="fa-sheqel" data-icon="fa fa-sheqel">fa-sheqel</option><option value="fa-shield" data-icon="fa fa-shield">fa-shield</option><option value="fa-ship" data-icon="fa fa-ship">fa-ship</option><option value="fa-shirtsinbulk" data-icon="fa fa-shirtsinbulk">fa-shirtsinbulk</option><option value="fa-shopping-cart" data-icon="fa fa-shopping-cart">fa-shopping-cart</option><option value="fa-sign-in" data-icon="fa fa-sign-in">fa-sign-in</option><option value="fa-sign-out" data-icon="fa fa-sign-out">fa-sign-out</option><option value="fa-signal" data-icon="fa fa-signal">fa-signal</option><option value="fa-simplybuilt" data-icon="fa fa-simplybuilt">fa-simplybuilt</option><option value="fa-sitemap" data-icon="fa fa-sitemap">fa-sitemap</option><option value="fa-skyatlas" data-icon="fa fa-skyatlas">fa-skyatlas</option><option value="fa-skype" data-icon="fa fa-skype">fa-skype</option><option value="fa-slack" data-icon="fa fa-slack">fa-slack</option><option value="fa-sliders" data-icon="fa fa-sliders">fa-sliders</option><option value="fa-slideshare" data-icon="fa fa-slideshare">fa-slideshare</option><option value="fa-smile-o" data-icon="fa fa-smile-o">fa-smile-o</option><option value="fa-soccer-ball-o" data-icon="fa fa-soccer-ball-o">fa-soccer-ball-o</option><option value="fa-sort" data-icon="fa fa-sort">fa-sort</option><option value="fa-sort-alpha-asc" data-icon="fa fa-sort-alpha-asc">fa-sort-alpha-asc</option><option value="fa-sort-alpha-desc" data-icon="fa fa-sort-alpha-desc">fa-sort-alpha-desc</option><option value="fa-sort-amount-asc" data-icon="fa fa-sort-amount-asc">fa-sort-amount-asc</option><option value="fa-sort-amount-desc" data-icon="fa fa-sort-amount-desc">fa-sort-amount-desc</option><option value="fa-sort-asc" data-icon="fa fa-sort-asc">fa-sort-asc</option><option value="fa-sort-desc" data-icon="fa fa-sort-desc">fa-sort-desc</option><option value="fa-sort-down" data-icon="fa fa-sort-down">fa-sort-down</option><option value="fa-sort-numeric-asc" data-icon="fa fa-sort-numeric-asc">fa-sort-numeric-asc</option><option value="fa-sort-numeric-desc" data-icon="fa fa-sort-numeric-desc">fa-sort-numeric-desc</option><option value="fa-sort-up" data-icon="fa fa-sort-up">fa-sort-up</option><option value="fa-soundcloud" data-icon="fa fa-soundcloud">fa-soundcloud</option><option value="fa-space-shuttle" data-icon="fa fa-space-shuttle">fa-space-shuttle</option><option value="fa-spinner" data-icon="fa fa-spinner">fa-spinner</option><option value="fa-spoon" data-icon="fa fa-spoon">fa-spoon</option><option value="fa-spotify" data-icon="fa fa-spotify">fa-spotify</option><option value="fa-square" data-icon="fa fa-square">fa-square</option><option value="fa-square-o" data-icon="fa fa-square-o">fa-square-o</option><option value="fa-stack-exchange" data-icon="fa fa-stack-exchange">fa-stack-exchange</option><option value="fa-stack-overflow" data-icon="fa fa-stack-overflow">fa-stack-overflow</option><option value="fa-star" data-icon="fa fa-star">fa-star</option><option value="fa-star-half" data-icon="fa fa-star-half">fa-star-half</option><option value="fa-star-half-empty" data-icon="fa fa-star-half-empty">fa-star-half-empty</option><option value="fa-star-half-full" data-icon="fa fa-star-half-full">fa-star-half-full</option><option value="fa-star-half-o" data-icon="fa fa-star-half-o">fa-star-half-o</option><option value="fa-star-o" data-icon="fa fa-star-o">fa-star-o</option><option value="fa-steam" data-icon="fa fa-steam">fa-steam</option><option value="fa-steam-square" data-icon="fa fa-steam-square">fa-steam-square</option><option value="fa-step-backward" data-icon="fa fa-step-backward">fa-step-backward</option><option value="fa-step-forward" data-icon="fa fa-step-forward">fa-step-forward</option><option value="fa-stethoscope" data-icon="fa fa-stethoscope">fa-stethoscope</option><option value="fa-stop" data-icon="fa fa-stop">fa-stop</option><option value="fa-street-view" data-icon="fa fa-street-view">fa-street-view</option><option value="fa-strikethrough" data-icon="fa fa-strikethrough">fa-strikethrough</option><option value="fa-stumbleupon" data-icon="fa fa-stumbleupon">fa-stumbleupon</option><option value="fa-stumbleupon-circle" data-icon="fa fa-stumbleupon-circle">fa-stumbleupon-circle</option><option value="fa-subscript" data-icon="fa fa-subscript">fa-subscript</option><option value="fa-subway" data-icon="fa fa-subway">fa-subway</option><option value="fa-suitcase" data-icon="fa fa-suitcase">fa-suitcase</option><option value="fa-sun-o" data-icon="fa fa-sun-o">fa-sun-o</option><option value="fa-superscript" data-icon="fa fa-superscript">fa-superscript</option><option value="fa-support" data-icon="fa fa-support">fa-support</option><option value="fa-table" data-icon="fa fa-table">fa-table</option><option value="fa-tablet" data-icon="fa fa-tablet">fa-tablet</option><option value="fa-tachometer" data-icon="fa fa-tachometer">fa-tachometer</option><option value="fa-tag" data-icon="fa fa-tag">fa-tag</option><option value="fa-tags" data-icon="fa fa-tags">fa-tags</option><option value="fa-tasks" data-icon="fa fa-tasks">fa-tasks</option><option value="fa-taxi" data-icon="fa fa-taxi">fa-taxi</option><option value="fa-tencent-weibo" data-icon="fa fa-tencent-weibo">fa-tencent-weibo</option><option value="fa-terminal" data-icon="fa fa-terminal">fa-terminal</option><option value="fa-text-height" data-icon="fa fa-text-height">fa-text-height</option><option value="fa-text-width" data-icon="fa fa-text-width">fa-text-width</option><option value="fa-th" data-icon="fa fa-th">fa-th</option><option value="fa-th-large" data-icon="fa fa-th-large">fa-th-large</option><option value="fa-th-list" data-icon="fa fa-th-list">fa-th-list</option><option value="fa-thumb-tack" data-icon="fa fa-thumb-tack">fa-thumb-tack</option><option value="fa-thumbs-down" data-icon="fa fa-thumbs-down">fa-thumbs-down</option><option value="fa-thumbs-o-down" data-icon="fa fa-thumbs-o-down">fa-thumbs-o-down</option><option value="fa-thumbs-o-up" data-icon="fa fa-thumbs-o-up">fa-thumbs-o-up</option><option value="fa-thumbs-up" data-icon="fa fa-thumbs-up">fa-thumbs-up</option><option value="fa-ticket" data-icon="fa fa-ticket">fa-ticket</option><option value="fa-times" data-icon="fa fa-times">fa-times</option><option value="fa-times-circle" data-icon="fa fa-times-circle">fa-times-circle</option><option value="fa-times-circle-o" data-icon="fa fa-times-circle-o">fa-times-circle-o</option><option value="fa-tint" data-icon="fa fa-tint">fa-tint</option><option value="fa-toggle-down" data-icon="fa fa-toggle-down">fa-toggle-down</option><option value="fa-toggle-left" data-icon="fa fa-toggle-left">fa-toggle-left</option><option value="fa-toggle-off" data-icon="fa fa-toggle-off">fa-toggle-off</option><option value="fa-toggle-on" data-icon="fa fa-toggle-on">fa-toggle-on</option><option value="fa-toggle-right" data-icon="fa fa-toggle-right">fa-toggle-right</option><option value="fa-toggle-up" data-icon="fa fa-toggle-up">fa-toggle-up</option><option value="fa-train" data-icon="fa fa-train">fa-train</option><option value="fa-transgender" data-icon="fa fa-transgender">fa-transgender</option><option value="fa-transgender-alt" data-icon="fa fa-transgender-alt">fa-transgender-alt</option><option value="fa-trash" data-icon="fa fa-trash">fa-trash</option><option value="fa-trash-o" data-icon="fa fa-trash-o">fa-trash-o</option><option value="fa-tree" data-icon="fa fa-tree">fa-tree</option><option value="fa-trello" data-icon="fa fa-trello">fa-trello</option><option value="fa-trophy" data-icon="fa fa-trophy">fa-trophy</option><option value="fa-truck" data-icon="fa fa-truck">fa-truck</option><option value="fa-try" data-icon="fa fa-try">fa-try</option><option value="fa-tty" data-icon="fa fa-tty">fa-tty</option><option value="fa-tumblr" data-icon="fa fa-tumblr">fa-tumblr</option><option value="fa-tumblr-square" data-icon="fa fa-tumblr-square">fa-tumblr-square</option><option value="fa-turkish-lira" data-icon="fa fa-turkish-lira">fa-turkish-lira</option><option value="fa-twitch" data-icon="fa fa-twitch">fa-twitch</option><option value="fa-twitter" data-icon="fa fa-twitter">fa-twitter</option><option value="fa-twitter-square" data-icon="fa fa-twitter-square">fa-twitter-square</option><option value="fa-umbrella" data-icon="fa fa-umbrella">fa-umbrella</option><option value="fa-underline" data-icon="fa fa-underline">fa-underline</option><option value="fa-undo" data-icon="fa fa-undo">fa-undo</option><option value="fa-university" data-icon="fa fa-university">fa-university</option><option value="fa-unlink" data-icon="fa fa-unlink">fa-unlink</option><option value="fa-unlock" data-icon="fa fa-unlock">fa-unlock</option><option value="fa-unlock-alt" data-icon="fa fa-unlock-alt">fa-unlock-alt</option><option value="fa-unsorted" data-icon="fa fa-unsorted">fa-unsorted</option><option value="fa-upload" data-icon="fa fa-upload">fa-upload</option><option value="fa-usd" data-icon="fa fa-usd">fa-usd</option><option value="fa-user" data-icon="fa fa-user">fa-user</option><option value="fa-user-md" data-icon="fa fa-user-md">fa-user-md</option><option value="fa-user-plus" data-icon="fa fa-user-plus">fa-user-plus</option><option value="fa-user-secret" data-icon="fa fa-user-secret">fa-user-secret</option><option value="fa-user-times" data-icon="fa fa-user-times">fa-user-times</option><option value="fa-users" data-icon="fa fa-users">fa-users</option><option value="fa-venus" data-icon="fa fa-venus">fa-venus</option><option value="fa-venus-double" data-icon="fa fa-venus-double">fa-venus-double</option><option value="fa-venus-mars" data-icon="fa fa-venus-mars">fa-venus-mars</option><option value="fa-viacoin" data-icon="fa fa-viacoin">fa-viacoin</option><option value="fa-video-camera" data-icon="fa fa-video-camera">fa-video-camera</option><option value="fa-vimeo-square" data-icon="fa fa-vimeo-square">fa-vimeo-square</option><option value="fa-vine" data-icon="fa fa-vine">fa-vine</option><option value="fa-vk" data-icon="fa fa-vk">fa-vk</option><option value="fa-volume-down" data-icon="fa fa-volume-down">fa-volume-down</option><option value="fa-volume-off" data-icon="fa fa-volume-off">fa-volume-off</option><option value="fa-volume-up" data-icon="fa fa-volume-up">fa-volume-up</option><option value="fa-warning" data-icon="fa fa-warning">fa-warning</option><option value="fa-wechat" data-icon="fa fa-wechat">fa-wechat</option><option value="fa-weibo" data-icon="fa fa-weibo">fa-weibo</option><option value="fa-weixin" data-icon="fa fa-weixin">fa-weixin</option><option value="fa-whatsapp" data-icon="fa fa-whatsapp">fa-whatsapp</option><option value="fa-wheelchair" data-icon="fa fa-wheelchair">fa-wheelchair</option><option value="fa-wifi" data-icon="fa fa-wifi">fa-wifi</option><option value="fa-windows" data-icon="fa fa-windows">fa-windows</option><option value="fa-won" data-icon="fa fa-won">fa-won</option><option value="fa-wordpress" data-icon="fa fa-wordpress">fa-wordpress</option><option value="fa-wrench" data-icon="fa fa-wrench">fa-wrench</option><option value="fa-xing" data-icon="fa fa-xing">fa-xing</option><option value="fa-xing-square" data-icon="fa fa-xing-square">fa-xing-square</option><option value="fa-yahoo" data-icon="fa fa-yahoo">fa-yahoo</option><option value="fa-yelp" data-icon="fa fa-yelp">fa-yelp</option><option value="fa-yen" data-icon="fa fa-yen">fa-yen</option><option value="fa-youtube" data-icon="fa fa-youtube">fa-youtube</option><option value="fa-youtube-play" data-icon="fa fa-youtube-play">fa-youtube-play</option><option value="fa-youtube-square" data-icon="fa fa-youtube-square">fa-youtube-square</option>'
};

},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
*  Dropzone module built to handel compliance calculator file uploads
*  allows files to be dragged to the page for uploading than sends the
*  processed return to an object on the page.
*
*   resources/assets/js/ui
 */
var InventoryDropzone = exports.InventoryDropzone = function () {

    var newDropzoneUpload = 'waiting for file...';
    var previewTemplate = '';
    var inventoryDropzoneTemplate = function inventoryDropzoneTemplate() {
        var previewNode = document.querySelector("#template");
        previewNode.id = "";
        previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);
    };

    var myDropzone = function myDropzone() {
        //console.log(this);
        console.log(Vue.Calculator);
        new Dropzone(document.body, { // Make the whole body a dropzone
            headers: { 'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value') },
            url: "/inventory/compliance/upload", // Set the url
            thumbnailWidth: 80,
            thumbnailHeight: 80,
            parallelUploads: 20,
            previewTemplate: previewTemplate,
            autoQueue: true,
            previewsContainer: "#dropzone-previews",
            newDropzoneUpload: 'waiting for file...',
            //clickable: ".fileinput-button" // Need to define
            init: function init() {
                this.on("addedfile", function (file) {
                    $.niftyNoty({
                        type: 'info',
                        container: 'page'
                    });
                    var newDownload = $('#dropzone-previews .file-row');
                    $('#page-alert').find('.media-body').replaceWith(newDownload);
                });

                this.on("success", function (file, response) {
                    $("#page-alert").find(".close").trigger("click");
                    var fileName = file.name;
                    console.log(Vue);
                    newDropzoneUpload = metrcCsv2Json(response, fileName);
                });

                // Update the total progress bar
                this.on("totaluploadprogress", function (progress) {
                    //document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
                });

                this.on("sending", function (file) {
                    // Show the total progress bar when upload starts
                    //document.querySelector("#total-progress").style.opacity = "1";
                    // And disable the start button
                    //file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
                });

                // Hide the total progress bar when nothing's uploading anymore
                this.on("queuecomplete", function (progress) {
                    //document.querySelector("#total-progress").style.opacity = "0";
                });

                // Setup the buttons for all transfers
                // The "add files" button doesn't need to be setup because the config
                // `clickable` has already been specified.
                /*document.querySelector("#actions .start").onclick = function() {
                 this.enqueueFiles(this.getFilesWithStatus(Dropzone.ADDED));
                 };
                 document.querySelector("#actions .cancel").onclick = function() {
                 this.removeAllFiles(true);
                 };*/
            }
        });
    };

    return {
        inventoryDropzoneTemplate: inventoryDropzoneTemplate,
        previewTemplate: previewTemplate,
        myDropzone: myDropzone,
        newDropzoneUpload: newDropzoneUpload
    };
}();

},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _truth = require('../../truth/truth.js');

var _truth2 = _interopRequireDefault(_truth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _menus = _truth2.default.menus;

exports.default = {
	getMenu: function getMenu(menuName, cb) {
		console.log(menuName, 'in ->api/vuex/menus.js');
		setTimeout(function () {
			cb(_menus[menuName]);
		}, 100);
	}
};

},{"../../truth/truth.js":71}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueResource2.default);

exports.default = new _vue2.default({
  methods: {
    save: function save(state) {
      this.$http.post('/api/state', { state: state }, function (data, status, request) {
        console.log("ui / vuex / persistance.js  >>>GOOD<<<<");
        //that.setCopy(data[1]);
      }).error(function (data, status, request) {
        console.log("Err in ui vuex persistance.js");
      }.bind(this));
    },
    get: function get() {
      this.$http.get('/api/state', function (data, status, request) {
        console.log("ui / vuex / persistance.js  >>>Retrieved<<<<");
        //onsole.log(data);
        return data;
      }).error(function (data, status, request) {
        console.log("Err in ui vuex persistance.js");
      }.bind(this));
    }
  }
});

},{"vue":49,"vue-resource":40}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getters = require('./vuex/getters.js');

var _actions = require('./vuex/actions.js');

var _store = require('./vuex/store');

var _store2 = _interopRequireDefault(_store);

var _router = require('./vue-router/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MEiApp',
  watchMode: true,
  data: function data() {
    return {
      names: 'MEi Aplic',
      id: 0,
      objectResource: this.$resource('/api/:objectType/:objectOptions'),
      apiResource: this.$resource('/api/:model/:id'),
      editMode: false,
      editAll: false,
      dataMode: false,
      baseView: 'front',
      viewTitle: 'Dashboard',
      //copy: this.copy,

      // mail form fields
      contactResource: this.$resource('api/mailForm'),
      registrationVisible: true,
      senderName: '',
      senderEmail: '',
      subject: '',
      message: '',

      // CurrentUser
      user: {
        username: 'UserName: in mei-app.js'
      },
      profile: {},
      customer_info: {},
      employee_info: {}
    };
  },


  store: _store2.default,

  vuex: {
    getters: {
      copy: function copy(_ref) {
        var copyText = _ref.copyText;
        return copyText.all;
      },
      company: _getters.getCompanyDetails,
      settings: _getters.getPublicSettings
    },
    actions: {
      setSetting: _actions.setSetting,
      toggleSetting: _actions.toggleSetting,
      setCopy: _actions.setCopy,
      setFeatures: _actions.setFeatures,
      setMenu: _actions.setMenu
    }
  },

  computed: {
    contactReady: function contactReady() {
      if (this.senderName != '' && this.senderEmail != '' && this.senderEmail.indexOf('@') > -0 && this.subject != '' && this.message != '') {
        this.setSetting('contactFormReady', true);
        return true;
      }
      this.setSetting('contactFormReady', false);
      return false;
    },
    userFields: function userFields() {
      this.user = window.mei.currentUser;
      //console.log(this.user)
      this.profile = this.user.profile;
      this.customer_info = this.user.customer_info;
      this.employee_info = this.user.employee_info;
    }
  },

  methods: {
    //objectMethods: require('./vue/control/objectMethods.js'),

    addNavButton: function addNavButton() {
      this.navPage.menuLayout.push({
        icon: "fa-user",
        href: "#1",
        label: "Inventory",
        class: "btn btn-active-success btn-default btn-dashboard",
        notification_text: "2",
        notification_style: "",
        notification_color: "primary"
      });
    },
    editButton: function editButton(obj) {
      var formId = obj.id;
      var saveIt = this.saveObject;
      var deleteIt = this.deleteObject;
      bootbox.dialog({
        className: 'modal-primary',
        title: 'Editor',
        message: "<div id='bootbox-modal'></div>",
        closeButton: false,
        animateIn: 'zoomIn',
        animateOut: 'zoomOut',
        buttons: {
          success: {
            label: "Save",
            className: "btn-primary",
            callback: function callback() {
              saveIt(obj.id);
              $('#object-' + obj.id + '-editing-form').appendTo('#' + obj.id + '-form-holder');
            }
          },
          close: {
            label: "Close",
            className: "btn-warning",
            callback: function callback() {
              $('#object-' + obj.id + '-editing-form').appendTo('#' + obj.id + '-form-holder');
            }
          },
          delete: {
            label: "Delete",
            className: "btn-danger",
            callback: function callback() {
              deleteIt(obj.id);
            }
          }
        }
      });
      $('#object-' + obj.id + '-editing-form').appendTo("#bootbox-modal");
      $('#selectpicker-' + obj.id).chosen();
      var currentIcon = obj.icon;
      $('#chosen-fa-icon-' + obj.id).addClass(currentIcon);
      $('#selectpicker-' + obj.id).on('change', function (evt, params) {
        //console.log(currentIcon, " - ", params.selected);
        $('#chosen-fa-icon-' + obj.id).removeClass(currentIcon);
        $('#chosen-fa-icon-' + obj.id).addClass(params.selected);
        currentIcon = params.selected;
      });
      obj.icon = currentIcon;
    },
    deleteObject: function deleteObject(id) {
      this.objectResource.delete({ objectType: 'interfaceObject', objectOptions: id }, { objectOptions: id }, function (data, status, request) {
        //handle success
      }).error(function (data, status, request) {
        //handle error
      });
    },
    saveObject: function saveObject(id) {
      var objectResource = this.objectResource;
      $('#object-' + id + '-editing-form').on('submit', function (e) {
        e.preventDefault();
        var objectData = $(this).serializeArray();
        objectResource.update({ objectType: "interfaceObjects", objectOptions: id }, { objectData: objectData }, function (data, status, request) {
          $.niftyNoty({ type: 'info', icon: 'fa fa-check', message: '<strong>Button Saved!</strong>.' + data, container: 'page', timer: 3000 });
        }).error(function (data, status, request) {
          console.log("Something went wrong with (mainnavbutton.js->addButton->objectArray.save) Error Stat = " + status + " here is the request = " + request);
        });
      }).submit();
    },
    contactForm: function contactForm(e) {
      e.preventDefault();
      var contact = {
        name: this.senderName,
        email: this.senderEmail,
        subject: this.subject,
        message: this.message
      };

      var form_status = $('<div class="form_status"></div>');
      $('#main-contact-form').prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());

      this.contactResource.save(contact, function (data) {
        swal('Thank you!', 'We will be in touch.', 'success');
      }).error(function (data, status, request) {
        form_status.html('<p class="text-danger">There was a problem sending your message please try an email or call</p>').delay(3000).fadeOut();
      });
    },


    /*
    * Called from buttons dispaches 
    * to function in child.button.created()
     */
    updateMenu: function updateMenu(button) {
      this.$broadcast('checkButton', button);
    },
    save: function save() {
      // console.log('loggedIn ?');
      // console.log(this.setSetting);
      // this.setSetting('loggedIn')
      // console.log('loggedIn ?');
      // console.log(this.setSetting.loggedIn);
      // this.editPage = true;
    },
    setTickets: function setTickets() {
      if (this.$route.path.indexOf('help-desk') > 0) {
        //this.setTickets(true);
        this.setSetting('helpDeskVisible', true);
      } else {
        //this.setTickets(false);
        this.setSetting('helpDeskVisible', false);
      }
    },
    toggleAside: function toggleAside() {
      this.toggleSetting('asideOpen');
    },
    togglePrimary: function togglePrimary() {
      this.toggleSetting('primaryOpen');
    },
    login: function login(e) {
      if (this.settings.loggedIn) {
        this.toggleSetting('loggedIn');
        this.toggleSetting('editMode');
      } else {
        e.preventDefault();
        var that = this;
        swal({
          title: "password please",
          text: "-- -- -- -- -- -- -- -- --",
          type: "input",
          inputType: "password",
          showCancelButton: true,
          closeOnConfirm: false,
          animation: "zoom-in",
          inputPlaceholder: "- - - -" }, function (inputValue) {
          if (inputValue === false) return false;
          if (inputValue === "") {
            swal.showInputError("Enter a password!");
            return false;
          };
          if (inputValue === "im ok") {
            console.log('Password Correct');
            that.toggleSetting('loggedIn');
            that.toggleSetting('editMode');
            //Login Success handler
            swal({
              title: "Logged In",
              closeOnConfirm: false,
              showCancelButton: true,
              confirmButtonText: 'Go to Admin Panel',
              cancelButtonText: 'Edit Page',
              type: 'success'
            }, function (isConfirmed) {
              if (isConfirmed) {
                window.location.replace('modelAdmin');
              }
            }); //End Login Success handler
          };
        }); // End admin button sweet alert
      } // End Else
    },
    // End adminlogin
    loadMenus: function loadMenus() {
      var that = this;
      this.objectResource.get({ objectType: "interfaceObjects", objectOptions: "navpage.DashboardMenu" }, function (menu, status, request) {
        console.log("%cloadMenus() menu data fetched in Truth", this.settings.logGood);
        that.setMenu('DashboardMenu', menu);
      }).error(function (data, status, request) {
        console.log("%c loadMenus() Errrrrr in Truth", this.$root.logErr);
      });
      this.objectResource.get({ objectType: "interfaceObjects", objectOptions: "navigation.adminPrimary" }, function (menu, status, request) {
        console.log("%cloadMenus() menu data fetched in Truth", this.settings.logGood);
        that.setMenu('adminPrimary', menu);
        if (that.base_view == 'dashboard') {
          nifty.mainNav.unbindSmallNav();
        };
      }).error(function (data, status, request) {
        console.log("%c loadMenus() Errrrrr in Truth", this.$root.logErr);
      });
    },
    loadCopy: function loadCopy() {
      var that = this;
      this.$http.get('/api/copyText', function (data, status, request) {
        console.log("%c loadCopy() in mei-app.js", that.$root.settings.logGood);
        that.setCopy(data[1]);
      }).error(function (data, status, request) {
        console.log("%c loadCopy() Err in mei-app.js", that.$root.settings.logErr);
      });
    },
    loadFeatures: function loadFeatures() {
      var that = this;
      this.$http.get('/api/feature', function (data, status, request) {
        console.log("%c loadFeatures() in mei-app.js", that.$root.settings.logGood);
        that.setFeatures(data[1]);
      }).error(function (data, status, request) {
        console.log("%c loadFeatures() Err in mei-app.js", that.$root.settings.logErr);
      });
    }
  },
  components: {
    'tickets': {
      name: "TicketContainer",
      template: $('tickets-container')
    }
  },
  ready: function ready() {
    this.loadMenus();
    this.loadCopy();
    this.loadFeatures();

    var socket = io.connect('http://192.168.10.10:3000');

    socket.on('newMessage', function () {
      //socket.emit('bang', this.user)
    }).on('message-channel:thisHappened', function (message) {
      console.log(message);
      socket.emit('bang', this.user);
    }.bind(this));
    // .on('bang', function(message){
    //   console.log(message)
    // })

    this.setTickets();
    //this.copyObject = this.routePrefix[this.instanceNumber]
    this.$watch('settings', function () {}, { deep: true });

    this.$watch('$route.path', function (route) {
      // console.log('route in mei-app/ready()')
      // console.log(route)
      this.setTickets();
    }, { deep: true });

    // socket.on('message-channel:thisHappened', function(message){
    //   console.log(message)
    // }.bind(this))
  }
};

},{"./vue-router/router":73,"./vuex/actions.js":123,"./vuex/getters.js":124,"./vuex/store":130}],59:[function(require,module,exports){
'use strict';

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueTouch = require('vue-touch');

var _vueTouch2 = _interopRequireDefault(_vueTouch);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _SettingsWatcher = require('./vue/mixins/SettingsWatcher.js');

var _SettingsWatcher2 = _interopRequireDefault(_SettingsWatcher);

var _VisibilityMode = require('./vue/filters/VisibilityMode.js');

var _VisibilityMode2 = _interopRequireDefault(_VisibilityMode);

var _Currency = require('./vue/filters/Currency.js');

var _Currency2 = _interopRequireDefault(_Currency);

var _HooksMixin = require('./vue/mixins/HooksMixin.js');

var _HooksMixin2 = _interopRequireDefault(_HooksMixin);

var _MainMenu = require('./vue/components/navigation/materialTheme/MainMenu.vue');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _MenuButton = require('./vue/components/navigation/materialTheme/MenuButton.vue');

var _MenuButton2 = _interopRequireDefault(_MenuButton);

var _SubMenuButton = require('./vue/components/navigation/materialTheme/SubMenuButton.vue');

var _SubMenuButton2 = _interopRequireDefault(_SubMenuButton);

var _BrandBox = require('./vue/partials/BrandBox.vue');

var _BrandBox2 = _interopRequireDefault(_BrandBox);

var _BlueHero = require('./vue/partials/BlueHero.vue');

var _BlueHero2 = _interopRequireDefault(_BlueHero);

var _AnimatedWords = require('./vue/components/animate/AnimatedWords.vue');

var _AnimatedWords2 = _interopRequireDefault(_AnimatedWords);

var _IntroFlyAway = require('./vue/components/animate/IntroFlyAway.vue');

var _IntroFlyAway2 = _interopRequireDefault(_IntroFlyAway);

var _MeiAdminLogin = require('./vue/components/auth/MeiAdminLogin.vue');

var _MeiAdminLogin2 = _interopRequireDefault(_MeiAdminLogin);

var _TicketsIt = require('./vue/components/pages/TicketsIt.vue');

var _TicketsIt2 = _interopRequireDefault(_TicketsIt);

var _EditableCopy = require('./vue/components/controllers/EditableCopy.vue');

var _EditableCopy2 = _interopRequireDefault(_EditableCopy);

var _SearchBox = require('./vue/components/controllers/SearchBox.vue');

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _iPad3DMenu = require('./vue/components/animate/iPad3DMenu.vue');

var _iPad3DMenu2 = _interopRequireDefault(_iPad3DMenu);

var _MainNav = require('./vue/components/navigation/nifty/MainNav.vue');

var _MainNav2 = _interopRequireDefault(_MainNav);

var _MainNavButton = require('./vue/components/navigation/nifty/MainNavButton.vue');

var _MainNavButton2 = _interopRequireDefault(_MainNavButton);

var _ShortcutButtons = require('./vue/components/navigation/nifty/ShortcutButtons.vue');

var _ShortcutButtons2 = _interopRequireDefault(_ShortcutButtons);

var _MenuWidget = require('./vue/components/navigation/nifty/MenuWidget.vue');

var _MenuWidget2 = _interopRequireDefault(_MenuWidget);

var _ObjectEditor = require('./vue/components/controllers/ObjectEditor.vue');

var _ObjectEditor2 = _interopRequireDefault(_ObjectEditor);

var _ContactList = require('./vue/components/converse/ContactList.vue');

var _ContactList2 = _interopRequireDefault(_ContactList);

var _AsideSettings = require('./vue/components/settings/AsideSettings.vue');

var _AsideSettings2 = _interopRequireDefault(_AsideSettings);

var _NavPageButton = require('./vue/components/navigation/NavPageButton.vue');

var _NavPageButton2 = _interopRequireDefault(_NavPageButton);

var _vuexRouterSync = require('vuex-router-sync');

var _store = require('./vuex/store');

var _store2 = _interopRequireDefault(_store);

var _routerConfig = require('./vue-router/router-config');

var _meiApp = require('./mei-app.js');

var _meiApp2 = _interopRequireDefault(_meiApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueTouch2.default);

_vue2.default.mixin(_SettingsWatcher2.default);

_vue2.default.filter('visibilityMode', _VisibilityMode2.default);

_vue2.default.filter('currencyDisplay', _Currency2.default);

_vue2.default.mixin(_HooksMixin2.default);

// enable @keyup.s
_vue2.default.directive('on').keyCodes.s = 83;

// REQUESTS HEADER
_vue2.default.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

_vue2.default.component('mainMenu', _MainMenu2.default);

_vue2.default.component('menuButton', _MenuButton2.default);

_vue2.default.component('subMenuButton', _SubMenuButton2.default);

_vue2.default.component('brandBox', _BrandBox2.default);

_vue2.default.component('blueHero', _BlueHero2.default);

_vue2.default.component('animatedWords', _AnimatedWords2.default);

_vue2.default.component('introFlyAway', _IntroFlyAway2.default);

_vue2.default.component('meiAdminLogin', _MeiAdminLogin2.default);

_vue2.default.component('ticketsIt', _TicketsIt2.default);

// import DatesBox from './vue/components/events/DatesBox.vue';
// Vue.component('dates_box', DatesBox)
// import EventPage from './vue/components/events/EventPage.vue';
// Vue.component('event_page', EventPage)
// import EventTickets from './vue/components/events/EventTickets.vue';
// Vue.component('event_tickets', EventTickets)
// import FloorPlans from './vue/components/events/FloorPlans.vue';
// Vue.component('floorplans', FloorPlans)
// import EventFullDetailTabs from './vue/components/events/EventFullDetailTabs.vue';
// Vue.component('event_full_detail_tabs', EventFullDetailTabs)
// import EventFullDetails from './vue/components/events/EventFullDetails.vue';
// Vue.component('event_full_details', EventFullDetails)
// import ForwordBackwordLinks from './vue/components/events/ForwordBackwordLinks.vue';
// Vue.component('forword_backword_links', ForwordBackwordLinks)
// import GalleryImage from './vue/components/image/GalleryImage.vue';
// Vue.component('gallery_image', GalleryImage)

// import MapBox from './vue/components/controllers/MapBox.vue';
// Vue.component('map_box', MapBox)

_vue2.default.component('editableCopy', _EditableCopy2.default);

_vue2.default.component('SearchBox', _SearchBox2.default);

// import AddressForm from './vue/components/form/AddressForm.vue';
// Vue.component('address_form', AddressForm)
// import ContactsForm from './vue/components/form/ContactsForm.vue';
// Vue.component('contacts_form', ContactsForm)
// import OptionsForm from './vue/components/form/OptionsForm.vue';
// Vue.component('options_form', OptionsForm)
// import Registration from './vue/components/form/Registration.vue';
// Vue.component('registration', Registration)
// import RegistrationCities from './vue/components/form/RegistrationCities.vue';
// Vue.component('registration_cities', RegistrationCities)

// import RollOverTextBtn from './vue/components/animate/RollOverTextBtn.vue';
// Vue.component('rollovertextbtn', RollOverTextBtn)
// import Submission from './vue/components/form/PostSubmission.vue';
// Vue.component('submission', Submission)
// import Content from './vue/components/news/NewsFeed.vue';
// Vue.component('content', Content)
// import Single from './vue/components/news/Single.vue';

_vue2.default.component('ipadMenu', _iPad3DMenu2.default);

// Vue.component('single', Single)
// import Disqus from './vue/components/converse/Disqus.vue';
// Vue.component('disqus', Disqus)
// import Login from './vue/components/form/Login.vue';
// Vue.component('login', Login)

// import Post from './vue/components/news/Post.vue';
// Vue.component('post', Post)

// import CurrencyDisplay from './vue/filters/Currency.js';
// Vue.filter('currencyDisplay', CurrencyDisplay)

_vue2.default.component('MainNav', _MainNav2.default);

_vue2.default.component('MainNavButton', _MainNavButton2.default);

_vue2.default.component('shortcutbuttons', _ShortcutButtons2.default);

_vue2.default.component('menuwidget', _MenuWidget2.default);

// import NavPage from './vue/components/navigation/NavPage.vue'
// Vue.component('home', NavPage );

_vue2.default.component('objecteditor', _ObjectEditor2.default);

_vue2.default.component('ContactList', _ContactList2.default);

_vue2.default.component('AsideSettings', _AsideSettings2.default);

// import Project from './vue/components/projector/Project.vue'
// Vue.component('project', Project )

// import Tasks from './vue/components/projector/Tasks.vue'
// Vue.component('tasks', Tasks )

// import Task from './vue/components/projector/Task.vue'
// Vue.component('task', Task )

// import Conversations from './vue/components/Converse/Conversations.vue';
// Vue.component('conversations', Conversations )

// import Conversation from './vue/components/converse/Conversation.vue';
// Vue.component('conversation', Conversation )

// import NewsConversation from './vue/components/converse/NewsConversation.vue';
// Vue.component('newsconversation', NewsConversation )

// import SingleConversation from './vue/components/converse/SingleConversation.vue';
// Vue.component('singleconversation', SingleConversation )

// import Message from './vue/components/converse/Message.vue';
// Vue.component('message', Message )

// import VisibilitySwitch from './vue/components/controllers/VisibilitySwitch.vue';
// Vue.component('visibilityswitch',  VisibilitySwitch )

_vue2.default.component('NavPageButton', _NavPageButton2.default);

//


// Root Componant
var MEi = _vue2.default.extend(_meiApp2.default);

// create router
var router = new _vueRouter2.default({
  hashbang: false,
  history: true,
  linkActiveClass: 'active-link',
  saveScrollPosition: true
});

// configure router
(0, _routerConfig.configRouter)(router);
(0, _vuexRouterSync.sync)(_store2.default, router);

router.start(MEi, 'body');

// TODO FIND A BETTER HOME FOR THIS
var $head = $('#ha-header');
$('.ha-waypoint').each(function (i) {
  var $el = $(this),
      animClassDown = $el.data('animateDown'),
      animClassUp = $el.data('animateUp');

  $el.waypoint(function (direction) {
    if (direction === 'down' && animClassDown) {
      $head.attr('class', 'ha-header ' + animClassDown);
    } else if (direction === 'up' && animClassUp) {
      $head.attr('class', 'ha-header ' + animClassUp);
    }
  }, { offset: '100%' });
});

// BP TOGGLE SWITCHES
// =================================================================
// Require Admin Core Javascript
// Require Switchery
// =================================================================

var switchOptions = {
  //size: 'small',
  color: '#C927D7',
  secondaryColor: '#15A2EB'
};

//jackColor: '#000',
var switchElems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
switchElems.forEach(function (html) {
  var switchery = new Switchery(html, switchOptions);
});
// TODO: This needs to implement anaming system of sorts
// switcher.onchange = function() {};

},{"./mei-app.js":58,"./vue-router/router-config":72,"./vue/components/animate/AnimatedWords.vue":74,"./vue/components/animate/IntroFlyAway.vue":75,"./vue/components/animate/iPad3DMenu.vue":76,"./vue/components/auth/MeiAdminLogin.vue":77,"./vue/components/controllers/EditableCopy.vue":79,"./vue/components/controllers/ObjectEditor.vue":80,"./vue/components/controllers/SearchBox.vue":81,"./vue/components/converse/ContactList.vue":86,"./vue/components/navigation/NavPageButton.vue":97,"./vue/components/navigation/materialTheme/MainMenu.vue":99,"./vue/components/navigation/materialTheme/MenuButton.vue":100,"./vue/components/navigation/materialTheme/SubMenuButton.vue":101,"./vue/components/navigation/nifty/MainNav.vue":102,"./vue/components/navigation/nifty/MainNavButton.vue":103,"./vue/components/navigation/nifty/MenuWidget.vue":104,"./vue/components/navigation/nifty/ShortcutButtons.vue":105,"./vue/components/pages/TicketsIt.vue":107,"./vue/components/settings/AsideSettings.vue":115,"./vue/filters/Currency.js":117,"./vue/filters/VisibilityMode.js":118,"./vue/mixins/HooksMixin.js":119,"./vue/mixins/SettingsWatcher.js":120,"./vue/partials/BlueHero.vue":121,"./vue/partials/BrandBox.vue":122,"./vuex/store":130,"vue":49,"vue-resource":40,"vue-router":47,"vue-touch":48,"vuex-router-sync":51}],60:[function(require,module,exports){
'use strict';

// Setting for the main menu
module.exports = [{
	id: 0,
	menu_name: 'primary',
	active: false,
	label: 'Home',
	url: '/home',
	sub: [{
		id: 14,
		active: false,
		label: 'About TOTO',
		url: '/about'
	}, {
		id: 15,
		active: false,
		label: 'News',
		url: '/news'
	}, {
		id: 16,
		active: false,
		label: 'Contact',
		url: '/shout'
	}]
}, {
	id: 1,
	menu_name: 'primary',
	active: false,
	label: 'Events',
	url: '/events',
	sub: [{
		id: 5,
		active: false,
		label: 'Deer Pile',
		url: 'deer-pile'
	}, {
		id: 6,
		active: false,
		label: 'Mercury Cafe',
		url: 'mercury-cafe'
	}]
}, {
	id: 2,
	menu_name: 'primary',
	active: false,
	label: 'Particapate',
	url: '/particapate',
	sub: [{
		id: 7,
		active: false,
		label: 'Meet Up Details',
		url: 'meetup'
	}, {
		id: 8,
		active: false,
		label: 'Donate',
		url: 'donations'
	}]
}, {
	id: 3,
	menu_name: 'primary',
	active: false,
	label: 'Communication',
	url: '/comunication',
	sub: [{
		id: 9,
		active: false,
		label: 'Shout To Us',
		url: 'shout'
	}, {
		id: 10,
		active: false,
		label: 'Group Conversations',
		url: 'conversations'
	}]
}, {
	id: 4,
	menu_name: 'primary',
	active: false,
	label: 'Group Assets',
	url: '/group-assets',
	sub: [{
		id: 11,
		active: false,
		label: 'Glossery',
		url: 'glossery'
	}, {
		id: 12,
		active: false,
		label: 'Theater Games',
		url: '/theater-games'
	}, {
		id: 13,
		active: false,
		label: 'Media Gallery',
		url: '/media-gallery'
	}]
}];

},{}],61:[function(require,module,exports){
"use strict";

// Static Settings for Brand Identity
module.exports = {
	name: '20-20 Investing',
	addresses: [{
		label: "Main Office",
		type: "Office",
		active: false,
		street: "123 Anywhere Drive",
		unit: "#456",
		city: "Dust City",
		state: "Mainaware",
		zip: "87654"
	}],
	contacts: {
		phones: [{
			label: "Office",
			type: "landLine",
			active: false,
			number: "123-456-7890",
			ext: ""
		}, {
			label: "Message",
			type: "tech",
			active: false,
			number: "123-453-7890",
			ext: ""
		}, {
			label: "Fax",
			type: "fax",
			active: false,
			number: "123-456-7890",
			ext: ""
		}],
		emails: [{
			label: "General Inqueries",
			type: "main",
			active: true,
			emailAddress: "contactus@20-20investing.com",
			user_id: ""
		}, {
			label: "Tech Support",
			type: "I.T.",
			active: false,
			emailAddress: "us@here.com",
			user_id: ""
		}]
	},
	branding: {
		name: "20-20 Investment",
		tagLine: "Your key to financial success in the medical market!",
		smallLogo: 'apple-icon-72x72.png',
		largeLogo: 'ms-icon-310x310.png'
	}
};

},{}],62:[function(require,module,exports){
"use strict";

// Static dummy conversation data

module.exports = [{
	title: "title",
	body: "Body Body",
	photo: "/images/logos/logo.png"
}, {
	title: "title",
	body: "Body Body",
	photo: "/images/logos/logo.png"
}, {
	title: "title",
	body: "Body Body",
	photo: "/images/logos/logo.png"
}];

},{}],63:[function(require,module,exports){
'use strict';

module.exports = {
  // These two are for saving method
  front: {
    BrandBox_0: [{
      copy: '20-20 INVESTMENTS',
      versionList: '{0:1}',
      version: 0,
      height: 1,
      parent_name: 'BrandBox_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: '',
      versionList: '{0:1}',
      version: 0,
      height: 1,
      parent_name: 'BrandBox_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }],
    MEiApp_0: [{
      copy: 'Welcome to the Internets',
      versionList: '{0:0}',
      version: 0,
      height: 1,
      parent_name: 'MEiApp_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: 'Please enjoy these details',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'MEiApp_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }, {
      copy: '',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'MEiApp_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 2
    }, {
      copy: '',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'MEiApp_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 3
    }, {
      copy: '',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'MEiApp_0',
      parent_id: 0,
      base_view: 'front',
      instance_number: 4
    }],
    BlueHero_1: [{
      copy: 'Hero Header #1',
      versionList: '{0:0}',
      version: 0,
      height: 1,
      parent_name: 'BlueHero_1',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: 'Hero Sub Title #1',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'BlueHero_1',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }],
    BlueHero_2: [{
      copy: 'Hero Header #2',
      versionList: '{0:0}',
      version: 0,
      height: 1,
      parent_name: 'BlueHero_2',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: 'Hero Sub Title #2',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'BlueHero_2',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }],
    BlueHero_3: [{
      copy: 'Hero Header #3',
      versionList: '{0:0}',
      version: 0,
      height: 1,
      parent_name: 'BlueHero_3',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: 'Hero Sub Title #3',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'BlueHero_3',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }],
    BlueHero_4: [{
      copy: 'Hero Header #4',
      versionList: '{0:0}',
      version: 0,
      height: 1,
      parent_name: 'BlueHero_4',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: 'Hero Sub Title #4',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'BlueHero_4',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }],
    BlueHero_5: [{
      copy: 'Hero Header #5',
      versionList: '{0:0}',
      version: 0,
      height: 1,
      parent_name: 'BlueHero_5',
      parent_id: 0,
      base_view: 'front',
      instance_number: 0
    }, {
      copy: 'Hero Sub Title #5',
      versionList: '{0:1}',
      version: 0,
      height: 2,
      parent_name: 'BlueHero_5',
      parent_id: 0,
      base_view: 'front',
      instance_number: 1
    }]
  },
  dash: {}

};

},{}],64:[function(require,module,exports){
'use strict';

module.exports = [{
    name: 'Des Moines Spring 2016',
    city: 'Des Moines',
    state: 'Idaho',
    details: "Sky's not the limit, it's only the beginning at the Des Moines, IA Home and Gadget Expo! <br />Our convention focuses on bringing you unique house hold products as well as cutting edge technologies... So you can forget about keeping up with the Jonses, this expo will have you light years ahead of the Jonses!  Don’t forget to check out our kids section featuring free face paintings, engaging activities and games! Stage presentations by local and national experts will be featured all 3 days and will both entertain and amaze you… <br />We hope to see you there!",
    season: 'Spring ',
    date: '2000-11-11',
    venue: 'Iowa Events Center ',
    street: '730 3rd St.',
    zip: '50309',
    features: '0',
    selected: false,
    dates: []
}, {
    name: 'Greeley Spring 2016',
    city: 'Greeley',
    state: 'Colorado',
    details: "The Home and Gadget Expo in Greeley, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />From home renovation ideas and amazing innovative tools to help maximize the use of your space, all the way to the latest and greatest in cutting- edge technology, our show has something for everyone… Bring the kiddos along and see what fun they can get into at our KIDS section featuring engaging activities, FREE face painting and games! Stage presentations by local Greely and national experts will be featured all 3 days and will both entertain and amaze you… <br />We hope to see you there!",
    season: 'Spring',
    date: '2000-11-11',
    venue: 'Iowa Events Center ',
    street: '730 3rd St.',
    zip: '50309',
    featureOne: '0',
    selected: false,
    eventBright: 'http://www.eventbrite.com/e/colorado-springs-home-gadget-expo-tickets-21242014437?aff=SiteCOS',
    tickets: ['Adults(13+) $5', 'Children Free', '(Friday Show) Senors FREE!', '(Friday Show) Military FREE!'],
    parking: 'Plenty of free parking will be available!',
    vendor: [{
        label: 'Regular Vendors',
        details: ['Inline $750', 'Corner $850']
    }, {
        label: 'Craft Vendors',
        details: ['Inline $500', 'Corner $600']
    }, {
        label: 'Discounts',
        details: ['Early Bird Discount is 5% through June 1, 2016', 'Pre-Pay Discount is 5% though June 1, 2016', 'Multi-Booth Discount is 5%']
    }, {
        label: 'Other Details',
        details: ['Electric $75 (that is paid directly to National Western Complex)']
    }],
    dates: []
}, {
    name: 'Colorado Springs Spring 2016',
    city: 'Colorado Springs',
    state: 'Colorado',
    details: "The Home and Gadget Expo in Colorado Springs, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our amazing vendors will be bringing you everything from home renovation ideas and tools you never knew existed to make your life easier, all the way to the latest and greatest in cutting- edge technology; our show has something for everyone… We are super excited to feature a KIDS section featuring engaging activities and games! Stage presentations by local and national experts will be featured all 3 days and will both entertain and amaze you… <br />We can’t wait to see you there!",
    season: 'Spring',
    date: '1234-12-11',
    venue: 'Iowa Events Center ',
    street: '730 3rd St.',
    zip: '50309',
    featureOne: '0',
    selected: false,
    dates: []
}, {
    name: 'Denver Spring 2016',
    city: 'Denver',
    state: 'Colorado',
    details: 'The Home and Gadget Expo in Denver, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our top of the line vendors will be bringing you everything from home renovation ideas and amazing innovative tools to help maximize the use of your space, all the way to the latest and greatest in cutting- edge technology; our show has something for everyone… We even have a KIDS section featuring engaging activities and games! Stage presentations by local and national experts will be featured all 3 days and will both entertain and amaze you… <br />We are excited to see you there!',
    season: 'Spring',
    date: '2000-11-11',
    venue: 'Iowa Events Center ',
    street: '730 3rd St.',
    zip: '50309',
    featureOne: '0',
    dates: []
}, {
    name: 'Holiday Show Winter 2016',
    city: 'Denver',
    state: 'Colorado',
    details: 'The Home and Gadget Expo in Denver, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our top of the line vendors will be bringing you everything from home renovation ideas and amazing innovative tools to help maximize the use of your space, all the way to the latest and greatest in cutting- edge technology; our show has something for everyone… We even have a KIDS section featuring engaging activities and games! Stage presentations by local and national experts will be featured all 3 days and will both entertain and amaze you… <br />We are excited to see you there!',
    season: 'Winter',
    date: '2000-11-11',
    venue: 'Iowa Events Center ',
    street: '730 3rd St.',
    zip: '50309',
    featureOne: '0',
    selected: false,
    dates: []
}];

},{}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	sections: [{
		title: 'Welcome',
		image: 'ipad-screen-twenty.png',
		link: '#',
		icon: 'link',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}, {
		title: "Company's",
		image: 'ipad-screen-twenty.png',
		link: '#',
		icon: 'link',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}, {
		title: 'Ailments',
		image: 'ipad-screen-twenty.png',
		link: '#',
		icon: 'link',
		content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}, {
		title: 'Company content',
		image: 'ipad-screen-twenty.png',
		link: '#',
		icon: 'link',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}, {
		title: 'Company Details 2',
		image: 'ipad-screen-twenty.png',
		link: '#',
		icon: 'link',
		content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}]
};

},{}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	categories: ['these', 'those', 'thems'],
	collection: [{
		title: 'one',
		description: 'asdasf sdf da ',
		url: '../news/02.jpg',
		link: "#",
		alt: 'here is info',
		categories: 'those',
		tags: []
	}, {
		title: 'onee',
		description: 'gdagad gda g',
		url: '../news/02.jpg',
		link: "#",
		alt: 'yay alt tags',
		categories: 'thems',
		tags: []
	}, {
		title: 'oneee',
		description: 'a dga dfg',
		url: '../news/02.jpg',
		link: "#",
		alt: 'goo for the net',
		categories: 'thems these',
		tags: []
	}, {
		title: 'oneefffe',
		description: 'a dgaswf wfdfg',
		url: '../news/02.jpg',
		link: "#",
		alt: 'goo for the net',
		categories: 'thems these',
		tags: []
	}]
};

},{}],67:[function(require,module,exports){
'use strict';

module.exports = {
  applications: [{
    label: 'Greeley (Spring 2016)',
    link: '/files/Greeley-Spring2016-HomeGadgetsExpo-Application.pdf'
  }, {
    label: 'Colorado Springs (Spring 2016)',
    link: '/files/ColoradoSprings-Spring2016-HomeGadgetsExpo-Application.pdf'
  }, {
    label: 'Denver (Spring 2016)',
    link: '/files/Denver-Spring2016-HomeGadgetsExpo-Application.pdf'
  }, {
    label: 'Des Moines (Spring 2016)',
    link: '/files/DesMoines-Spring2016-HomeGadgetsExpo-Application.pdf'
  }, {
    label: 'Denver Holiday Expo (Winter 2016)',
    link: '/files/Denver-2016-Holiday-HomeGadgetsExpo-Application.pdf'
  }],
  floorplans: [{
    label: 'Greeley',
    thumb: 'greeley.png',
    link: 'GreeleyExpoFloorplan2016.pdf',
    active: true
  }, {
    label: 'Co. Springs',
    thumb: 'colorado-springs.png',
    link: 'ColoradoSpringsExpoFloorplan2016.pdf',
    active: false
  }, {
    label: 'Denver',
    thumb: 'denver.png',
    link: 'DenverExpoFloorplan2016.pdf',
    active: false
  }, {
    label: 'Des Moines',
    thumb: 'desmoines2016.png',
    link: 'DesMoinesExpoFloorplan2016.pdf',
    active: false
  }],
  faqs: [{
    label: 'When does exhibitor registration begin?',
    content: 'Registration for the Spring 2016 shows has begun! All booth space is first come first serve so register as soon as possible.',
    active: true
  }, {
    label: "What's included in booth space?",
    content: "Booths include: <ul><li>Standard pipe and draping</li> <li>A basic exhibitor sign</li></ul> *Additional needs such as electricity are rented separately.",
    active: false
  }, {
    label: "What's required to reserve booth space?",
    content: '50% of booth fees are required upfront to reserve booth space with the remaining 50% due 30 days prior to each show.<br /> Enjoy a 5% discount off booth fees by paying total upfront.',
    active: false
  }, {
    label: "Are any booth discounts available?",
    content: 'YES! Multi-booth as well as multi-show discounts are available. Please contact us at 720-316-2757 for details.',
    active: false
  }]
};

},{}],68:[function(require,module,exports){
'use strict';

// Setting for the main menu
module.exports = [{
	id: 0,
	menu_name: 'primary',
	active: false,
	label: 'Home',
	url: '/home',
	sub: [{
		id: 14,
		active: false,
		label: 'About TOTO',
		url: '/about'
	}, {
		id: 15,
		active: false,
		label: 'News',
		url: '/news'
	}, {
		id: 16,
		active: false,
		label: 'Contact',
		url: '/shout'
	}]
}, {
	id: 1,
	menu_name: 'primary',
	active: false,
	label: 'Events',
	url: '/events',
	sub: [{
		id: 5,
		active: false,
		label: 'Deer Pile',
		url: 'deer-pile'
	}, {
		id: 6,
		active: false,
		label: 'Mercury Cafe',
		url: 'mercury-cafe'
	}]
}, {
	id: 2,
	menu_name: 'primary',
	active: false,
	label: 'Particapate',
	url: '/particapate',
	sub: [{
		id: 7,
		active: false,
		label: 'Meet Up Details',
		url: 'meetup'
	}, {
		id: 8,
		active: false,
		label: 'Donate',
		url: 'donations'
	}]
}, {
	id: 3,
	menu_name: 'primary',
	active: false,
	label: 'Communication',
	url: '/comunication',
	sub: [{
		id: 9,
		active: false,
		label: 'Shout To Us',
		url: 'shout'
	}, {
		id: 10,
		active: false,
		label: 'Group Conversations',
		url: 'conversations'
	}]
}, {
	id: 4,
	menu_name: 'primary',
	active: false,
	label: 'Group Assets',
	url: '/group-assets',
	sub: [{
		id: 11,
		active: false,
		label: 'Glossery',
		url: 'glossery'
	}, {
		id: 12,
		active: false,
		label: 'Theater Games',
		url: '/theater-games'
	}, {
		id: 13,
		active: false,
		label: 'Media Gallery',
		url: '/media-gallery'
	}]
}];

},{}],69:[function(require,module,exports){
"use strict";

// Static dummy news data
module.exports = {
	title: "title",
	body: "Body Body",
	photo: "/images/logos/logo.png"
}, {
	title: "title",
	body: "Body Body",
	photo: "/images/logos/logo.png"
}, {
	title: "title",
	body: "Body Body",
	photo: "/images/logos/logo.png"
};

},{}],70:[function(require,module,exports){
'use strict';

// Static App Setting

module.exports = {
  pageEdit: false,
  loggedIn: false,
  primaryOpen: false,
  asideOpen: false,
  animateHeader: false,

  appName: 'MEi',
  currentRoute: "home",
  viewTitle: 'Home',
  currentView: 'home',
  currentNavigation: 'mainnav',

  helpDeskVisible: true,

  editMode: false,
  editAll: false,
  dataMode: false,
  persisted: true,
  asideOn: false,
  primaryOn: false,

  baseView: 'front',

  showLanguageSelector: false,
  //currentUser: mei.currentUser,

  logGood: "color:black; background:lightGreen; font-size: 12pt",
  logBad: "color:white; background:Red; font-size: 12pt",
  logErr: "color:black; background:yellow; font-size: 12pt",

  metaTags: [{
    tag: ""
  }]

};

},{}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
//import Persistance from '../api/vuex/persistance.js'

//var data = Persistance.get();

exports.default = {
		settings: require('./settingsData'),

		company: require('./companyData'),

		posts: require('./newsData'),

		conversations: require('./conversationData'),

		menus: {
				primary: require('./mainMenuData'),
				adminPrimary: require('./adminMenuData'),
				DashboardMenu: {}
		},

		copyText: require('./copyText'),

		events: require('./eventsData'),

		infoSection: require('./infoSectionData'),

		images: require('./imagesData'),

		features: require('./features')
};

//  function(){
// 	console.log(truth)
// 	// if(data.length){
// 	// 	return data;
// 	// } else {
// 		return truth;
// 	// }
// }

},{"./adminMenuData":60,"./companyData":61,"./conversationData":62,"./copyText":63,"./eventsData":64,"./features":65,"./imagesData":66,"./infoSectionData":67,"./mainMenuData":68,"./newsData":69,"./settingsData":70}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.configRouter = configRouter;

var _Inventorycalculator = require('../vue/components/inventory/Inventorycalculator.vue');

var _Inventorycalculator2 = _interopRequireDefault(_Inventorycalculator);

var _Profile = require('../vue/components/profile/Profile.vue');

var _Profile2 = _interopRequireDefault(_Profile);

var _Projector = require('../vue/components/projector/Projector.vue');

var _Projector2 = _interopRequireDefault(_Projector);

var _Communications = require('../vue/components/converse/Communications.vue');

var _Communications2 = _interopRequireDefault(_Communications);

var _SingleConversation = require('../vue/components/converse/SingleConversation.vue');

var _SingleConversation2 = _interopRequireDefault(_SingleConversation);

var _NavPage = require('../vue/components/navigation/NavPage.vue');

var _NavPage2 = _interopRequireDefault(_NavPage);

var _Checkout = require('../vue/components/pos/Checkout.vue');

var _Checkout2 = _interopRequireDefault(_Checkout);

var _Calendar = require('../vue/components/calendar/Calendar.vue');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Settings = require('../vue/components/settings/Settings.vue');

var _Settings2 = _interopRequireDefault(_Settings);

var _New = require('../vue/components/customer/New.vue');

var _New2 = _interopRequireDefault(_New);

var _Customers = require('../vue/components/customer/Customers.vue');

var _Customers2 = _interopRequireDefault(_Customers);

var _New3 = require('../vue/components/employee/New.vue');

var _New4 = _interopRequireDefault(_New3);

var _Employees = require('../vue/components/employee/Employees.vue');

var _Employees2 = _interopRequireDefault(_Employees);

var _Inventory = require('../vue/components/inventory/Inventory.vue');

var _Inventory2 = _interopRequireDefault(_Inventory);

var _UiUxPage = require('../vue/components/controllers/UiUxPage.vue');

var _UiUxPage2 = _interopRequireDefault(_UiUxPage);

var _UiUxButtons = require('../vue/components/controllers/UiUxButtons.vue');

var _UiUxButtons2 = _interopRequireDefault(_UiUxButtons);

var _UiUxCharts = require('../vue/components/controllers/UiUxCharts.vue');

var _UiUxCharts2 = _interopRequireDefault(_UiUxCharts);

var _TicketsIt = require('../vue/components/pages/TicketsIt.vue');

var _TicketsIt2 = _interopRequireDefault(_TicketsIt);

var _FrozenNodeAdmin = require('../vue/components/pages/FrozenNodeAdmin.vue');

var _FrozenNodeAdmin2 = _interopRequireDefault(_FrozenNodeAdmin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import loadjs from 'partition-bundle';

//import mainview from '../vue/mainview.js';
function configRouter(router) {
   var _router$map;

   // normal routes
   router.map((_router$map = {

      '/': {
         component: _NavPage2.default,
         name: 'Welcome'
      }
   }, (0, _defineProperty3.default)(_router$map, '/', {
      component: _NavPage2.default,
      name: 'welcome'
   }), (0, _defineProperty3.default)(_router$map, '/dashboard', {
      component: {
         name: 'Dashboard',
         template: '<div><router-view></router-view></div>',
         changeTabTitle: false,
         logHooksToConsole: true,
         watchMode: true,
         data: function data() {
            return {
               pageTitle: 'Dashboard'

            };
         }
      },
      canReuse: true,
      name: 'Dashboard',
      subRoutes: {
         '/': {
            component: _NavPage2.default,
            name: 'welcome'
         },
         '/home': {
            component: _NavPage2.default,
            name: 'Home'
         },
         '/pos': {
            // component: function (resolve) {
            //   loadjs([Pos], resolve)
            // },
            component: _Checkout2.default,
            name: 'Pos'
         },

         '/customers': {
            component: _Customers2.default,
            name: 'Customers'
         },
         '/inventory/calculator': {
            component: _Inventorycalculator2.default,
            name: 'InventoryCalculator'
         },

         '/profile': {
            component: _Profile2.default,
            name: 'Profile',
            subRoutes: {
               '/projects': {
                  component: _Projector2.default,
                  name: 'Projects'
               },
               '/communications': {
                  component: _Communications2.default,
                  name: 'Communications'
               },
               '/singleConversation': {
                  component: _SingleConversation2.default,
                  name: 'SingleConversation'
               },
               '/calendar': {
                  component: _Calendar2.default,
                  name: 'Calendar'
               },
               '/settings': {
                  component: _Settings2.default,
                  name: 'Settings'
               }
            }
         },
         '/customer/new': {
            component: _New2.default,
            name: 'CustomerNew'
         },
         '/employees': {
            component: _Employees2.default,
            name: 'Employees'
         },
         '/employee/new': {
            component: _Inventory2.default,
            name: 'EmployeeNew'
         },
         '/employee': {
            component: _Employees2.default,
            name: 'EmployeeDirectory'
         },
         '/inventory': {
            component: _Inventory2.default,
            name: 'Inventory'
         },
         '/ui': {
            component: _UiUxPage2.default,
            name: 'UiUx'
         },
         '/ui/buttons': {
            component: _UiUxButtons2.default,
            name: 'UiUxButtons'
         },
         '/ui/charts': {
            component: _UiUxCharts2.default,
            name: 'UiUxCharts'
         },

         '/help-desk': {
            component: _TicketsIt2.default,
            name: 'help-desk'
         },

         '/super-admin': {
            component: _FrozenNodeAdmin2.default,
            name: 'super-admin'
         }
      } }), _router$map));

   // redirect
   // dashboard sub route close
   //dashboard close

   // '*': {
   //     component: require('./components/not-found.vue')
   //   },
   router.redirect({
      '/info': '/'
   });

   // global before
   // 3 options:
   // 1. return a boolean
   // 2. return a Promise that resolves to a boolean
   // 3. call transition.next() or transition.abort()
   // router.beforeEach((transition) => {
   //   //console.log('Bang from beforeEach transition')
   //   if (transition.to.path === '/dashboard') {
   //     router.app.authenticating = true
   //     setTimeout(() => {
   //       router.app.authenticating = false
   //       alert('this route is forbidden by a global before hook')
   //       transition.abort()
   //     }, 3000)
   //   } else {
   //     transition.next()
   //   }
   // })
}

},{"../vue/components/calendar/Calendar.vue":78,"../vue/components/controllers/UiUxButtons.vue":82,"../vue/components/controllers/UiUxCharts.vue":83,"../vue/components/controllers/UiUxPage.vue":84,"../vue/components/converse/Communications.vue":85,"../vue/components/converse/SingleConversation.vue":87,"../vue/components/customer/Customers.vue":88,"../vue/components/customer/New.vue":89,"../vue/components/employee/Employees.vue":90,"../vue/components/employee/New.vue":91,"../vue/components/inventory/Inventory.vue":92,"../vue/components/inventory/Inventorycalculator.vue":93,"../vue/components/navigation/NavPage.vue":96,"../vue/components/pages/FrozenNodeAdmin.vue":106,"../vue/components/pages/TicketsIt.vue":107,"../vue/components/pos/Checkout.vue":108,"../vue/components/profile/Profile.vue":111,"../vue/components/projector/Projector.vue":112,"../vue/components/settings/Settings.vue":116,"babel-runtime/helpers/defineProperty":3}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.configRouter = configRouter;

var _Inventorycalculator = require('../vue/components/inventory/Inventorycalculator.vue');

var _Inventorycalculator2 = _interopRequireDefault(_Inventorycalculator);

var _Communications = require('../vue/components/converse/Communications.vue');

var _Communications2 = _interopRequireDefault(_Communications);

var _SingleConversation = require('../vue/components/converse/SingleConversation.vue');

var _SingleConversation2 = _interopRequireDefault(_SingleConversation);

var _Navpage = require('../vue/components/navigation/Navpage.vue');

var _Navpage2 = _interopRequireDefault(_Navpage);

var _Checkout = require('../vue/components/pos/Checkout.vue');

var _Checkout2 = _interopRequireDefault(_Checkout);

var _Calendar = require('../vue/components/calendar/Calendar.vue');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Settings = require('../vue/components/settings/Settings.vue');

var _Settings2 = _interopRequireDefault(_Settings);

var _New = require('../vue/components/customer/New.vue');

var _New2 = _interopRequireDefault(_New);

var _Customers = require('../vue/components/customer/Customers.vue');

var _Customers2 = _interopRequireDefault(_Customers);

var _New3 = require('../vue/components/employee/New.vue');

var _New4 = _interopRequireDefault(_New3);

var _Inventory = require('../vue/components/inventory/Inventory.vue');

var _Inventory2 = _interopRequireDefault(_Inventory);

var _UiUxPage = require('../vue/components/controllers/UiUxPage.vue');

var _UiUxPage2 = _interopRequireDefault(_UiUxPage);

var _UiUxButtons = require('../vue/components/controllers/UiUxButtons.vue');

var _UiUxButtons2 = _interopRequireDefault(_UiUxButtons);

var _UiUxCharts = require('../vue/components/controllers/UiUxCharts.vue');

var _UiUxCharts2 = _interopRequireDefault(_UiUxCharts);

var _TicketsIt = require('../vue/components/pages/TicketsIt.vue');

var _TicketsIt2 = _interopRequireDefault(_TicketsIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import mainview from '../vue/mainview.js';
function configRouter(router) {
    var _router$map;

    alert('vue-router/router.js called??? but why and more importantly who???');
    // normal routes
    router.map((_router$map = {

        '/': {
            component: _Navpage2.default,
            name: 'Welcome'
        }
    }, (0, _defineProperty3.default)(_router$map, '/', {
        component: _Navpage2.default,
        name: 'welcome'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard', {
        component: _Navpage2.default,
        name: 'Dashboard'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/pos', {
        component: _Checkout2.default,
        name: 'Pos'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/home', {
        component: _Navpage2.default,
        name: 'home'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/customers', {
        component: _Customers2.default,
        name: 'Customers'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/inventory/calculator', {
        component: _Inventorycalculator2.default,
        name: 'InventoryCalculator'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/projects', {
        component: Projector,
        name: 'Projects'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/communications', {
        component: _Communications2.default,
        name: 'Communications'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/singleConversation', {
        component: _SingleConversation2.default,
        name: 'SingleConversation'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/calendar', {
        component: _Calendar2.default,
        name: 'Calendar'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/settings', {
        component: _Settings2.default,
        name: 'Settings'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/customer/new', {
        component: _New2.default,
        name: 'CustomerNew'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/employees', {
        component: Employees,
        name: 'Employees'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/employee/new', {
        component: _Inventory2.default,
        name: 'EmployeeNew'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/employee', {
        component: Employees,
        name: 'EmployeeDirectory'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/inventory', {
        component: _Inventory2.default,
        name: 'Inventory'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/ui', {
        component: _UiUxPage2.default,
        name: 'UiUx'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/ui/buttons', {
        component: _UiUxButtons2.default,
        name: 'UiUxButtons'
    }), (0, _defineProperty3.default)(_router$map, '/dashboard/ui/charts', {
        component: _UiUxCharts2.default,
        name: 'UiUxCharts'
    }), (0, _defineProperty3.default)(_router$map, 'help-desk/active', {
        component: _TicketsIt2.default,
        name: 'TicketsActive'

    }), (0, _defineProperty3.default)(_router$map, 'help-desk/admin', {
        component: _TicketsIt2.default,
        name: 'TicketsAdmin'
    }), (0, _defineProperty3.default)(_router$map, 'help-desk', {
        component: _TicketsIt2.default,
        name: 'TicketsAdmin'
    }), _router$map));

    // redirect


    // '*': {
    //     component: require('./components/not-found.vue')
    //   },
    router.redirect({
        '/info': '/'
    });

    // global before
    // 3 options:
    // 1. return a boolean
    // 2. return a Promise that resolves to a boolean
    // 3. call transition.next() or transition.abort()
    //'/hello/:userId': '/user/:userId'
    router.beforeEach(function (transition) {
        if (transition.to.path === '/forbidden') {
            router.app.authenticating = true;
            setTimeout(function () {
                router.app.authenticating = false;
                alert('this route is forbidden by a global before hook');
                transition.abort();
            }, 3000);
        } else {
            transition.next();
        }
    });
}

},{"../vue/components/calendar/Calendar.vue":78,"../vue/components/controllers/UiUxButtons.vue":82,"../vue/components/controllers/UiUxCharts.vue":83,"../vue/components/controllers/UiUxPage.vue":84,"../vue/components/converse/Communications.vue":85,"../vue/components/converse/SingleConversation.vue":87,"../vue/components/customer/Customers.vue":88,"../vue/components/customer/New.vue":89,"../vue/components/employee/New.vue":91,"../vue/components/inventory/Inventory.vue":92,"../vue/components/inventory/Inventorycalculator.vue":93,"../vue/components/navigation/Navpage.vue":98,"../vue/components/pages/TicketsIt.vue":107,"../vue/components/pos/Checkout.vue":108,"../vue/components/settings/Settings.vue":116,"babel-runtime/helpers/defineProperty":3}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'animated-words',
  changeTabTitle: false,
  logHooksToConsole: false,
  watchMode: true,
  props: ['type', 'words', 'animate'],
  data: function data() {
    return {
      pageTitle: "Animated words",
      myText: ''

    };
  },


  methods: {
    bang: function bang() {
      var el = document.querySelector('.my-text');
      var options = {
        size: 40, // Font size, defined by th
        weight: 5, // Font weight (pixels)
        rounded: false, // Rounded letter endings
        color: '#7049ba', // Font color
        duration: 1, // Duration of the animation of each
        delay: [0, 0.2], // Delay animation among letters (seconds)
        fade: 0.7, // Fade effect duration (seconds)
        easing: d3_ease.easeCubicInOut.ease, // Easing function
        individualDelays: false
      };
      this.myText = new Letters(el, options);
      //this.dance()
    },
    dance: function dance() {
      this.myText.show();
    }
  },
  ready: function ready() {

    if (this.animate) {
      this.bang();
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"animated-words align-center\">\n\n\t\t<h1 class=\"my-text align-center\" v-text=\"words\"></h1>\n    <br>\n\t\t<a class=\"mtrl-btn mtrl-raised bg-orange\" @click=\"dance\">Dance</a>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/animate/AnimatedWords.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],75:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".fly-away-image {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  height: 100px;\n}\n.fly-away-image > img {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  max-height: 100px;\n  width: 100%;\n  right: 0;\n}\n.fly-away-image .fly-away {\n  top: -600px;\n}\n.intro-fly-away .section-title {\n  font-size: 80px;\n  font-weight: 900px;\n  color: #fff;\n}\n@media (min-width: 300px) {\n  .hero {\n    padding: 30px 0;\n  }\n  .fly-away-image {\n    height: 120px;\n  }\n  .fly-away-image > img {\n    max-height: 120px;\n  }\n  .fly-away {\n    top: -300px;\n  }\n}\n@media (min-width: 568px) {\n  .hero {\n    padding: 100px 0;\n  }\n  .fly-away-image {\n    background-image: -webkit-linear-gradient(90deg, #2c8cb3 0%, #2caab3 100%);\n    height: 250px;\n  }\n  .fly-away-image > img {\n    margin: 0 auto;\n    max-height: 250px;\n  }\n}\n@media (min-width: 850px) {\n  .fly-away-image {\n    background-image: -webkit-linear-gradient(90deg, #2c8cb3 0%, #2caab3 100%);\n    height: 325px;\n  }\n  .fly-away-image > img {\n    max-height: 350px;\n  }\n}\n@media (min-width: 1400px) {\n  .fly-away-image {\n    height: 450px;\n    width: 100%;\n  }\n  .fly-away-image > img {\n    max-width: 1400px;\n    max-height: 450px;\n  }\n  .fly-away {\n    top: -600px;\n  }\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions.js');

exports.default = {
  name: 'intro-fly-away',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'Intro Fly Away',
      bang: false,
      flyaway: ''
    };
  },


  vuex: {
    actions: {
      toggleSetting: _actions.toggleSetting
    }
  },

  computed: {},
  methods: {},
  ready: function ready() {
    var that = this;
    var waypoint = $('#IntroFlyAway').waypoint(function (direction) {
      that.flyaway = 'fly-away';
      that.toggleSetting('animateHeader');
    }, {
      offset: '-5%'
    });
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <div class=\"intro-fly-away\" :class=\"flyaway\">\n  \t<blue-hero :blue=\"true\" id=\"1\"></blue-hero>\n\t\t<center>\n  \t<div class=\"fly-away-image\">\n  \t\t<!-- @click=\"settings.animateHeader = !settings.animateHeader\"  -->\n  \t\t\n  \t\t\t<img class=\" mtrl-raised\" src=\"images/frontImages/headerImage.jpg\">\n  \t\t\n    </div></center>\n  </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/animate/IntroFlyAway.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".fly-away-image {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  height: 100px;\n}\n.fly-away-image > img {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  max-height: 100px;\n  width: 100%;\n  right: 0;\n}\n.fly-away-image .fly-away {\n  top: -600px;\n}\n.intro-fly-away .section-title {\n  font-size: 80px;\n  font-weight: 900px;\n  color: #fff;\n}\n@media (min-width: 300px) {\n  .hero {\n    padding: 30px 0;\n  }\n  .fly-away-image {\n    height: 120px;\n  }\n  .fly-away-image > img {\n    max-height: 120px;\n  }\n  .fly-away {\n    top: -300px;\n  }\n}\n@media (min-width: 568px) {\n  .hero {\n    padding: 100px 0;\n  }\n  .fly-away-image {\n    background-image: -webkit-linear-gradient(90deg, #2c8cb3 0%, #2caab3 100%);\n    height: 250px;\n  }\n  .fly-away-image > img {\n    margin: 0 auto;\n    max-height: 250px;\n  }\n}\n@media (min-width: 850px) {\n  .fly-away-image {\n    background-image: -webkit-linear-gradient(90deg, #2c8cb3 0%, #2caab3 100%);\n    height: 325px;\n  }\n  .fly-away-image > img {\n    max-height: 350px;\n  }\n}\n@media (min-width: 1400px) {\n  .fly-away-image {\n    height: 450px;\n    width: 100%;\n  }\n  .fly-away-image > img {\n    max-width: 1400px;\n    max-height: 450px;\n  }\n  .fly-away {\n    top: -600px;\n  }\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions.js":123,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],76:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".media {\n  position: absolute;\n}\n@media (min-width: 500px) {\n  .media {\n    position: inherit;\n    padding-top: 100px;\n  }\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'IpadMenu',
  id: 0,
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,

  props: ['animationNumber'],
  data: function data() {
    return {
      activeScreen: 1,
      pageTitle: '3D Ipad Menu',
      effect: "ms-effect-" + this.animationNumber,
      open: false
    };
  },


  vuex: {
    getters: {
      features: function features(_ref) {
        var _features = _ref.features;
        return _features.all;
      }
    }
  },

  methods: {},

  ready: function ready() {
    var that = this;
    var waypoint = $('#toggle-phone-animation').waypoint(function (direction) {
      that.open = !that.open;
    }, {
      offset: '25%'
    });
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <div class=\"ipad-3d-menu\">\n\n\t  <div class=\"col-sm-6 wow fadeInLeft\">\n\t    <div class=\"ms-wrapper\" :class=\"[effect, open ? 'ms-view-layers' : '']\">\n\t\t\t\t<div id=\"toggle-phone-animation\"></div>\n\t\t\t\t \n\t\t\t\t<div class=\"ms-perspective\">\n\t\t\t\t\t<div class=\"ms-device\">\n\t\t\t\t\t\t<div class=\"ms-object\">\n\t\t\t\t\t\t\t<div class=\"ms-front\"></div>\n\t\t\t\t\t\t\t<div class=\"ms-back\"></div>\n\t\t\t\t\t\t\t<div class=\"ms-left ms-side\"></div>\n\t\t\t\t\t\t\t<div class=\"ms-right ms-side\"></div>\n\t\t\t\t\t\t\t<div class=\"ms-top ms-side\"></div>\n\t\t\t\t\t\t\t<div class=\"ms-bottom ms-side\"></div>\n\t\t\t\t\t\t</div><!-- /ms-object -->\n\t\t\t\t\t\t<div class=\"ms-screens\">\n\t\t\t\t\t\t\t<a v-for=\"(key, screen) in features\" :class=\"'ms-screen-'+(key+1)\" @click=\"activeScreen = (key+1)\"></a>\n\t\t\t\t\t\t\t<!-- <a class=\"ms-screen-2\"><div class=\"ms-label\">Compose</div></a> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- /ms-device -->\n\t\t\t\t</div><!-- /ms-perspective -->\n\t\t\t</div><!-- /ms-wrapper -->\n\t  </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"media service-box wow fadeInRight\" v-for=\"(key, detail) in features\" v-if=\"activeScreen == (key+1)\">\n      <div class=\"pull-left\">\n        <i class=\"fa fa-2x\" :class=\"'fa-'+detail.icon\"></i>\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\" v-html=\"detail.title\">Company Search</h4>\n        <span v-html=\"detail.content\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</span>\n      </div>\n    </div>\n\t</div>\n\t<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t\t<center>\n\t\t\t\t<a id=\"phone-toggle-btn\" class=\"mtrl-btn bg-purple mtrl-raised mtrl-btn-icon\" @click=\"open = !open\"> \n\t\t\t\t\t<i class=\"fa fa-lg fa-caret-square-o-down\"></i>\n\t\t\t\t\t<span style=\"margin: auto 2px\"> View</span>\n\t\t\t\t</a>\n\t\t\t</center>\n\t\t</div>\n\t</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/animate/iPad3DMenu.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".media {\n  position: absolute;\n}\n@media (min-width: 500px) {\n  .media {\n    position: inherit;\n    padding-top: 100px;\n  }\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],77:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".login-overlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999999;\n  background-color: rgba(103,58,183,0.5);\n}\n.login-modal {\n  padding: 15px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 9999999;\n}\n@media (min-width: 568px) {\n  .login-modal {\n    padding: 15px;\n    position: fixed;\n    top: 120px;\n    right: 25%;\n    left: 25%;\n    max-height: 580px;\n    max-width: 490px;\n  }\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'MeiAdminLogin',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      loginOn: false,
      loginData: {
        email: null,
        password: null,
        memory: false
      }
    };
  },


  methods: {
    login: function login() {
      this.loginOn = !this.loginOn;
    }
  },

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <div class=\"MeiAdminLogin\">\n    <a class=\"mtrl-btn mtrl-raised mtrl-blue\" v-on:click=\"login\">  \n      <i class=\"fa\" :class=\"$root.settings.loggedIn ? 'fa-unlock' : 'fa-lock'\"></i>\n    </a>\n\n    <div class=\"login-overlay\" v-if=\"loginOn\" v-on:click=\"login\"></div>\n\t\t\n\t\t<div class=\"mtrl-raised bg-purple login-modal\" v-if=\"loginOn\">\n\n\t\t  <!-- LOGIN FORM -->\n\t\t\t<!--===================================================-->\n\t\t\t<div class=\"cls-content\" v-if=\"loginOn\">\n\t\t\t\t<div class=\"cls-content-sm panel\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<p class=\"pad-btm\">Sign In to your account</p>\n\t\t\t\t\t\t<!-- @if (count($errors) > 0)\n\t\t\t\t\t\t\t<div class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t<strong>Whoops!</strong> There were some problems with your input.<br><br>\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t@foreach ($errors->all() as $error)\n\t\t\t\t\t\t\t\t\t\t<li>{{ $error }}</li>\n\t\t\t\t\t\t\t\t\t@endforeach\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t@endif -->\n\n\n\n\t\t\t\t\t\t<!-- <form class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"/auth/login\"> -->\n\t\t\t\t\t\t<form class=\"form-horizontal\" role=\"form\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\"><i class=\"fa fa-user\"></i></div>\n\t\t\t\t\t\t\t\t\t<input id=\"email\" type=\"text\" name=\"email\" :value=\"oldName\" class=\"form-control\" placeholder=\"Email\" v-model=\"loginData.email\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></div>\n\t\t\t\t\t\t\t\t\t<input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" v-model=\"loginData.password\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-8 text-left checkbox\">\n\t\t\t\t\t\t\t\t\t<!-- <label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" > Remember me\n\t\t\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group text-right\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success text-uppercase\" name=\"submit\" type=\"submit\" v-on:click=\"submitLogin\">Sign In</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"mar-btm\"><em>- or -</em></div>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block\" type=\"button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook fa-fw\"></i> Login with Facebook\n\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t</form>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pad-ver\">\n\t\t\t\t\t<a href=\"password-reminder\" class=\"btn-link mar-rgt\">Forgot password ?</a>\n\t\t\t\t\t<a href=\"register\" class=\"btn-link mar-lft\">Create a new account</a>\n\t\t\t\t</div>\n\t\t</div>\n </div>\n</div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/auth/MeiAdminLogin.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".login-overlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999999;\n  background-color: rgba(103,58,183,0.5);\n}\n.login-modal {\n  padding: 15px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 9999999;\n}\n@media (min-width: 568px) {\n  .login-modal {\n    padding: 15px;\n    position: fixed;\n    top: 120px;\n    right: 25%;\n    left: 25%;\n    max-height: 580px;\n    max-width: 490px;\n  }\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'calendar',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'name'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"calendar\">\n  comming soon\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/calendar/Calendar.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions');

exports.default = {
  name: 'editable-copy',
  watchMode: true,
  changeTabTitle: false,
  logHooksToConsole: false,
  props: ['instanceNumber', 'currentVersion', 'nameOfParent', 'useHtml', 'overideText'],
  data: function data() {
    return {
      names: 'text edit Aplic',
      html: this.useHtml,
      editMode: this.$root.settings.editMode,
      parent: this.nameOfParent,
      routePrefix: this.$root.copy[this.$root.baseView][this.findNameOfParent()],
      copyObject: {
        copy: this.overideText
      }
    };
  },


  vuex: {
    actions: {
      setCopyText: _actions.setCopyText
    }
  },

  methods: {
    // listen for edit to get turned on
    // if user is allowed to edit
    // switch field to editable text area
    // persist vux on update

    persistCopyText: function persistCopyText(e) {
      this.$root.setSetting('persisted', false);
      this.setCopyText(this.copyObject, [e.target.value, this.parent]);
    },
    saveVersion: function saveVersion() {
      var that = this;
      var data = this.copyObject;
      console.log(data.copy);
      this.$http.put('/api/copyText/' + data.id, { data: data }, function (data, status, request) {
        console.log("%c saveVersion() in EditableCopy.vue", that.$root.settings.logGood);
        this.$root.setSetting('persisted', true);
        // $.niftyNoty({
        //   type: 'success',
        //   icon : 'fa fa-check',
        //   message : data+' <strong> Saved!</strong>. ',
        //   container : 'page',
        //   timer : 3000
        // });
      }).error(function (data, status, request) {
        console.log("%c saveVersion() Err in EditableCopy", that.$root.settings.logErr);
      });
    },
    findNameOfParent: function findNameOfParent() {
      if (this.nameOfParent == undefined) {
        return this.$parent.name + '_' + this.$parent.id;
      }
      return this.nameOfParent;
    }
  },

  ready: function ready() {
    this.parent = this.findNameOfParent();
    if (this.routePrefix) {
      this.copyObject = this.routePrefix[this.instanceNumber];
      this.$watch('$root.copy', function () {
        this.copyObject = this.routePrefix[this.instanceNumber];
      }, { deep: true });
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"editable-copy\">\n  <div v-if=\"!editMode\">\n    <span v-if=\"html\" v-html=\"copyObject.copy\" style=\"width:100%; text-align: inherit;\"></span>\n    <span v-if=\"!html\" v-text=\"copyObject.copy\" style=\"width:100%; text-align: inherit;\"></span>\n  </div>\n<!-- :rows=\"copyObject.height\" -->\n  <textarea v-if=\"editMode\" :value=\"copyObject.copy\" @blur=\"saveVersion\" @input=\"persistCopyText | debounce 500\" placeholder=\"start typing to save new copy\" style=\"width:100%; text-align: inherit;\"></textarea>\n\n    <!-- <a class=\"mtrl-btn mtrl-primary mtrl-raised\"\n      v-if=\"editMode\"\n      @click=\"saveVersion\"\n    >Save</a> -->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/controllers/EditableCopy.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions":123,"vue":49,"vue-hot-reload-api":38}],80:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions');

exports.default = {

  props: ['object'],

  data: function data() {
    return {
      iconList: require('../../../api/data/iconListForSelectBox'),
      editAll: true
    };
  },

  vuex: {
    actions: {
      setObject: _actions.setObject
    }
  },
  computed: {},
  methods: {
    persistObject: function persistObject(e) {
      var field = e.target.name;
      var value = e.target.value;
      //this.object[field] = value
      console.log(this.object.id);
      this.setObject(this.object, field, value);
    },
    saveObject: function saveObject() {
      var that = this;
      this.$root.objectResource.update({ objectType: "interfaceObjects", objectOptions: this.object }, function (menu, status, request) {
        console.log("%csaveObject() menu data persisted in ObjEditor", this.settings.logGood);
        //that.setMenu('DashboardMenu', menu);
      }).error(function (data, status, request) {
        console.log("%c csaveObject() Errrrrr in ObjEditor", this.$root.logErr);
      });
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"{{ object.id }}-form-holder\" style=\"display:none\"> \n  <form id=\"object-{{ object.id }}-editing-form\">\n    <!-- method=\"POST\" -->\n    <!-- action=\"/api/interfaceObject/{{object.id}}\"  -->\n    <!-- <input type=\"hidden\" name=\"_method\" value=\"PUT\"> -->\n    <!-- <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token() }}\"> -->\n    <input type=\"hidden\" id=\"id\" name=\"id\" value=\"{{ object.id }}\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6\">\n          <h5>Parent ID: {{ object.menu_id }}</h5>\n        </div>\n        <div class=\"col-sm-6\">\n          <h5>Parent Menu: {{ object.menu_name }}</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6\">\n          <label> Button Label\n            <input class=\"form-control input-lg\" type=\"text\" name=\"label\" @input=\"persistObject | debounce 500\" :value=\"object.label\"></label>\n          <label> Button Name                 \n            <input class=\"form-control input-lg\" type=\"text\" name=\"name\" @input=\"persistObject | debounce 500\" :value=\"object.name\"></label>\n          <label> Button URL                 \n            <input class=\"form-control input-lg\" type=\"text\" name=\"href\" @input=\"persistObject | debounce 500\" :value=\"object.href\"></label>\n          <label> Button icon\n            <div class=\"input-group\">\n              <select name=\"icon\" data-live-search=\"true\" :data-placeholder=\"object.icon\" :id=\"'selectpicker-'+object.id\" v-html=\"iconList.default.iconList\">\n              <!-- // {{-- this will prob be a problem --}} -->\n                  \n              </select>\n              <i :id=\"'chosen-fa-icon-'+object.id\" :class=\"'pad-lft fa fa-3x ' + object.icon\"></i>\n            </div> \n          </label>\n          <label v-show=\"editAll\">  Button Family\n            <input class=\"form-control input-lg\" type=\"text\" dname=\"family\" @input=\"persistObject | debounce 500\" :value=\"object.family\">\n          </label>\n          <label v-show=\"editAll\"> Button Type\n            <input class=\"form-control input-lg\" type=\"text\" name=\"type\" @input=\"persistObject | debounce 500\" :value=\"object.type\">\n          </label>\n        </div>\n        <div class=\"col-sm-6\">\n          <label> Button  Menu ID\n            <input class=\"form-control input-lg\" type=\"text\" name=\"menu_id\" @input=\"persistObject | debounce 500\" :value=\"object.menu_id\">\n          </label>\n          <label> Button Menu Name\n          <input class=\"form-control input-lg\" type=\"text\" name=\"menu_name\" @input=\"persistObject | debounce 500\" :value=\"object.menu_name\">\n          </label>\n          <label> Button Menu Order\n            <input class=\"form-control input-lg\" type=\"text\" name=\"menu_order\" @input=\"persistObject | debounce 500\" :value=\"object.menu_order\">\n          </label>\n          <label v-show=\"editAll\"> Button Owner ID\n            <input class=\"form-control input-lg\" type=\"text\" name=\"owner_id\" @input=\"persistObject | debounce 500\" :value=\"object.owner_id\">\n          </label>\n          <label v-show=\"editAll\"> Button Owner Type \n            <input class=\"form-control input-lg\" type=\"text\" name=\"owner_type\" @input=\"persistObject | debounce 500\" :value=\"object.owner_type\">\n          </label>\n          <label v-show=\"editAll\"> Button Value\n            <input class=\"form-control input-lg\" type=\"text\" name=\"value\" @input=\"persistObject | debounce 500\" :value=\"object.value\">\n          </label>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/controllers/ObjectEditor.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../api/data/iconListForSelectBox":54,"../../../vuex/actions":123,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],81:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".open-search {\n  position: absolute;\n}\n.searchbox {\n  top: -35px;\n  right: 0;\n  padding: 0 0 5px 25%;\n  min-width: 100vw;\n  position: relative;\n  margin-right: 0px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.searchbox >.input-group >input {\n  font-size: 14px;\n  font-weight: 100;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.searchbox >.input-group >input:focus {\n  border: none;\n}\n.searchbox.in {\n  top: 0px;\n  padding-top: 50px;\n}\n.searchbox.in >.input-group >input {\n  font-size: 42px;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'search-box',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'SearchBox',
      openSearch: false
    };
  },


  methods: {
    searchBoxKeybordListener: function searchBoxKeybordListener() {
      if (!this.openSearch) {
        var that = this;
        $(window).keypress(function (e) {
          var ev = e || window.event;var key = ev.keyCode || ev.which;
          if (key == 115 || key == 83) {
            that.openSearch = true;
          }
        });
      }
    },
    searchFor: function searchFor() {
      $('#search-field').blur();
      this.openSearch = false;
    }
  },

  ready: function ready() {
    this.searchBoxKeybordListener();
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\t<button class=\"open-search\" type=\"button\"><i class=\"fa fa-2x fa-search\"></i>\n\t</button>\n  <!--Searchbox-->\n  <div class=\"searchbox\" :class=\"{'in' : openSearch}\">\n    <div class=\"input-group custom-search-form\">\n      <input id=\"search-field\" type=\"text\" class=\"form-control bg-dark-gray\" placeholder=\"Search..\" @keyup.enter=\"searchFor\">\n      <span class=\"input-group-btn  bg-dark-gray\">\n        <button class=\"text-muted\" type=\"button\"><i class=\"fa fa-2x fa-search \"></i></button>\n      </span>\n    </div>\n  </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/controllers/SearchBox.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".open-search {\n  position: absolute;\n}\n.searchbox {\n  top: -35px;\n  right: 0;\n  padding: 0 0 5px 25%;\n  min-width: 100vw;\n  position: relative;\n  margin-right: 0px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.searchbox >.input-group >input {\n  font-size: 14px;\n  font-weight: 100;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.searchbox >.input-group >input:focus {\n  border: none;\n}\n.searchbox.in {\n  top: 0px;\n  padding-top: 50px;\n}\n.searchbox.in >.input-group >input {\n  font-size: 42px;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'UiUx-page',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'UiUx-page'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"UiUx-page\">\n  Commin Soon\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/controllers/UiUxButtons.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'UiUx-page',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'UiUx-page'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"UiUx-page\">\n  Commin Soon\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/controllers/UiUxCharts.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'UiUx-page',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'UiUx-page'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"UiUx-page\">\n  Commin Soon\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/controllers/UiUxPage.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],85:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".checkout {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'communications',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data: function data() {
        return {
            pageTitle: 'Conversations'
        };
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"panel panel-default panel-left\">\n    <div class=\"discussions\">\n        <div id=\"demo-email-list\" class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-sm-7\">\n\n                    <!-- Mail toolbar -->\n                    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n\n                    <!--Split button dropdowns-->\n                    <div class=\"btn-group\">\n                        <div id=\"demo-checked-all-mail\" class=\"btn btn-default\">\n                            <label class=\"form-checkbox form-normal form-primary\">\n                                <input class=\"form-input\" type=\"checkbox\" name=\"mail-list\">\n                            </label>\n                        </div>\n                        <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle dropdown-toggle-icon\"><i class=\"dropdown-caret fa fa-caret-down\"></i></button>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"javascript:void(0)\" id=\"demo-select-all-list\">All</a></li>\n                            <li><a href=\"javascript:void(0)\" id=\"demo-select-none-list\">None</a></li>\n                            <li><a href=\"javascript:void(0)\" id=\"demo-select-toggle-list\">Toggle</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"javascript:void(0)\" id=\"demo-select-read-list\">Read</a></li>\n                            <li><a href=\"javascript:void(0)\" id=\"demo-select-unread-list\">Unread</a></li>\n                            <li><a href=\"javascript:void(0)\" id=\"demo-select-starred-list\">Starred</a></li>\n                        </ul>\n                    </div>\n\n                    <!--Refresh button-->\n                    <button id=\"demo-mail-ref-btn\" data-toggle=\"panel-overlay\" data-target=\"#demo-email-list\" class=\"btn btn-default\" type=\"button\">\n                        <i class=\"fa fa-refresh\"></i>\n                    </button>\n\n                    <!--Dropdown button (More Action)-->\n                    <div class=\"btn-group\">\n                        <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" type=\"button\">\n                            More <i class=\"dropdown-caret fa fa-caret-down\"></i>\n                        </button>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Mark as read</a></li>\n                            <li><a href=\"#\">Mark as unread</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Star</a></li>\n                            <li><a href=\"#\">Clear Star</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <hr class=\"hr-sm visible-xs\">\n                <div class=\"col-sm-5 clearfix\">\n                    <div class=\"pull-right\">\n\n                        <!--Pager buttons-->\n                        <span class=\"text-muted\">\n                            <strong>1-50</strong>\n                            of\n                            <strong>160</strong>\n                        </span>\n                        <div class=\"btn-group btn-group\">\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <span class=\"fa fa-chevron-left\"></span>\n                            </button>\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <span class=\"fa fa-chevron-right\"></span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr class=\"hr-sm\">\n\n            <!--Mail list group-->\n            <ul id=\"demo-mail-list\" class=\"mail-list\">\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread mail-attach\">\n                    <!-- <conversation></conversation> -->\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread mail-attach\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Michael Robert</a></div>\n                    <div class=\"mail-time\">05:55 PM</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a v-link=\"{ path: '/dashboard/singleConversation' }\">This is an example if there is a really really long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Shopping Mall</a></div>\n                    <div class=\"mail-time\">10:45 AM</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">Tracking Your Order - Shoes Store Online</a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread mail-starred mail-attach\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Dropbox</a></div>\n                    <div class=\"mail-time\">07:18 AM</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">Reset your account password</a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Server Host</a></div>\n                    <div class=\"mail-time\">01:51 PM</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">\n                            <span class=\"label label-danger\">\n                            Bussines\n                            </span>\n                            Regarding to your website issues.\n                        </a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li>\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Lisa D. Smith</a></div>\n                    <div class=\"mail-time\">Yesterday</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">Hi John! How are you?</a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Johny Juan</a></div>\n                    <div class=\"mail-time\">Yesterday</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">\n                            <span class=\"label label-info\">\n                            Partner\n                            </span>\n                            Repair Status Unregistered User\n                        </a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-attach\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Bobby Marz</a></div>\n                    <div class=\"mail-time\">Oct 10</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">Bugs in your system.</a></div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Lucy Moon</a></div>\n                    <div class=\"mail-time\">Oct 10</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">We need to meet up soon</a></div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Michael Robert</a></div>\n                    <div class=\"mail-time\">Oct 10</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">This is an example if there is a really really long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </a></div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-starred mail-attach\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Shopping Mall</a></div>\n                    <div class=\"mail-time\">Oct 9</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">Tracking Your Order - Shoes Store Online</a></div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Dropbox</a></div>\n                    <div class=\"mail-time\">Oct 8</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">Reset your account password</a></div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-list-unread\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Server Host</a></div>\n                    <div class=\"mail-time\">Oct 7</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">\n                            <span class=\"label label-danger\">\n                                Bussines\n                            </span>\n                            Regarding to your website issues.\n                        </a>\n                    </div>\n                </li>\n\n                <!--Mail list item-->\n                <li class=\"mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Lisa D. Smith</a></div>\n                    <div class=\"mail-time\">Oct 5</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">Hi John! How are you?</a></div>\n                </li>\n\n\n                <!--Mail list item-->\n                <li class=\"mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Johny Juan</a></div>\n                    <div class=\"mail-time\">Oct 5</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\">\n                        <a href=\"mailbox-message.html\">\n                            <span class=\"label label-info\">\n                                Partner\n                            </span>\n                            Repair Status Unregistered User\n                        </a>\n                    </div>\n                </li>\n\n\n                <!--Mail list item-->\n                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n                <li class=\"mail-attach\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Bobby Marz</a></div>\n                    <div class=\"mail-time\">Oct 3</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">Bugs in your system.</a></div>\n                </li>\n\n\n                <!--Mail list item-->\n                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n                <li class=\"mail-list-unread mail-starred\">\n                    <div class=\"mail-control\">\n                        <label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n                            <input type=\"checkbox\">\n                        </label>\n                    </div>\n                    <div class=\"mail-star\"><a href=\"#\"></a></div>\n                    <div class=\"mail-from\"><a href=\"#\">Lucy Moon</a></div>\n                    <div class=\"mail-time\">Oct 1</div>\n                    <div class=\"mail-attach-icon\"></div>\n                    <div class=\"mail-subject\"><a href=\"mailbox-message.html\">We need to meet up soon</a></div>\n                </li>\n            </ul>\n        </div>\n\n\n        <!--Mail footer-->\n        <div class=\"panel-footer clearfix\">\n            <div class=\"pull-right\">\n                <span class=\"text-muted\"><strong>1-50</strong> of <strong>160</strong></span>\n                <div class=\"btn-group btn-group\">\n                    <button type=\"button\" class=\"btn btn-dark\">\n                        <span class=\"fa fa-chevron-left\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-dark\">\n                        <span class=\"fa fa-chevron-right\"></span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--===================================================-->\n    <!-- END OF MAIL INBOX -->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/converse/Communications.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".checkout {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'contact-list',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'contact-list'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <div class=\"contact-list\">\n    <h4 class=\"pad-hor text-thin\">\n\t\t\t<span class=\"pull-right badge badge-warning\">3</span> Family\n\t\t</h4>\n\n\t\t<!--Family-->\n\t\t<div class=\"list-group bg-trans\">\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av2.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Stephen Tran</div>\n\t\t\t\t\t<span class=\"text-muted\">Availabe</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av4.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Brittany Meyer</div>\n\t\t\t\t\t<span class=\"text-muted\">I think so</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av3.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Donald Brown</div>\n\t\t\t\t\t<span class=\"text-muted\">Lorem ipsum dolor sit amet.</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\n\n\t\t<hr>\n\t\t<h4 class=\"pad-hor text-thin\">\n\t\t\t<span class=\"pull-right badge badge-info\">4</span> Friends\n\t\t</h4>\n\n\t\t<!--Friends-->\n\t\t<div class=\"list-group bg-trans\">\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av5.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Betty Murphy</div>\n\t\t\t\t\t<span class=\"text-muted\">Bye</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av6.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Olivia Spencer</div>\n\t\t\t\t\t<span class=\"text-muted\">Thank you!</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av4.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Sarah Ruiz</div>\n\t\t\t\t\t<span class=\"text-muted\">2 hours ago</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"img-circle img-xs\" src=\"/img/avatars/av3.png\" alt=\"Profile Picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<div class=\"text-lg\">Paul Aguilar</div>\n\t\t\t\t\t<span class=\"text-muted\">2 hours ago</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\n\t\t<hr>\n\t\t<h4 class=\"pad-hor text-thin\">\n\t\t\t<span class=\"pull-right badge badge-success\">Offline</span> Works\n\t\t</h4>\n\n\t\t<!--Works-->\n\t\t<div class=\"list-group bg-trans\">\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<span class=\"badge badge-purple badge-icon badge-fw pull-left\"></span> Joey K. Greyson\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<span class=\"badge badge-info badge-icon badge-fw pull-left\"></span> Andrea Branden\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<span class=\"badge badge-pink badge-icon badge-fw pull-left\"></span> Lucy Moon\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<span class=\"badge badge-success badge-icon badge-fw pull-left\"></span> Johny Juan\n\t\t\t</a>\n\t\t\t<a href=\"#\" class=\"list-group-item\">\n\t\t\t\t<span class=\"badge badge-danger badge-icon badge-fw pull-left\"></span> Susan Sun\n\t\t\t</a>\n\t\t</div>\n  </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/converse/ContactList.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'singleConversation',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data: function data() {
        return {
            pageTitle: 'The Title'
        };
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<!-- VIEW MESSAGE -->\n<!--===================================================-->\n<div class=\"panel panel-default panel-left\">\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n\n                <!--Sender Information-->\n                <div class=\"media\">\n                    <span class=\"media-left\">\n                        <img src=\"/img/av4.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\n                    </span>\n                    <div class=\"media-body\">\n                        <div class=\"text-bold\">Lisa D. Smith</div>\n                        <small class=\"text-muted\">lisa.aqua@boss-pos.com</small>\n                    </div>\n                </div>\n            </div>\n            <hr class=\"hr-sm visible-xs\">\n            <div class=\"col-sm-5 clearfix\">\n\n                <!--Details Information-->\n                <div class=\"pull-right text-right\">\n                    <p class=\"mar-no\"><small class=\"text-muted\">Monday 23, Jan 2014</small></p>\n                    <a href=\"#\">\n                        <strong>Holiday.zip</strong>\n                        <i class=\"fa fa-paperclip fa-lg fa-fw\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row pad-ver\">\n            <div class=\"col-xs-7\">\n\n                <!--Mail toolbar-->\n                <button class=\"btn btn-default\"><i class=\"fa fa-print\"></i></button>\n                <div class=\"btn-group btn-group\">\n                    <button class=\"btn btn-default\"><i class=\"fa fa-exclamation-circle\"></i></button>\n                    <button class=\"btn btn-default\"><i class=\"fa fa-trash\"></i></button>\n                </div>\n            </div>\n            <div class=\"col-xs-5 clearfix\">\n                <div class=\"pull-right\">\n\n                    <!--Reply & forward buttons-->\n                    <div class=\"btn-group btn-group\">\n                        <a class=\"btn btn-default\" href=\"#\">\n                        <i class=\"fa fa-reply\"></i>\n                        </a>\n                        <a class=\"btn btn-default\" href=\"#\">\n                        <i class=\"fa fa-share\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--Message-->\n        <!--===================================================-->\n        <div class=\"pad-all bord-all bg-gray-light\">\n            Hey John,\n            <br><br>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>\n            <blockquote class=\"text-muted\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </blockquote>\n            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            <br><br>\n            Regards,\n            <br><br>\n            <strong>Lisa D. Smith</strong><br>\n            2834 Street Name<br>\n            San Francisco, CA<br>\n        </div>\n        <!--===================================================-->\n        <!--End Message-->\n\n        <!-- Attach Files-->\n        <!--===================================================-->\n        <div class=\"pad-ver\">\n            <h4><i class=\"fa fa-paperclip fa-fw\"></i> Attachments <span>(2)</span></h4>\n\n            <ul class=\"mail-attach-list list-ov\">\n                <li class=\" clearfix\">\n\n                    <!--Download button-->\n                    <div class=\"mail-attach-btn\"><a href=\"#\" class=\"btn btn-purple btn-sm\">Download</a></div>\n\n                    <!--File information-->\n                    <div class=\"mail-attach-file\">\n                        <span class=\"mail-attach-label\">\n                            <span class=\"label label-info text-uppercase\">Images</span>\n                        </span>\n                        <div class=\"media-body\">\n                            <div class=\"text-bold\"><a href=\"#\">IMG_007.jpg</a></div>\n                            <small class=\"text-muted\">(15 KB)</small>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n\n                    <!--Download button-->\n                    <div class=\"mail-attach-btn\"><a href=\"#\" class=\"btn btn-purple btn-sm\">Download</a></div>\n\n                    <!--File information-->\n                    <div class=\"mail-attach-file\">\n                        <span class=\"mail-attach-label\">\n                            <span class=\"label label-warning  text-uppercase\">Video</span>\n                        </span>\n                        <div class=\"media-body\">\n                            <div class=\"text-bold\"><a href=\"#\">VID_007.mp4</a></div>\n                            <small class=\"text-muted\">(178 MB)</small>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <!--===================================================-->\n        <!-- End Attach Files-->\n\n\n        <!--Quick reply : Summernote Placeholder -->\n        <div id=\"demo-mail-textarea\" class=\"mail-message-reply bg-gray-light\">\n            <strong>Reply</strong> or <strong>Forward</strong> this message...\n        </div>\n\n        <!--Send button-->\n        <div class=\"pad-ver\">\n            <button id=\"demo-mail-send-btn\" type=\"button\" class=\"btn btn-primary hide\">\n                <span class=\"fa fa-paper-plane\"></span>\n                Send Message\n            </button>\n        </div>\n    </div>\n</div>\n<!--===================================================-->\n<!-- END VIEW MESSAGE -->\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/converse/SingleConversation.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],88:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

module.exports = {

  //template: '#customers-page-template',

  //inherit: true,

  data: function data() {
    return {
      customerResource: this.$resource('api/customer/:options'),
      customers: {}
    };
  },
  methods: {},
  components: {
    //'navpagebutton': require('./navpagebutton.js')
  },
  created: function created() {
    console.log('<< customers.js >> Component Created');
  },
  ready: function ready() {
    console.log('<< customers.js >> Component Ready');
    this.customerResource.get( //{options: ""},
    function (customerData, status, request) {
      this.$set('customers', customerData);
    }).error(function (customerData, status, request) {
      console.log("<< customers.js >> Errrr@ready->this.eployee.get()");
    });
  }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"col-lg-12\">\n        <!--Primary Panel-->\n        <!--===================================================-->\n        <div class=\"panel panel-bordered panel-dark\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-control\">\n                    <span class=\"label label-danger\">?#? Customers</span>\n                    <button class=\"btn btn-default\" data-target=\"#demo-panel-collapse\" data-toggle=\"collapse\" aria-expanded=\"true\"><i class=\"fa fa-chevron-down\"></i></button>\n                    <button class=\"btn btn-default\" data-dismiss=\"panel\"><i class=\"fa fa-times\"></i></button>\n                </div>\n                <h3 class=\"panel-title\">Customers</h3>\n            </div>\n            <div id=\"demo-panel-collapse\" class=\"collapse in panel-body\" aria-expanded=\"true\">\n\n                \n                    <div class=\"col-md-4 col-lg-4\">\n\n                    <!--Profile Widget-->\n                    <!--===================================================-->\n                    <div class=\"panel widget\">\n                        <div class=\"widget-header bg-mint\"></div>\n                        <div class=\"widget-body text-center\">\n                           {{--  @include('partials.user.avatar')  --}}\n                                <a class=\"users-list-name\" href=\"/employee/{{-- $user->id --}}\"><h4 class=\"mar-no\">{{-- $user-&gt;username --}}</h4></a>\n                            <p class=\"text-muted mar-btm\">{{-- $user-&gt;employeeInfo-&gt;title --}}</p>\n                            <span class=\"users-list-date\">{{-- $user-&gt;date_joined --}}</span>\n                            <div class=\"pad-ver\">\n                                <button class=\"btn btn-primary\">Edit</button>\n                                {!! Form::open(['method' =&gt; 'DELETE', 'url' =&gt; 'employee/ ' ]) !!}\n                                {!! Form::submit('Delete', ['class' =&gt; 'btn btn-warning btn-active-error']) !!}\n                                {!! Form::close() !!}\n                                <button class=\"btn btn-success\">Message</button>\n                            </div>\n                        </div>\n                    </div>\n                    <!--===================================================-->\n\n                </div>\n\n                \n\n            </div>\n        </div>\n        <!--===================================================-->\n        <!--End Primary Panel-->\n    </div>\n    \n\n<pre v-show=\"dataMode\">@{{ $data | json }}</pre>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/customer/Customers.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'new-customer',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'new customer'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"new-customer\">\n  comming\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/customer/New.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],90:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  data: function data() {
    return {
      employeeResource: this.$resource('api/employee/:options'),
      employees: {}
    };
  },
  methods: {},
  components: {
    //'navpagebutton': require('./navpagebutton.js')
  },
  created: function created() {
    console.log('<< employees.js >> Component Created');
  },
  ready: function ready() {
    console.log('<< employees.js >> Component Ready');
    this.employeeResource.get( //{options: ""},
    function (employeeData, status, request) {
      this.$set('employees', employeeData);
    }).error(function (data, status, request) {
      console.log("<< employees.js >> Errrr@ready->this.eployee.get()");
    });
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<pre>@{{ $data | json }}</pre>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/employee/Employees.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'employee-new',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'name'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"employee-new\">\n  Comming soon\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/employee/New.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {};
    },

    methods: {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<p>hello inventory</p>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/inventory/Inventory.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],93:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inventory = require('./inventory.vue');

var _inventory2 = _interopRequireDefault(_inventory);

var _workbook = require('./workbook.vue');

var _workbook2 = _interopRequireDefault(_workbook);

var _inventoryDropzone = require('../../../api/inventoryDropzone.js');

var _inventoryDropzone2 = _interopRequireDefault(_inventoryDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////////////////////////////////////////////////
// VUE Project system [ START ]
exports.default = {
    template: '#metrc-calculator-template',
    data: function data() {
        return {
            //users: $(bosspos.usersBasic),
            currentUser: false,
            components: ['projects', 'tasks', 'conversations', 'comments'], // 'workbook', 'inventory', 'sheets',
            workbooks: [],
            sheets: {},
            inventories: { a: 1, b: 2, c: 3, d: 4 },
            projects: {},
            tasks: {},
            conversations: {},
            comments: {},
            projectVisibility: 'active'
        };
    },

    methods: {
        /*
         * New Objects
         * each calls save method to persist
         */
        createNewInventory: function createNewInventory(user_id) {
            var newInventory = {
                'product_id': this.id,
                'name': 'pot',
                'rfid': '',
                'class': 'info',
                'unit_count': '',
                'user_id': this.currentUser,
                'facility_id': '',
                'conversation_id': '',
                'project_id': '',
                'history': '',
                'deleted': false
            };
            this.save(newProject, 'projects', 'new');
        },

        /*
         * Persistence Success methods
         * each handles its actions success
         */
        newPersisted: function newPersisted(objectList, newObject) {
            //console.log('saved', newObject[newObject.length - 1].id,'pushing to',objectList);
            this[objectList].push(newObject[newObject.length - 1]);
        },
        updatePersisted: function updatePersisted(type, returned, obj) {
            //console.log('saved',type, obj.id); //
        },
        deletePersisted: function deletePersisted(objectType, deletedObject, obj) {
            var list = this[objectType];
            for (var i in this[objectType]) {
                if (list[i].id == obj.id) {
                    list.splice(i, 1);
                }
            } // Find deleted object and remove it from list
        },
        /*
         * Component called  methods
         * each handles its components requested action
         */
        softDelete: function softDelete(objectID, action) {
            var model = this.pullApartObjectID(objectID);
            console.log(objectID, model);
            for (var i in model.obj) {
                if (model.obj[i].id == model.id) {
                    //console.log(model.obj[i].deleted)
                    model.obj[i].deleted = !model.obj[i].deleted; //Toggle deleted Var
                    //console.log(model.obj[i].deleted)
                    this.save(model.obj[i], model.type, action); // Persist
                }
            }
        },
        permanentTrash: function permanentTrash(objectID) {
            var model = this.pullApartObjectID(objectID);
            for (var i in model.obj) {
                if (model.obj[i].id == model.id) {
                    this.save(model.obj[i], model.type, 'delete');
                }
            }
        },
        /*
         * Vue Object persistence
         * obj = component/object to persist
         * objType = name of object
         * action = will accept (update, new, delete)
         */
        save: function save(obj, objType, action) {
            this.$http.post('/api/' + action + '/' + objType, obj, function (model, status, request) {}).success(function (model) {
                this.$set(objType, model);
                //this[action+'Persisted'](objType, model, obj)
            });
        },
        /*
         * fetch component objects
         */
        fetch: function fetch(component) {
            this.$http.get('/api/' + [component], function (project) {
                this.$set(component, project);
            });
        },

        /*
         * Helper Methods
         */
        pullApartObjectID: function pullApartObjectID(objectID) {
            var modelId = objectID.id.substr(objectID.id.indexOf('_') + 1, objectID.id.length);
            var modelType = objectID.id.substr(0, objectID.id.indexOf('_'));
            var that = this[modelType];
            return { obj: that, id: modelId, type: modelType };
        }
    },

    ready: function ready() {
        for (var i in this.components) {
            this.fetch(this.components[i]);
        }
        _inventoryDropzone2.default.inventoryDropzoneTemplate();
        _inventoryDropzone2.default.myDropzone();

        console.log(_inventoryDropzone2.default);
        console.log(this);
    }
};

// VUE system [ END ]
//////////////////////////////////////////////////////////////

//var InventoryDropzone = require('../ui/inventoryDropzone.js');

function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = strDelimiter || ",";
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))", "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];

        //console.log(arrMatches);

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).

        if (arrMatches[2]) {
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            var strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
        } else {
            // We found a non-quoted value.
            var strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return arrData;
}

function metrcCsv2Json(csv, fileName) {
    var array = CSVToArray(csv);
    var obj = {};
    var g = fileName.slice(0, 17);
    if (g = "PackagesInventory") {
        obj = metricCVS(array);
    }
    console.log('finished ' + obj);
    return obj;
}

function metricCVS(array) {
    var h = array[11][2];
    var recordCount = Number(h.replace(/^\D+/g, ''));
    obj = { title: array[1][4] };
    obj = { dates: array[2][4] };
    obj = { name: array[8][3] };
    obj = { license: array[9][3] };
    obj = { type: array[10][3] };
    obj = { records: recordCount };
    //array[0].splice(0, 167);
    var colCount = array[0].length;
    var keysArray = [];
    for (var k = 0; k < colCount; k++) {
        var key = array[12][k];
        if (key !== undefined) {
            keysArray.push(array[12][k]);
        } else {
            keysArray.push("-");
        }
    }
    var obj = { i: {} };
    for (var i = 13; i < recordCount + 13; i++) {
        var key = 0;
        obj[i] = {};
        for (var k = 0; k < colCount - 1; k++) {
            var value = array[i][k];
            if (value != '-' && keysArray[key] !== 'Harvest') {
                obj[i][keysArray[key]] = value;
                key++;
            } else {
                if (keysArray[key] == 'Harvest') {
                    key++;
                    k + 3;
                    //array[0].shift();
                    //array[0].shift();
                }
            }
        }
    }
    return obj;
}

/*
var csv = '' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","Packages Inventory","","","","","","","","","","" ' +
    '"","","","","From 10/1/2014 to 10/31/2014","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","","","","","","","","","","","","","" ' +
    '"","","Name","SOULSHINE MEDICAL CONSULTING LLC","","","","","","","","","","","" ' +
    '"","","License","402-00332","","","","","","","","","","","" ' +
    '"","","Type","MMC Type 1","","","","","","","","","","","" ' +
    '"","","Total Records: 11","","","","","","","","","","","","" ' +
    '"","","Tag","","","Harvest","Item","","Item Category","Quantity","Lab Testing","Date","","","" ' +
    '"","","1A4000500266EFD100000116","","","10/10","DURBAN POISON","","Buds","33.07 g","NotSubmitted","10/10/2014","","","" ' +
    '"","","1A4000500266EFD100000117","","","10/10","nycd","","Buds","59.25 g","NotSubmitted","10/10/2014","","","" ' +
    '"","","1A4000100265688C0000004A","","","","chocolope","","Buds","208.41 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004D","","","","lemon diesel","","Buds","289.69 g","NotSubmitted","10/23/2014","","","" ' +
    '"","","1A4000100265688C0000004E","","","","sour diesel","","Buds","108.23 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004F","","","","texas hash","","Buds","311.95 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C00000050","","","","Concentrates","","Concentrate","156 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004B","","","","critical mass","","Buds","253.03 g","NotSubmitted","10/21/2014","","","" ' +
    '"","","1A4000100265688C0000004C","","","","jah kush","","Buds","55.78 g","NotSubmitted","10/23/2014","","","" ' +
    '"","","1A4000100265688C00000051","","","","Edibles","","Infused (edible)","311 ea","TestPassed","10/21/2014","","","" ' +
    '"","","1A4000100265688C00000052","","","","Non-Edibles (Topicals)","","Infused (non-edible)","95 ea","NotSubmitted","10/21/2014","","",""';
*/
//console.log(metrcCsv2Json(csv));
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"ComplianceCalculator\">\n                    <div class=\"table table-striped\" id=\"dropzone-previews\">\n                <div id=\"template\" class=\"file-row\">\n                    <!-- This is used as the file preview template -->\n                    <div>\n\n                        <strong class=\"error text-danger\" data-dz-errormessage=\"\"></strong>\n\n                        <span class=\"name\" data-dz-name=\"\"></span>\n                        <span class=\"size\" data-dz-size=\"\"></span>\n                        <div class=\"progress progress-striped progress-sm active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\">\n                            <div class=\"progress-bar progress-sm progress-bar-success\" style=\"width:0%;\" data-dz-uploadprogress=\"\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div v-repeat=\" workbook in workbooks \">\n                <div class=\"col-md-6 pull-left\">\n                    <workbook>\n                        <div v-repeat=\"inventory in inventories\">\n                            <inventory>\n                            </inventory>\n                        </div>\n                    </workbook>\n                </div>\n            </div>\n\n        </div><!-- End ComplianceCalculator -->\n\n    <div>\n\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/inventory/Inventorycalculator.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../api/inventoryDropzone.js":55,"./inventory.vue":94,"./workbook.vue":95,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {};
    },

    methods: {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<p>hello inventory</p>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/inventory/inventory.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],95:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

module.exports = {

    // Template script is imported via partials blade template
    //template: document.querySelector('#WorkbookTemplate'),

    // Inherit the data from the parent class
    //inherit: true,

    props: {
        onDelete: {},
        onRestore: {},
        onTrash: {},
        onChange: {},
        currentUser: {
            type: Number
        }
    },

    data: function data() {
        return {
            //completed: this.project.deleted,
            taskVisibility: 'active',
            conversationVisibility: 'active',
            typingTimer: {}
        };
    },
    methods: {

        /*
        * Report a change in the project
        * Handles textField height : e = event
        * Calls onChange if the timer is allowed to count down
        * Requests parent to persist item
        */
        projectChanged: function projectChanged(e) {
            if (e.target.type == 'textarea') {
                autosize(e.target);
                var targetID = '#' + e.target.id;
                this.project.description_height = $(targetID).height();
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function () {
                e.targetVM.onChange(e.targetVM.project, 'projects', 'update');
            }, 2500);
        },
        toggleSoftDelete: function toggleSoftDelete(e) {
            this.onDelete(e.path[3], 'update');
        },
        trashThis: function trashThis(e) {
            this.onTrash(e.path[3], 'delete');
        },
        createNewTask: function createNewTask() {
            var newTask = {
                "title": "Task Title",
                "description": "New Task Details",
                "description_height": 100,
                "class": "info",
                "due_time": "12:00:00",
                "due_date": "2017-01-20",
                "owner_id": 0,
                "project_id": this.project.id,
                "delegated_id": 0,
                "facility_id": 1,
                "creator_id": this.currentUser,
                "deleted_at": null
            };
            this.onChange(newTask, 'tasks', 'new');
        },
        createNewConversation: function createNewConversation() {
            var newConversation = {
                "title": "Note Title",
                "description": "A new note",
                "description_height": 100,
                "class": "info",
                "owner_id": this.project.id,
                "owner_type": 'project',
                "facility_id": 1,
                "user_id": this.currentUser
            };
            this.onChange(newConversation, 'conversations', 'new');
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<table class=\"table table-striped table-bordered dataTable no-footer dtr-inline\">\n            <tbody><tr v-repeat=\"item in workbook\">\n                <td v-repeat=\"detail in item\">\n                    <span>@{{ detail }}</span>\n                </td>\n            </tr>\n        </tbody></table>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/inventory/workbook.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],96:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions.js');

exports.default = {
  name: 'DashboardHome',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'DashboardHome'
    };
  },


  vuex: {
    getters: {
      menuData: function menuData(_ref) {
        var menus = _ref.menus;
        return menus.DashboardMenu;
      }
    },
    actions: {
      setMenuActive: _actions.setMenuActive,
      setMenu: _actions.setMenu
    }
  },
  ready: function ready() {
    //this.setMenu('DashboardMenu')
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"main-nav-menu\">\n  <div class=\"inline-block pad-all\" v-for=\"button in menuData\">\n    <nav-page-button :button=\"button\" :edit-mode=\"editMode\"></nav-page-button>\n  </div>\n  <div class=\"inline-block pad-all\">\n    <button v-if=\"$root.editMode\" class=\"mtrl-btn mtrl-raised mtrl-btn-dashboard bg-off-white\" @click=\"$root.addNavButton()\"><i class=\"fa fa-4x fa-plus\"></i></button>\n  </div>\n <pre v-if=\"dataMode\">{{ $data | json }}</pre>\n</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/NavPage.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions.js":123,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],97:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".edit-btn {\n  position: absolute;\n  z-index: 10;\n  padding: 6px 2px;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['button', 'editMode']
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"pad-no edit-btn\" v-if=\"$root.editMode\">\n  <a style=\"padding:10px 5px\" @click=\"$root.editButton(button)\" class=\"pad-no text-bold text-bright\"><i class=\"fa fa-edit\"></i></a>\n</div>\n<objecteditor v-if=\"$root.editMode\" :object=\"button\"></objecteditor>\n  <a :id=\"button.id\" v-link=\"button.href\" class=\"mtrl-btn mtrl-raised mtrl-btn-dashboard bg-off-white\">\n  \n    <!-- :class=\"button.class\" -->\n  <i :class=\"'fa fa-4x ' + button.icon\"></i>\n  <p class=\"dashboard-text\" v-text=\"button.label\"></p>\n  <span v-if=\"button.notification_text\" :class=\"'pull-right badge badge-'+button.notification_color+' '+button.notification_style\" v-text=\"button.notification_text\">\n  </span>\n</a>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/NavPageButton.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".edit-btn {\n  position: absolute;\n  z-index: 10;\n  padding: 6px 2px;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],98:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions.js');

exports.default = {
  name: 'DashboardHome',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'DashboardHome'
    };
  },


  vuex: {
    getters: {
      menuData: function menuData(_ref) {
        var menus = _ref.menus;
        return menus.DashboardMenu;
      }
    },
    actions: {
      setMenuActive: _actions.setMenuActive,
      setMenu: _actions.setMenu
    }
  },
  ready: function ready() {
    //this.setMenu('DashboardMenu')
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"main-nav-menu\">\n  <div class=\"inline-block pad-all\" v-for=\"button in menuData\">\n    <nav-page-button :button=\"button\" :edit-mode=\"editMode\"></nav-page-button>\n  </div>\n  <div class=\"inline-block pad-all\">\n    <button v-if=\"$root.editMode\" class=\"mtrl-btn mtrl-raised mtrl-btn-dashboard bg-off-white\" @click=\"$root.addNavButton()\"><i class=\"fa fa-4x fa-plus\"></i></button>\n  </div>\n <pre v-if=\"dataMode\">{{ $data | json }}</pre>\n</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/Navpage.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions.js":123,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../../vuex/actions.js');

exports.default = {
  name: 'PrimaryMenu',
  data: function data() {
    return {};
  },


  vuex: {
    getters: {
      menuData: function menuData(_ref) {
        var menus = _ref.menus;
        return menus.primary;
      }
    },
    actions: {
      setMenuActive: _actions.setMenuActive,
      setMenu: _actions.setMenu
    }
  },
  events: {
    menuActive: function menuActive(btn) {
      this.setMenuActive(btn);
      return true;
    }
  },
  ready: function ready() {
    this.setMenu('primary');
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"main-menu\">\n\t<menubutton v-for=\"button in menuData\" :button=\"button\"></menubutton>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/materialTheme/MainMenu.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../../vuex/actions.js":123,"vue":49,"vue-hot-reload-api":38}],100:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".btn {\n  border-radius: 0;\n  border: 0;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'PrimaryMenuButton',
  parent: 'PrimaryMenu',
  props: ['button'],
  data: function data() {
    return {
      active: false, //this.active,
      menuLoaded: false,
      subMenuId: 'sub-menu-' + this.button.id,
      subHeight: 0,
      subMenuExists: ''
    };
  },

  computed: {
    active: function active() {
      if (this.menuLoaded) {
        var subMenu = document.getElementById(this.subMenuId);
        if (this.button.active) {
          this.openSub(subMenu);
        } else {
          this.closeSub(subMenu);
        }
        return this.button.active;
      }
    }
  },
  methods: {
    closeSub: function closeSub(el) {
      dynamics.animate(el, {
        opacity: 0,
        height: 0
      }, {
        type: dynamics.easeInOut,
        duration: 300,
        friction: 100
      });
    },
    openSub: function openSub(el) {
      var that = this;

      dynamics.animate(el, {
        opacity: 1,
        height: that.button.sub.length * 35
      }, {
        type: dynamics.spring,
        frequency: 100,
        friction: 300,
        duration: 1000
      });
    },
    fireButtonEvent: function fireButtonEvent() {
      if (this.button.menu_name == 'primary') {
        this.$dispatch('menuActive', this.button);
      }
    }
  },
  events: {
    handelSubMenu: function handelSubMenu(id) {
      if (id == this.button.id) {
        this.active = true;
        this.openSub(this.subMenuId);
      } else {
        this.active = false;
        this.closeSub(this.subMenuId);
      }
    }
  },
  ready: function ready() {
    var subMenu = document.getElementById(this.subMenuId);
    dynamics.animate(subMenu, {
      opacity: 0,
      scale: .1
    }, {
      type: dynamics.easeInOut,
      duration: 300,
      friction: 100
    });
    this.closeSub(subMenu);
    this.menuLoaded = true;
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\t\t<!-- :class=\"{'hover-active' : hover}\" -->\n<div class=\"mtrl\" :class=\" active ? 'mtrl-hover-enter' : 'mtrl-hover-leave'\">\n    <!-- :href=\"button.url\"  -->\n  <a class=\"btn menu-button\" :class=\"active ? 'active' : ''\" @click=\"fireButtonEvent\" v-link=\"button.href\" v-text=\"button.label\"></a>\n\t<div :id=\"subMenuId\">\n    <submenubutton v-for=\"button in button.sub\" :button=\"button\"></submenubutton>\n\t</div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/materialTheme/MenuButton.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".btn {\n  border-radius: 0;\n  border: 0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],101:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".btn {\n  border-radius: 0;\n  border: 0;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'SubMenuButton',
    parent: 'PrimaryMenuButton',
    props: ['button'],
    data: function data() {
        return {
            hover: false
        };
    },

    methods: {},
    events: {
        handelSubMenu: function handelSubMenu(id) {}
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<a :href=\"button.url\" class=\"btn menu-button\" v-text=\"button.label\"></a>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/materialTheme/SubMenuButton.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".btn {\n  border-radius: 0;\n  border: 0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],102:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n/*.v-link-active \n  color: purple\n  padding-left: 20px\n  font-weight: bold\n  box-shadow:inset 2px 2px 2px  4px #999*/\n")
'use strict';

var _actions = require('../../../../vuex/actions');

var _getters = require('../../../../vuex/getters');

module.exports = {
  name: 'Primary Navigation',
  logHooksToConsole: true,
  watchModes: true,

  data: function data() {
    return {
      pageTitle: 'Main Navigation',
      editMode: false,
      dataMode: false,
      //objectResource: this.$root.mainnav,
      //buttonEditorTemplate: $('#object-editing-form').html(),
      currentIcon: 'fa-question',
      menuId: 1
    };
  },


  vuex: {
    getters: {
      //getMenuData,
      _menuData: function _menuData(_ref) {
        var menus = _ref.menus;
        return menus.adminPrimary;
      },
      changedRoute: _getters.getRoute
    },
    actions: {
      setSetting: _actions.setSetting,
      setMenuActive: _actions.setMenuActive,
      changeRoute: _actions.changeRoute,
      setMenu: _actions.setMenu
    }
  },

  computed: {
    menuData: function menuData() {
      return this._menuData;
    }
  },

  events: {
    menuActive: function menuActive(btn) {
      this.setSetting('ticketsAdmin', false);
      this.$broadcast('checkButton', btn);
      return true;
    }
  },

  methods: {
    clicked: function clicked(btn) {
      this.setMenuActive(btn);
    },
    addButton: function addButton() {
      // click add new button
      // details for button entered by user
      //    - walk through details step by step
      //    - new page or popup with general form for backup (exists first)
      // button details are persisted to database
      // button added to live Vue
      //var newButton = this.buttonTemplate;
      var newButton = {
        id: null,
        label: 'New Button',
        href: '#',
        icon: 'fa-question',
        name: 'new_button',
        menu_id: 0,
        menu_name: 'mainnav',
        menu_order: this.menudata.length + 1,
        family: 'button',
        type: 'navigation',
        owner_id: this.menuId,
        owner_type: 'mainnav'
      };

      this.objectResource.save({ objectType: "interfaceObjects" }, newButton, function (data, status, request) {
        this.menudata.push(data);
      }).error(function (data, status, request) {
        //console.log("%cSomething went wrong with (mainnav.js->addButton->object.save) Error Stat = %s here is the request = %s", this.$root.logErr, status, request)
      });
    }
  },
  ready: function ready() {
    this.setMenu('adminPrimary');
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <!-- MAIN NAVIGATION -->\n  <!--===================================================-->\n<nav id=\"mainnav-container\">\n  <div id=\"mainnav\">\n  <shortcutbuttons></shortcutbuttons>\n    <!--Menu--> \n    <!--================================-->\n    <div id=\"mainnav-menu-wrap\">\n      <div class=\"nano\">\n        <div class=\"nano-content\">\n          <ul id=\"mainnav-menu\" class=\"list-group\">\n\n            <!--Category name-->\n            <li class=\"list-header\">Navigation </li>\n\n            <!--Menu list item-->\n            <main-nav-button v-for=\"button in menuData\" :button=\"button\"></main-nav-button>\n\n            <li>\n              <a v-link=\"'/dashboard/help-desk'\">\n                <i class=\"fa fa-question\"></i>\n                <span class=\"menu-title\">\n                  <strong>Help Desk</strong>\n                </span>\n                <span class=\"pull-right badge badge-success\" v-text=\"'0?'\"></span>\n              </a>\n            </li>\n\n            <li>\n              <a v-link=\"'/dashboard/super-admin'\">\n                <i class=\"fa fa-question\"></i>\n                <span class=\"menu-title\">\n                  <strong>Super Admin</strong>\n                </span>\n                <span class=\"pull-right badge badge-success\" v-text=\"'0'\"></span>\n              </a>\n            </li>\n\n            <li class=\"list-divider\"></li>\n\n            <li v-if=\"editMode\" @click=\"addButton\">\n            <a> + Create New Button</a></li>\n          </ul>\n\n          <menuwidget></menuwidget>\n \n        </div>\n      </div>\n    </div>\n    <!--================================-->\n    <!--End menu-->\n\n  </div>\n</nav>\n<!--===================================================-->\n<!--END MAIN NAVIGATION-->\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/nifty/MainNav.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n/*.v-link-active \n  color: purple\n  padding-left: 20px\n  font-weight: bold\n  box-shadow:inset 2px 2px 2px  4px #999*/\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../../vuex/actions":123,"../../../../vuex/getters":124,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mainnavbutton',
  props: ['button'],
  watchModes: true,

  data: function data() {
    return {
      objectResource: this.$resource('/:objectType'),
      currentView: false,
      editMode: false,
      view: "MainNav",
      active: false
    };
  },


  computed: {
    isFolder: function isFolder() {
      return this.button.submenu && this.button.submenu.length;
    }
  },

  methods: {
    // When a Menu Button is clicked tell parent to inform all buttons

    buttonClicked: function buttonClicked(btn) {
      this.$dispatch('menuActive', btn);
    },

    // When parent broadcasts even if this is the button
    // original call came from handel it here.
    clickHandler: function clickHandler(btn) {
      if (btn.value === 'isFirstFolder') {
        this.active = !this.active;
      }
      if (btn.value === 'isThirdTier' || btn.value === 'isSecondTier' || btn.value === 'isSecondFolder') {
        //console.log('Bang from 2nd tier')
        this.$parent.active = true;
        this.active = !this.active;
      }
    },


    // TODO make this work by altering the store
    changeType: function changeType() {
      if (!this.isFolder && this.button.value != 'isThirdTier') {
        this.button.$add('submenu', []);
        this.button.value = 'isFolder';
        this.addButton();
        this.open = true;
        this.save(this.button.id);
      }
    },

    addButton: function addButton() {
      var newButton = {
        id: null,
        href: '',
        icon: 'fa-question',
        label: 'New Button',
        name: 'new_button',
        value: '',
        menu_id: this.button.id,
        menu_name: this.button.name,
        menu_order: this.button.submenu.length + 1,
        family: 'button',
        type: 'navigation',
        owner_id: this.button.id,
        owner_type: 'mainnav'
      };

      this.objectResource.save({ objectType: "interfaceObjects" }, { newButton: newButton }, function (data, status, request) {
        console.log("%cmainnavbutton.js->addButton->objectArray.save)", this.$root.logGood);
        this.button.submenu.push(data);
      }).error(function (data, status, request) {
        console.log("%cmainnavbutton.js->addButton->objectArray.save) Error", this.$root.logErr);
      });
    }
  },

  created: function created() {
    this.editMode = this.$root.editMode;
    this.$watch("$root.editMode", function (response) {
      this.editMode = response;
    });
    this.dataMode = this.$root.dataMode;
    this.$watch("$root.dataMode", function (response) {
      this.dataMode = response;
    });

    this.$on('checkButton', function (btn) {
      if (btn === this.button) {
        this.clickHandler(btn);
      } else {
        this.active = false;
      }
      return true;
    });
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = " \n<!-- <li :class=\"active ? 'active' : ''\" > -->\n<li v-link-active=\"\">\n  <div class=\"col-xs-2 pad-no\" v-if=\"editMode\"> \n    <a style=\"padding:10px 10px\" @click=\"$root.editButton(button)\" class=\"pad-no text-bold text-bright\"><i class=\"fa fa-edit\"></i></a>\n  </div>\n  <objecteditor :object=\"button\"></objecteditor>\n    <a @click=\"buttonClicked(button)\" @dblclick=\"changeType\" v-link=\"button.href\"><i :class=\"'fa ' +button.icon\"></i>\n      <span class=\"menu-title\">\n        <strong v-text=\"button.label\"></strong>\n      </span>\n          <i v-if=\"isFolder\" class=\"arrow\"></i>\n        <span v-if=\"hasBadge\" class=\"pull-right badge badge-success\"></span>\n    </a>\n    <ul class=\"collapse\" :class=\"{'in': active}\">\n      <main-nav-button v-for=\"button in button.submenu\" :button=\"button\"></main-nav-button>\n        <li v-if=\"editMode\" @click=\"addButton\">\n      <a> + Create New Button</a></li>\n    </ul>\n</li>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/nifty/MainNavButton.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Menu Widget',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'MainNav Widget Container '
    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"menu-widget\">\n            <!--Widget-->\n        <!--================================-->\n        <div class=\"mainnav-widget\">\n\n          <!-- Show the button on collapsed navigation -->\n          <div class=\"show-small\">\n            <a href=\"#\" data-toggle=\"menu-widget\" data-target=\"#demo-wg-server\">\n              <i class=\"fa fa-desktop\"></i>\n            </a>\n          </div>\n\n          <!-- Hide the content on collapsed navigation -->\n          <div id=\"demo-wg-server\" class=\"hide-small mainnav-widget-content\">\n            <ul class=\"list-group\">\n              <li class=\"list-header pad-no pad-ver\">Server Status</li>\n              <li class=\"mar-btm\">\n                <span class=\"label label-primary pull-right\">15%</span>\n                <p>CPU Usage</p>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar progress-bar-primary\" style=\"width: 15%;\">\n                    <span class=\"sr-only\">15%</span>\n                  </div>\n                </div>\n              </li>\n              <li class=\"mar-btm\">\n                <span class=\"label label-purple pull-right\">75%</span>\n                <p>Bandwidth</p>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar progress-bar-purple\" style=\"width: 75%;\">\n                    <span class=\"sr-only\">75%</span>\n                  </div>\n                </div>\n              </li>\n              <li class=\"pad-ver\"><a href=\"#\" class=\"btn btn-success btn-bock\">View Details</a></li>\n            </ul>\n          </div>\n        </div>\n        <!--================================-->\n        <!--End widget-->\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/nifty/MenuWidget.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Shortcut Buttons',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'MainNav Shortcut Buttons'
    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<!--Shortcut buttons--> \n<!--================================-->\n<div id=\"mainnav-shortcut\">\n  <ul class=\"list-unstyled\">\n    <li class=\"col-xs-3\" data-content=\"Sidebar Menu\">\n      <a id=\"demo-toggle-aside\" class=\"shortcut-grid\" href=\"#\">\n        <i class=\"fa fa-magic\"></i>\n      </a>\n    </li>\n    <li class=\"col-xs-3\" data-content=\"A Demo Notification\">\n      <a id=\"demo-alert\" class=\"shortcut-grid\" href=\"#\">\n        <i class=\"fa fa-bullhorn\"></i>\n      </a>\n    </li>\n    <li class=\"col-xs-3\" data-content=\"Help Desk\">\n      <a id=\"Help-Desk\" class=\"shortcut-grid\" v-link=\"help-desk\">\n        <i class=\"fa fa-exclamation\"></i>\n      </a>\n    </li>\n    <li class=\"col-xs-3 pad-top\" data-content=\"Go Home\">\n      <a id=\"dash-to-home\" class=\"shortcut-grid\" v-link=\"dashboard\"><i class=\"fa fa-home\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n<!--================================-->\n<!--End shortcut buttons-->\t\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/navigation/nifty/ShortcutButtons.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],106:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".hack-frame {\n  padding: 0;\n  width: 100%;\n  height: 1000px;\n  margin: 0;\n  border: 0;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions');

exports.default = {
  name: 'SuperAdmin',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'Help Desk'
    };
  },
  //isOn: false,

  vuex: {
    actions: {
      setSetting: _actions.setSetting
    }
  },
  methods: {
    // turnOn(bool){
    //   this.setSetting('helpDeskVisible', bool)
    // }
  },

  ready: function ready() {
    //this.turnOn(this.isOn)
    // console.log(this.$route.path)
    // this.$watch('$route.path', function(cb){
    //   //this.turnOn(!this.isOn)
    //   console.log('cb')
    //   console.log(cb)
    // })
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"SuperAdmin\">\n  <iframe class=\"hack-frame\" src=\"http://localhost:3000/modelAdmin\"></iframe>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/pages/FrozenNodeAdmin.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".hack-frame {\n  padding: 0;\n  width: 100%;\n  height: 1000px;\n  margin: 0;\n  border: 0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions":123,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],107:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".hack-frame {\n  padding: 0;\n  width: 100%;\n  height: 1000px;\n  margin: 0;\n  border: 0;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions');

exports.default = {
  name: 'help-desk',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'Help Desk'
    };
  },
  //isOn: false,

  vuex: {
    actions: {
      setSetting: _actions.setSetting
    }
  },
  methods: {
    // turnOn(bool){
    //   this.setSetting('helpDeskVisible', bool)
    // }
  },

  ready: function ready() {
    //this.turnOn(this.isOn)
    // console.log(this.$route.path)
    // this.$watch('$route.path', function(cb){
    //   //this.turnOn(!this.isOn)
    //   console.log('cb')
    //   console.log(cb)
    // })
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <div class=\"tickets\">\n    <!--Page content-->\n    <!--===================================================-->\n    <!--VUE ROUTER checks for nested componants -->\n    \n  <iframe class=\"hack-frame\" src=\"http://localhost:3000/tickets\"></iframe>\n\t\t<!--===================================================-->\n\t\t<!--End page content-->\n  </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/pages/TicketsIt.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".hack-frame {\n  padding: 0;\n  width: 100%;\n  height: 1000px;\n  margin: 0;\n  border: 0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions":123,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],108:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".checkout {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _NumPad = require('./NumPad.vue');

var _NumPad2 = _interopRequireDefault(_NumPad);

var _SalesReceipt = require('./SalesReceipt.vue');

var _SalesReceipt2 = _interopRequireDefault(_SalesReceipt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Checkout',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data: function data() {
        return {
            pageTitle: 'Checkout',
            numpadEntry: '',
            fullNumber: 0,
            numbers: []
        };
    },


    computed: {},

    methods: {},

    components: {
        'numberpad': _NumPad2.default,
        'salewindow': _SalesReceipt2.default
    }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"checkout\">\n    <salewindow :numpad-entry=\"numpadEntry\"></salewindow>\n    <numberpad></numberpad>\n    \n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/pos/Checkout.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".checkout {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./NumPad.vue":109,"./SalesReceipt.vue":110,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],109:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".numbers {\n  width: 370px;\n  border: 1px #000 solid;\n  background: #999;\n}\n.numbers .numbers-pad {\n  width: 100%;\n  height: 340px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px #33abb7 solid;\n}\n.numbers .numbers-pad > button {\n  margin: 2.2% 2.8% 2.8% 2.2%;\n  width: 15%;\n  height: 19%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: -webkit-linear-gradient(top, #e2e2e2 0%, #dbdbdb 48%, #d1d1d1 52%, #fefefe 100%);\n  background: linear-gradient(to bottom, #e2e2e2 0%, #dbdbdb 48%, #d1d1d1 52%, #fefefe 100%);\n  box-shadow: 2px 2px 6px #000;\n  border-radius: 5px;\n}\n.numbers .numbers-pad > button:active {\n  color: #33abb7;\n  margin: 2.5% 2.5% 2.5% 2.5%;\n  box-shadow: 0px 0px 3px #000;\n}\n.numbers .numbers-pad > button > span {\n  font-size: 2em;\n  line-height: 1em;\n}\n.numbers .numbers-pad .tall {\n  height: 30%;\n}\n.numbers .numbers-entry-field {\n  width: 100%;\n  font-size: 3em;\n  font-weight: bold;\n  text-align: right;\n  padding: 4px;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
 * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function (n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~ ~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

exports.default = {
    name: 'Numpad',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    props: ['fire'],
    data: function data() {
        return {
            pageTitle: 'NumPad',
            buttons: [{ name: 1, value: 1, style: ' single' }, { name: 4, value: 4, style: ' single' }, { name: 7, value: 7, style: ' single' }, { name: '.', value: '.', style: ' single' }, { name: 2, value: 2, style: ' single' }, { name: 5, value: 5, style: ' single' }, { name: 8, value: 8, style: ' single' }, { name: 0, value: 0, style: ' single' }, { name: 3, value: 3, style: ' single' }, { name: 6, value: 6, style: ' single' }, { name: 9, value: 9, style: ' single' }, { name: '00', value: '00', style: ' single' }, { name: '/', value: '/', style: ' single' }, { name: 'X', value: '*', style: ' single' }, { name: '-', value: '-', style: ' single' }, { name: '+', value: '+', style: ' single' }, { name: '', icon: 'money', value: 'fire', style: ' tall' }, { name: '', icon: 'trash', value: 'kill', style: ' tall' }],
            workingNumber: '',
            savedNumbers: []
        };
    },


    computed: {
        displayNumber: function displayNumber() {
            return Number(this.workingNumber).format(2, 3, ',', '.');
        }
    },

    methods: {
        btnHandeler: function btnHandeler(value) {
            this.numpadKeypress(value);
        },
        numpadKeypress: function numpadKeypress(key) {
            if (key == 'fire') {
                this.saveNumber();
                this.clearNumber();
                return;
            }
            if (key == 'kill') {
                this.clearNumber();
                return;
            }
            return this.workingNumber += key;
        },
        saveNumber: function saveNumber() {
            this.savedNumbers.push(Number(this.workingNumber).toFixed(2));
        },
        clearNumber: function clearNumber() {
            this.workingNumber = '0';
            return;
        },
        clearInput: function clearInput() {
            this.numpadEntry = '';
        }
    },
    ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"numbers\">\n    <input class=\"numbers-entry-field\" v-model=\"displayNumber\">\n    <div class=\"numbers-pad\">\n        <button v-for=\"btn in buttons\" :class=\"btn.style\" class=\"\" @click=\"btnHandeler(btn.value)\" @tap=\"btnHandeler(btn.value)\"><span><i class=\"fa fa-{{btn.icon}}\"></i>{{ btn.name }}</span></button>\n        \n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/pos/NumPad.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".numbers {\n  width: 370px;\n  border: 1px #000 solid;\n  background: #999;\n}\n.numbers .numbers-pad {\n  width: 100%;\n  height: 340px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px #33abb7 solid;\n}\n.numbers .numbers-pad > button {\n  margin: 2.2% 2.8% 2.8% 2.2%;\n  width: 15%;\n  height: 19%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: -webkit-linear-gradient(top, #e2e2e2 0%, #dbdbdb 48%, #d1d1d1 52%, #fefefe 100%);\n  background: linear-gradient(to bottom, #e2e2e2 0%, #dbdbdb 48%, #d1d1d1 52%, #fefefe 100%);\n  box-shadow: 2px 2px 6px #000;\n  border-radius: 5px;\n}\n.numbers .numbers-pad > button:active {\n  color: #33abb7;\n  margin: 2.5% 2.5% 2.5% 2.5%;\n  box-shadow: 0px 0px 3px #000;\n}\n.numbers .numbers-pad > button > span {\n  font-size: 2em;\n  line-height: 1em;\n}\n.numbers .numbers-pad .tall {\n  height: 30%;\n}\n.numbers .numbers-entry-field {\n  width: 100%;\n  font-size: 3em;\n  font-weight: bold;\n  text-align: right;\n  padding: 4px;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],110:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".receipt-window {\n  width: 370px;\n  height: 400px;\n/* TODO Attach nano scroller to this */\n  overflow: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  border: 1px #000 solid;\n  background: #eee;\n}\n.receipt-window .receipt-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 5px;\n}\n.receipt-window .receipt-item .item-controls {\n  width: 15%;\n}\n.receipt-window .receipt-item .item-details {\n  font-size: 1.5em;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  width: 85%;\n}\n.receipt-window .receipt-item .item-details > input {\n  width: 100%;\n  border: none;\n  background-color: none;\n}\n.receipt-window .receipt-item .item-details .item-id {\n  width: 10%;\n}\n.receipt-window .receipt-item .item-details .item-name {\n  width: 50%;\n}\n.receipt-window .receipt-item .item-details .item-price {\n  text-align: right;\n  width: 15%;\n}\n.receipt-window .receipt-item .item-details .item-sku {\n  font-size: 1em;\n  width: 80%;\n}\n.receipt-window .receipt-item .item-details .item-rfid {\n  font-size: 1em;\n  width: 80%;\n}\n.receipt-window .receipt-item .item-details .item-field-sm {\n  width: 20%;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'receipt-window',
    logHooksToConsole: true,
    props: ['numpadEntry'],
    data: function data() {
        return {
            pageTitle: 'ReceiptWindow',
            editField: true,
            discounts: []
        };
    },


    computed: {
        items: function items() {
            //return this.$root.inventories;
        }
    }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"receipt-window\">\n    <div v-for=\"item in items\" class=\"receipt-item\">\n        <div class=\"btn-group-vertical item-controls\">\n            <button class=\"btn btn-info\" @click=\"editField = !editField\"><i class=\"fa fa-edit\"></i></button>\n            <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n        </div>\n        <div class=\"item-details\">\n            <div class=\"item-id\">\n                <span v-text=\"item.id\"></span>\n            </div>\n            <input class=\"item-name\" :disabled=\"editField\" v-model=\"item.inventory.name\">\n            <span>$</span>\n            <input class=\"item-price\" :disabled=\"editField\" v-model=\"item.unit_price\">\n            <span>.00</span>\n            <span>SKU:&nbsp;&nbsp;</span>\n            <input class=\"item-sku\" :disabled=\"editField\" v-model=\"item.product_id\">\n            <span>RFID:&nbsp;&nbsp;</span>\n            <input class=\"item-rfid\" :disabled=\"editField\" v-model=\"item.inventory.rfid\">\n            <span>Count:&nbsp;&nbsp;</span>\n            <input class=\"item-field-sm\" :disabled=\"editField\" v-model=\"item.inventory.unit_count\">\n            <span>Type:&nbsp;&nbsp;</span>\n            <input class=\"item-field-sm\" :disabled=\"editField\" v-model=\"item.inventory.unit_type\">\n        </div> \n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/pos/SalesReceipt.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".receipt-window {\n  width: 370px;\n  height: 400px;\n/* TODO Attach nano scroller to this */\n  overflow: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  border: 1px #000 solid;\n  background: #eee;\n}\n.receipt-window .receipt-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 5px;\n}\n.receipt-window .receipt-item .item-controls {\n  width: 15%;\n}\n.receipt-window .receipt-item .item-details {\n  font-size: 1.5em;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  width: 85%;\n}\n.receipt-window .receipt-item .item-details > input {\n  width: 100%;\n  border: none;\n  background-color: none;\n}\n.receipt-window .receipt-item .item-details .item-id {\n  width: 10%;\n}\n.receipt-window .receipt-item .item-details .item-name {\n  width: 50%;\n}\n.receipt-window .receipt-item .item-details .item-price {\n  text-align: right;\n  width: 15%;\n}\n.receipt-window .receipt-item .item-details .item-sku {\n  font-size: 1em;\n  width: 80%;\n}\n.receipt-window .receipt-item .item-details .item-rfid {\n  font-size: 1em;\n  width: 80%;\n}\n.receipt-window .receipt-item .item-details .item-field-sm {\n  width: 20%;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Profile',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'Profile'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"Profile\">\n  \n  <router-view></router-view>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/profile/Profile.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],112:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _project = require('./project.vue');

var _project2 = _interopRequireDefault(_project);

var _task = require('./task.vue');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'projector',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data: function data() {
        return {
            pageTitle: 'projector',
            showDeleted: false,
            visibleScope: 'active',
            currentUserId: this.$root.currentUser.profile.id
        };
    },

    computed: {
        projects: function projects() {
            return this.$root.projects;
        },
        tasks: function tasks() {
            return this.$root.tasks;
        },
        conversations: function conversations() {
            return this.$root.conversations;
        },
        messages: function messages() {
            return this.$root.messages;
        }
    },

    methods: {
        /*
        * New Objects
        * each calls save method to persist
        */
        createNewProject: function createNewProject(user_id) {
            var newProject = {
                "title": "Title",
                "description": "Details",
                "description_height": 100,
                "class": "info",
                "due_time": "12:00:00",
                "due_date": "2017-01-20",
                "owner_id": 0,
                "conversation_id": 0,
                "delegated_id": 0,
                "facility_id": 1,
                "creator_id": user_id,
                "deleted_at": null
            };
            this.save(newProject, 'projects', 'new');
        },

        /*
         * Persistence Success methods
         * each handles its actions success
         */
        newPersisted: function newPersisted(objectList, newObject) {
            //console.log('saved', newObject[newObject.length - 1].id,'pushing to',objectList);
            this[objectList].push(newObject[newObject.length - 1]);
        },
        updatePersisted: function updatePersisted(type, returned, obj) {
            //console.log('saved',type, obj.id); //
        },
        deletePersisted: function deletePersisted(objectType, deletedObject, obj) {
            var list = this[objectType];
            for (var i in this[objectType]) {
                if (list[i].id == obj.id) {
                    list.splice(i, 1);
                }
            } // Find deleted object and remove it from list
        },
        /*
         * Component called  methods
         * each handles its components requested action
         */
        softDelete: function softDelete(objectID, action) {
            var model = this.pullApartObjectID(objectID);
            console.log(objectID, model);
            for (var i in model.obj) {
                if (model.obj[i].id == model.id) {
                    //console.log(model.obj[i].deleted)
                    model.obj[i].deleted = !model.obj[i].deleted; //Toggle deleted Var
                    //console.log(model.obj[i].deleted)
                    this.save(model.obj[i], model.type, action); // Persist
                }
            }
        },
        permanentTrash: function permanentTrash(objectID) {
            var model = this.pullApartObjectID(objectID);
            for (var i in model.obj) {
                if (model.obj[i].id == model.id) {
                    this.save(model.obj[i], model.type, 'delete');
                }
            }
        },
        /*
         * Vue Object persistence
          * obj = component/object to persist
          * objType = name of object
          * action = will accept (update, new, delete)
         */
        save: function save(obj, objType, action) {
            this.$http.post('/api/' + action + '/' + objType, obj, function (model, status, request) {}).success(function (model) {
                this.$set(objType, model);
                //this[action+'Persisted'](objType, model, obj)
            });
        },

        /*
         * Helper Methods
         */
        pullApartObjectID: function pullApartObjectID(objectID) {
            var modelId = objectID.id.substr(objectID.id.indexOf('_') + 1, objectID.id.length);
            var modelType = objectID.id.substr(0, objectID.id.indexOf('_'));
            var that = this[modelType];
            return { obj: that, id: modelId, type: modelType };
        }
    }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"projecter-directory\">\n        <!--Accordion Grouping-->\n        <div class=\"panel-group accordion\" id=\"accordion\">\n\n            <!-- item template -->\n            \n            <visibilityswitch></visibilityswitch>\n\n            <button @click=\"createNewProject( currentUserId )\" class=\"btn btn-block btn-info mar-btm\"><span class=\"fa fa-plus\"></span></button>\n            <div v-for=\"project in projects | orderBy 'id' -1 | visibilityMode visibleScope\" id=\"projects_{{ project.id }}\" class=\"panel\"> <!--  --> \n                <project :project=\"project\" :tasks=\"tasks\" :conversations=\"conversations\" :current-user-id=\"currentUserId\" soft-delete=\"true\"></project>\n            </div>\n        </div>\n    </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/projector/Projector.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./project.vue":113,"./task.vue":114,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],113:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".project-message-body {\n  background-color: transparent;\n  border: none;\n  resize: none;\n  overflow: hidden;\n  width: 80%;\n  height: 100%;\n  margin: 0;\n  display: block;\n}\n.project-message-body:focus {\n  outline: none;\n}\n.project-title {\n  font-size: 2em;\n}\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        visibleScope: 'active',
        softDelete: {},
        currentUserId: { type: Number },
        conversations: {},
        project: {},
        tasks: {}
    },

    data: function data() {
        return {
            completed: this.project.deleted,
            typingTimer: {}
        };
    },


    computed: {
        autoHeightFix: function autoHeightFix() {
            return "'height:" + (this.project.description_height + 4) + "px; margin:5px 0;'";
            /* 
            *  Adding the 4px here is a little necessary tweak 
            *  otherwise the field will resize itself 
            *  improperly when saved.
            */
        }
    },

    methods: {
        /*
        * Report a change in the project
        * Handles textField height : e = event
        * Calls onChange if the timer is allowed to count down
        * Requests parent to persist item
        */
        projectChanged: function projectChanged(e) {
            if (e.target.type == 'textarea') {
                autosize(e.target);
                var targetID = '#' + e.target.id;
                this.project.description_height = $(targetID).height();
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function () {
                e.targetVM.onChange(e.targetVM.project, 'projects', 'update');
            }, 2500);
        },
        toggleSoftDelete: function toggleSoftDelete(e) {
            this.onDelete(e.path[3], 'update');
        },
        trashThis: function trashThis(e) {
            this.onTrash(e.path[3], 'delete');
        },

        createNewConversation: function createNewConversation() {
            var newConversation = {
                "title": "Note Title",
                "description": "A new note",
                "description_height": 100,
                "class": "info",
                "owner_id": this.project.id,
                "owner_type": 'project',
                "facility_id": 1,
                "user_id": this.currentUser
            };
            this.onChange(newConversation, 'conversations', 'new');
        }
    },
    ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"panel panel-bordered panel-{{ project.class }}\">\n    <div class=\"panel-heading\" style=\"display: flex; width: 100%;\">\n        <h4 class=\"panel-title\" style=\"width: 100%;\">\n            <a data-parent=\"#accordion\" data-toggle=\"collapse\" href=\"#project{{ project.id }}\" class=\"collapsed\" aria-expanded=\"false\">\n                <input class=\"form-textarea project-message-body project-title\" @keyup=\"projectChanged\" v-model=\"project.title\">\n            </a>\n        </h4>\n        <button class=\"btn btn-danger pull-right\" @click=\"toggleSoftDelete\" v-show=\"!completed\">\n            <i class=\"fa fa-close\"></i> Delete\n        </button>\n        <button class=\"btn btn-success mar-rgt\" @click=\"toggleSoftDelete\" v-show=\"completed\">\n            <span class=\"fa fa-check\"></span> &nbsp; Restore</button>\n\n        <button class=\"btn btn-danger\" @click=\"trashThis\" v-show=\"completed\">\n            <span class=\"fa fa-trash\"></span> &nbsp; Trash</button>\n    </div>\n    <!--Accordion content collapsible container-->\n    <div class=\"panel-collapse collapse\" id=\"project{{ project.id }}\" aria-expanded=\"false\" style=\"height: 0px;\">\n        <div class=\"bg-dark\">\n            <div class=\"tab-base accordion-tab-base tab-stacked-left bg-trans\">\n                <!--Project Navigation Tabs-->\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\">\n                        <a data-toggle=\"tab\" href=\"#project{{ project.id }}-details\" aria-expanded=\"true\">Details</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" href=\"#project{{ project.id }}-tasks\" aria-expanded=\"false\">Tasks</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" href=\"#project{{ project.id }}-conversations\" aria-expanded=\"false\">Notes</a>\n                    </li>\n                </ul>\n                <!--Tab Content-->\n                <div class=\"tab-content bg-gray-dark\">\n                    <!-- Details -->\n                    <div id=\"project{{ project.id }}-details\" class=\"tab-pane fade active in\">\n                        <textarea id=\"project{{project.id}}_description\" class=\"col-sm-12 list-group-item-text form-textarea project-message-body\" :style=\"autoHeightFix\" v-model=\"project.description\" @keyup=\"projectChanged\"></textarea>\n                        <input class=\"form-textarea project-message-body\" @keyup=\"projectChanged\" v-model=\"project.updated_at\" :disabled=\"true\">\n                    </div>\n                    <!-- Details -->\n\n                    <!-- Tasks -->\n                    <tasks :current-user-id=\"currentUserId\" :project-id=\"project.id\" :conversation-id=\"project.conversation_id\" :tasks=\"tasks\"></tasks>\n                    <!-- Tasks end -->\n\n                    <!-- conversation start -->\n                    <conversations :conversations=\"conversations\" :current-user-id=\"currentUserId\" :project-id=\"project.id\"></conversations>\n                    <!-- conversation end -->\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/projector/project.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".project-message-body {\n  background-color: transparent;\n  border: none;\n  resize: none;\n  overflow: hidden;\n  width: 80%;\n  height: 100%;\n  margin: 0;\n  display: block;\n}\n.project-message-body:focus {\n  outline: none;\n}\n.project-title {\n  font-size: 2em;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],114:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert("\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        task: {},
        currentUserId: { type: Number },
        projectId: { type: Number }
    },
    data: function data() {
        return {
            completed: this.task.deleted,
            typingTimer: {}
        };
    },

    methods: {
        // Report a change in the project
        // Handles textField height
        // Requests parent to persist item

        taskChanged: function taskChanged(e) {
            if (e.target.type == 'textarea') {
                autosize(e.target);
                var targetID = '#' + e.target.id;
                this.task.description_height = $(targetID).height();
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function () {
                e.targetVM.onChange(e.targetVM.task, 'tasks', 'update');
            }, 2500);
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"row mar-btm\">\n        <div class=\"col-sm-12\">\n            <a class=\"col-sm-12 list-group-item mar-no\">\n                <input class=\"col-sm-12 list-group-item-heading form-textarea project-message-body\" v-model=\"task.title\" @keyup=\"taskChanged\">\n                <textarea class=\"col-sm-12 list-group-item-text form-textarea project-message-body\" v-model=\"task.description\" @keyup=\"taskChanged\"></textarea>\n            </a>\n        </div>\n        <div class=\"btn-group mar-lft\">\n            <button class=\"btn btn-mint\">\n                <span class=\"fa fa-user\"></span> Delegate\n            </button>\n            <button class=\"btn btn-warning\" v-show=\"!completed\" @click=\"$parent.$parent.toggleSoftDelete\"><span class=\"fa fa-close\"></span> Delete</button>\n            <button class=\"btn btn-success\" v-show=\"completed\" @click=\"$parent.$parent.toggleSoftDelete\"><span class=\"fa fa-check\"></span> Restore</button>\n            <button class=\"btn btn-danger\" v-show=\"completed\" @click=\"$parent.$parent.trashThis\"><span class=\"fa fa-trash\"></span> Trash</button>\n        </div>\n    </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/projector/task.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../../../vuex/actions');

exports.default = {
  name: 'aside-settings',
  changeTabTitle: false,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'aside-settings',
      settings: this.$store.state.settings.all
    };
  },

  vuex: {
    actions: {
      setSetting: _actions.setSetting
    }
  },
  methods: {
    set: function set(target, value) {
      console.log(target, value);
    }
  },

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n  <div class=\"aside-settings\">\n    <ul class=\"list-group bg-trans\">\n\t\t\t<li class=\"list-header\">\n\t\t\t\t<h4 class=\"text-thin\">Account Settings</h4>\n\t\t\t</li>\n\t\t\t\n\t\t\t<!--Edit Toggle Button-->\n      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n      <li class=\"list-group-item\">\n\t    \t<div class=\"pull-right\">\n        \t<input type=\"checkbox\" class=\"switchery bp-edit-toggle\" :checked=\"settings.editMode\" @change=\"setSetting('editMode', !settings.editMode)\">\n        </div>\n\t\t\t\t<p>Edit All</p>\n\t\t\t\t<small class=\"text-muted\">Right now edit mode is {{ editMode ? \"on\" : \"off\" }}.</small>\n\t    </li>\n\t    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n\t    <!--End Edit toggle button-->\n\t    <!--Data Output Toggle Button-->\n\t    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n\t    <li class=\"list-group-item\">\n\t    \t<div class=\"pull-right\">\n        \t<input type=\"checkbox\" class=\"switchery bp-data-toggle\" v-model=\"dataMode\" @change=\"setSetting('dataMode', dataMode)\">\n        </div>\n\t\t\t\t<p>Data Output</p>\n\t\t\t\t<small class=\"text-muted\">Right now data view is {{ dataMode ? \"on\" : \"off\" }}.</small>\n      </li>\n      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n      <!--End Edit toggle button-->\n\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<input class=\"demo-switch\" type=\"checkbox\" checked=\"\">\n\t\t\t\t</div>\n\t\t\t\t<p>Show offline contact</p>\n\t\t\t\t<small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<input class=\"demo-switch\" type=\"checkbox\">\n\t\t\t\t</div>\n\t\t\t\t<p>Invisible mode </p>\n\t\t\t\t<small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<hr>\n\n\t\t<ul class=\"list-group bg-trans\">\n\t\t\t<li class=\"list-header\"><h4 class=\"text-thin\">Public Settings</h4></li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<input class=\"demo-switch\" type=\"checkbox\" checked=\"\">\n\t\t\t\t</div>\n\t\t\t\tOnline status\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<input class=\"demo-switch\" type=\"checkbox\" checked=\"\">\n\t\t\t\t</div>\n\t\t\t\tShow offline contact\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<input class=\"demo-switch\" type=\"checkbox\">\n\t\t\t\t</div>\n\t\t\t\tShow my device icon\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<hr>\n\t\t<h4 class=\"pad-hor text-thin\">Task Progress</h4>\n\t\t<div class=\"pad-all\">\n\t\t\t<p>Upgrade Progress</p>\n\t\t\t<div class=\"progress progress-sm\">\n\t\t\t\t<div class=\"progress-bar progress-bar-success\" style=\"width: 15%;\"><span class=\"sr-only\">15%</span></div>\n\t\t\t</div>\n\t\t\t<small class=\"text-muted\">15% Completed</small>\n\t\t</div>\n\t\t<div class=\"pad-hor\">\n\t\t\t<p>Database</p>\n\t\t\t<div class=\"progress progress-sm\">\n\t\t\t\t<div class=\"progress-bar progress-bar-danger\" style=\"width: 75%;\"><span class=\"sr-only\">75%</span></div>\n\t\t\t</div>\n\t\t\t<small class=\"text-muted\">17/23 Database</small>\n\t\t</div>\n  </div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/settings/AsideSettings.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../../vuex/actions":123,"vue":49,"vue-hot-reload-api":38}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'general-settings',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data: function data() {
    return {
      pageTitle: 'settings'

    };
  },


  methods: {},

  ready: function ready() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"general-settings\">\n  comming\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/components/settings/Settings.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],117:[function(require,module,exports){
'use strict';

module.exports = {
  // model -> view
  // formats the value when updating the input element.
  read: function read(val) {
    return '$' + val.toFixed(2);
  },
  // view -> model
  // formats the value when writing to the data.
  write: function write(val, oldVal) {
    var number = +val.replace(/[^\d.]/g, '');
    return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
  }
};

},{}],118:[function(require,module,exports){
'use strict';

module.exports = {
    read: function read(value, input) {
        //console.log('visibilty mode filter read method called');
        switch (input) {
            case 'all':
                return value;
                break;
            case 'active':
                return value.filter(function (value) {
                    return !value.deleted;
                });
                break;
            case 'completed':
                return value.filter(function (value) {
                    return value.deleted;
                });
                break;
        }
    },

    write: function write(value, input) {
        console.log('visModeFilter val, input = ' + value + ' ' + input);
    }
};

},{}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require("../../vuex/actions");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    vuex: {
        actions: {
            setSetting: _actions2.default
        }
    },
    created: function created() {

        var logHooksToConsole = this.$options.logHooksToConsole;
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Created!", this.$root.settings.logGood, this.pageTitle);
        }
    },
    ready: function ready() {
        var logHooksToConsole = this.$options.logHooksToConsole;
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Ready!", this.$root.settings.logGood, this.pageTitle);
        }
        var changeTabTitle = this.$options.changeTabTitle;
        if (changeTabTitle) {
            var host = this.$root.settings.appName;
            var title = this.pageTitle;
            $("title").contents().last().remove();
            $('title').append(host + " | " + title);
        }
    },
    beforeDestroy: function beforeDestroy() {
        var logHooksToConsole = this.$options.logHooksToConsole;
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Destroying!", this.$root.settings.logGood, this.pageTitle);
        }
    }
};

},{"../../vuex/actions":123}],120:[function(require,module,exports){
"use strict";

module.exports = {
    created: function created() {
        var watchModes = this.$options.watchMode;
        if (watchModes) {
            this.$watch("$root.settings.editMode", function (res) {
                this.editMode = res;
            });
            this.$watch("$root.settings.editAll", function (res) {
                this.editAll = res;
            });
            this.$watch("$root.settings.dataMode", function (res) {
                this.dataMode = res;
            });
        }
    }
};

},{}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'BlueHero',
  changeTabTitle: false,
  logHooksToConsole: false,
  watchMode: true,
  props: ['blue', 'id'],
  data: function data() {
    return {};
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"hero\" :class=\"blue ? 'blue-hero' : ''\">\n  <div class=\"container \">\n    <div class=\"section-header center\">\n  \t  <h2 class=\"section-title wow fadeInDown\">\n        <editable-copy :name-of-parent=\"'BlueHero_'+id\" instance-number=\"0\" use-html=\"true\" overide-text=\"\"></editable-copy>\n      </h2>\n  \t  <p class=\"wow fadeInDown\">\n        <editable-copy :name-of-parent=\"'BlueHero_'+id\" instance-number=\"1\" use-html=\"true\" overide-text=\"\"></editable-copy>\n      </p>\n    </div>\n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/partials/BlueHero.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":49,"vue-hot-reload-api":38}],122:[function(require,module,exports){
var __vueify_style__ = require("vueify-insert-css").insert(".brand-box {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto 2px auto 2px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.brand-logo {\n  max-height: 50px;\n  min-height: 40px;\n  padding: 0 5px 5px 5px;\n}\n.brand-text-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.brand-title {\n  font-size: 18px;\n  margin: 5px 0 0 0;\n  font-weight: 600;\n}\n.brand-sub-title {\n  font-size: 14px;\n  margin: 5px 0 0 0;\n  font-weight: 400;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getters = require('../../vuex/getters.js');

var _actions = require('../../vuex/actions.js');

exports.default = {
  name: 'brand-box',
  logHooksToConsole: true,
  watchMode: true,
  props: ['theme', 'id'],
  vuex: {
    getters: {
      company: _getters.getCompanyDetails,
      pubSettings: _getters.getPublicSettings
    },
    actions: {
      setCompanyBrandingDetail: _actions.setCompanyBrandingDetail
    }
  },
  methods: {
    updateMessage: function updateMessage(e) {
      this.setCompanyBrandingDetail(e.target.id.split('-').pop(), e.target.value);
    }
  }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<!-- VUE Brand Box -->\n  <div class=\"brand-box\">\n    <img class=\"brand-logo\" :src=\"'/images/'+theme+'/logos/'+company.branding.smallLogo\">\n      <!-- :src=\"company.branding.smallLogo\"  -->\n    <div class=\"brand-text-box\">\n        <!-- v-if=\"!pubSettings.editMode\" -->\n        <!-- v-text=\"company.branding.name\" -->\n      <h1 class=\"brand-title\"><editable-copy :name-of-parent=\"'BrandBox_'+id\" instance-number=\"0\" use-html=\"true\"></editable-copy>\n      </h1>\n      <!-- <input\n        id=\"branding-title\"\n        type=\"textBox\"\n        v-if=\"pubSettings.editMode\" \n        class=\"brand-title vue-model-input\" \n        :value=\"company.branding.name\" \n        @input=\"updateMessage\"\n      /> -->\n        <!-- v-if=\"!pubSettings.editMode\" -->\n        <!-- v-text=\"company.branding.tagLine\" -->\n      <h3 class=\"brand-sub-title \"><editable-copy :name-of-parent=\"'BrandBox_'+id\" instance-number=\"1\" use-html=\"true\"></editable-copy>\n      </h3>\n    </div>\n  </div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/natetheaverage/www/mei-pack/resources/assets/js/vue/partials/BrandBox.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache[".brand-box {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto 2px auto 2px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.brand-logo {\n  max-height: 50px;\n  min-height: 40px;\n  padding: 0 5px 5px 5px;\n}\n.brand-text-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.brand-title {\n  font-size: 18px;\n  margin: 5px 0 0 0;\n  font-weight: 600;\n}\n.brand-sub-title {\n  font-size: 14px;\n  margin: 5px 0 0 0;\n  font-weight: 400;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../../vuex/actions.js":123,"../../vuex/getters.js":124,"vue":49,"vue-hot-reload-api":38,"vueify-insert-css":50}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPage = exports.setFeatures = exports.setCopy = exports.setCopyText = exports.setObject = exports.setMenuActive = exports.setMenu = exports.toggleSetting = exports.setSetting = exports.setCompanyBrandingDetail = exports.setModel = exports.setRoute = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _mutationTypes = require('./mutation-types');

var types = _interopRequireWildcard(_mutationTypes);

var _menus = require('../api/vuex/menus.js');

var _menus2 = _interopRequireDefault(_menus);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setRoute = exports.setRoute = function setRoute(_ref) {
  var dispatch = _ref.dispatch;
  var state = _ref.state;

  dispatch(types.SET_ROUTE, state);
};
var setModel = exports.setModel = function setModel(_ref2) {
  var dispatch = _ref2.dispatch;
  var state = _ref2.state;

  dispatch(types.SET_MODEL, state);
};

// this will probably find its way gone
var setCompanyBrandingDetail = exports.setCompanyBrandingDetail = function setCompanyBrandingDetail(_ref3, id, value) {
  var dispatch = _ref3.dispatch;

  if (typeof id == 'string') {
    dispatch(types.SET_COMPANY_BRAND_DETAIL, [id, value]);
  }
};

// For more percice control of settings by sending the value
var setSetting = exports.setSetting = function setSetting(_ref4, id, value) {
  var dispatch = _ref4.dispatch;

  if (typeof id == 'string') {
    dispatch(types.SET_SETTING, [id, value]);
  }
};

// The switcher for boolean values in settings
var toggleSetting = exports.toggleSetting = function toggleSetting(_ref5, container) {
  var dispatch = _ref5.dispatch;

  dispatch(types.TOGGLE_SETTING, container);
};

// When a full menu is fetched use this action to set the menu to state
var setMenu = exports.setMenu = function setMenu(_ref6, menuName) {
  var dispatch = _ref6.dispatch;
  var state = _ref6.state;
  var menu = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];


  if (menu != null) {
    dispatch(types.SET_MENU, [menu, menuName]);
  } else {
    _menus2.default.getMenu(menuName, function (menu) {
      return dispatch(types.SET_MENU, [menu, menuName]);
    });
  }
};
var setMenuActive = exports.setMenuActive = function setMenuActive(_ref7, button) {
  var dispatch = _ref7.dispatch;

  dispatch(types.RESET_ALL_MENU_ACTIVE), dispatch(types.SET_MENU_ACTIVE, button);
};
// Object editor setter (this could be buttons
var setObject = exports.setObject = function setObject(_ref8, object, field, value) {
  var dispatch = _ref8.dispatch;
  var state = _ref8.state;

  dispatch(types.SET_OBJECT, object, field, value);
};

var setCopyText = exports.setCopyText = function setCopyText(_ref9, object, payload) {
  var dispatch = _ref9.dispatch;

  if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) == 'object') {
    dispatch(types.SET_COPY_TEXT, object, payload);
  }
};

var setCopy = exports.setCopy = function setCopy(_ref10, payload) {
  var dispatch = _ref10.dispatch;

  dispatch(types.SET_COPY, payload);
};

var setFeatures = exports.setFeatures = function setFeatures(_ref11, payload) {
  var dispatch = _ref11.dispatch;

  dispatch(types.SET_FEATURES, payload);
};

var setPage = exports.setPage = function setPage(_ref12) {
  var dispatch = _ref12.dispatch;
  var state = _ref12.state;

  dispatch(types.SET_PAGE, state);
};

},{"../api/vuex/menus.js":56,"./mutation-types":129,"babel-runtime/helpers/typeof":4}],124:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoute = getRoute;
exports.getModels = getModels;
exports.getPublicSettings = getPublicSettings;
exports.getCompanyDetails = getCompanyDetails;
exports.getPrimaryMenu = getPrimaryMenu;
exports.getMenuData = getMenuData;
exports.getHomeMenu = getHomeMenu;
exports.getHomePage = getHomePage;
// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

function getRoute(state) {
  return state.currentRoute;
}
function getModels(state) {
  return state.models;
}
function getPublicSettings(state) {
  return state.truth.settings;
}

function getCompanyDetails(state) {
  return state.truth.company;
}

function getPrimaryMenu(state) {
  return state.truth.menus.filter(function (menu) {
    return menu === 'primary';
  });
}
function getMenuData(state) {
  return state.truth.menus.filter(function (menu) {
    return menu === 'primary';
  });
}
// export function getPrimaryMenuHover (state) {
//   return state.truth.menus.primary
// }
function getHomeMenu(state) {
  return state.menus.dashboard;
}

function getHomePage(state) {
  return state.pages.home;
}

},{}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _mutationTypes = require('../mutation-types');

var _truth = require('../../truth/truth.js');

var _truth2 = _interopRequireDefault(_truth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initial state
var state = {
  all: _truth2.default.copyText
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_COPY_TEXT, function (state, object, payload) {
  var route = state.all[object.base_view][payload[1]][object.instance_number];
  route.id = object.id;
  route.copy = payload[0];
  route.height = object.height;
  route.version = object.version;
  route.versionList = object.versionList;
}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_COPY, function (state, payload) {
  for (var i = payload.length - 1; i >= 0; i--) {
    var route = state.all[payload[i].base_view][payload[i].parent_name][payload[i].instance_number];
    route.id = payload[i].id;
    route.copy = payload[i].copy;
    route.height = payload[i].height;
    route.version = payload[i].version;
    route.versionList = payload[i].versionList;
  }
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};

},{"../../truth/truth.js":71,"../mutation-types":129,"babel-runtime/helpers/defineProperty":3}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutationTypes = require('../mutation-types');

var _truth = require('../../truth/truth.js');

var _truth2 = _interopRequireDefault(_truth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initial state
var state = {
  all: _truth2.default.features
};

var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SET_FEATURES, function (state, payload) {
  state.all = payload;
});

exports.default = {
  state: state,
  mutations: mutations
};

},{"../../truth/truth.js":71,"../mutation-types":129,"babel-runtime/helpers/defineProperty":3}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _mutationTypes = require('../mutation-types');

var _menus = require('../../api/vuex/menus.js');

var _menus2 = _interopRequireDefault(_menus);

var _truth = require('../../truth/truth.js');

var _truth2 = _interopRequireDefault(_truth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initial state
var state = {
  primary: _truth2.default.menus.primary,
  adminPrimary: _truth2.default.menus.adminPrimary,
  DashboardMenu: _truth2.default.menus.DashboardMenu
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_MENU, function (state, payload) {

  state[payload[1]] = payload[0];
}), (0, _defineProperty3.default)(_mutations, _mutationTypes.RESET_ALL_MENU_ACTIVE, function (state) {

  for (var menu in state) {
    for (var button in state[menu]) {
      state[menu][button].active = false;
      for (var sub in button.submenu) {
        state[menu][button].submenu[sub].active = false;
      }
    }
  }
}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_MENU_ACTIVE, function (state, button) {

  var menu = state[button['menu_name']];
  if (menu != undefined) {
    menu[menu.indexOf(button)].active = !menu[menu.indexOf(button)].active;
  } else {
    var menu = state[button['owner_type']];
    for (var btn in menu) {
      if (menu[btn].id == button.menu_id) {
        var subMenu = menu[btn].submenu;
        menu[btn].active = true;
        subMenu[subMenu.indexOf(button)].active = !subMenu[subMenu.indexOf(button)].active;
      }
    }
  }
}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_OBJECT, function (state, object, field, value) {

  var menu = state[object.menu_name];
  console.log(menu[menu.indexOf(object)][field]);
  if (menu != undefined) {
    menu[menu.indexOf(object)][field] = value;
  }
  console.log(menu[menu.indexOf(object)][field]);
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};

},{"../../api/vuex/menus.js":56,"../../truth/truth.js":71,"../mutation-types":129,"babel-runtime/helpers/defineProperty":3}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;
//import menus from '../../api/vuex/settings.js'


var _mutationTypes = require('../mutation-types');

var _truth = require('../../truth/truth.js');

var _truth2 = _interopRequireDefault(_truth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initial state
var state = {
  all: _truth2.default.settings
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_SETTING, function (state, payload) {
  state.all[payload[0] + ''] = payload[1];
}), (0, _defineProperty3.default)(_mutations, _mutationTypes.TOGGLE_SETTING, function (state, payload) {
  state.all[payload] = !state.all[payload];
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};

},{"../../truth/truth.js":71,"../mutation-types":129,"babel-runtime/helpers/defineProperty":3}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_ROUTE = exports.SET_ROUTE = 'SET_ROUTE';
var SET_MODEL = exports.SET_MODEL = 'SET_MODEL';

var RESET_ALL_MENU_ACTIVE = exports.RESET_ALL_MENU_ACTIVE = 'RESET_ALL_MENU_ACTIVE';
var SET_MENU_ACTIVE = exports.SET_MENU_ACTIVE = 'SET_MENU_ACTIVE';
var SET_MENU = exports.SET_MENU = 'SET_MENU';

var TOGGLE_SETTING = exports.TOGGLE_SETTING = 'TOGGLE_SETTING';

var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
var SET_OBJECT = exports.SET_OBJECT = 'SET_OBJECT';

var SET_SETTING = exports.SET_SETTING = 'SET_SETTING';
var SET_COMPANY_BRAND_DETAIL = exports.SET_COMPANY_BRAND_DETAIL = 'SET_COMPANY_BRAND_DETAIL';

var SET_COPY_TEXT = exports.SET_COPY_TEXT = 'SET_COPY_TEXT';
var SET_COPY = exports.SET_COPY = 'SET_COPY';

var SET_FEATURES = exports.SET_FEATURES = 'SET_FEATURES';

},{}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _menus = require('./modules/menus.js');

var _menus2 = _interopRequireDefault(_menus);

var _copyText = require('./modules/copyText.js');

var _copyText2 = _interopRequireDefault(_copyText);

var _features = require('./modules/features.js');

var _features2 = _interopRequireDefault(_features);

var _settings = require('./modules/settings.js');

var _settings2 = _interopRequireDefault(_settings);

var _persistance = require('../api/vuex/persistance.js');

var _persistance2 = _interopRequireDefault(_persistance);

var _logger = require('vuex/logger');

var _logger2 = _interopRequireDefault(_logger);

var _truth = require('../truth/truth.js');

var _truth2 = _interopRequireDefault(_truth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);
var store = _persistance2.default.get();
var state = {
  //store,
  truth: _truth2.default,
  models: {
    projects: {},
    tasks: {},
    conversations: {},
    messages: {},
    inventories: {}
  },
  pages: {
    home: {
      //menulayout:{},
    }
  }
};

var mutations = exports.mutations = {
  SET_ROUTE: function SET_ROUTE(state, payload) {
    state.currentRoute = payload;
  },
  SET_MODEL: function SET_MODEL(state, payload) {
    state.models[payload[0] + ''] = payload[1];
  },
  SET_PAGE: function SET_PAGE(state, payload) {
    state.pages[payload[0] + ''] = payload[1];
  },


  // SET_COPY_TEXT (state, location, payload) {
  //   state.copyText[location['base']][location['name']][location['instance']] = location[1]
  // },

  SET_COMPANY_BRAND_DETAIL: function SET_COMPANY_BRAND_DETAIL(state, payload) {
    state.truth.company.branding[payload[0] + ''] = payload[1];
  }
};

var logger = (0, _logger2.default)({
  collapsed: true, // auto-expand logged mutations
  transformer: function transformer(state) {
    // transform the state before logging it.
    // for example return only a specific sub-tree
    return state;
  },
  mutationTransformer: function mutationTransformer(mutation) {
    // mutations are logged in the format of { type, payload }
    // we can format it anyway we want.
    return mutation.type + ' - ' + mutation.payload;
  }
});

var persistToDatabase = {
  snapshot: true,
  onMutation: function onMutation(mutation, nextState, prevState, store) {
    // console.log( mutation )
    // console.log( prevState )
    // console.log( nextState )
    // console.log( store )
    _persistance2.default.save(nextState);
  }
};

exports.default = new _vuex2.default.Store({
  //remove these next two lines when in prodution cpu intence
  middlewares: [(0, _logger2.default)(), persistToDatabase],
  strict: true,
  modules: {
    menus: _menus2.default,
    copyText: _copyText2.default,
    settings: _settings2.default,
    features: _features2.default
  },
  state: state,
  mutations: mutations
});

},{"../api/vuex/persistance.js":57,"../truth/truth.js":71,"./modules/copyText.js":125,"./modules/features.js":126,"./modules/menus.js":127,"./modules/settings.js":128,"vue":49,"vuex":52,"vuex/logger":53}]},{},[59]);

//# sourceMappingURL=mei-core.js.map
