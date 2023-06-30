<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');
:root {
  --font-family: 'Oswald', sans-serif;
  --color1: #fbf8f8;
  --color2: rgb(11,52,4);
  --color3: rgb(218,219,158);
  --color3_2: rgba(218,219,158,0.2);
}
html,body {
  font-family: var(--font-family);
  background: var(--color1);
  margin:0;
  padding:0;
}
</style>
