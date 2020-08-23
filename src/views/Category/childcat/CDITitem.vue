<template>
    <div class="c-item">
        <div class="item">
            <a :href="item.link">
                <img class="item-img" v-lazy="item.image"/>
                <div class="item-text">{{item.title}}</div>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "CDITitem",
        props: {
            item: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .c-item {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        display: inline-block;
        padding: 10px 5px 5px;
    }
    .item {
        text-align: center;
        font-size: 12px;
        width: 100px;
        height: 100px;
    }

    .item-img {
        width: 65px;
        height: 65px;
    }

    .item-text {
        margin-top: 5px;
    }
</style>