<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="text-wrapper">
    <h1 v-show="object.h1" v-html="object.h1"></h1>
    <h2 v-show="object.h2" v-html="object.h2"></h2>
    <h3 v-show="object.h3" v-html="object.h3"></h3>
    <p v-for="item in object.p" :key="item" v-html="item"></p>
    <ButtonB
      v-for="item in object.buttons"
      :key="item"
      v-show="true"
      class="button"
      :object="item"
    />
    <div class="linkImageDiv">
      <a v-for="item in object.linkImages" :key="item" :href="item.targetUrl" target="_blank">
        <img class="linkImage" :src="require('@/' + item.imageUrl)" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import ButtonB from "@/components/ui/ButtonB.vue";

export default {
  name: "SubHomeLayoutC",
  props: {
    object: Object,
  },
  components: {
    ButtonB,
  },
};
</script>

<style scoped>
.text-wrapper {
  display: grid;
  flex-direction: column;
  text-align: left;
  position: relative;
  margin: 1rem;
}
h1,
h2,
h3,
p {
  color: var(--color2);
  margin: 0;
}
h1 {
  font-size: 2.25rem;
  font-weight: 500;
}
h2 {
  font-size: 1.625rem;
  font-weight: 400;
}
h3 {
  font-size: 1.25rem;
  margin-top: 1rem;
  font-weight: 300;
}
p {
  font-size: 1rem;
  margin-top: 0.75rem;
  font-weight: 300;
  text-align: justify;
}
.button {
  font-size: 1.5rem;
  padding: 1.5rem;
  background: var(--color0);
  border: 1px solid var(--color2);
  margin-top: 0.75rem;
}
.linkImageDiv {
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.linkImage {
  height: 3rem;
  margin: 1rem;
  margin-left: 0;
}
@media screen and (orientation: portrait) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.25rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  p {
    font-size: 1.5rem;
  }
  .button {
    font-size: 2rem;
    padding: 1rem;
  }
  .linkImage {
    height: 7.5rem;
  }
}
</style>
