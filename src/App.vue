<template>
  <div id="app">
    <header></header>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/index.vue";
import "../public/css/icon.css";

@Component({
  name: "App",
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 640px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
</style>
