<template>
    <div class="chick-button" :class="{'active':isimage}">
        <img src="~assets/imgs/cart/tick.svg"/>
    </div>
</template>

<script>
    export default {
        name: "chickButton",
        data() {
            return {

            }
        },
        props:{
          isimage: {
              type: Boolean,
              default: true
          }
        }
    }
</script>

<style scoped>
    .chick-button {
        width: 18px;
        height: 18px;
        background-color: #fff;
        border: 2px solid #a3a3a5;
        border-radius: 50%;
    }
    .active {
        background-color: #ff5777;
        border: 2px solid #ff5777;
    }
</style>