<template>
  <Header />
  <Transition name="route">
    <router-view :key="$route.fullPath" mode="out-in" />
  </Transition>
  <Footer />
</template>

<script>
import Header from "@/components/layout/TheHeader.vue";
import Footer from "@/components/layout/TheFooter.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/*@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap");*/

@font-face {
  font-family: "Oswald";
  src: local("Oswald"), url("./fonts/Oswald-VariableFont_wght.ttf"), format("truetype");
}

:root {
  --font-family: "Oswald", sans-serif;
  --color0: rgba(0, 0, 0, 0);
  --color1: #fbf8f8;
  --color2: rgb(11, 52, 4);
  --color2_8: rgba(11, 52, 4, 0.8);
  --color2_9: rgba(11, 52, 4, 0.9);
  --color3: rgb(218, 219, 158);
  --color3_1: rgba(218, 219, 158, 0.1);
  --color3_2: rgba(218, 219, 158, 0.2);
  --color3_3: rgba(218, 219, 158, 0.3);
  --color3_4: rgba(218, 219, 158, 0.4);
}
html,
body {
  font-family: var(--font-family);
  background: var(--color1);
  color: var(--color2);
  margin: 0;
  padding: 0;
}

@media (orientation: portrait) {
  html,
  body {
    font-size: 2vw;
  }
}
@media (orientation: landscape) {
  html,
  body {
    font-size: 1vw;
  }
}

@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    :root {
      font-size: 2vw;
    }
  }
  @media (orientation: landscape) {
    :root {
      font-size: 2.5vh;
    }
  }
}

img {
  filter: drop-shadow(rgba(0, 0, 0, 0.7) 0.1vmin 1vmin 1vmin);
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-1vmin);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(1vmin);
}

.route-enter-active {
  transition: all 1s ease-out;
}

.route-leave-active {
  transition: all 0s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
