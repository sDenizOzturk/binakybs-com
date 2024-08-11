<template>
  <footer class="footer">
    <div class="leftItem">
      <div v-for="object in jsonContactUs" :key="object">
        <div>
          <a v-for="item in object.linkImages" :key="item" :href="item.targetUrl" target="_blank">
            <img class="linkImage" :src="require('@/' + item.imageUrl)" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="centerItem"><p>© 2024 BINAK</p></div>
    <div class="rightItem">
      <button :class="languageEnActiveCss" @click="setLanguage('en')">En</button>
      <button :class="languageTrActiveCss" @click="setLanguage('tr')">Tr</button>
      <a href="/"> <img class="logo" :src="require('@/assets/logo.webp')" alt="" /></a>
    </div>
  </footer>
</template>

<script>
import _jsonContactUs from "@/jsons/contactUs.json";

export default {
  name: "TheFooter",
  data() {
    return {
      jsonContactUs: _jsonContactUs,
    };
  },
  methods: {
    setLanguage(language) {
      if (this.$route.params.language === language) {
        return;
      }

      this.$router.push(
        this.$route.path.replace(`/${this.$route.params.language}/`, `/${language}/`)
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  computed: {
    languageEnActiveCss() {
      if (this.$route.params.language === "en") {
        return "footer-button footer-button-active";
      }
      return "footer-button";
    },
    languageTrActiveCss() {
      if (this.$route.params.language === "tr") {
        return "footer-button footer-button-active";
      }
      return "footer-button";
    },
  },
};
</script>

<style scoped>
.footer {
  color: var(--color1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  background: var(--color2_9);
  font-size: 1rem;
}
.leftItem {
  text-align: left;
  margin: 0.8rem;
}
.centerItem p {
  text-align: center;
}
.rightItem {
  text-align: right;
  margin-right: 0.8rem;
  display: flex;
  justify-content: right;
  align-items: center;
}
.linkImage {
  height: 1.5rem;
  width: auto;
  margin: 0.4rem;
  filter: drop-shadow(var(--color3_3) 0.1vh 0.5vh 0.5vh);
}

p {
  color: var(--color3);
  margin: auto 0;
  filter: drop-shadow(var(--color3_3) 0.1vh 1vh 1vh);
}

.logo {
  height: 3rem;
  width: auto;
  margin: 0.6rem;
  margin-left: 1.5em;
  margin-right: 0.3rem;
  filter: drop-shadow(var(--color3_4) 0.1vh 1vh 1vh);
}

.footer-button {
  text-decoration: none;
  color: var(--color3);
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 0;
  background: 0;
  margin: 0 0.2rem;
  filter: drop-shadow(var(--color3_3) 0.1vh 0.5vh 0.5vh);
  font: inherit;
  font-size: inherit;
}

.footer-button:hover,
.footer-button-active {
  border: 1px solid var(--color3);
}

@media screen and (orientation: portrait) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
    font-size: 1.5rem;
  }
  .centerItem {
    display: none;
  }
  .logo {
    height: 5rem;
  }

  .linkImage {
    height: 3rem;
    width: auto;
    margin: 0.4rem;
    filter: drop-shadow(var(--color3_3) 0.1vh 0.5vh 0.5vh);
  }
}
</style>
