<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="svg" v-html="svg" />
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, default: '' },
  svg: {
    type: String,
    default:
      '<svg class="icon-size" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".8" d="M10.998 26.829v8.996L22 20.331 10.998 26.83Z" fill="#4576F3"/><path opacity=".6" d="M10.998 13.246 0 18.247l10.998 6.498 10.993-6.498-10.993-5.001Z" fill="#4576F3"/><path opacity=".45" d="m0 18.247 10.998 6.498V0L0 18.247Z" fill="#4576F3"/><path opacity=".8" d="M10.998 0v24.745l10.993-6.498L10.998 0Z" fill="#4576F3"/><path opacity=".45" d="m0 20.331 10.998 15.494v-8.996L0 20.33Z" fill="#4576F3"/></svg>'
  }
})
</script>

<style lang="scss">
.icon-size {
  width: 24px;
  height: 30px;
  transition: all 0.3s ease;
}
.fill {
  @apply fill-black-950 dark:fill-white-100;
}
.reverse-fill {
  @apply fill-white-50 dark:fill-black-950;
}
</style>
