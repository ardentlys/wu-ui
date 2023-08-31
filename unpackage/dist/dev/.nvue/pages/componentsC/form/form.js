import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, createCommentVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
const _sfc_main = {
  data() {
    return {
      fileList1: [],
      disabled1: false,
      tips: "",
      value: "",
      showCalendar: false,
      showBirthday: false,
      model1: {
        userInfo: {
          name: "楼兰",
          sex: "",
          birthday: ""
        },
        radiovalue1: "苹果",
        checkboxValue1: [],
        intro: "",
        code: ""
      },
      showSex: false,
      birthday: Number(/* @__PURE__ */ new Date()),
      actions: [
        {
          name: "男"
        },
        {
          name: "女"
        },
        {
          name: "保密"
        }
      ],
      rules: {
        "userInfo.name": [{
          type: "string",
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        }, {
          // 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
          validator: (rule, value, callback) => {
            return uni.$u.test.chinese(value);
          },
          message: "姓名必须为中文",
          // 触发器可以同时用blur和change，二者之间用英文逗号隔开
          trigger: ["change", "blur"]
        }],
        code: {
          type: "string",
          required: true,
          len: 4,
          message: "请填写4位验证码",
          trigger: ["blur"]
        },
        "userInfo.sex": {
          type: "string",
          max: 1,
          required: true,
          message: "请选择男或女",
          trigger: ["blur", "change"]
        },
        radiovalue1: {
          type: "string",
          min: 1,
          max: 2,
          message: "橙子有毒",
          trigger: ["change"]
        },
        checkboxValue1: {
          type: "array",
          min: 2,
          required: true,
          message: "不能太宅，至少选两项",
          trigger: ["change"]
        },
        intro: {
          type: "string",
          min: 3,
          required: true,
          message: "不低于3个字",
          trigger: ["change"]
        },
        hotel: {
          type: "string",
          min: 2,
          required: true,
          message: "请选择住店时间",
          trigger: ["change"]
        },
        "userInfo.birthday": {
          type: "string",
          required: true,
          message: "请选择生日",
          trigger: ["change"]
        }
      },
      radiolist1: [
        {
          name: "苹果",
          disabled: false
        },
        {
          name: "香蕉",
          disabled: false
        },
        {
          name: "毒橙子",
          disabled: false
        }
      ],
      checkboxList1: [
        {
          name: "羽毛球",
          disabled: false
        },
        {
          name: "跑步",
          disabled: false
        },
        {
          name: "爬山",
          disabled: false
        }
      ]
    };
  },
  onReady() {
    this.$refs.form1.setRules(this.rules);
  },
  methods: {
    afterRead(event) {
      this.fileList1.push({
        url: event.file,
        status: "uploading",
        message: "上传中"
      });
    },
    groupChange(n) {
    },
    radioChange(n) {
    },
    navigateBack() {
      uni.navigateBack();
    },
    sexSelect(e) {
      this.model1.userInfo.sex = e.name;
      this.$refs.form1.validateField("userInfo.sex");
    },
    change(e) {
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
    calendarConfirm(e) {
      this.showCalendar = false;
      this.model1.hotel = `${e[0]} / ${e[e.length - 1]}`;
      this.$refs.form1.validateField("hotel");
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        uni.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.$u.toast("验证码已发送");
          this.$refs.uCode.start();
        }, 2e3);
      } else {
        uni.$u.toast("倒计时结束后再发送");
      }
    },
    calendarClose() {
      this.showCalendar = false;
      this.$refs.form1.validateField("hotel");
    },
    birthdayClose() {
      this.showBirthday = false;
      this.$refs.form1.validateField("userInfo.birthday");
    },
    birthdayConfirm(e) {
      this.showBirthday = false;
      this.model1.userInfo.birthday = uni.$u.timeFormat(e.value, "yyyy-mm-dd");
      this.$refs.form1.validateField("userInfo.birthday");
    },
    submit() {
      this.$refs.form1.validate().then((res) => {
        uni.$u.toast("校验通过");
      }).catch((errors) => {
        uni.$u.toast("校验失败");
      });
    },
    reset() {
      const validateList = [
        "userInfo.name",
        "userInfo.sex",
        "radiovalue1",
        "checkboxValue1",
        "intro",
        "hotel",
        "code",
        "userInfo.birthday"
      ];
      this.$refs.form1.resetFields();
      this.$refs.form1.clearValidate();
      setTimeout(() => {
        this.$refs.form1.clearValidate(validateList);
      }, 10);
    },
    hideKeyboard() {
      uni.hideKeyboard();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u__input = resolveComponent("u--input");
  const _component_u_form_item = resolveComponent("u-form-item");
  const _component_u_icon = resolveComponent("u-icon");
  const _component_u_radio = resolveComponent("u-radio");
  const _component_u_radio_group = resolveComponent("u-radio-group");
  const _component_u_checkbox = resolveComponent("u-checkbox");
  const _component_u_checkbox_group = resolveComponent("u-checkbox-group");
  const _component_u__textarea = resolveComponent("u--textarea");
  const _component_u_button = resolveComponent("u-button");
  const _component_u__form = resolveComponent("u--form");
  const _component_u_action_sheet = resolveComponent("u-action-sheet");
  const _component_u_calendar = resolveComponent("u-calendar");
  const _component_u_code = resolveComponent("u-code");
  const _component_u_datetime_picker = resolveComponent("u-datetime-picker");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "表单",
        onLeftClick: $options.navigateBack,
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: ""
      }, null, 8, ["onLeftClick"]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础使用"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createCommentVNode(" 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 "),
          createVNode(_component_u__form, {
            labelPosition: "left",
            model: $data.model1,
            ref: "form1"
          }, {
            default: withCtx(() => [
              createVNode(
                _component_u_form_item,
                {
                  label: "姓名",
                  prop: "userInfo.name",
                  borderBottom: "",
                  ref: "item1"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_u__input, {
                      modelValue: $data.model1.userInfo.name,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model1.userInfo.name = $event),
                      border: "none",
                      placeholder: "姓名,只能为中文"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              createVNode(
                _component_u_form_item,
                {
                  label: "性别",
                  prop: "userInfo.sex",
                  borderBottom: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => {
                    $data.showSex = true;
                    $options.hideKeyboard();
                  }),
                  ref: "item1"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_u__input, {
                      modelValue: $data.model1.userInfo.sex,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model1.userInfo.sex = $event),
                      disabled: "",
                      disabledColor: "#ffffff",
                      placeholder: "请选择性别",
                      border: "none"
                    }, null, 8, ["modelValue"]),
                    createVNode(_component_u_icon, {
                      slot: "right",
                      name: "arrow-right"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              createVNode(
                _component_u_form_item,
                {
                  label: "水果",
                  prop: "radiovalue1",
                  borderBottom: "",
                  ref: "item2"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_u_radio_group, {
                      modelValue: $data.model1.radiovalue1,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.model1.radiovalue1 = $event)
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList($data.radiolist1, (item, index) => {
                            return openBlock(), createBlock(_component_u_radio, {
                              customStyle: { marginRight: "16px" },
                              key: index,
                              label: item.name,
                              name: item.name
                            }, null, 8, ["label", "name"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              createVNode(
                _component_u_form_item,
                {
                  label: "兴趣爱好",
                  prop: "checkboxValue1",
                  borderBottom: "",
                  labelWidth: "80",
                  ref: "item3"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_u_checkbox_group, {
                      modelValue: $data.model1.checkboxValue1,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.model1.checkboxValue1 = $event),
                      shape: "square",
                      onChange: $options.change
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList($data.checkboxList1, (item, index) => {
                            return openBlock(), createBlock(_component_u_checkbox, {
                              customStyle: { marginRight: "16px" },
                              key: index,
                              label: item.name,
                              name: item.name
                            }, null, 8, ["label", "name"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue", "onChange"])
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              createVNode(
                _component_u_form_item,
                {
                  label: "简介",
                  prop: "intro",
                  borderBottom: "",
                  ref: "item3"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_u__textarea, {
                      placeholder: "不低于3个字",
                      modelValue: $data.model1.intro,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.model1.intro = $event),
                      count: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              createVNode(_component_u_form_item, {
                label: "住店时间",
                prop: "hotel",
                labelWidth: "80",
                borderBottom: "",
                onClick: _cache[7] || (_cache[7] = ($event) => {
                  $data.showCalendar = true;
                  $options.hideKeyboard();
                })
              }, {
                default: withCtx(() => [
                  createVNode(_component_u__input, {
                    modelValue: $data.model1.hotel,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.model1.hotel = $event),
                    disabled: "",
                    disabledColor: "#ffffff",
                    placeholder: "请选择住店和离店时间",
                    border: "none"
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_u_icon, {
                    slot: "right",
                    name: "arrow-right"
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_u_form_item, {
                label: "验证码",
                prop: "code",
                labelWidth: "80",
                borderBottom: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_u__input, {
                    modelValue: $data.model1.code,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.model1.code = $event),
                    border: "none",
                    placeholder: "请填写验证码"
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_u_button, {
                    slot: "right",
                    onClick: $options.getCode,
                    text: $data.tips,
                    type: "success",
                    size: "mini",
                    disabled: $data.disabled1
                  }, null, 8, ["onClick", "text", "disabled"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(
                _component_u_form_item,
                {
                  label: "生日",
                  prop: "userInfo.birthday",
                  borderBottom: "",
                  onClick: _cache[10] || (_cache[10] = ($event) => {
                    $data.showBirthday = true;
                    $options.hideKeyboard();
                  }),
                  ref: "item1"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_u__input, {
                      modelValue: $data.model1.userInfo.birthday,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.model1.userInfo.birthday = $event),
                      disabled: "",
                      disabledColor: "#ffffff",
                      placeholder: "请选择生日",
                      border: "none"
                    }, null, 8, ["modelValue"]),
                    createVNode(_component_u_icon, {
                      slot: "right",
                      name: "arrow-right"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model"]),
          createVNode(_component_u_button, {
            type: "primary",
            text: "提交",
            customStyle: "margin-top: 50px",
            onClick: $options.submit
          }, null, 8, ["onClick"]),
          createVNode(_component_u_button, {
            type: "error",
            text: "重置",
            customStyle: "margin-top: 10px",
            onClick: $options.reset
          }, null, 8, ["onClick"]),
          createVNode(_component_u_action_sheet, {
            show: $data.showSex,
            actions: $data.actions,
            title: "请选择性别",
            description: "如果选择保密会报错",
            onClose: _cache[11] || (_cache[11] = ($event) => $data.showSex = false),
            onSelect: $options.sexSelect
          }, null, 8, ["show", "actions", "onSelect"]),
          createVNode(_component_u_calendar, {
            show: $data.showCalendar,
            mode: "range",
            onConfirm: $options.calendarConfirm,
            onClose: $options.calendarClose,
            startText: "住店",
            endText: "离店",
            confirmDisabledText: "请选择离店日期",
            formatter: $options.formatter
          }, null, 8, ["show", "onConfirm", "onClose", "formatter"]),
          createVNode(_component_u_code, {
            ref: "uCode",
            onChange: $options.codeChange,
            seconds: "20",
            onStart: _cache[12] || (_cache[12] = ($event) => $data.disabled1 = true),
            onEnd: _cache[13] || (_cache[13] = ($event) => $data.disabled1 = false)
          }, null, 8, ["onChange"]),
          createVNode(_component_u_datetime_picker, {
            show: $data.showBirthday,
            value: $data.birthday,
            mode: "date",
            closeOnClickOverlay: "",
            onConfirm: $options.birthdayConfirm,
            onCancel: $options.birthdayClose,
            onClose: $options.birthdayClose
          }, null, 8, ["show", "value", "onConfirm", "onCancel", "onClose"])
        ])
      ])
    ])
  ]);
}
const form = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/form/form.nvue"]]);
export {
  form as default
};
