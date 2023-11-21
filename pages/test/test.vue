<template>
	<view class="index">
		<wu-calendar :date="date" :type="type" :mode="mode" :color="color" :insert="insert" :fold="fold"
			:startWeek="startWeek" :slideSwitchMode="slideSwitchMode" :startDate="startDate" :endDate="endDate"
			:monthShowCurrentMonth="monthShowCurrentMonth" :lunar="lunar" :rangeEndRepick="rangeEndRepick"
			:rangeSameDay="rangeSameDay" :showMonth="showMonth" :selected="selected"
			@change="calendarChange"></wu-calendar>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				date: ['2023-11-21'],
				type: "month",
				mode: "range",
				color: "#3c9cff",
				insert: true,
				fold: false,
				startWeek: "sun",
				slideSwitchMode: "horizontal",
				startDate: "2023-01-01",
				endDate: "2025-01-01",
				monthShowCurrentMonth: false,
				lunar: false,
				rangeEndRepick: false,
				rangeSameDay: true,
				showMonth: true,
				selected: [{
					date: '2023-11-22',
					// badge: true,
					disable: true,
					info: '￥850',
					infoColor: '#6ac695',
					topInfo: '打折',
					topInfoColor: '#6ac695',
				}]
			}
		},
		methods: {
			calendarChange(e) {
				// console.log(e);
			}
		}
	}
</script>