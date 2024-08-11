<template>
  <div class="layout">
    <div
      :class="subElement.background ? 'background' : ''"
      v-for="subElement in object.subElements"
      :key="subElement"
    >
      <div v-if="subElement.singleImage" class="grid-layout">
        <img :src="require('@/' + subElement.imageUrl)" alt="" class="single-image" />
      </div>
      <div v-else class="grid-layout">
        <div class="image-wrapper" :class="subElement.imageOnLeft ? 'div_left' : 'div_right'">
          <img :src="require('@/' + subElement.imageUrl)" alt="" />
        </div>

        <div class="text-wrapper" :class="!subElement.imageOnLeft ? 'div_left' : 'div_right'">
          <p v-for="item in subElement.p" :key="item" v-html="item"></p>

          <ul>
            <li v-for="item in subElement.li" :key="item" v-html="item"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductLayoutA",
  props: {
    object: Object,
  },
};
</script>

<style scoped>
.layout {
  margin: auto;
}

.background {
  background: var(--color3_2);
}

img {
  width: 120%;
  object-fit: contain;
}
.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 75vw;
  margin: auto;
  font-size: 1rem;
}

.div_left {
  grid-area: 1 / 1;
}

.div_right {
  grid-area: 1 / 2;
}
.image-wrapper {
  display: flex;
  margin: 3vh;
}
.text-wrapper {
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  position: relative;
  margin: 3vh;
  justify-self: center;
  width: 80%;
  margin-left: 7.5vw;
}

ul {
  list-style: square;
}

p {
  margin-bottom: 0;
}

.single-image {
  width: 75vw;
  padding: 1rem;
}

@media screen and (orientation: portrait) {
  .grid-layout {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90vw;
  }

  img {
    width: 100%;
    margin: auto;
  }
  .image-wrapper {
    margin-bottom: 0;
    margin-right: 0;
  }
  .text-wrapper {
    margin: 0;
    width: 95%;
  }
}

@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    .text-wrapper {
      font-size: 2rem;
    }
  }
}
</style>
