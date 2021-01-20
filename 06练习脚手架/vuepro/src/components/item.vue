<template>
    <div class="item" @click="fn">
        <template  v-if="!flag">
        <slot name='nomarlimg'></slot>
        </template>
        <template v-if="flag">
        <slot name='activeimg'></slot>
        </template>
         <br/>
        <span :class="{color:flag}">{{title}}</span>
    </div>
</template>

<script>
export default {
   props:['item',"title","mark","current"],
   computed:{
       flag(){
           if(this.mark==this.current){
               return true
           }else{
               return false
           }
       }
   },
   methods: {
       fn(){
           this.$emit("sendmark",this.mark)
       }
   },
}
</script>

<style>
.color{
    color: red;
}
</style>