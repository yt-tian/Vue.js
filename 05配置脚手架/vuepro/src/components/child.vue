<template>
  <div>
      <h1>child组件</h1>
      <button @click="fn()">点击传自身数据给父</button>
      <div>
        引入父的数据 : {{cmsg}}
      </div>
  </div>
</template>

<script>
export default {
   props:['cmsg'],
   data(){
       return{
           val:'子的数据'
       }
   },
   methods: {
       fn(){
           this.$emit("sendcmsg",this.val)
       }
   },
}
</script>

<style>

</style>