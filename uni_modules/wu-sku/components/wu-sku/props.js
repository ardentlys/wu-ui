export default {
	props: {
		// 源数据
		data: {
			default: () => [],
			type: Array
		},
		// 是否显示sku组件
		// #ifdef VUE3
		modelValue: {
			default: false,
			type: Boolean
		},
		// #endif
		// #ifndef VUE3
		value: {
			default: false,
			type: Boolean
		},
		// #endif
		// 是否可以点击关闭
		isMaskClose: {
			default: false,
			type: Boolean
		},
		// 是否默认选中最低价格sku
		isSelectMinPriceSku: {
			default: true,
			type: Boolean
		},
		// 默认选中的sku下标
		selectSkuIndex: {
			default: null,
			type: [Number, String]
		},
		// 默认封面图
		defaultCover: {
			default: "",
			type: String
		},
		// 默认购买商品数量
		defaultNum: {
			default: 1,
			type: [Number, String]
		},
		// 主题色
		themeColor: {
			default: () => [60, 156, 255],
			type: Array
		},
		// 确认按钮文字
		btnConfirmText: {
			default: "确定",
			type: String
		},
		// 无库存禁用
		notStockDisabled: {
			default: false,
			type: Boolean
		},
		// 无库存禁用样式
		notStockDisabledStyle: {
			default: () => {
				return {}
			},
			type: Object
		},
		// 库存不足文字
		notStockText: {
			default: "库存不足",
			type: String
		},
		// 未选择完整的sku时的文字提示
		notSelectSku: {
			default: "请选择完整的sku属性",
			type: String
		},
		// 展示库存数量
		showStockNum: {
			default: true,
			type: Boolean
		},
		...uni.$w?.props?.sku
	}
}
