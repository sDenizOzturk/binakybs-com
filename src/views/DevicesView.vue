<template>
  <div class="home">
    <div v-for="item in json" :key="item.id">
      <ElementA v-if="item.id === 'ElementA-1'" :object="item" />
      <ElementB v-else-if="item.id === 'ElementB-1'" :object="item" />
      <ElementA v-if="item.id === 'ElementA-2'" :object="item" />
      <ElementC v-else-if="item.id === 'ElementC-1'" :object="item" />
    </div>
  </div>
</template>

<script>
import _json from "@/jsons/devices.json";
import ElementA from "@/components/layout/elements/ElementA.vue";
import ElementB from "@/components/layout/elements/ElementB.vue";
import ElementC from "@/components/layout/elements/ElementC.vue";

export default {
  name: "HomePage",
  created() {},
  data() {
    return {
      json: _json,
    };
  },
  props: {},
  methods: {},
  components: {
    ElementA,
    ElementB,
    ElementC,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
