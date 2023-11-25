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
  top: 20vh;
}
h1,
h2,
h3 {
  color: var(--color1);
  margin: 0;
  margin-right: 2vmin;
}
h1 {
  font-size: 12vmin;
  font-weight: 500;
}
h2 {
  font-size: 4.5vmin;
  font-weight: 400;
}
h3 {
  font-size: 3.5vmin;
  margin-top: 3vmin;
  font-weight: 300;
}
@media screen and (orientation: portrait) {
  .layout {
    height: 60vmin;
  }
  .text-wrapper {
    top: 0;
  }
}
</style>
