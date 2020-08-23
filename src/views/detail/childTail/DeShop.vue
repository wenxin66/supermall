<template>
    <div class="de-shop">
        <div class="de-logo">
            <img :src="shop.logo"/>
            <span>{{shop.name}}</span>
        </div>
        <div class="de-middle">
            <div class="de-left">
                <div class="de-sells">
                    {{shop.sells | suiji}}
                    <p>总销量</p>
                </div>
                <div class="de-goods">
                    {{shop.goodsCount}}
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="de-right">
                <table>
                    <tr v-for="(item, index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td :class="{'de-fen':item.isBetter}">{{item.score}}</td>
                        <td :class="{'de-pin':item.isBetter}">{{item.isBetter ? "高" : "低"}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="de-bottom">
            <div>进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeShop",
        props:{
            shop:{
                type:Object,
                default: function () {
                    return {}
                }
            }
        },
        filters:{
            suiji: function () {
                let value=Math.floor(Math.random()*100000);
                if (value < 10000) return value;
                return (value/10000).toFixed(1) + '万';
            }
        }

    }
</script>

<style scoped>
    .de-shop {
        padding-bottom: 10px;
        box-shadow: 0 3px 3px rgba(100,100,100,.2);
        background-color: #ffffff;
    }
    .de-logo {
        margin: 20px 3px 10px 3px;

    }
    .de-logo img {
        width: 70px;
        height: 70px;
    }
    .de-logo span {
        position: relative;
        left: 5px;
        top: -35px;
        font-size: 18px;
        color: #333333;
    }
    .de-middle {
        display: flex;
        color: #333333;
    }
    .de-left {
        flex: 1;
        display: flex;
        font-size: 15px;
        border-right: 1px solid #666666;
    }
    .de-left .de-sells {
        flex: 1;
        margin: 15px 0 10px 15px;
    }
    .de-left .de-sells p {
        margin-top: 3px;
        font-size: 13px;
    }
    .de-left .de-goods {
        flex: 1;
        margin: 15px 0 10px 15px;
    }
    .de-left .de-goods p {
        margin: 3px 0 0 -10px;
        font-size: 13px;
    }
    .de-left .de-goods {
        flex: 1;
    }
    .de-right {
        flex: 1;
        font-size: 12px;
        line-height: 20px;
        margin-left: 13px;
    }
    .de-right table tr td {
        padding: 0 3px;
    }
     td:nth-child(2) {
        color: green;
    }
     td:nth-child(3) {
        background-color: green;
        color: #fff;
         border-radius: 5px;
    }
    tr .de-fen {
        color: red;
    }
    tr .de-pin {
        background-color: red;
        color: #fff;
    }
    .de-bottom {
        margin: 15px 100px;

    }
    .de-bottom div {
        width: 110px;
        height: 20px;
        font-size: 13px;
        border-radius: 10px;
        background-color: #F3F5F9;
        line-height: 20px;
        text-align: center;

    }
</style>