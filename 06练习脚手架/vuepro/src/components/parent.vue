<template>
      <div>
          <div>
          </div>
          <!-- 使用子组件 调用组件-->
          <child1 :inmsg="pmsg"></child1>
      </div>
</template>

<script>
// 使用子组件 步骤1 ：导入child组件
import child1 from './child.vue'
export default {
    //  使用子组件 步骤2 ：注册子组件
    components:{
        child1
        },
        data(){
            return{
                pmsg:[require("../assets/1.jpg"),
                    require("../assets/2.jpg"),
                    require("../assets/3.jpg"),
                   require( "../assets/4.jpg"),
                    require("../assets/5.jpg"),
                    require("../assets/6.jpg"),
                    require("../assets/7.png"),
                    require("../assets/8.png"),
                ],
            }
        }
}
</script>
   
<style>

</style>