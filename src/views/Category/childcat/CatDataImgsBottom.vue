<template>
    <div class="cat-data-imgs-bottom">
       <c-d-bottom-item v-for="(item, index) in arry" :key="index" :item="item"></c-d-bottom-item>
    </div>
</template>

<script>
     import CDBottomItem from "./CDBottomItem";
    export default {
        name: "CatDataImgsBottom",
        components: {CDBottomItem},
        props: {
            arry: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>