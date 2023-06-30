<template>
  <div>
    <ElementC v-for="item in json" :key="item" :object="item" />
  </div>
</template>

<script>
import _json from '@/jsons/mobileApps.json';
import ElementC from '@/components/elements/ElementC.vue';

export default {
  name: 'MobileAppsView',
  created() {

  },
  data() {
    return {
      json: _json,
    };
  },
  props: {
  },
  methods: {
  },
  components: {
    ElementC,
  },
};
</script>

<style scoped>

</style>
