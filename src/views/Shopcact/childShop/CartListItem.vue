<template>
    <div class="cart-list-item">
       <div class="list-img">
           <chick-button :isimage="product.chacked" @click.native="chackClick"></chick-button>
       </div>
       <div class="list-info">
            <img :src="product.image" />
            <div class="wenben">
                <div class="title">{{product.title}}</div>
                <div class="desc">{{product.desc}}</div>
                <div class="pice-contunt">
                    <div class="pice">￥{{product.realPrice}}</div>
                    <div class="contunt">x{{product.conunt}}</div>
                </div>

            </div>
       </div>
    </div>
</template>

<script>
    import ChickButton from "components/conent/chickButton/ChickButton";
    export default {
        name: "CartListItem",
        components: {ChickButton},
        props: {
            product: {
               type: Object,
               default: function () {
                    return {}
               }
            }
        },
        methods: {
            chackClick() {
                this.product.chacked = !this.product.chacked
            }
        }
    }
</script>

<style scoped>
    .cart-list-item {
        display: flex;
        padding: 10px 0;
        border: 1px solid #a3a3a5;
        border-top: 0;
        border-radius: 5px;
    }
    .list-img {
        margin: 35px 10px 30px;
    }
    .list-info {
        flex: 1;
        display: flex;
    }
    .list-info img {
        width: 80px;
        height: 100px;
        border-radius: 10px;
    }
    .list-info .wenben {
        flex: 1;
        padding: 10px;
    }
    .title, .desc {
        width: 200px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .title {
        font-size: 20px;
        font-weight: 400;
    }
    .desc {
        font-size: 13px;
        margin: 12px 0 17px;
    }
    .pice {
        font-size: 20px;
        color: #ff5777;
        float: left;
    }
    .contunt {
        margin-left: 150px;
        font-weight: 600;
        font-size: 20px;
    }
</style>