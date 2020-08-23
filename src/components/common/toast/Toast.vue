<template>
    <div class="toast" v-show="isShow">
        <div>
            {{message}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            message: {
                type: String,
                default: ''
            },
            isShow: {
                type: Boolean,
                default: false
            }
        },
        // data() {
        //     return {
        //         message: '',
        //         isShow: false
        //     }
        // },
        // methods: {
        //     show(message,duration) {
        //         // console.log(111)
        //         this.isShow = true
        //         // this.message = message
        //         console.log(this.message)
        //         // setTimeout(() => {
        //         //     this.isShow = false
        //         //     this.message= ''
        //         // },duration)
        //     }
        // }
    }
</script>

<style scoped>
    .toast {
        background: rgba(0,0,0,.75);
        color: #ffffff;
        padding: 10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50%);
        z-index: 999;
    }
</style>