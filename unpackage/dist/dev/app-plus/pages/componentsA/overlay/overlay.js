"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  var isString = (val) => typeof val === "string";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/mixin.js
  var mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/wu-ui-tools/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  var colorStringExports = {};
  var colorString$1 = {
    get exports() {
      return colorStringExports;
    },
    set exports(v) {
      colorStringExports = v;
    }
  };
  var colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  var simpleSwizzleExports = {};
  var simpleSwizzle = {
    get exports() {
      return simpleSwizzleExports;
    },
    set exports(v) {
      simpleSwizzleExports = v;
    }
  };
  var isArrayish$1 = function isArrayish(obj) {
    if (!obj || typeof obj === "string") {
      return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
  };
  var isArrayish2 = isArrayish$1;
  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;
  var swizzle$1 = simpleSwizzle.exports = function swizzle(args) {
    var results = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];
      if (isArrayish2(arg)) {
        results = concat.call(results, slice.call(arg));
      } else {
        results.push(arg);
      }
    }
    return results;
  };
  swizzle$1.wrap = function(fn) {
    return function() {
      return fn(swizzle$1(arguments));
    };
  };
  var colorNames = colorName;
  var swizzle2 = simpleSwizzleExports;
  var hasOwnProperty = Object.hasOwnProperty;
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (name in colorNames) {
    if (hasOwnProperty.call(colorNames, name)) {
      reverseNames[colorNames[name]] = name;
    }
  }
  var name;
  var cs = colorString$1.exports = {
    to: {},
    get: {}
  };
  cs.get = function(string2) {
    var prefix = string2.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
      case "hsl":
        val = cs.get.hsl(string2);
        model = "hsl";
        break;
      case "hwb":
        val = cs.get.hwb(string2);
        model = "hwb";
        break;
      default:
        val = cs.get.rgb(string2);
        model = "rgb";
        break;
    }
    if (!val) {
      return null;
    }
    return { model, value: val };
  };
  cs.get.rgb = function(string2) {
    if (!string2) {
      return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    if (match = string2.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string2.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string2.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string2.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string2.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!hasOwnProperty.call(colorNames, match[1])) {
        return null;
      }
      rgb = colorNames[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };
  cs.get.hsl = function(string2) {
    if (!string2) {
      return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string2.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var s = clamp(parseFloat(match[2]), 0, 100);
      var l = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string2) {
    if (!string2) {
      return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string2.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var w = clamp(parseFloat(match[2]), 0, 100);
      var b = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs.to.hex = function() {
    var rgba = swizzle2(arguments);
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function() {
    var rgba = swizzle2(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function() {
    var rgba = swizzle2(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function() {
    var hsla = swizzle2(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function() {
    var hwba = swizzle2(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }
  function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }
  var cssKeywords = colorName;
  var reverseKeywords = {};
  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
  var convert$2 = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  var conversions$2 = convert$2;
  for (const model of Object.keys(convert$2)) {
    if (!("channels" in convert$2[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert$2[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert$2[model].labels.length !== convert$2[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const { channels, labels } = convert$2[model];
    delete convert$2[model].channels;
    delete convert$2[model].labels;
    Object.defineProperty(convert$2[model], "channels", { value: channels });
    Object.defineProperty(convert$2[model], "labels", { value: labels });
  }
  convert$2.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert$2.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert$2.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert$2.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert$2.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return __pow(x[0] - y[0], 2) + __pow(x[1] - y[1], 2) + __pow(x[2] - y[2], 2);
  }
  convert$2.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert$2.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert$2.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? __pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? __pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? __pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert$2.rgb.lab = function(rgb) {
    const xyz = convert$2.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? __pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? __pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? __pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert$2.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert$2.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert$2.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert$2.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert$2.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert$2.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert$2.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * __pow(r, 1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * __pow(g, 1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * __pow(b, 1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert$2.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? __pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? __pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? __pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert$2.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = __pow(y, 3);
    const x2 = __pow(x, 3);
    const z2 = __pow(z, 3);
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert$2.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert$2.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert$2.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert$2.hsv.ansi16 = function(args) {
    return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
  };
  convert$2.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert$2.ansi16.rgb = function(args) {
    let color2 = args % 10;
    if (color2 === 0 || color2 === 7) {
      if (args > 50) {
        color2 += 3.5;
      }
      color2 = color2 / 10.5 * 255;
      return [color2, color2, color2];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color2 & 1) * mult * 255;
    const g = (color2 >> 1 & 1) * mult * 255;
    const b = (color2 >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert$2.ansi256.rgb = function(args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert$2.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string2 = integer.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert$2.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString2 = match[0];
    if (match[0].length === 3) {
      colorString2 = colorString2.split("").map((char) => {
        return char + char;
      }).join("");
    }
    const integer = parseInt(colorString2, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [r, g, b];
  };
  convert$2.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert$2.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert$2.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert$2.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert$2.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert$2.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert$2.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert$2.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert$2.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert$2.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert$2.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert$2.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert$2.gray.hsv = convert$2.gray.hsl;
  convert$2.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert$2.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert$2.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert$2.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string2 = integer.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert$2.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
  var conversions$1 = conversions$2;
  function buildGraph() {
    const graph = {};
    const models2 = Object.keys(conversions$1);
    for (let len = models2.length, i = 0; i < len; i++) {
      graph[models2[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions$1[current]);
      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions$1[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions$1[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  var route$1 = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models2 = Object.keys(graph);
    for (let len = models2.length, i = 0; i < len; i++) {
      const toModel = models2[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
  var conversions = conversions$2;
  var route = route$1;
  var convert$1 = {};
  var models = Object.keys(conversions);
  function wrapRaw(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach((fromModel) => {
    convert$1[fromModel] = {};
    Object.defineProperty(convert$1[fromModel], "channels", { value: conversions[fromModel].channels });
    Object.defineProperty(convert$1[fromModel], "labels", { value: conversions[fromModel].labels });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel) => {
      const fn = routes[toModel];
      convert$1[fromModel][toModel] = wrapRounded(fn);
      convert$1[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  var colorConvert = convert$1;
  var colorString = colorStringExports;
  var convert = colorConvert;
  var skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    "keyword",
    // Gray conflicts with some method names, and has its own method defined.
    "gray",
    // Shouldn't really be in color-convert either...
    "hex"
  ];
  var hashedModelKeys = {};
  for (const model of Object.keys(convert)) {
    hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
  }
  var limiters = {};
  function Color(object2, model) {
    if (!(this instanceof Color)) {
      return new Color(object2, model);
    }
    if (model && model in skippedModels) {
      model = null;
    }
    if (model && !(model in convert)) {
      throw new Error("Unknown model: " + model);
    }
    let i;
    let channels;
    if (object2 == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (object2 instanceof Color) {
      this.model = object2.model;
      this.color = [...object2.color];
      this.valpha = object2.valpha;
    } else if (typeof object2 === "string") {
      const result = colorString.get(object2);
      if (result === null) {
        throw new Error("Unable to parse color from string: " + object2);
      }
      this.model = result.model;
      channels = convert[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (object2.length > 0) {
      this.model = model || "rgb";
      channels = convert[this.model].channels;
      const newArray = Array.prototype.slice.call(object2, 0, channels);
      this.color = zeroArray(newArray, channels);
      this.valpha = typeof object2[channels] === "number" ? object2[channels] : 1;
    } else if (typeof object2 === "number") {
      this.model = "rgb";
      this.color = [
        object2 >> 16 & 255,
        object2 >> 8 & 255,
        object2 & 255
      ];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      const keys = Object.keys(object2);
      if ("alpha" in object2) {
        keys.splice(keys.indexOf("alpha"), 1);
        this.valpha = typeof object2.alpha === "number" ? object2.alpha : 0;
      }
      const hashedKeys = keys.sort().join("");
      if (!(hashedKeys in hashedModelKeys)) {
        throw new Error("Unable to parse color from object: " + JSON.stringify(object2));
      }
      this.model = hashedModelKeys[hashedKeys];
      const { labels } = convert[this.model];
      const color2 = [];
      for (i = 0; i < labels.length; i++) {
        color2.push(object2[labels[i]]);
      }
      this.color = zeroArray(color2);
    }
    if (limiters[this.model]) {
      channels = convert[this.model].channels;
      for (i = 0; i < channels; i++) {
        const limit = limiters[this.model][i];
        if (limit) {
          this.color[i] = limit(this.color[i]);
        }
      }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
      Object.freeze(this);
    }
  }
  Color.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(places) {
      let self = this.model in colorString.to ? this : this.rgb();
      self = self.round(typeof places === "number" ? places : 1);
      const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return colorString.to[self.model](args);
    },
    percentString(places) {
      const self = this.rgb().round(typeof places === "number" ? places : 1);
      const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return colorString.to.rgb.percent(args);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      const result = {};
      const { channels } = convert[this.model];
      const { labels } = convert[this.model];
      for (let i = 0; i < channels; i++) {
        result[labels[i]] = this.color[i];
      }
      if (this.valpha !== 1) {
        result.alpha = this.valpha;
      }
      return result;
    },
    unitArray() {
      const rgb = this.rgb().color;
      rgb[0] /= 255;
      rgb[1] /= 255;
      rgb[2] /= 255;
      if (this.valpha !== 1) {
        rgb.push(this.valpha);
      }
      return rgb;
    },
    unitObject() {
      const rgb = this.rgb().object();
      rgb.r /= 255;
      rgb.g /= 255;
      rgb.b /= 255;
      if (this.valpha !== 1) {
        rgb.alpha = this.valpha;
      }
      return rgb;
    },
    round(places) {
      places = Math.max(places || 0, 0);
      return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
    },
    alpha(value) {
      if (value !== void 0) {
        return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
      }
      return this.valpha;
    },
    // Rgb
    red: getset("rgb", 0, maxfn(255)),
    green: getset("rgb", 1, maxfn(255)),
    blue: getset("rgb", 2, maxfn(255)),
    hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
    saturationl: getset("hsl", 1, maxfn(100)),
    lightness: getset("hsl", 2, maxfn(100)),
    saturationv: getset("hsv", 1, maxfn(100)),
    value: getset("hsv", 2, maxfn(100)),
    chroma: getset("hcg", 1, maxfn(100)),
    gray: getset("hcg", 2, maxfn(100)),
    white: getset("hwb", 1, maxfn(100)),
    wblack: getset("hwb", 2, maxfn(100)),
    cyan: getset("cmyk", 0, maxfn(100)),
    magenta: getset("cmyk", 1, maxfn(100)),
    yellow: getset("cmyk", 2, maxfn(100)),
    black: getset("cmyk", 3, maxfn(100)),
    x: getset("xyz", 0, maxfn(95.047)),
    y: getset("xyz", 1, maxfn(100)),
    z: getset("xyz", 2, maxfn(108.833)),
    l: getset("lab", 0, maxfn(100)),
    a: getset("lab", 1),
    b: getset("lab", 2),
    keyword(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return convert[this.model].keyword(this.color);
    },
    hex(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return colorString.to.hex(this.rgb().round().color);
    },
    hexa(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      const rgbArray = this.rgb().round().color;
      let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (alphaHex.length === 1) {
        alphaHex = "0" + alphaHex;
      }
      return colorString.to.hex(rgbArray) + alphaHex;
    },
    rgbNumber() {
      const rgb = this.rgb().color;
      return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
    },
    luminosity() {
      const rgb = this.rgb().color;
      const lum = [];
      for (const [i, element] of rgb.entries()) {
        const chan = element / 255;
        lum[i] = chan <= 0.04045 ? chan / 12.92 : __pow((chan + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast(color2) {
      const lum1 = this.luminosity();
      const lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level(color2) {
      const contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7) {
        return "AAA";
      }
      return contrastRatio >= 4.5 ? "AA" : "";
    },
    isDark() {
      const rgb = this.rgb().color;
      const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
      return yiq < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      const rgb = this.rgb();
      for (let i = 0; i < 3; i++) {
        rgb.color[i] = 255 - rgb.color[i];
      }
      return rgb;
    },
    lighten(ratio) {
      const hsl = this.hsl();
      hsl.color[2] += hsl.color[2] * ratio;
      return hsl;
    },
    darken(ratio) {
      const hsl = this.hsl();
      hsl.color[2] -= hsl.color[2] * ratio;
      return hsl;
    },
    saturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] += hsl.color[1] * ratio;
      return hsl;
    },
    desaturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] -= hsl.color[1] * ratio;
      return hsl;
    },
    whiten(ratio) {
      const hwb = this.hwb();
      hwb.color[1] += hwb.color[1] * ratio;
      return hwb;
    },
    blacken(ratio) {
      const hwb = this.hwb();
      hwb.color[2] += hwb.color[2] * ratio;
      return hwb;
    },
    grayscale() {
      const rgb = this.rgb().color;
      const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      return Color.rgb(value, value, value);
    },
    fade(ratio) {
      return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer(ratio) {
      return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate(degrees) {
      const hsl = this.hsl();
      let hue = hsl.color[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      hsl.color[0] = hue;
      return hsl;
    },
    mix(mixinColor, weight) {
      if (!mixinColor || !mixinColor.rgb) {
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
      }
      const color1 = mixinColor.rgb();
      const color2 = this.rgb();
      const p = weight === void 0 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = color1.alpha() - color2.alpha();
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
      const w2 = 1 - w1;
      return Color.rgb(
        w1 * color1.red() + w2 * color2.red(),
        w1 * color1.green() + w2 * color2.green(),
        w1 * color1.blue() + w2 * color2.blue(),
        color1.alpha() * p + color2.alpha() * (1 - p)
      );
    }
  };
  for (const model of Object.keys(convert)) {
    if (skippedModels.includes(model)) {
      continue;
    }
    const { channels } = convert[model];
    Color.prototype[model] = function(...args) {
      if (this.model === model) {
        return new Color(this);
      }
      if (args.length > 0) {
        return new Color(args, model);
      }
      return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
    };
    Color[model] = function(...args) {
      let color2 = args[0];
      if (typeof color2 === "number") {
        color2 = zeroArray(args, channels);
      }
      return new Color(color2, model);
    };
  }
  function roundTo(number2, places) {
    return Number(number2.toFixed(places));
  }
  function roundToPlace(places) {
    return function(number2) {
      return roundTo(number2, places);
    };
  }
  function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];
    for (const m of model) {
      (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }
    model = model[0];
    return function(value) {
      let result;
      if (value !== void 0) {
        if (modifier) {
          value = modifier(value);
        }
        result = this[model]();
        result.color[channel] = value;
        return result;
      }
      result = this[model]().color[channel];
      if (modifier) {
        result = modifier(result);
      }
      return result;
    };
  }
  function maxfn(max) {
    return function(v) {
      return Math.max(0, Math.min(max, v));
    };
  }
  function assertArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function zeroArray(array2, length) {
    for (let i = 0; i < length; i++) {
      if (typeof array2[i] !== "number") {
        array2[i] = 0;
      }
    }
    return array2;
  }
  var color$1 = Color;
  var Color$1 = color$1;
  function convertFormat(color2 = "#fff", format = "rgb", type = "string") {
    let colorObj = Color$1(color2);
    if (colorObj[format]) {
      if (format == "hex" && type != "string")
        format = "rgb";
      let typeName = "";
      switch (type) {
        case "string":
          typeName = "toString";
          break;
        case "object":
          typeName = "object";
          break;
        case "array":
          typeName = "array";
          break;
        case "round":
          typeName = "round";
          break;
        default:
          throw Error("Unsupported target type:" + type);
      }
      return colorObj[format]()[typeName]();
    } else {
      throw Error("Unsupported target format: " + format);
    }
  }
  function gradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = convertFormat(startColor, "rgb", "array");
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = convertFormat(endColor, "rgb", "array");
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = convertFormat(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`, "hex");
      if (i === 0)
        hex = convertFormat(startColor, "hex");
      if (i === step - 1)
        hex = convertFormat(endColor, "hex");
      colorArr.push(hex);
    }
    return colorArr;
  }
  var color = {
    /**
     * 格式转换。
     */
    convertFormat,
    /**
     * 计算两个颜色之间的渐变值。
     */
    gradient,
    /**
     * 增加颜色的亮度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 增加的亮度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    lighten: (color2, value, format = "rgb", type = "string") => convertFormat(Color$1(color2).lighten(value), format, type),
    /**
     * 减少颜色的亮度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 减少的亮度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    darken: (color2, value, format = "rgb", type = "string") => convertFormat(Color$1(color2).darken(value), format, type),
    /**
     * 增加颜色的饱和度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 增加的饱和度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    saturate: (color2, value, format = "rgb", type = "string") => convertFormat(Color$1(color2).saturate(value), format, type),
    /**
     * 减少颜色的饱和度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 减少的饱和度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    desaturate: (color2, value, format = "rgb", type = "string") => convertFormat(Color$1(color2).desaturate(value), format, type),
    /**
     * 旋转颜色的色相。
     * @param {string} color - 输入的颜色。
     * @param {number} degrees - 旋转的度数。
     * @returns {string} 调整后的颜色。
     */
    rotate: (color2, degrees, format = "rgb", type = "string") => convertFormat(Color$1(color2).rotate(degrees), format, type),
    /**
     * 调整颜色的透明度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 透明度值（0-1，其中 1 是不透明）。
     * @returns {string} 调整后的颜色。
     */
    adjustAlpha: (color2, value, format = "rgb", type = "string") => convertFormat(Color$1(color2).alpha(value), format, type),
    /**
     * 获取颜色的亮度。
     * @param {string} color - 输入的颜色。
     * @returns {number} 颜色的亮度值（0-1）。
     */
    luminosity: (color2, format) => Color$1(color2).luminosity(),
    /**
     * 判断颜色是否为暗色。
     * @param {string} color - 输入的颜色。
     * @returns {boolean} 如果是暗色则返回 true，否则返回 false。
     */
    isDark: (color2, format) => Color$1(color2).isDark(),
    /**
     * 判断颜色是否为亮色。
     * @param {string} color - 输入的颜色。
     * @returns {boolean} 如果是亮色则返回 true，否则返回 false。
     */
    isLight: (color2, format) => Color$1(color2).isLight()
  };
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b3) => (_b3 = ((_a3) => (_a3 = uni == null ? void 0 : uni.$w) == null ? void 0 : _a3.config)()) == null ? void 0 : _b3.unit)() ? ((_d2) => (_d2 = ((_c2) => (_c2 = uni == null ? void 0 : uni.$w) == null ? void 0 : _c2.config)()) == null ? void 0 : _d2.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/wu-ui-tools/libs/function/index.js:253", `wuui\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "wu-form-item");
    const form = $parent.call(instance, "wu-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a3;
    const pages2 = getCurrentPages();
    const route2 = (_a3 = pages2[pages2.length - 1]) == null ? void 0 : _a3.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props3 = {},
    config = {},
    color: color2 = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$w;
    uni.$w.config = deepMerge2(uni.$w.config, config);
    uni.$w.props = deepMerge2(uni.$w.props, props3);
    uni.$w.color = deepMerge2(uni.$w.color, color2);
    uni.$w.zIndex = deepMerge2(uni.$w.zIndex, zIndex);
  }
  var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    Color: color,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  var mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$w.getRect = this.$wuGetRect;
    },
    created() {
      this.$w.getRect = this.$wuGetRect;
    },
    computed: {
      $w() {
        return __spreadProps(__spreadValues({}, index), {
          test
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `wu-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $wuGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      // 查询节点布局是否相交
      IntersectionObserver(_this, nodeName, callback) {
        this.$nextTick(() => {
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$w.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("wuOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/wu-navbar.js
  var import_vue3 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props3) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props3) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/wu-icon.js
  var import_vue2 = __toESM(require_vue());
  var _a;
  var _b;
  var iconUrl = "/assets/wuicons.04d281cc.ttf";
  var icons = {
    "wuicon-level": "e68f",
    "wuicon-download": "e670",
    "wuicon-search": "e632",
    "wuicon-reload": "e627",
    "wuicon-scan": "e631",
    "wuicon-calendar": "e65c",
    "wuicon-bag": "e647",
    "wuicon-checkbox-mark": "e659",
    "wuicon-attach": "e640",
    "wuicon-wifi-off": "e6cc",
    "wuicon-woman": "e626",
    "wuicon-man": "e675",
    "wuicon-chat": "e656",
    "wuicon-chat-fill": "e63f",
    "wuicon-red-packet": "e6c3",
    "wuicon-folder": "e694",
    "wuicon-order": "e695",
    "wuicon-arrow-up-fill": "e636",
    "wuicon-arrow-down-fill": "e638",
    "wuicon-backspace": "e64d",
    "wuicon-photo": "e60d",
    "wuicon-photo-fill": "e6b4",
    "wuicon-lock": "e69d",
    "wuicon-lock-fill": "e6a6",
    "wuicon-lock-open": "e68d",
    "wuicon-lock-opened-fill": "e6a1",
    "wuicon-home": "e67b",
    "wuicon-home-fill": "e68e",
    "wuicon-star": "e618",
    "wuicon-star-fill": "e61e",
    "wuicon-share": "e629",
    "wuicon-share-fill": "e6bb",
    "wuicon-share-square": "e6c4",
    "wuicon-volume": "e605",
    "wuicon-volume-fill": "e624",
    "wuicon-volume-off": "e6bd",
    "wuicon-volume-off-fill": "e6c8",
    "wuicon-trash": "e623",
    "wuicon-trash-fill": "e6ce",
    "wuicon-shopping-cart": "e6cb",
    "wuicon-shopping-cart-fill": "e630",
    "wuicon-question-circle": "e622",
    "wuicon-question-circle-fill": "e6bc",
    "wuicon-plus": "e625",
    "wuicon-plus-circle": "e603",
    "wuicon-plus-circle-fill": "e611",
    "wuicon-tags": "e621",
    "wuicon-tags-fill": "e613",
    "wuicon-pause": "e61c",
    "wuicon-pause-circle": "e696",
    "wuicon-pause-circle-fill": "e60c",
    "wuicon-play-circle": "e6af",
    "wuicon-play-circle-fill": "e62a",
    "wuicon-map": "e665",
    "wuicon-map-fill": "e6a8",
    "wuicon-phone": "e6ba",
    "wuicon-phone-fill": "e6ac",
    "wuicon-list": "e690",
    "wuicon-list-dot": "e6a9",
    "wuicon-info-circle": "e69f",
    "wuicon-info-circle-fill": "e6a7",
    "wuicon-minus": "e614",
    "wuicon-minus-circle": "e6a5",
    "wuicon-mic": "e66d",
    "wuicon-mic-off": "e691",
    "wuicon-grid": "e68c",
    "wuicon-grid-fill": "e698",
    "wuicon-eye": "e664",
    "wuicon-eye-fill": "e697",
    "wuicon-eye-off": "e69c",
    "wuicon-eye-off-outline": "e688",
    "wuicon-file-text": "e687",
    "wuicon-file-text-fill": "e67f",
    "wuicon-edit-pen": "e65d",
    "wuicon-edit-pen-fill": "e679",
    "wuicon-email": "e673",
    "wuicon-email-fill": "e683",
    "wuicon-checkmark": "e64a",
    "wuicon-checkmark-circle": "e643",
    "wuicon-checkmark-circle-fill": "e668",
    "wuicon-clock": "e66c",
    "wuicon-clock-fill": "e64b",
    "wuicon-close": "e65a",
    "wuicon-close-circle": "e64e",
    "wuicon-close-circle-fill": "e666",
    "wuicon-car": "e64f",
    "wuicon-car-fill": "e648",
    "wuicon-bell": "e651",
    "wuicon-bell-fill": "e604",
    "wuicon-play-left": "e6bf",
    "wuicon-play-right": "e6b3",
    "wuicon-play-left-fill": "e6ae",
    "wuicon-play-right-fill": "e6ad",
    "wuicon-skip-back-left": "e6c5",
    "wuicon-skip-forward-right": "e61f",
    "wuicon-setting": "e602",
    "wuicon-setting-fill": "e6d0",
    "wuicon-more-dot-fill": "e66f",
    "wuicon-more-circle": "e69e",
    "wuicon-more-circle-fill": "e684",
    "wuicon-arrow-upward": "e641",
    "wuicon-arrow-downward": "e634",
    "wuicon-arrow-leftward": "e63b",
    "wuicon-arrow-rightward": "e644",
    "wuicon-arrow-up": "e633",
    "wuicon-arrow-down": "e63e",
    "wuicon-arrow-left": "e646",
    "wuicon-arrow-right": "e63c",
    "wuicon-thumb-up": "e612",
    "wuicon-thumb-up-fill": "e62c",
    "wuicon-thumb-down": "e60a",
    "wuicon-thumb-down-fill": "e628",
    "wuicon-coupon": "e65f",
    "wuicon-coupon-fill": "e64c",
    "wuicon-kefu-ermai": "e660",
    "wuicon-server-fill": "e610",
    "wuicon-server-man": "e601",
    "wuicon-warning": "e6c1",
    "wuicon-warning-fill": "e6c7",
    "wuicon-camera": "e642",
    "wuicon-camera-fill": "e650",
    "wuicon-pushpin": "e6d1",
    "wuicon-pushpin-fill": "e6b6",
    "wuicon-heart": "e6a2",
    "wuicon-heart-fill": "e68b",
    "wuicon-account": "e63a",
    "wuicon-account-fill": "e653",
    "wuicon-integral": "e693",
    "wuicon-integral-fill": "e6b1",
    "wuicon-gift": "e680",
    "wuicon-gift-fill": "e6b0",
    "wuicon-empty-data": "e671",
    "wuicon-empty-address": "e68a",
    "wuicon-empty-favor": "e662",
    "wuicon-empty-car": "e656",
    "wuicon-empty-order": "e66b",
    "wuicon-empty-list": "e671",
    "wuicon-empty-search": "e677",
    "wuicon-empty-permission": "e67c",
    "wuicon-empty-news": "e67d",
    "wuicon-empty-history": "e684",
    "wuicon-empty-coupon": "e69b",
    "wuicon-empty-page": "e60e",
    "wuicon-apple-fill": "e635",
    "wuicon-zhifubao-circle-fill": "e617",
    "wuicon-weixin-circle-fill": "e6cd",
    "wuicon-weixin-fill": "e620",
    "wuicon-qq-fill": "e608",
    "wuicon-qq-circle-fill": "e6b9",
    "wuicon-moments": "e6a0",
    "wuicon-moments-circel-fill": "e6c2",
    "wuicon-twitter": "e607",
    "wuicon-twitter-circle-fill": "e6cf"
  };
  var props = {
    props: __spreadValues({
      // 图标类名
      name: {
        type: String,
        default: ""
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: "#606266"
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: "16px"
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: false
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: null
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: "wuicon"
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: ""
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: "right"
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: "15px"
      },
      // label的颜色
      labelColor: {
        type: String,
        default: "#606266"
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: "3px"
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: ""
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: ""
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: ""
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: 0
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: false
      }
    }, (_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.icon)
  };
  var _style_0 = { "wu-icon": { "": { "alignItems": "center" } }, "wu-icon--left": { "": { "flexDirection": "row" } }, "wu-icon--right": { "": { "flexDirection": "row" } }, "wu-icon--top": { "": { "flexDirection": "column" } }, "wu-icon--bottom": { "": { "flexDirection": "column" } }, "wu-icon__icon": { "": { "fontFamily": "wuicon-iconfont", "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "wu-icon__icon--primary": { "": { "color": "#3c9cff" } }, "wu-icon__icon--success": { "": { "color": "#5ac725" } }, "wu-icon__icon--error": { "": { "color": "#f56c6c" } }, "wu-icon__icon--warning": { "": { "color": "#f9ae3d" } }, "wu-icon__icon--info": { "": { "color": "#909399" } } };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "wuicon-iconfont",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main = {
    name: "wu-icon",
    emits: ["click"],
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        colorType: [
          "primary",
          "success",
          "info",
          "error",
          "warning"
        ]
      };
    },
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix);
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && this.colorType.includes(this.color))
          classes.push("wu-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.$w.addUnit(this.size),
          lineHeight: this.$w.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$w.addUnit(this.top)
        };
        if (this.color && !this.colorType.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
        return this.name.indexOf("/") !== -1 || isBase64;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$w.addUnit(this.width) : this.$w.addUnit(this.size);
        style.height = this.height ? this.$w.addUnit(this.height) : this.$w.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        const code2 = icons["wuicon-" + this.name];
        if (["wuicon"].indexOf(this.customPrefix) > -1) {
          return code2 ? unescape(`%u${code2}`) : this.name;
        } else {
          return unescape(`%u${this.name}`);
        }
      },
      // label样式
      labelStyle() {
        let style = {
          color: this.labelColor,
          fontSize: this.$w.addUnit(this.labelSize),
          marginLeft: this.labelPos == "right" ? this.$w.addUnit(this.space) : 0,
          marginTop: this.labelPos == "bottom" ? this.$w.addUnit(this.space) : 0,
          marginRight: this.labelPos == "left" ? this.$w.addUnit(this.space) : 0,
          marginBottom: this.labelPos == "top" ? this.$w.addUnit(this.space) : 0
        };
        return style;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["wu-icon", ["wu-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        renderWhole: true
      },
      [
        (0, import_vue2.createCommentVNode)(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
        _ctx.label !== "" && (_ctx.labelPos == "left" || _ctx.labelPos == "top") ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "u-text",
          {
            key: 0,
            class: "wu-icon__label",
            style: (0, import_vue2.normalizeStyle)($options.labelStyle)
          },
          (0, import_vue2.toDisplayString)(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        $options.isImg ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-image", {
          key: 1,
          class: "wu-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: (0, import_vue2.normalizeStyle)([$options.imgStyle, _ctx.$w.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
          key: 2,
          class: (0, import_vue2.normalizeClass)(["wu-icon__icon", $options.uClasses]),
          style: (0, import_vue2.normalizeStyle)([$options.iconStyle, _ctx.$w.addStyle(_ctx.customStyle)]),
          hoverClass: _ctx.hoverClass
        }, (0, import_vue2.toDisplayString)($options.icon), 15, ["hoverClass"])),
        (0, import_vue2.createCommentVNode)(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
        _ctx.label !== "" && (_ctx.labelPos == "right" || _ctx.labelPos == "bottom") ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "u-text",
          {
            key: 3,
            class: "wu-icon__label",
            style: (0, import_vue2.normalizeStyle)($options.labelStyle)
          },
          (0, import_vue2.toDisplayString)(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-icon/components/wu-icon/wu-icon.vue"]]);

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/wu-navbar.js
  var _a2;
  var _b2;
  var _c;
  var _d;
  var props$1 = {
    props: __spreadValues({
      bgColor: {
        type: String,
        default: "transparent"
      }
    }, (_b2 = (_a2 = uni.$w) == null ? void 0 : _a2.props) == null ? void 0 : _b2.statusBar)
  };
  var _style_0$1 = {};
  var _sfc_main$1 = {
    name: "wu-status-bar",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = this.$w.addUnit(this.$w.sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        style: (0, import_vue3.normalizeStyle)([$options.style]),
        class: "wu-status-bar",
        renderWhole: true
      },
      [
        (0, import_vue3.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-status-bar/components/wu-status-bar/wu-status-bar.vue"]]);
  var props2 = {
    props: __spreadValues({
      // 是否开启顶部安全区适配
      safeAreaInsetTop: {
        type: Boolean,
        default: true
      },
      // 固定在顶部时，是否生成一个等高元素，以防止塌陷
      placeholder: {
        type: Boolean,
        default: false
      },
      // 是否固定在顶部
      fixed: {
        type: Boolean,
        default: true
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: false
      },
      // 左边的图标
      leftIcon: {
        type: String,
        default: "arrow-left"
      },
      // 左边的提示文字
      leftText: {
        type: String,
        default: ""
      },
      // 左右的提示文字
      rightText: {
        type: String,
        default: ""
      },
      // 右边的图标
      rightIcon: {
        type: String,
        default: ""
      },
      // 标题
      title: {
        type: [String, Number],
        default: ""
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: "#ffffff"
      },
      // 标题的宽度
      titleWidth: {
        type: [String, Number],
        default: "400rpx"
      },
      // 导航栏高度
      height: {
        type: [String, Number],
        default: "44px"
      },
      // 左侧返回图标的大小
      leftIconSize: {
        type: [String, Number],
        default: "20px"
      },
      // 左侧返回图标的颜色
      leftIconColor: {
        type: String,
        default: "#303133"
      },
      // 点击左侧区域(返回图标)，是否自动返回上一页
      autoBack: {
        type: Boolean,
        default: false
      },
      // 标题的样式，对象或字符串
      titleStyle: {
        type: [String, Object],
        default: ""
      }
    }, (_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.navbar)
  };
  var _style_02 = { "wu-navbar--fixed": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "zIndex": 11 } }, "wu-navbar__content": { "": { "flexDirection": "row", "alignItems": "center", "height": 44, "backgroundColor": "#9acafc", "position": "relative", "justifyContent": "center" } }, "wu-navbar__content__left": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "left": 0 } }, "wu-navbar__content__right": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "right": 0 } }, "wu-navbar__content__left--hover": { "": { "opacity": 0.7 } }, "wu-navbar__content__left__text": { "": { "fontSize": 15, "marginLeft": 3 } }, "wu-navbar__content__title": { "": { "textAlign": "center", "fontSize": 16, "color": "#303133" } }, "wu-navbar__content__right__text": { "": { "fontSize": 15, "marginLeft": 3 } } };
  var _sfc_main2 = {
    name: "wu-navbar",
    mixins: [mpMixin, mixin, props2],
    data() {
      return {};
    },
    methods: {
      // 点击左侧区域
      leftClick() {
        this.$emit("leftClick");
        if (this.autoBack) {
          uni.navigateBack();
        }
      },
      // 点击右侧区域
      rightClick() {
        this.$emit("rightClick");
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_status_bar = resolveEasycom((0, import_vue3.resolveDynamicComponent)("wu-status-bar"), __easycom_0$1);
    const _component_wu_icon = resolveEasycom((0, import_vue3.resolveDynamicComponent)("wu-icon"), __easycom_0);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "wu-navbar",
      renderWhole: true
    }, [
      _ctx.fixed && _ctx.placeholder ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        "view",
        {
          key: 0,
          class: "wu-navbar__placeholder",
          style: (0, import_vue3.normalizeStyle)({
            height: _ctx.$w.addUnit(_ctx.$w.getPx(_ctx.height) + _ctx.$w.sys().statusBarHeight, "px")
          })
        },
        null,
        4
        /* STYLE */
      )) : (0, import_vue3.createCommentVNode)("v-if", true),
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)([_ctx.fixed && "wu-navbar--fixed"])
        },
        [
          _ctx.safeAreaInsetTop ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_wu_status_bar, {
            key: 0,
            bgColor: _ctx.bgColor
          }, null, 8, ["bgColor"])) : (0, import_vue3.createCommentVNode)("v-if", true),
          (0, import_vue3.createElementVNode)(
            "view",
            {
              class: (0, import_vue3.normalizeClass)(["wu-navbar__content", [_ctx.border && "u-border-bottom"]]),
              style: (0, import_vue3.normalizeStyle)({
                height: _ctx.$w.addUnit(_ctx.height),
                backgroundColor: _ctx.bgColor
              })
            },
            [
              (0, import_vue3.createElementVNode)("view", {
                class: "wu-navbar__content__left",
                hoverClass: "wu-navbar__content__left--hover",
                hoverStartTime: "150",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
              }, [
                (0, import_vue3.renderSlot)(_ctx.$slots, "left", {}, () => [
                  _ctx.leftIcon ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_wu_icon, {
                    key: 0,
                    name: _ctx.leftIcon,
                    size: _ctx.leftIconSize,
                    color: _ctx.leftIconColor
                  }, null, 8, ["name", "size", "color"])) : (0, import_vue3.createCommentVNode)("v-if", true),
                  _ctx.leftText ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                    "u-text",
                    {
                      key: 1,
                      style: (0, import_vue3.normalizeStyle)({
                        color: _ctx.leftIconColor
                      }),
                      class: "wu-navbar__content__left__text"
                    },
                    (0, import_vue3.toDisplayString)(_ctx.leftText),
                    5
                    /* TEXT, STYLE */
                  )) : (0, import_vue3.createCommentVNode)("v-if", true)
                ])
              ]),
              (0, import_vue3.renderSlot)(_ctx.$slots, "center", {}, () => [
                (0, import_vue3.createElementVNode)(
                  "u-text",
                  {
                    class: "u-line-1 wu-navbar__content__title",
                    style: (0, import_vue3.normalizeStyle)([{
                      width: _ctx.$w.addUnit(_ctx.titleWidth)
                    }, _ctx.$w.addStyle(_ctx.titleStyle)])
                  },
                  (0, import_vue3.toDisplayString)(_ctx.title),
                  5
                  /* TEXT, STYLE */
                )
              ]),
              _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 0,
                class: "wu-navbar__content__right",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
              }, [
                (0, import_vue3.renderSlot)(_ctx.$slots, "right", {}, () => [
                  _ctx.rightIcon ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_wu_icon, {
                    key: 0,
                    name: _ctx.rightIcon,
                    size: "20"
                  }, null, 8, ["name"])) : (0, import_vue3.createCommentVNode)("v-if", true),
                  _ctx.rightText ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                    "u-text",
                    {
                      key: 1,
                      class: "wu-navbar__content__right__text"
                    },
                    (0, import_vue3.toDisplayString)(_ctx.rightText),
                    1
                    /* TEXT */
                  )) : (0, import_vue3.createCommentVNode)("v-if", true)
                ])
              ])) : (0, import_vue3.createCommentVNode)("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-navbar/components/wu-navbar/wu-navbar.vue"]]);

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/overlay/overlay.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "overlay-wrap": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "flex": 1 } }, "overlay-wrap__box": { "": { "width": "200rpx", "height": "200rpx", "backgroundColor": "#70e1f5" } } };
  var _sfc_main3 = {
    data() {
      return {
        show: false,
        showSlot: false,
        showOpcatiy: false,
        list: [
          {
            title: "\u57FA\u672C\u6848\u5217",
            iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/baseCases.png"
          },
          {
            title: "\u5D4C\u5165\u5185\u5BB9",
            iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/embeddedContent.png"
          },
          {
            title: "\u8BBE\u7F6E\u900F\u660E\u5EA6",
            iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/setTransparency.png"
          }
        ]
      };
    },
    methods: {
      openMask(indexNum) {
        if (indexNum == 0) {
          this.show = !this.show;
        } else if (indexNum == 1) {
          this.showSlot = !this.showSlot;
        } else if (indexNum == 2) {
          this.showOpcatiy = !this.showOpcatiy;
        }
      },
      navigateBack() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_navbar = resolveEasycom((0, import_vue4.resolveDynamicComponent)("wu-navbar"), __easycom_02);
    const _component_u_cell = (0, import_vue4.resolveComponent)("u-cell");
    const _component_u_overlay = (0, import_vue4.resolveComponent)("u-overlay");
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue4.createVNode)(_component_wu_navbar, {
          title: "\u906E\u7F69\u5C42",
          onLeftClick: $options.navigateBack,
          safeAreaInsetTop: "",
          fixed: "",
          placeholder: ""
        }, null, 8, ["onLeftClick"]),
        ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(
          import_vue4.Fragment,
          null,
          (0, import_vue4.renderList)($data.list, (item, index2) => {
            return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_u_cell, {
              titleStyle: { fontWeight: 500 },
              onClick: ($event) => $options.openMask(index2),
              title: item.title,
              key: index2,
              isLink: ""
            }, {
              icon: (0, import_vue4.withCtx)(() => [
                (0, import_vue4.createElementVNode)("u-image", {
                  class: "wu-cell-icon",
                  src: item.iconUrl,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onClick", "title"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (0, import_vue4.createVNode)(_component_u_overlay, {
          show: $data.show,
          onClick: _cache[0] || (_cache[0] = ($event) => $data.show = !$data.show)
        }, null, 8, ["show"]),
        (0, import_vue4.createVNode)(_component_u_overlay, {
          show: $data.showSlot,
          onClick: _cache[1] || (_cache[1] = ($event) => $data.showSlot = !$data.showSlot)
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "overlay-wrap" }, [
              (0, import_vue4.createElementVNode)("view", { class: "overlay-wrap__box" })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show"]),
        (0, import_vue4.createVNode)(_component_u_overlay, {
          opacity: ".85",
          show: $data.showOpcatiy,
          onClick: _cache[2] || (_cache[2] = ($event) => $data.showOpcatiy = !$data.showOpcatiy)
        }, null, 8, ["show"])
      ])
    ]);
  }
  var overlay = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/overlay/overlay.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/overlay/overlay";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    overlay.mpType = "page";
    const app = Vue.createPageApp(overlay, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...overlay.styles || []]));
    app.mount("#root");
  }
})();
