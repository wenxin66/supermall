<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props:{
            probetype:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default: false
            }

        },
        data(){
            return {
                scroll:null,
                // message:'哈哈哈'
            }
        },
        mounted() {
            //1.创建BScroll 对象
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probetype,
                pullUpLoad: this.pullUpLoad
            })
            //2,监听滚动的位置
            this.scroll.on('scroll',(position)=>{
                // console.log(position);
                this.$emit('scroll',position)
            })
            // this.scroll.ScrollTo(0,0)
            //3.上拉加载更多
            this.scroll.on('pullingUp', () => {
                // console.log("加载更多了")
                this.$emit('pullingUp')
            })
        },
        methods:{
          scrollTo(x,y,time=500){
              this.scroll.scrollTo(x,y,time)
          },
          finishPullUp(){
            this.scroll.finishPullUp()
          }
        }
    }
</script>

<style scoped>

</style>