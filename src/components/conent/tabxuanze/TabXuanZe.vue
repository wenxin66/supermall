<template>
    <div class="tab-xuan-ze">
        <div v-for="(item,index) in tabxz"
             class="tabxz-item"
             :class="{active:currentIndex===index}"
             @click="panduan(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabXuanZe",
        data(){
          return {
              currentIndex:0
          }
        },
        props:{
            tabxz:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            panduan(index){
                this.currentIndex=index
                this.$emit('tabclick',index)
            }
        }
    }
</script>

<style scoped>
    .tab-xuan-ze {
        display: flex;
        height: 40px;
        text-align: center;
        font-size: 20px;
        background-color: #ffffff;
        line-height: 40px;
        position: sticky;
    }
    .tabxz-item {
        flex: 1;

    }
    .active {
        color: #ff5777;
    }
    .active span {
        border-bottom: 3px solid var(--color-tint);
    }
    .tabxz-item span {
        /*//border-bottom: 3px solid #ff5777;*/
        padding: 5px;
    }
</style>