<template>
    <div>
        <tabuse>
            <div slot="tabuse-left" @click="backClick">
                <img src="~assets/imgs/common/back.svg"/>
            </div>
            <div slot="tabuse-center" class="title">
                <div v-for="(item,index) in titles"
                     class="titleitem"
                     :class="{active:index===cuurindex}"
                     @click="titleClick(index)">{{item}}</div>
            </div>
        </tabuse>
    </div>
</template>

<script>
    import Tabuse from "components/common/tabuse/tabuse";
    export default {
        name: "DeNevBab",
        components: {Tabuse},
        data() {
            return {
                titles:['商品','参数','评论','推荐'],
                cuurindex:0
            }
        },
        methods:{
            titleClick(index) {
                this.cuurindex=index;
                this.$emit('navClick',index)
            },
            backClick() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
    }
    .titleitem {
        flex: 1;
    }
    .active {
        color: #ff5777;
    }
    img {
        margin-top: 10px;
    }
</style>