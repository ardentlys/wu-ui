<template>
	<view class="nav-wrap">
		<view class="nav-title">
			<wu-image src="https://wu.geeks.ink/logo.png" width="130rpx" height="145rpx"/>
			<view class="nav-info">
				<view class="nav-info__title" @tap="jumpToWx">
					<text class="nav-info__title__text">WU-UI {{version}}</text>
				</view>
				<text class="nav-slogan">多平台快速开发的UI框架</text>
			</view>
		</view>
		<text class="nav-desc">{{desc}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			desc: String,
			title: String,
		},
		data() {
			return {
				version: uni.$w.config.v
			}
		},
		methods: {
			jumpToWx() {
				// #ifdef MP-WEIXIN
				// uni.navigateToMiniProgram({
				// 	appId: 'wx3be833c4a263e0c2'
				// })
				// #endif
			}
		},
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		padding: 15px;
		position: relative;
	}

	.lang {
		position: absolute;
		top: 15px;
		right: 15px;
	}

	.nav-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.nav-info {
		margin-left: 15px;
		
		&__title {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			
			&__text {
				/* #ifndef APP-NVUE */
				display: flex;
				background: linear-gradient(to right, #5fffec 0%, #6696ff 70%);
				background-clip: text;
				color: transparent !important;
				/* #endif */
				/* #ifdef APP-NVUE */
				color: #6696ff;
				/* #endif */
				font-size: 20px;
				font-weight: 900;
				text-align: left;
            }
		}
	}

	.logo {
		width: 70px;
		height: 70px;
		/* #ifndef APP-NVUE */
		height: auto;
		/* #endif */
	}

	.nav-slogan {
		/* #ifndef APP-NVUE */
		display: flex;
		background: linear-gradient(to right, #5fffec 0%, #6696ff 70%);
		background-clip: text;
		color: transparent !important;
		/* #endif */
		/* #ifdef APP-NVUE */
		color: #6696ff;
		/* #endif */
        font-weight: 800;
		font-size: 14px;
		margin-top: 3px;
	}

	.nav-desc {
		margin-top: 10px;
		font-size: 14px;
		color: $wu-content-color;
		line-height: 20px;
	}
</style>
