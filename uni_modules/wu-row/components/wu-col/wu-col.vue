<template>
	<view class="wu-col" ref="wu-col" :class="[
			'wu-col-' + span
		]" :style="[colStyle]" @tap="clickHandler">
		<slot></slot>
	</view>
</template>

<script>
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import props from './props.js';
	/**
	 * CodeInput 栅格系统的列 
	 * @description 该组件一般用于Layout 布局 通过基础的 12 分栏，迅速简便地创建布局
	 * @tutorial https://wuui.cn/zh-CN/components/layout.html
	 * @property {String | Number}	span		栅格占据的列数，总12等份 (默认 12 ) 
	 * @property {String | Number}	offset		分栏左边偏移，计算方式与span相同 (默认 0 ) 
	 * @property {String}			justify		水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)  (默认 'start' ) 
	 * @property {String}			align		垂直对齐方式，可选值为top、center、bottom、stretch (默认 'stretch' ) 
	 * @property {String}			textAlign	文字水平对齐方式 (默认 'left' ) 
	 * @property {Object}			customStyle	定义需要用到的外部样式
	 * @event {Function}	click	col被点击，会阻止事件冒泡到row
	 * @example	 <wu-col  span="3" offset="3" > <view class="demo-layout bg-purple"></view> </wu-col>
	 */
	export default {
		name: 'wu-col',
		emits: ['click'],
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				width: 0,
				parentData: {
					gutter: 0
				},
				gridNum: 12
			}
		},
		computed: {
			uJustify() {
				if (this.justify == 'end' || this.justify == 'start') return 'flex-' + this.justify
				else if (this.justify == 'around' || this.justify == 'between') return 'space-' + this.justify
				else return this.justify
			},
			uAlignItem() {
				if (this.align == 'top') return 'flex-start'
				if (this.align == 'bottom') return 'flex-end'
				else return this.align
			},
			colStyle() {
				const style = {
					// 这里写成"padding: 0 10px"的形式是因为nvue的需要
					paddingLeft: this.$w.addUnit(this.$w.getPx(this.parentData.gutter) / 2),
					paddingRight: this.$w.addUnit(this.$w.getPx(this.parentData.gutter) / 2),
					alignItems: this.uAlignItem,
					justifyContent: this.uJustify,
					textAlign: this.textAlign,
					// #ifndef APP-NVUE
					// 在非nvue上，使用百分比形式
					flex: `0 0 ${100 / this.gridNum * this.span}%`,
					marginLeft: 100 / 12 * this.offset + '%',
					// #endif
					// #ifdef APP-NVUE
					// 在nvue上，由于无法使用百分比单位，这里需要获取父组件的宽度，再计算得出该有对应的百分比尺寸
					width: this.$w.addUnit(Math.floor(this.width / this.gridNum * Number(this.span))),
					marginLeft: this.$w.addUnit(Math.floor(this.width / this.gridNum * Number(this.offset))),
					// #endif
				}
				return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle))
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			async init() {
				// 支付宝小程序不支持provide/inject，所以使用这个方法获取整个父组件，在created定义，避免循环引用
				this.updateParentData()
				this.width = await this.parent.getComponentWidth()
			},
			updateParentData() {
				this.getParentData('wu-row')
			},
			clickHandler(e) {
				this.$emit('click');
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";

	.wu-col {
		padding: 0;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
		/* #ifdef MP */
		display: block;
		/* #endif */
	}

	// nvue下百分比无效
	/* #ifndef APP-NVUE */
	.wu-col-0 {
		width: 0;
	}

	.wu-col-1 {
		width: calc(100%/12);
	}

	.wu-col-2 {
		width: calc(100%/12 * 2);
	}

	.wu-col-3 {
		width: calc(100%/12 * 3);
	}

	.wu-col-4 {
		width: calc(100%/12 * 4);
	}

	.wu-col-5 {
		width: calc(100%/12 * 5);
	}

	.wu-col-6 {
		width: calc(100%/12 * 6);
	}

	.wu-col-7 {
		width: calc(100%/12 * 7);
	}

	.wu-col-8 {
		width: calc(100%/12 * 8);
	}

	.wu-col-9 {
		width: calc(100%/12 * 9);
	}

	.wu-col-10 {
		width: calc(100%/12 * 10);
	}

	.wu-col-11 {
		width: calc(100%/12 * 11);
	}

	.wu-col-12 {
		width: calc(100%/12 * 12);
	}

	/* #endif */
</style>