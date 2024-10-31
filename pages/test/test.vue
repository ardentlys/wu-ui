<template>
	<view class="index">
		<wu-calendar :insert="true" @change="calendarChange" :itemHeight="70" monthShowCurrentMonth @monthSwitch="monthSwitch"></wu-calendar>
	</view>
</template>

<script>
	export default {
		methods: {
			calendarChange(e) {
				console.log(e);
			},
			monthSwitch(e) {
				console.log(e)
			}
		}
	}
</script>