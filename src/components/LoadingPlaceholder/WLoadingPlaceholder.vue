<template>
  <div
    class="placeholder bg-gray-50 dark:bg-black-900 bg-opacity-60 bg-gradient-to-r from-gray-50 dark:from-black-800 shadow-sm shadow-gray-100 dark:shadow-black-700 bg-[length:200%_200%]"
  >
    &nbsp;
  </div>
  <span class="sr-only">Loading...</span>
</template>
<script setup>
defineProps({
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  borderRadius: {
    type: String,
    required: true
  }
})
</script>
<style scoped lang="scss">
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.placeholder {
  height: v-bind(height);
  width: v-bind(width);
  border-radius: v-bind(borderRadius);
  animation: bgAnimate 1.2s linear infinite;
}
</style>
