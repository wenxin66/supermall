<template>
    <div class="tabelitems" @click="btnclick">
        <div v-if="!isimgactive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "tabelitem",
        props:{
          path:String,
          activeColor:{
              type:String,
              default:'#FF5777'
          }
        },
        data(){
            return {
                // isimgactive:true
            }
        },
        computed:{
            isimgactive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isimgactive?{color:this.activeColor}:{}
            }
        },
        methods:{
            btnclick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tabelitems {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tabelitems img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>