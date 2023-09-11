import Color from './color';

/**
 * 转换颜色格式。
 * @param {Object} params - 参数对象。
 * @param {string} color - 输入的颜色，默认为 '#fff'。
 * @param {string} format - 需要转换的格式（支持 'rgb', 'hex', 'hsl', 'hsv', 'hwb'）。
 * @param {string} type - 转换后的类型（支持 'string', 'object', 'array', 'round'）。
 * @returns {string|Object|Array} 转换后的颜色表示。
 */
function convertFormat(color = '#fff', format = 'rgb', type = 'string') {
	let colorObj = Color(color);
	// 如果格式存在
	if (colorObj[format]) {
		// hex 无法直接转换为 除string类型外的任何类型
		// 所以转为rgb 后 获取其他类型
		if(format == 'hex' && type != 'string') format = 'rgb';
		// 类型名称
		let typeName = '';
		switch (type) {
			case 'string':
				typeName = 'toString';
				break;
			case 'object':
				typeName = 'object';
				break;
			case 'array':
				typeName = 'array';
				break;
			case 'round':
				typeName = 'round';
				break;
			default:
				throw Error('Unsupported target type:' + type)
		}
		return colorObj[format]()[typeName]();
	} else {
		throw Error('Unsupported target format: ' + format);
	}
}

/**
 * 计算两个颜色之间的渐变值。
 * @param {string} startColor - 开始的颜色，默认为黑色。
 * @param {string} endColor - 结束的颜色，默认为白色。
 * @param {number} step - 渐变的步数，默认为10。
 * @returns {Array<string>} 两个颜色之间的渐变颜色数组。
 */
function gradient(startColor = 'rgb(0, 0, 0)', endColor = 'rgb(255, 255, 255)', step = 10) {
	const startRGB = convertFormat(startColor, 'rgb', 'array') // 转换为rgb数组模式
	const startR = startRGB[0]
	const startG = startRGB[1]
	const startB = startRGB[2]

	const endRGB = convertFormat(endColor, 'rgb', 'array')
	const endR = endRGB[0]
	const endG = endRGB[1]
	const endB = endRGB[2]

	const sR = (endR - startR) / step // 总差值
	const sG = (endG - startG) / step
	const sB = (endB - startB) / step
	const colorArr = []
	for (let i = 0; i < step; i++) {
		// 计算每一步的hex值
		let hex = convertFormat(`rgb(${Math.round((sR * i + startR))},${Math.round((sG * i + startG))},${Math.round((sB
			* i + startB))})`, 'hex')
		// 确保第一个颜色值为startColor的值
		if (i === 0) hex = convertFormat(startColor, 'hex')
		// 确保最后一个颜色值为endColor的值
		if (i === step - 1) hex = convertFormat(endColor, 'hex')
		colorArr.push(hex)
	}
	return colorArr
}



export default {
	/**
	 * 格式转换。
	 */
	convertFormat,

	/**
	 * 计算两个颜色之间的渐变值。
	 */
	gradient,

	/**
	 * 增加颜色的亮度。
	 * @param {string} color - 输入的颜色。
	 * @param {number} value - 增加的亮度值（0-1）。
	 * @returns {string} 调整后的颜色。
	 */
	lighten: (color, value, format = 'rgb', type = 'string') => convertFormat(Color(color).lighten(value), format, type),

	/**
	 * 减少颜色的亮度。
	 * @param {string} color - 输入的颜色。
	 * @param {number} value - 减少的亮度值（0-1）。
	 * @returns {string} 调整后的颜色。
	 */
	darken: (color, value, format = 'rgb', type = 'string') => convertFormat(Color(color).darken(value), format, type),

	/**
	 * 增加颜色的饱和度。
	 * @param {string} color - 输入的颜色。
	 * @param {number} value - 增加的饱和度值（0-1）。
	 * @returns {string} 调整后的颜色。
	 */
	saturate: (color, value, format = 'rgb', type = 'string') => convertFormat(Color(color).saturate(value), format, type),

	/**
	 * 减少颜色的饱和度。
	 * @param {string} color - 输入的颜色。
	 * @param {number} value - 减少的饱和度值（0-1）。
	 * @returns {string} 调整后的颜色。
	 */
	desaturate: (color, value, format = 'rgb', type = 'string') => convertFormat(Color(color).desaturate(value), format, type),

	/**
	 * 旋转颜色的色相。
	 * @param {string} color - 输入的颜色。
	 * @param {number} degrees - 旋转的度数。
	 * @returns {string} 调整后的颜色。
	 */
	rotate: (color, degrees, format = 'rgb', type = 'string') => convertFormat(Color(color).rotate(degrees), format, type),

	/**
	 * 调整颜色的透明度。
	 * @param {string} color - 输入的颜色。
	 * @param {number} value - 透明度值（0-1，其中 1 是不透明）。
	 * @returns {string} 调整后的颜色。
	 */
	adjustAlpha: (color, value, format = 'rgb', type = 'string') => convertFormat(Color(color).alpha(value), format, type),

	/**
	 * 获取颜色的亮度。
	 * @param {string} color - 输入的颜色。
	 * @returns {number} 颜色的亮度值（0-1）。
	 */
	luminosity: (color, format) => Color(color).luminosity(),

	/**
	 * 判断颜色是否为暗色。
	 * @param {string} color - 输入的颜色。
	 * @returns {boolean} 如果是暗色则返回 true，否则返回 false。
	 */
	isDark: (color, format) => Color(color).isDark(),

	/**
	 * 判断颜色是否为亮色。
	 * @param {string} color - 输入的颜色。
	 * @returns {boolean} 如果是亮色则返回 true，否则返回 false。
	 */
	isLight: (color, format) => Color(color).isLight()
};