<template>
  <div class="grid-content-wrap">
    <div>
      <van-icon :class="[iconStr, iconfont]" :info="number" />
    </div>
    <div>{{msg}}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import { Icon } from "vant";
@Component({
  components: {
    [Icon.name]: Icon
  }
})
export default class extends Vue {
  @Prop()
  private iconStr!: string;
  @Prop(Number)
  private number!: number;
  @Prop(String)
  private msg!: string;
  private iconfont: string = "iconfont";
}
</script>
<style lang="scss" scoped>
.grid-content-wrap {
  font-size: 14px;
  i {
    font-size: 25px;
  }
}
</style>