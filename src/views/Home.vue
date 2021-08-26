<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      计数器
      {{ this.$store.state.count }}
      <el-button @click="increment" type="primary">+</el-button>
      <el-button @click="minus" type="success">-</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    minus() {
      this.$store.commit("minus");
    },
  },
};
</script>
