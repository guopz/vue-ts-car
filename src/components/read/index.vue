<template>
  <div class="news-wrapper">
    <div class="comment" v-for="(item,index) in list" :key="index">
      <div class="state-key" data-value="id" data-url="address" onclick="boxclick(this,53)">
        <div class="title_name clearfix">
          <span class="state-key" data-value="title">{{ item.top_commentsContent || '暂时还没想好标题' }}</span>
        </div>
        <div class="news_content">
          <div class="title_img">
            <span class="state-key" data-value="titleImg" data-format="img" data-array="images/">
              <img
                :src="item.header"
                class="imgset"
                onerror="this.src='images/default_img.png',this.onerror=null "
              />
            </span>
          </div>
          <div class="news_summary">
            <span
              class="state-key"
              data-value="summary"
            >{{ item.text }}</span>
          </div>
        </div>
        <div class="news_time">
          <span class="u-color">{{ item.username }}</span>  {{ item.passtime }}
        </div>
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
.news-wrapper {
  position: relative;
  z-index: 1;
	border-top: 1px solid #f2f2f2;
  .comment {
    background: #ffffff;
    border-bottom: 10px solid #F2F2F2;
  }
  .title_name {
    padding: 15px 10px 10px;
    border-bottom: 1px solid #dddddd;
    color: #07b074;
    font-size: 12px;
    font-weight: bold;
		text-align: left;
  }
  .news_content {
		padding: 10px;
    display: flex;
  }
  .title_img img {
    width: 140px;
    height: 112px;
  }
  .news_summary {
    padding-left: 9px;
    font-size: 12px;
		text-align: left;
  }
	.news_time {
		text-align: right;
    color: #999999;
    padding: 10px;
	}
	.u-color {
		color: #E07360;
	}
}
</style>