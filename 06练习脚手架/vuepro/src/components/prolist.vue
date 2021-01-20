<template>
  <div>
         <h1>产品列表</h1>
         <ul>
             <li v-for="(item,index) in endmsg" :class="{active:item.active}" :key="index" @click="change(item,index)">
                 {{item.url}}
                 <div>{{item.name}}</div>
                 </li>
         </ul>
  </div>
</template>

<script>
export default {
      props:['endmsg'],
      data(){
          return{
              active:false
          }
      },
      methods: {
          change(item,index){
            //    console.log();
            //    item.active=!item.active
               this.endmsg.forEach(ele => {
                   console.log(ele);
                   ele.active=false                 
               });
               item.active = !item.active
            //    item[index].style= " background-color: palegreen;"
               console.log(index);

          }
      },
}
</script>

<style >
    li{
        list-style: none;
        line-height: 30px;
        background-color: pink;
        margin: 5px;
    }
    .active{
        background-color: palegreen;
    }
</style>