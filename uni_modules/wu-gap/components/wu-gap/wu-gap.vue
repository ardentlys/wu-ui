<template>
	<view class="wu-gap" :style="[gapStyle]"></view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from './props.js';
	/**
	 * gap 间隔槽
	 * @description 该组件一般用于内容块之间的用一个灰色块隔开的场景，方便用户风格统一，减少工作量
	 * @tutorial https://wuui.cn/zh-CN/components/gap.html
	 * @property {String}			bgColor			背景颜色 （默认 'transparent' ）
	 * @property {String | Number}	height			分割槽高度，单位px （默认 20 ）
	 * @property {String | Number}	marginTop		与前一个组件的距离，单位px（ 默认 0 ）
	 * @property {String | Number}	marginBottom	与后一个组件的距离，单位px （默认 0 ）
	 * @property {Object}			customStyle		定义需要用到的外部样式
	 * 
	 * @example <wu-gap height="80" bg-color="#bbb"></wu-gap>
	 */
	export default {
		name: "wu-gap",
		mixins: [mpMixin, mixin, props],
		computed: {
			gapStyle() {
				const style = {
					backgroundColor: this.bgColor,
					height: this.$w.addUnit(this.height),
					marginTop: this.$w.addUnit(this.marginTop),
					marginBottom: this.$w.addUnit(this.marginBottom),
				}
				return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle))
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";
</style>
