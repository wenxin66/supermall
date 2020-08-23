<template>
    <div class="cart-bottom-nav">
        <div class="content">
            <chick-button class="chick"
                          :isimage="imageAll"
                          @click.native="imageAllClick"></chick-button>
            <span>全选</span>
        </div>
        <div class="heji">
            合计:{{heji}}
        </div>
        <div class="jisuan">
            去计算({{jisuan}})
        </div>
    </div>
</template>

<script>
    import ChickButton from "components/conent/chickButton/ChickButton";
    export default {
        name: "CartBottomNav",
        components: {ChickButton},
        computed: {
            heji() {
                return '￥' + this.$store.state.cartList.filter(item => item.chacked === true).reduce((preValue, item) =>{
                    return preValue + item.realPrice * item.conunt
                }, 0).toFixed(2)//toFixed保留小数点后两位
            },
            jisuan() {
                return this.$store.state.cartList.filter(item => item.chacked).length
            },
            imageAll() {
                // return !(this.$store.state.cartList.filter(item => !item.chacked).length)//性能不好
                if(this.$store.state.cartList.length === 0) return false;
                return !(this.$store.state.cartList.find(item => !item.chacked))
            }
        },
        methods: {
            imageAllClick() {
                // console.log(111)
                if(this.imageAll) {
                    this.$store.state.cartList.forEach(item => item.chacked = false)
                }else {
                    this.$store.state.cartList.forEach(item => item.chacked = true)
                }

            }
        }
    }
</script>

<style scoped>
    .cart-bottom-nav {
        height: 40px;
        background-color: #eee;
        line-height: 40px;
        display: flex;
    }
    .content {
        width: 75px;
        display: flex;
        align-items: center;
    }
    .chick {
        line-height: 18px;
        margin: 0 5px 0 10px;
    }
    .heji {
        flex: 1;
    }
    .jisuan {
        width: 90px;
        background-color: red;
        color: #fff;
        text-align: center;
    }
</style>