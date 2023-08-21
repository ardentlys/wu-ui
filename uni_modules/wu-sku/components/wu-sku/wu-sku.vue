<template>
	<view class="wu-sku" v-if="showSkuPopup" :class="skuPopupStyleShow ? 'show' : 'hide'"
		@click="isMaskClose ? close() : ''">
		<view class="shopSpecsPopup" :class="shopSpecsPopupStyleShow ? 'show' : 'hide'" @click.stop>
			<image class="close"
				src="data:image/png;base64,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"
				@click="close">
			</image>
			<view class="content">
				<view class="info">
					<image v-if="!isUseImgSku" class="cover" :src="selectSku.logo || defaultCover" mode=""></image>
					<view class="right t-w" :class="{useImgSku: isUseImgSku}">
						<view class="price">
							<text class="uity" :style="{color: themeRGB}">￥</text>
							<text class="value" :style="{color: themeRGB}">
								{{selectSku.id ? selectSku.price : `${showAreaPrice[0]}-${showAreaPrice[1]}`}}
							</text>
						</view>
						<text class="stock" v-if="showStockNum">
							库存: {{selectSku.id ? selectSku.stock : `${showAreaStock[0]}-${showAreaStock[1]}`}}
						</text>
						<text class="actSkuStr">
							{{getSelectedSkuAttrStr}}
						</text>
					</view>
				</view>
				<view class="number">
					<text class="key">数量</text>
					<wu-number-box width="200px" integer v-model="num" :min="selectSku.stock == 0 ? 0 : 1"
						:max="selectSku.id ? selectSku.stock : showAreaStock[1]"></wu-number-box>
				</view>
				<scroll-view :style="[specsListMaxHeight]" scroll-y="true" class="specsList">
					<view class="item" v-for="(skuArr, skuArrKey) in r.result" :key="skuArrKey">
						<text class="title">{{skuArrKey}}</text>
						<view class="specsValueList">
							<view class="specs" v-for="(sku, skuKey) in skuArr" :key="skuKey" :style="[specsStyle(sku)]"
								@click="bindEvent(sku, skuArr, skuArrKey)">
								<!-- 带有图片的sku -->
								<view v-if="sku.img" class="specs_img_box">
									<!-- 禁用遮罩层 -->
									<view class="specs_img_box_mask"></view>
									<!-- 图片 -->
									<image class="specs_img_box_cover" :src="sku.img" :style="{
											borderRadius: sku.img ? '15rpx' : '10rpx'
										}">
									</image>
									<!-- 预览按钮 -->
									<view class="specs_img_box_preview" @click.stop="preview(sku.img)">
										<image class="img"
											src="data:image/png;base64,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">
										</image>
									</view>
									<!-- 文字 -->
									<text class="specs_img_box_text t-c" :style="{
										color: sku.active ? themeRGB : '#999999',
										borderBottomLeftRadius: sku.img ? '15rpx' : '10rpx',
										borderBottomRightRadius: sku.img ? '15rpx' : '10rpx',
										textDecoration: sku.discard ? 'line-through' : '',
									}">{{sku.value}}</text>
								</view>
								<!-- 普通sku -->
								<text v-else class="specs_common" :style="{
									backgroundColor: sku.active ? themeRGBA : '',
									color: sku.active ? themeRGB : '#999999',
									textDecoration: sku.discard ? 'line-through' : '',
								}">
									{{sku.value}}
								</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="btnBox">
				<view class="confirm" :style="{
						background: selectSku.id && selectSku.stock * 1 < 1 ? '#b4b4b4' : themeRGB
					}" @click="confirm">
					<text class="confirm-text">
						{{btnConfirmShowText}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入 CryptoJS 库
	import CryptoJS from "crypto-js";
	import mpMixin from '@/uni_modules/wu-ui-tools/libs/mixin/mpMixin.js';
	import mixin from '@/uni_modules/wu-ui-tools/libs/mixin/mixin.js';
	import props from "./props.js";
	/**
	 * geek-sku
	 * @description 商品sku组件。
	 * @tutorial https://wu.geeks.ink/zh-CN/components/sku.html
	 * @property {Array} data 源数据。
	 * @property {Boolean} modelValue 是否显示sku组件(默认值: false, v3显示)。
	 * @property {Boolean} value 是否显示sku组件(默认值: false, v2显示)。
	 * @property {Boolean} isMaskClose 是否可以点击遮罩层关闭(默认值: false)。
	 * @property {Boolean} isSelectMinPriceSku 是否默认选中最低价格的sku(默认值: true)。
	 * @property {Boolean} selectSkuIndex 默认选中的sku下标。
	 * @property {String} defaultCover 默认封面图，用于没有选中完整的sku时展示。
	 * @property {Number} defaultNum 默认购买商品数量。
	 * @property {Array} themeColor 主题色，需要传入一个数组长度为3的数组，分别对应rgb三个颜色的值，例如: [84, 164, 255]。
	 * @property {String} btnConfirmText 确认按钮文字(默认值: '确认')。
	 * @property {Boolean} notStockDisabled 无库存sku是否禁用(默认值: false)。
	 * @property {Object} notStockDisabledStyle 无库存sku禁用样式，notStockDisabled为true时生效(默认值: {})。
	 * @property {String} notStockText 库存不足文字，notStockDisabled为false时生效(默认值: '库存不足')。
	 * @property {String} notSelectSku 未选择完整的sku时的文字提示(默认值: '请选择完整的sku属性')。
	 * @property {Boolean} showStockNum 是否展示库存数量。
	 * @event {Function} confirm 点击确认按钮时触发的事件，会返回e， e = { sku, skuText , num }，分别对应选中的sku值 、sku属性名 、输入框内的数量。
	 * @event {Function} skuChange sku发生变化时出发的事件，如果有选中完整的sku则会返回该sku，否则会返回{}。
	 * @event {Function} close 关闭sku组件触发事件。
	 * @event {Function} open 打开sku组件触发事件。
	 * @event {Function} numChange 输入框内数量发生改变时触发事件。
	 * @example <wu-sku 
					v-model="skuShow" 
					:data="skus"
					:defaultCover="logo"
					@skuChange="skuChange"
					@confirm="buyShop"
				>
				</wu-sku>
	 */
	export default {
		name: "wu-sku",
		mixins: [mpMixin, mixin, props],
		// data() 返回的属性将会成为响应式的状态
		// 并且暴露在 `this` 上
		data() {
			return {
				// sku所有属性得可能性集合
				res: {},
				// 拼接得字符
				spliter: '\u2299',
				// 组合数据
				r: {},
				// sku属性名合集
				// 机身颜色: '深空黑色',
				// 储存容量: '128G',
				// 套装: '快充套装',
				// keys = [机身颜色, 储存容量, 套装]
				keys: [],
				// 选中的sku的副本
				selectedCache: [],
				// 选中的sku
				selectSku: {},
				// 展示的区间价格
				showAreaPrice: [0, 0],
				// 展示的区间库存
				showAreaStock: [0, 0],
				// 购买的数量
				num: 1,
				// 主题色RGB
				themeRGB: '',
				// 主题色RGBA
				themeRGBA: '',
				// 是否使用带图sku
				isUseImgSku: false,
				// 是否v3
				// #ifdef VUE3
				isV3: true,
				// #endif
				// #ifndef VUE3
				isV3: false,
				// #endif
				// 显示sku
				showSkuPopup: false,
				// 从低向上的动画显示
				shopSpecsPopupStyleShow: false,
				// 透明度消失动画, 让他关闭时看上不不那么生硬
				skuPopupStyleShow: false
			}
		},
		// methods 是一些用来更改状态与触发更新的函数
		methods: {
			/**
			 * 计算组合数据
			 */
			combineAttr(data, keys) {
				var allKeys = []
				var result = {}

				for (var i = 0; i < data.length; i++) {
					var item = data[i].sku_attrs;
					var values = [];

					for (var j = 0; j < keys.length; j++) {
						let key = keys[j];
						// 属性名
						let attr_info = this.getObjAppointAttr(item[key]);

						if (!result[key]) result[key] = [];
						if (result[key].indexOf(attr_info.value) < 0) result[key].push(item[key]);

						values.push(attr_info.value);
					}

					allKeys.push({
						path: values.join(this.spliter),
						sku: data[i].id,
						stock: data[i].stock
					})
				}

				for (let key in result) {
					let obj = {};
					result[key].forEach(item => {
						// 属性名
						let attr_info = this.getObjAppointAttr(item);
						// 如果本次的属性不存在 则 将该属性设置为空对象
						if (!obj[attr_info.name]) obj[attr_info.name] = {};
						// 本次要操作的属性 下面得赋值是为了防止已有属性被覆盖
						obj[attr_info.name].value = attr_info.value;
						obj[attr_info.name].active = false;
						obj[attr_info.name].disabled = false;
						// 如果无库存禁用
						if (this.notStockDisabled) {
							obj[attr_info.name].discard = false; // 是否废弃
						}

						// 如果该sku属性是对象则取其中的name属性
						if (Object.prototype.toString.call(item) === '[object Object]') {
							obj[attr_info.name] = {
								...obj[attr_info.name],
								...item
							};
							this.isUseImgSku = true;
						}

					})
					result[key] = obj;
				}

				return {
					result: result,
					items: allKeys
				}
			},
			getAllKeys(arr) {
				var result = []
				for (var i = 0; i < arr.length; i++) {
					result.push(arr[i].path)
				}
				return result;
			},
			/**
			 * 取得集合的所有子集「幂集」
			 arr = [1,2,3]
			
			     i = 0, ps = [[]]:
			         j = 0; j < ps.length => j < 1:
			             i=0, j=0 ps.push(ps[0].concat(arr[0])) => ps.push([].concat(1)) => [1]
			                      ps = [[], [1]]
			
			     i = 1, ps = [[], [1]] :
			         j = 0; j < ps.length => j < 2
			             i=1, j=0 ps.push(ps[0].concat(arr[1])) => ps.push([].concat(2))  => [2]
			             i=1, j=1 ps.push(ps[1].concat(arr[1])) => ps.push([1].concat(2)) => [1,2]
			                      ps = [[], [1], [2], [1,2]]
			
			     i = 2, ps = [[], [1], [2], [1,2]]
			         j = 0; j < ps.length => j < 4
			             i=2, j=0 ps.push(ps[0].concat(arr[2])) => ps.push([3])    => [3]
			             i=2, j=1 ps.push(ps[1].concat(arr[2])) => ps.push([1, 3]) => [1, 3]
			             i=2, j=2 ps.push(ps[2].concat(arr[2])) => ps.push([2, 3]) => [2, 3]
			             i=2, j=3 ps.push(ps[3].concat(arr[2])) => ps.push([2, 3]) => [1, 2, 3]
			                      ps = [[], [1], [2], [1,2], [3], [1, 3], [2, 3], [1, 2, 3]]
			 */
			powerset(arr) {
				var ps = [
					[]
				];
				for (var i = 0; i < arr.length; i++) {
					for (var j = 0, len = ps.length; j < len; j++) {
						ps.push(ps[j].concat(arr[i]));
					}
				}
				return ps;
			},
			/**
			 * 生成所有子集是否可选、库存状态 map
			 */
			buildResult(items) {
				var allKeys = this.getAllKeys(items);

				for (var i = 0; i < allKeys.length; i++) {
					var curr = allKeys[i];
					var sku = items[i].sku;
					var values = curr.split(this.spliter);
					var allSets = this.powerset(values)

					// 每个组合的子集
					for (var j = 0; j < allSets.length; j++) {
						var set = allSets[j]
						// 使用CryptoJS的MD5对原属性名加密 用来禁绝因特殊符号带来的属性名错误
						var key = CryptoJS.MD5(set.join(this.spliter)).toString();

						if (this.res[key]) {
							this.res[key].skus.push(sku)
						} else {
							this.res[key] = {
								skus: [sku]
							}
						}
					}
				}
			},
			trimSpliter(str, spliter) {
				// ⊙abc⊙ => abc
				// ⊙a⊙⊙b⊙c⊙ => a⊙b⊙c
				var reLeft = new RegExp('^' + spliter + '+', 'g');
				var reRight = new RegExp(spliter + '+$', 'g');
				var reSpliter = new RegExp(spliter + '+', 'g');
				return str.replace(reLeft, '')
					.replace(reRight, '')
					.replace(reSpliter, spliter)
			},
			/**
			 * 获取当前选中的属性
			 */
			getSelectedItem() {
				var result = [];

				let resObj = this.r.result;
				if (resObj) {
					Object.keys(resObj).forEach((key1, index) => {
						result[index] = "";
						Object.keys(resObj[key1]).forEach(key2 => {
							// 查找选中的属性
							let item = resObj[key1][key2];
							item.active ? result[index] = item.value : '';
						})
					})
				}

				return result
			},
			/**
			 * 无效属性点击
			 */
			handleDisableClick(sku, skuArrKey, index) {
				this.selectedCache[index] = sku;

				// 清空所有sku选中属性
				let resObj = this.r.result;
				Object.keys(resObj).forEach((key1, index) => {
					Object.keys(resObj[key1]).forEach(key2 => {
						// 查找选中的属性
						let item = resObj[key1][key2];
						item.active = false;
					})
				})

				// 删除无效属性的禁止状态 并 选中
				sku.active = true;
				sku.disabled = false;

				this.updateStatus(this.getSelectedItem());

				/**
				 * 恢复原来已选属性
				 * 遍历所有非当前属性行
				 *   1. 与 selectedCache 对比
				 *   2. 如果要恢复的属性存在（非 disable）且 和当前*未高亮行*已选择属性的*可组合*），高亮原来已选择的属性且更新
				 *   3. 否则什么也不做
				 */
				for (var i = 0; i < this.keys.length; i++) {
					var item = this.keys[i];
					if (item == skuArrKey) continue

					// 没有被禁用的属性 (可以被选择)
					if (this.selectedCache[i] && !this.selectedCache[i].disabled && !this.selectedCache[i].discard) {
						this.selectedCache[i].active = true;
						this.updateStatus(this.getSelectedItem())
					}
				}

			},

			/**
			 * 更新所有属性状态
			 */
			updateStatus(selected) {
				// 遍历sku属性名合集
				for (var i = 0; i < this.keys.length; i++) {
					// 如果这段看不懂将console.log的注释解开即可
					var key = this.keys[i];
					var data = this.r.result[key];
					var hasActive = !!selected[i];
					var copy = selected.slice();
					// console.log(key, '属性名合集')
					// console.log(i)
					// console.log(copy, '已选属性');
					// 遍历data所有属性
					Object.keys(data).forEach(dataKey => {
						var item = data[dataKey];
						if (selected[i] == item.value) return;
						copy[i] = item.value;
						// 加密后的属性名
						var curr = CryptoJS.MD5(this.trimSpliter(copy.join(this.spliter), this.spliter))
							.toString();
						// 从sku组合合集中找出这项
						var resCurr = this.res[curr];
						// console.log(this.res, 'sku组合合集')
						// console.log(curr, '合集加密名称')
						// console.log(this.trimSpliter(copy.join(this.spliter), this.spliter))
						// 如果存在这种组合
						if (resCurr) {
							// console.log(resCurr)
							item.disabled = false;
							// 如果sku无库存不展示 而且 当前sku属性没有被废弃
							if (this.notStockDisabled) {
								// 该属性是否无库存
								let itemNotStock = true;
								// 遍历该属性所有的合集
								// resCurr.skus是一个[],里面有合集id 可能有多个合集id
								// 每个合集id都有独一无二的信息 
								// 如果所有相关合集都没库存则说明该属性无库存 则废弃 否则 不废弃
								resCurr.skus.forEach(skuID => {
									let sku = this.r.items.filter(sku => sku.sku === skuID)[0];
									if (sku.stock > 0) itemNotStock = false;
								})
								item.discard = itemNotStock;
							}
						} else {
							// 如果无库存不展示
							if (this.notStockDisabled) {
								item.discard = false;
							}
							item.disabled = true;
							item.active = false;
						}
					})
				}

				// 获取当前选中的属性
				var result = selected.slice();
				// 如果所有属性都已选中
				if (result.every(item => item)) {
					// 将属性合成r.items中的sku名称
					let name = this.trimSpliter(result.join(this.spliter), this.spliter);
					// 查找sku
					let sku = this.r.items.find(item => item.path == name);
					// 如果找到该sku
					if (sku) {
						// 根据sku的sku属性(唯一标识，通常来说会是id)找到源数据中的匹配的那一项并选中;
						this.selectSku = JSON.parse(JSON.stringify(this.data.find(item => item.id == sku.sku)));
						// 重置数量
						this.num = Number(this.defaultNum);
					}
				} else {
					this.selectSku = {};
				}
			},
			bindEvent(sku, skuArr, skuArrKey) {
				// 如果该sku属性被废弃则直接返回
				if (sku.discard) return;

				if (!sku.active) {
					// 清空当前行的所有sku选中属性
					Object.keys(skuArr).forEach(key => {
						skuArr[key].active = false;
					})

					sku.active = true;

					// 当前选中的keys的index
					let index = this.keys.findIndex(item => item == skuArrKey);

					if (sku.disabled) {
						this.handleDisableClick(sku, skuArrKey, index);
					} else {
						this.selectedCache[index] = sku;
					}
				} else {
					sku.active = false;
					// 清空所有sku禁用状态
					let resObj = this.r.result;
					Object.keys(resObj).forEach((key1, index) => {
						Object.keys(resObj[key1]).forEach(key2 => {
							// 查找选中的属性
							let item = resObj[key1][key2];
							item.disabled = false;
						})
					})
				}

				this.updateStatus(this.getSelectedItem());
			},

			/**
			 * 选中最便宜价格的sku
			 */
			selectMinPriceSku() {
				let minPriceSku = null;
				this.data.forEach(sku => {
					// 如果为空则直接赋值
					if (minPriceSku === null) {
						minPriceSku = sku
					} else if (minPriceSku.price > sku.price) { // 如果比最小价格低 就赋值
						minPriceSku = sku
					}
				})

				for (var key in minPriceSku.sku_attrs) {
					let attr_info = this.getObjAppointAttr(minPriceSku.sku_attrs[key]);
					// 找出对应项并选中
					this.r.result[key][attr_info.name].active = true;
				}
				this.updateStatus(this.getSelectedItem());
			},

			/**
			 * 选中某项sku
			 * @param {Number} index 选中的skuIndex
			 */
			selectAppointSku(index) {
				// 视图更新后在更新选中的skuIndex
				this.$nextTick(() => {
					if (!this.data[index]) return console.error('请输入正确的sku下标');
					let sku_attrs = this.data[index].sku_attrs;
					for (var key in sku_attrs) {
						let attr_info = this.getObjAppointAttr(sku_attrs[key]);
						// 找出对应项并选中
						this.r.result[key][attr_info.name].active = true;
					}
					this.updateStatus(this.getSelectedItem());
				})
			},

			/**
			 * 找出区间数据
			 */
			findAreaData() {
				let minPrice = null;
				let maxPrice = 0;
				let minStock = null;
				let maxStock = 0;
				this.data.forEach(sku => {
					// 如果最小价格为空则直接赋值
					if (minPrice === null) {
						minPrice = sku.price;
					} else if (minPrice * 1 > sku.price * 1) { // 如果比最小价格低 就赋值
						minPrice = sku.price;
					}
					// 如果大于最大价格则赋值
					if (maxPrice < sku.price) {
						maxPrice = sku.price;
					}

					// 如果最小库存为空则直接赋值
					if (minStock === null) {
						minStock = sku.stock;
					} else if (minStock * 1 > sku.stock * 1) { // 如果比最小库存少 就赋值
						minStock = sku.stock;
					}
					// 如果大于最大库存则赋值
					if (maxStock * 1 < sku.stock * 1) {
						maxStock = sku.stock;
					}
				})
				// 赋值区间
				this.showAreaPrice = [minPrice, maxPrice];
				this.showAreaStock = [minStock, maxStock];
			},

			// 初始化
			init(data) {
				this.res = {}
				this.r = {};
				this.keys = [];
				this.selectedCache = [];
				this.isUseImgSku = false;

				// skus 长度为空则没必要往下继续进行了
				if (!data.length) return;

				// 拼接主题色
				this.joinThemColor(this.themeColor);

				// 找出sku的可选属性的标题
				for (var attr_key in data[0].sku_attrs) {
					// 如果这个属性未定义存则跳过
					if (!(attr_key in data[0].sku_attrs)) continue;
					// 如果这个属性未赋值 或 不存在 则删除该属性
					if (data[0].sku_attrs[attr_key] === null || data[0].sku_attrs[attr_key] === undefined) delete data[0]
						.sku_attrs[attr_key];
					// 否则添加属性
					else this.keys.push(attr_key);
				}

				//计算组合数据
				this.r = this.combineAttr(data, this.keys);
				
				// 生成所有子集是否可选、库存状态 map
				this.buildResult(this.r.items);

				// 找到区间数据
				this.findAreaData();

				// 如果无库存不展示 则 更新一下数据 因为有可能某个属性没有库存
				if (this.notSelectSku) {
					this.updateStatus(this.getSelectedItem());
				}

				// 如果需要选中某项sku
				if (this.selectSkuIndex !== null && this.selectSkuIndex !== undefined && this.selectSkuIndex !== '') {
					this.selectAppointSku(Number(this.selectSkuIndex));
				} else if (this.isSelectMinPriceSku) {
					// 如果需要选中默认最便宜的sku
					this.selectMinPriceSku();
				}
			},

			// 确认事件
			confirm() {
				// 如果已有选中的完整sku
				if (this.selectSku.id) {
					// 如果有库存
					if (this.selectSku.stock * 1 > 0) {
						// 按钮确认事件
						this.$emit('confirm', {
							sku: this.selectSku,
							skuText: this.getSelectedItem(),
							num: this.num * 1
						})
					}
				} else {
					uni.showToast({
						title: this.notSelectSku,
						icon: 'none',
						duration: 1500
					})
				}
			},

			// 拼接主题色
			joinThemColor(n) {
				this.themeRGB = `rgb(${n[0]}, ${n[1]}, ${n[2]})`;
				this.themeRGBA = `rgba(${n[0]}, ${n[1]}, ${n[2]}, 0.1)`;
			},

			// 关闭sku组件
			close() {
				// #ifdef VUE3
				this.$emit('update:modelValue', false);
				// #endif

				// #ifndef VUE3
				this.$emit('input', false);
				// #endif

				// #ifdef H5
				// fix by mehaotian 处理 h5 滚动穿透的问题
				document.getElementsByTagName('body')[0].style.overflow = 'visible'
				// #endif

				this.$emit('close');

				this.skuPopupStyleShow = false;
				this.shopSpecsPopupStyleShow = false;

				setTimeout(() => {
					this.showSkuPopup = false;
				}, 300)
			},

			// 打开sku组件
			open() {
				// #ifdef VUE3
				this.$emit('update:modelValue', true);
				// #endif

				// #ifndef VUE3
				this.$emit('input', true);
				// #endif

				// #ifdef H5
				// fix by mehaotian 处理 h5 滚动穿透的问题
				document.getElementsByTagName('body')[0].style.overflow = 'hidden'
				// #endif

				this.$emit('open');

				this.showSkuPopup = true;

				setTimeout(() => {
					this.skuPopupStyleShow = true;
					this.shopSpecsPopupStyleShow = true;
				})
			},

			// 重置购买数量
			resetNum() {
				this.num = Number(this.defaultNum);
			},

			// 获取对象中指定属性
			getObjAppointAttr(obj, attr = 'name') {
				// 用来储存属性中对应的值
				let value = "";
				// 如果该sku属性是对象则取其中的name属性
				if (Object.prototype.toString.call(obj) === '[object Object]') {
					value = obj[attr];
				} else {
					value = obj;
				}

				// 使用CryptoJS的MD5对原属性名加密 用来禁绝因特殊符号带来的属性名错误
				let name = CryptoJS.MD5(value).toString();

				return {
					value,
					name
				}
			},

			// 预览图片
			preview(img) {
				uni.previewImage({
					urls: [img]
				});
			},

			// specs样式
			specsStyle(sku) {
				let style = {
					borderRadius: sku.img ? '15rpx' : '10rpx'
				};
				// 选中的样式
				if (sku.active) {
					style.border = `3rpx solid ${this.themeRGB}`;
				} else if (sku.disabled) { // 禁用的样式
					style.border = `3rpx solid transparent`;
					style.background = '#f3f3f3';
				} else { // 默认状样式 或 废弃样式
					style.background = '#fff';
					style.border = `3rpx solid #e4e4e4`;
				}

				if (sku.discard) { // 废弃的样式
					style = {
						...style,
						...this.notStockDisabledStyle
					};
				}

				return style
			}
		},
		// computed 计算属性
		computed: {
			// 获取已选中的sku属性字符串
			getSelectedSkuAttrStr() {
				let attrArr = this.getSelectedItem();
				// 如果有未选中的数据
				if (attrArr.findIndex(item => !item) !== -1) {
					// 获取sku属性名
					let resultArr = Object.keys(this.r.result);
					// 未选中的sku属性名
					let noAttrNameArr = [];
					attrArr.forEach((item, index) => {
						if (!item) {
							noAttrNameArr.push(resultArr[index]);
						}
					})

					return `请选择：${noAttrNameArr.join('、')}`
				} else {
					return `已选择：${attrArr.join('，')}`
				}
				return this.getSelectedItem();
			},
			// 获取确认按钮显示文字
			btnConfirmShowText() {
				return this.selectSku.id && this.selectSku.stock * 1 < 1 ? this.notStockText : this.btnConfirmText
			},
			// 获取 specslist 最大高度
			specsListMaxHeight() {
				let style = {};
				// #ifndef APP-NVUE
				style.maxHeight = '45vh';
				// #endif
				// #ifdef APP-NVUE
				style.height = uni.getWindowInfo().screenHeight * 0.65 + 'rpx';
				// #endif

				return style
			}
		},
		// 监听
		watch: {
			data: {
				handler(n) {
					this.init(n);
				},
				deep: true
			},
			// #ifdef VUE3
			modelValue(n) {
				if(n) {
					this.open();
					this.init(this.data);
				} else {
					this.close()
				}
			},
			// #endif
			// #ifndef VUE3
			value(n) {
				if(n) {
					this.open();
					this.init(this.data);
				} else {
					this.close()
				}
			},
			// #endif
			num(n) {
				this.$emit('numChange', n);
			},
			selectSku(n) {
				this.$emit('skuChange', n);
			},
			themeColor(n) {
				this.joinThemColor(n);
			},
			selectSkuIndex(n) {
				this.selectAppointSku(Number(n));
			}
		},
		// 挂载时
		mounted() {
			// 赋值默认购买商品数量
			this.num = Number(this.defaultNum);
			this.init(this.data);
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni_modules/wu-ui-tools/libs/css/common.scss';
	@import '@/uni_modules/wu-ui-tools/libs/css/components.scss';
	@import '@/uni_modules/wu-ui-tools/libs/css/color.scss';

	.wu-sku {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 999;
		transition: all 0.3s ease;

		&.show {
			opacity: 1;
		}

		&.hide {
			opacity: 0;
		}

		.shopSpecsPopup {
			background: #FFFFFF;
			border-radius: 24rpx 24rpx 0 0;
			padding: 45rpx 30rpx 30rpx;
			position: fixed;
			box-sizing: border-box;
			left: 0;
			right: 0;
			transition: all 0.3s ease;

			&.show {
				bottom: 0%;
			}

			&.hide {
				/* #ifndef APP-NVUE */
				bottom: -100%;
				/* #endif */
				bottom: -1000px;
			}

			.close {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				top: 33rpx;
				right: 30rpx;
			}

			.content {
				bottom: 0;
			}

			.btnBox {
				background-color: #fff;
				border: none;
				margin-top: 40rpx;

				.confirm {
					border-radius: 50rpx;
					font-weight: 500;
					text-align: center;
					box-sizing: border-box;
					height: 86rpx;
					line-height: 1;
					display: flex;
					justify-content: center;
					align-items: center;

					.confirm-text {
						color: #ffffff;
						font-size: 32rpx;
					}
				}
			}

			.info {
				@include flex;

				.cover {
					width: 200rpx;
					height: 200rpx;
					flex-shrink: 0;
					margin-right: 20rpx;
					border-radius: 20rpx;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
				}

				.right {
					width: calc(100% - 220rpx);
					@include flex(column);
					flex: 1;

					&.useImgSku {
						/* #ifdef APP-NVUE */
						width: 750rpx;
						/* #endif */
						/* #ifndef APP-NVUE */
						width: 100%;
						/* #endif */

						.price {
							justify-content: center;
						}

						.stock,
						.actSkuStr {
							text-align: center;
						}
					}

					.title {
						font-size: 32rpx;
						font-weight: 500;
						color: #333333;
						margin-bottom: 20rpx;
						padding-right: 120rpx;
					}

					.price {
						margin-bottom: 20rpx;
						line-height: 1;
						@include flex(row);
						align-items: center;

						.uity,
						.value {
							font-weight: 700;
						}

						.uity {
							font-size: 34rpx;
						}

						.value {
							font-size: 44rpx;
						}
					}

					.stock {
						font-size: 30rpx;
						color: #999999;
						margin-bottom: 15rpx;
					}

					.actSkuStr {
						color: #333;
						font-size: 30rpx;
						line-height: 38rpx;
					}
				}
			}

			.number {
				margin-top: 30rpx;
				margin-bottom: 22rpx;
				@include flex;
				justify-content: space-between;

				.key {
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
				}
			}

			.specsList {
				margin-bottom: 30rpx;

				.item {
					.title {
						font-size: 32rpx;
						font-weight: 500;
						color: #333333;
						margin-bottom: 30rpx;
					}

					.specsValueList {
						@include flex;
						flex-wrap: wrap;

						.specs {
							margin-bottom: 30rpx;
							margin-right: 30rpx;

							.specs_common,
							.specs_img_box_text {
								font-size: 28rpx !important;
								font-weight: 500 !important;
							}

							&.disabled {
								.specs_img_box .specs_img_box_mask {
									position: absolute !important;
									left: 0 !important;
									right: 0 !important;
									bottom: 0 !important;
									top: 0 !important;
									background-color: rgba(0, 0, 0, 0.2) !important;
								}
							}

							&_img_box {
								position: relative;

								&_preview {
									position: absolute;
									background: rgba(0, 0, 0, 0.7);
									border-radius: 50%;
									padding: 10rpx;
									right: 8rpx;
									top: 8rpx;
									z-index: 2;

									.img {
										width: 25rpx;
										height: 25rpx;
										transform: scale(1.2);
									}
								}

								&_cover {
									width: 200rpx;
									height: 200rpx;
								}

								&_text {
									background: #302e2f;
									padding: 15rpx 20rpx;
									text-align: center;
								}
							}

							&_common {
								padding: 14rpx 40rpx;
							}
						}
					}
				}
			}
		}
	}
</style>