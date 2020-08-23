<template>
    <div class="pro-deng-zu">
        <img class="pro-rentou" src="~assets/imgs/profile/avatar.svg"/>
        <div class="da_box">
            <div class="prodz">
                <span>登录</span>/
                <span>注册</span>
            </div>
            <div class=proxx>
                <img src="~assets/imgs/profile/phone.svg"/>
                <span>暂无绑定手机号</span>
            </div>
        </div>

        <img class="pro-left" src="~assets/imgs/common/arrow-left.svg"/>
    </div>
</template>

<script>
    export default {
        name: "ProDengZu"
    }
</script>

<style scoped>

    .pro-deng-zu {
        background-color: #ff5777;
        color: #fff;
        display: flex;
        padding: 15px;
    }
    .pro-rentou {
        width: 75px;
        height: 75px;
    }
    .da_box {
        flex: 1;
        margin-top: 8px;
        padding: 5px;
        font-size: 15px;
    }
    .proxx {
        width: 150px;
        height: 40px;
        display: flex;
    }
    .proxx img {
        width: 25px;
        height: 30px;
    }
    .proxx span {
        flex: 1;
        margin-top: 5px;
    }
    .pro-left {
        width: 25px;
        height: 25px;
        margin: 20px;
    }
</style>