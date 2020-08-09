<template>
  <div id="Home">
    <tabuse class="hom-tabuse"><div slot="tabuse-center">购物街</div></tabuse>

    <scroll class="content"
            ref="scroll"
            :probetype="3"
            @scroll="contentscroll"
            :pull-up-load="true"
            @pullingUp="loatMore">
      <home-swiper :banners="banners"/>
      <hometuijian :recommends="recommends"></hometuijian>
      <hometedian></hometedian>
      <tab-xuan-ze class="tab-xuan-ze" :tabxz="['流行','新款','精选']" @tabclick="tabclick"></tab-xuan-ze>
      <good-list :goods="ShowGoods"></good-list>
    </scroll>
    <back-top @click.native="backclick" v-show="isshowbacktop"></back-top>
  </div>
</template>

<script>

    import HomeSwiper from "./childComps/HomeSwiper";
    import Hometuijian from "./childComps/Hometuijian";
    import Hometedian from "./childComps/Hometedian";
    //
    import Tabuse from "components/common/tabuse/tabuse";
    import TabXuanZe from "components/conent/tabxuanze/TabXuanZe";
    import GoodList from "components/conent/goods/GoodList";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/conent/backtop/BackTop";
    //
    import {getHomeMultidata,getHomeGoods} from "network/home";







    export default {
        name: "Home",
      //
      components: {BackTop, Scroll, Tabuse,HomeSwiper,Hometuijian, Hometedian, TabXuanZe,GoodList},
      data(){
          return {
            banners:[],
            recommends:[],
            goods:{
              pop:{page:0,list:[]},
              new:{page:0,list:[]},
              sell:{page:0,list:[]}
            },
            currenttype:'pop',
            isshowbacktop:false
          }
      },
      computed:{
        ShowGoods(){
          return this.goods[this.currenttype].list
        }
      },
      created() {
          //1.请求多个数据
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
       methods:{
         tabclick(index){
            //console.log(index)
            switch (index) {
              case 0:
                this.currenttype='pop'
                    break
              case 1:
                this.currenttype='new'
                    break
              case 2:
                this.currenttype='sell'
                    break
            }
          },
         backclick(){
            //console.log(1);
           this.$refs.scroll.scrollTo(0, 0)
         },
         contentscroll(position){
            // console.log(position)
           (-position.y)>500?this.isshowbacktop=true:this.isshowbacktop=false
         },
         loatMore(){
           // console.log("加载更多了")
           this.getHomeGoods(this.currenttype)
         },
      //
      //     //这些是关于网络请求的方法
          getHomeMultidata(){
            getHomeMultidata().then(res=>{
              //console.log(res)
              this.banners=res.data.banner.list
              this.recommends=res.data.recommend.list
            })
          },
          getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
              //console.log(res)
              this.goods[type].list.push(...res.data.list)

              this.$refs.scroll.finishPullUp()
            })
          }
      }
    }
</script>

<style scoped>
  #Home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .hom-tabuse {
    background-color: #ff5777;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    font-size: 20px;
  }
  .tab-xuan-ze {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  /**/
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.content {*/
  /*  height: calc(100% - 60px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
</style>
