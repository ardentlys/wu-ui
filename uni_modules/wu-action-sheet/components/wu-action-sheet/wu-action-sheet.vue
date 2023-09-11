<template>
	<wu-popup ref="wuActionSheetPopup" mode="bottom" @maskClick="closeHandler" :safeAreaInsetBottom="safeAreaInsetBottom"
		:round="round">
		<view class="wu-action-sheet">
			<view class="wu-action-sheet__header" v-if="title">
				<text class="wu-action-sheet__header__title wu-line-1">{{title}}</text>
				<view class="wu-action-sheet__header__icon-wrap" @tap.stop="cancel">
					<wu-icon name="close" size="17" color="#c8c9cc" bold></wu-icon>
				</view>
			</view>
			<text class="wu-action-sheet__description" :style="[{
					marginTop: `${title && description ? 0 : '18px'}`
				}]" v-if="description">{{description}}</text>
			<slot>
				<wu-line v-if="description"></wu-line>
				<view class="wu-action-sheet__item-wrap">
					<template v-for="(item, index) in actions">
							<view class="wu-action-sheet__item-wrap__item" @tap.stop="selectHandler(index)"
								:hover-class="!item.disabled && !item.loading ? 'wu-action-sheet--hover' : ''"
								:hover-stay-time="150">
								<template v-if="!item.loading">
									<text class="wu-action-sheet__item-wrap__item__name"
										:style="[itemStyle(index)]">{{ item.name }}</text>
									<text v-if="item.subname"
										class="wu-action-sheet__item-wrap__item__subname">{{ item.subname }}</text>
								</template>
								<wu-loading-icon v-else custom-class="van-action-sheet__loading" size="18"
									mode="circle" />
							</view>
						<wu-line v-if="index !== actions.length - 1"></wu-line>
					</template>
				</view>
			</slot>
			<wu-gap bgColor="#eaeaec" height="6" v-if="cancelText"></wu-gap>
			<view hover-class="wu-action-sheet--hover">
				<text @touchmove.stop.prevent :hover-stay-time="150" v-if="cancelText"
					class="wu-action-sheet__cancel-text" @tap="cancel">{{cancelText}}</text>
			</view>
		</view>
	</wu-popup>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js'
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js'
	import openType from '@/uni_modules/wu-ui-tools/libs/mixin/openType.js'
	import button from '@/uni_modules/wu-ui-tools/libs/mixin/button.js'
	import props from './props.js';
	/**
	 * ActionSheet 操作菜单
	 * @description 本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。本组件功能类似于uni的uni.showActionSheetAPI，配置更加灵活，所有平台都表现一致。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/actionSheet.html
	 * @property {String}			title				操作菜单标题
	 * @property {String}			description			选项上方的描述信息
	 * @property {Array<Object>}	actions				按钮的文字数组，见官方文档示例
	 * @property {String}			cancelText			取消按钮的提示文字,不为空时显示按钮
	 * @property {Boolean}			closeOnClickAction	点击某个菜单项时是否关闭弹窗 （默认 true ）
	 * @property {Boolean}			safeAreaInsetBottom	处理底部安全区 （默认 true ）
	 * @property {String}			openType			小程序的打开方式 (contact | launchApp | getUserInfo | openSetting ｜getPhoneNumber ｜error )
	 * @property {Boolean}			closeOnClickOverlay	点击遮罩是否允许关闭  (默认 true )
	 * @property {Number|String}	round				圆角值，默认无圆角  (默认 0 )
	 * @property {String}			lang				指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
	 * @property {String}			sessionFrom			会话来源，openType="contact"时有效
	 * @property {String}			sendMessageTitle	会话内消息卡片标题，openType="contact"时有效
	 * @property {String}			sendMessagePath		会话内消息卡片点击跳转小程序路径，openType="contact"时有效
	 * @property {String}			sendMessageImg		会话内消息卡片图片，openType="contact"时有效
	 * @property {Boolean}			showMessageCard		是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 （默认 false ）
	 * @property {String}			appParameter		打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效
	 * @event {Function} select			点击ActionSheet列表项时触发 
	 * @event {Function} close			点击取消按钮时触发
	 * @event {Function} getuserinfo	用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效
	 * @event {Function} contact		客服消息回调，openType="contact"时有效
	 * @event {Function} getphonenumber	获取用户手机号回调，openType="getPhoneNumber"时有效
	 * @event {Function} error			当使用开放能力时，发生错误的回调，openType="error"时有效
	 * @event {Function} launchapp		打开 APP 成功的回调，openType="launchApp"时有效
	 * @event {Function} opensetting	在打开授权设置页后回调，openType="openSetting"时有效
	 * @example <wu-action-sheet ref="wuActionSheet" :actions="list" :title="title"></wu-action-sheet>
	 */
	export default {
		name: "wu-action-sheet",
		// 一些props参数和methods方法，通过mixin混入，因为其他文件也会用到
		mixins: [openType, button, mixin, mpMixin, props],
		emits: ['select', 'close'],
		data() {
			return {

			}
		},
		computed: {
			// 操作项目的样式
			itemStyle() {
				return (index) => {
					let style = {};
					if (this.actions[index].color) style.color = this.actions[index].color
					if (this.actions[index].fontSize) style.fontSize = this.$w.addUnit(this.actions[index].fontSize)
					// 选项被禁用的样式
					if (this.actions[index].disabled) style.color = '#c0c4cc'
					return style;
				}
			},
		},
		methods: {
			open() {
				this.$refs.wuActionSheetPopup.open()
			},
			close() {
				this.$refs.wuActionSheetPopup.close()
			},
			closeHandler() {
				// 允许点击遮罩关闭时，才发出close事件
				if (this.closeOnClickOverlay) {
					this.$refs.wuActionSheetPopup.close()
					this.$emit('close')
				}
			},
			// 点击取消按钮
			cancel() {
				this.$refs.wuActionSheetPopup.close()
				this.$emit('close')
			},
			selectHandler(index) {
				const item = this.actions[index]
				if (item && !item.disabled && !item.loading) {
					this.$emit('select', item)
					if (this.closeOnClickAction) {
						this.$emit('close')
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni_modules/wu-ui-tools/libs/css/components.scss';
	@import '@/uni_modules/wu-ui-tools/theme.scss';

	$wu-action-sheet-reset-button-width: 100% !default;
	$wu-action-sheet-title-font-size: 16px !default;
	$wu-action-sheet-title-padding: 12px 30px !default;
	$wu-action-sheet-title-color: $wu-main-color !default;
	$wu-action-sheet-header-icon-wrap-right: 15px !default;
	$wu-action-sheet-header-icon-wrap-top: 15px !default;
	$wu-action-sheet-description-font-size: 13px !default;
	$wu-action-sheet-description-color: 14px !default;
	$wu-action-sheet-description-margin: 18px 15px !default;
	$wu-action-sheet-item-wrap-item-padding: 15px !default;
	$wu-action-sheet-item-wrap-name-font-size: 16px !default;
	$wu-action-sheet-item-wrap-subname-font-size: 13px !default;
	$wu-action-sheet-item-wrap-subname-color: #c0c4cc !default;
	$wu-action-sheet-item-wrap-subname-margin-top: 10px !default;
	$wu-action-sheet-cancel-text-font-size: 16px !default;
	$wu-action-sheet-cancel-text-color: $wu-content-color !default;
	$wu-action-sheet-cancel-text-font-size: 15px !default;
	$wu-action-sheet-cancel-text-hover-background-color: rgb(242, 243, 245) !default;

	.wu-reset-button {
		width: $wu-action-sheet-reset-button-width;
		line-height: 1;
	}

	.wu-action-sheet {
		text-align: center;

		&__header {
			position: relative;
			padding: $wu-action-sheet-title-padding;

			&__title {
				font-size: $wu-action-sheet-title-font-size;
				color: $wu-action-sheet-title-color;
				font-weight: bold;
				text-align: center;
			}

			&__icon-wrap {
				position: absolute;
				right: $wu-action-sheet-header-icon-wrap-right;
				top: $wu-action-sheet-header-icon-wrap-top;
			}
		}

		&__description {
			font-size: $wu-action-sheet-description-font-size;
			color: $wu-tips-color;
			margin: $wu-action-sheet-description-margin;
			text-align: center;
		}

		&__item-wrap {

			&__item {
				padding: $wu-action-sheet-item-wrap-item-padding;
				@include flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				&__name {
					font-size: $wu-action-sheet-item-wrap-name-font-size;
					color: $wu-main-color;
					text-align: center;
				}

				&__subname {
					font-size: $wu-action-sheet-item-wrap-subname-font-size;
					color: $wu-action-sheet-item-wrap-subname-color;
					margin-top: $wu-action-sheet-item-wrap-subname-margin-top;
					text-align: center;
				}
			}
		}

		&__cancel-text {
			font-size: $wu-action-sheet-cancel-text-font-size;
			color: $wu-action-sheet-cancel-text-color;
			text-align: center;
			padding: $wu-action-sheet-cancel-text-font-size;
		}

		&--hover {
			background-color: $wu-action-sheet-cancel-text-hover-background-color;
		}
	}
</style>