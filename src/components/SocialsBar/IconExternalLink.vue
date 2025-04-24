<template>
  <a :aria-label="url" class="link" :href="url" target="_blank">
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>
