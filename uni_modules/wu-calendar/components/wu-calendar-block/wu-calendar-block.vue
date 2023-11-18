<template>
	<view class="wu-calendar-block">
		<view v-if="showMonth && FoldShowMonth" class="wu-calendar__box-bg">
			<text class="wu-calendar__box-bg-text">{{month}}</text>
		</view>
		<!-- 月或周日历 -->
		<view class="wu-calendar__weeks"
			v-for="(item,weekIndex) in weeks" :key="weekIndex">
			<view class="wu-calendar__weeks-item" v-for="(weeks, weeksIndex) in item" :key="weeksIndex">
				<wu-calendar-item class="wu-calendar-item--hook" :weeks="weeks" :calendar="calendar"
					:selected="selected" :lunar="lunar" @change="choiceDate" :color="color"
					:startText="startText" :endText="endText"></wu-calendar-item>
			</view>
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
		data() {
			return {
				FoldShowMonth: false
			}
		},
		mounted() {
			this.FoldShowMonth = this.FoldStatus == 'open';
		},
		watch: {
			FoldStatus(newVal) {
				this.$nextTick(()=>{
					this.FoldShowMonth = this.FoldStatus == 'open';
				})
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
	$wu-text-color-grey: #999;
	
	.wu-calendar-block {
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
	}
</style>