<template>
  <div :class="className">
    <div v-for="n in lines" :key="n" :class="`${className}__line`" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'content-placeholders-text',
  data () {
    return {
      className: 'vue3-content-placeholders-text',
    }
  },
  props: {
    lines: {
      type: Number,
      default: 4,
    },
  },
}
</script>
