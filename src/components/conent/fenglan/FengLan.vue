<template>
    <div class="feng-lan">
        <Scroll>
            <div v-for="(item,index) in list" :key="index"
                 :class="{active:index===fenindex}"
                 @click="clickitem(index)">
                <div class="feng-lan-item">{{item.title}}</div>
            </div>
        </Scroll>


    </div>
</template>

<script>
    import Scroll from "../../common/scroll/Scroll";
    export default {
        name: "FengLan",
        components: {Scroll},
        props:{
            list:Array
        },
        data(){
            return {
                fenindex:0
            }
        },
        methods:{
          clickitem(index){
              this.fenindex=index
              // console.log(this.fenindex)
              this.$emit('getlist',this.fenindex)
          }
        }
    }
</script>

<style scoped>
    .feng-lan {
        width:100px;
        background-color:#F6F6F6;
    }
    .feng-lan-item {
        width:100px;
        height:45px;

        line-height: 45px;
        text-align: center;
    }
    .feng-lan .active {
        background-color: #fff;
        color: #ff5777;
        border-left:2px solid #ff5777;
    }
</style>