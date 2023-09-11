/**
 * uinapp 常用方法简单封装
 */
const langs = {
	"en": require('./language/en'),
	"tw": require('./language/tw'),
	"ja": require('./language/ja')
}
const deflang = uni.getStorageSync('systemdeflang') || 'zh';
export default {
	http: '', //请求的域名
	lang(txt) {
		if (deflang != 'zh') {
			if (langs[deflang] && langs[deflang][txt]) {
				return langs[deflang][txt];
			}
		}
		return txt;
	},
	/**
	 * request 发起网络请求
	 * @param {Object} e
	 */
	request(e) {
		return new Promise((callback) => {
			uni.request({
				url: this.http + e.url,
				data: e.data || {},
				method: e.method,
				header: e.header || {},
				success: function(result) {
					callback(result.data);
				},
				fail: function(err) {
					uni.showModal({
						title: this.lang('网络开小差了！'),
						content: this.lang('网络连接出错，请稍后再试')
					})
				}
			})
		})
	},
	/**
	 * 发起post请求
	 * @param {Object} e = { url 请求的url(必须)  data 请求的参数(可选) header 请求头(可选)  }
	 */
	post(e) {
		e.method = "POST";
		return new Promise((callback) => {
			this.request(e).then((result) => {
				callback(result)
			})
		})
	},
	/**
	 * 发起get请求
	 * @param {Object} e = { url 请求的url(必须)  data 请求的参数(可选) header 请求头(可选)  }
	 */
	get(e) {
		e.method = "GET";
		return new Promise((callback) => {
			this.request(e).then((result) => {
				callback(result)
			})
		})
	},
	/**
	 * toast简单提示框
	 * @param {String} title 提示的内容
	 * @param {String} icon  
	 */
	toast(title, icon) {
		uni.showToast({
			title: title || '简短提示',
			icon: icon
		})
	},
	/**
	 * loading 加载等待框
	 * @param {Object} title 提示的内容 默认 加载中...
	 * @param {Boolean} mask  是否阻止穿透  默认为false
	 */
	loading(title, mask) {
		uni.showLoading({
			title: title || this.lang('加载中...'),
			mask: mask || false
		})
	},
	/**
	 * hideloading隐藏加载等待框
	 */
	hideloading() {
		uni.hideLoading()
	},
	/**
	 * model 确认对话框
	 * @param {Object} e { title 标题  content 内容 confirmColor确认按钮的颜色 cancelText取消按钮的文字 confirmText确认按钮的文字 cancelColor确认按钮的颜色 show是否显示取消按钮 }
	 */
	model(e) {
		return new Promise((callback) => {
			uni.showModal({
				title: e.title,
				content: e.content,
				confirmColor: e.confirmColor,
				cancelText: e.cancelText,
				confirmText: e.confirmText,
				cancelColor: e.cancelColor,
				showCancel: e.show || true,
				success: function(e) {
					callback(e)
				},
				fail: function(err) {
					console.log(err)
				}
			})
		})
	},
	islogin() {
		if (!uni.getStorageSync('token')) {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		}
	},
	/**
	 * checkPhone 校验手机号码
	 * @param {Number} phone 手机号码
	 */
	checkPhone(phone) {
		return !!/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/.test(
			phone)
	},
	/**
	 * testCard 校验身份证号码
	 * @param {String} f 身份证号码
	 */
	testCard(f) {
		for (var g = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], h = ["1", "0", "X", "9", "8", "7", "6", "5",
				"4", "3", "2"
			], i = f[17], a = (f + "").substring(0, 17), b = a.split(""), c = b.length, d = 0, j = 0; j < c; j++) d += b[j] *
			g[j];
		var k = d % 11,
			n = h[k],
			m =
			/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
			.test(f);
		return !!(i === n && m)
	},
	/**
	 * testEmail 校验邮箱
	 * @param {Stirng} a 邮箱
	 */
	testEmail(a) {
		return !!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(a)
	},
	/**
	 * richtext 富文本内容处理
	 * @param {String} c 需要处理的富文本内容
	 */
	richtext(c) {
		try {
			return c = c.replace(/<img/gi, "<img style=\"max-width: 100%;\""), c = c.replace(/<video/gi,
					"<video style=\"max-width: 100%;\""), c = c.replace(/<br[^>]*\/>/gi, ""), c = c.replace(/<td[^<>]*>/ig,
					"<td style=\"padding:0px;height:auto;word-break:break-all;\">"), c = c.replace(/<td[^<>]*>\s*?<p>/ig, "<td>"), c =
				c.replace(/<th[^<>]*>\s*?<p>/ig, "<th style=\"width:0\">"), c = c.replace(/<table[^>]*>/gi,
					"<table cellpadding=\"0\" cellspacing=\"0\" max-width=\"100%\" border=\"1\" style=\"font-size:12px;max-width:100%; text-align:left;text-indent: 0em;line-height:12px;\""
				), c
		} catch (a) {
			return c
		}
	},
	/**
	 * barHeight 获取手机状态栏的高度
	 */
	barHeight() {
		try {
			return uni.getSystemInfoSync().statusBarHeight
		} catch (a) {
			return 25
		}
	}
}
