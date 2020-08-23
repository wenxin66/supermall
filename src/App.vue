<template>
  <div id="app">
    <keep-alive exclude="deTail">
      <router-view></router-view>
    </keep-alive>

    <tebelapp></tebelapp>
  </div>
</template>

<script>

import Tebelapp from "components/conent/tabel/tebelapp";
export default {
  name: 'App',
  components: {
    Tebelapp
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
