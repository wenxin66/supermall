<template>
    <div class="de-commends">
        <div class="info-header">热门推荐</div>
        <good-list :goods="recommends"></good-list>
    </div>
</template>

<script>
    import GoodList from "components/conent/goods/GoodList";
    export default {
        name: "DeCommends",
        components: {GoodList},
        props: {
            recommends:{
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .de-commends {
        padding: 5px;
    }

    .info-header {
        line-height: 40px;
        padding-left: 8px;
        font-size: 15px;
        color: #333;
    }
</style>