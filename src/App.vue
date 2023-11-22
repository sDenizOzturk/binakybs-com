<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
// eslint-disable-next-line
import Header from "@/components/layout/Header.vue";
// eslint-disable-next-line
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap");
:root {
  --font-family: "Oswald", sans-serif;
  --color0: rgba(0, 0, 0, 0);
  --color1: #fbf8f8;
  --color2: rgb(11, 52, 4);
  --color2_9: rgba(11, 52, 4, 0.9);
  --color3: rgb(218, 219, 158);
  --color3_1: rgba(218, 219, 158, 0.1);
  --color3_2: rgba(218, 219, 158, 0.2);
  --color3_4: rgba(218, 219, 158, 0.4);
}
html,
body {
  font-family: var(--font-family);
  background: var(--color1);
  margin: 0;
  padding: 0;
}
</style>
