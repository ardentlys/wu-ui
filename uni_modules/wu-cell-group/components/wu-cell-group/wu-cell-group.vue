<template>
    <view :style="[$w.addStyle(customStyle)]" :class="[customClass]" class="wwu-cell-group">
        <view v-if="title" class="wu-cell-group__title">
            <slot name="title">
				<text class="wu-cell-group__title__text">{{ title }}</text>
			</slot>
        </view>
        <view class="wu-cell-group__wrapper">
			<wu-line v-if="border"></wu-line>
            <slot />
        </view>
    </view>
</template>

<script>
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from './props.js';
	/**
	 * cellGroup  单元格
	 * @description cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/cell.html
	 * 
	 * @property {String}	title		分组标题
	 * @property {Boolean}	border		是否显示外边框 (默认 true )
	 * @property {Object}	customStyle	定义需要用到的外部样式
	 * 
	 * @event {Function} click 	点击cell列表时触发
	 * @example <wu-cell-group title="设置喜好">
	 */
	export default {
		name: 'wu-cell-group',
		mixins: [mpMixin, mixin, props],
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/wu-ui-tools/libs/css/components.scss";
	@import "@/uni_modules/wu-ui-tools/theme.scss";
	
	$wu-cell-group-title-padding: 16px 16px 8px !default;
	$wu-cell-group-title-font-size: 15px !default;
	$wu-cell-group-title-line-height: 16px !default;
	$wu-cell-group-title-color: $wu-main-color !default;

    .wu-cell-group {
		flex: 1;
		
        &__title {
            padding: $wu-cell-group-title-padding;

            &__text {
                font-size: $wu-cell-group-title-font-size;
                line-height: $wu-cell-group-title-line-height;
                color: $wu-cell-group-title-color;
            }
        }
		
		&__wrapper {
			position: relative;
		}
    }
</style>

