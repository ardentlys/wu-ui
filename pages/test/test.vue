<template>
	<view>
		<wu-action-sheet 
		ref="actionSheet"
		:actions="list" 
		title="标题"
		closeOnClickAction
		@select="select"
		@close="close">
		</wu-action-sheet>
		<button @click="open">打开ActionSheet</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [{
					name: '选项一',
					subname: "选项一描述",
					color: '#ffaa7f',
					fontSize: '20'
				}, {
					name: '选项二禁用',
					disabled: true
				}, {
					name: '开启load加载', //开启后文字不显示
					loading: true
				}]
			}
		},
		methods: {
			open() {
				this.$refs.actionSheet.open();
			},
			select(e){
				console.log('选中该项：',e);
			},
			close(){
				console.log('关闭');
			}
		}
	}
</script>