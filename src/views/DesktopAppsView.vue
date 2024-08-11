<template>
  <div class="view">
    <HomeLayoutC v-for="item in json" :key="item" :object="item" />
  </div>
</template>

<script>
import _json from "@/jsons/desktopApps.json";
import HomeLayoutC from "@/components/layout/HomeLayoutC.vue";

export default {
  name: "DesktopAppsView",
  data() {
    return {
      json: _json[this.$route.params.language],
    };
  },
  components: {
    HomeLayoutC,
  },
};
</script>

<style scoped>
@media screen and (orientation: landscape) {
  .view {
    min-height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
