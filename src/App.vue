<template>
  <div id="app">
    <router-view></router-view>
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
