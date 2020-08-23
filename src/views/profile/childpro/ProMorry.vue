<template>
    <div class="pro-morry">
        <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
        <section class="account">
            <div class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>分
                </div>
                <div class="account-info">我的积分</div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "ProMorry"
    }
</script>

<style scoped>
    .account {
        display: flex;
        box-shadow: 0 12px 0 rgba(100,100,100,.1);
        margin-bottom: 12px;
    }

    .account-item {
        width: 100%;
        background-color: #fff;
        margin-right: 1px;
        text-align: center;
    }

    .account-item:last-of-type {
        margin-right: 0;
    }

    .account-item {
        color: #666;
        font-size: 13px;
        padding: 18px;
        border-right: 1px solid #eee;
    }

    .account-item .balance {
        font-size: 24px;
        font-weight: 700;
        color: #ff5f3e;
    }

    .account-info {
        margin-top: 6px;
    }

    .order-list, .service-list {
        margin-top: 12px;
    }

</style>