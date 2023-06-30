<template>
  <button class="button" @click="$router.push(object.target);">
    <span class="text">
      {{ object.text }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'ButtonB',
  created() {

  },
  data() {
    return {
    };
  },
  props: {
    object: Object,
  },
  methods: {

  },
};
</script>

<style scoped>

.button {
  appearance: none;
  background: rgba(218,219,158,0);
  border-width: 0;
  box-sizing: border-box;
  color: var(--color2);
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-family);
  font-size: 2.25vmin;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),
  background-color 100ms cubic-bezier(.694, 0, 0.335, 1),
  color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button:before {
  animation: opacityFallbackOut .5s step-end forwards;
  backface-visibility: hidden;
  background: var(--color3_2);
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1),
  -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
  width: 100%;
}

.button:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button:after {
  background-color: var(--color1);
}

.button span {
  z-index: 1;
  position: relative;
}
</style>
