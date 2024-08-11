<template>
  <header class="menu">
    <ButtonB v-for="item in buttons" :key="item" :object="item" class="menuButton" />
  </header>
</template>

<script>
import ButtonB from "@/components/ui/ButtonB.vue";

export default {
  components: {
    ButtonB,
  },
  name: "TheHeader",

  computed: {
    buttons() {
      if (this.$route.params.language === "tr") {
        return [
          { text: "Cihazlar ve Sistemler", target: "/tr/cihazlar-sistemler" },
          { text: "Mobil Uygulamalar", target: "/tr/mobil-uygulamalar" },
          { text: "Masaüstü Uygulamalar", target: "/tr/masaustu-uygulamalar" },
          { text: "İletişim", target: "/tr/iletisim" },
        ];
      } else {
        return [
          { text: "Devices and Systems", target: "/en/cihazlar-sistemler" },
          { text: "Mobile Applications", target: "/en/mobil-uygulamalar" },
          { text: "Desktop Applications", target: "/en/masaustu-uygulamalar" },
          { text: "Contact", target: "/en/iletisim" },
        ];
      }
    },
  },
};
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color3_1);
  border-bottom: 1px solid var(--color3_4);
}

.menuButton {
  font-size: 1rem;
  padding: 1.6rem 2rem;
}

.language-wrapper button:hover {
  color: green;
  border: 0;
  cursor: pointer;
}

@media screen and (orientation: portrait) {
  .menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    padding: 0.2rem;
    gap: 0;
  }
}
@media (pointer: none), (pointer: coarse) {
  @media (orientation: portrait) {
    .menuButton {
      font-size: 1.6rem;
      padding: 2.4rem 2rem;
    }
  }
  @media (orientation: landscape) {
    .menuButton {
      font-size: 1.25rem;
      padding: 2rem 2.5rem;
    }
  }
}
</style>
