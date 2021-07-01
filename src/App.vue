<template>
  <v-app>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import Verticalmenu from "./components/Verticalmenu";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({}),
  computed: {
  },
  created() {
  },
};
</script>
<style scoped>
@import "styles/global.css";
</style>
