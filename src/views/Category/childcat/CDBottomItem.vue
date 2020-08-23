<template>
    <div class="c-d-bottom-item" @click="tiaozhuang">
        <div class="item">
<!--            <a :href="item.link">-->
                <img class="item-img" v-lazy="item.img"/>
                <div class="item-title">{{item.title}}</div>
                <div class="item-price">
                    <span>￥{{item.price}}</span>
                    <img src="~assets/imgs/common/collect.svg"/>
                    <span>{{item.cfav}}</span>
                </div>
<!--            </a>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "CDBottomItem",
        props: {
            item: {
                type:Object,
                default: function () {
                    return {}
                }
            }
        },
        methods:{
            tiaozhuang(){
                this.$router.push('/detail/'+this.item.iid);
            }
        }
    }
</script>

<style scoped>
    .c-d-bottom-item {
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        display: inline-block;
        padding: 10px 5px 5px;
    }
    .item {
        text-align: center;
        font-size: 12px;
        width: 120px;
        margin: 0 20px;
    }

    .item-img {
        height: 170px;
        padding: 0 5px;
    }
    .item-title {
        width: 120px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-price {
        margin-top: 3px;
    }
    .item-price img {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin: -4px 3px;
    }
    .item-price span:nth-child(1) {
        color: #ff5777;
    }
</style>