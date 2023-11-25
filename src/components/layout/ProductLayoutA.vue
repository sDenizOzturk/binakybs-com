<template>
  <div class="layout">
    <div class="heading">
      <h1>{{ object.h1 }}</h1>
      <h2>
        <i>{{ object.h2 }}</i>
      </h2>
    </div>

    <div class="video-container" v-if="object.videoUrl">
      <iframe
        :src="object.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <div class="image" v-if="object.imageUrl"><img :src="imageUrl" alt="" />""</div>

    <div class="text-wrapper">
      <p v-for="item in object.p" :key="item" v-html="item"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductLayoutA",
  created() {
    window.scrollTo(0, 0);
  },
  props: {
    object: Object,
  },
  computed: {
    imageUrl() {
      return this.object && require("@/" + this.object.imageUrl);
    },
  },
};
</script>

<style scoped>
.layout {
  margin: 0;
}

img {
  width: 50%;
  display: block;
  margin: 2vh auto;
}
.text-wrapper {
  display: grid;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  width: 50%;
  margin: auto;
}

.heading {
  background: var(--color2_9);
  padding: 2vh 0;
  margin-top: 1vh;
  width: 50%;
  margin: auto;
  filter: drop-shadow(rgba(0, 0, 0, 0.7) 0.1vmin 1.5vmin 1.5vmin);
}

h1,
h2 {
  color: var(--color3);
  margin: 0 2vmin;
  text-align: center;
}
h1 {
  font-size: 5vh;
  font-weight: 500;
}
h2 {
  font-size: 2.5vh;
  font-weight: 400;
}
.video-container {
  width: 50%;
  margin: 2vh auto;
}
.video-container iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
p {
  margin-top: 0;
}

@media screen and (orientation: portrait) {
  .heading {
    width: 100%;
  }
  img,
  .video-container,
  .text-wrapper {
    width: 80%;
  }
}
</style>
