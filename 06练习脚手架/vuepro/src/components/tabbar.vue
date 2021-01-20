<template>
  <div class="tabbar">
    <item title="首页" mark="nav1" :current="cuur" @sendmark="getval">
      <template v-slot:nomarlimg>
        <img src="../assets/img/1.png" alt="" class="img" />
      </template>
      <template v-slot:activeimg>
        <img src="../assets/img/6.png" alt="" class="img" />
      </template>
    </item>
    <item title="书影音" mark="nav2" :current="cuur" @sendmark="getval">
      <template v-slot:nomarlimg>
        <img src="../assets/img/2.png" alt="" class="img" />
      </template>
      <template v-slot:activeimg>
        <img src="../assets/img/7.png" alt="" class="img" />
      </template>
    </item>
    <item title="我的" mark="nav3" :current="cuur" @sendmark="getval">
      <template v-slot:nomarlimg>
        <img src="../assets/img/3.png" alt="" class="img" />
      </template>
      <template v-slot:activeimg>
        <img src="../assets/img/8.png" alt="" class="img" />
      </template>
    </item>
    <item title="商城" mark="nav4" :current="cuur" @sendmark="getval">
      <template v-slot:nomarlimg>
        <img src="../assets/img/4.png" alt="" class="img" />
      </template>
      <template v-slot:activeimg>
        <img src="../assets/img/9.png" alt="" class="img" />
      </template>
    </item>
    <item title="我的考拉" mark="nav5" :current="cuur" @sendmark="getval">
      <template v-slot:nomarlimg>
        <img src="../assets/img/5.png" alt="" class="img" @sendmark="getval" />
      </template>
      <template v-slot:activeimg>
        <img src="../assets/img/10.png" alt="" class="img" />
      </template>
    </item>
  </div>
</template>

<script>
import item from "./item.vue";
export default {
  components: {
    item,
  },
  data() {
    return {
      cuur: "",
    };
  },
  methods: {
    getval(val) {
      this.cuur = val;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.tabbar {
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
  width: 100%;
border-top: 1px solid gainsboro;
  justify-content: space-around;
}
.tabbar .img {
  width: 30px;
  height: 30px;
}
</style>