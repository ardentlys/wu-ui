<template>
	<view class="wu-calendar" @click.stop>
		<view v-show="!insert && show" class="wu-calendar__mask" :class="{'wu-calendar--mask-show': aniMaskShow}"
			@click="clean"></view>
		<view v-show="insert || show" class="wu-calendar__content"
			:class="{'wu-calendar--fixed':!insert,'wu-calendar--ani-show':aniMaskShow}">
			<view v-if="!insert" class="wu-calendar__header wu-calendar--fixed-top">
				<view class="wu-calendar__header-btn-box" @click="close">
					<text class="wu-calendar__header-text wu-calendar--fixed-width">{{cancelText}}</text>
				</view>
				<view class="wu-calendar__header-btn-box" @click="confirm">
					<text class="wu-calendar__header-text wu-calendar--fixed-width">{{okText}}</text>
				</view>
			</view>
			<view class="wu-calendar__header">
				<!-- 纵向滑动切换展示内容 -->
				<template v-if="slideSwitchMode == 'vertical'">
					<view class="wu-calendar__header-btn-box vertical">
						<view class="wu-calendar__header-btn wu-calendar--top" @click.stop="pre"></view>
						<picker mode="date" :value="pickerDate" fields="month" @change="bindDateChange">
							<text
								class="wu-calendar__header-text">{{ (nowDate.year||'') + YearText + ( nowDate.month||'') + MonthText }}</text>
						</picker>
						<view class="wu-calendar__header-btn wu-calendar--bottom" @click.stop="next"></view>
					</view>
					<text class="wu-calendar__backtoday vertical" @click="backToday">{{todayText}}</text>
				</template>
				<!-- 横向滑动与无滑动展示内容 -->
				<template v-else>
					<view class="wu-calendar__header-btn-box horizontal" @click.stop="pre">
						<view class="wu-calendar__header-btn wu-calendar--left"></view>
					</view>
					<picker mode="date" :value="pickerDate" fields="month" @change="bindDateChange">
						<text
							class="wu-calendar__header-text">{{ (nowDate.year||'') + YearText + ( nowDate.month||'') + MonthText }}</text>
					</picker>
					<view class="wu-calendar__header-btn-box horizontal" @click.stop="next">
						<view class="wu-calendar__header-btn wu-calendar--right"></view>
					</view>
					<text class="wu-calendar__backtoday" @click="backToday">{{todayText}}</text>
				</template>
			</view>
			<view class="wu-calendar__box">
				<view class="wu-calendar__weeks">
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{SUNText}}</text>
					</view>
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{monText}}</text>
					</view>
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{TUEText}}</text>
					</view>
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{WEDText}}</text>
					</view>
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{THUText}}</text>
					</view>
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{FRIText}}</text>
					</view>
					<view class="wu-calendar__weeks-day">
						<text class="wu-calendar__weeks-day-text">{{SATText}}</text>
					</view>
				</view>
				<!-- 滑动切换 -->
				<swiper v-if="slideSwitchMode !== 'none'" 
					style="height: 765rpx" 
					:duration="500"
					:vertical="slideSwitchMode == 'vertical'" 
					circular 
					:current="swiperCurrent"
					:disable-programmatic-animation="true" 
					@change="swiperChange"
					skip-hidden-item-layout
				>
					<swiper-item>
						<view v-if="showMonth" class="wu-calendar__box-bg">
							<text class="wu-calendar__box-bg-text">{{preWeeksMonth}}</text>
						</view>
						<view class="wu-calendar__weeks_box">
							<view class="wu-calendar__weeks" v-for="(item,weekIndex) in preWeeks" :key="weekIndex">
								<view class="wu-calendar__weeks-item" v-for="(weeks,weeksIndex) in item"
									:key="weeksIndex">
									<wu-calendar-item class="wu-calendar-item--hook" :weeks="weeks" :calendar="calendar"
										:selected="selected" :lunar="lunar" @change="choiceDate" :color="color"
										:startText="startText" :endText="endText"></wu-calendar-item>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view v-if="showMonth" class="wu-calendar__box-bg">
							<text class="wu-calendar__box-bg-text">{{weeksMonth}}</text>
						</view>
						<view class="wu-calendar__weeks_box">
							<view class="wu-calendar__weeks" v-for="(item,weekIndex) in weeks" :key="weekIndex">
								<view class="wu-calendar__weeks-item" v-for="(weeks,weeksIndex) in item"
									:key="weeksIndex">
									<wu-calendar-item class="wu-calendar-item--hook" :weeks="weeks" :calendar="calendar"
										:selected="selected" :lunar="lunar" @change="choiceDate" :color="color"
										:startText="startText" :endText="endText"></wu-calendar-item>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view v-if="showMonth" class="wu-calendar__box-bg">
							<text class="wu-calendar__box-bg-text">{{nextWeeksMonth}}</text>
						</view>
						<view class="wu-calendar__weeks_box">
							<view class="wu-calendar__weeks" v-for="(item,weekIndex) in nextWeeks" :key="weekIndex">
								<view class="wu-calendar__weeks-item" v-for="(weeks,weeksIndex) in item"
									:key="weeksIndex">
									<wu-calendar-item class="wu-calendar-item--hook" :weeks="weeks" :calendar="calendar"
										:selected="selected" :lunar="lunar" @change="choiceDate" :color="color"
										:startText="startText" :endText="endText"></wu-calendar-item>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<!-- 无滑动切换 -->
				<view v-else class="wu-calendar__weeks" v-for="(item,weekIndex) in weeks" :key="weekIndex">
					<view class="wu-calendar__weeks-item" v-for="(weeks,weeksIndex) in item" :key="weeksIndex">
						<wu-calendar-item class="wu-calendar-item--hook" :weeks="weeks" :calendar="calendar"
							:selected="selected" :lunar="lunar" @change="choiceDate" :color="color"
							:startText="startText" :endText="endText"></wu-calendar-item>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Calendar from './util.js';
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

	/**
	 * Calendar 日历
	 * @description 日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
	 * @tutorial https://wu.geeks.ink/zh-CN/components/calendar.html
	 * @property {String} date 自定义当前时间，默认为今天
	 * @property {Boolean} useToday 是否使用默认日期(今天，默认为true)
	 * @property {String} mode = [single|multiple|range] 日期选择类型(默认single(单日期选择))
	 *  @value single 单日期选择
	 *  @value multiple 多日期选择
	 *  @value range 范围选择
	 * @property {String} color 主题色(默认#3c9cff)
	 * @property {String} cancelColor 取消文字的颜色(默认#333333)
	 * @property {String} confirmColor 确认文字的颜色(默认#333333)
	 * @property {String} startText mode=range时，第一个日期底部的提示文字
	 * @property {String} endText mode=range时，最后一个日期底部的提示文字
	 * @property {Boolean} lunar 显示农历
	 * @property {String} startDate 日期选择范围-开始日期
	 * @property {String} endDate 日期选择范围-结束日期
	 * @property {Boolean} rangeEndRepick 允许范围内重选结束日期(默认false)
	 * @property {Boolean} rangeSameDay 允许日期选择范围起始日期为同一天(默认false)
	 * @property {Boolean} monthShowCurrentMonth 当月是否仅展示当月数据
	 * @property {Boolean} insert = [true|false] 插入模式,默认为true
	 * 	@value true 插入模式
	 * 	@value false 弹窗模式
	 * @property {String} slideSwitchMode 滑动切换模式,默认为horizontal(横向滑动切换)
	 *  @value horizontal 横向滑动切换
	 *  @value vertical 纵向滑动切换
	 *  @value none 不使用滑动切换
	 * @property {Boolean} clearDate = [true|false] 弹窗模式是否清空上次选择内容
	 * @property {Array} selected 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]
	 * @property {Boolean} showMonth 是否选择月份为背景(默认true)
	 * @property {Boolean} maskClick 是否点击遮罩层关闭(默认false)
	 * @property {Boolean} disabledChoice 是否禁止点击日历(默认false)
	 * @event {Function} change 日期改变，`insert :ture` 时生效
	 * @event {Function} confirm 确认选择`insert :false` 时生效
	 * @event {Function} monthSwitch 切换月份时触发
	 * @example <wu-calendar :insert="true":lunar="true" start-date="2022-5-20" end-date="2023-5-20"@change="change" />
	 */
	export default {
		mixins: [mpMixin, mixin, props],
		emits: ['close', 'confirm', 'change', 'monthSwitch'],
		data() {
			return {
				show: false,
				weeks: [],
				preWeeks: [],
				nextWeeks: [],
				weeksMonth: null,
				preWeeksMonth: null,
				nextWeeksMonth: null,
				calendar: {},
				nowDate: '',
				aniMaskShow: false,
				swiperCurrent: 1,
				swiperChangeDirection: '',
				pickerDate: ''
			}
		},
		computed: {
			/**
			 * for i18n
			 */
			okText() {
				return t("wu-calender.ok")
			},
			cancelText() {
				return t("wu-calender.cancel")
			},
			YearText() {
				return t("wu-calender.year")
			},
			MonthText() {
				return t("wu-calender.month")
			},
			todayText() {
				return t("wu-calender.today")
			},
			monText() {
				return t("wu-calender.MON")
			},
			TUEText() {
				return t("wu-calender.TUE")
			},
			WEDText() {
				return t("wu-calender.WED")
			},
			THUText() {
				return t("wu-calender.THU")
			},
			FRIText() {
				return t("wu-calender.FRI")
			},
			SATText() {
				return t("wu-calender.SAT")
			},
			SUNText() {
				return t("wu-calender.SUN")
			},
		},
		watch: {
			date(newVal) {
				this.cale.cleanRange();
				this.init(newVal)
				this.pickerDate = newVal
			},
			mode(newVal) {
				this.cale.cleanRange();
				this.cale.resetMode(newVal)
				this.init(this.date)
			},
			startDate(val) {
				this.cale.resetSatrtDate(val)
				this.cale.setDate(this.nowDate.fullDate)
				this.assignmentWeeks();
			},
			endDate(val) {
				this.cale.resetEndDate(val)
				this.cale.setDate(this.nowDate.fullDate)
				this.assignmentWeeks();
			},
			monthShowCurrentMonth(val) {
				this.cale.resetMonthShowCurrentMonth(val)
				this.setDate(this.nowDate.fullDate)
			},
			rangeEndRepick(val) {
				this.cale.resetRangeEndRepick(val)
			},
			selected(newVal) {
				this.cale.setSelectInfo(this.nowDate.fullDate, newVal)
				this.assignmentWeeks();
			},
		},
		created() {
			this.cale = new Calendar({
				selected: this.selected,
				startDate: this.startDate,
				endDate: this.endDate,
				mode: this.mode,
				monthShowCurrentMonth: this.monthShowCurrentMonth,
				rangeEndRepick: this.rangeEndRepick,
				rangeSameDay: this.rangeSameDay
			})
			this.init(this.date)
		},
		methods: {
			// 取消穿透
			clean() {
				if(this.maskClick) this.close();
			},
			bindDateChange(e) {
				const value = e.detail.value + '-1'
				this.setDate(value)

				const {
					year,
					month
				} = this.cale.getDate(value)
				this.$emit('monthSwitch', {
					year,
					month
				})
			},
			/**
			 * 初始化日期显示
			 * @param {Object} date
			 */
			init(date) {
				let firstDate = this.mode == 'single' ? date : date[0];
				// 如果填写默认值
				if (this.date) {
					// 当前数据类型
					let dateType = Object.prototype.toString.call(this.date);
					// 验证类型
					if (this.mode == 'single' && dateType != '[object String]') {
						return console.error(`类型错误，mode=${this.mode}时，date=String`)
					} else if (this.mode != 'single' && dateType != '[object Array]') {
						return console.error(`类型错误，mode=${this.mode}时，date=Array`)
					}
					// 根据类型默认选中不同的值
					if (this.mode == 'multiple') {
						this.cale.multiple = this.date;
						this.cale._getWeek(this.cale.multiple[this.cale.multiple.length - 1]);
					} else if (this.mode == 'range') {
						date[0] ? this.cale.setRange(date[0]) : ''
						date[1] ? this.cale.setRange(date[1]) : ''
					}
				} else if (this.useToday) { // 如果不填写默认值 且 使用今日作为默认值
					if (this.mode == 'multiple') {
						this.cale.multiple = [this.cale.date.fullDate];
						this.cale._getWeek(this.cale.multiple[this.cale.multiple.length - 1]);
					} else if (this.mode == 'range') {
						this.cale.setRange(this.cale.date.fullDate)
					}
				}

				// 设置日期
				this.cale.setDate(firstDate);
				// 本月日期信息
				this.weeks = this.cale.weeks;
				// 现在的日期
				this.nowDate = this.cale.getInfo(firstDate);
				// 设置当前月份
				this.weeksMonth = this.nowDate.month;
				// 如果不填写默认值 且 使用今日作为默认值
				if ((this.useToday && !this.date) || this.date) {
					this.calendar = this.nowDate;
				}
				// 如果使用滑动模式
				if (this.slideSwitchMode !== 'none') {
					this.preWeeks = this.cale._getWeek(this.cale.getDate(this.nowDate.fullDate, -1, 'month').fullDate,
						false)
					this.preWeeksMonth = this.cale.getDate(this.nowDate.fullDate, -1, 'month').month;
					this.nextWeeks = this.cale._getWeek(this.cale.getDate(this.nowDate.fullDate, +1, 'month').fullDate,
						false)
					this.nextWeeksMonth = this.cale.getDate(this.nowDate.fullDate, +1, 'month').month;
				}
			},
			/**
			 * 打开日历弹窗
			 */
			open() {
				// 为弹窗模式且需要清理数据
				if (this.clearDate && !this.insert) {
					this.cale.cleanRange()
					this.cale.cleanMultiple()
					this.swiperCurrent = 1;
					this.init(this.date);
				}
				this.show = true
				// #ifdef H5
				if (!this.insert) document.body.style = 'overflow: hidden'
				// #endif
				this.$nextTick(() => {
					setTimeout(() => {
						this.aniMaskShow = true
					}, 50)
				})
			},
			/**
			 * 关闭日历弹窗
			 */
			close() {
				this.aniMaskShow = false
				this.$nextTick(() => {
					setTimeout(() => {
						this.show = false
						this.$emit('close')
						// #ifdef H5
						if (!this.insert) document.body.style = 'overflow: visible'
						// #endif
					}, 300)
				})
			},
			/**
			 * 确认按钮
			 */
			confirm() {
				this.setEmit('confirm')
				this.close()
			},
			/**
			 * 变化触发
			 */
			change() {
				if (!this.insert) return
				this.setEmit('change')
			},
			/**
			 * 选择月份触发
			 */
			monthSwitch() {
				let {
					year,
					month
				} = this.nowDate
				this.$emit('monthSwitch', {
					year,
					month: Number(month)
				})
			},
			/**
			 * 派发事件
			 * @param {Object} name
			 */
			setEmit(name) {
				let {
					year,
					month,
					date,
					fullDate,
					lunar,
					extraInfo
				} = this.calendar;
				this.$emit(name, {
					range: this.cale.rangeStatus,
					multiple: this.cale.multiple,
					mode: this.mode,
					year,
					month,
					date,
					fulldate: fullDate,
					lunar,
					extraInfo: extraInfo || {}
				})
			},
			/**
			 * 选择天触发
			 * @param {Object} weeks
			 */
			choiceDate(weeks) {
				// 如果为禁用 或者 空数据 或者 禁止点击日期
				if (weeks.disable || weeks.empty || this.disabledChoice) return;
				this.calendar = weeks;
				// 设置选择范围
				this.cale.setRange(this.calendar.fullDate);
				// 设置多选
				this.cale.setMultiple(this.calendar.fullDate);
				// 如果启用滑动切换 且当前模式为范围选择时则重新计算上月与下月
				if (this.slideSwitchMode !== 'none') {
					let weekName = '';
					switch (this.swiperCurrent) {
						case 0:
							weekName = 'preWeeks'
							if (this.mode == 'range') {
								this.weeks = this.cale._getWeek(this.weeks[0].find(item => item.fullDate).fullDate, false)
								this.nextWeeks = this.cale._getWeek(this.nextWeeks[0].find(item => item.fullDate).fullDate,
									false)
							}
							break;
						case 1:
							weekName = 'weeks'
							if (this.mode == 'range') {
								this.preWeeks = this.cale._getWeek(this.preWeeks[0].find(item => item.fullDate).fullDate,
									false)
								this.nextWeeks = this.cale._getWeek(this.nextWeeks[0].find(item => item.fullDate).fullDate,
									false)
							}
							break;
						case 2:
							weekName = 'nextWeeks'
							if (this.mode == 'range') {
								this.weeks = this.cale._getWeek(this.weeks[0].find(item => item.fullDate).fullDate, false)
								this.preWeeks = this.cale._getWeek(this.preWeeks[0].find(item => item.fullDate).fullDate,
									false)
							}
							break;
					}
					this[weekName] = this.cale.weeks;
				} else {
					this.weeks = this.cale.weeks;
				}

				this.change();
			},
			/**
			 * 回到今天
			 */
			backToday() {
				// 获取目前的年月
				const nowYearMonth = `${this.nowDate.year}-${this.nowDate.month}`

				if (this.cale.rangeStatus.before && !this.cale.rangeStatus.after) {
					this.cale.rangeStatus.before = '';
				}

				// 设置日期
				this.setDate(this.cale.date.fullDate);
				let date = this.nowDate;
				this.calendar = date;
				this.pickerDate = date.fullDate;
				// 设置选中的日期
				this.cale.setRange(date.fullDate);
				// 今天的日期
				const todayYearMonth = `${date.year}-${date.month}`

				// 如果当前日期 与 今天的日期不符
				if (nowYearMonth !== todayYearMonth) {
					// 触发月份切换事件
					this.monthSwitch()
				}

				// 设置日期
				this.setDate(this.cale.date.fullDate);
				// swiperCurrent改变需要改动的weeks 
				this.swiperCurrentChangeWeeks();
				// 改变事件
				this.change()
			},
			/**
			 * 上个月
			 */
			pre() {
				this.swiperChangeDirection = 'pre'
				this.weeksChange();
			},
			/**
			 * 下个月
			 */
			next() {
				this.swiperChangeDirection = 'next'
				this.weeksChange();
			},
			/**
			 * 设置日期
			 * @param {Object} date
			 */
			setDate(date) {
				this.cale.setDate(date)
				this.assignmentWeeks()
				this.nowDate = this.cale.getInfo(date)
			},
			/**
			 * 用来将cale.weeks 赋值到 weeks
			 */
			assignmentWeeks() {
				let weekName = '';
				switch (this.swiperCurrent) {
					case 0:
						weekName = 'preWeeks'
						break;
					case 1:
						weekName = 'weeks'
						break;
					case 2:
						weekName = 'nextWeeks'
						break;
				}
				this[weekName] = this.cale.weeks
			},
			/**
			 * 滑动切换日期
			 */
			swiperChange(e) {
				// 非用户滑动不执行
				if (e.detail.source !== 'touch') return;
				let curr = e.detail.current;
				if (curr - this.swiperCurrent == 1 || curr - this.swiperCurrent == -2) {
					this.swiperChangeDirection = 'next'
				} else {
					this.swiperChangeDirection = 'pre'
				}
				this.swiperCurrent = curr;
				this.weeksChange();
			},
			/**
			 * weeks改变
			 */
			weeksChange() {
				this.setDate(this.cale.getDate(this.nowDate.fullDate, this.swiperChangeDirection == 'next' ? +1 : -1,
					'month').fullDate)
				this.swiperCurrentChangeWeeks();
				this.monthSwitch();
				this.pickerDate = this.nowDate.fullDate;
			},
			/**
			 * swiperCurrent改变需要改动的weeks
			 */
			swiperCurrentChangeWeeks() {
				if (this.slideSwitchMode !== 'none') {
					if (this.swiperChangeDirection == 'next') {
						let newDate = this.cale.getDate(this.nowDate.fullDate, +1, 'month');
						let newWeeks = this.cale._getWeek(newDate.fullDate, false)
						let newWeeksMonth = newDate.month
						
						if (this.swiperCurrent == 0) {
							this.weeks = newWeeks;
							this.weeksMonth = newWeeksMonth;
						} else if (this.swiperCurrent == 1) {
							this.nextWeeks = newWeeks;
							this.nextWeeksMonth = newWeeksMonth;
						} else {
							this.preWeeks = newWeeks;
							this.preWeeksMonth = newWeeksMonth;
						}
					} else {
						let newDate = this.cale.getDate(this.nowDate.fullDate, -1, 'month');
						let newWeeks = this.cale._getWeek(newDate.fullDate, false)
						let newWeeksMonth = newDate.month
						
						if (this.swiperCurrent == 0) {
							this.nextWeeks = newWeeks;
							this.nextWeeksMonth = newWeeksMonth;
						} else if (this.swiperCurrent == 1) {
							this.preWeeks = newWeeks;
							this.preWeeksMonth = newWeeksMonth;
						} else {
							this.weeks = newWeeks;
							this.weeksMonth = newWeeksMonth;
						}
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	$wu-bg-color-mask: rgba($color: #000000, $alpha: 0.4);
	$wu-border-color: #EDEDED;
	$wu-text-color: #333;
	$wu-bg-color-hover: #f1f1f1;
	$wu-font-size-base: 32rpx;
	$wu-text-color-placeholder: #808080;
	$wu-color-subtitle: #555555;
	$wu-text-color-grey: #999;

	.wu-calendar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.wu-calendar__mask {
		position: fixed;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		background-color: $wu-bg-color-mask;
		transition-property: opacity;
		transition-duration: 0.3s;
		opacity: 0;
		/* #ifndef APP-NVUE */
		z-index: 99;
		/* #endif */
	}

	.wu-calendar--mask-show {
		opacity: 1
	}

	.wu-calendar--fixed {
		position: fixed;
		/* #ifdef APP-NVUE */
		bottom: 0;
		/* #endif */
		left: 0;
		right: 0;
		transition-property: transform;
		transition-duration: 0.3s;
		transform: translateY(1080rpx);
		/* #ifndef APP-NVUE */
		bottom: calc(var(--window-bottom));
		z-index: 99;
		/* #endif */
	}

	.wu-calendar--ani-show {
		transform: translateY(0);
	}

	.wu-calendar__content {
		background-color: #fff;
	}

	.wu-calendar__header {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom-color: $wu-border-color;
		border-bottom-style: solid;
		border-bottom-width: 2rpx;
	}

	.wu-calendar--fixed-top {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		height: 90rpx;
		flex-direction: row;
		justify-content: space-between;
		border-top-color: $wu-border-color;
		border-top-style: solid;
		border-top-width: 2rpx;
	}

	.wu-calendar--fixed-width {
		width: 100rpx;
	}

	.wu-calendar__backtoday {
		position: absolute;
		right: 0;
		top: 25rpx;
		padding: 0 10rpx;
		padding-left: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 24rpx;
		border-top-left-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
		color: $wu-text-color;
		background-color: $wu-bg-color-hover;

		&.vertical {
			top: 38rpx;
		}
	}

	.wu-calendar__header-text {
		text-align: center;
		width: 200rpx;
		font-size: $wu-font-size-base;
		color: $wu-text-color;
	}

	.wu-calendar__header-btn-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.wu-calendar__header-btn {
			width: 20rpx;
			height: 20rpx;
		}

		&.horizontal {
			width: 100rpx;
			height: 100rpx;
		}

		&.vertical {
			flex-direction: column;
			padding: 20rpx 0;
		}
	}

	.wu-calendar__header-btn {
		border-left-color: $wu-text-color-placeholder;
		border-left-style: solid;
		border-left-width: 4rpx;
		border-top-color: $wu-color-subtitle;
		border-top-style: solid;
		border-top-width: 4rpx;
	}

	.wu-calendar--left {
		transform: rotate(-45deg);
	}

	.wu-calendar--right {
		transform: rotate(135deg);
	}

	.wu-calendar--top {
		transform: rotate(45deg);
	}

	.wu-calendar--bottom {
		transform: rotate(225deg);
	}

	.wu-calendar__weeks {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0 8rpx;
	}

	.wu-calendar__weeks-item {
		flex: 1;
		margin-bottom: 8rpx;
	}

	.wu-calendar__weeks-day {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 90rpx;
		border-bottom-color: #F5F5F5;
		border-bottom-style: solid;
		border-bottom-width: 2rpx;
	}

	.wu-calendar__weeks-day-text {
		font-size: 28rpx;
	}

	.wu-calendar__box {
		position: relative;
	}

	.wu-calendar__box-bg {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.wu-calendar__box-bg-text {
		font-size: 100rpx;
		transform: scale(4);
		font-weight: bold;
		color: $wu-text-color-grey;
		opacity: 0.1;
		text-align: center;
		/* #ifndef APP-NVUE */
		line-height: 1;
		/* #endif */
	}
</style>