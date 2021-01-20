<template>
    <div>
        <prolist :endmsg="list">
        </prolist>
    </div>
</template>

<script>
import prolist from "./prolist.vue"
export default {
    components:{
        prolist
    },
    data(){
        return {
            list:[
                {url:'www.tmall.com',name:'电视机1',active:false},
                {url:'www.jd.com',name:'电视机2',active:false},
                {url:'www.taobao.com',name:'电视机3',active:false},

                ]
        }
    } 
}
</script>

<style >

</style>