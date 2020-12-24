<template>
  <div class="home">
    <div class="header">
      <swiper :imgs="swiperImgsData"></swiper>
    </div>
    <div class="body">
      <div class="skeleton" v-show="skeletonShow">
        <van-skeleton :row="3" row-width="160" />
        <van-skeleton :row="3" row-width="160" />
        <van-skeleton :row="3" row-width="160" />
      </div>
      <van-grid :border="false" :column-num="3" v-show="!skeletonShow">
        <van-grid-item v-for="(item, index) in gridItems" :key="index">
          <div @click="toGoDetail(item)">
            <grid-content :iconStr="'percy-icon-'+item.icon" :msg="item.name" :number="item.inform"></grid-content>
          </div>
        </van-grid-item>
      </van-grid>
      <test></test>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter, namespace } from "vuex-class";
import {
  Toast,
  Row,
  Col,
  Icon,
  Skeleton,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Dialog
} from "vant";
import GridContent from "@/layout/GridContent.vue";
import Swiper from "@/components/swiper/index.vue";
import { SwiperType, HomeQuery } from "@/utils/interface";
import Test from './Test.vue';

const homeModule = namespace('home');
@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [Skeleton.name]: Skeleton,
    [GridItem.name]: GridItem,
    GridContent,
    Swiper,
    Test
  }
})
export default class extends Vue {
  private skeletonShow: boolean = true;
  private swiperImgsData = [];
  private gridItems = null;

  @homeModule.Action("swiperImgs") private actionSwiperImgs: any;
  @homeModule.Action("getGridItems") private actionGridItems: any;
  @homeModule.Getter("swiperImgs") private getterSwiperImgs: any;

  // @homeModule.Action getGridItems: any

  async getSwipers() {
    if (this.getterSwiperImgs.length === 0) {
      try {
        await this.actionSwiperImgs({ type: 1 } as SwiperType); // 传参时进行类型检查
        this.swiperImgsData = this.getterSwiperImgs;
      } catch (e) {
        console.log(e);
      }
    } else {
      // console.log("VUEX内获取图片信息！");
      this.swiperImgsData = this.getterSwiperImgs;
    }
  }
  async getLists() {
    try {
      let res = await this.actionGridItems();
      // console.log("Request当前List信息 ==>", res);
      this.gridItems = res;
    } catch (e) {
      console.log(e);
    }
  }
  async skeletonNotShow() {
    this.skeletonShow = false;

    if (
      Object.prototype.toString.call(this.getterSwiperImgs) ===
      "[object String]"
    ) {
      Toast.fail(this.getterSwiperImgs);
    }
  }
  created() {
    this.testTytpe();
    this.getSwipers();
    this.getLists();
    setTimeout(this.skeletonNotShow, 1000); // api获取首页数据
    // console.log('gather ==>', this.getGridItems().then((res:any) => console.log(res)));
  }
  // Dialog 提示跳转
  toGoDetail(_params: HomeQuery) {
    console.log("toGoDetail ==>", _params);
    Dialog.confirm({
      title: _params.name,
      message: `${_params.name}(${_params.icon})离开？`
    })
      .then(() => {
        // on confirm
        this.$router.push({ path: "/detail", query: { type: _params.icon, name:  _params.name } });
      })
      .catch(() => {
        // on cancel
      });
  }
  testTytpe(): void {
    // 枚举
    enum Code { age, name, sex };
    // 接口
    interface type {
      key: number,
      label?: string,
      readonly age: number,
      [propName: string]: any
    }
    let typeFn = (a: type) => {
      // console.log(a.key);
    }
    typeFn({key: 1, age:23, count: '23'});
    
    let obj:type = {
      key: 1,
      age: 2
    }
    // console.log(obj);
    // 函数
    function buildName(firstName: string, ...prams: number[]) {
      return firstName + " " + prams.join(" ");
    }
    buildName('潇洒', 1, 3, 4);
  }
}
</script>
<style scoped lang="scss">
.header-swipe {
  margin-bottom: 10px;
  img {
    width: 100%;
    display: block;
    height: 240px;
  }
}
.body {
  i {
    display: block;
    font-size: 23px; // grid中icon和字体大小
  }
}
.top-group {
  margin-bottom: 15px;
}
.title-left {
  margin-right: 190px;
  span {
    width: 200px;
  }
}
.skeleton {
  .van-skeleton {
    display: inline-block;
    width: 50px;
    margin: 0px 22px;
    .van-skeleton__content {
      width: 50px;
    }
    .van-skeleton__row {
      height: 50px;
      margin: 17px 0px;
    }
  }
}
</style>