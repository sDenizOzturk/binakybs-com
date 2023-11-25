<template>
  <div class="view">
    <div v-for="item in json" :key="item.id">
      <ProductLayoutA v-if="item.id === 'ProductLayoutA'" :object="item" />
      <ProductLayoutB v-else-if="item.id === 'ProductLayoutB'" :object="item" />
      <ProductLayoutA v-else-if="item.id === 'ProductLayoutC'" :object="item" />
    </div>
  </div>
</template>

<script>
import ProductLayoutA from "@/components/layout/ProductLayoutA.vue";
import ProductLayoutB from "@/components/layout/ProductLayoutB.vue";

export default {
  name: "ProductsView",
  created() {
    const productName = this.$route.params.productName;
    try {
      this.json = require("@/jsons/products/" + productName + ".json");
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
    ProductLayoutB,
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
