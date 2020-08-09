<template>
    <div id="tabelapp">
        <tabel>
            <tabelitems path="/Home">
                <img slot="item-icon" src="~assets/imgs/tabelbal/home.svg"/>
                <img slot="item-icon-active" src="~assets/imgs/tabelbal/home_active.svg"/>
                <div slot="item-text">首页</div>
            </tabelitems>
            <tabelitems path="/Category">
                <img slot="item-icon" src="~assets/imgs/tabelbal/category.svg"/>
                <img slot="item-icon-active" src="~assets/imgs/tabelbal/category_active.svg"/>
                <div slot="item-text">分类</div>
            </tabelitems>
            <tabelitems path="/Shopcact">
                <img slot="item-icon" src="~assets/imgs/tabelbal/shopcart.svg"/>
                <img slot="item-icon-active" src="~assets/imgs/tabelbal/shopcart_active.svg"/>
                <div slot="item-text">购物车</div>
            </tabelitems>
            <tabelitems path="/profile">
                <img slot="item-icon" src="~assets/imgs/tabelbal/profile.svg"/>
                <img slot="item-icon-active" src="~assets/imgs/tabelbal/profile_active.svg"/>
                <div slot="item-text">我的</div>
            </tabelitems>
        </tabel>
    </div>
</template>

<script>
    import Tabel from "components/common/tabel/tabel";
    import Tabelitems from "components/common/tabel/tabelitems";
    export default {
        name: "tebelapp",
        components: {Tabelitems, Tabel}
    }
</script>

<style scoped>

</style>