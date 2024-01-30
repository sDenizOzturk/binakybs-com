<template>
  <div class="menu">
    <ButtonB v-for="item in buttons" :key="item" :object="item" class="menuButton" />
  </div>
</template>

<script>
import ButtonB from "@/components/ui/ButtonB.vue";

export default {
  components: {
    ButtonB,
  },
  name: "TheHeader",
  data() {
    return {
      buttons: [
        { text: "Cihazlar ve Sistemler", target: "/cihazlar-sistemler" },
        { text: "Mobil Uygulamalar", target: "/mobil-uygulamalar" },
        { text: "Masaüstü Uygulamalar", target: "/masaustu-uygulamalar" },
        { text: "İletişim", target: "/iletisim" },
      ],
    };
  },
};
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  background: var(--color3_1);
}

.menuButton {
  font-size: 1rem;
}

@media screen and (orientation: portrait) {
  .menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin: 1vmin;
    gap: 0;
  }
}
@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    .menuButton {
      font-size: 0.7rem;
    }
  }
  @media (orientation: landscape) {
    .menuButton {
      font-size: 1.25rem;
    }
  }
}
</style>
