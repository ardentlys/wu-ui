<template>
	<view class="wu-app-update-box">
		<uni-popup ref="popup" type="center" :isMaskClick="false" @touchmove.stop.prevent>
			<view class="content_popup" :style="{backgroundColor: bgColor}">
				<!-- 关闭app -->
				<wu-icon 
					v-if="!isForceUpdata" 
					class="close" 
					name="close" 
					:color="closeIconColor"
					:size="closeIconSize"
					@click="closeUpdate"
				></wu-icon>
				<!-- 版本提示 -->
				<view class="version" :style="{color: versionColor}">v{{version}}</view>
				<!-- 背景 -->
				<image class="backgroundImg" width="100%" height="100%" src="../../img/appUploadAlertBoxBg.png"></image>
				<!-- 更新详细信息 -->
				<view class="info center">
					<text class="title" :style="{color: titleColor}">{{title}}</text>
					<!-- 更新内容 -->
					<scroll-view class="info_desc_scroll" :style="{color: contentColor}" scroll-y="true">
						<rich-text :nodes="content"></rich-text>
					</scroll-view>
				</view>
				<view class="footer" v-if="platform">
					<button v-if="downloadSuccess && !wgtInstalled" class="btn" :style="btnStyle"
						@click="installPackage" :loading="wgtInstalling" :disabled="wgtInstalling">
						{{wgtInstalling ? wgtInstallingText : downloadSuccessText}}
					</button>
					<button v-else-if="wgtInstalled && isWGT" class="btn" :style="btnStyle" @click="restart">
						{{wgtInstalledText}}
					</button>
					<!-- 更新进度 -->
					<view class="progress-box flex f-c f-y-c" :style="{color: progressTextColor}"
						v-else-if="downloading">
						<progress class="progress" :percent="downLoadPercent" :activeColor="progressColor || themeColor"
							show-info stroke-width="10" />
						<view style="width:100%;font-size: 28rpx;display: flex;justify-content: space-around;">
							<text>{{downLoadingText}}</text>
							<text>({{downloadedSize}}M/{{packageFileSize || 0}}M)</text>
						</view>
					</view>
					<!-- 选项 -->
					<view v-else class="btns flex f-x-b">
						<!-- IOS -->
						<view v-if="platform == 'ios'" class="btn confirm" :style="btnStyle" @click="jumpToAppStore">
							{{downloadBtnTextIOS}}
						</view>
						<!-- android -->
						<view v-else class="btn confirm" :style="btnStyle" @click="updataApp">
							{{downloadBtnTextAndroid}}
						</view>
					</view>
					<!-- 短期内不在提醒 -->
					<view v-if="!isForceUpdata" class="notRemind" @click="userNotRemind = !userNotRemind"
						:class="{active: userNotRemind}">
						<uni-icons :type="userNotRemind ? 'checkbox' : 'circle'" :size="notRemindIconSize"
							:color="userNotRemind ? (notRemindIconActColor || themeColor) : notRemindIconNotActColor"></uni-icons>
						<view class="remind-text"
							:style="{color: userNotRemind ? notRemindTextActColor : notRemindTextNotActColor}">
							{{intervalAlertUserUpdateDay}}日内不在提醒
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	/**
	 * wu-app-update app更新提示框
	 * @description app更新提示框，支持热更新，强制更新，普通更新，暂不更新，后台下载，更新内容展示，进度条显示，ios跳转appstore等功能。
	 * @property {String} titleColor 更新标题文字颜色(默认: #5e5e5e)。
	 * @property {String} contentColor 更新内容文字颜色(默认: #878787)。
	 * @property {String} themeColor 主题颜色。
	 * @property {String} bgColor 背景色(默认: #fff)。
	 * @property {String} versionColor 版本号字体颜色(默认: #fff)。
	 * @property {String} closeIconColor 关闭图标颜色(默认: #fff)。
	 * @property {String} closeIconSize 关闭图标大小(默认: 26)。
	 * @property {String} notRemindIconSize 短期内不更新图标大小(默认: 22)。
	 * @property {String} notRemindIconActColor 短期内不更新选中图标颜色(默认: '')。
	 * @property {String} notRemindIconNotActColor 短期内不更新未选中图标颜色(默认: #9d9d9d)。
	 * @property {String} notRemindTextActColor 短期内不更新选中文字颜色(默认: #6b6b6b)。
	 * @property {String} notRemindTextNotActColor 短期内不更新未选中文字颜色(默认: #9d9d9d)。
	 * @property {String} downloadBtnTextIOS 下载按钮ios文字(默认: 立即跳转更新)
	 * @property {String} downloadBtnTextAndroid 下载按钮Android文字(默认: 立即升级)。
	 * @property {String} downLoadingText 下载中文字提示(默认: 安装包下载中，请稍后)。
	 * @property {String} downloadSuccessText 下载完成文字提示(默认: 下载完成，立即安装)。
	 * @property {String} wgtInstallingText wgt安装中显示文字(默认: 正在安装....)。
	 * @property {Number} wgtInstalledText wgt安装完成重启显示文字(默认: 安装完毕，点击重启)。
	 * @property {Number} btnBgColor 按钮背景色(默认: '')。
	 * @property {Number} btnColor 按钮文字颜色(默认: '#fff')。
	 * @property {Number} progressColor 进度条颜色(默认: '')。
	 * @property {Number} progressTextColor 进度条文字样式(默认: #4c4c4c)。
	 * @property {Number} intervalAlertUserUpdateDay 提示用户更新的间隔时间 单位day(默认: 7)。
	 * @example 
	 */

	import uniPopup from '../uni-popup/components/uni-popup/uni-popup.vue';
	import uniIcons from '../uni-icons/components/uni-icons/uni-icons.vue';
	import config from '../../config.js';
	import checkVersion from '../../js-sdk/checkVersion.js';

	export default {
		name: 'geekAppUpdata',
		props: config.props,
		components: {
			uniPopup,
			uniIcons
		},
		data() {
			return {
				// 更新的版本号
				version: '',
				// 系统环境
				platform: '',
				// 下载链接
				url: '',
				// 跳转的应用市场列表
				storeList: [],
				// 是否wgt资源包
				isWGT: false,
				// 是否强制更新
				isForceUpdata: false,
				// 更新的标题
				title: '',
				// 更新的内容
				content: ``,

				// 下载下载状态
				downloading: '',
				// 是否下载完成
				downloadSuccess: false,
				// 下载进度
				downLoadPercent: 0,
				// 目前app已下载大小
				downloadedSize: 0,
				// app总大小
				packageFileSize: 0,

				// wgt是否安装中
				wgtInstalling: false,
				// wgt是否安装完成
				wgtInstalled: false,

				// 要安装的本地包地址
				tempFilePath: false,
				// 之前的安装的本地包地址
				installForBeforeFilePath: null,
				// 创建的下载任务
				downloadTask: null,

				// 用户上次拒绝的时间
				userLastRefuseTime: uni.getStorageSync('userLastRefuseTime'),
				// 用户是否短期内不更新
				userNotRemind: false,
			}
		},
		mounted() {
			this.init();
		},
		methods: {

			// 版本对比
			compare(v1 = '0', v2 = '0') {
				v1 = String(v1).split('.')
				v2 = String(v2).split('.')
				const minVersionLens = Math.min(v1.length, v2.length);

				let result = 0;
				for (let i = 0; i < minVersionLens; i++) {
					const curV1 = Number(v1[i])
					const curV2 = Number(v2[i])

					if (curV1 > curV2) {
						result = 1
						break;
					} else if (curV1 < curV2) {
						result = -1
						break;
					}
				}

				if (result === 0 && (v1.length !== v2.length)) {
					const v1BiggerThenv2 = v1.length > v2.length;
					const maxLensVersion = v1BiggerThenv2 ? v1 : v2;
					for (let i = minVersionLens; i < maxLensVersion.length; i++) {
						const curVersion = Number(maxLensVersion[i])
						if (curVersion > 0) {
							v1BiggerThenv2 ? result = 1 : result = -1
							break;
						}
					}
				}

				return result;
			},

			// 获取更新内容片段
			getContentHTML(content) {
				let contentArr = content.split('\n');
				return contentArr.map(item => `<p>${item}</p>`).join('\n')
			},

			// 跳转应用市场
			checkStoreScheme() {
				/**
				 * 跳转应用市场逻辑
				 * 如果本次更新设置了需要跳转的应用市场则从整个列表中筛选出来启用的应用市场
				 * 按照设置的优先级(priority)从大到小排序
				 * 并尝试跳转到所有应用市场
				 * 如果都跳转失败的话则会显示失败
				 */
				// 可以跳转的应用市场
				const canStoreList = (this.storeList || []).filter(item => item.enable)

				let openSchemePromise;
				if (canStoreList && canStoreList.length) {
					canStoreList
						.sort((cur, next) => next.priority - cur.priority)
						.map(item => item.scheme)
						.reduce((promise, cur, curIndex) => {
							openSchemePromise = (promise || (promise = Promise.reject())).catch(() => {
								return new Promise((resolve, reject) => {
									plus.runtime.openURL(cur, (err) => {
										reject(err)
									})
								})
							})
							return openSchemePromise
						}, openSchemePromise)
					return openSchemePromise
				}

				return Promise.reject()
			},

			// 初始化
			init() {
				// 如果在用户上次拒绝的时间存在
				if (this.userLastRefuseTime) {
					// 目标时间戳
					let targetTime = this.userLastRefuseTime + this.intervalAlertUserUpdateDay * 24 * 60 * 60 * 1000;
					// 现在时间戳
					let nowTime = (new Date).getTime();
					// 如果目标时间戳大于现在时间戳
					if (targetTime > nowTime) {
						// 并阻止执行
						return;
					} else {
						// 清除拒绝时间
						uni.removeStorageSync('userLastRefuseTime');
					}
				}

				// 检查版本 需要更新时才会触发回调
				checkVersion().then((res) => {
					// 非静默更新时触发
					if (!res.is_silently) {
						// 读取下载好的包的缓存
						const appDownLoadTempFilePath = uni.getStorageSync('appDownLoadTempFilePath');

						// 更新的版本号
						this.version = res.version;
						// 系统环境
						this.platform = res.appPlatform;
						// 网络下载地址
						this.url = res.url;
						// 跳转的应用市场列表
						this.storeList = res.store_list || [];
						// 更新内容 
						this.content = this.getContentHTML(res.contents);
						// 更新标题
						this.title = res.title || '发现新版本';
						// 是否强制更新
						this.isForceUpdata = res.is_mandatory;
						// 是否wgt资源包
						this.isWGT = res.type == 'wgt';

						// 如果已经有下载好的包
						if (appDownLoadTempFilePath && this.compare(this.version, uni.getStorageSync(
								'appDownLoadTempFilePathVersion')) == 0) {
							this.tempFilePath = appDownLoadTempFilePath;
							this.downloadSuccess = true;
							this.installForBeforeFilePath = appDownLoadTempFilePath;
						} else {
							uni.clearStorageSync('appDownLoadTempFilePath');
							uni.clearStorageSync('appDownLoadTempFilePathVersion');
						}

						// 打开更新提示
						this.$refs.popup.open();
					}
				})
			},

			// 下载app
			downloadPackage() {
				if (!this.downloadTask) {
					this.downloading = true;

					//下载包
					this.downloadTask = plus.downloader.createDownload(this.url, {}, (download, status) => {
						if (status == 200) {
							this.downloadSuccess = true;
							this.tempFilePath = download.filename;
							uni.setStorageSync('appDownLoadTempFilePathVersion', this.version)
							uni.setStorageSync('appDownLoadTempFilePath', this.tempFilePath);
						}
						// 清空下载进度
						this.downLoadPercent = 0;
						this.downloadedSize = 0;
						this.packageFileSize = 0;
						this.downloadTask = null;
					});

					this.downloadTask.start();

					this.downloadTask.addEventListener("statechanged", (task, status) => {
						switch (task.state) {
							case 3:
								// 更新下载进度
								this.downLoadPercent = parseInt(task.downloadedSize / task.totalSize * 100);
								this.downloadedSize = (task.downloadedSize / Math.pow(1024, 2)).toFixed(2);
								this.packageFileSize = (task.totalSize / Math.pow(1024, 2)).toFixed(2);
								break;
						}
					});
				}
			},

			// 安装app
			installPackage() {
				// wgt资源包安装
				if (this.isWGT) {
					this.wgtInstalling = true;
				}
				plus.runtime.install(this.tempFilePath, {
					force: true
				}, async res => {
					this.wgtInstalling = false;
					this.wgtInstalled = true;
				}, async err => {
					this.downloadSuccess = false;
					// 如果是安装之前的包，安装失败后删除之前的包
					if (this.installForBeforeFilePath) {
						await this.deleteSavedFile(this.installForBeforeFilePath)
						this.installForBeforeFilePath = '';
					}

					uni.showLoading({
						icon: 'none',
						title: '更新失败，请重新下载',
						mask: true
					})
				})
			},

			// 删除保存的文件
			deleteSavedFile(tempFilePath) {
				uni.removeStorageSync('appDownLoadTempFilePath')
				uni.removeSavedFile({
					tempFilePath
				})
			},

			// 保存文件
			saveFile(tempFilePath) {
				return new Promise((resolve, reject) => {
					uni.saveFile({
						tempFilePath,
						success({
							savedFilePath
						}) {
							uni.setStorageSync('appDownLoadTempFilePath', tempFilePath)
						},
						complete() {
							resolve()
						}
					})
				})
			},

			// 重启应用
			restart() {
				this.wgtInstalled = false;
				//更新完重启app
				plus.runtime.restart();
			},
			// 跳转appstore
			jumpToAppStore() {
				// 请填入appid
				plus.runtime.openURL(this.url);
			},
			// 更新用户拒绝时间
			updataUserRefuseTime() {
				// 存储用户暂不升级的时间戳
				this.userLastRefuseTime = (new Date).getTime();
				uni.setStorageSync('userLastRefuseTime', this.userLastRefuseTime);
			},
			// 关闭更新框
			closeUpdate() {
				if (this.downloading) {
					uni.showModal({
						title: '是否取消下载？',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							if (res.confirm) {
								this.downloadTask && this.downloadTask.abort();
								this.$refs.popup.close();
							}
						}
					});
				} else {
					this.$refs.popup.close();
					// 如果用户短期内不更新
					if (this.userNotRemind) {
						this.updataUserRefuseTime();
					}
				}

				if (this.downloadSuccess) {
					// 包已经下载完毕，稍后安装，将包保存在本地
					this.saveFile(this.tempFilePath)
				}
			},
			// 应用更新
			updataApp() {
				// 检查可跳转的应用市场 如果失败则走应用内更新
				this.checkStoreScheme().catch(() => {
					this.downloadPackage()
				})
			},
		},
		computed: {
			btnStyle() {
				return {
					color: this.btnColor,
					backgroundColor: this.btnBgColor || this.themeColor
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wu-app-update-box {
		:deep(.uni-popup) {
			z-index: 1000;
		}

		.bg {
			width: 100%;
		}

		.content_popup {
			width: 590rpx;
			border-radius: 10rpx;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			box-sizing: border-box;
			background-color: #FFF;
			padding-bottom: 40rpx;
			position: relative;

			.close {
				position: absolute;
				right: 15rpx;
				top: 15rpx;
				z-index: 3;
			}

			.version {
				position: absolute;
				left: 40rpx;
				top: 45rpx;
				z-index: 3;
				font-size: 75rpx;
			}

			.backgroundImg {
				width: 100.1%;
				height: 270rpx;
				position: absolute;
				top: -48rpx;
			}

			.info {
				position: relative;
				padding: 240rpx 40rpx 0;
				z-index: 2;

				.title {
					font-size: 42rpx;
				}

				.info_desc_scroll {
					margin-top: 20rpx;
					font-size: 33rpx;
					min-height: 200rpx;
					max-height: 400rpx;
					box-sizing: border-box;
					line-height: 1.3;

					p:not(:last-child) {
						margin-bottom: 12rpx;
					}
				}
			}

			.footer {
				padding: 0 30rpx;

				.progress-box {
					width: 100%;
					margin-top: 25rpx;
				}

				:deep(.progress) {
					width: 90%;
					height: 40rpx;
					margin-bottom: 5rpx;

					.uni-progress-bar {
						border-radius: 35rpx;

						.uni-progress-inner-bar {
							border-radius: 35rpx;
						}
					}
				}

				.btn {
					margin-top: 35rpx;
					height: 75rpx;
					line-height: 75rpx;
					border-radius: 14rpx;
					font-size: 34rpx;
					font-weight: 400;
					text-align: center;
					width: 100%;
				}

				.notRemind {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 15rpx;

					.remind-text {
						color: #9d9d9d;
						font-size: 30rpx;
						margin-left: 3rpx;
						transition: color 80ms linear;
					}
				}

			}
		}

		.close-img {
			width: 70rpx;
			height: 70rpx;
			z-index: 1000;
			position: absolute;
			bottom: -120rpx;
			left: calc(50% - 70rpx / 2);
		}
	}
</style>