<template>
  <div class="view">
    <div v-for="item in json" :key="item.id">
      <ProductLayoutA v-if="item.id === 'ProductLayoutA'" :object="item" />
    </div>
  </div>
</template>

<script>
import ProductLayoutA from "@/components/layout/ProductLayoutA.vue";

export default {
  name: "PrivacyPoliciesView",
  created() {
    try {
      this.json = require("@/jsons/privacy-policies.json");
    } catch {
      this.$router.push("/");
    }
  },
  data() {
    return {
      json: undefined,
    };
  },
  components: {
    ProductLayoutA,
  },
};
</script>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
