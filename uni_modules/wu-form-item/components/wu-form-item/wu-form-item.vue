<template>
	<view class="wu-form-item">
		<view
			class="wu-form-item__body"
			@tap="clickHandler"
			:style="[$w.addStyle(customStyle), {
				flexDirection: (labelPosition || parentData.labelPosition) === 'left' ? 'row' : 'column'
			}]"
		>
			<!-- 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" -->
			<slot name="label">
				<!-- {{required}} -->
				<view
					class="wu-form-item__body__left"
					v-if="required || leftIcon || label"
					:style="{
						width: $w.addUnit(labelWidth || parentData.labelWidth),
						marginBottom: parentData.labelPosition === 'left' ? 0 : '5px',
					}"
				>
					<!-- 为了块对齐 -->
					<view class="wu-form-item__body__left__content">
						<!-- nvue不支持伪元素before -->
						<text
							v-if="required"
							class="wu-form-item__body__left__content__required"
						>*</text>
						<view
							class="wu-form-item__body__left__content__icon"
							v-if="leftIcon"
						>
							<wu-icon
								:name="leftIcon"
								:custom-style="leftIconStyle"
							></wu-icon>
						</view>
						<text
							class="wu-form-item__body__left__content__label"
							:style="[parentData.labelStyle, {
								justifyContent: parentData.labelAlign === 'left' ? 'flex-start' : parentData.labelAlign === 'center' ? 'center' : 'flex-end'
							}]"
						>{{ label }}</text>
					</view>
				</view>
			</slot>
			<view class="wu-form-item__body__right">
				<view class="wu-form-item__body__right__content">
					<view class="wu-form-item__body__right__content__slot">
						<slot />
					</view>
					<view
						class="item__body__right__content__icon"
						v-if="$slots.right"
					>
						<slot name="right" />
					</view>
				</view>
			</view>
		</view>
		<slot name="error">
			<text
				v-if="!!message && parentData.errorType === 'message'"
				class="wu-form-item__body__right__message"
				:style="{
					marginLeft:  $w.addUnit(parentData.labelPosition === 'top' ? 0 : (labelWidth || parentData.labelWidth))
				}"
			>{{ message }}</text>
		</slot>
		<wu-line
			v-if="borderBottom"
			:color="message && parentData.errorType === 'border-bottom' ? $w.color.error : propsLine.color"
			:customStyle="`margin-top: ${message && parentData.errorType === 'message' ? '5px' : 0}`"
		></wu-line>
	</view>
</template>

<script>
	import mixin from "@/uni_modules/wu-ui-tools/libs/mixin/mixin.js";
	import mpMixin from "@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js";
	import props from './props.js';
	/**
	 * Form 表单
	 * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/form.html
	 * @property {String}			label			input的label提示语
	 * @property {String}			prop			绑定的值
	 * @property {String | Boolean}	borderBottom	是否显示表单域的下划线边框
	 * @property {String | Number}	labelWidth		label的宽度，单位px
	 * @property {String}			rightIcon		右侧图标
	 * @property {String}			leftIcon		左侧图标
	 * @property {String | Object} leftIconStyle 左侧图标的样式
	 * @property {Boolean}			required		是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置 (默认 false )
	 *
	 * @example <wu-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1"></wu-form-item>
	 */
	export default {
		name: 'wu-form-item',
		mixins: [mpMixin, mixin, props],
		data() {
			return {
				// 错误提示语
				message: '',
				parentData: {
					// 提示文本的位置
					labelPosition: 'left',
					// 提示文本对齐方式
					labelAlign: 'left',
					// 提示文本的样式
					labelStyle: {},
					// 提示文本的宽度
					labelWidth: 45,
					// 错误提示方式
					errorType: 'message'
				}
			}
		},
		// 组件创建完成时，将当前实例保存到wu-form中
		computed: {
			propsLine() {
				return this.$w.props.line
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				// 父组件的实例
				this.updateParentData()
				if (!this.parent) {
					this.$w.error('wu-form-item需要结合wu-form组件使用')
				}
			},
			// 获取父组件的参数
			updateParentData() {
				// 此方法写在mixin中
				this.getParentData('wu-form');
			},
			// 移除wu-form-item的校验结果
			clearValidate() {
				this.message = null
			},
			// 清空当前的组件的校验结果，并重置为初始值
			resetField() {
				// 找到原始值
				const value = this.$w.getProperty(this.parent.originalModel, this.prop)
				// 将wu-form的model的prop属性链还原原始值
				this.$w.setProperty(this.parent.model, this.prop, value)
				// 移除校验结果
				this.message = null
			},
			// 点击组件
			clickHandler() {
				this.$emit('click')
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/color.scss";
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";

	.wu-form-item {
		@include flex(column);
		font-size: 14px;
		color: $wu-main-color;

		&__body {
			@include flex;
			padding: 10px 0;

			&__left {
				@include flex;
				align-items: center;

				&__content {
					position: relative;
					@include flex;
					align-items: center;
					padding-right: 10rpx;
					flex: 1;

					&__icon {
						margin-right: 8rpx;
					}

					&__required {
						position: absolute;
						left: -9px;
						color: $wu-error;
						line-height: 20px;
						font-size: 20px;
						top: 3px;
					}

					&__label {
						@include flex;
						align-items: center;
						flex: 1;
						color: $wu-main-color;
						font-size: 15px;
					}
				}
			}

			&__right {
				flex: 1;

				&__content {
					@include flex;
					align-items: center;
					flex: 1;

					&__slot {
						flex: 1;
						/* #ifndef MP */
						@include flex;
						align-items: center;
						/* #endif */
					}

					&__icon {
						margin-left: 10rpx;
						color: $wu-light-color;
						font-size: 30rpx;
					}
				}

				&__message {
					font-size: 12px;
					line-height: 12px;
					color: $wu-error;
				}
			}
		}
	}
</style>
