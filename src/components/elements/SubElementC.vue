<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="text-wrapper">
    <h1 v-show="object.h1" v-html="object.h1"></h1>
    <h2 v-show="object.h2" v-html="object.h2"></h2>
    <h3 v-show="object.h3" v-html="object.h3"></h3>
    <p v-for="item in object.p" :key="item" v-html="item"></p>
    <ButtonB v-for="item in object.buttons" :key="item"
      v-show="true" class="button" :object="item" />
    <div class="linkImageDiv">
      <a v-for="item in object.linkImages" :key="item"
        :href="item.targetUrl" target="_blank">
        <img class="linkImage" :src="require('@/'+item.imageUrl)" alt="" >
      </a>
    </div>
  </div>
</template>

<script>
import ButtonB from '../widgets/ButtonB.vue';

export default {
  name: 'SubElementC',
  created() {

  },
  data() {
    return {
    };
  },
  props: {
    object: Object,
  },
  methods: {

  },
  components: {
    ButtonB,
  },
};
</script>

<style scoped>
.text-wrapper{
  display: grid;
  flex-direction: column;
  text-align: left;
  position: relative;
  margin: 2vmin;
}
h1, h2, h3, p {
  color: var(--color2);
  margin: 0;
}
h1 {
  font-size: 4.5vmin;
  font-weight: 500;
}
h2 {
  font-size: 3.25vmin;
  font-weight: 400;
}
h3 {
  font-size: 2.5vmin;
  margin-top: 2vmin;
  font-weight: 300;
}
p{
  font-size: 2vmin;
  margin-top: 1.5vmin;
  font-weight: 300;
  text-align: justify;
}
.button {
  font-size: 3vmin;
  padding: 2vmin;
  background: var(--color1);
  border: 1px solid var(--color2);
  margin-top: 1.5vmin;
}
.linkImageDiv {
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.linkImage {
  height: 10vmin;
  margin: 2vmin;
  margin-left: 0;
}
@media screen and (orientation:portrait) {
  h1 {
  font-size: 7vmin;
  }
  h2 {
    font-size: 4.5vmin;
  }
  h3 {
    font-size: 3.5vmin;
  }
  p{
    font-size: 3vmin;
  }
  .button {
    font-size: 4vmin;
    padding: 2vmin;
  }
  .linkImage {
    height: 15vmin;
  }
}
</style>
