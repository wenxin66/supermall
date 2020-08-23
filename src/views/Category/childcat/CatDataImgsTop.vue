<template>
    <div class="cat-data-imgs-top">
<!--        {{categoryData}}-->
        <c-d-i-titem v-for="item in categoryData.list" :item="item"></c-d-i-titem>
    </div>
</template>

<script>
    import CDITitem from "./CDITitem";
    export default {
        name: "CatDataImgsTop",
        components: {CDITitem},
        props: {
            categoryData: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .cat-data-imgs-top {
        margin-top: 49px;
    }
</style>