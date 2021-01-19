<template>
     <div>
         <h1>parent组件</h1>
         <div>{{val}}</div>
      <child1 :cmsg="pmsg" @sendcmsg="getval">
      </child1>
     </div>
</template>

<script>
import child1 from './child.vue'
// 引入child模板
export default {
    data(){
        return {
            pmsg:'父的数据',
            val:''
        }
    },
    // 创建组件
    components:{
        // 引入child组件
        child1
    },
    methods: {
        getval(inc){
            this.val = inc
        }
    },
}
</script>

<style>

</style>