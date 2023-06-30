<template>
  <button class="button" @click="$router.push(object.target);">
    {{ object.text }}
  </button>
</template>
<script>
export default {
  name: 'ButtonA',
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
  --b: 1px;   /* border thickness */
  --s: .0em; /* size of the corner */

  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color1);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color1) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-family: var(--font-family);
  font-size: 4vmin;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:hover,
.button:focus-visible{
  --_p: 0px;
  outline-color: var(--color1);
  outline-offset: .05em;
}

.button:active {
  background: var(--color1);
  color: var(--color2);
}

</style>
