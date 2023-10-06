<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'content-placeholders',
  computed: {
    classObject () {
      return {
        'vue3-content-placeholders': true,
        'vue3-content-placeholders-is-rounded': this.rounded,
        'vue3-content-placeholders-is-centered': this.centered,
        'vue3-content-placeholders-is-animated': this.animated,
      }
    },
  },
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
