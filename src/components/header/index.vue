<template>
  <div class="header">
    <van-nav-bar :title="title" :left-arrow="back" @click-left="goBack" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { NavBar } from "vant";
@Component({
  components: {
    [NavBar.name]: NavBar
  }
})
export default class Header extends Vue {
  private title: string = "";
  private back: boolean = false;
  @Watch("$route.meta.title")
  private onRouterTtileChanged(val: string) {
    this.setRouterName(val);
    this.dealBackStatus(val);
  }
  private created() {
    this.title = this.$route.meta.title;
    this.dealBackStatus(this.title);
  }
  private setRouterName(name: string) {
    this.title = name;
  }
  private goBack() {
    window.history.go(-1);
  }
  dealBackStatus(val: string) {
    if (val !== "首页") {
      this.back = true;
    } else {
      this.back = false;
    }
  }
}
</script>

<style lang="sass">
  .van-nav-bar
    color: #fff
    background-color: #FFFFFF
    height: 40px
  .van-nav-bar .van-icon
    color: #080808
</style>
