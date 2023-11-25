<template>
  <div class="page">
    <div class="div_left_image">
      <img :src="require('@/' + leftObject.imageUrl)" alt="" />
    </div>
    <div class="div_left_content">
      <SubHomeLayoutC :object="leftObject" />
    </div>
    <div class="div_center_image">
      <img :src="require('@/' + centerObject.imageUrl)" alt="" />
    </div>
    <div class="div_center_content">
      <SubHomeLayoutC :object="centerObject" :buttonCss="buttonCss" />
    </div>
    <div class="div_right_image">
      <img :src="require('@/' + rightObject.imageUrl)" alt="" />
    </div>
    <div class="div_right_content">
      <SubHomeLayoutC :object="rightObject" />
    </div>
  </div>
</template>

<script>
import SubHomeLayoutC from "./SubHomeLayoutC.vue";

export default {
  name: "HomeLayoutC",
  created() {},
  data() {
    return {
      leftObject: this.object.leftObject,
      centerObject: this.object.centerObject,
      rightObject: this.object.rightObject,
      imageWidth: this.object.imageWidth,
    };
  },
  props: {
    object: Object,
  },
  methods: {},
  components: {
    SubHomeLayoutC,
  },
};
</script>

<style scoped>
.page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 20px;
}
.div_left_image,
.div_center_image,
.div_right_image,
.div_left_content,
.div_center_content,
.div_right_content {
  display: flex;
  justify-content: center;
}
.div_left_image {
  grid-area: 1 / 1;
}
.div_center_image {
  grid-area: 1 / 2;
}
.div_right_image {
  grid-area: 1 / 3;
}
.div_left_content {
  grid-area: 2 / 1;
}
.div_center_content {
  grid-area: 2 / 2;
}
.div_right_content {
  grid-area: 2 / 3;
}
img {
  width: v-bind(imageWidth);
  object-fit: scale-down;
}
@media screen and (orientation: portrait) {
  .page {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .div_center_content,
  .div_center_image {
    background: var(--color3_4);
  }
  .div_left_image,
  .div_center_image,
  .div_right_image {
    padding-top: 3vmin;
  }
}
</style>
