<template>
	<view class="sku">
		<wu-sku ref="sku" v-model="skuShow" :data="skus" :themeColor="[226, 35, 26]"
			defaultCover="https://mp-16389c52-85e7-413f-b566-3da08e2fe054.cdn.bspapp.com/img/sku-test/default.jpeg"
			:btnConfirmText="btnConfirmText" :notSelectSku="notSelectSku" :notStockText="notStockText"
			:defaultNum="defaultNum" :isMaskClose="isMaskClose" :isSelectMinPriceSku="isSelectMinPriceSku"
			:notStockDisabled="notStockDisabled" :showStockNum="showStockNum" @skuChange="skuChange"
			:selectSkuIndex="selectSkuIndex"
			@confirm="skuConfirm">
		</wu-sku>
		<button class="btn" @click="skuShow = true">打开SKU组件</button>
		<view class="config">
			<view class="title">
				<text class="text">参数配置</text>
			</view>
			<view class="select">
				<text class="lable">
					模式
				</text>
				<view class="list">
					<radio-group @change="modeRadioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in modeSelectList"
							:key="item.value">
							<view class="item">
								<radio :value="item.value" :checked="item.value === modeSelectValue" />
								<text class="text">{{item.name}}</text>
							</view>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="input">
				<text class="lable">
					确认按钮文字
				</text>
				<input type="text" v-model="btnConfirmText" @blur="skuShow = true">
			</view>
			<view class="input">
				<text class="lable">
					库存不足文字
				</text>
				<input type="text" v-model="notStockText" @blur="skuShow = true">
			</view>
			<view class="input">
				<text class="lable">
					未选择完整的sku时的文字提示
				</text>
				<input type="text" v-model="notSelectSku" @blur="skuShow = true">
			</view>
			<view class="input">
				<text class="lable">
					默认选中的sku下标
				</text>
				<input type="text" v-model="selectSkuIndex" @blur="skuShow = true">
			</view>
			<view class="input">
				<text class="lable">
					默认显示的购买商品数量
				</text>
				<input type="text" v-model="defaultNum">
			</view>
			<view class="switch">
				<text class="lable">
					点击遮罩层关闭
				</text>
				<switch @change="e=>isMaskClose = e.detail.value" />
			</view>
			<view class="switch">
				<text class="lable">
					默认选中最低价格sku
				</text>
				<switch checked="" @change="e=>isSelectMinPriceSku = e.detail.value" />
			</view>
			<view class="switch">
				<text class="lable">
					无库存sku禁用
				</text>
				<switch @change="e=>notStockDisabled = e.detail.value" />
			</view>
			<view class="switch">
				<text class="lable">
					是否展示库存
				</text>
				<switch checked @change="e=>showStockNum = e.detail.value" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modeSelectList: [
					{
						value: 'commonSku',
						name: '普通sku',
					},
					{
						value: 'imgSku',
						name: '带图sku',
					},
				],
				modeSelectValue: 'commonSku',
				skuShow: false,
				skus: [{
						id: 1,
						price: 7000,
						stock: 30,
						sku_attrs: {
							'机身颜色': '深空黑色',
							'储存容量': '128G',
							'套装': '快充套装'
						}
					},
					{
						id: 2,
						price: 8500,
						stock: 10,
						sku_attrs: {
							'机身颜色': '暗紫色',
							'储存容量': '256G',
							'套装': '快充套装'
						}
					},
					{
						id: 3,
						price: 9500,
						stock: 0,
						sku_attrs: {
							'机身颜色': '暗紫色',
							'储存容量': '512G',
							'套装': 'AirPods套装'
						}
					},
					{
						id: 4,
						price: 9200,
						stock: 60,
						sku_attrs: {
							'机身颜色': '银色',
							'储存容量': '512G',
							'套装': 'AirPods套装'
						}
					},
					{
						id: 5,
						price: 9200,
						stock: 80,
						sku_attrs: {
							'机身颜色': '金色',
							'储存容量': '512G',
							'套装': 'AirPods3套装'
						}
					}
				],
				btnConfirmText: '立即购买',
				notSelectSku: '请选择完整的商品信息',
				notStockText: '库存不足',
				defaultNum: 1,
				selectSkuIndex: '',
				isMaskClose: false,
				isSelectMinPriceSku: true,
				notStockDisabled: false,
				showStockNum: true
			}
		},
		methods: {
			// 更换模式事件
			modeRadioChange(e) {
				this.modeSelectValue = e.detail.value;
				switch (this.modeSelectValue) {
					case 'imgSku':
						this.skus = [{
								id: 1,
								price: 7000,
								stock: 30,
								sku_attrs: {
									'机身颜色': {
										name: '深空黑色',
										img: 'https://mp-16389c52-85e7-413f-b566-3da08e2fe054.cdn.bspapp.com/img/sku-test/heise.jpeg',
									},
									'储存容量': '128G',
									'套装': '快充套装'
								}
							},
							{
								id: 2,
								price: 8500,
								stock: 10,
								sku_attrs: {
									'机身颜色': {
										name: '暗紫色',
										img: 'https://mp-16389c52-85e7-413f-b566-3da08e2fe054.cdn.bspapp.com/img/sku-test/anyezi.jpeg',
									},
									'储存容量': '256G',
									'套装': '快充套装'
								}
							},
							{
								id: 3,
								price: 9500,
								stock: 0,
								sku_attrs: {
									'机身颜色': {
										name: '暗紫色',
										img: 'https://mp-16389c52-85e7-413f-b566-3da08e2fe054.cdn.bspapp.com/img/sku-test/anyezi.jpeg',
									},
									'储存容量': '512G',
									'套装': 'AirPods套装'
								}
							},
							{
								id: 4,
								price: 9200,
								stock: 60,
								sku_attrs: {
									'机身颜色': {
										name: '银色',
										img: 'https://mp-16389c52-85e7-413f-b566-3da08e2fe054.cdn.bspapp.com/img/sku-test/baise.jpeg',
									},
									'储存容量': '512G',
									'套装': 'AirPods套装'
								}
							},
							{
								id: 5,
								price: 9200,
								stock: 80,
								sku_attrs: {
									'机身颜色': {
										name: '金色',
										img: 'https://mp-16389c52-85e7-413f-b566-3da08e2fe054.cdn.bspapp.com/img/sku-test/jinse.jpeg',
									},
									'储存容量': '512G',
									'套装': 'AirPods3套装'
								}
							}]
						break;
					case 'commonSku':
						this.skus = [{
								id: 1,
								price: 7000,
								stock: 30,
								sku_attrs: {
									'机身颜色': '深空黑色',
									'储存容量': '128G',
									'套装': '快充套装'
								}
							},
							{
								id: 2,
								price: 8500,
								stock: 10,
								sku_attrs: {
									'机身颜色': '暗紫色',
									'储存容量': '256G',
									'套装': '快充套装'
								}
							},
							{
								id: 3,
								price: 9500,
								stock: 0,
								sku_attrs: {
									'机身颜色': '暗紫色',
									'储存容量': '512G',
									'套装': 'AirPods套装'
								}
							},
							{
								id: 4,
								price: 9200,
								stock: 60,
								sku_attrs: {
									'机身颜色': '银色',
									'储存容量': '512G',
									'套装': 'AirPods套装'
								}
							},
							{
								id: 5,
								price: 9200,
								stock: 80,
								sku_attrs: {
									'机身颜色': '金色',
									'储存容量': '512G',
									'套装': 'AirPods3套装'
								}
							}
						]
						break;
				}
				this.skuShow = true;
			},
			// sku发生改变事件, 选择完整的sku则回返回 否则sku的值为{}
			skuChange(sku) {
				console.log(sku);
			},
			// sku确认事件
			skuConfirm(e) {
				console.log(e);
			}
		},
		computed: {
			dataChange() {
				const {
					defaultNum,
					isMaskClose,
					isSelectMinPriceSku,
					notStockDisabled,
					showStockNum
				} = this;
				return {
					defaultNum,
					isMaskClose,
					isSelectMinPriceSku,
					notStockDisabled,
					showStockNum
				}
			}
		},
		watch: {
			dataChange: {
				handler(newValue, oldValue) {
					this.skuShow = true;
					this.selectSkuIndex = '';
				},
				deep: true
			},
			notStockText(n) {
				if(!this.notStockDisabled) {
					this.selectSkuIndex = 2;
				}
			},
			btnConfirmText(n) {
				this.selectSkuIndex = '';
			},
			notSelectSku(n) {
				this.selectSkuIndex = '';
			}
		}
	}
</script>

<style scoped lang="scss">
	.sku {
		padding: 20rpx 36rpx 30rpx;

		.config {
			.title {
				margin: 50rpx 0;
				text-align: center;

				.text {
					text-align: center;
					font-weight: bold;
					font-size: 35rpx;
				}
			}

			.lable {
				font-size: 30rpx;
			}

			.select {
				display: flex;
				margin-bottom: 20rpx;

				.lable {
					margin-right: 60rpx;
					margin-top: 25rpx;
					min-width: 130rpx;
				}

				.item {
					margin-bottom: 10rpx;

					.text {
						font-size: 32rpx;
						margin-left: 3rpx;
					}
				}
			}

			.input {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 25rpx;

				.lable {
					width: 350rpx;
					margin-right: 25rpx;
				}

				input {
					border: 1rpx solid #c1c1c1;
					border-radius: 7rpx;
					padding: 7rpx 35rpx;
					font-size: 28rpx;
					width: 260rpx;
				}
			}

			.switch {
				display: flex;
				align-items: center;
				margin-bottom: 25rpx;

				.lable {
					width: 330rpx;
					margin-right: 25rpx;
				}
			}
		}
	}
</style>