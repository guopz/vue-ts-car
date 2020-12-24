<template>
  <div>Hello</div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
  created() {
    console.log("this is Test component！");
    this.testInterface();
  }
  testInterface() {
    interface Sysconfig {
      name1: string;
      name2: string;
      func1(): string;
    }
    // 泛型
    interface Test<y> {
      <T>(args: T): T;
    }

    function myfn<T>(args: T): T {
      return args;
    }

    let myTest: Test<string> = myfn;
    // console.log(myTest);
  }
}
</script>

<style>
</style>