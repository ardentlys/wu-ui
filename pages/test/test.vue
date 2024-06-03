<template>
	<view class="index">
		<wu-calendar ref="calendar" mode="multiple" :useToday="false" confirmFullDate @confirm="calendarConfirm" @monthSwitch="monthSwitch" :insert="false"></wu-calendar>
		<button @click="open">打开日历</button>
	</view>
</template>

<script>
	export default {
		methods: {
			calendarConfirm(e) {
				console.log(e);
			},
			monthSwitch(e) {
				console.log(e)
			},
            // 打开日历
            open() {
                this.$refs.calendar.open();
            }
		}
	}
</script>