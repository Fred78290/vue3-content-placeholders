<template>
  <div :class="className">
    <div v-if="img" :class="`${className}__img`" />
    <div :class="`${className}__content`">
      <div :class="`${className}__title`" />
      <div :class="`${className}__subtitle`" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'content-placeholders-heading',
  data () {
    return {
      className: 'vue3-content-placeholders-heading',
    }
  },
  props: {
    img: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
