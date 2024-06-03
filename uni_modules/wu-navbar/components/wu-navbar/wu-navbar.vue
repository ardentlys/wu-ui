<template>
	<view class="wu-navbar">
		<view class="wu-navbar__placeholder" v-if="fixed && placeholder" :style="{
				height: $w.addUnit($w.getPx(height) + $w.sys().statusBarHeight,'px'),
			}"></view>
		<view :class="[fixed && 'wu-navbar--fixed']" :style="fixed && `top: ${keyboardHeight || '0rpx'}`">
			<wu-status-bar v-if="safeAreaInsetTop" :bgColor="bgColor"></wu-status-bar>
			<view class="wu-navbar__content" :class="[border && 'wu-border-bottom']" :style="{
					height: $w.addUnit(height),
					background: bgColor,
				}">
				<view v-if="showLeft" class="wu-navbar__content__left" hover-class="wu-navbar__content__left--hover"
					hover-start-time="150" @tap="leftClick">
					<slot name="left">
						<wu-icon v-if="leftIcon" :name="leftIcon" :size="leftIconSize" :color="leftIconColor"></wu-icon>
						<text v-if="leftText" :style="{
								color: leftIconColor
							}" class="wu-navbar__content__left__text">{{ leftText }}</text>
					</slot>
				</view>
				<slot name="center">
					<text class="wu-line-1 wu-navbar__content__title" :style="[{
							width: $w.addUnit(titleWidth),
						}, $w.addStyle(titleStyle)]">{{ title }}</text>
				</slot>
				<view class="wu-navbar__content__right" :style="{right: mpCapsuleRightPosition}" @tap="rightClick">
					<slot name="right">
						<wu-icon v-if="rightIcon" :name="rightIcon" size="20"></wu-icon>
						<text v-if="rightText" class="wu-navbar__content__right__text">{{ rightText }}</text>
					</slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from './props.js';
	/**
	 * Navbar 自定义导航栏
	 * @description 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，自动状态栏高度、小程序胶囊预留位置等，一般建议使用uni-app带的导航栏。
	 * @tutorial https://wuui.cn/zh-CN/components/navbar.html
	 * @property {Boolean}			safeAreaInsetTop	是否开启顶部安全区适配  （默认 true ）
	 * @property {Boolean}			placeholder			固定在顶部时，是否生成一个等高元素，以防止塌陷 （默认 false ）
	 * @property {Boolean}			fixed				导航栏是否固定在顶部 （默认 false ）
	 * @property {Boolean}			border				导航栏底部是否显示下边框 （默认 false ）
	 * @property {Boolean}			showLeft			是否显示左边（默认 true ）
	 * @property {String}			mpRightReserveCapsule	小程序端导航栏右侧是否预留胶囊位置 （默认true）
	 * @property {String}			leftIcon			左边返回图标的名称，只能为wu-ui自带的图标 （默认 'arrow-left' ）
	 * @property {String}			leftText			左边的提示文字
	 * @property {String}			rightText			右边的提示文字
	 * @property {String}			rightIcon			右边返回图标的名称，只能为uView自带的图标
	 * @property {String}			title				导航栏标题，如设置为空字符，将会隐藏标题占位区域
	 * @property {String}			bgColor				导航栏背景设置 （默认 '#ffffff' ）
	 * @property {String | Number}	titleWidth			导航栏标题的最大宽度，内容超出会以省略号隐藏 （默认 '400rpx' ）
	 * @property {String | Number}	height				导航栏高度(不包括状态栏高度在内，内部自动加上)（默认 '44px' ）
	 * @property {String | Number}	leftIconSize		左侧返回图标的大小（默认 20px ）
	 * @property {String | Number}	leftIconColor		左侧返回图标的颜色（默认 #303133 ）
	 * @property {Boolean}	        autoBack			点击左侧区域(返回图标)，是否自动返回上一页（默认 false ）
	 * @property {Object | String}	titleStyle			标题的样式，对象或字符串
	 * @property {Boolean}	keyboardHeight 键盘高度，请在input、textarea等输入框定期页面时通过聚焦、失焦事件的e.detail.height并传给keyboardHeight即可，避免因页面顶起导致的导航栏消失
	 * @event {Function} leftClick		点击左侧区域
	 * @event {Function} rightClick		点击右侧区域
	 * @example <wu-navbar title="酒尚余温，入口不识乾坤" left-text="返回" right-text="帮助" @click-left="onClickBack" @click-right="onClickRight"></wu-navbar>
	 */
	export default {
		name: 'wu-navbar',
		emits: ['leftClick', 'rightClick'],
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				// 固定时的Top
				fixedTop: '0px',
			}
		},
		methods: {
			// 点击左侧区域
			leftClick() {
				// 如果配置了autoBack，自动返回上一页
				this.$emit('leftClick')
				if (this.autoBack) {
					uni.navigateBack()
				}
			},
			// 点击右侧区域
			rightClick() {
				this.$emit('rightClick')
			},
		},
		computed: {
			// 小程序胶囊右侧所在位置 仅在小程序端且 mpRightReserveCapsule 为 true 是预留胶囊位置
			mpCapsuleRightPosition() {
				//#ifdef MP
				if (this.mpRightReserveCapsule) {
					return this.$w.addUnit(uni.getMenuButtonBoundingClientRect().width + 2)
				} else {
					return 0
				}
				// #endif
				// #ifndef MP
				return 0
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";
	@import "@/uni_modules/wu-ui-tools/theme.scss";

	.wu-navbar {

		&--fixed {
			position: fixed;
			left: 0;
			right: 0;
			z-index: 11;
		}

		&__content {
			@include flex(row);
			align-items: center;
			height: 44px;
			background-color: #9acafc;
			position: relative;
			justify-content: center;

			&__left,
			&__right {
				padding: 0 13px;
				position: absolute;
				top: 0;
				bottom: 0;
				@include flex(row);
				align-items: center;
			}

			&__left {
				left: 0;

				&--hover {
					opacity: 0.7;
				}

				&__text {
					font-size: 15px;
					margin-left: 3px;
				}
			}

			&__title {
				text-align: center;
				font-size: 16px;
				color: $wu-main-color;
			}

			&__right {
				right: 0;

				&__text {
					font-size: 15px;
					margin-left: 3px;
				}
			}
		}
	}
</style>