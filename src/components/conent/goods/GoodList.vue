<template>
    <div class="goods">
        <GoodListItem v-for="item in goods" :goods-item="item" ></GoodListItem>
    </div>
</template>

<script>
    import GoodListItem from "./GoodListItem";
    export default {
        name: "GoodList",
        components: {GoodListItem},
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },

    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>