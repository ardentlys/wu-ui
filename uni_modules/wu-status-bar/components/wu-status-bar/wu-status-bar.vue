<template>
	<view
	    :style="[style]"
	    class="wu-status-bar"
	>
		<slot />
	</view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from './props.js';
	/**
	 * StatbusBar 状态栏占位
	 * @description 本组件主要用于状态填充，比如在自定导航栏的时候，它会自动适配一个恰当的状态栏高度。
	 * @tutorial https://wuui.cn/zh-CN/components/safeAreaInset.html
	 * @property {String}			bgColor			背景色 (默认 'transparent' )
	 * @property {String | Object}	customStyle		自定义样式 
	 * @example <wu-status-bar></wu-status-bar>
	 */
	export default {
		name: 'wu-status-bar',
		mixins: [mpMixin, mixin, props],
		data() {
			return {
			}
		},
		computed: {
			style() {
				const style = {}
				// 状态栏高度，由于某些安卓和微信开发工具无法识别css的顶部状态栏变量，所以使用js获取的方式
				style.height = this.$w.addUnit(this.$w.sys().statusBarHeight, 'px')
				style.background = this.bgColor
				return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle))
			}
		},
	}
</script>

<style lang="scss" scoped>
	.wu-status-bar {
		// nvue会默认100%，如果nvue下，显式写100%的话，会导致宽度不为100%而异常
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
	}
</style>
