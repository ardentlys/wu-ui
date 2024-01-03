<template>
	<div>
		<view class="flex items-center ml-2">
			<view v-for="(opt, optIdx) in options" :key="optIdx" :class="optIdx === activeColor ? 'is-actived' : ''"
				class="da-dropdown-filter-item da-dropdown-tag" @click="handleRadioChange(optIdx)">
				<text class="da-dropdown-tag--text">{{ opt.label }}</text>
			</view>
		</view>
		<wu-calendar ref="calendarRef" fold :fold="false" :isHeader="true" :monthShowCurrentMonth="false"
			:rangeEndRepick="false" :rangeHaveDisableTruncation="false" :rangeSameDay="false" :selected="selected"
			showMonth clearDate color="#3c9cff" insert lunar mode="single" slideSwitchMode="vertical" startWeek="mon"
			type="month" />
	</div>
</template>

<script setup>
	import {
		onReady
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue'
	// 获取一周内的日期范围
	function getLastWeekRange() {
		return ['2023-12-13', '2023-12-19'];
	}

	// 获取一个月内的日期范围
	function getLastMonthRange() {
		return ['2023-12-13', '2024-01-13'];
	}

	// 获取本周内的日期范围
	function getCurrentWeekRange() {
		return ['2023-12-11', '2023-12-17'];
	}

	const options = [{
			label: '全部时间',
			value: []
		},
		{
			label: '一周内',
			value: getLastWeekRange()
		},
		{
			label: '一个月内',
			value: getLastMonthRange()
		},
		{
			label: '本周内',
			value: getCurrentWeekRange()
		}
	];

	const activeColor = ref(0);
	const handleRadioChange = (index) => {
		activeColor.value = index;
	};

	let selected = ref([])
	
	const calendarRef = ref(null);

	onReady(() => {
		console.log(calendarRef.value)
		setTimeout(() => {
			selected.value.push({
				date: '2023-12-18',
				info: '￥850',
				infoColor: '#6ac695',
				topInfo: '打折',
				topInfoColor: '#6ac695',
			})
		}, 1000)
	})
</script>

<style lang="scss" scoped>
	.da-dropdown-tag {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 40rpx 40rpx 40rpx 40rpx;
		padding: 12rpx 22rpx;
		opacity: 1;
		margin: 20rpx 20rpx 20rpx 0;
		overflow: hidden;
		font-size: 24rpx;
		color: var(--dropdown-text-color);
		background-color: #f5f5f5;
		border-radius: 999rpx;
		border: 1px solid transparent;

		&--text {
			position: relative;
			word-break: normal;
			white-space: nowrap;
			z-index: 1;
		}

		&.is-actived {
			color: var(--dropdown-theme-color);
			background-color: #fff;
			border: 1px solid var(--dropdown-theme-color);
			background-color: #e5efffff !important;

			&::after {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 0;
				content: '';
				background-color: var(--dropdown-theme-color);
				opacity: 0.05;
			}
		}
	}
</style>