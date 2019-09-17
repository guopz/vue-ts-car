<template>
  <div class="video-wrapper">
		<div class="box" v-for="(item,index) in list" :key="index">
			<div class="m-top">
				<p>
					<img :src="item.header" alt />
				</p>
				<p>{{ item.name }}</p>
			</div>
			<p class="u-title">{{ item.text }}</p>
			<div class="u-main">
				<video
					id="vjs_29747369_html5_api"
					:data-id="item.uid"
					class="topic-xx-video x-video j-player"
					:data-tag="item.passtime"
					width="100%"
					:poster="item.thumbnail"
					webkit-playsinline
					playsinline
					x-webkit-airplay="true"
					controls
					preload="none"
				>
					<source
						:src="item.video"
						type="video/mp4"
					/>
				</video>
			</div>
			<div class="m-bar">
				<p><van-icon name="certificate" /> <span>{{ item.comment }}</span></p>
				<p><van-icon name="like-o" /> <span>{{ item.up }}</span></p>
				<p><van-icon name="star-o" /> <span>{{ item.forward }}</span></p>
				<p><van-icon name="shrink" /> <span>{{ item.down }}</span></p>
			</div>
		</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Icon } from "vant";
import { VideoType } from "@/utils/interface";

@Component({
  components: {
    [Icon.name]: Icon
  }
})
export default class extends Vue {
  @Prop()
	private list!: any[];
}
</script>
<style lang="scss" scoped>
.video-wrapper {
	margin-bottom: 10px;
	.box {
		padding: 0 10px;
		border-bottom: 10px solid #ececec;
	}
	.m-top {
		padding: 5px 0;
		display: flex;
		align-items: center;
		img {
			width: 32px;
			height: 32px;
			border-radius: 50%;
		}
		p {
			display: inline-block;
			margin-left: 5px;
			font-size: 13px;
      color: #898989;
		}
	}
	.u-title {
		padding-bottom: 10px;
		font-size: 15px;
		text-align: left;
	}
	.m-bar {
		display: flex;
		align-items: center;
		p {
			margin: 5px 0;
			flex: 1;
			font-size: 16px;
			border-right: 1px solid rgb(235, 235, 235);
			span {
				padding-left: 5px;
				display: inline-block;
				font-size: 14px;
				line-height: 2;
				vertical-align: text-bottom;
			}
		}
	}
}
</style>