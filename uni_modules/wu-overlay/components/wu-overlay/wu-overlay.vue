<template>
	<wu-transition
	    :show="show"
	    custom-class="wu-overlay"
	    :duration="duration"
	    :custom-style="overlayStyle"
	    @click="clickHandler"
	>
		<slot />
	</wu-transition>
</template>

<script>
	import props from './props.js';
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js'
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js'
	/**
	 * overlay 遮罩
	 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景
	 * @tutorial https://wuui.cn/zh-CN/components/overlay.html
	 * @property {Boolean}			show		是否显示遮罩（默认 false ）
	 * @property {String | Number}	zIndex		zIndex 层级（默认 10070 ）
	 * @property {String | Number}	duration	动画时长，单位毫秒（默认 300 ）
	 * @property {String | Number}	opacity		不透明度值，当做rgba的第四个参数 （默认 0.5 ）
	 * @property {Object}			customStyle	定义需要用到的外部样式
	 * @event {Function} click 点击遮罩发送事件
	 * @example <wu-overlay :show="show" @click="show = false"></wu-overlay>
	 */
	export default {
		name: "wu-overlay",
		emits: ['click'],
		mixins: [mpMixin, mixin, props],
		computed: {
			overlayStyle() {
				const style = {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					zIndex: this.zIndex,
					bottom: 0,
					'background-color': `rgba(0, 0, 0, ${this.opacity})`
				}
				return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle))
			}
		},
		methods: {
			clickHandler() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni_modules/wu-ui-tools/libs/css/components.scss';
     $wu-overlay-top: 0 !default;
	 $wu-overlay-bottom: 0 !default;
	 $wu-overlay-left: 0 !default;
     $wu-overlay-right: 0 !default;
     $wu-overlay-background-color: rgba(0, 0, 0, .7) !default;
	.wu-overlay {
		position: fixed;
		top: $wu-overlay-top;
		bottom: $wu-overlay-bottom;
		left: $wu-overlay-left;
		right: $wu-overlay-right;
		background-color: $wu-overlay-background-color;
	}
</style>
