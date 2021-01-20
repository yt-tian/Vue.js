<template>
  <div class="list" @click="fn">
         <div :class="{active:!flag}">
          <slot></slot><br/>
          <span>{{endmsg}}</span>
</div>
  </div>
</template>

<script>
export default {
  props: ["endmsg", "mark", "current"],
  computed:{
      flag(){
          if(this.mark==this.current){
              return true
          }
          return false
      }
  },
  methods: {
      fn(){
          this.$emit("getval",this.mark)
      }
  },
};
</script>

<style >
.list {
  list-style: none;
  line-height: 30px;
  background-color: pink;
  margin: 5px;
}
.active {
  background-color: palegreen;
}
</style>