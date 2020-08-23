<template>
    <div class="de-params-info" v-if="Object.keys(paramsInfo).length !==0">
        <table class="de-rencan" v-for="(tables, index) in paramsInfo.rule.tables" :key="index">
            <tr v-for="(itemtr, indey) in tables" :key="indey">
                <td v-for="(item, indez) in itemtr" :key="indez">{{item}}</td>
            </tr>
        </table>
        <table class="de-yican">
            <tr v-for="(itemtr, index) in paramsInfo.info.set" :key="index">
                <td>{{itemtr.key}}</td>
                <td>{{itemtr.value}}</td>
            </tr>
        </table>

        <div class="info-img" v-if="paramsInfo.info.images">
            <img :src="paramsInfo.info.images[0]" alt=""/>
        </div>
    </div>

</template>

<script>
    export default {
        name: "DeParamsInfo",
        props:{
            paramsInfo:{
                type:Object,
                default: function () {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .de-params-info {
        padding: 20px 13px;
        font-size: 15px;
    }
    .de-rencan, .de-yican {
        width: 100%;
    }
    .de-rencan tr, .de-yican tr {
        display: inline-block;
        padding: 10px 0 15px 0;
        display: flex;
        border-bottom: 2px solid #F9F9F9;
    }
    .de-rencan tr td, .de-yican tr td {
       flex: 1;
    }
    .de-yican tr {
        border-bottom: 1px solid #F9F9F9;
    }
    .de-yican tr td:nth-child(2) {
         flex: 2;
     }
    .info-img img {
        width: 100%;
    }
</style>