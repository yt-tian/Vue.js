<template>
    <div>
        <div class="fl">
        <img :src='item' v-for="(item,index) in inmsg " alt="" :key="index"> 
        </div>
    </div>
</template>

<script>
export default {
    //   接收父的数据
    props:["inmsg"],
    data(){
        return {
           cmsg:'子的数据',
            }
    }
}
</script>

<style scoped>
   .fl{
       width: 1000px;
       height: 400px;
       display: flex;
       margin: 0 auto;
       justify-content: space-around;
       flex-wrap: wrap;
   }
   .fl img{
       /* float: left; */
       width: 220px;
       padding: 10px;
       border: 1px solid #ccc;
       margin-bottom: 10px;
       border-radius: 10px;
   }
</style>