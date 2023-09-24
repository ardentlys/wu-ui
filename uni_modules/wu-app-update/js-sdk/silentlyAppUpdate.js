import checkVersion from './checkVersion.js';
import config from '../config.js';

export default function silentlyAppUpdate() {
	checkVersion().then(res => {
		// 静默更新
		if (res.is_silently) {
			let dtask = plus.downloader.createDownload(res.url, {force: true}, (download, status) => {
				if (status == 200) {
					plus.runtime.install(download.filename, {
						force: false
					}, res => {
						uni.showModal({
							title: '更新提示',
							content: '新版本已就绪，请重启应用查看',
							showCancel: false,
							success: function (res) {
								if (res.confirm) {
									// 由于h5+的热更新重启存在样式错误的问题
									// 因此只能用原生的方法退出app并杀死后台
									if (res.appPlatform == 'android') {
										let main = plus.android.runtimeMainActivity();
										//  热更新之后需要杀死进程重新打开,需要引入安卓system的类来实现
										let system = plus.android.importClass('java.lang.System')
										system.exit(0);
									}else{
										plus.ios.import('UIApplication').sharedApplication().performSelector('exit');
									}
								}
							}
						});
					},  err => {
						console.log(err);
					})
				}
			});
			
			dtask.start();
		}
	})
}