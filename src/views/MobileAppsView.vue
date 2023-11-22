<template>
  <div class="wrapper">
    <ElementC v-for="item in json" :key="item" :object="item" />
  </div>
</template>

<script>
import _json from "@/jsons/mobileApps.json";
import ElementC from "@/components/layout/elements/ElementC.vue";

export default {
  name: "MobileAppsView",
  created() {},
  data() {
    return {
      json: _json,
    };
  },
  props: {},
  methods: {},
  components: {
    ElementC,
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
