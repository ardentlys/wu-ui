<template>
	<view
		class="wu-safe-bottom"
		:style="[style]"
	>
	</view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from './props.js';
	/**
	 * SafeBottom 底部安全区
	 * @description 这个适配，主要是针对IPhone X等一些底部带指示条的机型，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/safeAreaInset.html
	 * @property {type}		prop_name
	 * @property {Object}	customStyle	定义需要用到的外部样式
	 *
	 * @event {Function()}
	 * @example <wu-status-bar></wu-status-bar>
	 */
	export default {
		name: "wu-safe-bottom",
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				safeAreaBottomHeight: 0,
				isNvue: false,
			};
		},
		computed: {
			style() {
				const {
					windowWidth,
					windowHeight,
					windowTop,
					safeArea,
					screenHeight,
					safeAreaInsets
				} = this.$w.sys();
				const style = {};
				// #ifdef MP-WEIXIN
				style.height = this.$w.addUnit(screenHeight - safeArea.bottom, 'px');
				// #endif
				// #ifndef MP-WEIXIN
				style.height = this.$w.addUnit(safeAreaInsets.bottom, 'px');
				// #endif
				return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
			},
		},
	};
</script>

<style lang="scss" scoped>
	.wu-safe-bottom {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
	}
</style>
