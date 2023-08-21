<template>
	<view class="wu-icon" @tap="clickHandler" :class="['wu-icon--' + labelPos]">
		<!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 -->
		<text v-if="label !== '' && (labelPos == 'left' || labelPos == 'top')" class="wu-icon__label" :style="labelStyle">{{ label }}</text>
		<image class="wu-icon__img" v-if="isImg" :src="name" :mode="imgMode"
			:style="[imgStyle, $w.addStyle(customStyle)]"></image>
		<text v-else class="wu-icon__icon" :class="uClasses" :style="[iconStyle, $w.addStyle(customStyle)]"
			:hover-class="hoverClass">{{icon}}</text>
		<!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 -->
		<text v-if="label !== '' && (labelPos == 'right' || labelPos == 'bottom')" class="wu-icon__label" :style="labelStyle">{{ label }}</text>
	</view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js'
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js'
	// #ifdef APP-NVUE
	// nvue通过weex的dom模块引入字体，相关文档地址如下：
	// https://weex.apache.org/zh/docs/modules/dom.html#addrule
	import iconUrl from './wuicons.ttf';
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "wuicon-iconfont",
		'src': "url('" + iconUrl + "')"
	})
	// #endif
	// 引入图标名称，已经对应的unicode
	import icons from './icons';
	import props from './props.js';
	/**
	 * icon 图标
	 * @description 基于字体的图标集，包含了大多数常见场景的图标。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/icon.html
	 * @property {String}			name			图标名称，若带有 `/` 或遵循 `base64` 图片格式，会被认为是图片图标，则文字图标相关属性会失效。
	 * @property {String}			color			图标颜色,可接受主题色 （默认 color: #606266 ）
	 * @property {String | Number}	size			图标字体大小，单位px/rpx （默认 '16px' ）
	 * @property {Boolean}			bold			是否显示粗体 （默认 false ）
	 * @property {String | Number}	index			点击图标的时候传递事件出去的index（用于区分点击了哪一个）
	 * @property {String}			hoverClass		图标按下去的样式类，用法同uni的view组件的hoverClass参数，详情见官网
	 * @property {String}			customPrefix	自定义扩展前缀，方便用户扩展自己的图标库 （默认 'wuicon' ）
	 * @property {String | Number}	label			图标右侧的label文字
	 * @property {String}			labelPos		label相对于图标的位置（默认 'right' ）
	 * @value top 上方
	 * @value bottom 下方
	 * @value left 左侧
	 * @value right 右侧
	 * @property {String | Number}	labelSize		label字体大小，单位px （默认 '15px' ）
	 * @property {String}			labelColor		图标右侧的label文字颜色 （ 默认 color['wu-content-color'] ）
	 * @property {String | Number}	space			label与图标的距离，单位px （默认 '3px' ）
	 * @property {String}			imgMode			image组件的mode，详见：[image](https://uniapp.dcloud.net.cn/component/image.html#image)
	 * @property {String | Number}	width			显示图片小图标时的宽度
	 * @property {String | Number}	height			显示图片小图标时的高度
	 * @property {String | Number}	top				图标在垂直方向上的定位 用于解决某些情况下，让图标垂直居中的用途  （默认 0 ）
	 * @property {Boolean}			stop			是否阻止事件传播 （默认 false ）
	 * @property {Object}			customStyle		icon的样式，对象形式
	 * @event {Function} click 点击图标时触发
	 * @event {Function} touchstart 事件触摸时触发
	 * @example <wu-icon name="photo" color="#2979ff" size="28"></wu-icon>
	 */
	export default {
		name: 'wu-icon',
		emits: ['click'],
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				colorType: [
					'primary',
					'success',
					'info',
					'error',
					'warning'
				]
			}
		},
		computed: {
			uClasses() {
				let classes = []
				classes.push(this.customPrefix)
				classes.push(this.customPrefix + '-' + this.name)
				// 主题色，通过类配置
				if (this.color && this.colorType.includes(this.color)) classes.push('wu-icon__icon--' + this.color)
				// 阿里，头条，百度小程序通过数组绑定类名时，无法直接使用[a, b, c]的形式，否则无法识别
				// 故需将其拆成一个字符串的形式，通过空格隔开各个类名
				//#ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU
				classes = classes.join(' ')
				//#endif
				return classes
			},
			iconStyle() {
				let style = {}
				style = {
					fontSize: this.$w.addUnit(this.size),
					lineHeight: this.$w.addUnit(this.size),
					fontWeight: this.bold ? 'bold' : 'normal',
					// 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
					top: this.$w.addUnit(this.top)
				}
				// 非主题色值时，才当作颜色值
				if (this.color && !this.colorType.includes(this.color)) style.color = this.color
				return style
			},
			// 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
			isImg() {
				const isBase64 = this.name.indexOf('data:') > -1 && this.name.indexOf('base64') > -1;
				return this.name.indexOf('/') !== -1 || isBase64;
			},
			imgStyle() {
				let style = {}
				// 如果设置width和height属性，则优先使用，否则使用size属性
				style.width = this.width ? this.$w.addUnit(this.width) : this.$w.addUnit(this.size)
				style.height = this.height ? this.$w.addUnit(this.height) : this.$w.addUnit(this.size)
				return style
			},
			// 通过图标名，查找对应的图标
			icon() {
				// 如果内置的图标中找不到对应的图标，就直接返回name值，因为用户可能传入的是unicode代码
				const code = icons['wuicon-' + this.name];
				if (['wuicon'].indexOf(this.customPrefix) > -1) {
					return code ? unescape(`%u${code}`) : this.name;
				} else {
					// #ifndef APP-NVUE
					return ''
					// #endif
					// #ifdef APP-NVUE
					return unescape(`%u${this.name}`)
					// #endif
				}
			},
			// label样式
			labelStyle() {
				let style = {
					color: this.labelColor,
					fontSize: this.$w.addUnit(this.labelSize),
					marginLeft: this.labelPos == 'right' ? this.$w.addUnit(this.space) : 0,
					marginTop: this.labelPos == 'bottom' ? this.$w.addUnit(this.space) : 0,
					marginRight: this.labelPos == 'left' ? this.$w.addUnit(this.space) : 0,
					marginBottom: this.labelPos == 'top' ? this.$w.addUnit(this.space) : 0
				};
				return style
			}
		},
		methods: {
			clickHandler(e) {
				this.$emit('click', this.index)
				// 是否阻止事件冒泡
				this.stop && this.preventEvent(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni_modules/wu-ui-tools/libs/css/components.scss';
	@import '@/uni_modules/wu-ui-tools/libs/css/color.scss';
	// 变量定义
	$wu-icon-primary: $wu-primary !default;
	$wu-icon-success: $wu-success !default;
	$wu-icon-info: $wu-info !default;
	$wu-icon-warning: $wu-warning !default;
	$wu-icon-error: $wu-error !default;
	$wu-icon-label-line-height: 1 !default;

	/* #ifndef APP-NVUE */
	// 非nvue下加载字体
	@font-face {
		font-family: 'wuicon-iconfont';
		src: url('./wuicons.ttf') format('truetype');
	}

	/* #endif */
	.wu-icon {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;

		&--left, &--right {
			flex-direction: row;
		}
		
		&--top, &--bottom {
			flex-direction: column;
		}

		&__icon {
			font-family: wuicon-iconfont;
			position: relative;
			@include flex;
			align-items: center;

			&--primary {
				color: $wu-icon-primary;
			}

			&--success {
				color: $wu-icon-success;
			}

			&--error {
				color: $wu-icon-error;
			}

			&--warning {
				color: $wu-icon-warning;
			}

			&--info {
				color: $wu-icon-info;
			}
		}

		&__img {
			/* #ifndef APP-NVUE */
			height: auto;
			will-change: transform;
			/* #endif */
		}

		&__label {
			/* #ifndef APP-NVUE */
			line-height: $wu-icon-label-line-height;
			/* #endif */
		}
	}
</style>