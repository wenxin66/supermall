<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="item in topImages">
            <img :src="item" alt=""/>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper";
    export default {
        name: "DeSwiper",
        components: {Swiper, SwiperItem},
        data() {
            return {

            }
        },
        props:{
            topImages:{
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .detail-swiper {
        height: 300px;
        overflow: hidden;
    }
</style>