import calendar from './calendar.js';
import CALENDAR from './calendar.js'

class Calendar {
	constructor({
		date,
		selected,
		startDate,
		endDate,
		mode,
		monthShowCurrentMonth,
		rangeEndRepick,
		rangeSameDay,
		rangeHaveDisableTruncation,
		type,
		foldStatus,
		startWeek
	} = {}) {
		// 当前日期
		this.date = this.getDate(new Date()) // 当前初入日期
		// 打点信息
		this.selected = selected || [];
		// 范围开始
		this.startDate = startDate
		// 范围结束
		this.endDate = endDate
		// 日历以周几开始
		this.startWeek = startWeek
		// 日期选择类型
		this.mode = mode
		// 日历类型
		this.type = type
		// 折叠状态
		this.foldStatus = foldStatus
		// 允许范围内重选结束日期
		this.rangeEndRepick = rangeEndRepick
		// 允许日期选择范围起始日期为同一天
		this.rangeSameDay = rangeSameDay
		// 日期选择范围内遇到打点禁用日期是否截断
		this.rangeHaveDisableTruncation = rangeHaveDisableTruncation
		// 每月是否仅显示当月的数据
		this.monthShowCurrentMonth = monthShowCurrentMonth
		// 清理多选状态
		this.cleanRange()
		// 每周日期
		this.weeks = {}
		// 多个日期
		this.multiple = [];
	}
	/**
	 * 设置日期
	 * @param {Object} date
	 */
	setDate(date) {
		this.selectDate = this.getDate(date)
		this._getWeek(this.selectDate.fullDate)
	}

	/**
	 * 清除范围
	 */
	cleanRange() {
		this.rangeStatus = {
			before: '',
			after: '',
			data: []
		}
	}

	/**
	 * 清除多选
	 */
	cleanMultiple() {
		this.multiple = []
	}

	/**
	 * 重置开始日期
	 */
	resetSatrtDate(startDate) {
		// 范围开始
		this.startDate = startDate
	}

	/**
	 * 重置结束日期
	 */
	resetEndDate(endDate) {
		// 范围结束
		this.endDate = endDate
	}

	/**
	 * 重置是否每月仅显示当月数据
	 * @param {Boolean} show 是否仅显示当月数据 
	 */
	resetMonthShowCurrentMonth(show) {
		this.monthShowCurrentMonth = show
	}

	// 重置允许范围内重选结束日期
	resetRangeEndRepick(val) {
		this.rangeEndRepick = val
	}
	
	// 重置允许日期范围选择起始日期为同一天
	resetRangeSameDay(val) {
		this.rangeSameDay = val
	}
	
	// 重置范围内遇到打点禁用日期是否截断
	resetRangeHaveDisableTruncation(val) {
		this.rangeHaveDisableTruncation = val
	}
	
	// 重置日期选择模式
	resetMode(val) {
		this.mode = val
	}

	// 重置折叠状态
	resetFoldStatus(val) {
		this.foldStatus = val
	}
	
	// 重置日历以周几开始
	resetStartWeek(val) {
		this.startWeek = val
	}

	/**
	 * 创建本月某一天的信息
	 */
	_createCurrentDay(nowDate, full, date) {
		// 是否今天
		let isDay = this.date.fullDate === nowDate
		// 获取打点信息
		let info = this.selected && this.selected.find((item) => {
			if (this.dateEqual(nowDate, item.date)) {
				return item
			}
		})

		// 日期禁用
		let disableBefore = true
		let disableAfter = true
		if (this.startDate) {
			disableBefore = this.dateCompare(this.startDate, nowDate)
		}

		if (this.endDate) {
			disableAfter = this.dateCompare(nowDate, this.endDate)
		}

		// 范围选择模式
		let ranges = this.rangeStatus.data
		let checked = false
		if (this.mode == 'range') {
			checked = ranges.findIndex((item) => this.dateEqual(item, nowDate)) !== -1 ? true : false;
		}

		// 多日期选择模式
		let multiples = this.multiple
		let multiplesChecked = false
		if (this.mode == 'multiple') {
			multiplesChecked = multiples.findIndex(item => this.dateEqual(item, nowDate)) !== -1;
		}

		let data = {
			fullDate: nowDate,
			year: full.year,
			date,
			type: this.type,
			mode: this.mode,
			multiples: this.mode == 'multiple' ? multiplesChecked : false,
			rangeMultiple: this.mode == 'range' ? checked : false,
			beforeRange: this.dateEqual(this.rangeStatus.before, nowDate),
			afterRange: this.dateEqual(this.rangeStatus.after, nowDate),
			month: full.month,
			lunar: this.getlunar(full.year, full.month, date),
			disable: !(disableBefore && disableAfter),
			isDay
		}


		if (info) {
			data.extraInfo = info;
			data.disable = info.disable || false;
		}
		
		return data
	}

	/**
	 * 获取任意时间
	 */
	getDate(date, AddDayCount = 0, str = 'day') {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)
		switch (str) {
			case 'day':
				dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
				break
			case 'month':
				if (dd.getDate() === 31 && AddDayCount > 0) {
					dd.setDate(dd.getDate() + AddDayCount)
				} else {
					const preMonth = dd.getMonth()
					dd.setMonth(preMonth + AddDayCount) // 获取AddDayCount天后的日期
					const nextMonth = dd.getMonth()
					// 处理 pre 切换月份目标月份为2月没有当前日(30 31) 切换错误问题
					if (AddDayCount < 0 && preMonth !== 0 && nextMonth - preMonth > AddDayCount) {
						dd.setMonth(nextMonth + (nextMonth - preMonth + AddDayCount))
					}
					// 处理 next 切换月份目标月份为2月没有当前日(30 31) 切换错误问题
					if (AddDayCount > 0 && nextMonth - preMonth > AddDayCount) {
						dd.setMonth(nextMonth - (nextMonth - preMonth - AddDayCount))
					}
				}
				break
			case 'week':
				dd.setDate(dd.getDate() + (AddDayCount * 7))
				break;
			case 'year':
				dd.setFullYear(dd.getFullYear() + AddDayCount) // 获取AddDayCount天后的日期
				break
		}
		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}


	/**
	 * 获取上月剩余天数
	 */
	_getLastMonthDays(firstDay, full) {
		let dateArr = []
		for (let i = firstDay; i > 0; i--) {
			const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate()
			dateArr.push({
				date: beforeDate,
				month: full.month - 1,
				year: full.year,
				lunar: this.getlunar(full.year, full.month - 1, beforeDate),
				disable: true
			})
		}
		return dateArr
	}
	/**
	 * 获取本月天数
	 */
	_currentMonthDays(dateData, full) {
		let dateArr = []
		let fullDate = this.date.fullDate
		for (let i = 1; i <= dateData; i++) {
			let nowDate = full.year + '-' + (full.month < 10 ?
				full.month : full.month) + '-' + (i < 10 ?
				'0' + i : i)
			dateArr.push(this._createCurrentDay(nowDate, full, i))
		}
		return dateArr
	}
	/**
	 * 获取下月天数
	 */
	_getNextMonthDays(surplus, full) {
		let dateArr = []
		for (let i = 1; i < surplus + 1; i++) {
			dateArr.push({
				date: i,
				month: Number(full.month) + 1,
				lunar: this.getlunar(full.year, Number(full.month) + 1, i),
				disable: true
			})
		}
		return dateArr
	}
	/**
	 * 获取任意日期的一周
	 */
	_getWeekDays(dateData) {
		let dateArr = [];
		let oneDayTime = 1000 * 60 * 60 * 24
		let today = new Date(dateData);
		// 获取这个日期是星期几
		let todayDay;
		let startDate;
		// 如果日历以周一开始
		if(this.startWeek == 'mon') {
			todayDay = today.getDay() || 7;
			startDate = new Date(today.getTime() - oneDayTime * (todayDay - 1));
		} else {
			todayDay = today.getDay();
			startDate = new Date(today.getTime() - oneDayTime * todayDay);
		}

		for (let i = 0; i < 7; i++) {
			let temp = new Date(startDate.getTime() + i * oneDayTime)
			let newDate = this.getDate(`${temp.getFullYear()}-${temp.getMonth() + 1}-${temp.getDate()}`)
			dateArr.push(this._createCurrentDay(newDate.fullDate, newDate, Number(newDate.date)))
		}

		return dateArr;
	}

	/**
	 * 获取当前日期详情
	 * @param {Object} date
	 */
	getInfo(date) {
		if (!date) {
			date = new Date()
		}
		const dateInfo = this.canlender.find(item => item.fullDate === this.getDate(date).fullDate)
		return dateInfo
	}

	/**
	 * 比较时间大小
	 */
	dateCompare(startDate, endDate) {
		// 计算截止时间
		startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
		// 计算详细项的截止时间
		endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
		if (startDate <= endDate) {
			return true
		} else {
			return false
		}
	}

	/**
	 * 比较时间是否相等
	 */
	dateEqual(before = '', after = '') {
		// 计算截止时间
		before = new Date(before.replace('-', '/').replace('-', '/'))
		// 计算详细项的截止时间
		after = new Date(after.replace('-', '/').replace('-', '/'))
		if (before.getTime() - after.getTime() === 0) {
			return true
		} else {
			return false
		}
	}


	/**
	 * 获取日期范围内所有日期
	 * @param {Object} begin
	 * @param {Object} end
	 */
	getDateAll(begin, end) {
		// 找出所有打点中已禁用的部分 不让其被添加在日期选择范围内
		let disableList = this.selected.filter(item => item.date && item.disable).map(item => item.date)

		var arr = []
		var ab = begin.split('-')
		var ae = end.split('-')
		var db = new Date()
		db.setFullYear(ab[0], ab[1] - 1, ab[2])
		var de = new Date()
		de.setFullYear(ae[0], ae[1] - 1, ae[2])
		var wuxDb = db.getTime() - 24 * 60 * 60 * 1000
		var wuxDe = de.getTime() - 24 * 60 * 60 * 1000
		for (var k = wuxDb; k <= wuxDe;) {
			k = k + 24 * 60 * 60 * 1000
			let fullDate = this.getDate(new Date(parseInt(k))).fullDate
			// 如果要在选择范围内截断日期
			if(this.rangeHaveDisableTruncation) {
				// 如果不在打点禁止列表中
				if (disableList.includes(fullDate)) return arr;
				arr.push(fullDate)
			} else {
				if (!disableList.includes(fullDate)) arr.push(fullDate);
			}
		}
		return arr
	}
	/**
	 * 计算阴历日期显示
	 */
	getlunar(year, month, date) {
		return CALENDAR.solar2lunar(year, month, date)
	}
	/**
	 * 设置打点
	 */
	setSelectInfo(data, value) {
		this.selected = value
		this._getWeek(data)
	}

	/**
	 *  设置范围
	 */
	setRange(fullDate) {
		let {
			before,
			after
		} = this.rangeStatus;

		// 非范围选择不再执行
		if (this.mode != 'range') return

		// 判断目前的日期 是否 比before日期小或者等于before日期 如果为true就要重置
		let reset = this.dateCompare(fullDate, before);
		// 如果日期选择范围允许为同一天 且 目前是需要重置的
		if (this.rangeSameDay && before && reset) {
			// 判断是否需要相等 如果 不相等 则 重置 如果相等 则不重置
			reset = !this.dateEqual(fullDate, before);
		}

		if ((before && after || reset) && (!this.rangeEndRepick || (this.rangeEndRepick && this.rangeStatus.data
				.indexOf(fullDate) == -1))) {
			this.rangeStatus.before = fullDate;
			this.rangeStatus.after = '';
			this.rangeStatus.data = [];
		} else {
			if (!before) {
				this.rangeStatus.before = fullDate
			} else {
				if (this.dateCompare(this.rangeStatus.before, fullDate)) {
					this.rangeStatus.data = this.getDateAll(this.rangeStatus.before, fullDate);
				} else {
					this.rangeStatus.data = this.getDateAll(fullDate, this.rangeStatus.before);
				}
				this.rangeStatus.after = this.rangeStatus.data[this.rangeStatus.data.length - 1]
			}
		}
		this._getWeek(fullDate)
	}

	/**
	 *  设置多选
	 */
	setMultiple(fullDate) {
		// 非多选不再执行
		if (this.mode != 'multiple') return
		// 检查是否已经多选
		let index = this.multiple.findIndex((item) => {
			if (this.dateEqual(fullDate, item)) {
				return item
			}
		});
		if (index === -1) {
			this.multiple.push(fullDate)
			this.setDate(fullDate)
		} else {
			this.multiple = this.multiple.filter((item, i) => i != index)
		}
		this._getWeek(fullDate)
	}

	/**
	 * 获取每周数据
	 * @param {Object} dateData
	 */
	_getWeek(dateData, useWeeks = true) {
		const {
			year,
			month
		} = this.getDate(dateData)

		let weeks = {}
		// 日历数据
		let canlender = [];

		if (this.foldStatus === 'open') {
			// 默认以周末开始
			let firstDay = new Date(year, month - 1, 1).getDay();
			// 如果以周一开始
			if(this.startWeek === 'mon') {
				firstDay = firstDay === 0 ? 6 : firstDay - 1;
			}
			let currentDay = new Date(year, month, 0).getDate()
			// 日期数据
			let dates = {
				lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
				currentMonthDys: this._currentMonthDays(currentDay, this.getDate(dateData)), // 本月天数
				weeks: []
			}
			// 下月开始几天
			const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length)
			dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData))

			// 如果仅显示当月
			if (this.monthShowCurrentMonth) {
				// 日历数据
				canlender = canlender.concat(
					dates.lastMonthDays.map(item => item = {
						empty: true,
						lunar: {},
					}),
					dates.currentMonthDys,
					dates.nextMonthDays.map(item => item = {
						empty: true,
						lunar: {},
					}),
				);
				
			} else {
				// 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
				canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays)
			}

		} else {
			canlender = this._getWeekDays(dateData)
		}

		for (let i = 0; i < canlender.length; i++) {
			if (i % 7 === 0) {
				weeks[parseInt(i / 7)] = new Array(7)
			}
			weeks[parseInt(i / 7)][i % 7] = canlender[i] || {};
		}

		if (useWeeks) {
			this.canlender = canlender
			this.weeks = weeks
		}

		return weeks
	}


	//静态方法
	// static init(date) {
	// 	if (!this.instance) {
	// 		this.instance = new Calendar(date);
	// 	}
	// 	return this.instance;
	// }
}


export default Calendar