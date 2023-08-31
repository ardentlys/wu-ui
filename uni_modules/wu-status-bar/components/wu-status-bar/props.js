export default {
    props: {
        bgColor: {
            type: String,
            default: 'transparent'
        },
		customStyle: {
			type: [Object, String],
			default: () => {
				return ''
			}
		},
		...uni.$w?.props?.statusBar
    }
}
