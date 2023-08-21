<template>
	<text
		class="wu-link"
		@tap.stop="openLink"
	    :style="[linkStyle, $w.addStyle(customStyle)]" 
		:nodes="text">
		{{text}}
	</text>
</template>

<script>
	import props from './props.js';
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';

	/**
	 * link 超链接
	 * @description 该组件为超链接组件，在不同平台有不同表现形式：在APP平台会通过plus环境打开内置浏览器，在小程序中把链接复制到粘贴板，同时提示信息，在H5中通过window.open打开链接。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/link.html
	 * @property {String}			color		文字颜色 （默认 color['u-primary'] ）
	 * @property {String ｜ Number}	fontSize	字体大小，单位px （默认 15 ）
	 * @property {Boolean}			underLine	是否显示下划线 （默认 false ）
	 * @property {String}			href		跳转的链接，要带上http(s)
	 * @property {String}			mpTips		各个小程序平台把链接复制到粘贴板后的提示语（默认“链接已复制，请在浏览器打开”）
	 * @property {String}			lineColor	下划线颜色，默认同color参数颜色 
	 * @property {String}			text		超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色 
	 * @property {Object}			customStyle	定义需要用到的外部样式
	 * 
	 * @example <u-link href="https://wu.geeks.ink/zh-CN/">长风破浪会有时，直挂云帆济沧海</u-link>
	 */
	export default {
		name: "wu-link",
		mixins: [mpMixin, mixin, props],
		computed: {
			linkStyle() {
				const style = {
					color: this.color,
					fontSize: this.$w.addUnit(this.fontSize),
					// line-height设置为比字体大小多2px
					lineHeight: this.$w.addUnit(this.$w.getPx(this.fontSize) + 2),
					textDecoration: this.underLine ? 'underline' : ''
				}
				if (this.underLine) {
					style.textDecorationColor = this.lineColor || this.color;
				}
				return style
			}
		},
		methods: {
			openLink() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href)
				// #endif
				// #ifdef H5
				window.open(this.href)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
					data: this.href,
					success: () => {
						uni.hideToast();
						this.$nextTick(() => {
							uni.showToast({
								title: this.mpTips,
								duration: 2000
							})
						})
					}
				});
				// #endif
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";
	@import "@/uni_modules/wu-ui-tools/theme.scss";
	
	$wu-link-line-height:1 !default;

	.wu-link {
		/* #ifndef APP-NVUE */
		line-height: $wu-link-line-height;
		/* #endif */
		@include flex;
		flex-wrap: wrap;
		flex: 1;
	}
</style>
