<template>
    <div>
         <h1>产品列表</h1>
        <prolist endmsg="电视机1" mark="li1" :current='list' @getval="vallist">
            <img src="../assets/1.jpg" alt="">
        </prolist>
        <prolist endmsg="电视机2" mark="li2" :current='list' @getval="vallist">
            <img src="../assets/2.jpg" alt="">
        </prolist>
        <prolist endmsg="电视机3" mark="li3" :current='list' @getval="vallist">
            <img src="../assets/3.jpg" alt="">
        </prolist>
    </div>
</template>

<script>
import prolist from "./prolist2.vue"
export default {
    components:{
        prolist
    },
    data(){
        return {
            list:"li1",
        }
    } ,
    methods: {
        vallist(val){
            this.list = val
        }
    },
}
</script>

<style >

</style>