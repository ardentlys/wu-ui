<template>
	<view class="index">
		<wu-calendar :insert="true" @change="calendarChange"></wu-calendar>
	</view>
</template>

<script>
	export default {
		methods: {
			calendarChange(e) {
				console.log(e);
			}
		}
	}
</script>