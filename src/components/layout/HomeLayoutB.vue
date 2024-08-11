<template>
  <div class="layout">
    <div class="div_left">
      <img :src="imageUrl" alt="" />
    </div>
    <div class="div_right">
      <h1 v-show="object.h1" v-html="object.h1"></h1>
      <h2 v-show="object.h2" v-html="object.h2"></h2>
      <h3 v-show="object.h3" v-html="object.h3"></h3>
      <p v-for="item in object.p" :key="item" v-html="item"></p>
      <ButtonB class="button" :object="object.button" />
    </div>
  </div>
</template>

<script>
import ButtonB from "@/components/ui/ButtonB.vue";

export default {
  name: "HomeLayoutB",
  data() {
    return {
      rightWidth: this.object.rightWidth,
      leftWidth: this.object.leftWidth,
    };
  },
  props: {
    object: Object,
  },
  components: {
    ButtonB,
  },
  computed: {
    imageUrl() {
      return require("@/" + this.object.imageUrl);
    },
  },
};
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 20px;
}

.div_left {
  grid-area: 1 / 1;
  display: flex;
  justify-content: right;
  margin: 20px;
}
.div_right {
  grid-area: 1 / 2;
  vertical-align: middle;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  position: relative;
  width: v-bind(rightWidth + "%");
}

h1,
h2,
h3,
p {
  color: var(--color2);
  margin: 0;
  margin-left: 2rem;
}
h1 {
  font-size: 4rem;
  font-weight: 500;
}
h2 {
  font-size: 2rem;
  font-weight: 400;
}
h3 {
  font-size: 1.75rem;
  margin-top: 1.5rem;
  font-weight: 300;
}
p {
  font-size: 1.5rem;
  margin-top: 0.75rem;
  font-weight: 300;
  text-align: justify;
}
img {
  width: v-bind(leftWidth + "%");
  object-fit: scale-down;
}
.button {
  margin: 1rem;
  font-size: 1.75rem;
}
@media screen and (orientation: portrait) {
  .div_right,
  img {
    width: 100%;
  }
  .div_left {
    margin: 0;
  }
}
</style>
