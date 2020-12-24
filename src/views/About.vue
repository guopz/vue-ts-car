<template>
  <div class="about">
    <!-- 免费阅读 -->
    <van-panel
      v-for="(item, index) in freeList"
      :key="index"
      :title="item.bookname"
      :desc="item.first_cate_name"
      :status="item.stat_name"
    >
      <div class="u-text">{{ item.introduction }}</div>
    </van-panel>
    <!-- 段子信息 -->
    <read-list :list="newsList"></read-list>
    <!-- 搞笑视频 -->
    <video-list :list="videoList"></video-list>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter, namespace } from "vuex-class";
import { Toast, Cell, CellGroup, Panel, Image } from "vant";

import video from "../components/video/index.vue";
import read from "../components/read/index.vue";

import { AboutQuery } from "@/utils/interface";

const aboutModule = namespace("about");
@Component({
  name: "About",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Panel.name]: Panel,
    [Image.name]: Image,
    videoList: video,
    readList: read,
  },
})
export default class About extends Vue {
  private freeList: any[] = [];
  private videoList: any[] = [];
  private newsList: any[] = [];
  @aboutModule.Action("aApiMfree") private aApiMfree: any;
  @aboutModule.Action("aApiListJoke") private aApiListJoke: any;
  @aboutModule.Action("aApiListNews") private aApiListNews: any;

  async init() {
    let { query: { type = "", name = "" } = {} } = this.$route;
    console.log('init ==>', type);
    switch (type) {
      case "meishi2":
        return this.getYuedu();
      case "dianying":
        return this.getJokeVideo();
      default:
        return this.getNews();
    }
  }
  async getJokeVideo() {
    try {
      let res = await this.aApiListJoke();
      this.videoList = res.result;
    } catch (res) {
      console.log(res);
    }
    // console.log("yuedu ==>", this.videoList);
  }
  async getYuedu() {
    try {
      let res = await this.aApiMfree();
      console.log("获取数据 ==>", res);
      this.freeList = res.data;
    } catch (res) {
      console.log(res);
    }
  }
  async getNews() {
    try {
      let res = await this.aApiListNews();
      this.newsList = res.data;
      console.log("getNews ==>", this.newsList);
    } catch (res) {
      console.log(res);
    }
  }
  async created() {
    Toast.loading({
      mask: true,
      message: "加载中...",
    });
    this.init();
  }
  mounted() {
    let { query: { type = "", name = "" } } = this.$route;
    if (!!name) {
      document.title = `${name}`;
      this.$route.meta.title = name;
    }
  }
}
</script>
<style scoped lang="scss">
.u-text {
  padding: 15px;
  margin-top: 0.08rem;
  color: #969799;
  font-size: 0.32rem;
  line-height: 0.48rem;
  text-align: left;
}
</style>