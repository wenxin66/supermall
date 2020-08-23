<template>
    <div class="de-base-info"
         v-if="Object.keys(goods).length !== 0">
        <div class="de-title">{{goods.title}}</div>
        <div class="de-pice">
            <span class="de-newpice">{{goods.newPrice}}</span>
            <span class="de-oldpice">{{goods.oldPrice}}</span>
            <span class="de-discount">{{goods.discount}}</span>
        </div>
        <div class="de-shuju">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.sevices[goods.sevices.length-1].name}}</span>
        </div>
        <div class="de-service">
            <span class="de-service-item" v-for="index in goods.sevices.length-1"
                  :key="index">
                <img :src="goods.sevices[index-1].icon"/>
                <span>{{goods.sevices[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeBaseInfo",
        props:{
            goods:{
                type:Object,
                default: function () {
                    return {}
                }
            }
        },

    }
</script>

<style scoped>
    .de-base-info {
        margin: 10px 5px;
    }
    .de-title {
        color: #000000;
    }
    .de-pice {
        margin: 10px 0;
    }
    .de-newpice {
        color: #ff5777;
        font-size: 20px;
    }
    .de-oldpice {
        font-size: 12px;
        margin: 0 5px;
        text-decoration: line-through;
    }
    .de-discount {
        background-color: #ff5777;
        color: #fff;
        font-size: 12px;
        padding: 5px;
        border-radius: 8px;
        margin-top: -5px;
        /*让元素上浮一些: 使用相对定位即可*/
        position: relative;
        top: -5px;
    }
    .de-shuju {
        margin: 10px 0;
        font-size: 12px;
        border-bottom: 1px solid #D9D9D9;
        color: #C1C1C1;
        padding-bottom: 7px;
    }
    .de-shuju span:nth-child(2) {
        margin: 0 65px;
    }
    .de-service {
        display: flex;
        justify-content: space-between;
        padding: 5px 0 15px 0;
        box-shadow: 0 3px 3px rgba(100,100,100,.2);
    }
    .de-service-item img {
        width: 12px;
        height: 12px;
    }
    .de-service-item span {
        color: #333;
        font-size: 12px;
        position: relative;

    }
</style>