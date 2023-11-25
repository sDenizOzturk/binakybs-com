<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="view">
    <div
      v-for="object in json"
      :key="object"
      class="background"
      :style="{ 'background-image': 'url(' + require('@/' + object.backgroundImageUrl) + ')' }"
    >
      <div class="wrapper">
        <div v-for="item in object.IBANs" :key="item">
          <p>
            {{ item.number }} <br />
            {{ item.bankName }} - {{ item.nameSurname }}
          </p>
        </div>
        <div>
          <a v-for="item in object.linkImages" :key="item" :href="item.targetUrl" target="_blank">
            <img class="linkImage" :src="require('@/' + item.imageUrl)" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _json from "@/jsons/contactUs.json";

export default {
  name: "ContactUsView",
  data() {
    return {
      json: _json,
    };
  },
};
</script>

<style scoped>
.view {
  height: 70vh;
  margin: 0;
  min-height: 79vh;
}
.background {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  background: var(--color3_2);
  margin-left: 25%;
  margin-right: auto;
  margin-top: auto;
  height: 100%;
}

.linkImage {
  height: 10vmin;
  margin: 2vmin;
}
p {
  color: var(--color1);
  font-size: 3vmin;
  font-weight: 500;
  text-align: right;
}
</style>
