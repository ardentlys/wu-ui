<template>
	<view class="wu-image" @tap="onClick" :style="[wrapStyle, backgroundStyle]">
		<image v-if="!isError && loadingImage" :src="src" :mode="mode" @error="onErrorHandler" @load="onLoadHandler"
			:show-menu-by-longpress="showMenuByLongpress" class="wu-image__image" :style="{
				borderRadius: shape == 'circle' ? '10000px' : $w.addUnit(radius),
				width: $w.addUnit(width),
				height: $w.addUnit(height)
			}"></image>
		<view v-if="showLoading && loading" class="wu-image__loading" :style="{
				borderRadius: shape == 'circle' ? '50%' : $w.addUnit(radius),
				backgroundColor: this.bgColor,
				width: $w.addUnit(width),
				height: $w.addUnit(height)
			}">
			<slot name="loading">
				<wu-icon :name="loadingIcon" :width="width" :height="height"></wu-icon>
			</slot>
		</view>
		<view v-if="showError && isError && !loading" class="wu-image__error" :style="{
				borderRadius: shape == 'circle' ? '50%' : $w.addUnit(radius),
				width: $w.addUnit(width),
				height: $w.addUnit(height)
			}">
			<slot name="error">
				<wu-icon :name="errorIcon" :width="width" :height="height"></wu-icon>
			</slot>
		</view>
	</view>
</template>

<script>
	import mixin from "@/uni_modules/wu-ui-tools/libs/mixin/mixin.js"
	import mpMixin from "@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js"
	import props from './props.js';
	/**
	 * Image 图片
	 * @description 此组件为uni-app的image组件的加强版，在继承了原有功能外，还支持淡入动画、加载中、加载失败提示、圆角值和形状等。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/image.html
	 * @property {String}			src 				图片地址
	 * @property {String}			mode 				裁剪模式，见官网说明 （默认 'aspectFill' ）
	 * @property {String | Number}	width 				宽度，单位任意，如果为数值，则为px单位 （默认 '300' ）
	 * @property {String | Number}	height 				高度，单位任意，如果为数值，则为px单位 （默认 '225' ）
	 * @property {String}			shape 				图片形状，circle-圆形，square-方形 （默认 'square' ）
	 * @property {String | Number}	radius		 		圆角值，单位任意，如果为数值，则为px单位 （默认 0 ）
	 * @property {Boolean}			lazyLoad			是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效 （默认 true ）
	 * @property {String | Number}	lazyLoadRootMargin	懒加载根边距 设置负数则是进入视图指定距离后显示 正数则是离视图多远时显示
	 * @property {String | Number}	minLoadginShowTime	加载中状态的最小显示时间
	 * @property {Boolean}			showMenuByLongpress	是否开启长按图片显示识别小程序码菜单，仅微信小程序有效 （默认 true ）
	 * @property {String}			loadingIcon 		加载中的图标，或者小图片 （默认 'photo' ）
	 * @property {String}			errorIcon 			加载失败的图标，或者小图片 （默认 'error-circle' ）
	 * @property {Boolean}			showLoading 		是否显示加载中的图标或者自定义的slot （默认 true ）
	 * @property {Boolean}			showError 			是否显示加载错误的图标或者自定义的slot （默认 true ）
	 * @property {Boolean}			fade 				是否需要淡入效果 （默认 true ）
	 * @property {Boolean}			webp 				只支持网络资源，只对微信小程序有效 （默认 false ）
	 * @property {String | Number}	duration 			搭配fade参数的过渡时间，单位ms （默认 500 ）
	 * @property {String}			bgColor 			背景颜色，用于深色页面加载图片时，为了和背景色融合  (默认 '#f3f4f6' )
	 * @property {Object}			customStyle  		定义需要用到的外部样式
	 * @event {Function}	click	点击图片时触发
	 * @event {Function}	error	图片加载失败时触发
	 * @event {Function} load 图片加载成功时触发
	 * @example <wu-image width="100%" height="300px" :src="src"></wu-image>
	 */
	export default {
		name: 'wu-image',
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				// 图片是否加载错误，如果是，则显示错误占位图
				isError: false,
				// 初始化组件时，默认为加载中状态
				loading: true,
				// 不透明度，为了实现淡入淡出的效果
				opacity: 1,
				// 过渡时间，因为props的值无法修改，故需要一个中间值
				durationTime: this.duration,
				// 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
				backgroundStyle: {},
				// 用于fade模式的控制组件显示与否
				show: false,
				// 是否加载image 用于控制懒加载
				loadingImage: false
			};
		},
		watch: {
			src: {
				immediate: true,
				handler(n) {
					if (!n) {
						// 如果传入null或者''，或者false，或者undefined，标记为错误状态
						this.isError = true

					} else {
						this.isError = false;
						this.loading = true;
					}
				}
			}
		},
		computed: {
			wrapStyle() {
				let style = {};
				// 通过调用addUnit()方法，如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上rpx单位
				style.width = this.$w.addUnit(this.width);
				style.height = this.$w.addUnit(this.height);
				// 如果是显示圆形，设置一个很多的半径值即可
				style.borderRadius = this.shape == 'circle' ? '10000px' : this.$w.addUnit(this.radius)
				// 如果设置圆角，必须要有hidden，否则可能圆角无效
				style.overflow = style.borderRadius > 0 ? 'hidden' : 'visible'
				// if (this.fade) {
				// 	style.opacity = this.opacity
				// 	// nvue下，这几个属性必须要分开写
				// 	style.transitionDuration = `${this.durationTime}ms`
				// 	style.transitionTimingFunction = 'ease-in-out'
				// 	style.transitionProperty = 'opacity'
				// }
				return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));

			}
		},
		mounted() {
			this.show = true;
			if (this.lazyLoad) {
				// #ifndef APP-NVUE
				this.IntersectionObserver(this, '.wu-image', (res, stop) => {
					if (res.intersectionRatio > 0) {
						this.loadingImage = true;
						stop();
					}
				});
				// #endif
				// #ifdef APP-NVUE
				this.loadingImage = true;
				// #endif
			} else {
				this.loadingImage = true;
			}
		},
		methods: {
			// 点击图片
			onClick() {
				this.$emit('click')
			},
			// 图片加载失败
			onErrorHandler(err) {
				this.loading = false
				this.isError = true
				this.$emit('error', err)
			},
			// 图片加载完成，标记loading结束
			onLoadHandler(event) {
				setTimeout(()=>{
					this.loading = false;
				}, this.minLoadginShowTime)
				this.isError = false;
				this.$emit('load', event)
				this.removeBgColor()
				// 如果不需要动画效果，就不执行下方代码，同时移除加载时的背景颜色
				// 否则无需fade效果时，png图片依然能看到下方的背景色
				// if (!this.fade) return this.removeBgColor();
				// // 原来opacity为1(不透明，是为了显示占位图)，改成0(透明，意味着该元素显示的是背景颜色，默认的灰色)，再改成1，是为了获得过渡效果
				// this.opacity = 0;
				// // 这里设置为0，是为了图片展示到背景全透明这个过程时间为0，延时之后延时之后重新设置为duration，是为了获得背景透明(灰色)
				// // 到图片展示的过程中的淡入效果
				// this.durationTime = 0;
				// // 延时50ms，否则在浏览器H5，过渡效果无效
				// setTimeout(() => {
				// 	this.durationTime = this.duration;
				// 	this.opacity = 1;
				// 	setTimeout(() => {
				// 		this.removeBgColor();
				// 	}, this.durationTime);
				// }, 50);
			},
			// 移除图片的背景色
			removeBgColor() {
				// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
				this.backgroundStyle = {
					backgroundColor: 'transparent'
				};
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/color.scss";
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";

	$wu-image-error-top: 0px !default;
	$wu-image-error-left: 0px !default;
	$wu-image-error-width: 100% !default;
	$wu-image-error-hight: 100% !default;
	$wu-image-error-background-color: $wu-bg-color !default;
	$wu-image-error-color: $wu-tips-color !default;
	$wu-image-error-font-size: 46rpx !default;

	.wu-image {
		position: relative;
		transition: opacity 0.5s ease-in-out;

		&__image {
			width: 100%;
			height: 100%;
		}

		&__loading,
		&__error {
			position: absolute;
			top: $wu-image-error-top;
			left: $wu-image-error-left;
			width: $wu-image-error-width;
			height: $wu-image-error-hight;
			@include flex;
			align-items: center;
			justify-content: center;
			background-color: $wu-image-error-background-color;
			color: $wu-image-error-color;
			font-size: $wu-image-error-font-size;
		}
	}
</style>