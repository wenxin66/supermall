<template>
  <div id="profile">
    <tabuse class="pro-tabuse"><div slot="tabuse-center">小码哥商城</div></tabuse>
    <pro-deng-zu></pro-deng-zu>
    <pro-morry></pro-morry>
    <div class="pro-center">
      <pro-ge-ren-item>
        <div class="box">
          <img src="~assets/imgs/profile/message.svg"/>
          <span>我的消息</span>
        </div>
      </pro-ge-ren-item>
      <pro-ge-ren-item>
      <div class="box">
        <img src="~assets/imgs/profile/pointer.svg"/>
        <span>积分商城</span>
      </div>
    </pro-ge-ren-item>
      <pro-ge-ren-item>
        <div class="box">
          <img src="~assets/imgs/profile/vip.svg"/>
          <span>会员卡</span>
        </div>
      </pro-ge-ren-item>
    </div>
    <div class="pro-bottom">
      <pro-ge-ren-item>
        <div class="box">
          <img src="~assets/imgs/profile/shopping.svg"/>
          <span>我的购物车</span>
        </div>
      </pro-ge-ren-item>
      <pro-ge-ren-item>
        <div class="box">
          <img src="~assets/imgs/profile/pointer.svg"/>
          <span>下载购物App</span>
        </div>
      </pro-ge-ren-item>
    </div>
  </div>
</template>

<script>
    import Tabuse from "components/common/tabuse/tabuse";

    import ProDengZu from "./childpro/ProDengZu";
    import ProMorry from "./childpro/ProMorry";
    import ProGeRenItem from "./childpro/ProGeRenItem";
    export default {
        name: "profile",
        components: {ProGeRenItem, ProMorry, Tabuse,ProDengZu},
        methods: {

        }
    }
</script>

<style scoped>
  .pro-tabuse {
    color: #ffffff;
    background-color: #ff5777;
  }
  .pro-center {
    box-shadow: 0 12px 0 rgba(100,100,100,.1);
    margin-bottom: 12px;
  }
</style>
