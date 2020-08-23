<template>
  <div id="Category">
    <tabuse class="Category-tabuse"><div slot="tabuse-center">商品分类</div></tabuse>
    <div class="dabox">
      <feng-lan class="fenglan":list="list" @getlist="getlist"></feng-lan>
      <scroll class="content"
              ref="scroll"
              :probetype="3"
              :pull-up-load="true">
<!--             @scroll="contentscroll"  @pullingUp="loatMore"-->
        <cat-data-imgs-top class="imgs-top" :category-data="categoryData"></cat-data-imgs-top>
        <tab-xuan-ze :tabxz="['综合','新品','销量']" @tabclick="tabclick"></tab-xuan-ze>
        <cat-data-imgs-bottom :arry="arry"></cat-data-imgs-bottom>
      </scroll>

    </div>

  </div>
</template>

<script>
    import Tabuse from "components/common/tabuse/tabuse";
    import FengLan from "components/conent/fenglan/FengLan";
    import Scroll from "components/common/scroll/Scroll";
    import TabXuanZe from "components/conent/tabxuanze/TabXuanZe";

    import CatDataImgsTop from "./childcat/CatDataImgsTop";
    import CatDataImgsBottom from "./childcat/CatDataImgsBottom";

    import {getfenlei} from "network/getfenlei"
    import {getshujushang, getCategoryDetail} from "network/getfenlei"

    export default {
        name: "Category",
        components:{
          CatDataImgsBottom,
          TabXuanZe,
          Scroll,
          CatDataImgsTop,
          FengLan,
          Tabuse,
          getfenlei,
          getshujushang
        },
        data(){
          return {
            list:[],
            categoryData: {
            },
            cuurentsindex: 0,
            arry: [],
            currenttype: 'pop'
          }
        },
        created() {
          //请求分类数据
          this._getfenlei()
        },
        computed: {

        },
        methods:{
          tabclick(index) {
            // console.log(index)
            switch (index) {
              case 0:
                this.currenttype = 'pop'
                break
              case 1:
                this.currenttype = 'new'
                break
              case 2:
                this.currenttype = 'sell'
                break
            }
            this._getCategoryDetail(this.currenttype)
          },
          getlist(index) {
            // console.log(index)
            this._getshujushang(index)
          },
          _getfenlei(){
            getfenlei().then(res=>{
                // console.log(res)
              this.list = res.data.category.list
               // console.log(this.list)
              // 2.初始化每个类别的子数据
              for (let i = 0; i < this.list.length; i++) {
                // console.log(this.list[0].maitKey)

                this.categoryData[i] = {
                  list: {},
                  categoryDetail: {
                    'pop': [],
                    'new': [],
                    'sell': []
                  }
                }
                // console.log(this.categoryData)
                this._getshujushang(0)
              }
            })
          },
          _getshujushang(index){

            const mailKey = this.list[index].maitKey;
            this.cuurentsindex = index
            getshujushang(mailKey).then(res=>{
              // console.log(res.data)
              this.categoryData = res.data
              this._getCategoryDetail(this.currenttype)
            })

          },
          _getCategoryDetail(type) {
            // 1.获取请求的miniWallkey

            const miniWallkey = this.list[this.cuurentsindex].miniWallkey;
            // 2.发送请求,传入miniWallkey和type
            getCategoryDetail(miniWallkey, type).then(res => {
              // 3.将获取的数据保存下来
              // console.log(res)
              this.arry = res
            })
          },
        }
    }
</script>

<style scoped>
  #Category {
    height: 100vh;
    width: 100vw;
  }
  .Category-tabuse {
    background-color: #ff5777;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    font-size: 20px;
  }
  .dabox {
    width: 100%;
    display: flex;
  }
  .content {
    height: calc(100% - 60px - 49px);
    overflow: hidden;
  }
  /*.content {*/
  /*  position: absolute;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  display: flex;*/
  /*}*/
  .fenglan {
    margin-top: 44px;
    width: 120px;
  }
  .imgs-top {
    flex: 1;
    height: 100%;
    margin-bottom: 10px;
  }
</style>
