<template>
	<view class="wu-calendar-item__weeks-box" ref="$weeksbox" :style="[calendarItemStyle, {
			borderTopLeftRadius: weeks.beforeRange ? '12rpx' : '',
			borderBottomLeftRadius: weeks.beforeRange ? '12rpx' : '',
			borderTopRightRadius: weeks.afterRange ? '12rpx' : '',
			borderBottomRightRadius: weeks.afterRange ? '12rpx' : '',
		}]" @click="choiceDate(weeks)">
		<view class="wu-calendar-item__weeks-box-item" :style="[actMultipleStyle, {height: itemHeight + 'px'}]">
			<!-- 自定义打点上方信息 -->
			<text v-if="weeks.extraInfo && weeks.extraInfo.topInfo" class="wu-calendar-item__weeks-lunar-text" :style="[{color: weeks.extraInfo.topInfoColor || '#e43d33'}, calendarItemStyle, actMultipleStyle]">{{weeks.extraInfo.topInfo}}</text>
			<!-- 徽标 -->
			<text v-if="selected && weeks.extraInfo && weeks.extraInfo.badge" class="wu-calendar-item__weeks-box-circle" :style="[badgeStyle]"></text>
			<!-- 日期文字 -->
			<text class="wu-calendar-item__weeks-box-text" :style="[calendarItemStyle, actMultipleStyle]">{{weeks.date}}</text>
			<!-- 今日的文字 -->
			<text v-if="!lunar && !weeks.extraInfo && weeks.isDay && !weeks.beforeRange && !weeks.afterRange" class="wu-calendar-item__weeks-lunar-text" :style="[calendarItemStyle, actMultipleStyle]">{{todayText}}</text>
			<!-- 农历文字 -->
			<text v-if="lunar && !weeks.extraInfo && !weeks.beforeRange && !weeks.afterRange" class="wu-calendar-item__weeks-lunar-text" :style="[calendarItemStyle, actMultipleStyle]">{{dayText}}</text>
			<!-- 选中的文字展示 -->
			<text v-if="!weeks.extraInfo && (weeks.beforeRange || weeks.afterRange)" class="wu-calendar-item__weeks-lunar-text" :style="[calendarItemStyle, actMultipleStyle]">{{multipleText}}</text>
			<!-- 自定义打点下方信息 -->
			<text v-if="weeks.extraInfo && weeks.extraInfo.info" class="wu-calendar-item__weeks-lunar-text" :style="[{color: weeks.extraInfo.infoColor || '#e43d33'}, calendarItemStyle, actMultipleStyle]">{{weeks.extraInfo.info}}</text>
		</view>
	</view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from './props.js';

	import {
		initVueI18n
	} from '@dcloudio/uni-i18n'
	import i18nMessages from '../i18n/index.js'
	const {
		t
	} = initVueI18n(i18nMessages)

	export default {
		emits: ['change'],
		mixins: [mpMixin, mixin, props],
		computed: {
			todayText() {
				return t("wu-calender.today")
			},
			// 每项日历样式
			calendarItemStyle() {
				let style = {};
				let color = this.$w.Color.gradient(this.color, this.$w.Color.isLight(this.color) ? '#000' : '#fff', 100)[6]
				// 有顺序别乱动
				// 选中的日期范围内的样式
				if (this.weeks.rangeMultiple) {
					style = {
						backgroundColor: this.$w.Color.gradient(this.color, '#fff', 100)[80],
						color
					}
				};
				// 今天的日期样式
				if (this.weeks.isDay) {
					style.color = color;
				}
				// 禁用的日期样式
				if(this.weeks.disable) {
					style = {
						backgroundColor: 'rgba(249, 249, 249, 0.3)',
						color: '#c0c0c0'
					}
				}
				return style;
			},
			// 选中的日期样式
			actMultipleStyle() {
				if ((this.weeks.beforeRange || this.weeks.afterRange || this.weeks.multiples || (this.calendar.fullDate === this.weeks
						.fullDate && this.weeks.mode === 'single')) && !this.weeks.disable) {
					return {
						backgroundColor: this.color,
						color: '#fff',
						borderRadius: '12rpx'
					}
				}
			},
			// 徽标样式
			badgeStyle() {
				let style = {
					backgroundColor: this.weeks.disable ? '#c0c0c0' : '#e43d33',
					width: '16rpx',
					height: '16rpx'
				};
				if(this.weeks.extraInfo) {
					if(this.weeks.extraInfo.badgeColor) {
						// 如果当前是选中日期的徽标且徽标颜色与主题色一致 为了保证 徽标颜色可以被看见 再选中时将其设置为 #fff
						if ((this.weeks.beforeRange || this.weeks.afterRange || this.weeks.multiples || (this.calendar.fullDate === this.weeks
								.fullDate && this.weeks.mode === 'single')) && !this.weeks.disable && this.$w.Color.convertFormat(this.weeks.extraInfo.badgeColor) == this.$w.Color.convertFormat(this.color)) {
							style.backgroundColor = this.actBadgeColor;
						} else {
							style.backgroundColor = this.weeks.extraInfo.badgeColor
						}
					}
					if(this.weeks.extraInfo.badgeSize) {
						style.width = this.weeks.extraInfo.badgeSize
						style.height = this.weeks.extraInfo.badgeSize
					}
					
					if(!this.weeks.extraInfo.badgePosition) {
						style.right = '10rpx';
						style.top = '10rpx';
					} else if(this.weeks.extraInfo.badgePosition == 'top-left'){
						style.top = '10rpx';
						style.left = '10rpx';
					} else if(this.weeks.extraInfo.badgePosition == 'top-center'){
						style.top = '10rpx';
						style.left = 'center';
					} else if(this.weeks.extraInfo.badgePosition == 'top-right'){
						style.top = '10rpx';
						style.right = '10rpx';
					} else if(this.weeks.extraInfo.badgePosition == 'bottom-left'){
						style.bottom = '10rpx';
						style.left = '10rpx';
					} else if(this.weeks.extraInfo.badgePosition == 'bottom-center'){
						style.bottom = '10rpx';
						style.left = 'center';
					} else if(this.weeks.extraInfo.badgePosition == 'bottom-right'){
						style.bottom = '10rpx';
						style.right = '10rpx';
					}
				}
				
				return style
			},
			// 日期文字
			dayText() {
				let text = '';
				if (this.weeks.isDay) {
					text = this.todayText
				} else if(this.weeks.lunar.festival) {
					text = this.weeks.lunar.festival
				} else if(this.weeks.lunar.isTerm) {
					text = this.weeks.lunar.Term
				} else if (this.weeks.lunar.IDayCn === '初一') {
					text = this.weeks.lunar.IMonthCn
				} else {
					text = this.weeks.lunar.IDayCn
				}
				return text
			},
			// 选中的文字
			multipleText() {
				let text = '';
				if (this.weeks.afterRange) {
					text = this.endText
				} else if (this.weeks.beforeRange) {
					text = this.startText
				} 
				return text;
			}
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni_modules/wu-ui-tools/theme.scss';
	$wu-font-size-base: 28rpx;
	$wu-text-color: #333;
	$wu-font-size-sm: 24rpx;
	$wu-color-error: #e43d33;
	$wu-opacity-disabled: 0.3;
	$wu-text-color-disable: #c0c0c0;

	.wu-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 0.5px;
	}

	.wu-calendar-item__weeks-box-text {
		font-size: $wu-font-size-base;
		color: $wu-text-color;
	}

	.wu-calendar-item__weeks-lunar-text {
		font-size: $wu-font-size-sm;
		color: $wu-text-color;
	}

	.wu-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.wu-calendar-item__weeks-box-circle {
		position: absolute;
		border-radius: 16rpx;
		background-color: $wu-color-error;
	}

	.wu-calendar-item--disable {
		background-color: rgba(249, 249, 249, $wu-opacity-disabled);
		color: $wu-text-color-disable;
	}

	.wu-calendar-item--extra {
		color: $wu-color-error;
		opacity: 0.8;
	}

	.wu-calendar-item--checked {
		color: #fff;
	}
</style>