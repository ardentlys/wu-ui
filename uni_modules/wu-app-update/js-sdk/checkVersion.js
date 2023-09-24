import config from '../config.js';
/**
 * 对比版本号，如需要，请自行修改判断规则
 * 支持比对	("3.0.0.0.0.1.0.1", "3.0.0.0.0.1")	("3.0.0.1", "3.0")	("3.1.1", "3.1.1.1") 之类的
 * @param {Object} v1
 * @param {Object} v2
 * v1 > v2 return 1
 * v1 < v2 return -1
 * v1 == v2 return 0
 */
function compare(v1 = '0', v2 = '0') {
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
}

/**
 * 检测升级 使用说明
 * 1. 通过请求获取后台返回的更新信息
 * 2. 获取后台更新信息后 和 应用本身的版本(manifest.json里的versionName)做对比。
 * 3. 如果后台版本比应用本身的版本大 且 后台本次更新的平台里含有 用户的系统环境则触发更新，否则一律不触发更新。
 */
export default function checkVersion() {
	return new Promise((resolve, reject) => {
		// #ifdef APP-PLUS
		uni.getSystemInfo({
			success: (info) => {
				// app系统环境
				let appPlatform = info.platform;
				// 获取本机版本号
				plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
					// 请补充这个请求即可正常使用
					uni.request({
						url: '',
						success: (res=>{
							res = res.data;
							if(compare(res.version, wgtinfo.version) === 1 && res.platform.indexOf(appPlatform) !== -1) {
								res.appPlatform = appPlatform;
								resolve(res);
							} else {
								reject('当前版本已经是最新的，不需要更新')
							}
						}),
						fail: (err)=>{
							reject(err);
						}
					})
				});
			}
		});
		// #endif
	})
}