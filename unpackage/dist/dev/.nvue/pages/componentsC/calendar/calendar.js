var _a, _b;
import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../wu-navbar.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, createCommentVNode, toDisplayString, resolveComponent, resolveDynamicComponent, normalizeClass, Fragment, withModifiers, createVNode, withCtx, createBlock, renderList } from "vue";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
const props$1 = {
  props: {
    color: {
      type: String,
      default: "#3c9cff"
    },
    startText: {
      type: String,
      default: "开始"
    },
    endText: {
      type: String,
      default: "结束"
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
const isObject = (val) => val !== null && typeof val === "object";
const defaultDelimiters = ["{", "}"];
class BaseFormatter {
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
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
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
  let index = 0;
  const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index < tokens.length) {
    const token = tokens[index];
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
    index++;
  }
  return compiled;
}
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
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
class I18n {
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
    const index = this.watchers.push(fn) - 1;
    return () => {
      this.watchers.splice(index, 1);
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
}
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
const en = {
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
const zhHans = {
  "wu-calender.ok": "确定",
  "wu-calender.cancel": "取消",
  "wu-calender.year": "年",
  "wu-calender.month": "月",
  "wu-calender.today": "今日",
  "wu-calender.SUN": "日",
  "wu-calender.MON": "一",
  "wu-calender.TUE": "二",
  "wu-calender.WED": "三",
  "wu-calender.THU": "四",
  "wu-calender.FRI": "五",
  "wu-calender.SAT": "六"
};
const zhHant = {
  "wu-calender.ok": "確定",
  "wu-calender.cancel": "取消",
  "wu-calender.year": "年",
  "wu-calender.month": "月",
  "wu-calender.today": "今日",
  "wu-calender.SUN": "日",
  "wu-calender.MON": "一",
  "wu-calender.TUE": "二",
  "wu-calender.WED": "三",
  "wu-calender.THU": "四",
  "wu-calender.FRI": "五",
  "wu-calender.SAT": "六"
};
const i18nMessages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0$2 = { "wu-calendar-item__weeks-box": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "wu-calendar-item__weeks-box-text": { "": { "fontSize": "28rpx", "color": "#333333" } }, "wu-calendar-item__weeks-lunar-text": { "": { "fontSize": "24rpx", "color": "#333333" } }, "wu-calendar-item__weeks-box-item": { "": { "position": "relative", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": "100rpx", "height": "120rpx" } }, "wu-calendar-item__weeks-box-circle": { "": { "position": "absolute", "width": "16rpx", "height": "15rpx", "borderRadius": "16rpx", "backgroundColor": "#e43d33" } }, "wu-calendar-item--disable": { "": { "backgroundColor": "rgba(249,249,249,0.3)", "color": "#c0c0c0" } }, "wu-calendar-item--extra": { "": { "color": "#e43d33", "opacity": 0.8 } }, "wu-calendar-item--checked": { "": { "color": "#ffffff" } } };
const {
  t: t$1
} = initVueI18n(i18nMessages);
const _sfc_main$2 = {
  emits: ["change"],
  mixins: [mpMixin, mixin, props$1],
  computed: {
    todayText() {
      return t$1("wu-calender.today");
    },
    // 每项日历样式
    calendarItemStyle() {
      let style = {};
      let color = this.$w.Color.gradient(this.color, this.$w.Color.isLight(this.color) ? "#000" : "#fff", 100)[6];
      if (this.weeks.multiple) {
        style = {
          backgroundColor: this.$w.Color.gradient(this.color, "#fff", 100)[80],
          color
        };
      }
      if (this.weeks.isDay) {
        style.color = color;
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
        backgroundColor: this.weeks.disable ? "#c0c0c0" : this.weeks.extraInfo.infoColor || "#e43d33"
      };
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
      return style;
    },
    // 日期文字
    dayText() {
      let text = "";
      if (this.weeks.isDay) {
        text = this.todayText;
      } else if (this.weeks.lunar.IDayCn === "初一") {
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
  return openBlock(), createElementBlock(
    "view",
    {
      class: "wu-calendar-item__weeks-box",
      style: normalizeStyle([$options.calendarItemStyle, {
        borderTopLeftRadius: _ctx.weeks.beforeMultiple ? "12rpx" : "",
        borderBottomLeftRadius: _ctx.weeks.beforeMultiple ? "12rpx" : "",
        borderTopRightRadius: _ctx.weeks.afterMultiple ? "12rpx" : "",
        borderBottomRightRadius: _ctx.weeks.afterMultiple ? "12rpx" : ""
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate(_ctx.weeks)),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "wu-calendar-item__weeks-box-item",
          style: normalizeStyle([$options.actMultipleStyle])
        },
        [
          createCommentVNode(" 自定义打点上方信息 "),
          _ctx.weeks.extraInfo && _ctx.weeks.extraInfo.topInfo ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: "wu-calendar-item__weeks-lunar-text",
              style: normalizeStyle([{ color: _ctx.weeks.extraInfo.topInfoColor || "#e43d33" }, $options.calendarItemStyle, $options.actMultipleStyle])
            },
            toDisplayString(_ctx.weeks.extraInfo.topInfo),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true),
          createCommentVNode(" 徽标 "),
          _ctx.selected && _ctx.weeks.extraInfo && _ctx.weeks.extraInfo.badge ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 1,
              class: "wu-calendar-item__weeks-box-circle",
              style: normalizeStyle([$options.badgeStyle])
            },
            null,
            4
            /* STYLE */
          )) : createCommentVNode("v-if", true),
          createCommentVNode(" 日期文字 "),
          createElementVNode(
            "u-text",
            {
              class: "wu-calendar-item__weeks-box-text",
              style: normalizeStyle([$options.calendarItemStyle, $options.actMultipleStyle])
            },
            toDisplayString(_ctx.weeks.date),
            5
            /* TEXT, STYLE */
          ),
          createCommentVNode(" 今日的文字 "),
          !_ctx.lunar && !_ctx.weeks.extraInfo && _ctx.weeks.isDay && !_ctx.weeks.beforeMultiple && !_ctx.weeks.afterMultiple ? (openBlock(), createElementBlock("u-text", {
            key: 2,
            class: "wu-calendar-item__weeks-lunar-text"
          })) : createCommentVNode("v-if", true),
          createCommentVNode(" 农历文字 "),
          _ctx.lunar && !_ctx.weeks.extraInfo && !_ctx.weeks.beforeMultiple && !_ctx.weeks.afterMultiple ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 3,
              class: "wu-calendar-item__weeks-lunar-text",
              style: normalizeStyle([$options.calendarItemStyle, $options.actMultipleStyle])
            },
            toDisplayString($options.dayText),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true),
          createCommentVNode(" 选中的文字展示 "),
          !_ctx.weeks.extraInfo && (_ctx.weeks.beforeMultiple || _ctx.weeks.afterMultiple) ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 4,
              class: "wu-calendar-item__weeks-lunar-text",
              style: normalizeStyle([$options.calendarItemStyle, $options.actMultipleStyle])
            },
            toDisplayString($options.multipleText),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true),
          createCommentVNode(" 自定义打点下方信息 "),
          _ctx.weeks.extraInfo && _ctx.weeks.extraInfo.info ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 5,
              class: "wu-calendar-item__weeks-lunar-text",
              style: normalizeStyle([{ color: _ctx.weeks.extraInfo.infoColor || "#e43d33" }, $options.calendarItemStyle, $options.actMultipleStyle])
            },
            toDisplayString(_ctx.weeks.extraInfo.info),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-calendar/components/wu-calendar-item/wu-calendar-item.vue"]]);
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
  Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
  /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
  Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
  /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
  Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
  /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
  solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
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
  nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
  /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
  nStr2: ["初", "十", "廿", "卅"],
  /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
  nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
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
    var s = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
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
    s += "月";
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
        s = "初十";
        break;
      case 20:
        s = "二十";
        break;
      case 30:
        s = "三十";
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
    return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "星期" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
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
class Calendar {
  constructor({
    date,
    selected,
    startDate,
    endDate,
    range
  } = {}) {
    this.date = this.getDate(/* @__PURE__ */ new Date());
    this.selected = selected || [];
    this.startDate = startDate;
    this.endDate = endDate;
    this.range = range;
    this.cleanMultipleStatus();
    this.weeks = {};
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  setDate(date) {
    this.selectDate = this.getDate(date);
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
   * 获取任意时间
   */
  getDate(date, AddDayCount = 0, str = "day") {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    if (typeof date !== "object") {
      date = date.replace(/-/g, "/");
    }
    const dd = new Date(date);
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
  getInfo(date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
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
      arr.push(this.getDate(new Date(parseInt(k))).fullDate);
    }
    return arr;
  }
  /**
   * 计算阴历日期显示
   */
  getlunar(year, month, date) {
    return calendar$1.solar2lunar(year, month, date);
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
    let firstDay = new Date(year, month - 1, 1).getDay();
    let currentDay = new Date(year, month, 0).getDate();
    let dates = {
      lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
      // 上个月末尾几天
      currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
      // 本月天数
      nextMonthDays: [],
      // 下个月开始几天
      weeks: []
    };
    let canlender = [];
    const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
    dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
    canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
    let weeks = {};
    for (let i = 0; i < canlender.length; i++) {
      if (i % 7 === 0) {
        weeks[parseInt(i / 7)] = new Array(7);
      }
      weeks[parseInt(i / 7)][i % 7] = canlender[i];
    }
    if (useWeeks) {
      this.canlender = canlender;
      this.weeks = weeks;
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
}
const props = {
  props: {
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
      default: "开始"
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: "结束"
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
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.calendar
  }
};
const _style_0$1 = { "wu-calendar": { "": { "flexDirection": "column" } }, "wu-calendar__mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionProperty": "opacity", "transitionDuration": 300, "opacity": 0 } }, "wu-calendar--mask-show": { "": { "opacity": 1 } }, "wu-calendar--fixed": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0, "transitionProperty": "transform", "transitionDuration": 300, "transform": "translateY(920rpx)" } }, "wu-calendar--ani-show": { "": { "transform": "translateY(0)" } }, "wu-calendar__content": { "": { "backgroundColor": "#ffffff" } }, "wu-calendar__header": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderBottomColor": "#EDEDED", "borderBottomStyle": "solid", "borderBottomWidth": "2rpx" } }, "wu-calendar--fixed-top": { "": { "height": "90rpx", "flexDirection": "row", "justifyContent": "space-between", "borderTopColor": "#EDEDED", "borderTopStyle": "solid", "borderTopWidth": "2rpx" } }, "wu-calendar--fixed-width": { "": { "width": "100rpx" } }, "wu-calendar__backtoday": { "": { "position": "absolute", "right": 0, "top": "25rpx", "paddingTop": 0, "paddingRight": "10rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "borderTopLeftRadius": "50rpx", "borderBottomLeftRadius": "50rpx", "color": "#333333", "backgroundColor": "#f1f1f1" }, ".vertical": { "top": "38rpx" } }, "wu-calendar__header-text": { "": { "textAlign": "center", "width": "200rpx", "fontSize": "32rpx", "color": "#333333" } }, "wu-calendar__header-btn-box": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center" }, ".horizontal": { "width": "100rpx", "height": "100rpx" }, ".vertical": { "flexDirection": "column", "paddingTop": "20rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": 0 } }, "wu-calendar__header-btn": { ".wu-calendar__header-btn-box ": { "width": "20rpx", "height": "20rpx" }, "": { "borderLeftColor": "#808080", "borderLeftStyle": "solid", "borderLeftWidth": "4rpx", "borderTopColor": "#555555", "borderTopStyle": "solid", "borderTopWidth": "4rpx" } }, "wu-calendar--left": { "": { "transform": "rotate(-45deg)" } }, "wu-calendar--right": { "": { "transform": "rotate(135deg)" } }, "wu-calendar--top": { "": { "transform": "rotate(45deg)" } }, "wu-calendar--bottom": { "": { "transform": "rotate(225deg)" } }, "wu-calendar__weeks": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 0, "paddingRight": "8rpx", "paddingBottom": 0, "paddingLeft": "8rpx" } }, "wu-calendar__weeks-item": { "": { "flex": 1, "marginBottom": "8rpx" } }, "wu-calendar__weeks-day": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": "90rpx", "borderBottomColor": "#F5F5F5", "borderBottomStyle": "solid", "borderBottomWidth": "2rpx" } }, "wu-calendar__weeks-day-text": { "": { "fontSize": "28rpx" } }, "wu-calendar__box": { "": { "position": "relative" } }, "wu-calendar__box-bg": { "": { "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "wu-calendar__box-bg-text": { "": { "fontSize": "100rpx", "transform": "scale(4)", "fontWeight": "bold", "color": "#999999", "opacity": 0.1, "textAlign": "center" } }, "@TRANSITION": { "wu-calendar__mask": { "property": "opacity", "duration": 300 }, "wu-calendar--fixed": { "property": "transform", "duration": 300 } } };
const {
  t
} = initVueI18n(i18nMessages);
const _sfc_main$1 = {
  mixins: [mpMixin, mixin, props],
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
      this.weeks = this.cale.weeks;
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
      this.weeks = this.cale.weeks;
    }
  },
  created() {
    this.cale = new Calendar({
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range
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
    init(date) {
      this.cale.setDate(date);
      this.cale.setMultiple(date || this.cale.date.fullDate);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
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
        date,
        fullDate,
        lunar,
        extraInfo
      } = this.calendar;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
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
      if (weeks.disable)
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
      const date = this.cale.getDate(/* @__PURE__ */ new Date());
      this.cale.setMultiple(date.fullDate);
      this.nowDate = this.calendar = this.cale.getInfo(date.fullDate);
      const todayYearMonth = `${date.year}-${date.month}`;
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
    setDate(date) {
      this.cale.setDate(date);
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
      this.nowDate = this.cale.getInfo(date);
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker = resolveComponent("picker");
  const _component_wu_calendar_item = resolveEasycom(resolveDynamicComponent("wu-calendar-item"), __easycom_0);
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("view", {
    class: "wu-calendar",
    renderWhole: true
  }, [
    !_ctx.insert && $data.show ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: normalizeClass(["wu-calendar__mask", { "wu-calendar--mask-show": $data.aniMaskShow }]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
      },
      null,
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true),
    _ctx.insert || $data.show ? (openBlock(), createElementBlock(
      "view",
      {
        key: 1,
        class: normalizeClass(["wu-calendar__content", { "wu-calendar--fixed": !_ctx.insert, "wu-calendar--ani-show": $data.aniMaskShow }])
      },
      [
        !_ctx.insert ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "wu-calendar__header wu-calendar--fixed-top"
        }, [
          createElementVNode("view", {
            class: "wu-calendar__header-btn-box",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
          }, [
            createElementVNode(
              "u-text",
              { class: "wu-calendar__header-text wu-calendar--fixed-width" },
              toDisplayString($options.cancelText),
              1
              /* TEXT */
            )
          ]),
          createElementVNode("view", {
            class: "wu-calendar__header-btn-box",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
          }, [
            createElementVNode(
              "u-text",
              { class: "wu-calendar__header-text wu-calendar--fixed-width" },
              toDisplayString($options.okText),
              1
              /* TEXT */
            )
          ])
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "wu-calendar__header" }, [
          createCommentVNode(" 纵向滑动切换展示内容 "),
          _ctx.slideSwitchMode == "vertical" ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createElementVNode("view", { class: "wu-calendar__header-btn-box vertical" }, [
                createElementVNode("view", {
                  class: "wu-calendar__header-btn wu-calendar--top",
                  onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
                }),
                createVNode(_component_picker, {
                  mode: "date",
                  value: _ctx.date,
                  fields: "month",
                  onChange: $options.bindDateChange
                }, {
                  default: withCtx(() => [
                    createElementVNode(
                      "u-text",
                      { class: "wu-calendar__header-text" },
                      toDisplayString(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["value", "onChange"]),
                createElementVNode("view", {
                  class: "wu-calendar__header-btn wu-calendar--bottom",
                  onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
                })
              ]),
              createElementVNode(
                "u-text",
                {
                  class: "wu-calendar__backtoday vertical",
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.backToday && $options.backToday(...args))
                },
                toDisplayString($options.todayText),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createCommentVNode(" 横向几无滑动展示内容 "),
              createElementVNode("view", {
                class: "wu-calendar__header-btn-box horizontal",
                onClick: _cache[6] || (_cache[6] = withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
              }, [
                createElementVNode("view", { class: "wu-calendar__header-btn wu-calendar--left" })
              ]),
              createVNode(_component_picker, {
                mode: "date",
                value: _ctx.date,
                fields: "month",
                onChange: $options.bindDateChange
              }, {
                default: withCtx(() => [
                  createElementVNode(
                    "u-text",
                    { class: "wu-calendar__header-text" },
                    toDisplayString(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value", "onChange"]),
              createElementVNode("view", {
                class: "wu-calendar__header-btn-box horizontal",
                onClick: _cache[7] || (_cache[7] = withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
              }, [
                createElementVNode("view", { class: "wu-calendar__header-btn wu-calendar--right" })
              ]),
              createElementVNode(
                "u-text",
                {
                  class: "wu-calendar__backtoday",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.backToday && $options.backToday(...args))
                },
                toDisplayString($options.todayText),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        createElementVNode("view", { class: "wu-calendar__box" }, [
          _ctx.showMonth ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "wu-calendar__box-bg"
          }, [
            createElementVNode(
              "u-text",
              { class: "wu-calendar__box-bg-text" },
              toDisplayString($data.nowDate.month),
              1
              /* TEXT */
            )
          ])) : createCommentVNode("v-if", true),
          createElementVNode("view", { class: "wu-calendar__weeks" }, [
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.SUNText),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.monText),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.TUEText),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.WEDText),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.THUText),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.FRIText),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("view", { class: "wu-calendar__weeks-day" }, [
              createElementVNode(
                "u-text",
                { class: "wu-calendar__weeks-day-text" },
                toDisplayString($options.SATText),
                1
                /* TEXT */
              )
            ])
          ]),
          createCommentVNode(" 滑动切换 "),
          _ctx.slideSwitchMode !== "none" ? (openBlock(), createBlock(_component_swiper, {
            key: 1,
            style: { "height": "765rpx" },
            duration: 500,
            vertical: _ctx.slideSwitchMode == "vertical",
            circular: "",
            current: $data.swiperCurrent,
            onChange: $options.swiperChange
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($data.preWeeks, (item, weekIndex) => {
                      return openBlock(), createElementBlock("view", {
                        class: "wu-calendar__weeks",
                        key: weekIndex
                      }, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(item, (weeks, weeksIndex) => {
                            return openBlock(), createElementBlock("view", {
                              class: "wu-calendar__weeks-item",
                              key: weeksIndex
                            }, [
                              createVNode(_component_wu_calendar_item, {
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
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($data.weeks, (item, weekIndex) => {
                      return openBlock(), createElementBlock("view", {
                        class: "wu-calendar__weeks",
                        key: weekIndex
                      }, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(item, (weeks, weeksIndex) => {
                            return openBlock(), createElementBlock("view", {
                              class: "wu-calendar__weeks-item",
                              key: weeksIndex
                            }, [
                              createVNode(_component_wu_calendar_item, {
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
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($data.nextWeeks, (item, weekIndex) => {
                      return openBlock(), createElementBlock("view", {
                        class: "wu-calendar__weeks",
                        key: weekIndex
                      }, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(item, (weeks, weeksIndex) => {
                            return openBlock(), createElementBlock("view", {
                              class: "wu-calendar__weeks-item",
                              key: weeksIndex
                            }, [
                              createVNode(_component_wu_calendar_item, {
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
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["vertical", "current", "onChange"])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
            [
              createCommentVNode(" 无滑动切换 "),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.weeks, (item, weekIndex) => {
                  return openBlock(), createElementBlock("view", {
                    class: "wu-calendar__weeks",
                    key: weekIndex
                  }, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(item, (weeks, weeksIndex) => {
                        return openBlock(), createElementBlock("view", {
                          class: "wu-calendar__weeks-item",
                          key: weeksIndex
                        }, [
                          createVNode(_component_wu_calendar_item, {
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
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-calendar/components/wu-calendar/wu-calendar.vue"]]);
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-cell-icon": { "": { "width": "36rpx", "height": "36rpx", "marginRight": "8rpx" } } };
const _sfc_main = {
  data() {
    const d = /* @__PURE__ */ new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    const date = d.getDate();
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
      customThemeDefaultDate: [`${year}-${month}-${date}`, `${year}-${month}-${date + 5}`],
      customTextDefaultDate: [`${year}-${month}-${date}`],
      maxDate: `${year}-${month}-${date + 10}`,
      defaultDateMultiple: [`${year}-${month}-${date}`, `${year}-${month}-${date + 1}`, `${year}-${month}-${date + 2}`],
      list: [
        {
          title: "横向滑动切换(日期范围选择)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
        },
        {
          title: "纵向切换滑动(日期范围选择)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
        },
        {
          title: "无滑动切换(日期范围选择)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/9.png"
        },
        {
          title: "单个日期",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/7.png"
        },
        {
          title: "自定义主题颜色",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/15.png"
        },
        {
          title: "自定义文案",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/14.png"
        },
        {
          title: "日期最大范围",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/13.png"
        },
        {
          title: "显示农历",
          iconUrl: "https://cdn.uviewui.com/uview/demo/calendar/5.png"
        }
      ]
    };
  },
  methods: {
    showCalendar(index) {
      this.index = index + 1;
      this.$refs[`wuCalendar${index + 1}`].open();
    },
    navigateBack() {
      uni.navigateBack();
    },
    confirm(e) {
      this[`show${this.index}`] = false;
      formatAppLog("log", "at pages/componentsC/calendar/calendar.nvue:153", e);
      switch (this.index - 1) {
        case 0:
          this.values[this.index - 1] = e[0];
          break;
        case 1:
          e.forEach((value, index) => {
            index === 0 ? this.values[this.index - 1] = value : this.values[this.index - 1] += ";" + value;
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
          e.forEach((value, index) => {
            index === 0 ? this.values[this.index - 1] = value : this.values[this.index - 1] += ";" + value;
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
      const date = d.getDate();
      if (day.month == month && day.day == date + 3) {
        day.bottomInfo = "有优惠";
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
        info: "￥950",
        infoColor: "#6ac695",
        topInfo: "打折",
        topInfoColor: "#6ac695",
        badge: true,
        badgePosition: "top-left"
      }, {
        date: `${firstDate.getFullYear()}-${firstDate.getMonth() + 1}-${firstDate.getDate()}`,
        info: "￥900",
        infoColor: "#6ac695",
        topInfo: "打折",
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0$1);
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_wu_calendar = resolveEasycom(resolveDynamicComponent("wu-calendar"), __easycom_3);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "日历",
        onLeftClick: $options.navigateBack,
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: ""
      }, null, 8, ["onLeftClick"]),
      createVNode(_component_wu_cell_group, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                onClick: ($event) => $options.showCalendar(index),
                title: item.title,
                key: index,
                label: $data.values[index],
                isLink: ""
              }, {
                icon: withCtx(() => [
                  createElementVNode("u-image", {
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
      createCommentVNode(" 横向滑动 "),
      createVNode(
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
      createCommentVNode(" 纵向滑动 "),
      createVNode(
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
      createCommentVNode(" 无滑动切换 "),
      createVNode(
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
      createCommentVNode(" 单个日期 "),
      createVNode(
        _component_wu_calendar,
        {
          ref: "wuCalendar4",
          insert: false
        },
        null,
        512
        /* NEED_PATCH */
      ),
      createCommentVNode(" 自定义主题颜色 "),
      createVNode(
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
      createCommentVNode(" 自定义打点 "),
      createVNode(_component_wu_calendar, {
        ref: "wuCalendar6",
        insert: false,
        range: "",
        selected: $options.wuCalendar6Selected(),
        startDate: $options.wuCalendar6StartDate,
        "start-text": "去程",
        "end-text": "返程",
        color: "#6ac695"
      }, null, 8, ["selected", "startDate"]),
      createCommentVNode(" 显示农历 "),
      createVNode(
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
      createCommentVNode(" 日期最大范围 "),
      createVNode(_component_wu_calendar, {
        ref: "wuCalendar7",
        insert: false,
        startDate: $options.wuCalendar7StartDate,
        endDate: $options.wuCalendar7EndDate,
        range: ""
      }, null, 8, ["startDate", "endDate"])
    ])
  ]);
}
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/calendar/calendar.nvue"]]);
export {
  calendar as default
};
