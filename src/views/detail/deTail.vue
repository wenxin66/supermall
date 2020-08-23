<template>
    <div class="de-tail">
        <de-nev-bab class="de-nav" @navClick="navClick" ref="nav"></de-nev-bab>
       <scroll class="content" ref="scroll"
                :probetype="3" @scroll="contentscroll">
<!--           //属性不区分大小写，传值会区分大小写，用-连接-->
           <de-swiper :top-images="TopIamges"></de-swiper>
           <de-base-info :goods="goods"></de-base-info>
           <de-shop :shop="shop"></de-shop>
           <de-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></de-goods-info>
           <de-params-info :params-info="paramsInfo" ref="paramstop"></de-params-info>
           <de-comment-info :comment-info="commentInfo" ref="commenttop"></de-comment-info>
           <de-commends :recommends="recommends" ref="recommendstop"></de-commends>
       </scroll>
        <de-bottom-bar class="bottom-bar" @addToCart="addToCart"></de-bottom-bar>
        <back-top @click.native="backclick" v-show="isshowbacktop"></back-top>
        <toast :message="message" :is-show="isShow"></toast>
    </div>
</template>

<script>
    import DeNevBab from "./childTail/DeNevBab";
    import DeSwiper from "./childTail/DeSwiper";
    import DeBaseInfo from "./childTail/DeBaseInfo";
    import DeShop from "./childTail/DeShop";
    import DeGoodsInfo from "./childTail/DeGoodsInfo";
    import DeParamsInfo from "./childTail/DeParamsInfo";
    import DeCommentInfo from "./childTail/DeCommentInfo";
    import DeCommends from "./childTail/DeCommends";
    import DeBottomBar from "./childTail/DeBottomBar";

    import {getdetail, Goods, Shop, getRecommend} from "network/detail";

    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/conent/backtop/BackTop";

    import {debouce} from "../../common/utils";
    import {backTopMixin} from "../../common/mixin";
    import Toast from "../../components/common/toast/Toast";

    export default {
        name: "deTail",
        components: {
            Toast,
            BackTop,
            DeBottomBar,
            DeCommends,
            DeCommentInfo, DeParamsInfo, DeGoodsInfo, Scroll, DeShop, DeBaseInfo, DeSwiper, DeNevBab},
        mixins: [backTopMixin],
        data() {
            return {
                iid: null,
                TopIamges:[],
                goods:{},
                shop:{},
                detailInfo:{},
                paramsInfo:{},
                commentInfo:[],
                recommends:[],
                gettop:[],
                cuurentindex:0,
                isshowbacktop:false,
                message: '',
                isShow: false
            }
        },
        created() {
            //1.保存传入的iid
            this.iid=this.$route.params.iid;

            //2.根据iid请求详情数据
            getdetail(this.iid).then(res=>{
                //1.获取顶部的图片轮播数据
                const data=res.result;
                this.TopIamges=data.itemInfo.topImages;
                // console.log(this.TopIamges)
                //2.获取商品信息
                this.goods=new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                //3.获取店铺信息
                this.shop=new Shop(data.shopInfo);
                //4.获取详情信息
                this.detailInfo = data.detailInfo
                //5.获取参数信息
                this.paramsInfo = data.itemParams
                //6.获取评论信息
                if(data.rate.cRate !== 0){
                    this.commentInfo = data.rate.list
                }
            })
            //3.获取推荐的数据
            getRecommend().then(res=>{
                this.recommends=res.data.list;
            })
            //4.给gettop赋值，并进行防抖
            this.gettops=debouce(()=>{
                this.gettop=[]
                this.gettop.push(0);
                this.gettop.push(this.$refs.paramstop.$el.offsetTop);
                this.gettop.push(this.$refs.commenttop.$el.offsetTop);
                this.gettop.push(this.$refs.recommendstop.$el.offsetTop);

            })
        },
        methods: {
            imageLoad() {
               // this.newRefresh()
                this.$refs.scroll.scroll.refresh()
                this.gettops()
            },
            navClick(index) {
                // console.log(index)
                this.$refs.scroll.scroll.scrollTo(0,-this.gettop[index],200)
            },
            contentscroll(position){
                // console.log(position)
                const positionY = -position.y
                //判断滚到了那个范围
                let length=this.gettop.length;
                for(let i=0;i<length;i++) {
                    if(this.currentIndex !== i && ((i<length-1 && positionY>=this.gettop[i] && positionY<this.gettop[i+1])||
                        (i===length-1&&positionY>=this.gettop[i]))) {
                        this.currentIndex=i;
                        // console.log(this.currentIndex)
                        this.$refs.nav.cuurindex = this.currentIndex
                    }
                }
            },
            backclick(){
                //console.log(1);
                this.$refs.scroll.scrollTo(0, 0)
            },
            contentscroll(position){
                // console.log(position)
                (-position.y)>550?this.isshowbacktop=true:this.isshowbacktop=false
            },
            addToCart() {
                const product = {}
                product.image = this.TopIamges[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.realPrice = this.goods.realPrice;
                product.iid = this.iid;
                product.conunt=0;
                // this.$store.commit('addCart',product)
                this.$store.dispatch('addCart',product).then(res => {
                    // console.log(res)
                    this.message = res
                    this.isShow = true
                    setTimeout(() => {
                        this.isShow = false
                        this.message = ''
                    },1500)
                    // console.log(this.$toast)
                    // this.$toast.methods.show(res, 3000)
                    // this.$toast.show(res,2000)
                })
            }
        }
    }
</script>

<style scoped>
    .de-tail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .de-nav {
        position: relative;
        z-index: 9;
        background-color: #ffffff;
    }
    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .bottom-bar {
        height: 49px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }

</style>