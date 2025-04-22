<template>
  <a
    v-if="url"
    :href="url ?? ''"
    target="_blank"
    class="text-wit-blue-600 dark:text-wit-blue-500 hover:underline"
  >
    {{ value ?? 'unknown' }}
  </a>
  <span v-else>
    {{ value }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: null
  },
  value: {
    type: [String, Number],
    required: true
  }
})
</script>
