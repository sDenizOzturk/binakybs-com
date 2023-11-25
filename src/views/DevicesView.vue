<template>
  <div class="home">
    <div v-for="item in json" :key="item.id">
      <HomeLayoutA v-if="item.id === 'HomeLayoutA-1'" :object="item" />
      <HomeLayoutB v-else-if="item.id === 'HomeLayoutB-1'" :object="item" />
      <HomeLayoutA v-if="item.id === 'HomeLayoutA-2'" :object="item" />
      <HomeLayoutC v-else-if="item.id === 'HomeLayoutC-1'" :object="item" />
    </div>
  </div>
</template>

<script>
import _json from "@/jsons/devices.json";
import HomeLayoutA from "@/components/layout/HomeLayoutA.vue";
import HomeLayoutB from "@/components/layout/HomeLayoutB.vue";
import HomeLayoutC from "@/components/layout/HomeLayoutC.vue";

export default {
  name: "DevicesView",
  created() {},
  data() {
    return {
      json: _json,
    };
  },
  props: {},
  methods: {},
  components: {
    HomeLayoutA,
    HomeLayoutB,
    HomeLayoutC,
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
