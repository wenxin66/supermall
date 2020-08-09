<template>
    <div class="hometuijian">
        <div v-for="item in recommends" class="hometuijian-item">
            <a href="item.link">
                <img :src="item.image"/>
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hometuijian",
        props:{
            recommends:{
                type:Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
  .hometuijian {
      display: flex;
      text-align: center;
      padding: 10px 0 20px;
      font-size: 12px;
      border-bottom: 10px solid #eeeeee;
      width: 100%;

  }
  .hometuijian-item {
      flex: 1;

  }
  .hometuijian-item img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
  }
</style>