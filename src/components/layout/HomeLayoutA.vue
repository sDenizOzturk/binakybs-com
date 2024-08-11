<template>
  <div class="layout">
    <div class="background" :style="imageStyle">
      <div class="text-wrapper">
        <h1 v-html="object.h1"></h1>
        <h2 v-html="object.h2"></h2>
        <h3 v-html="object.h3"></h3>
        <ButtonA style="margin: 2vmin" :object="object.button" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonA from "@/components/ui/ButtonA.vue";

export default {
  components: { ButtonA },
  name: "HomeLayoutA",
  props: {
    object: Object,
  },
  computed: {
    imageStyle() {
      return { "background-image": "url(" + require("@/" + this.object.imageUrl) + ")" };
    },
  },
};
</script>

<style scoped>
.background {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.layout {
  height: 90vh;
  margin: 0;
}
.text-wrapper {
  display: grid;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  position: relative;
  top: 80%;
  -ms-transform: translateY(-80%);
  transform: translateY(-80%);
}
h1,
h2,
h3 {
  color: var(--color1);
  margin: 0;
  margin-right: 2rem;
}
h1 {
  font-size: 6rem;
  font-weight: 500;
}
h2 {
  font-size: 2.25rem;
  font-weight: 400;
}
h3 {
  font-size: 1.75rem;
  margin-top: 1.5rem;
  font-weight: 300;
}
@media screen and (orientation: portrait) {
  .layout {
    height: 60vmin;
  }
}
</style>
