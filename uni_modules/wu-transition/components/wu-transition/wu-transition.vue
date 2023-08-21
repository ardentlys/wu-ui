<template>
	<view v-if="inited" class="wu-transition" ref="wu-transition" @tap="clickHandler" :class="classes"
		:style="[mergeStyle]" @touchmove="noop">
		<slot />
	</view>
</template>

<script>
	import props from './props.js';
	import transition from "./transition.js";
	// 组件的methods方法，由于内容较长，写在外部文件中通过mixin引入
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js'
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js'
	/**
	 * transition  动画组件
	 * @description 此组件为wu-ui的动画组件.支持不同的触发模式，您可以使用该动画来确保您的项目整体动画风格保持一致。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/transition.html
	 * @property {String}			show			是否展示组件 （默认 false ）
	 * @property {String}			mode			使用的动画模式 （默认 'fade' ）
	 * @value fade 淡入
	 * @value fade-up 上滑淡入
	 * @value fade-down 下滑淡入
	 * @value fade-left 左滑淡入
	 * @value fade-right 右滑淡入
	 * @value slide-up 上滑进入
	 * @value slide-down 下滑进入
	 * @value slide-left 左滑进入
	 * @value slide-right 右滑进入
	 * @value zoom-in 缩放
	 * @value zoom-out 缩放淡入
	 * @property {String | Number}	duration		动画的执行时间，单位ms （默认 '300' ）
	 * @property {String}			timingFunction	使用的动画过渡函数 （默认 'ease-out' ）
	 * @property {Object}			customStyle		自定义样式
	 * @event {Function} before-enter	进入前触发
	 * @event {Function} enter			进入中触发
	 * @event {Function} after-enter	进入后触发
	 * @event {Function} before-leave	离开前触发
	 * @event {Function} leave			离开中触发
	 * @event {Function} after-leave	离开后触发
	 * @example <wu-transition :show="true" mode="zoom-in">
			<view class="transition"></view>
		</wu-transition>
	 */
	export default {
		name: 'wu-transition',
		data() {
			return {
				inited: false, // 是否显示/隐藏组件
				viewStyle: {}, // 组件内部的样式
				status: '', // 记录组件动画的状态
				transitionEnded: false, // 组件是否结束的标记
				display: false, // 组件是否展示
				classes: '', // 应用的类名
			}
		},
		computed: {
			mergeStyle() {
				const {
					viewStyle,
					customStyle
				} = this
				return {
					// #ifndef APP-NVUE
					transitionDuration: `${this.duration}ms`,
					// display: `${this.display ? '' : 'none'}`,
					transitionTimingFunction: this.timingFunction,
					// #endif
					// 避免自定义样式影响到动画属性，所以写在viewStyle前面
					...this.$w.addStyle(customStyle),
					...viewStyle
				}
			}
		},
		// 将mixin挂在到组件中，uni.$w.mixin实际上为一个vue格式对象
		mixins: [mpMixin, mixin, transition, props],
		watch: {
			show: {
				handler(newVal) {
					// vue和nvue分别执行不同的方法
					// #ifdef APP-NVUE
					newVal ? this.nvueEnter() : this.nvueLeave()
					// #endif
					// #ifndef APP-NVUE
					newVal ? this.vueEnter() : this.vueLeave()
					// #endif
				},
				// 表示同时监听初始化时的props的show的意思
				immediate: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni_modules/wu-ui-tools/libs/css/components.scss';
	/* #ifndef APP-NVUE */
	// vue版本动画相关的样式抽离在外部文件
	@import './vue.ani-style.scss';
	/* #endif */

	.wu-transition {}
</style>