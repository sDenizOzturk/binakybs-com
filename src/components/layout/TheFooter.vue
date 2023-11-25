<template>
  <div class="footer">
    <div class="leftItem">
      <div v-for="object in jsonContactUs" :key="object">
        <div>
          <a v-for="item in object.linkImages" :key="item" :href="item.targetUrl" target="_blank">
            <img class="linkImage" :src="require('@/' + item.imageUrl)" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="centerItem"><p>© 2023 BINAK</p></div>
    <div class="rightItem">
      <img class="logo" :src="require('@/assets/logo.webp')" alt="" />
    </div>
  </div>
</template>
a
<script>
import _jsonContactUs from "@/jsons/contactUs.json";

export default {
  name: "TheFooter",
  data() {
    return {
      jsonContactUs: _jsonContactUs,
    };
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
}
.leftItem {
  text-align: left;
  margin: 2vmin;
}
.centerItem {
  text-align: center;
}
.rightItem {
  text-align: right;
  margin-right: 2vmin;
  display: flex;
  justify-content: right;
}
.linkImage {
  height: 4vmin;
  margin: 1vmin;
  filter: drop-shadow(var(--color3_3) 0.1vh 0.5vh 0.5vh);
}

p {
  color: var(--color3);
  font-size: 2.25vmin;
  margin: auto 0;
  filter: drop-shadow(var(--color3_3) 0.1vh 1vh 1vh);
}

.logo {
  height: 7vmin;
  margin: 0;
  margin-left: 1.5vmin;
  margin-right: 1vmin;
  filter: drop-shadow(var(--color3_4) 0.1vh 1vh 1vh);
}

@media screen and (orientation: portrait) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
  }
  .centerItem {
    display: none;
  }
}
</style>
