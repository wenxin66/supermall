<template>
    <div class="pro-ge-ren-item">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ProGeRenItem"
    }
</script>

<style scoped>
    .box {
        width: 100%;
        display: flex;
        padding: 10px 10px 0;
    }
    .box img {
        width: 35px;
        height: 35px;
        margin: 0 5px;
    }
    .box span {
        flex: 1;
        color: #000;
        margin-top: 5px;
        padding: 5px 5px 15px;
        border-bottom: 1px solid rgba(100,100,100,.2);
    }
</style>