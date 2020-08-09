<template>
    <div class="tabuse">
        <div class="t_left"><slot name="tabuse-left"></slot></div>
        <div class="t_center"><slot name="tabuse-center"></slot></div>
        <div class="t_right"><slot name="tabuse-right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "tabuse"
    }
</script>

<style scoped>
    .tabuse {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
    }

    .t_left , .t_right {
        width: 60px;
    }

    .t_center {
        flex: 1;
    }
</style>