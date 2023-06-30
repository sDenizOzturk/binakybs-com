<template>
  <div class="menu">
    <ButtonB v-for="item in buttons" :key="item"
      :object="item" :style="getStyle(item.target)"/>
  </div>
</template>

<script>
import ButtonB from './widgets/ButtonB.vue';

export default {
  components: {
    ButtonB,
  },
  name: 'HeaderComponent',
  created() {

  },
  data() {
    return {
      buttons: [
        { text: 'Cihazlar ve Sistemler', target: '/cihazlar-sistemler' },
        { text: 'Mobil Uygulamalar', target: '/mobil-uygulamalar' },
        { text: 'Masaüstü Uygulamalar', target: '/masaustu-uygulamalar' },
        { text: 'İletişim', target: '/iletisim' },
      ],
    };
  },
  props: {

  },
  methods: {
    getStyle(path) {
      return this.$route.path === path ? 'background: var(--color3);' : '';
    },
  },
};
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px
}
@media screen and (orientation:portrait) {
  .menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin: 1vmin;
    gap: 0;
  }
}
</style>
