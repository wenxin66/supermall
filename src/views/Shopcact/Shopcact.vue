<template>
    <div id="Shopcact">
      <tabuse class="tabuse">
          <div slot="tabuse-center">购物车({{cartLength}})</div>
      </tabuse>
        <cart-list></cart-list>
        <cart-bottom-nav></cart-bottom-nav>
    </div>
</template>

<script>
    import Tabuse from "components/common/tabuse/tabuse";
    import CartList from "./childShop/CartList";
    import CartBottomNav from "./childShop/CartBottomNav";

    import { mapGetters } from 'vuex'

    export default {
        name: "Shopcact",
        components: {CartBottomNav, CartList, Tabuse},
        computed: {
            ...mapGetters(['cartLength','cartList'])
        }
    }
</script>

<style scoped>
    #Shopcact {
        height: 100vh;
    }
    .tabuse {
        background-color: #ff5777;
        color: #ffffff;
        font-size: 18px;
    }
</style>
