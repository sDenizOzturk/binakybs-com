<template>
  <div class="wrapper">
    <HomeLayoutC v-for="item in json" :key="item" :object="item" />
  </div>
</template>

<script>
import _json from "@/jsons/desktopApps.json";
import HomeLayoutC from "@/components/layout/HomeLayoutC.vue";

export default {
  name: "DesktopAppsView",
  created() {},
  data() {
    return {
      json: _json,
    };
  },
  props: {},
  methods: {},
  components: {
    HomeLayoutC,
  },
};
</script>

<style scoped>
@media screen and (orientation: landscape) {
  .wrapper {
    min-height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
