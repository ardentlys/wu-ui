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
    const t2 = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t2, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t2];
      case 3:
        return [p, q, v];
      case 4:
        return [t2, p, v];
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
  function addUnit(value = "auto", unit = ((_b6) => (_b6 = ((_a6) => (_a6 = uni == null ? void 0 : uni.$w) == null ? void 0 : _a6.config)()) == null ? void 0 : _b6.unit)() ? ((_d3) => (_d3 = ((_c3) => (_c3 = uni == null ? void 0 : uni.$w) == null ? void 0 : _c3.config)()) == null ? void 0 : _d3.unit)() : "px") {
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
    var _a6;
    const pages2 = getCurrentPages();
    const route2 = (_a6 = pages2[pages2.length - 1]) == null ? void 0 : _a6.route;
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
    props: props6 = {},
    config = {},
    color: color2 = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$w;
    uni.$w.config = deepMerge2(uni.$w.config, config);
    uni.$w.props = deepMerge2(uni.$w.props, props6);
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
  var _export_sfc = (sfc, props6) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props6) {
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
      },
      customStyle: {
        type: [Object, String],
        default: () => {
          return "";
        }
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
        style.background = this.bgColor;
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
      // 是否显示左边
      showLeft: {
        type: Boolean,
        default: true
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
      // 小程序端导航栏右侧是否预留胶囊位置
      mpRightReserveCapsule: {
        type: Boolean,
        default: true
      },
      // 左边的提示文字
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
    },
    computed: {
      // 小程序胶囊右侧所在位置 仅在小程序端且 mpRightReserveCapsule 为 true 是预留胶囊位置
      mpCapsuleRightPosition() {
        return 0;
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
              class: (0, import_vue3.normalizeClass)(["wu-navbar__content", [_ctx.border && "wu-border-bottom"]]),
              style: (0, import_vue3.normalizeStyle)({
                height: _ctx.$w.addUnit(_ctx.height),
                background: _ctx.bgColor
              })
            },
            [
              _ctx.showLeft ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 0,
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
              ])) : (0, import_vue3.createCommentVNode)("v-if", true),
              (0, import_vue3.renderSlot)(_ctx.$slots, "center", {}, () => [
                (0, import_vue3.createElementVNode)(
                  "u-text",
                  {
                    class: "wu-line-1 wu-navbar__content__title",
                    style: (0, import_vue3.normalizeStyle)([{
                      width: _ctx.$w.addUnit(_ctx.titleWidth)
                    }, _ctx.$w.addStyle(_ctx.titleStyle)])
                  },
                  (0, import_vue3.toDisplayString)(_ctx.title),
                  5
                  /* TEXT, STYLE */
                )
              ]),
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: "wu-navbar__content__right",
                  style: (0, import_vue3.normalizeStyle)({ right: $options.mpCapsuleRightPosition }),
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
                },
                [
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
                ],
                4
                /* STYLE */
              )
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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/calendar/calendar.js
  var import_vue6 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/wu-cell-group.js
  var import_vue5 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/wu-line.js
  var import_vue4 = __toESM(require_vue());
  var _a3;
  var _b3;
  var props3 = {
    props: __spreadValues({
      color: {
        type: String,
        default: "#d6d7d9"
      },
      // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
      length: {
        type: [String, Number],
        default: "100%"
      },
      // 线条方向，col-竖向，row-横向
      direction: {
        type: String,
        default: "row"
      },
      // 是否显示细边框
      hairline: {
        type: Boolean,
        default: true
      },
      // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
      margin: {
        type: [String, Number],
        default: 0
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: false
      }
    }, (_b3 = (_a3 = uni.$w) == null ? void 0 : _a3.props) == null ? void 0 : _b3.line)
  };
  var _style_03 = {};
  var _sfc_main3 = {
    name: "wu-line",
    mixins: [mpMixin, mixin, props3],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "2rpx";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = this.$w.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "2rpx";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = this.$w.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        class: "wu-line",
        style: (0, import_vue4.normalizeStyle)([$options.lineStyle]),
        renderWhole: true
      },
      null,
      4
      /* STYLE */
    );
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-line/components/wu-line/wu-line.vue"]]);

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/wu-cell-group.js
  var _a4;
  var _b4;
  var _c2;
  var _d2;
  var props$12 = {
    props: __spreadValues({
      // 标题
      title: {
        type: [String, Number],
        default: ""
      },
      // 标题下方的描述信息
      label: {
        type: [String, Number],
        default: ""
      },
      // 右侧的内容
      value: {
        type: [String, Number],
        default: ""
      },
      // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
      icon: {
        type: String,
        default: ""
      },
      // 是否禁用cell
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: true
      },
      // 内容是否垂直居中(主要是针对右侧的value部分)
      center: {
        type: Boolean,
        default: false
      },
      // 点击后跳转的URL地址
      url: {
        type: String,
        default: ""
      },
      // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
      linkType: {
        type: String,
        default: "navigateTo"
      },
      // 是否开启点击反馈(表现为点击时加上灰色背景)
      clickable: {
        type: Boolean,
        default: false
      },
      // 是否展示右侧箭头并开启点击反馈
      isLink: {
        type: Boolean,
        default: false
      },
      // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
      required: {
        type: Boolean,
        default: false
      },
      // 右侧的图标箭头
      rightIcon: {
        type: String,
        default: "arrow-right"
      },
      // 右侧箭头的方向，可选值为：left，up，down
      arrowDirection: {
        type: String,
        default: "right"
      },
      // 左侧图标样式
      iconStyle: {
        type: [Object, String],
        default: () => {
          return "";
        }
      },
      // 右侧箭头图标的样式
      rightIconStyle: {
        type: [Object, String],
        default: () => {
          return "";
        }
      },
      // 标题的样式
      titleStyle: {
        type: [Object, String],
        default: () => {
          return "";
        }
      },
      // 单位元的大小，可选值为large
      size: {
        type: String,
        default: ""
      },
      // 点击cell是否阻止事件传播
      stop: {
        type: Boolean,
        default: true
      },
      // 标识符，cell被点击时返回
      name: {
        type: [Number, String],
        default: ""
      },
      // 自定义样式
      customStyle: {
        type: [Object, String],
        default: () => {
          return "";
        }
      }
    }, (_b4 = (_a4 = uni.$w) == null ? void 0 : _a4.props) == null ? void 0 : _b4.cell)
  };
  var _style_0$12 = { "wu-cell__body": { "": { "flexDirection": "row", "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 15, "fontSize": 15, "color": "#303133", "alignItems": "center" } }, "wu-cell__body__content": { "": { "flexDirection": "row", "alignItems": "center", "flex": 1 } }, "wu-cell__body--large": { "": { "paddingTop": 13, "paddingBottom": 13 } }, "wu-cell__left-icon-wrap": { "": { "flexDirection": "row", "alignItems": "center", "fontSize": 16, "marginRight": 4 } }, "wu-cell__right-icon-wrap": { "": { "flexDirection": "row", "alignItems": "center", "fontSize": 16, "marginLeft": 4, "transitionProperty": "transform", "transitionDuration": 300 } }, "wu-cell__right-icon-wrap--up": { "": { "transform": "rotate(-90deg)" } }, "wu-cell__right-icon-wrap--down": { "": { "transform": "rotate(90deg)" } }, "wu-cell__title": { "": { "flex": 1 } }, "wu-cell__title-text": { "": { "fontSize": 15, "lineHeight": 22, "color": "#303133" } }, "wu-cell__title-text--large": { "": { "fontSize": 16 } }, "wu-cell__label": { "": { "marginTop": 5, "fontSize": 12, "color": "#909193", "lineHeight": 18 } }, "wu-cell__label--large": { "": { "fontSize": 14 } }, "wu-cell__value": { "": { "textAlign": "right", "fontSize": 14, "lineHeight": 24, "color": "#606266" } }, "wu-cell__value--large": { "": { "fontSize": 15 } }, "wu-cell--clickable": { "": { "backgroundColor": "#f3f4f6" } }, "wu-cell--disabled": { "": { "color": "#c8c9cc" } }, "wu-cell--center": { "": { "alignItems": "center" } }, "@TRANSITION": { "wu-cell__right-icon-wrap": { "property": "transform", "duration": 300 } } };
  var _sfc_main$12 = {
    name: "wu-cell",
    data() {
      return {};
    },
    mixins: [mpMixin, mixin, props$12],
    computed: {
      titleTextStyle() {
        return this.$w.addStyle(this.titleStyle);
      }
    },
    methods: {
      // 点击cell
      clickHandler(e) {
        if (this.disabled)
          return;
        this.$emit("click", {
          name: this.name
        });
        this.openPage();
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_icon = resolveEasycom((0, import_vue5.resolveDynamicComponent)("wu-icon"), __easycom_0);
    const _component_wu_line = resolveEasycom((0, import_vue5.resolveDynamicComponent)("wu-line"), __easycom_2);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
      class: (0, import_vue5.normalizeClass)(["wu-cell", [_ctx.customClass]]),
      style: (0, import_vue5.normalizeStyle)([_ctx.$w.addStyle(_ctx.customStyle)]),
      hoverClass: !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "wu-cell--clickable" : "",
      hoverStayTime: 250,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    }, [
      (0, import_vue5.createElementVNode)(
        "view",
        {
          class: (0, import_vue5.normalizeClass)(["wu-cell__body", [_ctx.center && "wu-cell--center", _ctx.size === "large" && "wu-cell__body--large"]])
        },
        [
          (0, import_vue5.createElementVNode)("view", { class: "wu-cell__body__content" }, [
            (0, import_vue5.createElementVNode)("view", { class: "wu-cell__left-icon-wrap" }, [
              (0, import_vue5.renderSlot)(_ctx.$slots, "icon", {}, () => [
                _ctx.icon ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_wu_icon, {
                  key: 0,
                  name: _ctx.icon,
                  "custom-style": _ctx.iconStyle,
                  size: _ctx.size === "large" ? 22 : 18
                }, null, 8, ["name", "custom-style", "size"])) : (0, import_vue5.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue5.createElementVNode)("view", { class: "wu-cell__title" }, [
              (0, import_vue5.renderSlot)(_ctx.$slots, "title", {}, () => [
                _ctx.title ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: (0, import_vue5.normalizeClass)(["wu-cell__title-text", [_ctx.disabled && "wu-cell--disabled", _ctx.size === "large" && "wu-cell__title-text--large"]]),
                    style: (0, import_vue5.normalizeStyle)([$options.titleTextStyle])
                  },
                  (0, import_vue5.toDisplayString)(_ctx.title),
                  7
                  /* TEXT, CLASS, STYLE */
                )) : (0, import_vue5.createCommentVNode)("v-if", true)
              ]),
              (0, import_vue5.renderSlot)(_ctx.$slots, "label", {}, () => [
                _ctx.label ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: (0, import_vue5.normalizeClass)(["wu-cell__label", [_ctx.disabled && "wu-cell--disabled", _ctx.size === "large" && "wu-cell__label--large"]])
                  },
                  (0, import_vue5.toDisplayString)(_ctx.label),
                  3
                  /* TEXT, CLASS */
                )) : (0, import_vue5.createCommentVNode)("v-if", true)
              ])
            ])
          ]),
          (0, import_vue5.renderSlot)(_ctx.$slots, "value", {}, () => [
            !_ctx.$w.test.empty(_ctx.value) ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue5.normalizeClass)(["wu-cell__value", [_ctx.disabled && "wu-cell--disabled", _ctx.size === "large" && "wu-cell__value--large"]])
              },
              (0, import_vue5.toDisplayString)(_ctx.value),
              3
              /* TEXT, CLASS */
            )) : (0, import_vue5.createCommentVNode)("v-if", true)
          ]),
          (0, import_vue5.createElementVNode)("view", { class: "wu-cell__right-icon-wrap" }, [
            (0, import_vue5.renderSlot)(_ctx.$slots, "right-icon", {}, () => [
              _ctx.isLink ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_wu_icon, {
                key: 0,
                class: (0, import_vue5.normalizeClass)([`wu-cell__right-icon-wrap--${_ctx.arrowDirection}`]),
                name: _ctx.rightIcon,
                "custom-style": _ctx.rightIconStyle,
                color: _ctx.disabled ? "#c8c9cc" : "info",
                size: _ctx.size === "large" ? 18 : 16
              }, null, 8, ["class", "name", "custom-style", "color", "size"])) : (0, import_vue5.createCommentVNode)("v-if", true)
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      _ctx.border ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_wu_line, { key: 0 })) : (0, import_vue5.createCommentVNode)("v-if", true)
    ], 14, ["hoverClass"]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-cell/components/wu-cell/wu-cell.vue"]]);
  var props4 = {
    props: __spreadValues({
      // 分组标题
      title: {
        type: String,
        default: ""
      },
      // 是否显示外边框
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: [Object, String],
        default: () => {
          return "";
        }
      }
    }, (_d2 = (_c2 = uni.$w) == null ? void 0 : _c2.props) == null ? void 0 : _d2.cellGroup)
  };
  var _style_04 = { "wu-cell-group": { "": { "flex": 1 } }, "wu-cell-group__title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16 } }, "wu-cell-group__title__text": { "": { "fontSize": 15, "lineHeight": 16, "color": "#303133" } }, "wu-cell-group__wrapper": { "": { "position": "relative" } } };
  var _sfc_main4 = {
    name: "wu-cell-group",
    mixins: [mpMixin, mixin, props4]
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_line = resolveEasycom((0, import_vue5.resolveDynamicComponent)("wu-line"), __easycom_2);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        style: (0, import_vue5.normalizeStyle)([_ctx.$w.addStyle(_ctx.customStyle)]),
        class: (0, import_vue5.normalizeClass)([[_ctx.customClass], "wu-cell-group"]),
        renderWhole: true
      },
      [
        _ctx.title ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
          key: 0,
          class: "wu-cell-group__title"
        }, [
          (0, import_vue5.renderSlot)(_ctx.$slots, "title", {}, () => [
            (0, import_vue5.createElementVNode)(
              "u-text",
              { class: "wu-cell-group__title__text" },
              (0, import_vue5.toDisplayString)(_ctx.title),
              1
              /* TEXT */
            )
          ])
        ])) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createElementVNode)("view", { class: "wu-cell-group__wrapper" }, [
          _ctx.border ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_wu_line, { key: 0 })) : (0, import_vue5.createCommentVNode)("v-if", true),
          (0, import_vue5.renderSlot)(_ctx.$slots, "default")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-cell/components/wu-cell-group/wu-cell-group.vue"]]);

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/calendar/calendar.js
  var _a5;
  var _b5;
  var props$13 = {
    props: {
      color: {
        type: String,
        default: "#3c9cff"
      },
      startText: {
        type: String,
        default: "\u5F00\u59CB"
      },
      endText: {
        type: String,
        default: "\u7ED3\u675F"
      },
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      }
    }
  };
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty2.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages && Object.keys(messages).length > 0) {
      locales = Object.keys(messages);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  var I18n = class {
    constructor({ locale, fallbackLocale, messages, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages] = [
        messages,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en = {
    "wu-calender.ok": "ok",
    "wu-calender.cancel": "cancel",
    "wu-calender.year": "year",
    "wu-calender.month": "month",
    "wu-calender.today": "today",
    "wu-calender.MON": "MON",
    "wu-calender.TUE": "TUE",
    "wu-calender.WED": "WED",
    "wu-calender.THU": "THU",
    "wu-calender.FRI": "FRI",
    "wu-calender.SAT": "SAT",
    "wu-calender.SUN": "SUN"
  };
  var zhHans = {
    "wu-calender.ok": "\u786E\u5B9A",
    "wu-calender.cancel": "\u53D6\u6D88",
    "wu-calender.year": "\u5E74",
    "wu-calender.month": "\u6708",
    "wu-calender.today": "\u4ECA\u65E5",
    "wu-calender.SUN": "\u65E5",
    "wu-calender.MON": "\u4E00",
    "wu-calender.TUE": "\u4E8C",
    "wu-calender.WED": "\u4E09",
    "wu-calender.THU": "\u56DB",
    "wu-calender.FRI": "\u4E94",
    "wu-calender.SAT": "\u516D"
  };
  var zhHant = {
    "wu-calender.ok": "\u78BA\u5B9A",
    "wu-calender.cancel": "\u53D6\u6D88",
    "wu-calender.year": "\u5E74",
    "wu-calender.month": "\u6708",
    "wu-calender.today": "\u4ECA\u65E5",
    "wu-calender.SUN": "\u65E5",
    "wu-calender.MON": "\u4E00",
    "wu-calender.TUE": "\u4E8C",
    "wu-calender.WED": "\u4E09",
    "wu-calender.THU": "\u56DB",
    "wu-calender.FRI": "\u4E94",
    "wu-calender.SAT": "\u516D"
  };
  var i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_0$2 = { "wu-calendar-item__weeks-box": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "wu-calendar-item__weeks-box-text": { "": { "fontSize": "28rpx", "color": "#333333" } }, "wu-calendar-item__weeks-lunar-text": { "": { "fontSize": "24rpx", "color": "#333333" } }, "wu-calendar-item__weeks-box-item": { "": { "position": "relative", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": "100rpx", "height": "120rpx" } }, "wu-calendar-item__weeks-box-circle": { "": { "position": "absolute", "width": "16rpx", "height": "15rpx", "borderRadius": "16rpx", "backgroundColor": "#e43d33" } }, "wu-calendar-item--disable": { "": { "backgroundColor": "rgba(249,249,249,0.3)", "color": "#c0c0c0" } }, "wu-calendar-item--extra": { "": { "color": "#e43d33", "opacity": 0.8 } }, "wu-calendar-item--checked": { "": { "color": "#ffffff" } } };
  var {
    t: t$1
  } = initVueI18n(i18nMessages);
  var _sfc_main$2 = {
    emits: ["change"],
    mixins: [mpMixin, mixin, props$13],
    computed: {
      todayText() {
        return t$1("wu-calender.today");
      },
      // 每项日历样式
      calendarItemStyle() {
        let style = {};
        let color2 = this.$w.Color.gradient(this.color, this.$w.Color.isLight(this.color) ? "#000" : "#fff", 100)[6];
        if (this.weeks.multiple) {
          style = {
            backgroundColor: this.$w.Color.gradient(this.color, "#fff", 100)[80],
            color: color2
          };
        }
        if (this.weeks.isDay) {
          style.color = color2;
        }
        if (this.weeks.disable) {
          style = {
            backgroundColor: "rgba(249, 249, 249, 0.3)",
            color: "#c0c0c0"
          };
        }
        return style;
      },
      // 选中的日期样式
      actMultipleStyle() {
        if (this.weeks.beforeMultiple || this.weeks.afterMultiple || this.calendar.fullDate === this.weeks.fullDate && !this.weeks.isDay || this.calendar.fullDate === this.weeks.fullDate && this.weeks.isDay) {
          return {
            backgroundColor: this.color,
            color: "#fff",
            borderRadius: "12rpx"
          };
        }
      },
      // 徽标样式
      badgeStyle() {
        let style = {
          backgroundColor: this.weeks.disable ? "#c0c0c0" : "#e43d33"
        };
        if (this.weeks.extraInfo) {
          if (this.weeks.extraInfo.infoColor) {
            style.backgroundColor = this.weeks.extraInfo.infoColor;
          }
          if (!this.weeks.extraInfo.badgePosition) {
            style.right = "10rpx";
            style.top = "10rpx";
          } else if (this.weeks.extraInfo.badgePosition == "top-left") {
            style.top = "10rpx";
            style.left = "10rpx";
          } else if (this.weeks.extraInfo.badgePosition == "top-right") {
            style.top = "10rpx";
            style.right = "10rpx";
          } else if (this.weeks.extraInfo.badgePosition == "bottom-left") {
            style.bottom = "10rpx";
            style.left = "10rpx";
          } else if (this.weeks.extraInfo.badgePosition == "bottom-right") {
            style.bottom = "10rpx";
            style.right = "10rpx";
          }
        }
        return style;
      },
      // 日期文字
      dayText() {
        let text = "";
        if (this.weeks.isDay) {
          text = this.todayText;
        } else if (this.weeks.lunar.IDayCn === "\u521D\u4E00") {
          text = this.weeks.lunar.IMonthCn;
        } else {
          text = this.weeks.lunar.IDayCn;
        }
        return text;
      },
      // 选中的文字
      multipleText() {
        let text = "";
        if (this.weeks.beforeMultiple) {
          text = this.startText;
        } else if (this.weeks.afterMultiple) {
          text = this.endText;
        }
        return text;
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        class: "wu-calendar-item__weeks-box",
        style: (0, import_vue6.normalizeStyle)([$options.calendarItemStyle, {
          borderTopLeftRadius: _ctx.weeks.beforeMultiple ? "12rpx" : "",
          borderBottomLeftRadius: _ctx.weeks.beforeMultiple ? "12rpx" : "",
          borderTopRightRadius: _ctx.weeks.afterMultiple ? "12rpx" : "",
          borderBottomRightRadius: _ctx.weeks.afterMultiple ? "12rpx" : ""
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate(_ctx.weeks)),
        renderWhole: true
      },
      [
        (0, import_vue6.createElementVNode)(
          "view",
          {
            class: "wu-calendar-item__weeks-box-item",
            style: (0, import_vue6.normalizeStyle)([$options.actMultipleStyle])
          },
          [
            (0, import_vue6.createCommentVNode)(" \u81EA\u5B9A\u4E49\u6253\u70B9\u4E0A\u65B9\u4FE1\u606F "),
            _ctx.weeks.extraInfo && _ctx.weeks.extraInfo.topInfo ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: "wu-calendar-item__weeks-lunar-text",
                style: (0, import_vue6.normalizeStyle)([{ color: _ctx.weeks.extraInfo.topInfoColor || "#e43d33" }, $options.calendarItemStyle, $options.actMultipleStyle])
              },
              (0, import_vue6.toDisplayString)(_ctx.weeks.extraInfo.topInfo),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createCommentVNode)(" \u5FBD\u6807 "),
            _ctx.selected && _ctx.weeks.extraInfo && _ctx.weeks.extraInfo.badge ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              "u-text",
              {
                key: 1,
                class: "wu-calendar-item__weeks-box-circle",
                style: (0, import_vue6.normalizeStyle)([$options.badgeStyle])
              },
              null,
              4
              /* STYLE */
            )) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createCommentVNode)(" \u65E5\u671F\u6587\u5B57 "),
            (0, import_vue6.createElementVNode)(
              "u-text",
              {
                class: "wu-calendar-item__weeks-box-text",
                style: (0, import_vue6.normalizeStyle)([$options.calendarItemStyle, $options.actMultipleStyle])
              },
              (0, import_vue6.toDisplayString)(_ctx.weeks.date),
              5
              /* TEXT, STYLE */
            ),
            (0, import_vue6.createCommentVNode)(" \u4ECA\u65E5\u7684\u6587\u5B57 "),
            !_ctx.lunar && !_ctx.weeks.extraInfo && _ctx.weeks.isDay && !_ctx.weeks.beforeMultiple && !_ctx.weeks.afterMultiple ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("u-text", {
              key: 2,
              class: "wu-calendar-item__weeks-lunar-text"
            })) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createCommentVNode)(" \u519C\u5386\u6587\u5B57 "),
            _ctx.lunar && !_ctx.weeks.extraInfo && !_ctx.weeks.beforeMultiple && !_ctx.weeks.afterMultiple ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              "u-text",
              {
                key: 3,
                class: "wu-calendar-item__weeks-lunar-text",
                style: (0, import_vue6.normalizeStyle)([$options.calendarItemStyle, $options.actMultipleStyle])
              },
              (0, import_vue6.toDisplayString)($options.dayText),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createCommentVNode)(" \u9009\u4E2D\u7684\u6587\u5B57\u5C55\u793A "),
            !_ctx.weeks.extraInfo && (_ctx.weeks.beforeMultiple || _ctx.weeks.afterMultiple) ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              "u-text",
              {
                key: 4,
                class: "wu-calendar-item__weeks-lunar-text",
                style: (0, import_vue6.normalizeStyle)([$options.calendarItemStyle, $options.actMultipleStyle])
              },
              (0, import_vue6.toDisplayString)($options.multipleText),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createCommentVNode)(" \u81EA\u5B9A\u4E49\u6253\u70B9\u4E0B\u65B9\u4FE1\u606F "),
            _ctx.weeks.extraInfo && _ctx.weeks.extraInfo.info ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              "u-text",
              {
                key: 5,
                class: "wu-calendar-item__weeks-lunar-text",
                style: (0, import_vue6.normalizeStyle)([{ color: _ctx.weeks.extraInfo.infoColor || "#e43d33" }, $options.calendarItemStyle, $options.actMultipleStyle])
              },
              (0, import_vue6.toDisplayString)(_ctx.weeks.extraInfo.info),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue6.createCommentVNode)("v-if", true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_03 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-calendar/components/wu-calendar-item/wu-calendar-item.vue"]]);
  var calendar$1 = {
    /**
        * 农历1900-2100的润大小信息表
        * @Array Of Property
        * @return Hex
        */
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      // 1900-1909
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      // 1910-1919
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      // 1920-1929
      25958,
      54432,
      59984,
      28309,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      // 1930-1939
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      // 1940-1949
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      // 1950-1959
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      // 1960-1969
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      // 1970-1979
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      // 1980-1989
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      23232,
      43872,
      38613,
      37600,
      // 1990-1999
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      // 2000-2009
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      // 2010-2019
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      // 2020-2029
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      // 2030-2039
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      // 2040-2049
      /** Add By JJonline@JJonline.Cn**/
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      // 2050-2059
      41696,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      // 2060-2069
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      // 2070-2079
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      // 2080-2089
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      // 2090-2099
      54560
    ],
    // 2100
    /**
        * 公历每个月份的天数普通表
        * @Array Of Property
        * @return Number
        */
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    /**
        * 天干地支之天干速查表
        * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
        * @return Cn string
        */
    Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
    /**
        * 天干地支之地支速查表
        * @Array Of Property
        * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
        * @return Cn string
        */
    Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
    /**
        * 天干地支之地支速查表<=>生肖
        * @Array Of Property
        * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
        * @return Cn string
        */
    Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],
    /**
        * 24节气速查表
        * @Array Of Property
        * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
        * @return Cn string
        */
    solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],
    /**
        * 1900-2100各年的24节气日期速查表
        * @Array Of Property
        * @return 0x string For splice
        */
    sTermInfo: [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722"
    ],
    /**
        * 数字转中文速查表
        * @Array Of Property
        * @trans ['日','一','二','三','四','五','六','七','八','九','十']
        * @return Cn string
        */
    nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
    /**
        * 日期转农历称呼速查表
        * @Array Of Property
        * @trans ['初','十','廿','卅']
        * @return Cn string
        */
    nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
    /**
        * 月份转农历称呼速查表
        * @Array Of Property
        * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
        * @return Cn string
        */
    nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
    /**
        * 返回农历y年一整年的总天数
        * @param lunar Year
        * @return Number
        * @eg:var count = calendar.lYearDays(1987) ;//count=387
        */
    lYearDays: function(y) {
      var i;
      var sum = 348;
      for (i = 32768; i > 8; i >>= 1) {
        sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
      }
      return sum + this.leapDays(y);
    },
    /**
        * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
        * @param lunar Year
        * @return Number (0-12)
        * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
        */
    leapMonth: function(y) {
      return this.lunarInfo[y - 1900] & 15;
    },
    /**
        * 返回农历y年闰月的天数 若该年没有闰月则返回0
        * @param lunar Year
        * @return Number (0、29、30)
        * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
        */
    leapDays: function(y) {
      if (this.leapMonth(y)) {
        return this.lunarInfo[y - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    /**
        * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
        * @param lunar Year
        * @return Number (-1、29、30)
        * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
        */
    monthDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      return this.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
    },
    /**
        * 返回公历(!)y年m月的天数
        * @param solar Year
        * @return Number (-1、28、29、30、31)
        * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
        */
    solarDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var ms = m - 1;
      if (ms == 1) {
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
      } else {
        return this.solarMonth[ms];
      }
    },
    /**
       * 农历年份转换为干支纪年
       * @param  lYear 农历年的年份数
       * @return Cn string
       */
    toGanZhiYear: function(lYear) {
      var ganKey = (lYear - 3) % 10;
      var zhiKey = (lYear - 3) % 12;
      if (ganKey == 0)
        ganKey = 10;
      if (zhiKey == 0)
        zhiKey = 12;
      return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    /**
       * 公历月、日判断所属星座
       * @param  cMonth [description]
       * @param  cDay [description]
       * @return Cn string
       */
    toAstro: function(cMonth, cDay) {
      var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
      var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7";
    },
    /**
        * 传入offset偏移量返回干支
        * @param offset 相对甲子的偏移量
        * @return Cn string
        */
    toGanZhi: function(offset) {
      return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    /**
        * 传入公历(!)y年获得该年第n个节气的公历日期
        * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
        * @return day Number
        * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
        */
    getTerm: function(y, n) {
      if (y < 1900 || y > 2100) {
        return -1;
      }
      if (n < 1 || n > 24) {
        return -1;
      }
      var _table = this.sTermInfo[y - 1900];
      var _info = [
        parseInt("0x" + _table.substr(0, 5)).toString(),
        parseInt("0x" + _table.substr(5, 5)).toString(),
        parseInt("0x" + _table.substr(10, 5)).toString(),
        parseInt("0x" + _table.substr(15, 5)).toString(),
        parseInt("0x" + _table.substr(20, 5)).toString(),
        parseInt("0x" + _table.substr(25, 5)).toString()
      ];
      var _calday = [
        _info[0].substr(0, 1),
        _info[0].substr(1, 2),
        _info[0].substr(3, 1),
        _info[0].substr(4, 2),
        _info[1].substr(0, 1),
        _info[1].substr(1, 2),
        _info[1].substr(3, 1),
        _info[1].substr(4, 2),
        _info[2].substr(0, 1),
        _info[2].substr(1, 2),
        _info[2].substr(3, 1),
        _info[2].substr(4, 2),
        _info[3].substr(0, 1),
        _info[3].substr(1, 2),
        _info[3].substr(3, 1),
        _info[3].substr(4, 2),
        _info[4].substr(0, 1),
        _info[4].substr(1, 2),
        _info[4].substr(3, 1),
        _info[4].substr(4, 2),
        _info[5].substr(0, 1),
        _info[5].substr(1, 2),
        _info[5].substr(3, 1),
        _info[5].substr(4, 2)
      ];
      return parseInt(_calday[n - 1]);
    },
    /**
        * 传入农历数字月份返回汉语通俗表示法
        * @param lunar month
        * @return Cn string
        * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
        */
    toChinaMonth: function(m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var s = this.nStr3[m - 1];
      s += "\u6708";
      return s;
    },
    /**
        * 传入农历日期数字返回汉字表示法
        * @param lunar day
        * @return Cn string
        * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
        */
    toChinaDay: function(d) {
      var s;
      switch (d) {
        case 10:
          s = "\u521D\u5341";
          break;
        case 20:
          s = "\u4E8C\u5341";
          break;
        case 30:
          s = "\u4E09\u5341";
          break;
        default:
          s = this.nStr2[Math.floor(d / 10)];
          s += this.nStr1[d % 10];
      }
      return s;
    },
    /**
        * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
        * @param y year
        * @return Cn string
        * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
        */
    getAnimal: function(y) {
      return this.Animals[(y - 4) % 12];
    },
    /**
        * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
        * @param y  solar year
        * @param m  solar month
        * @param d  solar day
        * @return JSON object
        * @eg:__f__('log','at uni_modules/wu-calendar/components/wu-calendar/calendar.js:381',calendar.solar2lunar(1987,11,01));
        */
    solar2lunar: function(y, m, d) {
      if (y < 1900 || y > 2100) {
        return -1;
      }
      if (y == 1900 && m == 1 && d < 31) {
        return -1;
      }
      if (!y) {
        var objDate = /* @__PURE__ */ new Date();
      } else {
        var objDate = new Date(y, parseInt(m) - 1, d);
      }
      var i;
      var leap = 0;
      var temp = 0;
      var y = objDate.getFullYear();
      var m = objDate.getMonth() + 1;
      var d = objDate.getDate();
      var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (i = 1900; i < 2101 && offset > 0; i++) {
        temp = this.lYearDays(i);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i--;
      }
      var isTodayObj = /* @__PURE__ */ new Date();
      var isToday = false;
      if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
        isToday = true;
      }
      var nWeek = objDate.getDay();
      var cWeek = this.nStr1[nWeek];
      if (nWeek == 0) {
        nWeek = 7;
      }
      var year = i;
      var leap = this.leapMonth(i);
      var isLeap = false;
      for (i = 1; i < 13 && offset > 0; i++) {
        if (leap > 0 && i == leap + 1 && isLeap == false) {
          --i;
          isLeap = true;
          temp = this.leapDays(year);
        } else {
          temp = this.monthDays(year, i);
        }
        if (isLeap == true && i == leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      if (offset == 0 && leap > 0 && i == leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i;
      }
      var month = i;
      var day = offset + 1;
      var sm = m - 1;
      var gzY = this.toGanZhiYear(year);
      var firstNode = this.getTerm(y, m * 2 - 1);
      var secondNode = this.getTerm(y, m * 2);
      var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
      if (d >= firstNode) {
        gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
      }
      var isTerm = false;
      var Term = null;
      if (firstNode == d) {
        isTerm = true;
        Term = this.solarTerm[m * 2 - 2];
      }
      if (secondNode == d) {
        isTerm = true;
        Term = this.solarTerm[m * 2 - 1];
      }
      var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
      var gzD = this.toGanZhi(dayCyclical + d - 1);
      var astro = this.toAstro(m, d);
      return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "\u95F0" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "\u661F\u671F" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
    },
    /**
        * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
        * @param y  lunar year
        * @param m  lunar month
        * @param d  lunar day
        * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
        * @return JSON object
        * @eg:__f__('log','at uni_modules/wu-calendar/components/wu-calendar/calendar.js:500',calendar.lunar2solar(1987,9,10));
        */
    lunar2solar: function(y, m, d, isLeapMonth) {
      var isLeapMonth = !!isLeapMonth;
      var leapMonth = this.leapMonth(y);
      this.leapDays(y);
      if (isLeapMonth && leapMonth != m) {
        return -1;
      }
      if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
        return -1;
      }
      var day = this.monthDays(y, m);
      var _day = day;
      if (isLeapMonth) {
        _day = this.leapDays(y, m);
      }
      if (y < 1900 || y > 2100 || d > _day) {
        return -1;
      }
      var offset = 0;
      for (var i = 1900; i < y; i++) {
        offset += this.lYearDays(i);
      }
      var leap = 0;
      var isAdd = false;
      for (var i = 1; i < m; i++) {
        leap = this.leapMonth(y);
        if (!isAdd) {
          if (leap <= i && leap > 0) {
            offset += this.leapDays(y);
            isAdd = true;
          }
        }
        offset += this.monthDays(y, i);
      }
      if (isLeapMonth) {
        offset += day;
      }
      var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
      var calObj = new Date((offset + d - 31) * 864e5 + stmap);
      var cY = calObj.getUTCFullYear();
      var cM = calObj.getUTCMonth() + 1;
      var cD = calObj.getUTCDate();
      return this.solar2lunar(cY, cM, cD);
    }
  };
  var Calendar = class {
    constructor({
      date: date2,
      selected,
      startDate,
      endDate,
      range: range2,
      monthShowCurrentMonth
    } = {}) {
      this.date = this.getDate(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range2;
      this.monthShowCurrentMonth = monthShowCurrentMonth;
      this.cleanMultipleStatus();
      this.weeks = {};
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date2) {
      this.selectDate = this.getDate(date2);
      this._getWeek(this.selectDate.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    /**
     * 重置开始日期
     */
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    /**
     * 重置结束日期
     */
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    /**
     * 重置是否每月仅显示当月数据
     * @param {Boolean} show 是否仅显示当月数据 
     */
    resetMonthShowCurrentMonth(show) {
      this.monthShowCurrentMonth = show;
    }
    /**
     * 获取任意时间
     */
    getDate(date2, AddDayCount = 0, str = "day") {
      if (!date2) {
        date2 = /* @__PURE__ */ new Date();
      }
      if (typeof date2 !== "object") {
        date2 = date2.replace(/-/g, "/");
      }
      const dd = new Date(date2);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31 && AddDayCount > 0) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            const preMonth = dd.getMonth();
            dd.setMonth(preMonth + AddDayCount);
            const nextMonth = dd.getMonth();
            if (AddDayCount < 0 && preMonth !== 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth + (nextMonth - preMonth + AddDayCount));
            }
            if (AddDayCount > 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth - (nextMonth - preMonth - AddDayCount));
            }
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y = dd.getFullYear();
      const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y + "-" + m + "-" + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay()
      };
    }
    /**
     * 获取上月剩余天数
     */
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i = firstDay; i > 0; i--) {
        const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取本月天数
     */
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i = 1; i <= dateData; i++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
        let isDay = fullDate === nowDate;
        let info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: this.range ? checked : false,
          beforeMultiple: this.dateEqual(this.multipleStatus.before, nowDate),
          afterMultiple: this.dateEqual(this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: this.getlunar(full.year, full.month, i),
          disable: !(disableBefore && disableAfter),
          isDay
        };
        if (info) {
          data.extraInfo = info;
          data.disable = info.disable || false;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    /**
     * 获取下月天数
     */
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date2) {
      if (!date2) {
        date2 = /* @__PURE__ */ new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date2).fullDate);
      return dateInfo;
    }
    /**
     * 比较时间大小
     */
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      let disableList = this.selected.filter((item) => item.date && item.disable).map((item) => item.date);
      var arr = [];
      var ab = begin.split("-");
      var ae = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = /* @__PURE__ */ new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        let fullDate = this.getDate(new Date(parseInt(k))).fullDate;
        if (!disableList.includes(fullDate))
          arr.push(fullDate);
      }
      return arr;
    }
    /**
     * 计算阴历日期显示
     */
    getlunar(year, month, date2) {
      return calendar$1.solar2lunar(year, month, date2);
    }
    /**
     * 设置打点
     */
    setSelectInfo(data, value) {
      this.selected = value;
      this._getWeek(data);
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      let reset = before > fullDate;
      if (before && after || reset) {
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    _getWeek(dateData, useWeeks = true) {
      const {
        year,
        month
      } = this.getDate(dateData);
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        // 本月天数
        weeks: []
      };
      let canlender = [];
      if (this.monthShowCurrentMonth) {
        canlender = dates.currentMonthDys;
      } else {
        let firstDay = new Date(year, month - 1, 1).getDay();
        dates.lastMonthDays = this._getLastMonthDays(firstDay, this.getDate(dateData));
        const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
        dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
        canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      }
      let weeks = {};
      for (let i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i] || {};
      }
      if (useWeeks) {
        this.canlender = canlender;
        this.weeks = weeks;
      }
      formatAppLog("log", "at uni_modules/wu-calendar/components/wu-calendar/util.js:383", weeks);
      if (this.monthShowCurrentMonth) {
        let endIndex = Math.ceil(canlender.length / 7) - 1;
        for (let i = 0; i < weeks[endIndex].length; i++) {
          if (!weeks[endIndex][i]) {
            weeks[endIndex][i] = {
              empty: true,
              lunar: {}
            };
          }
        }
      }
      return weeks;
    }
    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  };
  var props5 = {
    props: __spreadValues({
      // 自定义当前时间，默认为今天
      date: {
        type: String,
        default: ""
      },
      // 主题色
      color: {
        type: String,
        default: "#3c9cff"
      },
      // 取消文字的颜色
      cancelColor: {
        type: String,
        default: "#333"
      },
      // 确定文字的颜色
      confirmColor: {
        type: String,
        default: "#333"
      },
      // 	mode=range时，第一个日期底部的提示文字
      startText: {
        type: String,
        default: "\u5F00\u59CB"
      },
      // mode=range时，最后一个日期底部的提示文字
      endText: {
        type: String,
        default: "\u7ED3\u675F"
      },
      // 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      // 是否显示农历
      lunar: {
        type: Boolean,
        default: false
      },
      // 日期选择范围-开始日期
      startDate: {
        type: String,
        default: ""
      },
      // 日期选择范围-结束日期
      endDate: {
        type: String,
        default: ""
      },
      // 范围选择
      range: {
        type: Boolean,
        default: false
      },
      // 每月是否仅显示当月数据
      monthShowCurrentMonth: {
        type: Boolean,
        default: false
      },
      // 插入模式,可选值，ture：插入模式；false：弹窗模式；默认为插入模式
      insert: {
        type: Boolean,
        default: true
      },
      // 滑动切换模式，可选值 horizontal: 横向 vertical：纵向 none： 不使用滑动切换
      slideSwitchMode: {
        type: String,
        default: "horizontal"
      },
      // 是否显示月份为背景
      showMonth: {
        type: Boolean,
        default: true
      },
      // 弹窗模式是否清空上次选择内容
      clearDate: {
        type: Boolean,
        default: true
      }
    }, (_b5 = (_a5 = uni.$w) == null ? void 0 : _a5.props) == null ? void 0 : _b5.calendar)
  };
  var _style_0$13 = { "wu-calendar": { "": { "flexDirection": "column" } }, "wu-calendar__mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionProperty": "opacity", "transitionDuration": 300, "opacity": 0 } }, "wu-calendar--mask-show": { "": { "opacity": 1 } }, "wu-calendar--fixed": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0, "transitionProperty": "transform", "transitionDuration": 300, "transform": "translateY(920rpx)" } }, "wu-calendar--ani-show": { "": { "transform": "translateY(0)" } }, "wu-calendar__content": { "": { "backgroundColor": "#ffffff" } }, "wu-calendar__header": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderBottomColor": "#EDEDED", "borderBottomStyle": "solid", "borderBottomWidth": "2rpx" } }, "wu-calendar--fixed-top": { "": { "height": "90rpx", "flexDirection": "row", "justifyContent": "space-between", "borderTopColor": "#EDEDED", "borderTopStyle": "solid", "borderTopWidth": "2rpx" } }, "wu-calendar--fixed-width": { "": { "width": "100rpx" } }, "wu-calendar__backtoday": { "": { "position": "absolute", "right": 0, "top": "25rpx", "paddingTop": 0, "paddingRight": "10rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "borderTopLeftRadius": "50rpx", "borderBottomLeftRadius": "50rpx", "color": "#333333", "backgroundColor": "#f1f1f1" }, ".vertical": { "top": "38rpx" } }, "wu-calendar__header-text": { "": { "textAlign": "center", "width": "200rpx", "fontSize": "32rpx", "color": "#333333" } }, "wu-calendar__header-btn-box": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center" }, ".horizontal": { "width": "100rpx", "height": "100rpx" }, ".vertical": { "flexDirection": "column", "paddingTop": "20rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": 0 } }, "wu-calendar__header-btn": { ".wu-calendar__header-btn-box ": { "width": "20rpx", "height": "20rpx" }, "": { "borderLeftColor": "#808080", "borderLeftStyle": "solid", "borderLeftWidth": "4rpx", "borderTopColor": "#555555", "borderTopStyle": "solid", "borderTopWidth": "4rpx" } }, "wu-calendar--left": { "": { "transform": "rotate(-45deg)" } }, "wu-calendar--right": { "": { "transform": "rotate(135deg)" } }, "wu-calendar--top": { "": { "transform": "rotate(45deg)" } }, "wu-calendar--bottom": { "": { "transform": "rotate(225deg)" } }, "wu-calendar__weeks_box": { "": { "height": "765rpx" } }, "wu-calendar__weeks": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 0, "paddingRight": "8rpx", "paddingBottom": 0, "paddingLeft": "8rpx" } }, "wu-calendar__weeks-item": { "": { "flex": 1, "marginBottom": "8rpx" } }, "wu-calendar__weeks-day": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": "90rpx", "borderBottomColor": "#F5F5F5", "borderBottomStyle": "solid", "borderBottomWidth": "2rpx" } }, "wu-calendar__weeks-day-text": { "": { "fontSize": "28rpx" } }, "wu-calendar__box": { "": { "position": "relative" } }, "wu-calendar__box-bg": { "": { "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "wu-calendar__box-bg-text": { "": { "fontSize": "100rpx", "transform": "scale(4)", "fontWeight": "bold", "color": "#999999", "opacity": 0.1, "textAlign": "center" } }, "@TRANSITION": { "wu-calendar__mask": { "property": "opacity", "duration": 300 }, "wu-calendar--fixed": { "property": "transform", "duration": 300 } } };
  var {
    t
  } = initVueI18n(i18nMessages);
  var _sfc_main$13 = {
    mixins: [mpMixin, mixin, props5],
    emits: ["close", "confirm", "change", "monthSwitch"],
    data() {
      return {
        show: false,
        weeks: [],
        preWeeks: [],
        nextWeeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false,
        swiperCurrent: 1,
        swiperChangeDirection: ""
      };
    },
    computed: {
      /**
       * for i18n
       */
      okText() {
        return t("wu-calender.ok");
      },
      cancelText() {
        return t("wu-calender.cancel");
      },
      YearText() {
        return t("wu-calender.year");
      },
      MonthText() {
        return t("wu-calender.month");
      },
      todayText() {
        return t("wu-calender.today");
      },
      monText() {
        return t("wu-calender.MON");
      },
      TUEText() {
        return t("wu-calender.TUE");
      },
      WEDText() {
        return t("wu-calender.WED");
      },
      THUText() {
        return t("wu-calender.THU");
      },
      FRIText() {
        return t("wu-calender.FRI");
      },
      SATText() {
        return t("wu-calender.SAT");
      },
      SUNText() {
        return t("wu-calender.SUN");
      }
    },
    watch: {
      date(newVal) {
        this.init(newVal);
      },
      startDate(val) {
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.assignmentWeeks();
      },
      endDate(val) {
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.assignmentWeeks();
      },
      monthShowCurrentMonth(val) {
        this.cale.resetMonthShowCurrentMonth(val);
        this.setDate(this.nowDate.fullDate);
      },
      selected(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.assignmentWeeks();
      }
    },
    created() {
      this.cale = new Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range,
        monthShowCurrentMonth: this.monthShowCurrentMonth
      });
      this.init(this.date);
    },
    methods: {
      // 取消穿透
      clean() {
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        this.setDate(value);
        const {
          year,
          month
        } = this.cale.getDate(value);
        this.$emit("monthSwitch", {
          year,
          month
        });
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date2) {
        this.cale.setDate(date2);
        this.cale.setMultiple(date2 || this.cale.date.fullDate);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date2);
        if (this.slideSwitchMode !== "none") {
          this.preWeeks = this.cale._getWeek(
            this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate,
            false
          );
          this.nextWeeks = this.cale._getWeek(
            this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate,
            false
          );
        }
      },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        let {
          year,
          month,
          date: date2,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date: date2,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable || weeks.empty)
          return;
        this.calendar = weeks;
        this.cale.setMultiple(this.calendar.fullDate);
        if (this.slideSwitchMode !== "none") {
          let weekName = "";
          switch (this.swiperCurrent) {
            case 0:
              weekName = "preWeeks";
              this.weeks = this.cale._getWeek(this.weeks[0].find((item) => item.fullDate).fullDate, false);
              this.nextWeeks = this.cale._getWeek(
                this.nextWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              break;
            case 1:
              weekName = "weeks";
              this.preWeeks = this.cale._getWeek(
                this.preWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              this.nextWeeks = this.cale._getWeek(
                this.nextWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              break;
            case 2:
              weekName = "nextWeeks";
              this.weeks = this.cale._getWeek(this.weeks[0].find((item) => item.fullDate).fullDate, false);
              this.preWeeks = this.cale._getWeek(
                this.preWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              break;
          }
          this[weekName] = this.cale.weeks;
        } else {
          this.weeks = this.cale.weeks;
        }
        this.change();
      },
      /**
       * 回到今天
       */
      backToday() {
        const nowYearMonth = `${this.nowDate.year}-${this.nowDate.month}`;
        if (this.cale.multipleStatus.before && !this.cale.multipleStatus.after) {
          this.cale.multipleStatus.before = "";
        }
        const date2 = this.cale.getDate(/* @__PURE__ */ new Date());
        this.cale.setMultiple(date2.fullDate);
        this.nowDate = this.calendar = date2;
        const todayYearMonth = `${date2.year}-${date2.month}`;
        if (nowYearMonth !== todayYearMonth) {
          this.monthSwitch();
        }
        this.setDate(todayYearMonth);
        this.swiperCurrentChangeWeeks();
        this.change();
      },
      /**
       * 上个月
       */
      pre() {
        this.swiperChangeDirection = "pre";
        this.weeksChange();
      },
      /**
       * 下个月
       */
      next() {
        this.swiperChangeDirection = "next";
        this.weeksChange();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date2) {
        this.cale.setDate(date2);
        this.assignmentWeeks();
        this.nowDate = this.cale.getInfo(date2);
      },
      /**
       * 用来将cale.weeks 赋值到 weeks
       */
      assignmentWeeks() {
        let weekName = "";
        switch (this.swiperCurrent) {
          case 0:
            weekName = "preWeeks";
            break;
          case 1:
            weekName = "weeks";
            break;
          case 2:
            weekName = "nextWeeks";
            break;
        }
        this[weekName] = this.cale.weeks;
      },
      /**
       * 滑动切换日期
       */
      swiperChange(e) {
        let curr = e.detail.current;
        if (curr - this.swiperCurrent == 1 || curr - this.swiperCurrent == -2) {
          this.swiperChangeDirection = "next";
        } else {
          this.swiperChangeDirection = "pre";
        }
        this.swiperCurrent = curr;
        this.weeksChange();
      },
      /**
       * weeks改变
       */
      weeksChange() {
        this.setDate(this.cale.getDate(
          this.nowDate.fullDate,
          this.swiperChangeDirection == "next" ? 1 : -1,
          "month"
        ).fullDate);
        this.swiperCurrentChangeWeeks();
        this.monthSwitch();
      },
      /**
       * swiperCurrent改变需要改动的weeks
       */
      swiperCurrentChangeWeeks() {
        if (this.slideSwitchMode !== "none") {
          if (this.swiperCurrent == 0) {
            this.weeks = this.cale._getWeek(
              this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate,
              false
            );
            this.nextWeeks = this.cale._getWeek(
              this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate,
              false
            );
          } else if (this.swiperCurrent == 1) {
            this.preWeeks = this.cale._getWeek(
              this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate,
              false
            );
            this.nextWeeks = this.cale._getWeek(
              this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate,
              false
            );
          } else {
            this.weeks = this.cale._getWeek(
              this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate,
              false
            );
            this.preWeeks = this.cale._getWeek(
              this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate,
              false
            );
          }
        }
      }
    }
  };
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_picker = (0, import_vue6.resolveComponent)("picker");
    const _component_wu_calendar_item = resolveEasycom((0, import_vue6.resolveDynamicComponent)("wu-calendar-item"), __easycom_03);
    const _component_swiper_item = (0, import_vue6.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue6.resolveComponent)("swiper");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "wu-calendar",
      renderWhole: true
    }, [
      !_ctx.insert && $data.show ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
        "view",
        {
          key: 0,
          class: (0, import_vue6.normalizeClass)(["wu-calendar__mask", { "wu-calendar--mask-show": $data.aniMaskShow }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
        },
        null,
        2
        /* CLASS */
      )) : (0, import_vue6.createCommentVNode)("v-if", true),
      _ctx.insert || $data.show ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
        "view",
        {
          key: 1,
          class: (0, import_vue6.normalizeClass)(["wu-calendar__content", { "wu-calendar--fixed": !_ctx.insert, "wu-calendar--ani-show": $data.aniMaskShow }])
        },
        [
          !_ctx.insert ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
            key: 0,
            class: "wu-calendar__header wu-calendar--fixed-top"
          }, [
            (0, import_vue6.createElementVNode)("view", {
              class: "wu-calendar__header-btn-box",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
            }, [
              (0, import_vue6.createElementVNode)(
                "u-text",
                { class: "wu-calendar__header-text wu-calendar--fixed-width" },
                (0, import_vue6.toDisplayString)($options.cancelText),
                1
                /* TEXT */
              )
            ]),
            (0, import_vue6.createElementVNode)("view", {
              class: "wu-calendar__header-btn-box",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
            }, [
              (0, import_vue6.createElementVNode)(
                "u-text",
                { class: "wu-calendar__header-text wu-calendar--fixed-width" },
                (0, import_vue6.toDisplayString)($options.okText),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue6.createCommentVNode)("v-if", true),
          (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__header" }, [
            (0, import_vue6.createCommentVNode)(" \u7EB5\u5411\u6ED1\u52A8\u5207\u6362\u5C55\u793A\u5185\u5BB9 "),
            _ctx.slideSwitchMode == "vertical" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              import_vue6.Fragment,
              { key: 0 },
              [
                (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__header-btn-box vertical" }, [
                  (0, import_vue6.createElementVNode)("view", {
                    class: "wu-calendar__header-btn wu-calendar--top",
                    onClick: _cache[3] || (_cache[3] = (0, import_vue6.withModifiers)((...args) => $options.pre && $options.pre(...args), ["stop"]))
                  }),
                  (0, import_vue6.createVNode)(_component_picker, {
                    mode: "date",
                    value: _ctx.date,
                    fields: "month",
                    onChange: $options.bindDateChange
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createElementVNode)(
                        "u-text",
                        { class: "wu-calendar__header-text" },
                        (0, import_vue6.toDisplayString)(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["value", "onChange"]),
                  (0, import_vue6.createElementVNode)("view", {
                    class: "wu-calendar__header-btn wu-calendar--bottom",
                    onClick: _cache[4] || (_cache[4] = (0, import_vue6.withModifiers)((...args) => $options.next && $options.next(...args), ["stop"]))
                  })
                ]),
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  {
                    class: "wu-calendar__backtoday vertical",
                    onClick: _cache[5] || (_cache[5] = (...args) => $options.backToday && $options.backToday(...args))
                  },
                  (0, import_vue6.toDisplayString)($options.todayText),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              import_vue6.Fragment,
              { key: 1 },
              [
                (0, import_vue6.createCommentVNode)(" \u6A2A\u5411\u51E0\u65E0\u6ED1\u52A8\u5C55\u793A\u5185\u5BB9 "),
                (0, import_vue6.createElementVNode)("view", {
                  class: "wu-calendar__header-btn-box horizontal",
                  onClick: _cache[6] || (_cache[6] = (0, import_vue6.withModifiers)((...args) => $options.pre && $options.pre(...args), ["stop"]))
                }, [
                  (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__header-btn wu-calendar--left" })
                ]),
                (0, import_vue6.createVNode)(_component_picker, {
                  mode: "date",
                  value: _ctx.date,
                  fields: "month",
                  onChange: $options.bindDateChange
                }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)(
                      "u-text",
                      { class: "wu-calendar__header-text" },
                      (0, import_vue6.toDisplayString)(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["value", "onChange"]),
                (0, import_vue6.createElementVNode)("view", {
                  class: "wu-calendar__header-btn-box horizontal",
                  onClick: _cache[7] || (_cache[7] = (0, import_vue6.withModifiers)((...args) => $options.next && $options.next(...args), ["stop"]))
                }, [
                  (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__header-btn wu-calendar--right" })
                ]),
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  {
                    class: "wu-calendar__backtoday",
                    onClick: _cache[8] || (_cache[8] = (...args) => $options.backToday && $options.backToday(...args))
                  },
                  (0, import_vue6.toDisplayString)($options.todayText),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__box" }, [
            _ctx.showMonth ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
              key: 0,
              class: "wu-calendar__box-bg"
            }, [
              (0, import_vue6.createElementVNode)(
                "u-text",
                { class: "wu-calendar__box-bg-text" },
                (0, import_vue6.toDisplayString)($data.nowDate.month),
                1
                /* TEXT */
              )
            ])) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks" }, [
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.SUNText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.monText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.TUEText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.WEDText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.THUText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.FRIText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks-day" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "wu-calendar__weeks-day-text" },
                  (0, import_vue6.toDisplayString)($options.SATText),
                  1
                  /* TEXT */
                )
              ])
            ]),
            (0, import_vue6.createCommentVNode)(" \u6ED1\u52A8\u5207\u6362 "),
            _ctx.slideSwitchMode !== "none" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_swiper, {
              key: 1,
              style: (0, import_vue6.normalizeStyle)({ height: _ctx.monthShowCurrentMonth ? "640rpx" : "765rpx" }),
              duration: 500,
              vertical: _ctx.slideSwitchMode == "vertical",
              circular: "",
              current: $data.swiperCurrent,
              onChange: $options.swiperChange
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks_box" }, [
                      ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                        import_vue6.Fragment,
                        null,
                        (0, import_vue6.renderList)($data.preWeeks, (item, weekIndex) => {
                          return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                            class: "wu-calendar__weeks",
                            key: weekIndex
                          }, [
                            ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                              import_vue6.Fragment,
                              null,
                              (0, import_vue6.renderList)(item, (weeks, weeksIndex) => {
                                return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                                  class: "wu-calendar__weeks-item",
                                  key: weeksIndex
                                }, [
                                  (0, import_vue6.createVNode)(_component_wu_calendar_item, {
                                    class: "wu-calendar-item--hook",
                                    weeks,
                                    calendar: $data.calendar,
                                    selected: _ctx.selected,
                                    lunar: _ctx.lunar,
                                    onChange: $options.choiceDate,
                                    color: _ctx.color,
                                    startText: _ctx.startText,
                                    endText: _ctx.endText
                                  }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange", "color", "startText", "endText"])
                                ]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks_box" }, [
                      ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                        import_vue6.Fragment,
                        null,
                        (0, import_vue6.renderList)($data.weeks, (item, weekIndex) => {
                          return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                            class: "wu-calendar__weeks",
                            key: weekIndex
                          }, [
                            ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                              import_vue6.Fragment,
                              null,
                              (0, import_vue6.renderList)(item, (weeks, weeksIndex) => {
                                return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                                  class: "wu-calendar__weeks-item",
                                  key: weeksIndex
                                }, [
                                  (0, import_vue6.createVNode)(_component_wu_calendar_item, {
                                    class: "wu-calendar-item--hook",
                                    weeks,
                                    calendar: $data.calendar,
                                    selected: _ctx.selected,
                                    lunar: _ctx.lunar,
                                    onChange: $options.choiceDate,
                                    color: _ctx.color,
                                    startText: _ctx.startText,
                                    endText: _ctx.endText
                                  }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange", "color", "startText", "endText"])
                                ]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "wu-calendar__weeks_box" }, [
                      ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                        import_vue6.Fragment,
                        null,
                        (0, import_vue6.renderList)($data.nextWeeks, (item, weekIndex) => {
                          return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                            class: "wu-calendar__weeks",
                            key: weekIndex
                          }, [
                            ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                              import_vue6.Fragment,
                              null,
                              (0, import_vue6.renderList)(item, (weeks, weeksIndex) => {
                                return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                                  class: "wu-calendar__weeks-item",
                                  key: weeksIndex
                                }, [
                                  (0, import_vue6.createVNode)(_component_wu_calendar_item, {
                                    class: "wu-calendar-item--hook",
                                    weeks,
                                    calendar: $data.calendar,
                                    selected: _ctx.selected,
                                    lunar: _ctx.lunar,
                                    onChange: $options.choiceDate,
                                    color: _ctx.color,
                                    startText: _ctx.startText,
                                    endText: _ctx.endText
                                  }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange", "color", "startText", "endText"])
                                ]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["style", "vertical", "current", "onChange"])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              import_vue6.Fragment,
              { key: 2 },
              [
                (0, import_vue6.createCommentVNode)(" \u65E0\u6ED1\u52A8\u5207\u6362 "),
                ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)($data.weeks, (item, weekIndex) => {
                    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                      class: "wu-calendar__weeks",
                      key: weekIndex
                    }, [
                      ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                        import_vue6.Fragment,
                        null,
                        (0, import_vue6.renderList)(item, (weeks, weeksIndex) => {
                          return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                            class: "wu-calendar__weeks-item",
                            key: weeksIndex
                          }, [
                            (0, import_vue6.createVNode)(_component_wu_calendar_item, {
                              class: "wu-calendar-item--hook",
                              weeks,
                              calendar: $data.calendar,
                              selected: _ctx.selected,
                              lunar: _ctx.lunar,
                              onChange: $options.choiceDate,
                              color: _ctx.color,
                              startText: _ctx.startText,
                              endText: _ctx.endText
                            }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange", "color", "startText", "endText"])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      )) : (0, import_vue6.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13], ["styles", [_style_0$13]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-calendar/components/wu-calendar/wu-calendar.vue"]]);
  var _style_05 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-cell-icon": { "": { "width": "36rpx", "height": "36rpx", "marginRight": "8rpx" } } };
  var _sfc_main5 = {
    data() {
      const d = /* @__PURE__ */ new Date();
      const year = d.getFullYear();
      let month = d.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
      const date2 = d.getDate();
      return {
        index: 0,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        values: ["", "", "", "", "", "", "", ""],
        customThemeDefaultDate: [`${year}-${month}-${date2}`, `${year}-${month}-${date2 + 5}`],
        customTextDefaultDate: [`${year}-${month}-${date2}`],
        maxDate: `${year}-${month}-${date2 + 10}`,
        defaultDateMultiple: [`${year}-${month}-${date2}`, `${year}-${month}-${date2 + 1}`, `${year}-${month}-${date2 + 2}`],
        list: [
          {
            title: "\u6A2A\u5411\u6ED1\u52A8\u5207\u6362(\u65E5\u671F\u8303\u56F4\u9009\u62E9)",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
          },
          {
            title: "\u7EB5\u5411\u5207\u6362\u6ED1\u52A8(\u65E5\u671F\u8303\u56F4\u9009\u62E9)",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
          },
          {
            title: "\u65E0\u6ED1\u52A8\u5207\u6362(\u65E5\u671F\u8303\u56F4\u9009\u62E9)",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
          },
          {
            title: "\u5355\u4E2A\u65E5\u671F",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/7.png"
          },
          {
            title: "\u81EA\u5B9A\u4E49\u4E3B\u9898\u989C\u8272",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/15.png"
          },
          {
            title: "\u81EA\u5B9A\u4E49\u6587\u6848",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/14.png"
          },
          {
            title: "\u65E5\u671F\u6700\u5927\u8303\u56F4",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/13.png"
          },
          {
            title: "\u663E\u793A\u519C\u5386",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/5.png"
          },
          {
            title: "\u6BCF\u6708\u4EC5\u663E\u793A\u5F53\u6708\u7684\u6570\u636E",
            iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/5.png"
          }
        ]
      };
    },
    methods: {
      showCalendar(index2) {
        this.index = index2 + 1;
        this.$refs[`wuCalendar${index2 + 1}`].open();
      },
      navigateBack() {
        uni.navigateBack();
      },
      confirm(e) {
        this[`show${this.index}`] = false;
        formatAppLog("log", "at pages/componentsC/calendar/calendar.nvue:163", e);
        switch (this.index - 1) {
          case 0:
            this.values[this.index - 1] = e[0];
            break;
          case 1:
            e.forEach((value, index2) => {
              index2 === 0 ? this.values[this.index - 1] = value : this.values[this.index - 1] += ";" + value;
            });
            break;
          case 2:
            this.values[this.index - 1] = e[0] + "~" + e[e.length - 1];
            break;
          case 3:
            this.values[this.index - 1] = e[0] + "~" + e[e.length - 1];
            break;
          case 4:
            this.values[this.index - 1] = e[0] + "~" + e[e.length - 1];
            break;
          case 5:
            this.values[this.index - 1] = e[0];
            break;
          case 6:
            this.values[this.index - 1] = e[0];
            break;
          case 7:
            e.forEach((value, index2) => {
              index2 === 0 ? this.values[this.index - 1] = value : this.values[this.index - 1] += ";" + value;
            });
            break;
        }
      },
      close() {
        this[`show${this.index}`] = false;
      },
      formatter(day) {
        const d = /* @__PURE__ */ new Date();
        let month = d.getMonth() + 1;
        const date2 = d.getDate();
        if (day.month == month && day.day == date2 + 3) {
          day.bottomInfo = "\u6709\u4F18\u60E0";
          day.dot = true;
        }
        return day;
      },
      wuCalendar6Selected() {
        let lastDate = /* @__PURE__ */ new Date();
        let firstDate = /* @__PURE__ */ new Date();
        lastDate.setDate(lastDate.getDate() + 2);
        firstDate.setDate(firstDate.getDate() + 5);
        return [{
          date: `${lastDate.getFullYear()}-${lastDate.getMonth() + 1}-${lastDate.getDate()}`,
          info: "\uFFE5950",
          infoColor: "#6ac695",
          topInfo: "\u6253\u6298",
          topInfoColor: "#6ac695",
          badge: true,
          badgePosition: "top-left"
        }, {
          date: `${firstDate.getFullYear()}-${firstDate.getMonth() + 1}-${firstDate.getDate()}`,
          info: "\uFFE5900",
          infoColor: "#6ac695",
          topInfo: "\u6253\u6298",
          topInfoColor: "#6ac695"
        }];
      }
    },
    computed: {
      wuCalendar6StartDate() {
        let nowDate = /* @__PURE__ */ new Date();
        return `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
      },
      wuCalendar7StartDate() {
        let nowDate = /* @__PURE__ */ new Date();
        return `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
      },
      wuCalendar7EndDate() {
        let nowDate = /* @__PURE__ */ new Date();
        nowDate.setDate(nowDate.getDate() + 30);
        return `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
      }
    }
  };
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_navbar = resolveEasycom((0, import_vue6.resolveDynamicComponent)("wu-navbar"), __easycom_02);
    const _component_wu_cell = resolveEasycom((0, import_vue6.resolveDynamicComponent)("wu-cell"), __easycom_1);
    const _component_wu_cell_group = resolveEasycom((0, import_vue6.resolveDynamicComponent)("wu-cell-group"), __easycom_22);
    const _component_wu_calendar = resolveEasycom((0, import_vue6.resolveDynamicComponent)("wu-calendar"), __easycom_3);
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue6.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue6.createVNode)(_component_wu_navbar, {
          title: "\u65E5\u5386",
          onLeftClick: $options.navigateBack,
          safeAreaInsetTop: "",
          fixed: "",
          placeholder: ""
        }, null, 8, ["onLeftClick"]),
        (0, import_vue6.createVNode)(_component_wu_cell_group, null, {
          default: (0, import_vue6.withCtx)(() => [
            ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
              import_vue6.Fragment,
              null,
              (0, import_vue6.renderList)($data.list, (item, index2) => {
                return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_wu_cell, {
                  onClick: ($event) => $options.showCalendar(index2),
                  title: item.title,
                  key: index2,
                  label: $data.values[index2],
                  isLink: ""
                }, {
                  icon: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("u-image", {
                      class: "wu-cell-icon",
                      src: item.iconUrl,
                      mode: "widthFix"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["onClick", "title", "label"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createCommentVNode)(" \u6A2A\u5411\u6ED1\u52A8 "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar1",
            insert: false,
            range: ""
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue6.createCommentVNode)(" \u7EB5\u5411\u6ED1\u52A8 "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar2",
            slideSwitchMode: "vertical",
            insert: false,
            range: ""
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue6.createCommentVNode)(" \u65E0\u6ED1\u52A8\u5207\u6362 "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar3",
            slideSwitchMode: "none",
            insert: false,
            range: ""
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue6.createCommentVNode)(" \u5355\u4E2A\u65E5\u671F "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar4",
            insert: false
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue6.createCommentVNode)(" \u81EA\u5B9A\u4E49\u4E3B\u9898\u989C\u8272 "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar5",
            insert: false,
            range: "",
            color: "#6ac695"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue6.createCommentVNode)(" \u81EA\u5B9A\u4E49\u6253\u70B9 "),
        (0, import_vue6.createVNode)(_component_wu_calendar, {
          ref: "wuCalendar6",
          insert: false,
          range: "",
          selected: $options.wuCalendar6Selected(),
          startDate: $options.wuCalendar6StartDate,
          "start-text": "\u53BB\u7A0B",
          "end-text": "\u8FD4\u7A0B",
          color: "#6ac695"
        }, null, 8, ["selected", "startDate"]),
        (0, import_vue6.createCommentVNode)(" \u65E5\u671F\u6700\u5927\u8303\u56F4 "),
        (0, import_vue6.createVNode)(_component_wu_calendar, {
          ref: "wuCalendar7",
          insert: false,
          startDate: $options.wuCalendar7StartDate,
          endDate: $options.wuCalendar7EndDate,
          range: ""
        }, null, 8, ["startDate", "endDate"]),
        (0, import_vue6.createCommentVNode)(" \u663E\u793A\u519C\u5386 "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar8",
            insert: false,
            range: "",
            lunar: ""
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue6.createCommentVNode)(" \u6BCF\u6708\u4EC5\u663E\u793A\u5F53\u6708\u7684\u6570\u636E "),
        (0, import_vue6.createVNode)(
          _component_wu_calendar,
          {
            ref: "wuCalendar9",
            monthShowCurrentMonth: "",
            insert: false,
            range: ""
          },
          null,
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  var calendar = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/calendar/calendar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/calendar/calendar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    calendar.mpType = "page";
    const app = Vue.createPageApp(calendar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...calendar.styles || []]));
    app.mount("#root");
  }
})();
