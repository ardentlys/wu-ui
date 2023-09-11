export default {
	// props里设置的是默认样式 使用组件时可以被覆盖
	props: {
		// 主题颜色 
		themeColor: {
			default: '#61d287',
			type: String
		},
		// 背景色
		bgColor: {
			default: '#fff',
			type: String
		},
		// 版本号字体颜色
		versionColor: {
			default: '#fff',
			type: String
		},
		// 关闭图标颜色
		closeIconColor: {
			default: "#fff",
			type: String
		},
		// 关闭图标大小
		closeIconSize: {
			default: 26,
			type: Number
		},
		// 更新标题文字颜色
		titleColor: {
			default: '#5e5e5e',
			type: String
		},
		// 更新内容文字颜色
		contentColor: {
			default: '#878787',
			type: String
		},
		// 短期内不更新图标大小
		notRemindIconSize: {
			default: 22,
			type: Number
		},
		// 短期内不更新选中图标颜色
		notRemindIconActColor: {
			default: '',
			type: String
		},
		// 短期内不更新未选中图标颜色
		notRemindIconNotActColor: {
			default: '#9d9d9d',
			type: String
		},
		// 短期内不更新选中文字颜色
		notRemindTextActColor: {
			default: '#6b6b6b',
			type: String
		},
		// 短期内不更新未选中文字颜色
		notRemindTextNotActColor: {
			default: '#9d9d9d',
			type: String
		},
		// 下载按钮ios文字
		downloadBtnTextIOS: {
			default: '立即跳转更新',
			type: String
		},
		// 下载按钮Android文字
		downloadBtnTextAndroid: {
			default: '立即升级',
			type: String
		},
		// 下载中文字提示
		downLoadingText: {
			default: '安装包下载中，请稍后',
			type: String
		},
		// 下载完成文字提示
		downloadSuccessText: {
			default: '下载完成，立即安装',
			type: String
		},
		// wgt安装中显示文字
		wgtInstallingText: {
			default: '正在安装....',
			type: String
		},
		// wgt安装完成重启显示文字
		wgtInstalledText: {
			default: '安装完毕，点击重启',
			type: String
		},
		// 按钮背景色
		btnBgColor: {
			default: '',
			type: String
		},
		// 按钮文字颜色
		btnColor: {
			default: '#fff',
			type: String
		},
		// 进度条颜色
		progressColor: {
			default: '',
			type: String
		},
		// 进度条文字样式
		progressTextColor: {
			default: '#4c4c4c',
			type: String
		},
		// 提示用户更新的间隔时间 单位day
		intervalAlertUserUpdateDay: {
			default: 7,
			type: Number
		}
	}
}