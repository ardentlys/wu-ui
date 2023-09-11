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
						// 静默更新后会自动重启
						uni.showLoading({
							icon: 'none',
							title: '更新完成，正在重启……',
							mask: true
						})

						setTimeout(() => {
							uni.hideLoading();
							plus.runtime.restart();
						}, 1000)
					},  err => {
						console.log(err);
					})
				}
			});
			
			dtask.start();
		}
	})
}