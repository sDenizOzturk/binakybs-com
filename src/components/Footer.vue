<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="footer">
    <div class="leftItem">
      <div v-for="object in jsonContactUs" :key="object">
        <div >
          <a v-for="item in object.linkImages" :key="item"
            :href="item.targetUrl" target="_blank">
            <img class="linkImage" :src="require('@/'+item.imageUrl)" alt="" >
          </a>
      </div>
    </div>
    </div>
    <div class="centerItem">
      reserved (Center Item)
    </div>
    <div class="rightItem">
      BINAK 2023
    </div>
  </div>
</template>

<script>
import _jsonContactUs from '@/jsons/contactUs.json';

export default {
  name: 'FooterComponent',
  created() {

  },
  data() {
    return {
      jsonContactUs: _jsonContactUs,
    };
  },
  props: {
  },
  methods: {
  },
};
</script>

<style scoped>
.footer {
  background: var(--color2);
  color: var(--color1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
}
.leftItem {
  text-align: left;
  margin: 2vmin;
}
.centerItem {
  text-align: center ;
}
.rightItem {
  text-align: right;
  margin: 2vmin;
}
.linkImage {
  height: 5vmin;
  margin: 1vmin;
}
@media screen and (orientation:portrait) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
  }
  .centerItem {
    display: none;
  }
}
</style>
