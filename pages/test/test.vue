<script setup>

</script>

<template>
	<!-- flex布局 -->
	<view class="main">
		<!-- 日历 -->
		<view class="content">
			<view>
				<wu-calendar :insert="true" :fold="true" type="week" startWeek="mon" color="#22c55e" :itemHeight="60"
					:showMonth="false" mode="multiple" @change="calendarChange"></wu-calendar>
			</view>
		</view>
	</view>
</template>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
		height: 100vh;
		overflow: auto;
	}

	.content {
		background-color: #fff;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		padding: 30rpx;
		border-radius: 10rpx;
		margin-left: auto;
		margin-right: auto;
		width: 640rpx;
	}

</style>